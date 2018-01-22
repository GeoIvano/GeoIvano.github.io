$(".button").on("click", function() {
    $(".wrapper").hide().addClass("wr").fadeIn(2500)
    $("#cup>img").hide().attr("src", "assets/img/cake.jpg").fadeIn(2500)
    $(".button").hide("fast").addClass("wish")
        .text('Честит рожден ден Меги. Мн здраве, щастие, успешно построени сгради и сбъднати мечти и цели.')
        .fadeIn(2500).off("click")

});