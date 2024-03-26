import '../scss/main.scss';
import $ from 'jquery';
import 'bootstrap';
import 'popper.js';
import select2 from 'select2/dist/js/select2.min';
// import '../img/chevrone.svg';

$(window).on('load', function () {
    let b = $('body');
    let pw = $('.preload-wrapper');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        b.addClass('ios');
    } else {
        b.addClass('web');
    }

    pw.fadeOut(300);
});

$(function () {
    // Select2
    (function () {
        let selectStyled = $('.select2');

        selectStyled.select2({
            minimumResultsForSearch: Infinity,
            // dropdownParent: $('.dropdown-wrapper'),
        });
    })();
});