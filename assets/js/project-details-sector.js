$(document).ready(function () {
  $("#table-1").DataTable({
    paging: false,
    searching: false,
    info: false,
    columnDefs: [{ orderable: false, targets: [0, 1] }],
    order: [[2, "asc"]],
  });
  $("#table-2").DataTable({
    paging: false,
    searching: false,
    info: false,
    columnDefs: [{ orderable: false, targets: [0, 1] }],
    order: [[2, "asc"]],
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
  const ctx_1 = document.getElementById("chart-1");
  const ctx_2 = document.getElementById("chart-2");
  const ctx_3 = document.getElementById("chart-3");
  const ctx_4 = document.getElementById("chart-4");
  const data_1 = {
    labels: [
      "Iraq",
      "Tunisia",
      "Yemen",
      "Palestine",
      "Egypt",
      "Bahrain",
      "Haiti",
      "Lebanon",
      "Pakistan",
      "Jordan",
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
  const data_2 = {
    labels: [
      "Iraq",
      "Tunisia",
      "Yemen",
      "Palestine",
      "Egypt",
      "Bahrain",
      "Haiti",
      "Lebanon",
      "Pakistan",
      "Jordan",
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
  const data_3 = {
    labels: ["GEI"],
    datasets: [
      {
        label: "Cost",
        data: [120],
        backgroundColor: "#569d9d",
      },
    ],
  };
  const data_4 = {
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
        data: [12, 45, 56, 23, 54, 112, 23, 54, 73, 124, 56, 12, 38],
        backgroundColor: "#569d9d",
      },
      {
        label: "Cost",
        data: [32, 68, 16, 123, 154, 12, 43, 74, 90, 14, 16, 92, 138],
        backgroundColor: "#00595a",
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
    type: "bar",
    data: data_3,
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
          titleAlign: "center",
          bodyAlign: "center",
          displayColors: false,
        },
        legend: {
          display: false,
        },
      },
    },
  });
  new Chart(ctx_4, {
    type: "bar",
    data: data_4,
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
