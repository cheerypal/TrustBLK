/* Blocking requests */
/* Ad-requests and sketchy sites will be blocked here */

if (typeof Storage !== "undefined") {
  // blocks adservers and url based requests
  // this element uses *://*.<url>/<pages>
  chrome.webRequest.onBeforeRequest.addListener(
    () => {
      if (localStorage.BLKState === "On") return { cancel: true };
      else return { cancel: false };
    },
    { urls: hosts["hosts"] },
    ["blocking"]
  );

  // blocks anti ad scripts
  // this element uses *://*/*/*script.*
  chrome.webRequest.onBeforeRequest.addListener(
    () => {
      if (localStorage.BLKState === "On") return { cancel: true };
      else return { cancel: false };
    },
    { urls: formatFilterList(anti_ad["filter"], "*://*/*/*") },
    ["blocking"]
  );

  // blocks everything else
  // this element uses *://*/*/<item>.* or *://*/*/<item>/*
  chrome.webRequest.onBeforeRequest.addListener(
    () => {
      if (localStorage.BLKState === "On") return { cancel: true };
      else return { cancel: false };
    },
    { urls: formatFilterList(general["block"], "*://*/*/") },
    ["blocking"]
  );
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
