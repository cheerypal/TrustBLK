/* Blocking requests */
/* Ad-requests and sketchy sites will be blocked here */

if (typeof Storage !== "undefined") {
  if (localStorage.BLKState) {
    if (localStorage.BLKState === "On") {
      chrome.webRequest.onBeforeRequest.addListener(
        function () {
          return { cancel: true };
        },
        { urls: ["*://*.doubleclick.net/*"] },
        ["blocking"]
      );
    }
  }
}
