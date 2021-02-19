/* Script for popup actions */

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

  var s = document.getElementById("state");

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

  // query what tab the user is on and return the hostname to the pageurl section
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    var pageID = document.getElementById("pageURL");
    let tab = tabs[0].url;
    let url = getHostname(tab);

    // check whether the site the user is on is currently whitelisted.
    //If it is whitelisted then display "WhiteListed" and restrict the view of the number of ads that have been blocked.
    pageID.innerHTML = url;
    if (typeof Storage !== "undefined") {
      let white_list = JSON.parse(localStorage.user)["white"];
      for (i in white_list) {
        if (url === white_list[i]) {
          stats.style.display = "none";
          blkMsg.style.display = "block";
          document.body.style.height = "350px";
          btn.disabled = true;
          s.style.display = "block";
          break;
        } else {
          s.style.display = "none";
        }
      }
    }
  });

  // changes to the popup UI when the popup is clicked an loaded.
  if (typeof Storage !== "undefined") {
    if (localStorage.Blocking === "Off") {
      white_btn.innerHTML = "Block Site";
    } else {
      s.style.display = "none";
      white_btn.innerHTML = "Whitelist Site";
    }
    if (localStorage.BLKState === "Off") {
      white_btn.disabled = true;
      stats.style.display = "none";
      blkMsg.style.display = "block";
      document.body.style.height = "350px";
    } else {
      btn.disabled = false;
      white_btn.disabled = false;
      stats.style.display = "block";
      blkMsg.style.display = "none";
    }
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

  // get and display blocking numbers - these are the stats that are collected by this adblocker.
  // in order to keep things simple only total blocked, AA scripts and hosts are collected.
  total.innerHTML = localStorage.tot_blocked;

  host.innerHTML = localStorage.page_ads;

  let zero = localStorage.page_scr;
  let first = localStorage.page_gen;
  let second = localStorage.page_user;
  scr.innerHTML = parseInt(zero) + parseInt(first) + parseInt(second);

  // function to listen to when the whitelist button is clicked.
  // This will either add or remove the the site to the whitelist storage for the user.
  // when the user clicks it 0.5 second later the extension will reload
  white_btn.addEventListener("click", () => {
    if (typeof Storage !== "undefined") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let url = getHostname(tabs[0].url);
        let currentStorage = JSON.parse(localStorage.user);
        let whiteList = currentStorage["white"];
        let found = false;
        for (i in whiteList) {
          if (url === whiteList[i]) {
            whiteList.splice([i], 1);
            found = true;
            white_btn.innerHTML = "Whitelist Site";
            s.style.display = "none";
            stats.style.display = "block";
            blkMsg.style.display = "none";
            document.body.style.height = "540px";
            btn.disabled = false;
            break;
          }
        }
        if (found === false) {
          whiteList.push(url);
          white_btn.innerHTML = "Block Site";
          s.style.display = "block";
          stats.style.display = "none";
          blkMsg.style.display = "block";
          document.body.style.height = "350px";
          btn.disabled = true;
        }

        let data = {
          block: currentStorage["block"],
          white: whiteList,
        };
        localStorage.setItem("user", JSON.stringify(data));
        chrome.tabs.reload(tabs[0].id);
        location.reload;
      });
    }
  });
});
