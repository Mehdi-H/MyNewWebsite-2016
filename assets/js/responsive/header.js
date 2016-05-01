// Responsive
$(document).on('ready', function () {
    var $header = $('header');
    $header.responsiveHeader();
});

(function( $ ){
    $.fn.responsiveHeader = function() {
        $(this).find('.mobile-nav-hamburger').on('click touch', function () {
            $(this).toggleClass('is-open is-close');
        });
        return this;
    };
})( jQuery );
