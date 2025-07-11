const FramebarSearch={exploreApiData:[],url:'https://www.detik.com/search/searchall',params:{},async onLoad(){await this.placeholderKeyword();this.topKeyword();},async onOpen(withPlaceholder=true){CookiesSearch.onOpen();if(!this.isMobile()){this.setInputValueFromPlaceholder();}
if((this['request']??false)==true){return false;}
if(this.isMobile()){this.topKeyword();this.placeholderKeyword();}
this.lazyImage();if(!withPlaceholder){this.topKeyword();this.promotedKeyword();this['request']=true;return false;}
this.setUrlParams();this.promotedKeyword();this['request']=true;},onSubmit(e){e.preventDefault();let searchInput=document.getElementById('search-text');let value=searchInput.value.trim();let placeholderValue=searchInput?.getAttribute('itp-data-value');let form=searchInput.closest('form');if(value.length>0){form&&form.submit();}else if(placeholderValue&&placeholderValue.length>0){searchInput.value=placeholderValue;form&&form.submit();}else{return false;}},async getExploreApi(page='',isUniqueVisitor=true){const endPoint='https://explore-api.detik.com/trending';let uniqueVisitor='';if(isUniqueVisitor){const __dtma=CookiesSearch.getCookies('__dtma',false);uniqueVisitor=__dtma?`?uniqueVisitor=${__dtma}`:'';}
const headers=new Headers();headers.append('Content-Type','application/json');try{const response=await fetch(endPoint+page+uniqueVisitor,{headers});const data=await response.json();this.exploreApiData=data;return data;}catch(error){console.log(error);return null;}},async getFYBApi(){const tag='https://www.detik.com/api/fyb';const headers=new Headers();headers.append('Content-Type','application/json');headers.append('X-Requested-With','XMLHttpRequest');try{const response=await fetch(tag,{headers});const data=await response.json();return data;}catch(error){console.log(error);return null;}},setLocalStorage(name,value,duration){if(window.localStorage){localStorage.setItem(name,JSON.stringify({expired:new Date().getTime()+(duration*60*1000),value:value}));}},getLocalStorage(name){let data=[];if(window.localStorage){data=localStorage.getItem(name);}
try{data=data?JSON.parse(data):[];}catch(error){return null;}
let currDate=new Date().toLocaleString("en-US",{timeZone:"Asia/Jakarta"});if(data.expired&&data.expired>new Date(currDate).getTime()&&data.value){return data.value;}
return null;},isMobile(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){return true;}
return false;},lazyImage(){let t=document.getElementsByClassName("searchasset-lazy");if(0!=t.length){let a=t[0].querySelectorAll("[data-src]");for(let e=0;e<a.length;e++)a[e].setAttribute("src",a[e].getAttribute("data-src")),a[e].removeAttribute("data-src");}},setUrlParams(){const c=document.querySelector('[data-itp-json="search"]');if(c){o=JSON.parse(c.textContent);this.urll=o.url;this.params=o.params}},setInputValueFromPlaceholder(){let querySelected=document.getElementById('placeholder-search')?.getAttribute('itp-data-value');let searchTextElement=document.getElementById('search-text');searchTextElement.placeholder=querySelected??'Cari berita...';searchTextElement.setAttribute('itp-data-value',querySelected??'');},urlBuilder(url){url=url.toLowerCase().replace(/\s+/g,'+');return url;},async topKeyword(){let storageName='search_top_keyword';let topKeywordData=this.exploreApiData;let localStorageData=this.getLocalStorage(storageName);if(localStorageData!==null){return this._topKeyword(localStorageData);}
if(!topKeywordData||topKeywordData.length<1){topKeywordData=await this.getExploreApi();}
topKeywordData=topKeywordData?.body?.topKeywordSearch??[];if(topKeywordData.length==0){return this._topKeyword(topKeywordData);}
topKeywordData=topKeywordData.map((item)=>{return item.keyword;});this._topKeyword(topKeywordData);this.setLocalStorage(storageName,topKeywordData,5);},async promotedKeyword(){let storageName='search_promoted_keyword';let dataCMS=[];let dataTrending=[];let dataLocalStorage=[];dataLocalStorage=this.getLocalStorage(storageName);let cmsValue=Array.isArray(dataLocalStorage)?dataLocalStorage.find(item=>item.source==="cms")?.value??null:null;let trendingValue=Array.isArray(dataLocalStorage)?dataLocalStorage.find(item=>item.source==="trending")?.value??null:null;if(cmsValue&&dataTrending.length>0){return this._promotedKeyword(dataLocalStorage);}
if(!cmsValue||cmsValue.length===0){dataCMS=await this.getFYBApi();dataCMS=dataCMS?.data?.filter(item=>item.tag_position=="7")??[];dataCMS=dataCMS[0]?.tag_name??'';}else{dataCMS=cmsValue;}
if(!trendingValue||trendingValue.length===0){dataTrending=await this.getExploreApi('/fyb',false);dataTrending=dataTrending?.body?.promotedKeywordSearch??[];dataTrending=dataTrending.map((item)=>{return item.keyword;});}else{dataTrending=trendingValue;}
if(dataTrending.length==0&&!dataCMS){document.getElementById('promoted-search').innerHTML='';return false;}
let promotedKeyword=[{'source':'cms','value':dataCMS},{'source':'trending','value':dataTrending}];this._promotedKeyword(promotedKeyword);this.setLocalStorage(storageName,promotedKeyword,5);},async placeholderKeyword(){let storageName='search_placeholder_keyword';let placeholderData=this.getLocalStorage(storageName);if(placeholderData!==null){return this._placeholderKeyword(placeholderData);}
placeholderData=await this.getExploreApi();placeholderData=placeholderData?.body?.topKeywordSearch??[];if(placeholderData.length==0){return this._placeholderKeyword(placeholderData);}
placeholderData=placeholderData.map((item)=>{return item.keyword;});this._placeholderKeyword(placeholderData);this.setLocalStorage(storageName,placeholderData,5);},_topKeyword(data=[]){if(data.length==0)return false;const elTopKeyword=document.getElementById('top-keyword-search');const c=document.querySelector('[data-itp-json="search"]');if(c){let o=JSON.parse(c.textContent);this.url=o.url;this.params=o.params;document.querySelector('[data-itp-form="searchbar"]').action=o.url;}
const qs=Object.entries(this.params).reduce((acc,[key,value])=>{acc=`${acc}&${key}=${value}`;return acc;},'');let content='';for(let i=0;i<data.length;i++){content+=`
            <li>
                <a href="${this.url}?query=${this.urlBuilder(data[i])}${qs}" dtr-evt="search bar" dtr-sec="trending search" dtr-act="trending search" onclick="_pt(this)" dtr-idx="${i + 1 + '$##$' + data[i]}" dtr-ttl="${data[i]}" itp-data-value="${data[i]}"><span class="font-bold">#${i+1} </span>${data[i]}</a>`;if(i<3){content+=`<span class="icon-right">
                                    <img src="${ asset_common }/images/icon-chart.webp" width="18" height="18" alt="">
                                </span>`;}
content+=`</li>`;}
elTopKeyword.innerHTML=content;},_promotedKeyword(data=[]){if(data.length==0)return false;const elPromotedKeyword=document.getElementById('promoted-search');let content='';let idx=0;for(let i=0;i<data.length;i++){if(data[i].source==='cms'&&data[i].value){content+=`
                <li>
                    <a class="promoted" href="https://fyb.detik.com/tag/${this.urlBuilder(data[i].value)}" dtr-evt="search bar promoted" dtr-sec="promoted search" dtr-act="promoted search" onclick="_pt(this)" dtr-idx="${i + 1}" dtr-ttl="${data[i].value}" itp-data-value="">
                        <span class="font-bold orange pdb-3">
                            <img src="${asset_common}/images/framebar/up-bisnis.svg">
                        </span>
                        ${data[i].value}
                    </a>
                </li>`;}else if(data[i].source==='trending'&&Array.isArray(data[i].value)){data[i].value.forEach((keyword,index)=>{content+=`
                    <li>
                        <a class="promoted" href="https://fyb.detik.com/tag/${this.urlBuilder(keyword)}" dtr-evt="search bar promoted" dtr-sec="promoted search" dtr-act="promoted search" onclick="_pt(this)" dtr-idx="${i + 1}" dtr-ttl="${keyword}" itp-data-value="">
                            <span class="font-bold orange pdb-3">
                                <img src="${asset_common}/images/framebar/${i === 0 ? 'up-bisnis' : 'dotted'}.svg">
                            </span>
                            ${keyword}
                        </a>
                    </li>`;});}}
elPromotedKeyword.innerHTML=content;},_placeholderKeyword(data=[]){const elSearchInput=document.getElementById('placeholder-search');const elSearchInput2=document.getElementById('search-text');if(this.isMobile()){elSearchInput2.setAttribute('data-phrases',JSON.stringify(data));}else{elSearchInput.setAttribute('data-phrases',JSON.stringify(data));}}}
const CookiesSearch={lastSearchCookieName:'search_last_search',onOpen(){lastCookieValue=this.getCookies(this.lastSearchCookieName);this.appendLastSearch(lastCookieValue);},onDelete(index,e){let lastCookieValue=this.getCookies(this.lastSearchCookieName);_pt(e)
lastCookieValue.splice(index,1);const cookiesData={name:this.lastSearchCookieName,value:lastCookieValue,expires:30,}
this.setCookies(cookiesData);lastCookieValue=this.getCookies(this.lastSearchCookieName);this.appendLastSearch(lastCookieValue);},saveLastSearch(querySearch=''){if(querySearch==''){return this.appendLastSearch(this.getCookies(this.lastSearchCookieName));}
let lastCookieValue=this.getCookies(this.lastSearchCookieName);lastCookieValue=lastCookieValue.filter(item=>item.toLowerCase()!==querySearch.toLowerCase());lastCookieValue.unshift(querySearch);if(lastCookieValue.length>3){lastCookieValue=lastCookieValue.slice(0,3);}
const cookiesData={name:this.lastSearchCookieName,value:lastCookieValue,expires:30,}
this.setCookies(cookiesData);},appendLastSearch(data){const elLastSearch=document.getElementById('last-search');const qs=Object.entries(FramebarSearch.params).reduce((acc,[key,value])=>{acc=`${acc}&${key}=${value}`;return acc;},'');let content='';for(let i=0;i<data.length;i++){content+=`
            <li>
                <a href="${FramebarSearch.url}?query=${FramebarSearch.urlBuilder(data[i])}${qs}" dtr-evt="search bar" dtr-sec="recent search" dtr-act="recent search" onclick="_pt(this)" dtr-idx=${i + 1} dtr-ttl="${data[i]}" itp-data-value="${data[i]}"><i class="icon icon-back-in-time"></i> ${data[i]}</a>
                <span class="icon-right clear-list" onclick="CookiesSearch.onDelete(${i}, this)" dtr-evt="search bar" dtr-sec="delete" dtr-act="delete" itp-cookie-last-search="${data[i]}">
                    <img src="${ asset_common }/images/framebar/icon-clear.webp" width="15" height="15" alt="">
                </span>
            </li>`;}
elLastSearch.innerHTML=content;},setCookies(data){return document.cookie=data.name+"="+JSON.stringify(data.value)+";"+data.expires+";domain=.detik.com;path=/";},getCookies(cookieName,parse=true){const cookies=document.cookie.split(';');for(let i=0;i<cookies.length;i++){const cookie=cookies[i].trim();if(cookie.startsWith(cookieName+'=')){if(parse===true){return JSON.parse(cookie.replace(cookieName+'=',''));}else{return cookie.replace(cookieName+'=','');}}}
return[];}}