(function(){var g=true,h=null,j=false,aa=(new Date).getTime(),ba=function(a){var b=(new Date).getTime()-aa;b="&dtd="+(b<1000?b:"M");return a+b};var k=this,ca=function(a,b,c){a=a.split(".");c=c||k;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)if(!a.length&&b!==undefined)c[d]=b;else c=c[d]?c[d]:(c[d]={})},l=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";
if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";else if(b=="function"&&typeof a.call=="undefined")return"object";return b},n=function(a){return l(a)=="array"},da=function(a){var b=l(a);return b=="array"||b=="object"&&typeof a.length=="number"},o=function(a){return typeof a=="string"},ea=function(a){a=l(a);return a=="object"||
a=="array"||a=="function"};Math.floor(Math.random()*2147483648).toString(36);
var fa=function(a){var b=l(a);if(b=="object"||b=="array"){if(a.clone)return a.clone.call(a);b=b=="array"?[]:{};for(var c in a)b[c]=fa(a[c]);return b}return a},ga=function(a,b){var c=b||k;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)}}else return function(){return a.apply(c,arguments)}},ha=Date.now||function(){return(new Date).getTime()},p=function(a,b,c){ca(a,
b,c)};var ia=function(a,b,c){if(a.forEach)a.forEach(b,c);else if(Array.forEach)Array.forEach(a,b,c);else for(var d=a.length,e=o(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ja=function(a){if(n(a))return a.concat();else{for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}};var q=function(a,b){this.x=a!==undefined?a:0;this.y=b!==undefined?b:0};q.prototype.clone=function(){return new q(this.x,this.y)};q.prototype.toString=function(){return"("+this.x+", "+this.y+")"};var r=function(a,b){this.width=a;this.height=b};r.prototype.clone=function(){return new r(this.width,this.height)};r.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};r.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};r.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};r.prototype.scale=function(a){this.width*=a;this.height*=a;return this};var ka=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};var la=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ra=function(a,b){if(b)return a.replace(ma,"&amp;").replace(na,"&lt;").replace(oa,"&gt;").replace(pa,"&quot;");else{if(!qa.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(ma,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(na,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(oa,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(pa,"&quot;");return a}},ma=/&/g,na=/</g,oa=/>/g,pa=/\"/g,qa=/[&<>\"]/,ua=function(a){if(s(a,"&"))return"document"in k&&!s(a,"<")?
sa(a):ta(a);return a},sa=function(a){var b=k.document.createElement("a");b.innerHTML=a;b.normalize&&b.normalize();a=b.firstChild.nodeValue;b.innerHTML="";return a},ta=function(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if(c.charAt(0)=="#"){c=Number("0"+c.substr(1));if(!isNaN(c))return String.fromCharCode(c)}return b}})},va=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=c==1?b:b.charAt(d);
if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a},s=function(a,b){return a.indexOf(b)!=-1},xa=function(a,b){var c=0;a=la(String(a)).split(".");b=la(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;c==0&&e<d;e++){var f=a[e]||"",i=b[e]||"",m=new RegExp("(\\d*)(\\D*)","g"),t=new RegExp("(\\d*)(\\D*)","g");do{var B=m.exec(f)||["","",""],C=t.exec(i)||["","",""];if(B[0].length==0&&C[0].length==0)break;c=B[1].length==0?0:parseInt(B[1],10);var Ab=C[1].length==
0?0:parseInt(C[1],10);c=wa(c,Ab)||wa(B[2].length==0,C[2].length==0)||wa(B[2],C[2])}while(c==0)}return c},wa=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};ha();var u,ya,v,za,Aa,Ba,Ca,Da,Ea,Fa,Ga=function(){return k.navigator?k.navigator.userAgent:h},w=function(){return k.navigator},Ha=function(){Ba=Aa=za=v=ya=u=j;var a;if(a=Ga()){var b=w();u=a.indexOf("Opera")==0;ya=!u&&a.indexOf("MSIE")!=-1;za=(v=!u&&a.indexOf("WebKit")!=-1)&&a.indexOf("Mobile")!=-1;Ba=(Aa=!u&&!v&&b.product=="Gecko")&&b.vendor=="Camino"}};Ha();
var x=u,y=ya,Ia=Aa,z=v,Ja=za,Ka=function(){var a=w();return a&&a.platform||""},La=Ka(),Ma=function(){Ca=s(La,"Mac");Da=s(La,"Win");Ea=s(La,"Linux");Fa=!!w()&&s(w().appVersion||"","X11")};Ma();
var Na=Ca,Oa=Da,Pa=Ea,Qa=function(){var a="",b;if(x&&k.opera){a=k.opera.version;a=typeof a=="function"?a():a}else{if(Ia)b=/rv\:([^\);]+)(\)|;)/;else if(y)b=/MSIE\s+([^\);]+)(\)|;)/;else if(z)b=/WebKit\/(\S+)/;if(b)a=(a=b.exec(Ga()))?a[1]:""}return a},Ra=Qa(),Sa={},A=function(a){return Sa[a]||(Sa[a]=xa(Ra,a)>=0)};var D;var Ta=function(a){return o(a)?document.getElementById(a):a},Ua=Ta,Wa=function(a,b){ka(b,function(c,d){if(d=="style")a.style.cssText=c;else if(d=="class")a.className=c;else if(d=="for")a.htmlFor=c;else if(d in Va)a.setAttribute(Va[d],c);else a[d]=c})},Va={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",type:"type"},Xa=function(a){var b=a.document;if(z&&!A("500")&&!Ja){if(typeof a.innerHeight==
"undefined")a=window;b=a.innerHeight;var c=a.document.documentElement.scrollHeight;if(a==a.top)if(c<b)b-=15;return new r(a.innerWidth,b)}a=b.compatMode=="CSS1Compat"&&(!x||x&&A("9.50"))?b.documentElement:b.body;return new r(a.clientWidth,a.clientHeight)},Ya=function(a){a=!z&&a.compatMode=="CSS1Compat"?a.documentElement:a.body;return new q(a.scrollLeft,a.scrollTop)},$a=function(){return Za(document,arguments)},Za=function(a,b){var c=b[0],d=b[1];if(y&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',
ra(d.name),'"');if(d.type){c.push(' type="',ra(d.type),'"');d=fa(d);delete d.type}c.push(">");c=c.join("")}var e=a.createElement(c);if(d)if(o(d))e.className=d;else Wa(e,d);if(b.length>2){function f(i){if(i)e.appendChild(o(i)?a.createTextNode(i):i)}for(d=2;d<b.length;d++){c=b[d];da(c)&&!(ea(c)&&c.nodeType>0)?ia(ab(c)?ja(c):c,f):f(c)}}return e},bb=function(a,b){a.appendChild(b)},cb=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):h},db=function(a,b){var c=b.parentNode;c&&c.replaceChild(a,
b)},eb=z&&A("522"),fb=function(a,b){if(typeof a.contains!="undefined"&&!eb&&b.nodeType==1)return a==b||a.contains(b);if(typeof a.compareDocumentPosition!="undefined")return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a},E=function(a){return a.nodeType==9?a:a.ownerDocument||a.document},ab=function(a){if(a&&typeof a.length=="number")if(ea(a))return typeof a.item=="function"||typeof a.item=="string";else if(l(a)=="function")return typeof a.item=="function";return j},
F=function(a){this.a=a||k.document||document};F.prototype.createElement=function(a){return this.a.createElement(a)};F.prototype.createTextNode=function(a){return this.a.createTextNode(a)};F.prototype.n=function(){return this.a.compatMode=="CSS1Compat"};F.prototype.m=function(){return Ya(this.a)};F.prototype.appendChild=bb;F.prototype.removeNode=cb;F.prototype.replaceNode=db;F.prototype.contains=fb;function G(a,b){a=parseFloat(a);return isNaN(a)||a>1||a<0?b:a}function H(a,b){if(a=="true")return g;if(a=="false")return j;return b}function I(a,b){var c=/^([\w-]+\.)+[\w-]{2,}(\:[0-9]+)?$/;return c.test(a)?a:b};var gb="pagead2.googlesyndication.com",hb="googleads.g.doubleclick.net",ib="pubads.g.doubleclick.net",jb="securepubads.g.doubleclick.net",kb="partner.googleadservices.com",J=I("pagead2.googlesyndication.com",gb),lb=I("googleads.g.doubleclick.net",hb),mb=I("pagead2.googlesyndication.com",gb);I("pubads.g.doubleclick.net",ib);I("partner.googleadservices.com",kb);I("securepubads.g.doubleclick.net",jb);var K=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(h,a[c],c,a)};function L(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}function nb(a,b,c){var d=document.createElement("script");d.type="text/javascript";if(b)d.onload=b;if(c)d.id=c;d.src=a;var e=document.getElementsByTagName("head")[0];if(!e)return j;window.setTimeout(function(){e.appendChild(d)},0);return g}
function ob(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=new Image;c.src=b;a.google_image_requests.push(c)}function pb(a){if(a in qb)return qb[a];return qb[a]=navigator.userAgent.toLowerCase().indexOf(a)!=-1}var qb={};
function rb(){if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){a=3;for(var b=1;b;)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+(a+1));a++}catch(c){b=h}return a.toString()}else if(pb("msie")&&!window.opera){b=h;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(d){a=
0;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");a=6;b.AllowScriptAccess="always"}catch(e){if(a==6)return a.toString()}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(f){}}if(b){a=b.GetVariable("$version").split(" ")[1];return a.replace(/,/g,".")}}return"0"}function M(a){var b=a.google_ad_format;if(b)return b.indexOf("_0ads")>0;return a.google_ad_output!="html"&&a.google_num_radlinks>0}function N(a){return!!a&&a.indexOf("_sdo")!=-1}
function O(a,b){var c=Math.random();if(c<b){b=Math.floor(c/b*a.length);return a[b]}return""}
var sb=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=window.history.length;a.u_java=navigator.javaEnabled();if(window.screen){a.u_h=window.screen.height;a.u_w=window.screen.width;a.u_ah=window.screen.availHeight;a.u_aw=window.screen.availWidth;a.u_cd=window.screen.colorDepth}if(navigator.plugins)a.u_nplug=navigator.plugins.length;if(navigator.mimeTypes)a.u_nmime=navigator.mimeTypes.length},tb=function(a){if(a.body)try{return Xa(window)}catch(b){return new r(-12245933,-12245933)}else return new r(-1,
-1)};var ub={google_ad_channel:"channel",google_ad_host:"host",google_ad_host_channel:"h_ch",google_ad_host_tier_id:"ht_id",google_ad_section:"region",google_ad_type:"ad_type",google_adtest:"adtest",google_allow_expandable_ads:"ea",google_alternate_ad_url:"alternate_ad_url",google_alternate_color:"alt_color",google_bid:"bid",google_city:"gcs",google_color_bg:"color_bg",google_color_border:"color_border",google_color_line:"color_line",google_color_link:"color_link",google_color_text:"color_text",google_color_url:"color_url",
google_contents:"contents",google_country:"gl",google_cust_age:"cust_age",google_cust_ch:"cust_ch",google_cust_gender:"cust_gender",google_cust_id:"cust_id",google_cust_interests:"cust_interests",google_cust_job:"cust_job",google_cust_l:"cust_l",google_cust_lh:"cust_lh",google_cust_u_url:"cust_u_url",google_disable_video_autoplay:"disable_video_autoplay",google_ed:"ed",google_encoding:"oe",google_feedback:"feedback_link",google_flash_version:"flash",google_font_face:"f",google_font_size:"fs",google_hints:"hints",
google_kw:"kw",google_kw_type:"kw_type",google_language:"hl",google_page_url:"url",google_region:"gr",google_reuse_colors:"reuse_colors",google_safe:"adsafe",google_tag_info:"gut",google_targeting:"targeting",google_ui_features:"ui",google_ui_version:"uiv",google_video_doc_id:"video_doc_id",google_video_product_type:"video_product_type"},vb={google_ad_client:"client",google_ad_format:"format",google_ad_output:"output",google_ad_callback:"callback",google_ad_height:"h",google_ad_override:"google_ad_override",
google_ad_slot:"slotname",google_ad_width:"w",google_ctr_threshold:"ctr_t",google_image_size:"image_size",google_last_modified_time:"lmt",google_max_num_ads:"num_ads",google_max_radlink_len:"max_radlink_len",google_num_radlinks:"num_radlinks",google_num_radlinks_per_unit:"num_radlinks_per_unit",google_only_ads_with_video:"only_ads_with_video",google_rl_dest_url:"rl_dest_url",google_rl_filtering:"rl_filtering",google_rl_mode:"rl_mode",google_rt:"rt",google_skip:"skip"},wb={google_only_pyv_ads:"pyv",
google_with_pyv_ads:"withpyv"};function xb(a,b){try{return a.top.document.URL==b.URL}catch(c){}return j}function yb(a,b,c,d){c=c||a.google_ad_width;d=d||a.google_ad_height;if(xb(a,b))return j;var e=b.documentElement;if(c&&d){var f=1,i=1;if(a.innerHeight){f=a.innerWidth;i=a.innerHeight}else if(e&&e.clientHeight){f=e.clientWidth;i=e.clientHeight}else if(b.body){f=b.body.clientWidth;i=b.body.clientHeight}if(i>2*d||f>2*c)return j}return g}function zb(a,b){K(b,function(c,d){a["google_"+d]=c})}
function Bb(a,b){if(!b)return a.URL;return a.referrer}function Cb(a,b){if(!b&&a.google_referrer_url==h)return"0";else if(b&&a.google_referrer_url==h)return"1";else if(!b&&a.google_referrer_url!=h)return"2";else if(b&&a.google_referrer_url!=h)return"3";return"4"}function Db(a,b,c,d){a.page_url=Bb(c,d);a.page_location=h}function Eb(a,b,c,d){a.page_url=b.google_page_url;a.page_location=Bb(c,d)||"EMPTY"}
function Fb(a,b){var c={},d=yb(a,b,a.google_ad_width,a.google_ad_height);c.iframing=Cb(a,d);a.google_page_url?Eb(c,a,b,d):Db(c,a,b,d);c.last_modified_time=b.URL==c.page_url?Date.parse(b.lastModified)/1000:h;c.referrer_url=d?a.google_referrer_url:a.google_page_url&&a.google_referrer_url?a.google_referrer_url:b.referrer;return c}function Gb(a){var b={},c=a.URL.substring(a.URL.lastIndexOf("http"));b.iframing=h;b.page_url=c;b.page_location=a.URL;b.last_modified_time=h;b.referrer_url=c;return b}
function Hb(a,b){b=Ib(a,b);zb(a,b)}function Ib(a,b){return a=a.google_page_url==h&&Jb[b.domain]?Gb(b):Fb(a,b)}var Jb={};Jb["ad.yieldmanager.com"]=g;var Kb=document,Lb=H("false",j),Mb=H("false",j),Nb=H("false",j);H("false",j);var P=window;var Ob=function(a,b,c){b=ga(b,k,a);a=window.onerror;window.onerror=b;try{c()}catch(d){c=d.toString();var e="";if(d.fileName)e=d.fileName;var f=-1;if(d.lineNumber)f=d.lineNumber;b=b(c,e,f);if(!b)throw d;}window.onerror=a};p("google_protectAndRun",Ob);
var Qb=function(a,b,c,d){if(Math.random()<0.01){var e=Kb;a=["http://",mb,"/pagead/gen_204","?id=jserror","&jscb=",Lb?1:0,"&jscd=",Mb?1:0,"&context=",L(a),"&msg=",L(b),"&file=",L(c),"&line=",L(d.toString()),"&url=",L(e.URL.substring(0,512)),"&ref=",L(e.referrer.substring(0,512))];a.push(Pb());ob(P,a.join(""))}return!Nb};p("google_handleError",Qb);
var Sb=function(a){Rb|=a},Rb=0,Pb=function(){var a=["&client=",L(P.google_ad_client),"&format=",L(P.google_ad_format),"&slotname=",L(P.google_ad_slot),"&output=",L(P.google_ad_output),"&ad_type=",L(P.google_ad_type)];return a.join("")};var Q="",Vb=function(){if(window.google_ad_frameborder==h)window.google_ad_frameborder=0;if(window.google_ad_output==h)window.google_ad_output="html";if(N(window.google_ad_format)){var a=window.google_ad_format.match(/^(\d+)x(\d+)_.*/);if(a){window.google_ad_width=parseInt(a[1],10);window.google_ad_height=parseInt(a[2],10);window.google_ad_output="html"}}window.google_ad_format=Tb(window.google_ad_format,window.google_ad_output,window.google_ad_width,window.google_ad_height,window.google_ad_slot,
!!window.google_override_format);Q=window.google_ad_client||"";window.google_ad_client=Ub(window.google_ad_format,window.google_ad_client);Hb(window,document);if(window.google_num_slots_by_channel==h)window.google_num_slots_by_channel={};if(window.google_viewed_host_channels==h)window.google_viewed_host_channels={};if(window.google_num_slots_by_client==h)window.google_num_slots_by_client={};if(window.google_prev_ad_formats_by_region==h)window.google_prev_ad_formats_by_region={};if(window.google_prev_ad_slotnames_by_region==
h)window.google_prev_ad_slotnames_by_region={};if(window.google_correlator==h)window.google_correlator=(new Date).getTime();if(window.google_adslot_loaded==h)window.google_adslot_loaded={};if(window.google_adContentsBySlot==h)window.google_adContentsBySlot={};if(window.google_flash_version==h)window.google_flash_version=rb();if(window.google_new_domain_checked==h)window.google_new_domain_checked=0;if(window.google_new_domain_enabled==h)window.google_new_domain_enabled=0;if(!window.google_num_ad_slots)window.google_num_ad_slots=
0;if(!window.google_num_0ad_slots)window.google_num_0ad_slots=0;if(!window.google_num_sdo_slots)window.google_num_sdo_slots=0;window.google_ad_section=window.google_ad_section||window.google_ad_region||"";window.google_country=window.google_country||window.google_gl||"";a=(new Date).getTime();if(n(window.google_color_bg))window.google_color_bg=R(window.google_color_bg,a);if(n(window.google_color_text))window.google_color_text=R(window.google_color_text,a);if(n(window.google_color_link))window.google_color_link=
R(window.google_color_link,a);if(n(window.google_color_url))window.google_color_url=R(window.google_color_url,a);if(n(window.google_color_border))window.google_color_border=R(window.google_color_border,a);if(n(window.google_color_line))window.google_color_line=R(window.google_color_line,a)},Wb=function(a){K(ub,function(b,c){a[c]=h});K(vb,function(b,c){a[c]=h});K(wb,function(b,c){a[c]=h});a.google_container_id=h;a.google_eids=h;a.google_page_location=h;a.google_referrer_url=h;a.google_ad_region=h;
a.google_gl=h},R=function(a,b){Sb(2);return a[b%a.length]},Ub=function(a,b){if(!b)return"";b=b.toLowerCase();return b=N(a)?Xb(b):Yb(b)},Yb=function(a){if(a&&a.substring(0,3)!="ca-")a="ca-"+a;return a},Xb=function(a){if(a&&a.substring(0,9)!="dist-aff-")a="dist-aff-"+a;return a},Tb=function(a,b,c,d,e,f){if(!a&&b=="html")a=c+"x"+d;return a=Zb(a,e,f)?a.toLowerCase():""},Zb=function(a,b,c){if(!a)return j;if(!b)return g;return c};var S=document,T=navigator,U=window;
function $b(){var a=S.cookie,b=Math.round((new Date).getTime()/1000),c=U.google_analytics_domain_name;c=typeof c=="undefined"?ac("auto"):ac(c);var d=a.indexOf("__utma="+c+".")>-1,e=a.indexOf("__utmb="+c)>-1,f=a.indexOf("__utmc="+c)>-1,i={},m=!!U&&!!U.gaGlobal;if(d){a=a.split("__utma="+c+".")[1].split(";")[0].split(".");i.sid=e&&f?a[3]+"":m&&U.gaGlobal.sid?U.gaGlobal.sid:b+"";i.vid=a[0]+"."+a[1];i.from_cookie=g}else{i.sid=m&&U.gaGlobal.sid?U.gaGlobal.sid:b+"";i.vid=m&&U.gaGlobal.vid?U.gaGlobal.vid:
(Math.round(Math.random()*2147483647)^bc()&2147483647)+"."+b;i.from_cookie=j}i.dh=c;i.hid=m&&U.gaGlobal.hid?U.gaGlobal.hid:Math.round(Math.random()*2147483647);return U.gaGlobal=i}
function bc(){var a=S.cookie?S.cookie:"",b=U.history.length,c,d=[T.appName,T.version,T.language?T.language:T.browserLanguage,T.platform,T.userAgent,T.javaEnabled()?1:0].join("");if(U.screen)d+=U.screen.width+"x"+U.screen.height+U.screen.colorDepth;else if(U.java){c=java.awt.Toolkit.getDefaultToolkit().getScreenSize();d+=c.screen.width+"x"+c.screen.height}d+=a;d+=S.referrer?S.referrer:"";for(a=d.length;b>0;)d+=b--^a++;return cc(d)}
function cc(a){var b=1,c=0,d;if(!(a==undefined||a=="")){b=0;for(d=a.length-1;d>=0;d--){c=a.charCodeAt(d);b=(b<<6&268435455)+c+(c<<14);c=b&266338304;b=c!=0?b^c>>21:b}}return b}function ac(a){if(!a||a==""||a=="none")return 1;if("auto"==a){a=S.domain;if("www."==a.substring(0,4))a=a.substring(4,a.length)}return cc(a.toLowerCase())};var dc={google:1,googlegroups:1,gmail:1,googlemail:1,googleimages:1,googleprint:1};function ec(a){a=a.google_page_location||a.google_page_url;if(!a)return j;a=a.toString();if(a.indexOf("http://")==0)a=a.substring(7,a.length);else if(a.indexOf("https://")==0)a=a.substring(8,a.length);var b=a.indexOf("/");if(b==-1)b=a.length;a=a.substring(0,b);a=a.split(".");b=j;if(a.length>=3)b=a[a.length-3]in dc;if(a.length>=2)b=b||a[a.length-2]in dc;return b}
function fc(a,b,c){if(ec(a)){a.google_new_domain_checked=1;return j}if(a.google_new_domain_checked==0){var d=Math.random();if(d<=c){c="http://"+lb+"/pagead/test_domain.js";d="script";b.write("<"+d+' src="'+c+'"></'+d+">");a.google_new_domain_checked=1;return g}}return j}function gc(a){if(!ec(a)&&a.google_new_domain_enabled==1)return"http://"+lb;return"http://"+mb};var V=function(a){this.v=a;this.g=[];this.f=0;this.b=[];this.r=0;this.c=[];this.p=j;this.h=this.i="";this.o=j};V.prototype.t=function(a,b){var c=this.v[b],d=this.g;this.v[b]=function(e){if(e&&e.length>0){var f=e.length>1?e[1].url:h;d.push([a,ua(e[0].url),f])}c(e)}};V.prototype.s=function(){this.f++};V.prototype.u=function(a){this.b.push(a)};V.prototype.q=function(){if(!this.p){nb("http://"+J+"/pagead/osd.js");this.p=g}};
V.prototype.j=function(a){if(this.f>0)for(var b=document.getElementsByTagName("iframe"),c=this.o?"google_ads_iframe_":"google_ads_frame",d=0;d<b.length;d++){var e=b.item(d);e.src&&e.name&&e.name.indexOf(c)==0&&a(e,e.src)}};
V.prototype.k=function(a){var b=this.g;if(b.length>0)for(var c=document.getElementsByTagName("a"),d=function(B,C){return B.innerHTML.indexOf(C)>0},e=0;e<c.length;e++)for(var f=0;f<b.length;f++)if(c.item(e).href==b[f][1]){var i=c.item(e).parentNode;if(b[f][2])for(var m=i,t=0;t<4;t++){if(d(m,b[f][2])){i=m;break}m=m.parentNode}a(i,b[f][0]);b.splice(f,1);break}};
V.prototype.l=function(a){for(var b=0;b<this.b.length;b++){var c=this.b[b],d=hc(c);if(d)(d=document.getElementById("google_ads_div_"+d))&&a(d,c)}};V.prototype.d=function(a){this.k(a);this.l(a);this.j(a)};V.prototype.setupOsd=function(a,b,c){this.r=a;this.i=b;this.h=c};V.prototype.getOsdMode=function(){return this.r};V.prototype.getEid=function(){return this.i};V.prototype.getCorrelator=function(){return this.h};V.prototype.e=function(){return this.g.length+this.f+this.b.length};
V.prototype.setValidAdBlockTypes=function(a){this.c=a};V.prototype.registerAdBlockByType=function(a,b,c){if(this.c.length>0){for(var d=0;d<this.c.length;d++)if(this.c[d]==a){this.o=c;if(a=="js")this.t(b,"google_ad_request_done");else if(a=="html")this.s();else a=="json_html"&&this.u(b)}this.q()}};var hc=function(a){if((a=a.match(/[&\?](?:slotname)=([^&]+)/))&&a.length==2)return a[1];return""},ic=function(){window.__google_ad_urls||(window.__google_ad_urls=new V(window));return window.__google_ad_urls};
p("Goog_AdSense_getAdAdapterInstance",ic);p("Goog_AdSense_OsdAdapter",V);p("Goog_AdSense_OsdAdapter.prototype.numBlocks",V.prototype.e);p("Goog_AdSense_OsdAdapter.prototype.findBlocks",V.prototype.d);p("Goog_AdSense_OsdAdapter.prototype.getOsdMode",V.prototype.getOsdMode);p("Goog_AdSense_OsdAdapter.prototype.getEid",V.prototype.getEid);p("Goog_AdSense_OsdAdapter.prototype.getCorrelator",V.prototype.getCorrelator);p("Goog_AdSense_OsdAdapter.prototype.setValidAdBlockTypes",V.setValidAdBlockTypes);
p("Goog_AdSense_OsdAdapter.prototype.setupOsd",V.prototype.setupOsd);p("Goog_AdSense_OsdAdapter.prototype.registerAdBlockByType",V.prototype.registerAdBlockByType);var jc,kc,lc,mc,nc,oc,pc=function(){oc=nc=mc=lc=kc=jc=j;var a=Ga();if(a)if(a.indexOf("Firefox")!=-1)jc=g;else if(a.indexOf("Camino")!=-1)kc=g;else if(a.indexOf("iPhone")!=-1||a.indexOf("iPod")!=-1)lc=g;else if(a.indexOf("Android")!=-1)mc=g;else if(a.indexOf("Chrome")!=-1)nc=g;else if(a.indexOf("Safari")!=-1)oc=g};pc();var qc=function(a,b){var c=E(a);if(c.defaultView&&c.defaultView.getComputedStyle)if(a=c.defaultView.getComputedStyle(a,""))return a[b];return h},W=function(a,b){return qc(a,b)||(a.currentStyle?a.currentStyle[b]:h)||a.style[b]},rc=function(a){a=a?a.nodeType==9?a:E(a):document;if(y&&!(a?new F(E(a)):D||(D=new F)).n())return a.body;return a.documentElement},sc=function(a){var b=a.getBoundingClientRect();if(y){a=a.ownerDocument;b.left-=a.documentElement.clientLeft+a.body.clientLeft;b.top-=a.documentElement.clientTop+
a.body.clientTop}return b},tc=function(a){if(y)return a.offsetParent;var b=E(a),c=W(a,"position"),d=c=="fixed"||c=="absolute";for(a=a.parentNode;a&&a!=b;a=a.parentNode){c=W(a,"position");d=d&&c=="static"&&a!=b.documentElement&&a!=b.body;if(!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||c=="fixed"||c=="absolute"))return a}return h},uc=function(a){var b,c=E(a),d=W(a,"position"),e=Ia&&c.getBoxObjectFor&&!a.getBoundingClientRect&&d=="absolute"&&(b=c.getBoxObjectFor(a))&&(b.screenX<0||
b.screenY<0),f=new q(0,0),i=rc(c);if(a==i)return f;if(a.getBoundingClientRect){b=sc(a);a=(c?new F(E(c)):D||(D=new F)).m();f.x=b.left+a.x;f.y=b.top+a.y}else if(c.getBoxObjectFor&&!e){b=c.getBoxObjectFor(a);a=c.getBoxObjectFor(i);f.x=b.screenX-a.screenX;f.y=b.screenY-a.screenY}else{b=a;do{f.x+=b.offsetLeft;f.y+=b.offsetTop;if(b!=a){f.x+=b.clientLeft||0;f.y+=b.clientTop||0}if(z&&W(b,"position")=="fixed"){f.x+=c.body.scrollLeft;f.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(x||z&&d=="absolute")f.y-=
c.body.offsetTop;for(b=a;(b=tc(b))&&b!=c.body&&b!=i;){f.x-=b.scrollLeft;if(!x||b.tagName!="TR")f.y-=b.scrollTop}}return f},vc=function(a,b,c,d){if(/^\d+px?$/.test(b))return parseInt(b,10);else{var e=a.style[c],f=a.runtimeStyle[c];a.runtimeStyle[c]=a.currentStyle[c];a.style[c]=b;b=a.style[d];a.style[c]=e;a.runtimeStyle[c]=f;return b}},wc=function(a){var b=E(a),c="";if(b.createTextRange){c=b.body.createTextRange();c.moveToElementText(a);c=c.queryCommandValue("FontName")}if(!c){c=W(a,"fontFamily");if(x&&
Pa)c=c.replace(/ \[[^\]]*\]/,"")}a=c.split(",");if(a.length>1)c=a[0];return va(c,"\"'")},xc=/[^\d]+$/,yc=function(a){return(a=a.match(xc))&&a[0]||h},zc={cm:1,"in":1,mm:1,pc:1,pt:1},Ac={em:1,ex:1},Bc=function(a){var b=W(a,"fontSize"),c=yc(b);if(b&&"px"==c)return parseInt(b,10);if(y)if(c in zc)return vc(a,b,"left","pixelLeft");else if(a.parentNode&&a.parentNode.nodeType==1&&c in Ac){a=a.parentNode;c=W(a,"fontSize");return vc(a,b==c?"1em":b,"left","pixelLeft")}c=$a("span",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});
bb(a,c);b=c.offsetHeight;cb(c);return b};var X={};function Cc(a){if(a==1)return g;return!X[a]}function Y(a,b){if(a)if(b==1)if(X[b])X[b]+=","+a;else X[b]=a;else X[b]=a}function Dc(){var a=[];K(X,function(b){a.push(b)});return a.join(",")}function Ec(a,b){if(a&&a instanceof Array)for(var c=0;c<a.length;c++)a[c]&&typeof a[c]=="string"&&Y(a[c],b)}var Z=j;
function Fc(a,b){var c="script";Z=Gc(a,b);if(!Z)a.google_allow_expandable_ads=j;var d=!Hc();Z&&d&&b.write("<"+c+' src="http://'+J+'/pagead/expansion_embed.js"></'+c+">");a=fc(a,b,G("1",0.01));(d=d||a)&&pb("msie")&&!window.opera?b.write("<"+c+' src="http://'+J+'/pagead/render_ads.js"></'+c+">"):b.write("<"+c+'>google_protectAndRun("ads_core.google_render_ad", google_handleError, google_render_ad);</'+c+">")}function $(a){return a!=h?'"'+a+'"':'""'}
function Ic(a){var b="google_unique_id";if(a[b])++a[b];else a[b]=1;return a[b]}var Jc=function(a,b){var c=b.slice(-1),d=c=="?"||c=="#"?"":"&",e=[b];b=function(f,i){if(f||f===0||f===j){if(typeof f=="boolean")f=f?1:0;e.push(d,i,"=",L(f));d="&"}};K(a,b);return e.join("")};function Kc(){var a=y&&A("6"),b=Ia&&A("1.8.1"),c=z&&A("525");if(Oa&&(a||b||c))return g;else if(Na&&(c||b))return g;else if(Pa&&b)return g;return j}
function Hc(){return(typeof ExpandableAdSlotFactory=="function"||typeof ExpandableAdSlotFactory=="object")&&typeof ExpandableAdSlotFactory.createIframe=="function"}function Gc(a,b){if(a.google_allow_expandable_ads===j||!b.body||a.google_ad_output!="html"||yb(a,b)||!Lc(a)||isNaN(a.google_ad_height)||isNaN(a.google_ad_width)||!Kc())return j;return g}function Lc(a){var b=a.google_ad_format;if(N(b))return j;if(M(a)&&b!="468x15_0ads_al")return j;return g}
function Mc(){var a;if(P.google_ad_output=="html"&&!(M(P)||N(P.google_ad_format))&&Cc(0)){a=["6083035","6083034"];a=O(a,G("0.001",0));Y(a,0)}return a=="6083035"}function Nc(a,b){if((a.google_unique_id||0)==0&&a.google_ad_output=="html"&&document.body&&typeof b.body.getBoundingClientRect=="function")return O(["36812001","36812002"],G("0",0));return""}
function Oc(a,b){if((a.google_unique_id||0)!=0||N(a.google_ad_format))return"";var c="";a=M(a);if(b=="html"||a)c=O(["36815001","36815002"],G("0.01",0));if(c==""&&(b=="js"||a))c=O(["36815003","36815004"],G("0.01",0));if(c==""&&(b=="html"||b=="js"))c=O(["36813005","36813006"],G("0.008",0));return c}
function Pc(){var a=ic(),b=window.google_enable_osd,c="";if(b===g){c="36813006";Qc(c,a)}else if(b!==j&&Cc(0)){c=O(["68120011","68120021","68120031","68120041"],G("0",0))||Nc(window,document);if(c==""){c=Oc(window,window.google_ad_output);if(c!="")Qc(c,a);else c=a.getEid()}}return c}
function Qc(a,b){var c=b.getOsdMode(),d=[];switch(a){case "36815004":c=1;d=["js"];break;case "36815002":c=1;d=["html"];break;case "36813006":c=0;d=["html","js"];break}d.length>0&&b.setValidAdBlockTypes(d);b.setupOsd(c,a,window.google_correlator)}
function Rc(a,b,c,d){var e=Ic(a);c=Jc({ifi:e},c);c=c.substring(0,1992);c=c.replace(/%\w?$/,"");var f="script";if((a.google_ad_output=="js"||a.google_ad_output=="json_html")&&(a.google_ad_request_done||a.google_radlink_request_done))b.write("<"+f+' language="JavaScript1.1" src='+$(ba(c))+"></"+f+">");else if(a.google_ad_output=="html")if(Z&&Hc()){b=a.google_container_id||d||h;a["google_expandable_ad_slot"+e]=ExpandableAdSlotFactory.createIframe("google_ads_frame"+e,ba(c),a.google_ad_width,a.google_ad_height,
b)}else{e='<iframe name="google_ads_frame" width='+$(a.google_ad_width)+" height="+$(a.google_ad_height)+" frameborder="+$(a.google_ad_frameborder)+" src="+$(ba(c))+' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no"></iframe>';a.google_container_id?Sc(a.google_container_id,b,e):b.write(e)}return c}function Tc(a){Wb(a)}function Uc(a,b){if(!Vc())return j;var c=Mc();a=Wc(a,b);c=gc(window)+Xc(a.google_ad_format,c);window.google_ad_url=Jc(a,c);return g}
var $c=function(a){a.dt=aa;var b=window.google_prev_ad_formats_by_region,c=window.google_ad_section,d=window.google_ad_format,e=window.google_ad_slot;if(b[c])if(!N(d)){a.prev_fmts=b[c];if(window.google_num_slots_by_client.length>1)a.slot=window.google_num_slots_by_client[Q]}var f=window.google_prev_ad_slotnames_by_region;if(f[c])a.prev_slotnames=f[c].toLowerCase();if(d){if(!N(d))if(b[c])b[c]+=","+d;else b[c]=d}else if(e)if(f[c])f[c]+=","+e;else f[c]=e;a.correlator=window.google_correlator;if(window.google_new_domain_checked==
1&&window.google_new_domain_enabled==0)a.dblk=1;if(window.google_ad_channel){b=window.google_num_slots_by_channel;c="";d=window.google_ad_channel.split(Yc);for(e=0;e<d.length;e++){f=d[e];if(b[f])c+=f+"+";else b[f]=1}a.pv_ch=c}if(window.google_ad_host_channel){b=Zc(window.google_ad_host_channel,window.google_viewed_host_channels);a.pv_h_ch=b}if(Lb)a.jscb=1;if(Mb)a.jscd=1;a.frm=window.google_iframing;b=$b();a.ga_vid=b.vid;a.ga_sid=b.sid;a.ga_hid=b.hid;a.ga_fc=b.from_cookie;a.ga_wpids=window.google_analytics_uacct},
ad=function(a,b,c){var d;if(b)if(typeof a.getBoundingClientRect=="function"){a=a.getBoundingClientRect();d={x:a.left,y:a.top}}else{d={};d.x="-252738";d.y="-252738"}else try{d=uc(a)}catch(e){d={};d.x="-252738";d.y="-252738"}if(d){c.adx=d.x;c.ady=d.y}},bd=function(a){var b=tb(document);if(b){a.biw=b.width;a.bih=b.height}};
function Zc(a,b){var c=a.split("|");a=-1;for(var d=[],e=0;e<c.length;e++){var f=c[e].split(Yc);b[e]||(b[e]={});for(var i="",m=0;m<f.length;m++){var t=f[m];if(t!="")if(b[e][t])i+="+"+t;else b[e][t]=1}i=i.slice(1);d[e]=i;if(i!="")a=e}b="";if(a>-1){for(e=0;e<a;e++)b+=d[e]+"|";b+=d[a]}return b}
function cd(){var a=Pc();Y(a,0);var b=j,c=j,d=j;switch(a){case "68120031":d=g;case "68120021":c=g;case "68120041":b=g;break;case "36812002":if(!window.google_atf_included){window.google_atf_included=g;nb("http://"+J+"/pagead/atf.js")}break}var e;if(b){var f="google_temp_span";e=window.google_container_id&&Ua(window.google_container_id)||Ua(f);if(!e&&!window.google_container_id){document.write("<span id="+f+"></span>");e=Ua(f)}}a=j;a=c?Uc(e,d):Uc();e&&e.id==f&&cb(e);if(a){c=Rc(window,document,window.google_ad_url);
ic().registerAdBlockByType(window.google_ad_output,c,j);Tc(window)}}var dd=function(a){K(vb,function(b,c){a[b]=window[c]});K(ub,function(b,c){a[b]=window[c]});K(wb,function(b,c){a[b]=window[c]})},ed=function(a){Ec(window.google_eids,1);a.eid=Dc()};function fd(a,b,c,d){a=Qb(a,b,c,d);Fc(window,document);return a}function gd(){Vb()}
function hd(a){var b={};a=a.split("?");a=a[a.length-1].split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");if(d[0])try{b[d[0].toLowerCase()]=d.length>1?window.decodeURIComponent?decodeURIComponent(d[1].replace(/\+/g," ")):unescape(d[1]):""}catch(e){}}return b}function id(){var a=window,b=hd(document.URL);if(b.google_ad_override){a.google_ad_override=b.google_ad_override;a.google_adtest="on"}}
function Sc(a,b,c){if(a)if((a=b.getElementById(a))&&c&&c.length!=""){a.style.visibility="visible";a.innerHTML=c}}
var Xc=function(a,b){return a=N(a)?"/pagead/sdo?":b?"/pagead/render_iframe_ads.html#":"/pagead/ads?"},jd=function(a,b){b.dff=wc(a);b.dfs=Bc(a)},kd=function(a){a.ref=window.google_referrer_url;a.loc=window.google_page_location},Vc=function(){var a=window.google_prev_ad_formats_by_region,b=window.google_prev_ad_slotnames_by_region,c=window.google_ad_section;if(N(window.google_ad_format)){window.google_num_sdo_slots+=1;if(window.google_num_sdo_slots>4)return j}else if(M(window)){window.google_num_0ad_slots+=
1;if(window.google_num_0ad_slots>3)return j}else{window.google_num_ad_slots+=1;if(window.google_num_slots_to_rotate){Sb(1);a[c]=h;b[c]=h;if(window.google_num_slot_to_show==h)window.google_num_slot_to_show=(new Date).getTime()%window.google_num_slots_to_rotate+1;if(window.google_num_slot_to_show!=window.google_num_ad_slots)return j}else if(window.google_num_ad_slots>6&&c=="")return j}a=window.google_num_slots_by_client;if(a[Q])a[Q]+=1;else{a[Q]=1;a.length+=1}return g},Wc=function(a,b){var c={};dd(c);
$c(c);sb(c);if(a){jd(a,c);ad(a,!!b,c)}bd(c);ed(c);kd(c);c.fu=Rb;return c},Yc=/[+, ]/;window.google_render_ad=cd;var ld=["30143070","30143071","30143075"],md=typeof window.postMessage=="function"||typeof window.postMessage=="object"||typeof document.postMessage=="function",od=function(a,b){typeof A1_googleCreateSlot=="function"?A1_googleCreateSlot(a.google_ad_client):nd(a,b)},qd=function(){if(!pd())return j;return g},rd=function(a){if(N(a.google_ad_format))return j;var b=a.google_ad_output;if(b&&b!="html")return j;a=a.google_ad_client;if(typeof a!="string"||a.substring(0,4)!="pub-"&&a.substring(0,7)!="ca-pub-")return j;
return g},td=function(a){if(typeof a.google_a1_eid=="string")return a.google_a1_eid;var b=G("0",0);a.google_a1_eid=sd(ld,b);return a.google_a1_eid},nd=function(a,b){if(!a.google_included_a1_script){var c="script",d="/pagead/show_ads_sra3.js?v\x3d1";b.write("<"+c+' src="http://'+J+d+'"></'+c+">");a.google_included_a1_script=g}},pd=function(){if(y&&A("8"))return j;return md||!z},sd=function(a,b){var c=Math.random();if(c<b){b=Math.floor(c/b*a.length);return a[b]}return""};function ud(){id();Ob("show_ads.google_init_globals",fd,gd);Fc(window,document)}function vd(){if(!qd(window)||!rd(window))ud();else if(Nb&&window.google_use_a1===g)od(window,document);else{var a=td(window);if(a){Y(a,0);window.google_allow_expandable_ads=j}!a||a=="30143070"?ud():od(window,document)}}Ob("show_ads.main",Qb,vd);})()
