$(document).ready(function () {
  $("#table-1").DataTable({
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
  const ctx_1 = document.getElementById("chart-1");
  const ctx_2 = document.getElementById("chart-2");
  const data_1 = {
    labels: [
      "Services provided by the Directorate General Passports",
      "Health",
      "Education",
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
    labels: ["2021", "2019", "2017", "2015", "2013"],
    datasets: [
      {
        label: "Cost",
        data: [112, 145, 156, 123, 154],
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
    type: "bar",
    data: data_2,
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
  $(".goto-1").click(function () {
    window.location.href = $(this).data("url");
  });
});
