"use strict";
$(document).ready(function () {







    $('.btn').click(function (e) {
        e.preventDefault();
        if (!$.trim($('input').val()) == '') {
            let a = b => {
                for (let i = 0; i < b; i++) { $('.list').append(`<h3>${b}</h3>`); }
            };
            let v = f => Number(f) ? a(f) : $('.list').append(`<h3>${f}</h3>`);
            v($('input').val());

        }
        $('input').val('');

    })





});





































































