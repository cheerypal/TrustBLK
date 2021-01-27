/* This will be background scripts that will create functionality for the adblocker */
/* init check for any local storage */
if (typeof Storage !== "undefined") {
  if (!localStorage.state) {
    localStorage.setItem("state", "On");
  }
}

/* Check AdBlock Status */
chrome.runtime.onMessage.addListener(function (req, send, res) {
  if (typeof Storage !== "undefined") {
    if (req.reqState && localStorage.state) res({ state: localStorage.state });
  }
});

/* Change adblock status */
chrome.runtime.onMessage.addListener(function (req, send, res) {
  if (typeof Storage !== "undefined") {
    if (req.action === "Off") {
      localStorage.setItem("state", "Off");
      console.log("off");
      res({ state: "On" });
    } else {
      localStorage.setItem("state", "On");
      console.log("on");
      res({ state: "Off" });
    }
  }
});
