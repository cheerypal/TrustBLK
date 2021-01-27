document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("toggle");
  var act = document.getElementById("tog-res");
  btn.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: act.innerHTML }, function (res) {
      act.innerHTML = res.state;
    });
  });

  chrome.runtime.sendMessage({ reqState: true }, function (res) {
    if (res.state === "On") {
      act.innerHTML = "Off";
    } else {
      act.innerHTML = "On";
    }
  });
});
