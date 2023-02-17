$(document).ready(function () {
  const ctx_1 = document.getElementById("chart-1");
  const ctx_2 = document.getElementById("chart-2");
  const data_1 = {
    labels: ["SFD", "MOFA", "KSrelief", "MOF", "MOT", "GAZT"],
    datasets: [
      {
        label: "Cost",
        data: [12, 45, 56, 23, 54, 112],
        backgroundColor: "#569d9d",
      },
    ],
  };
  const data_2 = {
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
        backgroundColor: "#00595a",
      },
    ],
  };
  new Chart(ctx_1, {
    type: "bar",
    data: data_1,
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
});
