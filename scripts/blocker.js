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

  chrome.webRequest.onBeforeRequest.addListener(
    () => {
      if (localStorage.BLKState === "On") return { cancel: true };
      else return { cancel: false };
    },
    { urls: formatFilterList(anti_ad["filter"]) },
    ["blocking"]
  );
}
// i aim to do this next stage using the regex -> *://*/*/*script.*
/* this will categorise requests by finding the protocol but also the website and sub paths within the website*/

// take in a filter element and change it to *://*/*/*<script>
// outputs a list full of adblock ready filters
function formatFilterList(list) {
  let improvedList = [];
  let prefix = "*://*/*/*";
  for (i in list) {
    improvedList.push(prefix + list[i]);
  }
  return improvedList;
}
