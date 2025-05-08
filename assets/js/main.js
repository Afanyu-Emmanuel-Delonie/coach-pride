// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });


    /// pre loader
    document.addEventListener("DOMContentLoaded", function() {
        // Quotes array
        const quotes = [
            { text: "Success is not final; failure is not fatal.", author: "Winston Churchill" },
            { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
            { text: "The best investment is in yourself.", author: "Coach Pride" },
            { text: "Stay committed to your decisions, but stay flexible in your approach.", author: "Tony Robbins" },
            { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
            { text: "Discipline is choosing what you want most over what you want now.", author: "Abe" }
        ];
        
        // Select a random quote
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        
        // Update the quote text and author
        document.querySelector(".quote-text").textContent = randomQuote.text;
        document.querySelector(".quote-author").textContent = `— ${randomQuote.author}`;
        
        // Handle preloader fadeout
        window.addEventListener("load", function() {
            const preloader = document.querySelector(".preloader");
            
            // Add class for transition effect
            setTimeout(() => {
                preloader.classList.add("fade-out");
                preloader.style.opacity = "0";
            }, 2000);
            
            // Hide preloader after transition
            setTimeout(() => {
                preloader.style.display = "none";
            }, 3000);
        });
    });


    // Theme Toggle
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

    // Theme toggle event listener
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
            
            // Transform hamburger to X
            const lines = this.querySelectorAll('.line');
            if (this.classList.contains('active')) {
                lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                
                // Reset hamburger
                const lines = hamburger.querySelectorAll('.line');
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });
    });

    // Testimonial Slider
    const testimonialSlider = document.getElementById('testimonialSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    
    if (testimonialSlider && prevBtn && nextBtn) {
        let currentSlide = 0;
        const slides = testimonialSlider.querySelectorAll('.testimonial-slide');
        const maxSlides = slides.length;
        
        // Hide all slides except the first one
        for (let i = 1; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        
        // Next button click
        nextBtn.addEventListener('click', function() {
            slides[currentSlide].style.display = 'none';
            currentSlide = (currentSlide + 1) % maxSlides;
            slides[currentSlide].style.display = 'block';
            updateDots();
        });
        
        // Previous button click
        prevBtn.addEventListener('click', function() {
            slides[currentSlide].style.display = 'none';
            currentSlide = (currentSlide - 1 + maxSlides) % maxSlides;
            slides[currentSlide].style.display = 'block';
            updateDots();
        });
        
        // Dot indicators
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                slides[currentSlide].style.display = 'none';
                currentSlide = index;
                slides[currentSlide].style.display = 'block';
                updateDots();
            });
        });
        
        // Update active dot
        function updateDots() {
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        // Auto slide every 5 seconds
        setInterval(function() {
            if (document.hasFocus()) {
                nextBtn.click();
            }
        }, 10000);
    }

// Simple Tip of the Day Fix
window.onload = function() {
    // Get elements
    const tipBox = document.getElementById('tipBox');
    const closeTip = document.getElementById('closeTip');
    const dailyTip = document.getElementById('dailyTip');
    
    // Array of tips
    const tips = [
        "Your personal brand is your most valuable asset. Invest in it daily.",
        "Consistency is key to building a recognizable brand.",
        "Your personal story is your most powerful branding asset.",
        "The first step to transforming your brand is reaching out for expert guidance.",
        "Authenticity attracts your ideal audience and repels those who aren't a good fit.",
        "Your visual identity should reflect your personality and values.",
        "WhatsApp TV is one of the most underutilized platforms for brand building.",
        "Strong relationships are the foundation of a successful personal brand.",
        "Your brand is not what you say it is, it's what others say it is.",
        "The most successful personal brands solve specific problems for specific people."
    ];
    
    // Get today's date and use it to select a tip
    const today = new Date();
    const tipIndex = today.getDate() % tips.length;
    
    // Update tip text - make sure it gets updated
    console.log("Setting tip to:", tips[tipIndex]);
    dailyTip.innerText = tips[tipIndex];
    
    // Hide tip initially
    tipBox.style.display = 'none';
    
    // Show tip after delay
    setTimeout(function() {
        tipBox.style.display = 'block';
    }, 300);
    
    // Close tip
    closeTip.addEventListener('click', function() {
        tipBox.style.display = 'none';
    });
};
  

    // Delayed appearance of WhatsApp button
    const whatsappBtn = document.querySelector('.floating-whatsapp');
    if (whatsappBtn) {
        whatsappBtn.style.opacity = '0';
        whatsappBtn.style.transform = 'scale(0.5)';
        whatsappBtn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(function() {
            whatsappBtn.style.opacity = '1';
            whatsappBtn.style.transform = 'scale(1)';
        }, 2000);
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', function() {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        otherAnswer.style.maxHeight = null;
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
                const answer = item.querySelector('.faq-answer');
                
                if (item.classList.contains('active')) {
                    answer.style.display = 'block';
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = null;
                    setTimeout(() => {
                        answer.style.display = 'none';
                    }, 300);
                }
            });
        });
        
        // Open first FAQ item by default
        if (faqItems[0]) {
            faqItems[0].classList.add('active');
            const firstAnswer = faqItems[0].querySelector('.faq-answer');
            firstAnswer.style.display = 'block';
        }
    }

    // Simple Chatbot
    const chatbotMessages = document.getElementById('chatbotMessages');
    const userMessage = document.getElementById('userMessage');
    const sendMessage = document.getElementById('sendMessage');
    const suggestionBtns = document.querySelectorAll('.suggestion-btn');

    if (chatbotMessages && userMessage && sendMessage) {
        // Predefined responses
        const responses = {
            "what services do you offer": "I offer five main services: Graphic Design (training, design, and branding), WhatsApp TV creation and monetization, Social Media Account Boosting, Affiliate Marketing, and Relationship Therapy. You can learn more about each on the Services page.",
            "how much does coaching cost": "My coaching packages start at 5000 XAF for the Starter package, 7500 XAF for the Professional package (most popular), and 1200 XAF for the Elite package. Each includes different levels of support and services. Check the Services page for detailed pricing.",
            "how do i join whatsapp tv": "To join my WhatsApp TV, simply send a message to my WhatsApp number (+237 6 71 55 81 69) with the text 'Join WhatsApp TV'. You'll receive a welcome message and be added to the broadcast list for daily content and opportunities.",
            "default": "Thanks for your message! For specific questions, it's best to contact Abe directly via WhatsApp or email. Would you like me to help you schedule a consultation?"
        };

        // Function to add message to chat
        function addMessage(text, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = isUser ? 'chat-message user' : 'chat-message bot';

            messageDiv.innerHTML = `
                <div class="chat-avatar">
                    <i class="fas fa-${isUser ? 'user' : 'user'}"></i>
                </div>
                <div class="chat-bubble">
                    <p>${text}</p>
                </div>
            `;

            chatbotMessages.appendChild(messageDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        // Function to get response
        function getResponse(message) {
            message = message.toLowerCase().trim();

            // Special case for "yes"
            if (message === "yes" || message.includes("yes")) {
                return `Great! I've informed Coach Pride you're coming from me, Smadey 🤖. You can reach out to him directly on WhatsApp for more clarification: 
                <a href="https://wa.me/237671558169?text=Hi%20Coach%20Pride,%20Smadey%20sent%20me%20from%20the%20website.%20I%20need%20more%20clarification%20on%20a%20service.%20My%20name%20is%20---." target="_blank" style="color: #007bff; text-decoration: underline;">
                    Click here to message Coach Pride
                </a> or send him an email at: <a href="mailto:coachpride@example.com?subject=Consultation%20Request&body=Hi%20Coach%20Pride,%20Smadey%20sent%20me%20from%20the%20website.%20I%20need%20more%20clarification%20on%20a%20service.%20My%20name%20is%20---.">coachpride@example.com</a>`;
            }

            // Check for matching responses
            for (const key in responses) {
                if (message.includes(key)) {
                    return responses[key];
                }
            }

            // Default response
            return responses.default;
        }

        // Send message function
        function sendUserMessage() {
            const message = userMessage.value.trim();

            if (message) {
                addMessage(message, true);
                userMessage.value = '';

                // Simulate typing delay
                setTimeout(() => {
                    const response = getResponse(message);
                    addMessage(response);
                }, 1000);
            }
        }

        // Event listeners
        sendMessage.addEventListener('click', sendUserMessage);

        userMessage.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendUserMessage();
            }
        });

        // Suggestion buttons
        suggestionBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const message = this.getAttribute('data-message');
                userMessage.value = message;
                sendUserMessage();
            });
        });
    }

    // Form Animation
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
    
    if (formInputs.length > 0) {
        formInputs.forEach(input => {
            // Check if input has value on page load
            if (input.value) {
                const label = input.parentElement.querySelector('label');
                if (label) {
                    label.style.top = '-0.5rem';
                    label.style.fontSize = '0.8rem';
                    label.style.color = 'var(--primary-color)';
                }
            }
            
            // Add event listeners for focus and blur
            input.addEventListener('focus', function() {
                const label = this.parentElement.querySelector('label');
                if (label) {
                    label.style.top = '-0.5rem';
                    label.style.fontSize = '0.8rem';
                    label.style.color = 'var(--primary-color)';
                }
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    const label = this.parentElement.querySelector('label');
                    if (label) {
                        label.style.top = '0.75rem';
                        label.style.fontSize = '1rem';
                        label.style.color = 'var(--text-light)';
                    }
                }
            });
        });
    }

    // Form Submission (Demo)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = {};
            
            for (const [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Show success message
                const formContainer = this.parentElement;
                formContainer.innerHTML = `
                    <div class="success-message" style="text-align: center; padding: 2rem;">
                        <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--success-color); margin-bottom: 1rem;"></i>
                        <h3>Message Sent Successfully!</h3>
                        <p>Thank you for reaching out. Abe will get back to you within 24 hours.</p>
                    </div>
                `;
                
                // Scroll to success message
                formContainer.scrollIntoView({ behavior: 'smooth' });
            }, 2000);
        });
    }

    // Animated text reveal for hero section
    const animateText = () => {
        const heroHeading = document.querySelector('.animated-heading');
        const heroSubheading = document.querySelector('.animated-subheading');
        
        if (heroHeading && heroSubheading) {
            heroHeading.style.opacity = '1';
            heroHeading.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                heroSubheading.style.opacity = '1';
                heroSubheading.style.transform = 'translateY(0)';
            }, 300);
        }
    };
    
    // Run text animation after a short delay
    setTimeout(animateText, 500);
});


//// whatsapp contact
function sendToWhatsApp() {
    const name = prompt("Hi! What's your name?");
    if (!name) return;

    const message = `Hello Coach Pride! I found your contact on your website and wanted to reach out. My name is ${name}, and I'm interested in learning more about your coaching services.`;
    const url = `https://wa.me/250671558169?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
