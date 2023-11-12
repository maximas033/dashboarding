var ctx = document.getElementById('myChart').getContext('2d');
var maxDataPoints = 100;

var randomLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      data: [],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      fill: false
    }]
  },
  options: {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }],
      yAxes: [{
        type: 'linear',
        position: 'left'
      }]
    },
    elements: {
      line: {
        tension: 0.5 // Adjust this value to control the smoothness of the curve (0.0 for linear, 1.0 for very smooth)
      }
    }
  }
});

// Function to generate and update random data
function updateRandomData() {
  // Generate a random number between 1 and 100
  var randomValue = Math.floor(Math.random() * 100) + 1;

  // Update chart data
  randomLineChart.data.labels.push('');
  randomLineChart.data.datasets[0].data.push(randomValue);

  // Remove the oldest data point if exceeding a certain number of points
  if (randomLineChart.data.labels.length > maxDataPoints) {
    // Clear existing data
    randomLineChart.data.labels = [];
    randomLineChart.data.datasets[0].data = [];

    // Restart the chart
    randomLineChart.update();
  }

  // Update the chart
  randomLineChart.update();
}

// Update data every 1 second
setInterval(updateRandomData, 1000);
