$(document).ready(function () {
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
    doc.save("contribution-information.pdf");
  });
  const get = async function () {
    const data = [
      {
        key: "Contribution Name",
        value: "KSA's Share in the Budget of the UNAOC for 2021",
      },
      {
        key: "Contribution Description",
        value:
          "The contribution of the Kingdom to the King Fahd Islamic Cultural Center in Argentina",
      },
      { key: "Contribution Year", value: "Finished" },
      { key: "Form of Assistance", value: "2019/08/07" },
      { key: "Aid Category", value: "2019/08/07" },
      { key: "Total Funding $", value: "0 Day" },
      { key: "Donor Entities", value: "Cash" },
      { key: "Recipient", value: "Development" },
      { key: "Sectors - Aid Category", value: "Development" },
      { key: "Sectors - Main Sector", value: "budget Supporting" },
      { key: "Sectors - Sub Sector", value: "General Budget Support" },
    ];
    const csvdata = csvmaker(data);
    download(csvdata, "contribution-information.csv");
  };
  $("#downloadCsvBtn").click(function () {
    get();
  });
});
