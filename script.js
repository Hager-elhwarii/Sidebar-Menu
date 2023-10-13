$(function () {
  $(".sub-btn").on("click", function () {
    // To display sub-menu and then hide it.
    $(this).next(".sub-menu").slideToggle("swing");

    // To Rotate right arrow or sub-btn when displaying sub-menu.
    $(this).find(".dropdown").toggleClass("rotate");
  });

  // To expand and collapse the sidebar.
  $(".menu-btn").on("click", function () {
    $(".sidebar").addClass("active");
    $(".menu-btn").css("visibility", "hidden");
  });
  $(".close-btn").on("click", function () {
    $(".sidebar").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
  });
});
