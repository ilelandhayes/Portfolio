// Scroll
jQuery(document).ready(function($) {
    $('#section05').on('click', function(e) {
        e.preventDefault();
        const target = this.hash,
            $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function() {
            window.location.hash = target;
        });
    });
});