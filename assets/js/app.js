const download = function (data, filename) {
  const blob = new Blob([data], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", filename);
  a.click();
};
const csvmaker = function (data) {
  csvRows = [];
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(","));
  data.forEach((el) => {
    const values = Object.values(el).join(",");
    csvRows.push(values);
  });
  return csvRows.join("\n");
};

$(document).ready(function () {
  $("#pt_share-btn").click(() => {
    $(".pt_share-items").toggleClass("active");
  });
  $("#pt_share-btn-1").click(() => {
    $(".pt_share-items-1").toggleClass("active");
  });
  $("#printBtn").click(function () {
    var divToPrint = document.getElementById("contentDiv");
    var newWin = window.open("", "Print-Window");
    newWin.document.open();
    newWin.document.write(
      `<html>
        <head>
          <link
          rel="stylesheet"
          href="../assets/libraries/bootstrap-5.2.3-dist/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="../assets/css/style.css" />
          <link rel="stylesheet" href="../assets/css/style-func.css" />
        </head>
        <body  onload="window.print()">
          ${divToPrint.innerHTML}
        </body>
      </html>`
    );
    newWin.document.close();
    setTimeout(function () {
      newWin.close();
    }, 10);
  });
});
