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

sr.reveal(`#title`,{origin: 'top', delay: 300});
sr.reveal(`#title-1`,{origin: 'top', delay: 800});
sr.reveal(`#title-2`,{origin: 'top', delay: 1300});
sr.reveal(`#aboutme`,{origin: 'left', delay: 200});
sr.reveal(`#aboutme-para`,{origin: 'right', delay: 250});
sr.reveal(`.skill-name`,{origin: 'bottom', delay: 400});
sr.reveal(`.icon-skill`,{origin: 'top', delay: 400});
sr.reveal(`.skill-name-p`,{origin: 'left', delay: 500});
sr.reveal(`.list-title`,{origin: 'right', delay: 500});
sr.reveal(`.skill-details`,{origin: 'bottom', delay: 500});
sr.reveal(`h1`,{origin: 'top', delay: 500});


// Light and Dark mode
// function toggle_light_mode() {
//     var app = document.getElementsByTagName("BODY")[0];
//     if (localStorage.lightMode == "dark") {
//         localStorage.lightMode = "light";
//         app.setAttribute("light-mode", "light");
//     } else {
//         localStorage.lightMode = "dark";
//         app.setAttribute("light-mode", "dark");
//     }
// }

// window.addEventListener(
//     "storage",
//     function () {
//         if (localStorage.lightMode == "dark") {
//             app.setAttribute("light-mode", "dark");
//         } else {
//             app.setAttribute("light-mode", "light");
//         }
//     },
//     false
// );