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
    doc.save("service-information.pdf");
  });
  const get = async function () {
    const data = [
      {
        key: "Service Title",
        value: "KSA's Share in the Budget of the UNAOC for 2021",
      },
      {
        key: "Service Description",
        value:
          "The contribution of the Kingdom to the King Fahd Islamic Cultural Center in Argentina",
      },
      { key: "Service Year", value: "Finished" },
      { key: "Aid Category", value: "2019/08/07" },
      { key: "Total Funding $", value: "2019/08/07" },
      { key: "Donor Entity", value: "0 Day" },
      { key: "Beneficiary nationality", value: "Cash" },
      { key: "Sectors - Main Sector", value: "Health" },
      { key: "Sectors - Sub Sector", value: "Health Centers" },
    ];
    const csvdata = csvmaker(data);
    download(csvdata, "service-information.csv");
  };
  $("#downloadCsvBtn").click(function () {
    get();
  });
});
