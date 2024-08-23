document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");

    const sections = document.querySelectorAll('.intro, .tutorial-list, .contact-form');

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if(sectionPosition < screenPosition) {
                section.classList.add('fadeInUp');
            }
        });
    });
});
