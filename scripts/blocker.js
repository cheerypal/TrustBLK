/* Blocking requests */
/* Ad-requests and sketchy sites will be blocked here */

var hostCount = 0;
var aaCount = 0;
var genCount = 0;
var overall = 0;

// init counters
function init() {
  if (!localStorage.tot_blocked) {
    localStorage.tot_blocked = 0;
  }
  overall = localStorage.getItem("tot_blocked");
  console.log(overall);
}

if (typeof Storage !== "undefined") {
  // init counters -> here we will initialise the counters to 0 if they do not already exist.
  init();

  // blocks adservers and url based requests
  // this element uses *://*.<url>/<pages>
  chrome.webRequest.onBeforeRequest.addListener(
    () => {
      if (localStorage.BLKState === "On") {
        localStorage.setItem("tot_blocked", overall++);
        return { cancel: true };
      } else return { cancel: false };
    },
    { urls: hosts["hosts"] },
    ["blocking"]
  );

  // blocks anti ad scripts
  // this element uses *://*/*/*script.*
  chrome.webRequest.onBeforeRequest.addListener(
    () => {
      if (localStorage.BLKState === "On") {
        localStorage.setItem("tot_blocked", overall++);
        return { cancel: true };
      } else return { cancel: false };
    },
    { urls: formatFilterList(anti_ad["filter"], "*://*/*/*") },
    ["blocking"]
  );

  // blocks everything else
  // this element uses *://*/*/<item>.* or *://*/*/<item>/*
  chrome.webRequest.onBeforeRequest.addListener(
    () => {
      if (localStorage.BLKState === "On") {
        localStorage.setItem("tot_blocked", overall++);
        return { cancel: true };
      } else return { cancel: false };
    },
    { urls: formatFilterList(general["block"], "*://*/*/") },
    ["blocking"]
  );

  // removes CSS that is associated with ads.
  // This will send the css that is stored in blockCSS.js to the content script - index.js
  chrome.runtime.onMessage.addListener((req, send, res) => {
    if (req.inject) {
      if (localStorage.BLKState === "On") {
        res({ styling: css["style"] });
      }
    }
  });
}

// i aim to do this next stage using the regex -> *://*/*/*script.*
// this will categorise requests by finding the protocol but also the website and sub paths within the website

// take in a filter element and change it to *://*/*/*<script>
// outputs a list full of adblock ready filters
function formatFilterList(list, prefix) {
  let improvedList = [];
  for (i in list) {
    improvedList.push(prefix + list[i]);
  }
  return improvedList;
}
