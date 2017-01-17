require('jquery');

$(document).ready(function () {
    setTimeout(function () {
        $('#header').addClass('loaded');

        setTimeout(function () {
            $('#content').addClass('loaded');

            var timeout = 300;
            $('#content h2, #content p').each(function (i, elem) {
                showElemTimeout(elem, timeout * i);
            });
        }, 2000)
    }, 500);
});

function showElemTimeout(elem, timeout) {
    setTimeout(function () {
        $(elem).addClass('loaded');
    }, timeout)
}