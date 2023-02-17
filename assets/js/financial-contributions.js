$(document).ready(function () {
  $("#multiple-checkboxes-beneficiary").multiselect({
    includeSelectAllOption: true,
    numberDisplayed: 0,
    nonSelectedText: "Beneficiary entities",
  });
  $("#multiple-checkboxes-sector").multiselect({
    includeSelectAllOption: true,
    numberDisplayed: 0,
    nonSelectedText: "sector",
  });
  $("#multiple-checkboxes-category").multiselect({
    includeSelectAllOption: true,
    numberDisplayed: 0,
    nonSelectedText: "category",
  });
  $("#multiple-checkboxes-entity").multiselect({
    includeSelectAllOption: true,
    numberDisplayed: 0,
    nonSelectedText: "Saudi Donor entity",
  });
  $("#multiple-checkboxes-year").multiselect({
    includeSelectAllOption: true,
    numberDisplayed: 0,
    nonSelectedText: "Year",
  });
  $("#multiple-checkboxes-beneficiary-mobile").multiselect({
    includeSelectAllOption: true,
    numberDisplayed: 0,
    nonSelectedText: "Beneficiary entities",
    inheritClass: true,
  });
  $("#multiple-checkboxes-sector-mobile").multiselect({
    includeSelectAllOption: true,
    numberDisplayed: 0,
    inheritClass: true,
    nonSelectedText: "sector",
  });
  $("#multiple-checkboxes-category-mobile").multiselect({
    includeSelectAllOption: true,
    inheritClass: true,
    numberDisplayed: 0,
    nonSelectedText: "category",
  });
  $("#multiple-checkboxes-entity-mobile").multiselect({
    includeSelectAllOption: true,
    inheritClass: true,
    numberDisplayed: 0,
    nonSelectedText: "Saudi Donor entity",
  });
  $("#multiple-checkboxes-year-mobile").multiselect({
    inheritClass: true,
    includeSelectAllOption: true,
    numberDisplayed: 0,
    nonSelectedText: "Year",
  });
  $("#table-1").DataTable({
    paging: false,
    searching: false,
    info: false,
    columnDefs: [{ orderable: false, targets: 0 }],
    order: [[1, "asc"]],
  });
  $("#table-2").DataTable({
    paging: false,
    searching: false,
    info: false,
    columnDefs: [{ orderable: false, targets: 0 }],
    order: [[1, "asc"]],
  });
  $("#table-3").DataTable({
    paging: false,
    searching: false,
    info: false,
    columnDefs: [{ orderable: false, targets: 0 }],
    order: [[1, "asc"]],
  });
  $("#table-4").DataTable({
    paging: false,
    searching: false,
    info: false,
    columnDefs: [{ orderable: false, targets: 0 }],
    order: [[1, "asc"]],
  });
  $("#table-5").DataTable({
    paging: false,
    searching: false,
    info: false,
    order: [[1, "asc"]],
  });
  $("body").on("click", ".filter-item-close", function () {
    $(this).closest(".filter-item").addClass("d-none");
  });
  $("#btn-apply").click(function () {
    let filterHtml = "";
    const filterSelectors = [
      $("#multiple-checkboxes-beneficiary"),
      $("#multiple-checkboxes-sector"),
      $("#multiple-checkboxes-category"),
      $("#multiple-checkboxes-entity"),
      $("#multiple-checkboxes-year"),
    ];
    filterSelectors.forEach((filterSelector) => {
      filterSelector.val().forEach((val) => {
        filterHtml += `
        <div class="filter-item">
          ${val} &nbsp;&nbsp;&nbsp;
          <i class="fa fa-close filter-item-close"></i>
        </div>`;
      });
    });
    $("#filter-conditions").html(filterHtml);
    $("#filter-div").removeClass("d-none");
  });
  $("#btn-clear").click(function () {
    let filterHtml = "";
    $("#filter-conditions").html(filterHtml);
    $("#filter-div").addClass("d-none");
  });
  $(".pt_group-1").click(function () {
    $(".pt_group-1").removeClass("active");
    $(this).addClass("active");
    $(`#${$(this).data("show")}`).removeClass("d-none");
    $(`#${$(this).data("hide")}`).addClass("d-none");
    $(`#${$(this).data("hide-2")}`).addClass("d-none");
  });
  $(".pt_group-2").click(function () {
    $(".pt_group-2").removeClass("active");
    $(this).addClass("active");
    $(`#${$(this).data("show")}`).removeClass("d-none");
    $(`#${$(this).data("hide")}`).addClass("d-none");
    $(`#${$(this).data("hide-2")}`).addClass("d-none");
  });
  const ctx_1 = document.getElementById("chart-1");
  const ctx_2 = document.getElementById("chart-2");
  const ctx_3 = document.getElementById("chart-3");
  const ctx_4 = document.getElementById("chart-4");
  const ctx_5 = document.getElementById("chart-5");
  const ctx_6 = document.getElementById("chart-6");
  const data_1 = {
    labels: ["Humanitarian", "Development", "Charity"],
    datasets: [
      {
        label: "dataset",
        data: [20, 45, 35],
        backgroundColor: ["#86BFBF", "#2956B0", "#D6CEA6"],
      },
    ],
  };
  const data_2 = {
    labels: ["Humanitarian", "Development", "Charity"],
    datasets: [
      {
        label: "dataset",
        data: [20, 45, 35],
        backgroundColor: ["#86BFBF", "#2956B0", "#D6CEA6"],
      },
    ],
  };
  const data_3 = {
    labels: [
      "Development - Education",
      "Development - Agriculture, forestry and fish",
      "Development - Other projects",
      "Development - Banking and financial services",
      "Development - budget Supporting",
      "Development - energy",
      "Humanitarian - health",
      "General program assistance",
      "Humanitarian - Food and Agricultural Security",
      "Development - Transport and Storage",
    ],
    datasets: [
      {
        label: "dataset",
        data: [17.36, 15.62, 13.89, 9.38, 7.81, 8.68, 2.43, 9.9, 3.47, 11.46],
        backgroundColor: [
          "#005A59",
          "#313131",
          "#86BFBF",
          "#6A5939",
          "#D6CEA6",
          "#E9CE74",
          "#1B285D",
          "#11A9A7",
          "#AA9A64",
          "#2956B0",
        ],
      },
    ],
  };
  const data_4 = {
    labels: [
      "Development - Education",
      "Development - Agriculture, forestry and fish",
      "Development - Other projects",
      "Development - Banking and financial services",
      "Development - budget Supporting",
      "Development - energy",
      "Humanitarian - health",
      "General program assistance",
      "Humanitarian - Food and Agricultural Security",
      "Development - Transport and Storage",
    ],
    datasets: [
      {
        label: "dataset",
        data: [17.36, 15.62, 13.89, 9.38, 7.81, 8.68, 2.43, 9.9, 3.47, 11.46],
        backgroundColor: [
          "#005A59",
          "#313131",
          "#86BFBF",
          "#6A5939",
          "#D6CEA6",
          "#E9CE74",
          "#1B285D",
          "#11A9A7",
          "#AA9A64",
          "#2956B0",
        ],
      },
    ],
  };
  const data_5 = {
    labels: ["2021", "2020", "2019", "2018", "2017", "2016"],
    datasets: [
      {
        label: "Cost",
        data: [12, 45, 56, 23, 54, 112],
        backgroundColor: "#569d9d",
      },
    ],
  };
  const data_6 = {
    labels: ["2021", "2020", "2019", "2018", "2017", "2016"],
    datasets: [
      {
        label: "Cost",
        data: [112, 23, 54, 73, 124, 56],
        backgroundColor: "#569d9d",
      },
    ],
  };
  new Chart(ctx_1, {
    type: "doughnut",
    data: data_1,
    options: {
      responsive: true,
      animation: {
        duration: 0,
      },
      plugins: {
        tooltip: {
          enabled: true,
          backgroundColor: "#b39968",
          displayColors: false,
          titleAlign: "center",
          bodyAlign: "center",
          callbacks: {
            label: function (context) {
              return `${context.parsed}%`;
            },
          },
        },
        legend: {
          display: true,
          position: "bottom",
          align: "start",
          labels: {
            usePointStyle: true,
          },
        },
      },
    },
  });
  new Chart(ctx_2, {
    type: "doughnut",
    data: data_2,
    options: {
      responsive: true,
      animation: {
        duration: 0,
      },
      plugins: {
        tooltip: {
          enabled: true,
          backgroundColor: "#b39968",
          displayColors: false,
          titleAlign: "center",
          bodyAlign: "center",
          callbacks: {
            label: function (context) {
              return `${context.parsed}%`;
            },
          },
        },
        legend: {
          display: true,
          position: "bottom",
          align: "start",
          labels: {
            usePointStyle: true,
          },
        },
      },
    },
  });
  new Chart(ctx_3, {
    type: "doughnut",
    data: data_3,
    options: {
      responsive: true,
      animation: {
        duration: 0,
      },
      plugins: {
        tooltip: {
          enabled: true,
          backgroundColor: "#b39968",
          displayColors: false,
          titleAlign: "center",
          bodyAlign: "center",
          callbacks: {
            label: function (context) {
              return `${context.parsed}%`;
            },
          },
        },
        legend: {
          display: true,
          position: "bottom",
          align: "start",
          labels: {
            usePointStyle: true,
          },
        },
      },
    },
  });
  new Chart(ctx_4, {
    type: "doughnut",
    data: data_4,
    options: {
      responsive: true,
      animation: {
        duration: 0,
      },
      plugins: {
        tooltip: {
          enabled: true,
          backgroundColor: "#b39968",
          displayColors: false,
          titleAlign: "center",
          bodyAlign: "center",
          callbacks: {
            label: function (context) {
              return `${context.parsed}%`;
            },
          },
        },
        legend: {
          display: true,
          position: "bottom",
          align: "start",
          labels: {
            usePointStyle: true,
          },
        },
      },
    },
  });
  new Chart(ctx_5, {
    type: "bar",
    data: data_5,
    options: {
      indexAxis: "y",
      elements: {
        bar: {
          borderRadius: 5,
        },
      },
      responsive: true,
      plugins: {
        tooltip: {
          backgroundColor: "#b39968",
          displayColors: false,
          titleAlign: "center",
        },
        legend: {
          display: false,
        },
      },
    },
  });
  new Chart(ctx_6, {
    type: "bar",
    data: data_6,
    options: {
      indexAxis: "y",
      elements: {
        bar: {
          borderRadius: 5,
        },
      },
      responsive: true,
      plugins: {
        tooltip: {
          backgroundColor: "#b39968",
          displayColors: false,
          titleAlign: "center",
        },
        legend: {
          display: false,
        },
      },
    },
  });
  $("#btn-mobile-toggle-filter-conditions").click(function () {
    $(".pt_mobile-filter-conditions").toggleClass("d-none");
  });
  $("#btn-mobile-filter-apply").click(function () {
    let filterHtml = "";
    const filterSelectors = [
      $("#multiple-checkboxes-beneficiary-mobile"),
      $("#multiple-checkboxes-sector-mobile"),
      $("#multiple-checkboxes-category-mobile"),
      $("#multiple-checkboxes-entity-mobile"),
      $("#multiple-checkboxes-year-mobile"),
    ];
    filterSelectors.forEach((filterSelector) => {
      filterSelector.val().forEach((val) => {
        filterHtml += `
        <div class="filter-item">
          ${val} &nbsp;&nbsp;&nbsp;
          <i class="fa fa-close filter-item-close"></i>
        </div>`;
      });
    });
    $("#filter-conditions").html(filterHtml);
    $("#filter-div").removeClass("d-none");
  });
  $(".number-of-statistics").click(function () {
    $(".number-of-statistics").removeClass("active");
    $(this).addClass("active");
    $(`#${$(this).data("show")}`).removeClass("d-none");
    $(`#${$(this).data("hide")}`).addClass("d-none");
  });
});
