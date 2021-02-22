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
  chrome.runtime.sendMessage({ accept: true }, (res) => {
    if (res.state_accept === "On") {
      var documentArea = 0;

      // Selectors that are used for ads. These selectors are queried and the first acceptable ad is allowed and presented to the user.
      var ads = document.querySelectorAll(
        "#ad, #advert, #ads, #ad-banner, #adbanner, #adbar, #sponsor, #sponsors, #ad-link, #banner-ad, #masthead-ad, #ad-masthead, #amazon-video-ads-iframe,.ad, .advert, .ad-banner, .adbanner, .adbar,.sponsor, .banner-ad-top, .sponsors,.ad-link, .banner-ad, .masthead-ad .ad-masthead,#awin, #adstrip, #adbox, #adFrame, #splashFrame,#overture, #spons, #bigad, div[class*='companion-ad-renderer'], ytd-promoted-sparkles-web-renderer,  ytd-display-ad-renderer"
      );

      // get the total document area that is available to the user. This will be used to find and check if an ad is acceptable.
      documentArea = window.innerWidth * window.innerHeight;
      // find the onload area available to the user.
      var onloadArea = Math.floor(documentArea * 0.15);
      // loop through the ads that are available to user.
      for (i in ads) {
        let advert = ads[i];

        // check if the ad is an image
        // if the ad is an image then check its initial sizing by opening the image.
        // if the image's area is lower than the onload area then the ad maybe presented.
        // due to the ad not being displayed we have to check its actaul size and not the size the page is going to format to.
        // by checking the actual size we can assume the image will either be the size of the original image or formatted down to a smaller size, this is due to enlarging, pixelating the image.
        // The ad area this then checked to see if it contains the word Ad | Advertisement | Sponsered | Promotion. If it contains one of these qualifiers then the ad is presented.
        // When the ad is allowed then the ad area is highlighted and a button is inserted to allow the user to block the ad if they like.
        // There will only be a maximum of one ad allowed on the screen at any time yet the ad must be acceptable.

        if (advert.nodeName === "IMG") {
          const img = new Image();
          console.log(advert.src);
          img.onload = function () {
            let area = this.height * this.width;
            console.log(area);
            if (this.height < 200) {
              if (area < onloadArea) {
                if (
                  advert.parentElement.textContent.includes("Ad") ||
                  advert.parentElement.textContent.includes("Advertisement") ||
                  advert.parentElement.textContent.includes("Sponsered") ||
                  advert.parentElement.textContent.includes("Promotion")
                ) {
                  advert.classList.add("TRUSTBLK-show-ad-img");
                  advert.classList.add("TRUSTBLK-highlight");
                  advert.parentElement.classList.add("TRUSTBLK-show-ad-img");
                  advert.parentElement.parentElement.classList.add(
                    "TRUSTBLK-show-ad-img"
                  );
                  let btn = document.createElement("button");
                  btn.innerHTML = "Block Acceptable Ad";
                  btn.classList.add("TRUSTBLK-button");
                  btn.addEventListener("click", () => {
                    advert.classList.remove("TRUSTBLK-show-ad-img");
                    advert.classList.remove("TRUSTBLK-highlight");
                    advert.parentElement.classList.remove(
                      "TRUSTBLK-show-ad-img"
                    );
                    advert.parentElement.parentElement.classList.remove(
                      "TRUSTBLK-show-ad-img"
                    );
                    btn.remove();
                  });
                  advert.parentElement.append(btn);
                }
              }
            }
          };
          img.src = advert.src;
          break;
        } else {
          try {
            let area =
              advert.parentElement.parentElement.offsetWidth *
              advert.parentElement.parentElement.offsetHeight;
            if (area < onloadArea) {
              if (
                advert.parentElement.textContent.includes("Ad") ||
                advert.parentElement.textContent.includes("Advertisement") ||
                advert.parentElement.textContent.includes("Sponsered") ||
                advert.parentElement.textContent.includes("Promotion")
              ) {
                advert.classList.add("TRUSTBLK-show-ad-img");
                advert.classList.add("TRUSTBLK-highlight");
                let btn = document.createElement("button");
                btn.classList.add("TRUSTBLK-button");
                btn.classList.add("TRUSTBLK-maxwidth");
                btn.innerHTML = "Block Acceptable Ad";
                btn.addEventListener("click", () => {
                  advert.classList.remove("TRUSTBLK-show-ad-img");
                  advert.classList.remove("TRUSTBLK-highlight");
                  advert.parentElement.classList.remove("TRUSTBLK-show-ad-img");
                  advert.parentElement.parentElement.classList.remove(
                    "TRUSTBLK-show-ad-img"
                  );
                  btn.remove();
                });
                advert.append(btn);
                break;
              }
            }
          } catch (e) {
            console.log("Error with Highlighting");
          }
        }
      }
    }
  });
});
