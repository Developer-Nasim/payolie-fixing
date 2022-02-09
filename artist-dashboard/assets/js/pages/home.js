// Growth Chart
var options = {
    chart: {
        height: 300,
        type: "area",
        toolbar: {
            show: false,
        }
    },

    dataLabels: {
        enabled: false
    },

    colors: ['#ECE9F1', '#422F8A'],

    series: [
        {
            name: "Views",
            data: [6435, 10435, 7435, 10435, 5688, 3457]
        },

        {
            name: "Fans",
            data: [8535, 6000, 12324, 5200, 13324, 2324]
        }
    ],

    grid: {
        show: true,
        padding: {
            right: 0
        },
        xaxis: {
            lines: {
                show: false
            }
        },   
        yaxis: {
            lines: {
                show: true
            }
        }
    },

    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.1,
            opacityTo: 0.4,
            stops: [0, 90, 100]
        },
        colors: ['#422F8A'],
    },

    markers: {
        colors: ['#ECE9F1', '#422F8A']
    },

    xaxis: {
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Jun",
            "Jul",
        ]
    }
};

var chart = new ApexCharts(document.querySelector("#streams-chart"), options);

chart.render();