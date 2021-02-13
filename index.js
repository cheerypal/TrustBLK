/* This will interact with the page content */

// this will inject CSS code into the webpage that the user is viewing
chrome.runtime.sendMessage({ inject: true }, (res) => {
  var stylesheet = document.createElement("style");
  stylesheet.nodeType = "text/css";
  stylesheet.innerText = res.styling;

  document.head.appendChild(stylesheet);
});
