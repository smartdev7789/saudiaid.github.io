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
    doc.save("project-information.pdf");
  });
  const get = async function () {
    const data = [
      {
        key: "Project Name",
        value: "King Fahd Islamic Cultural Center in Argentina",
      },
      {
        key: "Project Description",
        value:
          "The contribution of the Kingdom to the King Fahd Islamic Cultural Center in Argentina",
      },
      { key: "Project Status", value: "Finished" },
      { key: "Project Start Date", value: "2019/08/07" },
      { key: "Project End Date", value: "2019/08/07" },
      { key: "Project Period", value: "0 Day" },
      { key: "Form of Assistance", value: "Cash" },
      { key: "Aid Category", value: "Development" },
      { key: "Total Funding", value: "2,094,184 $" },
      { key: "Donor Entity", value: "Ministry of Finance" },
      { key: "Beneficiary Country", value: "Argentina" },
      { key: "Sectors - Aid Category", value: "Development" },
      { key: "Sectors - Main Sector", value: "budget Supporting" },
      { key: "Sectors - Sub Sector", value: "General Budget Support" },
      { key: "Project Location - Country", value: "Argentina" },
      { key: "Project Location - Governorate", value: "بيونس أيرس" },
      {
        key: "Partners - Partner Name",
        value:
          "Islamic Cultural Center 'Custodian of the Two Sacred Mosques, Rey Fahd', in Argentina",
      },
      { key: "Partners - Partner Type", value: "شريك رئيسي" },
    ];
    const csvdata = csvmaker(data);
    download(csvdata, "project-information.csv");
  };
  $("#downloadCsvBtn").click(function () {
    get();
  });
});
