$(".button").on("click", function() {
    $(".wrapper").hide().addClass("wr").fadeIn(3000)
    $("#cup>img").hide().attr("src", "assets/img/cake.jpg").fadeIn(3000)
    $(".button").hide().text('Честит рожден ден Меги. Мн здраве, успешно построени сгради и сбъднати мечти и цели.')
        .addClass("wish").fadeIn(3000)
});