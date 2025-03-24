var chrt = document.getElementById("chartId").getContext("2d");
var chartId = new Chart(chrt, {
    type: 'pie',
    data: {
        labels: ["Cell Phones", "Headphones", "Earphones", "Smartwatches"],
        datasets: [{
            label: "Gadget Popularity",
            data: [45, 30, 50, 25], // Adjusted random values
            backgroundColor: ['#ffcc00', '#00aaff', '#ff6699', '#66ff99'], // Different colors
            hoverOffset: 8 // Slightly increased hover effect
        }],
    },
    options: {
        responsive: false,
    },
});

// line chart

var chrt = document.getElementById("lineChart").getContext("2d");
var chartId = new Chart(chrt, {
    type: 'line',
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
                label: "Cell Phones",
                data: [15, 25, 20, 30, 28, 35, 40], 
                backgroundColor: 'rgba(0, 174, 239, 0.2)',
                borderColor: '#00aaff',
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: '#00aaff',
                pointBorderColor: 'black',
                fill: true
            },
            {
                label: "Headphones",
                data: [10, 18, 12, 22, 24, 27, 30],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: '#ff6384',
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: '#ff6384',
                pointBorderColor: 'black',
                fill: true
            },
            {
                label: "Earphones",
                data: [8, 15, 10, 18, 22, 25, 28],
                backgroundColor: 'rgba(23, 248, 41, 0.2)',
                borderColor: '#36a2eb',
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: '#36a2eb',
                pointBorderColor: 'black',
                fill: true
            },
            {
                label: "Smartwatches",
                data: [5, 12, 8, 15, 18, 22, 25],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: '#4bc0c0',
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: '#4bc0c0',
                pointBorderColor: 'black',
                fill: true
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 50 
            }
        }
    },
});

window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});
