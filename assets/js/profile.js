// Portfolio page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Filter gallery items
    function filterGallery(category) {
        galleryItems.forEach(item => {
            if (category === 'all' || item.classList.contains(category)) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter gallery
            const category = this.getAttribute('data-filter');
            filterGallery(category);
        });
    });
    
    // Smooth scroll to case studies when clicking "View Project"
    const viewProjectButtons = document.querySelectorAll('.view-project-btn');
    
    viewProjectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate counters
    function animateCounters() {
        const counters = document.querySelectorAll('.counter-number');
        const speed = 200; // Lower is faster
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = Math.ceil(target / speed);
            
            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(() => animateCounters(), 1);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Start counter animation when element is in viewport
    const resultsSection = document.querySelector('.results-counter');
    
    if (resultsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(resultsSection);
    }
    
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });
});