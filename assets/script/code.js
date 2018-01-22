$(".button").on("click", function() {
    $(".wrapper").hide().addClass("wr").fadeIn(2000)
    $("#cup>img").hide().attr("src", "assets/img/cake.jpg").fadeIn(2000)
    $(".button").hide("fast").addClass("wish")
        .text('Честит рожден ден Меги. Много здраве, щастие, успешно построени сгради и сбъднати мечти и цели !')
        .fadeIn(2000).off("click")
});