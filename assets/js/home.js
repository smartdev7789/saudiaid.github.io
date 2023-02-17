$(document).ready(function () {
  const ctx_2 = document.getElementById("chart-2");
  const ctx_3 = document.getElementById("chart-3");
  const data_2 = {
    labels: [
      "United Nations",
      "Secretariat General of the Gulf Cooperation Council",
      "Islamic Development Bank",
      "Arab Fund for Economic & Social Development",
      "Asian Infrastructure Investment Bank",
    ],
    datasets: [
      {
        label: "dataset_2",
        data: [374647685, 302197383, 204880041, 238601600, 305340267],
        backgroundColor: [
          "#015a59",
          "#313131",
          "#86bfbf",
          "#695939",
          "#2956b0",
        ],
      },
    ],
  };
  const data_3 = {
    labels: ["Yemen", "Rohingya", "Syrian"],
    datasets: [
      {
        label: "dataset_2",
        data: [9753295782, 5597279985, 5597279985],
        backgroundColor: ["#313131", "#015a59", "#695939"],
      },
    ],
  };

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
          enabled: false,
        },
        legend: {
          display: false,
        },
      },
    },
  });
  new Chart(ctx_3, {
    type: "pie",
    data: data_3,
    options: {
      animation: {
        duration: 0,
      },
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
          display: false,
        },
      },
    },
  });
  $(".pt_slick-entities").slick({
    arrows: true,
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  });
  $(".pt_slick-entities-mobile").slick({
    arrows: true,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  var activeSection = 1;
  const activeSectionFunc = () => {
    $(".static-item").removeClass("active");
    $(`#static-item-${activeSection}`).addClass("active");
    $("#btn-handle-1").attr("src", "../assets/images/button-1.png");
    $("#btn-handle-2").attr("src", "../assets/images/button-2.png");
    $("#btn-handle-3").attr("src", "../assets/images/button-3.png");
    $(`#btn-handle-${activeSection}`).attr(
      "src",
      `../assets/images/button-${activeSection}-active.png`
    );
  };
  activeSectionFunc();
  $("#section-up").click(function () {
    activeSection = activeSection == 1 ? 3 : activeSection - 1;
    activeSectionFunc();
  });
  $("#section-down").click(function () {
    activeSection = activeSection == 3 ? 1 : activeSection + 1;
    activeSectionFunc();
  });
  $(".btn-handle").click(function () {
    activeSection = parseInt($(this).attr("id").slice(11));
    activeSectionFunc();
  });
  $("body").on("mouseenter", ".country-item", function () {
    let country = $(this).data("country");
    $(`#${country}-map-country-info`).addClass("active");
  });
  $("body").on("mouseleave", ".country-item", function () {
    let country = $(this).data("country");
    $(`#${country}-map-country-info`).removeClass("active");
  });
  $(".mobile-detail-button").click(function () {
    $(".mobile-detail-button").removeClass("active");
    $(this).addClass("active");
    $(".mobile-detail").addClass("d-none");
    $(`#mobile-detail-${$(this).data("mobile-detail")}`).removeClass("d-none");
  });
});
