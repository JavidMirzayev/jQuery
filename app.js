"use strict";
$(document).ready(function () {

});



















$('h2').click(function (e) {
    e.preventDefault();
    $('h2').html(1234);
});


$('.btn').click(function (e) {
    e.preventDefault();

    let s = (s) => {
        for (let i = 1; i < s; i) {
            $('.col-md-12').append(`<h1>${i}<h1>`);
        }
    }
    s()
});

console.log($('input').val())























