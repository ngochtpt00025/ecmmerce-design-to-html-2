document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const headerMenu = document.querySelector('.header-menu');

    mobileMenuBtn.addEventListener('click', function() {
        headerMenu.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!headerMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            headerMenu.classList.remove('active');
        }
    });
});
