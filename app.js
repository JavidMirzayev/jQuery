"use strict";
$(document).ready(function () {


  




    $('.btn').click(function (e) {
        e.preventDefault();

        function myel(myclass = "") {
            let inputVal = $.trim($("#inputme").val());

            if (inputVal !== '') {
                let newDiv = $('<h2></h2>');
                let bigDiv = $(`<div ${myclass}></div>`);

                if (!isNaN(inputVal)) {
                    for (let i = 0; i < parseInt(inputVal); i++) {
                        $(newDiv).clone().append(inputVal).appendTo(bigDiv);
                    }
                } else {
                    $(newDiv).append(inputVal);
                    $(bigDiv).append(newDiv);
                }

                return bigDiv;
            }
        }

        $("#listme").append(myel());
    })

























});





































































