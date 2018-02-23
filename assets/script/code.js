$(document).ready(function() {
    $(".button").on("click", function() {
        $(".wrapper").hide().addClass("wr").fadeIn(2000)
        $("#cup>img").hide().attr("src", "assets/img/cake.jpg").fadeIn(2000)
        $(".button").hide("fast").addClass("wish")
            .text('Happy birthday !')
            .fadeIn(2000).off("click")
    });
})