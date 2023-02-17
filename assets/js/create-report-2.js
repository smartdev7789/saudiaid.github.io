$(document).ready(function () {
  $(".filter-item-close").click(function () {
    $(this).closest(".filter-item").addClass("d-none");
  });
  var doc = new jsPDF();
  var specialElementHandlers = {
    "#editor": function (element, renderer) {
      return true;
    },
  };
  $("#downloadPdfBtn").click(function () {
    doc.fromHTML($("#contentDiv").html(), 15, 15, {
      width: 170,
      elementHandlers: specialElementHandlers,
    });
    doc.save("report.pdf");
  });
});
