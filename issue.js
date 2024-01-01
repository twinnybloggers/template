n.tokens=this.blockTokens(n.text,[],u),t.push(n);else if(n=this.tokenizer.list(e)){for(e=e.substring(n.raw.length),i=n.items.length,r=0;r<i;r++)n.items[r].tokens=this.blockTokens(n.items[r].text,[],!1);t.push(n)}else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n);else if(u&&(n=this.tokenizer.def(e)))e=e.substring(n.raw.length),this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n);else if(u&&(n=this.tokenizer.paragraph(e)))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),(s=t[t.length-1])&&"text"===s.type?(s.raw+="\n"+n.raw,s.text+="\n"+n.text):t.push(n);else if(e){var a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}throw new Error(a)}return t},i.inline=function(e){var t,u,n,r,i,s,a=e.length;for(t=0;t<a;t++)switch((s=e[t]).type){case"paragraph":case"text":case"heading":s.tokens=[],this.inlineTokens(s.text,s.tokens);break;case"table":for(s.tokens={header:[],cells:[]},r=s.header.length,u=0;u<r;u++)s.tokens.header[u]=[],this.inlineTokens(s.header[u],s.tokens.header[u]);for(r=s.cells.length,u=0;u<r;u++)for(i=s.cells[u],s.tokens.cells[u]=[],n=0;n<i.length;n++)s.tokens.cells[u][n]=[],this.inlineTokens(i[n],s.tokens.cells[u][n]);break;case"blockquote":this.inline(s.tokens);break;case"list":for(r=s.items.length,u=0;u<r;u++)this.inline(s.items[u].tokens)}return e},i.inlineTokens=function(e,t,u,n){var r,i;void 0===t&&(t=[]),void 0===u&&(u=!1),void 0===n&&(n=!1);var s,a,l,o=e;if(this.tokens.links){var D=Object.keys(this.tokens.links);if(D.length>0)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(o));)D.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,s.index)+"["+V("a",s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(o));)o=o.slice(0,s.index)+"["+V("a",s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(s=this.tokenizer.rules.inline.escapedEmSt.exec(o));)o=o.slice(0,s.index)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(a||(l=""),a=!1,r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e,u,n)){e=e.substring(r.raw.length),u=r.inLink,n=r.inRawBlock;var c=t[t.length-1];c&&"text"===r.type&&"text"===c.type?(c.raw+=r.raw,c.text+=r.text):t.push(r)}else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,n)),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);var h=t[t.length-1];"link"===r.type?(r.tokens=this.inlineTokens(r.text,[],!0,n),t.push(r)):h&&"text"===r.type&&"text"===h.type?(h.raw+=r.raw,h.text+=r.text):t.push(r)}else if(r=this.tokenizer.emStrong(e,o,l))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],u,n),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],u,n),t.push(r);else if(r=this.tokenizer.autolink(e,G))e=e.substring(r.raw.length),t.push(r);else if(u||!(r=this.tokenizer.url(e,G))){if(r=this.tokenizer.inlineText(e,n,J))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(l=r.raw.slice(-1)),a=!0,(i=t[t.length-1])&&"text"===i.type?(i.raw+=r.raw,i.text+=r.text):t.push(r);else if(e){var p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}throw new Error(p)}}else e=e.substring(r.raw.length),t.push(r);return t},u=t,r=[{key:"rules",get:function(){return{block:N,inline:W}}}],(n=null)&&e(u.prototype,n),r&&e(u,r),t}(),Q=n.defaults,K=x,ee=k,te=function(){function e(e){this.options=e||Q}var t=e.prototype;return t.code=function(e,t,u){var n=(t||"").match(/\S*/)[0];if(this.options.highlight){var r=this.options.highlight(e,n);null!=r&&r!==e&&(u=!0,e=r)}return e=e.replace(/\n$/,"")+"\n",n?'<pre><code class="'+this.options.langPrefix+ee(n,!0)+'">'+(u?e:ee(e,!0))+"</code></pre>\n":"<pre><code>"+(u?e:ee(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,u,n){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+n.slug(u)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,u){var n=t?"ol":"ul";return"<"+n+(t&&1!==u?' start="'+u+'"':"")+">\n"+e+"</"+n+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var u=t.header?"th":"td";return(t.align?"<"+u+' align="'+t.align+'">':"<"+u+">")+e+"</"+u+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,u){if(null===(e=K(this.options.sanitize,this.options.baseUrl,e)))return u;var n='<a href="'+ee(e)+'"';return t&&(n+=' title="'+t+'"'),n+=">"+u+"</a>"},t.image=function(e,t,u){if(null===(e=K(this.options.sanitize,this.options.baseUrl,e)))return u;var n='<img src="'+e+'" alt="'+u+'"';return t&&(n+=' title="'+t+'"'),n+=this.options.xhtml?"/>":">"},t.text=function(e){return e},e}(),ue=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,u){return""+u},t.image=function(e,t,u){return""+u},t.br=function(){return""},e}(),ne=function(){function e(){this.seen={}}var t=e.prototype;return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var u=e,n=0;if(this.seen.hasOwnProperty(u)){n=this.seen[e];do{u=e+"-"+ ++n}while(this.seen.hasOwnProperty(u))}return t||(this.seen[e]=n,this.seen[u]=0),u},t.slug=function(e,t){void 0===t&&(t={});var u=this.serialize(e);return this.getNextSafeSlug(u,t.dryrun)},e}(),re=n.defaults,ie=m,se=function(){function e(e){this.options=e||re,this.options.renderer=this.options.renderer||new te,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ue,this.slugger=new ne}e.parse=function(t,u){return new e(u).parse(t)},e.parseInline=function(t,u){return new e(u).parseInline(t)};var t=e.prototype;return t.parse=function(e,t){void 0===t&&(t=!0);var u,n,r,i,s,a,l,o,D,c,h,p,f,g,d,F,A,C,E="",k=e.length;for(u=0;u<k;u++)switch((c=e[u]).type){case"space":continue;case"hr":E+=this.renderer.hr();continue;case"heading":E+=this.renderer.heading(this.parseInline(c.tokens),c.depth,ie(this.parseInline(c.tokens,this.textRenderer)),this.slugger);continue;case"code":E+=this.renderer.code(c.text,c.lang,c.escaped);continue;case"table":for(o="",l="",i=c.header.length,n=0;n<i;n++)l+=this.renderer.tablecell(this.parseInline(c.tokens.header[n]),{header:!0,align:c.align[n]});for(o+=this.renderer.tablerow(l),D="",i=c.cells.length,n=0;n<i;n++){for(l="",s=(a=c.tokens.cells[n]).length,r=0;r<s;r++)l+=this.renderer.tablecell(this.parseInline(a[r]),{header:!1,align:c.align[r]});D+=this.renderer.tablerow(l)}E+=this.renderer.table(o,D);continue;case"blockquote":D=this.parse(c.tokens),E+=this.renderer.blockquote(D);continue;case"list":for(h=c.ordered,p=c.start,f=c.loose,i=c.items.length,D="",n=0;n<i;n++)F=(d=c.items[n]).checked,A=d.task,g="",d.task&&(C=this.renderer.checkbox(F),f?d.tokens.length>0&&"text"===d.tokens[0].type?(d.tokens[0].text=C+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&"text"===d.tokens[0].tokens[0].type&&(d.tokens[0].tokens[0].text=C+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:C}):g+=C),g+=this.parse(d.tokens,f),D+=this.renderer.listitem(g,A,F);E+=this.renderer.list(D,h,p);continue;case"html":E+=this.renderer.html(c.text);continue;case"paragraph":E+=this.renderer.paragraph(this.parseInline(c.tokens));continue;case"text":for(D=c.tokens?this.parseInline(c.tokens):c.text;u+1<k&&"text"===e[u+1].type;)D+="\n"+((c=e[++u]).tokens?this.parseInline(c.tokens):c.text);E+=t?this.renderer.paragraph(D):D;continue;default:var m='Token with "'+c.type+'" type was not found.';if(this.options.silent)return void console.error(m);throw new Error(m)}return E},t.parseInline=function(e,t){t=t||this.renderer;var u,n,r="",i=e.length;for(u=0;u<i;u++)switch((n=e[u]).type){case"escape":r+=t.text(n.text);break;case"html":r+=t.html(n.text);break;case"link":r+=t.link(n.href,n.title,this.parseInline(n.tokens,t));break;case"image":r+=t.image(n.href,n.title,n.text);break;case"strong":r+=t.strong(this.parseInline(n.tokens,t));break;case"em":r+=t.em(this.parseInline(n.tokens,t));break;case"codespan":r+=t.codespan(n.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(n.tokens,t));break;case"text":r+=t.text(n.text);break;default:var s='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(s);throw new Error(s)}return r},e}(),ae=w,le=_,oe=k,De=n.getDefaults,ce=n.changeDefaults,he=n.defaults;function pe(e,t,u){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(u=t,t=null),t=ae({},pe.defaults,t||{}),le(t),u){var n,r=t.highlight;try{n=X.lex(e,t)}catch(e){return u(e)}var i=function(e){var i;if(!e)try{i=se.parse(n,t)}catch(t){e=t}return t.highlight=r,e?u(e):u(null,i)};if(!r||r.length<3)return i();if(delete t.highlight,!n.length)return i();var s=0;return pe.walkTokens(n,(function(e){"code"===e.type&&(s++,setTimeout((function(){r(e.text,e.lang,(function(t,u){if(t)return i(t);null!=u&&u!==e.text&&(e.text=u,e.escaped=!0),0==--s&&i()}))}),0))})),void(0===s&&i())}try{var a=X.lex(e,t);return t.walkTokens&&pe.walkTokens(a,t.walkTokens),se.parse(a,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+oe(e.message+"",!0)+"</pre>";throw e}}return pe.options=pe.setOptions=function(e){return ae(pe.defaults,e),ce(pe.defaults),pe},pe.getDefaults=De,pe.defaults=he,pe.use=function(e){var t=ae({},e);if(e.renderer&&function(){var u=pe.defaults.renderer||new te,n=function(t){var n=u[t];u[t]=function(){for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=e.renderer[t].apply(u,i);return!1===a&&(a=n.apply(u,i)),a}};for(var r in e.renderer)n(r);t.renderer=u}(),e.tokenizer&&function(){var u=pe.defaults.tokenizer||new Z,n=function(t){var n=u[t];u[t]=function(){for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=e.tokenizer[t].apply(u,i);return!1===a&&(a=n.apply(u,i)),a}};for(var r in e.tokenizer)n(r);t.tokenizer=u}(),e.walkTokens){var u=pe.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens(t),u&&u(t)}}pe.setOptions(t)},pe.walkTokens=function(e,t){for(var n,r=u(e);!(n=r()).done;){var i=n.value;switch(t(i),i.type){case"table":for(var s,a=u(i.tokens.header);!(s=a()).done;){var l=s.value;pe.walkTokens(l,t)}for(var o,D=u(i.tokens.cells);!(o=D()).done;)for(var c,h=u(o.value);!(c=h()).done;){var p=c.value;pe.walkTokens(p,t)}break;case"list":pe.walkTokens(i.items,t);break;default:i.tokens&&pe.walkTokens(i.tokens,t)}}},pe.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=ae({},pe.defaults,t||{}),le(t);try{var u=X.lexInline(e,t);return t.walkTokens&&pe.walkTokens(u,t.walkTokens),se.parseInline(u,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+oe(e.message+"",!0)+"</pre>";throw e}},pe.Parser=se,pe.parser=se.parse,pe.Renderer=te,pe.TextRenderer=ue,pe.Lexer=X,pe.lexer=X.lex,pe.Tokenizer=Z,pe.Slugger=ne,pe.parse=pe,pe}()})),u=e((function(e,t){e.exports=function(){var e="millisecond",t="second",u="minute",n="hour",r="day",i="week",s="month",a="quarter",l="year",o="date",D=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(e,t,u){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(u)+e},f={s:p,z:function(e){var t=-e.utcOffset(),u=Math.abs(t),n=Math.floor(u/60),r=u%60;return(t<=0?"+":"-")+p(n,2,"0")+":"+p(r,2,"0")},m:function e(t,u){if(t.date()<u.date())return-e(u,t);var n=12*(u.year()-t.year())+(u.month()-t.month()),r=t.clone().add(n,s),i=u-r<0,a=t.clone().add(n+(i?-1:1),s);return+(-(n+(u-r)/(i?r-a:a-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(D){return{M:s,y:l,w:i,d:r,D:o,h:n,m:u,s:t,ms:e,Q:a}[D]||String(D||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",d={};d[g]=h;var F=function(e){return e instanceof k},A=function(e,t,u){var n;if(!e)return g;if("string"==typeof e)d[e]&&(n=e),t&&(d[e]=t,n=e);else{var r=e.name;d[r]=e,n=r}return!u&&n&&(g=n),n||!u&&g},C=function(e,t){if(F(e))return e.clone();var u="object"==typeof t?t:{};return u.date=e,u.args=arguments,new k(u)},E=f;E.l=A,E.i=F,E.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function h(e){this.$L=A(e.locale,null,!0),this.parse(e)}var p=h.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,u=e.utc;if(null===t)return new Date(NaN);if(E.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(D);if(n){var r=n[2]-1||0,i=(n[7]||"0").substring(0,3);return u?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!("Invalid Date"===this.$d.toString())},p.isSame=function(e,t){var u=C(e);return this.startOf(t)<=u&&u<=this.endOf(t)},p.isAfter=function(e,t){return C(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<C(e)},p.$g=function(e,t,u){return E.u(e)?this[t]:this.set(u,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,a){var D=this,c=!!E.u(a)||a,h=E.p(e),p=function(e,t){var u=E.w(D.$u?Date.UTC(D.$y,t,e):new Date(D.$y,t,e),D);return c?u:u.endOf(r)},f=function(e,t){return E.w(D.toDate()[e].apply(D.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),D)},g=this.$W,d=this.$M,F=this.$D,A="set"+(this.$u?"UTC":"");switch(h){case l:return c?p(1,0):p(31,11);case s:return c?p(1,d):p(0,d+1);case i:var C=this.$locale().weekStart||0,k=(g<C?g+7:g)-C;return p(c?F-k:F+(6-k),d);case r:case o:return f(A+"Hours",0);case n:return f(A+"Minutes",1);case u:return f(A+"Seconds",2);case t:return f(A+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(i,a){var D,c=E.p(i),h="set"+(this.$u?"UTC":""),p=(D={},D[r]=h+"Date",D[o]=h+"Date",D[s]=h+"Month",D[l]=h+"FullYear",D[n]=h+"Hours",D[u]=h+"Minutes",D[t]=h+"Seconds",D[e]=h+"Milliseconds",D)[c],f=c===r?this.$D+(a-this.$W):a;if(c===s||c===l){var g=this.clone().set(o,1);g.$d[p](f),g.init(),this.$d=g.set(o,Math.min(this.$D,g.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[E.p(e)]()},p.add=function(e,a){var o,D=this;e=Number(e);var c=E.p(a),h=function(t){var u=C(D);return E.w(u.date(u.date()+Math.round(t*e)),D)};if(c===s)return this.set(s,this.$M+e);if(c===l)return this.set(l,this.$y+e);if(c===r)return h(1);if(c===i)return h(7);var p=(o={},o[u]=6e4,o[n]=36e5,o[t]=1e3,o)[c]||1,f=this.$d.getTime()+e*p;return E.w(f,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var u=e||"YYYY-MM-DDTHH:mm:ssZ",n=E.z(this),r=this.$locale(),i=this.$H,s=this.$m,a=this.$M,l=r.weekdays,o=r.months,D=function(e,n,r,i){return e&&(e[n]||e(t,u))||r[n].substr(0,i)},h=function(e){return E.s(i%12||12,e,"0")},p=r.meridiem||function(e,t,u){var n=e<12?"AM":"PM";return u?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:E.s(a+1,2,"0"),MMM:D(r.monthsShort,a,o,3),MMMM:D(o,a),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:D(r.weekdaysMin,this.$W,l,2),ddd:D(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:E.s(i,2,"0"),h:h(1),hh:h(2),a:p(i,s,!0),A:p(i,s,!1),m:String(s),mm:E.s(s,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:n};return u.replace(c,(function(e,t){return t||f[e]||n.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(e,o,D){var c,h=E.p(o),p=C(e),f=6e4*(p.utcOffset()-this.utcOffset()),g=this-p,d=E.m(this,p);return d=(c={},c[l]=d/12,c[s]=d,c[a]=d/3,c[i]=(g-f)/6048e5,c[r]=(g-f)/864e5,c[n]=g/36e5,c[u]=g/6e4,c[t]=g/1e3,c)[h]||g,D?d:E.a(d)},p.daysInMonth=function(){return this.endOf(s).$D},p.$locale=function(){return d[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var u=this.clone(),n=A(e,t,!0);return n&&(u.$L=n),u},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},h}(),m=k.prototype;return C.prototype=m,[["$ms",e],["$s",t],["$m",u],["$H",n],["$W",r],["$M",s],["$y",l],["$D",o]].forEach((function(e){m[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,k,C),e.$i=!0),C},C.locale=A,C.isDayjs=F,C.unix=function(e){return C(1e3*e)},C.en=d[g],C.Ls=d,C.p={},C}()}));new Vue({el:"#app",data:{config:null,anIssue:null,anIssueBody:"",anIssueComments:null},methods:{markdownToHtml:function(e){return t(e)},formatTime:function(e){return u(e).format("YYYY-MM-DD HH:mm:ss")},getAnIssue:function(){var e=this;fetch("https://api.github.com/repos/twinnybloggers/template/issues/2",this.config).then((function(e){return e.json()})).then((function(u){e.anIssue=u,e.anIssueBody=t(e.anIssue.body),console.log(e.anIssue)})).catch((function(e){return console.log("error",e)}))},getAnIssueComments:function(){var e=this;fetch("https://api.github.com/repos/twinnybloggers/template/issues/1/comments",this.config).then((function(e){return e.json()})).then((function(t){e.anIssueComments=t,console.log(e.anIssueComments)})).catch((function(e){return console.log("error",e)}))}},created:function(){var e=new Headers;e.append("Accept","application/vnd.github.v3+json"),this.config={method:"GET",headers:e,redirect:"follow"},this.getAnIssue(),this.getAnIssueComments()}})}();
