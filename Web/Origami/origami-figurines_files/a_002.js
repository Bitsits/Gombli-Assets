	var hs = new Array(); var hstb = new Array();hs["111875709712843583"] = 1;hs["114364933256121079"] = 2;hs["112102882944996596"] = 1;hs["113596975460414219"] = 1;hs["114082032173177016"] = 1;hs["112733457181252542"] = 1;hs["113575369214192765"] = 1;hs["113142939644743888"] = 1;hs["111845027504208401"] = 1;hs["112483909675924184"] = 1;hs["113531638914918525"] = 1;hs["112134871610932806"] = 2;hs["113269703670987546"] = 1;hs["111782356188685584"] = 2;hs["115634919500376693"] = 1;hs["112805046918283318"] = 1;hs["111749821463982954"] = 1;hs["112490187252246733"] = 3;hs["113081190607236097"] = 7;hs["111445582684063621"] = 2;hs["112378047060367242"] = 1;hs["111592594192855998"] = 1;hs["112337269747199603"] = 1;hs["113224295105992907"] = 1;hs["114807266149069265"] = 2;hs["112109051632392183"] = 1;hs["112534000646193492"] = 1;hs["114131436707121150"] = 5;hs["113647502269546065"] = 1;hs["111948064209367418"] = 1;hs["111397006666829081"] = 1;hs["113530468733645316"] = 1;hs["113608245743920026"] = 1;hs["111604644491212331"] = 1;hs["116146294035521111"] = 11;hs["115610192651385266"] = 4;hs["114966507251069445"] = 3;hs["112924917530066316"] = 1;hs["111890169900649080"] = 1;hs["114331764721319929"] = 1;hstb["111444376327164907"] = 1;hstb["112162148244030279"] = 2;hstb["112019750756180968"] = 1;hstb["113167435971192214"] = 11;hstb["113319964943056010"] = 1;hstb["113297559494978783"] = 1;hstb["111540617246119888"] = 2;hstb["113001097642593540"] = 8;hstb["112231804110610627"] = 4;hstb["112628297223618456"] = 1;hstb["112654279830450779"] = 1;hstb["112671721245770678"] = 1;hstb["112675541715200234"] = 1;hstb["112692650476984761"] = 1;hstb["113932427053373546"] = 4;hstb["113571592158222294"] = 2;hstb["114832964417943633"] = 1;hstb["112874116309039312"] = 1;hstb["113996896357958977"] = 1;hstb["113173004707871924"] = 1;hstb["113839298171488899"] = 1;hstb["113687319776569823"] = 2;hstb["112058892147540435"] = 1;hstb["113433383625618176"] = 1;hstb["113426156296881962"] = 1;hstb["111992168226971734"] = 1;hstb["113163405837411371"] = 1;hstb["113047264950656178"] = 1;hstb["112930173108764182"] = 1;hstb["113005344887278556"] = 1;hstb["112839676890170333"] = 1;hstb["112805046918283318"] = 1;hstb["112741044594356881"] = 1;function postCount(id) { id = id.toLowerCase(); var hs_search = new RegExp('\\W','gi'); var hs_id = id.replace(hs_search,"_"); id = hs_id.substring(0,50);if (hs[id]){ if (hs[id] === 1) { document.write("Comment (1)"); } else { document.write("Comments (" + hs[id] +")"); } } else { document.write("Comments"); } }function HaloScan(id) { var hs_search = new RegExp('\\W','gi'); var hs_id = id.replace(hs_search,"_"); id = hs_id;window.open('http://www.haloscan.com/comments/trueneutral/'+ id + '/','comments'+ id +'', 'directories=0,height=450,width=680,location=0,resizable=1,statusbar=1,scrollbars=1,toolbar=0'); }function postCountTB(id){ var hs_search = new RegExp('\\W','gi'); var hs_id = id.replace(hs_search,"_"); id = hs_id;if (hstb[id]){ if (hstb[id] === 1) { document.write("Trackback (1)"); } else { document.write("Trackbacks (" + hstb[id] +")"); } } else { document.write("Trackback"); } }function HaloScanTB(id) { var hs_search = new RegExp('\\W','gi'); var hs_id = id.replace(hs_search,"_"); id = hs_id;window.open('http://www.haloscan.com/tb/trueneutral/'+ id + '', 'comments'+ id +'', 'directories=0,height=450,width=680,location=0,resizable=1,statusbar=1,scrollbars=1,toolbar=0'); }function postCountA(id) { id = id.toLowerCase(); if (hs[id] === 'jskit' || !hsmurl) { return '<span class="js-kit-comments-count" domain="trueneutral.haloscan.com" path="/' + id + '">Comments</span>'; } else { var hs_search = new RegExp('\\W','gi'); var hs_id = id.replace(hs_search,"_"); id = hs_id;if (hs[id]){ if (hs[id] === 1) { return "Comment (1)"; } else { return "Comments (" + hs[id] +")"; } } else { return "Comments"; } } }var hsmurl = 'http://www.haloscan.com/load/trueneutral/?c=';var jskit_domain = 'js-kit\.com';var hscregexp = /haloscan\.com\/comments\/[^\/]+\/([^\/]+)/;var hsm = new Array();if (typeof(hs_call)=="undefined") {var hs_call = 0;}if (typeof(hs_ratings_call)=="undefined") {var hs_ratings_call = 0;}function check_dupe(a, e) {for(j=0;j<a.length;j++)if(a[j]==e)return true;return false;}function has_class(element, className) {  return element.className.match(new RegExp('(\s|^)' + className + '(\s|$)'));}function get_closest_block(el) {var cb = {};var isParent = false;for (var i=0; i<20; i++) {if (el.previousSibling) {el = el.previousSibling;} else if (el.parentNode) {el = el.parentNode;isParent = true;} else {break;}if (el.tagName) {if (el.tagName.match(/^(ADDRESS|BLOCKQUOTE|BODY|BR|DIV|DL|FIELDSET|FORM|H[1-6]|HR|OL|P|PRE|UL)$/)) {cb.node = el;cb.isParent = isParent;break;}}}return cb;}function process_before() {if ((document.getElementsByTagName) && (hs_call == 0)) {var hasRatings = false;if (hasRatings) {var dl = document.getElementsByTagName('div');if (dl.length) {for (var i=0; i < dl.length; i++) {if (dl[i].className.match(/^js-kit-rating/)) {var hasRatingsScript = (!window.$JRA) ? false : true;var hasRatingsTag = true;break;}}}}var al = document.getElementsByTagName('a');if (al.length > 0) {for (var i = 0; i < al.length; i++) {var hsidA = [];if (al[i].href.match(/javascript:HaloScan\(['"](.+)['"]\)/)) { var hsidA = al[i].href.match(/javascript:HaloScan\(['"](.+)['"]\)/);var hsid = hsidA[1];var hs_search = new RegExp('\\W','gi'); hsid = hsid.replace(hs_search,'_');} else if (al[i].href.match(hscregexp)) {var al_onclick = al[i].getAttribute('onclick') || '';if (!al_onclick.toString().match(/HSOpen\(/)) {var hsidA = al[i].href.match(hscregexp);var hsid = hsidA[1];}}                if (hsidA.length) {if (hasRatings && !hasRatingsTag && !has_class(al[i], "js-kit-norating")) {var cb = get_closest_block(al[i]);if (cb.node) {var jsrD = document.createElement('div');jsrD.innerHTML = '<div class="js-kit-rating" unique="' + hsid + '"></div>';if (cb.isParent) {cb.node.insertBefore(jsrD, cb.node.firstChild);} else {cb.node.parentNode.insertBefore(jsrD, cb.node.nextSibling);}}}if (hsmurl) {var reg = new RegExp("Count\\('(.*?)'");var pc = reg.exec(al[i].innerHTML);if (pc && pc[1]) {var pcs = pc[1].toLowerCase();pc[1] = escape(pc[1]);if((!hs[pcs]) && (hsm.length < 20) && (!check_dupe(hsm, pc[1]))) {hsm.push(pc[1]);}}}}}if (hsmurl) {if (document.createElement && hsm.length > 0) {var hsmj = hsm.join('+');hsmurl = hsmurl + hsmj;if (hsmurl.length > 400) {hsmurl = hsmurl.substr(0,400);}var hsmA = document.createElement('script');hsmA.src = hsmurl;hsmA.type = 'text/javascript';if (document.body.appendChild) {document.body.appendChild(hsmA);hs_call = 1;}}} else {var hsNeedJSKitCount = true;hsNeedJSKitCount = (function(){var found = false;var al = document.getElementsByTagName('a');if (al.length > 0) {var regp = new RegExp("postCount\\('(.+?)'");var regh = new RegExp("HaloScan\\(['\"].+?['\"]");for (var i = 0; i < al.length; i++) {var hc = regh.exec(al[i].href) || regh.exec(al[i].getAttribute('onclick'));var pc = regp.exec(al[i].innerHTML);if (hc && pc && pc[1] && (al[i].innerHTML.length < 300)) {var pcs = pc[1].toLowerCase();if(hs[pcs] || !hsmurl) {al[i].innerHTML = postCountA(pcs);found = true;}}}}return found;})() && hsNeedJSKitCount;if (hsNeedJSKitCount) JSKitCountLoad();}}if (hasRatings && !hasRatingsScript && hs_ratings_call == 0) {window.$JSKitViaHaloScan = true;window.$JSKitNoDeferCallIfIE = true;var jscA = document.createElement('script');jscA.src = 'http://' + jskit_domain + '/ratings.js?y';jscA.type = 'text/javascript';if (document.body.appendChild) {document.body.appendChild(jscA);}hs_ratings_call = 1;}}} if(window.addEventListener){window.addEventListener('load', process_before, false);}else if(window.attachEvent){window.attachEvent('onload', process_before);} else {}