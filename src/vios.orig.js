//var json = JSON.parse(fs.readFileSync('./content.json').toString());
/*
var fs = require('fs');
var json = JSON.parse(fs.readFileSync('./content.json').toString());
*/
/*
var json = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "/DAV/home/sdmonroe/lod.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();*/

//console.log(json);
//console.log(count());

/*
function count(){
var total = 0;
var triples = 0;
var rows = '';

jQuery.each(json, function(i, val) {
  triples = parseInt(val.triples) ;
  if(triples) total+=triples;
  rows += ('<tr><td>'+val._id+'</td><td>'+triples+'</td></tr>');
});

  $('table tbody').append(rows);
  $('table tbody').append('<tr><td><b>Total</b></td><td>'+total+'</td></tr>');
  return total;

}
*/

/** qTip **/
/* qtip2 v3.0.3 | Plugins: tips modal viewport svg imagemap ie6 | Styles: core basic css3 | qtip2.com | Licensed MIT | Wed May 11 2016 22:31:31 */

!function(a,b,c){!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):jQuery&&!jQuery.fn.qtip&&a(jQuery)}(function(d){"use strict";function e(a,b,c,e){this.id=c,this.target=a,this.tooltip=F,this.elements={target:a},this._id=S+"-"+c,this.timers={img:{}},this.options=b,this.plugins={},this.cache={event:{},target:d(),disabled:E,attr:e,onTooltip:E,lastClass:""},this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=E}function f(a){return a===F||"object"!==d.type(a)}function g(a){return!(d.isFunction(a)||a&&a.attr||a.length||"object"===d.type(a)&&(a.jquery||a.then))}function h(a){var b,c,e,h;return f(a)?E:(f(a.metadata)&&(a.metadata={type:a.metadata}),"content"in a&&(b=a.content,f(b)||b.jquery||b.done?(c=g(b)?E:b,b=a.content={text:c}):c=b.text,"ajax"in b&&(e=b.ajax,h=e&&e.once!==E,delete b.ajax,b.text=function(a,b){var f=c||d(this).attr(b.options.content.attr)||"Loading...",g=d.ajax(d.extend({},e,{context:b})).then(e.success,F,e.error).then(function(a){return a&&h&&b.set("content.text",a),a},function(a,c,d){b.destroyed||0===a.status||b.set("content.text",c+": "+d)});return h?f:(b.set("content.text",f),g)}),"title"in b&&(d.isPlainObject(b.title)&&(b.button=b.title.button,b.title=b.title.text),g(b.title||E)&&(b.title=E))),"position"in a&&f(a.position)&&(a.position={my:a.position,at:a.position}),"show"in a&&f(a.show)&&(a.show=a.show.jquery?{target:a.show}:a.show===D?{ready:D}:{event:a.show}),"hide"in a&&f(a.hide)&&(a.hide=a.hide.jquery?{target:a.hide}:{event:a.hide}),"style"in a&&f(a.style)&&(a.style={classes:a.style}),d.each(R,function(){this.sanitize&&this.sanitize(a)}),a)}function i(a,b){for(var c,d=0,e=a,f=b.split(".");e=e[f[d++]];)d<f.length&&(c=e);return[c||a,f.pop()]}function j(a,b){var c,d,e;for(c in this.checks)if(this.checks.hasOwnProperty(c))for(d in this.checks[c])this.checks[c].hasOwnProperty(d)&&(e=new RegExp(d,"i").exec(a))&&(b.push(e),("builtin"===c||this.plugins[c])&&this.checks[c][d].apply(this.plugins[c]||this,b))}function k(a){return V.concat("").join(a?"-"+a+" ":" ")}function l(a,b){return b>0?setTimeout(d.proxy(a,this),b):void a.call(this)}function m(a){this.tooltip.hasClass(aa)||(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this.timers.show=l.call(this,function(){this.toggle(D,a)},this.options.show.delay))}function n(a){if(!this.tooltip.hasClass(aa)&&!this.destroyed){var b=d(a.relatedTarget),c=b.closest(W)[0]===this.tooltip[0],e=b[0]===this.options.show.target[0];if(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this!==b[0]&&"mouse"===this.options.position.target&&c||this.options.hide.fixed&&/mouse(out|leave|move)/.test(a.type)&&(c||e))try{a.preventDefault(),a.stopImmediatePropagation()}catch(f){}else this.timers.hide=l.call(this,function(){this.toggle(E,a)},this.options.hide.delay,this)}}function o(a){!this.tooltip.hasClass(aa)&&this.options.hide.inactive&&(clearTimeout(this.timers.inactive),this.timers.inactive=l.call(this,function(){this.hide(a)},this.options.hide.inactive))}function p(a){this.rendered&&this.tooltip[0].offsetWidth>0&&this.reposition(a)}function q(a,c,e){d(b.body).delegate(a,(c.split?c:c.join("."+S+" "))+"."+S,function(){var a=y.api[d.attr(this,U)];a&&!a.disabled&&e.apply(a,arguments)})}function r(a,c,f){var g,i,j,k,l,m=d(b.body),n=a[0]===b?m:a,o=a.metadata?a.metadata(f.metadata):F,p="html5"===f.metadata.type&&o?o[f.metadata.name]:F,q=a.data(f.metadata.name||"qtipopts");try{q="string"==typeof q?d.parseJSON(q):q}catch(r){}if(k=d.extend(D,{},y.defaults,f,"object"==typeof q?h(q):F,h(p||o)),i=k.position,k.id=c,"boolean"==typeof k.content.text){if(j=a.attr(k.content.attr),k.content.attr===E||!j)return E;k.content.text=j}if(i.container.length||(i.container=m),i.target===E&&(i.target=n),k.show.target===E&&(k.show.target=n),k.show.solo===D&&(k.show.solo=i.container.closest("body")),k.hide.target===E&&(k.hide.target=n),k.position.viewport===D&&(k.position.viewport=i.container),i.container=i.container.eq(0),i.at=new A(i.at,D),i.my=new A(i.my),a.data(S))if(k.overwrite)a.qtip("destroy",!0);else if(k.overwrite===E)return E;return a.attr(T,c),k.suppress&&(l=a.attr("title"))&&a.removeAttr("title").attr(ca,l).attr("title",""),g=new e(a,k,c,!!j),a.data(S,g),g}function s(a){return a.charAt(0).toUpperCase()+a.slice(1)}function t(a,b){var d,e,f=b.charAt(0).toUpperCase()+b.slice(1),g=(b+" "+va.join(f+" ")+f).split(" "),h=0;if(ua[b])return a.css(ua[b]);for(;d=g[h++];)if((e=a.css(d))!==c)return ua[b]=d,e}function u(a,b){return Math.ceil(parseFloat(t(a,b)))}function v(a,b){this._ns="tip",this.options=b,this.offset=b.offset,this.size=[b.width,b.height],this.qtip=a,this.init(a)}function w(a,b){this.options=b,this._ns="-modal",this.qtip=a,this.init(a)}function x(a){this._ns="ie6",this.qtip=a,this.init(a)}var y,z,A,B,C,D=!0,E=!1,F=null,G="x",H="y",I="width",J="height",K="top",L="left",M="bottom",N="right",O="center",P="flipinvert",Q="shift",R={},S="qtip",T="data-hasqtip",U="data-qtip-id",V=["ui-widget","ui-tooltip"],W="."+S,X="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),Y=S+"-fixed",Z=S+"-default",$=S+"-focus",_=S+"-hover",aa=S+"-disabled",ba="_replacedByqTip",ca="oldtitle",da={ie:function(){var a,c;for(a=4,c=b.createElement("div");(c.innerHTML="<!--[if gt IE "+a+"]><i></i><![endif]-->")&&c.getElementsByTagName("i")[0];a+=1);return a>4?a:NaN}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||E};z=e.prototype,z._when=function(a){return d.when.apply(d,a)},z.render=function(a){if(this.rendered||this.destroyed)return this;var b=this,c=this.options,e=this.cache,f=this.elements,g=c.content.text,h=c.content.title,i=c.content.button,j=c.position,k=[];return d.attr(this.target[0],"aria-describedby",this._id),e.posClass=this._createPosClass((this.position={my:j.my,at:j.at}).my),this.tooltip=f.tooltip=d("<div/>",{id:this._id,"class":[S,Z,c.style.classes,e.posClass].join(" "),width:c.style.width||"",height:c.style.height||"",tracking:"mouse"===j.target&&j.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":E,"aria-describedby":this._id+"-content","aria-hidden":D}).toggleClass(aa,this.disabled).attr(U,this.id).data(S,this).appendTo(j.container).append(f.content=d("<div />",{"class":S+"-content",id:this._id+"-content","aria-atomic":D})),this.rendered=-1,this.positioning=D,h&&(this._createTitle(),d.isFunction(h)||k.push(this._updateTitle(h,E))),i&&this._createButton(),d.isFunction(g)||k.push(this._updateContent(g,E)),this.rendered=D,this._setWidget(),d.each(R,function(a){var c;"render"===this.initialize&&(c=this(b))&&(b.plugins[a]=c)}),this._unassignEvents(),this._assignEvents(),this._when(k).then(function(){b._trigger("render"),b.positioning=E,b.hiddenDuringWait||!c.show.ready&&!a||b.toggle(D,e.event,E),b.hiddenDuringWait=E}),y.api[this.id]=this,this},z.destroy=function(a){function b(){if(!this.destroyed){this.destroyed=D;var a,b=this.target,c=b.attr(ca);this.rendered&&this.tooltip.stop(1,0).find("*").remove().end().remove(),d.each(this.plugins,function(){this.destroy&&this.destroy()});for(a in this.timers)this.timers.hasOwnProperty(a)&&clearTimeout(this.timers[a]);b.removeData(S).removeAttr(U).removeAttr(T).removeAttr("aria-describedby"),this.options.suppress&&c&&b.attr("title",c).removeAttr(ca),this._unassignEvents(),this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=F,delete y.api[this.id]}}return this.destroyed?this.target:(a===D&&"hide"!==this.triggering||!this.rendered?b.call(this):(this.tooltip.one("tooltiphidden",d.proxy(b,this)),!this.triggering&&this.hide()),this.target)},B=z.checks={builtin:{"^id$":function(a,b,c,e){var f=c===D?y.nextid:c,g=S+"-"+f;f!==E&&f.length>0&&!d("#"+g).length?(this._id=g,this.rendered&&(this.tooltip[0].id=this._id,this.elements.content[0].id=this._id+"-content",this.elements.title[0].id=this._id+"-title")):a[b]=e},"^prerender":function(a,b,c){c&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(a,b,c){this._updateContent(c)},"^content.attr$":function(a,b,c,d){this.options.content.text===this.target.attr(d)&&this._updateContent(this.target.attr(c))},"^content.title$":function(a,b,c){return c?(c&&!this.elements.title&&this._createTitle(),void this._updateTitle(c)):this._removeTitle()},"^content.button$":function(a,b,c){this._updateButton(c)},"^content.title.(text|button)$":function(a,b,c){this.set("content."+b,c)},"^position.(my|at)$":function(a,b,c){"string"==typeof c&&(this.position[b]=a[b]=new A(c,"at"===b))},"^position.container$":function(a,b,c){this.rendered&&this.tooltip.appendTo(c)},"^show.ready$":function(a,b,c){c&&(!this.rendered&&this.render(D)||this.toggle(D))},"^style.classes$":function(a,b,c,d){this.rendered&&this.tooltip.removeClass(d).addClass(c)},"^style.(width|height)":function(a,b,c){this.rendered&&this.tooltip.css(b,c)},"^style.widget|content.title":function(){this.rendered&&this._setWidget()},"^style.def":function(a,b,c){this.rendered&&this.tooltip.toggleClass(Z,!!c)},"^events.(render|show|move|hide|focus|blur)$":function(a,b,c){this.rendered&&this.tooltip[(d.isFunction(c)?"":"un")+"bind"]("tooltip"+b,c)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){if(this.rendered){var a=this.options.position;this.tooltip.attr("tracking","mouse"===a.target&&a.adjust.mouse),this._unassignEvents(),this._assignEvents()}}}},z.get=function(a){if(this.destroyed)return this;var b=i(this.options,a.toLowerCase()),c=b[0][b[1]];return c.precedance?c.string():c};var ea=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,fa=/^prerender|show\.ready/i;z.set=function(a,b){if(this.destroyed)return this;var c,e=this.rendered,f=E,g=this.options;return"string"==typeof a?(c=a,a={},a[c]=b):a=d.extend({},a),d.each(a,function(b,c){if(e&&fa.test(b))return void delete a[b];var h,j=i(g,b.toLowerCase());h=j[0][j[1]],j[0][j[1]]=c&&c.nodeType?d(c):c,f=ea.test(b)||f,a[b]=[j[0],j[1],c,h]}),h(g),this.positioning=D,d.each(a,d.proxy(j,this)),this.positioning=E,this.rendered&&this.tooltip[0].offsetWidth>0&&f&&this.reposition("mouse"===g.position.target?F:this.cache.event),this},z._update=function(a,b){var c=this,e=this.cache;return this.rendered&&a?(d.isFunction(a)&&(a=a.call(this.elements.target,e.event,this)||""),d.isFunction(a.then)?(e.waiting=D,a.then(function(a){return e.waiting=E,c._update(a,b)},F,function(a){return c._update(a,b)})):a===E||!a&&""!==a?E:(a.jquery&&a.length>0?b.empty().append(a.css({display:"block",visibility:"visible"})):b.html(a),this._waitForContent(b).then(function(a){c.rendered&&c.tooltip[0].offsetWidth>0&&c.reposition(e.event,!a.length)}))):E},z._waitForContent=function(a){var b=this.cache;return b.waiting=D,(d.fn.imagesLoaded?a.imagesLoaded():(new d.Deferred).resolve([])).done(function(){b.waiting=E}).promise()},z._updateContent=function(a,b){this._update(a,this.elements.content,b)},z._updateTitle=function(a,b){this._update(a,this.elements.title,b)===E&&this._removeTitle(E)},z._createTitle=function(){var a=this.elements,b=this._id+"-title";a.titlebar&&this._removeTitle(),a.titlebar=d("<div />",{"class":S+"-titlebar "+(this.options.style.widget?k("header"):"")}).append(a.title=d("<div />",{id:b,"class":S+"-title","aria-atomic":D})).insertBefore(a.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(a){d(this).toggleClass("ui-state-active ui-state-focus","down"===a.type.substr(-4))}).delegate(".qtip-close","mouseover mouseout",function(a){d(this).toggleClass("ui-state-hover","mouseover"===a.type)}),this.options.content.button&&this._createButton()},z._removeTitle=function(a){var b=this.elements;b.title&&(b.titlebar.remove(),b.titlebar=b.title=b.button=F,a!==E&&this.reposition())},z._createPosClass=function(a){return S+"-pos-"+(a||this.options.position.my).abbrev()},z.reposition=function(c,e){if(!this.rendered||this.positioning||this.destroyed)return this;this.positioning=D;var f,g,h,i,j=this.cache,k=this.tooltip,l=this.options.position,m=l.target,n=l.my,o=l.at,p=l.viewport,q=l.container,r=l.adjust,s=r.method.split(" "),t=k.outerWidth(E),u=k.outerHeight(E),v=0,w=0,x=k.css("position"),y={left:0,top:0},z=k[0].offsetWidth>0,A=c&&"scroll"===c.type,B=d(a),C=q[0].ownerDocument,F=this.mouse;if(d.isArray(m)&&2===m.length)o={x:L,y:K},y={left:m[0],top:m[1]};else if("mouse"===m)o={x:L,y:K},(!r.mouse||this.options.hide.distance)&&j.origin&&j.origin.pageX?c=j.origin:!c||c&&("resize"===c.type||"scroll"===c.type)?c=j.event:F&&F.pageX&&(c=F),"static"!==x&&(y=q.offset()),C.body.offsetWidth!==(a.innerWidth||C.documentElement.clientWidth)&&(g=d(b.body).offset()),y={left:c.pageX-y.left+(g&&g.left||0),top:c.pageY-y.top+(g&&g.top||0)},r.mouse&&A&&F&&(y.left-=(F.scrollX||0)-B.scrollLeft(),y.top-=(F.scrollY||0)-B.scrollTop());else{if("event"===m?c&&c.target&&"scroll"!==c.type&&"resize"!==c.type?j.target=d(c.target):c.target||(j.target=this.elements.target):"event"!==m&&(j.target=d(m.jquery?m:this.elements.target)),m=j.target,m=d(m).eq(0),0===m.length)return this;m[0]===b||m[0]===a?(v=da.iOS?a.innerWidth:m.width(),w=da.iOS?a.innerHeight:m.height(),m[0]===a&&(y={top:(p||m).scrollTop(),left:(p||m).scrollLeft()})):R.imagemap&&m.is("area")?f=R.imagemap(this,m,o,R.viewport?s:E):R.svg&&m&&m[0].ownerSVGElement?f=R.svg(this,m,o,R.viewport?s:E):(v=m.outerWidth(E),w=m.outerHeight(E),y=m.offset()),f&&(v=f.width,w=f.height,g=f.offset,y=f.position),y=this.reposition.offset(m,y,q),(da.iOS>3.1&&da.iOS<4.1||da.iOS>=4.3&&da.iOS<4.33||!da.iOS&&"fixed"===x)&&(y.left-=B.scrollLeft(),y.top-=B.scrollTop()),(!f||f&&f.adjustable!==E)&&(y.left+=o.x===N?v:o.x===O?v/2:0,y.top+=o.y===M?w:o.y===O?w/2:0)}return y.left+=r.x+(n.x===N?-t:n.x===O?-t/2:0),y.top+=r.y+(n.y===M?-u:n.y===O?-u/2:0),R.viewport?(h=y.adjusted=R.viewport(this,y,l,v,w,t,u),g&&h.left&&(y.left+=g.left),g&&h.top&&(y.top+=g.top),h.my&&(this.position.my=h.my)):y.adjusted={left:0,top:0},j.posClass!==(i=this._createPosClass(this.position.my))&&(j.posClass=i,k.removeClass(j.posClass).addClass(i)),this._trigger("move",[y,p.elem||p],c)?(delete y.adjusted,e===E||!z||isNaN(y.left)||isNaN(y.top)||"mouse"===m||!d.isFunction(l.effect)?k.css(y):d.isFunction(l.effect)&&(l.effect.call(k,this,d.extend({},y)),k.queue(function(a){d(this).css({opacity:"",height:""}),da.ie&&this.style.removeAttribute("filter"),a()})),this.positioning=E,this):this},z.reposition.offset=function(a,c,e){function f(a,b){c.left+=b*a.scrollLeft(),c.top+=b*a.scrollTop()}if(!e[0])return c;var g,h,i,j,k=d(a[0].ownerDocument),l=!!da.ie&&"CSS1Compat"!==b.compatMode,m=e[0];do"static"!==(h=d.css(m,"position"))&&("fixed"===h?(i=m.getBoundingClientRect(),f(k,-1)):(i=d(m).position(),i.left+=parseFloat(d.css(m,"borderLeftWidth"))||0,i.top+=parseFloat(d.css(m,"borderTopWidth"))||0),c.left-=i.left+(parseFloat(d.css(m,"marginLeft"))||0),c.top-=i.top+(parseFloat(d.css(m,"marginTop"))||0),g||"hidden"===(j=d.css(m,"overflow"))||"visible"===j||(g=d(m)));while(m=m.offsetParent);return g&&(g[0]!==k[0]||l)&&f(g,1),c};var ga=(A=z.reposition.Corner=function(a,b){a=(""+a).replace(/([A-Z])/," $1").replace(/middle/gi,O).toLowerCase(),this.x=(a.match(/left|right/i)||a.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(a.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase(),this.forceY=!!b;var c=a.charAt(0);this.precedance="t"===c||"b"===c?H:G}).prototype;ga.invert=function(a,b){this[a]=this[a]===L?N:this[a]===N?L:b||this[a]},ga.string=function(a){var b=this.x,c=this.y,d=b!==c?"center"===b||"center"!==c&&(this.precedance===H||this.forceY)?[c,b]:[b,c]:[b];return a!==!1?d.join(" "):d},ga.abbrev=function(){var a=this.string(!1);return a[0].charAt(0)+(a[1]&&a[1].charAt(0)||"")},ga.clone=function(){return new A(this.string(),this.forceY)},z.toggle=function(a,c){var e=this.cache,f=this.options,g=this.tooltip;if(c){if(/over|enter/.test(c.type)&&e.event&&/out|leave/.test(e.event.type)&&f.show.target.add(c.target).length===f.show.target.length&&g.has(c.relatedTarget).length)return this;e.event=d.event.fix(c)}if(this.waiting&&!a&&(this.hiddenDuringWait=D),!this.rendered)return a?this.render(1):this;if(this.destroyed||this.disabled)return this;var h,i,j,k=a?"show":"hide",l=this.options[k],m=this.options.position,n=this.options.content,o=this.tooltip.css("width"),p=this.tooltip.is(":visible"),q=a||1===l.target.length,r=!c||l.target.length<2||e.target[0]===c.target;return(typeof a).search("boolean|number")&&(a=!p),h=!g.is(":animated")&&p===a&&r,i=h?F:!!this._trigger(k,[90]),this.destroyed?this:(i!==E&&a&&this.focus(c),!i||h?this:(d.attr(g[0],"aria-hidden",!a),a?(this.mouse&&(e.origin=d.event.fix(this.mouse)),d.isFunction(n.text)&&this._updateContent(n.text,E),d.isFunction(n.title)&&this._updateTitle(n.title,E),!C&&"mouse"===m.target&&m.adjust.mouse&&(d(b).bind("mousemove."+S,this._storeMouse),C=D),o||g.css("width",g.outerWidth(E)),this.reposition(c,arguments[2]),o||g.css("width",""),l.solo&&("string"==typeof l.solo?d(l.solo):d(W,l.solo)).not(g).not(l.target).qtip("hide",new d.Event("tooltipsolo"))):(clearTimeout(this.timers.show),delete e.origin,C&&!d(W+'[tracking="true"]:visible',l.solo).not(g).length&&(d(b).unbind("mousemove."+S),C=E),this.blur(c)),j=d.proxy(function(){a?(da.ie&&g[0].style.removeAttribute("filter"),g.css("overflow",""),"string"==typeof l.autofocus&&d(this.options.show.autofocus,g).focus(),this.options.show.target.trigger("qtip-"+this.id+"-inactive")):g.css({display:"",visibility:"",opacity:"",left:"",top:""}),this._trigger(a?"visible":"hidden")},this),l.effect===E||q===E?(g[k](),j()):d.isFunction(l.effect)?(g.stop(1,1),l.effect.call(g,this),g.queue("fx",function(a){j(),a()})):g.fadeTo(90,a?1:0,j),a&&l.target.trigger("qtip-"+this.id+"-inactive"),this))},z.show=function(a){return this.toggle(D,a)},z.hide=function(a){return this.toggle(E,a)},z.focus=function(a){if(!this.rendered||this.destroyed)return this;var b=d(W),c=this.tooltip,e=parseInt(c[0].style.zIndex,10),f=y.zindex+b.length;return c.hasClass($)||this._trigger("focus",[f],a)&&(e!==f&&(b.each(function(){this.style.zIndex>e&&(this.style.zIndex=this.style.zIndex-1)}),b.filter("."+$).qtip("blur",a)),c.addClass($)[0].style.zIndex=f),this},z.blur=function(a){return!this.rendered||this.destroyed?this:(this.tooltip.removeClass($),this._trigger("blur",[this.tooltip.css("zIndex")],a),this)},z.disable=function(a){return this.destroyed?this:("toggle"===a?a=!(this.rendered?this.tooltip.hasClass(aa):this.disabled):"boolean"!=typeof a&&(a=D),this.rendered&&this.tooltip.toggleClass(aa,a).attr("aria-disabled",a),this.disabled=!!a,this)},z.enable=function(){return this.disable(E)},z._createButton=function(){var a=this,b=this.elements,c=b.tooltip,e=this.options.content.button,f="string"==typeof e,g=f?e:"Close tooltip";b.button&&b.button.remove(),e.jquery?b.button=e:b.button=d("<a />",{"class":"qtip-close "+(this.options.style.widget?"":S+"-icon"),title:g,"aria-label":g}).prepend(d("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),b.button.appendTo(b.titlebar||c).attr("role","button").click(function(b){return c.hasClass(aa)||a.hide(b),E})},z._updateButton=function(a){if(!this.rendered)return E;var b=this.elements.button;a?this._createButton():b.remove()},z._setWidget=function(){var a=this.options.style.widget,b=this.elements,c=b.tooltip,d=c.hasClass(aa);c.removeClass(aa),aa=a?"ui-state-disabled":"qtip-disabled",c.toggleClass(aa,d),c.toggleClass("ui-helper-reset "+k(),a).toggleClass(Z,this.options.style.def&&!a),b.content&&b.content.toggleClass(k("content"),a),b.titlebar&&b.titlebar.toggleClass(k("header"),a),b.button&&b.button.toggleClass(S+"-icon",!a)},z._storeMouse=function(a){return(this.mouse=d.event.fix(a)).type="mousemove",this},z._bind=function(a,b,c,e,f){if(a&&c&&b.length){var g="."+this._id+(e?"-"+e:"");return d(a).bind((b.split?b:b.join(g+" "))+g,d.proxy(c,f||this)),this}},z._unbind=function(a,b){return a&&d(a).unbind("."+this._id+(b?"-"+b:"")),this},z._trigger=function(a,b,c){var e=new d.Event("tooltip"+a);return e.originalEvent=c&&d.extend({},c)||this.cache.event||F,this.triggering=a,this.tooltip.trigger(e,[this].concat(b||[])),this.triggering=E,!e.isDefaultPrevented()},z._bindEvents=function(a,b,c,e,f,g){var h=c.filter(e).add(e.filter(c)),i=[];h.length&&(d.each(b,function(b,c){var e=d.inArray(c,a);e>-1&&i.push(a.splice(e,1)[0])}),i.length&&(this._bind(h,i,function(a){var b=this.rendered?this.tooltip[0].offsetWidth>0:!1;(b?g:f).call(this,a)}),c=c.not(h),e=e.not(h))),this._bind(c,a,f),this._bind(e,b,g)},z._assignInitialEvents=function(a){function b(a){return this.disabled||this.destroyed?E:(this.cache.event=a&&d.event.fix(a),this.cache.target=a&&d(a.target),clearTimeout(this.timers.show),void(this.timers.show=l.call(this,function(){this.render("object"==typeof a||c.show.ready)},c.prerender?0:c.show.delay)))}var c=this.options,e=c.show.target,f=c.hide.target,g=c.show.event?d.trim(""+c.show.event).split(" "):[],h=c.hide.event?d.trim(""+c.hide.event).split(" "):[];this._bind(this.elements.target,["remove","removeqtip"],function(){this.destroy(!0)},"destroy"),/mouse(over|enter)/i.test(c.show.event)&&!/mouse(out|leave)/i.test(c.hide.event)&&h.push("mouseleave"),this._bind(e,"mousemove",function(a){this._storeMouse(a),this.cache.onTarget=D}),this._bindEvents(g,h,e,f,b,function(){return this.timers?void clearTimeout(this.timers.show):E}),(c.show.ready||c.prerender)&&b.call(this,a)},z._assignEvents=function(){var c=this,e=this.options,f=e.position,g=this.tooltip,h=e.show.target,i=e.hide.target,j=f.container,k=f.viewport,l=d(b),q=d(a),r=e.show.event?d.trim(""+e.show.event).split(" "):[],s=e.hide.event?d.trim(""+e.hide.event).split(" "):[];d.each(e.events,function(a,b){c._bind(g,"toggle"===a?["tooltipshow","tooltiphide"]:["tooltip"+a],b,null,g)}),/mouse(out|leave)/i.test(e.hide.event)&&"window"===e.hide.leave&&this._bind(l,["mouseout","blur"],function(a){/select|option/.test(a.target.nodeName)||a.relatedTarget||this.hide(a)}),e.hide.fixed?i=i.add(g.addClass(Y)):/mouse(over|enter)/i.test(e.show.event)&&this._bind(i,"mouseleave",function(){clearTimeout(this.timers.show)}),(""+e.hide.event).indexOf("unfocus")>-1&&this._bind(j.closest("html"),["mousedown","touchstart"],function(a){var b=d(a.target),c=this.rendered&&!this.tooltip.hasClass(aa)&&this.tooltip[0].offsetWidth>0,e=b.parents(W).filter(this.tooltip[0]).length>0;b[0]===this.target[0]||b[0]===this.tooltip[0]||e||this.target.has(b[0]).length||!c||this.hide(a)}),"number"==typeof e.hide.inactive&&(this._bind(h,"qtip-"+this.id+"-inactive",o,"inactive"),this._bind(i.add(g),y.inactiveEvents,o)),this._bindEvents(r,s,h,i,m,n),this._bind(h.add(g),"mousemove",function(a){if("number"==typeof e.hide.distance){var b=this.cache.origin||{},c=this.options.hide.distance,d=Math.abs;(d(a.pageX-b.pageX)>=c||d(a.pageY-b.pageY)>=c)&&this.hide(a)}this._storeMouse(a)}),"mouse"===f.target&&f.adjust.mouse&&(e.hide.event&&this._bind(h,["mouseenter","mouseleave"],function(a){return this.cache?void(this.cache.onTarget="mouseenter"===a.type):E}),this._bind(l,"mousemove",function(a){this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(aa)&&this.tooltip[0].offsetWidth>0&&this.reposition(a)})),(f.adjust.resize||k.length)&&this._bind(d.event.special.resize?k:q,"resize",p),f.adjust.scroll&&this._bind(q.add(f.container),"scroll",p)},z._unassignEvents=function(){var c=this.options,e=c.show.target,f=c.hide.target,g=d.grep([this.elements.target[0],this.rendered&&this.tooltip[0],c.position.container[0],c.position.viewport[0],c.position.container.closest("html")[0],a,b],function(a){return"object"==typeof a});e&&e.toArray&&(g=g.concat(e.toArray())),f&&f.toArray&&(g=g.concat(f.toArray())),this._unbind(g)._unbind(g,"destroy")._unbind(g,"inactive")},d(function(){q(W,["mouseenter","mouseleave"],function(a){var b="mouseenter"===a.type,c=d(a.currentTarget),e=d(a.relatedTarget||a.target),f=this.options;b?(this.focus(a),c.hasClass(Y)&&!c.hasClass(aa)&&clearTimeout(this.timers.hide)):"mouse"===f.position.target&&f.position.adjust.mouse&&f.hide.event&&f.show.target&&!e.closest(f.show.target[0]).length&&this.hide(a),c.toggleClass(_,b)}),q("["+U+"]",X,o)}),y=d.fn.qtip=function(a,b,e){var f=(""+a).toLowerCase(),g=F,i=d.makeArray(arguments).slice(1),j=i[i.length-1],k=this[0]?d.data(this[0],S):F;return!arguments.length&&k||"api"===f?k:"string"==typeof a?(this.each(function(){var a=d.data(this,S);if(!a)return D;if(j&&j.timeStamp&&(a.cache.event=j),!b||"option"!==f&&"options"!==f)a[f]&&a[f].apply(a,i);else{if(e===c&&!d.isPlainObject(b))return g=a.get(b),E;a.set(b,e)}}),g!==F?g:this):"object"!=typeof a&&arguments.length?void 0:(k=h(d.extend(D,{},a)),this.each(function(a){var b,c;return c=d.isArray(k.id)?k.id[a]:k.id,c=!c||c===E||c.length<1||y.api[c]?y.nextid++:c,b=r(d(this),c,k),b===E?D:(y.api[c]=b,d.each(R,function(){"initialize"===this.initialize&&this(b)}),void b._assignInitialEvents(j))}))},d.qtip=e,y.api={},d.each({attr:function(a,b){if(this.length){var c=this[0],e="title",f=d.data(c,"qtip");if(a===e&&f&&f.options&&"object"==typeof f&&"object"==typeof f.options&&f.options.suppress)return arguments.length<2?d.attr(c,ca):(f&&f.options.content.attr===e&&f.cache.attr&&f.set("content.text",b),this.attr(ca,b))}return d.fn["attr"+ba].apply(this,arguments)},clone:function(a){var b=d.fn["clone"+ba].apply(this,arguments);return a||b.filter("["+ca+"]").attr("title",function(){return d.attr(this,ca)}).removeAttr(ca),b}},function(a,b){if(!b||d.fn[a+ba])return D;var c=d.fn[a+ba]=d.fn[a];d.fn[a]=function(){return b.apply(this,arguments)||c.apply(this,arguments)}}),d.ui||(d["cleanData"+ba]=d.cleanData,d.cleanData=function(a){for(var b,c=0;(b=d(a[c])).length;c++)if(b.attr(T))try{b.triggerHandler("removeqtip")}catch(e){}d["cleanData"+ba].apply(this,arguments)}),y.version="3.0.3",y.nextid=0,y.inactiveEvents=X,y.zindex=15e3,y.defaults={prerender:E,id:E,overwrite:D,suppress:D,content:{text:D,attr:"title",title:E,button:E},position:{my:"top left",at:"bottom right",target:E,container:E,viewport:E,adjust:{x:0,y:0,mouse:D,scroll:D,resize:D,method:"flipinvert flipinvert"},effect:function(a,b){d(this).animate(b,{duration:200,queue:E})}},show:{target:E,event:"mouseenter",effect:D,delay:90,solo:E,ready:E,autofocus:E},hide:{target:E,event:"mouseleave",effect:D,delay:0,fixed:E,inactive:E,leave:"window",distance:E},style:{classes:"",widget:E,width:E,height:E,def:D},events:{render:F,move:F,show:F,hide:F,toggle:F,visible:F,hidden:F,focus:F,blur:F}};var ha,ia,ja,ka,la,ma="margin",na="border",oa="color",pa="background-color",qa="transparent",ra=" !important",sa=!!b.createElement("canvas").getContext,ta=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,ua={},va=["Webkit","O","Moz","ms"];sa?(ka=a.devicePixelRatio||1,la=function(){var a=b.createElement("canvas").getContext("2d");return a.backingStorePixelRatio||a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||1}(),ja=ka/la):ia=function(a,b,c){return"<qtipvml:"+a+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(b||"")+' style="behavior: url(#default#VML); '+(c||"")+'" />'},d.extend(v.prototype,{init:function(a){var b,c;c=this.element=a.elements.tip=d("<div />",{"class":S+"-tip"}).prependTo(a.tooltip),sa?(b=d("<canvas />").appendTo(this.element)[0].getContext("2d"),b.lineJoin="miter",b.miterLimit=1e5,b.save()):(b=ia("shape",'coordorigin="0,0"',"position:absolute;"),this.element.html(b+b),a._bind(d("*",c).add(c),["click","mousedown"],function(a){a.stopPropagation()},this._ns)),a._bind(a.tooltip,"tooltipmove",this.reposition,this._ns,this),this.create()},_swapDimensions:function(){this.size[0]=this.options.height,this.size[1]=this.options.width},_resetDimensions:function(){this.size[0]=this.options.width,this.size[1]=this.options.height},_useTitle:function(a){var b=this.qtip.elements.titlebar;return b&&(a.y===K||a.y===O&&this.element.position().top+this.size[1]/2+this.options.offset<b.outerHeight(D))},_parseCorner:function(a){var b=this.qtip.options.position.my;return a===E||b===E?a=E:a===D?a=new A(b.string()):a.string||(a=new A(a),a.fixed=D),a},_parseWidth:function(a,b,c){var d=this.qtip.elements,e=na+s(b)+"Width";return(c?u(c,e):u(d.content,e)||u(this._useTitle(a)&&d.titlebar||d.content,e)||u(d.tooltip,e))||0},_parseRadius:function(a){var b=this.qtip.elements,c=na+s(a.y)+s(a.x)+"Radius";return da.ie<9?0:u(this._useTitle(a)&&b.titlebar||b.content,c)||u(b.tooltip,c)||0},_invalidColour:function(a,b,c){var d=a.css(b);return!d||c&&d===a.css(c)||ta.test(d)?E:d},_parseColours:function(a){var b=this.qtip.elements,c=this.element.css("cssText",""),e=na+s(a[a.precedance])+s(oa),f=this._useTitle(a)&&b.titlebar||b.content,g=this._invalidColour,h=[];return h[0]=g(c,pa)||g(f,pa)||g(b.content,pa)||g(b.tooltip,pa)||c.css(pa),h[1]=g(c,e,oa)||g(f,e,oa)||g(b.content,e,oa)||g(b.tooltip,e,oa)||b.tooltip.css(e),d("*",c).add(c).css("cssText",pa+":"+qa+ra+";"+na+":0"+ra+";"),h},_calculateSize:function(a){var b,c,d,e=a.precedance===H,f=this.options.width,g=this.options.height,h="c"===a.abbrev(),i=(e?f:g)*(h?.5:1),j=Math.pow,k=Math.round,l=Math.sqrt(j(i,2)+j(g,2)),m=[this.border/i*l,this.border/g*l];return m[2]=Math.sqrt(j(m[0],2)-j(this.border,2)),m[3]=Math.sqrt(j(m[1],2)-j(this.border,2)),b=l+m[2]+m[3]+(h?0:m[0]),c=b/l,d=[k(c*f),k(c*g)],e?d:d.reverse()},_calculateTip:function(a,b,c){c=c||1,b=b||this.size;var d=b[0]*c,e=b[1]*c,f=Math.ceil(d/2),g=Math.ceil(e/2),h={br:[0,0,d,e,d,0],bl:[0,0,d,0,0,e],tr:[0,e,d,0,d,e],tl:[0,0,0,e,d,e],tc:[0,e,f,0,d,e],bc:[0,0,d,0,f,e],rc:[0,0,d,g,0,e],lc:[d,0,d,e,0,g]};return h.lt=h.br,h.rt=h.bl,h.lb=h.tr,h.rb=h.tl,h[a.abbrev()]},_drawCoords:function(a,b){a.beginPath(),a.moveTo(b[0],b[1]),a.lineTo(b[2],b[3]),a.lineTo(b[4],b[5]),a.closePath()},create:function(){var a=this.corner=(sa||da.ie)&&this._parseCorner(this.options.corner);return this.enabled=!!this.corner&&"c"!==this.corner.abbrev(),this.enabled&&(this.qtip.cache.corner=a.clone(),this.update()),this.element.toggle(this.enabled),this.corner},update:function(b,c){if(!this.enabled)return this;var e,f,g,h,i,j,k,l,m=this.qtip.elements,n=this.element,o=n.children(),p=this.options,q=this.size,r=p.mimic,s=Math.round;b||(b=this.qtip.cache.corner||this.corner),r===E?r=b:(r=new A(r),r.precedance=b.precedance,"inherit"===r.x?r.x=b.x:"inherit"===r.y?r.y=b.y:r.x===r.y&&(r[b.precedance]=b[b.precedance])),f=r.precedance,b.precedance===G?this._swapDimensions():this._resetDimensions(),e=this.color=this._parseColours(b),e[1]!==qa?(l=this.border=this._parseWidth(b,b[b.precedance]),p.border&&1>l&&!ta.test(e[1])&&(e[0]=e[1]),this.border=l=p.border!==D?p.border:l):this.border=l=0,k=this.size=this._calculateSize(b),n.css({width:k[0],height:k[1],lineHeight:k[1]+"px"}),j=b.precedance===H?[s(r.x===L?l:r.x===N?k[0]-q[0]-l:(k[0]-q[0])/2),s(r.y===K?k[1]-q[1]:0)]:[s(r.x===L?k[0]-q[0]:0),s(r.y===K?l:r.y===M?k[1]-q[1]-l:(k[1]-q[1])/2)],sa?(g=o[0].getContext("2d"),g.restore(),g.save(),g.clearRect(0,0,6e3,6e3),h=this._calculateTip(r,q,ja),i=this._calculateTip(r,this.size,ja),o.attr(I,k[0]*ja).attr(J,k[1]*ja),o.css(I,k[0]).css(J,k[1]),this._drawCoords(g,i),g.fillStyle=e[1],g.fill(),g.translate(j[0]*ja,j[1]*ja),this._drawCoords(g,h),g.fillStyle=e[0],g.fill()):(h=this._calculateTip(r),h="m"+h[0]+","+h[1]+" l"+h[2]+","+h[3]+" "+h[4]+","+h[5]+" xe",j[2]=l&&/^(r|b)/i.test(b.string())?8===da.ie?2:1:0,o.css({coordsize:k[0]+l+" "+k[1]+l,antialias:""+(r.string().indexOf(O)>-1),left:j[0]-j[2]*Number(f===G),top:j[1]-j[2]*Number(f===H),width:k[0]+l,height:k[1]+l}).each(function(a){var b=d(this);b[b.prop?"prop":"attr"]({coordsize:k[0]+l+" "+k[1]+l,path:h,fillcolor:e[0],filled:!!a,stroked:!a}).toggle(!(!l&&!a)),!a&&b.html(ia("stroke",'weight="'+2*l+'px" color="'+e[1]+'" miterlimit="1000" joinstyle="miter"'))})),a.opera&&setTimeout(function(){m.tip.css({display:"inline-block",visibility:"visible"})},1),c!==E&&this.calculate(b,k)},calculate:function(a,b){if(!this.enabled)return E;var c,e,f=this,g=this.qtip.elements,h=this.element,i=this.options.offset,j={};
    return a=a||this.corner,c=a.precedance,b=b||this._calculateSize(a),e=[a.x,a.y],c===G&&e.reverse(),d.each(e,function(d,e){var h,k,l;e===O?(h=c===H?L:K,j[h]="50%",j[ma+"-"+h]=-Math.round(b[c===H?0:1]/2)+i):(h=f._parseWidth(a,e,g.tooltip),k=f._parseWidth(a,e,g.content),l=f._parseRadius(a),j[e]=Math.max(-f.border,d?k:i+(l>h?l:-h)))}),j[a[c]]-=b[c===G?0:1],h.css({margin:"",top:"",bottom:"",left:"",right:""}).css(j),j},reposition:function(a,b,d){function e(a,b,c,d,e){a===Q&&j.precedance===b&&k[d]&&j[c]!==O?j.precedance=j.precedance===G?H:G:a!==Q&&k[d]&&(j[b]=j[b]===O?k[d]>0?d:e:j[b]===d?e:d)}function f(a,b,e){j[a]===O?p[ma+"-"+b]=o[a]=g[ma+"-"+b]-k[b]:(h=g[e]!==c?[k[b],-g[b]]:[-k[b],g[b]],(o[a]=Math.max(h[0],h[1]))>h[0]&&(d[b]-=k[b],o[b]=E),p[g[e]!==c?e:b]=o[a])}if(this.enabled){var g,h,i=b.cache,j=this.corner.clone(),k=d.adjusted,l=b.options.position.adjust.method.split(" "),m=l[0],n=l[1]||l[0],o={left:E,top:E,x:0,y:0},p={};this.corner.fixed!==D&&(e(m,G,H,L,N),e(n,H,G,K,M),j.string()===i.corner.string()&&i.cornerTop===k.top&&i.cornerLeft===k.left||this.update(j,E)),g=this.calculate(j),g.right!==c&&(g.left=-g.right),g.bottom!==c&&(g.top=-g.bottom),g.user=this.offset,o.left=m===Q&&!!k.left,o.left&&f(G,L,N),o.top=n===Q&&!!k.top,o.top&&f(H,K,M),this.element.css(p).toggle(!(o.x&&o.y||j.x===O&&o.y||j.y===O&&o.x)),d.left-=g.left.charAt?g.user:m!==Q||o.top||!o.left&&!o.top?g.left+this.border:0,d.top-=g.top.charAt?g.user:n!==Q||o.left||!o.left&&!o.top?g.top+this.border:0,i.cornerLeft=k.left,i.cornerTop=k.top,i.corner=j.clone()}},destroy:function(){this.qtip._unbind(this.qtip.tooltip,this._ns),this.qtip.elements.tip&&this.qtip.elements.tip.find("*").remove().end().remove()}}),ha=R.tip=function(a){return new v(a,a.options.style.tip)},ha.initialize="render",ha.sanitize=function(a){if(a.style&&"tip"in a.style){var b=a.style.tip;"object"!=typeof b&&(b=a.style.tip={corner:b}),/string|boolean/i.test(typeof b.corner)||(b.corner=D)}},B.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){this.create(),this.qtip.reposition()},"^style.tip.(height|width)$":function(a){this.size=[a.width,a.height],this.update(),this.qtip.reposition()},"^content.title|style.(classes|widget)$":function(){this.update()}},d.extend(D,y.defaults,{style:{tip:{corner:D,mimic:E,width:6,height:6,border:D,offset:0}}});var wa,xa,ya="qtip-modal",za="."+ya;xa=function(){function a(a){if(d.expr[":"].focusable)return d.expr[":"].focusable;var b,c,e,f=!isNaN(d.attr(a,"tabindex")),g=a.nodeName&&a.nodeName.toLowerCase();return"area"===g?(b=a.parentNode,c=b.name,a.href&&c&&"map"===b.nodeName.toLowerCase()?(e=d("img[usemap=#"+c+"]")[0],!!e&&e.is(":visible")):!1):/input|select|textarea|button|object/.test(g)?!a.disabled:"a"===g?a.href||f:f}function c(a){j.length<1&&a.length?a.not("body").blur():j.first().focus()}function e(a){if(h.is(":visible")){var b,e=d(a.target),g=f.tooltip,i=e.closest(W);b=i.length<1?E:parseInt(i[0].style.zIndex,10)>parseInt(g[0].style.zIndex,10),b||e.closest(W)[0]===g[0]||c(e)}}var f,g,h,i=this,j={};d.extend(i,{init:function(){return h=i.elem=d("<div />",{id:"qtip-overlay",html:"<div></div>",mousedown:function(){return E}}).hide(),d(b.body).bind("focusin"+za,e),d(b).bind("keydown"+za,function(a){f&&f.options.show.modal.escape&&27===a.keyCode&&f.hide(a)}),h.bind("click"+za,function(a){f&&f.options.show.modal.blur&&f.hide(a)}),i},update:function(b){f=b,j=b.options.show.modal.stealfocus!==E?b.tooltip.find("*").filter(function(){return a(this)}):[]},toggle:function(a,e,j){var k=a.tooltip,l=a.options.show.modal,m=l.effect,n=e?"show":"hide",o=h.is(":visible"),p=d(za).filter(":visible:not(:animated)").not(k);return i.update(a),e&&l.stealfocus!==E&&c(d(":focus")),h.toggleClass("blurs",l.blur),e&&h.appendTo(b.body),h.is(":animated")&&o===e&&g!==E||!e&&p.length?i:(h.stop(D,E),d.isFunction(m)?m.call(h,e):m===E?h[n]():h.fadeTo(parseInt(j,10)||90,e?1:0,function(){e||h.hide()}),e||h.queue(function(a){h.css({left:"",top:""}),d(za).length||h.detach(),a()}),g=e,f.destroyed&&(f=F),i)}}),i.init()},xa=new xa,d.extend(w.prototype,{init:function(a){var b=a.tooltip;return this.options.on?(a.elements.overlay=xa.elem,b.addClass(ya).css("z-index",y.modal_zindex+d(za).length),a._bind(b,["tooltipshow","tooltiphide"],function(a,c,e){var f=a.originalEvent;if(a.target===b[0])if(f&&"tooltiphide"===a.type&&/mouse(leave|enter)/.test(f.type)&&d(f.relatedTarget).closest(xa.elem[0]).length)try{a.preventDefault()}catch(g){}else(!f||f&&"tooltipsolo"!==f.type)&&this.toggle(a,"tooltipshow"===a.type,e)},this._ns,this),a._bind(b,"tooltipfocus",function(a,c){if(!a.isDefaultPrevented()&&a.target===b[0]){var e=d(za),f=y.modal_zindex+e.length,g=parseInt(b[0].style.zIndex,10);xa.elem[0].style.zIndex=f-1,e.each(function(){this.style.zIndex>g&&(this.style.zIndex-=1)}),e.filter("."+$).qtip("blur",a.originalEvent),b.addClass($)[0].style.zIndex=f,xa.update(c);try{a.preventDefault()}catch(h){}}},this._ns,this),void a._bind(b,"tooltiphide",function(a){a.target===b[0]&&d(za).filter(":visible").not(b).last().qtip("focus",a)},this._ns,this)):this},toggle:function(a,b,c){return a&&a.isDefaultPrevented()?this:void xa.toggle(this.qtip,!!b,c)},destroy:function(){this.qtip.tooltip.removeClass(ya),this.qtip._unbind(this.qtip.tooltip,this._ns),xa.toggle(this.qtip,E),delete this.qtip.elements.overlay}}),wa=R.modal=function(a){return new w(a,a.options.show.modal)},wa.sanitize=function(a){a.show&&("object"!=typeof a.show.modal?a.show.modal={on:!!a.show.modal}:"undefined"==typeof a.show.modal.on&&(a.show.modal.on=D))},y.modal_zindex=y.zindex-200,wa.initialize="render",B.modal={"^show.modal.(on|blur)$":function(){this.destroy(),this.init(),this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth>0)}},d.extend(D,y.defaults,{show:{modal:{on:E,effect:D,blur:D,stealfocus:D,escape:D}}}),R.viewport=function(c,d,e,f,g,h,i){function j(a,b,c,e,f,g,h,i,j){var k=d[f],s=u[a],t=v[a],w=c===Q,x=s===f?j:s===g?-j:-j/2,y=t===f?i:t===g?-i:-i/2,z=q[f]+r[f]-(n?0:m[f]),A=z-k,B=k+j-(h===I?o:p)-z,C=x-(u.precedance===a||s===u[b]?y:0)-(t===O?i/2:0);return w?(C=(s===f?1:-1)*x,d[f]+=A>0?A:B>0?-B:0,d[f]=Math.max(-m[f]+r[f],k-C,Math.min(Math.max(-m[f]+r[f]+(h===I?o:p),k+C),d[f],"center"===s?k-x:1e9))):(e*=c===P?2:0,A>0&&(s!==f||B>0)?(d[f]-=C+e,l.invert(a,f)):B>0&&(s!==g||A>0)&&(d[f]-=(s===O?-C:C)+e,l.invert(a,g)),d[f]<q[f]&&-d[f]>B&&(d[f]=k,l=u.clone())),d[f]-k}var k,l,m,n,o,p,q,r,s=e.target,t=c.elements.tooltip,u=e.my,v=e.at,w=e.adjust,x=w.method.split(" "),y=x[0],z=x[1]||x[0],A=e.viewport,B=e.container,C={left:0,top:0};return A.jquery&&s[0]!==a&&s[0]!==b.body&&"none"!==w.method?(m=B.offset()||C,n="static"===B.css("position"),k="fixed"===t.css("position"),o=A[0]===a?A.width():A.outerWidth(E),p=A[0]===a?A.height():A.outerHeight(E),q={left:k?0:A.scrollLeft(),top:k?0:A.scrollTop()},r=A.offset()||C,"shift"===y&&"shift"===z||(l=u.clone()),C={left:"none"!==y?j(G,H,y,w.x,L,N,I,f,h):0,top:"none"!==z?j(H,G,z,w.y,K,M,J,g,i):0,my:l}):C},R.polys={polygon:function(a,b){var c,d,e,f={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10},adjustable:E},g=0,h=[],i=1,j=1,k=0,l=0;for(g=a.length;g--;)c=[parseInt(a[--g],10),parseInt(a[g+1],10)],c[0]>f.position.right&&(f.position.right=c[0]),c[0]<f.position.left&&(f.position.left=c[0]),c[1]>f.position.bottom&&(f.position.bottom=c[1]),c[1]<f.position.top&&(f.position.top=c[1]),h.push(c);if(d=f.width=Math.abs(f.position.right-f.position.left),e=f.height=Math.abs(f.position.bottom-f.position.top),"c"===b.abbrev())f.position={left:f.position.left+f.width/2,top:f.position.top+f.height/2};else{for(;d>0&&e>0&&i>0&&j>0;)for(d=Math.floor(d/2),e=Math.floor(e/2),b.x===L?i=d:b.x===N?i=f.width-d:i+=Math.floor(d/2),b.y===K?j=e:b.y===M?j=f.height-e:j+=Math.floor(e/2),g=h.length;g--&&!(h.length<2);)k=h[g][0]-f.position.left,l=h[g][1]-f.position.top,(b.x===L&&k>=i||b.x===N&&i>=k||b.x===O&&(i>k||k>f.width-i)||b.y===K&&l>=j||b.y===M&&j>=l||b.y===O&&(j>l||l>f.height-j))&&h.splice(g,1);f.position={left:h[0][0],top:h[0][1]}}return f},rect:function(a,b,c,d){return{width:Math.abs(c-a),height:Math.abs(d-b),position:{left:Math.min(a,c),top:Math.min(b,d)}}},_angles:{tc:1.5,tr:7/4,tl:5/4,bc:.5,br:.25,bl:.75,rc:2,lc:1,c:0},ellipse:function(a,b,c,d,e){var f=R.polys._angles[e.abbrev()],g=0===f?0:c*Math.cos(f*Math.PI),h=d*Math.sin(f*Math.PI);return{width:2*c-Math.abs(g),height:2*d-Math.abs(h),position:{left:a+g,top:b+h},adjustable:E}},circle:function(a,b,c,d){return R.polys.ellipse(a,b,c,c,d)}},R.svg=function(a,c,e){for(var f,g,h,i,j,k,l,m,n,o=c[0],p=d(o.ownerSVGElement),q=o.ownerDocument,r=(parseInt(c.css("stroke-width"),10)||0)/2;!o.getBBox;)o=o.parentNode;if(!o.getBBox||!o.parentNode)return E;switch(o.nodeName){case"ellipse":case"circle":m=R.polys.ellipse(o.cx.baseVal.value,o.cy.baseVal.value,(o.rx||o.r).baseVal.value+r,(o.ry||o.r).baseVal.value+r,e);break;case"line":case"polygon":case"polyline":for(l=o.points||[{x:o.x1.baseVal.value,y:o.y1.baseVal.value},{x:o.x2.baseVal.value,y:o.y2.baseVal.value}],m=[],k=-1,i=l.numberOfItems||l.length;++k<i;)j=l.getItem?l.getItem(k):l[k],m.push.apply(m,[j.x,j.y]);m=R.polys.polygon(m,e);break;default:m=o.getBBox(),m={width:m.width,height:m.height,position:{left:m.x,top:m.y}}}return n=m.position,p=p[0],p.createSVGPoint&&(g=o.getScreenCTM(),l=p.createSVGPoint(),l.x=n.left,l.y=n.top,h=l.matrixTransform(g),n.left=h.x,n.top=h.y),q!==b&&"mouse"!==a.position.target&&(f=d((q.defaultView||q.parentWindow).frameElement).offset(),f&&(n.left+=f.left,n.top+=f.top)),q=d(q),n.left+=q.scrollLeft(),n.top+=q.scrollTop(),m},R.imagemap=function(a,b,c){b.jquery||(b=d(b));var e,f,g,h,i,j=(b.attr("shape")||"rect").toLowerCase().replace("poly","polygon"),k=d('img[usemap="#'+b.parent("map").attr("name")+'"]'),l=d.trim(b.attr("coords")),m=l.replace(/,$/,"").split(",");if(!k.length)return E;if("polygon"===j)h=R.polys.polygon(m,c);else{if(!R.polys[j])return E;for(g=-1,i=m.length,f=[];++g<i;)f.push(parseInt(m[g],10));h=R.polys[j].apply(this,f.concat(c))}return e=k.offset(),e.left+=Math.ceil((k.outerWidth(E)-k.width())/2),e.top+=Math.ceil((k.outerHeight(E)-k.height())/2),h.position.left+=e.left,h.position.top+=e.top,h};var Aa,Ba='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';d.extend(x.prototype,{_scroll:function(){var b=this.qtip.elements.overlay;b&&(b[0].style.top=d(a).scrollTop()+"px")},init:function(c){var e=c.tooltip;d("select, object").length<1&&(this.bgiframe=c.elements.bgiframe=d(Ba).appendTo(e),c._bind(e,"tooltipmove",this.adjustBGIFrame,this._ns,this)),this.redrawContainer=d("<div/>",{id:S+"-rcontainer"}).appendTo(b.body),c.elements.overlay&&c.elements.overlay.addClass("qtipmodal-ie6fix")&&(c._bind(a,["scroll","resize"],this._scroll,this._ns,this),c._bind(e,["tooltipshow"],this._scroll,this._ns,this)),this.redraw()},adjustBGIFrame:function(){var a,b,c=this.qtip.tooltip,d={height:c.outerHeight(E),width:c.outerWidth(E)},e=this.qtip.plugins.tip,f=this.qtip.elements.tip;b=parseInt(c.css("borderLeftWidth"),10)||0,b={left:-b,top:-b},e&&f&&(a="x"===e.corner.precedance?[I,L]:[J,K],b[a[1]]-=f[a[0]]()),this.bgiframe.css(b).css(d)},redraw:function(){if(this.qtip.rendered<1||this.drawing)return this;var a,b,c,d,e=this.qtip.tooltip,f=this.qtip.options.style,g=this.qtip.options.position.container;return this.qtip.drawing=1,f.height&&e.css(J,f.height),f.width?e.css(I,f.width):(e.css(I,"").appendTo(this.redrawContainer),b=e.width(),1>b%2&&(b+=1),c=e.css("maxWidth")||"",d=e.css("minWidth")||"",a=(c+d).indexOf("%")>-1?g.width()/100:0,c=(c.indexOf("%")>-1?a:1*parseInt(c,10))||b,d=(d.indexOf("%")>-1?a:1*parseInt(d,10))||0,b=c+d?Math.min(Math.max(b,d),c):b,e.css(I,Math.round(b)).appendTo(g)),this.drawing=0,this},destroy:function(){this.bgiframe&&this.bgiframe.remove(),this.qtip._unbind([a,this.qtip.tooltip],this._ns)}}),Aa=R.ie6=function(a){return 6===da.ie?new x(a):E},Aa.initialize="render",B.ie6={"^content|style$":function(){this.redraw()}}})}(window,document);
//# sourceMappingURL=jquery.qtip.min.map

//** FILE: fct.js **/


var VIEW_TYPE_LIST = "list";
var VIEW_TYPE_LIST_COUNT = "list-count";
var VIEW_TYPE_PROPVAL_LIST = "propval-list";
var VIEW_TYPE_PROPERTIES = "properties";
var VIEW_TYPE_PROPERTIES_IN = "properties-in";
var VIEW_TYPE_TEXT_PROPERTIES = "text-properties";
var VIEW_TYPE_CLASSES = "classes";
var VIEW_TYPE_TEXT = "text";
var VIEW_TYPE_TEXT_D = "text-d";
var VIEW_TYPE_ALPHABET = "alphabet";
var VIEW_TYPE_GEO = "geo";
var VIEW_TYPE_YEARS = "years";
var VIEW_TYPE_MONTHS = "months";
var VIEW_TYPE_WEEKS = "weeks";
var VIEW_TYPE_ENTITIES_LIST = "entities-list";
var VIEW_TYPE_GRAPHS = "graphs";
var VIEW_TYPE_DESCRIBE = "describe";

var NODE_TYPE_PROPERTY = "property";
var NODE_TYPE_PROPERTY_OF = "property-of";
var NODE_TYPE_CLASS = "class";
var NODE_TYPE_TEXT = "text";
var NODE_TYPE_VIEW = "view";
var NODE_TYPE_VALUE = "value";

var ID_QUERY = "0";
var ID_TEXT = "1";
var ID_VIEW = "2";

var ATTR_GRAPH_LABEL = "graphLabel";

// lifespan of query cache item, in hours
var POLICY_CACHE_REFRESH = 0; // TODO: not yet implemented


/* xml root element - because html() does not include the root element and we want to
 * include <report /> in the output. There may be a better way to do this.
 */
var _root = $('<vios />');

var query, text, view;

var fct_isDebug = true;

var fct_getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
}

var fct_isPermalink = false;
var fct_queryTimeout = '5000';

function fct_init(){

  // Simple helper function creates a new element from a name, so you don't have to add the brackets etc.
  $.createElement = function(name)
  {
    return $('<'+name+' />');
  };

  // JQ plugin appends a new element created from 'name' to each matched element.
  $.fn.appendNewElement = function(name)
  {
    this.each(function(i)
    {
      $(this).append('<'+name+' />');
    });
    return this;
  }

  $.fn.appendNewAttribute = function(name, value)
  {
    this.each(function(i)
    {
      $(this).attr(name, value);
    });
    return this;
  }


  var qxml = fct_getUrlParameter('qxml');

  if(qxml && qxml.length > 0){
    idct = fct_getUrlParameter('idCt');
    fct_isPermalink = true;
    _root.append($.parseHTML(qxml));

  }
  else {
    _root.append
    (
      // one method of adding a basic structure
      $('<query/>').attr('class', ID_QUERY).append
      // (
      //     $('<text class="'+ID_TEXT+'"/>')
      // ).append
      (
        $('<view class="'+ID_VIEW+'"/>')
          .appendNewAttribute('limit', '')
          .appendNewAttribute('type', '')
          .appendNewAttribute('offset', '')
      )
      // example of our plugin
      //.appendNewElement('property')
      //.appendNewAttribute('', '')
    );
  }

  // get a reference to query
  query = _root.find('query');

  text = query.find('text');
  view = query.find('view');


  //setQueryText('VIOS');
  //test();
  //setViewType(VIEW_TYPE_CLASSES);
  setViewLimit(SIZE_RESULT_SET);
  setViewOffset(0);
}

function getQuery(){
  return $(_root.children('query')); //TODO: this code needs to be refactored to use getter/setters in place of the calls to _root, also, need to replace the string concats with more efficient routines
}

function setQueryText(str){
  if(str == VALUE_DEFAULT_KEYWORDS_TEXT) {
    str = '';
    $('#keywords').val('');
  }
  query = getQuery();
  if( (!str || str.length <= 0) && $(_root.find('query > view')).attr('type') != 'list-count') return;
  if(_root.find('text').length <= 0) {
    query.append('<text class="'+ID_TEXT+'"/>');
    //text = _root.find('text');
  }
  query.find('text').text(str);
  if(!isExpandSearch) {
    query.find('text').attr('property', 'http://www.w3.org/2000/01/rdf-schema#label');
    $('#showMeMenu > option[value=text-properties]').remove();
  }
  else {
    query.find('text').removeAttr('property');
    var textOption =  $.createElement('option');
    textOption.attr('class', $('#showMeMenu > option[value='+VIEW_TYPE_PROPERTIES+']').attr('class'));
    textOption.val(VIEW_TYPE_TEXT_PROPERTIES);
    textOption.text('Text');
    $('#showMeMenu > option[value='+VIEW_TYPE_PROPERTIES+']').after(textOption);
  }
  query.find('text').attr('label', str.split('  ').join(' ').split(' ').join(' + '));
}

function getQueryGraph(){
  var g = _root.find('query').attr('graph');
  //if(!g || g.length <= 0) g = LABEL_ROOT;
  return g;
}

function getQueryGraphLabel(){
  var g = _root.find('query').attr(ATTR_GRAPH_LABEL);
  //if(!g || g.length <= 0) g = LABEL_ROOT;
  return g;
}

function setQueryGraph(g, label){
  _root.find('query').attr('graph', g);
  _root.find('query').attr(ATTR_GRAPH_LABEL, label);
}

function clearQueryGraph(){
  _root.find('query').removeAttr('graph');
  _root.find('query').removeAttr(ATTR_GRAPH_LABEL);
}

function getQueryText(){
  return _root.find('query text').text();
}

function setViewType(type, q){
  $(q).find('view').attr('type', type);
}

function setViewLimit(lim){
  _root.find('view').attr('limit', lim);
}

function setViewOffset(offset){
  _root.find('view').attr('offset', offset);
}

function getViewType(type){
  return _root.find('view').attr('type');
}

function getViewLimit(lim){
  return parseInt(_root.find('view').attr('limit'));
}

function getViewOffset(lim){
  return parseInt(_root.find('view').attr('offset'));
}


function getSparql(xml){
  return $($(xml).find("fct\\:sparql")[0]).text();
}

function getTime(xml){
  return $($(xml).find("fct\\:time")[0]).text();
}

function getComplete(xml){
  return $($(xml).find("fct\\:complete")[0]).text();
}

function getTimeout(xml){
  return $($(xml).find("fct\\:timeout")[0]).text();
}

function getDbActivity(xml){
  return $($(xml).find("fct\\:db-activity")[0]).text();
}

//var fct_sparql, fct_time, fct_complete, fct_timeout, fct_dbActivity;

var fct_dataSpace = "http://lod.openlinksw.com/fct/service";
var fct_dataSpaceSparql = "http://lod.openlinksw.com/sparql";
var fct_dataSpaceLabel = "LOD Cloud";
//var fct_dataSpace = "http://myopenlink.net/fct/service";

// returns a Java hashCode, see here: https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
String.prototype.hashCode = function(){
  var hash = 0;
  if (this.length == 0) return hash;
  for (i = 0; i < this.length; i++) {
    char = this.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

// TODO: need to implement a super-fast server-side cache as a fallback if the local cache does not contain the query
// the last resort is to execute the query against the cluster
// save the remote cached value locally
var fct_cache = {}; // results will be cached in this object
var fct_isCache = true;

function removeCacheItem(id){
  try{
    resp = localStorage.removeItem(id);
  }
  catch(err){ // TODO: what if localstorage is available, but something else went wrong on this try
    delete cache.id;
  }
}

function fct_removeVariableData(query){
  query.find('*').removeAttr('class');
  query.find('*').removeAttr('label');
  query.find('*').removeAttr('varname');
  query.find('*').removeAttr('isGroupBy');
  query.removeAttr('timeout');
  return query;
}

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}


function fct_query(q, viewType, opt){
  fct_isCache = $('#isCache').is(':checked');
  fct_isDebug = $('#isDebug').is(':checked');
  fct_queryTimeout = getQueryTimeout();
  //console.clear();
  setViewType(viewType, q);
  //q = _root.find('query *').removeAttr('class'); // be sure semantically equivalent queries are non-unique
  //console.log('query: ' + _root.find('query').prop('outerHTML'));
  q = q.clone();
  if(fct_isDebug) console.log("Query: " + $(q).prop('outerHTML') );
  if(q.children.length == 2 && q.find('text').text() == '') q.find('text').remove(); // POI: root query should  have missing text element rather than blank text node, the /fct returns distinct results for each
  q = fct_removeVariableData(q);
  var qstr = q.prop('outerHTML');
  var id = (qstr) ? (qstr).hashCode() : 0;
  q.attr('timeout', fct_queryTimeout); // add all neccessary variable data back to the query
  var resp;
  if(fct_isCache){
    try{
      resp = localStorage.getItem(id);
      if(!resp || resp.length == 0) resp = fct_cache[id];
    }
    catch(err){ // TODO: what if localstorage *is* available, but something else went wrong on this try
      resp = fct_cache[id];
      if(fct_isDebug) console.log('Cache failed: ' + err);
    }
  }

  if (resp != null) { // if exist on cache
    switch(viewType){
      case VIEW_TYPE_LIST: {
        fct_handleListResults(resp, opt);
      } break;
      case VIEW_TYPE_LIST_COUNT: {
        fct_handleListCountResults(resp, opt);
      } break;
      case VIEW_TYPE_TEXT: {
        fct_handleTextResults(resp, opt);
      }; break;
      case VIEW_TYPE_CLASSES: {
        fct_handleClassesResults(resp, opt);
      }; break;
      case VIEW_TYPE_PROPERTIES: {
        fct_handlePropertiesResults(resp, opt);
      }; break;
      case VIEW_TYPE_PROPERTIES_IN: {
        fct_handlePropertiesInResults(resp, opt);
      }; break;
      case VIEW_TYPE_TEXT_PROPERTIES: {
        fct_handleTextPropertiesResults(resp, opt);
      }; break;
      case VIEW_TYPE_GRAPHS: {
        fct_handleGraphResults(resp, opt);
      }; break;
    }
    updatePermalink();
    return;
  }
  var req = $.ajax({
    url: fct_dataSpace,
    data: $(q).prop('outerHTML'),
    type: 'POST',
    contentType: "text/xml",
    dataType: "text", // POI: can't do dataType: xml, since the service sometimes returns malformed XML
    cache: fct_isCache,
    beforeSend: function(jqXHR, settings) {
      jqXHR.url = settings.url;
      jqXHR.data = settings.data;
    },
    success : function(xml) {
      //xml = xml.replace('fct:','');

      /* there's a bug that causes "filter ..." to appear at the beginning of the response body, sometimes
      for example, this query

      <query class='0'><text class="1">Sherman</text><property iri="http://www.openlinksw.com/schema/attribution#providedBy"><value iri="http://www.linkedin.com#this" datatype="uri"></value></property><view class="2" limit="30" type="list-count" offset="0"></view></query>

      */

      //console.log("it works");

      //if(!opt) opt = new Object();
      var sparql = getSparql(xml);
      var time = getTime(xml);
      var complete = getComplete(xml);
      var timeout = getTimeout(xml);
      var dbActivity = getDbActivity(xml);
      /**/
      if(fct_isDebug){
        console.log("Sparql: " + sparql );
        console.log("Time: " + time );
        console.log("Complete: " + complete );
        console.log("Timeout: " + timeout );
        console.log("Db Activity: " + dbActivity );
        console.log("View Type: " + viewType);
      }

      if(!xml.startsWith('<')) {
        var filter = xml.substring(0, xml.indexOf('<fct:facets'));
        xml = xml.substring(xml.indexOf('<fct:facets'));
        xml = xml.replace('fct:facets ', 'fct:facets timestamp="' + new Date().getTime() + '" ');
        //xml = xml.replace('fct:facets ', 'fct:facets sparql="' + sparql + '" ');
        sparql = sparql.replace('} group', filter + '} group');
      }

      if(complete === 'no') {
        fct_handleIncompleteResults($("fct\\:row", xml).length, opt, viewType, sparql, time, complete, timeout, dbActivity);
        if(fct_isDebug) console.log('Results incomplete! Cache id: ' + id); // TODO: need to handle this by asking the user to increase the timeout of this query
      }
      if(complete === 'yes' || isCachable($("fct\\:row", xml).length)) { // POI: don't cache incomplete results, should this be the policy? I clicked phone on the below link, and got no results and incomplete error, but it cached the results
        // so I had to turn cache off (or increase timeout) to get the actual list, but when I turn cache back on, I get the empty results that were cached on the timeout response
        // http://myopenlink.net/DAV/home/sdmonroe/poc_draft.html?groupBy=GROUPBY-NONE&showMe=properties&qxml=%3Cquery%20class%3D%220%22%20graph%3D%22%22%20graphlabel%3D%22%22%3E%3Cclass%20class%3D%22-589865979%22%20iri%3D%22http%3A%2F%2Flinkedgeodata.org%2Fontology%2FShop%22%20label%3D%22Shop%22%3E%3C%2Fclass%3E%3Ctext%20class%3D%221%22%20label%3D%22%22%3E%3C%2Ftext%3E%3Cview%20class%3D%222%22%20limit%3D%2230%22%20type%3D%22properties%22%20offset%3D%220%22%3E%3C%2Fview%3E%3C%2Fquery%3E

        if(fct_isCache){
          try{
            localStorage.setItem(id, xml);
          }
          catch(err){
            fct_cache[id] = xml;
            if(fct_isDebug) console.log('Cache failed: ' + err);
          }
        }
      }

      switch(viewType){
        case VIEW_TYPE_LIST: {
          fct_handleListResults(xml, opt);
        } break;
        case VIEW_TYPE_LIST_COUNT: {
          fct_handleListCountResults(xml, opt);
        } break;
        case VIEW_TYPE_TEXT: {
          fct_handleTextResults(xml, opt);
        }; break;
        case VIEW_TYPE_CLASSES: {
          fct_handleClassesResults(xml, opt);
        }; break;
        case VIEW_TYPE_PROPERTIES: {
          fct_handlePropertiesResults(xml, opt);
        }; break;
        case VIEW_TYPE_PROPERTIES_IN: {
          fct_handlePropertiesInResults(xml, opt);
        }; break;
        case VIEW_TYPE_TEXT_PROPERTIES: {
          fct_handleTextPropertiesResults(xml, opt);
        }; break;
        case VIEW_TYPE_GRAPHS: {
          fct_handleGraphResults(xml, opt);
        }; break;
      }

    },
    error : function (xhr, ajaxOptions, thrownError){
      if(fct_isDebug){
        console.log(xhr.status);
        console.log(thrownError);
        if(xhr.status == 500) alert('Server error: ' + thrownError + ' from ' + xhr.url);
      }
      var currentdataspace = $('#dataSpaceMenu :selected').attr('value');
      var currentdataspacelabel = $('#dataSpaceMenu :selected').text();
      /*window.open(
        'mailto:sdmonroe@gmail.com?subject=Data%20server%20error&body=' +
              'The server '+currentdataspacelabel+' ('+currentdataspace+') threw this error: ' +
              '%0A%0AError message: ' + thrownError +
              '%0ADate: '+formatDate(new Date()) +
              '%0AUrl: ' + xhr.url +
              '%0AStatus: ' + xhr.status +
              '%0APOST data: %0A'+ encodeURIComponent( xhr.data )+
              ''
      );*/
      fct_handleError(xhr, ajaxOptions, thrownError);
    }
  });
  updatePermalink();
  return req;
}

function fct_sparql(sparql, opt){
  fct_isCache = $('#isCache').is(':checked');
  fct_isDebug = $('#isDebug').is(':checked');
  fct_queryTimeout = $('#queryTimeout :selected').attr('value');
  //console.clear();
  //setViewType(viewType, q);
  //q = _root.find('query *').removeAttr('class'); // be sure semantically equivalent queries are non-unique
  //console.log('query: ' + _root.find('query').prop('outerHTML'));
  //q = q.clone();
  if(fct_isDebug) console.log("Sparql: " + sparql);
  //if(q.children.length == 2 && q.find('text').text() == '') q.find('text').remove(); // POI: root query should  have missing text element rather than blank text node, the /fct returns distinct results for each
  //q = fct_removeVariableData(q);
  //var qstr = q.prop('outerHTML');
  //var qstr = q.prop('outerHTML');
  var id = sparql ? sparql.hashCode() : 0;
  //q.attr('timeout', fct_queryTimeout);
  var resp;
  if(fct_isCache){
    try{
      resp = localStorage.getItem(id);
      if(!resp || resp.length == 0) resp = fct_cache[id];
    }
    catch(err){ // TODO: what if localstorage *is* available, but something else went wrong on this try
      resp = fct_cache[id];
    }
  }

  if (resp != null) { // if exist on cache
    //console.log('sparql results: ' + resp);

    if(!opt){
      fct_handleSparqlResults(resp, opt);
    }
    else {
      if(opt.tar == 'showMeMenu'){
        fct_handleSparqlShowMeCount(resp, opt);

      }
      else if(opt.tar == 'groupByMenu'){
        fct_handleSparqlGroupByCount(resp, opt);
      }
    }

    updatePermalink();
    return;
  }
  var req = $.ajax({
    url: fct_dataSpaceSparql + "?query=" + encodeURIComponent(sparql),
    type: 'GET',
    headers: {Accept: "application/sparql-results+xml"},
    dataType: "text", // POI: can't do dataType: xml, since the service sometimes returns malformed XML
    beforeSend: function(jqXHR, settings) {
      jqXHR.url = settings.url;
    },
    success : function(xml) {

      if(!opt){
        fct_handleSparqlResults(xml, opt);
      }
      else {
        if(opt.tar == 'showMeMenu'){
          fct_handleSparqlShowMeCount(xml, opt);

        }
        else if(opt.tar == 'groupByMenu'){
          fct_handleSparqlGroupByCount(xml, opt);
        }
      }
      //console.log('sparql results: ' + xml);
      if(fct_isCache){
        try{
          localStorage.setItem(id, xml);
        }
        catch(err){
          fct_cache[id] = xml;
        }
      }

    },
    error : function (xhr, ajaxOptions, thrownError){
      if(fct_isDebug){
        console.log(xhr.status);
        console.log(thrownError);
        if(xhr.status == 500) alert('Server error' + thrownError + " from " + xhr.url);
      }
      fct_handleError(xhr, ajaxOptions, thrownError);
    }
  });
  updatePermalink();
  return req;
}

function fct_handleSparqlShowMeCount(xml, opt){
  var results = $(xml).find('results');
  $('result', results).each(function(i){
    var ct = $(this).text().trim();
    var x = showMePage+1;
    x = x * SIZE_RESULT_SET;
    if(x > ct) x = ct;
    $('#showMeCount').text( x + ' / ' + ct);
  });
}

function fct_handleSparqlGroupByCount(xml, opt){
  var results = $(xml).find('results');
  $('result', results).each(function(i){
    var ct = $(this).text().trim();
    var x = page+1;
    x = x * SIZE_RESULT_SET;
    if(x > ct) x = ct;
    $('#groupByCount').text( x + ' / ' + ct);
    $('#groupByTableCount').text( x + ' / ' + ct);
  });
}


function buildResultTableHeaders(row, row2, varNames, varCt, node){
  // the SPARQL projection items are listed in depth-first order, starting from the focus

  /**/
  if(!$(varNames[varCt]).attr('name')){
    console.log('ct: ' + varCt + ' node: ' + $(node).prop('nodeName'));
    return;
  }



  if(!node) node = getMainFocus();
  var id = node.attr('class');
  var label = node.attr('label');
  var col = $.createElement('th');

  var action = 'remove';
  var outline = '';
  var val = node.children('value');
  var classes = node.children('class');
  var isPropOf = val.prop('nodeName') === 'property-of';

  node.attr('varname', $(varNames[varCt]).attr('name').replace('?', ''));
  varCt++;

  var valStr = VALUE_ANON_NODE;

  if(!val || val.length <= 0) {
    if(!classes || classes.length <= 0) action = "removeValue";
    if(id == ID_QUERY) valStr = label;

    else{
      if(classes){
        valStr = classes.attr('label');
      }
      else {
        valStr = VALUE_ANON_NODE;
      }
    }
  }
  else {
    valStr = val.text();
  }

  outline = ((!val || val.length <= 0)) ? 'outline-': '';

  //var ret = '<div style="padding: 0px; background-color:transparent;" class="row" title="'+tooltip+'" id="nav'+id+'" '+focus+'>';
  var colStr = '';
  //col += '<div onclick="javascript:'+action+'(\''+id+'\')" class="via text-ellipsis">';
  //colStr += '<h3 class="fw-semi-bold" style="padding-bottom:4px">';
  colStr += label;
  colStr += ((isPropOf)?'&nbsp;<span style="margin-bottom:4px" class="badge badge-pill badge-default">role</span>':'');
  //colStr += '</h3>';
  //colStr += '</div>';
  col.html(colStr);
  row.append(col);


  col = $.createElement('td');
  colStr = '<button id="focusTableValue'+id+'" class="btn-rounded-f btn btn-'+outline+'default btn-block text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">';
  colStr += valStr;
  colStr += '</button>';
  col.html(colStr);
  row2.append(col);
  //ret += '</div>';



  node.children('property, property-of').each(function (i){
    buildResultTableHeaders(row, row2, varNames, varCt, $(this));
  });
  return row;




}

function fct_handleSparqlResults(xml, opt){
  $('#resultsTable > thead').empty();
  $('#resultsTable > tbody').empty();
  //console.log('xml' + $(xml).html());
  var results = $(xml).find('results');
  var row, row2, col;
  row = $.createElement('tr');
  row2 = $.createElement('tr');
  var variables = $("variable", xml);

  var varCt = 0;
  buildResultTableHeaders(row, row2, variables, varCt);


  /*
      variables.each(function(j) {
          col = $.createElement('th');
          var label = $(this).attr('name');
          label = $(_root.find(    '[varname=' +    label   + ']'  )[0]).attr('label') ;
          col.text(label);
          col.addClass('resultTableHeader');

          var recordView = $.createElement('span');
          recordView.text('Record View');
          recordView.on('click', function (e){
            undoTable();
          });
          col.append(recordView);
          if($(this).attr('name').indexOf('o1') == -1){
              row.append(col);
          }
      });

  */

  $('#resultsTable > thead').append(row);
  $('#resultsTable > thead').append(row2);
  $("result", results).each(function(i) {
    row = $.createElement('tr');
    var cols = {};
    variables.each(function(j) {
      col = $.createElement('td');
      var header = $(this).attr('name');
      //if(header.indexOf('?o')==-1) col.addClass('resultTableCell');
      if(header.indexOf('o1') == -1){ // make text results optional
        cols[header] = col;
      }
      //console.log('fcthsr: header: ' + header);
    });
    //console.log($(this).html());
    $("binding", this).each(function(j) {
      var header = $(this).attr("name");
      var value = $(this).text();
      var datatype = $($(this).children()[0]).prop('nodeName').toLowerCase();

      if(datatype == 'uri'){
        var label = processLabel(value);
        label = getFavicon(value) + '&nbsp;<a href="' + value + '">' + label + '</a>';
        value = label;
      }


      //console.log('fcthsr: header2: ' + header);
      col = cols[header];
      if(col){
        col.append("<span>"+value+"</span>");
        row.append(col);
      }
    });
    $('#resultsTable > tbody').append(row);
  });
  $('#groupByTableHeader').removeClass('loading');
}

function isCachable(sz){
  return sz >= 0.7 * SIZE_RESULT_SET;
}

function fct_handleIncompleteResults(resultSize, opt, viewType, fct_sparql, fct_time, fct_complete, fct_timeout, fct_dbActivity){
  if(resultSize > 0) return;
  beep();
  $('.slider-handle').addClass('incompleteAlert');

  var componentId;
  switch(viewType){
    case VIEW_TYPE_LIST: {
      componentId = 'recordsListWidgetContainer';
    } break;
    case VIEW_TYPE_LIST_COUNT: {
      if(!opt) {
        componentId = 'recordsListWidgetContainer';
      }
      else {
        if(opt.tag == TAG_PROPERTY){
          componentId = 'showMeColumn';
        }
        else if(opt.tag == TAG_PROPERTY_OF){
          componentId = 'showMeColumn';
        }
        else if(opt.tag == TAG_CLASS){
          componentId = 'showMeColumn';
        }
        else{
          componentId = 'recordsListWidgetContainer';
        }
      }

    } break;
    case VIEW_TYPE_TEXT: {
      componentId = 'recordsListWidgetContainer';
    }; break;
    case VIEW_TYPE_CLASSES: {
      componentId = 'showMeColumn';
    }; break;
    case VIEW_TYPE_PROPERTIES: {
      if(opt == OPT_SEND_TO_GROUP_BY){
        componentId = 'recordsListWidgetContainer';
      }
    }; break;
    case VIEW_TYPE_PROPERTIES_IN: {
      componentId = 'showMeColumn';
    }; break;
    case VIEW_TYPE_TEXT_PROPERTIES: {
      componentId = 'showMeColumn';
    }; break;
    case VIEW_TYPE_GRAPHS: {
      componentId = 'showMeColumn';
    }; break;
  }

  $('#'+componentId).addClass('incompleteComponentAlert');
  setTimeout(function(){
    $('.slider-handle').removeClass('incompleteAlert');
    $('#'+componentId).removeClass('incompleteComponentAlert');
  }, 2000);
}


function fct_handleError(xhr, ajaxOptions, thrownError){
  $('*').removeClass('loading');
}

function fct_handleListResults(xml, opt){
  loadInstances(xml, opt);
  $('#' + opt.parentId).removeClass('loading');
  $('#groupByHeader').removeClass('loading');



}

function fct_handleListCountResults(xml, opt){
  var showme = $('#showMeMenu :selected').attr('value');
  if(opt != undefined){
    //console.log('opt:'+opt)
    if(opt.tag == TAG_PROPERTY){
      if(showme === VIEW_TYPE_PROPERTIES){
        loadPropertyValues(xml, opt);
      }
      $('#' + opt.parentId).removeClass('loading');
      $('#groupByHeader').removeClass('loading');
    }
    else if(opt.tag == TAG_PROPERTY_OF){
      if(showme === VIEW_TYPE_PROPERTIES_IN){
        loadPropertyOfValues(xml, opt);
      }
      $('#' + opt.parentId).removeClass('loading');
      $('#groupByHeader').removeClass('loading');
    }
    else if(opt.tag == TAG_CLASS){
      if(showme === VIEW_TYPE_CLASSES){
        loadClassInstances(xml, opt);
      }
      $('#' + opt.parentId).removeClass('loading');
      $('#groupByHeader').removeClass('loading');
    }

  }
  else {
    $('#describe').attr('src', '');
    //  $('#'+viewType+'').empty();

    var sparql = processSparql(xml);
    var focus = getSparqlFocus(sparql);
    //console.log('focus: ' + focus);
    var vars = getSparqlVars(sparql);
    /*
    (sparql.match(/\s+\?([s|p|o|c]\d)|\?g\s+/mgi).sort()
       .filter(function(element, index, array) {
           return index == array.indexOf(element) && array[index].indexOf('?c') == -1 && array[index].indexOf('?g'); // don't return duplicates and remove count vars
       }) + '').replaceAll(',', ' ');
       */
    vars = vars.substring(vars.indexOf(focus)); // limit the view to the focus and its children, the sort above ensures the vars are listed in the order they are listed in the query
    //console.log("sparql vars: "+vars);
    //console.log("Sparql: " + sparql );
    sparql = setSparqlProjection(sparql, vars);

    loadGroupByResults(xml, focus);
    $('#groupByHeader').removeClass('loading');
    //$('#focusHeader').removeClass('loading');
    var opt = new Object();
    opt.tar = 'groupByMenu';
    //var sparql = processSparql(xml);
    fct_sparql(getSparqlCount(sparql), opt);


    $('#groupByTableHeader').addClass('loading');
    fct_sparql(sparql);

    //console.log("xml: " + xml );
  }
}

function processSparql(xml){
  var sparql = $($(xml).find("fct\\:sparql")[0]).text().trim();
  while(sparql.indexOf('  ') > 0) sparql = sparql.replaceAll('  ', ' ');
  if(sparql.indexOf('group')>0) {
    var limit = '';
    if(sparql.indexOf('limit')>0){
      limit = sparql.substring(sparql.indexOf('limit'));
    }
    sparql = sparql.substring(0, sparql.indexOf('group')) + limit;
  }
  return sparql;

}

function getSparqlFocus(sparql){
  var focus = sparql.match(/select\s*\?[s|p|o|c]\d/mgi)[0]; // POI: the ?o1 var must be part of the projection, or the SPARQL engine will complain, it is referenced in the ORDER clause
  focus = focus.substring(focus.indexOf('select ')+'select '.length);
  return focus;
}

function getSparqlVars(sparql){
  var vars = (sparql.match(/\s+\?([s|p|o|c]\d)|\?g\s+/mgi).sort()
    .filter(function(element, index, array) {
      return index == array.indexOf(element) && array[index].indexOf('?c') == -1 && array[index].indexOf('?g'); // don't return duplicates and remove count vars
    }) + '').replaceAll(',', ' ');
  if(vars.indexOf('?o1')==-1)vars = '?o1 ' + vars; // ?o1 is required for text match
  return vars;
}

function setSparqlProjection(sparql, projection){
  sparql = sparql.replace(/select.*where/gi, 'select ' + projection + ' where');
  sparql = sparql.replace(/{\s*select.*distinct.*?{/gi, '{ select distinct ' + projection + ' {'); // besure to use .*? non-greedy match to match only the first curly brace
  return sparql;
}

function getSparqlCount(sparql, type){
  var ctVar = (type==VIEW_TYPE_GRAPHS) ? '?g' : getSparqlFocus(sparql)
  switch(type) {
    case VIEW_TYPE_CLASSES: ctVar = ctVar + 'c'; break;
    case VIEW_TYPE_PROPERTIES: ctVar = ctVar + 'p'; break;
    case VIEW_TYPE_PROPERTIES_IN: ctVar = ctVar + 'ip'; break;
    case VIEW_TYPE_TEXT_PROPERTIES: ctVar = ctVar + 'textp'; break;
    case VIEW_TYPE_GRAPHS: ctVar = '?g'; break; // redundant
    case VIEW_TYPE_TEXT: ctVar = '?o1'; break;
    default: ctVar = getSparqlFocus(sparql); break;
  }
  if(VIEW_TYPE_TEXT != type && sparql.indexOf('group')>0) sparql = sparql.substring(0, sparql.indexOf('group'));
  sparql = setSparqlProjection(sparql, 'count(distinct '+ctVar+') as ?c1');
  if(sparql.match(/{\s*select.*distinct.*?{/gi)){
    sparql = sparql.substring(sparql.indexOf('select')+6);
    sparql = sparql.substring(sparql.indexOf('select'), sparql.lastIndexOf('}') - 1);
  }
  //if(sparql.indexOf('distinct') < 0) sparql = sparql.replace('select ', 'select distinct ');
  return sparql;
}

function fct_handleTextResults(xml, opt){
  var groupby = $('#groupByMenu :selected').attr('value');
  loadTextResults(xml);
  $('#groupByHeader').removeClass('loading');
  //$('#focusHeader').removeClass('loading');
  $('#groupByCount').text('');
  /*
  var opt = new Object();
  opt.tar = 'groupByMenu';
  var sparql = processSparql(xml);
  fct_sparql(getSparqlCount(sparql, VIEW_TYPE_TEXT), opt);
  */

  //updatePermalink();
}

function fct_handleClassesResults(xml, opt){
  var showme = $('#showMeMenu :selected').attr('value');
  if(showme === VIEW_TYPE_CLASSES){
    loadCategoriesResults(xml);
  }
  $('#showMeHeader').removeClass('loading');
  var opt = new Object();
  opt.tar = 'showMeMenu';
  var sparql = processSparql(xml);
  fct_sparql(getSparqlCount(sparql, VIEW_TYPE_CLASSES), opt);
}

function fct_handlePropertiesResults(xml, opt){
  var showme = $('#showMeMenu :selected').attr('value');
  if(opt == OPT_SEND_TO_GROUP_BY){
    // $('#'+viewType+'').empty();
    loadGroupByMenu(xml);
    $('#groupByHeader').removeClass('loading');

    if(qGroupBy && qGroupBy.length > 0){
      var qgb = decodeURIComponent(qGroupBy);
      if(qgb.endsWith(DELIMIT_GROUP_BY_REVERSE_PROPERTY)){
        qgb = GROUP_BY_NONE_VALUE;
      }
      selectMenuItem('groupByMenu', qgb);
      //selectGroupBy(true);
      //if(isDebug) console.log('groupByLoaded: ' + qgb + ', old value:' + qGroupBy);
      //doQuery(keywords);
      //selectGroupBy();
    }
    else {
      //if(isDebug) console.log('groupByNotLoaded: ' + qgb + ', old value:' + qGroupBy);
    }

  }
  else {
    if(showme === VIEW_TYPE_PROPERTIES){
      loadPropertiesResults(xml);
    }
    $('#showMeHeader').removeClass('loading');
    var opt = new Object();
    opt.tar = 'showMeMenu';
    var sparql = processSparql(xml);
    fct_sparql(getSparqlCount(sparql, VIEW_TYPE_PROPERTIES), opt);
  }
}

function fct_handlePropertiesInResults(xml, opt){
  var showme = $('#showMeMenu :selected').attr('value');
  if(showme === VIEW_TYPE_PROPERTIES_IN){
    loadPropertiesInResults(xml);
  }
  $('#showMeHeader').removeClass('loading');
  var opt = new Object();
  opt.tar = 'showMeMenu';
  var sparql = processSparql(xml);
  fct_sparql(getSparqlCount(sparql, VIEW_TYPE_PROPERTIES_IN), opt);
}

function fct_handleTextPropertiesResults(xml, opt){
  var showme = $('#showMeMenu :selected').attr('value');
  if(showme === VIEW_TYPE_TEXT_PROPERTIES){
    loadPropertiesResults(xml);
  }
  $('#showMeHeader').removeClass('loading');
  var opt = new Object();
  opt.tar = 'showMeMenu';
  var sparql = processSparql(xml);
  fct_sparql(getSparqlCount(sparql, VIEW_TYPE_TEXT_PROPERTIES), opt);
}

function fct_handleGraphResults(xml, opt){
  var showme = $('#showMeMenu :selected').attr('value');
  if(showme === VIEW_TYPE_GRAPHS){
    loadGraphResults(xml);
  }
  $('#showMeHeader').removeClass('loading');
  var opt = new Object();
  opt.tar = 'showMeMenu';
  var sparql = processSparql(xml);
  fct_sparql(getSparqlCount(sparql, VIEW_TYPE_GRAPHS), opt);
}

function hasMainFocus(id){
  //if(id == ID_TEXT) id = ID_QUERY;
  var test = $(_root.find('.'+ID_QUERY+ ' view')).parent();
  var ret = test.attr('class');
  /*if($(test).attr('class') == ID_TEXT){
    ret = q.find('view');
    //console.log('query ('+ret+'): ' + query.html());
  }*/
  return ret == id;
}

function getMainFocus(){
  return $(_root.find('.'+ID_QUERY + ' view')).parent();
}

function getFocus(q){
  return q.find('view').parent();
}

function takeFocus(tar, q){
  //console.log('tarid: ' + $(tar).attr('class') + ' qId: ' + $(q).attr('class'));
  $(q).find('view').appendTo(tar);
}

function takeMainFocus(id, silent){

  //if(id == ID_TEXT) id = ID_QUERY;
  var query = getQuery();
  takeFocus( _root.find('.'+id), getFocus(query));
  //console.log('query after take focus: ' + $('query').html());

  getFocus(query).find('view').attr('offset', 0);
  getMainFocus().find('view').attr('offset', 0);
  page = 0;


  if(!silent) doQuery(getQueryText());
  //$('#breadcrumbs').find('td').removeClass('focus');
  //$('#facetCollector').find('td').removeClass('focus');
  //$('#nav'+((id == ID_QUERY) ? ID_TEXT : id) ).addClass('focus');

}

function remove(id, silent){
  // give focus to parent if hasFocus
  // remove from the query
  // remove from breadcrumbs and facetCollector
  // re-run the query
  //query = _root.find('query');

  if(!id || id.length <= 0) return;

  if(id == ID_QUERY) {
    if(!_root.find('query').attr('graph') || _root.find('query').attr('graph').length <= 0){ // POI: in the directory structure, the graph is below the keywords, and repository is above the keywords, and root is root
      $(_root.find('query text')).remove(); // POI: the /fct API returns different results depending on if <text> has empty string value, or if <text> is missing
      clearKeywords();
    }
    else{
      clearQueryGraph();
    }
  }
  else {
    takeMainFocus($(_root.find('.'+id )).parent().attr('class'), silent);
    $(_root.find('.'+id )).remove();
  }

  if(!silent) doQuery(getQueryText());

}

function removeValue(id){
  var tar = _root.find('.'+id + ' > value')
  if(tar.length > 0) tar.remove();
  else{
    tar = _root.find('.'+id + ' > class')
    if(tar.length > 0) tar[0].remove();
  }
  //query = _root.find('query');
  doQuery(getQueryText());
}

function removeFacet(id){
  // console.log('removeFacet: ' + id);
  _root.find('.'+id).remove();
  doQuery(getQueryText());
}

function setValue(id, val, valLabel, datatype){
  val = deSanitizeIRI(val);
  valLabel = deSanitizeLabel(valLabel);
  var p = getMainFocus();

  //if(p.attr('id') == ID_QUERY) clearKeywords();

  var v_found = false;
  var v = _root.find('.'+p.attr('class') + ' > value');
  if(v.length <= 0) {
    v = $.createElement('value');
  }
  else v_found = true;
  v.attr('label', valLabel);
  v.text(val);
  if(datatype && datatype.length > 0 && datatype !== 'undefined') v.attr('datatype', datatype);
  //v.attr('same_as', 'yes');
  _root.find('.'+p.attr('class')).append(v);


  //getMainFocus().find('view').attr('offset', 0);
  getMainFocus().find('view').attr('offset', 0);
  page = 0;

  //if(fct_isDebug) console.log('setView query: ' + query.html());
  //query = _root.find('query');

  doQuery(getQueryText());

  //getFocus(query).append(p);
}

function setPropertyValue(id, nodeName, contextId, propIRI, propLabel, val, valLabel, datatype){
  if(propIRI) propIRI = deSanitizeIRI(propIRI);
  if(val) val = deSanitizeIRI(val);
  valLabel = deSanitizeLabel(valLabel);
  var p = $.createElement(nodeName); // nodeName is property or property-of
  p.attr('class', contextId);
  p.attr('iri', propIRI);
  p.attr('label', propLabel);

  if(contextId == ID_QUERY) clearKeywords();

  var v = $.createElement('value');
  v.attr('class', id);
  v.attr('label', valLabel);
  v.text(val);
  if(datatype && datatype.length > 0 && datatype !== 'undefined') v.attr('datatype', datatype);
  p.append(v);
  getMainFocus().append(p);

  //getFocus(query).find('view').attr('offset', 0);
  getMainFocus().find('view').attr('offset', 0);
  page = 0;

  //if(fct_isDebug) console.log('setView query: ' + query.html());
  //query = _root.find('query');

  doQuery(getQueryText());

  //getFocus(query).append(p);
}

function addPropertyFacet(id, prop, propLabel, val, valLabel, datatype){
  if(prop) prop = deSanitizeIRI(prop);
  if(val) val = deSanitizeIRI(val);
  var p = $.createElement('property');
  p.attr('class', id);
  p.attr('iri', prop);
  p.attr('label', propLabel);
  if(val){
    var v = $.createElement('value');
    v.attr('label', valLabel);
    v.text(val);
    if(datatype && datatype.length > 0 && datatype !== 'undefined') v.attr('datatype', datatype);
    //v.attr('same_as', 'yes');
    p.append(v);
  }
  //prop.attr('exclude', 'yes');
  //console.log('focus: ' + getFocus().attr('label'));

  //getFocus(query).find('view').attr('offset', 0);
  getMainFocus().find('view').attr('offset', 0);
  page = 0;

  getMainFocus().append(p);
  //takeFocus(p, getFocus(query));
  //takeFocus(query, getFocus(query));
  doQuery(getQueryText());
}

function addPropertyOfFacet(id, prop, propLabel, val, valLabel, datatype){
  if(prop) prop = deSanitizeLabel(prop);
  if(val) val = deSanitizeLabel(val);
  var p = $.createElement('property-of');
  p.attr('class', id);
  p.attr('iri', prop);
  p.attr('label', propLabel);
  if(val){
    var v = $.createElement('value');
    v.attr('label', valLabel);
    v.text(val);
    if(datatype && datatype.length > 0 && datatype !== 'undefined') v.attr('datatype', datatype);
    //v.attr('same_as', 'yes');
    p.append(v);
  }
  //prop.attr('exclude', 'yes');
  //console.log('focus: ' + getFocus().attr('label'));

  //getFocus(query).find('view').attr('offset', 0);
  getMainFocus().find('view').attr('offset', 0);
  page = 0;

  getMainFocus().append(p);
  //takeFocus(p, getFocus(query));
  //takeFocus(query, getFocus(query));
  doQuery(getQueryText());
}

function addClassFacet(id, clazz, label){
  //clazz = deSanitizeLabel(clazz);
  if(clazz) val = deSanitizeIRI(clazz);
  var c = $.createElement('class');
  c.attr('class', id);
  c.attr('iri', clazz);
  c.attr('label', label);
  //prop.attr('exclude', 'yes');
  //console.log('focus: ' + getFocus().attr('label'));

  //getFocus(query).find('view').attr('offset', 0);
  getMainFocus().find('view').attr('offset', 0);
  page = 0;

  getMainFocus().prepend(c); // POI: 'prepend' to ensure the last one added is the first returned by $.find()
  //takeFocus(p, getFocus(query));
  //takeFocus(query, getFocus(query));
  doQuery(getQueryText());
}

function setGraphFacet(graph, graphLabel){
  setQueryGraph(graph, graphLabel);
  doQuery(getQueryText());
}

function removeGraphFacet(){
  clearQueryGraph();
  doQuery(getQueryText());
}


//** FILE: main.js **/

var LABEL_ROOT = "Root";
var LABEL_RECORD_NAME = 'name';
var LABEL_KEYWORDS = 'keywords';

var GROUP_BY_NONE_LABEL = "Records";
var GROUP_BY_NONE_VALUE = "GROUPBY-NONE";

var GROUP_BY_TEXT_LABEL = "Text Matches";
var GROUP_BY_TEXT_VALUE = "GROUPBY-TEXT";

var ID_SHOW_ME = "showMe";
var ID_GROUP_BY = "groupBy";
var ID_RECORD = "record";
var ID_MY_RECORDS = "myRecords";

var VALUE_MANAGED_RECORD = "Managed Record";
var VALUE_RECORD_MANAGER = "Record Manager";

var VALUE_ANON_NODE = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';//"[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]";
var VALUE_DEFAULT_KEYWORDS_TEXT = "Click 'Explore' to view root"
//var VALUE_ROOT = 'root';

var DELIMIT_GROUP_BY_VALUE_AND_LABEL = '<:::>';
var DELIMIT_GROUP_BY_REVERSE_PROPERTY = '.vios.network.reserved.groupby';

var OPT_SEND_TO_GROUP_BY = 1;

var TAG_PROPERTY = 'p';
var TAG_PROPERTY_OF = 'q';
var TAG_CLASS = 'c';
var TAG_LIST = 'l';
var TAG_GRAPH = 'g';

//var this_endpoint = (window.location.href.indexOf('dev-team') > 0) ? 'http://vios.dev-team.com/' : "http://myopenlink.net/DAV/home/sdmonroe/poc_draft.html";
//var this_endpoint = (window.location.href.indexOf('dev-team') > 0) ? 'http://vios.dev-team.com/' : "http://poc.vios.network";
var this_endpoint = 'http://vios.dev-team.com/';

var qGroupBy, qShowMe, qdataSpace, qSearchAllFields;

var icon_folder_black = 'http://icon-park.com/imagefiles/folder_icon_black.png';
var icon_file = 'http://myopenlink.net/DAV/home/sdmonroe/img/blank-file-xxl.png';
var icon_expand = "http://myopenlink.net/DAV/home/sdmonroe/img/expand.png";


var preInitialized = false;

var screenSz = screen.width;
var SIZE_GROUP_BY = (screenSz < 1500) ? "3" : "2";
var SIZE_SHOW_ME = (screenSz < 1500) ? "3" : "2";
var SIZE_RECORD_VIEWER = (screenSz < 1500) ? "6" : "8";
var SIZE_LABEL = (screenSz < 1500) ? 22 : 30; // TODO: this constant is deprecated, using text-ellipse now
var SIZE_RESULT_SET = (screenSz < 1500) ? 15: 30;
var SIZE_MIN_DIGITS = 7;
var SIZE_MAX_DIGITS = 20;

var isExpandSearch = $('#isSearchAllFields').parent().hasClass('active');

function init(){

//alert('init() screen width: ' + screen.width);

  //startDictation();

  if(window.location.href.indexOf('myopenlink') > 0) {
    $('body').empty();
    $('body').append('<div>Site down for maintenance, please check back.</div>');
    return;
  }


// Q&D data canvas ******************//




  //$('#showMeMenu').remove();
  $('.leftButton').remove();
  $('.rightButton').remove();
  $('#showMeLeftButton').remove();
  $('#showMeRightButton').remove();
  //$('#keywords').remove();
  $('.search-area').remove();
  $('#describe').remove();

  $('#isDebug').prop('checked', false);

  // **** TODO: comment out these lines
  //$('#lod').addClass('hide');
  //$($('.vios-body').children('div')[0]).addClass('hide');
  //$($('.vios-body').children('div')[1]).addClass('hide');
  //$('#isSearchAllFields').remove();
  //$('#isCache').remove();
  //$('#isDebug').remove();
  //$('#keywords').remove();
  // ***** END TODO

  isExpandSearch = $('#isSearchAllFields').parent().hasClass('active');
  $('#isSearchAllFields').parent().click(function(e){
    isExpandSearch = !$('#isSearchAllFields').parent().hasClass('active');
    doQuery(getQueryText());
  });
  //$('#queryTimeout').unbind('click');
  //$('#isSearchAllFields').click(function(e){doQuery(getQueryText());});


  selectMenuItem('queryTimeout', '30000');

  $('dashboard').append('<div class="row" id="angular_breadcrumbs"></div>');
  $('dashboard').append('<div class="row" id="angular_facets"></div>');
  $('dashboard').append('<div class="row" id="dataCanvas"></div>');
  $('#queryTimeout').val('30000');



  var newDataspacePicker = '';

  newDataspacePicker += '<div _ngcontent-c2="" class="btn-group dropdown" dropdown="">';
  newDataspacePicker += '<button _ngcontent-c2="" class="btn btn-default" id="dropdown-btn-three">LOD Cloud</button>';
  newDataspacePicker += '<button _ngcontent-c2="" class="btn btn-default dropdown-toggle" dropdowntoggle="" aria-haspopup="true" aria-expanded="false">';
  newDataspacePicker += '<i _ngcontent-c2="" class="fa fa-caret-down"></i>';
  newDataspacePicker += '</button>';
  newDataspacePicker += '<!----><ul _ngcontent-c2="" aria-labelledby="dropdown-btn-three" class="dropdown-menu" role="menu" style="left: 0px; right: auto; top: 100%; transform: translateY(0px);">';
  newDataspacePicker += '<li _ngcontent-c2="" role="menuitem"><a _ngcontent-c2="" value="http://lod.openlinksw.com" class="dropdown-item">LOD Cloud</a></li>';
  newDataspacePicker += '<li _ngcontent-c2="" role="menuitem"><a _ngcontent-c2="" value="http://id.myopenlinksw.net" class="dropdown-item">MyOpenLink</a></li>';
  newDataspacePicker += '<li _ngcontent-c2="" role="menuitem"><a _ngcontent-c2="" value="http://uriburner.net" class="dropdown-item">URI Burner</a></li>';
  newDataspacePicker += '<li _ngcontent-c2="" role="menuitem"><a _ngcontent-c2="" value="http://demo.openlinksw.net" class="dropdown-item">OpenLink Demo</a></li>';
  newDataspacePicker += '<li _ngcontent-c2="" class="dropdown-divider"></li>';
  newDataspacePicker += '<li _ngcontent-c2="" role="menuitem"><a value="localhost:8890" _ngcontent-c2="" class="dropdown-item">Local Dataspace</a></li>';
  newDataspacePicker += '</ul>';
  newDataspacePicker += '</div>';


  var ndsp = $(newDataspacePicker);

  //$('#dataSpaceMenu').parent().replaceWith(ndsp);



  //$('#mr-4').append(ndsp);
  //ndsp.attr('id', 'dataSpaceMenu2');

  var gbcol = '';

  gbcol += '<app-navbar class="page-controls navbar navbar-dashboard"><ul class="navbar-nav flex-row">';
//gbcol += '<form class="navbar-form d-none d-md-block mr-auto ng-untouched ng-pristine ng-valid" novalidate="" role="search" _lpchecked="1">';
  gbcol += '<div class="form-group">';
  gbcol += '<div class="input-group input-group-no-border">';
  gbcol += '<input size="35" onfocus="javascript:doFirstKeywords()" id="keywords" class="keywordsDefault form-control" placeholder="'+VALUE_DEFAULT_KEYWORDS_TEXT+'" type="text" >';
  gbcol += '<span style="cursor:pointer;" onclick="javascript:doExplore($(\'#keywords\').val())" class="input-group-append">';
  gbcol += '<span class="input-group-text">';
  gbcol += '<i  class="la la-search"></i>';
  gbcol += '</span>';
  gbcol += '</span>';
  //gbcol += '<button _ngcontent-c4="" class="btn btn-secondary width-100 mb-xs" role="button" value="Submit" type="submit" onclick="javascript:doExplore($(\'#keywords\').val())" >Explore</button>';


  gbcol += '</div>';
  gbcol += '</div>';


  gbcol += '&nbsp;&nbsp;&nbsp;';

//** NAV BAR CODE
  gbcol += '<div _ngcontent-c4="" class="mb-sm">';
  gbcol += '<div _ngcontent-c4="" class="btn-group" data-toggle="buttons">';
  gbcol += '<label id="isSearchAllFields" _ngcontent-c4="" btncheckbox="" class="btn btn-gray ng-untouched ng-pristine ng-valid" >';
  gbcol += 'Expand Search';
  gbcol += '</label>';
  gbcol += '<label id="isCache" _ngcontent-c4="" btncheckbox="" class="btn btn-gray ng-untouched ng-valid ng-dirty active">';
  gbcol += ' Cache';
  gbcol += '</label>';
  gbcol += '<label id="isDebug" _ngcontent-c4="" btncheckbox="" class="btn btn-gray ng-untouched ng-valid ng-dirty">';
  gbcol += ' Debug';
  gbcol += '</label>';
  gbcol += '</div>';



  gbcol += '</div>';

  gbcol += '<div _ngcontent-c4="" class="mb-sm">';
  gbcol += '<div _ngcontent-c4="" class="btn-group">';


  gbcol += '&nbsp;&nbsp;&nbsp;';

  gbcol += '<button _ngcontent-c4="" class="btn btn-gray" onclick="javascript:clearKeywords();doQuery($(\'#keywords\').val())">';
  /*gbcol += '<i _ngcontent-c4="" class="fa fa-ban text-danger"></i>';
  gbcol += ' <i _ngcontent-c4="" class="fa fa-font text"></i>';*/
  gbcol += 'Clear keywords';
  gbcol += '</button>';
  gbcol += '&nbsp;&nbsp;&nbsp;';

  gbcol += '<button _ngcontent-c4="" class="btn btn-gray" onclick="javascript:clearQueryGraph();doQuery($(\'#keywords\').val())">';
  /*gbcol += '<i _ngcontent-c4="" class="fa fa-ban text-danger"></i>';
  gbcol += ' <i _ngcontent-c4="" class="fa fa-bank text"></i>';*/
  gbcol += 'Clear libraries';
  gbcol += '</button>';

  gbcol += '</div>';



  gbcol += '</div>';



//gbcol += '</form>';
  gbcol += '</app-navbar>';

// TODO: comment out this line
//$('app-layout').prepend(gbcol);



  gbcol = '<div class="col-lg-12 col-12"><ul class="steps steps-5" id="angular_breadcrumbBar">';


  /*
    gbcol += '<li><a  title=""><em>keywords</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-primary btn-block text-ellipsis" onclick="javascript:takeMainFocus(\'0\')">Et nequ a quam turpis duisi</button></li>';
    gbcol += '<li><a  title=""><em>distributor</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-outline-default btn-block text-ellipsis" onclick="javascript:takeMainFocus(\'0\')">'+VALUE_ANON_NODE+'</button></li>';
  //  gbcol += '<li><a  title=""><em>Step 2: XXXXXXXX</em><span>Et nequ a quam turpis duisi</span></a></li>';
    gbcol += '<li class="current"><a  title=""><em>Step 3: XXXXXXXX</em><span>Et nequ a quam turpis duisi</span></a></li>';
    gbcol += '<li><a  title=""><em>keywords</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-default btn-block text-ellipsis" onclick="javascript:takeMainFocus(\'0\')">metropolis</button></li>';
    gbcol += '<li><a  title=""><em>distributor</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-outline-default btn-block text-ellipsis" onclick="javascript:takeMainFocus(\'0\')">'+VALUE_ANON_NODE+'</button></li>';

  */

  gbcol += '</ul></div>';
  $('#angular_breadcrumbs').append(gbcol);


  gbcol = '<div id="groupByColumn" class="hide col-lg-'+SIZE_GROUP_BY+' col-12">';
  gbcol += '<div id="facetCollectorWidgetContainer" class="short-div"><section class="widget bg-info text-white focusHeaderSec" widget>';
  gbcol += '<header id="focusHeader">';
  gbcol += '<h3 id="angular_focusCollector" class="fw-semi-bold">'+LABEL_ROOT+'</h3>';

  /*gbcol += '<div class="widget-controls">';
              gbcol += '<a data-widgster="expand" data-target="#" title="Expand" style="display: none;"><i class="glyphicon glyphicon-chevron-up"></i></a>';
              gbcol += '<a data-widgster="collapse" data-target="#" title="Collapse"><i class="glyphicon glyphicon-chevron-down"></i></a>';
              gbcol += '<a data-widgster="close" data-target="#"><i class="glyphicon glyphicon-remove"></i></a>';
            gbcol += '</div>';*/

  gbcol += '</header>';

  gbcol += '<div class="widget-body">';
  // gbcol += '<div class="widget-body p-0">';
  gbcol += '<div id="angular_facetCollector" class="list-group list-group-lg">';
  /*
  gbcol += '<div class="row"><span style="padding-right:3em">thisIsAFacet</span><button class="btn-rounded-f width-100 mb-xs mr-xs btn btn-outline-default">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></div>';
  gbcol += '<div class="row"><span style="padding-right:3em">thisIsAFacet</span><button class="btn-rounded-f width-100 mb-xs mr-xs btn btn-default">Default</button></div>';
  gbcol += '<div class="row"><span style="padding-right:3em">thisIsAFacet</span><button class="btn-rounded-f width-100 mb-xs mr-xs btn btn-default">Default</button></div>';
  */
  gbcol += '</div>';
  //  gbcol += '</div>';
  gbcol += '</div>';

  gbcol += '</section></div>';

  gbcol += '<div id="recordsListWidgetContainer" class="short-div"><section class="widget" widget>';
  gbcol += '<header id="groupByHeader" onclick="javascript:javascript:doExplore($(\'#keywords\').val())" style="cursor:pointer;">';
  gbcol += '<h4><span id="groupByCount" class="badge badge-info">0/0</span> Records</h4>';
  gbcol += '<div class="widget-controls">';
  gbcol += '<a data-target="#" class="hide leftButton" onclick="javascript:pageLeft()"><i class="glyphicon glyphicon-backward text-secondary"></i></a>';
  gbcol += '<a data-target="#" class="hide rightButton" onclick="javascript:pageRight()"><i class="glyphicon glyphicon-forward text-secondary"></i></a>';
  //gbcol += '<a data-widgster="close" data-target="#"><i class="glyphicon glyphicon-remove"></i></a>';
  gbcol += '</div>';
  gbcol += '</header>';

  gbcol += '<div class="widget-body  p-0">';
  //  gbcol += '<div class="widget-body p-0">';
  gbcol += '<div id="angular_recordsList" class="list-group fs-mini">';



  gbcol += '</div>';
  //  gbcol += '</div>';
  gbcol += '</div>';
  gbcol += '<footer class="bg-body-light mt">';
  gbcol += '<input class="form-control form-control-sm" placeholder="Filter" type="search">';
  gbcol += '</footer>';

  gbcol += '</section></div>';





  gbcol += '<div id="tabularResults" class="short-div hide"><section class="widget" widget>';

  gbcol += '<header id="groupByTableHeader">';
  gbcol += '<h5>';
  gbcol += '<h4><span id="groupByTableCount" class="badge badge-info">0/0</span> Records</h4>';
  gbcol += '</h5>';
  gbcol += '<div class="widget-controls">';
  //gbcol += '<a href="#"><i class="glyphicon glyphicon-cog"></i></a>';
  gbcol += '<a data-target="#" class="hide leftButton" onclick="javascript:pageLeft()"><i class="glyphicon glyphicon-backward text-secondary"></i></a>';
  gbcol += '<a data-target="#" class="hide rightButton" onclick="javascript:pageRight()"><i class="glyphicon glyphicon-forward text-secondary"></i></a>';
  gbcol += '<a data-widgster="close" onclick="undoTable()" class="btn-gray"><i class="glyphicon glyphicon-remove"></i></a>';
  gbcol += '</div>';
  gbcol += '</header>';
  gbcol += '<div class="widget-body">';


  gbcol += '<table id="resultsTable" class="table table-hover table-bordered table-lg mt-lg mb-0">';
  gbcol += '<thead>';
  gbcol += '<tr>';
  gbcol += '<th>test';
  gbcol += '</th>';
  gbcol += '</tr>';
  gbcol += '</thead>';

  gbcol += '<tbody>';
  gbcol += '<tr>';
  gbcol += '<td>value';
  gbcol += '</td>';
  gbcol += '</tr>';

  gbcol += '</tbody>';
  gbcol += '</table>';
  gbcol += '<br/>';



  gbcol += '<div class="clearfix">';
  gbcol += '<div class="pull-right">';
  gbcol += '<button class="btn btn-default btn-sm">';
  gbcol += 'New ...';
  gbcol += '</button>&nbsp;';
  gbcol += '<div class="btn-group" data-dropdown="">';
  gbcol += '<button class="btn btn-sm btn-inverse dropdown-toggle" data-toggle="dropdown" aria-expanded="false">';
  gbcol += '&nbsp; Save As... &nbsp;';
  gbcol += '<i class="fa fa-caret-down"></i>';
  gbcol += '</button>';
  gbcol += '<ul class="dropdown-menu dropdown-menu-right" x-placement="top-end" style="position: absolute; transform: translate3d(-97px, -145px, 0px); top: 0px; left: 0px; will-change: transform;">';
  gbcol += '<li><a class="dropdown-item" onclick="exportTableToCSV(\'results.csv\')">CSV</a></li>';
  gbcol += '<li><a class="dropdown-item" href="#">XML</a></li>';
  gbcol += '<li><a class="dropdown-item" href="#">JSON</a></li>';
  gbcol += '<li class="dropdown-divider"></li>';
  gbcol += '<li><a class="dropdown-item" href="#">Save to Data Space</a></li>';
  gbcol += '</ul>';
  gbcol += '</div>';
  gbcol += '</div>';
  gbcol += '<p id="resultsReport">query time: 2065, timeout: 8000, complete: yes</p>';
  gbcol += '</div>';

  gbcol += '</div>';



  gbcol += '</section></div>';



  gbcol += '</div>';



  $('#dataCanvas').append(gbcol);


  gbcol = '<div id="showMeColumn" class="hide col-lg-'+SIZE_SHOW_ME+' col-12"><section class="widget" widget>';
  gbcol += '<header id="showMeHeader">';
  gbcol += '<h4><span id="showMeCount" class="badge badge-info">0/0</span>&nbsp;<span id="showMeMenuSelectLabel">Categories</span></h4>';



  gbcol += '<div class="widget-controls">';
  //gbcol += '<a data-target="#"><i class="fa fa-refresh"></i></a>';
  gbcol += '<a data-target="#" id="alignButton" class="disabled" ><i class="glyphicon glyphicon-filter text-secondary" title="Align this subject to its parent smart folders"></i></a>';
  gbcol += '<a data-target="#" id="showMeLeftButton" class="hide" onclick="javascript:showMePageLeft()"><i class="glyphicon glyphicon-backward text-secondary"></i></a>';
  gbcol += '<a data-target="#" id="showMeRightButton" class="hide" onclick="javascript:showMePageRight()"><i class="glyphicon glyphicon-forward text-secondary"></i></a>';
//          gbcol += '<a data-widgster="close" data-target="#"><i class="glyphicon glyphicon-remove"></i></a>';
  gbcol += '</div>';
  gbcol += '</header>';


  /*


  gbcol += '<select onchange="javascript: selectShowMe()" id="showMeMenu">';
      gbcol += '<option value="classes">Categories</option>';
      gbcol += '<option class="disabled" value="properties">Fields</option>';
      gbcol += '<option class="disabled" value="text-properties">Text</option>';
      gbcol += '<option class="disabled" value="properties-in">Used as</option>';
      gbcol += '<option class="disabled" value="graphs">Libraries</option>';
    gbcol += '</select>';


  */

  gbcol += '<div class="widget-body  p-0">';
  //  gbcol += '<div class="widget-body p-0">';
  gbcol += '<div id="angular_showMeList" class="list-group fs-mini">';



  gbcol += '</div>';
  // gbcol += '</div>';
  gbcol += '</div>';
  gbcol += '<footer class="bg-body-light mt">';
  gbcol += '<input class="form-control form-control-sm" placeholder="Filter" type="search">';
  gbcol += '</footer>';

  gbcol += '</section></div>';
  $('#dataCanvas').append(gbcol);






  gbcol = '<div id="recordViewerColumn" class="hide col-lg-'+SIZE_RECORD_VIEWER+' col-12"><section class="widget" widget>';

  gbcol += '<div class="widget-body  p-0 ">';
  // gbcol += '<div class="widget-body p-0">';


  gbcol += '<nav class="navbar navbar-expand-lg navbar-light bg-light">';
  gbcol += '<a class="navbar-brand" data-target="#">New</a>';
  gbcol += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
  gbcol += '<i class="glyphicon glyphicon-tree-conifer"></i>';
  gbcol += '<i _ngcontent-c10="" class="glyphicon glyphicon-tree-conifer text-success"></i>';
  gbcol += '</button>';

  gbcol += '<div class="collapse navbar-collapse" id="navbarSupportedContent">';
  gbcol += '<ul class="navbar-nav mr-auto">';
  gbcol += '<li class="nav-item active">';
  gbcol += '<a id="www" class="nav-link" data-target="#" onclick="linkOut()">WWW <span class="sr-only">(current)</span></a>';
  gbcol += '</li>';
  gbcol += '<li class="nav-item">';
  gbcol += '<a class="nav-link" data-target="#" onclick="javascript:doTable()">Table</a>';
  gbcol += '</li>';
  gbcol += '<li class="nav-item dropdown">';
  gbcol += '<a class="nav-link dropdown-toggle" data-target="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
  gbcol += 'Pair';
  gbcol += '</a>';
  gbcol += '<div class="dropdown-menu" aria-labelledby="navbarDropdown">';
  gbcol += '<a class="dropdown-item" data-target="#">Browser Window</a>';
  gbcol += '<a class="dropdown-item" data-target="#">Device</a>';
  gbcol += '<div class="dropdown-divider"></div>';
  gbcol += '<a class="dropdown-item" data-target="#">New Data Canvas</a>';
  gbcol += '</div>';
  gbcol += '</li>';
  gbcol += '<li class="nav-item">';
  gbcol += '<a class="nav-link disabled" data-target="#">Edit</a>';
  gbcol += '</li>';
  gbcol += '</ul>';
  gbcol += '<form class="form-inline my-2 my-lg-0">';
  //gbcol += '<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">';
  gbcol += '<button style="margin-right:1em" class="btn btn-secondary my-2 my-sm-0" type="submit">IDN</button>';
  gbcol += '</form>';
  gbcol += '</div>';
  gbcol += '</nav>';


  gbcol += '<div id="angular_recordViewer" class="embed-responsive embed-responsive-1by1">';


  gbcol += '<iframe id="describe" class="iframe embed-responsive-item" src="" height="100%"></iframe>';
  gbcol += '</div>';



  //  gbcol += '</div>';
  gbcol += '</div>';


  gbcol += '</section></div>';

  /*
  gbcol = '<div id="recordViewerColumn" class="col-lg-'+SIZE_RECORD_VIEWER+' col-12">'

  gbcol += '<div class="widget-body  p-0">' + getFormEditor() + '</div>';
                          gbcol += '</div>';
  */

  $('#dataCanvas').append(gbcol);




//************************************//

  if(!document.getElementById('id2')) {
    var link = document.createElement('link');
    link.id = 'id2';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'http://myopenlink.net/DAV/home/sdmonroe/css/vios.css';
    document.head.appendChild(link);

    link = document.createElement('link');
    link.id = 'id2';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://fonts.googleapis.com/css?family=Source+Code+Pro';
    document.head.appendChild(link);

  }

  fct_init(); // this method must be the first method called by the implementation of the fct_ framework

//    $('#keywords').val(VALUE_DEFAULT_KEYWORDS_TEXT);
  $('#dsroot').attr('title', fct_dataSpace);
  getQuery().attr('label', LABEL_ROOT);

  qGroupBy = fct_getUrlParameter('groupBy'); // the loading of gGroupBy is done in doQuery
  qShowMe = fct_getUrlParameter('showMe');
  qdataSpace = fct_getUrlParameter('dataSpace');
  qSearchAllFields = fct_getUrlParameter('searchAllFields');

  if(qdataSpace && qdataSpace.length > 0){
    selectMenuItem('dataSpaceMenu', qdataSpace);
    qdataSpace = null;
  }
  if(qShowMe && qShowMe.length > 0) {
    selectMenuItem('showMeMenu', qShowMe);
    qShowMe = null;
  }
  if(qSearchAllFields && qSearchAllFields.length > 0 && qSearchAllFields.toLowerCase() == 'true'){
    isExpandSearch = true;
    $('#isSearchAllFields').prop('checked', true);
    $('#isSearchAllFields').parent().addClass('active');
    $('#isSearchAllFields').parent().attr('aria-pressed','true');
    qSearchAllFields = null;
  }

  preInitialized = true;
  if(fct_isPermalink) doQuery(getQueryText());

  /* TODO: use qTip for tooltips
  var api = $('[title!=""]').qtip('api');
  api.timers = {
      show: timerObject, // Value of the setTimeout call for showing the tooltip (if show.delay is set)
      hide: timerObject // Value of the setTimeout call for hiding the tooltip (if hide.delay is set)
  }
  */

  $('#keywords').focus();

}

var isActivated = false;
function activate(){
  $('#groupByColumn').removeClass('hide');
  $('#showMeColumn').removeClass('hide');
  $('#recordViewerColumn').removeClass('hide');
}

function doTable(){
  $('#recordViewerColumn').addClass('hide');
  $('#groupByColumn').removeClass('col-lg-'+SIZE_GROUP_BY);
  $('#groupByColumn').addClass('col-lg-'+(parseInt(SIZE_GROUP_BY)+parseInt(SIZE_RECORD_VIEWER)));
  $('#tabularResults').removeClass('hide');
  $('#recordsListWidgetContainer').addClass('hide');
  $('#facetCollectorWidgetContainer').addClass('hide');



}

function undoTable(){
  $('#recordViewerColumn').removeClass('hide');
  $('#groupByColumn').removeClass('col-lg-'+(parseInt(SIZE_GROUP_BY)+parseInt(SIZE_RECORD_VIEWER)));
  $('#groupByColumn').addClass('col-lg-'+SIZE_GROUP_BY);
  $('#tabularResults').addClass('hide');
  $('#recordsListWidgetContainer').removeClass('hide');
  $('#facetCollectorWidgetContainer').removeClass('hide');



}

function exportTableToCSV(filename) {
  var csv = [];
  var rows = document.querySelectorAll("table#resultsTable thead tr, table#resultsTable tbody tr");

  for (var i = 0; i < rows.length; i++) {
    var row = [], cols = rows[i].querySelectorAll("th, td");

    for (var j = 0; j < cols.length; j++)
      row.push(cols[j].innerText);

    csv.push(row.join(","));
  }

  // Download CSV file
  downloadCSV(csv.join("\n"), filename);
}

function downloadCSV(csv, filename) {
  var csvFile;
  var downloadLink;

  // CSV file
  csvFile = new Blob([csv], {type: "text/csv"});

  // Download link
  downloadLink = document.createElement("a");

  // File name
  downloadLink.download = filename;

  // Create a link to the file
  downloadLink.href = window.URL.createObjectURL(csvFile);

  // Hide download link
  downloadLink.style.display = "none";

  // Add the link to DOM
  document.body.appendChild(downloadLink);

  // Click download link
  downloadLink.click();
}
// **** TODO: implement speech selection of facets from list
/*
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

// let p = document.createElement('p');
//  const words = document.querySelector('body');
//  words.appendChild(p);

  recognition.addEventListener('results', e => {
console.log(e);
  });

  recognition.start();


  function startDictation() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {


      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function(e) {
        document.getElementById('transcript').value
                                 = e.results[0][0].transcript;
        recognition.stop();
        document.getElementById('labnol').submit();
      };

      recognition.onerror = function(e) {
        recognition.stop();
      }

    }
  }
  */

document.onkeydown = checkKey;

function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '188') { // period key
    if(page > 0 && !$('.leftButton').hasClass('hide')) pageLeft();
  }
  else if (e.keyCode == '190') { // comma key
    if(!$('.rightButton').hasClass('hide')) pageRight();
  }
  else if (e.keyCode == '37') { // left arrow key
    if(showMePage > 0 && !$('#showMeLeftButton').hasClass('hide')) showMePageLeft();
  }
  else if (e.keyCode == '39') { // right arrow key
    if(!$('#showMeRightButton').hasClass('hide')) showMePageRight();
  }
  else if (e.keyCode == '116') { // F5 key
    doExplore($('#keywords').val());
  }


  if(!$('#keywords').is(":focus")){
    if (e.keyCode == '8' || e.keyCode == '67') { // Delete key or C key
      selectMenuItem('showMeMenu', VIEW_TYPE_CLASSES);
      $('#showMeMenuSelectLabel').text($('#showMeMenu :selected').text());
    }
    else if (e.keyCode == '220' || e.keyCode == '80' || e.keyCode == '70') { // | key or P key
      selectMenuItem('showMeMenu', VIEW_TYPE_PROPERTIES);
      $('#showMeMenuSelectLabel').text($('#showMeMenu :selected').text());
    }
    else if (e.keyCode == '13' || e.keyCode == '82') { // Return key or R key
      selectMenuItem('showMeMenu', VIEW_TYPE_PROPERTIES_IN);
      $('#showMeMenuSelectLabel').text($('#showMeMenu :selected').text());
    }
    else if (e.keyCode == '84') { // T key
      if(isExpandSearch){
        selectMenuItem('showMeMenu', VIEW_TYPE_TEXT_PROPERTIES);
        $('#showMeMenuSelectLabel').text($('#showMeMenu :selected').text());
      }
    }
    else if (e.keyCode == '16' || e.keyCode == '76' || e.keyCode == '71') { // Shift key or L key or G key
      selectMenuItem('showMeMenu', VIEW_TYPE_GRAPHS);
      $('#showMeMenuSelectLabel').text($('#showMeMenu :selected').text());
    }
    else if(e.keyCode == '17') { // Control key
    }
  }
  if(e.keyCode == '17'){
    if($('#keywords').hasClass('disabled')){// Control key
      $('#keywords').removeAttr('disabled');
      $('#keywords').removeClass('disabled');
      $('#keywords').focus();
      $('#keywords').select();
    }
    else{
      document.getSelection().removeAllRanges();
      $('#keywords').blur();
      $('#keywords').attr('disabled', 'true');
      $('#keywords').addClass('disabled');
    }
  }
  else {
    if(e.keyCode == '13') {// Enter key
      $('#keywords').blur();
      $('#keywords').attr('disabled', 'true');
      $('#keywords').addClass('disabled');
      doExplore($('#keywords').val());
    }
  }


}


function clearKeywords(){
  $("#keywords").val('');
  _root.find('text').remove();
  //text=undefined;
}

function sanitizeLabel(label){
  label = label.split('\'').join("&amp;apos;");
  label = label.split('&#39;').join("&amp;apos;");
  label = label.replaceAll('"', '\"');
  label = label.replaceAll('\\', '\\\\');
  //label = label.split('_').join(" ");
  return label;
}

function deSanitizeLabel(label){
  label = label.split('&amp;apos;').join("\'");
  label = label.split('&amp;apos;').join("&#39;");
  return label;
}

function deSanitizeIRI(iri){
  iri = deSanitizeLabel(iri);
  iri = decodeURIComponent(iri);
  return iri;
}

function processLabel(label, value, datatype, labelSize){
  if(!labelSize) labelSize = SIZE_LABEL;
  label = label.trim();



  if(label.length <= 0){
    label = value;
  }
  if(label.lastIndexOf("/") == label.length - 1){
    label = label.substring(0, label.length-1);
  }
  else{
    label = label.substring(label.lastIndexOf("/")+1);
  }
  if(label.lastIndexOf("#") == label.length - 1){
    label = label.substring(0, label.length-1);
  }
  else{
    label = label.substring(label.lastIndexOf("#")+1);
  }


  // *** business Category processing
  label = label.replace('WikiCat', '');
  label = label.replace('Wikicat', '');
  label = label.replace('YagoLegal', '');
  label = label.replace('Wiki Cat', '');
  label = label.replace('Wiki cat', '');
  label = label.replace('Yago Legal', '');


  if(label.length > 1) {
    if(label.length > labelSize){
      // label = label.substring(0, labelSize) + '...'; // use text-ellipsis class instead
    }
    label = label.split('_').join(" ");
    // POI: remove reserved chars, these will change in PoC
    //label = label.replaceAll('/', ' - ');
    label = label.replaceAll('[', ' - ');
    label = label.replaceAll(']', ' - ');
    try{
      label = decodeURIComponent((label + '').replace(/\+/g, '%20'));
    }
    catch(err){

    }
  }



  var re = /[^0-9](?=[0-9])/g;
  label = label.replace(re, '$& ');
  label = label.replace('\\d{'+SIZE_MIN_DIGITS+','+SIZE_MAX_DIGITS+'}/g', '');
  label = label.replace(/\d{5,11}/g, '');
  return label.trim();
}

var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
function beep() {
  try{
    snd.play();
  }
  catch(e){

  }
}

function updatePermalink(){
  $('#permalink').attr('href', this_endpoint + '?' +
    '&dataSpace=' + encodeURIComponent( $('#dataSpaceMenu :selected').attr('value') ) +
    '&groupBy=' + encodeURIComponent( $('#groupByMenu :selected').attr('value') ) +
    '&showMe=' + $('#showMeMenu :selected').attr('value') +
    '&searchAllFields=' + isExpandSearch +
    '&qxml=' + encodeURIComponent(_root.find('query').prop('outerHTML'))
  ); //+ '&idCt=' + idCt

  // TODO: this only works in HTML5 compatible browsers, need to support older browsers also

  if(!fct_isDebug && false){

    history.pushState(
      {},
      'VIOS: ' + _root.find('query text').text(),
      $('#permalink').attr('href')
    );

  }
}

function spaceCamelCase(label){
  // insert a space before all caps
  if(label.toUpperCase() != label){
    label = label.replace(/([A-Z])/g, ' $1')
    // uppercase the first character
      .replace(/^./, function(str){ return str.toUpperCase(); });
  }
  return label.trim();
}


function getHostName(url) {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
  }
  else {
    return null;
  }
}

function getLibraryLabel(url) {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return (match[2] !== url) ? match[2] + "" : match[2];
  }
  else {
    return url;
  }
}

function test(){
  // create 'Alice'
  var newProperty = $.createElement('property');
  // add 'name' element using standard jQuery
  newProperty.append($('<property />').text('Alice'));
  // add 'grade' element using our helper
  newProperty.append($.createElement('view').text(''));

  // add 'Alice' to <text />
  query.append(newProperty);

  // create 'Bob'
  newProperty = $.createElement('property-of');
  newProperty.append($('<value />').text('Bob'));
  newProperty.append($.createElement('value').text('Bob'));

  // add 'Bob' to <students />
  query.append(newProperty);

  // display the markup as text
  if(fct_isDebug) console.log(_root.html());
}


var idCt = 11; // numbers 1 - 10 are reserved
function createId(){
  //return idCt++;
  return uuid().hashCode(); // TODO: is there a less expensive way?
}

function uuid() {
  return crypto.getRandomValues(new Uint32Array(4)).join('-');
}

function doFirstKeywords(){
  if($('#keywords').val() == VALUE_DEFAULT_KEYWORDS_TEXT) {
    $('#keywords').val('');
  }
  $('#keywords').removeClass('keywordsDefault');
}

function isUri(str){
  return /\w+:(\/?\/?)[^\s]+/gm.test(str);
}

function doExplore(keywords){
  if(isUri(keywords)){
    //if(keywords.startsWith('http://') || keywords.startsWith('https://')){
    //addPropertyFacet(createId(), '[rdf:type]', 'type');

    if(keywords.endsWith('/sparql')){
      //Messenger().post("Thanks for checking out Messenger!");
    }

    var p = $.createElement('property');
    p.attr('class', createId());
    p.attr('iri', '[rdf:type]');
    p.attr('label', 'type');
    //getQuery().append(p);
    setValue(0, keywords, processLabel(keywords), 'uri');
  }
  else {
    doQuery(keywords);
  }
  $('#keywords').blur();

}
var dqct = 0;
function doQuery(keywords){
  if(!isActivated) {
    activate();
    isActivated = true;
  }
  //console.log("keywords:" + keywords);
  setQueryText(keywords);

  //console.log('query 1: ' + getQuery().prop('outerHTML'));

  //var q = query.clone();
  //selectMenuItem('groupByMenu', GROUP_BY_NONE_VALUE);

  // POI: groupby does not persist between canvas updates
  remove(     _root.find('[isGroupBy=true]').attr('class') , true);

  // POI: groupby is now done via the Show Me menu, items are added to the Group by menu on-demand by user
  //$('#groupByHeader').addClass('loading');
  //fct_query(query, VIEW_TYPE_PROPERTIES, OPT_SEND_TO_GROUP_BY);
  //console.log('query 1: ' + getQuery().prop('outerHTML'));

  selectShowMe(false);
  //console.log('query 2: ' + getQuery().prop('outerHTML'));


  // POI: load the groupby list concurrently except if this is the first
  // load of the page, and the 'groupBy' parameter is present, in this case
  // load the groupby list after the groupByMenu has finished loading, to
  // ensure the value of the 'groupBy' parameter is availiable in the drop-down
  //console.log('ct doQuery: ' + dqct);
  //var chk = qdataSpace == null && qShowMe == null && qSearchAllFields == null;
  if(dqct = 3 || !fct_isPermalink){
    //if(!fct_isPermalink || preInitialized){// POI: the initial load sequence is over after three calls to doQuery (one call for each menu: showme, expand search, data space), if this fact ever changes, the groupby load from the permalink will break
    qGroupBy = undefined;
    $('#groupByHeader').addClass('loading');

    //query.attr('same-as', 'true');
    fct_query(query, VIEW_TYPE_LIST_COUNT);
    //console.log('query 3: ' + getQuery().prop('outerHTML'));
  }
  else {
    dqct++;
  }

  //clearKeywords();

  buildNavPath();
  //console.log('query 4: ' + getQuery().prop('outerHTML'));

  /* TODO: use qTip for tooltips, see http://qtip2.com/api
  $('[title!=""]').qtip();
  */
}

function selectMenuItem(id, value, silent){
//  $('#'+id+' option[value=\''+ value +'\']').prop('selected', true); // POI: use escapeSelector if id=groupByMenu, since the values are URIs, which contain special chars
  var menu = $('#'+id).val(value);
  if(!silent) menu.change(); // POI: use escapeSelector if id=groupByMenu, since the values are URIs, which contain special chars
}

function selectdataSpace(uri, label){
  //fct_dataSpace = uri;
  fct_dataSpaceLabel = label;
  //fct_dataSpace = $('#dataSpaceMenu :selected').attr('value') + '/fct/service';
  //fct_dataSpaceSparql = $('#dataSpaceMenu :selected').attr('value') + '/sparql';
  fct_dataSpace = uri + '/fct/service';
  fct_dataSpaceSparql = uri + '/sparql';
  LABEL_ROOT = getDataspaceLabel().toUpperCase(); //<i class="fa fa-home" style="padding-bottom:4px;padding-right:2px;"></i>
  doQuery(getQueryText());
}

function getDataspaceLabel(){
  if(!fct_dataSpaceLabel || fct_dataSpaceLabel.length <= 0) return LABEL_ROOT;
  return fct_dataSpaceLabel;
}

function getQueryTimeout(){
  return $('#queryTimeout :selected').attr('value');
}

//** FILE: groupby.js *****************************************************************************************************************************************************************************************/


var page = 0;

var groupByResultsCt = 0;

//query.append(view);
//doQuery();

function resetPaging(){
  page = 0;
  groupByResultsCt = 0;
}

function pageRight(){
  setViewOffset(getViewOffset() + SIZE_RESULT_SET);
  page++;
  //fct_query(query, VIEW_TYPE_LIST_COUNT);
  selectGroupBy(true);
}

function pageLeft(){
  setViewOffset(getViewOffset() - SIZE_RESULT_SET);
  page--;
  //fct_query(query, VIEW_TYPE_LIST_COUNT);
  selectGroupBy(true);
}

function loadTextResults(xml){
  $('#'+ID_GROUP_BY+'').empty();

  var rows = "";
  var result = $(xml).find("fct\\:result")[0];
  groupByResultsCt = $("fct\\:row", result).length;
  if(page == 0){
    $(".leftButton").attr('disabled', 'true');
    $(".leftButton").addClass('disabled');
    $('.leftButton').removeAttr('title');
  }
  else{

    $(".leftButton").removeAttr('disabled');
    $(".leftButton").removeClass('disabled');
    $('.leftButton').attr('title', 'page ' + (page));

  }
  if(groupByResultsCt < SIZE_RESULT_SET) {
    $(".rightButton").attr('disabled', 'true');
    $(".rightButton").addClass('disabled');
    $('.rightButton').removeAttr('title');
  }
  else {
    $(".rightButton").removeAttr('disabled');
    $(".rightButton").removeClass('disabled');
    $('.rightButton').attr('title', 'page ' + (page+2));

  }

  $("fct\\:row", result).each(function(i) {
    //console.log($(this).html());
    var col = $(this).find("fct\\:column");

    // shortform can be used in lieu of the label for URI values
    var value, datatype, shortform, label, lang, ct, trank, erank, g, text; // TODO: need to utilize the lang property for filtering results for the user

    $("fct\\:column", this).each(function(j) {
      // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
      val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
      //console.log(val);
      switch(j){
        //case 0: value = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); lang = $(this).attr('xml\\:lang'); break;
        case 0: trank = val; break;
        case 1: erank = val; break;
        case 2: g = val; break;
        case 3: value = val; datatype = $(this).attr('datatype'); break;
        case 4: label = val; break;
        case 5: text = htmlDecode(val); break;
      }
    });


    if(value.length <= 0 && label.length <= 0 && ct<= 1){
      //rows += '<tr><td class="up" id="gbr_'+id+'"><span style="font-size:smaller;font-family:Consolas,Courier New; color: #000" id="'+id+'">';
      //rows += 'Too many results. Please filter them.';
      //rows += '</span></td></tr>';
    }
    else {
      label = processLabel(label, value, datatype);

      // POI: the label and values need to have the apostrophe (') char removed before insertion into the javascript functions below
      // but they need to be desanitized by the respective javascript methods before being used in a query (or else the query will fail due to value mismatch)
      // also, a double encoding is used by the sanitize function, so we have to desanitize the label before displaying it in the data canvas
      label = sanitizeLabel(label);
      value = sanitizeLabel(value);
      //console.log($(col[0]));
      var id = createId();
      rows += '<tr><td class="up" id="txt1_'+id+'"><span id="'+id+'">';
      rows += '<a onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')">&nbsp;'+getFavicon(value)+'</a>&nbsp;';
      label = deSanitizeLabel(label);
      rows += '<a title="'+value+'" onclick="javascript:describe(\''+value+'\');">'+label+'</a>';
      rows += '</span></td></tr>';
      rows += '<tr><td class="txt" id="txt2_'+id+'"><span id="'+id+'">';
      rows += text;
      rows += '</span></td></tr>';
    }
  });
  //console.log(rows);
  $('#'+ID_GROUP_BY+'').append(rows);

  //$('#groupby').append(rows);
  //return total;




} // loadTextResults

function getFavicon(value){
  return '<img class="rounded-circle" height="16" width="16" src="http://www.google.com/s2/favicons?domain='+getHostName(value)+'" />';
}

function getFaviconUrl(value){
  return 'http://www.google.com/s2/favicons?domain='+getHostName(value);
}


function toJSONString(json){
  return htmlEncode(JSON.stringify(json).replaceAll('\"','&quot;'));
}

function toJSONObject(str){
  try{
    return JSON.parse(htmlDecode(str));
  }
  catch(e){
    console.log('error with json: ' + str + ', err: ' + e);
  }
}

function htmlDecode(input){
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

function htmlEncode(value){
  // Create a in-memory div, set its inner text (which jQuery automatically encodes)
  // Then grab the encoded contents back out. The div never exists on the page.
  return $('<div/>').text(value).html();
}

function htmlDecode(value){
  return $('<div/>').html(value).text();
}

// TODO: regex approach might be faster, see here https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript
String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};
/*
function htmlEncode(input){
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}
*/

function loadGroupByResults(xml, focusVarName){
  $('#'+ID_GROUP_BY+'').empty();
  $('#angular_recordsList').empty();

  // associate the focus with its corresponding SPARQL variable
  getMainFocus().attr('varname', focusVarName.replace('?', ''));

  var rows = "";
  var result = $(xml).find("fct\\:result")[0];
  groupByResultsCt = $("fct\\:row", result).length;
  /*
          if(page == 0){
            $(".leftButton").attr('disabled', 'true');
            $(".leftButton").addClass('disabled');
            $('.leftButton').removeAttr('title');
          }
          else{

            $(".leftButton").removeAttr('disabled');
            $(".leftButton").removeClass('disabled');
            $('.leftButton').attr('title', 'page ' + (page));

          }
        if(groupByResultsCt < SIZE_RESULT_SET) {
          $(".rightButton").attr('disabled', 'true');
          $(".rightButton").addClass('disabled');
          $('.rightButton').removeAttr('title');
        }
        else {
          $(".rightButton").removeAttr('disabled');
          $(".rightButton").removeClass('disabled');
          $('.rightButton').attr('title', 'page ' + (page+2));

        }

  */
  if(page == 0){
    $(".leftButton").addClass('hide');
    $('.leftButton').removeAttr('title');
  }
  else{

    $(".leftButton").removeClass('hide');
    $('.leftButton').attr('title', 'page ' + (page));

  }
  if(groupByResultsCt < SIZE_RESULT_SET) {
    $(".rightButton").addClass('hide');
    $('.rightButton').removeAttr('title');
  }
  else {
    $(".rightButton").removeClass('hide');
    $('.rightButton').attr('title', 'page ' + (page+2));

  }


  var loadedUri = false;


  $("fct\\:row", result).each(function(i) {
    //console.log($(this).html());
    var col = $(this).find("fct\\:column");

    // shortform can be used in lieu of the label for URI values
    var value, datatype, shortform, label, lang, ct; // TODO: need to utilize the lang property for filtering results for the user

    $("fct\\:column", this).each(function(j) {
      // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
      val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
      //console.log(val);
      switch(j){
        case 0: value = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); lang = $(this).attr('xml\\:lang'); break;
        case 1: label = val; break;
        case 2: ct = val; break;
      }
    });

    if(!datatype) datatype = '';

    if(value.length <= 0 && label.length <= 0 && ct<= 1){
      //rows += '<tr><td class="up" id="gbr_'+id+'"><span style="font-size:smaller;font-family:Consolas,Courier New; color: #000" id="'+id+'">';
      //rows += 'Too many results. Please filter them.';
      //rows += '</span></td></tr>';
    }
    else {

      if(!loadedUri) {
        if(datatype === 'uri'){
          loadedUri = true;
          describe(value);
        }
      }
      var propIRI = $('#groupByMenu :selected').attr('value');
      var propLabel = $('#groupByMenu :selected').text();
      var facet = false;

      var groupByCriteria = getMainFocus();
      var isGroupByCriteria = getMainFocus().attr('isGroupBy') === 'true' || $('#groupByMenu :selected').attr('isReverse'); // POI: For now, "Used As" fields are not treated as "group by", since they are not "added" from the Group by menu, but are instead added from the Used As menu
      if(isGroupByCriteria){
        propIRI = groupByCriteria.attr('iri');
        propLabel = groupByCriteria.attr('label');
      }

      _root.find('.' + getMainFocus().attr('class') + ' > property[iri=\''+propIRI+'\'] > value').each(function(k){
        if(!facet && $(this).text() === value) {
          facet = true;
        }
      });
      var checked = (facet) ? ' checked="checked"': '';
      var active = (facet) ? 'active': '';

      label = processLabel(label, value, datatype);

      // POI: the label and values need to have the apostrophe (') char removed before insertion into the javascript functions below
      // but they need to be desanitized by the respective javascript methods before being used in a query (or else the query will fail due to value mismatch)
      // also, a double encoding is used by the sanitize function, so we have to desanitize the label before displaying it in the data canvas
      label = sanitizeLabel(label);
      value = sanitizeLabel(value);
      //console.log($(col[0]));
      var id = createId();

      var opts = new Object();
      opts.tag = TAG_LIST;
      opts.parentId = 'gbr_'+id;
      opts.childrenId = opts.tag + opts.parentId;

      var color = 'success';


      /*

                    rows +=  '<button id="'+opts.parentId+'" class="up list-group-item text-left">';
                      rows += '<span class="thumb-sm float-left mr"><img class="rounded-circle" src="'+getFaviconUrl(value)+'" alt="...">';
                      rows += '<i class="status status-bottom bg-success"></i>';
                      rows += '</span>';
                      rows += '<div>';
                      rows += '<h6 class="m-0">'+label+'</h6>';
                      rows += '<p class="help-block text-ellipsis m-0"></p>';
                      rows += '</div>';
                      rows += '</button>';
      */
      rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
      rows +=  '<span class="thumb-sm float-left mr">';

      /*

                                          rows +=  '<img alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
                                          rows +=  '<i class="status status-bottom bg-success"></i>';
                                      rows +=  '</span>';



                  rows +=  '<div>';
                    rows +=  '<h6 class="m-0">'+label+'</h6>';
                    rows +=  '<p class="help-block text-ellipsis m-0"></p>';
                  rows +=  '</div>';


      rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
                                      rows +=  '<span class="thumb-sm float-left mr">';
                                          //rows +=  '<img alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
                                          rows +=  '<span _ngcontent-c9="" class="badge badge-pill badge-info" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addClassFacet(\''+id+'\', \''+uri+'\', \''+sanitizeLabel(label)+'\')">'+ct+'</span>';
                                          //rows +=  '<i class="status status-bottom bg-success"></i>';
                                      rows +=  '</span>';
                  rows +=  '<div>';
                    rows +=  '<h6 class="m-0">'+label+'</h6>';
                    rows +=  '<p class="help-block text-ellipsis m-0"></p>';
                  rows +=  '</div>';
                rows +=  '</a>';
      */

      if(true){

        //rows += '<tr><td class="up" id="'+opts.parentId+'"><span id="'+id+'">';

        if(isGroupByCriteria) {
          var isReverse = $('#groupByMenu :selected').attr('isReverse') && $('#groupByMenu :selected').attr('isReverse').length > 0;
          //if(propIRI != GROUP_BY_NONE_VALUE && propIRI != GROUP_BY_TEXT_VALUE) {
          var propOrPropOf = (isReverse) ? "addPropertyOfFacet" : "addPropertyFacet";
          //rows += '<a class="count" onclick="javascript: remove(\''+getMainFocus().attr('class')+'\', true); '+propOrPropOf+'(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\', \''+sanitizeLabel(value)+'\', \''+sanitizeLabel(label)+'\', \''+datatype+'\'); selectMenuItem(\''+id+'\', \''+propIRI+'\');">'+ct+'</a>&nbsp;-&nbsp;';
          rows +=  '<span style="cursor:pointer" _ngcontent-c9="" class="badge badge-pill badge-info" onclick="javascript: remove(\''+getMainFocus().attr('class')+'\', true); '+propOrPropOf+'(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\', \''+sanitizeLabel(value)+'\', \''+sanitizeLabel(label)+'\', \''+datatype+'\'); selectMenuItem(\''+id+'\', \''+propIRI+'\');">'+ct+'</span>';
        }
        else {
          if(datatype=='uri') {
            rows += '<img style="cursor:pointer" onmouseover="javascript:$(\'#focusValue\').addClass(\'queryFocusValue\')" onmouseout="javascript:$(\'#focusValue\').removeClass(\'queryFocusValue\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')" alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
            rows +=  '<i class="status status-bottom bg-'+color+'"></i>';
          }
          else {
            rows += '<span style="cursor:pointer" onmouseover="javascript:$(\'#focusValue\').addClass(\'queryFocusValue\')" onmouseout="javascript:$(\'#focusValue\').removeClass(\'queryFocusValue\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')" class="glyphicon glyphicon-tag"></span>';
          }
        }
        rows +=  '</span>';

        rows +=  '<div>';



        label = deSanitizeLabel(label);
        var labelLink = (datatype=='uri') ? 'title="'+value+'" onclick="javascript:describe(\''+value+'\');"' : '';
        rows +=  '<h6 style="cursor:pointer" class="text-ellipsis m-0" '+labelLink+'>'+label+'</h6>';
        rows +=  '<p class="help-block text-ellipsis m-0"></p>';

        //rows += '</span></td><td style="white-space:nowrap; vertical-align:top;">';

        if(isGroupByCriteria){
          //rows += '<label _ngcontent-c6="" btncheckbox="" class="btn btn-default ng-untouched ng-valid '+active+' ng-dirty">';
          // rows += 'Right way'
          //rows += '</label>';
          rows += '<div class="form-check-inline abc-checkbox abc-checkbox-primary">';
          rows += '<input class="form-check-input" id="checkbox2" type="checkbox"/><input class="form-check-input" type="checkbox"'+checked+' style="display:inline;" onclick="javascript: remove(\''+getMainFocus().attr('class')+'\', true); addPropertyFacet(\''+createId()+'\', \''+propIRI+'\', \''+propLabel+'\', \''+sanitizeLabel(value)+'\', \''+sanitizeLabel(label)+'\', \''+datatype+'\')" />';
          rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
          rows += '</div>';
//                 rows += '<img title="click to drop-down" class="count" onclick="javascript:expand(\''+value+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')" width="16" height="16"/>';
          // rows += '<a title="click to drop-down" class="count" onclick="javascript:expand(\''+value+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')"><img width="16" height="16"/>&nbsp;&nbsp;</a>&nbsp;';
          rows += '<i title="acts as \''+propLabel+'\' of these things" class="expand la la-bars" onclick="javascript:expand(\''+value+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')"></i>';
        }
        // rows += '</td></tr>';


        rows +=  '</div>';

        rows +=  '</a>';

      }
    }
  });

  //console.log(rows);
  //$('#'+ID_GROUP_BY+'').append(rows);
  $('#angular_recordsList').append(rows);

  //$('#groupby').append(rows);
  //return total;



} // loadGroupByResults


function addSubResults(opt){
  var table = $.createElement('table');
  table.attr('id', opt.childrenId);
  table.attr('width', '100%');
  table.addClass('table');
  table.addClass('table-striped');
  table.css('margin-bottom', '0px');
  var tbody = $.createElement('tbody');
  table.append(tbody);
  //col.append(table);
  //row.append(col);
  $('#'+opt.parentId+'').after(table);
}

function expand(propVal, datatype, optsStr){
  var opts = toJSONObject(optsStr);
  var childrenId = opts.childrenId;
  var parentId = opts.parentId;
  propVal = deSanitizeLabel(propVal);
  if($('#'+parentId+'').hasClass('up')){
    $('#'+parentId+'').removeClass('up');
    $('#'+parentId+'').addClass('down');
  }
  else{
    collapse(opts);
    return;
  }
  //console.log('user expanded: ' + childrenId);
  /*
      var children = $.createElement('table').attr('id', childrenId);
      children.attr('width', '100%');
      $('#'+parentId+'').append(children);
  */

  //var row = $.createElement('tr').attr('id', childrenId);
  //var col = $.createElement('td');
  //col.attr('colspan', '2');




  var q = _root.find('query').clone();
  setViewType(VIEW_TYPE_LIST, q);
  getFocus(q).find('view').attr('offset', 0);

  //var id = $('#groupByMenu :selected').attr('id');
  var propIRI = $('#groupByMenu :selected').attr('value');
  var isReverse = $('#groupByMenu :selected').attr('isReverse') === 'true';


  // POI: need to investigate this more, but basically, when a field is selected in the Group by list, it becomes the focus of the main query
  // but the URI does not update, instead, the fact that the group field is selected indicates the result set is the field's result set and
  // the focus (as asserted by the UI) is under each of those smart folders, thus, the groupby query criteria is never displayed in the facet
  // collector, it is only displayed in the groupby menu. If the groupby criteria is no longer present in the Group by list, then it is removed
  // from the query criteria on loadGroupByMenu()
  var prop = getFocus(q); // = (isReverse) ? q.find('.'+getFocus(q).attr('class') + ' > property-of[class="' +id+ '"]') : q.find('.'+getFocus(q).attr('class') + ' > property[class="' +id+ '"]');
  takeFocus(prop.parent(), q);
  //prop.attr('iri', groupByIRI);
  /*
      if(isReverse) prop = q.find('.'+getFocus(q).attr('class') + ' > property-of[iri="' +propIRI+ '"]');
      else {
        prop = q.find('.'+getFocus(q).attr('class') + ' > property[iri="' +propIRI+ '"]');
        if(!prop || prop.length == 0){
          prop = $.createElement('property');
          //prop.attr('class', id);
          prop.attr('iri', propIRI);
          prop.attr('label', 'test');
          //prop.attr('isGroupBy', 'true');
          getFocus(q).append(prop);
        }
      }

  */

  var val = $.createElement('value');
  val.text(propVal);
  if(datatype && datatype.length > 0 && datatype !== 'undefined') val.attr('datatype', datatype);
  //val.attr('op', '=');
  //val.attr('same_as', 'yes');
  prop.append(val);
  //getFocus(q).append(prop);

  $('#'+parentId+'').addClass('loading');
  //takeFocus(q, q);
  fct_query(q, VIEW_TYPE_LIST,opts);

}

function collapse(opts){
  $('#'+opts.childrenId).remove();
  $('#'+opts.parentId).removeClass('down');
  $('#'+opts.parentId).addClass('up');
}



function loadGroupByMenu(xml){

  var opts = "";
  var result = $(xml).find("fct\\:result")[0];
  var value, datatype, shortform, label, ct;
  var defaultVal;





  $(_root.find('.'+getMainFocus().attr('class') + ' > property-of')).each(function(i) {
    /*var children = $(this).has('property');
    var tar = (children) ? breadcrumbs : facetCollector ;*/
    label = $(this).attr('label');
    value = $(this).attr('iri');
    var id = $(this).attr('class');
    opts += '<option defaultLabel="'+label+'" isReverse="true" l="'+value+DELIMIT_GROUP_BY_VALUE_AND_LABEL+label+'" value="'+value+DELIMIT_GROUP_BY_REVERSE_PROPERTY+'" id="'+id+'">'+label+'*</option>'; //POI: the DELIMIT_GROUP_BY_REVERSE_PROPERTY signifies a role in the permalink query parameter also
  });



  $("fct\\:row", result).each(function(i) {
    val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
    if(i == 0) defaultVal = val;
    //console.log($(this).html());
    var col = $(this).find("fct\\:column");
    $("fct\\:column", this).each(function(j) {
      // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
      // seems like jquery is commenting out the CDATA
      val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
      //console.log(val);
      switch(j){
        case 0: value = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); break;
        case 1: label = val; break;
        case 2: ct = val; break;
      }
    });
    label = processLabel(label, value, datatype, 14);
    //console.log($(col[0]));
    opts += '<option defaultLabel="'+label+'" l="'+value+DELIMIT_GROUP_BY_VALUE_AND_LABEL+label+'" value="'+value+'" id="'+createId()+'">'+label+'</option>';
  });
  //console.log(rows);


  //var previousGroupBy = $('#groupByMenu :selected').attr('value');
  $('#groupByMenu').empty();
  $('#groupByMenu').append('<option defaultLabel="'+GROUP_BY_NONE_LABEL+'" l="'+GROUP_BY_NONE_VALUE+DELIMIT_GROUP_BY_VALUE_AND_LABEL+GROUP_BY_NONE_LABEL+'"value="'+GROUP_BY_NONE_VALUE+'" id="'+createId()+'">'+GROUP_BY_NONE_LABEL+'</option>');
  $('#groupByMenu').append('<option defaultLabel="'+GROUP_BY_TEXT_LABEL+'" l="'+GROUP_BY_TEXT_VALUE+DELIMIT_GROUP_BY_VALUE_AND_LABEL+GROUP_BY_NONE_LABEL+'"value="'+GROUP_BY_TEXT_VALUE+'" id="'+createId()+'">'+GROUP_BY_TEXT_LABEL+'</option>');
  $('#groupByMenu').append(opts);

  // TODO: not fully implemented
  /*
  var groupByCriteria = _root.find('.' + getMainFocus().attr('class') + ' > property[isGroupBy="true"]');
  var propIRI = _root.find('.' + getMainFocus().attr('class') + ' > property[isGroupBy="true"]').attr('iri');
  if(groupByCriteria == groupByCriteria.length > 0){
    //groupByCriteria = _root.find('.' + getMainFocus().attr('class') + ' > property-of[isGroupBy="true"]');
    //propIRI = _root.find('.' + getMainFocus().attr('class') + ' > property-of[isGroupBy="true"]').attr('iri');
  }
  if(groupByCriteria == groupByCriteria.length > 0){
    var groupByMenuItem = $('#groupByMenu').find('option[value="' + propIRI + '"]');
    if(!groupByMenuItem || groupByMenuItem.length <= 0){
      //groupByCriteria.remove();
      //selectMenuItem('groupByMenu', GROUP_BY_NONE_VALUE);
    }
  }
  else{
    //takeMainFocus(_root.find('.' + getMainFocus().attr('class') + ' > property[isGroupBy="true"]').attr('class'), true);
      //selectMenuItem('groupByMenu', propIRI);
  }
  */

  /*
            // allow user to remain in "text result mode"
            if(previousGroupBy == GROUP_BY_TEXT_VALUE){
                $('#groupByMenu').val(previousGroupBy);
                selectGroupBy(true);
            }
  */
  if(opts.length > 1) {
    //$('#groupByMenu').val(defaultVal);
    //selectGroupBy();
  }


  //$('#groupby').append(rows);
  //return total;


} // loadCategoriesResults



function selectGroupBy(isPaging){
  $('#groupByHeader > p.gbsub').text('');
  $('#groupByHeader > p.gbbadge').text('');
  // update the Group By list
  var q = _root.find('query');//.clone();
  var iri = $('#groupByMenu :selected').attr('l').split(DELIMIT_GROUP_BY_VALUE_AND_LABEL)[0];
  var label = $('#groupByMenu :selected').attr('l').split(DELIMIT_GROUP_BY_VALUE_AND_LABEL)[1];
  if(iri == GROUP_BY_NONE_VALUE){
    //takeFocus(q, q);
    //$('#groupByHeader').text('Records');
  }
  else if(iri == GROUP_BY_TEXT_VALUE){
    //$('#groupByHeader').text('Text Matches');
  }
  else{
    //$('#groupByMenu :selected').text('Records (by ' + label + ')');
    var isReverse = $('#groupByMenu :selected').attr('isReverse') == 'true';
    //var prop = (isReverse) ? $.createElement('property-of') : $.createElement('property');
    var prop;

    // POI: user is not allowed to "add" a property-of facet (for now), instead, user must
    // manually add a field from the Used As menu, after that, the Used As field will
    // appear in the Group by, if the focus has one
    if(isReverse) prop = q.find('.'+getFocus(q).attr('class') + ' > property-of[iri="' +iri+ '"]');
    else {
      prop = q.find('.'+getFocus(q).attr('class') + ' > property[iri="' +iri+ '"]');
      if(!prop || prop.length == 0){
        prop = $.createElement('property');
        prop.attr('class', $('#groupByMenu :selected').attr('id'));
        prop.attr('iri', iri);
        prop.attr('label', label);
        prop.attr('isGroupBy', 'true');
        getFocus(q).append(prop);
      }
    }
    takeFocus(prop, getFocus(q));
    var sub = $.createElement('p');
    sub.addClass('help-block');
    sub.addClass('m-0');
    sub.addClass('text-ellipsis');
    sub.addClass('gbsub');
    sub.text('Grouped by ');
    var badge = $.createElement('p');
    badge.addClass('badge');
    badge.addClass('badge-default');
    badge.addClass('gbbadge');
    badge.css('display', 'inline');
    badge.text(label + ' ');
    //var removeLink = $.createElement('a');
    //removeLink.text('x');
    //badge.append(removeLink);
    badge.on('click', function (e){
      selectMenuItem('groupByMenu', GROUP_BY_NONE_VALUE);
    });
    //sub.addClass('float-right');
    //<p class="help-block text-ellipsis m-0"></p>
    $('#groupByHeader > h4').after(sub);
    sub.append(badge);
  }


  if(!isPaging){
    getFocus(q).find('view').attr('offset', 0);
    getMainFocus().find('view').attr('offset', 0);
    page = 0;
  }

  $('#groupByHeader').addClass('loading');
  if(getQueryText().length > 0 && iri == GROUP_BY_TEXT_VALUE){
    fct_query(q, VIEW_TYPE_TEXT);
  }
  else fct_query(q, VIEW_TYPE_LIST_COUNT);

  // update the Show Me list
  // POI: no need to update the show me during paging
  // need to check whether its ok not to update when a filter is
  // selected from the groupByMenu, in theory, the groupByMenu
  // should only list bound fields, but need to make sure
  // for now, we skip the showMe update when an item is
  // selected from the groupByMenu
  //if(!isPaging) selectShowMe();
}


//** FILE: showme.js **/
var showMePage = 0;

var showMeResultsCt = 0;

//query.append(view);
//doQuery();

function showMeResetPaging(){
  showMePage = 0;
  showMeResultsCt = 0;
}

function showMePageRight(){
  setViewOffset(getViewOffset() + SIZE_RESULT_SET);
  showMePage++;
  //fct_query(query, VIEW_TYPE_LIST_COUNT);
  selectShowMe(true);
}

function showMePageLeft(){
  setViewOffset(getViewOffset() - SIZE_RESULT_SET);
  showMePage--;
  //fct_query(query, VIEW_TYPE_LIST_COUNT);
  selectShowMe(true);
}

function hideAlignButton(){
  $('#alignButton').addClass('disabled');
  $('#alignButton').attr('disabled', 'true');
  $('#alignButton').unbind('click');
}

function loadCategoriesResults(xml){
  $('#'+ID_SHOW_ME+'').empty();
  $('#angular_showMeList').empty();

  var reverse = getMainFocus().prop('nodeName');
  if(reverse == 'property') reverse = 'property-of';
  else reverse = 'property';

  var rows = "";
  var result = $(xml).find("fct\\:result")[0];
  showMeResultsCt = $("fct\\:row", result).length;


  /*
    if(showMePage == 0){
      $("#showMeLeftButton").attr('disabled', 'true');
      $("#showMeLeftButton").addClass('disabled');
      $('#showMeLeftButton').removeAttr('title');
    }
    else{

      $("#showMeLeftButton").removeAttr('disabled');
      $("#showMeLeftButton").removeClass('disabled');
      $('#showMeLeftButton').attr('title', 'page ' + (showMePage));

    }
  if(showMeResultsCt < SIZE_RESULT_SET) {
    $("#showMeRightButton").attr('disabled', 'true');
    $("#showMeRightButton").addClass('disabled');
    $('#showMeRightButton').removeAttr('title');
  }
  else {
    $("#showMeRightButton").removeAttr('disabled');
    $("#showMeRightButton").removeClass('disabled');
    $('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

  }


*/

  if(showMePage == 0){
    $("#showMeLeftButton").addClass('hide');
    $('#showMeLeftButton').removeAttr('title');
  }
  else{

    $("#showMeLeftButton").removeClass('hide');
    $('#showMeLeftButton').attr('title', 'page ' + (showMePage));

  }
  if(showMeResultsCt < SIZE_RESULT_SET) {
    $("#showMeRightButton").addClass('hide');
    $('#showMeRightButton').removeAttr('title');
  }
  else {
    $("#showMeRightButton").removeClass('hide');
    $('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

  }


  // POI: custom logic for demo of MyVios Record category
  /*if(showMePage==0 && $('#nav0 > table > tbody > tr > td.via').text() == VALUE_ROOT) rows += '<tr><td><div class="up" id="'+ID_MY_RECORDS+'"><a href="#'+id+'" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')"><img src="http://icon-park.com/imagefiles/folder_icon_purple.png" width="16" height="16"/></a>&nbsp;<a title="'+VALUE_MANAGED_RECORD+'" href="#'+id+'">'+VALUE_MANAGED_RECORD+'</a> <span class="disabled">'+(Math.floor(Math.random() * 10000) + 1)+'<span></div></td></tr>';*/
  $("fct\\:row", result).each(function(i) {
    //console.log($(this).html());
    var col = $(this).find("fct\\:column");
    var value, datatype, shortform, label, ct;
    $("fct\\:column", this).each(function(j) {
      // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
      // seems like jquery is commenting out the CDATA
      val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
      //console.log(val);
      switch(j){
        case 0: uri = val; break;
        case 1: label = val; break;
        case 2: ct = val; break;
      }
    });
    label = processLabel(label, uri, datatype);
    label = spaceCamelCase(label);
    var id = createId();
    //console.log($(col[0]));
    var opts = new Object();
    opts.tag = TAG_CLASS;
    opts.parentId = 'smr_'+id;
    opts.childrenId = opts.tag + opts.parentId;
    opts.contextId = id;


    rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
    rows +=  '<span class="thumb-sm float-left mr">';
    //rows +=  '<img alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
//                                    rows +=  '<span _ngcontent-c9="" class="badge badge-pill badge-info" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addClassFacet(\''+id+'\', \''+uri+'\', \''+sanitizeLabel(label)+'\')">'+ct+'</span>';
    //rows +=  '<i class="status status-bottom bg-success"></i>';
    //                      rows +=  '</span>';
    //    rows +=  '<div>';
    //        rows +=  '<h6 class="m-0">'+label+'</h6>';
    //          rows +=  '<p class="help-block text-ellipsis m-0"></p>';
    //          rows +=  '</div>';
//          rows +=  '</a>';


    var color = 'info';
    var ckcolor = 'primary';

    if(true){



      //console.log('test parent: ' + getMainFocus().parent(reverse + '[iri='+getMainFocus().attr('iri')+']').parent().attr('class'));
      var align = getMainFocus().parent(reverse + '[iri='+getMainFocus().attr('iri')+']').parent().children('class[iri=\''+uri+'\']');
      var facet = getMainFocus().children('class[iri=\''+uri+'\']');
      if((!facet || facet.length) <= 0 && getMainFocus().children('value') && getMainFocus().children('value').length > 0) facet = align;
      var checked = (facet && facet.length > 0) ? ' checked="checked"': '';
      //rows += '<tr  id="rw'+id+'" onmouseover="javascript:showControls(\''+id+'\')" onmouseout="javascript:hideControls(\''+id+'\')"><td class="up" id="'+opts.parentId+'">';

      rows +=  '<span _ngcontent-c9="" class="total badge badge-pill badge-'+color+'" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addClassFacet(\''+id+'\', \''+uri+'\', \''+sanitizeLabel(label)+'\')">'+ct+'</span>';
//          rows += '<a class="count" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addClassFacet(\''+id+'\', \''+uri+'\', \''+sanitizeLabel(label)+'\')">'+ct+'</a>&nbsp;-&nbsp;';
      //rows += '<a title="'+uri+'" onclick="javascript:describe(\''+uri+'\');">'+ spaceCamelCase(label) +'</a>&nbsp;';
      rows +=  '</span>';
      rows +=  '<div>';
      rows +=  '<h6 class="text-ellipsis m-0" onclick="javascript:describe(\''+uri+'\');">';
      rows += label;
      //rows +=  '<p class="help-block text-ellipsis m-0"></p>';

      //rows += '</td><td id="ctrl'+id+'" class="hideCtrl" style="white-space:nowrap; vertical-align:top;">';
      rows += '<div class="form-check-inline abc-checkbox abc-checkbox-'+ckcolor+'">';
      rows += '<input class="form-check-input" id="ckbx'+id+'" type="checkbox"'+checked+' style="display:inline;" onclick="javascript: if(!$(this).is(\':checked\')) {removeFacet(\''+facet.attr('class')+'\')}else{addClassFacet(\''+id+'\', \''+uri+'\', \''+sanitizeLabel(label)+'\')}" />&nbsp;';
      rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
      rows += '</div>';
      //rows += '<img title="view instances" class="count" onclick="javascript:expandShowMe(\''+uri+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')" width="16" height="16"/>';
//          rows += '<a title="view instances" class="count" onclick="javascript:expandShowMe(\''+uri+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')">&nbsp;<img width="16" height="16"/></a>';
      //rows += '</td></tr>';
      rows += '<i title="acts as \''+label+'\' field of these records" class="expand la la-bars" onclick="javascript:expandShowMe(\''+uri+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')"></i>';

      rows +='</h6>';
      rows +=  '</div>';
      rows +=  '</a>';

    } // if false
  });
  //console.log(rows);

  // $('#'+ID_SHOW_ME+'').append(rows);
  $('#angular_showMeList').append(rows);

  if(getMainFocus().attr('class') != ID_QUERY && (!getMainFocus().children('value') || getMainFocus().children('value').length == 0)){
    var focusCategories = getMainFocus().children('class');
    var alignArray = getMainFocus().parent(reverse + '[iri='+getMainFocus().attr('iri')+']').parent().children('class').clone(true);
    ///focusCategoriesArray.push(focusCategories);

    var d = diff(getIRIs(alignArray, true), getIRIs(focusCategories));
    //console.log('align length: ' + alignArray.length);
    //console.log('diff[' +d.length+']: '+d+' prop: ' +getMainFocus().prop('nodeName'));
    if(d.length > 0) {
      $('#alignButton').removeClass('disabled');
      $('#alignButton').removeAttr('disabled');
      $('#alignButton').click(function(e){
        focusCategories.remove(); // clear all class criteria
        alignArray.appendTo(getMainFocus()); // add the new class criteria
        doQuery(getQueryText());
      });
    }
    else {
    }
  }

  //$('#groupby').append(rows);
  //return total;
} // loadCategoriesResults

function getIRIs(ele, changeIds){
  var a = [];
  ele.each(function(i){
    if(changeIds) $(this).attr('class', createId());
    a.push($(this).attr('iri'));
    //console.log('id: ' + $(this).prop('nodeName'));
  });
  //console.log('iris: ' + a);
  return a;
}

function diff(a1, a2) {

  var a = [], diff = [];

  for (var i = 0; i < a1.length; i++) {
    a[a1[i]] = true;
  }

  for (var i = 0; i < a2.length; i++) {
    if (a[a2[i]]) {
      delete a[a2[i]];
    } else {
      a[a2[i]] = true;
    }
  }

  for (var k in a) {
    diff.push(k);
  }

  return diff;
}

function showControls(id){
  $('#'+id).removeClass('rowActive');
}

function hideControls(id){
  $('#'+id).addClass('rowActive');
}


function loadPropertiesResults(xml){
  $('#'+ID_SHOW_ME+'').empty();
  $('#angular_showMeList').empty();

  var rows = "";
  var result = $(xml).find("fct\\:result")[0];
  showMeResultsCt = $("fct\\:row", result).length;

  /*
    if(showMePage == 0){
      $("#showMeLeftButton").attr('disabled', 'true');
      $("#showMeLeftButton").addClass('disabled');
      $('#showMeLeftButton').removeAttr('title');
    }
    else{

      $("#showMeLeftButton").removeAttr('disabled');
      $("#showMeLeftButton").removeClass('disabled');
      $('#showMeLeftButton').attr('title', 'page ' + (showMePage));

    }
  if(showMeResultsCt < SIZE_RESULT_SET) {
    $("#showMeRightButton").attr('disabled', 'true');
    $("#showMeRightButton").addClass('disabled');
    $('#showMeRightButton').removeAttr('title');
  }
  else {
    $("#showMeRightButton").removeAttr('disabled');
    $("#showMeRightButton").removeClass('disabled');
    $('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

  }
*/


  if(showMePage == 0){
    $("#showMeLeftButton").addClass('hide');
    $('#showMeLeftButton').removeAttr('title');
  }
  else{

    $("#showMeLeftButton").removeClass('hide');
    $('#showMeLeftButton').attr('title', 'page ' + (showMePage));

  }
  if(showMeResultsCt < SIZE_RESULT_SET) {
    $("#showMeRightButton").addClass('hide');
    $('#showMeRightButton').removeAttr('title');
  }
  else {
    $("#showMeRightButton").removeClass('hide');
    $('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

  }

  // POI: demo code
  /*if(showMePage==0 && $('#nav0 > table > tbody > tr > td.via').text() == VALUE_ROOT) rows += '<tr><td><div class="up" id="'+ID_MY_RECORDS+'"><a href="#'+id+'" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')"><img src="http://icon-park.com/imagefiles/folder_icon_purple.png" width="16" height="16"/></a>&nbsp;<a title="'+VALUE_RECORD_MANAGER+'" href="#'+id+'">'+VALUE_RECORD_MANAGER+'</a> <span class="disabled">'+(Math.floor(Math.random() * 10000) + 1)+'<span></div></td></tr>';*/

  $("fct\\:row", result).each(function(i) {
    //console.log($(this).html());
    var col = $(this).find("fct\\:column");

    // shortform can be used in lieu of the label for URI values
    var propIRI, datatype, shortform, propLabel, ct;
    $("fct\\:column", this).each(function(j) {
      // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
      val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
      //console.log(val);
      switch(j){
        case 0: propIRI = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); break;
        case 1: propLabel = val; break;
        case 2: ct = val; break;
      }
    });
    //label = processLabel(label, uri, datatype);
    //var id = createId();
    //console.log($(col[0]));
    propLabel = processLabel(propLabel, propIRI, datatype);
    //console.log($(col[0]));
    var id = createId();
    var opts = new Object();
    opts.tag = TAG_PROPERTY;
    opts.parentId = 'smr_'+id;
    opts.childrenId = opts.tag + opts.parentId;
    opts.contextId = id;
    opts.propIRI = propIRI;
    opts.propLabel = propLabel;


    var color = ( $('#showMeMenu :selected').attr('value') == VIEW_TYPE_TEXT_PROPERTIES ) ? 'warning' : 'info';
    var ckcolor = 'primary';



    rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
    rows +=  '<span class="thumb-sm float-left mr">';
    //rows +=  '<img alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
    // rows +=  '<span _ngcontent-c9="" class="badge badge-pill badge-info" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addPropertyFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(\''+id+'\');">'+ct+'</span>';
    //rows +=  '<i class="status status-bottom bg-success"></i>';


//rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
    //rows +=  '<span class="thumb-sm float-left mr">';
    //rows +=  '<img alt="..." class="rounded-circle" src="'+getFaviconUrl(value)+'">';
    /*
    rows +=  '<span _ngcontent-c9="" class="badge badge-pill badge-info" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addPropertyFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(\''+id+'\');">'+ct+'</span>';
    //rows +=  '<i class="status status-bottom bg-success"></i>';
rows +=  '</span>';
rows +=  '<div>';
rows +=  '<h6 class="m-0">'+propLabel+'</h6>';
rows +=  '<p class="help-block text-ellipsis m-0"></p>';
rows +=  '</div>';
rows +=  '</a>';
*/

    if(true){


      var facet = _root.find('.' + getMainFocus().attr('class') + ' > property[iri=\''+opts.propIRI+'\']');
      var checked = (facet && facet.length > 0) ? ' checked="checked"': '';
      //rows += '<tr id="'+id+'" onmouseover="javascript:showControls(\''+id+'\')" onmouseout="javascript:hideControls(\''+id+'\')"><td class="up" id="'+opts.parentId+'"><span id="'+id+'">';
      //var propIRI = $('#groupByMenu :selected').attr('value');
      //var propLabel = $('#groupByMenu :selected').text();
      rows +=  '<span _ngcontent-c9="" class="total badge badge-pill badge-'+color+'" onclick="javascript: addPropertyFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(\''+id+'\');">'+ct+'</span>';
      rows +=  '</span>';
      rows +=  '<div>';
//          rows += '<a class="count" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addPropertyFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(\''+id+'\');">'+ct+'</a>&nbsp;-&nbsp;';
//          if(datatype=='uri') {
      rows +=  '<h6 class="text-ellipsis m-0" title="'+propIRI+'" onclick="javascript:describe(\''+propIRI+'\');">';
      //rows += '<a title="'+propIRI+'" onclick="javascript:describe(\''+propIRI+'\');">';
      rows += propLabel;
      //rows += '</a>&nbsp;';
//          }
      //rows += '</span></td><td id="ctrl'+id+'" style="white-space:nowrap; vertical-align:top;">';
      if(propIRI != GROUP_BY_NONE_VALUE){
        rows += '<div class="form-check-inline abc-checkbox abc-checkbox-'+ckcolor+'">';
        rows += '<input id="ckbx'+id+'" class="form-check-input" type="checkbox"'+checked+' style="display:inline;" onclick="javascript: if(!$(this).is(\':checked\')) {removeFacet(\''+facet.attr('class')+'\')}else{addPropertyFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\');}" />&nbsp;';
        rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
        rows += '</div>';
        //rows += '<img title="view values" class="count" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')" width="16" height="16"/>';
        rows += '<i title="view values" class="expand la la-bars" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')"></i>';
//              rows += '<a title="view values" class="count" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')">&nbsp;<img width="16" height="16"/></a>&nbsp;';
        if((facet && facet.length > 0))rows += '<i title="group the record list by \''+propLabel+'\'" class="group la la-compress" onclick="javascript:doGroup(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\')" ></i>';
      }
      rows +='</h6>';
      rows +=  '</div>';
      rows +=  '</a>';
      /*else {
        if(datatype=='uri') rows += '<a href="#'+id+'" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')"><img src="'+icon_file+'" width="16" height="16" /></a>&nbsp;';
        else rows += '<a href="#'+id+'" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')"><img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/tag-512.png" width="16" height="16" /></a>&nbsp;';
      }*/
      // a property is always a uri datatype
      //else
      //rows += propLabel;

      // rows += '</td></tr>';

    }

  });
  //console.log(rows);
//           $('#'+ID_SHOW_ME+'').append(rows);
  $('#angular_showMeList').append(rows);

  //$('#groupby').append(rows);
  //return total;
} // loadPropertiesResults


function doGroup(id, iri, label, isPropOf){
  var v = $('#groupByMenu > option[value="'+iri+'"]');
  if(!v || v.length <= 0){
    if(isPropOf){
      addPropertyOfFacet(id, iri, label);
    }
    else {
      addPropertyFacet(id, iri, label);
    }
    var opt = '<option defaultLabel="'+label+'" l="'+iri+DELIMIT_GROUP_BY_VALUE_AND_LABEL+label+'" value="'+iri+'" id="'+createId()+'">'+label+'</option>';
    $('#groupByMenu').append(opt);
  }
  selectMenuItem('groupByMenu', iri);
  //selectGroupBy();
}


function loadPropertiesInResults(xml){
  $('#'+ID_SHOW_ME+'').empty();
  $('#angular_showMeList').empty();

  var rows = "";
  var result = $(xml).find("fct\\:result")[0];
  showMeResultsCt = $("fct\\:row", result).length;
  /*if(showMePage == 0){
    $("#showMeLeftButton").attr('disabled', 'true');
    $("#showMeLeftButton").addClass('disabled');
    $('#showMeLeftButton').removeAttr('title');
  }
  else{

    $("#showMeLeftButton").removeAttr('disabled');
    $("#showMeLeftButton").removeClass('disabled');
    $('#showMeLeftButton').attr('title', 'page ' + (showMePage));

  }
if(showMeResultsCt < SIZE_RESULT_SET) {
  $("#showMeRightButton").attr('disabled', 'true');
  $("#showMeRightButton").addClass('disabled');
  $('#showMeRightButton').removeAttr('title');
}
else {
  $("#showMeRightButton").removeAttr('disabled');
  $("#showMeRightButton").removeClass('disabled');
  $('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

}*/
  if(showMePage == 0){
    $("#showMeLeftButton").addClass('hide');
    $('#showMeLeftButton').removeAttr('title');
  }
  else{

    $("#showMeLeftButton").removeClass('hide');
    $('#showMeLeftButton').attr('title', 'page ' + (showMePage));

  }
  if(showMeResultsCt < SIZE_RESULT_SET) {
    $("#showMeRightButton").addClass('hide');
    $('#showMeRightButton').removeAttr('title');
  }
  else {
    $("#showMeRightButton").removeClass('hide');
    $('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

  }

  $("fct\\:row", result).each(function(i) {
    //console.log($(this).html());
    var col = $(this).find("fct\\:column");

    // shortform can be used in lieu of the label for URI values
    var propIRI, datatype, shortform, propLabel, ct;
    $("fct\\:column", this).each(function(j) {
      // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
      val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
      //console.log(val);
      switch(j){
        case 0: propIRI = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); break;
        case 1: propLabel = val; break;
        case 2: ct = val; break;
      }
    });
    //label = processLabel(label, uri, datatype);
    //var id = createId();
    //console.log($(col[0]));
    propLabel = processLabel(propLabel, propIRI, datatype);
    //console.log($(col[0]));
    var id = createId();
    var opts = new Object();
    opts.tag = TAG_PROPERTY_OF;
    opts.parentId = 'smr_'+id;
    opts.childrenId = opts.tag + opts.parentId;
    //opts.propIRI = propIRI;
    //opts.propLabel = propLabel;
    opts.contextId = id;
    opts.propIRI = propIRI;
    opts.propLabel = propLabel;


    rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
    rows +=  '<span class="thumb-sm float-left mr">';



    var facet = _root.find('.' + getMainFocus().attr('class') + ' > property-of[iri=\''+opts.propIRI+'\']');
    var checked = (facet && facet.length > 0) ? ' checked="checked"': '';
    //        rows += '<tr id="'+id+'" onmouseover="javascript:showControls(\''+id+'\')" onmouseout="javascript:hideControls(\''+id+'\')"><td class="up" id="'+opts.parentId+'"><span id="'+id+'">';
    //var propIRI = $('#groupByMenu :selected').attr('value');
    //var propLabel = $('#groupByMenu :selected').text();
//          rows += '<a class="count" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript: addPropertyOfFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(\''+id+'\')">'+ct+'</a>&nbsp;-&nbsp;';

    rows +=  '<span _ngcontent-c9="" class="total badge badge-pill badge-info" onclick="javascript: addPropertyOfFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\'); takeMainFocus(\''+id+'\')">'+ct+'</span>';
    rows +=  '</span>';
    rows +=  '<div>';
    rows +=  '<h6 class="text-ellipsis m-0" title="'+propIRI+'" onclick="javascript:describe(\''+propIRI+'\');">';

    var color = 'info';
    var ckcolor = 'primary';


    rows += propLabel;
    //rows += '</span></td><td id="ctrl'+id+'" class="hideCtrl" style="white-space:nowrap; vertical-align:top;">';
    if(propIRI != GROUP_BY_NONE_VALUE){
      rows += '<div class="form-check-inline abc-checkbox abc-checkbox-'+color+'">';
      rows += '<input id="ckbx'+id+'" class="form-check-input" type="checkbox"'+checked+' style="display:inline;" onclick="javascript: if(!$(this).is(\':checked\')) {removeFacet(\''+facet.attr('class')+'\')}else{addPropertyOfFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\');}"/>&nbsp;';
      rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
      rows += '</div>';
      rows += '<i title="view values" class="expand la la-bars" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')"></i>';
      //rows += '<img title="shows up in the \''+propLabel+'\' field of these records" class="count" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')" width="16" height="16"/>';
      if((facet && facet.length > 0))rows += '<i title="group the record list by role: \''+propLabel+'\'" class="group la la-compress" onclick="javascript:doGroup(\''+id+'\', \''+propIRI+DELIMIT_GROUP_BY_REVERSE_PROPERTY+'\', \''+propLabel+'\', true)" ></i>';
    }

    rows +='</h6>';
    rows +=  '</div>';
    rows +=  '</a>';

    /*else {
      if(datatype=='uri') rows += '<a href="#'+id+'" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')"><img src="'+icon_file+'" width="16" height="16" /></a>&nbsp;';
      else rows += '<a href="#'+id+'" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')"><img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/tag-512.png" width="16" height="16" /></a>&nbsp;';
    }*/
    // a property-of is always a uri datatype
    //else
    //rows += propLabel;
    //rows += '</td></tr>';
  });
  //console.log(rows);
  // $('#'+ID_SHOW_ME+'').append(rows);
  $('#angular_showMeList').append(rows);

  //$('#groupby').append(rows);
  //return total;
} // loadPropertiesResults


function loadGraphResults(xml){
  $('#'+ID_SHOW_ME+'').empty();
  $('#angular_showMeList').empty();

  var rows = "";
  var result = $(xml).find("fct\\:result")[0];
  showMeResultsCt = $("fct\\:row", result).length;
  /*if(showMePage == 0){
    $("#showMeLeftButton").attr('disabled', 'true');
    $("#showMeLeftButton").addClass('disabled');
    $('#showMeLeftButton').removeAttr('title');
  }
  else{

    $("#showMeLeftButton").removeAttr('disabled');
    $("#showMeLeftButton").removeClass('disabled');
    $('#showMeLeftButton').attr('title', 'page ' + (showMePage));

  }
if(showMeResultsCt < SIZE_RESULT_SET) {
  $("#showMeRightButton").attr('disabled', 'true');
  $("#showMeRightButton").addClass('disabled');
  $('#showMeRightButton').removeAttr('title');
}
else {
  $("#showMeRightButton").removeAttr('disabled');
  $("#showMeRightButton").removeClass('disabled');
  $('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

}*/
  if(showMePage == 0){
    $("#showMeLeftButton").addClass('hide');
    $('#showMeLeftButton').removeAttr('title');
  }
  else{

    $("#showMeLeftButton").removeClass('hide');
    $('#showMeLeftButton').attr('title', 'page ' + (showMePage));

  }
  if(showMeResultsCt < SIZE_RESULT_SET) {
    $("#showMeRightButton").addClass('hide');
    $('#showMeRightButton').removeAttr('title');
  }
  else {
    $("#showMeRightButton").removeClass('hide');
    $('#showMeRightButton').attr('title', 'page ' + (showMePage+2));

  }

  // POI: demo code
  /*if(showMePage==0 && $('#nav0 > table > tbody > tr > td.via').text() == VALUE_ROOT) rows += '<tr><td><div class="up" id="'+ID_MY_RECORDS+'"><a href="#'+id+'" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')"><img src="http://icon-park.com/imagefiles/folder_icon_purple.png" width="16" height="16"/></a>&nbsp;<a title="'+VALUE_RECORD_MANAGER+'" href="#'+id+'">'+VALUE_RECORD_MANAGER+'</a> <span class="disabled">'+(Math.floor(Math.random() * 10000) + 1)+'<span></div></td></tr>';*/

  $("fct\\:row", result).each(function(i) {
    //console.log($(this).html());
    var col = $(this).find("fct\\:column");

    // shortform can be used in lieu of the label for URI values
    var graphIRI, datatype, shortform, graphLabel, ct;
    $("fct\\:column", this).each(function(j) {
      // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
      val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
      //console.log(val);
      switch(j){
        case 0: graphIRI = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); break;
        case 1: graphLabel = val; break;
        case 2: ct = val; break;
      }
    });
    //label = processLabel(label, uri, datatype);
    //var id = createId();
    //console.log($(col[0]));
    if(!graphIRI || graphIRI.length == 0) return; // continue the loop
    graphLabel = processLabel(graphLabel, graphIRI, datatype);
    graphLabel = getLibraryLabel(graphLabel);
    //console.log($(col[0]));
    var id = createId();
    var opts = new Object();
    opts.tag = TAG_GRAPH;
    opts.parentId = 'smr_'+id;
    opts.childrenId = opts.tag + opts.parentId;
    opts.contextId = id;
    opts.propIRI = graphIRI;
    opts.propLabel = graphLabel;


    rows +=  '<a id="'+opts.parentId+'" class="up list-group-item" data-target="#">';
    // rows +=  '<span class="thumb-sm float-left mr">';





    var facet = _root.find('.' + ID_QUERY + '[graph=\''+graphIRI+'\']');
    var checked = (facet && facet.length > 0) ? ' checked="checked" ': '';
    //rows += '<tr><td class="up" id="'+opts.parentId+'"><span id="'+id+'">';
    //var propIRI = $('#groupByMenu :selected').attr('value');
    //var propLabel = $('#groupByMenu :selected').text();
    /*          if(graphIRI != GROUP_BY_NONE_VALUE){
                 //rows += '<a onclick="javascript:setGraphFacet(\''+graphIRI+'\', \''+graphLabel+'\')">'+getFavicon(graphIRI)+'</a>&nbsp;';
                     //rows += '<img onclick="javascript:setGraphFacet(\''+graphIRI+'\', \''+graphLabel+'\')" src="'+getFaviconUrl(graphIRI)+'">';

             rows +=  '<span _ngcontent-c9="" class="total badge badge-pill badge-info" onclick="javascript:setGraphFacet(\''+graphIRI+'\', \''+graphLabel+'\')" src="'+getFaviconUrl(graphIRI)+'">'+ct+'</span>';
                                   rows +=  '</span>';
               //rows +=  '<div>';
   //                                    rows +=  '<i class="status status-bottom bg-success"></i>';
             }
                                   rows +=  '</span>';

               rows +=  '<div>';
   */

    rows +=  '<span class="thumb-sm float-left mr">';

    rows += '<img onclick="javascript:setGraphFacet(\''+graphIRI+'\', \''+graphLabel+'\')" src="'+getFaviconUrl(graphIRI)+'">';
    rows +=  '<i class="status status-bottom bg-success"></i>';
    rows += '</span>';

    var ckcolor = 'primary';



    /*else {
      if(datatype=='uri') rows += '<a href="#'+id+'" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')"><img src="'+icon_file+'" width="16" height="16" /></a>&nbsp;';
      else rows += '<a href="#'+id+'" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')"><img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/tag-512.png" width="16" height="16" /></a>&nbsp;';
    }*/
    // a property is always a uri datatype
    rows +=  '<h6 class="text-ellipsis m-0" title="'+graphIRI+'" onclick="javascript:describe(\''+graphIRI+'\');">';
    //if(datatype=='uri') {
    //rows += '<a title="'+graphIRI+'" onclick="javascript:describe(\''+graphIRI+'\');">'
    rows+=graphLabel;
    //rows+='</a>';
    //}
    //else
    //rows += propLabel;
//          rows += '</span></td><td id="ctrl'+id+'" class="hideCtrl" style="white-space:nowrap; vertical-align:top;">';
    rows += '<div class="form-check-inline abc-checkbox abc-checkbox-'+ckcolor+'">';
    rows += '<input id="ckbx'+id+'" class="form-check-input" type="checkbox"'+checked+' onclick="javascript: if(!$(this).is(\':checked\')) {removeGraphFacet();}else{setGraphFacet(\''+graphIRI+'\', \''+graphLabel+'\')}"/>&nbsp;';
    rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
    rows += '</div>';


    rows +='</h6>';
    rows +=  '</div>';
    rows +=  '</a>';

    //rows += '&nbsp;&nbsp;<a title="view values" class="count" href="#'+id+'" onclick="javascript:expandShowMe(\''+propIRI+'\', \''+datatype+'\', \''+toJSONString(opts)+'\')">'+ct+'</a>';
//          rows += '</td></tr>';
  });
  //console.log(rows);
  // $('#'+ID_SHOW_ME+'').append(rows);
  $('#angular_showMeList').append(rows);

  //$('#groupby').append(rows);
  //return total;
} // loadPropertiesResults


function selectShowMe(isPaging){
  var showMeType = $('#showMeMenu :selected').attr('value');
  hideAlignButton();
  if(showMeType == VIEW_TYPE_TEXT_PROPERTIES){
    if(!_root.find('query text') || _root.find('query text').length <= 0){
      //('Please enter keywords to view corresponding text fields');
      $('#'+ID_SHOW_ME+'').empty();
      return;
    }
  }
  $('#showMeHeader').addClass('loading');
  var q = getQuery().clone();
  setViewType(showMeType, q);
  //q.find('view').attr('limit', SIZE_RESULT_SET);
  //q.find('view').attr('offset', 0);
  //q.attr('same-as', 'true');

  if(!isPaging){
    getFocus(q).find('view').attr('offset', 0);
    getMainFocus().find('view').attr('offset', 0);
    showMePage = 0;
  }

  //takeFocus(q, q);
  fct_query(q, showMeType);
}



function expandShowMe(v, datatype, optsStr){
  var opts = toJSONObject(optsStr);
  var childrenId = opts.childrenId;
  var parentId = opts.parentId;
  v = deSanitizeLabel(v);
  if($('#'+parentId+'').hasClass('up')){
    $('#'+parentId+'').removeClass('up');
    $('#'+parentId+'').addClass('down');
  }
  else{
    collapse(opts);
    return;
  }

  /*
      //console.log('user expanded: ' + id);
      var table = $.createElement('table');
      table.attr('id', childrenId);
      table.attr('width', '100%');
      table.addClass('table');
      table.addClass('table-striped');
      var tbody = $.createElement('tbody');
      table.append(tbody);
      //col.append(table);
      //row.append(col);
      $('#'+parentId+'').after(table);
  */
  var q = getQuery().clone();
  setViewType(VIEW_TYPE_LIST_COUNT, q);
  getFocus(q).find('view').attr('offset', 0);

  //var groupByIRI = $('#groupByMenu :selected').attr('value');
  var prop;
  if(opts.tag == TAG_PROPERTY) {
    prop = $.createElement('property');
    prop.attr('iri', v);
    getFocus(q).append(prop);
    takeFocus(prop, q);
  }
  else if(opts.tag == TAG_PROPERTY_OF) {
    prop = $.createElement('property-of');
    prop.attr('iri', v);
    getFocus(q).append(prop);
    takeFocus(prop, q);
  }
  else if(opts.tag == TAG_CLASS) {
    prop = $.createElement('class');
    prop.attr('iri', v);
    getFocus(q).append(prop);
    // leave the focus where it is
  }


  //var val = $.createElement('value');
  //val.text(v);
  //val.attr('datatype', datatype);
  //val.attr('op', '=');
  //val.attr('same_as', 'yes');
  //prop.append(val);

  $('#'+parentId+'').addClass('loading');
  fct_query(q, VIEW_TYPE_LIST_COUNT, opts);

}


function loadPropertyValues(xml, opts){
  var rows = "";
  var result = $(xml).find("fct\\:result")[0];
  var value, datatype, shortform, label, ct;
  var loadedUri = false;
  $("fct\\:row", result).each(function(i) {
    //console.log($(this).html());
    var col = $(this).find("fct\\:column");
    $("fct\\:column", this).each(function(j) {
      // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
      // seems like jquery is commenting out the CDATA
      val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
      //console.log(val);
      switch(j){
        case 0: value = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); break;
        case 1: label = val; break;
        case 2: ct = val; break;
      }
    });
    label = processLabel(label, value, datatype);
    var id = createId();
    //console.log($(col[0]));

    if(!loadedUri) {
      if(datatype === 'uri'){
        loadedUri = true;
        describe(value);
      }
    }


    rows += '<tr><td>';
//rows +=  '<a class="list-group-item" data-target="#">';
    rows +=  '<span class="thumb-sm float-left mr">';
    if(datatype == 'uri'){
      rows += '<img style="cursor:pointer" onclick="javascript: remove(\''+_root.find('.' + getMainFocus().attr('class') + ' > [iri=\''+opts.propIRI+'\']').attr('class')+'\'); setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\'); takeMainFocus(\''+opts.contextId+'\')" src="'+getFaviconUrl(value)+'">';
      rows +=  '<i class="status status-bottom bg-success"></i>';
    }
    else {
      rows += '<span style="cursor:pointer" onclick="javascript: remove(\''+_root.find('.' + getMainFocus().attr('class') + ' > [iri=\''+opts.propIRI+'\']').attr('class')+'\'); setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')" class="glyphicon glyphicon-tag"></span>';
    }
    rows += '</span>';
//rows += '</a>';

    var link = '';
    if(datatype=='uri') link = 'style="cursor:pointer" onclick="javascript:describe(\''+value+'\');"';

    rows +=  '<h6 title="'+value+'" '+link+'>'+label

    var facet = _root.find('.' + getMainFocus().attr('class') + ' > property[iri=\''+opts.propIRI+'\'] > value');
    var checked = false;
    if(facet && facet.length > 0){
      facet.each(function (z){
        if( $(this).text() == value ){
          checked = ' checked="checked"';
          return;
        }
      });

    }


    rows += '<div class="form-check-inline abc-checkbox abc-checkbox-primary">';
    rows += '<input id="ckbx'+id+'" class="form-check-input" type="checkbox"'+checked+' onclick="if(!$(this).is(\':checked\')) {remove(\''+_root.find('.' + getMainFocus().attr('class') + ' > [iri=\''+opts.propIRI+'\']').attr('class')+'\');}else{javascript:setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')}"/>&nbsp;';
    rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
    rows += '</div>';

    rows +='</h6>';

    rows += '</td></tr>';


    /*

              rows += '<tr><td class="instance" id="'+id+'"><span id="'+id+'">';
              if(datatype=='uri') rows += '<a title="'+value+'" onclick="javascript:describe(\''+value+'\');">'+label+'</a>&nbsp;';
              else rows += label + '&nbsp;';
              rows += '</span></td><td style="vertical-align:top;">';
              rows += '<a onclick="javascript: remove(\''+_root.find('.' + getMainFocus().attr('class') + ' > [iri=\''+opts.propIRI+'\']').attr('class')+'\'); setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')">'+getFavicon(value)+'</a>&nbsp;';
              rows += '</td></tr>';
    */

    //rows += '&nbsp;<a href="#'+id+'" onclick="javascript: addPropertyFacet(\''+id+'\', \''+propIRI+'\', \''+propLabel+'\', \''+sanitizeLabel(value)+'\', \''+sanitizeLabel(label)+'\', \''+datatype+'\')"><img src="'+icon_folder_black+'" width="16" height="16"/></a>&nbsp;';

  });
  // todo: load the first record


  //console.log(rows);
  addSubResults(opts);
  $('#'+opts.childrenId+' > tbody').append(rows);

  //$('#groupby').append(rows);
  //return total;

}

function loadPropertyOfValues(xml, opts){
  var rows = "";
  var result = $(xml).find("fct\\:result")[0];
  var value, datatype, shortform, label, ct;
  var loadedUri = false;
  $("fct\\:row", result).each(function(i) {
    //console.log($(this).html());
    var col = $(this).find("fct\\:column");
    $("fct\\:column", this).each(function(j) {
      // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
      // seems like jquery is commenting out the CDATA
      val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
      //console.log(val);
      switch(j){
        case 0: value = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); break;
        case 1: label = val; break;
        case 2: ct = val; break;
      }
    });
    label = processLabel(label, value, datatype);
    var id = createId();
    //console.log($(col[0]));

    if(!loadedUri) {
      if(datatype === 'uri'){
        loadedUri = true;
        describe(value);
      }
    }


    rows += '<tr><td>';
//rows +=  '<a class="list-group-item" data-target="#">';
    rows +=  '<span class="thumb-sm float-left mr">';

    rows += '<img style="cursor:pointer" onclick="javascript:setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY_OF+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\'); takeMainFocus(\''+opts.contextId+'\')" src="'+getFaviconUrl(value)+'">';
    rows +=  '<i class="status status-bottom bg-success"></i>';
    rows += '</span>';
//rows += '</a>';

    rows +=  '<h6 style="cursor:pointer" title="'+value+'" onclick="javascript:describe(\''+value+'\');">'+label;


    var facet = _root.find('.' + getMainFocus().attr('class') + ' > property-of[iri=\''+opts.propIRI+'\'] > value');
    var checked = false;
    if(facet && facet.length > 0){
      facet.each(function (z){
        if( $(this).text() == value ){
          checked = ' checked="checked"';
          return;
        }
      });

    }


    rows += '<div class="form-check-inline abc-checkbox abc-checkbox-primary">';
    rows += '<input id="ckbx'+id+'" class="form-check-input" type="checkbox"'+checked+' onclick="if(!$(this).is(\':checked\')) {remove(\''+_root.find('.' + getMainFocus().attr('class') + ' > [iri=\''+opts.propIRI+'\']').attr('class')+'\');}else{javascript:setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY_OF+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')}"/>&nbsp;';
    rows += '<label class="form-check-label" for="ckbx'+id+'"></label>';
    rows += '</div>';
    rows +='</h6>';
    rows += '</td></tr>';
    /*

              rows += '<tr><td class="instance" id="'+id+'"><span id="'+id+'">';
              rows += '<a title="'+value+'" onclick="javascript:describe(\''+value+'\');">'+label+'</a>&nbsp;';
              rows += '</span></td><td style="vertical-align:top;">';
              rows += '<a onclick="javascript:setPropertyValue(\''+id+'\', \''+NODE_TYPE_PROPERTY_OF+'\', \''+opts.contextId+'\', \''+opts.propIRI+'\', \''+opts.propLabel+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')">'+getFavicon(value)+'</a>';
              rows += '</td></tr>';
              */
  });
  // todo: load the first record


  //console.log(rows);
  addSubResults(opts);
  $('#'+opts.childrenId+' > tbody').append(rows);

  //$('#groupby').append(rows);
  //return total;

}

function loadClassInstances(xml, opts){
  var rows = "";
  var result = $(xml).find("fct\\:result")[0];
  var value, datatype, shortform, label, ct;


  var loadedUri = false;
  $("fct\\:row", result).each(function(i) {
    //console.log($(this).html());
    var col = $(this).find("fct\\:column");
    $("fct\\:column", this).each(function(j) {
      // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
      // seems like jquery is commenting out the CDATA
      val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
      //console.log(val);
      switch(j){
        case 0: value = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); break;
        case 1: label = val; break;
        case 2: ct = val; break;
      }
    });
    label = processLabel(label, value, datatype);
    var id = createId();
    //console.log($(col[0]));


    if(!loadedUri) {
      if(datatype === 'uri'){
        loadedUri = true;
        describe(value);
      }
    }



    rows += '<tr><td>';
//rows +=  '<a class="list-group-item" data-target="#">';
    rows +=  '<span class="thumb-sm float-left mr">';

    rows += '<img style="cursor:pointer" onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')" src="'+getFaviconUrl(value)+'">';
    rows +=  '<i class="status status-bottom bg-success"></i>';
    rows += '</span>';
//rows += '</a>';

    rows +=  '<h6 style="cursor:pointer" title="'+value+'" onclick="javascript:describe(\''+value+'\');">'+label+'</h6>';
    rows += '</td></tr>';
    /*
              rows += '<tr><td class="instance" id="'+id+'"><span id="'+id+'">';
              rows += '<a title="'+value+'" onclick="javascript:describe(\''+value+'\');">'+label+'</a>&nbsp;';
              rows += '</span></td><td style="vertical-align:top;">';
              rows += '<a onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')">'+getFavicon(value)+'</a>&nbsp;';
              rows += '</td></tr>';
              */
  });
  // todo: load the first record

  var len1 = parseInt( $('#'+opts.parentId).find('.total').text());
  var len2 = $("fct\\:row", result).length;

  if(len1 > len2){
    rows += '<tr><td>';
    //rows +=  '<a class="list-group-item" data-target="#">';  //rows += '</a>';

    rows +=  '<p class="text-sm-right">... and '+(len1 - len2)+' more</p>';
    rows += '</td></tr>';
  }

  if(false){
    rows +=  '<table class="table table-striped">';
    rows +=  '<tbody>';
    rows +=  '<tr>';
    rows +=  '<td>';
    rows +=  '<div class="form-check abc-checkbox">';
    rows +=  '<input class="form-check-input" id="checkbox2" type="checkbox">';
    rows +=  '<label class="form-check-label" for="checkbox2"></label>';
    rows +=  '</div>';
    rows +=  '</td>';
    rows +=  '</tr>';
    rows +=  '<tr>';
    rows +=  '<td>';
    rows +=  '<div class="form-check abc-checkbox">';
    rows +=  '<input class="form-check-input" id="checkbox3" type="checkbox">';
    rows +=  '<label class="form-check-label" for="checkbox3"></label>';
    rows +=  '</div>';
    rows +=  '</td>';
    rows +=  '</tr>';
    rows +=  '<tr>';
    rows +=  '<td>';
    rows +=  '<div class="form-check abc-checkbox">';
    rows +=  '<input class="form-check-input" id="checkbox4" type="checkbox">';
    rows +=  '<label class="form-check-label" for="checkbox4"></label>';
    rows +=  '</div>';
    rows +=  '</td>';
    rows +=  '</tr>';
    rows +=  '</tbody>';
    rows +=  '</table>';
  }

  //console.log(rows);
  addSubResults(opts);
  $('#'+opts.childrenId+' > tbody').append(rows);

  //$('#groupby').append(rows);
  //return total;

}


//** FILE: record.js **/


var twin = "vios.window.1";

$(document).ready(function () {
  $('#describe').on('load', function () {
    $('#describePanel').removeClass('loadingDescribe');
  });
});

function describe(src){
  src = deSanitizeLabel(src);
  //$('#describePanel').addClass('loadingDescribe');
  $('#describe').attr('src', src);
  //$('#recordLabel').val(label);

  //var win = window.open(src, twin, 'width="'+window.outerWidth+'" height="'+window.outerHeight+'"');
  //win.blur();
  //this.window.focus();
}

function linkOut(){
  var src = $('.iframe').attr('src');
  if(!src || src.length <= 0) return;
  var win = window.open(deSanitizeLabel(src), twin, 'width="'+window.outerWidth+'" height="'+window.outerHeight+'"');
  //win.blur();
  //this.window.focus();
}

function loadInstances(xml, opts){
  var rows = "";
  var result = $(xml).find("fct\\:result")[0];
  var value, datatype, shortform, label, ct;
  var loadedUri = false;
  $("fct\\:row", result).each(function(i) {
    //console.log($(this).html());
    var col = $(this).find("fct\\:column");
    $("fct\\:column", this).each(function(j) {
      // can't figure out how to access CDATA value of the element, tried many combinations of accessors, none worked
      // seems like jquery is commenting out the CDATA
      val = $(this).html().replace("<!--[CDATA[","").replace("]]-->","");
      //console.log(val);
      switch(j){
        case 0: value = val; shortform = $(this).attr('datatype'); datatype = $(this).attr('datatype'); break;
        case 1: label = val; break;
        case 2: ct = val; break;
      }
    });
    label = processLabel(label, value, datatype);
    var id = createId();
    //console.log($(col[0]));

    if(!loadedUri) {
      if(datatype === 'uri'){
        loadedUri = true;
        describe(value);
      }
    }


    rows += '<tr><td>';
//rows +=  '<a class="list-group-item" data-target="#">';
    rows +=  '<span class="thumb-sm float-left mr">';

    rows += '<img onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')" src="'+getFaviconUrl(value)+'">';
    rows +=  '<i class="status status-bottom bg-success"></i>';
    rows += '</span>';
//rows += '</a>';

    rows +=  '<h6 title="'+value+'" onclick="javascript:describe(\''+value+'\');">'+label+'</h6>';
    rows += '</td></tr>';

    /*


              rows += '<tr><td class="instance" id="'+id+'"><span id="'+id+'">';
              rows += '<a title="'+value+'" onclick="javascript:describe(\''+value+'\');">'+label+'</a>&nbsp;';
              rows += '</span></td><td style="vertical-align:top;">';
              rows += '<a onmouseover="javascript:$(\'#focusHeader\').addClass(\'queryFocus\')" onmouseout="javascript:$(\'#focusHeader\').removeClass(\'queryFocus\')" onclick="javascript:setValue(\''+id+'\', \''+value+'\', \''+label+'\', \''+datatype+'\')">'+getFavicon(value)+'</a>&nbsp;';
              rows += '</td></tr>';

    */

  });



  // todo: load the first record


  //console.log(rows);
  addSubResults(opts);
  $('#'+opts.childrenId+' > tbody').append(rows);

  //$('#groupby').append(rows);
  //return total;


}


//** FILE: nav.js **/

var BC_FACET_TYPE_BREADCRUMB = 0;
var BC_FACET_TYPE_FACET = 1;
var BC_FACET_TYPE_FOCUS = 2;


// POI: this function is responsible for building the breadcrumbs and facetCollector
function buildNavPath(){
  $('#breadcrumbPanel').removeClass('hide');

  //var breadcrumbs = $('#breadcrumbs');
  //var facetCollector = $('#facetCollector');
  //var focusCollector = $('#focusCollector');
  var breadcrumbs = $('#angular_breadcrumbBar');
  var facetCollector = $('#angular_facetCollector');
  var focusCollector = $('#angular_focusCollector');
  breadcrumbs.empty();
  facetCollector.empty();
  focusCollector.empty();

  var isRootWithoutProps = true;
  $(_root.find('.'+getMainFocus().attr('class') + ' > property')).each(function(i) {
    isRootWithoutProps = false;
    /*var children = $(this).has('property');
    var tar = (children) ? breadcrumbs : facetCollector ;*/
    var label = $(this).attr('label');
    var len = $(this).find('property').length;
    len += $(this).find('property-of').length;
    len += $(this).find('class').length;
    //if(len > 0) label += ' [' + len + ']';
    //len += ', including';
    facetCollector.append( buildNavigationNode(this, label, BC_FACET_TYPE_FACET, len) );
  });

  $(_root.find('.'+getMainFocus().attr('class') + ' > property-of')).each(function(i) {
    isRootWithoutProps = false;
    /*var children = $(this).has('property');
    var tar = (children) ? breadcrumbs : facetCollector ;*/
    var label = $(this).attr('label');
    var len = $(this).find('property').length;
    len += $(this).find('property-of').length;
    len += $(this).find('class').length;
    //if(len > 0) label += ' [' + len + ']';
    //len += ', including';
    facetCollector.append( buildNavigationNode(this, label, BC_FACET_TYPE_FACET, len) );
  });

  // when node.attr('class'), there are no more parents
  var isFocus = true;
  for(node = $(getMainFocus()); $(node).attr('class') && node.attr('class') != ID_QUERY; node = $(node).parent()){
    if(isFocus) { focusCollector.prepend( buildNavigationNode(node, $(node).attr('label'), BC_FACET_TYPE_FOCUS ) ); isFocus=false;}
    else breadcrumbs.prepend( buildNavigationNode(node, $(node).attr('label'), BC_FACET_TYPE_BREADCRUMB ) );
  }

  //if(getQueryText() || _root.find('class').length > 0 || _root.find('property').length > 0){

  var label = (isExpandSearch) ? LABEL_KEYWORDS : LABEL_RECORD_NAME;
  // showing the count for the root is confusing, use can see the children of the root and their counts, that should suffice
  //var len = _root.find('query property').length;
  //if(len > 0) label += ' [' + len + ']';

  if(isFocus) focusCollector.prepend( buildNavigationNode(_root.find('query'), label, BC_FACET_TYPE_FOCUS));
  else breadcrumbs.prepend( buildNavigationNode(_root.find('query'), label, BC_FACET_TYPE_BREADCRUMB));

  //}

}

function buildNavigationNode(ele, desc, bcFacetType, len){

  var id = $(ele).attr('class');
  var label = (id == ID_QUERY) ? $(ele).find('text').text() : $(ele).text();
  var v = _root.find('.'+id + ' > value'); // use only the <value> that is directly under this node, not other descendant <value>'s
  var c = _root.find('.'+id + ' > class'); // use only the <value> that is directly under this node, not other descendant <value>'s
  var val, cval;
  if(v.length > 0) val = v.attr('label');
  if(c.length > 0) cval = c.attr('label');
  //val = val.trim();

  var isPropOf = ($(ele).prop('nodeName')) ? $(ele).prop('nodeName').toLowerCase() === 'property-of' : false;
  //console.log('nodeName: ' + $(ele).prop('nodeName'));
  //if(isPropOf) console.log('is property-of: ' + label);

  var action = "removeValue";
  if(!val) {
    if(!cval) action = "remove";
    if(id == ID_QUERY) val = label;
    else{
      if(cval){
        val = cval;
      }
      else {
        val = VALUE_ANON_NODE;
      }
    }
  }

  // TODO: decided whether the focus var will ever be used, and if not, remove it; the logic changed so that this is now triggered on mouseover of records and categories
  var focus = "";// hasMainFocus(id) ? 'class="focus"' : '';
  //if(focus) console.log("focus set: " + focus);
  var img = (bcFacetType == BC_FACET_TYPE_FACET) ? '<img src="'+icon_folder_black+'" width="16" height="16"/>&nbsp;' : '';
  if(bcFacetType == BC_FACET_TYPE_FACET) $('#facetCollectorPanel').removeClass('hide');
  // remove the bracket numbers for child count, this is unsafe, since a bracket may be a legitimate part of the label
  // instead, need to pass the child count to this method


  //if(!desc || desc.length == 0) desc = 'anything'; // POI: !desc if this is the <query> and there are no keywords, if no keywords, set keywords to 'anything'

  if(isPropOf) {
    var ttd = desc;
    if(ttd) {
      if(ttd.indexOf('[') > 0) ttd = ttd.substring(0, ttd.lastIndexOf('['));
      ttd = ttd.trim();
    }
    var tooltip = 'and what for what does it act as ' + ttd;
    if(ttd.endsWith(' to') || ttd.endsWith('To')){
      tooltip = 'and what ' + ttd + ' it';
    }
    else if(ttd.endsWith(' of') || ttd.endsWith('Of')){
      var isa = 'is a ';
      if( (ttd.startsWith('is') || ttd.startsWith('Is')) && ttd.length > 2 && (ttd.charAt(2).toUpperCase() == ttd.charAt(2) || ttd.charAt(2) == ' ') ) isa = '';
      tooltip = 'and what ' + isa + ttd + ' it';
    }
    else if(ttd.startsWith('has')){
      tooltip = 'and what ' + ttd + ' represented by it';
    }
    else if(ttd.endsWith('by') || ttd.endsWith('By')){
      tooltip = 'and what is ' + ttd + ' it';
    }
    else if(ttd.endsWith('ing')){
      tooltip = 'and what is ' + ttd + ' it';
    }
    //desc = desc + '';
  }
  else {
    var ttd = desc;
    if(ttd) {
      if(ttd.indexOf('[') > 0) ttd = ttd.substring(0, ttd.lastIndexOf('['));
      ttd = ttd.trim();
    }
    var tooltip = 'and what is its ' + ttd;
    if(ttd.endsWith(' to') || ttd.endsWith('To')){
      tooltip = 'and what it ' + ttd;
    }
    else if(ttd.endsWith(' of') || ttd.endsWith('Of')){
      var isa = 'is a ';
      if( (ttd.startsWith('is') || ttd.startsWith('Is')) && ttd.length > 2 && (ttd.charAt(2).toUpperCase() == ttd.charAt(2) || ttd.charAt(2) == ' ') ) isa = '';
      tooltip = 'and it ' + isa + ttd + ' what';
    }
    else if(ttd.startsWith('has') || ttd.startsWith('Has')){
      tooltip = 'and it ' + ttd + ' among these';
    }
    else if(ttd.endsWith('by') || ttd.endsWith('By')){
      tooltip = 'and what is it ' + ttd;
    }
    else if(ttd.endsWith('ing')){
      tooltip = 'and what is it ' + ttd;
    }
  }
  if(val != VALUE_ANON_NODE && cval != val) {
    // TODO: this label is due to a bug in Virtuoso, the filters aren't being applied, causing the query to conform to what this label says
    // bug submitted: https://github.com/openlink/virtuoso-opensource/issues/823
    //tooltip += ', where one of them is ' + val;
    tooltip += ' where the answer is ' + val; // the correct tooltip
  }
  if(cval){
    var whichOrAnd = ', where';
    if(val != VALUE_ANON_NODE && cval != val) whichOrAnd = ', and';
    tooltip += whichOrAnd + ' each of them is';

    var cvals = _root.find('.'+id + ' > class');
    for(i = 0; i < cvals.length; i++){
      if(i > 0 && cvals.length == 1) break;
      var aoran = aOrAn($( cvals[i] ).attr('label').substring(0, 1));
      tooltip += ' ' + aoran + ' ' + $( cvals[i] ).attr('label');
      if(i+1 < cvals.length) {
        tooltip += ',';
      }
      if(i+2 == cvals.length) {
        tooltip += ' and';
      }
    }

  }
  if(id == ID_QUERY) {
    if(cval){
//            desc += '<br/>+ ' + cval;
      desc = cval;
//            tooltip += ' a '; // add article for the ensuing category
    }

    // TODO: need to remove the redundancy here

    var searchLabel = 'are named';
    if(isExpandSearch){
      searchLabel = 'contain keywords';
    }

    if(v.attr('datatype') == 'uri'){
      tooltip = 'the record for ' + val;
      desc = 'Record';
      if(getQueryGraphLabel() && getQueryGraphLabel().length > 0) {
        desc += '@'+ getQueryGraphLabel();
      }
      else if(getQueryGraph() && getQueryGraph().length > 0) {
        desc += '@'+getQueryGraph();
      }
      if(getQueryText() && getQueryText().length){
        tooltip = 'what ' + tooltip + ' '+searchLabel+': \'' + getQueryText() + '\'';
      }
    }
    else if(val){
      tooltip = 'what records '+searchLabel+': ' + val;
      if(getQueryGraphLabel() && getQueryGraphLabel().length > 0) {
        tooltip += ', in library: ' + getQueryGraphLabel();
        desc += '@'+ getQueryGraphLabel();
      }
      else if(getQueryGraph() && getQueryGraph().length > 0) {
        tooltip += ', in library: ' + getQueryGraph();
        desc += '@'+getQueryGraph();
      }
    }
    else {
      tooltip = 'any record';
      if(!cval) {
        if(getQueryGraphLabel() && getQueryGraphLabel().length > 0) {
          tooltip += ', in library: ' + getQueryGraphLabel();
          desc += '@'+ getQueryGraphLabel();
        }
        else if(getQueryGraph() && getQueryGraph().length > 0) {
          tooltip += ', in library: ' + getQueryGraph();
          desc += '@'+getQueryGraph();
        }
        else desc = LABEL_ROOT;
      }
      else {
        if(getQueryGraphLabel() && getQueryGraphLabel().length > 0) {
          tooltip += ', in library: ' + getQueryGraphLabel();
          desc += '@'+ getQueryGraphLabel();
        }
        else if(getQueryGraph() && getQueryGraph().length > 0) {
          tooltip += ', in library: ' + getQueryGraph();
          desc += '@'+getQueryGraph();
        }
      }
    }
    if(cval){

      tooltip += ', and each of them is';

      var cvals = _root.find('.'+id + ' > class');
      for(i = 0; i < cvals.length; i++){
        if(i > 0 && cvals.length == 1) break;
        var aoran = aOrAn($( cvals[i] ).attr('label').substring(0, 1));
        tooltip += ' ' + aoran + ' ' + $( cvals[i] ).attr('label');
        if(i+1 < cvals.length) {
          tooltip += ',';
        }
        if(i+2 == cvals.length) {
          tooltip += ' and';
        }
      }
    }
  }
  if( (v.attr('datatype') != 'uri' && (!v.attr('iri') || v.attr('iri').length <= 0)) && ( !cval || id == ID_QUERY)){
    if(val.length > 0 && val != VALUE_ANON_NODE) val = '\'' + val + '\'';
  }

  // update root
  getQuery().attr('label', tooltip);

  //var slash = (!isFacet) ? '/' : '';

  var ret;

  if(id == ID_QUERY && (!val || val.trim().length == 0)) val = VALUE_ANON_NODE;

  if(false){
    if(bcFacetType == BC_FACET_TYPE_FACET || bcFacetType == BC_FACET_TYPE_FOCUS) {
      ret =
        '<tr><td title="'+tooltip+'" id="nav'+id+'" '+focus+'><table><tbody>'+
        '<tr><td ><!--<span onclick="javascript:takeMainFocus(\''+id+'\')" >'+ img + '</span>--><span onclick="javascript:'+action+'(\''+id+'\')" class="via '+((!bcFacetType == BC_FACET_TYPE_FACET)?' breadcrumb':'')+'">' + ''+desc+'</span></td>'+
        '<td onclick="javascript:takeMainFocus(\''+id+'\')" class="boundValue"><span class="circle">' + val + '</span></td></tr>'+
        '</tbody></table></td></tr>';
    }
    else { // isBreadCrumb
      ret =
        '<td title="'+tooltip+'" id="nav'+id+'" '+focus+'><table><tbody>'+
        '<tr><td onclick="javascript:'+action+'(\''+id+'\')" class="via '+((!bcFacetType == BC_FACET_TYPE_FACET)?' breadcrumb':'')+'">&nbsp;/&nbsp;'+desc+'</td>'+
        '<td onclick="javascript:takeMainFocus(\''+id+'\')" class="boundValue"><span class="circle">' + val + '</span></td></tr>'+
        '</tbody></table></td>';
    }

  }

  var outline = (val === VALUE_ANON_NODE) ? 'outline-': '';
  var bcOutline = (val === VALUE_ANON_NODE) ? 'outline-default': 'primary';
  var bcOutlineRemove = (val === VALUE_ANON_NODE) ? 'outline-danger': 'danger';

  if(bcFacetType == BC_FACET_TYPE_FACET) {
    ret = '<div style="padding: 0px; background-color:transparent;" class="row" title="'+tooltip+'" id="nav'+id+'" '+focus+'><div style="display:inline; padding:0px;" class="text-ellipsis'+((!bcFacetType == BC_FACET_TYPE_FACET)?' breadcrumb':'')+'"><h6 style="vertical-align:bottom;margin-bottom:0px">&nbsp;<span onclick="javascript:'+action+'(\''+id+'\')" class="via">' + ''+desc+((isPropOf)?'&nbsp;<span style="margin-bottom:4px" class="badge badge-pill badge-default">role</span>':'')+((len > 0) ? '</span>&nbsp;<span style="margin-bottom:4px" class="badge badge-pill badge-default">'+len+'</span>' : '')+'</h6></div><button class="btn-rounded-f btn btn-'+outline+'default btn-block text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">'+val+'</button></div>';
  }
  else if(bcFacetType == BC_FACET_TYPE_FOCUS) {
    ret = '<div style="padding: 0px; background-color:transparent;" class="row" title="'+tooltip+'" id="nav'+id+'" '+focus+'><div onclick="javascript:'+action+'(\''+id+'\')" class="via text-ellipsis'+((!bcFacetType == BC_FACET_TYPE_FACET)?' breadcrumb':'')+'"><h3 class="fw-semi-bold" style="padding-bottom:4px">'+desc+((isPropOf)?'&nbsp;<span style="margin-bottom:4px" class="badge badge-pill badge-default">role</span>':'')+'</h3></div><button id="focusValue" class="btn-rounded-f btn btn-'+outline+'default btn-block text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">'+val+'</button></div>';
  }
  else { // isBreadCrumb
    //ret = '<li class="breadcrumb-item"><div class="row" style="background-color:transparent;" title="'+tooltip+'" id="nav'+id+'" '+focus+'><div onclick="javascript:'+action+'(\''+id+'\')" class="via text-ellipsis'+((!bcFacetType == BC_FACET_TYPE_FACET)?' breadcrumb':'')+'"><h6>' + ''+desc+'</h6></div><button class="btn-rounded-f  btn btn-'+outline+'default btn-block btn-xs text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">'+val+'</button></div></li>';
    ret = '<li class="breadcrumb-item" id="nav'+id+'"><a  title="'+tooltip+'"><em onmouseover="mouseOverFacet(\''+id+'\', \''+outline+'\', \''+bcOutlineRemove+'\')" onmouseout="mouseOutFacet(\''+id+'\', \''+outline+'\', \''+bcOutlineRemove+'\')" onclick="javascript:'+action+'(\''+id+'\')" class="text-ellipsis">'+desc+((isPropOf)?'&nbsp;<span style="margin-bottom:4px" class="badge badge-pill badge-default">role</span>':'')+'</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-'+bcOutline+' btn-block text-ellipsis" onclick="javascript:takeMainFocus(\''+id+'\')">'+val+'</button></li>';
//  gbcol += '<li class="breadcrumb-item"><a  title=""><em>distributor</em></span></a><span><button class="m-0 btn-rounded-f  btn btn-outline-default btn-block text-ellipsis" onclick="javascript:takeMainFocus(\'0\')">'+VALUE_ANON_NODE+'</button></li>';
  }


  /*
          else { // isBreadCrumb
            ret = '<ul class="steps steps-5"> <li><a href="#" title=""><em>Step 1: XXXXXXXX</em><span>Et nequ a quam turpis duisi</span></a></li><li><a href="#" title=""><em>Step 2: XXXXXXXX</em><span>Et nequ a quam turpis duisi</span></a></li><li class="current"><a href="#" title=""><em>Step 3: XXXXXXXX</em><span>Et nequ a quam turpis duisi</span></a></li><li><a href="#" title=""><em>Step 4: XXXXXXXX</em><span>Et nequ a quam turpis duisi</span></a></li><li><a href="#" title=""><em>Step 5: XXXXXXXX</em><span>Et nequ a quam turpis duisi</span></a></li></ul>';
          }
          var ret =
          '<td title="'+tooltip+'" id="nav'+id+'" '+focus+'><table><tbody>'+
          '<tr><td onclick="javascript:'+action+'(\''+id+'\')" class="via '+((!isFacet)?' breadcrumb':'')+'">'+desc+'</td></tr>'+
          '<tr><td onclick="javascript:takeMainFocus(\''+id+'\')" class="boundValue">' + img + val + '</td></tr>'+
          '</tbody></table></td>';
          //console.log("bc added: " + ret);
          */
  return ret;
}

function aOrAn(word){
  word = word.toLowerCase();
  if(word.startsWith('a')||word.startsWith('e')||word.startsWith('i')||word.startsWith('o')||word.startsWith('u')) return 'an';
  return 'a';
}



function mouseOverFacet(id, outline, bcOutlineRemove){
  $('#nav'+id).find('button').removeClass('btn-'+outline);
  $('#nav'+id).find('button').addClass('btn-'+bcOutlineRemove);
}

function mouseOutFacet(id, outline, bcOutlineRemove){
  $('#nav'+id).find('button').removeClass('btn-'+bcOutlineRemove);
  $('#nav'+id).find('button').addClass('btn-'+outline);
}


function getFormEditor(){

  var ret = '';

//ret += '<div id="formEditor" class="tab-content mb-lg col-lg-'+SIZE_RECORD_VIEWER+' col-12" id="myTabContent">';
  ret += '<div class="clearfix"> <ul class="nav nav-tabs float-left" id="myTab" role="tablist"> <li class="nav-item"> <a aria-controls="basic" aria-expanded="true" class="nav-link active" data-toggle="tab" href="#basic" id="home-tab" role="tab">Basic</a> </li> <li class="nav-item"> <a aria-controls="assumtion" aria-expanded="false" class="nav-link" data-toggle="tab" href="#assumtion" id="profile-tab" role="tab">Assumtion</a> </li> <li class="nav-item dropdown"> <a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"> Dropdown <b class="caret"></b> </a> <div class="dropdown-menu"> <a aria-controls="dropdown1" aria-expanded="false" class="dropdown-item" data-toggle="tab" href="#dropdown1" id="dropdown1-tab" role="tab">@fat</a> <a aria-controls="dropdown2" aria-expanded="false" class="dropdown-item" data-toggle="tab" href="#dropdown2" id="dropdown2-tab" role="tab">@mdo</a> </div> </li> </ul> </div>';
  ret += '<div class="tab-content" id="myTabContent"> <div aria-expanded="true" aria-labelledby="basic-tab" class="tab-pane active in clearfix" id="basic" role="tabpanel"> <h3>Tabs-enabled widget</h3> <p>You will never know exactly how something will go until you try it.</p> <p>You can think three hundred times and still have no precise result. If you see attractive girl all you need to do is to go and ask her to give you her phone. You don’t need to think about HOW it can turn out. All you have to do is to GO and DO IT. It should be super-fast and easy. No hesitation. You ask me: “What to do with these fearful thoughts preventing me from doing that?” The answer is to ignore them, because they can’t disappear immediately.</p> <p>The same thing is for startups and ideas. If you have an idea right away after it appears in your mind you should go and make a first step to implement it. </p> <div class="float-right"> <button class="btn btn-inverse">Cancel</button> <button class="btn btn-primary">Some button</button> </div> </div> <div aria-expanded="false" aria-labelledby="assumtion-tab" class="tab-pane" id="assumtion" role="tabpanel"> <p>Why dont use Lore Ipsum? I think if some one says dont use lore ipsum its very controversial point. I think the opposite actually. Everyone knows what is lore ipsum - it is easy to understand if text is lore ipsum.</p> <div class="clearfix"> <div class="btn-toolbar"> <a class="btn btn-default" href="#">&nbsp;&nbsp;Check&nbsp;&nbsp;</a> <a class="btn btn-primary" href="#">&nbsp;&nbsp;Dance?&nbsp;&nbsp;</a> </div> </div> </div> <div aria-expanded="false" aria-labelledby="dropdown1-tab" class="tab-pane" id="dropdown1" role="tabpanel"> <p> If you will think too much it will sink in the swamp of never implemented plans and ideas or will just go away or will be implemented by someone else.</p> <p><strong>5 months of doing everything to achieve nothing.</strong></p> <p>Youll automatically skip - because you know - its just non-informative stub. But what if there some text like this one?</p> </div> <div aria-expanded="false" aria-labelledby="dropdown2-tab" class="tab-pane" id="dropdown2" role="tabpanel"> <blockquote class="blockquote-sm blockquote mb-xs"> Plan it? Make it! </blockquote> <p>The same thing is for startups and ideas. If you have an idea right away after it appears in your mind you should go and make a first step to implement it.</p> </div> </div>';

  return ret;

}
