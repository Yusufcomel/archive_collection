var props_sms_script_is_running = false;
var props_sms_gtm_is_init = false;
let propsSlot = [];
var listGptDirect = [];
var propsCollectTags = [];
var PWT = {};
var forcePubadsReady = false;

// (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-WP9SX2H');

var sc_jxos = document.createElement('script');sc_jxos.type = 'text/javascript';
sc_jxos.src = ''; //isi script onescript jixie
sc_jxos.async = true;
document.head.appendChild(sc_jxos);

// var script_gtm = document.createElement('noscript');
// script_gtm.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WP9SX2H"
// height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

var script_tag = document.createElement('script');script_tag.type = 'text/javascript';
script_tag.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
script_tag.async = true;

var stylesticky = document.createElement("style");
stylesticky.innerHTML = 
'.footer_sticky{'+
'   width:100%;'+
'   position:fixed;'+
'   bottom:0;left: 0;'+
'   z-index:1000;'+
'   background:white;'+
'   text-align:center;'+
'   box-shadow: rgb(17 58 102 / 35%) -2px -2px 2px 0px;'+
' }'+
' .close_sticky{'+
'   display: inline-block;'+
'   cursor: pointer;'+
'   color: black;'+
'   padding: 2px;'+
'   padding-left: 6px;'+
'   z-index: 9999;'+
'   font-family: Arial;'+
'   font-size: 12px;'+
'   right: 0px;'+
'   position: absolute;'+
'   top: -18px;'+
'   line-height: 20px;'+
'   height: 20px;'+
'   width: 20px;'+
'   box-shadow: rgba(17, 58, 102, 0.35) -2px -2px 2px 0px;'+
'   border-radius: 50% 0px 0px;'+
'   background-color: #fff;'+
' }'+
'.footer_stickyexp{'+
'   width:fit-content;'+
'   position:fixed;'+
'   bottom:0;left: 50%;'+
'   transform: translate(-50%);'+
'   z-index:1000;'+
'   background:white;'+
'   text-align:center;'+
'   box-shadow: rgb(17 58 102 / 35%) -2px -2px 2px 0px;'+
' }'+
' .close_stickyexp{'+
'   display: inline-block;'+
'   cursor: pointer;'+
'   color: black;'+
'   padding: 2px;'+
'   padding-left: 6px;'+
'   z-index: 9999;'+
'   font-family: Arial;'+
'   font-size: 12px;'+
'   right: 0px;'+
'   position: absolute;'+
'   top: -18px;'+
'   line-height: 20px;'+
'   height: 20px;'+
'   width: 20px;'+
'   box-shadow: rgba(17, 58, 102, 0.35) -2px -2px 2px 0px;'+
'   border-radius: 50% 0px 0px;'+
'   background-color: #fff;'+
' }';

var dv_l = document.createElement("div");
dv_l.id="div-gpt-ad-leaderboard";
dv_l.style="margin: 15px 0;";

var sc_l = document.createElement("script");
sc_l.innerHTML="googletag.cmd.push(function() { googletag.display('div-gpt-ad-leaderboard'); });";
dv_l.appendChild(sc_l);

var dv_m1 = document.createElement("div");
dv_m1.id="div-gpt-ad-multibanner1";
dv_m1.style="margin: 15px 0;";

var sc_m1 = document.createElement("script");
sc_m1.innerHTML="googletag.cmd.push(function() { googletag.display('div-gpt-ad-multibanner1'); });";
dv_m1.appendChild(sc_m1);

var dv_m2 = document.createElement("div");
dv_m2.id="div-gpt-ad-multibanner2";
dv_m2.style="margin: 15px 0;";

var sc_m2 = document.createElement("script");
sc_m2.innerHTML="googletag.cmd.push(function() { googletag.display('div-gpt-ad-multibanner2'); });";
dv_m2.appendChild(sc_m2);

var dv_m3 = document.createElement("div");
dv_m3.id="div-gpt-ad-multibanner3";
dv_m3.style="margin: 15px 0;";

var sc_m3 = document.createElement("script");
sc_m3.innerHTML="googletag.cmd.push(function() { googletag.display('div-gpt-ad-multibanner3'); });";
dv_m3.appendChild(sc_m3);

var ft_sticky = document.createElement("div");
ft_sticky.id = "footer_sticky";
ft_sticky.className = "footer_sticky";
ft_sticky.innerHTML = '<a onclick="closeAds()" class="close_sticky">X</a>';

var cls_sticky = document.createElement("script");
cls_sticky.innerHTML = 'function closeAds(){document.getElementById("footer_sticky").style.display = "none";}';

var dv_sticky = document.createElement("div");
dv_sticky.id="div-gpt-ad-sticky";
dv_sticky.style="margin: 15px 0;";

var sc_sticky = document.createElement("script");
sc_sticky.innerHTML= 
'googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-sticky\'); });'+
'        setTimeout(function(){ '+
'          var a = document.getElementById(\'footer_sticky\').clientHeight;'+
'          if(a < 40)'+
'          document.getElementById(\'close_button\').style.display = "none";'+
'        }, 2500);';
dv_sticky.appendChild(sc_sticky);
ft_sticky.appendChild(cls_sticky);
ft_sticky.appendChild(dv_sticky);

var ft_stickyexp = document.createElement("div");
ft_stickyexp.id = "footer_stickyexp";
ft_stickyexp.className = "footer_stickyexp";
ft_stickyexp.innerHTML = '<a onclick="closeAdsExp()" class="close_stickyexp">V</a>';

var closeAdsExp = false;
var cls_stickyexp = document.createElement("script");
cls_stickyexp.innerHTML = `function closeAdsExp(){
      document.getElementById("footer_stickyexp").style.display = "none"; 
      var locsticky = document.getElementsByClassName("header")[0];
      var mapping2 = googletag.sizeMapping()
                              .addSize([1024, 0], [[970, 90]])
                              .addSize([800, 0], [[728, 90]])
                              .addSize([0, 0], [[320, 50]])
                              .build();
      propsSlot.push(googletag.defineSlot('22897542275/medialampung.disway.id/sticky', [[300,250],[320,50]], 'div-gpt-ad-sticky')
                 .defineSizeMapping(mapping2)
                 .setForceSafeFrame(false)
                 .addService(googletag.pubads()));
      locsticky.after(ft_sticky);
    }
  `;

var dv_stickyexp = document.createElement("div");
dv_stickyexp.id="div-gpt-ad-stickyexp";
dv_stickyexp.style="margin: 15px 0;";

var sc_stickyexp = document.createElement("script");
sc_stickyexp.innerHTML= 
'googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-stickyexp\'); });'+
'        setTimeout(function(){ '+
'          var a = document.getElementById(\'footer_stickyexp\').clientHeight;'+
'          if(a < 40)'+
'          document.getElementById(\'close_stickyexp\').style.display = "none";'+
'        }, 2500);';
dv_stickyexp.appendChild(sc_stickyexp);
ft_stickyexp.appendChild(cls_stickyexp);
ft_stickyexp.appendChild(dv_stickyexp);

var dv_oop = document.createElement("div");
dv_oop.id="div-gpt-ad-oop";

var sc_oop = document.createElement("script");
sc_oop.innerHTML="googletag.cmd.push(function() { googletag.display('div-gpt-ad-oop'); });";
dv_oop.appendChild(sc_oop);

setTimeout(() => {
  // document.body.appendChild(script_gtm);
  document.head.appendChild(stylesticky);
}, 1000)

var cVisitorId = document.cookie.split(';').find(v => {
  return v.match('cProps');
});  

var cookieName = "cProps";
var cookieValue = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
var expirationTime = 2592000;
expirationTime = expirationTime * 1000;
var date = new Date(); 
var dateTimeNow = date.getTime(); 
date.setTime(dateTimeNow + expirationTime);
var date = date.toUTCString();
if(!cVisitorId){
  document.cookie = cookieName+"="+cookieValue+"; SameSite=None; Secure; expires="+date+"; path=/; domain=." + location.hostname.replace(/^www\./i, "");
}

(function() {
  var purl = window.location.href;
  var url = '//ads.pubmatic.com/AdServer/js/pwt/160902/8446';
  var profileVersionId = '';
  if(purl.indexOf('pwtv=')>0){
    var regexp = /pwtv=(.*?)(&|$)/g;
    var matches = regexp.exec(purl);
    if(matches.length >= 2 && matches[1].length > 0){
      profileVersionId = '/'+matches[1];
    }
  }
  var wtads = document.createElement('script');
  wtads.async = true;
  wtads.type = 'text/javascript';
  wtads.src = url+profileVersionId+'/pwt.js';
  var node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(wtads, node);
})();

//INITIALIZE PROPS SCRIPT
var isBlocked = false;
setTimeout(() => {
  if (!isBlocked) {
    propsInitAds();
  }
}, 1500)
// setTimeout(() => {
//   try {
//     var http = new XMLHttpRequest();
//     let lochref = window.location.href.match(/^.+?[^\/:](?=[?\/]|$)/)[0].replace("http://", "").replace("https://", "");
//     var url_check_props = `https://propsid.b-cdn.net/json/${lochref}/blocklist.json`;
//     http.responseType = 'json';
//     http.open('GET', url_check_props, true);

//     //Send the proper header information along with the request
//     http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
//     http.timeout = 1500;
//     http.onreadystatechange = function() {//Call a function when the state changes.
//         if(http.readyState == 4 && (http.status == 200 || http.status == 201)) {
//           try {
//               isBlocked = true;
//               let parsed = http.response;
//               let x = window.location.href.replace(/https:\/\//, "");
//               let find = parsed.find((e) => {return e == x});
  
//               if (!find) {
//                   propsInitAds();
//               }
              
//           } catch (e) {
//               console.log("props-parsing error");
//               console.log(e);
//               propsInitAds();
//           }
//         } else if (http.readyState == 4){
//           propsInitAds();
//           throw new Error("Timeout");
//         }
//     }
//     http.send();
// } catch (e) {
//     console.log("ERROR");
//     console.log(e);
//     propsInitAds();
// }
// })


function propsInitAds() {
  var wv = navigator.userAgent.toLowerCase();
  if(wv.includes('topbuzz') || wv.includes('babe') || wv.includes('bacaberita') || wv.includes('kurio') || wv.includes('ucbrowser') || wv.includes('line')) {
    ;
  } else{
        // console.log("SCRIPT SMS IS RUNNING");
        if (props_sms_script_is_running) {
            return;
        }
        if (googletag && googletag.apiReady) {
            if (!googletag.pubadsReady && !forcePubadsReady) {

                if (props_sms_gtm_is_init) {
                    setTimeout(() => {
                        propsInitAds();
                    }, 250);
                    return;
                }
                props_sms_gtm_is_init = true;
                addDocumentToWebsite();
                    
                setTimeout(() => {
                    propsInitAds();
                }, 250);

                setTimeout(() => {
                  forcePubadsReady = true;
                }, 1500)
                return;
            } else {
                props_sms_script_is_running = true;
                window.googletag = window.googletag || {cmd: []};
                let tagsTarget = "";
                let allCurrentlyRunningAds = googletag.pubads().getSlots();
                if (Array.isArray(allCurrentlyRunningAds)) {
                    for (let row of allCurrentlyRunningAds) {
                        let adUnitIds = '/160553881'; //GANTI INI KALO MA
                        let checkCurrentlyRunningAds = row.getAdUnitPath();
                        let checkIsPropsAds = checkCurrentlyRunningAds.match(adUnitIds);
              
                        if (!checkIsPropsAds) {
                            listGptDirect.push(row.getSlotElementId());
                        }
                    }
                }
                for (let i = 0 ; i < propsCollectTags.length ; i++) {
                  if (i == propsCollectTags.length - 1) {
                    tagsTarget += propsCollectTags[i];
                  } else {
                    tagsTarget += propsCollectTags[i] + ", ";
                  }
                }
                console.log("add " + tagsTarget + " to segmentation");

                if (tagsTarget != "") {
                    googletag.pubads().setTargeting("props_tags_targeting", tagsTarget);
                }
                var mapping1 = googletag.sizeMapping()
                                    .addSize([1024, 0], [[970, 250], [970, 90], [728, 250], [728, 90]])
                                    .addSize([800, 0], [[728, 250], [728, 90]])
                                    .addSize([0, 0], [[336, 280], [300, 250]])
                                    .build();
                var mapping2 = googletag.sizeMapping()
                                          .addSize([1024, 0], [[970, 90]])
                                          .addSize([800, 0], [[728, 90]])
                                          .addSize([0, 0], [[320, 50]])
                                          .build();
                var mapping3 = googletag.sizeMapping()
                                          .addSize([1024, 0], [[970, 250]])
                                          .addSize([800, 0], [[728, 250]])
                                          .addSize([0, 0], [[300, 250]])
                                          .build();
                googletag.cmd.push(function() {
                    propsSlot.push(googletag.defineOutOfPageSlot('22897542275/medialampung.disway.id/Interstitial', 
                        googletag.enums.OutOfPageFormat.INTERSTITIAL)
                        .addService(googletag.pubads()));
            
                    var cVisitorId = (visId = document.cookie.split("cProps")[1]) ? visId.split(';')[0].replace(/[^a-zA-Z0-9]/ig, '') : false;
                    if (cVisitorId) {
                            googletag.pubads().setPublisherProvidedId(cVisitorId + 'props');
                    }
                    googletag.pubads().setCentering(true);
                    googletag.pubads().enableSingleRequest();
                    googletag.pubads().collapseEmptyDivs();
                    googletag.enableServices();
                });

                var locmultibanner1 = document.getElementsByClassName("entry-content bottom-30")[0];
                if (locmultibanner1 != null) {
                  var locm = document.getElementsByClassName("entry-content bottom-30")[0].getElementsByTagName("p");
                  var locm1 = Math.round(locm.length*30/100);
                  var locm2 = Math.round(locm.length*70/100);
                  var locm3 = Math.round(locm.length*50/100);
                  // propsSlot.push(googletag.defineSlot('22897542275/medialampung.disway.id/Multibanner1', [[336,280],[300,250]], 'div-gpt-ad-multibanner1')
                  //              .addService(googletag.pubads()));
                  // locmultibanner1.getElementsByTagName("p")[locm1].after(dv_m1);
                }

                var locmultibanner2 = document.getElementsByClassName("entry-content bottom-30")[0];
                if (locmultibanner2 != null) {
                  propsSlot.push(googletag.defineSlot('22897542275/medialampung.disway.id/Multibanner2', [[336,280],[300,250]], 'div-gpt-ad-multibanner2')
                              .addService(googletag.pubads()));
                  locmultibanner2.getElementsByTagName("p")[locm2].after(dv_m2);
                }

                var locmultibanner3 = document.getElementsByClassName("entry-content bottom-30")[0];
                if (locmultibanner3 != null) {
                  propsSlot.push(googletag.defineSlot('22897542275/medialampung.disway.id/Flying_Carpet', [[300,600]], 'div-gpt-ad-multibanner3')
                              .addService(googletag.pubads()));
                  locmultibanner3.getElementsByTagName("p")[locm3].after(dv_m3);
                }

                var locoop = document.getElementsByClassName("entry-content bottom-30")[0];
                if (locoop != null) {
                  propsSlot.push(googletag.defineOutOfPageSlot('22897542275/medialampung.disway.id/OOP', 'div-gpt-ad-oop')
                              .addService(googletag.pubads()));
                  locoop.after(dv_oop);
                }

                var locsticky = document.getElementsByClassName("entry-content bottom-30asd")[0];
                if (locsticky != null) {
                  propsSlot.push(googletag.defineSlot('22897542275/medialampung.disway.id/StickyExpand', [[300,250],[320,50]], 'div-gpt-ad-stickyexp')
                               .defineSizeMapping(mapping2)
                               .addService(googletag.pubads()));
                  locsticky.after(ft_stickyexp);
                }

                if (window.innerWidth < 1024){
                  var ct = window.parent.document.getElementsByClassName("navbar-fixed-top")[0];
                  var mbstyle = document.createElement('style');
                  mbstyle.innerHTML = 
                  `.megabillboard_container iframe {
                      border: 0px;
                      vertical-align: bottom;
                      position: fixed !important;
                      z-index: 1 !important;
                      width: 320px;
                      left: 0px;
                      height: 480px;
                      right: 0;
                      margin: auto;
                      top: auto !important;
                  }
                  .megabillboard_container {
                  background-attachment: scroll;
                  background-position: left top;
                  background-size: cover;
                  width: 100%;
                  position: absolute;
                  clip: rect(auto, auto, auto, auto);
                  right: 0px;
                  left: 0px;
                  margin: auto;
                  }
                  .ads-slot > * {
                  flex: 1 100%;
                  }
                  .megabillboard__swipe {
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  right: 0;
                  }
                  .megabillboard__swipe p {
                  display: block;
                  margin: 0px;
                  font-size: 10px;
                  padding: 2px 0px;
                  background: #000;
                  text-align: center !important;
                  color: #fff;
                  }
                  .megabillboard {
                  height: 524px;
                  position: relative;
                  }
                  .ads-slot-mb-container {
                  width: 100%;
                  height: 506px;
                  position: absolute;
                  background-attachment: scroll;
                  background-position: left top;
                  background-size: cover;
                  clip: rect(auto, auto, auto, auto);
                  justify-content: center;
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: -webkit-flex;
                  display: flex;
                  }
                  .ads-slot {
                  position: relative;
                  z-index: 1;
                  margin: 0 auto;
                  background: #f7f7f7;
                  align-items: center;
                  justify-content: center;
                  text-align: center !important;
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: -webkit-flex;
                  display: flex;
                  }
                  .megabillboard-close {
                  cursor: pointer;
                  position: fixed;
                  right: calc(50% - 160px);
                  padding: 5px 0;
                  z-index: 2;
                  font-size: 12px;
                  font-weight: 700;
                  }
                  .stack {
                      z-index: 99;
                      width: 100%;
                      position: fixed;
                  }
                  .removeSmrtBnr {
                      display: block;
                      width: 25px;
                      height: 50px;
                      position: absolute;
                      right: 0;
                      z-index: 28;
                      top: 0;
                  }
                  #billboard {
                      z-index: 0;
                  }
                  .Mb_sticky {
                      animation: movesmaller 0.3s linear forwards;
                      -webkit-animation: movesmaller 0.3s linear forwards;
                  }
                  @keyframes movesmaller {
                      0% {
                          transform: scale(1);
                          opacity: 0;
                      }
                      100% {
                          transform: scale(.5);
                          opacity: 1;
                      }
                  }
                  .Mg_Container {
                      position: fixed;
                      height: 290px !important;
                  }
                  .Mg_Slot {
                      height: 267px !important;
                      background-color: black;
                  }
                  .Mg {
                      z-index: 27 !important;
                  }`;
                  var contMbAll = document.createElement('div');
                  contMbAll.className = "megabillboard";
                  contMbAll.id = "megabillboard";
                  contMbAll.style = "z-index: 3; background-color: #000; height: 524px;";
                  var contAdsMb = document.createElement('div');
                  contAdsMb.className = "ads-slot-mb-container MgContainer";
                  contAdsMb.id = "MgContainer";
                  contAdsMb.style = "width: 100%; height: 524px; background-color: #000;";
                  var contCloseAds = document.createElement('span');
                  contCloseAds.className = "megabillboard-close";
                  contCloseAds.setAttribute("href", "#");
                  contCloseAds.style = "color: #fff;";
                  contCloseAds.innerHTML = "CLOSE AD";
                  var contAdSlot = document.createElement('div');
                  contAdSlot.className = "ads-slot MgSlot";
                  contAdSlot.id = "MgSlot";
                  contAdSlot.style = "width: 100%; height: 510px; top: 25px; background-color: #000;";
                  var contAdSlotMb = document.createElement('div');
                  contAdSlotMb.className = "megabillboard_container MgSticky";
                  contAdSlotMb.id = "MgSticky";
                  contAdSlotMb.style = "height: 510px; background-color: rgb(0, 0, 0);";
                  var mbscgpt = document.createElement("script");
                  mbscgpt.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";
                  mbscgpt.setAttribute("async","");
                  var mbscgpt2 = document.createElement("script");
                  mbscgpt2.innerHTML = "" +
                  " window.googletag = window.googletag || {cmd: []}; "+
                  " googletag.cmd.push(function() {"+
                  " propsSlot.push(googletag.defineSlot('22897542275/medialampung.disway.id/Megabillboard', [300, 600], 'gpt-megabillboard').addService(googletag.pubads()));"+
                  " googletag.enableServices();"+
                  " googletag.display('gpt-megabillboard');"+
                  " });";
                  var mbdivgpt = document.createElement('div');
                  mbdivgpt.id = 'gpt-megabillboard';
                  var contSwipeMb = document.createElement('div');
                  contSwipeMb.className = "megabillboard__swipe";
                  contSwipeMb.style = "z-index: 9999;";
                  contSwipeMb.innerHTML = '<p id="scrollContent">SCROLL TO CONTINUE WITH CONTENT</p>';

                  contAdSlotMb.appendChild(mbdivgpt);
                  contAdSlotMb.appendChild(mbscgpt);
                  contAdSlotMb.appendChild(mbscgpt2);
                  contAdSlot.appendChild(contAdSlotMb);
                  contAdsMb.appendChild(contCloseAds);
                  contAdsMb.appendChild(contAdSlot);
                  contAdsMb.appendChild(contSwipeMb);
                  contMbAll.appendChild(contAdsMb);
                  contMbAll.appendChild(mbstyle);

                  // ct.parentNode.insertBefore(contMbAll, ct);
                  // ct.appendChild(contMbAll);

                  function MegaBillSticky() {
                      $(document).ready(function() {
                      function ScaleStickyMg() {
                          var scrollState = 'top';
                          var scrollPos = $(window).scrollTop();
                          if ((scrollPos >= 200) && (scrollState === 'top')) {
                              $('#megabillboard').addClass('Mg');
                              $('#MgSticky').addClass('Mb_sticky');
                              $('#MgContainer').addClass('Mg_Container');
                              $('#MgSlot').addClass('Mg_Slot');
                              scrollState = 'scrolled';
                          }
                      }

                      $('.megabillboard-close').click(function() {
                          $('#cont-megabillboard, .megabillboard, .megabillboard iframe').slideUp();
                      });

                      ScaleStickyMg();

                      $(window).scroll(function() {
                          ScaleStickyMg();
                          var scrollPos2 = $(window).scrollTop();
                          if (scrollPos2 <= 200) {
                              $('.MgSticky').removeClass('Mb_sticky');
                              $('.MgContainer').removeClass('Mg_Container');
                              $('.MgSlot').removeClass('Mg_Slot');
                              $('.MgContainer').css('opocity', 1);
                          }
                      });
                      setTimeout(function() {
                          $('.megabillboard').removeClass('Mg');
                          $('.MgSlot').removeClass('Mg_Slot');
                          $('.MgSticky').removeClass('Mb_sticky');
                          $('.MgContainer').removeClass('Mg_Container');
                          $('.megabillboard').removeAttr('id');
                          $('.MgContainer').removeAttr('id');
                          $('.MgSticky').removeAttr('id');
                          $('.MgSlot').removeAttr('id');
                      }, 5000);
                  });
                  }
                  window.addEventListener('scroll', MegaBillSticky);
                }

                // var divinimage = window.parent.document.getElementsByClassName("entry-content bottom-30")[0].getElementsByTagName("img")[0];
                var divinmg = window.parent.document.getElementsByClassName("entry-content bottom-30")[0];
                if (!divinmg) {
                    var divinimage = null;
                } else {
                    var divinimage = divinmg.getElementsByTagName("img")[0];
                }

                var sc = document.createElement("script");
                sc.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";
                sc.setAttribute("async","");

                var dvim = document.createElement("div");
                dvim.id="gpt-inimage";
                var styledv = document.createElement("style");
                styledv.innerHTML = '.gpt-inimage iframe{top: 0 !important; width: auto !important; border-radius: 0 !important; opacity: 1 !important;}';
                dvim.appendChild(styledv);
                var sc2 = document.createElement("script");
                sc2.innerHTML = "var inimage = null;" +
                " window.googletag = window.googletag || {cmd: []}; "+
                  " googletag.cmd.push(function() {"+
                  " propsSlot.push(googletag.defineSlot('22897542275/medialampung.disway.id/Inimage', [320, 50], 'gpt-inimage').addService(googletag.pubads()));"+
                  " googletag.enableServices();"+
                  " googletag.display('gpt-inimage');"+
                  " });";

                dvim.appendChild(sc2);

                var dvP = document.createElement("div");
                dvP.style="width:100%;position:absolute;bottom:0;z-index:1000;background:white;text-align:center;";
                dvP.id="in_image"
                dvP.innerHTML = '<a onclick="closeinImage()" style="display: inline-block;cursor: pointer;color: black;padding: 2px;padding-left: 6px;z-index: 9999;font-family: Arial;font-size: 12px;right: 0px;position: absolute;top: -18px;line-height: 20px;height: 20px;width: 20px;box-shadow: rgba(17, 58, 102, 0.35) -2px -2px 2px 0px;border-radius: 50% 0px 0px;background-color: #fff;">X</a>';
                var closeinImage = document.createElement("script");
                closeinImage.innerHTML = 'function closeinImage(){'+
                '    document.getElementById("in_image").style.display = "none";'+
                '  }';
                dvP.appendChild(sc);
                dvP.appendChild(closeinImage);
                dvP.appendChild(dvim);
                var inImageContainer = document.createElement("div");
                inImageContainer.style = "position: relative;";
                inImageContainer.appendChild(dvP);
                if (divinimage != null) {
                  //divinimage.after(inImageContainer);
                }

                // var locfrmfly = document.getElementsByClassName("entry-content bottom-30")[0].getElementsByTagName("p");
                // var locfrmfly1 = Math.round(locfrmfly.length*50/100);
                // var frmfly=window.parent.document.getElementsByClassName("entry-content bottom-30")[0].getElementsByTagName("p")[locfrmfly1];
                // var checkWidth = window.parent.document.getElementsByClassName("entry-content bottom-30")[0].clientWidth;

                var divflyc = window.parent.document.getElementsByClassName("entry-content bottom-30")[0];
                if (!divflyc) {
                    var divinimage = null;
                } else {
                    var locfrmfly = divflyc.getElementsByTagName("p");
                    var locfrmfly1 = Math.round(locfrmfly.length*50/100);
                    var frmfly=window.parent.document.getElementsByClassName("entry-content bottom-30")[0].getElementsByTagName("p")[locfrmfly1];
                    var checkWidth = window.parent.document.getElementsByClassName("entry-content bottom-30")[0].clientWidth;
                }

                var scgpt = document.createElement("script");
                scgpt.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";
                scgpt.setAttribute("async","");

                var dvfly = document.createElement("div");
                dvfly.id="gpt-flyingcarpet";
                var stylefly = document.createElement("style");
                stylefly.innerHTML = 
                '.parallax_abs {'+
                '    width: 100%;'+
                '    height: 100%;'+
                '    position: absolute;'+
                '    top: 0;'+
                '    left: 0;'+
                '    clip: rect(auto, auto, auto, auto);'+
                '}'+
                '.parallax_fix {'+
                '    width: 100%;'+
                '    height: 100%;'+
                '    position: fixed;'+
                '    top: 0;'+
                '    -moz-transform: translateZ(0);'+
                '    -webkit-transform: translateZ(0);'+
                '    -ms-transform: translateZ(0);'+
                '    -o-transform: translateZ(0);'+
                '    transform: translateZ(0);'+
                '    margin: 0 auto;'+
                '}'+
                '.parallax_ads {'+
                '    width: 100%;'+
                '    height: 100%;'+
                '    height: auto;'+
                '    border: none;'+
                '    position: absolute;'+
                '    left: 50%;'+
                '    top: 80px;'+
                '    -moz-transform: translateX(-50%);'+
                '    -webkit-transform: translateX(-50%);'+
                '    -ms-transform: translateX(-50%);'+
                '    -o-transform: translateX(-50%);'+
                '    transform: translateX(-50%);'+
                '}';
                var scgpt2 = document.createElement("script");
                scgpt2.innerHTML = "var parallax = null;" +
                " window.googletag = window.googletag || {cmd: []}; "+
                " googletag.cmd.push(function() {"+
                " propsSlot.push(googletag.defineSlot('22897542275/medialampung.disway.id/Flying_Carpet', [300, 600], 'gpt-flyingcarpet').addService(googletag.pubads()));"+
                " googletag.enableServices();"+
                " googletag.display('gpt-flyingcarpet');"+
                " });";

                dvfly.appendChild(scgpt2);

                var divfly = document.createElement("div");
                divfly.className="flying_carpet_div";
                divfly.style = "width: 100%;height: 400px;position: relative;margin-bottom:10px !important;margin-top:0 !important;";
                var divwrap = document.createElement("div");
                divwrap.className="parallax_abs";
                var divshow = document.createElement("div");
                divshow.className="parallax_fix";
                divshow.style.maxWidth = checkWidth + "px";
                var divshowads = document.createElement("div");
                divshowads.className="parallax_ads";

                divshowads.appendChild(scgpt);
                divshowads.appendChild(dvfly);
                divshow.appendChild(divshowads);
                divwrap.appendChild(divshow);
                divfly.appendChild(divwrap);
                divfly.appendChild(stylefly);

                // if (frmfly != null) {
                //   frmfly.after(divfly);
                // }
                // setTimeout(function(){
                //   var checkFC = window.parent.document.getElementById('gpt-flyingcarpet').clientHeight;
                //   if(checkFC < 40){
                //     document.getElementsByClassName('flying_carpet_div')[0].style.display = "none";
                //   }
                // }, 2500);

                if (googletag.pubads().isInitialLoadDisabled()) {

                    setTimeout(() => {
                        console.log("REFRESHING");
                        console.log(propsSlot);
                        googletag.pubads().refresh(propsSlot);
                    }, 2750)
                    
                }
                
                
            }
        } else {
          if (props_sms_gtm_is_init == false) {
            props_sms_gtm_is_init = true;
            addDocumentToWebsite();
          }
          setTimeout(() => {
              propsInitAds();
          }, 150);
            return;
        }
    }   
}

gptIsRunning = false;

function loadGPT() {
  if (!gptIsRunning) {
    document.head.appendChild(script_tag);
  }
}

function registerTagsTargeting() {
  let locTags = document.getElementsByClassName("tag__list")[0];
  if (locTags != null) {
    let targetTags = document.getElementsByClassName("tag__list");
    targetTags = targetTags[0].childNodes;

    for (let tags of targetTags) {
      if (tags.localName == "li") {
        if (tags.children.length > 0) {
          if (tags.children[0].localName == "h4") {
            propsCollectTags.push(tags.children[0].innerText);
          }
        }
      }
    }
  }
}

function addDocumentToWebsite() {
  try {
    PWT.jsLoaded = function() {
      if (!gptIsRunning) {
        gptIsRunning = true;
        document.head.appendChild(script_tag);
      }
    }
    setTimeout(loadGPT, 500);
  } catch(e) {
    setTimeout(loadGPT, 500);
  } 
}