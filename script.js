$('#menu-btn').click(function(){
        $('nav .navigation ul').addClass('active')
});
$('#menu-close').click(function(){
        $('nav .navigation ul').removeClass('active')
});

const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
const navigation = document.querySelector('.navigation ul');

// Open menu
menuBtn.addEventListener('click', () => {
    navigation.style.right = "0";
});

// Close menu
menuClose.addEventListener('click', () => {
    navigation.style.right = "-220px";
});



// Scroll Animation Handler
const animateElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });

    // Observe all elements with animate class
    document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
    });
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateElements);