require('jquery');
require('bootstrap');

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

    if(window.location.hash && window.location.hash === "#beacon") {
        console.log('Congratulations! You have found my ruuvitag beacon or messing with my site...');

        $('#beaconModal').modal('show')
    }
});

function showElemTimeout(elem, timeout) {
    setTimeout(function () {
        $(elem).addClass('loaded');
    }, timeout)
}