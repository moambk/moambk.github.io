// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active nav link update on scroll
function updateActiveSection() {
    const scrollY = window.pageYOffset;

    this.sections = document.querySelectorAll('section');
    this.navLinks = document.querySelectorAll('.header__link');

    this.sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            this.navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(`.header__link[href="./#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}