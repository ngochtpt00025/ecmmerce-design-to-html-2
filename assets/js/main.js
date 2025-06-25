document.addEventListener('DOMContentLoaded', function () {
    //header js
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const headerMenu = document.querySelector('.header-menu');

    mobileMenuBtn.addEventListener('click', function () {
        headerMenu.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        if (!headerMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            headerMenu.classList.remove('active');
        }
    });

    //slider flickity
    var elem = document.querySelector('.carousel');
    var flkty = new Flickity(elem, {
        autoPlay: 3000,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: true,
    });

    var flkty = new Flickity('.product-list', {
        cellAlign: 'left',
        contain: true,
        groupCells: true,
        pageDots: true,
        wrapAround: true,
        prevNextButtons: false,
    });
    var flkty = new Flickity('.feature-items-list', {
        cellAlign: 'left',
        contain: true,
        groupCells: true,
        pageDots: true,
        wrapAround: true,
        prevNextButtons: true,
    });
    // tooltip js
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});
