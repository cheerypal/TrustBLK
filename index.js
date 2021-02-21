/* This will interact with the page content */

// this will inject CSS code into the webpage that the user is viewing
chrome.runtime.sendMessage({ inject: true }, (res) => {
  var stylesheet = document.createElement("style");
  stylesheet.nodeType = "text/css";
  stylesheet.innerText = res.styling;

  document.head.appendChild(stylesheet);
});

// find nodes in the DOM that contain the word "Advertisement | Ad | Sponsered | Promo | Promotion"
document.addEventListener("DOMContentLoaded", () => {
  var documentArea = 0;

  var ads = document.querySelectorAll(
    "#ad, #advert, #ads, #ad-banner, #adbanner, #adbar, #sponsor, #sponsors, #ad-link, #banner-ad, #masthead-ad, #ad-masthead, #amazon-video-ads-iframe,.ad, .advert, .ad-banner, .adbanner, .adbar,.sponsor, .sponsors,.ad-link, .banner-ad, .masthead-ad .ad-masthead,#awin, #adstrip, #adbox, #adFrame, #splashFrame,#overture, #spons, #bigad"
  );
  documentArea = window.innerWidth * window.innerHeight;

  var onloadArea = Math.floor(documentArea * 0.15);
  console.log(onloadArea);
  for (i in ads) {
    let advert = ads[i];
    console.log(advert);
    if (advert.nodeName === "IMG") {
      const img = new Image();
      console.log(advert.src);
      img.onload = function () {
        let area = this.height * this.width;
        console.log(area);
        if (this.height < 200) {
          if (area < onloadArea) {
            if (advert.parentElement.textContent.includes("Advertisement")) {
              advert.classList.add("TRUSTBLK-show-ad-img");
              advert.parentElement.classList.add("TRUSTBLK-highlight");
            }
          }
        }
      };
      img.src = advert.src;
    }
  }
});
