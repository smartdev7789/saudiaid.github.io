$(document).ready(function () {
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
  $(".pt_group-1").click(function () {
    $(".pt_group-1").removeClass("active");
    $(this).addClass("active");
    $(`#${$(this).data("show")}`).removeClass("d-none");
    $(`#${$(this).data("hide")}`).addClass("d-none");
  });
  $(".pt_group-2").click(function () {
    $(".pt_group-2").removeClass("active");
    $(this).addClass("active");
    $(`#${$(this).data("show")}`).removeClass("d-none");
    $(`#${$(this).data("hide")}`).addClass("d-none");
  });
  $(".pt_group-3").click(function () {
    $(".pt_group-3").removeClass("active");
    $(this).addClass("active");
    $(`#${$(this).data("show")}`).removeClass("d-none");
    $(`#${$(this).data("hide")}`).addClass("d-none");
  });
  $(".pt_group-4").click(function () {
    $(".pt_group-4").removeClass("active");
    $(this).addClass("active");
    $(`#${$(this).data("show")}`).removeClass("d-none");
    $(`#${$(this).data("hide")}`).addClass("d-none");
  });
  const ctx_1 = document.getElementById("chart-1");
  const ctx_2 = document.getElementById("chart-2");
  const ctx_3 = document.getElementById("chart-3");
  const ctx_4 = document.getElementById("chart-4");
  const ctx_5 = document.getElementById("chart-5");
  const data_1 = {
    labels: [
      "Development - budget Supporting",
      "General program assistance",
      "Development - Transport and Storage",
    ],
    datasets: [
      {
        label: "dataset",
        data: [20, 45, 35],
        backgroundColor: ["#86BFBF", "#2956B0", "#D6CEA6"],
      },
    ],
  };
  const data_2 = {
    labels: [
      "Development - budget Supporting",
      "General program assistance",
      "Development - Transport and Storage",
    ],
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
      "Development - budget Supporting",
      "General program assistance",
      "Development - Transport and Storage",
    ],
    datasets: [
      {
        label: "dataset",
        data: [20, 45, 35],
        backgroundColor: ["#86BFBF", "#2956B0", "#D6CEA6"],
      },
    ],
  };
  const data_4 = {
    labels: [
      "Development - budget Supporting",
      "General program assistance",
      "Development - Transport and Storage",
    ],
    datasets: [
      {
        label: "dataset",
        data: [20, 45, 35],
        backgroundColor: ["#86BFBF", "#2956B0", "#D6CEA6"],
      },
    ],
  };
  const data_5 = {
    labels: [
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
      "2013",
      "2012",
      "2011",
      "2010",
      "2009",
    ],
    datasets: [
      {
        label: "Cost",
        data: [32, 68, 16, 123, 154, 12, 43, 74, 90, 14, 16, 92, 138],
        backgroundColor: "#86bfbf",
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
      indexAxis: "x",
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
});
