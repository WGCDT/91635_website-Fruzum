$(document).ready(function () {
    $("#Na-ani-toggle").click(function () {
        $(".Na-ani-body").toggle("slow");

        var buttonText = $(this).text();
        if (buttonText.startsWith("Hide")) {
            $(this).html("Show section &#8645");
        } else {
            $(this).html("Hide section &#8645");
        };
    });
});
$(document).ready(function () {
    $("#Na-Pla-toggle").click(function () {
        $(".Na-Pla-body").toggle("slow");

        var buttonText = $(this).text();
        if (buttonText.startsWith("Hide")) {
            $(this).html("Show section &#8645");
        } else {
            $(this).html("Hide section &#8645");
        };
    });
});
$(document).ready(function () {
    $("#Na-Sun-toggle").click(function () {
        $(".Na-Sun-body").toggle("slow");

        var buttonText = $(this).text();
        if (buttonText.startsWith("Hide")) {
            $(this).html("Show section &#8645");
        } else {
            $(this).html("Hide section &#8645");
        };
    });
});
$(document).ready(function () {
    $("#Na-con-toggle").click(function () {
        $(".Na-con-body").toggle("slow");

        var buttonText = $(this).text();
        if (buttonText.startsWith("Hide")) {
            $(this).html("Show section &#8645");
        } else {
            $(this).html("Hide section &#8645");
        };
    });
});

$("#Image-toggle").click(function () {
    $("img").toggle("slow");

    var buttonText = $(this).text();
    if (buttonText.startsWith("Hide")) {
        $(this).html("Show Images");
        $(".text_col").removeClass("col-md-8")
        $(".text_col").addClass("col-md-12")
    } else {
        $(this).html("Hide Images");
        $(".text_col").removeClass("col-md-12")
        $(".text_col").addClass("col-md-8")
    };
});


$("#Colour-toggle").click(function () {

    var buttonText = $(this).text();
    if (buttonText.startsWith("Light")) {
        $(this).html("Dark Background")
        $("body").removeClass("bg-dark")
        $("body").addClass("bg-light")
        $("nav").removeClass("navbar-inverse")
        $("nav").addClass("navbar-default")
        $(".colour").removeClass("dark")
        $(".colour").addClass("light")
    } else {
        $(this).html("Light Background")
        $("body").css("background-image", "url(../Images/url(../Images/black_scales.png);")
        $("nav").removeClass("navbar-default")
        $("nav").addClass("navbar-inverse")
        $("body").removeClass("bg-light")
        $("body").addClass("bg-dark")
        $(".colour").removeClass("light")
        $(".colour").addClass("dark")
    };
});