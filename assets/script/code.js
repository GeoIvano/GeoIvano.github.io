$(".button").on("click", function() {
    $(".wrapper").hide().addClass("wr").fadeIn(3000)
    $("#cup>img").hide().attr("src", "assets/img/cake.jpg").fadeIn(3000)
    $(".button").hide().addClass("wish").fadeIn(3000)
        .text('Честит рожден ден Меги. Мн здраве, щастие, успешно построени сгради и сбъднати мечти и цели.')
});