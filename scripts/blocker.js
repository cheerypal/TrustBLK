/* Blocking requests */
/* Ad-requests and sketchy sites will be blocked here */
// CSS is pushed to the content script frkm here.

// init counters and user stored data
var overall = 0;
var currentAds = 0;
var currentScripts = 0;
var currentGen = 0;
var userBLKNum = 0;
localStorage.setItem("page_ads", currentAds);
localStorage.setItem("page_scr", currentScripts);
localStorage.setItem("page_gen", currentGen);
localStorage.setItem("page_user", userBLKNum);

//init user lists
var userBlock = [];

// Init storage space for the total blocked stat
if (!localStorage.tot_blocked) {
  localStorage.setItem("tot_blocked", 0);
}

// establish user stores settings
if (!localStorage.user) {
  localStorage.setItem(
    "user",
    JSON.stringify({
      block: ["*://*.1-1ads.com/*"],
      white: ["github.com"],
    })
  );
}

// assign overall variable to the storage value.
overall = localStorage.getItem("tot_blocked");

// assign the block list generated by the user.
userBlock = JSON.parse(localStorage.getItem("user"))["block"];

// if the current page the user is on is in loading state then the stats that are recorded are reset - page stats.
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "loading") {
    // if the user storage variabel does not exist - create it and establish basic data.
    if (!localStorage.user) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          block: ["*://*.1-1ads.com/*"],
          white: ["github.com"],
        })
      );
    }

    // check if the site the user is currently on is allowed to be accessed with ads.
    let list_allow = allow["white"];

    let current = getHostname(tab.url);
    let user_white = JSON.parse(localStorage.user)["white"];

    let complete = list_allow.concat(user_white);
    for (i in complete) {
      if (current !== complete[i]) {
        localStorage.setItem("Blocking", "On");
      } else {
        localStorage.setItem("Blocking", "Off");
        break;
      }
    }
  }
});

// Blocking section. This section is grouped by type of blocking measure. Hostname, AA, General -> general paths that are related to advertisement
if (typeof Storage !== "undefined") {
  // blocks adservers and url based requests
  // this element uses *://*.<url>/<pages>
  chrome.webRequest.onBeforeRequest.addListener(
    () => {
      if (localStorage.BLKState === "On" && localStorage.Blocking === "On") {
        localStorage.setItem("page_ads", ++currentAds);
        localStorage.setItem("tot_blocked", ++overall);
        chrome.browserAction.setBadgeText({ text: "" + currentAds });
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
      if (localStorage.BLKState === "On" && localStorage.Blocking === "On") {
        localStorage.setItem("page_scr", ++currentScripts);
        localStorage.setItem("tot_blocked", ++overall);

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
      if (localStorage.BLKState === "On" && localStorage.Blocking === "On") {
        localStorage.setItem("page_gen", ++currentGen);
        localStorage.setItem("tot_blocked", ++overall);

        return { cancel: true };
      } else return { cancel: false };
    },
    { urls: formatFilterList(general["block"], "*://*/*/") },
    ["blocking"]
  );

  // this blocking section is for the users own filters. This will take filters from the user varaible stored in local storage.
  // It will block hosts and anything else the user types in. The user block list will be formatted before it is inserted into the variable
  chrome.webRequest.onBeforeRequest.addListener(
    () => {
      if (localStorage.BLKState === "On" && localStorage.Blocking === "On") {
        localStorage.setItem("page_user", ++userBLKNum);
        localStorage.setItem("tot_blocked", ++overall);

        return { cancel: true };
      } else return { cancel: false };
    },
    { urls: userBlock },
    ["blocking"]
  );

  // removes CSS that is associated with ads.
  // This will send the css that is stored in blockCSS.js to the content script - index.js
  chrome.runtime.onMessage.addListener((req, send, res) => {
    if (req.inject) {
      if (localStorage.BLKState === "On" && localStorage.Blocking === "On") {
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

// This is a copy of the hostname finder function located in the popup.js file.
// This will find the hostname from any url given to the function.
function getHostname(url) {
  let nURL = "";
  if (url[5] === ":") {
    url = url.substr(8, url.length);
  } else {
    url = url.substr(7, url.length);
  }
  for (i in url) {
    if (url[i] === "/") {
      break;
    } else {
      nURL += url[i];
    }
  }

  return nURL;
}
