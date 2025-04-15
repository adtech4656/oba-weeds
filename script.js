
    // Full Shopping Cart Logic
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".product-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top center+=100"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.1
        });
    });

    // Modern Search & Filter
    const searchHandler = debounce((term) => {
        // Filter logic
    }, 300);

    // Age Verification
    function verifyAge(confirmed) {
        if(confirmed) {
            sessionStorage.setItem('ageVerified', 'true');
            gsap.to("#ageVerification", {opacity: 0, onComplete: () => {
                document.getElementById('ageVerification').remove();
            }});
        } else {
            window.location.href = 'https://www.google.co.uk/';
        }
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        if(!sessionStorage.getItem('ageVerified')) {
            gsap.from("#ageVerification", {opacity: 0, y: 50, duration: 0.8});
        }
        
        // Cart initialization
        updateCart();
    });

    // Full Order Tracking System
    class OrderTracker {
        constructor() {
            this.orders = JSON.parse(localStorage.getItem('orders')) || {};
        }
        
        // Tracking methods
    }

    // Utility functions
    function debounce(func, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }


// Price calculation function
function calculateTotalPrice(basePrice) {
    return (basePrice * 1.1).toFixed(2);
}