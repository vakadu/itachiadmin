$(document).ready(function() {
    $(".setting-toggle").on("click", function() {
        $(".setting").toggleClass("closed")
    }), $(".body-bg").on("click", function() {
        var t = "./assets/images/" + $(this).attr("data-bg");
        $("body").css("background-image", "url(" + t + ")")
    })
});