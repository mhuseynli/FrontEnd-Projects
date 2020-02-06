$(document).ready(function () {
    $(".tablinks").click(function (e) {
        e.preventDefault();
        $(".tabcontent").removeClass("active")
        var href = $(this).attr("href")
        $(href).addClass("active")
    })

})