$(document).ready(function () {
    var counter = 0;
    $(".next").click(function (e) {
        counter++
        e.preventDefault();
        var pixel = -800 * counter + "px"
        $("img").css("transform", "translateX(" + pixel + ")")
    })
    $(".prev").click(function (e) {
        counter--
        e.preventDefault();
        var pixel = -800 * counter + "px"
        $("img").css("transform", "translateX(" + pixel + ")")
    })
})