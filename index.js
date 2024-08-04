const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Function to check if a section is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add 'show' class to sections in viewport
    function showSections() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('show');
            }
        });
    }

    // Event listener for navbar clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Smooth scroll to the section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            // Add 'show' class to the target section
            targetSection.classList.add('show');
        });
    });

    // Show sections when scrolling
    window.addEventListener('scroll', showSections);

    // Initial check to show sections already in viewport
    showSections();
});
