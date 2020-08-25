
$(window).on('load', function() {
   $("#status").fadeOut();
    $("#pre-loader").delay(150).fadeOut();
});

$("#agency-container").owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause: true,
    nav:true,
    items: 5,
    dots:false,
    smartSpeed:700,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
        0: {
            items: 2
        },
        592: {
            items: 3
        },
        768: {
            items: 5
        }
        
        
    }
});