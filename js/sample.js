$(function () {
    $(".js-menu__item__link").each(function () {
        $(this).on("mouseover", function () {
            $("+.submenu", this).slideToggle();
            return false;
        });
    });
});

// $(function () {
//     $(".js-menu__item__link").each(function () {
//         $(this).on("mouseover", function () {
//             if ($(this).hasClass("js-menu__open")) {
//                 $(this).removeClass("js-menu__open");
//                 $(".submenu").removeClass("open");
//             } else {
//                 $(this).addClass("js-menu__open");
//                 $(".submenu").addClass("open");
//             }
//         })
//     })
// })

// $(function(){

// })