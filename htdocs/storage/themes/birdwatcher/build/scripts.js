/*!
 * Fotorama 4.1.17 | http://fotorama.io/license/
 */
!function(a,b,c,d){"use strict";function e(a){var b="bez_"+c.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof c.easing[b]){var d=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};c.easing[b]=function(b,c,e,f,g){return f*d([a[0],a[1]],[a[2],a[3]])(c/g)+e}}return b}function f(){}function g(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function h(a){return a.match(/^m/)&&a.match(/-?\d+/g)[4]}function i(a){return lc?+h(a.css("transform")):+a.css("left").replace("px","")}function j(a){var b={};return lc?b.transform="translate3d("+a+"px,0,0)":b.left=a,b}function k(a){return{"transition-duration":a+"ms"}}function l(a,b){return+String(a).replace(b||"px","")}function m(a){return/%$/.test(a)&&l(a,"%")}function n(a){return(!!l(a)||!!l(a,"%"))&&a}function o(a,b,c,d){return(a-(d||0))*(b+(c||0))}function p(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function q(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};c.addEventListener(d[T.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn.call(this)}),b.tEnd=!0}}function r(a,b,c){var d,e=a.data();e&&(e.onEndFn=function(){d||(c.call(this),d=!0)},e.tProp=b,q(a))}function s(a){if(lc?a.css(k(0)).data("onEndFn",f):a.stop(),a.length){var b=i(a);return a.css(j(b)),b}}function t(a,b){return Math.round(a+(b-a)/1.5)}function u(){return u.p=u.p||("https://"===location.protocol?"https://":"http://"),u.p}function v(a){var c=b.createElement("a");return c.href=a,c}function w(a,b){if("string"!=typeof a)return a;a=v(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d}:!1}function x(a,b,d){var e,f,g=a.video;return"youtube"===g.type?(f=u()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?c.ajax({url:u()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(c){a.thumbsReady=!0,y(b,{img:c[0].thumbnail_large,thumb:c[0].thumbnail_small},a.i,d)}}):a.thumbsReady=!0,{img:e,thumb:f}}function y(a,b,c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e];if(g.i===c&&g.thumbsReady){d.splice(e,1,{i:c,video:g.video,videoReady:!0,caption:g.caption,img:g.img||b.img,thumb:g.thumb||b.thumb,id:g.id,fit:g.fit});break}}}function z(a){function b(a,b){var c=a.data(),d=a.children("img").eq(0),e=a.attr("href"),f=a.attr("src"),g=d.attr("src"),h=c.video,i=b?w(e,h===!0):!1;return i?e=!1:i=w(h,h),{video:i,img:c.img||e||f||g,thumb:c.thumb||g||f||e}}var d=[];return a.children().each(function(){var a=c(this),e=c.extend(a.data(),{id:a.attr("id")});if(a.is("a, img"))c.extend(e,b(a,!0));else{if(a.is(":empty"))return;c.extend(e,{html:this,_html:a.html()})}d.push(e)}),d}function A(a){return 0===a.offsetWidth&&0===a.offsetHeight}function B(a,b,c){a()?b():setTimeout(function(){B(a,b)},c||100)}function C(a){location.replace(location.protocol+"//"+location.host+location.pathname.replace(/^\/?/,"/")+location.search+"#"+a)}function D(a,b,c){var d=a.data(),e=d.measures;if(e&&(!d.l||d.l.W!==e.width||d.l.H!==e.height||d.l.r!==e.ratio||d.l.w!==b.w||d.l.h!==b.h||d.l.m!==c)){var f=e.width,h=e.height,i=b.w/b.h,j=e.ratio>=i,k="scale-down"===c,l="contain"===c,m="cover"===c;j&&(k||l)||!j&&m?(f=g(b.w,0,k?f:1/0),h=f/e.ratio):(j&&m||!j&&(k||l))&&(h=g(b.h,0,k?h:1/0),f=h*e.ratio),a.css({width:Math.round(f),height:Math.round(h),marginLeft:Math.round(-f/2),marginTop:Math.round(-h/2)}),d.l={W:e.width,H:e.height,r:e.ratio,w:b.w,h:b.h,m:c}}}function E(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function F(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function G(a,b,c){if(!c)return!1;var d;if(!isNaN(a))return+a;for(var e=0,f=b.length;f>e;e++){var g=b[e];if(g.id===a){d=e;break}}return d}function H(a,b,d){d=d||{},a.each(function(){var a,e=c(this),g=e.data();g.clickOn||(g.clickOn=!0,c.extend(M(e,{onStart:function(b){a=b,(d.onStart||f).call(this,b)},onMove:d.onMove||f,onEnd:function(c){c.moved||d.tail.checked||b.call(this,a)}}),d.tail))})}function I(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function J(a,b){var d=Math.round(b.pos),e=b.onEnd||f;"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(d=b.overPos,e=function(){J(a,c.extend({},b,{overPos:b.pos,time:Math.max(oc,b.time/2)}))});var g=j(d);lc?(a.css(c.extend(k(b.time),g)),b.time>10?r(a,"transform",e,b.time):e()):a.stop().animate(g,b.time,uc,e)}function K(a,b,d,e){var g=a,h=b,i="crossfade"===e.method;a=a||c(a),b=b||c(b);var j=function(){j.done||((e.onEnd||f)(),j.done=!0)},l=k(e.time),m=k(0),n={opacity:0},o={opacity:1};d.removeClass(Ib+" "+Hb),a.addClass(Ib),b.addClass(Hb),lc?(s(a),s(b),i&&h&&a.css(c.extend(m,n)).width(),a.css(c.extend(i?l:m,o)),b.css(c.extend(l,n)),e.time>10&&(g||h)?(r(a,"opacity",j,e.time),r(b,"opacity",j,e.time)):j()):(a.stop(),b.stop(),h&&a.fadeTo(0,0),a.fadeTo(e.time,1,j),i&&b.fadeTo(e.time,0),g||h||j())}function L(a,b){a._x=b?a.touches[0].pageX:a.pageX,a._y=b?a.touches[0].pageY:a.pageY}function M(a,b){function d(a){return m=c(a.target),s.checked=i=l=p=q=!1,h||k||a.touches&&a.touches.length>1||a.which>1||$&&$.type!==a.type&&ab||(p=b.select&&m.is(b.select,r))?p:(o=a.type.match("touch"),q=m.is("a, a *",r),L(a,o),$=a,_=a.type.replace(/down|start/,"move"),j=a,n=s.control,(b.onStart||f).call(r,a,{control:n,$target:m}),h=k=!0,o||a.preventDefault(),void 0)}function e(a){if(!h||a.touches&&a.touches.length>1)return g(),void 0;if(_===a.type){L(a,o);var c=Math.abs(a._x-j._x),d=Math.abs(a._y-j._y),e=c-d,k=!s.stable||e>=3,m=-3>=e;l||(l=!(!k&&!m)),o&&!s.checked?((k||m)&&(s.checked=!0,i=k),(!s.checked||i)&&a.preventDefault()):!o||i?(a.preventDefault(),(b.onMove||f).call(r,a)):h=!1,s.checked=s.checked||k||m}}function g(a){var c=h;k=s.control=h=!1,!c||q&&!s.checked||(a&&a.preventDefault(),ab=!0,clearTimeout(bb),bb=setTimeout(function(){ab=!1},1e3),(b.onEnd||f).call(r,{moved:!!l,$target:m,control:n,startEvent:j,aborted:!a,touch:o}))}var h,i,j,k,l,m,n,o,p,q,r=a[0],s={};return r.addEventListener&&(r.addEventListener("touchstart",d),r.addEventListener("touchmove",e),r.addEventListener("touchend",g)),a.on("mousedown",d),ic.on("mousemove",e).on("mouseup",g),a.on("click","a",function(a){s.checked&&a.preventDefault()}),s}function N(a,b){function d(c){k=l=c._x,p=[[(new Date).getTime(),k]],m=n=s(a),z=C.stable=!(m%v),!z&&c.preventDefault(),(b.onStart||f).call(A,c,{pos:m})}function e(a,b){r=B.minPos,u=B.maxPos,v=B.snap,w=a.altKey,y=!1,x=b.control,x||d(a)}function h(c){x&&(x=!1,d(c)),l=c._x,p.push([(new Date).getTime(),l]),n=m-(k-l),o=F(n,r,u),r>=n?n=t(n,r):n>=u&&(n=t(n,u)),C.noMove||(a.css(j(n)),y||(y=!0,Z.addClass("grabbing"))),(b.onMove||f).call(A,c,{pos:n,edge:o})}function i(a){if(!x){Z.removeClass("grabbing"),q=(new Date).getTime();for(var d,e,h,i,j,k,o,s,t,y=q-nc,z=null,B=oc,C=b.friction,D=p.length-1;D>=0;D--){if(d=p[D][0],e=Math.abs(d-y),null===z||h>e)z=d,i=p[D][1];else if(z===y||e>h)break;h=e}o=g(n,r,u);var E=i-l,F=E>=0,G=q-z,H=G>nc,I=!H&&n!==m&&o===n;v&&(o=g(Math[I?F?"floor":"ceil":"round"](n/v)*v,r,u),r=u=o),I&&(v||o===n)&&(t=-(E/G),B*=g(Math.abs(t),b.timeLow,b.timeHigh),j=Math.round(n+t*B/C),v||(o=j),(!F&&j>u||F&&r>j)&&(k=F?r:u,s=j-k,v||(o=k),s=g(o+.03*s,k-50,k+50),B=Math.abs((n-s)/(t/C)))),B*=w?10:1,(b.onEnd||f).call(A,c.extend(a,{pos:n,newPos:o,overPos:s,time:B,moved:H&&v||a.moved}))}}var k,l,m,n,o,p,q,r,u,v,w,x,y,z,A=a[0],B=a.data(),C={};return C=c.extend(M(b.$wrap,{onStart:e,onMove:h,onEnd:i,select:b.select,control:b.control}),C)}function O(a){P(!0),vc.appendTo(a),db=0,wc(),cb=setInterval(wc,200)}function P(a){a||vc.detach(),clearInterval(cb)}var Q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},R=new RegExp("[&<>\"'/]","g"),S={escape:function(a){return null==a?"":(""+a).replace(R,function(a){return Q[a]})}},T=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),U={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},V="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)U.ok=!0;else for(var W=0,X=V.length;X>W;W++)if(U.prefix=V[W],"undefined"!=typeof b[U.prefix+"CancelFullScreen"]){U.ok=!0;break}U.ok&&(U.event=U.prefix+"fullscreenchange",U.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},U.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},U.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var Y,Z,$,_,ab,bb,cb,db,eb="fotorama",fb="fullscreen",gb=eb+"__wrap",hb=gb+"--not-ready",ib=gb+"--css3",jb=gb+"--video",kb=gb+"--fade",lb=gb+"--slide",mb=gb+"--no-controls",nb=eb+"__stage",ob=nb+"__frame",pb=ob+"--video",qb=nb+"__shaft",rb=nb+"--only-active",sb=eb+"__grab",tb=eb+"__arr",ub=tb+"--disabled",vb=tb+"--prev",wb=tb+"--next",xb=tb+"__arr",yb=eb+"__nav",zb=yb+"-wrap",Ab=yb+"__shaft",Bb=yb+"--dots",Cb=yb+"--thumbs",Db=yb+"__frame",Eb=Db+"--dot",Fb=Db+"--thumb",Gb=eb+"__fade",Hb=Gb+"-front",Ib=Gb+"-rear",Jb=eb+"__shadow",Kb=Jb+"s",Lb=Kb+"--left",Mb=Kb+"--right",Nb=eb+"__active",Ob=eb+"__select",Pb=eb+"--hidden",Qb=eb+"--fullscreen",Rb=eb+"__fullscreen-icon",Sb=eb+"__error",Tb=eb+"__loading",Ub=eb+"__loaded",Vb=Ub+"--full",Wb=Ub+"--img",Xb=eb+"__load",Yb=eb+"__img",Zb=Yb+"--full",$b=eb+"__dot",_b=eb+"__thumb",ac=_b+"-border",bc=eb+"__html",cc=eb+"__video",dc=cc+"-play",ec=cc+"-close",fc=eb+"__caption",gc=eb+"__oooo",hc=c(a),ic=c(b),jc="CSS1Compat"===b.compatMode,kc="quirks"===b.location.hash.replace("#",""),lc=T.csstransforms3d&&!kc,mc=U.ok,nc=300,oc=333,pc=5e3,qc=2,rc=64,sc=500,tc=333,uc=e([.1,0,.25,1]),vc=c(I("",I(gc))),wc=function(){vc.attr("class",gc+" "+gc+"--"+db),db++,db>4&&(db=0)};jQuery.Fotorama=function(e,f){function h(){c.each(Fc,function(a,b){if(!b.i){b.i=id++;var c=w(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=x(b,Fc,ed),y(Fc,{img:d.img,thumb:d.thumb},b.i,ed)}}})}function i(){Fc=ed.data=Fc||z(e),Gc=ed.size=Fc.length,h(),Gd=L(Gd),cb.ok=!1,Gc&&(cd||(e.html("").append(md),c.Fotorama.size++,cd=!0))}function q(){Kd.noMove=2>Gc||Jc||Vc,od.toggleClass(sb,!Kd.noMove)}function r(a){a===!0&&(a=""),f.autoplay=Math.max(Number(a)||pc,1.5*oc)}function t(a){return a?"add":"remove"}function u(){Vc="crossfade"===f.transition||"dissolve"===f.transition,Qc=f.loop&&(Gc>2||Vc);var a={add:[],remove:[]};Gc>1?(Rc=f.nav,Sc="top"===f.navPosition,a.remove.push(Ob),sd.show(),db()):(Rc=!1,sd.hide()),a[t(Gc>1)].push("fotorama__wrap--navigation"),f.autoplay&&r(f.autoplay),Wc=l(f.thumbWidth)||rc,Xc=l(f.thumbHeight)||rc,q(),gc(f,!0),Rc===!0||"dots"===Rc?(ud.addClass(Bb).removeClass(Cb),$(Gc,"navDot")):"thumbs"===Rc?(E(kd,c.Fotorama.jst.style({w:Wc,h:Xc,m:qc,s:gd,q:!jc})),ud.addClass(Cb).removeClass(Bb),$(Gc,"navThumb")):(Rc=!1,ud.removeClass(Cb+" "+Bb)),Tc=f.allowFullScreen,e.insertAfter(ld).removeClass(Pb),Rc&&Sc?td.insertBefore(nd):td.insertAfter(nd),Tc?(Ed.appendTo(nd),Uc=mc&&"native"===Tc):(Ed.detach(),Uc=!1),a[t(Vc)].push(kb),a[t(!Vc)].push(lb),P(),md.addClass(a.add.join(" ")).removeClass(a.remove.join(" ")),Id=c.extend({},f)}function v(a){return 0>a?(Gc+a%Gc)%Gc:a>=Gc?a%Gc:a}function L(a){return g(a,0,Gc-1)}function M(a){return a>0||Qc?a-1:!1}function Q(a){return Gc-1>a||Qc?a+1:!1}function R(){Bd.minPos=Qc?-1/0:-o(Gc-1,Jd.w,qc,Lc),Bd.maxPos=Qc?1/0:-o(0,Jd.w,qc,Lc),Bd.snap=Jd.w+qc}function S(){Cd.minPos=Math.min(0,Jd.w-vd.width()),Cd.maxPos=0,Ld.noMove=Cd.minPos===Cd.maxPos,vd.toggleClass(sb,!Ld.noMove)}function T(a,b,d){if("number"==typeof a){a=new Array(a);var e=!0}return c.each(a,function(a,c){if(e&&(c=a),"number"==typeof c){var f=Fc[v(c)],g="$"+b+"Frame",h=f[g];d.call(this,a,c,f,h,g,h&&h.data())}})}function V(a,b,c,d){(!Yc||"*"===Yc&&d===Hd)&&(a=n(f.width)||n(a)||sc,b=n(f.height)||n(b)||tc,ed.resize({width:a,ratio:f.ratio||c||a/b},0,d===Hd?!0:"*"))}function W(a,b,d,e,g){T(a,b,function(a,h,i,j,k,l){function m(a){var b=v(h);kc(a,{index:b,src:w,frame:Fc[b]})}function n(){s.remove(),c.Fotorama.cache[w]="error",i.$html&&"stage"===b||!x||x===w?(w&&!l.$html?(j.trigger("f:error").removeClass(Tb).addClass(Sb),m("error")):"stage"===b&&(j.trigger("f:load").removeClass(Tb+" "+Sb).addClass(Ub),m("load"),V()),l.state="error",!(Gc>1)||i.html||i.deleted||i.video||q||(i.deleted=!0,ed.splice(h,1))):(i[u]=w=x,W([h],b,d,e,!0))}function o(){var a=s.width(),g=s.height(),k=a/g;t.measures={width:a,height:g,ratio:k},V(a,g,k,h),s.off("load error").addClass(Yb+(q?" "+Zb:"")).prependTo(j),D(s,d||Jd,e||i.fit||f.fit),c.Fotorama.cache[w]="loaded",l.state="loaded",setTimeout(function(){j.trigger("f:load").removeClass(Tb+" "+Sb).addClass(Ub+" "+(q?Vb:Wb)),"stage"===b&&m("load")},5)}function p(){B(function(){return!A(r)},function(){o()})}if(j){var q=ed.fullScreen&&i.full&&!l.$full&&"stage"===b;if(!l.$img||g||q){var r=new Image,s=c(r),t=s.data();l[q?"$full":"$img"]=s;var u="stage"===b?q?"full":"img":"thumb",w=i[u],x=q?null:i["stage"===b?"thumb":"img"];if("navThumb"===b&&(j=l.$wrap),!w)return n(),void 0;c.Fotorama.cache[w]?function y(){"error"===c.Fotorama.cache[w]?n():"loaded"===c.Fotorama.cache[w]?p():setTimeout(y,100)}():(c.Fotorama.cache[w]="*",s.on("load",p).on("error",n)),r.src=w,s.appendTo(c.Fotorama.$load)}}})}function X(){var a=ed.activeFrame[yd];a&&!a.data().state&&(O(a),a.on("f:load f:error",function(){a.off("f:load f:error"),P()}))}function $(a,b){T(a,b,function(a,d,e,g,h,i){if(!g)if(g=e[h]=md[h].clone(),i=g.data(),i.data=e,"stage"===b){if(e.html&&(c(e.html).html(e._html),c('<div class="'+bc+'"></div>').append(e.html).appendTo(g)),f.captions&&e.caption&&c('<div class="'+fc+'"></div>').append(e.caption).appendTo(g),e.video){var j=Fd.clone();H(j,function(){ed.playVideo()},{onStart:function(a){nc.call(this,a),Kd.control=!0},tail:Kd}),g.addClass(pb).append(j)}pd=pd.add(g)}else"navDot"===b?wd=wd.add(g):"navThumb"===b&&(i.$wrap=g.children(":first"),xd=xd.add(g),e.video&&g.append(Fd.clone()))})}function _(a,b,c){return a&&a.length&&D(a,b,c)}function ab(a){T(a,"stage",function(a,b,d,e,g,h){if(e){e.css(c.extend({left:Vc?0:o(b,Jd.w,qc,Lc)},Vc&&k(0))),h.appended||(e.appendTo(od),h.appended=!0,zc(d.$video));var i=d.fit||f.fit;_(h.$img,Jd,i),_(h.$full,Jd,i)}})}function bb(a,b){if("thumbs"===Rc&&!isNaN(a)){var d=Wc+qc,e=L(p(a+d,d)),f=L(p(a-Jd.w,d)),g={};g.w=Wc,g.h=Xc,xd.each(function(){var a=c(this),d=a.data(),h=d.eq,i="cover";e>h||h>f||_(d.$img,g,i)||b&&W([h],"navThumb",g,i)})}}function cb(a,b,d){cb.ok||(a=a.filter(function(){for(var a,b=c(this),d=b.data(),e=0,f=Fc.length;f>e;e++){var g=Fc[e];if(d.data===g){a=!0,d.eq=e;break}}return a||b.remove(),a}).sort(function(a,b){return c(a).data().eq-c(b).data().eq}).appendTo(b),d&&S(),cb.ok=!0)}function db(){sd.each(function(a){c(this).toggleClass(ub,!Qc&&(0===Gd&&0===a||Gd===Gc-1&&1===a)&&!Jc)})}function Gb(a){return a.position().left+Wc/2}function Hb(a){J(Dd,{time:.9*a,pos:Gb(ed.activeFrame[Ic])})}function Ib(a){if(Fc[a.guessIndex][Ic]){var b=g(a.coo-Gb(Fc[a.guessIndex][Ic]),Cd.minPos,Cd.maxPos),c=.9*a.time;J(vd,{time:c,pos:b,onEnd:function(){bb(b,!0)}}),c&&bb(b),yc(ud,F(b,Cd.minPos,Cd.maxPos))}}function Jb(){if("thumbs"===Rc)Hc=xd,Ic=Ad;else{if(!Rc)return;Hc=wd,Ic=zd}cb(Hc,vd,!0),Hc.removeClass(Nb),ed.activeFrame[Ic].addClass(Nb)}function cc(){Lc=Mc=Gd;var a=ed.activeFrame,b=a[yd];b&&(pd.not(ed.activeFrame[yd].addClass(Nb)).detach().data("appended",!1).removeClass(Nb),s(od),od.css(j(0)),ab([Gd,Oc,Pc]),R(),S())}function gc(a,b){a&&c.extend(Jd,{width:a.width||Jd.width,height:a.height,minWidth:a.minWidth,maxWidth:a.maxWidth,minHeight:a.minHeight,maxHeight:a.maxHeight,ratio:function(a){if(a){var b=Number(a);return isNaN(b)?(b=a.split("/"),Number(b[0]/b[1])||d):b}}(a.ratio)})&&!b&&c.extend(f,{width:Jd.width,height:Jd.height,minWidth:Jd.minWidth,maxWidth:Jd.maxWidth,minHeight:Jd.minHeight,maxHeight:Jd.maxHeight,ratio:Jd.ratio})}function kc(a,b){e.trigger(eb+":"+a,[ed,b])}function nc(){f.stopAutoplayOnTouch?ed.stopAutoplay():ad=!0}function uc(){ad=!(!Jc&&!bd)}function vc(){if(clearTimeout(vc.t),!f.autoplay||ad)return ed.autoplay&&(ed.autoplay=!1,kc("stopautoplay")),void 0;ed.autoplay||(ed.autoplay=!0,kc("startautoplay"));var a=Gd;vc.t=setTimeout(function(){var b=ed.activeFrame[yd].data();B(function(){return b.state||a!==Gd},function(){ad||a!==Gd||ed.show({index:v(Gd+1)})})},f.autoplay)}function wc(){ed.fullScreen&&(ed.fullScreen=!1,mc&&U.cancel(hd),Z.removeClass(fb),e.removeClass(Qb).insertAfter(ld),kc("fullscreenexit"),Jd=c.extend({},dd),zc(Jc,!0),ed.resize(),W([Gd,Oc,Pc],"stage"),hc.scrollLeft($c).scrollTop(Zc))}function yc(a,b){a.removeClass(Lb+" "+Mb),b&&!Jc&&a.addClass(b.replace(/^|\s/g," "+Kb+"--"))}function zc(a,b,c){b&&(md.removeClass(jb),Jc=!1,q()),a&&a!==Jc&&(a.remove(),kc("unloadvideo")),c&&(uc(),vc())}function Ac(a){md.toggleClass(mb,a)}function Bc(a,b){Jc?zc(Jc,!0,!0):b?Ac():ed.show({index:a.shiftKey||a._x-nd.offset().left<Jd.w/3?"<":">",slow:a.altKey,direct:!0})}function Cc(a,b){var d=c(this).data().eq;ed.show({index:d,slow:a.altKey,direct:!0,coo:a._x-ud.offset().left,time:b})}function Dc(){i(),u(),Ec.ok||(f.hash&&location.hash&&(Hd=G(location.hash.replace(/^#/,""),Fc,0===fd)),Hd=(Qc?v(Hd):L(Hd))||0,Gd=Lc=Mc=Nc=Hd),Gc?(Jc&&zc(Jc,!0),ed.show({index:Gd,time:0}),ed.resize()):ed.destroy()}function Ec(){Ec.ok||(Ec.ok=!0,md.removeClass(hb),kc("ready"))}Y=Y||c("html"),Z=Z||c("body"),c.Fotorama.$load=c.Fotorama.$load||c('<div class="'+Xb+'"></div>').appendTo(Z);var Fc,Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,_c,ad,bd,cd,dd,ed=this,fd=xc,gd=(new Date).getTime(),hd=e.addClass(eb+gd)[0],id=1,jd=e.data(),kd=c("<style></style>").insertBefore(e),ld=c(I(Pb)).insertBefore(e),md=c(I(gb+" "+hb)),nd=c(I(nb)).appendTo(md),od=(nd[0],c(I(qb)).appendTo(nd)),pd=c(),qd=c(I(tb+" "+vb,I(xb))),rd=c(I(tb+" "+wb,I(xb))),sd=qd.add(rd).appendTo(nd),td=c(I(zb)),ud=c(I(yb)).appendTo(td),vd=c(I(Ab)).appendTo(ud),wd=c(),xd=c(),yd="$stageFrame",zd="$navDotFrame",Ad="$navThumbFrame",Bd=od.data(),Cd=vd.data(),Dd=c(I(ac)).appendTo(vd),Ed=c(I(Rb)),Fd=c(I(dc)),Gd=(c(I(ec)).appendTo(nd),!1),Hd=!1,Id={},Jd={},Kd={},Ld={};md[yd]=c(I(ob)),md[Ad]=c(I(Db+" "+Fb,I(_b))),md[zd]=c(I(Db+" "+Eb,I($b))),lc&&md.addClass(ib),jd.fotorama=this,ed.options=f,xc++,ed.startAutoplay=function(a){return ed.autoplay?this:(ad=bd=!1,r(a||f.autoplay),vc(),this)},ed.stopAutoplay=function(){return ed.autoplay&&(ad=bd=!0,vc()),this},ed.show=function(a){function b(){X(),W([Gd,Oc,Pc],"stage"),cc(),kc("showend",a.direct),uc(),vc()}var c,d,e=oc;if("object"!=typeof a?(c=a,a={}):(c=a.index,e="number"==typeof a.time?a.time:e,d=a.overPos),a.slow&&(e*=10),c=">"===c?Mc+1:"<"===c?Mc-1:"<<"===c?0:">>"===c?Gc-1:c,c=isNaN(c)?G(c,Fc,!0):c,c="undefined"==typeof c?Gd||0:c,ed.activeIndex=Gd=Qc?v(c):L(c),Oc=M(Gd),Pc=Q(Gd),Mc=Qc?c:Gd,ed.activeFrame=Kc=Fc[Gd],zc(!1,Kc.i!==Fc[v(Lc)].i),$([Gd,Oc,Pc],"stage"),ab([Mc]),kc("show",a.direct),Vc){var h=Kc[yd],i=Gd!==Nc?Fc[Nc][yd]:null;K(h,i,pd,{time:e,method:f.transition,onEnd:b})}else J(od,{pos:-o(Mc,Jd.w,qc,Lc),overPos:d,time:e,onEnd:b});if(db(),Jb(),Rc){var j=L(Gd+g(Mc-Nc,-1,1)),k="undefined"==typeof a.coo;(k||j!==Gd)&&Ib({time:e,coo:k?Jd.w/2:a.coo,guessIndex:k?Gd:j})}return"thumbs"===Rc&&Hb(e),_c="undefined"!=typeof Nc&&Nc!==Gd,Nc=Gd,f.hash&&_c&&!ed.eq&&C(Kc.id||Gd+1),this},ed.requestFullScreen=function(){return Tc&&!ed.fullScreen&&(Zc=hc.scrollTop(),$c=hc.scrollLeft(),hc.scrollTop(0).scrollLeft(0),dd=c.extend({},Jd),e.addClass(Qb).appendTo(Z.addClass(fb)),zc(Jc,!0),ed.fullScreen=!0,Uc&&U.request(hd),ed.resize(),W([Gd,Oc,Pc],"stage"),kc("fullscreenenter")),this},ed.cancelFullScreen=function(){return Uc&&U.is()?U.cancel(b):wc(),this},b.addEventListener&&b.addEventListener(U.event,function(){U.is()||Jc||wc()}),ic.on("keydown",function(a){Jc&&27===a.keyCode?(a.preventDefault(),zc(Jc,!0,!0)):(ed.fullScreen||f.keyboard&&!fd)&&(27===a.keyCode?(a.preventDefault(),ed.cancelFullScreen()):39===a.keyCode||40===a.keyCode&&ed.fullScreen?(a.preventDefault(),ed.show({index:">",slow:a.altKey,direct:!0})):(37===a.keyCode||38===a.keyCode&&ed.fullScreen)&&(a.preventDefault(),ed.show({index:"<",slow:a.altKey,direct:!0})))}),fd||ic.on("keydown","textarea, input, select",function(a){ed.fullScreen||a.stopPropagation()}),ed.resize=function(b){if(Fc){gc(ed.fullScreen?{width:"100%",maxWidth:null,minWidth:null,height:"100%",maxHeight:null,minHeight:null}:b,ed.fullScreen);var c=arguments[1]||0,d=arguments[2],e=Jd.width,f=Jd.height,h=Jd.ratio,i=a.innerHeight-(Rc?ud.height():0);return n(e)&&(md.css({width:e,minWidth:Jd.minWidth,maxWidth:Jd.maxWidth}),e=Jd.w=md.width(),f=m(f)/100*i||l(f),f=f||h&&e/h,f&&(e=Math.round(e),f=Jd.h=Math.round(g(f,m(Jd.minHeight)/100*i||l(Jd.minHeight),m(Jd.maxHeight)/100*i||l(Jd.maxHeight))),cc(),nd.addClass(rb).stop().animate({width:e,height:f},c,function(){nd.removeClass(rb)}),Rc&&(ud.stop().animate({width:e},c).css({left:0}),Ib({guessIndex:Gd,time:c,coo:Jd.w/2}),"thumbs"===Rc&&cb.ok&&Hb(c)),Yc=d||!0,Ec())),this}},ed.setOptions=function(a){return c.extend(f,a),Dc(),this},ed.destroy=function(){return ed.stopAutoplay(),md.detach(),e.html(jd.urtext),cd=!1,Fc=ed.data=null,c.Fotorama.size--,this},ed.playVideo=function(){var a=ed.activeFrame,b=a.video,d=Gd;return"object"==typeof b&&a.videoReady&&(Uc&&ed.fullScreen&&ed.cancelFullScreen(),B(function(){return!U.is()||d!==Gd},function(){d===Gd&&(a.$video=a.$video||c(c.Fotorama.jst.video(b)),a.$video.appendTo(a[yd]),md.addClass(jb),Jc=a.$video,Kd.noMove=!0,kc("loadvideo"))})),this},ed.stopVideo=function(){return zc(Jc,!0,!0),this},md.hover(function(){Ac(!1)},function(){Ac(!0)}),Kd=N(od,{onStart:nc,onMove:function(a,b){yc(nd,b.edge)},onEnd:function(a){if(yc(nd),a.moved||a.touch&&a.pos!==a.newPos){var b=p(a.newPos,Jd.w,qc,Lc);ed.show({index:b,time:a.time,overPos:a.overPos,direct:!0})}else a.aborted||Bc(a.startEvent,a.touch)},timeLow:1,timeHigh:1,friction:2,select:"."+Ob+", ."+Ob+" *",$wrap:nd}),Ld=N(vd,{onStart:nc,onMove:function(a,b){yc(ud,b.edge)},onEnd:function(a){function b(){uc(),vc(),bb(a.newPos,!0)}if(a.moved)a.pos!==a.newPos?(J(vd,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),bb(a.newPos),yc(ud,F(a.newPos,Cd.minPos,Cd.maxPos))):b();else{var c=a.$target.closest("."+Db,vd)[0];c&&Cc.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:ud}),H(sd,function(a){a.preventDefault(),Jc?zc(Jc,!0,!0):ed.show({index:sd.index(this)?">":"<",slow:a.altKey,direct:!0})},{onStart:function(a){nc.call(this,a),Kd.control=!0},tail:Kd}),H(Ed,function(){ed.fullScreen?ed.cancelFullScreen():ed.requestFullScreen(),uc(),vc()},{onStart:function(a){nc.call(this,a),Kd.control=!0},tail:Kd}),c.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){ed[b]=function(){return Fc=Fc||[],"load"!==b?Array.prototype[b].apply(Fc,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(Fc=arguments[0]),Dc(),ed}}),hc.on("resize",ed.resize),Dc()},c.fn.fotorama=function(a){return this.each(function(){var b=this,d=c(this),e=d.data(),f=e.fotorama;f?f.setOptions(a):B(function(){return!A(b)},function(){e.urtext=d.html(),new c.Fotorama(d,c.extend({},{width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,ratio:null,nav:"dots",navPosition:"bottom",thumbWidth:rc,thumbHeight:rc,allowFullScreen:!1,fit:"contain",transition:"slide",captions:!0,hash:!1,autoplay:!1,stopAutoplayOnTouch:!0,keyboard:!1,loop:!1},c.extend({},a,e)))})})},c.Fotorama.cache={};var xc=0;c.Fotorama.size=0,c(function(){c("."+eb+':not([data-auto="false"])').fotorama()}),c=c||{},c.Fotorama=c.Fotorama||{},c.Fotorama.jst=c.Fotorama.jst||{},c.Fotorama.jst.style=function(a){var b,c="";return S.escape,c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\npadding-left:0;\nwidth:"+(null==(b=a.w)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame:last-child{\npadding-right:0}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb{\nwidth:"+(null==(b=a.w)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nwidth:"+(null==(b=a.w-a.m*(a.q?0:2))?"":b)+"px;\nheight:"+(null==(b=a.h-a.m*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.m)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px;\nmargin-left:"+(null==(b=-a.w/2)?"":b)+"px}"},c.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(S.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b("youtube"==a.type?"http://youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?"http://player.vimeo.com/video/"+a.id+"?autoplay=1&amp;badge=0":a.id),c+='" frameborder="0" allowfullscreen></iframe></div>'}}(window,document,jQuery);
/**
 * HashNav
 *
 * Simple hash navigation
 *
 * @author Artem Sapegin
 * @copyright 2012 Artem Sapegin, http://sapegin.me
 * @license MIT
 */

/*jshint browser:true, jquery:true, white:false, smarttabs:true, eqeqeq:true,
         immed:true, latedef:true, newcap:true, undef:true */
/*global define:false */
(function(factory) {  // Try to register as an anonymous AMD module
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else {
		factory();
	}
}(function() {
	'use strict';

	var HashNav = {
		_inited: false,
		_initial: '',
		_hash: '',
		_callbacks: [],

		/*
		 * Get/set default hash
		 * @param value {String|undefined}
		 */
		initial: function(value) {
			if (value === undefined) {
				return this._initial;
			}
			else {
				if (value !== this._initial) {
					this._initial = value;
					if (location.hash !== value) {
						var hash = location.hash.slice(1);
						this.change(hash || value);
					}
					else {
						this._hash = value;
					}
				}
			}
		},

		/*
		 * Set/execute change handler
		 * @param value {String|Function}
		 */
		change: function(value) {
			if (!this._inited) {
				this._init();
			}

			if (typeof value === 'string') {
				this._change(value);
				this._hash = value;
				if (value === this._initial) {
					this._removeHash();
				}
				else {
					location.hash = value;
				}
			}
			else {
				var that = this;
				this._callbacks.push(value);
				if (this._hash) {
					value(this._hash);
				}
			}
		},

		_change: function(hash) {
			for (var cbIdx = 0; cbIdx < this._callbacks.length; cbIdx++) {
				this._callbacks[cbIdx](hash);
			}
		},

		_init: function() {
			if (!('onhashchange' in window)) return;
			var that = this;
			window.addEventListener('hashchange', function() {
				that._hashChanged();
			}, false);
		},

		_hashChanged: function() {
			var hash = location.hash.slice(1);
			if (hash === this._initial) {
				this._removeHash(true);
				return;
			}
			this._change(hash || this._initial);
		},

		_removeHash: function(replace) {
			if (history.pushState) {
				var url = window.location.pathname + window.location.search;
				history[replace ? 'replaceState' : 'pushState']('', document.title, url);
			}
			else {
				location.hash = '';
			}
		}
	};

	window.HashNav = HashNav;

}));
/**
 * jQuery Tag Filter
 *
 * @version 0.2
 * @requires jQuery, HashNav
 * @author Artem Sapegin
 * @copyright 2012 Artem Sapegin (sapegin.me)
 * @license MIT
 */

/*global jQuery:false, define:false, HashNav:false*/
(function (factory) {  // Try to register as an anonymous AMD module
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(jQuery);
	}
}(function ($) {

$.fn.tagFilter = function(options) {
	options = $.extend({}, $.fn.tagFilter.defaults, options);

	return this.each(function() {
		new TagFilter($(this), options);
	});
};

$.fn.tagFilter.defaults = {
	barSelector: '.tags',
	linkSelector: 'li',
	linkActiveClass: 'is-active',
	tagClassPrefix: 'tag_'
};

function TagFilter(container, options) {
	this.container = container;
	this.options = options;
	this.init();
}

TagFilter.prototype = {
	init: function() {
		this.bar = this.container.find(this.options.barSelector);
		if (!this.bar.length) return;

		this.bar.delegate(this.options.linkSelector, 'click', $.proxy(this.tagClick, this));

		this.tagClassRegExp = new RegExp('\\b' + this.options.tagClassPrefix + '.*?\\b', 'g');

		var defaultTag = this.container.find('.is-default').data('tag-id');
		if (defaultTag) {
			HashNav.initial(defaultTag);
		}

		HashNav.change(this.change.bind(this));
	},

	tagClick: function(e) {
		this.change($(e.target).data('tag-id'));
		return false;
	},

	change: function(tag) {
		var link = this.container.find('[data-tag-id="' + tag + '"]');
		if (!link.length || link.hasClass(this.options.linkActiveClass)) return;

		// Replace tag class on container
		this.container[0].className = this.container[0].className.replace(this.tagClassRegExp, '');
		if (tag) this.container.addClass(this.options.tagClassPrefix + tag);

		// Highlight button
		link.siblings().removeClass(this.options.linkActiveClass);
		link.addClass(this.options.linkActiveClass);

		// Update page URL
		HashNav.change(tag);
	}
};

}));
// Tâmia © 2013 Artem Sapegin http://sapegin.me
// Core helpers

;(function ($) {
	'use strict';

	function _getContainers() {
		if (document.querySelectorAll) {
			return document.querySelectorAll('[data-component]');
		}
		else {
			return $('[data-component]');
		}
	}
	var _containersCache;
	var _delayedFuncs = {};


	/**
	 * Initialize components
	 * Invoke initComponents again to initialize components that was hidden before.
	 *
	 * @param {Object} [funcs] Initializers for each component:
	 *        {
	 *          pony: function(elem) { // $(elem) },
	 *          jquerypony: function(elem) { $(elem).pluginmethod({option1: 'val1', options2: 'val2'}); },
	 *          jquerypony: {pluginmethod: {option1: 'val1', options2: 'val2'}}
	 *        }
	 *
	 * <div data-component="pony"></div>
	 */
	function initComponents(funcs) {
		var containers = _containersCache || (_containersCache = _getContainers());

		// Call without arguments: try to initialize hidden components again
		if (!arguments.length) {
			var _found = false;
			for (var _func in _delayedFuncs) {
				_found = true;
				break;
			}
			if (!_found) return;
			funcs = {};
		}

		for (var containerIdx = 0, containerCnt = containers.length; containerIdx < containerCnt; containerIdx++) {
			var container = containers[containerIdx];
			var component = container.getAttribute('data-component');
			var func = funcs[component];
			if (func) {
				if (container.offsetWidth || container.offsetHeight) {
					if (typeof func === 'function') {
						func(container);
					}
					else {
						// Shortcut for jQuery plugins initialization
						for (var method in func) {
							$(container)[method](func[method]);
						}
					}
				}
				else {
					_delayInit(func, component, container);
				}
			}
			else if (_delayedFuncs[component]) {
				if (container.offsetWidth || container.offsetHeight) {
					_delayedFuncs[component]();
					delete _delayedFuncs[component];
				}
			}
		}
	}

	function _delayInit(func, component, elem) {
		_delayedFuncs[component] = function() {
			func(elem);
		};
	}


	/**
	 * Controls
	 *
	 * <span data-fire="slider-next" data-to=".portfolio" data-attrs="1,2,3">Next</span>
	 */
	$(document).click(function(e) {
		var target = e.target;
		if (target.parentNode && target.parentNode.getAttribute('data-fire')) target = target.parentNode;
		if (target.getAttribute('data-fire') && target.getAttribute('data-to')) {
			target = $(target);
			var attrs = (''+target.data('attrs')).split(/[;, ]/);
			$(target.data('to')).trigger(target.data('fire'), attrs);
			e.preventDefault();
		}
	});


	window.utils = {
		initComponents: initComponents
	};

}(jQuery));

var __templates = (function(){
function encodeHTMLSource() {var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;return function() {return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;};};
  String.prototype.encodeHTML=encodeHTMLSource();
  var __templates=__templates|| {};
  __templates['photo-info']=function anonymous(it) {
var out='<h1 class="photo-info__title">'+(it.title)+'</h1><div class="photo-info__album"><a href="'+(it.albumHref)+'" class="photo-info__album-link">⇧ <u>'+(it.album)+'</u></a></div>';if(it.info.caption){out+='<div class="photo-info__caption">'+(it.info.caption)+'</div>';}if(it.location){out+='<div class="photo-info__location">'+(it.location)+'</div>';}out+='<div class="photo-info__meta">'+(it.pubdate)+', '+(it.exif)+'</div>';return out;
};
  __templates['photo-title']=function anonymous(it) {
var out=''+(it.title)+' - '+(it.siteTitle);return out;
};
return __templates;})()
/* Author: Artem Sapegin, http://sapegin.me, 2013 */

/*global utils:false */
;(function ($) {
	'use strict';

	$.fn.tmpl = function(tmplId, data) {
		return $(this).html(window.__templates[tmplId](data));
	};

	utils.initComponents({
		'featured-album': function(elem) {
			var container = $(elem);
			var photos = window.__photos;

			container.fotorama({
				nav: false,
				transition: 'dissolve',
				loop: true,
				autoplay: 7000,
				width: '100%',
				minHeight: 500,
				maxHeight: '100%',
				fit: 'cover',
				ratio: '1.5'
			});

			var fotorama = container.data('fotorama');
			fotorama.load(shuffle(photos));
		},
		'photo-album': function(elem) {
			function update() {
				gallery.addClass('is-activated');
				var frame = fotorama.activeFrame;
				frame.title = frame.info.title || '***';
				frame.permalink = location.href.replace(/\/photos\/\d+\/$/, '/photos/' + frame.id + '/');
				frame.albumHref = albumHref;
				frame.album = albumName;

				// Update URL
				history.pushState('', frame.title, frame.permalink);

				// Update page title
				document.title = window.__templates['photo-title']({
					title: frame.title,
					siteTitle: siteTitle
				});

				// Update info and share
				infoPane.tmpl('photo-info', frame);

				updateNav();
			}

			function updateNav() {
				prevButton.toggleClass('is-disabled', fotorama.activeIndex === 0);
				nextButton.toggleClass('is-disabled', fotorama.activeIndex === fotorama.data.length-1);
			}

			function resize() {
				fotorama.resize({
					width: gallery.width(),
					height: gallery.height()
				});
			}

			var photos = window.__photos;
			var currentId = window.__photos_current_id;
			var startIndex = 0;
			$.each(photos, function(index, value) {
				if (photos[index].id === currentId) {
					startIndex = index;
					return false;
				}
			});

			var container = $(elem);
			var gallery = container.find('.js-gallery');
			var sharePane = container.find('.js-share');
			var infoPane = container.find('.js-info');
			var prevButton = container.find('.js-prev');
			var nextButton = container.find('.js-next');
			var siteTitle = $('.js-site-title').text();
			var albumLinkElem = $('.js-album-link');
			var albumHref = albumLinkElem.attr('href');
			var albumName = albumLinkElem.text();

			gallery.fotorama({
				nav: false,
				keyboard: true,
				transition: 'crossfade',
				width: gallery.width(),
				height: gallery.height()
			});

			var fotorama = gallery.data('fotorama');
			fotorama.load(photos);
			fotorama.show({index: startIndex, time: 0});
			gallery.on('fotorama:show', update);

			container.on('click', '.js-prev', function() {
				fotorama.show('<');
				updateNav();
			});
			container.on('click', '.js-next', function() {
				fotorama.show('>');
				updateNav();
			});

			updateNav();

			$(window).resize(resize);
		},

		'tag-filter': {tagFilter: {
			barSelector: '.js-filter',
			linkSelector: '.js-filter-tag'
		}}
	});

	// Fisher–Yates Shuffle
	// http://bost.ocks.org/mike/shuffle/
	function shuffle(array) {
		// While there remain elements to shuffle
		var m = array.length;
		while (m) {
			// Pick a remaining element
			var i = Math.floor(Math.random() * m--);

			// And swap it with the current element
			var t = array[m];
			array[m] = array[i];
			array[i] = t;
		}

		return array;
	}

}(jQuery));
