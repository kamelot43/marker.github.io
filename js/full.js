$(document).ready(function() {
  $('.catalog__lnk').click(function(event) {
    var clickId = $(this).attr('href');
    event.preventDefault();
    $('.overlay').fadeIn(400,

      function() {

        $(clickId)
          .css('display', 'flex')
          .animate({
            opacity: 1,
            top: '50%'
          }, 200);

      });

  });

  $('.catalog__close, .overlay').click(function() {
    $('.catalog__inner')
      .animate({
          opacity: 0,
          top: '45%'
        }, 200,
        function() {
          $(this).css('display', 'none');
          $('.overlay').fadeOut(400);
        }
      );
  });
});
