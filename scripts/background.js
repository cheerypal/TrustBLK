/* This will be background scripts that will create functionality for the adblocker */

/* Set up badge for showing how many ad have been blocked */
chrome.browserAction.setBadgeText({ text: "0" });
chrome.browserAction.setBadgeBackgroundColor({ color: "#161616" });

/* init check for any local storage */
if (typeof Storage !== "undefined") {
  if (!localStorage.BLKState) {
    localStorage.setItem("BLKState", "On");
  }
}

/* Check AdBlock Status */
chrome.runtime.onMessage.addListener(function (req, send, res) {
  if (typeof Storage !== "undefined") {
    if (req.reqState && localStorage.BLKState)
      res({ state: localStorage.BLKState });
  }
});

/* Change adblock status */
chrome.runtime.onMessage.addListener(function (req, send, res) {
  if (typeof Storage !== "undefined") {
    if (req.action === "Off") {
      localStorage.setItem("BLKState", "Off");
      console.log("off");
      res({ state: "On" });
    } else if (req.action === "On") {
      localStorage.setItem("BLKState", "On");
      console.log("on");
      res({ state: "Off" });
    }
  }
});
