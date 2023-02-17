$(document).ready(function () {
  $(".pt_mobile-menu-toggle-btn").click(function () {
    $(".pt_mobile-menu-div").toggleClass("open");
  });
  $(".lang-switch-item").click(function () {
    $(".lang-switch-item").removeClass("lang-switch-select");
    $(this).addClass("lang-switch-select");
  });
  $(".mobile-menu-item-parent").click(function () {
    $(this).toggleClass("open");
    $(this).next(".mobile-menu-item-children").toggleClass("open");
    if (
      $(this)
        .children("a")
        .children(".icon-direction")
        .hasClass("fa-angle-down")
    ) {
      $(this)
        .children("a")
        .children(".icon-direction")
        .removeClass("fa-angle-down");
      $(this).children("a").children(".icon-direction").addClass("fa-angle-up");
    } else {
      $(this)
        .children("a")
        .children(".icon-direction")
        .removeClass("fa-angle-up");
      $(this)
        .children("a")
        .children(".icon-direction")
        .addClass("fa-angle-down");
    }
  });
});
