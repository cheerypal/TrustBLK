/* Script for popup actions */
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("toggle");
  var opt_btn = document.getElementById("options");
  var act = document.getElementById("tog-res");
  var whiteLST = document.getElementById("white");
  var stats = document.getElementById("stats");
  var blkMsg = document.getElementById("blk-msg");

  function checkAndDisable(state) {
    if (state === "Off") {
      stats.style.display = "none";
      whiteLST.disabled = true;
      blkMsg.style.display = "block";
    } else if (state === "On") {
      stats.style.display = "block";
      whiteLST.disabled = false;
      blkMsg.style.display = "none";
    }
  }

  btn.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: act.innerHTML }, function (res) {
      act.innerHTML = res.state;
    });
  });

  /* Check the status of the main adblocker scripts  */
  chrome.runtime.sendMessage({ reqState: true }, function (res) {
    checkAndDisable(res.state);
    if (res.state === "On") {
      act.innerHTML = "Off";
    } else if (res.state === "Off") {
      act.innerHTML = "On";
    }
  });

  /* Open options page */
  opt_btn.addEventListener("click", function () {
    chrome.runtime.openOptionsPage();
  });
});

/* Check and disable ui on the popup depending on the adblocker's state. */
