const draw_year_times = (start_year, year_count, active_number) => {
  let html = "";
  for (let i = 0; i < year_count; i++) {
    let current_year = start_year + i;
    let year_class = i == active_number ? "year-time active" : "year-time";
    html += `
    <div class="${year_class}" id="year_${current_year}" data-order="${i}">
      <span class="pt_middle">${current_year}</span>
    </div>`;
  }
  $("#year-times").html(html);
};
$(document).ready(function () {
  let startYear = 2014;
  let yearCount = 10;
  let activeNumber = 0;
  if ($(window).width() > 575) {
    $("#years-container").removeClass("gap-2");
    $("#years-container").addClass("gap-4");
    yearCount = 10;
  } else {
    $("#years-container").removeClass("gap-4");
    $("#years-container").addClass("gap-2");
    yearCount = 4;
  }
  draw_year_times(startYear, yearCount, activeNumber);
  $("#prev-btn").click(function () {
    if (activeNumber == 0) {
      startYear--;
    } else {
      activeNumber--;
    }
    draw_year_times(startYear, yearCount, activeNumber);
  });
  $("#next-btn").click(function () {
    if (activeNumber == yearCount - 1) {
      startYear++;
    } else {
      activeNumber++;
    }
    draw_year_times(startYear, yearCount, activeNumber);
  });
  $("body").on("click", ".year-time", function () {
    activeNumber = $(this).data("order");
    draw_year_times(startYear, yearCount, activeNumber);
  });
  $(window).resize(function () {
    if ($(window).width() > 575) {
      $("#years-container").removeClass("gap-2");
      $("#years-container").addClass("gap-4");
      yearCount = 10;
    } else {
      $("#years-container").removeClass("gap-4");
      $("#years-container").addClass("gap-2");
      yearCount = 4;
      if (activeNumber >= yearCount) activeNumber = yearCount - 1;
    }
    draw_year_times(startYear, yearCount, activeNumber);
  });
  $("#table-1").DataTable({
    paging: false,
    searching: false,
    info: false,
    order: false,
  });
});
