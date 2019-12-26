$(function () {
    $(".js-menu__item__link").each(function () {
        $(this).on("mouseover", function () {
            $("+.submenu", this).slideToggle();
            return false;
        });
    });
});
