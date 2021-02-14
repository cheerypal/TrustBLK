/* This will be background scripts that will create functionality for the adblocker */

/* Set up badge for showing how many ads have been blocked */
chrome.browserAction.setBadgeBackgroundColor({ color: "#242423" });

/* init check for any local storage */
if (typeof Storage !== "undefined") {
  if (!localStorage.BLKState) {
    localStorage.setItem("BLKState", "On");
  }
}

/* Display badge notifying user if the adblocker is on*/
if (localStorage.BLKState === "Off") {
  chrome.browserAction.setBadgeText({ text: "Off" });
}

/* Check AdBlock Status */
chrome.runtime.onMessage.addListener((req, send, res) => {
  if (typeof Storage !== "undefined") {
    if (req.reqState && localStorage.BLKState)
      res({ state: localStorage.BLKState });
  }
});

/* Change adblock status */
chrome.runtime.onMessage.addListener((req, send, res) => {
  if (typeof Storage !== "undefined") {
    if (req.action === "Off") {
      localStorage.setItem("BLKState", "Off");
      chrome.browserAction.setBadgeText({ text: "Off" });
      console.log("off");
      res({ state: "On" });
    } else if (req.action === "On") {
      localStorage.setItem("BLKState", "On");
      chrome.browserAction.setBadgeText({ text: "" });
      console.log("on");
      res({ state: "Off" });
    }
  }
});

/* Reload the page if the adblockers state changes */
chrome.runtime.onMessage.addListener((req, send, res) => {
  if (req.reload) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.reload(tabs[0].id);
    });
  }
});
