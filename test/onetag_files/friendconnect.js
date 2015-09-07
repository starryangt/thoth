window.google = window["google"] || {};google.friendconnect = google.friendconnect_ || {};if (!window['__ps_loaded__']) {/*http://www-a-fc-opensocial.googleusercontent.com/gadgets/js/rpc:core.util.js?c=1*/
window['___jsl'] = window['___jsl'] || {};(window['___jsl']['ci'] = (window['___jsl']['ci'] || [])).push({"rpc":{"commSwf":"//xpc.googleusercontent.com/gadgets/xpc.swf","passReferrer":"p2c:query","parentRelayUrl":"/rpc_relay.html"}});window['___jsl']=window['___jsl']||{};(window['___jsl']['ci'] = (window['___jsl']['ci'] || [])).push({"rpc":{"commSwf":"//xpc.googleusercontent.com/gadgets/xpc.swf","passReferrer":"p2c:query","parentRelayUrl":"/rpc_relay.html"}});
/* [start] feature=taming */
var safeJSON=window.safeJSON;
var tamings___=window.tamings___||[];
var bridge___;
var caja___=window.caja___;
var ___=window.___;;

/* [end] feature=taming */

/* [start] feature=gapi-globals */
var gapi=window.gapi||{};gapi.client=window.gapi&&window.gapi.client||{};
;
;

/* [end] feature=gapi-globals */

/* [start] feature=globals */
var gadgets=window.gadgets||{},shindig=window.shindig||{},osapi=window.osapi=window.osapi||{},google=window.google||{};
;
;

/* [end] feature=globals */

/* [start] feature=core.config.base */
window['___cfg'] = window['___cfg'] || window['___gcfg'];;
if(!window.gadgets["config"]){gadgets.config=function(){var f;
var h={};
var b={};
function c(j,l){for(var k in l){if(!l.hasOwnProperty(k)){continue
}if(typeof j[k]==="object"&&typeof l[k]==="object"){c(j[k],l[k])
}else{j[k]=l[k]
}}}function i(){var j=document.scripts||document.getElementsByTagName("script");
if(!j||j.length==0){return null
}var m;
if(f.u){for(var k=0;
!m&&k<j.length;
++k){var l=j[k];
if(l.src&&l.src.indexOf(f.u)==0){m=l
}}}if(!m){m=j[j.length-1]
}if(!m.src){return null
}return m
}function a(j){var k="";
if(j.nodeType==3||j.nodeType==4){k=j.nodeValue
}else{if(j.innerText){k=j.innerText
}else{if(j.innerHTML){k=j.innerHTML
}else{if(j.firstChild){var l=[];
for(var m=j.firstChild;
m;
m=m.nextSibling){l.push(a(m))
}k=l.join("")
}}}}return k
}function e(k){if(!k){return{}
}var j;
while(k.charCodeAt(k.length-1)==0){k=k.substring(0,k.length-1)
}try{j=(new Function("return ("+k+"\n)"))()
}catch(l){}if(typeof j==="object"){return j
}try{j=(new Function("return ({"+k+"\n})"))()
}catch(l){}return typeof j==="object"?j:{}
}function g(n){var p=window.___cfg;
if(p){c(n,p)
}var o=i();
if(!o){return
}var k=a(o);
var j=e(k);
if(f.f&&f.f.length==1){var m=f.f[0];
if(!j[m]){var l={};
l[f.f[0]]=j;
j=l
}}c(n,j)
}function d(o){for(var l in h){if(h.hasOwnProperty(l)){var n=h[l];
for(var m=0,k=n.length;
m<k;
++m){o(l,n[m])
}}}}return{register:function(l,k,j,m){var n=h[l];
if(!n){n=[];
h[l]=n
}n.push({validators:k||{},callback:j,callOnUpdate:m})
},get:function(j){if(j){return b[j]||{}
}return b
},init:function(k,j){f=window.___jsl||{};
c(b,k);
g(b);
var l=window.___config||{};
c(b,l);
d(function(q,p){var o=b[q];
if(o&&!j){var m=p.validators;
for(var n in m){if(m.hasOwnProperty(n)){if(!m[n](o[n])){throw new Error('Invalid config value "'+o[n]+'" for parameter "'+n+'" in component "'+q+'"')
}}}}if(p.callback){p.callback(b)
}})
},update:function(k,p){var o=(window.gapi&&window.gapi["config"]&&window.gapi["config"]["update"]);
if(!p&&o){o(k)
}var n=[];
d(function(q,j){if(k.hasOwnProperty(q)||(p&&b&&b[q])){if(j.callback&&j.callOnUpdate){n.push(j.callback)
}}});
b=p?{}:b||{};
c(b,k);
for(var m=0,l=n.length;
m<l;
++m){n[m](b)
}}}
}()
}else{gadgets.config=window.gadgets["config"];
gadgets.config.register=gadgets.config.register;
gadgets.config.get=gadgets.config.get;
gadgets.config.init=gadgets.config.init;
gadgets.config.update=gadgets.config.update
};;

/* [end] feature=core.config.base */

/* [start] feature=core.log */
gadgets.log=(function(){var e=1;
var a=2;
var f=3;
var c=4;
var d=function(i){b(e,i)
};
gadgets.warn=function(i){b(a,i)
};
gadgets.error=function(i){b(f,i)
};
gadgets.debug=function(i){};
gadgets.setLogLevel=function(i){h=i
};
function b(k,i){if(k<h||!g){return
}if(k===a&&g.warn){g.warn(i)
}else{if(k===f&&g.error){try{g.error(i)
}catch(j){}}else{if(g.log){g.log(i)
}}}}d.INFO=e;
d.WARNING=a;
d.NONE=c;
var h=e;
var g=window.console?window.console:window.opera?window.opera.postError:undefined;
return d
})();;
;

/* [end] feature=core.log */

/* [start] feature=gapi.util-globals */
gapi.util=window.gapi&&window.gapi.util||{};
;

/* [end] feature=gapi.util-globals */

/* [start] feature=core.config */
(function(){gadgets.config.EnumValidator=function(d){var c=[];
if(arguments.length>1){for(var b=0,a;
(a=arguments[b]);
++b){c.push(a)
}}else{c=d
}return function(f){for(var e=0,g;
(g=c[e]);
++e){if(f===c[e]){return true
}}return false
}
};
gadgets.config.RegExValidator=function(a){return function(b){return a.test(b)
}
};
gadgets.config.ExistsValidator=function(a){return typeof a!=="undefined"
};
gadgets.config.NonEmptyStringValidator=function(a){return typeof a==="string"&&a.length>0
};
gadgets.config.BooleanValidator=function(a){return typeof a==="boolean"
};
gadgets.config.LikeValidator=function(a){return function(c){for(var d in a){if(a.hasOwnProperty(d)){var b=a[d];
if(!b(c[d])){return false
}}}return true
}
}
})();;

/* [end] feature=core.config */

/* [start] feature=core.util.base */
gadgets.util=gadgets.util||{};
(function(){gadgets.util.makeClosure=function(d,f,e){var c=[];
for(var b=2,a=arguments.length;
b<a;
++b){c.push(arguments[b])
}return function(){var g=c.slice();
for(var k=0,h=arguments.length;
k<h;
++k){g.push(arguments[k])
}return f.apply(d,g)
}
};
gadgets.util.makeEnum=function(b){var c,a,d={};
for(c=0;
(a=b[c]);
++c){d[a]=a
}return d
}
})();;

/* [end] feature=core.util.base */

/* [start] feature=core.util.dom */
gadgets.util=gadgets.util||{};
(function(){var c="http://www.w3.org/1999/xhtml";
function b(f,e){var h=e||{};
for(var g in h){if(h.hasOwnProperty(g)){f[g]=h[g]
}}}function d(g,f){var e=["<",g];
var i=f||{};
for(var h in i){if(i.hasOwnProperty(h)){e.push(" ");
e.push(h);
e.push('="');
e.push(gadgets.util.escapeString(i[h]));
e.push('"')
}}e.push("></");
e.push(g);
e.push(">");
return e.join("")
}function a(f){var g="";
if(f.nodeType==3||f.nodeType==4){g=f.nodeValue
}else{if(f.innerText){g=f.innerText
}else{if(f.innerHTML){g=f.innerHTML
}else{if(f.firstChild){var e=[];
for(var h=f.firstChild;
h;
h=h.nextSibling){e.push(a(h))
}g=e.join("")
}}}}return g
}gadgets.util.createElement=function(f){var e;
if((!document.body)||document.body.namespaceURI){try{e=document.createElementNS(c,f)
}catch(g){}}return e||document.createElement(f)
};
gadgets.util.createIframeElement=function(g){var i=gadgets.util.createElement("iframe");
try{var e=d("iframe",g);
var f=gadgets.util.createElement(e);
if(f&&((!i)||((f.tagName==i.tagName)&&(f.namespaceURI==i.namespaceURI)))){i=f
}}catch(h){}b(i,g);
return i
};
gadgets.util.getBodyElement=function(){if(document.body){return document.body
}try{var f=document.getElementsByTagNameNS(c,"body");
if(f&&(f.length==1)){return f[0]
}}catch(e){}return document.documentElement||document
};
gadgets.util.getInnerText=function(e){return a(e)
}
})();;

/* [end] feature=core.util.dom */

/* [start] feature=core.util.event */
gadgets.util=gadgets.util||{};
(function(){gadgets.util.attachBrowserEvent=function(c,b,d,a){if(typeof c.addEventListener!="undefined"){c.addEventListener(b,d,a)
}else{if(typeof c.attachEvent!="undefined"){c.attachEvent("on"+b,d)
}else{gadgets.warn("cannot attachBrowserEvent: "+b)
}}};
gadgets.util.removeBrowserEvent=function(c,b,d,a){if(c.removeEventListener){c.removeEventListener(b,d,a)
}else{if(c.detachEvent){c.detachEvent("on"+b,d)
}else{gadgets.warn("cannot removeBrowserEvent: "+b)
}}}
})();;

/* [end] feature=core.util.event */

/* [start] feature=core.util.onload */
gadgets.util=gadgets.util||{};
(function(){var a=[];
gadgets.util.registerOnLoadHandler=function(b){a.push(b)
};
gadgets.util.runOnLoadHandlers=function(){for(var c=0,b=a.length;
c<b;
++c){a[c]()
}}
})();;

/* [end] feature=core.util.onload */

/* [start] feature=core.util.string */
gadgets.util=gadgets.util||{};
(function(){var a={0:false,10:true,13:true,34:true,39:true,60:true,62:true,92:true,8232:true,8233:true,65282:true,65287:true,65308:true,65310:true,65340:true};
function b(c,d){return String.fromCharCode(d)
}gadgets.util.escape=function(c,g){if(!c){return c
}else{if(typeof c==="string"){return gadgets.util.escapeString(c)
}else{if(typeof c==="Array"){for(var f=0,d=c.length;
f<d;
++f){c[f]=gadgets.util.escape(c[f])
}}else{if(typeof c==="object"&&g){var e={};
for(var h in c){if(c.hasOwnProperty(h)){e[gadgets.util.escapeString(h)]=gadgets.util.escape(c[h],true)
}}return e
}}}}return c
};
gadgets.util.escapeString=function(g){if(!g){return g
}var d=[],f,h;
for(var e=0,c=g.length;
e<c;
++e){f=g.charCodeAt(e);
h=a[f];
if(h===true){d.push("&#",f,";")
}else{if(h!==false){d.push(g.charAt(e))
}}}return d.join("")
};
gadgets.util.unescapeString=function(c){if(!c){return c
}return c.replace(/&#([0-9]+);/g,b)
}
})();;

/* [end] feature=core.util.string */

/* [start] feature=core.util.urlparams */
gadgets.util=gadgets.util||{};
(function(){var a=null;
function b(e){var f;
var c=e.indexOf("?");
var d=e.indexOf("#");
if(d===-1){f=e.substr(c+1)
}else{f=[e.substr(c+1,d-c-1),"&",e.substr(d+1)].join("")
}return f.split("&")
}gadgets.util.getUrlParameters=function(p){var d=typeof p==="undefined";
if(a!==null&&d){return a
}var l={};
var f=b(p||window.location.href);
var n=window.decodeURIComponent?decodeURIComponent:unescape;
for(var h=0,g=f.length;
h<g;
++h){var m=f[h].indexOf("=");
if(m===-1){continue
}var c=f[h].substring(0,m);
var o=f[h].substring(m+1);
o=o.replace(/\+/g," ");
try{l[c]=n(o)
}catch(k){}}if(d){a=l
}return l
};
gadgets.util.getUrlParameters()
})();;

/* [end] feature=core.util.urlparams */

/* [start] feature=gapi.util.getOrigin */
gapi.util.getOrigin=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);if("http"===
a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
;

/* [end] feature=gapi.util.getOrigin */

/* [start] feature=core.json */
if(window.JSON&&window.JSON.parse&&window.JSON.stringify){gadgets.json=(function(){var a=/___$/;
function b(d,e){var c=this[d];
return c
}return{parse:function(d){try{return window.JSON.parse(d)
}catch(c){return false
}},stringify:function(d){var h=window.JSON.stringify;
function f(e){return h.call(this,e,b)
}var g=(Array.prototype.toJSON&&h([{x:1}])==='"[{\\"x\\": 1}]"')?f:h;
try{return g(d,function(i,e){return !a.test(i)?e:void 0
})
}catch(c){return null
}}}
})()
};;
;
if(!(window.JSON&&window.JSON.parse&&window.JSON.stringify)){gadgets.json=function(){function f(n){return n<10?"0"+n:n
}Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",f(this.getUTCMonth()+1),"-",f(this.getUTCDate()),"T",f(this.getUTCHours()),":",f(this.getUTCMinutes()),":",f(this.getUTCSeconds()),"Z"].join("")
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function stringify(value){var a,i,k,l,r=/[\"\\\x00-\x1f\x7f-\x9f]/g,v;
switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];
if(c){return c
}c=a.charCodeAt();
return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)
})+'"':'"'+value+'"';
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}a=[];
if(typeof value.length==="number"&&!value.propertyIsEnumerable("length")){l=value.length;
for(i=0;
i<l;
i+=1){a.push(stringify(value[i])||"null")
}return"["+a.join(",")+"]"
}for(k in value){if(/___$/.test(k)){continue
}if(value.hasOwnProperty(k)){if(typeof k==="string"){v=stringify(value[k]);
if(v){a.push(stringify(k)+":"+v)
}}}}return"{"+a.join(",")+"}"
}return""
}return{stringify:stringify,parse:function(text){if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+text+")")
}return false
}}
}()
};;
gadgets.json.flatten=function(c){var d={};
if(c===null||c===undefined){return d
}for(var a in c){if(c.hasOwnProperty(a)){var b=c[a];
if(null===b||undefined===b){continue
}d[a]=(typeof b==="string")?b:gadgets.json.stringify(b)
}}return d
};;

/* [end] feature=core.json */

/* [start] feature=core.util */
gadgets.util=gadgets.util||{};
(function(){var b={};
var a={};
function c(d){b=d["core.util"]||{}
}if(gadgets.config){gadgets.config.register("core.util",null,c)
}gadgets.util.getFeatureParameters=function(d){return typeof b[d]==="undefined"?null:b[d]
};
gadgets.util.hasFeature=function(d){return typeof b[d]!=="undefined"
};
gadgets.util.getServices=function(){return a
}
})();;

/* [end] feature=core.util */

/* [start] feature=rpc */
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.wpm){gadgets.rpctx.wpm=function(){var e,d;
var c=true;
function b(h,j,g){if(typeof window.addEventListener!="undefined"){window.addEventListener(h,j,g)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("on"+h,j)
}}if(h==="message"){window.___jsl=window.___jsl||{};
var i=window.___jsl;
i.RPMQ=i.RPMQ||[];
i.RPMQ.push(j)
}}function a(h,i,g){if(window.removeEventListener){window.removeEventListener(h,i,g)
}else{if(window.detachEvent){window.detachEvent("on"+h,i)
}}}function f(h){var i=gadgets.json.parse(h.data);
if(!i||!i.f){return
}gadgets.debug("gadgets.rpc.receive("+window.name+"): "+h.data);
var g=gadgets.rpc.getTargetOrigin(i.f);
if(c&&(typeof h.origin!=="undefined"?h.origin!==g:h.domain!==/^.+:\/\/([^:]+).*/.exec(g)[1])){gadgets.error("Invalid rpc message origin. "+g+" vs "+(h.origin||""));
return
}e(i,h.origin)
}return{getCode:function(){return"wpm"
},isParentVerifiable:function(){return true
},init:function(h,i){function g(k){var j=k&&k.rpc||{};
if(String(j.disableForceSecure)==="true"){c=false
}}gadgets.config.register("rpc",null,g);
e=h;
d=i;
b("message",f,false);
d("..",true);
return true
},setup:function(h,g){d(h,true);
return true
},call:function(h,k,j){var g=gadgets.rpc.getTargetOrigin(h);
var i=gadgets.rpc._getTargetWin(h);
if(g){window.setTimeout(function(){var l=gadgets.json.stringify(j);
gadgets.debug("gadgets.rpc.send("+window.name+"): "+l);
i.postMessage(l,g)
},0)
}else{if(h!=".."){gadgets.error("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message")
}}return true
}}
}()
};;

       gadgets.rpctx.ifpc = gadgets.rpctx.wpm;
    ;
if(!window.gadgets||!window.gadgets["rpc"]){gadgets.rpc=function(){var M="__cb";
var S="";
var T="__ack";
var f=500;
var G=10;
var b="|";
var u="callback";
var g="origin";
var r="referer";
var s="legacy__";
var q={};
var W={};
var D={};
var B={};
var z=0;
var l={};
var m={};
var d={};
var n={};
var E={};
var e=null;
var p=null;
var A=(window.top!==window.self);
var v=window.name;
var J=function(){};
var P=0;
var Y=1;
var a=2;
var x=window.console;
var V=x&&x.log&&function(ae){x.log(ae)
}||function(){};
var R=(function(){function ae(af){return function(){V(af+": call ignored")
}
}return{getCode:function(){return"noop"
},isParentVerifiable:function(){return true
},init:ae("init"),setup:ae("setup"),call:ae("call")}
})();
if(gadgets.util){d=gadgets.util.getUrlParameters()
}function K(){if(d.rpctx=="flash"){return gadgets.rpctx.flash
}if(d.rpctx=="rmr"){return gadgets.rpctx.rmr
}var ae=typeof window.postMessage==="function"?gadgets.rpctx.wpm:typeof window.postMessage==="object"?gadgets.rpctx.wpm:window.ActiveXObject?(gadgets.rpctx.flash?gadgets.rpctx.flash:(gadgets.rpctx.nix?gadgets.rpctx.nix:gadgets.rpctx.ifpc)):navigator.userAgent.indexOf("WebKit")>0?gadgets.rpctx.rmr:navigator.product==="Gecko"?gadgets.rpctx.frameElement:gadgets.rpctx.ifpc;
if(!ae){ae=R
}return ae
}function k(aj,ah){if(n[aj]){return
}var af=H;
if(!ah){af=R
}n[aj]=af;
var ae=E[aj]||[];
for(var ag=0;
ag<ae.length;
++ag){var ai=ae[ag];
ai.t=F(aj);
af.call(aj,ai.f,ai)
}E[aj]=[]
}var I=false,U=false;
function N(){if(U){return
}function ae(){I=true
}if(typeof window.addEventListener!="undefined"){window.addEventListener("unload",ae,false)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onunload",ae)
}}U=true
}function j(ae,ai,af,ah,ag){if(!B[ai]||B[ai]!==af){gadgets.error("Invalid gadgets.rpc token. "+B[ai]+" vs "+af);
J(ai,a)
}ag.onunload=function(){if(m[ai]&&!I){J(ai,Y);
gadgets.rpc.removeReceiver(ai)
}};
N();
ah=gadgets.json.parse(decodeURIComponent(ah))
}function Z(ak,af){if(ak&&typeof ak.s==="string"&&typeof ak.f==="string"&&ak.a instanceof Array){if(B[ak.f]){if(B[ak.f]!==ak.t){gadgets.error("Invalid gadgets.rpc token. "+B[ak.f]+" vs "+ak.t);
J(ak.f,a)
}}if(ak.s===T){window.setTimeout(function(){k(ak.f,true)
},0);
return
}if(ak.c){ak[u]=function(al){var am=ak.g?s:"";
gadgets.rpc.call(ak.f,am+M,null,ak.c,al)
}
}if(af){var ag=t(af);
ak[g]=af;
var ah=ak.r,aj;
try{aj=t(ah)
}catch(ai){}if(!ah||aj!=ag){ah=af
}ak[r]=ah
}var ae=(q[ak.s]||q[S]).apply(ak,ak.a);
if(ak.c&&typeof ae!=="undefined"){gadgets.rpc.call(ak.f,M,null,ak.c,ae)
}}}function t(ag){if(!ag){return""
}ag=((ag.split("#"))[0].split("?"))[0];
ag=ag.toLowerCase();
if(ag.indexOf("//")==0){ag=window.location.protocol+ag
}if(ag.indexOf("://")==-1){ag=window.location.protocol+"//"+ag
}var ah=ag.substring(ag.indexOf("://")+3);
var ae=ah.indexOf("/");
if(ae!=-1){ah=ah.substring(0,ae)
}var aj=ag.substring(0,ag.indexOf("://"));
if(aj!=="http"&&aj!=="https"&&aj!=="chrome-extension"&&aj!=="file"){throw Error("Invalid URI scheme in origin")
}var ai="";
var ak=ah.indexOf(":");
if(ak!=-1){var af=ah.substring(ak+1);
ah=ah.substring(0,ak);
if((aj==="http"&&af!=="80")||(aj==="https"&&af!=="443")){ai=":"+af
}}return aj+"://"+ah+ai
}function C(af,ae){return"/"+af+(ae?b+ae:"")
}function y(ah){if(ah.charAt(0)=="/"){var af=ah.indexOf(b);
var ag=af>0?ah.substring(1,af):ah.substring(1);
var ae=af>0?ah.substring(af+1):null;
return{id:ag,origin:ae}
}else{return null
}}function ad(ag){if(typeof ag==="undefined"||ag===".."){return window.parent
}var af=y(ag);
if(af){return window.top.frames[af.id]
}ag=String(ag);
var ae=window.frames[ag];
if(ae){return ae
}ae=document.getElementById(ag);
if(ae&&ae.contentWindow){return ae.contentWindow
}return null
}function L(ah){var ag=null;
var ae=O(ah);
if(ae){ag=ae
}else{var af=y(ah);
if(af){ag=af.origin
}else{if(ah==".."){ag=d.parent
}else{ag=document.getElementById(ah).src
}}}return t(ag)
}var H=K();
q[S]=function(){V("Unknown RPC service: "+this["s"])
};
q[M]=function(af,ae){var ag=l[af];
if(ag){delete l[af];
ag.call(this,ae)
}};
function X(ag,ae){if(m[ag]===true){return
}if(typeof m[ag]==="undefined"){m[ag]=0
}var af=ad(ag);
if(ag===".."||af!=null){if(H.setup(ag,ae)===true){m[ag]=true;
return
}}if(m[ag]!==true&&m[ag]++<G){window.setTimeout(function(){X(ag,ae)
},f)
}else{n[ag]=R;
m[ag]=true
}}function O(af){var ae=W[af];
if(ae&&ae.substring(0,1)==="/"){if(ae.substring(1,2)==="/"){ae=document.location.protocol+ae
}else{ae=document.location.protocol+"//"+document.location.host+ae
}}return ae
}function ac(af,ae,ag){if(ae&&!/http(s)?:\/\/.+/.test(ae)){if(ae.indexOf("//")==0){ae=window.location.protocol+ae
}else{if(ae.charAt(0)=="/"){ae=window.location.protocol+"//"+window.location.host+ae
}else{if(ae.indexOf("://")==-1){ae=window.location.protocol+"//"+ae
}}}}W[af]=ae;
if(typeof ag!=="undefined"){D[af]=!!ag
}}function F(ae){return B[ae]
}function c(ae,af){af=af||"";
B[ae]=String(af);
X(ae,af)
}function ab(af){var ae=af.passReferrer||"";
var ag=ae.split(":",2);
e=ag[0]||"none";
p=ag[1]||"origin"
}function aa(ae){if(Q(ae)){H=gadgets.rpctx.ifpc||R;
H.init(Z,k)
}}function Q(ae){return String(ae.useLegacyProtocol)==="true"
}function h(af,ae){function ag(aj){var ai=aj&&aj.rpc||{};
ab(ai);
var ah=ai.parentRelayUrl||"";
ah=t(d.parent||ae)+ah;
ac("..",ah,Q(ai));
aa(ai);
c("..",af)
}if(!d.parent&&ae){ag({});
return
}gadgets.config.register("rpc",null,ag)
}function o(af,aj,al){var ai=null;
if(af.charAt(0)!="/"){if(!gadgets.util){return
}ai=document.getElementById(af);
if(!ai){throw new Error("Cannot set up gadgets.rpc receiver with ID: "+af+", element not found.")
}}var ae=ai&&ai.src;
var ag=aj||gadgets.rpc.getOrigin(ae);
ac(af,ag);
var ak=gadgets.util.getUrlParameters(ae);
var ah=al||ak.rpctoken;
c(af,ah)
}function i(ae,ag,ah){if(ae===".."){var af=ah||d.rpctoken||d.ifpctok||"";
h(af,ag)
}else{o(ae,ag,ah)
}}function w(ag){if(e==="bidir"||(e==="c2p"&&ag==="..")||(e==="p2c"&&ag!=="..")){var af=window.location.href;
var ah="?";
if(p==="query"){ah="#"
}else{if(p==="hash"){return af
}}var ae=af.lastIndexOf(ah);
ae=ae===-1?af.length:ae;
return af.substring(0,ae)
}return null
}return{config:function(ae){if(typeof ae.securityCallback==="function"){J=ae.securityCallback
}},register:function(af,ae){if(af===M||af===T){throw new Error("Cannot overwrite callback/ack service")
}if(af===S){throw new Error("Cannot overwrite default service: use registerDefault")
}q[af]=ae
},unregister:function(ae){if(ae===M||ae===T){throw new Error("Cannot delete callback/ack service")
}if(ae===S){throw new Error("Cannot delete default service: use unregisterDefault")
}delete q[ae]
},registerDefault:function(ae){q[S]=ae
},unregisterDefault:function(){delete q[S]
},forceParentVerifiable:function(){if(!H.isParentVerifiable()){H=gadgets.rpctx.ifpc
}},call:function(ae,ag,al,aj){ae=ae||"..";
var ak="..";
if(ae===".."){ak=v
}else{if(ae.charAt(0)=="/"){ak=C(v,gadgets.rpc.getOrigin(window.location.href))
}}++z;
if(al){l[z]=al
}var ai={s:ag,f:ak,c:al?z:0,a:Array.prototype.slice.call(arguments,3),t:B[ae],l:!!D[ae]};
var af=w(ae);
if(af){ai.r=af
}if(ae!==".."&&y(ae)==null&&!document.getElementById(ae)){return
}var ah=n[ae];
if(!ah&&y(ae)!==null){ah=H
}if(ag.indexOf(s)===0){ah=H;
ai.s=ag.substring(s.length);
ai.c=ai.c?ai.c:z
}ai.g=true;
ai.r=ak;
if(!ah){if(!E[ae]){E[ae]=[ai]
}else{E[ae].push(ai)
}return
}if(D[ae]){ah=gadgets.rpctx.ifpc
}if(ah.call(ae,ak,ai)===false){n[ae]=R;
H.call(ae,ak,ai)
}},getRelayUrl:O,setRelayUrl:ac,setAuthToken:c,setupReceiver:i,getAuthToken:F,removeReceiver:function(ae){delete W[ae];
delete D[ae];
delete B[ae];
delete m[ae];
delete n[ae]
},getRelayChannel:function(){return H.getCode()
},receive:function(af,ae){if(af.length>4){H._receiveMessage(af,Z)
}else{j.apply(null,af.concat(ae))
}},receiveSameDomain:function(ae){ae.a=Array.prototype.slice.call(ae.a);
window.setTimeout(function(){Z(ae)
},0)
},getOrigin:t,getTargetOrigin:L,init:function(){if(H.init(Z,k)===false){H=R
}if(A){i("..")
}else{gadgets.config.register("rpc",null,function(af){var ae=af.rpc||{};
ab(ae);
aa(ae)
})
}},_getTargetWin:ad,_parseSiblingId:y,ACK:T,RPC_ID:v||"..",SEC_ERROR_LOAD_TIMEOUT:P,SEC_ERROR_FRAME_PHISH:Y,SEC_ERROR_FORGED_MSG:a}
}();
gadgets.rpc.init()
}else{if(typeof gadgets.rpc=="undefined"||!gadgets.rpc){gadgets.rpc=window.gadgets["rpc"];
gadgets.rpc.config=gadgets.rpc.config;
gadgets.rpc.register=gadgets.rpc.register;
gadgets.rpc.unregister=gadgets.rpc.unregister;
gadgets.rpc.registerDefault=gadgets.rpc.registerDefault;
gadgets.rpc.unregisterDefault=gadgets.rpc.unregisterDefault;
gadgets.rpc.forceParentVerifiable=gadgets.rpc.forceParentVerifiable;
gadgets.rpc.call=gadgets.rpc.call;
gadgets.rpc.getRelayUrl=gadgets.rpc.getRelayUrl;
gadgets.rpc.setRelayUrl=gadgets.rpc.setRelayUrl;
gadgets.rpc.setAuthToken=gadgets.rpc.setAuthToken;
gadgets.rpc.setupReceiver=gadgets.rpc.setupReceiver;
gadgets.rpc.getAuthToken=gadgets.rpc.getAuthToken;
gadgets.rpc.removeReceiver=gadgets.rpc.removeReceiver;
gadgets.rpc.getRelayChannel=gadgets.rpc.getRelayChannel;
gadgets.rpc.receive=gadgets.rpc.receive;
gadgets.rpc.receiveSameDomain=gadgets.rpc.receiveSameDomain;
gadgets.rpc.getOrigin=gadgets.rpc.getOrigin;
gadgets.rpc.getTargetOrigin=gadgets.rpc.getTargetOrigin;
gadgets.rpc._getTargetWin=gadgets.rpc._getTargetWin;
gadgets.rpc._parseSiblingId=gadgets.rpc._parseSiblingId
}};;

/* [end] feature=rpc */
gadgets.config.init({"rpc":{"commSwf":"//xpc.googleusercontent.com/gadgets/xpc.swf","passReferrer":"p2c:query","parentRelayUrl":"/rpc_relay.html"}});
(function(){var j=window['___jsl']=window['___jsl']||{};j['l']=(j['l']||[]).concat(['rpc','core.util']);})();(function(){var j=window['___jsl']=window['___jsl']||{};if(j['c']){j['c']();delete j['c'];}})();var friendconnect_serverBase = "https://www.google.com";var friendconnect_loginUrl = "https://www.google.com/accounts";var friendconnect_gadgetPrefix = "http://www-a-fc-opensocial.googleusercontent.com/gadgets";
var friendconnect_serverVersion = "0.1-7063da8e_1245d196_0d90e69e_229f7965_a8d53ba6.7";
var friendconnect_imageUrl = "https://www.google.com/friendconnect/scs/images";
var friendconnect_lightbox = true;
var fca=gadgets,fcb=encodeURIComponent,fcc=window,fcaa=Object,fcd=friendconnect_serverBase,fcba=setTimeout,fce=document,fcf=Array,fcg=Math,fch=Error,fcca=parseInt,fci=String;function fcj(a,b){return a.width=b}function fck(a,b){return a.height=b}function fcl(a,b){return a.innerHTML=b}function fcda(a,b){return a.length=b}function fcea(a,b){return a.className=b}
var fcm="appendChild",fcfa="shift",fcga="exec",fcn="width",fco="replace",fcha="data",fcp="charAt",fcq="match",fcia="createElement",fcr="setAttribute",fcja="auth",fcka="getSecurityToken",fcla="bind",fcs="register",fcma="toString",fcna="propertyIsEnumerable",fct="split",fcu="location",fcoa="Dialog",fcv="style",fcw="options",fcpa="json",fcqa="href",fcx="util",fcra="maxHeight",fcy="apply",fcsa="reset",fcz="height",fcta="right",fcA="push",fcua="stringify",fcva="test",fcB="round",fcC="slice",fcD="getElementById",
fcE="indexOf",fcwa="left",fcxa="addEventListener",fcya="digest",fcza="locale",fcAa="type",fcF="name",fcG="length",fc="prototype",fcH="document",fcI="getUrlParameters",fcJ="body",fcK="call",fcBa="friendconnect_serverBase",fcCa="charCodeAt",fcDa="substring",fcEa="getContentElement",fcL="update",fcM="join",fcFa="toLowerCase",goog=goog||{},fcN=this,fcGa=function(a){return void 0!==a},fcHa=function(a,b,c){a=a[fct](".");c=c||fcN;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a[fcG]&&(d=a[fcfa]());)!a[fcG]&&
fcGa(b)?c[d]=b:c=c[d]?c[d]:c[d]={}},fcIa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof fcf)return"array";if(a instanceof fcaa)return b;var c=fcaa[fc][fcma][fcK](a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a[fcG]&&"undefined"!=typeof a.splice&&"undefined"!=typeof a[fcna]&&!a[fcna]("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a[fcK]&&"undefined"!=typeof a[fcna]&&!a[fcna]("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a[fcK])return"object";return b},fcJa=function(a){var b=fcIa(a);return"array"==b||"object"==b&&"number"==typeof a[fcG]},fcO=function(a){return"string"==typeof a},fcKa=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},fcP=function(a){var b=fcIa(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=fcP(a[c]);return b}return a},fcLa=function(a,b,c){return a[fcK][fcy](a[fcla],arguments)},fcMa=function(a,b,c){if(!a)throw fch();
if(2<arguments[fcG]){var d=fcf[fc][fcC][fcK](arguments,2);return function(){var c=fcf[fc][fcC][fcK](arguments);fcf[fc].unshift[fcy](c,d);return a[fcy](b,c)}}return function(){return a[fcy](b,arguments)}},fcQ=function(a,b,c){fcQ=Function[fc][fcla]&&-1!=Function[fc][fcla][fcma]()[fcE]("native code")?fcLa:fcMa;return fcQ[fcy](null,arguments)},fcNa=function(a,b){var c=fcf[fc][fcC][fcK](arguments,1);return function(){var b=c[fcC]();b[fcA][fcy](b,arguments);return a[fcy](this,b)}},fcOa=function(a,b){for(var c in b)a[c]=
b[c]},fcPa=Date.now||function(){return+new Date},fcR=function(a,b,c){fcHa(a,b,c)},fcS=function(a,b){function c(){}c.prototype=b[fc];a.cd=b[fc];a.prototype=new c;a[fc].constructor=a;a.base=function(a,c,f){for(var l=fcf(arguments[fcG]-2),k=2;k<arguments[fcG];k++)l[k-2]=arguments[k];return b[fc][c][fcy](a,l)}};Function[fc].bind=Function[fc][fcla]||function(a,b){if(1<arguments[fcG]){var c=fcf[fc][fcC][fcK](arguments,1);c.unshift(this,a);return fcQ[fcy](null,c)}return fcQ(this,a)};var fcQa=function(a){if(fch.captureStackTrace)fch.captureStackTrace(this,fcQa);else{var b=fch().stack;b&&(this.stack=b)}a&&(this.message=fci(a));this.reportErrorToServer=!0};fcS(fcQa,fch);fcQa[fc].name="CustomError";var fcRa=function(a,b){for(var c=a[fct]("%s"),d="",e=fcf[fc][fcC][fcK](arguments,1);e[fcG]&&1<c[fcG];)d+=c[fcfa]()+e[fcfa]();return d+c[fcM]("%s")},fcSa=fci[fc].trim?function(a){return a.trim()}:function(a){return a[fco](/^[\s\xa0]+|[\s\xa0]+$/g,"")},fcTa=function(a,b){var c=fci(a)[fcFa](),d=fci(b)[fcFa]();return c<d?-1:c==d?0:1},fc0a=function(a,b){if(b)a=a[fco](fcUa,"&amp;")[fco](fcVa,"&lt;")[fco](fcWa,"&gt;")[fco](fcXa,"&quot;")[fco](fcYa,"&#39;")[fco](fcZa,"&#0;");else{if(!fc_a[fcva](a))return a;
-1!=a[fcE]("&")&&(a=a[fco](fcUa,"&amp;"));-1!=a[fcE]("<")&&(a=a[fco](fcVa,"&lt;"));-1!=a[fcE](">")&&(a=a[fco](fcWa,"&gt;"));-1!=a[fcE]('"')&&(a=a[fco](fcXa,"&quot;"));-1!=a[fcE]("'")&&(a=a[fco](fcYa,"&#39;"));-1!=a[fcE]("\x00")&&(a=a[fco](fcZa,"&#0;"))}return a},fcUa=/&/g,fcVa=/</g,fcWa=/>/g,fcXa=/"/g,fcYa=/'/g,fcZa=/\x00/g,fc_a=/[\x00&<>"']/,fc2a=function(a,b){for(var c=0,d=fcSa(fci(a))[fct]("."),e=fcSa(fci(b))[fct]("."),f=fcg.max(d[fcG],e[fcG]),l=0;0==c&&l<f;l++){var k=d[l]||"",m=e[l]||"",n=RegExp("(\\d*)(\\D*)",
"g"),g=RegExp("(\\d*)(\\D*)","g");do{var h=n[fcga](k)||["","",""],p=g[fcga](m)||["","",""];if(0==h[0][fcG]&&0==p[0][fcG])break;var c=0==h[1][fcG]?0:fcca(h[1],10),t=0==p[1][fcG]?0:fcca(p[1],10),c=fc1a(c,t)||fc1a(0==h[2][fcG],0==p[2][fcG])||fc1a(h[2],p[2])}while(0==c)}return c},fc1a=function(a,b){return a<b?-1:a>b?1:0},fc3a=function(a){return fci(a)[fco](/\-([a-z])/g,function(a,c){return c.toUpperCase()})},fc4a=function(a,b){var c=fcO(b)?fci(b)[fco](/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1")[fco](/\x08/g,
"\\x08"):"\\s",c=c?"|["+c+"]+":"",c=new RegExp("(^"+c+")([a-z])","g");return a[fco](c,function(a,b,c){return b+c.toUpperCase()})};var fc5a=function(a,b){b.unshift(a);fcQa[fcK](this,fcRa[fcy](null,b));b[fcfa]();this.messagePattern=a};fcS(fc5a,fcQa);fc5a[fc].name="AssertionError";var fc6a=function(a){throw a;},fc7a=fc6a,fc8a=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);a=new fc5a(""+e,f||[]);fc7a(a)},fc9a=function(a,b,c){a||fc8a("",null,b,fcf[fc][fcC][fcK](arguments,2));return a},fc$a=function(a,b){fc7a(new fc5a("Failure"+(a?": "+a:""),fcf[fc][fcC][fcK](arguments,1)))};var fcab=fcf[fc],fcbb=fcab[fcE]?function(a,b,c){fc9a(null!=a[fcG]);return fcab[fcE][fcK](a,b,c)}:function(a,b,c){c=null==c?0:0>c?fcg.max(0,a[fcG]+c):c;if(fcO(a))return fcO(b)&&1==b[fcG]?a[fcE](b,c):-1;for(;c<a[fcG];c++)if(c in a&&a[c]===b)return c;return-1},fccb=fcab.forEach?function(a,b,c){fc9a(null!=a[fcG]);fcab.forEach[fcK](a,b,c)}:function(a,b,c){for(var d=a[fcG],e=fcO(a)?a[fct](""):a,f=0;f<d;f++)f in e&&b[fcK](c,e[f],f,a)},fcdb=function(a,b){return 0<=fcbb(a,b)},fceb=function(a){var b=a[fcG];
if(0<b){for(var c=fcf(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},fcfb=function(a,b,c){fc9a(null!=a[fcG]);return 2>=arguments[fcG]?fcab[fcC][fcK](a,b):fcab[fcC][fcK](a,b,c)};var fcgb=function(a,b,c){for(var d in a)b[fcK](c,a[d],d,a)},fchb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},fcib=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},fcjb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),fckb=function(a,b){for(var c,d,e=1;e<arguments[fcG];e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<fcjb[fcG];f++)c=fcjb[f],fcaa[fc].hasOwnProperty[fcK](d,c)&&(a[c]=d[c])}};var fclb=function(){var a=fcN.navigator;return a&&(a=a.userAgent)?a:""},fcmb=fclb(),fcT=function(a){var b=fcmb;return-1!=b[fcE](a)},fcnb=function(a){var b=fcmb;return-1!=b[fcFa]()[fcE](a[fcFa]())};var fcob=function(){return fcT("Opera")||fcT("OPR")},fcpb=function(){return fcT("Edge")||fcT("Trident")||fcT("MSIE")},fcqb=fcob,fcrb=fcpb;var fcU=function(){return fcT("Edge")};var fcsb=fcqb(),fcV=fcrb(),fctb=fcT("Gecko")&&!(fcnb("WebKit")&&!fcU())&&!(fcT("Trident")||fcT("MSIE"))&&!fcU(),fcub=fcnb("WebKit")&&!fcU(),fcxb=function(){if(fcsb&&fcN.opera){var a=fcN.opera.version;return"function"==fcIa(a)?a():a}var a="",b=fcvb();b&&(a=b?b[1]:"");return fcV&&!fcU()&&(b=fcwb(),b>parseFloat(a))?fci(b):a},fcvb=function(){var a=fcmb;if(fctb)return/rv\:([^\);]+)(\)|;)/[fcga](a);if(fcV&&fcU())return/Edge\/([\d\.]+)/[fcga](a);if(fcV)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/[fcga](a);if(fcub)return/WebKit\/(\S+)/[fcga](a)},
fcwb=function(){var a=fcN[fcH];return a?a.documentMode:void 0},fcyb=fcxb(),fczb={},fcAb=function(a){return fczb[a]||(fczb[a]=0<=fc2a(fcyb,a))},fcBb=function(){var a=fcN[fcH],b=fcwb();return!a||!fcV||!b&&fcU()?void 0:b||("CSS1Compat"==a.compatMode?fcca(fcyb,10):5)}();var fcCb=function(a){for(var b=[],c=0,d=0;d<a[fcG];d++){for(var e=a[fcCa](d);255<e;)b[c++]=e&255,e>>=8;b[c++]=e}return b};var fcDb=null,fcEb=null,fcFb=null,fcGb=null,fcIb=function(a,b){if(!fcJa(a))throw fch("encodeByteArray takes an array as a parameter");fcHb();for(var c=b?fcFb:fcDb,d=[],e=0;e<a[fcG];e+=3){var f=a[e],l=e+1<a[fcG],k=l?a[e+1]:0,m=e+2<a[fcG],n=m?a[e+2]:0,g=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|n>>6,n=n&63;m||(n=64,l||(k=64));d[fcA](c[g],c[f],c[k],c[n])}return d[fcM]("")},fcJb=function(a,b){fcHb();for(var c=b?fcGb:fcEb,d=[],e=0;e<a[fcG];){var f=c[a[fcp](e++)],l=e<a[fcG],l=l?c[a[fcp](e)]:0;++e;var k=e<a[fcG],
k=k?c[a[fcp](e)]:64;++e;var m=e<a[fcG],m=m?c[a[fcp](e)]:64;++e;if(null==f||null==l||null==k||null==m)throw fch();f=f<<2|l>>4;d[fcA](f);64!=k&&(f=l<<4&240|k>>2,d[fcA](f),64!=m&&(f=k<<6&192|m,d[fcA](f)))}return d},fcHb=function(){if(!fcDb){fcDb={};fcEb={};fcFb={};fcGb={};for(var a=0;65>a;a++)fcDb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[fcp](a),fcEb[fcDb[a]]=a,fcFb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[fcp](a),fcGb[fcFb[a]]=a,62<=a&&(fcEb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[fcp](a)]=
a,fcGb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[fcp](a)]=a)}};var fcKb=function(){this.blockSize=-1};var fcW=function(a,b,c){fcKb[fcK](this);this.l=a;this.blockSize=c||a.blockSize||16;this.hc=fcf(this.blockSize);this.fb=fcf(this.blockSize);this.dc(b)};fcS(fcW,fcKb);fcW[fc].dc=function(a){a[fcG]>this.blockSize&&(this.l[fcL](a),a=this.l[fcya](),this.l[fcsa]());for(var b,c=0;c<this.blockSize;c++)b=c<a[fcG]?a[c]:0,this.hc[c]=b^92,this.fb[c]=b^54;this.l[fcL](this.fb)};fcW[fc].reset=function(){this.l[fcsa]();this.l[fcL](this.fb)};fcW[fc].update=function(a,b){this.l[fcL](a,b)};
fcW[fc].digest=function(){var a=this.l[fcya]();this.l[fcsa]();this.l[fcL](this.hc);this.l[fcL](a);return this.l[fcya]()};fcW[fc].Sb=function(a){this[fcsa]();this[fcL](a);return this[fcya]()};var fcX=function(){fcKb[fcK](this);this.blockSize=64;this.c=[];this.Ma=[];this.Uc=[];this.Ba=[];this.Ba[0]=128;for(var a=1;a<this.blockSize;++a)this.Ba[a]=0;this.Ia=this.O=0;this[fcsa]()};fcS(fcX,fcKb);fcX[fc].reset=function(){this.c[0]=1732584193;this.c[1]=4023233417;this.c[2]=2562383102;this.c[3]=271733878;this.c[4]=3285377520;this.Ia=this.O=0};
fcX[fc].U=function(a,b){b||(b=0);var c=this.Uc;if(fcO(a))for(var d=0;16>d;d++)c[d]=a[fcCa](b)<<24|a[fcCa](b+1)<<16|a[fcCa](b+2)<<8|a[fcCa](b+3),b+=4;else for(d=0;16>d;d++)c[d]=a[b]<<24|a[b+1]<<16|a[b+2]<<8|a[b+3],b+=4;for(d=16;80>d;d++){var e=c[d-3]^c[d-8]^c[d-14]^c[d-16];c[d]=(e<<1|e>>>31)&4294967295}for(var f=this.c[0],l=this.c[1],k=this.c[2],m=this.c[3],n=this.c[4],g,d=0;80>d;d++)40>d?20>d?(e=m^l&(k^m),g=1518500249):(e=l^k^m,g=1859775393):60>d?(e=l&k|m&(l|k),g=2400959708):(e=l^k^m,g=3395469782),
e=(f<<5|f>>>27)+e+n+g+c[d]&4294967295,n=m,m=k,k=(l<<30|l>>>2)&4294967295,l=f,f=e;this.c[0]=this.c[0]+f&4294967295;this.c[1]=this.c[1]+l&4294967295;this.c[2]=this.c[2]+k&4294967295;this.c[3]=this.c[3]+m&4294967295;this.c[4]=this.c[4]+n&4294967295};
fcX[fc].update=function(a,b){if(null!=a){fcGa(b)||(b=a[fcG]);for(var c=b-this.blockSize,d=0,e=this.Ma,f=this.O;d<b;){if(0==f)for(;d<=c;)this.U(a,d),d+=this.blockSize;if(fcO(a))for(;d<b;){if(e[f]=a[fcCa](d),++f,++d,f==this.blockSize){this.U(e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){this.U(e);f=0;break}}this.O=f;this.Ia+=b}};
fcX[fc].digest=function(){var a=[],b=8*this.Ia;56>this.O?this[fcL](this.Ba,56-this.O):this[fcL](this.Ba,this.blockSize-(this.O-56));for(var c=this.blockSize-1;56<=c;c--)this.Ma[c]=b&255,b/=256;this.U(this.Ma);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.c[c]>>d&255,++b;return a};var fcY=function(a){this.Gb=a},fcLb=/\s*;\s*/;fcY[fc].isEnabled=function(){return navigator.cookieEnabled};fcY[fc].fc=function(a){return!/[;=\s]/[fcva](a)};fcY[fc].gc=function(a){return!/[;\r\n]/[fcva](a)};
fcY[fc].set=function(a,b,c,d,e,f){if(!this.fc(a))throw fch('Invalid cookie name "'+a+'"');if(!this.gc(b))throw fch('Invalid cookie value "'+b+'"');fcGa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";0>c?c="":(c=0==c?new Date(1970,1,1):new Date(fcPa()+1E3*c),c=";expires="+c.toUTCString());this.Hc(a+"="+b+e+d+c+f)};fcY[fc].get=function(a,b){for(var c=a+"=",d=this.sa(),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c[fcG]);if(f==a)return""}return b};
fcY[fc].remove=function(a,b,c){var d=this.V(a);this.set(a,"",0,b,c);return d};fcY[fc].C=function(){return this.qa().keys};fcY[fc].N=function(){return this.qa().values};fcY[fc].Y=function(){var a=this.Xa();return a?this.sa()[fcG]:0};fcY[fc].V=function(a){return fcGa(this.get(a))};fcY[fc].clear=function(){for(var a=this.qa().keys,b=a[fcG]-1;0<=b;b--)this.remove(a[b])};fcY[fc].Hc=function(a){this.Gb.cookie=a};fcY[fc].Xa=function(){return this.Gb.cookie};fcY[fc].sa=function(){return(this.Xa()||"")[fct](fcLb)};
fcY[fc].qa=function(){for(var a=this.sa(),b=[],c=[],d,e,f=0;e=a[f];f++)d=e[fcE]("="),-1==d?(b[fcA](""),c[fcA](e)):(b[fcA](e[fcDa](0,d)),c[fcA](e[fcDa](d+1)));return{keys:b,values:c}};var fcMb=new fcY(fce);fcMb.MAX_COOKIE_LENGTH=3950;var fcNb=function(a,b){fcea(a,b)},fcOb=function(a){a=a.className;return fcO(a)&&a[fcq](/\S+/g)||[]},fcQb=function(a,b){var c=fcOb(a),d=fcfb(arguments,1),e=c[fcG]+d[fcG];fcPb(c,d);fcNb(a,c[fcM](" "));return c[fcG]==e},fcPb=function(a,b){for(var c=0;c<b[fcG];c++)fcdb(a,b[c])||a[fcA](b[c])};var fcZ=function(){this.Ca="";this.Tc=fcRb};fcZ[fc].cc=!0;fcZ[fc].Yb=function(){return this.Ca};fcZ[fc].toString=function(){return"SafeUrl{"+this.Ca+"}"};
var fcSb=function(a){if(a instanceof fcZ&&a.constructor===fcZ&&a.Tc===fcRb)return a.Ca;fc$a("expected object of type SafeUrl, got '"+a+"'");return"type_error:SafeUrl"},fcTb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,fcWb=function(a){if(a instanceof fcZ)return a;a=a.cc?a.Yb():fci(a);a=fcTb[fcva](a)?fcUb(a):"about:invalid#zClosurez";return fcVb(a)},fcUb=function(a){try{var b=encodeURI(a)}catch(c){return"about:invalid#zClosurez"}return b[fco](fcXb,function(a){return fcYb[a]})},fcXb=/[()']|%5B|%5D|%25/g,
fcYb={"'":"%27","(":"%28",")":"%29","%5B":"[","%5D":"]","%25":"%"},fcRb={},fcVb=function(a){var b=new fcZ;b.Ca=a;return b};var fc_=function(a,b){fcj(this,a);fck(this,b)};fc_[fc].clone=function(){return new fc_(this[fcn],this[fcz])};fc_[fc].toString=function(){return"("+this[fcn]+" x "+this[fcz]+")"};fc_[fc].ceil=function(){fcj(this,fcg.ceil(this[fcn]));fck(this,fcg.ceil(this[fcz]));return this};fc_[fc].floor=function(){fcj(this,fcg.floor(this[fcn]));fck(this,fcg.floor(this[fcz]));return this};fc_[fc].round=function(){fcj(this,fcg[fcB](this[fcn]));fck(this,fcg[fcB](this[fcz]));return this};
fc_[fc].scale=function(a,b){var c="number"==typeof b?b:a;fcj(this,this[fcn]*a);fck(this,this[fcz]*c);return this};var fcZb=!fcV||fcV&&(fcU()||9<=fcBb);!fctb&&!fcV||fcV&&fcV&&(fcU()||9<=fcBb)||fctb&&fcAb("1.9.1");fcV&&fcAb("9");var fc_b=function(a){return fcO(a)?fce[fcD](a):a},fc0b=fc_b,fc1b=function(a,b,c,d){a=d||a;b=b&&"*"!=b?b.toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return c=b+(c?"."+c:""),a.querySelectorAll(c);if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,l;l=a[f];f++)b==l.nodeName&&(d[e++]=l);fcda(d,e);return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;l=a[f];f++)b=l.className,"function"==typeof b[fct]&&fcdb(b[fct](/\s+/),c)&&(d[e++]=
l);fcda(d,e);return d}return a},fc3b=function(a,b){fcgb(b,function(b,d){"style"==d?a[fcv].cssText=b:"class"==d?fcea(a,b):"for"==d?a.htmlFor=b:d in fc2b?a[fcr](fc2b[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a[fcr](d,b):a[d]=b})},fc2b={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},fc4b=function(a){a=a[fcH];
a="CSS1Compat"==a.compatMode?a.documentElement:a[fcJ];return new fc_(a.clientWidth,a.clientHeight)},fc0=function(a,b,c){return fc5b(fce,arguments)},fc5b=function(a,b){var c=b[0],d=b[1];if(!fcZb&&d&&(d[fcF]||d[fcAa])){c=["<",c];d[fcF]&&c[fcA](' name="',fc0a(d[fcF]),'"');if(d[fcAa]){c[fcA](' type="',fc0a(d[fcAa]),'"');var e={};fckb(e,d);delete e[fcAa];d=e}c[fcA](">");c=c[fcM]("")}c=a[fcia](c);d&&(fcO(d)?fcea(c,d):"array"==fcIa(d)?fcea(c,d[fcM](" ")):fc3b(c,d));2<b[fcG]&&fc6b(a,c,b,2);return c},fc6b=
function(a,b,c,d){function e(c){c&&b[fcm](fcO(c)?a.createTextNode(c):c)}for(;d<c[fcG];d++){var f=c[d];!fcJa(f)||fcKa(f)&&0<f.nodeType?e(f):fccb(fc7b(f)?fceb(f):f,e)}},fc8b=function(a){fc9a(a,"Node cannot be null or undefined.");return 9==a.nodeType?a:a.ownerDocument||a[fcH]},fc7b=function(a){if(a&&"number"==typeof a[fcG]){if(fcKa(a))return"function"==typeof a.item||"string"==typeof a.item;if("function"==fcIa(a))return"function"==typeof a.item}return!1};var fc9b="StopIteration"in fcN?fcN.StopIteration:{message:"StopIteration",stack:""},fc$b=function(){};fc$b[fc].next=function(){throw fc9b;};fc$b[fc].__iterator__=function(){return this};var fc1=function(a,b){this.m={};this.h=[];this.ia=this.H=0;var c=arguments[fcG];if(1<c){if(c%2)throw fch("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};fc1[fc].Y=function(){return this.H};fc1[fc].N=function(){this.T();for(var a=[],b=0;b<this.h[fcG];b++){var c=this.h[b];a[fcA](this.m[c])}return a};fc1[fc].C=function(){this.T();return this.h.concat()};fc1[fc].V=function(a){return fcac(this.m,a)};
fc1[fc].clear=function(){this.m={};fcda(this.h,0);this.ia=this.H=0};fc1[fc].remove=function(a){return fcac(this.m,a)?(delete this.m[a],this.H--,this.ia++,this.h[fcG]>2*this.H&&this.T(),!0):!1};fc1[fc].T=function(){if(this.H!=this.h[fcG]){for(var a=0,b=0;a<this.h[fcG];){var c=this.h[a];fcac(this.m,c)&&(this.h[b++]=c);a++}fcda(this.h,b)}if(this.H!=this.h[fcG]){for(var d={},b=a=0;a<this.h[fcG];)c=this.h[a],fcac(d,c)||(this.h[b++]=c,d[c]=1),a++;fcda(this.h,b)}};
fc1[fc].get=function(a,b){return fcac(this.m,a)?this.m[a]:b};fc1[fc].set=function(a,b){fcac(this.m,a)||(this.H++,this.h[fcA](a),this.ia++);this.m[a]=b};fc1[fc].addAll=function(a){var b;a instanceof fc1?(b=a.C(),a=a.N()):(b=fcib(a),a=fchb(a));for(var c=0;c<b[fcG];c++)this.set(b[c],a[c])};fc1[fc].forEach=function(a,b){for(var c=this.C(),d=0;d<c[fcG];d++){var e=c[d],f=this.get(e);a[fcK](b,f,e,this)}};fc1[fc].clone=function(){return new fc1(this)};
fc1[fc].__iterator__=function(a){this.T();var b=0,c=this.ia,d=this,e=new fc$b;e.next=function(){if(c!=d.ia)throw fch("The map has changed since the iterator was created");if(b>=d.h[fcG])throw fc9b;var e=d.h[b++];return a?e:d.m[e]};return e};var fcac=function(a,b){return fcaa[fc].hasOwnProperty[fcK](a,b)};var fccc=function(a,b,c){if(fcO(b))fcbc(a,c,b);else for(var d in b)fcbc(a,b[d],d)},fcbc=function(a,b,c){(c=fcdc(a,c))&&(a[fcv][c]=b)},fcec={},fcdc=function(a,b){var c=fcec[b];if(!c){var d=fc3a(b),c=d;void 0===a[fcv][d]&&(d=(fcub?"Webkit":fctb?"Moz":fcV?"ms":fcsb?"O":null)+fc4a(d),void 0!==a[fcv][d]&&(c=d));fcec[b]=c}return c},fcfc=function(a,b){var c=fc8b(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""},fcgc=function(a,
b){return fcfc(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a[fcv]&&a[fcv][b]},fchc=function(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}fcV&&a.ownerDocument[fcJ]&&(a=a.ownerDocument,b.left=b[fcwa]-(a.documentElement.clientLeft+a[fcJ].clientLeft),b.top-=a.documentElement.clientTop+a[fcJ].clientTop);return b},fckc=function(a,b,c){if(b instanceof fc_)c=b[fcz],b=b[fcn];else if(void 0==c)throw fch("missing height argument");fcic(a,b);fcjc(a,c)},fclc=function(a,
b){"number"==typeof a&&(a=(b?fcg[fcB](a):a)+"px");return a},fcjc=function(a,b){fck(a[fcv],fclc(b,!0))},fcic=function(a,b){fcj(a[fcv],fclc(b,!0))},fcmc=function(a,b){if("none"!=fcgc(b,"display"))return a(b);var c=b[fcv],d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";var l=a(b);c.display=d;c.position=f;c.visibility=e;return l},fcnc=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=fcub&&!b&&!c;return fcGa(b)&&!d||!a.getBoundingClientRect?new fc_(b,
c):(a=fchc(a),new fc_(a[fcta]-a[fcwa],a.bottom-a.top))},fcoc=function(a,b){a[fcv].display=b?"":"none"};fcV&&fcAb(12);var fcpc={},fcqc={};var fcrc=function(a,b,c,d){b=b||"800";c=c||"550";d=d||"friendconnect";a=fcc.open(a,d,"menubar=no,toolbar=no,dialog=yes,location=yes,alwaysRaised=yes,width="+b+",height="+c+",resizable=yes,scrollbars=1,status=1");fcc.focus&&a&&a.focus()},fcsc=function(a,b){var c=fca[fcx][fcI]().communityId;fca.rpc[fcK](null,"signin",null,c,a,b)};fcR("goog.peoplesense.util.openPopup",fcrc);fcR("goog.peoplesense.util.finishSignIn",fcsc);var fcvc=function(a,b){var c=fctc()+"/friendconnect/invite/friends",d=fcb(shindig[fcja][fcka]());fcuc(c,d,a,b)},fcuc=function(a,b,c,d){a+="?st="+b;c&&(a+="&customMessage="+fcb(c));d&&(a+="&customInviteUrl="+fcb(d));b=760;fcV&&(b+=25);fcrc(a,fci(b),"515","friendconnect_invite")};fcR("goog.peoplesense.util.invite",fcvc);fcR("goog.peoplesense.util.inviteFriends",fcuc);var fcwc=function(a){this.url=a};fcwc[fc].s=function(a,b){if(0<=this.url[fcE]("?"+a+"=")||0<=this.url[fcE]("&"+a+"="))throw fch("duplicate: "+a);if(null===b||void 0===b)return this;var c=0<=this.url[fcE]("?")?"&":"?";this.url+=c+a+"="+fcb(fci(b));return this};fcwc[fc].toString=function(){return this.url};var fctc=function(){return fcc[fcBa]},fcxc=function(a,b,c,d,e,f,l){b=b||"800";c=c||"550";d=d||"friendconnect";f=f||!1;fca.rpc[fcK](null,"openLightboxIframe",l,a,shindig[fcja][fcka](),b,c,d,e,null,null,null,f)},fcyc=function(a,b){var c=fca[fcx][fcI]().psinvite||"",d=new fcwc(fctc()+"/friendconnect/signin/home");d.s("st",fcc.shindig[fcja][fcka]());d.s("psinvite",c);d.s("iframeId",a);d.s("loginProvider",b);d.s("subscribeOnSignin","1");fcrc(d[fcma]());return!1},fczc=function(){var a=fca[fcx][fcI]().communityId;
fca.rpc[fcK](null,"signout",null,a)},fcBc=function(a,b){var c=fctc()+"/friendconnect/settings/edit?st="+fcb(shindig[fcja][fcka]())+(a?"&iframeId="+fcb(a):"");b&&(c=c+"&"+b);fcAc(c)},fcCc=function(a){a=fctc()+"/friendconnect/settings/siteProfile?st="+fcb(a);fcAc(a)},fcAc=function(a){var b=800;fcV&&(b+=25);fcrc(a,fci(b),"510")},fcDc=function(a,b,c,d){d=d||2;var e=null;if("text"==b)e=fc0("div",{"class":"gfc-button-text"},fc0("div",{"class":"gfc-icon"},fc0("a",{href:"javascript:void(0);"},c))),a[fcm](e);
else if("long"==b||"standard"==b)e=1==d?fc0("div",{"class":"gfc-inline-block gfc-primaryactionbutton gfc-button-base"},fc0("div",{"class":"gfc-inline-block gfc-button-base-outer-box"},fc0("div",{"class":"gfc-inline-block gfc-button-base-inner-box"},fc0("div",{"class":"gfc-button-base-pos"},fc0("div",{"class":"gfc-button-base-top-shadow",innerHTML:"&nbsp;"}),fc0("div",{"class":"gfc-button-base-content"},fc0("div",{"class":"gfc-icon"},c)))))):fc0("table",{"class":"gfc-button-base-v2 gfc-button",cellpadding:"0",
cellspacing:"0"},fc0("tbody",{"class":""},fc0("tr",{"class":""},fc0("td",{"class":"gfc-button-base-v2 gfc-button-1"}),fc0("td",{"class":"gfc-button-base-v2 gfc-button-2"},c),fc0("td",{"class":"gfc-button-base-v2 gfc-button-3"})))),a[fcm](e),"standard"==b&&(b=fc0("div",{"class":"gfc-footer-msg"},"with Google Friend Connect"),1==d&&a[fcm](fc0("br")),a[fcm](b));return e},fcEc=function(a,b){if(!a)throw"google.friendconnect.renderSignInButton: missing options";var c=a[fcv]||"standard",d=a.text,e=a.version;
if("standard"==c)d=a.text||"Sign in";else if("text"==c||"long"==c)d=a.text||"Sign in with Friend Connect";var f=a.element;if(!f){f=a.id;if(!f)throw"google.friendconnect.renderSignInButton: options[id] and options[element] == null";f=fc0b(f);if(!f)throw"google.friendconnect.renderSignInButton: element "+a.id+" not found";}fcl(f,"");c=fcDc(f,c,d,e);fcc[fcxa]?c[fcxa]("click",b,!1):c.attachEvent("onclick",b)},fcFc=function(a,b){b=b||fcQ(fcyc,null,null,null,null);fcEc(a,b)},fcGc=function(a,b){fca.rpc[fcK](null,
"putReloadViewParam",null,a,b);var c=fca.views.getParams();c[a]=b},fcHc=function(a,b){var c=new fcwc("/friendconnect/gadgetshare/friends");c.s("customMessage",a);c.s("customInviteUrl",b);c.s("container","glb");var d=310;fcV&&(d+=25);fcxc(c[fcma](),fci(d),"370")};fcR("goog.peoplesense.util.getBaseUrl",fctc);fcR("goog.peoplesense.util.finishSignIn",fcsc);fcR("goog.peoplesense.util.signout",fczc);fcR("goog.peoplesense.util.signin",fcyc);fcR("goog.peoplesense.util.editSettings",fcBc);
fcR("goog.peoplesense.util.editSSProfile",fcCc);fcR("goog.peoplesense.util.setStickyViewParamToken",fcGc);fcR("google.friendconnect.renderSignInButton",fcFc);fcR("goog.peoplesense.util.share",fcHc);fcR("goog.peoplesense.util.userAgent.IE",fcV);var fcIc={},fc2=function(a){this.j=new fc1;this.snippetId=a.id;this.site=a.site;a=a["view-params"];var b=a.skin;this.sc=(b?b.POSITION:"top")||"top";this.Vc={allowAnonymousPost:a.allowAnonymousPost||!1,scope:a.scope||"SITE",docId:a.docId||"",features:a.features||"video,comment",startMaximized:"true",disableMinMax:"true",skin:b};this.absoluteBottom=fcV&&!fcAb("7");this.fixedIeSizes=fcV;fcc[fcxa]?fcc[fcxa]("resize",fcQ(this.ob,this),!1):fcc.attachEvent("onresize",fcQ(this.ob,this));this.Cb()};
fc2[fc].Cb=function(){if(!this.site)throw fch("Must supply site ID.");if(!this.snippetId)throw fch("Must supply a snippet ID.");};fc2[fc].b=10;fc2[fc].La=1;fc2[fc].B="fc-friendbar-";fc2[fc].F=fc2[fc].B+"outer";fc2[fc].rb=fc2[fc].F+"-shadow";fc2[fc].render=function(){fce.write(this.Kb());var a=fc_b(this.snippetId);fcl(a,this.X())};fc2[fc].Lb=function(){var a=fc_b(this.F);return a=fcmc(fcnc,a)[fcn]};fc2[fc].ob=function(){for(var a=this.j.C(),b=0;b<a[fcG];b++)this.Ec(a[b]);goog&&fcpc&&fcqc&&fcJc&&fcKc("resize")};
fc2[fc].v=function(){return this.sc};fc2[fc].g=function(a){return this.B+"shadow-"+a};fc2[fc].ra=function(a){return this.B+"menus-"+a};fc2[fc].$=function(a){return this.B+a+"Target"};fc2[fc].oa=function(a){return this.B+a+"Drawer"};fc2[fc].bb=function(){return this.$("")};fc2[fc].cb=function(){return this.B+"wallpaper"};fc2[fc].Ya=function(){return this.oa("")};
fc2[fc].Kb=function(){var a=fcc.friendconnect_imageUrl+"/",b=a+"shadow_tc.png",c=a+"shadow_bc.png",d=a+"shadow_bl.png",e=a+"shadow_tl.png",f=a+"shadow_tr.png",l=a+"shadow_br.png",a=a+"shadow_cr.png",k=function(a,b){return fcV?'filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+a+'", sizingMethod="scale");':"background-image: url("+a+");background-repeat: "+b+"; "},m="position:absolute; top:";"top"!=this.v()&&(m="position:fixed; bottom:",this.absoluteBottom&&(m="position:absolute; bottom:"));
var n=c;"top"!=this.v()&&(n=b);var g=0,h=[];h[g++]='<style type="text/css">';"top"!=this.v()&&this.absoluteBottom&&(h[g++]="html, body {height: 100%; overflow: auto; };");h[g++]="#"+this.F+" {";h[g++]="background:#E0ECFF;";h[g++]="left:0;";h[g++]="height: "+(fcV?"35px;":"36px;");"top"!=this.v()&&this.absoluteBottom&&(h[g++]="margin-right: 20px;");h[g++]="padding:0;";h[g++]=m+" 0;";h[g++]="width:100%;";h[g++]="z-index:5000;";h[g++]="}";h[g++]="#"+this.rb+" {";h[g++]=k(n,"repeat-x");h[g++]="left:0;";
h[g++]="height:"+this.b+"px;";"top"!=this.v()&&this.absoluteBottom&&(h[g++]="margin-right: 20px;");h[g++]="padding:0;";h[g++]=m+(fcV?"35px;":"36px;");h[g++]="width:100%;";h[g++]="z-index:4998;";h[g++]="}";h[g++]="."+this.Ya()+" {";h[g++]="display: block;";h[g++]="padding:0;";h[g++]=m+(fcV?"34px;":"35px;");h[g++]="z-index:4999;";h[g++]="}";h[g++]="."+this.cb()+" {";h[g++]="background: white;";h[g++]="height: 100%;";h[g++]="margin-right: "+this.b+"px;";h[g++]="}";h[g++]="."+this.bb()+" {";h[g++]="border: "+
this.La+"px solid #ccc;";h[g++]="height: 100%;";h[g++]="left: 0;";h[g++]="background-image: url("+fcc.friendconnect_imageUrl+"/loading.gif);";h[g++]="background-position: center;";h[g++]="background-repeat: no-repeat;";h[g++]="}";h[g++]="."+this.g("cr")+" {";h[g++]=k(a,"repeat-y");h[g++]="height: 100%;";h[g++]="position:absolute;";h[g++]="right: 0;";h[g++]="top: 0;";h[g++]="width:"+this.b+"px;";h[g++]="}";h[g++]="."+this.g("bl")+" {";h[g++]=k(d,"no-repeat");h[g++]="height: "+this.b+"px;";h[g++]="position:absolute;";
h[g++]="width:"+this.b+"px;";h[g++]="}";h[g++]="."+this.g("tl")+" {";h[g++]=k(e,"no-repeat");h[g++]="height: "+this.b+"px;";h[g++]="position:absolute;";h[g++]="left:0px;";h[g++]="width:"+this.b+"px;";h[g++]="}";h[g++]="."+this.g("bc")+" {";h[g++]=k(c,"repeat-x");h[g++]="height: "+this.b+"px;";h[g++]="left: "+this.b+"px;";h[g++]="position:absolute;";h[g++]="right: "+this.b+"px;";h[g++]="}";h[g++]="."+this.g("tc")+" {";h[g++]=k(b,"repeat-x");h[g++]="height: "+this.b+"px;";h[g++]="left: "+this.b+"px;";
h[g++]="margin-left: "+this.b+"px;";h[g++]="margin-right: "+this.b+"px;";h[g++]="right: "+this.b+"px;";h[g++]="}";h[g++]="."+this.g("br")+" {";h[g++]=k(l,"no-repeat");h[g++]="height: "+this.b+"px;";h[g++]="position:absolute;";h[g++]="right: 0;";h[g++]="width: "+this.b+"px;";h[g++]="}";h[g++]="."+this.g("tr")+" {";h[g++]=k(f,"no-repeat");h[g++]="height: "+this.b+"px;";h[g++]="position:absolute;";h[g++]="right: 0;";h[g++]="top: 0;";h[g++]="width: "+this.b+"px;";h[g++]="}";h[g++]="</style>";return h[fcM]("")};
fc2[fc].X=function(){var a=['<div id="'+this.F+'"></div>','<div id="'+this.rb+'"></div>','<div id="'+this.ra(this.j.Y())+'"></div>'];return a[fcM]("")};fc2[fc].Eb=function(a,b,c,d){this.j.V(a)||(b=new fc3(this,a,b,c,d),c=this.j.Y(),d=fc_b(this.ra(c)),fcl(d,b.X()+'<div id="'+this.ra(c+1)+'"></div>'),this.j.set(a,b))};fc2[fc].va=function(a){(a=this.j.get(a))&&a.drawer&&fcoc(a.drawer,!1)};fc2[fc].uc=function(a){if(a=this.j.get(a))a.rendered=!1};
fc2[fc].refresh=function(){for(var a=this.j.C(),b=0;b<a[fcG];b++){var c=a[b];this.va(c);this.uc(c)}};fc2[fc].oc=function(a){for(var b=this.j.N(),c=0;c<b[fcG];c++){var d=b[c];if(d.id==a){d.Rc();break}}};fc2[fc].nc=function(a){for(var b=this.j.N(),c=0;c<b[fcG];c++){var d=b[c];if(d.id==a){d.kc();break}}};fc2[fc].Ec=function(a){(a=this.j.get(a))&&a.drawer&&a.xa()&&(a.ma(),a.Ua(),a.Ka())};
fc2[fc].Qc=function(a,b){var c=this.j.get(a);if(c){c.drawer||(c.drawer=fc_b(this.oa(c[fcF])),c.target=fc_b(this.$(c[fcF])),c.sha_bc=fc1b(fce,"div","top"==this.v()?this.g("bc"):this.g("tc"),c.drawer)[0],c.sha_cr=fc1b(fce,"div",this.g("cr"),c.drawer)[0]);for(var d=this.j.C(),e=0;e<d[fcG];e++){var f=d[e];a!==f&&this.va(f)}c.ma(b);fcoc(c.drawer,!0);fcc.setTimeout(function(){c.Ka();c.Ua();c.render()},0)}};
var fc3=function(a,b,c,d,e){this.id=-1;this.bar=a;this.name=b;this.constraints=d;this.skin=e||{};fck(this,this.skin.HEIGHT||"0");this.url=fcc[fcBa]+c;this.sha_bc=this.target=this.drawer=null;this.loaded=this.rendered=!1;this.ma()};
fc3[fc].ma=function(a){fckb(this.constraints,a||{});fckb(this.skin,this.constraints);if(this.bar.fixedIeSizes&&this.constraints[fcwa]&&this.constraints[fcta]){a=this.bar.Lb();var b=this.constraints[fcwa],c=this.constraints[fcta];a-=b+c;a%2&&(--a,this.skin.right=this.skin[fcta]+1);fcj(this.skin,a);delete this.skin[fcwa]}};
fc3[fc].Ka=function(){if(this.drawer){if(this.skin[fcn]){var a=this.bar.La,b=this.bar.b,c=fcV?2:0;fckc(this.target,this.skin[fcn],"");fckc(this.sha_bc,this.skin[fcn]-b+2*a-c,"");this.skin.rightShadow?fckc(this.drawer,this.skin[fcn]+b+2*a-c,""):fckc(this.drawer,this.skin[fcn]+2*a-c,"")}this.skin[fcta]&&(this.drawer[fcv].right=this.skin[fcta]+0+"px")}};
fc3[fc].Ua=function(){if(fcV&&this.drawer){var a=fcmc(fcnc,this.target),b=a[fcn]-this.bar.b,a=a[fcz];0>b&&(b=0);this.sha_bc&&this.sha_bc[fcv]&&fckc(this.sha_bc,b,"");this.sha_cr&&this.sha_cr[fcv]&&fckc(this.sha_cr,"",a)}};
fc3[fc].X=function(){var a="display:none;",b="position: relative; ",c="",d="",e="",f="",l=!!this.skin.rightShadow;l||(c+="display: none; ",e+="display: none; ",d+="right: 0px; ",f+="margin-right: 0px; ");for(var k in this.skin){var m=Number(this.skin[k]);l&&0==fcTa(k,"width")&&(m+=this.bar.b);0==fcTa(k,"height")&&(b+=k+": "+m+"px; ");"rightShadow"!=k&&(0==fcTa(k,"height")&&(m+=this.bar.b),0==fcTa(k,"width")&&(m+=2),a+=k+": "+m+"px; ");fcV&&0==fcTa(k,"width")&&(m=l?m-2*this.bar.b:m-this.bar.b,d+=k+
": "+m+"px; ")}fcV&&0<(this[fcz]|0)&&(l=(this[fcz]|0)+2,c+="height: "+l+"px; ");l=0;k=[];k[l++]='<div id="'+this.bar.oa(this[fcF])+'"class="'+this.bar.Ya()+'"style="'+a+'"> ';"bottom"==this.bar.v()&&(k[l++]='<div class="'+this.bar.g("tl")+'"></div> <div class="'+this.bar.g("tc")+'"style="'+d+'"></div> <div class="'+this.bar.g("tr")+'"style="'+e+'"></div> ');k[l++]='<div style="'+b+'"> <div class="'+this.bar.cb()+'"style="'+f+'"><div id="'+this.bar.$(this[fcF])+'"class="'+this.bar.bb()+'"></div> <div class="'+
this.bar.g("cr")+'"style="'+c+'"></div> </div> </div> ';"top"==this.bar.v()&&(k[l++]='<div class="'+this.bar.g("bl")+'"></div> <div class="'+this.bar.g("bc")+'"style="'+d+'"></div> <div class="'+this.bar.g("br")+'"style="'+e+'"></div> ');k[l++]="</div> ";return k[fcM]("")};fc3[fc].Rc=function(){this.rendered=this.xa()};fc3[fc].kc=function(){this.loaded=this.xa()};fc3[fc].xa=function(){return!!this.drawer&&"none"!=this.drawer[fcv].display};
fc3[fc].render=function(){if(0==this.rendered){var a={};a.url=this.url;a.id=this.bar.$(this[fcF]);a.site=this.bar.site;a["view-params"]=fcP(this.bar.Vc);"profile"==this[fcF]&&(a["view-params"].profileId="VIEWER");this.skin&&fckb(a["view-params"].skin,this.skin);a["view-params"].menuName=this[fcF];a["view-params"].opaque="true";a["view-params"].menuPosition=this.bar.sc;fck(a,"1px");fcc.google&&fcIc&&fc4&&(this.id=fc4.render(a))}};fcR("google.friendconnect.FriendBar",fc2);var fcMc=function(a){a=new fcLc(a);if(a.za()%5)throw fch();for(var b=[],c=0;0<a.za();c++)b[c]="0123456789abcdefghijklmnopqrstuv"[fcp](a.qc(5));return b[fcM]("")},fcLc=function(a){this.P=this.w=0;this.la=a};fcLc[fc].za=function(){return 8*(this.la[fcG]-this.P)-this.w};
fcLc[fc].qc=function(a){var b=0;if(a>this.za())throw fch();if(0<this.w){var b=255>>this.w&this.la[this.P],c=8-this.w,d=fcg.min(a%8,c),c=c-d,b=b>>c;a-=d;this.w+=d;8==this.w&&(this.w=0,this.P++)}for(;8<=a;)b<<=8,b|=this.la[this.P],this.P++,a-=8;0<a&&(b<<=a,b|=this.la[this.P]>>8-a,this.w=a);return b};var fcNc=(new Date).getTime(),fc5=function(){},fcOc=function(){},fcPc=function(){},fcQc=function(){};fcS(fcQc,fcPc);var fcRc=function(a){if(a)for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);if(this.viewParams)for(var c in this.viewParams)/^FC_RELOAD_.*$/[fcva](c)&&(this.viewParams[c]=null)};fcRc[fc].render=function(a){var b=this;a&&(b.Sc(),this.Nb(function(c){fccc(a,"visibility","hidden");fcl(a,c);b.refresh(a,c);c=function(a){fccc(a,"visibility","visible")};c=fcNa(c,a);fcba(c,500);b.chrome=a}))};
fcRc[fc].Nb=function(a){return this.Tb(a)};var fc6=function(a){fcRc[fcK](this,a);this.da="../../";this.rpcToken=fci(fcg[fcB](2147483647*fcg.random()))};fcS(fc6,fcRc);fc6[fc].wb="gfc_iframe_";fc6[fc].xb="friendconnect";fc6[fc].Va="";fc6[fc].Fc="rpc_relay.html";fc6[fc].ga=function(a){this.da=a};fc6[fc].Sc=function(){return this.Va=fci(fcg[fcB](2147483647*fcg.random()))};fc6[fc].pa=function(){return this.wb+this.Va+"_"+this.id};
fc6[fc].refresh=function(a,b){var c=fc4.Yc,d,e={},f=fc4.Wa(this.communityId),l=f[fct]("~"),k=fc4.Fb;if(k&&1<l[fcG]){d=l[2];var l=l[1],m=[this.specUrl,this.communityId,l,k][fcM](":");e.sig=fc4.hash(d,m);e.userId=l;e.dateStamp=k}e.container=this.xb;e.mid=this.id;e.nocache=fc4.rc;e.view=this.ja;e.parent=fc4.ba;this.debug&&(e.debug="1");this.specUrl&&(e.url=this.specUrl);this.communityId&&(k=fca[fcx][fcI]().profileId,e.communityId=this.communityId,(d=fca[fcx][fcI]().psinvite)&&(e.psinvite=d),k&&(e.profileId=
k));e.caller=fcSc();e.rpctoken=this.rpcToken;k=!1;d="";l=/Version\/3\..*Safari/;if((l=fcub&&fcmb[fcq](l))||!fc4.aa[this.specUrl]&&this.viewParams)e["view-params"]=fca[fcpa][fcua](this.viewParams),d="?viewParams="+fcb(e["view-params"]),k=!0;this.prefs&&(e.prefs=fca[fcpa][fcua](this.prefs));this.viewParams&&this.sendViewParamsToServer&&(e["view-params"]=fca[fcpa][fcua](this.viewParams));this[fcza]&&(e.locale=this[fcza]);this.secureToken&&(e.st=this.secureToken);l=fc4.ab(this.specUrl);d=l+"ifr"+d+(this.hashData?
"&"+this.hashData:"");1!=fc4.Xc||k||f||this.secureToken?f&&!e.sig&&(e.fcauth=f):e.sig||(c="get");f=this.pa();fcTc(f,d,c,e,a,b,this.rpcToken)};var fc7=function(){this.o={};this.ba="http://"+fce[fcu].host;this.ja="default";this.rc=1;this.bd=0;this.Zc="US";this.$c="en";this.ad=2147483647};fcS(fc7,fcOc);fc7[fc].I=fcRc;fc7[fc].K=new fcQc;fc7[fc].qb=function(a){this.rc=a};fc7[fc].Ta=function(a){this.Xc=a};fc7[fc].$a=function(a){return"gadget_"+a};fc7[fc].J=function(a){return this.o[this.$a(a)]};
fc7[fc].W=function(a){return new this.I(a)};fc7[fc].yb=function(a){a.id=this.Ub();this.o[this.$a(a.id)]=a};fc7[fc].pc=0;fc7[fc].Ub=function(){return this.pc++};var fcVc=function(){fc7[fcK](this);this.K=new fcUc};fcS(fcVc,fc7);fcVc[fc].I=fc6;fcVc[fc].fa=function(a){a[fcq](/^http[s]?:\/\//)||(a=fce[fcu][fcqa][fcq](/^[^?#]+\//)[0]+a);this.ba=a};fcVc[fc].S=function(a){var b=this.K.Za(a);a.render(b)};var fcUc=function(){this.Jb={}};fcS(fcUc,fcPc);
fcUc[fc].zb=function(a,b){this.Jb[a]=b;var c=fce[fcD](b).className;c||0!=c[fcG]||fcea(fce[fcD](b),"gadgets-gadget-container")};fcUc[fc].Za=function(a){return(a=this.Jb[a.id])?fce[fcD](a):null};var fc8=function(a){fc6[fcK](this,a);a=a||{};this.ja=a.view||"profile"};fcS(fc8,fc6);fc8[fc].Bb="canvas.html";fc8[fc].Hb="/friendconnect/embed/";
var fcSc=function(){var a="1"==fca[fcx][fcI]().canvas||"1"==fca[fcx][fcI]().embed,b=null;a&&(b=fca[fcx][fcI]().caller);b||(a=fce[fcu],b=a.search[fco](/([&?]?)psinvite=[^&]*(&?)/,function(a,b,e){return e?b:""}),b=a.protocol+"//"+a.hostname+(a.port?":"+a.port:"")+a.pathname+b);return b};fc8[fc].Oc=function(a){this.ja=a};fc8[fc].ua=function(){return this.ja};fc8[fc].getBodyId=function(){return this.pa()+"_body"};
fc8[fc].Tb=function(a){var b=this.specUrl;void 0===b&&(b="");var b=(fc4.ab(b)||this.da)+this.Fc,c=this.pa();fca.rpc.setRelayUrl(c,b);b='<div id="'+this.getBodyId()+'"><iframe id="'+c+'" name="'+c;b=0==this[fcz]?b+'" style="width:1px; height:1px;':b+'" style="width:100%;';this.viewParams.opaque&&(b+="background-color:white;");b+='"';b+=' frameborder="0" scrolling="no"';this.viewParams.opaque||(b+=' allowtransparency="true"');b+=this[fcz]?' height="'+this[fcz]+'"':"";b+=this[fcn]?' width="'+this[fcn]+
'"':"";b+="></iframe>";this.showEmbedThis&&(b+='<a href="javascript:void(0);" onclick="google.friendconnect.container.showEmbedDialog(\''+this.divId+"'); return false;\">Embed this</a>");b+="</div>";a(b)};
fc8[fc].Mb=function(){var a=fcSc(),a="canvas=1&caller="+fcb(a),b=fca[fcx][fcI]().psinvite;b&&(a+="&psinvite="+fcb(b));a+="&site="+fcb(this.communityId);b=fcP(this.viewParams);if(null!=b.skin)for(var c="BG_IMAGE BG_COLOR FONT_COLOR BG_POSITION BG_REPEAT ANCHOR_COLOR FONT_FACE BORDER_COLOR CONTENT_BG_COLOR CONTENT_HEADLINE_COLOR CONTENT_LINK_COLOR CONTENT_SECONDARY_TEXT_COLOR CONTENT_SECONDARY_LINK_COLOR CONTENT_TEXT_COLOR ENDCAP_BG_COLOR ENDCAP_LINK_COLOR ENDCAP_TEXT_COLOR CONTENT_VISITED_LINK_COLOR ALTERNATE_BG_COLOR".split(" "),d=
0;d<c[fcG];d++)delete b.skin[c[d]];b=fcb(fca[fcpa][fcua](b));b=b[fco]("\\","%5C");return fc4.ba+this.Bb+"?url="+fcb(this.specUrl)+(a?"&"+a:"")+"&view-params="+b};fc8[fc].M=function(a){a=a||fcd+this.Hb+this.communityId;return this.Ob(a,"embed=1")};fc8[fc].L=function(a){return'<iframe src="'+this.M(a)+'" style="height:500px" scrolling="no" allowtransparency="true" border="0" frameborder="0" ></iframe>'};
fc8[fc].Ob=function(a,b){var c=fcb(fca[fcpa][fcua](this.viewParams)),c=c[fco]("\\","%5C");return a+"?url="+fcb(this.specUrl)+(b?"&"+b:"")+"&view-params="+c};fc8[fc].Xb=function(){var a="1"==fca[fcx][fcI]().canvas||"1"==fca[fcx][fcI]().embed,b=null;a&&((b=fca[fcx][fcI]().caller)||(b="javascript:history.go(-1)"));return b};fc8[fc].Zb=function(a){var b=null;if("canvas"==a)b=this.Mb();else if("profile"==a)b=this.Xb();else return null;return fcSb(fcWb(b))};
var fc9=function(){fcVc[fcK](this);fca.rpc[fcs]("signin",fc5[fc].signin);fca.rpc[fcs]("signout",fc5[fc].signout);fca.rpc[fcs]("resize_iframe",fc5[fc].pb);fca.rpc[fcs]("set_title",fc5[fc].setTitle);fca.rpc[fcs]("requestNavigateTo",fc5[fc].nb);fca.rpc[fcs]("api_loaded",fc5[fc].Ja);fca.rpc[fcs]("createFriendBarMenu",fc5[fc].Pa);fca.rpc[fcs]("showFriendBarMenu",fc5[fc].sb);fca.rpc[fcs]("hideFriendBarMenu",fc5[fc].eb);fca.rpc[fcs]("putReloadViewParam",fc5[fc].jb);fca.rpc[fcs]("getViewParams",fc5[fc].Sa);
fca.rpc[fcs]("getContainerBaseTime",fc5[fc].Ra);fca.rpc[fcs]("openLightboxIframe",fc5[fc].ib);fca.rpc[fcs]("showMemberProfile",fc5[fc].ub);fca.rpc[fcs]("closeLightboxIframe",fcQ(this.G,this));fca.rpc[fcs]("setLightboxIframeTitle",fcQ(this.Kc,this));fca.rpc[fcs]("refreshAndCloseIframeLightbox",fcQ(this.tc,this));var a=fcWc;a[fcs]();a.vb(this,"load",this.ac);a.vb(this,"start",this.bc);this.da="../../";this.fa("");this.qb(0);this.Ta(1);this.ya=null;this.apiVersion="0.8";this.openSocialSecurityToken=
null;this.ea="";this.Qa={};this.jc=null;this.ic=!1;this.Fb=this.mc=this.lastIframeLightboxOpenArguments=this.lastLightboxCallback=this.lastLightboxDialog=null;this.Yc="post"};fcS(fc9,fcVc);fc9[fc].Ic=function(a){this.Fb=a};fc9[fc].I=fc8;fc9[fc].aa={};fc9[fc].Mc=function(a){this.ya=a};
fc9[fc].ab=function(a){var b=fc9[fc].aa[a];if(!b)if(0!==this.ya[fcE]("https://")){var b=this.Db(a),c="//";0==a[fcE]("https://")?c="https://":0==a[fcE]("http://")&&(c="http://");b=[c,b,this.ya][fcM]("")}else b=this.ya;return b};fc9[fc].Db=function(a){var b=new fcX;a=fcCb(a);b[fcL](a);b=b[fcya]();return b=fcMc(b)};
var fcXc=function(a,b){var c=b?b:fcc.top,d=c.frames;try{if(c.frameElement.id==a)return c}catch(e){}for(c=0;c<d[fcG];++c){var f=fcXc(a,d[c]);if(f)return f}return null},fcTc=function(a,b,c,d,e,f,l){var k="gfc_load_"+a;b='<html><head><style type="text/css">body {background:transparent;}</style>'+(fcV?'<script type="text/javascript">window.goback=function(){history.go(-1);};setTimeout("goback();", 0);\x3c/script>':"")+"</head><body><form onsubmit='window.goback=function(){};return false;' style='margin:0;padding:0;' id='"+
k+"' method='"+c+"' ' action='"+fca[fcx].escapeString(b)+"'>";for(var m in d)b+="<input type='hidden' name='"+fca[fcx].escapeString(m)+"' value='' >";b+="</form></body></html>";c=fcXc(a);var n;try{n=c[fcH]||c.contentWindow[fcH]}catch(g){e&&f&&(fcl(e,""),fcl(e,f),c=fcXc(a),n=c[fcH]||c.contentWindow[fcH])}l&&fca.rpc.setAuthToken(a,l);n.open();n.write(b);n.close();a=n[fcD](k);for(m in d)a[m].value=d[m];if(fcV)a.onsubmit();a.submit()};
fc9[fc].Ib=function(){var a=fca[fcx][fcI]().fcsite,b=fca[fcx][fcI]().fcprofile;a&&b&&fc4.Ha(b,a)};fc9[fc].Jc=function(a,b){this.aa[a]=b};fc9[fc].ca=function(){var a=/Version\/3\..*Safari/;if(a=fcub&&fcmb[fcq](a))fce[fcu].reload();else{null!=fc4.i&&fc4.i.refresh();for(var b in fc4.o)a=fc4.o[b],this.S(a);null!=this.lastIframeLightboxOpenArguments&&(b=this.lastIframeLightboxOpenArguments,this.G(),this.Aa[fcy](this,b))}};
fc9[fc].fa=function(a){a[fcq](/^http[s]?:\/\//)||(a=a&&0<a[fcG]&&"/"==a[fcDa](0,1)?fce[fcu][fcqa][fcq](/^http[s]?:\/\/[^\/]+\//)[0]+a[fcDa](1):fce[fcu][fcqa][fcq](/^[^?#]+\//)[0]+a);this.ba=a};fc9[fc].na=function(a){return"fcauth"+a};fc9[fc].ta=function(a){return"fcauth"+a+"-s"};fc9[fc].hash=function(a,b){var c=new fcX,d=fcJb(a,!0),c=new fcW(c,d,64),d=fcCb(b),c=c.Sb(d);return fcIb(c,!0)};fc9[fc].Wa=function(a){return a=fcMb.get(this.na(a))||fcMb.get(this.ta(a))||this.Qa[a]||""};
fc9[fc].ga=function(a){this.da=a};fc9[fc].Nc=function(a){this.ea=a};fc9[fc].W=function(a){a=new this.I(a);a.ga(this.da);return a};fc9[fc].ua=function(){return this.ja};fc9[fc].Lc=function(a){this.mc=a};var fc$=function(a){return(a=a[fcq](/_([0-9]+)$/))?fcca(a[1],10):null};
fc9[fc].ha=function(a,b,c,d,e,f){this.Wc||(this.ka(fcc[fcBa]+"/friendconnect/styles/container.css?d="+this.ea),this.Wc=!0);var l=fcYc(d);this.jc!=(l?"rtl":"ltr")&&(this.ka(fcc[fcBa]+"/friendconnect/styles/lightbox"+(l?"-rtl":"")+".css?d="+this.ea),this.jc=l?"rtl":"ltr");this.ic||(this.Ab(fcc[fcBa]+"/friendconnect/script/lightbox.js?d="+this.ea),this.ic=!0);b=b||0;if(goog.ui&&goog.ui[fcoa]){this.G();b=new goog.ui[fcoa]("lightbox-dialog",!0);var k=this;goog.events.listen(b,goog.ui[fcoa].EventType.AFTER_HIDE,
function(){k.lastLightboxCallback&&k.lastLightboxCallback();k.Oa()});b.setDraggable(!0);b.setDisposeOnHide(!0);b.setBackgroundElementOpacity(.5);b.setButtonSet(new goog.ui[fcoa].ButtonSet);this.lastLightboxDialog=b;this.lastLightboxCallback=c||null;c=b.getDialogElement();e=e||702;fccc(c,"width",fci(e)+"px");f&&fccc(c,"height",fci(f)+"px");a(b);b.getDialogElement()[fcv].direction=l?"rtl":"ltr"}else if(5>b)b++,a=fcQ(this.ha,this,a,b,c,d,e,f),fcba(a,1E3);else throw this.Oa(),fch("lightbox.js failed to load");
};fc9[fc].G=function(a){var b=this.lastLightboxDialog,c=this.lastLightboxCallback;this.lastLightboxCallback=null;null!=b&&(this.lastLightboxDialog.dispatchEvent(goog.ui[fcoa].EventType.AFTER_HIDE),b.dispose(),null!=c&&c(a))};fc9[fc].Oa=function(){this.lastIframeLightboxOpenArguments=this.lastLightboxCallback=this.lastLightboxDialog=null};fc9[fc].Kc=function(a){this.lastLightboxDialog&&this.lastLightboxDialog.setTitle(a)};fc9[fc].tc=function(){this.G();this.ca()};
fc5[fc].nb=function(a,b){var c=fc$(this.f),c=fc4.J(c),d=fcP(c.originalParams);b&&(d["view-params"]=d["view-params"]||{},d["view-params"]=b);d.locale=c[fcza];if(c.useLightBoxForCanvas)d.presentation=a,null!=fc4.lastLightboxDialog?fc4.G():fc4.tb(d);else if((c=c.Zb(a))&&fce[fcu][fcqa]!=c)if("1"==fca[fcx][fcI]().embed)try{fcc.parent.location=c}catch(e){fcc.top.location=c}else fce[fcu].href=c};
fc9[fc].tb=function(a,b){a=a||{};var c=a[fcza],d=fcYc(c),e=this;this.G();this.ha(function(b){var c=fc0("div",{},fc0("div",{id:"gadget-signin",style:"background-color:#ffffff;height:32px;"}),fc0("div",{id:"gadget-lb-canvas",style:"background-color:#ffffff;"}));b.getTitleTextElement()[fcm](fc0("div",{id:"gfc-canvas-title",style:"color:#000000;"}));b[fcEa]()[fcm](c);b.setVisible(!0);var c=fcP(a),k=fc4b(fcc),m=fcg[fcB](.7*k[fcz]),k={BORDER_COLOR:"#cccccc",ENDCAP_BG_COLOR:"#e0ecff",ENDCAP_TEXT_COLOR:"#333333",
ENDCAP_LINK_COLOR:"#0000cc",ALTERNATE_BG_COLOR:"#ffffff",CONTENT_BG_COLOR:"#ffffff",CONTENT_LINK_COLOR:"#0000cc",CONTENT_TEXT_COLOR:"#333333",CONTENT_SECONDARY_LINK_COLOR:"#7777cc",CONTENT_SECONDARY_TEXT_COLOR:"#666666",CONTENT_HEADLINE_COLOR:"#333333"};c.id="gadget-lb-canvas";fck(c,fcg.min(498,m)+"px");c.maxHeight=m;c.keepMax&&(fck(c,m),fccc(b[fcEa](),"height",m+35+"px"));c["view-params"]=c["view-params"]||{};c["view-params"].opaque=!0;c["view-params"].skin=c["view-params"].skin||{};fcOa(c["view-params"].skin,
k);e.render(c);m={id:"gadget-signin",presentation:"canvas"};m.site=c.site;m.titleDivId="gfc-canvas-title";m["view-params"]={};m["view-params"].opaque=!0;m.keepMax=c.keepMax;c.securityToken&&(m.securityToken=c.securityToken);c=fcP(k);c.ALIGNMENT=d?"left":"right";e.lb(m,c);b.reposition()},void 0,b,c)};fc5[fc].sb=function(a,b){null!=fc4.i&&fc4.i.Qc(a,b)};fc5[fc].eb=function(a){null!=fc4.i&&fc4.i.va(a)};
fc5[fc].ib=function(a,b,c,d,e,f,l,k,m,n){var g=this.f;a=a+(0<=a[fcE]("?")?"&":"?")+"iframeId="+g;fc4.Aa(a,b,c,d,e,f,l,k,m,n,this.callback)};
fc9[fc].Aa=function(a,b,c,d,e,f,l,k,m,n,g){var h=fc4b(fcc);null==d&&(d=fcg[fcB](.7*h[fcz]));null==c&&(c=fcg[fcB](.7*h[fcn]));for(var p=[],h=0;h<arguments[fcG]&&10>h;h++)p[fcA](arguments[h]);if("/"!=a[0])throw fch("lightbox iframes must be relative to fc server");var t=this,q=f?fcP(f):{},u=fci(fcg[fcB](2147483647*fcg.random())),r="gfc_lbox_iframe_"+u;fca.rpc.setAuthToken(r,u);b||(b=fc4.openSocialSecurityToken);var v=fc4.openSocialSiteId;fc4.ha(function(c){t.lastIframeLightboxOpenArguments=p;var f=
"st="+fcb(b)+"&parent="+fcb(fc4.ba)+"&rpctoken="+fcb(u);k||(q.iframeId=r,q.iurl=a,a=fcd+"/friendconnect/lightbox");var g=d-54;fck(q,g);var h='<iframe id="'+r,h=h+('" width="100%" height="'+g+'" frameborder="0" scrolling="auto"></iframe>');c.setContent(h);e&&(c.setTitle(e),n&&(g=c.getTitleTextElement(),fcQb(g,"lightbox-dialog-title-small-text")));c.setVisible(!0);m||(q.fcauth=fc4.Wa(v));a+=(0<=a[fcE]("?")?"&":"?")+f+"&communityId="+v;fcTc(r,a,"POST",q,null,null,null)},void 0,g,void 0,c,d)};
fc5[fc].Sa=function(){var a=fc$(this.f),a=fc4.J(a);return a.viewParams};fc5[fc].Ra=function(){return fcNc};fc5[fc].jb=function(a,b){var c=fc$(this.f),c=fc4.J(c);c.viewParams[a]=b};fc9[fc].ac=function(a,b){null!=fc4.i&&fc4.i.nc(b)};fc9[fc].bc=function(a,b){null!=fc4.i&&fc4.i.oc(b)};fc5[fc].Pa=function(a,b,c,d){null!=fc4.i&&fc4.i.Eb(a,b,c,d)};fc9[fc].S=function(a){var b=this.K.Za(a);a.render(b);this.K.postProcessGadget&&this.K.postProcessGadget(a)};
fc5[fc].signout=function(a){fc4.kb(fc4.na(a));fc4.kb(fc4.ta(a));fc4.Qa={};fc4.ca();return!1};fc9[fc].kb=function(a){for(var b=fce[fcu].pathname,b=b[fct]("/"),c=0;c<b[fcG];c++){for(var d=fcf(c+1),e=0;e<c+1;e++)d[e]=b[e];fcMb.remove(a,d[fcM]("/")+"/")}};
fc5[fc].pb=function(a){var b=fce[fcD](this.f);b&&0<a&&fck(b[fcv],a+"px");(b=fce[fcD](this.f+"_body"))&&0<a&&fck(b[fcv],a+"px");if(b=fc$(this.f)){var c=fc4.J(b);c&&((b=fce[fcD](c.divId))&&0<a&&(c&&c[fcra]&&c[fcra]<a&&(a=c[fcra],b[fcv].overflowY="auto"),fck(b[fcv],a+"px")),!c.keepMax&&"canvas"==c.ua()&&fc4.lastLightboxDialog&&fc4.lastLightboxDialog.reposition(),fccc(c.chrome,"visibility","visible"))}};fc5[fc].setTitle=function(a){var b=fc$(this.f),b=fc4.J(b);(b=b.titleDivId)&&fcl(fce[fcD](b),fca[fcx].escapeString(a))};
fc5[fc].signin=function(a,b,c){fcMb.set(fc4.na(a),b,31104E3,c);fcMb.set(fc4.ta(a),b,-1,c);fc4.Qa[a]=b;fc4.ca()};var fc_c=function(a){fcFc(a,fcZc)};fc9[fc].zc=function(a,b){b&&this.u(b,a);var c={};c.url=fcd+"/friendconnect/gadgets/members.xml";this.render(this.D(a,c))};fc9[fc].Bc=function(a,b){b&&this.u(b,a);var c={};c.url=fcd+"/friendconnect/gadgets/review.xml";c["view-params"]={startMaximized:"true",disableMinMax:"true",features:"review"};this.render(this.D(a,c))};
fc9[fc].Da=function(a,b){b&&this.u(b,a);var c={};c.url=fcd+"/friendconnect/gadgets/wall.xml";c["view-params"]={startMaximized:"true",disableMinMax:"true",features:"comment"};this.render(this.D(a,c))};fc9[fc].lb=function(a,b){b&&this.u(b,a);var c={};c.url=fcd+"/friendconnect/gadgets/signin.xml";fck(c,32);this.render(this.D(a,c))};
fc9[fc].wc=function(a,b){b&&this.u(b,a);a.prefs=a.prefs||{};a.sendViewParamsToServer=!0;a.prefs.hints=fcc.google_hints;var c={};c.url=fcd+"/friendconnect/gadgets/ads.xml";fck(c,90);this.render(this.D(a,c))};fc9[fc].Ga=function(a,b){if(a.id){b&&this.u(b,a);a["view-params"]=a["view-params"]||{};a["view-params"].opaque="true";this.i=new fc2(a);this.i.render();var c={};c.url=fcd+"/friendconnect/gadgets/friendbar.xml";a.id=this.i.F;fck(a,"1");this.render(this.D(a,c))}};fc9[fc].yc=fc9[fc].Ga;
fc9[fc].Fa=function(a,b){a=a||{};a.url=fcd+"/friendconnect/gadgets/signin.xml";a.site=a.site||fca[fcx][fcI]().site;fck(a,32);this.Ea(a,b)};fc9[fc].xc=fc9[fc].Fa;fc9[fc].Dc=fc9[fc].Da;fc9[fc].u=function(a,b){var c=b["view-params"];c||(c={},b["view-params"]=c);c.skin=a};fc9[fc].D=function(a,b){var c=this.hb(b,a);if(b["view-params"]){var d=b["view-params"];a["view-params"]&&(d=this.hb(d,a["view-params"]));c["view-params"]=d}return c};fc9[fc].Ac=function(a,b){b&&this.u(b,a);this.render(a)};
fc9[fc].hb=function(a,b){var c={},d;for(d in b)c[d]=b[d];for(d in a)"undefined"==typeof c[d]&&(c[d]=a[d]);return c};
fc9[fc].render=function(a){this.openSocialSiteId=a.site;a["view-params"]=a["view-params"]||{};var b=this.W({divId:a.id,specUrl:a.url,communityId:a.site,height:a[fcz],locale:a[fcza]||this.mc,secureToken:a.securityToken,titleDivId:a.titleDivId,showEmbedThis:a.showEmbedThis,useLightBoxForCanvas:a.useLightBoxForCanvas||"undefined"==typeof a.useLightBoxForCanvas&&fcc.friendconnect_lightbox,viewParams:a["view-params"],prefs:a.prefs,originalParams:a,debug:a.debug,maxHeight:a[fcra],sendViewParamsToServer:a.sendViewParamsToServer,
keepMax:a.keepMax});a.presentation&&b.Oc(a.presentation);this.yb(b);this.K.zb(b.id,a.id);fcba(function(){fc4.S(b)},0);return b.id};fc9[fc].Cc=function(a,b){a=a||{};a.presentation="canvas";this.mb(a,b)};
fc9[fc].mb=function(a,b,c){a=a||{};a.url=fca[fcx][fcI]().url;a.site=fca[fcx][fcI]().site||a.site;var d=fca[fcx][fcI]()["view-params"];d&&(a["view-params"]=fca[fcpa].parse(decodeURIComponent(d)));c&&(a["view-params"]=a["view-params"]||{},a["view-params"].useFixedHeight=!0,fck(a["view-params"],c),b=b||{},b.HEIGHT=fci(c));this.Ea(a,b)};fc9[fc].Ea=function(a,b){a=a||{};b&&this.u(b,a);"1"==fca[fcx][fcI]().canvas?a.presentation="canvas":"1"==fca[fcx][fcI]().embed&&(a.presentation="embed");fc4.render(a)};
fc9[fc].$b=function(){var a=fca[fcx][fcI]().caller;a&&fce[fcu][fcqa]!=a&&8<a[fcG]&&("http://"==a.substr(0,7)[fcFa]()||"https://"==a.substr(0,8)[fcFa]())?fce[fcu].href=a:(a=fca[fcx][fcI]().site)?fce[fcu].href=fcd+"/friendconnect/directory/site?id="+a:fcc.history.go(-1)};fc9[fc].R="";fc9[fc].Vb=function(){return this.R};fc9[fc].Gc=function(a){this.apiVersion=a};fc9[fc].ka=function(a){var b=fce[fcia]("link");b[fcr]("rel","stylesheet");b[fcr]("type","text/css");b[fcr]("href",a);fce.getElementsByTagName("head")[0][fcm](b)};
fc9[fc].Ab=function(a){var b=fce[fcia]("script");b[fcr]("src",a);b[fcr]("type","text/javascript");fce.getElementsByTagName("head")[0][fcm](b)};fc9[fc].Na=function(a){fce[fcJ]?a():fcc[fcxa]?fcc[fcxa]("load",a,!1):fcc.attachEvent("onload",a)};fc9[fc].wa=function(a){if(!a.site)throw"API not loaded, please pass in a 'site'";this.ka(fcc[fcBa]+"/friendconnect/styles/container.css?d="+this.ea);this.openSocialSiteId=a.site;this.apiLoadedCallback=a.onload;this.Na(fcQ(this.gb,this,a,"fc-opensocial-api"))};
fc9[fc].lc=fc9[fc].wa;fc9[fc].ec=function(a){var b={};b.site=this.openSocialSiteId;b["view-params"]={txnId:a};this.gb(b,"gfc-"+a)};fc9[fc].vc=function(a){var b={},c;for(c in this.o){var d=this.o[c];if(d.viewParams&&d.viewParams.txnId==a)break;else b[c]=d}this.o=b;(a=fce[fcD]("gfc-"+a))&&a.parentNode&&a.parentNode.removeChild&&a.parentNode.removeChild(a)};fc9[fc].Pb=function(){return"<Templates xmlns:fc='http://www.google.com/friendconnect/makeThisReal'>  <Namespace prefix='fc' url='http://www.google.com/friendconnect/makeThisReal'/>  <Template tag='fc:signIn'>    <div onAttach='google.friendconnect.renderSignInButton({element: this})'></div>  </Template></Templates>"};
fc9[fc].Wb=function(){return"<Templates xmlns:os='http://ns.opensocial.org/2008/markup'><Namespace prefix='os' url='http://ns.opensocial.org/2008/markup'/><Template tag='os:Name'>  <span if='${!My.person.profileUrl}'>${My.person.displayName}</span>  <a if='${My.person.profileUrl}' href='${My.person.profileUrl}'>      ${My.person.displayName}</a></Template><Template tag='os:Badge'>  <div><img if='${My.person.thumbnailUrl}' src='${My.person.thumbnailUrl}'/>   <os:Name person='${My.person}'/></div></Template><Template tag='os:PeopleSelector'>  <select onchange='google.friendconnect.PeopleSelectorOnChange(this)' name='${My.inputName}'          multiple='${My.multiple}' x-var='${My.var}' x-max='${My.max}'          x-onselect='${My.onselect}'>    <option repeat='${My.group}' value='${Cur.id}' selected='${Cur.id == My.selected}'>        ${Cur.displayName}    </option>  </select></Template></Templates>"};
var fc0c=function(a){var b;if(a.multiple){b=[];for(var c=0;c<a[fcw][fcG];c++)a[fcw][c].selected&&b[fcA](a[fcw][c].value);c=a.getAttribute("x-max");try{c*=1}catch(d){c=0}if(c&&b[fcG]>c&&a["x-selected"])for(b=a["x-selected"],c=0;c<a[fcw][fcG];c++){a[fcw][c].selected=!1;for(var e=0;e<b[fcG];e++)if(a[fcw][c].value==b[e]){a[fcw][c].selected=!0;break}}}else b=a[fcw][a.selectedIndex].value;a["x-selected"]=b;(c=a.getAttribute("x-var"))&&fcc.opensocial[fcha]&&fcc.opensocial[fcha].getDataContext().putDataSet(c,
b);if(c=a.getAttribute("x-onselect"))if(fcc[c]&&"function"==typeof fcc[c])fcc[c](b);else a["x-onselect-fn"]?a["x-onselect-fn"][fcy](a):a["x-onselect-fn"]=new Function(c)};
fc9[fc].gb=function(a,b){fcc.opensocial.template.Loader.loadContent(this.Wb());fcc.opensocial.template.Loader.loadContent(this.Pb());fcc.opensocial[fcha].processDocumentMarkup();var c=fce[fcia]("div");c.id=b;fck(c[fcv],"0px");fcj(c[fcv],"0px");c[fcv].position="absolute";c[fcv].visibility="hidden";fce[fcJ][fcm](c);var d={};d.url=fcd+"/friendconnect/gadgets/osapi-"+this.apiVersion+".xml";fck(d,0);d.id=c.id;d.site=a.site;d["view-params"]=a["view-params"];this.render(d)};
fc5[fc].Ja=function(){fc4.R=this.f;fc4.openSocialSecurityToken=this.a[0];var a=fc4.openSocialSecurityToken;fcc.opensocial[fcha].executeRequests();fcc.opensocial.template.process();fc4.apiLoadedCallback&&(a=fcNa(fc4.apiLoadedCallback,a),fcba(a,0))};fc9[fc].Z=function(a){var b=null,c;for(c in this.o)if(this.o[c].divId==a){b=this.o[c];break}return b};fc9[fc].M=function(a,b){var c=this.Z(a),d=null;c&&(d=c.M(b));return d};fc9[fc].L=function(a,b){var c=this.Z(a),d=null;c&&(d=c.L(b));return d};
fc9[fc].Pc=function(a,b){this.ha(function(c){var d=fce.createTextNode("Copy & paste this code into your site.");c[fcEa]()[fcm](d);c[fcEa]()[fcm](fce[fcia]("br"));var d=fc4.L(a,b),e=fce[fcia]("textarea");fcl(e,d);e[fcr]("style","width:500px;");c[fcEa]()[fcm](e);c.setVisible(!0)})};var fc1c="ar dv fa iw he ku pa sd tk ug ur yi".split(" "),fcYc=function(a){var b=!1;a?(a=a[fct]("_")[0],b=fcdb(fc1c,a)):b=(a=fcfc(fce[fcJ],"direction"))&&"rtl"==a;return b};
fc5[fc].ub=function(a,b){var c=0,d=null;try{var e=fc$(this.f),f=fc4.J(e),d=f.secureToken,c=f.communityId}catch(l){}b&&(c=b);fc4.Ha(a,c,this.callback,d)};fc9[fc].Ha=function(a,b,c,d){b=b||this.openSocialSiteId;a={keepMax:!0,presentation:"canvas",url:fcd+"/friendconnect/gadgets/members.xml",site:b,"view-params":{profileId:a}};d&&(a.securityToken=d);this.tb(a,c)};fc9[fc].Rb=function(a){var b=null;(a=this.Z(a))&&a.secureToken&&(b=a.secureToken);return b};
fc9[fc].Qb=function(a){var b=null;(a=this.Z(a))&&a.communityId&&(b=a.communityId);return b};var fcZc=function(a){fc4.R&&fcyc(fc4.R,a)},fc2c=function(){fc5[fc].signout(fc4.openSocialSiteId)},fc3c=function(){fcBc(fc4.R)},fc4c=function(a,b){fcvc(a,b)},fcJc=function(){this.A={}};fcJc[fc].register=function(){fca.rpc[fcs]("subscribeEventType",fc5[fc].subscribe);fca.rpc[fcs]("publishEvent",fc5[fc].publish)};fc5[fc].subscribe=function(a){var b=fcWc;b.A[a]=b.A[a]||[];a=b.A[a];a[a[fcG]]={frameId:this}};
fcJc[fc].vb=function(a,b,c){var d=this;d.A[b]=d.A[b]||[];b=d.A[b];b[b[fcG]]={container:a,callback:c}};fc5[fc].publish=function(a){var b=fcWc,c=0;this.f&&(c=fc$(this.f));b.A[a]=b.A[a]||[];for(var b=b.A[a],d=0;d<b[fcG];d++)b[d].container?b[d].callback[fcK](b[d].container,a,c):fca.rpc[fcK](b[d].frameId,a,null,a,c)};var fcKc=fcQ(fc5[fc].publish,new fc5),fcWc=new fcJc,fc4=new fc9;fc4.Na(fc4.Ib);fcR("google.friendconnect.container",fc4);fcR("google.friendconnect.container.refreshGadgets",fc4.ca);
fcR("google.friendconnect.container.setParentUrl",fc4.fa);fcR("google.friendconnect.container.setServerBase",fc4.ga);fcR("google.friendconnect.container.setServerVersion",fc4.Nc);fcR("google.friendconnect.container.createGadget",fc4.W);fcR("google.friendconnect.container.openLightboxIframe",fc4.Aa);fcR("google.friendconnect.container.renderGadget",fc4.S);fcR("google.friendconnect.container.render",fc4.render);fcR("google.friendconnect.container.goBackToSite",fc4.$b);
fcR("google.friendconnect.container.renderMembersGadget",fc4.zc);fcR("google.friendconnect.container.renderReviewGadget",fc4.Bc);fcR("google.friendconnect.container.renderCommentsGadget",fc4.Da);fcR("google.friendconnect.container.renderSignInGadget",fc4.lb);fcR("google.friendconnect.container.renderFriendBar",fc4.yc);fcR("google.friendconnect.container.renderSocialBar",fc4.Ga);fcR("google.friendconnect.container.renderCanvasSignInGadget",fc4.xc);
fcR("google.friendconnect.container.renderUrlCanvasGadget",fc4.Cc);fcR("google.friendconnect.container.renderEmbedSignInGadget",fc4.Fa);fcR("google.friendconnect.container.renderUrlEmbedGadget",fc4.mb);fcR("google.friendconnect.container.renderEmbedGadget",fc4.Ea);fcR("google.friendconnect.container.renderWallGadget",fc4.Dc);fcR("google.friendconnect.container.renderAdsGadget",fc4.wc);fcR("google.friendconnect.container.renderOpenSocialGadget",fc4.Ac);
fcR("google.friendconnect.container.setNoCache",fc4.qb);fcR("google.friendconnect.container.enableProxy",fc4.Ta);fcR("google.friendconnect.container.setDomain",fc4.Jc);fcR("google.friendconnect.container.setLockedDomainSuffix",fc4.Mc);fcR("google.friendconnect.container.setLocale",fc4.Lc);fcR("google.friendconnect.container.loadOpenSocialApi",fc4.lc);fcR("google.friendconnect.container.initOpenSocialApi",fc4.wa);fcR("google.friendconnect.container.getOpenSocialApiIframeId",fc4.Vb);
fcR("google.friendconnect.container.setApiVersion",fc4.Gc);fcR("google.friendconnect.container.getEmbedUrl",fc4.M);fcR("google.friendconnect.container.getEmbedHtml",fc4.L);fcR("google.friendconnect.container.getGadgetSecurityToken",fc4.Rb);fcR("google.friendconnect.container.getGadgetCommunityId",fc4.Qb);fcR("google.friendconnect.container.showEmbedDialog",fc4.Pc);fcR("google.friendconnect.container.showMemberProfile",fc4.Ha);fcR("google.friendconnect.requestSignIn",fcZc);
fcR("google.friendconnect.requestSignOut",fc2c);fcR("google.friendconnect.requestSettings",fc3c);fcR("google.friendconnect.requestInvite",fc4c);fcR("google.friendconnect.renderSignInButton",fc_c);fcR("google.friendconnect.container.invokeOpenSocialApiViaIframe",fc4.ec);fcR("google.friendconnect.container.removeOpenSocialApiViaIframe",fc4.vc);fcR("google.friendconnect.userAgent.WEBKIT",fcub);fcR("google.friendconnect.userAgent.IE",fcV);fcR("google.friendconnect.PeopleSelectorOnChange",fc0c);
fcR("google.friendconnect.container.setDateStamp_",fc4.Ic);
google.friendconnect.container.setServerBase('http://www-a-fc-opensocial.googleusercontent.com/ps/');google.friendconnect.container.setServerVersion('0.1-7063da8e_1245d196_0d90e69e_229f7965_a8d53ba6.7');google.friendconnect.container.setApiVersion('0.8');
google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/activities.xml', 'https://umvqpbsra7b9da3v73i9b1f1h35v9875-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/ask.xml', 'https://c5n5mdkbldclvs9c4cmka1i473qj7347-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/friendbar.xml', 'https://tc1gsfg1bpg3dh74e58frg31jhrlijmb-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/content_reveal.xml', 'https://vpkdf3e9ad3mo1u6rf6q8mkvlfh4nhb8-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/donate.xml', 'https://gdp3j78c303214vet22si9nv69isi5so-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/lamegame.xml', 'https://6odruuecb3fkc62vkrn46k05ar324r65-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/map.xml', 'https://42v8m9qahgskau24qus2aa8llgtoj86r-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/members.xml', 'https://4t4qjto8n6vcba9cabf6v2lrng9ast6r-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/newsletterSubscribe.xml', 'https://grcrlo3milo17raaukkj6qnod5edu0v0-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/poll.xml', 'https://0a3ga3vn4gfsdhlqn7pruh1qtq66jpl4-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/recommended_pages.xml', 'https://9pn9h0ef3oqan95jq679oms4lbrhvqkf-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/review.xml', 'https://bvb14dk05gfgdvof7iqdkoufuclkqhg6-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/sample.xml', 'https://kl1m4ltugaae61po1k12eouge39oohh6-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/signin.xml', 'https://9fruo8jik01ke9p21si44s2pu0vt6kk4-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/wall.xml', 'https://fp8527dih8ahqgno54vjfjeju73lvgf4-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/osapi-0.8.xml', 'https://3lijfq2nn4jrph2q8dn9vdup48cr0vv5-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setLockedDomainSuffix('-a-fc-opensocial.googleusercontent.com/ps/');
window['__ps_loaded__'] = true; 
 }google.friendconnect_ = google.friendconnect;
google.friendconnect.container.setDateStamp_('14fa62406e8');