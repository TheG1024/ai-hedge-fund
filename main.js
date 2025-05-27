// Sample data for the chart
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; // Added July to match data length
const data = {
    labels: labels,
    datasets: [{
        label: 'Sample Market Trend',
        backgroundColor: '#3A7CA5', // Medium Blue from visual_design_ux_principles.md
        borderColor: '#3A7CA5',     // Medium Blue from visual_design_ux_principles.md
        data: [0, 10, 5, 2, 20, 30, 45], // Sample data points (7 points)
        fill: false,
        tension: 0.1 // Makes the line slightly curved
    }]
};

// Configuration options for the chart
const config = {
    type: 'line', // Type of chart
    data: data,
    options: {
        responsive: true, // Makes chart responsive
        maintainAspectRatio: false, // Allows chart to fill container height
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
          legend: {
            labels: {
              font: {
                family: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" // Match body font
              }
            }
          },
          tooltip: {
            bodyFont: {
              family: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" // Match body font
            },
            titleFont: {
              family: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" // Match body font for tooltip titles
            }
          }
        }
    }
};

// Get the canvas element and initialize the chart
// This assumes a canvas with id 'marketChart' exists in index.html
document.addEventListener('DOMContentLoaded', () => {
    const marketChartCanvas = document.getElementById('marketChart');
    if (marketChartCanvas) {
        new Chart(marketChartCanvas, config);
    } else {
        console.error('Canvas element with id "marketChart" not found.');
    }
});
