// Fans Growth Chart
var options = {
  chart: {
    height: 140,
    type: "area",
    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },

  colors: ["#ffffff"],

  series: [
    {
      name: "Views",
      data: [6435, 10435, 7435, 3457, 9345],
    },
  ],

  yaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      show: false,
    },
  },

  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      show: false,
    },
  },

  grid: {
    show: false,
    padding: {
      top: 0,
      bottom: 0,
      right: 0,
      left: -10,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },

  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0,
      opacityTo: 0.5,
      stops: [0, 90, 100],
    },
    colors: ["#ffffff"],
  },

  markers: {
    colors: ["#ffffff"],
  },

  annotations: {
    position: "front",
    yaxis: [
      {
        y: 0,
        y2: null,
        strokeDashArray: 1,
        borderColor: "#c2c2c2",
        fillColor: "#c2c2c2",
        opacity: 0.3,
        offsetX: 0,
        offsetY: -3,
        width: "100%",
        yAxisIndex: 0,
        label: {
          borderColor: "#c2c2c2",
          borderWidth: 1,
          borderRadius: 2,
          text: undefined,
          textAnchor: "end",
          position: "right",
          offsetX: 0,
          offsetY: 0,
          mouseEnter: undefined,
          mouseLeave: undefined,
          style: {
            background: "#fff",
            color: "#777",
            fontSize: "12px",
            fontWeight: 400,
            fontFamily: undefined,
            cssClass: "apexcharts-yaxis-annotation-label",
            padding: {
              left: 5,
              right: 5,
              top: 0,
              bottom: 2,
            },
          },
        },
      },
    ],
    xaxis: [
      {
        x: 0,
        x2: null,
        strokeDashArray: 1,
        borderColor: "#c2c2c2",
        fillColor: "#c2c2c2",
        opacity: 0.3,
        offsetX: 0,
        offsetY: 0,
        label: {
          borderColor: "#c2c2c2",
          borderWidth: 1,
          borderRadius: 2,
          text: undefined,
          textAnchor: "middle",
          position: "top",
          orientation: "vertical",
          offsetX: 0,
          offsetY: 0,
          mouseEnter: undefined,
          mouseLeave: undefined,
          style: {
            background: "#fff",
            color: "#777",
            fontSize: "12px",
            fontWeight: 400,
            fontFamily: undefined,
            cssClass: "apexcharts-xaxis-annotation-label",
          },
        },
      },
    ],
    points: [
      {
        x: 0,
        y: null,
        yAxisIndex: 0,
        seriesIndex: 0,
        mouseEnter: undefined,
        mouseLeave: undefined,
        marker: {
          size: 0,
          fillColor: "#fff",
          strokeColor: "#333",
          strokeWidth: 3,
          shape: "circle",
          radius: 2,
          OffsetX: 0,
          OffsetY: 0,
          cssClass: "",
        },
        label: {
          borderColor: "#c2c2c2",
          borderWidth: 1,
          borderRadius: 2,
          text: undefined,
          textAnchor: "middle",
          offsetX: 0,
          offsetY: -15,
          mouseEnter: undefined,
          mouseLeave: undefined,
          style: {
            background: "#fff",
            color: "#777",
            fontSize: "12px",
            fontWeight: 400,
            fontFamily: undefined,
            cssClass: "apexcharts-point-annotation-label",
            padding: {
              left: 5,
              right: 5,
              top: 0,
              bottom: 2,
            },
          },
        },
        image: {
          path: undefined,
          width: 20,
          height: 20,
          offsetX: 0,
          offsetY: 0,
        },
      },
    ],

    texts: [
      {
        x: 0,
        y: 0,
        text: "",
        textAnchor: "start",
        foreColor: undefined,
        fontSize: "13px",
        fontFamily: undefined,
        fontWeight: 400,
        appendTo: ".apexcharts-annotations",
        backgroundColor: "transparent",
        borderColor: "#c2c2c2",
        borderRadius: 0,
        borderWidth: 0,
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
      },
    ],

    images: [
      {
        path: "",
        x: 0,
        y: 0,
        width: 20,
        height: 20,
        appendTo: ".apexcharts-annotations",
      },
    ],
  },
};

var chart = new ApexCharts(
  document.querySelector("#fans-growth-chart"),
  options
);

chart.render();

$(document).ready(function () {
  // Side Bar
  $(".fan-boxes .fan-box .fan-box-top .btns .info-btn").on(
    "click",
    function () {
      if ($(this).parent().parent().parent().hasClass("active")) {
        $(".fan-boxes .fan-box").removeClass("active");
        $(this).parent().parent().parent().removeClass("active");
      } else {
        $(".fan-boxes .fan-box").removeClass("active");
        $(this).parent().parent().parent().addClass("active");
      }
    }
  );

  // Recent Notifications
  $(".recent-notifications-wrapper").on('scroll', function() {
    if($(".recent-notifications-wrapper").scrollLeft() > 0) {
      $(".recent-notifications-controls-next-btn").removeClass('active');
      $(".recent-notifications-controls-prev-btn").addClass('active');
    } else {
      $(".recent-notifications-controls-next-btn").addClass('active');
      $(".recent-notifications-controls-prev-btn").removeClass('active');
    }
  });

  $(".recent-notifications-controls-next-btn").on("click", function () {
    $(".recent-notifications-wrapper").animate({
      scrollLeft: $(".recent-notifications-wrapper").scrollLeft() + 620,
    });
  });

  $(".recent-notifications-controls-prev-btn").on("click", function () {
    $(".recent-notifications-wrapper").animate({
      scrollLeft: $(".recent-notifications-wrapper").scrollLeft() - 620,
    });
  });
});
