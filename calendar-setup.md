# Google Calendar API Setup Guide

## Overview
Your FPS website now has dynamic Google Calendar integration! The events section will automatically pull events from your Google Calendar instead of using hardcoded events.

## Current Status
✅ **Calendar API JavaScript created** (`calendar-api.js`)
✅ **HTML updated** to use dynamic events
✅ **Fallback system** in place for when API is not configured

## Next Steps to Complete Setup

### 1. Get Google Calendar API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Calendar API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Calendar API"
   - Click "Enable"

4. Create API credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the API key

### 2. Configure the API Key

Open `calendar-api.js` and replace the empty `apiKey` with your actual key:

```javascript
this.apiKey = 'YOUR_GOOGLE_CALENDAR_API_KEY_HERE';
```

### 3. Make Calendar Public (if not already)

Your calendar is already public (based on the existing embed), but if you need to make it public:

1. Go to [Google Calendar](https://calendar.google.com/)
2. Find your FPS calendar
3. Click the three dots > "Settings and sharing"
4. Under "Access permissions", check "Make available to public"

## How It Works

### With API Key (Recommended)
- Fetches real events from your Google Calendar
- Shows up to 10 upcoming events
- Automatically updates when you add/remove events
- Handles time zones correctly

### Without API Key (Fallback)
- Shows sample events (Weekly Meeting, Film Screening, etc.)
- Still functional but not dynamic
- Good for testing the layout

## Features

✅ **Dynamic Event Loading** - Events update automatically
✅ **Responsive Design** - Works on all devices  
✅ **Error Handling** - Graceful fallback if API fails
✅ **Time Formatting** - Proper time display for all-day and timed events
✅ **Google Calendar Links** - Direct links to view events
✅ **Loading States** - Shows spinner while loading

## Testing

1. **With API Key**: Events will load from your actual Google Calendar
2. **Without API Key**: You'll see fallback events for testing

## Troubleshooting

### Events Not Loading?
- Check browser console for errors
- Verify API key is correct
- Ensure calendar is public
- Check that events exist in your calendar

### API Quota Exceeded?
- Google Calendar API has daily limits
- Consider caching events or using the embed as fallback

## Calendar ID
Your calendar ID is already configured:
`c_5bf01e11b75b1af71bae99429a7c9bcf81279ea873030f5d6add82eddf3e71c4@group.calendar.google.com`

## Support
The system is designed to be robust - if the API fails, it will automatically show fallback events so your website never breaks.

