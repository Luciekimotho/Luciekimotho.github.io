$.material.init()

$(document).ready(function(){
    $window = $(window);
    $('section[data-type="background"]').each(function(){
        var $scroll = $(this);

        $(window).scroll(function(){
            var yPos = -($window.scrollTop()/scroll.data('speed'));
            var coords = '50%' + yPos + 'px';
        });
    });
});


//nav

$(document).ready(function(){

  $(".navbar").hide();

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    });
  });

});
