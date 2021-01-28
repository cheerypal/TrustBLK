/* Script for popup actions */
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("toggle");
  var opt_btn = document.getElementById("options");
  var act = document.getElementById("tog-res");
  var white_btn = document.getElementById("white");
  var stats = document.getElementById("stats");
  var blkMsg = document.getElementById("blk-msg");

  /* Check and disable ui on the popup depending on the adblocker's state. */
  function checkAndDisable(state) {
    if (state === "Off") {
      stats.style.display = "none";
      white_btn.disabled = true;
      blkMsg.style.display = "block";
    } else if (state === "On") {
      stats.style.display = "block";
      white_btn.disabled = false;
      blkMsg.style.display = "none";
    }
  }

  /* Actions for the on and off button */
  btn.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: act.innerHTML }, function (res) {
      act.innerHTML = res.state;
    });
    chrome.runtime.sendMessage({ reload: true });
    location.reload();
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
