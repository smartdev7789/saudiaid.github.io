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
  const ctx_1 = document.getElementById("chart-1");
  const ctx_2 = document.getElementById("chart-2");
  const data_1 = {
    labels: [
      "King Salman Humanitarian Aid",
      "Relief Centre",
      "Ministry of Finance",
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
    labels: ["Syria", "Palestine", "Yemen"],
    datasets: [
      {
        label: "dataset",
        data: [20, 45, 35],
        backgroundColor: ["#86BFBF", "#2956B0", "#D6CEA6"],
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
  $(".goto-1").click(function () {
    window.location.href = $(this).data("url");
  });
});
