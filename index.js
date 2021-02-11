/* This will interact with the page content
This will be the main adblocker script.
*/

chrome.runtime.sendMessage({ inject: true }, function (res) {
  var stylesheet = document.createElement("style");
  stylesheet.nodeType = "text/css";
  stylesheet.innerText = res.styling;
  document.head.appendChild(stylesheet);
});
