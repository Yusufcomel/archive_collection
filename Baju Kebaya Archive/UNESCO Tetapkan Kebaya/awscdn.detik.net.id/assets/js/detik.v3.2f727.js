var dcInfo=null,dLoop=0;tmpData=[];var helper={inview:function(el,sz="-500")
{let
percentVisible=sz,rect=el[0].getBoundingClientRect(),windowHeight=(window.innerHeight||document.documentElement.clientHeight);if(Object.entries(rect.toJSON()).every(([key,val])=>val===0))return false;return!(Math.floor(100-(((rect.top>=0?0:rect.top)/+-(rect.height/1))*100))<percentVisible||Math.floor(100-((rect.bottom-windowHeight)/rect.height)*100)<percentVisible)},loaded:function(el,val)
{let selector='d-loaded';if(typeof val=='undefined')
{return el.attr(selector)}
return el.attr(selector,1)},getextention:function(value)
{return value.split('.').pop();},loadscript:function(src,callback=function(){})
{var s=document.createElement("script");s.type="text/javascript";$("head").append(s);if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState==="complete"){s.onreadystatechange=null;callback();}};}else{s.onload=function(){callback();};}
s.src=src;},setimage:function(src,title,ratio='169',qs='',_class='',urlonly=false,attrs='')
{if(typeof src=='undefined'){return;}
try{if(src.indexOf('/visual/')!=-1){if(!helper.is20dtk(baseurl)){src=src.replace(/\_[0-9]+/,'_'+ratio)+qs;if(src.indexOf('_'+ratio)==-1){let ext=helper.getextention(src);src=src.replace('.'+ext,'_'+ratio+'.'+ext);}}}
if(helper.is20dtk(baseurl)&&src.indexOf('/videoservice/')!=-1){src=src+qs;}
if(urlonly){return src;}}catch(e){}
if(typeof attrs=='object')attrs=Object.keys(attrs).map(key=>key+'="'+attrs[key]+'"').join(' ');else attrs='';return'<img src="'+src+'" title="'+title+'" alt="'+title+'" class="'+_class+'" '+attrs+'/>';},timeago:function(timestamp){var suffix=' yang lalu';var date=timestamp*1000;var seconds=Math.floor((new Date()-date)/1000);var interval=Math.floor(seconds/86400);if(interval>=1){return false;}
interval=Math.floor(seconds/3600);if(interval>=1){return interval+" jam"+suffix;}
interval=Math.floor(seconds/60);if(interval>=1){return interval+" menit"+suffix;}
return"0 menit"+suffix;},prettydate:function(_date)
{let _month=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];let _day=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];var offs=new Date().getTimezoneOffset();var diff=offs*60000;var rec=_date+diff;var _ndate=new Date(rec);let h=_day[_ndate.getDay()];let b=_month[_ndate.getMonth()];return h+', '+this.addzero(_ndate.getDate())+' '+b.slice(0,3)+' '+_ndate.getFullYear()+' '+
this.addzero(_ndate.getHours())+':'+this.addzero(_ndate.getMinutes())+' WIB';},loop:function(callback,interval,max_loop){callback();var time=1;var _interval=setInterval(function(){if(time<max_loop){callback()
time++;}
else{clearInterval(_interval);}},interval);},addzero:function(i)
{if(i<10){i="0"+i;}
return i;},ismobile:function()
{if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){return true;}
return false;},set_paneltracking:function(name,title,type,obj,is_new)
{var append_obj='';if(obj!==''&&typeof obj!=='undefined'){append_obj=', '+obj+'';}
return(is_new)?'_pt(this)':'_pt(this, "'+name+'", "'+title+'", "'+type+'"'+append_obj+')';},dev_user:function()
{var match=window.location.href.match(/~\w*/g)
if(match){return match[0]+"/"}
if((typeof DEVEL_USER)!='undefined'){return`~${DEVEL_USER}/`;}
return""},isdevel:function()
{return this.dev_user()!=""},imageloaded:function(el)
{var $imgs=el.find('img[src!=""]');if(!$imgs.length){return $.Deferred().resolve().promise();}
var dfds=[];$imgs.each(function(){var dfd=$.Deferred();dfds.push(dfd);dfd.resolve();});return $.when.apply($,dfds);},ws:function(url,callback)
{if(window.WebSocket)
{if(helper.isdevel())
{url+='_dev';}
helper.log('ws: listening to',url);var ws=new WebSocket(url);ws.onopen=function(){helper.log('ws:','is open')};ws.onmessage=function(me)
{helper.log('ws result:',me);callback(me.data);}}},log:function(...data)
{if(!this.isdevel()){return;}
console.log('detikjs',...data);},lqd_img:function(i)
{var d=$(i);$(d).each(function(d){var a=$(this).find("img").attr("src");i.indexOf('.lqd_block')!=-1?$(this).append('<div class="lqd_img" style="background-image:url('+a+');"></div>'):($(this).find("img").hide(),$(this).css("background-image","url("+a+")"))})},login_serv:function()
{var xhttp=new XMLHttpRequest();xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var res=JSON.parse(this.response);return res.status;}};xhttp.open("POST",baseurl+'/ajax/is_login',true);xhttp.send();},getuseragent:function()
{var userAgent=navigator.userAgent||navigator.vendor||window.opera;if(/iPad|iPhone|iPod/i.test(userAgent)&&!window.MSStream){return"iOS";}
return"Android";},current_uri:function(key)
{var urlwoqs=window.location.href;var q=urlwoqs.indexOf(key);var w=urlwoqs.substring(q);var e=urlwoqs.replace(w,"");return(e!=='')?e:urlwoqs;},randomize:function(obj)
{$.each(obj,function(i,v){let j=i+Math.floor(Math.random()*(obj.length-i));let temp=obj[j];obj[j]=obj[i];obj[i]=temp;});return obj;},get_the_user:function()
{return new Promise(function(resolve,reject){setTimeout(function(){resolve();},1000);}).then(function(){return dcInfo;});},sitename:function(url)
{var urlInstance=new URL(url);var hostname=urlInstance.hostname;var pathname=urlInstance.pathname;var explodeStr=hostname.split('.');var segments=pathname.split('/');if(hostname=='sport.detik.com'){if(segments[1]=='sepakbola'){return'Sepakbola';}}
switch(segments[1]){case'edu':return'detikEdu';case'jateng':return'detikJateng';case'jatim':return'detikJatim';case'jabar':return'detikJabar';case'kalimantan':return'detikKalimantan';case'sulsel':return'detikSulsel';case'sumut':return'detikSumut';case'bali':return'detikBali';case'hikmah':return'detikHikmah';case'sumbagsel':return'detikSumbagsel';case'properti':return'detikProperti';case'jogja':return'detikJogja';case'pop':return'detikPop';}
if(explodeStr.length==3){var singleName=['wolipop'];var siteDomain=explodeStr[1];var subDomain=explodeStr[0];var ucFirst=subDomain.charAt(0).toUpperCase()+subDomain.slice(1);if(['20','tv'].indexOf(subDomain)!==-1){return'20Detik';}
if(singleName.indexOf(subDomain)!==-1){return ucFirst;}
return siteDomain+ucFirst;}
return'detikcom';},deferrer_rec:async function(el){var deferrer=new Promise(function(resolve){var counter=0;var defaultdsrec={'src':'internal','url':helper.endpoint_rec(baseurl,dWidget.rec_source(el),el),};var waitForElement=function(){console.log('[portal][listen-rec] : wait');console.log('[portal][type-rec] : ',dWidget.rec_source(el));if(typeof window.dsrec!=='undefined'&&typeof window.dsrec[dWidget.rec_source(el)]!=="undefined"){console.log('[portal][listen-rec] : done');var dsrec=window.dsrec[dWidget.rec_source(el)];if($.isArray(dsrec)){var randdsrec=dsrec[Math.floor(Math.random()*dsrec.length)];if(typeof randdsrec.url!=="undefined"&&typeof randdsrec.src!=="undefined"){return resolve(randdsrec);}
return resolve(defaultdsrec);}
if(typeof dsrec.url!=="undefined"&&typeof dsrec.src!=="undefined"){return resolve(dsrec);}
return resolve(defaultdsrec);}else if(counter<=9){counter++;console.log('[portal][listen-rec] : count..',counter);return setTimeout(waitForElement,500);}
console.log('[portal][listen-rec] : limit exeeded');return resolve(defaultdsrec);}
waitForElement();});return await deferrer.then(function(dsrec){return[dsrec,dWidget.rec_source(el)];});},endpoint_rec:function(url,type_rec='dsrec',el='')
{if(helper.is20dtk(url)==true){return'//recg20.detik.com/article-recommendation/keywordsxchannelsandtagsmospopxchannels/'}
var recSlugs={'newsfeed_recommendation_wp':'wp','newsfeed_recommendation':'detail','newsfeed_recommendation_sticky':'sticky','newsfeed_recommendation_index':'index','newsfeed_recommendation_enhanced_no_img':'detail','newsfeed_recommendation_enhanced':'detail','newsfeed_recommendation_wp_enhanced_no_img':'wp','newsfeed_recommendation_wp_enhanced':'wp'}
var recType='wp';if(el!==''&&typeof el.attr('d-widget')!=='undefined'){dWidgetAttr=el.attr('d-widget')
var findSlug=recSlugs[dWidgetAttr]
if(typeof findSlug!=='undefined'){recType=findSlug}}
return`//rech.detik.com/article-recommendation/${recType}/`},is20dtk:function(url)
{if(url.indexOf('20.detik.com')>-1)
{return true;}
return false;},duration_pretty:function(second)
{if(second.toString().length<=0||second==0)return'';var sec_num=parseInt(second,10);var hours=Math.floor(sec_num/3600);var minutes=Math.floor((sec_num-(hours*3600))/60);var seconds=sec_num-(hours*3600)-(minutes*60);if(hours<10){hours='0'+hours;}
if(minutes<10){minutes='0'+minutes;}
if(seconds<10){seconds='0'+seconds;}
return(hours=='00'?'':(hours+':'))+minutes+':'+seconds;},}
jQuery.fn.extend({detikTime:function(){var t=$(this)
helper.loop(function(){t.each(function(i,v){var _this=$(v),time=_this.attr('d-time'),pretty=_this.attr('title'),timeago=helper.timeago(time)
if(timeago!=false){_this.text(timeago);}else{_this.text(pretty);}})},60*1000,10)}})
var breakingNews={title:document.title,init:function(){try{this.cek_live();}catch(e){helper.log(e);}},cek_live:function(){$.getJSON(`https://20.detik.com/api/statuslive/wpnewsfeed_2`,function(data_bn){$.getJSON(`https://20.detik.com/api/statuslive/livestreaming`,function(data_ls){$.getJSON(`https://20.detik.com/api/statuslive/livestreaming_sponsorship`,function(data_sp){var disable_refresh_bn=false
var disable_refresh_ls=false
var disable_refresh_sp=false
if(data_bn){if(data_bn.status=="off"){disable_refresh_bn=false}else if(data_bn.status=="on"&&data_bn.disablerefresh=="off"){disable_refresh_bn=false}else{disable_refresh_bn=true}}
if(data_ls){if(data_ls.status=="off"){disable_refresh_ls=false}else if(data_ls.status=="on"&&data_ls.disablerefresh=="off"){disable_refresh_ls=false}else{disable_refresh_ls=true}}
if(data_sp){if(data_sp.status=="off"){disable_refresh_sp=false}else if(data_sp.status=="on"&&data_sp.disablerefresh=="off"){disable_refresh_sp=false}else{disable_refresh_sp=true}}
if((disable_refresh_bn)||(disable_refresh_ls)||(disable_refresh_sp)){console.log("[portal]: breaking news no refresh");}else{console.log("[portal]: breaking news refresh");dRefresh.init()}})})})},refresh_page:function(){setTimeout(function(){if(helper.isdevel())
{location.reload(false)}
else
{window.location.href="https://www.detik.com/";}},15*60*1000);}}
var dRefresh={time:15*60*1000,idtimeout:null,init:function(){helper.log("drefresh","init")
this.start(this.time)},start:function(time){this.idtimeout=setTimeout(function(){if(helper.isdevel())
{location.reload(false)}
else
{window.location.href="https://www.detik.com/";}},time);helper.log("drefresh started",this.idtimeout,time)},stop:function(){clearTimeout(this.idtimeout)
helper.log("drefresh stoped",this.idtimeout)}}
var dNotif={el:$('#notification_newsfeed'),title:document.title,init:function(){if(this.el.length){this.listen();}},listen:function(){var url='wss://push.detik.com/ws/wpnewsfeed_'+channel_id;helper.ws(url,function(data){helper.log('dnotif listen:',data);if(data)
{var d=JSON.parse(data)
if(typeof d.type!='undefined')
{var site_id_with_breakingnews=['2','120','118','119','121','122','123','154','156',];if(d.type=='breakingnews'&&site_id_with_breakingnews.includes(site_id))
{dNotif.breaking(d)}}
else
{dNotif.show(d.count);$(window).trigger('scroll');}}})},breaking:function(d){if(d.status=='on'||d.status=='off'){dNotif.refresh();}},refresh:function(){setTimeout(function(){location.reload(false);},10000);},show:function(c){var notif=this.el;var count=$('#count_newsfeed');var current_count=parseInt(count.text());var new_count=current_count+c;count.text(new_count)
$(window).on('scroll',function(){helper.log('dNotif: scrolled');if(!notif.is(':visible')&&$(window).scrollTop()>=$('.section.nhl').offset().top)
{if(notif.attr('popup-notif')=='enable')
{helper.log('dNotif: fadein');notif.fadeIn();}}})}}
var dLvr={el:$('.livereport_notif'),title:document.title,count:$('#count_lvr'),init:function(){helper.log('push channel:',ARTICLE.pushChannel);if(typeof ARTICLE!=='undefined'){this.listen(ARTICLE.pushChannel);}},listen:function(channel){var url='wss://push.detik.com/ws/'+channel;helper.ws(url,function(data){helper.log('livereport data:',data)
if(data){var d=JSON.parse(data)
var current_count=parseInt(dLvr.count.text());var new_count=current_count+d.count;helper.log('current, new: ',current_count,new_count);dLvr.count.text(new_count);document.title='('+new_count+') '+dLvr.title;dLvr.el.fadeIn('slow');}})}}
var dWidget={elm:'d-widget',rec:helper.endpoint_rec(baseurl),app:((typeof baseurl!=='undefined')?baseurl:base_url)+'/ajax/',_method:'GET',init:function()
{$('['+dWidget.elm+']').each(function(i,v){dWidget.create($(this));})},create:function(el)
{var attr_rec=el.attr('d-recommendation'),attr_rec_wp=el.attr('d-recommendation-wp'),appurl=this.app+this._name(el)+this._flush(),params=(el.attr('d-params'))?el.attr('d-params'):{},is_rec_detail=(typeof attr_rec!==typeof undefined&&attr_rec!==false)?true:false,is_rec_wp=(typeof attr_rec_wp!==typeof undefined&&attr_rec_wp!==false)?true:false,is_rec=is_rec_wp||is_rec_detail?true:false,type_rec=is_rec_wp?'wp':'detail';this._create(el,appurl,params,is_rec,type_rec);},_flush:function()
{var qs=new URLSearchParams(window.location.search),fl=(qs.has('flush')?'?flush':''),dv=(qs.has('device')?'?device='+qs.get('device'):''),pr=fl+dv;if((pr.split('?').length-1)>1)
{pr=pr.replace(/\?([^?]*)$/,'&'+'$1');}
return pr;},_params:function(el){return(el.attr('d-params'))?el.attr('d-params'):{};},_name:function(el)
{return el.attr(dWidget.elm);},_create:function(el,appurl,params,is_rec,typerec='detail')
{if(is_rec){if(helper.loaded(el)){return;}
helper.loaded(el,1);this.rec_get(el,typerec);return;}
if(!helper.inview(el)||helper.loaded(el)){return;}
helper.loaded(el,1)
if(typeof is_rec!==typeof undefined&&is_rec!==false){this.rec_get(el,typerec);}else{this._request({url:appurl,type:dWidget._method,data:{param:params},success:function(response){dWidget._generate(response,el)},fail:function(xhr,status,errorthrown){dWidget._failed(xhr,status,errorthrown)}});}},_append:function(el,res)
{el.html(res.html);try{var _cell=el.attr(dWidget.elm);helper.lqd_img('div['+dWidget.elm+'='+_cell+'] .lqd');if(res.html.indexOf('lqd_block')!==-1)
{helper.lqd_img('div['+dWidget.elm+'='+_cell+'] .lqd_block');}
$(".lqd").imgLiquid();setTimeout(function(){helper.log('__',this.complete);$(document.body).trigger("sticky_kit:recalc");},3000);}catch(e){}
dWidget._aftergenerate(el);},_generate:function(res,el)
{var is_image=$(res.html);if($(res.html).find('ins').length>0){this._append(el,res);}else if(is_image.find('img').length>0){is_image.find('img').each(function(){dWidget._append(el,res);});}else{this._append(el,res);$(document.body).trigger("sticky_kit:recalc");}},_aftergenerate:function(el)
{el.find('[d-time]').detikTime();this._refreshads(el);this._hoveredimg(el);},_hoveredimg:function(el)
{if(el.find('.block-link').length!==-1){setTimeout(function(){helper.imageloaded(el).then(function(){el.find('.block-link').hover(function(){$(this).toggleClass("block-link--hover");})});},500)}},_refreshads:function(el)
{let ads=el.find('ins').length;if(ads>0){try{window.reviveAsync["0cceecb9cae9f51a31123c541910d59b"].refresh();}catch(e){helper.log('___',e);}}},_failed:function(xhr,status,errorthrown)
{helper.log('__xhr',xhr);helper.log('__status',status);helper.log('__errorthrown',errorthrown);},_limit:function()
{return($('meta[name=platform]').attr("content")=='desktop')?6:4;},rec_source:function(el){if(typeof el.attr('d-rec-src')=='undefined')return'detail';switch(el.attr('d-rec-src')){case'dsrecwp':return'newsfeed';case'dsrecsticky':return'sticky';}
return el.attr('d-rec-src');},rec_get:async function(el,typerec='detail')
{var dtma=this._dtma(),size=(el.attr('d-rec-size'))?el.attr('d-rec-size'):this._limit(),excids=$('meta[name="articleid"]').attr('content'),acctyp=$('meta[name="dtk:acctype"]').attr('content');if(helper.is20dtk(baseurl)){return this._request({url:this.rec+dtma+'?size='+size+'&excludeProgId=170724519,190313542'+'&nocache=1',type:'GET',xhrFields:{withCredentials:true},dataType:'json',success:function(data){dWidget.rec_pull(data,el);}});}
var[dsrec,key]=await helper.deferrer_rec(el);console.log(`[portal][src-rec-ab_${key}] : done.`,dsrec);var trcname=(typeof dsrec.tracking_rec!=='undefined')?dsrec.tracking_rec:'internal';switch(dsrec.src){case'internal':var client={url:dsrec.url+dtma+'?size='+size+'&nocache=1&ids='+excids+"&acctype="+acctyp,type:'GET',xhrFields:{withCredentials:true},dataType:'json',success:function(data){dWidget.rec_pull(data,el,trcname);},error:function(textStatus,errorThrown){$('.ph-insertion-block').hide();}};if(typeof itp_internal_included_channels!=='undefined'){client.type='POST';client.data=JSON.stringify({excludeChannels:[],includeChannels:itp_internal_included_channels,});client.contentType="application/json; charset=utf-8";}
this._request(client);break;}},rec_pull:function(datarec,el,datasrc="internal")
{let params=dWidget._params(el);dWidget._request({url:dWidget.app+dWidget._name(el)+dWidget._flush(),type:'GET',dataType:'json',data:{param:params},success:function(response){dWidget.rec_generate(response,el,datarec,datasrc);}});},rec_generate:function(resapp,el,rec,datasrc)
{if(typeof rec.body!=='undefined'){let pf='_itp';let _pfx='d-panel-';let _attr=['name','type','disable-source'];let _numb='[pt_number]';let _types='artikel';let _panel='berita rekomendasi';let _sec='';let _act='';var the_data={};var firrec='recommendation_firstrow';var secrec='recommendation_secondrow';var ordinals={1:'first',2:'second',3:'third',4:'fourth',5:'fifth',6:'sixth',7:'seventh',8:'eighth',9:'ninth'};el.attr('d-recsource',datasrc);el.html(resapp.html)
if(el.data('rec-show')!=1){el.hide();}
the_data=rec.body;$.each(the_data,function(index,item){if(typeof index!=='undefined'){if(site_id==2&&window.location.href.split("/")[3].split("?")[0].toLowerCase()!=='rekomendasi'){if((helper.ismobile()&&index>=4)||(!helper.ismobile()&&index>=6)){var insertion='#rec_loop_'+index;var idx=parseInt($(insertion).attr("article-idx"));var insertion_pt_opt={'dtr-evt':"newsfeed rekomendasi",'dtr-sec':"newsfeed rekomendasi",'dtr-act':"artikel newsfeed rekomendasi",'dtr-idx':helper.ismobile()?idx:idx+2,'dtr-ttl':item.title,'dtr-id':item.id,'onclick':"_pt(this)",'dtr-src':datasrc,};$(insertion).removeClass("ph-item");var mediaHtml=`
                            <div class="media media--left media--image-radius ${helper.ismobile() ? '' : 'block-link'}">
                                <div class="media__image">
                                    <a href="${item.articleurl}" class="media__link rec_link_itp">
                                        <span class="ratiobox ${helper.ismobile() ? 'lqd' : 'ratiobox--4-3 lqd'}" style="background-image: url(&quot;${item.imageurl}&quot;);">
                                            ${helper.setimage(item.imageurl, item.title, helper.ismobile() ? '11' : '43', '?w=250&q=70', '', false)}
                                        </span>
                                    </a>
                                </div>
                                <div class="media__text">
                                    <h3 class="media__title">
                                        <a href="${item.articleurl}" class="media__link rec_link_itp">${item.title}</a>
                                    </h3>
                                    <div class="font-heading ${helper.ismobile() ? 'font-xxs' : 'font-xs'} color-blue mgt-${helper.ismobile() ? '8' : '12'}" style="color: #666666">Artikel Rekomendasi</div>
                                </div>
                            </div>
                        `;$(insertion).html(mediaHtml);$(insertion).find('.rec_link_itp').attr(insertion_pt_opt);}}
let is='#rec_loop_'+index+' .rec_';let newtrc=false;$(el).find(is+'title'+pf).html(decodeURIComponent(encodeURIComponent(unescape(item.title))));$(el).find(is+'subtitle'+pf).text((helper.is20dtk(baseurl))?item.programname:helper.sitename(item.articleurl));if(helper.is20dtk(baseurl)==true){$(el).find(is+'duration'+pf).replaceWith(helper.duration_pretty(item.duration));}
let panel=$(el).find(is+'link'+pf);let _source='{"source_rekomendasi":"'+item.type+'"}';if(typeof panel.attr(_pfx+'name')!=='undefined')
{_panel=panel.attr(_pfx+'name');}
if(typeof panel.attr(_pfx+'section')!=='undefined')
{_sec=panel.attr(_pfx+'section');}
if(typeof panel.attr(_pfx+'action')!=='undefined')
{_act=panel.attr(_pfx+'action');}
if(typeof panel.attr(_pfx+'type')!=='undefined')
{_types=panel.attr(_pfx+'type');if(_types.indexOf(_numb)!=1)
{_types=_types.replace(_numb,(index+1));}}
if(typeof panel.attr(_pfx+'disable-source')!=='undefined')
{_source='';}
if(typeof panel.attr(_pfx+'newtrc')!=='undefined'&&panel.attr(_pfx+'newtrc')=='true'){newtrc=panel.attr(_pfx+'newtrc');}else if(typeof panel.find(`#rec_loop_${index}.rec_link_${pf}`)!=='undefined'){newtrc=true;}
let reclink=$(el).find(is+'link'+pf);if(reclink.length<=0){reclink=$(el).find(`${is}link${pf}`.replace(' ',''));}
reclink.attr({'href':(helper.is20dtk(baseurl))?item.videourl:item.desktopurl,'onclick':helper.set_paneltracking(_panel,item.title,_types,_source,newtrc)});if(newtrc)
{reclink.attr({'dtr-evt':_panel,'dtr-sec':_sec,'dtr-act':_act!=''?_act:_panel,'dtr-idx':(index+1),'dtr-ttl':item.title,'dtr-id':item.id,'dtr-src':datasrc});(el).find(is+'link'+pf).removeAttr(_pfx+'newtrc');(el).find(is+'link'+pf).removeAttr(_pfx+'section');(el).find(is+'link'+pf).removeAttr(_pfx+'action');}
try{let wo_rep=$(el).find(is+'resume_woreplace'+pf);if(wo_rep.length>0){wo_rep.text(item.resume);}else{$(el).find(is+'resume'+pf).replaceWith(item.resume);}}catch(e){}
let el_img=$(el).find(is+'image'+pf);let ratio=el_img.data('ratio');let qs=el_img.data('qsimg');let attrs={};if(item.animated)attrs['data-thumbnail']=item.animated;let site_id_rec=['75'];let recimgclass='';if($(el).find(is+'image'+pf).attr('class')!==undefined&&$(el).find(is+'image'+pf).attr('class').length>0){recimgclass=$(el).find(is+'image'+pf).attr('class');}
$(el).find(is+'image'+pf).replaceWith(!site_id_rec.includes(site_id)?helper.setimage('https://cdn.detik.net.id/detik2/images/default-'+ratio+'.gif',item.title,ratio,qs,`${recimgclass} lazy-image`,false,{'data-src':helper.setimage(item.imageurl,'',ratio,'','',true)}):helper.setimage(item.imageurl,item.title,ratio,qs,recimgclass,false,attrs));$.each(_attr,function(i,val){$(el).find(is+'link'+pf).removeAttr(_pfx+val);});}})
setTimeout(function(){$('article[id^="rec_loop_"]').each(function(i,el){if($(el).find('.rec_link_itp').attr('href')=='#'){el.remove();}
if(typeof $(el).attr("d-article-per-row")!=='undefined'&&$(el).attr("d-article-per-row")!=false){article_per_row=$(el).attr("d-article-per-row");row_num=Math.ceil((i+1)/article_per_row);rec_class=typeof ordinals[row_num]!=='undefined'?'recommendation_'+ordinals[row_num]+'row':'recommendation_'+ordinals[Object.keys(ordinals)[Object.keys(ordinals).length-1]]+'row';$(el).addClass(rec_class);}else{if(helper.ismobile()){if(i<=1){$(el).addClass(firrec);}else{$(el).addClass(secrec);}}else{if(i<=2){$(el).addClass(firrec);}else{$(el).addClass(secrec);}}}});},1000)
try{liquid_img();$(".lqd").imgLiquid();}catch(e){}
if(el.data('rec-show')!=1){el.show();}
setTimeout(function(){dWidget._refreshads(el);},1000);if(site_id==2){setTimeout(function(){var datas=document.querySelectorAll('*[dtr-evt]');var idx=1;for(var i=0,len=datas.length;i<len;i++){var ids=datas[i].getAttribute('dtr-id');collectTheData(colldr,ids,datas,idx,i,efiddr,colltm);}},1000);}}},_request:function(args)
{$.ajax(args);},_dtma:function()
{var key='__dtma',match=document.cookie.match(new RegExp('(^| )'+key+'=([^;]+)'));if(match){var _d=match[2].split('.');var _dtma=_d[0]+'.'+_d[1]+'.'+_d[2];return _dtma;}
else{return'-';}}}
var callSticky={setsticky:function()
{var time=1;var interval=setInterval(function(){if(time<=10){$(document.body).trigger("sticky_kit:recalc");time++;}
else{clearInterval(interval);}},1000);}}
var dNewsfeed={elm:'.article_inview',prefix:'i-',att:['title','img','info','link','img-ratio','img-qs','subtitle','type'],identify:'loop',appendclass:'d-append-class',allow_html:['ai_title'],init:function()
{$(dNewsfeed.elm).each(function(i,v){dNewsfeed.show($(this));})},show:function(el)
{if(!helper.inview(el)||helper.loaded(el)){return;}
helper.loaded(el,1)
var loop=el.attr(this.prefix+this.identify);var article=$(dNewsfeed.elm+'['+this.prefix+this.identify+'='+loop+']');var allowed_html=dNewsfeed.allow_html;$(el).find('[class^="ai_replace_"]').each(function(i,v){var className=this.className.match(/ai_replace_\w+/);var finder=className[0].replace('replace_','');var type_rep=article.find("."+className[0]);var replacer=(allowed_html.indexOf(finder)!=-1)?type_rep.html():type_rep.text();article.find("."+finder).replaceWith(replacer);});try{var sbtitle=article.attr('i-subtitle');article.find('.ai_subtitle').replaceWith(sbtitle);}catch(e){}
var title=article.find('.ai_replace_title').text().trim().replace(/\"/g,"'");this.appendimg(article,title);var info=article.attr('i-info');article.find('.ai_info').replaceWith(info);this.appendpt(article,title);try{let ca=el.find('[d-append-class]');if(typeof ca!=='undefined'){el.find('['+dNewsfeed.appendclass+']').each(function(i,v){$(v).addClass($(v).attr(dNewsfeed.appendclass));helper.imageloaded(el).then(function(){el.find('.block-link').hover(function(){$(this).toggleClass("block-link--hover");})});});}
el.find('.ai_toggle').each(function(i,v)
{$(v).show();})}catch(e){}
this.removeel(article);},removeel:function(e)
{helper.log('___',e);e.find('[d-time]').detikTime();$.each(this.att,function(i,val){e.removeAttr(dNewsfeed.prefix+val);});$(e).find('[class*="ai_replace_"]').each(function(){$(this).remove();});e.find('.media__date').removeClass('ph-date');e.find('.media__text').removeClass('ph-item');e.find('.block-link').removeClass('ai_link');e.find('.media__link').removeClass('ai_link');},appendpt:function(e,title)
{var box=(typeof e.attr('i-box')!=='undefined')?e.attr('i-box'):'newsfeed';var type=(typeof e.attr('i-type')!=='undefined')?e.attr('i-type'):'artikel';var dtre=(typeof e.attr('i-dtre')!=='undefined')?e.attr('i-dtre'):false;var link=e.attr('i-link');e.find('.ai_link').attr({'href':link,'onclick':helper.set_paneltracking(box,title,type,'',dtre)});},appendimg:function(e,title)
{let img=e.attr('i-img');let ratio=e.attr('i-img-ratio');let defaultimg='https://cdn.detik.net.id/detik2/images/default-'+ratio+'.gif';if(typeof img=='undefined'||img==''){img=defaultimg;}
let qs=e.attr('i-img-qs');if(e.find('.ai_original_img').length==0){var _img=helper.setimage(img,title,ratio,qs,'',true);}else{var _img=img+qs;}
dNewsfeed.print_img(e,_img,defaultimg);e.find('.ai_img').hide();},print_img:function(e,img,defaultimg)
{var combinedBackground=`url(${img}), url(${defaultimg})`;e.find('.ai_lqd').css('background-image',combinedBackground);if(dNewsfeed.is_png(img)){e.find('.ai_lqd').css('background-image',`url(${img})`);}
e.find('.ratiobox').removeClass('ph-item');},is_png:function(img)
{var extention=img.split("?")[0].split('.').pop();return extention.toLowerCase()=="png"?true:false;}}
var dFramebar={init:function()
{this.dc_get()
$('#search-text').focus(function(){dFramebar.auto_complete($(this));});},oncomplete:function(){$('.dtkframebar__user__login').removeAttr('style');helper.loadscript('https://cdn.detik.net.id/libs/assets/js/framebar/dtkframebar-controller.js?v=1.0');},redirectUrlReplacer:function(originUrl){const url=new URL(originUrl);const args=new URLSearchParams(url.search);args.set('redirectUrl',window.location.href);if(args.has('parentURI')){args.set('parentURI',window.location.href);}
url.search=args.toString();return url.toString();},onLoginClient:function(data){baseurl=baseurl.replace("detik.com/edu","detik.com").replace("detik.com/jatim","detik.com");var $status_user_nf=$('#status_user_nf');if(typeof framebar_url=='undefined'){framebar_url={profile:"https:\/\/connect.detik.com\/dashboard\/",logout:`https:\/\/connect.detik.com\/oauth\/signout?redirectUrl=${window.location.href}`,register:`https:\/\/connect.detik.com\/accounts\/register?clientId=${dc_params.client_id}&redirectUrl=${window.location.href}&ui=${dc_params.ui}&parentURI=${window.location.href}`,login:`https:\/\/connect.detik.com\/oauth\/authorize?clientId=${dc_params.client_id}&redirectUrl=${window.location.href}&ui=${dc_params.ui}&parentURI=${window.location.href}`}}
if(typeof mpc_qc_url=='undefined'){mpc_qc_url=`https://connect.detik.com/api/mpc/quickcard/html?ci=${dc_params.client_id}`;}
data.framebar_url=data.is_login?{profile:framebar_url.profile,logout:dFramebar.redirectUrlReplacer(framebar_url.logout)}:{register:dFramebar.redirectUrlReplacer(framebar_url.register),login:dFramebar.redirectUrlReplacer(framebar_url.login)};dcInfo=data;$status_user_nf.replaceWith(dFramebar.block(dcInfo));dFramebar.oncomplete();if(dcInfo.is_login&&dFramebar.platform()=='mobile'&&$('#alloframe').length==0){var mpc_qc_mobile=$(`
            <iframe class="p_iframe_r mgt-8" allowtransparency="true" frameborder="0" role="complementary" width="100%" id="alloframe" scrolling="no" horizontalscrolling="no" verticalscrolling="no" src="${mpc_qc_url}" style="border: none !important; overflow: hidden !important; min-height: 70px; max-height: 105px;"></iframe>
          `);$('.box-overlay__body').prepend(mpc_qc_mobile);}
helper.loadscript('https://cdn.detik.net.id/assets/js/iframeresizer.js');if(typeof window.onLoginClientCallback==='function'){window.onLoginClientCallback(dcInfo);}else if(Array.isArray(window.onLoginClientCallback)){for(let i=0;i<window.onLoginClientCallback.length;i++){if(typeof window.onLoginClientCallback[i]==='function'){window.onLoginClientCallback[i](dcInfo);}}}},dc_get:function()
{helper.loadscript('https://cdn.detik.net.id/libs/dc/v1/detikconnect_auto_show_user.js',function(){detikConnectAutoUserShow(site_id,dFramebar.onLoginClient);});},auto_complete:function(el)
{el.autocompleteSearch({serviceUrl:"//suggestqueries.google.com/complete/search?client=chrome&callback=?",dataType:"jsonp",paramName:"q",lookupLimit:5,siteid:site_id,transformResult:function(n){return{suggestions:$.map(n[1],function(n){try{n=n.replace(/[\<\>\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"");}catch(e){helper.log(e);}
return{value:n,data:n}})}}})},platform:function()
{if(helper.ismobile()&&!responsive){return'mobile';}
return'desktop';},block:function(obj)
{var box,qc;if(obj.is_login)
{if(this.platform()=='mobile')
{box='<div id="status_user_nf" class="framebar_user" style="display:inherit">\
                <div class="media__author-image-avatar">\
                <img src="'+obj.avatar+'" alt="">\
                </div>\
                <div class="media__text">\
                <div class="user-log__name"><a href="'+obj.framebar_url.profile+'">'+obj.first_name+' '+obj.last_name.replace(/(\w+).*/,"$1")+'</a></div>\
                <a href="'+obj.framebar_url.logout+'" class="user-log__login">Keluar</a>\
                </div></div>';}
else
{qc=`
                  <li style="padding-top:0px;">
                   <!-- Allo Bank -->
                   <div class="allobank__container">
                      <div class="allobank__item">
                        <a href="#" class="allobank__cta open-modal-2">
                           <span class="allobank__img">
                              <img src="${ asset_common }/images/webp/framebar/logo-allobank.webp" height="31" alt="">
                           </span>
                           <span class="allobank__title">
                              Allo Balance
                           </span>
                           <span id="dtkqc-balance">
                              Activate Wallet
                           </span>
                         </a>
                      </div>
                      <div class="allobank__item">
                        <a href="#" class="allobank__cta">
                           <span class="allobank__img">
                              <img src="${ asset_common }/images/webp/framebar/mpc.webp" height="31" alt="">
                           </span>
                           <span class="allobank__title">
                              MPC Points
                           </span>
                           <span id="dtkqc-point">
                              Login or register
                           </span>
                         </a>
                      </div>
                      <div class="allobank__item">
                        <a href="#" class="allobank__cta open-modal">
                           <span class="allobank__img">
                              <img src="${ asset_common }/images/webp/framebar/coupon.webp" height="31" alt="">
                           </span>
                           <span class="allobank__title">
                              My Coupons
                           </span>
                           <span id="dtkqc-coupon">
                              See Coupons
                           </span>
                         </a>
                      </div>
                   </div>
                   <!-- Allo Bank -->
                  </li>
                `;box='<div class="dtkframebar__user__login__in">'+'<div id="dtkframebar-user">'+'<h4 class="pull-left">'+obj.first_name+' '+obj.last_name.replace(/(\w+).*/,"$1")+'</h4>'+'<span class="dtkframebar__user__login__in__img"><img src="'+obj.avatar+'" alt=""></span>'+'<i class="dtkframebar__caret dtkframebar__caret-down"></i>'+'</div>'+'<div class="dtkframebar__user__login__in__db" style="min-width: 200px;">'+'<ul><li class="dtkframebar__user__allo">'+'<iframe class="p_iframe_r" allowtransparency="true" frameborder="0" role="complementary" width="100%" id="alloframe" scrolling="no" horizontalscrolling="no" verticalscrolling="no" src="'+mpc_qc_url+'" style="border: none !important; overflow: hidden !important; min-height: 70px; max-height: 105px;"></iframe>'+'</li><li>'+'<a href="'+obj.framebar_url.profile+'">Profile Saya</a>'+'</li><li>'+'<a href="'+obj.framebar_url.logout+'">Keluar</a>'+'</li></ul>'+'</div></div>';}}
else
{if(this.platform()=='mobile')
{box='<div class="framebar_user" style="display:inherit"><div class="media__author-image-avatar">\
                <img data-src="https://cdn.detik.net.id/assets/images/framebar/user_default.webp" alt="">\
                </div>\
                <div class="media__text">\
                <div class="user-log__name">Halo Detiker</div>\
                <a href="'+obj.framebar_url.login+'" alt="'+obj.framebar_url.login+'" class="user-log__login to_login">Masuk/Daftar</a>\
                </div></div>';}
else
{let class_box_modal_dtkid=(typeof itp_dtkid_redirect_url!=='undefined'&&itp_dtkid_redirect_url==true)?'':'box_modal_dtkid';if(site_id=='63'){return`<a alt="${obj.framebar_url.register}" href="${obj.framebar_url.register}" class="transition-colors disabled:pointer-events-none disabled:opacity-50 focus:outline-none text-white bg-wop-pink tracking-[1.4px] hover:bg-wop-pink-darker hover:text-white focus:bg-wop-pink hover:cursor-pointer focus:text-white px-3 py-2 text-xs rounded-full daftar to_reg ${class_box_modal_dtkid} gtm_framebardc_daftar"> Daftar MPC</a>
                    <a alt="${obj.framebar_url.login}" href="${obj.framebar_url.login}" class="transition-colors disabled:pointer-events-none disabled:opacity-50 focus:outline-none bg-transparent tracking-[1.4px] border border-wop-pink hover:bg-wop-pink hover:text-white hover:cursor-pointer focus:bg-wop-pink focus:text-white outline-btn px-3 py-2 text-xs rounded-full text-wop-pink masuk to_login ${class_box_modal_dtkid}"> Masuk </a>`;}
box='<a alt="'+obj.framebar_url.register+'" href="'+obj.framebar_url.register+'" class="daftar to_reg '+class_box_modal_dtkid+' dtkframebar__btn gtm_framebardc_daftar active">'+'Daftar MPC</a>\n'+'<a alt="'+obj.framebar_url.login+'" href="'+obj.framebar_url.login+'" class="masuk to_login '+class_box_modal_dtkid+' dtkframebar__btn gtm_framebardc_masuk">Masuk</a>';}}
return box;},}
var dRecShow={ordinals:{'first':false,'second':false,'third':false,'fourth':false,'fifth':false,'sixth':false,'seventh':false,'eighth':false,'ninth':false},init:function()
{$.each(this.ordinals,function(i,v){rec_class_name='recommendation_'+i+'row';rec_el=$('.'+rec_class_name);if(rec_el.length>0){if(!helper.inview(rec_el,"1"))
return;if(!dRecShow.ordinals[i]){rec_attr_parent=rec_el.parents('[d-widget]').attr('d-widget');dRecShow.send_evt(rec_class_name,rec_attr_parent);dRecShow.ordinals[i]=true;}}});},send_evt:function(cls,type_rec)
{if(typeof sendTheShowRec==="function")
{sendTheShowRec(cls,type_rec);}}}
var inviewHandler=function()
{dWidget.init();dNewsfeed.init();dRecShow.init();lazyLoadImage.init();}
var enableBtnForm=function()
{$('#buttonKirim').prop('disabled',false);}
var smartbanner={detail:{'Android':{'text':'Get it on the Play Store','link':'https://play.google.com/store/apps/details?id=org.detikcom.rss','pt_btn':'_pt(this, "header", "smartbanner", "button get play store")'},'iOS':{'text':'Get it on the App Store','link':'https://apps.apple.com/id/app/detikcom-berita-terlengkap/id442914988','pt_btn':'_pt(this, "header", "smartbanner", "button get app store")'}},run:function()
{var useragent=helper.getuseragent();$('.itpp_sb_text').text(this.detail[useragent].text);$('.itpp_sb_url').attr('href',this.detail[useragent].link);$('.itpp_sb_url').attr('onclick',this.detail[useragent].pt_btn);$('.itpp_sb').show();}}
var submitIndeks=function()
{var indeks_date=$('.it-indeks-date').val();var current_uri=window.location.href;var clear_uri=current_uri.split("?")[0];var next_uri=clear_uri+'?date='+indeks_date;_pt({href:next_uri},'indeks navbar','button cari','button cari');window.location.href=next_uri;}
var dComments={elmClass:".latest_comment",attrClass:"data-comment-article",reqUrl:"https://apicomment.detik.com/graphql",reqPayload:{query:"query search($type: String!, $size: Int!,$anchor: Int!, $sort: String!,  $query: [ElasticSearchAggregation]) {search(type: $type, size: $size,page: $anchor, sort: $sort, query: $query){ paging sorting counter counterparent profile hits { posisi  results {id author content like prokontra  status news create_date pilihanredaksi refer liker { id } reporter { id status_report } child { id child parent author content like prokontra status create_date pilihanredaksi refer liker { id } reporter { id status_report } authorRefer } } } }}",variables:{type:"comment",size:1,anchor:1,sort:"newest",}},init:function()
{if($(dComments.elmClass)[0]){$(dComments.elmClass).each(async function(i,obj){let data_articleId=$(this).attr(dComments.attrClass)
let payloadData=dComments.reqPayload
payloadData.variables.query=[{"name":"news.artikel","terms":data_articleId},{"name":"news.site","terms":"dtk"}]
await dComments.fetchComments(payloadData,$(this))});}},fetchComments:function(payloadData,elm){fetch(dComments.reqUrl,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json",},body:JSON.stringify(payloadData)}).then(function(res){return res.json()}).then(function(resp){dComments.populateComment(resp,elm)})},decodeContentHtml:function(html){var txt=document.createElement("textarea");txt.innerHTML=html;return decodeURIComponent(unescape(txt.value));},trimComment:function(content){let contentComment=dComments.decodeContentHtml(content)
return contentComment.replace(/^(.{70}[^\s]*).*/,"$1")+"..."},populateComment:function(resp,elm){if(resp.data.search.hits.results.length>0){let comment=resp.data.search.hits.results[0]
let authorName=comment.author.name
let contentComment=comment.content
$(elm).html(`<strong class="color-black">${authorName} -</strong> ${dComments.trimComment(contentComment)}`)}else{$(elm).html('')}}}
var lazyLoadImage={elmClass:".lazy-image",init:function()
{$(lazyLoadImage.elmClass).each(function(i,v){if(helper.loaded($(this))){return;}
if($(this).closest('.lqd').length>0){if(!helper.inview($(this).closest('.lqd'),"-50")&&!helper.inview($(this).closest('.lqd'),0)){return;}
$(this).hide();$(this).closest('.lqd').css("background-image","url("+$(this).attr('data-src')+")");}else{console.log()
if(!helper.inview($(this),"-50")&&!helper.inview($(this),0)){return;}}
helper.loaded($(this),1);let ratio=$(this).attr('data-ratio');let defaultImg='https://cdn.detik.net.id/detik2/images/default-'+(ratio?ratio:11)+'.gif';$(this).on('error',function(){$(this).attr('src',defaultImg);});$(this).attr('src',$(this).attr('data-src'));});}}
var panelTrackingNav={init:function(){var navIsSticky=$('.navbar-sticky');if(navIsSticky.hasClass('is-sticky')===true){navIsSticky.find('.nav__item a').attr(this.setPanelTrackingNav('sticky navbar','sticky navbar'));}else{navIsSticky.find('.nav__item a').attr(this.setPanelTrackingNav('','first navbar'));}},setPanelTrackingNav:function(sec,act){return({'dtr-sec':sec,'dtr-act':act})}}
var dTmpData={init:function(name,key){if(tmpData[name+key]){return tmpData[name+key];}
return null;},save:function(name,key,value){tmpData[name+key]=value;}}
$(function(){callSticky.setsticky();dNotif.init();dFramebar.init();if(site_id==2){breakingNews.init();}
dComments.init()
inviewHandler()
$(window).scroll(function(){inviewHandler()
panelTrackingNav.init()});})