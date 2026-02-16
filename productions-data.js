/**
 * PRODUCTIONS — Single source of truth for productions page, homepage cards, and topbar dropdown.
 * TO ADD: Add object below, copy template. Topbar updates on all pages automatically.
 */
const PRODUCTIONS = [
    {
        id: 'dont-make-me-laugh',
        title: "Don't Make Me Laugh",
        description: "Binghamton's own sketch comedy show. New sketches every week featuring original content created by FPS members.",
        image: 'production-pictures/DontMakeMeLaugh.jpeg',
        meta: '2025 • Comedy',
        infoLabel: 'Production Info',
        infoItems: [
            { label: 'Genre', value: 'Sketch Comedy' },
            { label: 'Format', value: 'YouTube Channel' },
            { label: 'Runtime', value: '5-10 minutes' },
            { label: 'Status', value: 'Active Production' }
        ],
        featuredVideoLabel: 'Featured Video',
        featuredVideo: { id: 'D3OymOWtd1Q', title: "Under Where - A DMML (Civil War) Mini" },
        ctaLink: 'https://www.youtube.com/@DontMakeMeLaugh-Bing',
        ctaText: 'Watch on YouTube',
        ctaClass: ''
    },
    {
        id: 'peak-cinema',
        title: 'Peak Cinema',
        description: "FPS's official podcast, hosted by our in-house film experts Tony and Austin. Deep dives on film history, craft, and culture.",
        image: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        meta: '2025 • Podcast',
        infoLabel: 'Podcast Info',
        infoItems: [
            { label: 'Showrunner', value: 'Nick Friedlander'},
            { label: 'Genre', value: 'Film Discussion' },
            { label: 'Format', value: 'Audio Podcast' },
            { label: 'Runtime', value: '45-60 minutes' },
            { label: 'Hosts', value: 'Tony & Alex' }
        ],
        featuredVideoLabel: 'Featured Episode',
        featuredVideo: { id: 'ZYsAFefpq-w', title: "Can't Stop These Radical Dudes | Peak Cinema Podcast" },
        ctaLink: 'https://open.spotify.com/episode/7mIuzhVc9lInBwr5zNOIC0?si=d3b3890a339c465f',
        ctaText: 'Listen on Spotify',
        ctaClass: ''
    },
    // ---- TEMPLATE: copy block below to add a new production ----
    {
         id: 'laundry-day',              // URL slug (lowercase, hyphens)
         title: 'Laundry Day',            // Display name
         description: 'Short description.',
         image: 'production-pictures/poster.jpg',  // Homepage card image
         meta: '2026 • Short Film',              // Homepage card subtitle
         infoLabel: 'Production Info',      // or "Podcast Info"
         infoItems: [
             { label: 'Showrunner', value: 'Alex Rodriguez' },
             { label: 'Genre', value: 'Short Film' },
             { label: 'Format', value: 'YouTube' }
         ],
         featuredVideoLabel: ' ',    // or "Featured Episode", "Trailer", etc.
         featuredVideo: { id: 'YOUTUBE_VIDEO_ID', title: 'Video Title' },
         ctaLink: 'https://...',
         ctaText: 'Join The Production',
         ctaClass: ''
    } 
    // ---- TEMPLATE: copy block below to add a new production ----
    // {
    //     id: 'my-production',              // URL slug (lowercase, hyphens)
    //     title: 'My Production',            // Display name
    //     description: 'Short description.',
    //     image: 'production-pictures/poster.jpg',  // Homepage card image
    //     meta: '2025 • Genre',              // Homepage card subtitle
    //     infoLabel: 'Production Info',      // or "Podcast Info"
    //     infoItems: [
    //         { label: 'Genre', value: 'Comedy' },
    //         { label: 'Format', value: 'YouTube' }
    //     ],
    //     featuredVideoLabel: 'Featured Video',    // or "Featured Episode", "Trailer", etc.
    //     featuredVideo: { id: 'YOUTUBE_VIDEO_ID', title: 'Video Title' },
    //     ctaLink: 'https://...',
    //     ctaText: 'Watch on YouTube',
    //     ctaClass: ''
    //}
];
