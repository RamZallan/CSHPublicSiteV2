$(document).ready(() => {
    if ($('nav').length) {
        $(window).scroll(() => {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 150) {
                $('nav').first().addClass('condensed');
            } else {
                $('nav').first().removeClass('condensed');
            }
        });
    }
});
