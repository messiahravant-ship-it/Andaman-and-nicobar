// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle active class on answer
            answer.classList.toggle('active');
            
            // Change icon from plus to times and vice versa
            if (answer.classList.contains('active')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-plus');
            }
            
            // Close other open FAQ items
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    const otherIcon = otherQuestion.querySelector('i');
                    
                    otherAnswer.classList.remove('active');
                    otherIcon.classList.remove('fa-times');
                    otherIcon.classList.add('fa-plus');
                }
            });
        });
    });

    // Email form validation
    const emailForms = document.querySelectorAll('.email-form, .email-form-bottom');
    
    emailForms.forEach(form => {
        const emailInput = form.querySelector('.email-input');
        const getStartedBtn = form.querySelector('.get-started-btn');
        
        getStartedBtn.addEventListener('click', function() {
            const email = emailInput.value;
            
            if (validateEmail(email)) {
                alert('Thank you! Redirecting to signup...');
                // In a real implementation, this would redirect to signup page
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
                emailInput.focus();
            }
        });
        
        // Also allow Enter key to submit
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                getStartedBtn.click();
            }
        });
    });
    
    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Header background on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)';
        } else {
            header.style.background = 'transparent';
        }
    });

    // Language selector functionality
    const languageSelectors = document.querySelectorAll('.language-selector select');
    
    languageSelectors.forEach(selector => {
        selector.addEventListener('change', function() {
            // In a real implementation, this would change the site language
            console.log('Language changed to:', this.value);
        });
    });

    // Sign In button functionality
    const signInBtn = document.querySelector('.signin-btn');
    
    signInBtn.addEventListener('click', function() {
        alert('Redirecting to sign in page...');
        // In real implementation: window.location.href = '/login';
    });

    // Console welcome message
    console.log('🎬 Netflix Clone Loaded Successfully!');
    console.log('Features:');
    console.log('- Responsive Netflix India homepage clone');
    console.log('- Working FAQ accordion');
    console.log('- Email validation');
    console.log('- Scroll effects');
    console.log('- Mobile-friendly design');
});

// Additional interactive features
function initNetflixFeatures() {
    // Add loading animation
    const loadingDelay = setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Add hover effects for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Initialize when page loads
window.onload = initNetflixFeatures;