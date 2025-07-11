var embeded=[],ifembed=['20.detik.com','cnnindonesia.com','cnbcindonesia.com','insertlive.com','haibunda.com','beautynesia.id','tv.detik.com','youtube.com'],itbody='.itp_bodycontent';var oemhelper={resizeIframe:function(source)
{var ifm=itbody+" iframe[src*='"+source+"']";var wid_ifm=$(itbody).width();if($(ifm).length>0)
{var obj_ifm=$(ifm);var src_ifm=obj_ifm.attr('src');var hei_ifm=(wid_ifm*9/16)+parseInt(0);if(this.paramExistNotNull("counterviews",src_ifm))
{var _identify=obj_ifm.closest('div.ratiobox.ratio_16_9');if(_identify.length>0)
{var prc=(oemhelper.isMobile())?'67.25%':'65.25%';_identify.css({'padding-bottom':prc,'position':'relative','height':0});}
hei_ifm=hei_ifm+parseInt(55);}
obj_ifm.css({'width':'100%','height':hei_ifm});embeded.push(source);}},addWrapperClass:function(source)
{var cls='itp_embed';var ifm=$(itbody+" iframe[data-src*='"+source+"']");if(ifm.length>0)
{var _src=source.replace(/\./g,'');ifm.each(function(i,v){var _cls=cls+'_'+_src+'_'+i;var dataSrc=$(v).attr('data-src');$(v).attr('src',dataSrc);$(v).removeAttr('data-src');if(source=='20.detik.com'&&dataSrc.includes('vertical=true')){var withDesc=dataSrc.includes('desc=true');var width='100%';var height=720;if($(v).parent().is('p'))$(v).unwrap();switch(true){case(!oemhelper.isMobile()&&!withDesc):$(v).wrap('<div style="display:flex; justify-content:center; width:100%;"></div>');width='320px';height=520;break;case(oemhelper.isMobile()&&!withDesc):height=540;break;}
_cls+=' p_iframe_r';$(v).attr({id:'iFrameResizer'+i,width:width,height:height,frameborder:0,scrolling:'no',allowfullscreen:true});if(typeof listenRedirect20Detik==='undefined'){window.addEventListener("message",function(event){if(event.origin==="https://20.detik.com"){if(event.data.redirect_url){window.location.href=event.data.redirect_url;}}},false);var listenRedirect20Detik=true;}}else{$(v).wrap('<div class="sisip_video_ds ratiobox ratiobox--16-9 itp_ratio_counter"></div>');}
$(v).addClass(_cls);adjustCV.run();});}},getAllAttr:function(arr)
{var obj={};$.each(arr.attributes,function(i,v){if(this.specified){obj[this.name]=this.value;}});return obj;},paramExistNotNull:function(name,str)
{var _is=oemhelper.getParameterByName(name,str);if(_is!=null&&_is!=''&&(_is=='true'||_is=='1'))
{return true;}
return false;},isMobile:function()
{if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
{return true;}
return false;},getParameterByName:function(name,url)
{if(!url)url=window.location.href;name=name.replace(/[\[\]]/g,'\\$&');var regex=new RegExp('[?&]'+name+'(=([^&#]*)|&|#|$)'),results=regex.exec(url);if(!results)return null;if(!results[2])return'';return decodeURIComponent(results[2].replace(/\+/g,' '));},extractHostname:function(url)
{var hostname;if(url.indexOf("//")>-1){hostname=url.split('/')[2];}
else{hostname=url.split('/')[0];}
hostname=hostname.split(':')[0];hostname=hostname.split('?')[0];return hostname;},nl2br:function(str,is_xhtml){if(typeof str==='undefined'||str===null){return'';}
var breakTag=(is_xhtml||typeof is_xhtml==='undefined')?'<br />':'<br>';return(str+'').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,'$1'+breakTag+'$2');},getMeta:function(prop,val){e=document.head.querySelector("["+prop+"=\""+val+"\"]");if(e!==null){return e.content;}
return null;}}
var oembed={loopPasta:0,classPasta:null,maxwidth:500,countPasta:[],classBody:itbody,to:3000,video_dn:['videocnn','videocnbc','videohaibunda','videoinsertlive','videobeautynesia'],init:function(el,k)
{var cls=el.attr('class');media=cls.split(' ');target=el.attr('href');if(typeof media[1]!='undefined'&&media[1]!==null){var _med=media[1];if(this.video_dn.indexOf(_med)!=-1)
{_med='detiknetwork_video';}
var act='_'+_med;try{if($(this.classBody).width()>0){this.maxwidth=$(this.classBody).width();}
var arg={'url':target,'maxwidth':this.maxwidth,'class':media[1],}
this[act](el,arg,k);}catch(e){console.log('GAMBAS:NOT FOUND');}}
return;},_instagram:function(e,arg)
{var param={'url':`https://www.detik.com/api/instagram/?url=${arg.url}`,'dataType':'json','style':'margin:20px 0 0 0','exist':{'tag':'iframe.instagram-media','get':'height'}}
this.__request(e,param);},_twitter:function(e,arg)
{var param={'url':'https://publish.twitter.com/oembed?maxwidth='+arg.maxwidth+'&url='+arg.url,'dataType':'jsonp','style':'margin:20px 0 0 0'}
this.__request(e,param);},_opta:function(e,arg,k)
{var href=$(e).attr('href');var uri=href.split('?id=');var param={'url':'https://www.detik.com/api/opta?id='+uri[1],'dataType':'json','isOpta':true,'number':k,'style':''}
this.__request(e,param);},_youtube:function(e,arg)
{var i=this.getUrlVars(arg.url);var args={'url':'https://www.youtube.com/embed/'+i,'style':'border:0;','class':arg.class,'exist':{'tag':'iframe[src*="youtube.com"]','get':'height'}}
this.__video(e,args);},_detiknetwork_video:function(e,arg)
{var clean_hn=oemhelper.extractHostname(arg.url).replace('www.','');var args={'url':arg.url,'style':'border:0;','class':arg.class,'exist':{'tag':'iframe[src*="'+clean_hn+'"]','get':'height'}}
this.__video(e,args);},_video20detik:function(e,arg,k)
{var _ic='iframe.video20detik_'+k;var _c='.video20detik_'+k;var sap='smartautoplay=true&smartautoplaylazy=true&unmute=true';var _qs='?'+sap;var _cp='aevp-params';var scroll_ap=true;var bumper=''
if(oembed.checkMobile())
{bumper='width: 100px !important;'}
$(e).removeClass('video20detik').addClass('video20detik_'+k);$(window).bind('scroll load',function(){var exist=$('body').find(_ic).length;if(exist==0)
{if(arg.url.indexOf('?')!=-1)
{_qs='&'+sap;}
let urlbase=arg.url+_qs;if(typeof $(e).attr(_cp)!='undefined'&&$(e).attr(_cp)!='')
{urlbase=arg.url+$(e).attr(_cp);$(e).removeAttr(_cp);}
var args={'url':urlbase,'style':'border:0;text-align:left;','class':arg.class+'_'+k,'add_attr':'webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay; fullscreen" importance="high" loading="eager"'}
oembed.__video(e,args,k);}
if(exist!=0)
{if(scroll_ap==false&&oembed.inview(_c)==false)
{scroll_ap=true;}
window.addEventListener('message',function(event){if(event.data.scroll=='disable')
{scroll_ap=false;}},false);if(scroll_ap)
{var i=document.querySelectorAll(_ic)[0];var isInView=oembed.inview('.video20detik_'+k);var cmd=isInView?'play':'pause';i.contentWindow.postMessage({'dvcmd':1,'cmd':cmd},"*");}}})},_pasangmata:function(e,arg)
{var args={'cls':arg.class+this.loopPasta,'style':'width:'+(this.maxwidth-parseInt(10))+'px;overflow:hidden;display: block;border:0;'}
var iframe='<iframe scrolling="no" style="'+args.style+'" class="'+args.cls+'" src="'+arg.url+'?w='+(this.maxwidth-parseInt(20))+'&loop='+this.loopPasta+'"></iframe>';$(e).replaceWith('<div class="sisip_embed_sosmed">'+iframe+'</div>');this.countPasta.push(arg.class+this.loopPasta);if(oembed.checkMobile())
{oembed.existTag({'tag':'iframe.'+args.cls,'get':'height'});}
this.loopPasta++;},__video:function(e,param,k)
{var style;var new_attr;var w=$(this.classBody).width();var h=(w*9/16)+parseInt(0);if(typeof(param.style)!="undefined"&&param.style!==null)
{var style='style='+param.style+'';}
if(typeof(param.add_attr)!="undefined"&&param.add_attr!==null)
{var new_attr=param.add_attr;}
var iframe='<iframe scrolling="no" '+style+' '+new_attr+' src="'+param.url+'" width="'+w+'px" height="'+h+'px" class="'+param.class+'"></iframe>';if(param.class=='video20detik_'+k)
{if(param.url.includes('vertical=true')){if($(e).parent().is('p'))$(e).unwrap();var withDesc=param.url.includes('desc=true');var width='100%';var height=720;var wrap=false;switch(true){case(!this.checkMobile()&&!withDesc):wrap=true;width='320px';height=520;break;case(this.checkMobile()&&!withDesc):height=540;break;}
var iframe='<iframe scrolling="no" width="'+width+'" src="'+param.url+'" height="'+height+'" frameborder="0" allowfullscreen="true" id="iFrameResizer'+k+'" class="p_iframe_r'+(param.url.includes('smartautoplay=true')?' video20detik_'+k:'')+'"></iframe>';if(wrap){iframe='<div style="display:flex; justify-content:center; width:100%;" class="itp_gambas_video video20detik_'+k+'">'+iframe+'</div>';}
$(e).replaceWith(iframe);if(typeof listenRedirect20Detik==='undefined'){window.addEventListener("message",function(event){if(event.origin==="https://20.detik.com"){if(event.data.redirect_url){window.location.href=event.data.redirect_url;}}},false);var listenRedirect20Detik=true;}}else{$(e).replaceWith('<div class="sisip_video_ds ratiobox ratiobox--16-9 itp_gambas_video video20detik_'+k+'">'+iframe+'</div>');}
$('body').find('div.bumper20detik_'+k).remove();window.addEventListener('message',function(event){if(event.data.videois=='play'){$('iframe.video20detik_'+k).css('visibility','visible');}},false);}
else
{$(e).replaceWith('<div class="sisip_embed_sosmed">'+iframe+'</div>');}
if(oembed.checkMobile())
{if(typeof param.exist!='undefined'&&param.exist!==null){oembed.existTag(param.exist);}}},__request:function(e,param)
{$.ajax({url:param.url,method:"GET",dataType:param.dataType}).done(function(response){if(typeof param.isOpta!='undefined'&&param.isOpta)
{let count_opta=$('body').find('.embed.opta').length;if(count_opta>=1){let optaStyle='',optaAsset='',optaSetting='';if(param.number==0){optaStyle=`<link rel="stylesheet" href="https://secure.widget.cloud.opta.net/v3/css/v3.football.opta-widgets.css">`;optaAsset=`<script src="https://secure.widget.cloud.opta.net/v3/v3.opta-widgets.js"></script>`
optaSetting=`<script>var opta_settings = {subscription_id: "d6f4aa0839e0e85f5040a23395bb7e18",language: "en_US",timezone: "Asia/Jakarta"};</script>`}
$(e).replaceWith(optaStyle+'<div class="sisip_embed_sosmed" style="'+param.style+'">'+response.html+'</div>'+optaAsset+optaSetting);}}
else
{let test=param.url;let html='';if(test.includes('/instagram')){if(typeof response.html!=='undefined'){html=response.html;}}else{html=response.html;};$(e).replaceWith('<div class="sisip_embed_sosmed" style="'+param.style+'">'+html+'</div>');}
if(oembed.checkMobile())
{if(typeof param.exist!='undefined'&&param.exist!==null){oembed.existTag(param.exist);}}});},checkMobile:function()
{if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){console.log('GAMBAS:MOBILE');return true;}
return false;},existTag:function(param)
{setTimeout(function(){if($(param.tag).length>0){var res=$(param.tag).attr(param.get);if(typeof res!='undefined'&&res!==0){$(param.tag).css(param.get,res);}}},this.to)},getUrlVars:function(uri)
{var vars=[],hash;var hashes=uri.slice(uri.indexOf('?')+1).split('&');for(var i=0;i<hashes.length;i++)
{hash=hashes[i].split('=');vars.push(hash[0]);vars[hash[0]]=hash[1];}
return vars['v'];},inview:function(elem)
{var elm=document.querySelector(elem);var rect=elm.getBoundingClientRect();var viewHeight=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(rect.bottom<200||rect.top-viewHeight>=-200);}}
var adjustCV={cls:'itp_ratio_counter',run:function()
{$('.'+this.cls).each(function(i,v){let new_cls=adjustCV.cls+'_'+i;$(v).addClass(new_cls);adjustCV._set(new_cls);});},_set:function(cls)
{var elm=$('body').find('.'+cls).length;if(elm==1)
{var _src=$('.'+cls+' iframe').attr('src');if(oemhelper.paramExistNotNull("counterviews",_src))
{$('.'+cls).addClass("pdb-counter");}}}}
var copyArticle=function(){var originalTitle=oemhelper.getMeta('name','originalTitle');if(originalTitle==null){return;}
document.oncopy=function(){var _title=originalTitle,_sitename=oemhelper.getMeta('property','og:site_name'),_href=oemhelper.getMeta('property','og:url'),_result,_body=document.getElementsByTagName("body")[0],_href_app='https://apps.detik.com/detik/';_text=(oemhelper.nl2br(_result=window.getSelection()))+'<br /><br /> Baca artikel '+_sitename+', "'+
_title.trim()+'" selengkapnya <a href="'+
_href+'">'+
_href+'</a>.'+'<br /><br />'+'Download Apps Detikcom Sekarang '+
_href_app;if(window.clipboardData&&window.clipboardData.setData){return clipboardData.setData(p);}else if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var ss=document.createElement("div");(ss.style.position="absolute"),(ss.style.left="-99999px"),_body.appendChild(ss),(ss.innerHTML=_text),_result.selectAllChildren(ss);window.setTimeout(function(){_body.removeChild(ss);},0);}};}
$(function($){$('a.embed').each(function(k){oembed.init($(this),k);});if(oembed.countPasta.length>0){$.each(oembed.countPasta,function(index,value){window.addEventListener('message',function(event){if(event.data.dtk==value){var data=event.data;document.getElementsByClassName(value)[0].height=(data.height)+parseInt(20);}},false);});}
if($(itbody+" iframe[src*='facebook.com']").length>0){$(itbody+" iframe[src*='facebook.com']").css({'width':'100%','height':$(itbody+" iframe[src*='facebook.com']").attr('height')});}
$.each(ifembed,function(i,v){oemhelper.addWrapperClass(v);});if($(itbody+" iframe[class='embed opta']").length>0){var href=$(itbody+" iframe[class='embed opta']").attr('src');var uri=href.split('?id=');var param={'url':'https://www.detik.com/api/opta?id='+uri[1],'dataType':'json'}
$(itbody+" iframe[class='embed opta']").css({'width':'100%','border':'0'});setTimeout(function(){oembed.__request("iframe[class='embed opta']",param);},12000);}
var observer=new MutationObserver(function(mutations){mutations.forEach(function(mutation){if(mutation.type==='childList'){$.each(embeded,function(i,v){oemhelper.addWrapperClass(v);});}});});var config={subtree:true,childList:true};var targetNode=document.querySelectorAll(itbody+'_wrapper');targetNode.forEach(function(node){observer.observe(node,config);});copyArticle();});window.addEventListener('message',function(event){if(event.data.is_next!==undefined){var elm_aevp=document.getElementsByClassName("aevp_title");for(var i=0;i<elm_aevp.length;i++){elm_aevp[i].innerHTML=event.data.is_next;elm_aevp[i].setAttribute("href",event.data.is_next_url);}}
if(event.data.login_premium!==undefined){$('.to_login')[0].click();}},false);$(window).bind("load",function(){var frames,b,source,iframe20d,msg,article_id;article_id=$('meta[name=articleid]').attr("content");frames=document.getElementsByTagName("iframe");msg=article_id;for(b=0;b<frames.length;b++){source=frames[b].src;if(source.includes('detik.com')){iframe20d=frames[b].contentWindow;iframe20d.postMessage(msg,'*');}}
if(!window.location.hash)return;const hash=window.location.hash.replace('#','');if(hash=='')return;switch(hash){case'aevp':$('html, body').animate({scrollTop:$(`#${hash}`).offset().top-100},200);break;}});function enableBtnKirim()
{let ids='buttonKirim';let dis='disabled';if($('body').find('#'+ids).length>0){$('#'+ids).prop(dis,false);}else{$('#submitForm').prop(dis,false);}}
adjustCV.run();