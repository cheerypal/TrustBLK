const css = {
  style: `/*
* ad_blocking.css: general ad-blocking
*   Last Update: Sat Jul 12 20:07:00 CDT 2008
*
* http://www.gozer.org/mozilla/ad_blocking/
*/

/* --- primary ------------------------------------------------------------ */

/* images, plugins, iframes: domain-specific */
a[href*="a.consumer.net"] img, *[src*="a.consumer.net"],
a[href*="a.r.tv.com"] img, *[src*="a.r.tv.com"],
a[href*="a.softpedia.com"] img, *[src*="a.softpedia.com"],
a[href*="a.xanga.com"] img, *[src*="a.xanga.com"],
a[href*="a32.g.a.yimg.com"] img, *[src*="a32.g.a.yimg.com"],
a[href*="ad.abcnews.com"] img, *[src*="ad.abcnews.com"],
a[href*="ad.abctv.com"] img, *[src*="ad.abctv.com"],
a[href*="ad.about.com"] img, *[src*="ad.about.com"],
a[href*="ad.asap-asp.net"] img, *[src*="ad.asap-asp.net"],
a[href*="ad.disney.go.com"] img, *[src*="ad.disney.go.com"],
a[href*="ad.dvdforum.nu"] img, *[src*="ad.dvdforum.nu"],
a[href*="ad.howstuffworks.com"] img, *[src*="ad.howstuffworks.com"],
a[href*="ad.img.yahoo.co.kr"] img, *[src*="ad.img.yahoo.co.kr"],
a[href*="ad.infoseek.com"] img, *[src*="ad.infoseek.com"],
a[href*="ad.isohunt.com"] img, *[src*="ad.isohunt.com"],
a[href*="ad.musicmatch.com"] img, *[src*="ad.musicmatch.com"],
a[href*="ad.preferences.com"] img, *[src*="ad.preferences.com"],
a[href*="ad.tomshardware.com"] img, *[src*="ad.tomshardware.com"],
a[href*="ad.uol.com.br"] img, *[src*="ad.uol.com.br"],
a[href*="ad.usatoday.com"] img, *[src*="ad.usatoday.com"],
a[href*="ad.yourmedia.com"] img, *[src*="ad.yourmedia.com"],
a[href*="ad1.emule-project.org"] img, *[src*="ad1.emule-project.org"],
a[href*="ad1.outpost.com"] img, *[src*="ad1.outpost.com"],
a[href*="adbanner."] img, *[src*="adbanner."],
a[href*="adbutler."] img, *[src*="adbutler."],
a[href*="adclick."] img, *[src*="adclick."],
a[href*="adfarm.mediaplex.com"] img, *[src*="adfarm.mediaplex.com"],
a[href*="adfly.com"] img, *[src*="adfly.com"],
a[href*="adimages."] img, *[src*="adimages."],
a[href*="adimg."] img, *[src*="adimg."],
a[href*="adireland.com"] img, *[src*="adireland.com"],
a[href*="adlog.com"] img, *[src*="adlog.com"],
a[href*="adq.nextag.com"] img, *[src*="adq.nextag.com"],
a[href*="ads.advance.net"] img, *[src*="ads.advance.net"],
a[href*="ads.affiliates.match.com"] img, *[src*="ads.affiliates.match.com"],
a[href*="ads.allsites.com"] img, *[src*="ads.allsites.com"],
a[href*="ads.amazingmedia.com"] img, *[src*="ads.amazingmedia.com"],
a[href*="ads.aol.com"] img, *[src*="ads.aol.com"],
a[href*="ads.bigfoot.com"] img, *[src*="ads.bigfoot.com"],
a[href*="ads.cdfreaks.com"] img, *[src*="ads.cdfreaks.com"],
a[href*="ads.clearchannel.com"] img, *[src*="ads.clearchannel.com"],
a[href*="ads.cnn.com"] img, *[src*="ads.cnn.com"],
a[href*="ads.com.com"] img, *[src*="ads.com.com"],
a[href*="ads.deviantart.com"] img, *[src*="ads.deviantart.com"],
a[href*="ads.discovery.com"] img, *[src*="ads.discovery.com"],
a[href*="ads.eu.msn.com"] img, *[src*="ads.eu.msn.com"],
a[href*="ads.eudora.com"] img, *[src*="ads.eudora.com"],
a[href*="ads.ezboard.com"] img, *[src*="ads.ezboard.com"],
a[href*="ads.firingsquad.com"] img, *[src*="ads.firingsquad.com"],
a[href*="ads.forbes."] img, *[src*="ads.forbes."],
a[href*="ads.g4techtv.com"] img, *[src*="ads.g4techtv.com"],
a[href*="ads.gamespy.com"] img, *[src*="ads.gamespy.com"],
a[href*="ads.gamespyid.com"] img, *[src*="ads.gamespyid.com"],
a[href*="ads.guardian.co.uk"] img, *[src*="ads.guardian.co.uk"],
a[href*="ads.hollywood.com"] img, *[src*="ads.hollywood.com"],
a[href*="ads.icq.com"] img, *[src*="ads.icq.com"],
a[href*="ads.ign.com"] img, *[src*="ads.ign.com"],
a[href*="ads.imdb.com"] img, *[src*="ads.imdb.com"],
a[href*="ads.img.co.za"] img, *[src*="ads.img.co.za"],
a[href*="ads.indiatimes.com"] img, *[src*="ads.indiatimes.com"],
a[href*="ads.infospace.com"] img, *[src*="ads.infospace.com"],
a[href*="ads.iwon.com"] img, *[src*="ads.iwon.com"],
a[href*="ads.linuxjournal.com"] img, *[src*="ads.linuxjournal.com"],
a[href*="ads.linuxquestions.org"] img, *[src*="ads.linuxquestions.org"],
a[href*="ads.lycos-europe.com"] img, *[src*="ads.lycos-europe.com"],
a[href*="ads.lycos.com"] img, *[src*="ads.lycos.com"],
a[href*="ads.macupdate.com"] img, *[src*="ads.macupdate.com"],
a[href*="ads.mcafee.com"] img, *[src*="ads.mcafee.com"],
a[href*="ads.monster.com"] img, *[src*="ads.monster.com"],
a[href*="ads.msn.com"] img, *[src*="ads.msn.com"],
a[href*="ads.neowin.net"] img, *[src*="ads.neowin.net"],
a[href*="ads.nypost.com"] img, *[src*="ads.nypost.com"],
a[href*="ads.nytimes.com"] img, *[src*="ads.nytimes.com"],
a[href*="ads.osdn.com"] img, *[src*="ads.osdn.com"],
a[href*="ads.osnews.com"] img, *[src*="ads.osnews.com"],
a[href*="ads.phpclasses.org"] img, *[src*="ads.phpclasses.org"],
a[href*="ads.rockstargames.com"] img, *[src*="ads.rockstargames.com"],
a[href*="ads.rottentomatoes.com"] img, *[src*="ads.rottentomatoes.com"],
a[href*="ads.scifi.com"] img, *[src*="ads.scifi.com"],
a[href*="ads.simtel.net"] img, *[src*="ads.simtel.net"],
a[href*="ads.space.com"] img, *[src*="ads.space.com"],
a[href*="ads.stileproject.com"] img, *[src*="ads.stileproject.com"],
a[href*="ads.techtv.com"] img, *[src*="ads.techtv.com"],
a[href*="ads.telegraph.co.uk"] img, *[src*="ads.telegraph.co.uk"],
a[href*="ads.theglobeandmail.com"] img, *[src*="ads.theglobeandmail.com"],
a[href*="ads.thestar.com"] img, *[src*="ads.thestar.com"],
a[href*="ads.thestranger.com"] img, *[src*="ads.thestranger.com"],
a[href*="ads.tripod.com"] img, *[src*="ads.tripod.com"],
a[href*="ads.tripod.lycos."] img, *[src*="ads.tripod.lycos."],
a[href*="ads.usatoday.com"] img, *[src*="ads.usatoday.com"],
a[href*="ads.weather.com"] img, *[src*="ads.weather.com"],
a[href*="ads.web.aol.com"] img, *[src*="ads.web.aol.com"],
a[href*="ads.web.cs.com"] img, *[src*="ads.web.cs.com"],
a[href*="ads.web.de"] img, *[src*="ads.web.de"],
a[href*="ads.winsite.com"] img, *[src*="ads.winsite.com"],
a[href*="ads.wunderground.com"] img, *[src*="ads.wunderground.com"],
a[href*="ads.x10.com"] img, *[src*="ads.x10.com"],
a[href*="ads.x10.net"] img, *[src*="ads.x10.net"],
a[href*="ads.zdnet.com"] img, *[src*="ads.zdnet.com"],
a[href*="adserver."] img, *[src*="adserver."],
a[href*="advertising.com"] img, *[src*="advertising.com"],
a[href*="ar.atwola.com"] img, *[src*="ar.atwola.com"],
a[href*="atdmt.com"] img, *[src*="atdmt.com"],
a[href*="backbeatmedia.com"] img, *[src*="backbeatmedia.com"],
a[href*="banner.casino.net"] img, *[src*="banner.casino.net"],
a[href*="banner.img.co.za"] img, *[src*="banner.img.co.za"],
a[href*="banner.penguin.cz"] img, *[src*="banner.penguin.cz"],
a[href*="bannermania.nom.pl"] img, *[src*="bannermania.nom.pl"],
a[href*="banners.dot.tk"] img, *[src*="banners.dot.tk"],
a[href*="banners.ebay.com"] img, *[src*="banners.ebay.com"],
a[href*="banners.friendfinder.com"] img, *[src*="banners.friendfinder.com"],
a[href*="banners.netcraft.com"] img, *[src*="banners.netcraft.com"],
a[href*="banners.wunderground.com"] img, *[src*="banners.wunderground.com"],
a[href*="bannerserver.gator.com"] img, *[src*="bannerserver.gator.com"],
a[href*="bfast.com"] img, *[src*="bfast.com"],
a[href*="bluestreak.com"] img, *[src*="bluestreak.com"],
a[href*="bs00"][href*=".gmx.net"] img, *[src*="bs00"][src*=".gmx.net"],
a[href*="c1.zedo.com"] img, *[src*="c1.zedo.com"],
a[href*="cash4banner.com"] img, *[src*="cash4banner.com"],
a[href*="cdn.eyewonder.com"] img, *[src*="cdn.eyewonder.com"],
a[href*="claria.com"] img, *[src*="claria.com"],
a[href*="clickbank.com"] img, *[src*="clickbank.com"],
a[href*="clickbank.net"] img, *[src*="clickbank.net"],
a[href*="counter.webtrends.net"] img, *[src*="counter.webtrends.net"],
a[href*="crazypopups.com"] img, *[src*="crazypopups.com"],
a[href*="cydoor.com"] img, *[src*="cydoor.com"],
a[href*="decisionmark.com"] img, *[src*="decisionmark.com"],
a[href*="doubleclick."] img, *[src*="doubleclick."],
a[href*="eur.a1.yimg.com"] img, *[src*="eur.a1.yimg.com"],
a[href*="filetarget.com"] img, *[src*="filetarget.com"],
a[href*="fastclick."] img, *[src*="fastclick."],
a[href*="gator.com"] img, *[src*="gator.com"],
a[href*="googleadservices.com"] img, *[src*="googleadservices.com"],
a[href*="googlesyndication.com"] img, *[src*="googlesyndication.com"],
a[href*="hit-now.com"] img, *[src*="hit-now.com"],
a[href*="hitbox.com"] img, *[src*="hitbox.com"],
a[href*="industrybrains.com"] img, *[src*="industrybrains.com"],
a[href*="kontera.com"] img, *[src*="kontera.com"],
a[href*="link4ads.com"] img, *[src*="link4ads.com"],
a[href*="linktarget.com"] img, *[src*="linktarget.com"],
a[href*="linkexchange."] img, *[src*="linkexchange."],
a[href*="logging.to"] img, *[src*="logging.to"],
a[href*="mediaplazza.com"] img, *[src*="mediaplazza.com"],
a[href*="mediaplex.com"] img, *[src*="mediaplex.com"],
a[href*="nedstatbasic.net"] img, *[src*="nedstatbasic.net"],
a[href*="oas.salon.com"] img, *[src*="oas.salon.com"],
a[href*="paycounter.com"] img, *[src*="paycounter.com"],
a[href*="popupad.net"] img, *[src*="popupad.net"],
a[href*="pulse360.com"] img, *[src*="pulse360.com"],
a[href*="promos.fling.com"] img, *[src*="promos.fling.com"],
a[href*="qkimg.net"] img, *[src*="qkimg.net"],
a[href*="qksrv.net"] img, *[src*="qksrv.net"],
a[href*="rcm-images.amazon.com"] img, *[src*="rcm-images.amazon.com"],
a[href*="rcm.amazon.com"] img, *[src*="rcm.amazon.com"],
a[href*="realmedia.com"] img, *[src*="realmedia.com"],
a[href*="rightmedia.net"] img, *[src*="rightmedia.net"],
a[href*="s1.amazon.com"] img, *[src*="s1.amazon.com"],
a[href*="servedby."] img, *[src*="servedby."],
a[href*="serving-sys.com"] img, *[src*="serving-sys.com"],
a[href*="sexcounter.com"] img, *[src*="sexcounter.com"],
a[href*="sextracker.com"] img, *[src*="sextracker.com"],
a[href*="smartclicks.net"] img, *[src*="smartclicks.net"],
a[href*="spinbox."] img, *[src*="spinbox."],
a[href*="tradedoubler.com"] img, *[src*="tradedoubler.com"],
a[href*="traffic-exchange.com"] img, *[src*="traffic-exchange.com"],
a[href*="trafficmp.com"] img, *[src*="trafficmp.com"],
a[href*="transfer.go"] img, *[src*="transfer.go"],
a[href*="tribalfusion.com"] img, *[src*="tribalfusion.com"],
a[href*="ukaffiliates2.com"] img, *[src*="ukaffiliates2.com"],
a[href*="us.a1.yimg.com"] img, *[src*="us.a1.yimg.com"],
/*a[href*="us.i1.yimg.com"] img, *[src*="us.i1.yimg.com"],*/
a[href*="valuead.com"] img, *[src*="valuead.com"],
a[href*="valueclick."] img, *[src*="valueclick."],
a[href*="webads.bizservers.com"] img, *[src*="webads.bizservers.com"],
a[href*="webads.co.nz"] img, *[src*="webads.co.nz"],
a[href*="webstat."] img, *[src*="webstat."],
a[href*="webtrendslive.com"] img, *[src*="webtrendslive.com"] {
 display: none !important;
}

/* images: by size */
a img[width="120"][height="240"],
a img[width="120"][height="600"],
a img[width="125"][height="125"],
a img[width="125"][height="300"],
a img[width="125"][height="600"],
/*a img[width="150"][height="100"],*/
a img[width="150"][height="600"],
a img[width="160"][height="600"],
a img[width="180"][height="150"],
a img[width="234"][height="60"],
a img[width="210"][height="500"],
a img[width="300"][height="125"],
a img[width="300"][height="250"],
a img[width="336"][height="280"],
a img[width="380"][height="200"],
a img[width="468"][height="60"],
a img[width="470"][height="62"],
a img[width="728"][height="90"],
a img[width="730"][height="92"] {
 display: none !important;
}

/* plugins: by size */
embed[width="120"][height="240"],
object[width="120"][height="240"],
embed[width="120"][height="600"],
object[width="120"][height="600"],
embed[width="125"][height="300"],
object[width="125"][height="300"],
embed[width="125"][height="600"],
object[width="125"][height="600"],
embed[width="150"][height="100"],
object[width="150"][height="100"],
embed[width="150"][height="600"],
object[width="150"][height="600"],
embed[width="160"][height="600"],
object[width="160"][height="600"],
embed[width="180"][height="150"],
object[width="180"][height="150"],
embed[width="210"][height="500"],
object[width="210"][height="500"],
embed[width="234"][height="60"],
object[width="234"][height="60"],
embed[width="300"][height="125"],
object[width="300"][height="125"],
embed[width="300"][height="250"],
object[width="300"][height="250"],
embed[width="336"][height="280"],
object[width="336"][height="280"],
embed[width="380"][height="200"],
object[width="380"][height="200"],
embed[width="468"][height="60"],
object[width="468"][height="60"],
embed[width="470"][height="62"],
object[width="470"][height="62"],
embed[width="728"][height="90"],
object[width="728"][height="90"],
embed[width="728"][height="100"],
object[width="728"][height="100"],
embed[width="728"][height="200"],
object[width="728"][height="200"],
embed[width="730"][height="92"],
object[width="730"][height="92"] {
 display: none !important;
}

/* iframes: by size */
iframe[width="120"][height="600"],
iframe[width="125"][height="300"],
iframe[width="125"][height="600"],
iframe[width="150"][height="100"],
iframe[width="150"][height="600"],
iframe[width="160"][height="600"],
iframe[width="180"][height="150"],
iframe[width="210"][height="500"],
iframe[width="234"][height="60"],
iframe[width="300"][height="125"],
iframe[width="300"][height="250"],
iframe[width="336"][height="280"],
iframe[width="380"][height="200"],
iframe[width="468"][height="60"],
iframe[width="470"][height="62"],
iframe[width="600"][height="120"],
iframe[width="728"][height="90"],
iframe[width="728"][height="100"],
iframe[width="728"][height="200"],
iframe[width="730"][height="92"] {
 display: none !important;
}

/* --- miscellaneous ------------------------------------------------------ */

a[href*="/A="] img, *[src*="/A="],
a[href*="/ad-"] img, *[src*="/ad-"],
a[href*="/ad."] img, *[src*="/ad."],
a[href*="/ad/"] img, *[src*="/ad/"],
a[href*="/ad_"] img, *[src*="/ad_"],
a[href*="/ads/"] img, *[src*="/ads/"],   /* expanded from '/ads' */
a[href*="/ads_"] img, *[src*="/ads_"],
a[href*="/ads-"] img, *[src*="/ads-"],
a[href*="/ads."] img, *[src*="/ads."],
a[href*="/adver"] img, *[src*="/adver"], /* expanded from '/adv' */
a[href*="/adv/"] img, *[src*="/adv/"],
a[href*="/adv_"] img, *[src*="/adv_"],
a[href*="/adv-"] img, *[src*="/adv-"],
a[href*="/adv."] img, *[src*="/adv."],
a[href*="/adx"] img, *[src*="/adx"],
a[href*="_ad_"] img, *[src*="_ad_"],
a[href*="_ad/"] img, *[src*="_ad/"],
a[href*="_ad."] img, *[src*="_ad."],
a[href*="-ad-"] img, *[src*="-ad-"],
a[href*="?ad"] img, *[src*="?ad"],
a[href*="/jump/"] img, *[src*="/jump/"],
a[href*="?banner"] img, *[src*="?banner"],
a[href*="/banner"] img, *[src*="/banner"],
a[href*="/click-"] img, *[href*="/click-"],
a[href*="=click"] img, *[src*="=click"],
a[href*="?click"] img, *[src*="?click"],
a[href*="click_"] img, *[src*="click_"],
a[href*="advert"] img, *[src*="advert"],
a[href*="banman"] img, *[src*="banman"],
a[href*="bannerman"] img, *[src*="bannerman"],
a[href*="banners."] img, *[src*="banners."],
a[href*="adframe"] img, *[src*="adframe"] {
 display: none !important;
}

a.adHeadline,                 /* adbrite.com */
a[href*="tryaol"] img,
a[href*="/adlog.pl"] img,
/*a[href*="/redirect"] img,*/
a[href*="/referral/"] img,
a[href*="/click.cgi"] img,
a[href*="/clickover"] img,
a[href*="/clickthr"] img,
a img[src*="/affiliates/"],
a img[src*="/creatives/"],
a img[src*="/marketing/"],
/*a img[src*="/offer"],*/
a img[src*="/puffboxes/"],
a img[src*="/sponsors/"],
a img[src*="120x60"],
a img[src*="120x80"],
a img[src*="140x"],
a img[src*="468x60"],
a img[src*="_sponsor_"],
a img[src*=".travelocity./Sponsor_gifs/"],
a img[src*="pic.geocities.com/images/"],
a img[src*="/us.yimg.com/a/ya"],
a img[src*="/publicidad/"], a img[src*="public"][src*="ad"],
a img[src*="klipmart"], a[name*="klipad"] img {
 display: none !important;
}

a[alt*="advert"] img,
object#widgeth,
span.ad,
table#RefAd,
table[background*="advertising.com"],
form[action*="doubleclick.net"] {
 display: none !important;
}

#ad, #advert, #ads, #ad-banner, #adbanner, #adbar,  /* general */
#sponsor, #sponsors, #ad-link, #banner-ad, #masthead-ad, #ad-masthead, #amazon-video-ads-iframe,
.ad, .advert, .ad-banner, .adbanner, .adbar,
.sponsor, .sponsors,
.ad-link, .banner-ad, .masthead-ad .ad-masthead,
#awin, #adstrip, #adbox, #adFrame, #splashFrame,
#overture, #spons, #bigad,
div#dcv_EchangeLay, div#yschsec, div.ovt,          /* unknown */
#google_ads_frame, #google_ads_site, #googleadb,   /* google */
#GoogleAd, iframe[name="GoogleAd"],
#tads, #tpa1, #tpa2,
div.c.xs#ad, div#co div#rh.rhs[style],
span#konteraElements > *, div#konaLayers,          /* Kontera */
span#iTt, /*#nointelliTXT,*/                       /* IntelliTXT */
div#mntl, div#quack, div[id*="sponsor"],           /* yahoo, general */
div#splashLayer, div.showcase A.scLink,            /* from floppymoose.com */
div#AD, div[id^="AD"][style^="position:absolute"], /* lycos */
#dwindow, #topmsg, #dropin,                        /* dynamicdrive.com */
div#cache,                                         /* asp.flaaten.dk */
div#xad,                                           /* proboards22.com */
div#floatpop,                                      /* lyrics007.com */
div#warning[style*="visibility:"],                 /* adblock.org ;) */
div#elementDiv.welcomemat,                         /* linux.sys-con.com */
div#AdLayer,                                       /* falkag.net */
div#catfish, div#adcontent,                        /* sitepoint.com */
div.VBannerAd, div.YourAdHere,                     /* flickr.com */
div#externals, div#text-ads,                       /* technorati.com */
div#btmad,                                         /* sourceforge.net */
div#popinads,                                      /* popinads.com */
div#ads2, span#adwithus,                           /* bugbash.net */
div#dynamicAdWinDiv,                               /* forbes.com */
div[id^="aws_"],                                   /* 50megs.com */
div.adcnt,                                         /* geocities.com */
div#footerAds, div#homeRightAd,                    /* macworld.com */
table.leftadbody, td.leftadhead,                   /* wunderground.com */
div#ads_topC, div#ads_bottomC,                     /* search.msn.com (mgb) */
div[id^="sponLink"], div[id^="gca_sidebar"],       /* iwon.com */
iframe[name="kanoodleAd"],                         /* imdb.com */
div#adPaneRight,                                   /* live.com */
div[id^="phpads"],                                 /* dvd2svcd.doom9.net */
div[id^="advert"],                                 /* cbc.ca */
div[id^="Div1"][id$="_s"][style*="visible"],       /* dynamic popup generator */
div[id^="Div1"][id$="_b"][style*="visible"],
div[class*="companion-ad-renderer"],
ytd-promoted-sparkles-web-renderer,
ytd-display-ad-renderer,
.ad-interrupting,
div[data-testid*="placementTracking"] {
 display: none !important;
}

.ytp-ad-overlay-slot {
 display: none !important;
}
.ytp-ad-image-overlay {
 display: none !important;
}
.ytp-ad-overlay-image {
 display: none !important;
}
.ytp-ad-overlay-container {
 display: none !important;
}

/* minimize the appearance of IntelliTXT ads */
a.iAs[itxtdid] {
 text-decoration: none !important;
 border-bottom: none !important;
}

/* minimize the appearance of Kontera ads */
a.kLink[href="#"] {
 text-decoration: none !important;
}
span.kLink {
 border-bottom: none !important;
}

/* --- questionable (should probably identify and (re)move unless common) --- */

iframe[src^="/get_ad.php?"],                               /* geocities */
iframe[src^="/sponsored-results"],                         /* babelfish */
iframe[src^="/google/box?"],
iframe[src*="contentsearch.de.espotting.com"],             /* heise.de */
iframe[src*="industrybrains.com"], iframe[src*="BET365"],
iframe[name="bsadframe"], iframe[src*="advert"], iframe[src*="https://s.amazon-adsystem.com/"], iframe[id*="amazon-video-ads-iframe"]
{
 display: none !important;
}

table table table[width="346"][height="280"],
table[border="0"][cellpadding="1"][cellspacing="0"][width="626"][bgcolor="#6699cc"],
table[bordercolor="red"][height="225"][cellspacing="0"][cellpadding="0"][width="190"][bgcolor="white"][border="0"],
table[width="336"][border="0"][cellspacing="0"][cellpadding="0"][align="right"][style="margin-left: 10px; margin-bottom: 10px;"],
td[style="border-bottom: 1px solid rgb(204, 204, 204); padding: 7px 3px; background-color: rgb(255, 254, 249);"] {
 display: none !important;
}

/* --- false positives ---------------------------------------------------- */

/* google: www, images, news, groups, froogle */
body[onload^="document.gs.reset()"] div.n a[href^="/search?q="] img,
body[onload^="document.gs.reset()"] div.n a[href^="/images?q="] img,
body[onload^="document.gs.reset()"] a[href^="/imgres?imgurl="] img,
body[onload^="document.gs.reset()"] div.n a[href*="/news?q="] img,
body[onload="sf()"] a[href^="/groups?q="] img,
a img[src^="/froogle_image?q="] {
 display: inline !important;
}

/* yahoo images (via google) */
a img[src*="images.google.com/images?q="] {
 display: inline !important;
}

/* alltheweb.com: images */
a[href*="click.alltheweb.com/go"] img[src*="fastsearch.net"] {
 display: inline !important;
}

/* foxnews.com videos */
/*div#video object embed[src*="/ads"][src*="foxnews.com"] {
 display: inline !important;
}*/

/* imdb.com: posters/headshots linking fullpage interstitial ads.
            annoying, but the image should be displayed anyway. */
a[href*="imdb.com/ad/?id="] img[src*="imdb.com/media/"] {
 display: inline !important;
}

/* happymany.be navigation, other ADSL-related links */
/*a[href*="/adsl"] img, *[src*="/adsl"] { display: inline !important; }*/

/* internet banking toolbar images on aib.ie (thanks David) */
@-moz-document url-prefix(https://internetbanking.aib.ie/)
{
 a[href*="/banner"] img,
 *[src*="/banner"] {
   display: inline !important;
 }
}

/* Advizia product information */
/*a[href*="/advizia"] img, *[src*="/advizia"] { display: inline !important; }*/

@-moz-document domain(godaddy.com), domain(secureserver.net) {
 #dropin {
   display: inline !important;
 }
}

/* ------------------------------------------------------------------------ */

/*
* For more examples see http://www.mozilla.org/unix/customizing.html
*/

/* this is top change forbes massive gap*/

.main-content--body {
  padding-top: 0px !important;
}

.fbs-ad--top-wrapper.fbs-ad--top-wrapper--sticky{
  position: fixed !important;
  top: 0 !important;
}

.main-content--body {
  padding-top: 114px;
}
.top-ad-container, .ad-rail, div[class*=right-rail], [class*="footer-ad-"]{
  display:none !important;
}


`,
};
