// Google Calendar API Integration for FPS Website
// This script fetches events from Google Calendar and displays them dynamically

class CalendarAPI {
    constructor() {
        // Your Google Calendar ID (extracted from the existing embed)
        this.calendarId = 'c_5bf01e11b75b1af71bae99429a7c9bcf81279ea873030f5d6add82eddf3e71c4@group.calendar.google.com';
        this.apiKey = 'AIzaSyBxpiTwTM5Bu6zyIIFGNtTeZ5I9p_njpqQ'; // Temporary: will be moved to Cloudflare Pages secret
        this.baseUrl = 'https://www.googleapis.com/calendar/v3/calendars';
        this.eventsContainer = null;
    }

    // Initialize the calendar API
    async init() {
        this.eventsContainer = document.querySelector('.events-grid');
        if (!this.eventsContainer) {
            console.error('Events container not found');
            return;
        }

        // Check if API key is configured
        if (!this.apiKey) {
            console.warn('Google Calendar API key not configured. Using fallback events.');
            this.showFallbackEvents();
            return;
        }

        try {
            await this.loadEvents();
        } catch (error) {
            console.error('Error loading calendar events:', error);
            this.showFallbackEvents();
        }
    }

    // Fetch API key from secure endpoint
    async fetchApiKey() {
        try {
            const response = await fetch('/api/calendar-key');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.apiKey = data.apiKey;
        } catch (error) {
            console.error('Error fetching API key:', error);
            throw error;
        }
    }

    // Load events from Google Calendar
    async loadEvents() {
        const now = new Date();
        const maxDate = new Date();
        maxDate.setMonth(now.getMonth() + 3); // Get events for next 3 months

        const url = `${this.baseUrl}/${this.calendarId}/events?` +
            `key=${this.apiKey}&` +
            `timeMin=${now.toISOString()}&` +
            `timeMax=${maxDate.toISOString()}&` +
            `singleEvents=true&` +
            `orderBy=startTime&` +
            `maxResults=10`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        this.displayEvents(data.items || []);
    }

    // Display events in the grid
    displayEvents(events) {
        // Clear existing events
        this.eventsContainer.innerHTML = '';

        // Always show exactly 3 events
        const eventsToShow = this.prepareEvents(events, 3);

        eventsToShow.forEach(event => {
            const eventCard = this.createEventCard(event);
            this.eventsContainer.appendChild(eventCard);
        });
    }

    // Prepare events to always show exactly 3 events
    prepareEvents(events, requiredCount = 3) {
        const eventsToShow = [...events];
        
        // If we don't have enough events, add empty placeholder events
        while (eventsToShow.length < requiredCount) {
            const emptyEvent = this.createEmptyEvent(eventsToShow.length);
            eventsToShow.push(emptyEvent);
        }
        
        // If we have too many events, take only the first requiredCount
        return eventsToShow.slice(0, requiredCount);
    }

    // Create an empty placeholder event
    createEmptyEvent(index = 0) {
        return {
            summary: 'Event Coming Soon',
            description: 'Check back soon for upcoming events and meetings!',
            start: { dateTime: null },
            end: { dateTime: null },
            htmlLink: '#',
            isEmpty: true
        };
    }

    // Create an event card element
    createEventCard(event) {
        const card = document.createElement('div');
        card.className = 'event-card';

        // Handle empty placeholder events differently
        if (event.isEmpty) {
            card.innerHTML = `
                <div class="event-date" style="background-color: #333; color: #888;">
                    <span class="month">TBD</span>
                    <span class="day">?</span>
                </div>
                <div class="event-details">
                    <h3 style="color: #888;">${event.summary}</h3>
                    <p style="color: #666;">${event.description}</p>
                    <span class="event-time" style="color: #666;">Date TBD</span>
                    <div class="event-actions">
                        <span style="color: #666; font-style: italic;">Coming Soon</span>
                    </div>
                </div>
            `;
        } else {
            const startDate = new Date(event.start.dateTime || event.start.date);
            const endDate = new Date(event.end.dateTime || event.end.date);
            
            // Format date in Eastern Time (GMT-4 EDT / GMT-5 EST)
            const month = startDate.toLocaleDateString('en-US', { 
                month: 'short',
                timeZone: 'America/New_York'
            }).toUpperCase();
            const day = startDate.toLocaleDateString('en-US', { 
                day: 'numeric',
                timeZone: 'America/New_York'
            });
            const time = this.formatEventTime(startDate, endDate);

            card.innerHTML = `
                <div class="event-date">
                    <span class="month">${month}</span>
                    <span class="day">${day}</span>
                </div>
                <div class="event-details">
                    <h3>${event.summary || 'Untitled Event'}</h3>
                    <p>${event.description || 'No description available.'}</p>
                    <span class="event-time">${time}</span>
                    <div class="event-actions">
                        <a href="${event.htmlLink}" target="_blank" class="add-to-calendar-btn">
                            View in Google Calendar
                        </a>
                    </div>
                </div>
            `;
        }

        return card;
    }

    // Format event time display
    formatEventTime(startDate, endDate) {
        // Format times directly in Eastern Time
        const startTime = startDate.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true,
            timeZone: 'America/New_York'
        });
        
        const endTime = endDate.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true,
            timeZone: 'America/New_York'
        });

        // Check if it's an all-day event (both at midnight)
        if (startTime === '12:00 AM' && endTime === '12:00 AM') {
            return 'All Day';
        }

        // Check if it's the same day
        const startDateET = startDate.toLocaleDateString('en-US', { timeZone: 'America/New_York' });
        const endDateET = endDate.toLocaleDateString('en-US', { timeZone: 'America/New_York' });
        
        if (startDateET === endDateET) {
            return `${startTime} - ${endTime}`;
        } else {
            // Multi-day event
            const startDateStr = startDate.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                timeZone: 'America/New_York'
            });
            const endDateStr = endDate.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                timeZone: 'America/New_York'
            });
            
            return `${startDateStr} - ${endDateStr}`;
        }
    }

    // Show fallback events when API is not available
    showFallbackEvents() {
        // Create placeholder events for fallback
        const fallbackEvents = [
            this.createEmptyEvent(0),
            this.createEmptyEvent(1),
            this.createEmptyEvent(2)
        ];

        this.displayEvents(fallbackEvents);
    }

}

// Initialize the calendar when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const calendar = new CalendarAPI();
    calendar.init();
});

// Export for potential use in other scripts
window.CalendarAPI = CalendarAPI;
