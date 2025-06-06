"use strict";
!(function () {
  let e, r, a;
  a = (
    isDarkStyle
      ? ((e = config.colors_dark.textMuted),
        (r = config.colors_dark.headingColor),
        config.colors_dark)
      : ((e = config.colors.textMuted),
        (r = config.colors.headingColor),
        config.colors)
  ).borderColor;
  var s = {
      donut: {
        series1: "#71dd37e8",
        series2: "#71dd37bf",
        series3: config.colors.success,
        series4: "#71dd3799",
        series5: "#71dd3766",
        series6: "#71dd3733",
      },
    },
    t = document.querySelector("#leadsReportChart"),
    s = {
      chart: { height: 157, width: 130, parentHeightOffset: 0, type: "donut" },
      labels: ["36h", "56h", "16h", "32h", "56h", "16h"],
      series: [23, 35, 10, 20, 35, 23],
      colors: [
        s.donut.series1,
        s.donut.series2,
        s.donut.series3,
        s.donut.series4,
        s.donut.series5,
        s.donut.series6,
      ],
      stroke: { width: 0 },
      dataLabels: {
        enabled: !1,
        formatter: function (e, a) {
          return parseInt(e) + "%";
        },
      },
      legend: { show: !1 },
      tooltip: { theme: !1 },
      grid: { padding: { top: 0 } },
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
            labels: {
              show: !0,
              value: {
                fontSize: "1.5rem",
                fontFamily: "Public Sans",
                color: r,
                fontWeight: 500,
                offsetY: -15,
                formatter: function (e) {
                  return parseInt(e) + "%";
                },
              },
              name: { offsetY: 20, fontFamily: "Public Sans" },
              total: {
                show: !0,
                fontSize: ".7rem",
                label: "Total",
                color: e,
                formatter: function (e) {
                  return "231h";
                },
              },
            },
          },
        },
      },
    };
  null !== t && new ApexCharts(t, s).render();
  const o = document.querySelector("#horizontalBarChart"),
    n = {
      chart: { height: 270, type: "bar", toolbar: { show: !1 } },
      plotOptions: {
        bar: {
          horizontal: !0,
          barHeight: "70%",
          distributed: !0,
          startingShape: "rounded",
          borderRadius: 7,
        },
      },
      grid: {
        strokeDashArray: 10,
        borderColor: a,
        xaxis: { lines: { show: !0 } },
        yaxis: { lines: { show: !1 } },
        padding: { top: -35, bottom: -12 },
      },
      colors: [
        config.colors.primary,
        config.colors.info,
        config.colors.success,
        config.colors.secondary,
        config.colors.danger,
        config.colors.warning,
      ],
      dataLabels: {
        enabled: !0,
        style: {
          colors: ["#fff"],
          fontWeight: 200,
          fontSize: "13px",
          fontFamily: "Public Sans",
        },
        formatter: function (e, a) {
          return n.labels[a.dataPointIndex];
        },
        offsetX: 0,
        dropShadow: { enabled: !1 },
      },
      labels: ["UI Design", "UX Design", "Music", "Animation", "React", "SEO"],
      series: [{ data: [35, 20, 14, 12, 10, 9] }],
      xaxis: {
        categories: ["6", "5", "4", "3", "2", "1"],
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: {
          style: { colors: e, fontSize: "13px" },
          formatter: function (e) {
            return e + "%";
          },
        },
      },
      yaxis: {
        max: 35,
        labels: {
          style: { colors: [e], fontFamily: "Public Sans", fontSize: "13px" },
        },
      },
      tooltip: {
        enabled: !0,
        style: { fontSize: "12px" },
        onDatasetHover: { highlightDataSeries: !1 },
        custom: function ({ series: e, seriesIndex: a, dataPointIndex: s }) {
          return '<div class="px-3 py-2"><span>' + e[a][s] + "%</span></div>";
        },
      },
      legend: { show: !1 },
    };
  null !== o && new ApexCharts(o, n).render();
  var i,
    t = document.querySelectorAll(".chart-progress"),
    s =
      (t &&
        t.forEach(function (e) {
          var a = config.colors[e.dataset.color],
            s = e.dataset.series,
            t = e.dataset.progress_variant,
            a =
              ((a = a),
              (s = s),
              {
                chart: {
                  height: "true" == (t = t) ? 58 : 55,
                  width: "true" == t ? 58 : 45,
                  type: "radialBar",
                },
                plotOptions: {
                  radialBar: {
                    hollow: { size: "true" == t ? "45%" : "25%" },
                    dataLabels: {
                      show: "true" == t,
                      value: {
                        offsetY: -10,
                        fontSize: "15px",
                        fontWeight: 500,
                        fontFamily: "Public Sans",
                        color: r,
                      },
                    },
                    track: { background: config.colors_label.secondary },
                  },
                },
                stroke: { lineCap: "round" },
                colors: [a],
                grid: {
                  padding: {
                    top: "true" == t ? -12 : -15,
                    bottom: "true" == t ? -17 : -15,
                    left: "true" == t ? -17 : -5,
                    right: -15,
                  },
                },
                series: [s],
                labels: "true" == t ? [""] : ["Progress"],
              });
          new ApexCharts(e, a).render();
        }),
      $(".datatables-academy-course")),
    l = {
      angular:
        '<span class="badge bg-label-danger p-2"><i class="bx bxl-angular fs-3"></i></span>',
      figma:
        '<span class="badge bg-label-warning p-2"><i class="bx bxl-figma fs-3"></i></span>',
      react:
        '<span class="badge bg-label-info p-2"><i class="bx bxl-react fs-3"></i></span>',
      art: '<span class="badge bg-label-success p-2"><i class="bx bxs-color fs-3"></i></span>',
      fundamentals:
        '<span class="badge bg-label-primary p-2"><i class="bx bx-diamond fs-3"></i></span>',
    };
  s.length &&
    ((i = s.DataTable({
      ajax: assetsPath + "json/app-academy-dashboard.json",
      columns: [
        { data: "" },
        { data: "id" },
        { data: "course name" },
        { data: "time" },
        { data: "progress" },
        { data: "status" },
      ],
      columnDefs: [
        {
          className: "control",
          searchable: !1,
          orderable: !1,
          responsivePriority: 2,
          targets: 0,
          render: function (e, a, s, t) {
            return "";
          },
        },
        {
          targets: 1,
          orderable: !1,
          searchable: !1,
          checkboxes: !0,
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">',
          },
          render: function () {
            return '<input type="checkbox" class="dt-checkboxes form-check-input">';
          },
        },
        {
          targets: 2,
          responsivePriority: 2,
          render: function (e, a, s, t) {
            var r = s.logo,
              o = s.course,
              n = s.user,
              i = s.image;
            return (
              (s = i
                ? '<img src="' +
                  assetsPath +
                  "img/avatars/" +
                  i +
                  '" alt="Avatar" class="rounded-circle">'
                : '<span class="avatar-initial rounded-circle bg-label-' +
                  [
                    "success",
                    "danger",
                    "warning",
                    "info",
                    "dark",
                    "primary",
                    "secondary",
                  ][Math.floor(6 * Math.random())] +
                  '">' +
                  (i = (
                    ((i = s.user.match(/\b\w/g) || []).shift() || "") +
                    (i.pop() || "")
                  ).toUpperCase()) +
                  "</span>"),
              '<div class="d-flex align-items-center"><span class="me-3">' +
                l[r] +
                '</span><div><a class="text-heading text-truncate fw-medium mb-2 text-wrap" href="app-academy-course-details.html">' +
                o +
                '</a><div class="d-flex align-items-center mt-1"><div class="avatar-wrapper me-2"><div class="avatar avatar-xs">' +
                s +
                '</div></div><span class="text-nowrap">' +
                n +
                "</span></div></div></div>"
            );
          },
        },
        {
          targets: 3,
          responsivePriority: 3,
          render: function (e, a, s, t) {
            var e = moment.duration(e),
              r = Math.floor(e.asHours());
            return (
              '<span class="fw-medium text-nowrap">' +
              (r + "h " + (Math.floor(e.asMinutes()) - 60 * r) + "m") +
              "</span>"
            );
          },
        },
        {
          targets: 4,
          render: function (e, a, s, t) {
            var r = s.status;
            return (
              '<div class="d-flex align-items-center gap-3"><p class="fw-medium mb-0">' +
              r +
              '</p><div class="progress w-100" style="height: 8px;"><div class="progress-bar" style="width: ' +
              r +
              '" aria-valuenow="' +
              r +
              '" aria-valuemin="0" aria-valuemax="100"></div></div><small class="text-muted">' +
              s.number +
              "</small></div>"
            );
          },
        },
        {
          targets: 5,
          render: function (e, a, s, t) {
            return (
              '<div class="d-flex align-items-center justify-content-between"><div class="w-px-50 d-flex align-items-center"><i class="bx bx-user bx-xs me-2 text-primary"></i>' +
              s.user_number +
              '</div><div class="w-px-50 d-flex align-items-center"><i class="bx bx-book-open bx-xs me-2 text-info" ></i>' +
              s.note +
              '</div><div class="w-px-50 d-flex align-items-center"><i class="bx bx-video bx-xs me-2 text-danger" ></i>' +
              s.view +
              "</div></div>"
            );
          },
        },
      ],
      order: [[2, "desc"]],
      dom: '<"card-header flex-column flex-md-row"<"head-label text-center">f>t<"row mx-4"<"col-sm-6 col-12 text-center text-xl-start pb-2 pb-xl-0 px-0"i><"col-sm-6 col-12 d-flex justify-content-center justify-content-xl-end px-0"p>>',
      lengthMenu: [5],
      language: {
        sLengthMenu: "_MENU_",
        search: "",
        searchPlaceholder: "Buscar por nombre",
      },
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (e) {
              return "Details of " + e.data().order;
            },
          }),
          type: "column",
          renderer: function (e, a, s) {
            s = $.map(s, function (e, a) {
              return "" !== e.title
                ? '<tr data-dt-row="' +
                    e.rowIndex +
                    '" data-dt-column="' +
                    e.columnIndex +
                    '"><td>' +
                    e.title +
                    ":</td> <td>" +
                    e.data +
                    "</td></tr>"
                : "";
            }).join("");
            return !!s && $('<table class="table"/><tbody />').append(s);
          },
        },
      },
    })),
    $("div.head-label").html(
      '<h5 class="card-title mb-0 text-nowrap">Lista de Usuarios</h5>'
    )),
    $(".datatables-orders tbody").on("click", ".delete-record", function () {
      i.row($(this).parents("tr")).remove().draw();
    }),
    setTimeout(() => {
      $(".dataTables_filter .form-control").removeClass("form-control-sm"),
        $(".dataTables_length .form-select").removeClass("form-select-sm");
    }, 300);
})();
