// Generate or retrieve visitor ID
function getVisitorId() {
    let visitorId = localStorage.getItem('visitorId');
    if (!visitorId) {
        visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substring(2, 11);
        localStorage.setItem('visitorId', visitorId);
    }
    return visitorId;
}

// Update visitor count
async function updateVisitorCount() {
    const countElement = document.getElementById('visitor-count');
    
    if (!countElement) {
        console.warn('Element with id "visitor-count" not found');
        return;
    }

    try {
        const visitorId = getVisitorId();
        
        // No key needed since it's anonymous
        const FUNCTION_URL = 'https://zchresume-api.azurewebsites.net/api/visitorcounter'; 
        const response = await fetch(`${FUNCTION_URL}?visitorId=${encodeURIComponent(visitorId)}`);
        
        if (response.ok) {
            const data = await response.json();
            console.log('Visitor count received:', data);
            countElement.textContent = data.count;
        } else {
            throw new Error(`HTTP ${response.status}`);
        }
    } catch (error) {
        console.error('Error updating visitor count:', error);
        countElement.textContent = 'Error';
    }
}

// Call on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateVisitorCount);
} else {
    updateVisitorCount();
}