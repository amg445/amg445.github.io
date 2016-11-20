$(document).ready(function() {
    $(".link img").on("mouseenter", function() {
        var temp = $(this).attr("src");
        if (!temp.includes("hover")) {
            $(this).attr("src", temp.substring(0, temp.indexOf(".")) + "hover.svg");
        }
    });
    $(".link img").on("mouseout", function() {
        var temp = $(this).attr("src");
        if (temp.includes("hover")) {
            $(this).attr("src", temp.substring(0, temp.indexOf("hover")) + ".svg");
        }
    });

    $(".project-btn").on("click", function() {

        if (!$(this).hasClass("selected")) { $(".project-btn").removeClass("selected"); $(this).addClass("selected"); }
        else { $(this).removeClass("selected"); }

        var id = "#" + $(this).attr("id") + "-body";
        if (!$(id).hasClass("hide")) { $(id).addClass("hide"); }
        else { $(".project").addClass("hide"); $(id).removeClass("hide"); }
    });

    $("#credits").on("click", function() {
        if ($("#credits").hasClass("fold-out")) {
            $("#credits").removeClass("fold-out")
            $("#credits").text("Credits +");
            $("#credit-foldout").addClass("hide");
        }
        else {
            $("#credits").addClass("fold-out")
            $("#credits").text("Credits -");
            $("#credit-foldout").removeClass("hide");
        }
    });
});
