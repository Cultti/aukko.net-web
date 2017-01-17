require('jquery');

$(document).ready(() => {
    setTimeout(() => {
        $('#header').addClass('loaded');

        setTimeout(() => {
            $('#content').addClass('loaded');

            let timeout = 300;
            $('#content h2, #content p').each((i, elem) => {
                showElemTimeout(elem, timeout * i);
            });
        }, 2000)
    }, 500);
});

function showElemTimeout(elem, timeout) {
    setTimeout(() => {
        $(elem).addClass('loaded');
    }, timeout)
}