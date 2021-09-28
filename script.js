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

// Scroll
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false
});

sr.reveal(`#aboutme`,{origin: 'left', delay: 200});
sr.reveal(`#aboutme-para`,{origin: 'right', delay: 200});