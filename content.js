chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'getDOM') {
      sendResponse(document.all[0].outerHTML);
    }
});