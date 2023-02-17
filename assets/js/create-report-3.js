$(document).ready(function () {
  $(".pt_report-category").click(function () {
    $(".pt_report-category").removeClass("active");
    $(this).addClass("active");
  });
  $(".pt_multiple-checkboxes").multiselect({
    includeSelectAllOption: true,
    numberDisplayed: 1,
    inheritClass: true,
    buttonWidth: "100%",
  });
});
