// Responsive
$(document).on('ready', function () {
    var $slides = $('#slides');
    var $initPos = $slides.offset();
    $slides.slideOn($slides = $slides, $initPos = $initPos);
});

/**
 * Modifie la classe de l'icône hamburger pour (dé)plier la navigation.
 */
(function( $ ){
    $.fn.slideOn = function(slides, initPos) {
        $(this).find('img').on('click touch', function () {
            var $goalPos = $('img.focus').offset();
            if( $(this).hasClass('chevron') ){
                slides.find('img').removeClass('focus');
                slides.offset({top: initPos.top});
                slides.find('img.second').addClass('focus');
            }else if(!$(this).hasClass('focus')){
                slides.find('img').removeClass('focus');
                var $clickedPos = $(this).offset();
                var shift = $goalPos.top - $clickedPos.top;
                var newPos = slides.offset().top + shift;
                slides.offset({top: newPos});
                $(this).addClass('focus');
            }
        });
        return this;
    };
})( jQuery );
