/* This will interact with the page content
This will be the main adblocker script.
*/

chrome.runtime.sendMessage({ reqState: true }, function (res) {
  console.log(res.state);
});
