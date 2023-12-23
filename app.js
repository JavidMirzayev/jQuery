"use strict";
$(document).ready(function () {


    $('.btn').click(function (e) {
        e.preventDefault();
        function myel(myclass = "") {
            if (!$.trim($("#inputme").val()) == '') {
                let valle = $("#inputme").val()
                let newDiv = $('<h2></h2>')
                let bigDiv = $(`<div ${myclass}></div>`)
                $(newDiv).append(valle)
                $(bigDiv).append(newDiv)
                return bigDiv, newDiv

            }
            else {

            }
        }
        $("#listme").append(myel())



    })

  



























});





































































