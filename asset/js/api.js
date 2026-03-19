// asset/js/api.js

// 1. The Live Backend URL (from your chat)
const API_BASE_URL = "https://accesstrvlbd-apiv2.onrender.com";

// 2. A helper to get the "Passport" (Token) we talked about
function getAuthToken() {
    return localStorage.getItem('accessToken');
}

// 3. A smart fetch function that automatically adds the token if we have it
async function apiFetch(endpoint, options = {}) {
    const token = getAuthToken();
    
    // Set up default headers
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers // merge with any custom headers
    };

    // If we are logged in, add the Authorization badge [cite: 26]
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
        ...options,
        headers: headers
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    // If the token is expired (401 error), kick them out
    if (response.status === 401) {
        localStorage.removeItem('accessToken');
        window.location.href = 'sign-in.html';
    }

    return response;
}