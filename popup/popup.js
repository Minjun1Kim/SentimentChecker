// popup.js
document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: 'getDOM'}, function(response) {
        // Assume response is an object like {positive: 10, neutral: 20, negative: 30}
        var ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [{
              label: '# of Votes',
              data: [response.positive, response.neutral, response.negative],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',  // color for Positive
                'rgba(255, 206, 86, 0.2)',  // color for Neutral
                'rgba(255, 99, 132, 0.2)'   // color for Negative
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',  // color for Positive
                'rgba(255, 206, 86, 1)',  // color for Neutral
                'rgba(255, 99, 132, 1)'   // color for Negative
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      });
    });
  });