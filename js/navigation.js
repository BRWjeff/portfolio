// Navigation between pages
let currentPage = 'landing';

// Get base path from current location (e.g., '/portfolio' for GitHub Pages)
function getBasePath() {
    const path = window.location.pathname;
    // Check if we're in a subdirectory (GitHub Pages project site)
    if (path.includes('/portfolio')) {
        return '/portfolio';
    }
    return '';
}

function navigateTo(page) {
    // Hide all pages
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('projects-page').style.display = 'none';
    document.getElementById('contact-page').style.display = 'none';

    // Show selected page
    const pageElement = document.getElementById(`${page}-page`);
    if (pageElement) {
        pageElement.style.display = 'flex';
        currentPage = page;

        // Add fade-in animation
        pageElement.classList.remove('fade-in');
        void pageElement.offsetWidth; // Trigger reflow
        pageElement.classList.add('fade-in');
    }

    // Update URL without reload
    if (history.pushState) {
        const basePath = getBasePath();
        const newUrl = page === 'landing' ? basePath + '/' : basePath + '/' + page;
        history.pushState({ page }, '', newUrl);
    }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page) {
        navigateTo(event.state.page);
    } else {
        navigateTo('landing');
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Handle GitHub Pages SPA redirect from 404.html
    var urlParams = new URLSearchParams(window.location.search);
    var redirectPath = urlParams.get('p');
    
    if (redirectPath) {
        // Clean up the URL
        var cleanUrl = window.location.origin + window.location.pathname.replace(/\/$/, '') + redirectPath;
        window.history.replaceState(null, null, cleanUrl);
    }
    
    // Check URL path to determine which page to show
    const path = window.location.pathname;
    if (path.includes('projects')) {
        navigateTo('projects');
    } else if (path.includes('contact')) {
        navigateTo('contact');
    } else {
        navigateTo('landing');
    }
});
