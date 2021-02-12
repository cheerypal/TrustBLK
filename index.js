/* This will interact with the page content */

function blockScripts() {
  var scripts = document.getElementsByTagName("script");
  for (script in scripts) {
    try {
      if (/antiadblock.*/.test(scripts[script].attributes.src.nodeValue)) {
        scripts[script].parentNode.removeChild(scripts[script]);
      }
    } catch (e) {}
  }
}

blockScripts();

chrome.runtime.sendMessage({ inject: true }, (res) => {
  var stylesheet = document.createElement("style");
  stylesheet.nodeType = "text/css";
  stylesheet.innerText = res.styling;

  document.head.appendChild(stylesheet);
});

chrome.runtime.sendMessage(
  { port: window.location.port, hostname: window.location.hostname },
  (res) => {}
);
