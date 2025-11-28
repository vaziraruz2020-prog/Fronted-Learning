$(function () {

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });



    var mixer = mixitup('.directions__list')

    $('.directions__filter-btn').on('click', function name(params) {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })



    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1100,
                
                settings: {
                    slidesToShow: 3,
                } ,
            },
            {
                breakpoint: 800,
                
                settings: {
                    slidesToShow: 2,
                } ,
            },
            {
                breakpoint: 650,
                
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                    dots: true,
                    appendDots: $('.team__slider-dots'),
                } ,
            },
        ]
    })
    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })



    $('.testimonials__slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        draggable: false,
        waitForAnimate: false,
        appendDots: $('.testimonials__slider-dots'),
    })
    $('.testimonials__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })


    // $('.program__acc-link').on('click', function (e) {
    //     e.preventDefault()
    //     $(this).toggleClass('program__acc-link--active')
    //     $(this).children('.program__acc-text').slideToggle()
    // })

    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
        } else {
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--folow')
        } else {
            $('.burger').removeClass('burger--folow')
        }
    }, 0);

    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass("active");
        // $('.burger').removeClass('active');
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
    })
    $('.overlay').on('click', function () {
        $('.burger').removeClass('active');
    });
})
