(function($) {


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('#mobile-menu').meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "768",
  });

  // data - background - img
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

    

})(jQuery);

