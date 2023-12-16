"use strict";
$(document).ready(function () {
































    $("button").click(() => {
        let inputValue = $("input").val();
        let numericValue = Number(inputValue);
        
        inputValue == "" ? console.log("Zəhmət olmasa boş buraxmayın!") : !numericValue
            ? $(".list").append($("<h2>").text(inputValue)) : numericValue && appendNumericTodos(numericValue);

        $("input").val("");

        function appendNumericTodos(value) {
            for (let i = 0; i < value; i++) {
                let numericTodos = $("<h2>").text(value);
                $(".list").append(numericTodos);
            }
        }
    });

});





































































