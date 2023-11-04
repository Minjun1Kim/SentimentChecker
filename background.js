// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, {message: 'getDOM'}, function(response) {
      analyzeSentiment(response);
    });
  });
  
  function analyzeSentiment(dom) {
    // Use a sentiment analysis library or API to analyze the sentiment of the text
    // Display the results in a bar or chart
  }