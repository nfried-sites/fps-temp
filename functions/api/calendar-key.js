// Cloudflare Pages Function to securely serve the Google Calendar API key
// This file should be placed in the /functions/api/ directory for Cloudflare Pages

export async function onRequest(context) {
    // Get the API key from Cloudflare Pages environment variables
    const apiKey = context.env.GOOGLE_CALENDAR_API_KEY;
    
    if (!apiKey) {
        return new Response(JSON.stringify({ error: 'API key not configured' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        });
    }
    
    return new Response(JSON.stringify({ apiKey }), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}

