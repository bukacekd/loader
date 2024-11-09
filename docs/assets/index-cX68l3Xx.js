var se=l=>{throw TypeError(l)};var he=(l,s)=>()=>(s||l((s={exports:{}}).exports,s),s.exports);var J=(l,s,d)=>s.has(l)||se("Cannot "+d);var m=(l,s,d)=>(J(l,s,"read from private field"),d?d.call(l):s.get(l)),L=(l,s,d)=>s.has(l)?se("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(l):s.set(l,d),j=(l,s,d,f)=>(J(l,s,"write to private field"),f?f.call(l,d):s.set(l,d),d),A=(l,s,d)=>(J(l,s,"access private method"),d);var be=he((xe,Z)=>{(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))f(a);new MutationObserver(a=>{for(const p of a)if(p.type==="childList")for(const E of p.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&f(E)}).observe(document,{childList:!0,subtree:!0});function d(a){const p={};return a.integrity&&(p.integrity=a.integrity),a.referrerPolicy&&(p.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?p.credentials="include":a.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function f(a){if(a.ep)return;a.ep=!0;const p=d(a);fetch(a.href,p)}})();var me=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},o=function(l){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,f={},a={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof p?new p(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++d}),t.__id},clone:function t(e,r){var n,i;switch(r=r||{},a.util.type(e)){case"Object":if(i=a.util.objId(e),r[i])return r[i];for(var c in n={},r[i]=n,e)e.hasOwnProperty(c)&&(n[c]=t(e[c],r));return n;case"Array":return i=a.util.objId(e),r[i]?r[i]:(n=[],r[i]=n,e.forEach(function(u,g){n[g]=t(u,r)}),n);default:return e}},getLanguage:function(t){for(;t;){var e=s.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(s,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==t)return e[r]}return null}},isActive:function(t,e,r){for(var n="no-"+e;t;){var i=t.classList;if(i.contains(e))return!0;if(i.contains(n))return!1;t=t.parentElement}return!!r}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(t,e){var r=a.util.clone(a.languages[t]);for(var n in e)r[n]=e[n];return r},insertBefore:function(t,e,r,n){var i=(n=n||a.languages)[t],c={};for(var u in i)if(i.hasOwnProperty(u)){if(u==e)for(var g in r)r.hasOwnProperty(g)&&(c[g]=r[g]);r.hasOwnProperty(u)||(c[u]=i[u])}var y=n[t];return n[t]=c,a.languages.DFS(a.languages,function(h,M){M===y&&h!=t&&(this[h]=c)}),c},DFS:function t(e,r,n,i){i=i||{};var c=a.util.objId;for(var u in e)if(e.hasOwnProperty(u)){r.call(e,u,e[u],n||u);var g=e[u],y=a.util.type(g);y!=="Object"||i[c(g)]?y!=="Array"||i[c(g)]||(i[c(g)]=!0,t(g,r,u,i)):(i[c(g)]=!0,t(g,r,null,i))}}},plugins:{},highlightAll:function(t,e){a.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,r){var n={callback:r,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),a.hooks.run("before-all-elements-highlight",n);for(var i,c=0;i=n.elements[c++];)a.highlightElement(i,e===!0,n.callback)},highlightElement:function(t,e,r){var n=a.util.getLanguage(t),i=a.languages[n];a.util.setLanguage(t,n);var c=t.parentElement;c&&c.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(c,n);var u={element:t,language:n,grammar:i,code:t.textContent};function g(h){u.highlightedCode=h,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),r&&r.call(u.element)}if(a.hooks.run("before-sanity-check",u),(c=u.element.parentElement)&&c.nodeName.toLowerCase()==="pre"&&!c.hasAttribute("tabindex")&&c.setAttribute("tabindex","0"),!u.code)return a.hooks.run("complete",u),void(r&&r.call(u.element));if(a.hooks.run("before-highlight",u),u.grammar)if(e&&l.Worker){var y=new Worker(a.filename);y.onmessage=function(h){g(h.data)},y.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else g(a.highlight(u.code,u.grammar,u.language));else g(a.util.encode(u.code))},highlight:function(t,e,r){var n={code:t,grammar:e,language:r};if(a.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=a.tokenize(n.code,n.grammar),a.hooks.run("after-tokenize",n),p.stringify(a.util.encode(n.tokens),n.language)},tokenize:function(t,e){var r=e.rest;if(r){for(var n in r)e[n]=r[n];delete e.rest}var i=new ce;return q(i,i.head,t),V(t,i,e,i.head,0),function(c){for(var u=[],g=c.head.next;g!==c.tail;)u.push(g.value),g=g.next;return u}(i)},hooks:{all:{},add:function(t,e){var r=a.hooks.all;r[t]=r[t]||[],r[t].push(e)},run:function(t,e){var r=a.hooks.all[t];if(r&&r.length)for(var n,i=0;n=r[i++];)n(e)}},Token:p};function p(t,e,r,n){this.type=t,this.content=e,this.alias=r,this.length=0|(n||"").length}function E(t,e,r,n){t.lastIndex=e;var i=t.exec(r);if(i&&n&&i[1]){var c=i[1].length;i.index+=c,i[0]=i[0].slice(c)}return i}function V(t,e,r,n,i,c){for(var u in r)if(r.hasOwnProperty(u)&&r[u]){var g=r[u];g=Array.isArray(g)?g:[g];for(var y=0;y<g.length;++y){if(c&&c.cause==u+","+y)return;var h=g[y],M=h.inside,te=!!h.lookbehind,ae=!!h.greedy,ge=h.alias;if(ae&&!h.pattern.global){var pe=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,pe+"g")}for(var ne=h.pattern||h,v=n.next,k=i;v!==e.tail&&!(c&&k>=c.reach);k+=v.value.length,v=v.next){var z=v.value;if(e.length>t.length)return;if(!(z instanceof p)){var w,N=1;if(ae){if(!(w=E(ne,k,t,te))||w.index>=t.length)break;var R=w.index,fe=w.index+w[0].length,S=k;for(S+=v.value.length;R>=S;)S+=(v=v.next).value.length;if(k=S-=v.value.length,v.value instanceof p)continue;for(var P=v;P!==e.tail&&(S<fe||typeof P.value=="string");P=P.next)N++,S+=P.value.length;N--,z=t.slice(k,S),w.index-=k}else if(!(w=E(ne,0,z,te)))continue;R=w.index;var D=w[0],I=z.slice(0,R),re=z.slice(R+D.length),W=k+z.length;c&&W>c.reach&&(c.reach=W);var H=v.prev;if(I&&(H=q(e,H,I),k+=I.length),de(e,H,N),v=q(e,H,new p(u,M?a.tokenize(D,M):D,ge,D)),re&&q(e,v,re),N>1){var G={cause:u+","+y,reach:W};V(t,e,r,v.prev,k,G),c&&G.reach>c.reach&&(c.reach=G.reach)}}}}}}function ce(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function q(t,e,r){var n=e.next,i={value:r,prev:e,next:n};return e.next=i,n.prev=i,t.length++,i}function de(t,e,r){for(var n=e.next,i=0;i<r&&n!==t.tail;i++)n=n.next;e.next=n,n.prev=e,t.length-=i}if(l.Prism=a,p.stringify=function t(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(y){n+=t(y,r)}),n}var i={type:e.type,content:t(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},c=e.alias;c&&(Array.isArray(c)?Array.prototype.push.apply(i.classes,c):i.classes.push(c)),a.hooks.run("wrap",i);var u="";for(var g in i.attributes)u+=" "+g+'="'+(i.attributes[g]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+u+">"+i.content+"</"+i.tag+">"},!l.document)return l.addEventListener&&(a.disableWorkerMessageHandler||l.addEventListener("message",function(t){var e=JSON.parse(t.data),r=e.language,n=e.code,i=e.immediateClose;l.postMessage(a.highlight(n,a.languages[r],r)),i&&l.close()},!1)),a;var T=a.util.currentScript();function B(){a.manual||a.highlightAll()}if(T&&(a.filename=T.src,T.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var ee=document.readyState;ee==="loading"||ee==="interactive"&&T&&T.defer?document.addEventListener("DOMContentLoaded",B):window.requestAnimationFrame?window.requestAnimationFrame(B):window.setTimeout(B,16)}return a}(me);typeof Z<"u"&&Z.exports&&(Z.exports=o),typeof global<"u"&&(global.Prism=o);o.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},o.languages.markup.tag.inside["attr-value"].inside.entity=o.languages.markup.entity,o.languages.markup.doctype.inside["internal-subset"].inside=o.languages.markup,o.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(o.languages.markup.tag,"addInlined",{value:function(l,s){var d={};d["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:o.languages[s]},d.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:d}};f["language-"+s]={pattern:/[\s\S]+/,inside:o.languages[s]};var a={};a[l]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:f},o.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(o.languages.markup.tag,"addAttribute",{value:function(l,s){o.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+l+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:o.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),o.languages.html=o.languages.markup,o.languages.mathml=o.languages.markup,o.languages.svg=o.languages.markup,o.languages.xml=o.languages.extend("markup",{}),o.languages.ssml=o.languages.xml,o.languages.atom=o.languages.xml,o.languages.rss=o.languages.xml;(function(l){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+s.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css;var d=l.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))})(o);o.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};o.languages.javascript=o.languages.extend("clike",{"class-name":[o.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),o.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,o.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:o.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:o.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:o.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:o.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:o.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),o.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:o.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),o.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),o.languages.markup&&(o.languages.markup.tag.addInlined("script","javascript"),o.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),o.languages.js=o.languages.javascript;var F,$,_,O,b,le,Y,K,ue,X;const C=class C{constructor(s,d={}){L(this,b);L(this,F);L(this,$);L(this,_);if(j(this,$,s instanceof HTMLElement?s:document.querySelector(s)),!(m(this,$)instanceof HTMLElement))throw TypeError("First argument must be HTMLElement");j(this,F,A(this,b,le).call(this,d)),m(this,F).attachShadow({mode:"open"}).innerHTML=`<style>:host {--js4y-loader-duration: 2s;--js4y-loader-size: 40px;--js4y-loader-width: 10%;align-items: center;display: inline-flex !important;flex-direction: column;gap: 1em;inset: 0;justify-content: center;opacity: 0;position: ${m(this,$)===document.body?"fixed":"absolute"};stroke: currentColor;transition: opacity .2s;z-index: 1;}:host([data-loader="open"]) {opacity: 1;}svg {animation: rotate calc(var(--js4y-loader-duration) * .75) linear infinite;height: var(--js4y-loader-size);width: var(--js4y-loader-size);}circle {animation: stroke var(--js4y-loader-duration) ease-in-out infinite;cx: 50%;cy: 50%;fill: none;r: calc((var(--js4y-loader-size) - var(--js4y-loader-width)) / 2 - 1px);stroke: inherit;stroke-linecap: round;stroke-width: var(--js4y-loader-width);transform-origin: center;}@keyframes rotate {to {transform: rotate(360deg);}}@keyframes stroke {0% {stroke-dasharray: 0 var(--offset);stroke-dashoffset: 0;}50% {stroke-dasharray: calc(var(--offset) * .7) var(--offset);stroke-dashoffset: calc(var(--offset) * -.25);}100% {stroke-dasharray: calc(var(--offset) * .7) var(--offset);stroke-dashoffset: calc(var(--offset) * -1);}}</style><svg><circle></circle></svg><div><slot></slot></div>`,m(C,O)&&this.open(),A(this,b,ue).call(this)}static create(s,d){j(this,O,!1);const f=new C(s,d);return j(this,O,!0),f}async close(s){A(this,b,K).call(this),typeof s=="number"&&s>0&&await new Promise(d=>j(this,_,setTimeout(d,s))),await A(this,b,X).call(this),m(this,F).dataset.loader="close",await A(this,b,Y).call(this),m(this,F).remove()}async open(s){A(this,b,K).call(this),typeof s=="number"&&s>0&&await new Promise(d=>{j(this,_,setTimeout(d,s))}),m(this,$).contains(m(this,F))||m(this,$).prepend(m(this,F)),await A(this,b,X).call(this),m(this,F).dataset.loader="open",await A(this,b,Y).call(this)}};F=new WeakMap,$=new WeakMap,_=new WeakMap,O=new WeakMap,b=new WeakSet,le=function({className:s,content:d,id:f}){const a=document.createElement("div");return s&&(a.className=s),d&&(a.innerHTML=d),f&&(a.id=f),a},Y=function(){return Promise.all(m(this,F).getAnimations().map(s=>s.finished))},K=function(){clearTimeout(m(this,_))},ue=function(){const s=m(this,F).shadowRoot.querySelector("circle");new ResizeObserver(()=>{m(this,F).parentElement&&s.style.setProperty("--offset",Math.floor(s.getTotalLength())+"px")}).observe(s)},X=async function(){await new Promise(requestAnimationFrame),await new Promise(requestAnimationFrame)},L(C,O,!0);let U=C;const ye=U.create("#example",{content:"please wait..."}),x=document.querySelector("form"),[ie,oe]=document.querySelectorAll("code"),Q=()=>{const l=document.querySelector("[data-loader]"),s=[`	/* default: 2s */
	--js4y-loader-duration: ${x.elements["rotation-duration"].value}s;`,`	/* default: 40px */
	--js4y-loader-size: ${x.elements["icon-size"].value}px;`,`	/* default: 10% */
	--js4y-loader-width: ${x.elements["stroke-width"].value}%;`,`
	/* default: currentColor */
	color: ${x.elements["font-color"].value};`,`	/* default: column */
	flex-direction: ${x.elements.position.value};`,`	/* default: inherit */
	font-size: ${x.elements["font-size"].value}px;`,`	/* default: static */
	position: ${x.elements.placement.value};`,`	/* default: currentColor */
	stroke: ${x.elements["icon-color"].value};`];l.style.cssText=s.join(""),oe.textContent=(x.elements.placement.value==="absolute"?`#example {
	position:relative;
}

`:"")+`[data-loader] {
`+s.join(`
`)+`
}`,ie.textContent=`const loader = new Loader("#example", {
    content: "please wait..."
});`,Prism.highlightElement(ie),Prism.highlightElement(oe)},ve=()=>{setTimeout(Q)};x.addEventListener("change",Q);x.addEventListener("reset",ve);ye.open().then(()=>Q())});export default be();