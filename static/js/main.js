// Track currently expanded post
let currentlyExpanded = null;

// Tag dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('tagDropdownBtn');
    const dropdown = dropdownBtn?.closest('.tag-dropdown');
    
    if (dropdownBtn && dropdown) {
        dropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });
    }
});

function toggleSummary(postId) {
    const summaryElement = document.getElementById('summary-' + postId);
    
    if (!summaryElement) return;
    
    // If clicking on the same post that's already expanded, close it
    if (currentlyExpanded === postId) {
        summaryElement.classList.remove('expanded');
        currentlyExpanded = null;
        return;
    }
    
    // Close previously expanded summary
    if (currentlyExpanded) {
        const previousSummary = document.getElementById('summary-' + currentlyExpanded);
        if (previousSummary) {
            previousSummary.classList.remove('expanded');
        }
    }
    
    // Expand the clicked summary
    summaryElement.classList.add('expanded');
    currentlyExpanded = postId;
    
    // Smooth scroll to make the expanded content visible
    setTimeout(() => {
        const postCard = summaryElement.closest('.post-card');
        if (postCard) {
            const rect = postCard.getBoundingClientRect();
            const isPartiallyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
            
            if (!isPartiallyVisible) {
                postCard.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }
        }
    }, 100);
}

// Close expanded summary and dropdown when clicking outside
document.addEventListener('click', function(event) {
    // Close tag dropdown
    const dropdown = document.querySelector('.tag-dropdown');
    if (dropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
    }
    
    // Close expanded post summary
    if (currentlyExpanded) {
        const clickedPostCard = event.target.closest('.post-card');
        if (!clickedPostCard) {
            const currentSummary = document.getElementById('summary-' + currentlyExpanded);
            if (currentSummary) {
                currentSummary.classList.remove('expanded');
            }
            currentlyExpanded = null;
        }
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Close dropdown
        const dropdown = document.querySelector('.tag-dropdown');
        if (dropdown) {
            dropdown.classList.remove('open');
        }
        
        // Close expanded summary
        if (currentlyExpanded) {
            const currentSummary = document.getElementById('summary-' + currentlyExpanded);
            if (currentSummary) {
                currentSummary.classList.remove('expanded');
            }
            currentlyExpanded = null;
        }
    }
});
