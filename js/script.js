// WOW
new WOW().init();

// Count up
$('.counter').counterUp({
    'time': 3000,
    'delay': 10
});

// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
})

// Swiper
var testimonialThumbs = new Swiper(".testimonial__thumbs", {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    freeMode: true,
    autoplay: true,
    loop: true,
    speed: 3000
});
var testimonialContent = new Swiper(".testimonial__comment", {
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    speed: 3000,
    thumbs: {
        swiper: testimonialThumbs
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

// LIGHT  GALLERY
lightGallery(document.getElementById("animated-thumbnails"), {
    selector: ".lightimg",
    plugins: [lgZoom, lgThumbnail, lgAutoplay, lgFullscreen, lgShare],
    alignThumbnails: "left",
    loop: true,
    allowMediaOverlap: true,
    toggleThumb: true,
    showZoomInOutIcons: true,
    actualSize: false,
    exThumbImage: "data-exthumbimage"
});