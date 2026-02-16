// Crew Board Data Management
// This file handles the data structure for the Find Your Crew job board

// Project data structure:
// {
//   id: string (unique identifier),
//   title: string,
//   logline: string,
//   shootDates: string,
//   showrunner: string,
//   contactName: string,
//   contactEmail: string,
//   contactPhone: string (optional),
//   roles: Array<{ name: string, filled: boolean }>,
//   isFPSOfficial: boolean,
//   isVerified: boolean (admin verification for official FPS projects),
//   postedDate: string (ISO date string)
// }

// Initialize empty array if not already defined
if (typeof CREW_BOARD_PROJECTS === 'undefined') {
    window.CREW_BOARD_PROJECTS = [];
}

// Example projects for demonstration (can be removed in production)
// Uncomment to add sample data:

window.CREW_BOARD_PROJECTS = [
    {
        id: '1',
        title: 'The Midnight Hour',
        logline: 'A psychological thriller about a student who discovers their roommate is not who they claim to be.',
        shootDates: 'March 15-20, 2025',
        showrunner: 'Jane Doe',
        contactName: 'Jane Doe',
        contactEmail: 'jdoe1@binghamton.edu',
        contactPhone: '(607) 555-0123',
        roles: [
            { name: 'Cinematographer', filled: false },
            { name: 'Sound Designer', filled: false },
            { name: 'Editor', filled: false },
            { name: 'PA', filled: true }
        ],
        isFPSOfficial: true,
        isVerified: true,
        postedDate: new Date('2025-02-01').toISOString()
    },
    {
        id: '2',
        title: 'Campus Stories',
        logline: 'A documentary series exploring the lives of international students at Binghamton.',
        shootDates: 'April 1-10, 2025',
        showrunner: 'John Smith',
        contactName: 'John Smith',
        contactEmail: 'jsmith2@binghamton.edu',
        roles: [
            { name: 'Director', filled: false },
            { name: 'Producer', filled: false },
            { name: 'Editor', filled: false }
        ],
        isFPSOfficial: false,
        isVerified: false,
        postedDate: new Date('2025-02-02').toISOString()
    }
];
