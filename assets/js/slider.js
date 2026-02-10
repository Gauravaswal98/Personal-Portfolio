$(document).ready(function () {

    const $carousel = $('.custom-carousel');

    $carousel.owlCarousel({
    autoWidth: true,
    loop: true,
    center: true,
    dots: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 600,
    responsive: {
        0: { autoWidth: false, items: 1 },
        768: { autoWidth: true }
    }
});


    /* FIRST ACTIVE (on load) */
    $carousel.on('initialized.owl.carousel', function (event) {
        $(event.target)
            .find('.owl-item.center .item')
            .addClass('active');
    });

    /* AUTO ACTIVE ON SLIDE CHANGE */
    $carousel.on('translated.owl.carousel', function (event) {
        $('.custom-carousel .item').removeClass('active');
        $(event.target)
            .find('.owl-item.center .item')
            .addClass('active');
    });

    /* MANUAL CLICK */
    $carousel.on('click', '.item', function () {
        const index = $(this).parent().index();
        $carousel.trigger('to.owl.carousel', [index, 600, true]);
    });

});
