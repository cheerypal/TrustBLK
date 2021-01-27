document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("toggle");
  var act = document.getElementById("tog-res");
  btn.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: act.innerHTML }, function (res) {
      console.log("click");
      act.innerHTML = res.state;
    });
  });
});
