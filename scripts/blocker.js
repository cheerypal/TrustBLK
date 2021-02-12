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

  function thing() {
    var newFilters = [];
    for (filter in filterlist) {
      console.log(req.hostname);
      let prefix = "*://*.";
      let suffix = "/*";
      newFilters.push(prefix + req.hostname + suffix + filterlist[filter]);
    }
  }

  chrome.webRequest.onBeforeRequest.addListener(
    function (r) {
      var hosts = [];
      if (localStorage.BLKState === "On") {
        chrome.runtime.onMessage.addListener((req, send, res) => {
          if (req.hostname) {
            hosts = ["http://127.0.0.1:5501/test2/antiadblock.js"];
          }
        });
        console.log(r);
        return { cancel: true };
      } else {
        return { cancel: false };
      }
    },
    { urls: ["http://127.0.0.1:5501/*/antiadblock.js"] },
    ["blocking"]
  );
}
