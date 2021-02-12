/* Blocking requests */
/* Ad-requests and sketchy sites will be blocked here */

if (typeof Storage !== "undefined") {
  chrome.webRequest.onBeforeRequest.addListener(
    function () {
      if (localStorage.BLKState === "On") return { cancel: true };
      else return { cancel: false };
    },
    { urls: hosts["hosts"] },
    ["blocking"]
  );

  //chrome.webRequest.onBeforeRequest.addListener(function () {});
}
