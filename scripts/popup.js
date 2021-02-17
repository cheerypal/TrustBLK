/* Script for popup actions */
var data = [];

document.addEventListener("DOMContentLoaded", () => {
  var btn = document.getElementById("toggle");
  var opt_btn = document.getElementById("options");
  var act = document.getElementById("tog-res");
  var white_btn = document.getElementById("white");
  var stats = document.getElementById("stats");
  var blkMsg = document.getElementById("blk-msg");

  // data variables
  var total = document.getElementById("blk-tot");
  var scr = document.getElementById("blk-scr");
  var host = document.getElementById("blk-hst");

  /* Check and disable ui on the popup depending on the adblocker's state. */
  function checkAndDisable(state) {
    if (state === "Off") {
      stats.style.display = "none";
      white_btn.disabled = true;
      blkMsg.style.display = "block";
      document.body.style.height = "320px";
    } else if (state === "On") {
      stats.style.display = "block";
      white_btn.disabled = false;
      blkMsg.style.display = "none";
    }
  }

  // return a hostname from a url
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

  /* Actions for the on and off button */
  btn.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: act.innerHTML }, (res) => {
      act.innerHTML = res.state;
    });
    chrome.runtime.sendMessage({ reload: true });
    location.reload();
  });

  /* Check the status of the main adblocker scripts  */
  chrome.runtime.sendMessage({ reqState: true }, (res) => {
    checkAndDisable(res.state);
    if (res.state === "On") {
      act.innerHTML = "Off";
    } else if (res.state === "Off") {
      act.innerHTML = "On";
    }
  });

  /* Open options page */
  opt_btn.addEventListener("click", () => {
    chrome.runtime.openOptionsPage();
  });

  // query what tab the user is on and return the hostname to the pageurl section
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    var pageID = document.getElementById("pageURL");
    let tab = tabs[0].url;
    pageID.innerHTML = getHostname(tab);
  });

  // get and display blocking numbers - these are the stats that are collected by this adblocker.
  // in order to keep things simple only total blocked, AA scripts and hosts are collected.
  total.innerHTML = localStorage.tot_blocked;

  host.innerHTML = localStorage.page_ads;

  let zero = localStorage.page_scr;
  let first = localStorage.page_gen;
  let second = localStorage.page_user;
  scr.innerHTML = parseInt(zero) + parseInt(first) + parseInt(second);
});
