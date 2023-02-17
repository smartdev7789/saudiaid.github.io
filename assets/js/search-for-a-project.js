$(document).ready(function () {
  $(".pt_multiple-checkboxes").multiselect({
    includeSelectAllOption: true,
    numberDisplayed: 1,
    inheritClass: true,
    buttonWidth: "100%",
  });
  $("#table-1").DataTable({
    searching: false,
    columnDefs: [{ orderable: false, targets: 7 }],
    order: [[1, "asc"]],
    info: false,
    paging: false,
    scrollX: true,
  });
});
