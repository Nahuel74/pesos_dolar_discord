import { calc } from "./calc.js"

export const print = () => {
    const value = calc($(".values"), $(".inputs"))
    $("#td-result").html(`<p>${value}<p>`)
}

export const clear = () => {
    $('.inputs').val("")
    $("#td-result").html(`<p></p>`)
}