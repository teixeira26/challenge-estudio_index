$(document).ready(function(){
    $('.sliderInfo').slick({
        infinite:true,
        fade:true,
        cssEase:'linear',
        autoplay:true,
        autoplaySpeed:2000,
        arrows:true,
    });
  
    $('.marcas').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
})