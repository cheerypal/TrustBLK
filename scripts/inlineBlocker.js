/* Blocking Inline CSS */
/* Identifiable AD CSS selectors will be blocked here */

chrome.runtime.onMessage.addListener(function (req, send, res) {
  if (req.inject) {
    if (typeof Storage !== "undefined") {
      if (localStorage.BLKState === "On") {
        res({ styling: css["style"] });
      }
    }
  }
});
