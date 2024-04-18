function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/c4Diagram-e2511a7a.DWvrTMej.js","assets/chunks/svgDrawCommon-99ae2c94.DpDd1mEF.js","assets/chunks/framework.Bxf40uRC.js","assets/chunks/flowDiagram-e44a2353.0UK-ZQGI.js","assets/chunks/flowDb-147da10a.mGFAJTvJ.js","assets/chunks/graph-af3d5df6.DM_UwuPt.js","assets/chunks/layout-6685625a.wvI9RUOQ.js","assets/chunks/styles-c171666c.YFSCPWkO.js","assets/chunks/index-c8395ba2.Z_x9TRI0.js","assets/chunks/clone-d2e37f8c.C2u734hq.js","assets/chunks/edges-1e1ebc73.wOmCmjxI.js","assets/chunks/createText-f6615236.CWK-rxT6.js","assets/chunks/line-65d70945.C8HLauZH.js","assets/chunks/array-b7dcf730.BKyUJesY.js","assets/chunks/path-39bad7e2.CbwjOpE9.js","assets/chunks/channel-d3ac35ac.CblT1wXn.js","assets/chunks/flowDiagram-v2-a8396bb5.atoc7RGH.js","assets/chunks/erDiagram-582bd92f.9BH8cIzz.js","assets/chunks/gitGraphDiagram-d5d647e9.B87zkgQd.js","assets/chunks/ganttDiagram-05e48839.D4Dnpgcl.js","assets/chunks/linear-d94cf28d.pT3pExge.js","assets/chunks/init-cc95ec8e.Gi6I4Gst.js","assets/chunks/infoDiagram-00deb277.CnBgWcYs.js","assets/chunks/pieDiagram-35c7eafc.DoQ1X9jk.js","assets/chunks/arc-5aa99581.CkcRuUuK.js","assets/chunks/ordinal-475e0c0c.BOIgHZC4.js","assets/chunks/quadrantDiagram-9c93c009.6AmnIzbw.js","assets/chunks/xychartDiagram-7b46ecfd.DCkVIz8B.js","assets/chunks/requirementDiagram-e882bd67.B-J4R5Sk.js","assets/chunks/sequenceDiagram-1767341c.CQC74NEZ.js","assets/chunks/classDiagram-3275847a.BUkp7mfv.js","assets/chunks/styles-d48462a7.BNZ82x4a.js","assets/chunks/classDiagram-v2-2ed0a7d3.BZ0HQkbw.js","assets/chunks/stateDiagram-d2e6f24f.B7wLdwZy.js","assets/chunks/styles-15409a09.Vc9r5Trm.js","assets/chunks/stateDiagram-v2-21d485ae.CWN_3uEc.js","assets/chunks/journeyDiagram-a5efd2e1.C9hglZTA.js","assets/chunks/flowchart-elk-definition-1a3aaf5d.DpmMH6VF.js","assets/chunks/timeline-definition-f8c5dfc0.CueGH-md.js","assets/chunks/mindmap-definition-74120bdd.NRhNhlou.js","assets/chunks/sankeyDiagram-f5d051b7.DVj_HTBw.js","assets/chunks/Tableau10-31042135.CvOaoHrI.js","assets/chunks/blockDiagram-8beecd1f.YAnh69pI.js","assets/chunks/index.lzjcqklX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as We,r as L,u as pt,t as nu,o as Ae,a as Yn,b as v,c as C,d as B,e as M,f as Fe,g as ee,n as W,h as X,w as $,i as I,T as Zt,j as de,k as Yv,l as Kv,m as Bn,p as Ri,q as w,s as S,v as p,x as Xe,y as Qe,z as Jr,A as oc,B as oe,C as Fn,D as Gf,E as Wf,F as Xv,G as st,H as he,I as Te,J as Mn,K as $a,L as j,M as Uf,N as Je,O as Kn,P as Qt,Q as Ee,R as Qv,S as et,U as Zv,V as Jv,W as De,X as Yf,Y as Pa,Z as ct,$ as nt,a0 as jt,a1 as ru,a2 as ze,a3 as tt,a4 as iu,a5 as ot,a6 as Kf,a7 as Xf,a8 as _t,a9 as Qf,aa as Zf,ab as Ro,ac as ou,ad as Jf,ae as em,af as ey,ag as Gr,ah as dt,ai as No,aj as Xt,ak as mn,al as ty,am as pn,an as Id,ao as ny,ap as Co,aq as Ot,ar as Ci,as as Rt,at as ry,au as tm,av as iy,aw as nm,ax as oy,ay as sy,az as Bd,aA as ay,aB as yl,aC as ly,aD as cy,aE as uy,aF as Od,aG as as}from"./framework.Bxf40uRC.js";function dy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Array.from(typeof e=="string"?[e]:e);r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");var i=r.reduce(function(a,l){var c=l.match(/\n([\t ]+|(?!\s).)/g);return c?a.concat(c.map(function(u){var h,d;return(d=(h=u.match(/[\t ]/g))===null||h===void 0?void 0:h.length)!==null&&d!==void 0?d:0})):a},[]);if(i.length){var o=new RegExp(`
[	 ]{`+Math.min.apply(Math,i)+"}","g");r=r.map(function(a){return a.replace(o,`
`)})}r[0]=r[0].replace(/^\r?\n/,"");var s=r[0];return t.forEach(function(a,l){var c=s.match(/(?:^|\n)( *)$/),u=c?c[1]:"",h=a;typeof a=="string"&&a.includes(`
`)&&(h=String(a).split(`
`).map(function(d,f){return f===0?d:""+u+d}).join(`
`)),s+=h+r[l+1]}),s}var hy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function py(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rm={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(hy,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",s="second",a="minute",l="hour",c="day",u="week",h="month",d="quarter",f="year",g="date",m="Invalid Date",y=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,k={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(N){var G=["th","st","nd","rd"],q=N%100;return"["+N+(G[(q-20)%10]||G[q]||G[0])+"]"}},_=function(N,G,q){var z=String(N);return!z||z.length>=G?N:""+Array(G+1-z.length).join(q)+N},x={s:_,z:function(N){var G=-N.utcOffset(),q=Math.abs(G),z=Math.floor(q/60),V=q%60;return(G<=0?"+":"-")+_(z,2,"0")+":"+_(V,2,"0")},m:function N(G,q){if(G.date()<q.date())return-N(q,G);var z=12*(q.year()-G.year())+(q.month()-G.month()),V=G.clone().add(z,h),Q=q-V<0,Z=G.clone().add(z+(Q?-1:1),h);return+(-(z+(q-V)/(Q?V-Z:Z-V))||0)},a:function(N){return N<0?Math.ceil(N)||0:Math.floor(N)},p:function(N){return{M:h,y:f,w:u,d:c,D:g,h:l,m:a,s,ms:o,Q:d}[N]||String(N||"").toLowerCase().replace(/s$/,"")},u:function(N){return N===void 0}},T="en",A={};A[T]=k;var E="$isDayjsObject",O=function(N){return N instanceof K||!(!N||!N[E])},J=function N(G,q,z){var V;if(!G)return T;if(typeof G=="string"){var Q=G.toLowerCase();A[Q]&&(V=Q),q&&(A[Q]=q,V=Q);var Z=G.split("-");if(!V&&Z.length>1)return N(Z[0])}else{var te=G.name;A[te]=G,V=te}return!z&&V&&(T=V),V||!z&&T},R=function(N,G){if(O(N))return N.clone();var q=typeof G=="object"?G:{};return q.date=N,q.args=arguments,new K(q)},P=x;P.l=J,P.i=O,P.w=function(N,G){return R(N,{locale:G.$L,utc:G.$u,x:G.$x,$offset:G.$offset})};var K=function(){function N(q){this.$L=J(q.locale,null,!0),this.parse(q),this.$x=this.$x||q.x||{},this[E]=!0}var G=N.prototype;return G.parse=function(q){this.$d=function(z){var V=z.date,Q=z.utc;if(V===null)return new Date(NaN);if(P.u(V))return new Date;if(V instanceof Date)return new Date(V);if(typeof V=="string"&&!/Z$/i.test(V)){var Z=V.match(y);if(Z){var te=Z[2]-1||0,ue=(Z[7]||"0").substring(0,3);return Q?new Date(Date.UTC(Z[1],te,Z[3]||1,Z[4]||0,Z[5]||0,Z[6]||0,ue)):new Date(Z[1],te,Z[3]||1,Z[4]||0,Z[5]||0,Z[6]||0,ue)}}return new Date(V)}(q),this.init()},G.init=function(){var q=this.$d;this.$y=q.getFullYear(),this.$M=q.getMonth(),this.$D=q.getDate(),this.$W=q.getDay(),this.$H=q.getHours(),this.$m=q.getMinutes(),this.$s=q.getSeconds(),this.$ms=q.getMilliseconds()},G.$utils=function(){return P},G.isValid=function(){return this.$d.toString()!==m},G.isSame=function(q,z){var V=R(q);return this.startOf(z)<=V&&V<=this.endOf(z)},G.isAfter=function(q,z){return R(q)<this.startOf(z)},G.isBefore=function(q,z){return this.endOf(z)<R(q)},G.$g=function(q,z,V){return P.u(q)?this[z]:this.set(V,q)},G.unix=function(){return Math.floor(this.valueOf()/1e3)},G.valueOf=function(){return this.$d.getTime()},G.startOf=function(q,z){var V=this,Q=!!P.u(z)||z,Z=P.p(q),te=function(Ue,$e){var Ie=P.w(V.$u?Date.UTC(V.$y,$e,Ue):new Date(V.$y,$e,Ue),V);return Q?Ie:Ie.endOf(c)},ue=function(Ue,$e){return P.w(V.toDate()[Ue].apply(V.toDate("s"),(Q?[0,0,0,0]:[23,59,59,999]).slice($e)),V)},Y=this.$W,ce=this.$M,ae=this.$D,re="set"+(this.$u?"UTC":"");switch(Z){case f:return Q?te(1,0):te(31,11);case h:return Q?te(1,ce):te(0,ce+1);case u:var fe=this.$locale().weekStart||0,xe=(Y<fe?Y+7:Y)-fe;return te(Q?ae-xe:ae+(6-xe),ce);case c:case g:return ue(re+"Hours",0);case l:return ue(re+"Minutes",1);case a:return ue(re+"Seconds",2);case s:return ue(re+"Milliseconds",3);default:return this.clone()}},G.endOf=function(q){return this.startOf(q,!1)},G.$set=function(q,z){var V,Q=P.p(q),Z="set"+(this.$u?"UTC":""),te=(V={},V[c]=Z+"Date",V[g]=Z+"Date",V[h]=Z+"Month",V[f]=Z+"FullYear",V[l]=Z+"Hours",V[a]=Z+"Minutes",V[s]=Z+"Seconds",V[o]=Z+"Milliseconds",V)[Q],ue=Q===c?this.$D+(z-this.$W):z;if(Q===h||Q===f){var Y=this.clone().set(g,1);Y.$d[te](ue),Y.init(),this.$d=Y.set(g,Math.min(this.$D,Y.daysInMonth())).$d}else te&&this.$d[te](ue);return this.init(),this},G.set=function(q,z){return this.clone().$set(q,z)},G.get=function(q){return this[P.p(q)]()},G.add=function(q,z){var V,Q=this;q=Number(q);var Z=P.p(z),te=function(ce){var ae=R(Q);return P.w(ae.date(ae.date()+Math.round(ce*q)),Q)};if(Z===h)return this.set(h,this.$M+q);if(Z===f)return this.set(f,this.$y+q);if(Z===c)return te(1);if(Z===u)return te(7);var ue=(V={},V[a]=r,V[l]=i,V[s]=n,V)[Z]||1,Y=this.$d.getTime()+q*ue;return P.w(Y,this)},G.subtract=function(q,z){return this.add(-1*q,z)},G.format=function(q){var z=this,V=this.$locale();if(!this.isValid())return V.invalidDate||m;var Q=q||"YYYY-MM-DDTHH:mm:ssZ",Z=P.z(this),te=this.$H,ue=this.$m,Y=this.$M,ce=V.weekdays,ae=V.months,re=V.meridiem,fe=function($e,Ie,qe,rt){return $e&&($e[Ie]||$e(z,Q))||qe[Ie].slice(0,rt)},xe=function($e){return P.s(te%12||12,$e,"0")},Ue=re||function($e,Ie,qe){var rt=$e<12?"AM":"PM";return qe?rt.toLowerCase():rt};return Q.replace(b,function($e,Ie){return Ie||function(qe){switch(qe){case"YY":return String(z.$y).slice(-2);case"YYYY":return P.s(z.$y,4,"0");case"M":return Y+1;case"MM":return P.s(Y+1,2,"0");case"MMM":return fe(V.monthsShort,Y,ae,3);case"MMMM":return fe(ae,Y);case"D":return z.$D;case"DD":return P.s(z.$D,2,"0");case"d":return String(z.$W);case"dd":return fe(V.weekdaysMin,z.$W,ce,2);case"ddd":return fe(V.weekdaysShort,z.$W,ce,3);case"dddd":return ce[z.$W];case"H":return String(te);case"HH":return P.s(te,2,"0");case"h":return xe(1);case"hh":return xe(2);case"a":return Ue(te,ue,!0);case"A":return Ue(te,ue,!1);case"m":return String(ue);case"mm":return P.s(ue,2,"0");case"s":return String(z.$s);case"ss":return P.s(z.$s,2,"0");case"SSS":return P.s(z.$ms,3,"0");case"Z":return Z}return null}($e)||Z.replace(":","")})},G.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},G.diff=function(q,z,V){var Q,Z=this,te=P.p(z),ue=R(q),Y=(ue.utcOffset()-this.utcOffset())*r,ce=this-ue,ae=function(){return P.m(Z,ue)};switch(te){case f:Q=ae()/12;break;case h:Q=ae();break;case d:Q=ae()/3;break;case u:Q=(ce-Y)/6048e5;break;case c:Q=(ce-Y)/864e5;break;case l:Q=ce/i;break;case a:Q=ce/r;break;case s:Q=ce/n;break;default:Q=ce}return V?Q:P.a(Q)},G.daysInMonth=function(){return this.endOf(h).$D},G.$locale=function(){return A[this.$L]},G.locale=function(q,z){if(!q)return this.$L;var V=this.clone(),Q=J(q,z,!0);return Q&&(V.$L=Q),V},G.clone=function(){return P.w(this.$d,this)},G.toDate=function(){return new Date(this.valueOf())},G.toJSON=function(){return this.isValid()?this.toISOString():null},G.toISOString=function(){return this.$d.toISOString()},G.toString=function(){return this.$d.toUTCString()},N}(),H=K.prototype;return R.prototype=H,[["$ms",o],["$s",s],["$m",a],["$H",l],["$W",c],["$M",h],["$y",f],["$D",g]].forEach(function(N){H[N[1]]=function(G){return this.$g(G,N[0],N[1])}}),R.extend=function(N,G){return N.$i||(N(G,K,R),N.$i=!0),R},R.locale=J,R.isDayjs=O,R.unix=function(N){return R(1e3*N)},R.en=A[T],R.Ls=A,R.p={},R})})(rm);var fy=rm.exports;const my=py(fy),tr={trace:0,debug:1,info:2,warn:3,error:4,fatal:5},ye={trace:(...e)=>{},debug:(...e)=>{},info:(...e)=>{},warn:(...e)=>{},error:(...e)=>{},fatal:(...e)=>{}},su=function(e="fatal"){let t=tr.fatal;typeof e=="string"?(e=e.toLowerCase(),e in tr&&(t=tr[e])):typeof e=="number"&&(t=e),ye.trace=()=>{},ye.debug=()=>{},ye.info=()=>{},ye.warn=()=>{},ye.error=()=>{},ye.fatal=()=>{},t<=tr.fatal&&(ye.fatal=console.error?console.error.bind(console,ln("FATAL"),"color: orange"):console.log.bind(console,"\x1B[35m",ln("FATAL"))),t<=tr.error&&(ye.error=console.error?console.error.bind(console,ln("ERROR"),"color: orange"):console.log.bind(console,"\x1B[31m",ln("ERROR"))),t<=tr.warn&&(ye.warn=console.warn?console.warn.bind(console,ln("WARN"),"color: orange"):console.log.bind(console,"\x1B[33m",ln("WARN"))),t<=tr.info&&(ye.info=console.info?console.info.bind(console,ln("INFO"),"color: lightblue"):console.log.bind(console,"\x1B[34m",ln("INFO"))),t<=tr.debug&&(ye.debug=console.debug?console.debug.bind(console,ln("DEBUG"),"color: lightgreen"):console.log.bind(console,"\x1B[32m",ln("DEBUG"))),t<=tr.trace&&(ye.trace=console.debug?console.debug.bind(console,ln("TRACE"),"color: lightgreen"):console.log.bind(console,"\x1B[32m",ln("TRACE")))},ln=e=>`%c${my().format("ss.SSS")} : ${e} : `;var im={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=e.BLANK_URL=void 0;var t=/^([^\w]*)(javascript|data|vbscript)/im,n=/&#(\w+)(^\w|;)?/g,r=/&(newline|tab);/gi,i=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,o=/^.+(:|&colon;)/gim,s=[".","/"];e.BLANK_URL="about:blank";function a(u){return s.indexOf(u[0])>-1}function l(u){var h=u.replace(i,"");return h.replace(n,function(d,f){return String.fromCharCode(f)})}function c(u){if(!u)return e.BLANK_URL;var h=l(u).replace(r,"").replace(i,"").trim();if(!h)return e.BLANK_URL;if(a(h))return h;var d=h.match(o);if(!d)return h;var f=d[0];return t.test(f)?e.BLANK_URL:h}e.sanitizeUrl=c})(im);var gy={value:()=>{}};function om(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Ps(n)}function Ps(e){this._=e}function vy(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Ps.prototype=om.prototype={constructor:Ps,on:function(e,t){var n=this._,r=vy(e+"",n),i,o=-1,s=r.length;if(arguments.length<2){for(;++o<s;)if((i=(e=r[o]).type)&&(i=yy(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<s;)if(i=(e=r[o]).type)n[i]=Fd(n[i],e.name,t);else if(t==null)for(i in n)n[i]=Fd(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Ps(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,o;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,o=r.length;i<o;++i)r[i].value.apply(t,n)}};function yy(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function Fd(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=gy,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var sc="http://www.w3.org/1999/xhtml";const Rd={svg:"http://www.w3.org/2000/svg",xhtml:sc,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function La(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Rd.hasOwnProperty(t)?{space:Rd[t],local:e}:e}function by(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===sc&&t.documentElement.namespaceURI===sc?t.createElement(e):t.createElementNS(n,e)}}function _y(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function sm(e){var t=La(e);return(t.local?_y:by)(t)}function Cy(){}function au(e){return e==null?Cy:function(){return this.querySelector(e)}}function ky(e){typeof e!="function"&&(e=au(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],s=o.length,a=r[i]=new Array(s),l,c,u=0;u<s;++u)(l=o[u])&&(c=e.call(l,l.__data__,u,o))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new Jt(r,this._parents)}function wy(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Sy(){return[]}function am(e){return e==null?Sy:function(){return this.querySelectorAll(e)}}function xy(e){return function(){return wy(e.apply(this,arguments))}}function Ty(e){typeof e=="function"?e=xy(e):e=am(e);for(var t=this._groups,n=t.length,r=[],i=[],o=0;o<n;++o)for(var s=t[o],a=s.length,l,c=0;c<a;++c)(l=s[c])&&(r.push(e.call(l,l.__data__,c,s)),i.push(l));return new Jt(r,i)}function lm(e){return function(){return this.matches(e)}}function cm(e){return function(t){return t.matches(e)}}var Ey=Array.prototype.find;function Ay(e){return function(){return Ey.call(this.children,e)}}function $y(){return this.firstElementChild}function Py(e){return this.select(e==null?$y:Ay(typeof e=="function"?e:cm(e)))}var Ly=Array.prototype.filter;function My(){return Array.from(this.children)}function Iy(e){return function(){return Ly.call(this.children,e)}}function By(e){return this.selectAll(e==null?My:Iy(typeof e=="function"?e:cm(e)))}function Oy(e){typeof e!="function"&&(e=lm(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],s=o.length,a=r[i]=[],l,c=0;c<s;++c)(l=o[c])&&e.call(l,l.__data__,c,o)&&a.push(l);return new Jt(r,this._parents)}function um(e){return new Array(e.length)}function Fy(){return new Jt(this._enter||this._groups.map(um),this._parents)}function Us(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Us.prototype={constructor:Us,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Ry(e){return function(){return e}}function Ny(e,t,n,r,i,o){for(var s=0,a,l=t.length,c=o.length;s<c;++s)(a=t[s])?(a.__data__=o[s],r[s]=a):n[s]=new Us(e,o[s]);for(;s<l;++s)(a=t[s])&&(i[s]=a)}function Dy(e,t,n,r,i,o,s){var a,l,c=new Map,u=t.length,h=o.length,d=new Array(u),f;for(a=0;a<u;++a)(l=t[a])&&(d[a]=f=s.call(l,l.__data__,a,t)+"",c.has(f)?i[a]=l:c.set(f,l));for(a=0;a<h;++a)f=s.call(e,o[a],a,o)+"",(l=c.get(f))?(r[a]=l,l.__data__=o[a],c.delete(f)):n[a]=new Us(e,o[a]);for(a=0;a<u;++a)(l=t[a])&&c.get(d[a])===l&&(i[a]=l)}function zy(e){return e.__data__}function Vy(e,t){if(!arguments.length)return Array.from(this,zy);var n=t?Dy:Ny,r=this._parents,i=this._groups;typeof e!="function"&&(e=Ry(e));for(var o=i.length,s=new Array(o),a=new Array(o),l=new Array(o),c=0;c<o;++c){var u=r[c],h=i[c],d=h.length,f=Hy(e.call(u,u&&u.__data__,c,r)),g=f.length,m=a[c]=new Array(g),y=s[c]=new Array(g),b=l[c]=new Array(d);n(u,h,m,y,b,f,t);for(var k=0,_=0,x,T;k<g;++k)if(x=m[k]){for(k>=_&&(_=k+1);!(T=y[_])&&++_<g;);x._next=T||null}}return s=new Jt(s,r),s._enter=a,s._exit=l,s}function Hy(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function qy(){return new Jt(this._exit||this._groups.map(um),this._parents)}function jy(e,t,n){var r=this.enter(),i=this,o=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?o.remove():n(o),r&&i?r.merge(i).order():i}function Gy(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,o=r.length,s=Math.min(i,o),a=new Array(i),l=0;l<s;++l)for(var c=n[l],u=r[l],h=c.length,d=a[l]=new Array(h),f,g=0;g<h;++g)(f=c[g]||u[g])&&(d[g]=f);for(;l<i;++l)a[l]=n[l];return new Jt(a,this._parents)}function Wy(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,o=r[i],s;--i>=0;)(s=r[i])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function Uy(e){e||(e=Yy);function t(h,d){return h&&d?e(h.__data__,d.__data__):!h-!d}for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){for(var s=n[o],a=s.length,l=i[o]=new Array(a),c,u=0;u<a;++u)(c=s[u])&&(l[u]=c);l.sort(t)}return new Jt(i,this._parents).order()}function Yy(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Ky(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Xy(){return Array.from(this)}function Qy(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,o=r.length;i<o;++i){var s=r[i];if(s)return s}return null}function Zy(){let e=0;for(const t of this)++e;return e}function Jy(){return!this.node()}function eb(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],o=0,s=i.length,a;o<s;++o)(a=i[o])&&e.call(a,a.__data__,o,i);return this}function tb(e){return function(){this.removeAttribute(e)}}function nb(e){return function(){this.removeAttributeNS(e.space,e.local)}}function rb(e,t){return function(){this.setAttribute(e,t)}}function ib(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function ob(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function sb(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function ab(e,t){var n=La(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?nb:tb:typeof t=="function"?n.local?sb:ob:n.local?ib:rb)(n,t))}function dm(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function lb(e){return function(){this.style.removeProperty(e)}}function cb(e,t,n){return function(){this.style.setProperty(e,t,n)}}function ub(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function db(e,t,n){return arguments.length>1?this.each((t==null?lb:typeof t=="function"?ub:cb)(e,t,n??"")):ki(this.node(),e)}function ki(e,t){return e.style.getPropertyValue(t)||dm(e).getComputedStyle(e,null).getPropertyValue(t)}function hb(e){return function(){delete this[e]}}function pb(e,t){return function(){this[e]=t}}function fb(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function mb(e,t){return arguments.length>1?this.each((t==null?hb:typeof t=="function"?fb:pb)(e,t)):this.node()[e]}function hm(e){return e.trim().split(/^|\s+/)}function lu(e){return e.classList||new pm(e)}function pm(e){this._node=e,this._names=hm(e.getAttribute("class")||"")}pm.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function fm(e,t){for(var n=lu(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function mm(e,t){for(var n=lu(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function gb(e){return function(){fm(this,e)}}function vb(e){return function(){mm(this,e)}}function yb(e,t){return function(){(t.apply(this,arguments)?fm:mm)(this,e)}}function bb(e,t){var n=hm(e+"");if(arguments.length<2){for(var r=lu(this.node()),i=-1,o=n.length;++i<o;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?yb:t?gb:vb)(n,t))}function _b(){this.textContent=""}function Cb(e){return function(){this.textContent=e}}function kb(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function wb(e){return arguments.length?this.each(e==null?_b:(typeof e=="function"?kb:Cb)(e)):this.node().textContent}function Sb(){this.innerHTML=""}function xb(e){return function(){this.innerHTML=e}}function Tb(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Eb(e){return arguments.length?this.each(e==null?Sb:(typeof e=="function"?Tb:xb)(e)):this.node().innerHTML}function Ab(){this.nextSibling&&this.parentNode.appendChild(this)}function $b(){return this.each(Ab)}function Pb(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Lb(){return this.each(Pb)}function Mb(e){var t=typeof e=="function"?e:sm(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Ib(){return null}function Bb(e,t){var n=typeof e=="function"?e:sm(e),r=t==null?Ib:typeof t=="function"?t:au(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Ob(){var e=this.parentNode;e&&e.removeChild(this)}function Fb(){return this.each(Ob)}function Rb(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Nb(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Db(e){return this.select(e?Nb:Rb)}function zb(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Vb(e){return function(t){e.call(this,t,this.__data__)}}function Hb(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function qb(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,o;n<i;++n)o=t[n],(!e.type||o.type===e.type)&&o.name===e.name?this.removeEventListener(o.type,o.listener,o.options):t[++r]=o;++r?t.length=r:delete this.__on}}}function jb(e,t,n){return function(){var r=this.__on,i,o=Vb(t);if(r){for(var s=0,a=r.length;s<a;++s)if((i=r[s]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=n),i.value=t;return}}this.addEventListener(e.type,o,n),i={type:e.type,name:e.name,value:t,listener:o,options:n},r?r.push(i):this.__on=[i]}}function Gb(e,t,n){var r=Hb(e+""),i,o=r.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(i=0,u=a[l];i<o;++i)if((s=r[i]).type===u.type&&s.name===u.name)return u.value}return}for(a=t?jb:qb,i=0;i<o;++i)this.each(a(r[i],t,n));return this}function gm(e,t,n){var r=dm(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function Wb(e,t){return function(){return gm(this,e,t)}}function Ub(e,t){return function(){return gm(this,e,t.apply(this,arguments))}}function Yb(e,t){return this.each((typeof t=="function"?Ub:Wb)(e,t))}function*Kb(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,o=r.length,s;i<o;++i)(s=r[i])&&(yield s)}var vm=[null];function Jt(e,t){this._groups=e,this._parents=t}function Do(){return new Jt([[document.documentElement]],vm)}function Xb(){return this}Jt.prototype=Do.prototype={constructor:Jt,select:ky,selectAll:Ty,selectChild:Py,selectChildren:By,filter:Oy,data:Vy,enter:Fy,exit:qy,join:jy,merge:Gy,selection:Xb,order:Wy,sort:Uy,call:Ky,nodes:Xy,node:Qy,size:Zy,empty:Jy,each:eb,attr:ab,style:db,property:mb,classed:bb,text:wb,html:Eb,raise:$b,lower:Lb,append:Mb,insert:Bb,remove:Fb,clone:Db,datum:zb,on:Gb,dispatch:Yb,[Symbol.iterator]:Kb};function cn(e){return typeof e=="string"?new Jt([[document.querySelector(e)]],[document.documentElement]):new Jt([[e]],vm)}function cu(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function ym(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function zo(){}var ko=.7,Ys=1/ko,_i="\\s*([+-]?\\d+)\\s*",wo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Vn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Qb=/^#([0-9a-f]{3,8})$/,Zb=new RegExp(`^rgb\\(${_i},${_i},${_i}\\)$`),Jb=new RegExp(`^rgb\\(${Vn},${Vn},${Vn}\\)$`),e2=new RegExp(`^rgba\\(${_i},${_i},${_i},${wo}\\)$`),t2=new RegExp(`^rgba\\(${Vn},${Vn},${Vn},${wo}\\)$`),n2=new RegExp(`^hsl\\(${wo},${Vn},${Vn}\\)$`),r2=new RegExp(`^hsla\\(${wo},${Vn},${Vn},${wo}\\)$`),Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};cu(zo,So,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Dd,formatHex:Dd,formatHex8:i2,formatHsl:o2,formatRgb:zd,toString:zd});function Dd(){return this.rgb().formatHex()}function i2(){return this.rgb().formatHex8()}function o2(){return bm(this).formatHsl()}function zd(){return this.rgb().formatRgb()}function So(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Qb.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Vd(t):n===3?new Nt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?ls(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?ls(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Zb.exec(e))?new Nt(t[1],t[2],t[3],1):(t=Jb.exec(e))?new Nt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=e2.exec(e))?ls(t[1],t[2],t[3],t[4]):(t=t2.exec(e))?ls(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=n2.exec(e))?jd(t[1],t[2]/100,t[3]/100,1):(t=r2.exec(e))?jd(t[1],t[2]/100,t[3]/100,t[4]):Nd.hasOwnProperty(e)?Vd(Nd[e]):e==="transparent"?new Nt(NaN,NaN,NaN,0):null}function Vd(e){return new Nt(e>>16&255,e>>8&255,e&255,1)}function ls(e,t,n,r){return r<=0&&(e=t=n=NaN),new Nt(e,t,n,r)}function s2(e){return e instanceof zo||(e=So(e)),e?(e=e.rgb(),new Nt(e.r,e.g,e.b,e.opacity)):new Nt}function ac(e,t,n,r){return arguments.length===1?s2(e):new Nt(e,t,n,r??1)}function Nt(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}cu(Nt,ac,ym(zo,{brighter(e){return e=e==null?Ys:Math.pow(Ys,e),new Nt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?ko:Math.pow(ko,e),new Nt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Nt(Kr(this.r),Kr(this.g),Kr(this.b),Ks(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Hd,formatHex:Hd,formatHex8:a2,formatRgb:qd,toString:qd}));function Hd(){return`#${Ur(this.r)}${Ur(this.g)}${Ur(this.b)}`}function a2(){return`#${Ur(this.r)}${Ur(this.g)}${Ur(this.b)}${Ur((isNaN(this.opacity)?1:this.opacity)*255)}`}function qd(){const e=Ks(this.opacity);return`${e===1?"rgb(":"rgba("}${Kr(this.r)}, ${Kr(this.g)}, ${Kr(this.b)}${e===1?")":`, ${e})`}`}function Ks(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Kr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Ur(e){return e=Kr(e),(e<16?"0":"")+e.toString(16)}function jd(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Pn(e,t,n,r)}function bm(e){if(e instanceof Pn)return new Pn(e.h,e.s,e.l,e.opacity);if(e instanceof zo||(e=So(e)),!e)return new Pn;if(e instanceof Pn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),o=Math.max(t,n,r),s=NaN,a=o-i,l=(o+i)/2;return a?(t===o?s=(n-r)/a+(n<r)*6:n===o?s=(r-t)/a+2:s=(t-n)/a+4,a/=l<.5?o+i:2-o-i,s*=60):a=l>0&&l<1?0:s,new Pn(s,a,l,e.opacity)}function l2(e,t,n,r){return arguments.length===1?bm(e):new Pn(e,t,n,r??1)}function Pn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}cu(Pn,l2,ym(zo,{brighter(e){return e=e==null?Ys:Math.pow(Ys,e),new Pn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?ko:Math.pow(ko,e),new Pn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Nt(bl(e>=240?e-240:e+120,i,r),bl(e,i,r),bl(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new Pn(Gd(this.h),cs(this.s),cs(this.l),Ks(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Ks(this.opacity);return`${e===1?"hsl(":"hsla("}${Gd(this.h)}, ${cs(this.s)*100}%, ${cs(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Gd(e){return e=(e||0)%360,e<0?e+360:e}function cs(e){return Math.max(0,Math.min(1,e||0))}function bl(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const uu=e=>()=>e;function _m(e,t){return function(n){return e+n*t}}function c2(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function vK(e,t){var n=t-e;return n?_m(e,n>180||n<-180?n-360*Math.round(n/360):n):uu(isNaN(e)?t:e)}function u2(e){return(e=+e)==1?Cm:function(t,n){return n-t?c2(t,n,e):uu(isNaN(t)?n:t)}}function Cm(e,t){var n=t-e;return n?_m(e,n):uu(isNaN(e)?t:e)}const Wd=function e(t){var n=u2(t);function r(i,o){var s=n((i=ac(i)).r,(o=ac(o)).r),a=n(i.g,o.g),l=n(i.b,o.b),c=Cm(i.opacity,o.opacity);return function(u){return i.r=s(u),i.g=a(u),i.b=l(u),i.opacity=c(u),i+""}}return r.gamma=e,r}(1);function Er(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var lc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,_l=new RegExp(lc.source,"g");function d2(e){return function(){return e}}function h2(e){return function(t){return e(t)+""}}function p2(e,t){var n=lc.lastIndex=_l.lastIndex=0,r,i,o,s=-1,a=[],l=[];for(e=e+"",t=t+"";(r=lc.exec(e))&&(i=_l.exec(t));)(o=i.index)>n&&(o=t.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(r=r[0])===(i=i[0])?a[s]?a[s]+=i:a[++s]=i:(a[++s]=null,l.push({i:s,x:Er(r,i)})),n=_l.lastIndex;return n<t.length&&(o=t.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?h2(l[0].x):d2(t):(t=l.length,function(c){for(var u=0,h;u<t;++u)a[(h=l[u]).i]=h.x(c);return a.join("")})}var Ud=180/Math.PI,cc={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function km(e,t,n,r,i,o){var s,a,l;return(s=Math.sqrt(e*e+t*t))&&(e/=s,t/=s),(l=e*n+t*r)&&(n-=e*l,r-=t*l),(a=Math.sqrt(n*n+r*r))&&(n/=a,r/=a,l/=a),e*r<t*n&&(e=-e,t=-t,l=-l,s=-s),{translateX:i,translateY:o,rotate:Math.atan2(t,e)*Ud,skewX:Math.atan(l)*Ud,scaleX:s,scaleY:a}}var us;function f2(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?cc:km(t.a,t.b,t.c,t.d,t.e,t.f)}function m2(e){return e==null||(us||(us=document.createElementNS("http://www.w3.org/2000/svg","g")),us.setAttribute("transform",e),!(e=us.transform.baseVal.consolidate()))?cc:(e=e.matrix,km(e.a,e.b,e.c,e.d,e.e,e.f))}function wm(e,t,n,r){function i(c){return c.length?c.pop()+" ":""}function o(c,u,h,d,f,g){if(c!==h||u!==d){var m=f.push("translate(",null,t,null,n);g.push({i:m-4,x:Er(c,h)},{i:m-2,x:Er(u,d)})}else(h||d)&&f.push("translate("+h+t+d+n)}function s(c,u,h,d){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),d.push({i:h.push(i(h)+"rotate(",null,r)-2,x:Er(c,u)})):u&&h.push(i(h)+"rotate("+u+r)}function a(c,u,h,d){c!==u?d.push({i:h.push(i(h)+"skewX(",null,r)-2,x:Er(c,u)}):u&&h.push(i(h)+"skewX("+u+r)}function l(c,u,h,d,f,g){if(c!==h||u!==d){var m=f.push(i(f)+"scale(",null,",",null,")");g.push({i:m-4,x:Er(c,h)},{i:m-2,x:Er(u,d)})}else(h!==1||d!==1)&&f.push(i(f)+"scale("+h+","+d+")")}return function(c,u){var h=[],d=[];return c=e(c),u=e(u),o(c.translateX,c.translateY,u.translateX,u.translateY,h,d),s(c.rotate,u.rotate,h,d),a(c.skewX,u.skewX,h,d),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,h,d),c=u=null,function(f){for(var g=-1,m=d.length,y;++g<m;)h[(y=d[g]).i]=y.x(f);return h.join("")}}}var g2=wm(f2,"px, ","px)","deg)"),v2=wm(m2,", ",")",")"),wi=0,oo=0,Zi=0,Sm=1e3,Xs,so,Qs=0,ei=0,Ma=0,xo=typeof performance=="object"&&performance.now?performance:Date,xm=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function du(){return ei||(xm(y2),ei=xo.now()+Ma)}function y2(){ei=0}function Zs(){this._call=this._time=this._next=null}Zs.prototype=Tm.prototype={constructor:Zs,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?du():+n)+(t==null?0:+t),!this._next&&so!==this&&(so?so._next=this:Xs=this,so=this),this._call=e,this._time=n,uc()},stop:function(){this._call&&(this._call=null,this._time=1/0,uc())}};function Tm(e,t,n){var r=new Zs;return r.restart(e,t,n),r}function b2(){du(),++wi;for(var e=Xs,t;e;)(t=ei-e._time)>=0&&e._call.call(void 0,t),e=e._next;--wi}function Yd(){ei=(Qs=xo.now())+Ma,wi=oo=0;try{b2()}finally{wi=0,C2(),ei=0}}function _2(){var e=xo.now(),t=e-Qs;t>Sm&&(Ma-=t,Qs=e)}function C2(){for(var e,t=Xs,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Xs=n);so=e,uc(r)}function uc(e){if(!wi){oo&&(oo=clearTimeout(oo));var t=e-ei;t>24?(e<1/0&&(oo=setTimeout(Yd,e-xo.now()-Ma)),Zi&&(Zi=clearInterval(Zi))):(Zi||(Qs=xo.now(),Zi=setInterval(_2,Sm)),wi=1,xm(Yd))}}function Kd(e,t,n){var r=new Zs;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var k2=om("start","end","cancel","interrupt"),w2=[],Em=0,Xd=1,dc=2,Ls=3,Qd=4,hc=5,Ms=6;function Ia(e,t,n,r,i,o){var s=e.__transition;if(!s)e.__transition={};else if(n in s)return;S2(e,n,{name:t,index:r,group:i,on:k2,tween:w2,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Em})}function hu(e,t){var n=Rn(e,t);if(n.state>Em)throw new Error("too late; already scheduled");return n}function Xn(e,t){var n=Rn(e,t);if(n.state>Ls)throw new Error("too late; already running");return n}function Rn(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function S2(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=Tm(o,0,n.time);function o(c){n.state=Xd,n.timer.restart(s,n.delay,n.time),n.delay<=c&&s(c-n.delay)}function s(c){var u,h,d,f;if(n.state!==Xd)return l();for(u in r)if(f=r[u],f.name===n.name){if(f.state===Ls)return Kd(s);f.state===Qd?(f.state=Ms,f.timer.stop(),f.on.call("interrupt",e,e.__data__,f.index,f.group),delete r[u]):+u<t&&(f.state=Ms,f.timer.stop(),f.on.call("cancel",e,e.__data__,f.index,f.group),delete r[u])}if(Kd(function(){n.state===Ls&&(n.state=Qd,n.timer.restart(a,n.delay,n.time),a(c))}),n.state=dc,n.on.call("start",e,e.__data__,n.index,n.group),n.state===dc){for(n.state=Ls,i=new Array(d=n.tween.length),u=0,h=-1;u<d;++u)(f=n.tween[u].value.call(e,e.__data__,n.index,n.group))&&(i[++h]=f);i.length=h+1}}function a(c){for(var u=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=hc,1),h=-1,d=i.length;++h<d;)i[h].call(e,u);n.state===hc&&(n.on.call("end",e,e.__data__,n.index,n.group),l())}function l(){n.state=Ms,n.timer.stop(),delete r[t];for(var c in r)return;delete e.__transition}}function x2(e,t){var n=e.__transition,r,i,o=!0,s;if(n){t=t==null?null:t+"";for(s in n){if((r=n[s]).name!==t){o=!1;continue}i=r.state>dc&&r.state<hc,r.state=Ms,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[s]}o&&delete e.__transition}}function T2(e){return this.each(function(){x2(this,e)})}function E2(e,t){var n,r;return function(){var i=Xn(this,e),o=i.tween;if(o!==n){r=n=o;for(var s=0,a=r.length;s<a;++s)if(r[s].name===t){r=r.slice(),r.splice(s,1);break}}i.tween=r}}function A2(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var o=Xn(this,e),s=o.tween;if(s!==r){i=(r=s).slice();for(var a={name:t,value:n},l=0,c=i.length;l<c;++l)if(i[l].name===t){i[l]=a;break}l===c&&i.push(a)}o.tween=i}}function $2(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=Rn(this.node(),n).tween,i=0,o=r.length,s;i<o;++i)if((s=r[i]).name===e)return s.value;return null}return this.each((t==null?E2:A2)(n,e,t))}function pu(e,t,n){var r=e._id;return e.each(function(){var i=Xn(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return Rn(i,r).value[t]}}function Am(e,t){var n;return(typeof t=="number"?Er:t instanceof So?Wd:(n=So(t))?(t=n,Wd):p2)(e,t)}function P2(e){return function(){this.removeAttribute(e)}}function L2(e){return function(){this.removeAttributeNS(e.space,e.local)}}function M2(e,t,n){var r,i=n+"",o;return function(){var s=this.getAttribute(e);return s===i?null:s===r?o:o=t(r=s,n)}}function I2(e,t,n){var r,i=n+"",o;return function(){var s=this.getAttributeNS(e.space,e.local);return s===i?null:s===r?o:o=t(r=s,n)}}function B2(e,t,n){var r,i,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(e):(s=this.getAttribute(e),l=a+"",s===l?null:s===r&&l===i?o:(i=l,o=t(r=s,a)))}}function O2(e,t,n){var r,i,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local),l=a+"",s===l?null:s===r&&l===i?o:(i=l,o=t(r=s,a)))}}function F2(e,t){var n=La(e),r=n==="transform"?v2:Am;return this.attrTween(e,typeof t=="function"?(n.local?O2:B2)(n,r,pu(this,"attr."+e,t)):t==null?(n.local?L2:P2)(n):(n.local?I2:M2)(n,r,t))}function R2(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function N2(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function D2(e,t){var n,r;function i(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&N2(e,o)),n}return i._value=t,i}function z2(e,t){var n,r;function i(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&R2(e,o)),n}return i._value=t,i}function V2(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=La(e);return this.tween(n,(r.local?D2:z2)(r,t))}function H2(e,t){return function(){hu(this,e).delay=+t.apply(this,arguments)}}function q2(e,t){return t=+t,function(){hu(this,e).delay=t}}function j2(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?H2:q2)(t,e)):Rn(this.node(),t).delay}function G2(e,t){return function(){Xn(this,e).duration=+t.apply(this,arguments)}}function W2(e,t){return t=+t,function(){Xn(this,e).duration=t}}function U2(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?G2:W2)(t,e)):Rn(this.node(),t).duration}function Y2(e,t){if(typeof t!="function")throw new Error;return function(){Xn(this,e).ease=t}}function K2(e){var t=this._id;return arguments.length?this.each(Y2(t,e)):Rn(this.node(),t).ease}function X2(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Xn(this,e).ease=n}}function Q2(e){if(typeof e!="function")throw new Error;return this.each(X2(this._id,e))}function Z2(e){typeof e!="function"&&(e=lm(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],s=o.length,a=r[i]=[],l,c=0;c<s;++c)(l=o[c])&&e.call(l,l.__data__,c,o)&&a.push(l);return new hr(r,this._parents,this._name,this._id)}function J2(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,o=Math.min(r,i),s=new Array(r),a=0;a<o;++a)for(var l=t[a],c=n[a],u=l.length,h=s[a]=new Array(u),d,f=0;f<u;++f)(d=l[f]||c[f])&&(h[f]=d);for(;a<r;++a)s[a]=t[a];return new hr(s,this._parents,this._name,this._id)}function e_(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function t_(e,t,n){var r,i,o=e_(t)?hu:Xn;return function(){var s=o(this,e),a=s.on;a!==r&&(i=(r=a).copy()).on(t,n),s.on=i}}function n_(e,t){var n=this._id;return arguments.length<2?Rn(this.node(),n).on.on(e):this.each(t_(n,e,t))}function r_(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function i_(){return this.on("end.remove",r_(this._id))}function o_(e){var t=this._name,n=this._id;typeof e!="function"&&(e=au(e));for(var r=this._groups,i=r.length,o=new Array(i),s=0;s<i;++s)for(var a=r[s],l=a.length,c=o[s]=new Array(l),u,h,d=0;d<l;++d)(u=a[d])&&(h=e.call(u,u.__data__,d,a))&&("__data__"in u&&(h.__data__=u.__data__),c[d]=h,Ia(c[d],t,n,d,c,Rn(u,n)));return new hr(o,this._parents,t,n)}function s_(e){var t=this._name,n=this._id;typeof e!="function"&&(e=am(e));for(var r=this._groups,i=r.length,o=[],s=[],a=0;a<i;++a)for(var l=r[a],c=l.length,u,h=0;h<c;++h)if(u=l[h]){for(var d=e.call(u,u.__data__,h,l),f,g=Rn(u,n),m=0,y=d.length;m<y;++m)(f=d[m])&&Ia(f,t,n,m,d,g);o.push(d),s.push(u)}return new hr(o,s,t,n)}var a_=Do.prototype.constructor;function l_(){return new a_(this._groups,this._parents)}function c_(e,t){var n,r,i;return function(){var o=ki(this,e),s=(this.style.removeProperty(e),ki(this,e));return o===s?null:o===n&&s===r?i:i=t(n=o,r=s)}}function $m(e){return function(){this.style.removeProperty(e)}}function u_(e,t,n){var r,i=n+"",o;return function(){var s=ki(this,e);return s===i?null:s===r?o:o=t(r=s,n)}}function d_(e,t,n){var r,i,o;return function(){var s=ki(this,e),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(e),ki(this,e))),s===l?null:s===r&&l===i?o:(i=l,o=t(r=s,a))}}function h_(e,t){var n,r,i,o="style."+t,s="end."+o,a;return function(){var l=Xn(this,e),c=l.on,u=l.value[o]==null?a||(a=$m(t)):void 0;(c!==n||i!==u)&&(r=(n=c).copy()).on(s,i=u),l.on=r}}function p_(e,t,n){var r=(e+="")=="transform"?g2:Am;return t==null?this.styleTween(e,c_(e,r)).on("end.style."+e,$m(e)):typeof t=="function"?this.styleTween(e,d_(e,r,pu(this,"style."+e,t))).each(h_(this._id,e)):this.styleTween(e,u_(e,r,t),n).on("end.style."+e,null)}function f_(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function m_(e,t,n){var r,i;function o(){var s=t.apply(this,arguments);return s!==i&&(r=(i=s)&&f_(e,s,n)),r}return o._value=t,o}function g_(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,m_(e,t,n??""))}function v_(e){return function(){this.textContent=e}}function y_(e){return function(){var t=e(this);this.textContent=t??""}}function b_(e){return this.tween("text",typeof e=="function"?y_(pu(this,"text",e)):v_(e==null?"":e+""))}function __(e){return function(t){this.textContent=e.call(this,t)}}function C_(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&__(i)),t}return r._value=e,r}function k_(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,C_(e))}function w_(){for(var e=this._name,t=this._id,n=Pm(),r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],a=s.length,l,c=0;c<a;++c)if(l=s[c]){var u=Rn(l,t);Ia(l,e,n,c,s,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new hr(r,this._parents,e,n)}function S_(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--i===0&&o()}};n.each(function(){var c=Xn(this,r),u=c.on;u!==e&&(t=(e=u).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(l)),c.on=t}),i===0&&o()})}var x_=0;function hr(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function Pm(){return++x_}var nr=Do.prototype;hr.prototype={constructor:hr,select:o_,selectAll:s_,selectChild:nr.selectChild,selectChildren:nr.selectChildren,filter:Z2,merge:J2,selection:l_,transition:w_,call:nr.call,nodes:nr.nodes,node:nr.node,size:nr.size,empty:nr.empty,each:nr.each,on:n_,attr:F2,attrTween:V2,style:p_,styleTween:g_,text:b_,textTween:k_,remove:i_,tween:$2,delay:j2,duration:U2,ease:K2,easeVarying:Q2,end:S_,[Symbol.iterator]:nr[Symbol.iterator]};function T_(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var E_={time:null,delay:0,duration:250,ease:T_};function A_(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function $_(e){var t,n;e instanceof hr?(t=e._id,e=e._name):(t=Pm(),(n=E_).time=du(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],a=s.length,l,c=0;c<a;++c)(l=s[c])&&Ia(l,e,t,c,s,n||A_(l,t));return new hr(r,this._parents,e,t)}Do.prototype.interrupt=T2;Do.prototype.transition=$_;const yK=Math.abs,bK=Math.atan2,_K=Math.cos,CK=Math.max,kK=Math.min,wK=Math.sin,SK=Math.sqrt,Zd=1e-12,fu=Math.PI,Jd=fu/2,xK=2*fu;function TK(e){return e>1?0:e<-1?fu:Math.acos(e)}function EK(e){return e>=1?Jd:e<=-1?-Jd:Math.asin(e)}function Lm(e){this._context=e}Lm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function P_(e){return new Lm(e)}class Mm{constructor(t,n){this._context=t,this._x=n}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,n){switch(t=+t,n=+n,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,n,t,n):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+n)/2,t,this._y0,t,n);break}}this._x0=t,this._y0=n}}function L_(e){return new Mm(e,!0)}function M_(e){return new Mm(e,!1)}function Lr(){}function Js(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function Ba(e){this._context=e}Ba.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Js(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Js(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function I_(e){return new Ba(e)}function Im(e){this._context=e}Im.prototype={areaStart:Lr,areaEnd:Lr,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:Js(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function B_(e){return new Im(e)}function Bm(e){this._context=e}Bm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:Js(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function O_(e){return new Bm(e)}function Om(e,t){this._basis=new Ba(e),this._beta=t}Om.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var e=this._x,t=this._y,n=e.length-1;if(n>0)for(var r=e[0],i=t[0],o=e[n]-r,s=t[n]-i,a=-1,l;++a<=n;)l=a/n,this._basis.point(this._beta*e[a]+(1-this._beta)*(r+l*o),this._beta*t[a]+(1-this._beta)*(i+l*s));this._x=this._y=null,this._basis.lineEnd()},point:function(e,t){this._x.push(+e),this._y.push(+t)}};const F_=function e(t){function n(r){return t===1?new Ba(r):new Om(r,t)}return n.beta=function(r){return e(+r)},n}(.85);function ea(e,t,n){e._context.bezierCurveTo(e._x1+e._k*(e._x2-e._x0),e._y1+e._k*(e._y2-e._y0),e._x2+e._k*(e._x1-t),e._y2+e._k*(e._y1-n),e._x2,e._y2)}function mu(e,t){this._context=e,this._k=(1-t)/6}mu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:ea(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2,this._x1=e,this._y1=t;break;case 2:this._point=3;default:ea(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const R_=function e(t){function n(r){return new mu(r,t)}return n.tension=function(r){return e(+r)},n}(0);function gu(e,t){this._context=e,this._k=(1-t)/6}gu.prototype={areaStart:Lr,areaEnd:Lr,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:ea(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const N_=function e(t){function n(r){return new gu(r,t)}return n.tension=function(r){return e(+r)},n}(0);function vu(e,t){this._context=e,this._k=(1-t)/6}vu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:ea(this,e,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const D_=function e(t){function n(r){return new vu(r,t)}return n.tension=function(r){return e(+r)},n}(0);function yu(e,t,n){var r=e._x1,i=e._y1,o=e._x2,s=e._y2;if(e._l01_a>Zd){var a=2*e._l01_2a+3*e._l01_a*e._l12_a+e._l12_2a,l=3*e._l01_a*(e._l01_a+e._l12_a);r=(r*a-e._x0*e._l12_2a+e._x2*e._l01_2a)/l,i=(i*a-e._y0*e._l12_2a+e._y2*e._l01_2a)/l}if(e._l23_a>Zd){var c=2*e._l23_2a+3*e._l23_a*e._l12_a+e._l12_2a,u=3*e._l23_a*(e._l23_a+e._l12_a);o=(o*c+e._x1*e._l23_2a-t*e._l12_2a)/u,s=(s*c+e._y1*e._l23_2a-n*e._l12_2a)/u}e._context.bezierCurveTo(r,i,o,s,e._x2,e._y2)}function Fm(e,t){this._context=e,this._alpha=t}Fm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,r=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3;default:yu(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const z_=function e(t){function n(r){return t?new Fm(r,t):new mu(r,0)}return n.alpha=function(r){return e(+r)},n}(.5);function Rm(e,t){this._context=e,this._alpha=t}Rm.prototype={areaStart:Lr,areaEnd:Lr,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,r=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=e,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t);break;case 2:this._point=3,this._x5=e,this._y5=t;break;default:yu(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const V_=function e(t){function n(r){return t?new Rm(r,t):new gu(r,0)}return n.alpha=function(r){return e(+r)},n}(.5);function Nm(e,t){this._context=e,this._alpha=t}Nm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,r=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:yu(this,e,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}};const H_=function e(t){function n(r){return t?new Nm(r,t):new vu(r,0)}return n.alpha=function(r){return e(+r)},n}(.5);function Dm(e){this._context=e}Dm.prototype={areaStart:Lr,areaEnd:Lr,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function q_(e){return new Dm(e)}function eh(e){return e<0?-1:1}function th(e,t,n){var r=e._x1-e._x0,i=t-e._x1,o=(e._y1-e._y0)/(r||i<0&&-0),s=(n-e._y1)/(i||r<0&&-0),a=(o*i+s*r)/(r+i);return(eh(o)+eh(s))*Math.min(Math.abs(o),Math.abs(s),.5*Math.abs(a))||0}function nh(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function Cl(e,t,n){var r=e._x0,i=e._y0,o=e._x1,s=e._y1,a=(o-r)/3;e._context.bezierCurveTo(r+a,i+a*t,o-a,s-a*n,o,s)}function ta(e){this._context=e}ta.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Cl(this,this._t0,nh(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Cl(this,nh(this,n=th(this,e,t)),n);break;default:Cl(this,this._t0,n=th(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};function zm(e){this._context=new Vm(e)}(zm.prototype=Object.create(ta.prototype)).point=function(e,t){ta.prototype.point.call(this,t,e)};function Vm(e){this._context=e}Vm.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,i,o){this._context.bezierCurveTo(t,e,r,n,o,i)}};function j_(e){return new ta(e)}function G_(e){return new zm(e)}function Hm(e){this._context=e}Hm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var r=rh(e),i=rh(t),o=0,s=1;s<n;++o,++s)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],e[s],t[s]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function rh(e){var t,n=e.length-1,r,i=new Array(n),o=new Array(n),s=new Array(n);for(i[0]=0,o[0]=2,s[0]=e[0]+2*e[1],t=1;t<n-1;++t)i[t]=1,o[t]=4,s[t]=4*e[t]+2*e[t+1];for(i[n-1]=2,o[n-1]=7,s[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)r=i[t]/o[t-1],o[t]-=r,s[t]-=r*s[t-1];for(i[n-1]=s[n-1]/o[n-1],t=n-2;t>=0;--t)i[t]=(s[t]-i[t+1])/o[t];for(o[n-1]=(e[n]+i[n-1])/2,t=0;t<n-1;++t)o[t]=2*e[t+1]-i[t+1];return[i,o]}function W_(e){return new Hm(e)}function Oa(e,t){this._context=e,this._t=t}Oa.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var n=this._x*(1-this._t)+e*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,t)}break}}this._x=e,this._y=t}};function U_(e){return new Oa(e,.5)}function Y_(e){return new Oa(e,0)}function K_(e){return new Oa(e,1)}function ao(e,t,n){this.k=e,this.x=t,this.y=n}ao.prototype={constructor:ao,scale:function(e){return e===1?this:new ao(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new ao(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};ao.prototype;/*! @license DOMPurify 3.0.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.9/LICENSE */const{entries:qm,setPrototypeOf:ih,isFrozen:X_,getPrototypeOf:Q_,getOwnPropertyDescriptor:Z_}=Object;let{freeze:At,seal:On,create:jm}=Object,{apply:pc,construct:fc}=typeof Reflect<"u"&&Reflect;At||(At=function(t){return t});On||(On=function(t){return t});pc||(pc=function(t,n,r){return t.apply(n,r)});fc||(fc=function(t,n){return new t(...n)});const ds=en(Array.prototype.forEach),oh=en(Array.prototype.pop),Ji=en(Array.prototype.push),Is=en(String.prototype.toLowerCase),kl=en(String.prototype.toString),J_=en(String.prototype.match),eo=en(String.prototype.replace),e4=en(String.prototype.indexOf),t4=en(String.prototype.trim),An=en(Object.prototype.hasOwnProperty),Wt=en(RegExp.prototype.test),to=n4(TypeError);function en(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return pc(e,t,r)}}function n4(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return fc(e,n)}}function Pe(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Is;ih&&ih(e,null);let r=t.length;for(;r--;){let i=t[r];if(typeof i=="string"){const o=n(i);o!==i&&(X_(t)||(t[r]=o),i=o)}e[i]=!0}return e}function r4(e){for(let t=0;t<e.length;t++)An(e,t)||(e[t]=null);return e}function Hr(e){const t=jm(null);for(const[n,r]of qm(e))An(e,n)&&(Array.isArray(r)?t[n]=r4(r):r&&typeof r=="object"&&r.constructor===Object?t[n]=Hr(r):t[n]=r);return t}function hs(e,t){for(;e!==null;){const r=Z_(e,t);if(r){if(r.get)return en(r.get);if(typeof r.value=="function")return en(r.value)}e=Q_(e)}function n(){return null}return n}const sh=At(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),wl=At(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Sl=At(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),i4=At(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),xl=At(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),o4=At(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ah=At(["#text"]),lh=At(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Tl=At(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ch=At(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ps=At(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),s4=On(/\{\{[\w\W]*|[\w\W]*\}\}/gm),a4=On(/<%[\w\W]*|[\w\W]*%>/gm),l4=On(/\${[\w\W]*}/gm),c4=On(/^data-[\-\w.\u00B7-\uFFFF]/),u4=On(/^aria-[\-\w]+$/),Gm=On(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),d4=On(/^(?:\w+script|data):/i),h4=On(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Wm=On(/^html$/i);var uh=Object.freeze({__proto__:null,MUSTACHE_EXPR:s4,ERB_EXPR:a4,TMPLIT_EXPR:l4,DATA_ATTR:c4,ARIA_ATTR:u4,IS_ALLOWED_URI:Gm,IS_SCRIPT_OR_DATA:d4,ATTR_WHITESPACE:h4,DOCTYPE_NAME:Wm});const p4=function(){return typeof window>"u"?null:window},f4=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(r=n.getAttribute(i));const o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function Um(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:p4();const t=me=>Um(me);if(t.version="3.0.9",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;let{document:n}=e;const r=n,i=r.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:a,Element:l,NodeFilter:c,NamedNodeMap:u=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:h,DOMParser:d,trustedTypes:f}=e,g=l.prototype,m=hs(g,"cloneNode"),y=hs(g,"nextSibling"),b=hs(g,"childNodes"),k=hs(g,"parentNode");if(typeof s=="function"){const me=n.createElement("template");me.content&&me.content.ownerDocument&&(n=me.content.ownerDocument)}let _,x="";const{implementation:T,createNodeIterator:A,createDocumentFragment:E,getElementsByTagName:O}=n,{importNode:J}=r;let R={};t.isSupported=typeof qm=="function"&&typeof k=="function"&&T&&T.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:P,ERB_EXPR:K,TMPLIT_EXPR:H,DATA_ATTR:N,ARIA_ATTR:G,IS_SCRIPT_OR_DATA:q,ATTR_WHITESPACE:z}=uh;let{IS_ALLOWED_URI:V}=uh,Q=null;const Z=Pe({},[...sh,...wl,...Sl,...xl,...ah]);let te=null;const ue=Pe({},[...lh,...Tl,...ch,...ps]);let Y=Object.seal(jm(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ce=null,ae=null,re=!0,fe=!0,xe=!1,Ue=!0,$e=!1,Ie=!1,qe=!1,rt=!1,ht=!1,Pt=!1,kt=!1,Cn=!0,rn=!1;const Jn="user-content-";let ut=!0,wt=!1,St={},Lt=null;const on=Pe({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ne=null;const Se=Pe({},["audio","video","img","source","image","track"]);let je=null;const sn=Pe({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Dn="http://www.w3.org/1998/Math/MathML",Nr="http://www.w3.org/2000/svg",an="http://www.w3.org/1999/xhtml";let kn=an,Yi=!1,Ki=null;const dl=Pe({},[Dn,Nr,an],kl);let Dr=null;const hl=["application/xhtml+xml","text/html"],pl="text/html";let it=null,wn=null;const fl=n.createElement("form"),ts=function(F){return F instanceof RegExp||F instanceof Function},di=function(){let F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(wn&&wn===F)){if((!F||typeof F!="object")&&(F={}),F=Hr(F),Dr=hl.indexOf(F.PARSER_MEDIA_TYPE)===-1?pl:F.PARSER_MEDIA_TYPE,it=Dr==="application/xhtml+xml"?kl:Is,Q=An(F,"ALLOWED_TAGS")?Pe({},F.ALLOWED_TAGS,it):Z,te=An(F,"ALLOWED_ATTR")?Pe({},F.ALLOWED_ATTR,it):ue,Ki=An(F,"ALLOWED_NAMESPACES")?Pe({},F.ALLOWED_NAMESPACES,kl):dl,je=An(F,"ADD_URI_SAFE_ATTR")?Pe(Hr(sn),F.ADD_URI_SAFE_ATTR,it):sn,ne=An(F,"ADD_DATA_URI_TAGS")?Pe(Hr(Se),F.ADD_DATA_URI_TAGS,it):Se,Lt=An(F,"FORBID_CONTENTS")?Pe({},F.FORBID_CONTENTS,it):on,ce=An(F,"FORBID_TAGS")?Pe({},F.FORBID_TAGS,it):{},ae=An(F,"FORBID_ATTR")?Pe({},F.FORBID_ATTR,it):{},St=An(F,"USE_PROFILES")?F.USE_PROFILES:!1,re=F.ALLOW_ARIA_ATTR!==!1,fe=F.ALLOW_DATA_ATTR!==!1,xe=F.ALLOW_UNKNOWN_PROTOCOLS||!1,Ue=F.ALLOW_SELF_CLOSE_IN_ATTR!==!1,$e=F.SAFE_FOR_TEMPLATES||!1,Ie=F.WHOLE_DOCUMENT||!1,ht=F.RETURN_DOM||!1,Pt=F.RETURN_DOM_FRAGMENT||!1,kt=F.RETURN_TRUSTED_TYPE||!1,rt=F.FORCE_BODY||!1,Cn=F.SANITIZE_DOM!==!1,rn=F.SANITIZE_NAMED_PROPS||!1,ut=F.KEEP_CONTENT!==!1,wt=F.IN_PLACE||!1,V=F.ALLOWED_URI_REGEXP||Gm,kn=F.NAMESPACE||an,Y=F.CUSTOM_ELEMENT_HANDLING||{},F.CUSTOM_ELEMENT_HANDLING&&ts(F.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Y.tagNameCheck=F.CUSTOM_ELEMENT_HANDLING.tagNameCheck),F.CUSTOM_ELEMENT_HANDLING&&ts(F.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Y.attributeNameCheck=F.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),F.CUSTOM_ELEMENT_HANDLING&&typeof F.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Y.allowCustomizedBuiltInElements=F.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),$e&&(fe=!1),Pt&&(ht=!0),St&&(Q=Pe({},ah),te=[],St.html===!0&&(Pe(Q,sh),Pe(te,lh)),St.svg===!0&&(Pe(Q,wl),Pe(te,Tl),Pe(te,ps)),St.svgFilters===!0&&(Pe(Q,Sl),Pe(te,Tl),Pe(te,ps)),St.mathMl===!0&&(Pe(Q,xl),Pe(te,ch),Pe(te,ps))),F.ADD_TAGS&&(Q===Z&&(Q=Hr(Q)),Pe(Q,F.ADD_TAGS,it)),F.ADD_ATTR&&(te===ue&&(te=Hr(te)),Pe(te,F.ADD_ATTR,it)),F.ADD_URI_SAFE_ATTR&&Pe(je,F.ADD_URI_SAFE_ATTR,it),F.FORBID_CONTENTS&&(Lt===on&&(Lt=Hr(Lt)),Pe(Lt,F.FORBID_CONTENTS,it)),ut&&(Q["#text"]=!0),Ie&&Pe(Q,["html","head","body"]),Q.table&&(Pe(Q,["tbody"]),delete ce.tbody),F.TRUSTED_TYPES_POLICY){if(typeof F.TRUSTED_TYPES_POLICY.createHTML!="function")throw to('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof F.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw to('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');_=F.TRUSTED_TYPES_POLICY,x=_.createHTML("")}else _===void 0&&(_=f4(f,i)),_!==null&&typeof x=="string"&&(x=_.createHTML(""));At&&At(F),wn=F}},ns=Pe({},["mi","mo","mn","ms","mtext"]),Xi=Pe({},["foreignobject","desc","title","annotation-xml"]),ml=Pe({},["title","style","font","a","script"]),Cr=Pe({},[...wl,...Sl,...i4]),rs=Pe({},[...xl,...o4]),gl=function(F){let ie=k(F);(!ie||!ie.tagName)&&(ie={namespaceURI:kn,tagName:"template"});const pe=Is(F.tagName),Ge=Is(ie.tagName);return Ki[F.namespaceURI]?F.namespaceURI===Nr?ie.namespaceURI===an?pe==="svg":ie.namespaceURI===Dn?pe==="svg"&&(Ge==="annotation-xml"||ns[Ge]):!!Cr[pe]:F.namespaceURI===Dn?ie.namespaceURI===an?pe==="math":ie.namespaceURI===Nr?pe==="math"&&Xi[Ge]:!!rs[pe]:F.namespaceURI===an?ie.namespaceURI===Nr&&!Xi[Ge]||ie.namespaceURI===Dn&&!ns[Ge]?!1:!rs[pe]&&(ml[pe]||!Cr[pe]):!!(Dr==="application/xhtml+xml"&&Ki[F.namespaceURI]):!1},er=function(F){Ji(t.removed,{element:F});try{F.parentNode.removeChild(F)}catch{F.remove()}},hi=function(F,ie){try{Ji(t.removed,{attribute:ie.getAttributeNode(F),from:ie})}catch{Ji(t.removed,{attribute:null,from:ie})}if(ie.removeAttribute(F),F==="is"&&!te[F])if(ht||Pt)try{er(ie)}catch{}else try{ie.setAttribute(F,"")}catch{}},is=function(F){let ie=null,pe=null;if(rt)F="<remove></remove>"+F;else{const gt=J_(F,/^[\r\n\t ]+/);pe=gt&&gt[0]}Dr==="application/xhtml+xml"&&kn===an&&(F='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+F+"</body></html>");const Ge=_?_.createHTML(F):F;if(kn===an)try{ie=new d().parseFromString(Ge,Dr)}catch{}if(!ie||!ie.documentElement){ie=T.createDocument(kn,"template",null);try{ie.documentElement.innerHTML=Yi?x:Ge}catch{}}const mt=ie.body||ie.documentElement;return F&&pe&&mt.insertBefore(n.createTextNode(pe),mt.childNodes[0]||null),kn===an?O.call(ie,Ie?"html":"body")[0]:Ie?ie.documentElement:mt},os=function(F){return A.call(F.ownerDocument||F,F,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null)},vl=function(F){return F instanceof h&&(typeof F.nodeName!="string"||typeof F.textContent!="string"||typeof F.removeChild!="function"||!(F.attributes instanceof u)||typeof F.removeAttribute!="function"||typeof F.setAttribute!="function"||typeof F.namespaceURI!="string"||typeof F.insertBefore!="function"||typeof F.hasChildNodes!="function")},ss=function(F){return typeof a=="function"&&F instanceof a},U=function(F,ie,pe){R[F]&&ds(R[F],Ge=>{Ge.call(t,ie,pe,wn)})},se=function(F){let ie=null;if(U("beforeSanitizeElements",F,null),vl(F))return er(F),!0;const pe=it(F.nodeName);if(U("uponSanitizeElement",F,{tagName:pe,allowedTags:Q}),F.hasChildNodes()&&!ss(F.firstElementChild)&&Wt(/<[/\w]/g,F.innerHTML)&&Wt(/<[/\w]/g,F.textContent))return er(F),!0;if(!Q[pe]||ce[pe]){if(!ce[pe]&&Ze(pe)&&(Y.tagNameCheck instanceof RegExp&&Wt(Y.tagNameCheck,pe)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(pe)))return!1;if(ut&&!Lt[pe]){const Ge=k(F)||F.parentNode,mt=b(F)||F.childNodes;if(mt&&Ge){const gt=mt.length;for(let Mt=gt-1;Mt>=0;--Mt)Ge.insertBefore(m(mt[Mt],!0),y(F))}}return er(F),!0}return F instanceof l&&!gl(F)||(pe==="noscript"||pe==="noembed"||pe==="noframes")&&Wt(/<\/no(script|embed|frames)/i,F.innerHTML)?(er(F),!0):($e&&F.nodeType===3&&(ie=F.textContent,ds([P,K,H],Ge=>{ie=eo(ie,Ge," ")}),F.textContent!==ie&&(Ji(t.removed,{element:F.cloneNode()}),F.textContent=ie)),U("afterSanitizeElements",F,null),!1)},Re=function(F,ie,pe){if(Cn&&(ie==="id"||ie==="name")&&(pe in n||pe in fl))return!1;if(!(fe&&!ae[ie]&&Wt(N,ie))){if(!(re&&Wt(G,ie))){if(!te[ie]||ae[ie]){if(!(Ze(F)&&(Y.tagNameCheck instanceof RegExp&&Wt(Y.tagNameCheck,F)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(F))&&(Y.attributeNameCheck instanceof RegExp&&Wt(Y.attributeNameCheck,ie)||Y.attributeNameCheck instanceof Function&&Y.attributeNameCheck(ie))||ie==="is"&&Y.allowCustomizedBuiltInElements&&(Y.tagNameCheck instanceof RegExp&&Wt(Y.tagNameCheck,pe)||Y.tagNameCheck instanceof Function&&Y.tagNameCheck(pe))))return!1}else if(!je[ie]){if(!Wt(V,eo(pe,z,""))){if(!((ie==="src"||ie==="xlink:href"||ie==="href")&&F!=="script"&&e4(pe,"data:")===0&&ne[F])){if(!(xe&&!Wt(q,eo(pe,z,"")))){if(pe)return!1}}}}}}return!0},Ze=function(F){return F!=="annotation-xml"&&F.indexOf("-")>0},Sn=function(F){U("beforeSanitizeAttributes",F,null);const{attributes:ie}=F;if(!ie)return;const pe={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:te};let Ge=ie.length;for(;Ge--;){const mt=ie[Ge],{name:gt,namespaceURI:Mt,value:zr}=mt,Qi=it(gt);let It=gt==="value"?zr:t4(zr);if(pe.attrName=Qi,pe.attrValue=It,pe.keepAttr=!0,pe.forceKeepAttr=void 0,U("uponSanitizeAttribute",F,pe),It=pe.attrValue,pe.forceKeepAttr||(hi(gt,F),!pe.keepAttr))continue;if(!Ue&&Wt(/\/>/i,It)){hi(gt,F);continue}$e&&ds([P,K,H],Md=>{It=eo(It,Md," ")});const Ld=it(F.nodeName);if(Re(Ld,Qi,It)){if(rn&&(Qi==="id"||Qi==="name")&&(hi(gt,F),It=Jn+It),_&&typeof f=="object"&&typeof f.getAttributeType=="function"&&!Mt)switch(f.getAttributeType(Ld,Qi)){case"TrustedHTML":{It=_.createHTML(It);break}case"TrustedScriptURL":{It=_.createScriptURL(It);break}}try{Mt?F.setAttributeNS(Mt,gt,It):F.setAttribute(gt,It),oh(t.removed)}catch{}}}U("afterSanitizeAttributes",F,null)},kr=function me(F){let ie=null;const pe=os(F);for(U("beforeSanitizeShadowDOM",F,null);ie=pe.nextNode();)U("uponSanitizeShadowNode",ie,null),!se(ie)&&(ie.content instanceof o&&me(ie.content),Sn(ie));U("afterSanitizeShadowDOM",F,null)};return t.sanitize=function(me){let F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ie=null,pe=null,Ge=null,mt=null;if(Yi=!me,Yi&&(me="<!-->"),typeof me!="string"&&!ss(me))if(typeof me.toString=="function"){if(me=me.toString(),typeof me!="string")throw to("dirty is not a string, aborting")}else throw to("toString is not a function");if(!t.isSupported)return me;if(qe||di(F),t.removed=[],typeof me=="string"&&(wt=!1),wt){if(me.nodeName){const zr=it(me.nodeName);if(!Q[zr]||ce[zr])throw to("root node is forbidden and cannot be sanitized in-place")}}else if(me instanceof a)ie=is("<!---->"),pe=ie.ownerDocument.importNode(me,!0),pe.nodeType===1&&pe.nodeName==="BODY"||pe.nodeName==="HTML"?ie=pe:ie.appendChild(pe);else{if(!ht&&!$e&&!Ie&&me.indexOf("<")===-1)return _&&kt?_.createHTML(me):me;if(ie=is(me),!ie)return ht?null:kt?x:""}ie&&rt&&er(ie.firstChild);const gt=os(wt?me:ie);for(;Ge=gt.nextNode();)se(Ge)||(Ge.content instanceof o&&kr(Ge.content),Sn(Ge));if(wt)return me;if(ht){if(Pt)for(mt=E.call(ie.ownerDocument);ie.firstChild;)mt.appendChild(ie.firstChild);else mt=ie;return(te.shadowroot||te.shadowrootmode)&&(mt=J.call(r,mt,!0)),mt}let Mt=Ie?ie.outerHTML:ie.innerHTML;return Ie&&Q["!doctype"]&&ie.ownerDocument&&ie.ownerDocument.doctype&&ie.ownerDocument.doctype.name&&Wt(Wm,ie.ownerDocument.doctype.name)&&(Mt="<!DOCTYPE "+ie.ownerDocument.doctype.name+`>
`+Mt),$e&&ds([P,K,H],zr=>{Mt=eo(Mt,zr," ")}),_&&kt?_.createHTML(Mt):Mt},t.setConfig=function(){let me=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};di(me),qe=!0},t.clearConfig=function(){wn=null,qe=!1},t.isValidAttribute=function(me,F,ie){wn||di({});const pe=it(me),Ge=it(F);return Re(pe,Ge,ie)},t.addHook=function(me,F){typeof F=="function"&&(R[me]=R[me]||[],Ji(R[me],F))},t.removeHook=function(me){if(R[me])return oh(R[me])},t.removeHooks=function(me){R[me]&&(R[me]=[])},t.removeAllHooks=function(){R={}},t}var Si=Um();const Vo=/<br\s*\/?>/gi,m4=e=>e?Km(e).replace(/\\n/g,"#br#").split("#br#"):[""],g4=(()=>{let e=!1;return()=>{e||(v4(),e=!0)}})();function v4(){const e="data-temp-href-target";Si.addHook("beforeSanitizeAttributes",t=>{t.tagName==="A"&&t.hasAttribute("target")&&t.setAttribute(e,t.getAttribute("target")||"")}),Si.addHook("afterSanitizeAttributes",t=>{t.tagName==="A"&&t.hasAttribute(e)&&(t.setAttribute("target",t.getAttribute(e)||""),t.removeAttribute(e),t.getAttribute("target")==="_blank"&&t.setAttribute("rel","noopener"))})}const Ym=e=>(g4(),Si.sanitize(e)),dh=(e,t)=>{var n;if(((n=t.flowchart)==null?void 0:n.htmlLabels)!==!1){const r=t.securityLevel;r==="antiscript"||r==="strict"?e=Ym(e):r!=="loose"&&(e=Km(e),e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"),e=e.replace(/=/g,"&equals;"),e=C4(e))}return e},To=(e,t)=>e&&(t.dompurifyConfig?e=Si.sanitize(dh(e,t),t.dompurifyConfig).toString():e=Si.sanitize(dh(e,t),{FORBID_TAGS:["style"]}).toString(),e),y4=(e,t)=>typeof e=="string"?To(e,t):e.flat().map(n=>To(n,t)),b4=e=>Vo.test(e),_4=e=>e.split(Vo),C4=e=>e.replace(/#br#/g,"<br/>"),Km=e=>e.replace(Vo,"#br#"),k4=e=>{let t="";return e&&(t=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,t=t.replaceAll(/\(/g,"\\("),t=t.replaceAll(/\)/g,"\\)")),t},Xm=e=>!(e===!1||["false","null","0"].includes(String(e).trim().toLowerCase())),w4=function(...e){const t=e.filter(n=>!isNaN(n));return Math.max(...t)},S4=function(...e){const t=e.filter(n=>!isNaN(n));return Math.min(...t)},AK=function(e){const t=e.split(/(,)/),n=[];for(let r=0;r<t.length;r++){let i=t[r];if(i===","&&r>0&&r+1<t.length){const o=t[r-1],s=t[r+1];x4(o,s)&&(i=o+","+s,r++,n.pop())}n.push(T4(i))}return n.join("")},mc=(e,t)=>Math.max(0,e.split(t).length-1),x4=(e,t)=>{const n=mc(e,"~"),r=mc(t,"~");return n===1&&r===1},T4=e=>{const t=mc(e,"~");let n=!1;if(t<=1)return e;t%2!==0&&e.startsWith("~")&&(e=e.substring(1),n=!0);const r=[...e];let i=r.indexOf("~"),o=r.lastIndexOf("~");for(;i!==-1&&o!==-1&&i!==o;)r[i]="<",r[o]=">",i=r.indexOf("~"),o=r.lastIndexOf("~");return n&&r.unshift("~"),r.join("")},hh=()=>window.MathMLElement!==void 0,gc=/\$\$(.*)\$\$/g,ph=e=>{var t;return(((t=e.match(gc))==null?void 0:t.length)??0)>0},$K=async(e,t)=>{e=await E4(e,t);const n=document.createElement("div");n.innerHTML=e,n.id="katex-temp",n.style.visibility="hidden",n.style.position="absolute",n.style.top="0";const r=document.querySelector("body");r==null||r.insertAdjacentElement("beforeend",n);const i={width:n.clientWidth,height:n.clientHeight};return n.remove(),i},E4=async(e,t)=>{if(!ph(e))return e;if(!hh()&&!t.legacyMathML)return e.replace(gc,"MathML is unsupported in this environment.");const{default:n}=await We(()=>import("./katex-ffb0e8f1.xpx6yKzS.js"),__vite__mapDeps([]));return e.split(Vo).map(r=>ph(r)?`
            <div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">
              ${r}
            </div>
          `:`<div>${r}</div>`).join("").replace(gc,(r,i)=>n.renderToString(i,{throwOnError:!0,displayMode:!0,output:hh()?"mathml":"htmlAndMathml"}).replace(/\n/g," ").replace(/<annotation.*<\/annotation>/g,""))},bu={getRows:m4,sanitizeText:To,sanitizeTextOrArray:y4,hasBreaks:b4,splitBreaks:_4,lineBreakRegex:Vo,removeScript:Ym,getUrl:k4,evaluate:Xm,getMax:w4,getMin:S4},Bs={min:{r:0,g:0,b:0,s:0,l:0,a:0},max:{r:255,g:255,b:255,h:360,s:100,l:100,a:1},clamp:{r:e=>e>=255?255:e<0?0:e,g:e=>e>=255?255:e<0?0:e,b:e=>e>=255?255:e<0?0:e,h:e=>e%360,s:e=>e>=100?100:e<0?0:e,l:e=>e>=100?100:e<0?0:e,a:e=>e>=1?1:e<0?0:e},toLinear:e=>{const t=e/255;return e>.03928?Math.pow((t+.055)/1.055,2.4):t/12.92},hue2rgb:(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),hsl2rgb:({h:e,s:t,l:n},r)=>{if(!t)return n*2.55;e/=360,t/=100,n/=100;const i=n<.5?n*(1+t):n+t-n*t,o=2*n-i;switch(r){case"r":return Bs.hue2rgb(o,i,e+1/3)*255;case"g":return Bs.hue2rgb(o,i,e)*255;case"b":return Bs.hue2rgb(o,i,e-1/3)*255}},rgb2hsl:({r:e,g:t,b:n},r)=>{e/=255,t/=255,n/=255;const i=Math.max(e,t,n),o=Math.min(e,t,n),s=(i+o)/2;if(r==="l")return s*100;if(i===o)return 0;const a=i-o,l=s>.5?a/(2-i-o):a/(i+o);if(r==="s")return l*100;switch(i){case e:return((t-n)/a+(t<n?6:0))*60;case t:return((n-e)/a+2)*60;case n:return((e-t)/a+4)*60;default:return-1}}},A4=Bs,$4={clamp:(e,t,n)=>t>n?Math.min(t,Math.max(n,e)):Math.min(n,Math.max(t,e)),round:e=>Math.round(e*1e10)/1e10},P4=$4,L4={dec2hex:e=>{const t=Math.round(e).toString(16);return t.length>1?t:`0${t}`}},M4=L4,I4={channel:A4,lang:P4,unit:M4},_e=I4,Sr={};for(let e=0;e<=255;e++)Sr[e]=_e.unit.dec2hex(e);const vt={ALL:0,RGB:1,HSL:2};class B4{constructor(){this.type=vt.ALL}get(){return this.type}set(t){if(this.type&&this.type!==t)throw new Error("Cannot change both RGB and HSL channels at the same time");this.type=t}reset(){this.type=vt.ALL}is(t){return this.type===t}}const O4=B4;class F4{constructor(t,n){this.color=n,this.changed=!1,this.data=t,this.type=new O4}set(t,n){return this.color=n,this.changed=!1,this.data=t,this.type.type=vt.ALL,this}_ensureHSL(){const t=this.data,{h:n,s:r,l:i}=t;n===void 0&&(t.h=_e.channel.rgb2hsl(t,"h")),r===void 0&&(t.s=_e.channel.rgb2hsl(t,"s")),i===void 0&&(t.l=_e.channel.rgb2hsl(t,"l"))}_ensureRGB(){const t=this.data,{r:n,g:r,b:i}=t;n===void 0&&(t.r=_e.channel.hsl2rgb(t,"r")),r===void 0&&(t.g=_e.channel.hsl2rgb(t,"g")),i===void 0&&(t.b=_e.channel.hsl2rgb(t,"b"))}get r(){const t=this.data,n=t.r;return!this.type.is(vt.HSL)&&n!==void 0?n:(this._ensureHSL(),_e.channel.hsl2rgb(t,"r"))}get g(){const t=this.data,n=t.g;return!this.type.is(vt.HSL)&&n!==void 0?n:(this._ensureHSL(),_e.channel.hsl2rgb(t,"g"))}get b(){const t=this.data,n=t.b;return!this.type.is(vt.HSL)&&n!==void 0?n:(this._ensureHSL(),_e.channel.hsl2rgb(t,"b"))}get h(){const t=this.data,n=t.h;return!this.type.is(vt.RGB)&&n!==void 0?n:(this._ensureRGB(),_e.channel.rgb2hsl(t,"h"))}get s(){const t=this.data,n=t.s;return!this.type.is(vt.RGB)&&n!==void 0?n:(this._ensureRGB(),_e.channel.rgb2hsl(t,"s"))}get l(){const t=this.data,n=t.l;return!this.type.is(vt.RGB)&&n!==void 0?n:(this._ensureRGB(),_e.channel.rgb2hsl(t,"l"))}get a(){return this.data.a}set r(t){this.type.set(vt.RGB),this.changed=!0,this.data.r=t}set g(t){this.type.set(vt.RGB),this.changed=!0,this.data.g=t}set b(t){this.type.set(vt.RGB),this.changed=!0,this.data.b=t}set h(t){this.type.set(vt.HSL),this.changed=!0,this.data.h=t}set s(t){this.type.set(vt.HSL),this.changed=!0,this.data.s=t}set l(t){this.type.set(vt.HSL),this.changed=!0,this.data.l=t}set a(t){this.changed=!0,this.data.a=t}}const R4=F4,N4=new R4({r:0,g:0,b:0,a:0},"transparent"),Fa=N4,Qm={re:/^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,parse:e=>{if(e.charCodeAt(0)!==35)return;const t=e.match(Qm.re);if(!t)return;const n=t[1],r=parseInt(n,16),i=n.length,o=i%4===0,s=i>4,a=s?1:17,l=s?8:4,c=o?0:-1,u=s?255:15;return Fa.set({r:(r>>l*(c+3)&u)*a,g:(r>>l*(c+2)&u)*a,b:(r>>l*(c+1)&u)*a,a:o?(r&u)*a/255:1},e)},stringify:e=>{const{r:t,g:n,b:r,a:i}=e;return i<1?`#${Sr[Math.round(t)]}${Sr[Math.round(n)]}${Sr[Math.round(r)]}${Sr[Math.round(i*255)]}`:`#${Sr[Math.round(t)]}${Sr[Math.round(n)]}${Sr[Math.round(r)]}`}},lo=Qm,Os={re:/^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,hueRe:/^(.+?)(deg|grad|rad|turn)$/i,_hue2deg:e=>{const t=e.match(Os.hueRe);if(t){const[,n,r]=t;switch(r){case"grad":return _e.channel.clamp.h(parseFloat(n)*.9);case"rad":return _e.channel.clamp.h(parseFloat(n)*180/Math.PI);case"turn":return _e.channel.clamp.h(parseFloat(n)*360)}}return _e.channel.clamp.h(parseFloat(e))},parse:e=>{const t=e.charCodeAt(0);if(t!==104&&t!==72)return;const n=e.match(Os.re);if(!n)return;const[,r,i,o,s,a]=n;return Fa.set({h:Os._hue2deg(r),s:_e.channel.clamp.s(parseFloat(i)),l:_e.channel.clamp.l(parseFloat(o)),a:s?_e.channel.clamp.a(a?parseFloat(s)/100:parseFloat(s)):1},e)},stringify:e=>{const{h:t,s:n,l:r,a:i}=e;return i<1?`hsla(${_e.lang.round(t)}, ${_e.lang.round(n)}%, ${_e.lang.round(r)}%, ${i})`:`hsl(${_e.lang.round(t)}, ${_e.lang.round(n)}%, ${_e.lang.round(r)}%)`}},fs=Os,Fs={colors:{aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyanaqua:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",transparent:"#00000000",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},parse:e=>{e=e.toLowerCase();const t=Fs.colors[e];if(t)return lo.parse(t)},stringify:e=>{const t=lo.stringify(e);for(const n in Fs.colors)if(Fs.colors[n]===t)return n}},fh=Fs,Zm={re:/^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,parse:e=>{const t=e.charCodeAt(0);if(t!==114&&t!==82)return;const n=e.match(Zm.re);if(!n)return;const[,r,i,o,s,a,l,c,u]=n;return Fa.set({r:_e.channel.clamp.r(i?parseFloat(r)*2.55:parseFloat(r)),g:_e.channel.clamp.g(s?parseFloat(o)*2.55:parseFloat(o)),b:_e.channel.clamp.b(l?parseFloat(a)*2.55:parseFloat(a)),a:c?_e.channel.clamp.a(u?parseFloat(c)/100:parseFloat(c)):1},e)},stringify:e=>{const{r:t,g:n,b:r,a:i}=e;return i<1?`rgba(${_e.lang.round(t)}, ${_e.lang.round(n)}, ${_e.lang.round(r)}, ${_e.lang.round(i)})`:`rgb(${_e.lang.round(t)}, ${_e.lang.round(n)}, ${_e.lang.round(r)})`}},ms=Zm,D4={format:{keyword:fh,hex:lo,rgb:ms,rgba:ms,hsl:fs,hsla:fs},parse:e=>{if(typeof e!="string")return e;const t=lo.parse(e)||ms.parse(e)||fs.parse(e)||fh.parse(e);if(t)return t;throw new Error(`Unsupported color format: "${e}"`)},stringify:e=>!e.changed&&e.color?e.color:e.type.is(vt.HSL)||e.data.r===void 0?fs.stringify(e):e.a<1||!Number.isInteger(e.r)||!Number.isInteger(e.g)||!Number.isInteger(e.b)?ms.stringify(e):lo.stringify(e)},Gn=D4,z4=(e,t)=>{const n=Gn.parse(e);for(const r in t)n[r]=_e.channel.clamp[r](t[r]);return Gn.stringify(n)},Jm=z4,V4=(e,t,n=0,r=1)=>{if(typeof e!="number")return Jm(e,{a:t});const i=Fa.set({r:_e.channel.clamp.r(e),g:_e.channel.clamp.g(t),b:_e.channel.clamp.b(n),a:_e.channel.clamp.a(r)});return Gn.stringify(i)},co=V4,H4=e=>{const{r:t,g:n,b:r}=Gn.parse(e),i=.2126*_e.channel.toLinear(t)+.7152*_e.channel.toLinear(n)+.0722*_e.channel.toLinear(r);return _e.lang.round(i)},q4=H4,j4=e=>q4(e)>=.5,G4=j4,W4=e=>!G4(e),Ho=W4,U4=(e,t,n)=>{const r=Gn.parse(e),i=r[t],o=_e.channel.clamp[t](i+n);return i!==o&&(r[t]=o),Gn.stringify(r)},e0=U4,Y4=(e,t)=>e0(e,"l",t),ge=Y4,K4=(e,t)=>e0(e,"l",-t),be=K4,X4=(e,t)=>{const n=Gn.parse(e),r={};for(const i in t)t[i]&&(r[i]=n[i]+t[i]);return Jm(e,r)},D=X4,Q4=(e,t,n=50)=>{const{r,g:i,b:o,a:s}=Gn.parse(e),{r:a,g:l,b:c,a:u}=Gn.parse(t),h=n/100,d=h*2-1,f=s-u,m=((d*f===-1?d:(d+f)/(1+d*f))+1)/2,y=1-m,b=r*m+a*y,k=i*m+l*y,_=o*m+c*y,x=s*h+u*(1-h);return co(b,k,_,x)},Z4=Q4,J4=(e,t=100)=>{const n=Gn.parse(e);return n.r=255-n.r,n.g=255-n.g,n.b=255-n.b,Z4(n,e,t)},le=J4,Et=(e,t)=>t?D(e,{s:-40,l:10}):D(e,{s:-40,l:-10}),Ra="#ffffff",Na="#f2f2f2";let e3=class{constructor(){this.background="#f4f4f4",this.primaryColor="#fff4dd",this.noteBkgColor="#fff5ad",this.noteTextColor="#333",this.THEME_COLOR_LIMIT=12,this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px"}updateColors(){var t,n,r,i,o,s,a,l,c,u,h;if(this.primaryTextColor=this.primaryTextColor||(this.darkMode?"#eee":"#333"),this.secondaryColor=this.secondaryColor||D(this.primaryColor,{h:-120}),this.tertiaryColor=this.tertiaryColor||D(this.primaryColor,{h:180,l:5}),this.primaryBorderColor=this.primaryBorderColor||Et(this.primaryColor,this.darkMode),this.secondaryBorderColor=this.secondaryBorderColor||Et(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=this.tertiaryBorderColor||Et(this.tertiaryColor,this.darkMode),this.noteBorderColor=this.noteBorderColor||Et(this.noteBkgColor,this.darkMode),this.noteBkgColor=this.noteBkgColor||"#fff5ad",this.noteTextColor=this.noteTextColor||"#333",this.secondaryTextColor=this.secondaryTextColor||le(this.secondaryColor),this.tertiaryTextColor=this.tertiaryTextColor||le(this.tertiaryColor),this.lineColor=this.lineColor||le(this.background),this.arrowheadColor=this.arrowheadColor||le(this.background),this.textColor=this.textColor||this.primaryTextColor,this.border2=this.border2||this.tertiaryBorderColor,this.nodeBkg=this.nodeBkg||this.primaryColor,this.mainBkg=this.mainBkg||this.primaryColor,this.nodeBorder=this.nodeBorder||this.primaryBorderColor,this.clusterBkg=this.clusterBkg||this.tertiaryColor,this.clusterBorder=this.clusterBorder||this.tertiaryBorderColor,this.defaultLinkColor=this.defaultLinkColor||this.lineColor,this.titleColor=this.titleColor||this.tertiaryTextColor,this.edgeLabelBackground=this.edgeLabelBackground||(this.darkMode?be(this.secondaryColor,30):this.secondaryColor),this.nodeTextColor=this.nodeTextColor||this.primaryTextColor,this.actorBorder=this.actorBorder||this.primaryBorderColor,this.actorBkg=this.actorBkg||this.mainBkg,this.actorTextColor=this.actorTextColor||this.primaryTextColor,this.actorLineColor=this.actorLineColor||"grey",this.labelBoxBkgColor=this.labelBoxBkgColor||this.actorBkg,this.signalColor=this.signalColor||this.textColor,this.signalTextColor=this.signalTextColor||this.textColor,this.labelBoxBorderColor=this.labelBoxBorderColor||this.actorBorder,this.labelTextColor=this.labelTextColor||this.actorTextColor,this.loopTextColor=this.loopTextColor||this.actorTextColor,this.activationBorderColor=this.activationBorderColor||be(this.secondaryColor,10),this.activationBkgColor=this.activationBkgColor||this.secondaryColor,this.sequenceNumberColor=this.sequenceNumberColor||le(this.lineColor),this.sectionBkgColor=this.sectionBkgColor||this.tertiaryColor,this.altSectionBkgColor=this.altSectionBkgColor||"white",this.sectionBkgColor=this.sectionBkgColor||this.secondaryColor,this.sectionBkgColor2=this.sectionBkgColor2||this.primaryColor,this.excludeBkgColor=this.excludeBkgColor||"#eeeeee",this.taskBorderColor=this.taskBorderColor||this.primaryBorderColor,this.taskBkgColor=this.taskBkgColor||this.primaryColor,this.activeTaskBorderColor=this.activeTaskBorderColor||this.primaryColor,this.activeTaskBkgColor=this.activeTaskBkgColor||ge(this.primaryColor,23),this.gridColor=this.gridColor||"lightgrey",this.doneTaskBkgColor=this.doneTaskBkgColor||"lightgrey",this.doneTaskBorderColor=this.doneTaskBorderColor||"grey",this.critBorderColor=this.critBorderColor||"#ff8888",this.critBkgColor=this.critBkgColor||"red",this.todayLineColor=this.todayLineColor||"red",this.taskTextColor=this.taskTextColor||this.textColor,this.taskTextOutsideColor=this.taskTextOutsideColor||this.textColor,this.taskTextLightColor=this.taskTextLightColor||this.textColor,this.taskTextColor=this.taskTextColor||this.primaryTextColor,this.taskTextDarkColor=this.taskTextDarkColor||this.textColor,this.taskTextClickableColor=this.taskTextClickableColor||"#003163",this.personBorder=this.personBorder||this.primaryBorderColor,this.personBkg=this.personBkg||this.mainBkg,this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||this.tertiaryColor,this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.nodeBorder,this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.transitionColor=this.transitionColor||this.lineColor,this.specialStateColor=this.lineColor,this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||D(this.primaryColor,{h:30}),this.cScale4=this.cScale4||D(this.primaryColor,{h:60}),this.cScale5=this.cScale5||D(this.primaryColor,{h:90}),this.cScale6=this.cScale6||D(this.primaryColor,{h:120}),this.cScale7=this.cScale7||D(this.primaryColor,{h:150}),this.cScale8=this.cScale8||D(this.primaryColor,{h:210,l:150}),this.cScale9=this.cScale9||D(this.primaryColor,{h:270}),this.cScale10=this.cScale10||D(this.primaryColor,{h:300}),this.cScale11=this.cScale11||D(this.primaryColor,{h:330}),this.darkMode)for(let f=0;f<this.THEME_COLOR_LIMIT;f++)this["cScale"+f]=be(this["cScale"+f],75);else for(let f=0;f<this.THEME_COLOR_LIMIT;f++)this["cScale"+f]=be(this["cScale"+f],25);for(let f=0;f<this.THEME_COLOR_LIMIT;f++)this["cScaleInv"+f]=this["cScaleInv"+f]||le(this["cScale"+f]);for(let f=0;f<this.THEME_COLOR_LIMIT;f++)this.darkMode?this["cScalePeer"+f]=this["cScalePeer"+f]||ge(this["cScale"+f],10):this["cScalePeer"+f]=this["cScalePeer"+f]||be(this["cScale"+f],10);this.scaleLabelColor=this.scaleLabelColor||this.labelTextColor;for(let f=0;f<this.THEME_COLOR_LIMIT;f++)this["cScaleLabel"+f]=this["cScaleLabel"+f]||this.scaleLabelColor;const d=this.darkMode?-4:-1;for(let f=0;f<5;f++)this["surface"+f]=this["surface"+f]||D(this.mainBkg,{h:180,s:-15,l:d*(5+f*3)}),this["surfacePeer"+f]=this["surfacePeer"+f]||D(this.mainBkg,{h:180,s:-15,l:d*(8+f*3)});this.classText=this.classText||this.textColor,this.fillType0=this.fillType0||this.primaryColor,this.fillType1=this.fillType1||this.secondaryColor,this.fillType2=this.fillType2||D(this.primaryColor,{h:64}),this.fillType3=this.fillType3||D(this.secondaryColor,{h:64}),this.fillType4=this.fillType4||D(this.primaryColor,{h:-64}),this.fillType5=this.fillType5||D(this.secondaryColor,{h:-64}),this.fillType6=this.fillType6||D(this.primaryColor,{h:128}),this.fillType7=this.fillType7||D(this.secondaryColor,{h:128}),this.pie1=this.pie1||this.primaryColor,this.pie2=this.pie2||this.secondaryColor,this.pie3=this.pie3||this.tertiaryColor,this.pie4=this.pie4||D(this.primaryColor,{l:-10}),this.pie5=this.pie5||D(this.secondaryColor,{l:-10}),this.pie6=this.pie6||D(this.tertiaryColor,{l:-10}),this.pie7=this.pie7||D(this.primaryColor,{h:60,l:-10}),this.pie8=this.pie8||D(this.primaryColor,{h:-60,l:-10}),this.pie9=this.pie9||D(this.primaryColor,{h:120,l:0}),this.pie10=this.pie10||D(this.primaryColor,{h:60,l:-20}),this.pie11=this.pie11||D(this.primaryColor,{h:-60,l:-20}),this.pie12=this.pie12||D(this.primaryColor,{h:120,l:-10}),this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||D(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||D(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||D(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||D(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||D(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||D(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Ho(this.quadrant1Fill)?ge(this.quadrant1Fill):be(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((t=this.xyChart)==null?void 0:t.backgroundColor)||this.background,titleColor:((n=this.xyChart)==null?void 0:n.titleColor)||this.primaryTextColor,xAxisTitleColor:((r=this.xyChart)==null?void 0:r.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((i=this.xyChart)==null?void 0:i.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((o=this.xyChart)==null?void 0:o.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((s=this.xyChart)==null?void 0:s.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((a=this.xyChart)==null?void 0:a.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((l=this.xyChart)==null?void 0:l.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((c=this.xyChart)==null?void 0:c.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((u=this.xyChart)==null?void 0:u.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((h=this.xyChart)==null?void 0:h.plotColorPalette)||"#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||(this.darkMode?be(this.secondaryColor,30):this.secondaryColor),this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=this.git0||this.primaryColor,this.git1=this.git1||this.secondaryColor,this.git2=this.git2||this.tertiaryColor,this.git3=this.git3||D(this.primaryColor,{h:-30}),this.git4=this.git4||D(this.primaryColor,{h:-60}),this.git5=this.git5||D(this.primaryColor,{h:-90}),this.git6=this.git6||D(this.primaryColor,{h:60}),this.git7=this.git7||D(this.primaryColor,{h:120}),this.darkMode?(this.git0=ge(this.git0,25),this.git1=ge(this.git1,25),this.git2=ge(this.git2,25),this.git3=ge(this.git3,25),this.git4=ge(this.git4,25),this.git5=ge(this.git5,25),this.git6=ge(this.git6,25),this.git7=ge(this.git7,25)):(this.git0=be(this.git0,25),this.git1=be(this.git1,25),this.git2=be(this.git2,25),this.git3=be(this.git3,25),this.git4=be(this.git4,25),this.git5=be(this.git5,25),this.git6=be(this.git6,25),this.git7=be(this.git7,25)),this.gitInv0=this.gitInv0||le(this.git0),this.gitInv1=this.gitInv1||le(this.git1),this.gitInv2=this.gitInv2||le(this.git2),this.gitInv3=this.gitInv3||le(this.git3),this.gitInv4=this.gitInv4||le(this.git4),this.gitInv5=this.gitInv5||le(this.git5),this.gitInv6=this.gitInv6||le(this.git6),this.gitInv7=this.gitInv7||le(this.git7),this.branchLabelColor=this.branchLabelColor||(this.darkMode?"black":this.labelTextColor),this.gitBranchLabel0=this.gitBranchLabel0||this.branchLabelColor,this.gitBranchLabel1=this.gitBranchLabel1||this.branchLabelColor,this.gitBranchLabel2=this.gitBranchLabel2||this.branchLabelColor,this.gitBranchLabel3=this.gitBranchLabel3||this.branchLabelColor,this.gitBranchLabel4=this.gitBranchLabel4||this.branchLabelColor,this.gitBranchLabel5=this.gitBranchLabel5||this.branchLabelColor,this.gitBranchLabel6=this.gitBranchLabel6||this.branchLabelColor,this.gitBranchLabel7=this.gitBranchLabel7||this.branchLabelColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||Ra,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||Na}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(r=>{this[r]=t[r]}),this.updateColors(),n.forEach(r=>{this[r]=t[r]})}};const t3=e=>{const t=new e3;return t.calculate(e),t};let n3=class{constructor(){this.background="#333",this.primaryColor="#1f2020",this.secondaryColor=ge(this.primaryColor,16),this.tertiaryColor=D(this.primaryColor,{h:-160}),this.primaryBorderColor=le(this.background),this.secondaryBorderColor=Et(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=Et(this.tertiaryColor,this.darkMode),this.primaryTextColor=le(this.primaryColor),this.secondaryTextColor=le(this.secondaryColor),this.tertiaryTextColor=le(this.tertiaryColor),this.lineColor=le(this.background),this.textColor=le(this.background),this.mainBkg="#1f2020",this.secondBkg="calculated",this.mainContrastColor="lightgrey",this.darkTextColor=ge(le("#323D47"),10),this.lineColor="calculated",this.border1="#81B1DB",this.border2=co(255,255,255,.25),this.arrowheadColor="calculated",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.labelBackground="#181818",this.textColor="#ccc",this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="#F9FFFE",this.edgeLabelBackground="calculated",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="calculated",this.actorLineColor="calculated",this.signalColor="calculated",this.signalTextColor="calculated",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="calculated",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="#fff5ad",this.noteTextColor="calculated",this.activationBorderColor="calculated",this.activationBkgColor="calculated",this.sequenceNumberColor="black",this.sectionBkgColor=be("#EAE8D9",30),this.altSectionBkgColor="calculated",this.sectionBkgColor2="#EAE8D9",this.excludeBkgColor=be(this.sectionBkgColor,10),this.taskBorderColor=co(255,255,255,70),this.taskBkgColor="calculated",this.taskTextColor="calculated",this.taskTextLightColor="calculated",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor=co(255,255,255,50),this.activeTaskBkgColor="#81B1DB",this.gridColor="calculated",this.doneTaskBkgColor="calculated",this.doneTaskBorderColor="grey",this.critBorderColor="#E83737",this.critBkgColor="#E83737",this.taskTextDarkColor="calculated",this.todayLineColor="#DB5757",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.labelColor="calculated",this.errorBkgColor="#a44141",this.errorTextColor="#ddd"}updateColors(){var t,n,r,i,o,s,a,l,c,u,h;this.secondBkg=ge(this.mainBkg,16),this.lineColor=this.mainContrastColor,this.arrowheadColor=this.mainContrastColor,this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.edgeLabelBackground=ge(this.labelBackground,25),this.actorBorder=this.border1,this.actorBkg=this.mainBkg,this.actorTextColor=this.mainContrastColor,this.actorLineColor=this.mainContrastColor,this.signalColor=this.mainContrastColor,this.signalTextColor=this.mainContrastColor,this.labelBoxBkgColor=this.actorBkg,this.labelBoxBorderColor=this.actorBorder,this.labelTextColor=this.mainContrastColor,this.loopTextColor=this.mainContrastColor,this.noteBorderColor=this.secondaryBorderColor,this.noteBkgColor=this.secondBkg,this.noteTextColor=this.secondaryTextColor,this.activationBorderColor=this.border1,this.activationBkgColor=this.secondBkg,this.altSectionBkgColor=this.background,this.taskBkgColor=ge(this.mainBkg,23),this.taskTextColor=this.darkTextColor,this.taskTextLightColor=this.mainContrastColor,this.taskTextOutsideColor=this.taskTextLightColor,this.gridColor=this.mainContrastColor,this.doneTaskBkgColor=this.mainContrastColor,this.taskTextDarkColor=this.darkTextColor,this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#555",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.primaryBorderColor,this.specialStateColor="#f4f4f4",this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=D(this.primaryColor,{h:64}),this.fillType3=D(this.secondaryColor,{h:64}),this.fillType4=D(this.primaryColor,{h:-64}),this.fillType5=D(this.secondaryColor,{h:-64}),this.fillType6=D(this.primaryColor,{h:128}),this.fillType7=D(this.secondaryColor,{h:128}),this.cScale1=this.cScale1||"#0b0000",this.cScale2=this.cScale2||"#4d1037",this.cScale3=this.cScale3||"#3f5258",this.cScale4=this.cScale4||"#4f2f1b",this.cScale5=this.cScale5||"#6e0a0a",this.cScale6=this.cScale6||"#3b0048",this.cScale7=this.cScale7||"#995a01",this.cScale8=this.cScale8||"#154706",this.cScale9=this.cScale9||"#161722",this.cScale10=this.cScale10||"#00296f",this.cScale11=this.cScale11||"#01629c",this.cScale12=this.cScale12||"#010029",this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||D(this.primaryColor,{h:30}),this.cScale4=this.cScale4||D(this.primaryColor,{h:60}),this.cScale5=this.cScale5||D(this.primaryColor,{h:90}),this.cScale6=this.cScale6||D(this.primaryColor,{h:120}),this.cScale7=this.cScale7||D(this.primaryColor,{h:150}),this.cScale8=this.cScale8||D(this.primaryColor,{h:210}),this.cScale9=this.cScale9||D(this.primaryColor,{h:270}),this.cScale10=this.cScale10||D(this.primaryColor,{h:300}),this.cScale11=this.cScale11||D(this.primaryColor,{h:330});for(let d=0;d<this.THEME_COLOR_LIMIT;d++)this["cScaleInv"+d]=this["cScaleInv"+d]||le(this["cScale"+d]);for(let d=0;d<this.THEME_COLOR_LIMIT;d++)this["cScalePeer"+d]=this["cScalePeer"+d]||ge(this["cScale"+d],10);for(let d=0;d<5;d++)this["surface"+d]=this["surface"+d]||D(this.mainBkg,{h:30,s:-30,l:-(-10+d*4)}),this["surfacePeer"+d]=this["surfacePeer"+d]||D(this.mainBkg,{h:30,s:-30,l:-(-7+d*4)});this.scaleLabelColor=this.scaleLabelColor||(this.darkMode?"black":this.labelTextColor);for(let d=0;d<this.THEME_COLOR_LIMIT;d++)this["cScaleLabel"+d]=this["cScaleLabel"+d]||this.scaleLabelColor;for(let d=0;d<this.THEME_COLOR_LIMIT;d++)this["pie"+d]=this["cScale"+d];this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||D(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||D(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||D(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||D(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||D(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||D(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Ho(this.quadrant1Fill)?ge(this.quadrant1Fill):be(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((t=this.xyChart)==null?void 0:t.backgroundColor)||this.background,titleColor:((n=this.xyChart)==null?void 0:n.titleColor)||this.primaryTextColor,xAxisTitleColor:((r=this.xyChart)==null?void 0:r.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((i=this.xyChart)==null?void 0:i.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((o=this.xyChart)==null?void 0:o.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((s=this.xyChart)==null?void 0:s.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((a=this.xyChart)==null?void 0:a.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((l=this.xyChart)==null?void 0:l.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((c=this.xyChart)==null?void 0:c.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((u=this.xyChart)==null?void 0:u.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((h=this.xyChart)==null?void 0:h.plotColorPalette)||"#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"},this.classText=this.primaryTextColor,this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||(this.darkMode?be(this.secondaryColor,30):this.secondaryColor),this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=ge(this.secondaryColor,20),this.git1=ge(this.pie2||this.secondaryColor,20),this.git2=ge(this.pie3||this.tertiaryColor,20),this.git3=ge(this.pie4||D(this.primaryColor,{h:-30}),20),this.git4=ge(this.pie5||D(this.primaryColor,{h:-60}),20),this.git5=ge(this.pie6||D(this.primaryColor,{h:-90}),10),this.git6=ge(this.pie7||D(this.primaryColor,{h:60}),10),this.git7=ge(this.pie8||D(this.primaryColor,{h:120}),20),this.gitInv0=this.gitInv0||le(this.git0),this.gitInv1=this.gitInv1||le(this.git1),this.gitInv2=this.gitInv2||le(this.git2),this.gitInv3=this.gitInv3||le(this.git3),this.gitInv4=this.gitInv4||le(this.git4),this.gitInv5=this.gitInv5||le(this.git5),this.gitInv6=this.gitInv6||le(this.git6),this.gitInv7=this.gitInv7||le(this.git7),this.gitBranchLabel0=this.gitBranchLabel0||le(this.labelTextColor),this.gitBranchLabel1=this.gitBranchLabel1||this.labelTextColor,this.gitBranchLabel2=this.gitBranchLabel2||this.labelTextColor,this.gitBranchLabel3=this.gitBranchLabel3||le(this.labelTextColor),this.gitBranchLabel4=this.gitBranchLabel4||this.labelTextColor,this.gitBranchLabel5=this.gitBranchLabel5||this.labelTextColor,this.gitBranchLabel6=this.gitBranchLabel6||this.labelTextColor,this.gitBranchLabel7=this.gitBranchLabel7||this.labelTextColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||ge(this.background,12),this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||ge(this.background,2)}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(r=>{this[r]=t[r]}),this.updateColors(),n.forEach(r=>{this[r]=t[r]})}};const r3=e=>{const t=new n3;return t.calculate(e),t};let i3=class{constructor(){this.background="#f4f4f4",this.primaryColor="#ECECFF",this.secondaryColor=D(this.primaryColor,{h:120}),this.secondaryColor="#ffffde",this.tertiaryColor=D(this.primaryColor,{h:-160}),this.primaryBorderColor=Et(this.primaryColor,this.darkMode),this.secondaryBorderColor=Et(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=Et(this.tertiaryColor,this.darkMode),this.primaryTextColor=le(this.primaryColor),this.secondaryTextColor=le(this.secondaryColor),this.tertiaryTextColor=le(this.tertiaryColor),this.lineColor=le(this.background),this.textColor=le(this.background),this.background="white",this.mainBkg="#ECECFF",this.secondBkg="#ffffde",this.lineColor="#333333",this.border1="#9370DB",this.border2="#aaaa33",this.arrowheadColor="#333333",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.labelBackground="#e8e8e8",this.textColor="#333",this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="calculated",this.edgeLabelBackground="calculated",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="black",this.actorLineColor="grey",this.signalColor="calculated",this.signalTextColor="calculated",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="calculated",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="#fff5ad",this.noteTextColor="calculated",this.activationBorderColor="#666",this.activationBkgColor="#f4f4f4",this.sequenceNumberColor="white",this.sectionBkgColor="calculated",this.altSectionBkgColor="calculated",this.sectionBkgColor2="calculated",this.excludeBkgColor="#eeeeee",this.taskBorderColor="calculated",this.taskBkgColor="calculated",this.taskTextLightColor="calculated",this.taskTextColor=this.taskTextLightColor,this.taskTextDarkColor="calculated",this.taskTextOutsideColor=this.taskTextDarkColor,this.taskTextClickableColor="calculated",this.activeTaskBorderColor="calculated",this.activeTaskBkgColor="calculated",this.gridColor="calculated",this.doneTaskBkgColor="calculated",this.doneTaskBorderColor="calculated",this.critBorderColor="calculated",this.critBkgColor="calculated",this.todayLineColor="calculated",this.sectionBkgColor=co(102,102,255,.49),this.altSectionBkgColor="white",this.sectionBkgColor2="#fff400",this.taskBorderColor="#534fbc",this.taskBkgColor="#8a90dd",this.taskTextLightColor="white",this.taskTextColor="calculated",this.taskTextDarkColor="black",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor="#534fbc",this.activeTaskBkgColor="#bfc7ff",this.gridColor="lightgrey",this.doneTaskBkgColor="lightgrey",this.doneTaskBorderColor="grey",this.critBorderColor="#ff8888",this.critBkgColor="red",this.todayLineColor="red",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.labelColor="black",this.errorBkgColor="#552222",this.errorTextColor="#552222",this.updateColors()}updateColors(){var t,n,r,i,o,s,a,l,c,u,h;this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||D(this.primaryColor,{h:30}),this.cScale4=this.cScale4||D(this.primaryColor,{h:60}),this.cScale5=this.cScale5||D(this.primaryColor,{h:90}),this.cScale6=this.cScale6||D(this.primaryColor,{h:120}),this.cScale7=this.cScale7||D(this.primaryColor,{h:150}),this.cScale8=this.cScale8||D(this.primaryColor,{h:210}),this.cScale9=this.cScale9||D(this.primaryColor,{h:270}),this.cScale10=this.cScale10||D(this.primaryColor,{h:300}),this.cScale11=this.cScale11||D(this.primaryColor,{h:330}),this.cScalePeer1=this.cScalePeer1||be(this.secondaryColor,45),this.cScalePeer2=this.cScalePeer2||be(this.tertiaryColor,40);for(let d=0;d<this.THEME_COLOR_LIMIT;d++)this["cScale"+d]=be(this["cScale"+d],10),this["cScalePeer"+d]=this["cScalePeer"+d]||be(this["cScale"+d],25);for(let d=0;d<this.THEME_COLOR_LIMIT;d++)this["cScaleInv"+d]=this["cScaleInv"+d]||D(this["cScale"+d],{h:180});for(let d=0;d<5;d++)this["surface"+d]=this["surface"+d]||D(this.mainBkg,{h:30,l:-(5+d*5)}),this["surfacePeer"+d]=this["surfacePeer"+d]||D(this.mainBkg,{h:30,l:-(7+d*5)});if(this.scaleLabelColor=this.scaleLabelColor!=="calculated"&&this.scaleLabelColor?this.scaleLabelColor:this.labelTextColor,this.labelTextColor!=="calculated"){this.cScaleLabel0=this.cScaleLabel0||le(this.labelTextColor),this.cScaleLabel3=this.cScaleLabel3||le(this.labelTextColor);for(let d=0;d<this.THEME_COLOR_LIMIT;d++)this["cScaleLabel"+d]=this["cScaleLabel"+d]||this.labelTextColor}this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.titleColor=this.textColor,this.edgeLabelBackground=this.labelBackground,this.actorBorder=ge(this.border1,23),this.actorBkg=this.mainBkg,this.labelBoxBkgColor=this.actorBkg,this.signalColor=this.textColor,this.signalTextColor=this.textColor,this.labelBoxBorderColor=this.actorBorder,this.labelTextColor=this.actorTextColor,this.loopTextColor=this.actorTextColor,this.noteBorderColor=this.border2,this.noteTextColor=this.actorTextColor,this.taskTextColor=this.taskTextLightColor,this.taskTextOutsideColor=this.taskTextDarkColor,this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#f0f0f0",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.nodeBorder,this.specialStateColor=this.lineColor,this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.transitionColor=this.transitionColor||this.lineColor,this.classText=this.primaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=D(this.primaryColor,{h:64}),this.fillType3=D(this.secondaryColor,{h:64}),this.fillType4=D(this.primaryColor,{h:-64}),this.fillType5=D(this.secondaryColor,{h:-64}),this.fillType6=D(this.primaryColor,{h:128}),this.fillType7=D(this.secondaryColor,{h:128}),this.pie1=this.pie1||this.primaryColor,this.pie2=this.pie2||this.secondaryColor,this.pie3=this.pie3||D(this.tertiaryColor,{l:-40}),this.pie4=this.pie4||D(this.primaryColor,{l:-10}),this.pie5=this.pie5||D(this.secondaryColor,{l:-30}),this.pie6=this.pie6||D(this.tertiaryColor,{l:-20}),this.pie7=this.pie7||D(this.primaryColor,{h:60,l:-20}),this.pie8=this.pie8||D(this.primaryColor,{h:-60,l:-40}),this.pie9=this.pie9||D(this.primaryColor,{h:120,l:-40}),this.pie10=this.pie10||D(this.primaryColor,{h:60,l:-40}),this.pie11=this.pie11||D(this.primaryColor,{h:-90,l:-40}),this.pie12=this.pie12||D(this.primaryColor,{h:120,l:-30}),this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||D(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||D(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||D(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||D(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||D(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||D(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Ho(this.quadrant1Fill)?ge(this.quadrant1Fill):be(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((t=this.xyChart)==null?void 0:t.backgroundColor)||this.background,titleColor:((n=this.xyChart)==null?void 0:n.titleColor)||this.primaryTextColor,xAxisTitleColor:((r=this.xyChart)==null?void 0:r.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((i=this.xyChart)==null?void 0:i.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((o=this.xyChart)==null?void 0:o.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((s=this.xyChart)==null?void 0:s.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((a=this.xyChart)==null?void 0:a.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((l=this.xyChart)==null?void 0:l.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((c=this.xyChart)==null?void 0:c.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((u=this.xyChart)==null?void 0:u.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((h=this.xyChart)==null?void 0:h.plotColorPalette)||"#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||this.labelBackground,this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=this.git0||this.primaryColor,this.git1=this.git1||this.secondaryColor,this.git2=this.git2||this.tertiaryColor,this.git3=this.git3||D(this.primaryColor,{h:-30}),this.git4=this.git4||D(this.primaryColor,{h:-60}),this.git5=this.git5||D(this.primaryColor,{h:-90}),this.git6=this.git6||D(this.primaryColor,{h:60}),this.git7=this.git7||D(this.primaryColor,{h:120}),this.darkMode?(this.git0=ge(this.git0,25),this.git1=ge(this.git1,25),this.git2=ge(this.git2,25),this.git3=ge(this.git3,25),this.git4=ge(this.git4,25),this.git5=ge(this.git5,25),this.git6=ge(this.git6,25),this.git7=ge(this.git7,25)):(this.git0=be(this.git0,25),this.git1=be(this.git1,25),this.git2=be(this.git2,25),this.git3=be(this.git3,25),this.git4=be(this.git4,25),this.git5=be(this.git5,25),this.git6=be(this.git6,25),this.git7=be(this.git7,25)),this.gitInv0=this.gitInv0||be(le(this.git0),25),this.gitInv1=this.gitInv1||le(this.git1),this.gitInv2=this.gitInv2||le(this.git2),this.gitInv3=this.gitInv3||le(this.git3),this.gitInv4=this.gitInv4||le(this.git4),this.gitInv5=this.gitInv5||le(this.git5),this.gitInv6=this.gitInv6||le(this.git6),this.gitInv7=this.gitInv7||le(this.git7),this.gitBranchLabel0=this.gitBranchLabel0||le(this.labelTextColor),this.gitBranchLabel1=this.gitBranchLabel1||this.labelTextColor,this.gitBranchLabel2=this.gitBranchLabel2||this.labelTextColor,this.gitBranchLabel3=this.gitBranchLabel3||le(this.labelTextColor),this.gitBranchLabel4=this.gitBranchLabel4||this.labelTextColor,this.gitBranchLabel5=this.gitBranchLabel5||this.labelTextColor,this.gitBranchLabel6=this.gitBranchLabel6||this.labelTextColor,this.gitBranchLabel7=this.gitBranchLabel7||this.labelTextColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||Ra,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||Na}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(r=>{this[r]=t[r]}),this.updateColors(),n.forEach(r=>{this[r]=t[r]})}};const o3=e=>{const t=new i3;return t.calculate(e),t};let s3=class{constructor(){this.background="#f4f4f4",this.primaryColor="#cde498",this.secondaryColor="#cdffb2",this.background="white",this.mainBkg="#cde498",this.secondBkg="#cdffb2",this.lineColor="green",this.border1="#13540c",this.border2="#6eaa49",this.arrowheadColor="green",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.tertiaryColor=ge("#cde498",10),this.primaryBorderColor=Et(this.primaryColor,this.darkMode),this.secondaryBorderColor=Et(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=Et(this.tertiaryColor,this.darkMode),this.primaryTextColor=le(this.primaryColor),this.secondaryTextColor=le(this.secondaryColor),this.tertiaryTextColor=le(this.primaryColor),this.lineColor=le(this.background),this.textColor=le(this.background),this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="#333",this.edgeLabelBackground="#e8e8e8",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="black",this.actorLineColor="grey",this.signalColor="#333",this.signalTextColor="#333",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="#326932",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="#fff5ad",this.noteTextColor="calculated",this.activationBorderColor="#666",this.activationBkgColor="#f4f4f4",this.sequenceNumberColor="white",this.sectionBkgColor="#6eaa49",this.altSectionBkgColor="white",this.sectionBkgColor2="#6eaa49",this.excludeBkgColor="#eeeeee",this.taskBorderColor="calculated",this.taskBkgColor="#487e3a",this.taskTextLightColor="white",this.taskTextColor="calculated",this.taskTextDarkColor="black",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor="calculated",this.activeTaskBkgColor="calculated",this.gridColor="lightgrey",this.doneTaskBkgColor="lightgrey",this.doneTaskBorderColor="grey",this.critBorderColor="#ff8888",this.critBkgColor="red",this.todayLineColor="red",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.labelColor="black",this.errorBkgColor="#552222",this.errorTextColor="#552222"}updateColors(){var t,n,r,i,o,s,a,l,c,u,h;this.actorBorder=be(this.mainBkg,20),this.actorBkg=this.mainBkg,this.labelBoxBkgColor=this.actorBkg,this.labelTextColor=this.actorTextColor,this.loopTextColor=this.actorTextColor,this.noteBorderColor=this.border2,this.noteTextColor=this.actorTextColor,this.cScale0=this.cScale0||this.primaryColor,this.cScale1=this.cScale1||this.secondaryColor,this.cScale2=this.cScale2||this.tertiaryColor,this.cScale3=this.cScale3||D(this.primaryColor,{h:30}),this.cScale4=this.cScale4||D(this.primaryColor,{h:60}),this.cScale5=this.cScale5||D(this.primaryColor,{h:90}),this.cScale6=this.cScale6||D(this.primaryColor,{h:120}),this.cScale7=this.cScale7||D(this.primaryColor,{h:150}),this.cScale8=this.cScale8||D(this.primaryColor,{h:210}),this.cScale9=this.cScale9||D(this.primaryColor,{h:270}),this.cScale10=this.cScale10||D(this.primaryColor,{h:300}),this.cScale11=this.cScale11||D(this.primaryColor,{h:330}),this.cScalePeer1=this.cScalePeer1||be(this.secondaryColor,45),this.cScalePeer2=this.cScalePeer2||be(this.tertiaryColor,40);for(let d=0;d<this.THEME_COLOR_LIMIT;d++)this["cScale"+d]=be(this["cScale"+d],10),this["cScalePeer"+d]=this["cScalePeer"+d]||be(this["cScale"+d],25);for(let d=0;d<this.THEME_COLOR_LIMIT;d++)this["cScaleInv"+d]=this["cScaleInv"+d]||D(this["cScale"+d],{h:180});this.scaleLabelColor=this.scaleLabelColor!=="calculated"&&this.scaleLabelColor?this.scaleLabelColor:this.labelTextColor;for(let d=0;d<this.THEME_COLOR_LIMIT;d++)this["cScaleLabel"+d]=this["cScaleLabel"+d]||this.scaleLabelColor;for(let d=0;d<5;d++)this["surface"+d]=this["surface"+d]||D(this.mainBkg,{h:30,s:-30,l:-(5+d*5)}),this["surfacePeer"+d]=this["surfacePeer"+d]||D(this.mainBkg,{h:30,s:-30,l:-(8+d*5)});this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.taskBorderColor=this.border1,this.taskTextColor=this.taskTextLightColor,this.taskTextOutsideColor=this.taskTextDarkColor,this.activeTaskBorderColor=this.taskBorderColor,this.activeTaskBkgColor=this.mainBkg,this.transitionColor=this.transitionColor||this.lineColor,this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#f0f0f0",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.compositeBorder=this.compositeBorder||this.nodeBorder,this.innerEndBackground=this.primaryBorderColor,this.specialStateColor=this.lineColor,this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.transitionColor=this.transitionColor||this.lineColor,this.classText=this.primaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=D(this.primaryColor,{h:64}),this.fillType3=D(this.secondaryColor,{h:64}),this.fillType4=D(this.primaryColor,{h:-64}),this.fillType5=D(this.secondaryColor,{h:-64}),this.fillType6=D(this.primaryColor,{h:128}),this.fillType7=D(this.secondaryColor,{h:128}),this.pie1=this.pie1||this.primaryColor,this.pie2=this.pie2||this.secondaryColor,this.pie3=this.pie3||this.tertiaryColor,this.pie4=this.pie4||D(this.primaryColor,{l:-30}),this.pie5=this.pie5||D(this.secondaryColor,{l:-30}),this.pie6=this.pie6||D(this.tertiaryColor,{h:40,l:-40}),this.pie7=this.pie7||D(this.primaryColor,{h:60,l:-10}),this.pie8=this.pie8||D(this.primaryColor,{h:-60,l:-10}),this.pie9=this.pie9||D(this.primaryColor,{h:120,l:0}),this.pie10=this.pie10||D(this.primaryColor,{h:60,l:-50}),this.pie11=this.pie11||D(this.primaryColor,{h:-60,l:-50}),this.pie12=this.pie12||D(this.primaryColor,{h:120,l:-50}),this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||D(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||D(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||D(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||D(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||D(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||D(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Ho(this.quadrant1Fill)?ge(this.quadrant1Fill):be(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((t=this.xyChart)==null?void 0:t.backgroundColor)||this.background,titleColor:((n=this.xyChart)==null?void 0:n.titleColor)||this.primaryTextColor,xAxisTitleColor:((r=this.xyChart)==null?void 0:r.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((i=this.xyChart)==null?void 0:i.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((o=this.xyChart)==null?void 0:o.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((s=this.xyChart)==null?void 0:s.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((a=this.xyChart)==null?void 0:a.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((l=this.xyChart)==null?void 0:l.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((c=this.xyChart)==null?void 0:c.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((u=this.xyChart)==null?void 0:u.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((h=this.xyChart)==null?void 0:h.plotColorPalette)||"#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||this.edgeLabelBackground,this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=this.git0||this.primaryColor,this.git1=this.git1||this.secondaryColor,this.git2=this.git2||this.tertiaryColor,this.git3=this.git3||D(this.primaryColor,{h:-30}),this.git4=this.git4||D(this.primaryColor,{h:-60}),this.git5=this.git5||D(this.primaryColor,{h:-90}),this.git6=this.git6||D(this.primaryColor,{h:60}),this.git7=this.git7||D(this.primaryColor,{h:120}),this.darkMode?(this.git0=ge(this.git0,25),this.git1=ge(this.git1,25),this.git2=ge(this.git2,25),this.git3=ge(this.git3,25),this.git4=ge(this.git4,25),this.git5=ge(this.git5,25),this.git6=ge(this.git6,25),this.git7=ge(this.git7,25)):(this.git0=be(this.git0,25),this.git1=be(this.git1,25),this.git2=be(this.git2,25),this.git3=be(this.git3,25),this.git4=be(this.git4,25),this.git5=be(this.git5,25),this.git6=be(this.git6,25),this.git7=be(this.git7,25)),this.gitInv0=this.gitInv0||le(this.git0),this.gitInv1=this.gitInv1||le(this.git1),this.gitInv2=this.gitInv2||le(this.git2),this.gitInv3=this.gitInv3||le(this.git3),this.gitInv4=this.gitInv4||le(this.git4),this.gitInv5=this.gitInv5||le(this.git5),this.gitInv6=this.gitInv6||le(this.git6),this.gitInv7=this.gitInv7||le(this.git7),this.gitBranchLabel0=this.gitBranchLabel0||le(this.labelTextColor),this.gitBranchLabel1=this.gitBranchLabel1||this.labelTextColor,this.gitBranchLabel2=this.gitBranchLabel2||this.labelTextColor,this.gitBranchLabel3=this.gitBranchLabel3||le(this.labelTextColor),this.gitBranchLabel4=this.gitBranchLabel4||this.labelTextColor,this.gitBranchLabel5=this.gitBranchLabel5||this.labelTextColor,this.gitBranchLabel6=this.gitBranchLabel6||this.labelTextColor,this.gitBranchLabel7=this.gitBranchLabel7||this.labelTextColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||Ra,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||Na}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(r=>{this[r]=t[r]}),this.updateColors(),n.forEach(r=>{this[r]=t[r]})}};const a3=e=>{const t=new s3;return t.calculate(e),t};class l3{constructor(){this.primaryColor="#eee",this.contrast="#707070",this.secondaryColor=ge(this.contrast,55),this.background="#ffffff",this.tertiaryColor=D(this.primaryColor,{h:-160}),this.primaryBorderColor=Et(this.primaryColor,this.darkMode),this.secondaryBorderColor=Et(this.secondaryColor,this.darkMode),this.tertiaryBorderColor=Et(this.tertiaryColor,this.darkMode),this.primaryTextColor=le(this.primaryColor),this.secondaryTextColor=le(this.secondaryColor),this.tertiaryTextColor=le(this.tertiaryColor),this.lineColor=le(this.background),this.textColor=le(this.background),this.mainBkg="#eee",this.secondBkg="calculated",this.lineColor="#666",this.border1="#999",this.border2="calculated",this.note="#ffa",this.text="#333",this.critical="#d42",this.done="#bbb",this.arrowheadColor="#333333",this.fontFamily='"trebuchet ms", verdana, arial, sans-serif',this.fontSize="16px",this.THEME_COLOR_LIMIT=12,this.nodeBkg="calculated",this.nodeBorder="calculated",this.clusterBkg="calculated",this.clusterBorder="calculated",this.defaultLinkColor="calculated",this.titleColor="calculated",this.edgeLabelBackground="white",this.actorBorder="calculated",this.actorBkg="calculated",this.actorTextColor="calculated",this.actorLineColor="calculated",this.signalColor="calculated",this.signalTextColor="calculated",this.labelBoxBkgColor="calculated",this.labelBoxBorderColor="calculated",this.labelTextColor="calculated",this.loopTextColor="calculated",this.noteBorderColor="calculated",this.noteBkgColor="calculated",this.noteTextColor="calculated",this.activationBorderColor="#666",this.activationBkgColor="#f4f4f4",this.sequenceNumberColor="white",this.sectionBkgColor="calculated",this.altSectionBkgColor="white",this.sectionBkgColor2="calculated",this.excludeBkgColor="#eeeeee",this.taskBorderColor="calculated",this.taskBkgColor="calculated",this.taskTextLightColor="white",this.taskTextColor="calculated",this.taskTextDarkColor="calculated",this.taskTextOutsideColor="calculated",this.taskTextClickableColor="#003163",this.activeTaskBorderColor="calculated",this.activeTaskBkgColor="calculated",this.gridColor="calculated",this.doneTaskBkgColor="calculated",this.doneTaskBorderColor="calculated",this.critBkgColor="calculated",this.critBorderColor="calculated",this.todayLineColor="calculated",this.personBorder=this.primaryBorderColor,this.personBkg=this.mainBkg,this.labelColor="black",this.errorBkgColor="#552222",this.errorTextColor="#552222"}updateColors(){var t,n,r,i,o,s,a,l,c,u,h;this.secondBkg=ge(this.contrast,55),this.border2=this.contrast,this.actorBorder=ge(this.border1,23),this.actorBkg=this.mainBkg,this.actorTextColor=this.text,this.actorLineColor=this.lineColor,this.signalColor=this.text,this.signalTextColor=this.text,this.labelBoxBkgColor=this.actorBkg,this.labelBoxBorderColor=this.actorBorder,this.labelTextColor=this.text,this.loopTextColor=this.text,this.noteBorderColor="#999",this.noteBkgColor="#666",this.noteTextColor="#fff",this.cScale0=this.cScale0||"#555",this.cScale1=this.cScale1||"#F4F4F4",this.cScale2=this.cScale2||"#555",this.cScale3=this.cScale3||"#BBB",this.cScale4=this.cScale4||"#777",this.cScale5=this.cScale5||"#999",this.cScale6=this.cScale6||"#DDD",this.cScale7=this.cScale7||"#FFF",this.cScale8=this.cScale8||"#DDD",this.cScale9=this.cScale9||"#BBB",this.cScale10=this.cScale10||"#999",this.cScale11=this.cScale11||"#777";for(let d=0;d<this.THEME_COLOR_LIMIT;d++)this["cScaleInv"+d]=this["cScaleInv"+d]||le(this["cScale"+d]);for(let d=0;d<this.THEME_COLOR_LIMIT;d++)this.darkMode?this["cScalePeer"+d]=this["cScalePeer"+d]||ge(this["cScale"+d],10):this["cScalePeer"+d]=this["cScalePeer"+d]||be(this["cScale"+d],10);this.scaleLabelColor=this.scaleLabelColor||(this.darkMode?"black":this.labelTextColor),this.cScaleLabel0=this.cScaleLabel0||this.cScale1,this.cScaleLabel2=this.cScaleLabel2||this.cScale1;for(let d=0;d<this.THEME_COLOR_LIMIT;d++)this["cScaleLabel"+d]=this["cScaleLabel"+d]||this.scaleLabelColor;for(let d=0;d<5;d++)this["surface"+d]=this["surface"+d]||D(this.mainBkg,{l:-(5+d*5)}),this["surfacePeer"+d]=this["surfacePeer"+d]||D(this.mainBkg,{l:-(8+d*5)});this.nodeBkg=this.mainBkg,this.nodeBorder=this.border1,this.clusterBkg=this.secondBkg,this.clusterBorder=this.border2,this.defaultLinkColor=this.lineColor,this.titleColor=this.text,this.sectionBkgColor=ge(this.contrast,30),this.sectionBkgColor2=ge(this.contrast,30),this.taskBorderColor=be(this.contrast,10),this.taskBkgColor=this.contrast,this.taskTextColor=this.taskTextLightColor,this.taskTextDarkColor=this.text,this.taskTextOutsideColor=this.taskTextDarkColor,this.activeTaskBorderColor=this.taskBorderColor,this.activeTaskBkgColor=this.mainBkg,this.gridColor=ge(this.border1,30),this.doneTaskBkgColor=this.done,this.doneTaskBorderColor=this.lineColor,this.critBkgColor=this.critical,this.critBorderColor=be(this.critBkgColor,10),this.todayLineColor=this.critBkgColor,this.transitionColor=this.transitionColor||"#000",this.transitionLabelColor=this.transitionLabelColor||this.textColor,this.stateLabelColor=this.stateLabelColor||this.stateBkg||this.primaryTextColor,this.stateBkg=this.stateBkg||this.mainBkg,this.labelBackgroundColor=this.labelBackgroundColor||this.stateBkg,this.compositeBackground=this.compositeBackground||this.background||this.tertiaryColor,this.altBackground=this.altBackground||"#f4f4f4",this.compositeTitleBackground=this.compositeTitleBackground||this.mainBkg,this.stateBorder=this.stateBorder||"#000",this.innerEndBackground=this.primaryBorderColor,this.specialStateColor="#222",this.errorBkgColor=this.errorBkgColor||this.tertiaryColor,this.errorTextColor=this.errorTextColor||this.tertiaryTextColor,this.classText=this.primaryTextColor,this.fillType0=this.primaryColor,this.fillType1=this.secondaryColor,this.fillType2=D(this.primaryColor,{h:64}),this.fillType3=D(this.secondaryColor,{h:64}),this.fillType4=D(this.primaryColor,{h:-64}),this.fillType5=D(this.secondaryColor,{h:-64}),this.fillType6=D(this.primaryColor,{h:128}),this.fillType7=D(this.secondaryColor,{h:128});for(let d=0;d<this.THEME_COLOR_LIMIT;d++)this["pie"+d]=this["cScale"+d];this.pie12=this.pie0,this.pieTitleTextSize=this.pieTitleTextSize||"25px",this.pieTitleTextColor=this.pieTitleTextColor||this.taskTextDarkColor,this.pieSectionTextSize=this.pieSectionTextSize||"17px",this.pieSectionTextColor=this.pieSectionTextColor||this.textColor,this.pieLegendTextSize=this.pieLegendTextSize||"17px",this.pieLegendTextColor=this.pieLegendTextColor||this.taskTextDarkColor,this.pieStrokeColor=this.pieStrokeColor||"black",this.pieStrokeWidth=this.pieStrokeWidth||"2px",this.pieOuterStrokeWidth=this.pieOuterStrokeWidth||"2px",this.pieOuterStrokeColor=this.pieOuterStrokeColor||"black",this.pieOpacity=this.pieOpacity||"0.7",this.quadrant1Fill=this.quadrant1Fill||this.primaryColor,this.quadrant2Fill=this.quadrant2Fill||D(this.primaryColor,{r:5,g:5,b:5}),this.quadrant3Fill=this.quadrant3Fill||D(this.primaryColor,{r:10,g:10,b:10}),this.quadrant4Fill=this.quadrant4Fill||D(this.primaryColor,{r:15,g:15,b:15}),this.quadrant1TextFill=this.quadrant1TextFill||this.primaryTextColor,this.quadrant2TextFill=this.quadrant2TextFill||D(this.primaryTextColor,{r:-5,g:-5,b:-5}),this.quadrant3TextFill=this.quadrant3TextFill||D(this.primaryTextColor,{r:-10,g:-10,b:-10}),this.quadrant4TextFill=this.quadrant4TextFill||D(this.primaryTextColor,{r:-15,g:-15,b:-15}),this.quadrantPointFill=this.quadrantPointFill||Ho(this.quadrant1Fill)?ge(this.quadrant1Fill):be(this.quadrant1Fill),this.quadrantPointTextFill=this.quadrantPointTextFill||this.primaryTextColor,this.quadrantXAxisTextFill=this.quadrantXAxisTextFill||this.primaryTextColor,this.quadrantYAxisTextFill=this.quadrantYAxisTextFill||this.primaryTextColor,this.quadrantInternalBorderStrokeFill=this.quadrantInternalBorderStrokeFill||this.primaryBorderColor,this.quadrantExternalBorderStrokeFill=this.quadrantExternalBorderStrokeFill||this.primaryBorderColor,this.quadrantTitleFill=this.quadrantTitleFill||this.primaryTextColor,this.xyChart={backgroundColor:((t=this.xyChart)==null?void 0:t.backgroundColor)||this.background,titleColor:((n=this.xyChart)==null?void 0:n.titleColor)||this.primaryTextColor,xAxisTitleColor:((r=this.xyChart)==null?void 0:r.xAxisTitleColor)||this.primaryTextColor,xAxisLabelColor:((i=this.xyChart)==null?void 0:i.xAxisLabelColor)||this.primaryTextColor,xAxisTickColor:((o=this.xyChart)==null?void 0:o.xAxisTickColor)||this.primaryTextColor,xAxisLineColor:((s=this.xyChart)==null?void 0:s.xAxisLineColor)||this.primaryTextColor,yAxisTitleColor:((a=this.xyChart)==null?void 0:a.yAxisTitleColor)||this.primaryTextColor,yAxisLabelColor:((l=this.xyChart)==null?void 0:l.yAxisLabelColor)||this.primaryTextColor,yAxisTickColor:((c=this.xyChart)==null?void 0:c.yAxisTickColor)||this.primaryTextColor,yAxisLineColor:((u=this.xyChart)==null?void 0:u.yAxisLineColor)||this.primaryTextColor,plotColorPalette:((h=this.xyChart)==null?void 0:h.plotColorPalette)||"#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"},this.requirementBackground=this.requirementBackground||this.primaryColor,this.requirementBorderColor=this.requirementBorderColor||this.primaryBorderColor,this.requirementBorderSize=this.requirementBorderSize||"1",this.requirementTextColor=this.requirementTextColor||this.primaryTextColor,this.relationColor=this.relationColor||this.lineColor,this.relationLabelBackground=this.relationLabelBackground||this.edgeLabelBackground,this.relationLabelColor=this.relationLabelColor||this.actorTextColor,this.git0=be(this.pie1,25)||this.primaryColor,this.git1=this.pie2||this.secondaryColor,this.git2=this.pie3||this.tertiaryColor,this.git3=this.pie4||D(this.primaryColor,{h:-30}),this.git4=this.pie5||D(this.primaryColor,{h:-60}),this.git5=this.pie6||D(this.primaryColor,{h:-90}),this.git6=this.pie7||D(this.primaryColor,{h:60}),this.git7=this.pie8||D(this.primaryColor,{h:120}),this.gitInv0=this.gitInv0||le(this.git0),this.gitInv1=this.gitInv1||le(this.git1),this.gitInv2=this.gitInv2||le(this.git2),this.gitInv3=this.gitInv3||le(this.git3),this.gitInv4=this.gitInv4||le(this.git4),this.gitInv5=this.gitInv5||le(this.git5),this.gitInv6=this.gitInv6||le(this.git6),this.gitInv7=this.gitInv7||le(this.git7),this.branchLabelColor=this.branchLabelColor||this.labelTextColor,this.gitBranchLabel0=this.branchLabelColor,this.gitBranchLabel1="white",this.gitBranchLabel2=this.branchLabelColor,this.gitBranchLabel3="white",this.gitBranchLabel4=this.branchLabelColor,this.gitBranchLabel5=this.branchLabelColor,this.gitBranchLabel6=this.branchLabelColor,this.gitBranchLabel7=this.branchLabelColor,this.tagLabelColor=this.tagLabelColor||this.primaryTextColor,this.tagLabelBackground=this.tagLabelBackground||this.primaryColor,this.tagLabelBorder=this.tagBorder||this.primaryBorderColor,this.tagLabelFontSize=this.tagLabelFontSize||"10px",this.commitLabelColor=this.commitLabelColor||this.secondaryTextColor,this.commitLabelBackground=this.commitLabelBackground||this.secondaryColor,this.commitLabelFontSize=this.commitLabelFontSize||"10px",this.attributeBackgroundColorOdd=this.attributeBackgroundColorOdd||Ra,this.attributeBackgroundColorEven=this.attributeBackgroundColorEven||Na}calculate(t){if(typeof t!="object"){this.updateColors();return}const n=Object.keys(t);n.forEach(r=>{this[r]=t[r]}),this.updateColors(),n.forEach(r=>{this[r]=t[r]})}}const c3=e=>{const t=new l3;return t.calculate(e),t},ur={base:{getThemeVariables:t3},dark:{getThemeVariables:r3},default:{getThemeVariables:o3},forest:{getThemeVariables:a3},neutral:{getThemeVariables:c3}},rr={flowchart:{useMaxWidth:!0,titleTopMargin:25,subGraphTitleMargin:{top:0,bottom:0},diagramPadding:8,htmlLabels:!0,nodeSpacing:50,rankSpacing:50,curve:"basis",padding:15,defaultRenderer:"dagre-wrapper",wrappingWidth:200},sequence:{useMaxWidth:!0,hideUnusedParticipants:!1,activationWidth:10,diagramMarginX:50,diagramMarginY:10,actorMargin:50,width:150,height:65,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,messageAlign:"center",mirrorActors:!0,forceMenus:!1,bottomMarginAdj:1,rightAngles:!1,showSequenceNumbers:!1,actorFontSize:14,actorFontFamily:'"Open Sans", sans-serif',actorFontWeight:400,noteFontSize:14,noteFontFamily:'"trebuchet ms", verdana, arial, sans-serif',noteFontWeight:400,noteAlign:"center",messageFontSize:16,messageFontFamily:'"trebuchet ms", verdana, arial, sans-serif',messageFontWeight:400,wrap:!1,wrapPadding:10,labelBoxWidth:50,labelBoxHeight:20},gantt:{useMaxWidth:!0,titleTopMargin:25,barHeight:20,barGap:4,topPadding:50,rightPadding:75,leftPadding:75,gridLineStartPadding:35,fontSize:11,sectionFontSize:11,numberSectionStyles:4,axisFormat:"%Y-%m-%d",topAxis:!1,displayMode:"",weekday:"sunday"},journey:{useMaxWidth:!0,diagramMarginX:50,diagramMarginY:10,leftMargin:150,width:150,height:50,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,messageAlign:"center",bottomMarginAdj:1,rightAngles:!1,taskFontSize:14,taskFontFamily:'"Open Sans", sans-serif',taskMargin:50,activationWidth:10,textPlacement:"fo",actorColours:["#8FBC8F","#7CFC00","#00FFFF","#20B2AA","#B0E0E6","#FFFFE0"],sectionFills:["#191970","#8B008B","#4B0082","#2F4F4F","#800000","#8B4513","#00008B"],sectionColours:["#fff"]},class:{useMaxWidth:!0,titleTopMargin:25,arrowMarkerAbsolute:!1,dividerMargin:10,padding:5,textHeight:10,defaultRenderer:"dagre-wrapper",htmlLabels:!1},state:{useMaxWidth:!0,titleTopMargin:25,dividerMargin:10,sizeUnit:5,padding:8,textHeight:10,titleShift:-15,noteMargin:10,forkWidth:70,forkHeight:7,miniPadding:2,fontSizeFactor:5.02,fontSize:24,labelHeight:16,edgeLengthFactor:"20",compositTitleSize:35,radius:5,defaultRenderer:"dagre-wrapper"},er:{useMaxWidth:!0,titleTopMargin:25,diagramPadding:20,layoutDirection:"TB",minEntityWidth:100,minEntityHeight:75,entityPadding:15,stroke:"gray",fill:"honeydew",fontSize:12},pie:{useMaxWidth:!0,textPosition:.75},quadrantChart:{useMaxWidth:!0,chartWidth:500,chartHeight:500,titleFontSize:20,titlePadding:10,quadrantPadding:5,xAxisLabelPadding:5,yAxisLabelPadding:5,xAxisLabelFontSize:16,yAxisLabelFontSize:16,quadrantLabelFontSize:16,quadrantTextTopPadding:5,pointTextPadding:5,pointLabelFontSize:12,pointRadius:5,xAxisPosition:"top",yAxisPosition:"left",quadrantInternalBorderStrokeWidth:1,quadrantExternalBorderStrokeWidth:2},xyChart:{useMaxWidth:!0,width:700,height:500,titleFontSize:20,titlePadding:10,showTitle:!0,xAxis:{$ref:"#/$defs/XYChartAxisConfig",showLabel:!0,labelFontSize:14,labelPadding:5,showTitle:!0,titleFontSize:16,titlePadding:5,showTick:!0,tickLength:5,tickWidth:2,showAxisLine:!0,axisLineWidth:2},yAxis:{$ref:"#/$defs/XYChartAxisConfig",showLabel:!0,labelFontSize:14,labelPadding:5,showTitle:!0,titleFontSize:16,titlePadding:5,showTick:!0,tickLength:5,tickWidth:2,showAxisLine:!0,axisLineWidth:2},chartOrientation:"vertical",plotReservedSpacePercent:50},requirement:{useMaxWidth:!0,rect_fill:"#f9f9f9",text_color:"#333",rect_border_size:"0.5px",rect_border_color:"#bbb",rect_min_width:200,rect_min_height:200,fontSize:14,rect_padding:10,line_height:20},mindmap:{useMaxWidth:!0,padding:10,maxNodeWidth:200},timeline:{useMaxWidth:!0,diagramMarginX:50,diagramMarginY:10,leftMargin:150,width:150,height:50,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,messageAlign:"center",bottomMarginAdj:1,rightAngles:!1,taskFontSize:14,taskFontFamily:'"Open Sans", sans-serif',taskMargin:50,activationWidth:10,textPlacement:"fo",actorColours:["#8FBC8F","#7CFC00","#00FFFF","#20B2AA","#B0E0E6","#FFFFE0"],sectionFills:["#191970","#8B008B","#4B0082","#2F4F4F","#800000","#8B4513","#00008B"],sectionColours:["#fff"],disableMulticolor:!1},gitGraph:{useMaxWidth:!0,titleTopMargin:25,diagramPadding:8,nodeLabel:{width:75,height:100,x:-25,y:0},mainBranchName:"main",mainBranchOrder:0,showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0,parallelCommits:!1,arrowMarkerAbsolute:!1},c4:{useMaxWidth:!0,diagramMarginX:50,diagramMarginY:10,c4ShapeMargin:50,c4ShapePadding:20,width:216,height:60,boxMargin:10,c4ShapeInRow:4,nextLinePaddingX:0,c4BoundaryInRow:2,personFontSize:14,personFontFamily:'"Open Sans", sans-serif',personFontWeight:"normal",external_personFontSize:14,external_personFontFamily:'"Open Sans", sans-serif',external_personFontWeight:"normal",systemFontSize:14,systemFontFamily:'"Open Sans", sans-serif',systemFontWeight:"normal",external_systemFontSize:14,external_systemFontFamily:'"Open Sans", sans-serif',external_systemFontWeight:"normal",system_dbFontSize:14,system_dbFontFamily:'"Open Sans", sans-serif',system_dbFontWeight:"normal",external_system_dbFontSize:14,external_system_dbFontFamily:'"Open Sans", sans-serif',external_system_dbFontWeight:"normal",system_queueFontSize:14,system_queueFontFamily:'"Open Sans", sans-serif',system_queueFontWeight:"normal",external_system_queueFontSize:14,external_system_queueFontFamily:'"Open Sans", sans-serif',external_system_queueFontWeight:"normal",boundaryFontSize:14,boundaryFontFamily:'"Open Sans", sans-serif',boundaryFontWeight:"normal",messageFontSize:12,messageFontFamily:'"Open Sans", sans-serif',messageFontWeight:"normal",containerFontSize:14,containerFontFamily:'"Open Sans", sans-serif',containerFontWeight:"normal",external_containerFontSize:14,external_containerFontFamily:'"Open Sans", sans-serif',external_containerFontWeight:"normal",container_dbFontSize:14,container_dbFontFamily:'"Open Sans", sans-serif',container_dbFontWeight:"normal",external_container_dbFontSize:14,external_container_dbFontFamily:'"Open Sans", sans-serif',external_container_dbFontWeight:"normal",container_queueFontSize:14,container_queueFontFamily:'"Open Sans", sans-serif',container_queueFontWeight:"normal",external_container_queueFontSize:14,external_container_queueFontFamily:'"Open Sans", sans-serif',external_container_queueFontWeight:"normal",componentFontSize:14,componentFontFamily:'"Open Sans", sans-serif',componentFontWeight:"normal",external_componentFontSize:14,external_componentFontFamily:'"Open Sans", sans-serif',external_componentFontWeight:"normal",component_dbFontSize:14,component_dbFontFamily:'"Open Sans", sans-serif',component_dbFontWeight:"normal",external_component_dbFontSize:14,external_component_dbFontFamily:'"Open Sans", sans-serif',external_component_dbFontWeight:"normal",component_queueFontSize:14,component_queueFontFamily:'"Open Sans", sans-serif',component_queueFontWeight:"normal",external_component_queueFontSize:14,external_component_queueFontFamily:'"Open Sans", sans-serif',external_component_queueFontWeight:"normal",wrap:!0,wrapPadding:10,person_bg_color:"#08427B",person_border_color:"#073B6F",external_person_bg_color:"#686868",external_person_border_color:"#8A8A8A",system_bg_color:"#1168BD",system_border_color:"#3C7FC0",system_db_bg_color:"#1168BD",system_db_border_color:"#3C7FC0",system_queue_bg_color:"#1168BD",system_queue_border_color:"#3C7FC0",external_system_bg_color:"#999999",external_system_border_color:"#8A8A8A",external_system_db_bg_color:"#999999",external_system_db_border_color:"#8A8A8A",external_system_queue_bg_color:"#999999",external_system_queue_border_color:"#8A8A8A",container_bg_color:"#438DD5",container_border_color:"#3C7FC0",container_db_bg_color:"#438DD5",container_db_border_color:"#3C7FC0",container_queue_bg_color:"#438DD5",container_queue_border_color:"#3C7FC0",external_container_bg_color:"#B3B3B3",external_container_border_color:"#A6A6A6",external_container_db_bg_color:"#B3B3B3",external_container_db_border_color:"#A6A6A6",external_container_queue_bg_color:"#B3B3B3",external_container_queue_border_color:"#A6A6A6",component_bg_color:"#85BBF0",component_border_color:"#78A8D8",component_db_bg_color:"#85BBF0",component_db_border_color:"#78A8D8",component_queue_bg_color:"#85BBF0",component_queue_border_color:"#78A8D8",external_component_bg_color:"#CCCCCC",external_component_border_color:"#BFBFBF",external_component_db_bg_color:"#CCCCCC",external_component_db_border_color:"#BFBFBF",external_component_queue_bg_color:"#CCCCCC",external_component_queue_border_color:"#BFBFBF"},sankey:{useMaxWidth:!0,width:600,height:400,linkColor:"gradient",nodeAlignment:"justify",showValues:!0,prefix:"",suffix:""},block:{useMaxWidth:!0,padding:8},theme:"default",maxTextSize:5e4,maxEdges:500,darkMode:!1,fontFamily:'"trebuchet ms", verdana, arial, sans-serif;',logLevel:5,securityLevel:"strict",startOnLoad:!0,arrowMarkerAbsolute:!1,secure:["secure","securityLevel","startOnLoad","maxTextSize","maxEdges"],legacyMathML:!1,deterministicIds:!1,fontSize:16},t0={...rr,deterministicIDSeed:void 0,themeCSS:void 0,themeVariables:ur.default.getThemeVariables(),sequence:{...rr.sequence,messageFont:function(){return{fontFamily:this.messageFontFamily,fontSize:this.messageFontSize,fontWeight:this.messageFontWeight}},noteFont:function(){return{fontFamily:this.noteFontFamily,fontSize:this.noteFontSize,fontWeight:this.noteFontWeight}},actorFont:function(){return{fontFamily:this.actorFontFamily,fontSize:this.actorFontSize,fontWeight:this.actorFontWeight}}},gantt:{...rr.gantt,tickInterval:void 0,useWidth:void 0},c4:{...rr.c4,useWidth:void 0,personFont:function(){return{fontFamily:this.personFontFamily,fontSize:this.personFontSize,fontWeight:this.personFontWeight}},external_personFont:function(){return{fontFamily:this.external_personFontFamily,fontSize:this.external_personFontSize,fontWeight:this.external_personFontWeight}},systemFont:function(){return{fontFamily:this.systemFontFamily,fontSize:this.systemFontSize,fontWeight:this.systemFontWeight}},external_systemFont:function(){return{fontFamily:this.external_systemFontFamily,fontSize:this.external_systemFontSize,fontWeight:this.external_systemFontWeight}},system_dbFont:function(){return{fontFamily:this.system_dbFontFamily,fontSize:this.system_dbFontSize,fontWeight:this.system_dbFontWeight}},external_system_dbFont:function(){return{fontFamily:this.external_system_dbFontFamily,fontSize:this.external_system_dbFontSize,fontWeight:this.external_system_dbFontWeight}},system_queueFont:function(){return{fontFamily:this.system_queueFontFamily,fontSize:this.system_queueFontSize,fontWeight:this.system_queueFontWeight}},external_system_queueFont:function(){return{fontFamily:this.external_system_queueFontFamily,fontSize:this.external_system_queueFontSize,fontWeight:this.external_system_queueFontWeight}},containerFont:function(){return{fontFamily:this.containerFontFamily,fontSize:this.containerFontSize,fontWeight:this.containerFontWeight}},external_containerFont:function(){return{fontFamily:this.external_containerFontFamily,fontSize:this.external_containerFontSize,fontWeight:this.external_containerFontWeight}},container_dbFont:function(){return{fontFamily:this.container_dbFontFamily,fontSize:this.container_dbFontSize,fontWeight:this.container_dbFontWeight}},external_container_dbFont:function(){return{fontFamily:this.external_container_dbFontFamily,fontSize:this.external_container_dbFontSize,fontWeight:this.external_container_dbFontWeight}},container_queueFont:function(){return{fontFamily:this.container_queueFontFamily,fontSize:this.container_queueFontSize,fontWeight:this.container_queueFontWeight}},external_container_queueFont:function(){return{fontFamily:this.external_container_queueFontFamily,fontSize:this.external_container_queueFontSize,fontWeight:this.external_container_queueFontWeight}},componentFont:function(){return{fontFamily:this.componentFontFamily,fontSize:this.componentFontSize,fontWeight:this.componentFontWeight}},external_componentFont:function(){return{fontFamily:this.external_componentFontFamily,fontSize:this.external_componentFontSize,fontWeight:this.external_componentFontWeight}},component_dbFont:function(){return{fontFamily:this.component_dbFontFamily,fontSize:this.component_dbFontSize,fontWeight:this.component_dbFontWeight}},external_component_dbFont:function(){return{fontFamily:this.external_component_dbFontFamily,fontSize:this.external_component_dbFontSize,fontWeight:this.external_component_dbFontWeight}},component_queueFont:function(){return{fontFamily:this.component_queueFontFamily,fontSize:this.component_queueFontSize,fontWeight:this.component_queueFontWeight}},external_component_queueFont:function(){return{fontFamily:this.external_component_queueFontFamily,fontSize:this.external_component_queueFontSize,fontWeight:this.external_component_queueFontWeight}},boundaryFont:function(){return{fontFamily:this.boundaryFontFamily,fontSize:this.boundaryFontSize,fontWeight:this.boundaryFontWeight}},messageFont:function(){return{fontFamily:this.messageFontFamily,fontSize:this.messageFontSize,fontWeight:this.messageFontWeight}}},pie:{...rr.pie,useWidth:984},xyChart:{...rr.xyChart,useWidth:void 0},requirement:{...rr.requirement,useWidth:void 0},gitGraph:{...rr.gitGraph,useMaxWidth:!1},sankey:{...rr.sankey,useMaxWidth:!1}},n0=(e,t="")=>Object.keys(e).reduce((n,r)=>Array.isArray(e[r])?n:typeof e[r]=="object"&&e[r]!==null?[...n,t+r,...n0(e[r],"")]:[...n,t+r],[]),u3=new Set(n0(t0,"")),d3=t0,na=e=>{if(ye.debug("sanitizeDirective called with",e),!(typeof e!="object"||e==null)){if(Array.isArray(e)){e.forEach(t=>na(t));return}for(const t of Object.keys(e)){if(ye.debug("Checking key",t),t.startsWith("__")||t.includes("proto")||t.includes("constr")||!u3.has(t)||e[t]==null){ye.debug("sanitize deleting key: ",t),delete e[t];continue}if(typeof e[t]=="object"){ye.debug("sanitizing object",t),na(e[t]);continue}const n=["themeCSS","fontFamily","altFontFamily"];for(const r of n)t.includes(r)&&(ye.debug("sanitizing css option",t),e[t]=h3(e[t]))}if(e.themeVariables)for(const t of Object.keys(e.themeVariables)){const n=e.themeVariables[t];n!=null&&n.match&&!n.match(/^[\d "#%(),.;A-Za-z]+$/)&&(e.themeVariables[t]="")}ye.debug("After sanitization",e)}},h3=e=>{let t=0,n=0;for(const r of e){if(t<n)return"{ /* ERROR: Unbalanced CSS */ }";r==="{"?t++:r==="}"&&n++}return t!==n?"{ /* ERROR: Unbalanced CSS */ }":e},r0=/^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s,uo=/%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi,p3=/\s*%%.*\n/gm;class i0 extends Error{constructor(t){super(t),this.name="UnknownDiagramError"}}const xi={},Da=function(e,t){e=e.replace(r0,"").replace(uo,"").replace(p3,`
`);for(const[n,{detector:r}]of Object.entries(xi))if(r(e,t))return n;throw new i0(`No diagram type detected matching given configuration for text: ${e}`)},o0=(...e)=>{for(const{id:t,detector:n,loader:r}of e)s0(t,n,r)},s0=(e,t,n)=>{xi[e]?ye.error(`Detector with key ${e} already exists`):xi[e]={detector:t,loader:n},ye.debug(`Detector with key ${e} added${n?" with loader":""}`)},f3=e=>xi[e].loader,vc=(e,t,{depth:n=2,clobber:r=!1}={})=>{const i={depth:n,clobber:r};return Array.isArray(t)&&!Array.isArray(e)?(t.forEach(o=>vc(e,o,i)),e):Array.isArray(t)&&Array.isArray(e)?(t.forEach(o=>{e.includes(o)||e.push(o)}),e):e===void 0||n<=0?e!=null&&typeof e=="object"&&typeof t=="object"?Object.assign(e,t):t:(t!==void 0&&typeof e=="object"&&typeof t=="object"&&Object.keys(t).forEach(o=>{typeof t[o]=="object"&&(e[o]===void 0||typeof e[o]=="object")?(e[o]===void 0&&(e[o]=Array.isArray(t[o])?[]:{}),e[o]=vc(e[o],t[o],{depth:n-1,clobber:r})):(r||typeof e[o]!="object"&&typeof t[o]!="object")&&(e[o]=t[o])}),e)},yt=vc;var m3=typeof global=="object"&&global&&global.Object===Object&&global;const a0=m3;var g3=typeof self=="object"&&self&&self.Object===Object&&self,v3=a0||g3||Function("return this")();const Qn=v3;var y3=Qn.Symbol;const ra=y3;var l0=Object.prototype,b3=l0.hasOwnProperty,_3=l0.toString,no=ra?ra.toStringTag:void 0;function C3(e){var t=b3.call(e,no),n=e[no];try{e[no]=void 0;var r=!0}catch{}var i=_3.call(e);return r&&(t?e[no]=n:delete e[no]),i}var k3=Object.prototype,w3=k3.toString;function S3(e){return w3.call(e)}var x3="[object Null]",T3="[object Undefined]",mh=ra?ra.toStringTag:void 0;function Ni(e){return e==null?e===void 0?T3:x3:mh&&mh in Object(e)?C3(e):S3(e)}function ai(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var E3="[object AsyncFunction]",A3="[object Function]",$3="[object GeneratorFunction]",P3="[object Proxy]";function _u(e){if(!ai(e))return!1;var t=Ni(e);return t==A3||t==$3||t==E3||t==P3}var L3=Qn["__core-js_shared__"];const El=L3;var gh=function(){var e=/[^.]+$/.exec(El&&El.keys&&El.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function M3(e){return!!gh&&gh in e}var I3=Function.prototype,B3=I3.toString;function li(e){if(e!=null){try{return B3.call(e)}catch{}try{return e+""}catch{}}return""}var O3=/[\\^$.*+?()[\]{}|]/g,F3=/^\[object .+?Constructor\]$/,R3=Function.prototype,N3=Object.prototype,D3=R3.toString,z3=N3.hasOwnProperty,V3=RegExp("^"+D3.call(z3).replace(O3,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function H3(e){if(!ai(e)||M3(e))return!1;var t=_u(e)?V3:F3;return t.test(li(e))}function q3(e,t){return e==null?void 0:e[t]}function ci(e,t){var n=q3(e,t);return H3(n)?n:void 0}var j3=ci(Object,"create");const Eo=j3;function G3(){this.__data__=Eo?Eo(null):{},this.size=0}function W3(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var U3="__lodash_hash_undefined__",Y3=Object.prototype,K3=Y3.hasOwnProperty;function X3(e){var t=this.__data__;if(Eo){var n=t[e];return n===U3?void 0:n}return K3.call(t,e)?t[e]:void 0}var Q3=Object.prototype,Z3=Q3.hasOwnProperty;function J3(e){var t=this.__data__;return Eo?t[e]!==void 0:Z3.call(t,e)}var eC="__lodash_hash_undefined__";function tC(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Eo&&t===void 0?eC:t,this}function ti(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ti.prototype.clear=G3;ti.prototype.delete=W3;ti.prototype.get=X3;ti.prototype.has=J3;ti.prototype.set=tC;function nC(){this.__data__=[],this.size=0}function za(e,t){return e===t||e!==e&&t!==t}function Va(e,t){for(var n=e.length;n--;)if(za(e[n][0],t))return n;return-1}var rC=Array.prototype,iC=rC.splice;function oC(e){var t=this.__data__,n=Va(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():iC.call(t,n,1),--this.size,!0}function sC(e){var t=this.__data__,n=Va(t,e);return n<0?void 0:t[n][1]}function aC(e){return Va(this.__data__,e)>-1}function lC(e,t){var n=this.__data__,r=Va(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function vr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vr.prototype.clear=nC;vr.prototype.delete=oC;vr.prototype.get=sC;vr.prototype.has=aC;vr.prototype.set=lC;var cC=ci(Qn,"Map");const Ao=cC;function uC(){this.size=0,this.__data__={hash:new ti,map:new(Ao||vr),string:new ti}}function dC(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Ha(e,t){var n=e.__data__;return dC(t)?n[typeof t=="string"?"string":"hash"]:n.map}function hC(e){var t=Ha(this,e).delete(e);return this.size-=t?1:0,t}function pC(e){return Ha(this,e).get(e)}function fC(e){return Ha(this,e).has(e)}function mC(e,t){var n=Ha(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Or(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Or.prototype.clear=uC;Or.prototype.delete=hC;Or.prototype.get=pC;Or.prototype.has=fC;Or.prototype.set=mC;var gC="Expected a function";function qo(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(gC);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(qo.Cache||Or),n}qo.Cache=Or;function vC(){this.__data__=new vr,this.size=0}function yC(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function bC(e){return this.__data__.get(e)}function _C(e){return this.__data__.has(e)}var CC=200;function kC(e,t){var n=this.__data__;if(n instanceof vr){var r=n.__data__;if(!Ao||r.length<CC-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Or(r)}return n.set(e,t),this.size=n.size,this}function Di(e){var t=this.__data__=new vr(e);this.size=t.size}Di.prototype.clear=vC;Di.prototype.delete=yC;Di.prototype.get=bC;Di.prototype.has=_C;Di.prototype.set=kC;var wC=function(){try{var e=ci(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ia=wC;function Cu(e,t,n){t=="__proto__"&&ia?ia(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function yc(e,t,n){(n!==void 0&&!za(e[t],n)||n===void 0&&!(t in e))&&Cu(e,t,n)}function SC(e){return function(t,n,r){for(var i=-1,o=Object(t),s=r(t),a=s.length;a--;){var l=s[e?a:++i];if(n(o[l],l,o)===!1)break}return t}}var xC=SC();const TC=xC;var c0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,vh=c0&&typeof module=="object"&&module&&!module.nodeType&&module,EC=vh&&vh.exports===c0,yh=EC?Qn.Buffer:void 0,bh=yh?yh.allocUnsafe:void 0;function AC(e,t){if(t)return e.slice();var n=e.length,r=bh?bh(n):new e.constructor(n);return e.copy(r),r}var $C=Qn.Uint8Array;const _h=$C;function PC(e){var t=new e.constructor(e.byteLength);return new _h(t).set(new _h(e)),t}function LC(e,t){var n=t?PC(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function MC(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}var Ch=Object.create,IC=function(){function e(){}return function(t){if(!ai(t))return{};if(Ch)return Ch(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const BC=IC;function u0(e,t){return function(n){return e(t(n))}}var OC=u0(Object.getPrototypeOf,Object);const d0=OC;var FC=Object.prototype;function qa(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||FC;return e===n}function RC(e){return typeof e.constructor=="function"&&!qa(e)?BC(d0(e)):{}}function jo(e){return e!=null&&typeof e=="object"}var NC="[object Arguments]";function kh(e){return jo(e)&&Ni(e)==NC}var h0=Object.prototype,DC=h0.hasOwnProperty,zC=h0.propertyIsEnumerable,VC=kh(function(){return arguments}())?kh:function(e){return jo(e)&&DC.call(e,"callee")&&!zC.call(e,"callee")};const oa=VC;var HC=Array.isArray;const sa=HC;var qC=9007199254740991;function p0(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=qC}function ja(e){return e!=null&&p0(e.length)&&!_u(e)}function jC(e){return jo(e)&&ja(e)}function GC(){return!1}var f0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,wh=f0&&typeof module=="object"&&module&&!module.nodeType&&module,WC=wh&&wh.exports===f0,Sh=WC?Qn.Buffer:void 0,UC=Sh?Sh.isBuffer:void 0,YC=UC||GC;const ku=YC;var KC="[object Object]",XC=Function.prototype,QC=Object.prototype,m0=XC.toString,ZC=QC.hasOwnProperty,JC=m0.call(Object);function e8(e){if(!jo(e)||Ni(e)!=KC)return!1;var t=d0(e);if(t===null)return!0;var n=ZC.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&m0.call(n)==JC}var t8="[object Arguments]",n8="[object Array]",r8="[object Boolean]",i8="[object Date]",o8="[object Error]",s8="[object Function]",a8="[object Map]",l8="[object Number]",c8="[object Object]",u8="[object RegExp]",d8="[object Set]",h8="[object String]",p8="[object WeakMap]",f8="[object ArrayBuffer]",m8="[object DataView]",g8="[object Float32Array]",v8="[object Float64Array]",y8="[object Int8Array]",b8="[object Int16Array]",_8="[object Int32Array]",C8="[object Uint8Array]",k8="[object Uint8ClampedArray]",w8="[object Uint16Array]",S8="[object Uint32Array]",Ye={};Ye[g8]=Ye[v8]=Ye[y8]=Ye[b8]=Ye[_8]=Ye[C8]=Ye[k8]=Ye[w8]=Ye[S8]=!0;Ye[t8]=Ye[n8]=Ye[f8]=Ye[r8]=Ye[m8]=Ye[i8]=Ye[o8]=Ye[s8]=Ye[a8]=Ye[l8]=Ye[c8]=Ye[u8]=Ye[d8]=Ye[h8]=Ye[p8]=!1;function x8(e){return jo(e)&&p0(e.length)&&!!Ye[Ni(e)]}function T8(e){return function(t){return e(t)}}var g0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ho=g0&&typeof module=="object"&&module&&!module.nodeType&&module,E8=ho&&ho.exports===g0,Al=E8&&a0.process,A8=function(){try{var e=ho&&ho.require&&ho.require("util").types;return e||Al&&Al.binding&&Al.binding("util")}catch{}}();const xh=A8;var Th=xh&&xh.isTypedArray,$8=Th?T8(Th):x8;const wu=$8;function bc(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var P8=Object.prototype,L8=P8.hasOwnProperty;function M8(e,t,n){var r=e[t];(!(L8.call(e,t)&&za(r,n))||n===void 0&&!(t in e))&&Cu(e,t,n)}function I8(e,t,n,r){var i=!n;n||(n={});for(var o=-1,s=t.length;++o<s;){var a=t[o],l=r?r(n[a],e[a],a,n,e):void 0;l===void 0&&(l=e[a]),i?Cu(n,a,l):M8(n,a,l)}return n}function B8(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var O8=9007199254740991,F8=/^(?:0|[1-9]\d*)$/;function v0(e,t){var n=typeof e;return t=t??O8,!!t&&(n=="number"||n!="symbol"&&F8.test(e))&&e>-1&&e%1==0&&e<t}var R8=Object.prototype,N8=R8.hasOwnProperty;function D8(e,t){var n=sa(e),r=!n&&oa(e),i=!n&&!r&&ku(e),o=!n&&!r&&!i&&wu(e),s=n||r||i||o,a=s?B8(e.length,String):[],l=a.length;for(var c in e)(t||N8.call(e,c))&&!(s&&(c=="length"||i&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||v0(c,l)))&&a.push(c);return a}function z8(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var V8=Object.prototype,H8=V8.hasOwnProperty;function q8(e){if(!ai(e))return z8(e);var t=qa(e),n=[];for(var r in e)r=="constructor"&&(t||!H8.call(e,r))||n.push(r);return n}function y0(e){return ja(e)?D8(e,!0):q8(e)}function j8(e){return I8(e,y0(e))}function G8(e,t,n,r,i,o,s){var a=bc(e,n),l=bc(t,n),c=s.get(l);if(c){yc(e,n,c);return}var u=o?o(a,l,n+"",e,t,s):void 0,h=u===void 0;if(h){var d=sa(l),f=!d&&ku(l),g=!d&&!f&&wu(l);u=l,d||f||g?sa(a)?u=a:jC(a)?u=MC(a):f?(h=!1,u=AC(l,!0)):g?(h=!1,u=LC(l,!0)):u=[]:e8(l)||oa(l)?(u=a,oa(a)?u=j8(a):(!ai(a)||_u(a))&&(u=RC(l))):h=!1}h&&(s.set(l,u),i(u,l,r,o,s),s.delete(l)),yc(e,n,u)}function b0(e,t,n,r,i){e!==t&&TC(t,function(o,s){if(i||(i=new Di),ai(o))G8(e,t,s,n,b0,r,i);else{var a=r?r(bc(e,s),o,s+"",e,t,i):void 0;a===void 0&&(a=o),yc(e,s,a)}},y0)}function _0(e){return e}function W8(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var Eh=Math.max;function U8(e,t,n){return t=Eh(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=Eh(r.length-t,0),s=Array(o);++i<o;)s[i]=r[t+i];i=-1;for(var a=Array(t+1);++i<t;)a[i]=r[i];return a[t]=n(s),W8(e,this,a)}}function Y8(e){return function(){return e}}var K8=ia?function(e,t){return ia(e,"toString",{configurable:!0,enumerable:!1,value:Y8(t),writable:!0})}:_0;const X8=K8;var Q8=800,Z8=16,J8=Date.now;function e5(e){var t=0,n=0;return function(){var r=J8(),i=Z8-(r-n);if(n=r,i>0){if(++t>=Q8)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var t5=e5(X8);const n5=t5;function r5(e,t){return n5(U8(e,t,_0),e+"")}function i5(e,t,n){if(!ai(n))return!1;var r=typeof t;return(r=="number"?ja(n)&&v0(t,n.length):r=="string"&&t in n)?za(n[t],e):!1}function o5(e){return r5(function(t,n){var r=-1,i=n.length,o=i>1?n[i-1]:void 0,s=i>2?n[2]:void 0;for(o=e.length>3&&typeof o=="function"?(i--,o):void 0,s&&i5(n[0],n[1],s)&&(o=i<3?void 0:o,i=1),t=Object(t);++r<i;){var a=n[r];a&&e(t,a,r,o)}return t})}var s5=o5(function(e,t,n){b0(e,t,n)});const a5=s5,l5="​",c5={curveBasis:I_,curveBasisClosed:B_,curveBasisOpen:O_,curveBumpX:L_,curveBumpY:M_,curveBundle:F_,curveCardinalClosed:N_,curveCardinalOpen:D_,curveCardinal:R_,curveCatmullRomClosed:V_,curveCatmullRomOpen:H_,curveCatmullRom:z_,curveLinear:P_,curveLinearClosed:q_,curveMonotoneX:j_,curveMonotoneY:G_,curveNatural:W_,curveStep:U_,curveStepAfter:K_,curveStepBefore:Y_},u5=/\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi,d5=function(e,t){const n=C0(e,/(?:init\b)|(?:initialize\b)/);let r={};if(Array.isArray(n)){const s=n.map(a=>a.args);na(s),r=yt(r,[...s])}else r=n.args;if(!r)return;let i=Da(e,t);const o="config";return r[o]!==void 0&&(i==="flowchart-v2"&&(i="flowchart"),r[i]=r[o],delete r[o]),r},C0=function(e,t=null){try{const n=new RegExp(`[%]{2}(?![{]${u5.source})(?=[}][%]{2}).*
`,"ig");e=e.trim().replace(n,"").replace(/'/gm,'"'),ye.debug(`Detecting diagram directive${t!==null?" type:"+t:""} based on the text:${e}`);let r;const i=[];for(;(r=uo.exec(e))!==null;)if(r.index===uo.lastIndex&&uo.lastIndex++,r&&!t||t&&r[1]&&r[1].match(t)||t&&r[2]&&r[2].match(t)){const o=r[1]?r[1]:r[2],s=r[3]?r[3].trim():r[4]?JSON.parse(r[4].trim()):null;i.push({type:o,args:s})}return i.length===0?{type:e,args:null}:i.length===1?i[0]:i}catch(n){return ye.error(`ERROR: ${n.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`),{type:void 0,args:null}}},h5=function(e){return e.replace(uo,"")},p5=function(e,t){for(const[n,r]of t.entries())if(r.match(e))return n;return-1};function f5(e,t){if(!e)return t;const n=`curve${e.charAt(0).toUpperCase()+e.slice(1)}`;return c5[n]??t}function m5(e,t){const n=e.trim();if(n)return t.securityLevel!=="loose"?im.sanitizeUrl(n):n}const g5=(e,...t)=>{const n=e.split("."),r=n.length-1,i=n[r];let o=window;for(let s=0;s<r;s++)if(o=o[n[s]],!o){ye.error(`Function name: ${e} not found in window`);return}o[i](...t)};function k0(e,t){return!e||!t?0:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function v5(e){let t,n=0;e.forEach(i=>{n+=k0(i,t),t=i});const r=n/2;return Su(e,r)}function y5(e){return e.length===1?e[0]:v5(e)}const Ah=(e,t=2)=>{const n=Math.pow(10,t);return Math.round(e*n)/n},Su=(e,t)=>{let n,r=t;for(const i of e){if(n){const o=k0(i,n);if(o<r)r-=o;else{const s=r/o;if(s<=0)return n;if(s>=1)return{x:i.x,y:i.y};if(s>0&&s<1)return{x:Ah((1-s)*n.x+s*i.x,5),y:Ah((1-s)*n.y+s*i.y,5)}}}n=i}throw new Error("Could not find a suitable point for the given distance")},b5=(e,t,n)=>{ye.info(`our points ${JSON.stringify(t)}`),t[0]!==n&&(t=t.reverse());const i=Su(t,25),o=e?10:5,s=Math.atan2(t[0].y-i.y,t[0].x-i.x),a={x:0,y:0};return a.x=Math.sin(s)*o+(t[0].x+i.x)/2,a.y=-Math.cos(s)*o+(t[0].y+i.y)/2,a};function _5(e,t,n){const r=structuredClone(n);ye.info("our points",r),t!=="start_left"&&t!=="start_right"&&r.reverse();const i=25+e,o=Su(r,i),s=10+e*.5,a=Math.atan2(r[0].y-o.y,r[0].x-o.x),l={x:0,y:0};return t==="start_left"?(l.x=Math.sin(a+Math.PI)*s+(r[0].x+o.x)/2,l.y=-Math.cos(a+Math.PI)*s+(r[0].y+o.y)/2):t==="end_right"?(l.x=Math.sin(a-Math.PI)*s+(r[0].x+o.x)/2-5,l.y=-Math.cos(a-Math.PI)*s+(r[0].y+o.y)/2-5):t==="end_left"?(l.x=Math.sin(a)*s+(r[0].x+o.x)/2-5,l.y=-Math.cos(a)*s+(r[0].y+o.y)/2-5):(l.x=Math.sin(a)*s+(r[0].x+o.x)/2,l.y=-Math.cos(a)*s+(r[0].y+o.y)/2),l}function C5(e){let t="",n="";for(const r of e)r!==void 0&&(r.startsWith("color:")||r.startsWith("text-align:")?n=n+r+";":t=t+r+";");return{style:t,labelStyle:n}}let $h=0;const k5=()=>($h++,"id-"+Math.random().toString(36).substr(2,12)+"-"+$h);function w5(e){let t="";const n="0123456789abcdef",r=n.length;for(let i=0;i<e;i++)t+=n.charAt(Math.floor(Math.random()*r));return t}const S5=e=>w5(e.length),x5=function(){return{x:0,y:0,fill:void 0,anchor:"start",style:"#666",width:100,height:100,textMargin:0,rx:0,ry:0,valign:void 0,text:""}},T5=function(e,t){const n=t.text.replace(bu.lineBreakRegex," "),[,r]=Tu(t.fontSize),i=e.append("text");i.attr("x",t.x),i.attr("y",t.y),i.style("text-anchor",t.anchor),i.style("font-family",t.fontFamily),i.style("font-size",r),i.style("font-weight",t.fontWeight),i.attr("fill",t.fill),t.class!==void 0&&i.attr("class",t.class);const o=i.append("tspan");return o.attr("x",t.x+t.textMargin*2),o.attr("fill",t.fill),o.text(n),i},E5=qo((e,t,n)=>{if(!e||(n=Object.assign({fontSize:12,fontWeight:400,fontFamily:"Arial",joinWith:"<br/>"},n),bu.lineBreakRegex.test(e)))return e;const r=e.split(" "),i=[];let o="";return r.forEach((s,a)=>{const l=aa(`${s} `,n),c=aa(o,n);if(l>t){const{hyphenatedStrings:d,remainingWord:f}=A5(s,t,"-",n);i.push(o,...d),o=f}else c+l>=t?(i.push(o),o=s):o=[o,s].filter(Boolean).join(" ");a+1===r.length&&i.push(o)}),i.filter(s=>s!=="").join(n.joinWith)},(e,t,n)=>`${e}${t}${n.fontSize}${n.fontWeight}${n.fontFamily}${n.joinWith}`),A5=qo((e,t,n="-",r)=>{r=Object.assign({fontSize:12,fontWeight:400,fontFamily:"Arial",margin:0},r);const i=[...e],o=[];let s="";return i.forEach((a,l)=>{const c=`${s}${a}`;if(aa(c,r)>=t){const h=l+1,d=i.length===h,f=`${c}${n}`;o.push(d?c:f),s=""}else s=c}),{hyphenatedStrings:o,remainingWord:s}},(e,t,n="-",r)=>`${e}${t}${n}${r.fontSize}${r.fontWeight}${r.fontFamily}`);function $5(e,t){return xu(e,t).height}function aa(e,t){return xu(e,t).width}const xu=qo((e,t)=>{const{fontSize:n=12,fontFamily:r="Arial",fontWeight:i=400}=t;if(!e)return{width:0,height:0};const[,o]=Tu(n),s=["sans-serif",r],a=e.split(bu.lineBreakRegex),l=[],c=cn("body");if(!c.remove)return{width:0,height:0,lineHeight:0};const u=c.append("svg");for(const d of s){let f=0;const g={width:0,height:0,lineHeight:0};for(const m of a){const y=x5();y.text=m||l5;const b=T5(u,y).style("font-size",o).style("font-weight",i).style("font-family",d),k=(b._groups||b)[0][0].getBBox();if(k.width===0&&k.height===0)throw new Error("svg element not in render tree");g.width=Math.round(Math.max(g.width,k.width)),f=Math.round(k.height),g.height+=f,g.lineHeight=Math.round(Math.max(g.lineHeight,f))}l.push(g)}u.remove();const h=isNaN(l[1].height)||isNaN(l[1].width)||isNaN(l[1].lineHeight)||l[0].height>l[1].height&&l[0].width>l[1].width&&l[0].lineHeight>l[1].lineHeight?0:1;return l[h]},(e,t)=>`${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`);class P5{constructor(t=!1,n){this.count=0,this.count=n?n.length:0,this.next=t?()=>this.count++:()=>Date.now()}}let gs;const L5=function(e){return gs=gs||document.createElement("div"),e=escape(e).replace(/%26/g,"&").replace(/%23/g,"#").replace(/%3B/g,";"),gs.innerHTML=e,unescape(gs.textContent)};function w0(e){return"str"in e}const M5=(e,t,n,r)=>{var i;if(!r)return;const o=(i=e.node())==null?void 0:i.getBBox();o&&e.append("text").text(r).attr("x",o.x+o.width/2).attr("y",-n).attr("class",t)},Tu=e=>{if(typeof e=="number")return[e,e+"px"];const t=parseInt(e??"",10);return Number.isNaN(t)?[void 0,void 0]:e===String(t)?[t,e+"px"]:[t,e]};function S0(e,t){return a5({},e,t)}const po={assignWithDepth:yt,wrapLabel:E5,calculateTextHeight:$5,calculateTextWidth:aa,calculateTextDimensions:xu,cleanAndMerge:S0,detectInit:d5,detectDirective:C0,isSubstringInArray:p5,interpolateToCurve:f5,calcLabelPosition:y5,calcCardinalityPosition:b5,calcTerminalLabelPosition:_5,formatUrl:m5,getStylesFromArray:C5,generateId:k5,random:S5,runFunc:g5,entityDecode:L5,insertTitle:M5,parseFontSize:Tu,InitIDGenerator:P5},I5=function(e){let t=e;return t=t.replace(/style.*:\S*#.*;/g,function(n){return n.substring(0,n.length-1)}),t=t.replace(/classDef.*:\S*#.*;/g,function(n){return n.substring(0,n.length-1)}),t=t.replace(/#\w+;/g,function(n){const r=n.substring(1,n.length-1);return/^\+?\d+$/.test(r)?"ﬂ°°"+r+"¶ß":"ﬂ°"+r+"¶ß"}),t},B5=function(e){return e.replace(/ﬂ°°/g,"&#").replace(/ﬂ°/g,"&").replace(/¶ß/g,";")};var x0="comm",T0="rule",E0="decl",O5="@import",F5="@keyframes",R5="@layer",A0=Math.abs,Eu=String.fromCharCode;function $0(e){return e.trim()}function Rs(e,t,n){return e.replace(t,n)}function N5(e,t,n){return e.indexOf(t,n)}function $o(e,t){return e.charCodeAt(t)|0}function Po(e,t,n){return e.slice(t,n)}function sr(e){return e.length}function D5(e){return e.length}function vs(e,t){return t.push(e),e}var Ga=1,Ti=1,P0=0,vn=0,at=0,zi="";function Au(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ga,column:Ti,length:s,return:"",siblings:a}}function z5(){return at}function V5(){return at=vn>0?$o(zi,--vn):0,Ti--,at===10&&(Ti=1,Ga--),at}function In(){return at=vn<P0?$o(zi,vn++):0,Ti++,at===10&&(Ti=1,Ga++),at}function Xr(){return $o(zi,vn)}function Ns(){return vn}function Wa(e,t){return Po(zi,e,t)}function _c(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H5(e){return Ga=Ti=1,P0=sr(zi=e),vn=0,[]}function q5(e){return zi="",e}function $l(e){return $0(Wa(vn-1,Cc(e===91?e+2:e===40?e+1:e)))}function j5(e){for(;(at=Xr())&&at<33;)In();return _c(e)>2||_c(at)>3?"":" "}function G5(e,t){for(;--t&&In()&&!(at<48||at>102||at>57&&at<65||at>70&&at<97););return Wa(e,Ns()+(t<6&&Xr()==32&&In()==32))}function Cc(e){for(;In();)switch(at){case e:return vn;case 34:case 39:e!==34&&e!==39&&Cc(at);break;case 40:e===41&&Cc(e);break;case 92:In();break}return vn}function W5(e,t){for(;In()&&e+at!==57;)if(e+at===84&&Xr()===47)break;return"/*"+Wa(t,vn-1)+"*"+Eu(e===47?e:In())}function U5(e){for(;!_c(Xr());)In();return Wa(e,vn)}function Y5(e){return q5(Ds("",null,null,null,[""],e=H5(e),0,[0],e))}function Ds(e,t,n,r,i,o,s,a,l){for(var c=0,u=0,h=s,d=0,f=0,g=0,m=1,y=1,b=1,k=0,_="",x=i,T=o,A=r,E=_;y;)switch(g=k,k=In()){case 40:if(g!=108&&$o(E,h-1)==58){N5(E+=Rs($l(k),"&","&\f"),"&\f",A0(c?a[c-1]:0))!=-1&&(b=-1);break}case 34:case 39:case 91:E+=$l(k);break;case 9:case 10:case 13:case 32:E+=j5(g);break;case 92:E+=G5(Ns()-1,7);continue;case 47:switch(Xr()){case 42:case 47:vs(K5(W5(In(),Ns()),t,n,l),l);break;default:E+="/"}break;case 123*m:a[c++]=sr(E)*b;case 125*m:case 59:case 0:switch(k){case 0:case 125:y=0;case 59+u:b==-1&&(E=Rs(E,/\f/g,"")),f>0&&sr(E)-h&&vs(f>32?Lh(E+";",r,n,h-1,l):Lh(Rs(E," ","")+";",r,n,h-2,l),l);break;case 59:E+=";";default:if(vs(A=Ph(E,t,n,c,u,i,a,_,x=[],T=[],h,o),o),k===123)if(u===0)Ds(E,t,A,A,x,o,h,a,T);else switch(d===99&&$o(E,3)===110?100:d){case 100:case 108:case 109:case 115:Ds(e,A,A,r&&vs(Ph(e,A,A,0,0,i,a,_,i,x=[],h,T),T),i,T,h,a,r?x:T);break;default:Ds(E,A,A,A,[""],T,0,a,T)}}c=u=f=0,m=b=1,_=E="",h=s;break;case 58:h=1+sr(E),f=g;default:if(m<1){if(k==123)--m;else if(k==125&&m++==0&&V5()==125)continue}switch(E+=Eu(k),k*m){case 38:b=u>0?1:(E+="\f",-1);break;case 44:a[c++]=(sr(E)-1)*b,b=1;break;case 64:Xr()===45&&(E+=$l(In())),d=Xr(),u=h=sr(_=E+=U5(Ns())),k++;break;case 45:g===45&&sr(E)==2&&(m=0)}}return o}function Ph(e,t,n,r,i,o,s,a,l,c,u,h){for(var d=i-1,f=i===0?o:[""],g=D5(f),m=0,y=0,b=0;m<r;++m)for(var k=0,_=Po(e,d+1,d=A0(y=s[m])),x=e;k<g;++k)(x=$0(y>0?f[k]+" "+_:Rs(_,/&\f/g,f[k])))&&(l[b++]=x);return Au(e,t,n,i===0?T0:a,l,c,u,h)}function K5(e,t,n,r){return Au(e,t,n,x0,Eu(z5()),Po(e,2,-2),0,r)}function Lh(e,t,n,r,i){return Au(e,t,n,E0,Po(e,0,r),Po(e,r+1,-1),r,i)}function kc(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function X5(e,t,n,r){switch(e.type){case R5:if(e.children.length)break;case O5:case E0:return e.return=e.return||e.value;case x0:return"";case F5:return e.return=e.value+"{"+kc(e.children,r)+"}";case T0:if(!sr(e.value=e.props.join(",")))return""}return sr(n=kc(e.children,r))?e.return=e.value+"{"+n+"}":""}const Mh="10.9.0",Ei=Object.freeze(d3);let Ft=yt({},Ei),L0,Ai=[],fo=yt({},Ei);const Ua=(e,t)=>{let n=yt({},e),r={};for(const i of t)B0(i),r=yt(r,i);if(n=yt(n,r),r.theme&&r.theme in ur){const i=yt({},L0),o=yt(i.themeVariables||{},r.themeVariables);n.theme&&n.theme in ur&&(n.themeVariables=ur[n.theme].getThemeVariables(o))}return fo=n,O0(fo),fo},Q5=e=>(Ft=yt({},Ei),Ft=yt(Ft,e),e.theme&&ur[e.theme]&&(Ft.themeVariables=ur[e.theme].getThemeVariables(e.themeVariables)),Ua(Ft,Ai),Ft),Z5=e=>{L0=yt({},e)},J5=e=>(Ft=yt(Ft,e),Ua(Ft,Ai),Ft),M0=()=>yt({},Ft),I0=e=>(O0(e),yt(fo,e),Wn()),Wn=()=>yt({},fo),B0=e=>{e&&(["secure",...Ft.secure??[]].forEach(t=>{Object.hasOwn(e,t)&&(ye.debug(`Denied attempt to modify a secure key ${t}`,e[t]),delete e[t])}),Object.keys(e).forEach(t=>{t.startsWith("__")&&delete e[t]}),Object.keys(e).forEach(t=>{typeof e[t]=="string"&&(e[t].includes("<")||e[t].includes(">")||e[t].includes("url(data:"))&&delete e[t],typeof e[t]=="object"&&B0(e[t])}))},ek=e=>{na(e),e.fontFamily&&(!e.themeVariables||!e.themeVariables.fontFamily)&&(e.themeVariables={fontFamily:e.fontFamily}),Ai.push(e),Ua(Ft,Ai)},la=(e=Ft)=>{Ai=[],Ua(e,Ai)},tk={LAZY_LOAD_DEPRECATED:"The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."},Ih={},nk=e=>{Ih[e]||(ye.warn(tk[e]),Ih[e]=!0)},O0=e=>{e&&(e.lazyLoadedDiagrams||e.loadExternalDiagramsAtStartup)&&nk("LAZY_LOAD_DEPRECATED")},F0="c4",rk=e=>/^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e),ik=async()=>{const{diagram:e}=await We(()=>import("./c4Diagram-e2511a7a.DWvrTMej.js"),__vite__mapDeps([0,1,2]));return{id:F0,diagram:e}},ok={id:F0,detector:rk,loader:ik},sk=ok,R0="flowchart",ak=(e,t)=>{var n,r;return((n=t==null?void 0:t.flowchart)==null?void 0:n.defaultRenderer)==="dagre-wrapper"||((r=t==null?void 0:t.flowchart)==null?void 0:r.defaultRenderer)==="elk"?!1:/^\s*graph/.test(e)},lk=async()=>{const{diagram:e}=await We(()=>import("./flowDiagram-e44a2353.0UK-ZQGI.js"),__vite__mapDeps([3,4,5,6,7,8,9,10,11,12,13,14,15,2]));return{id:R0,diagram:e}},ck={id:R0,detector:ak,loader:lk},uk=ck,N0="flowchart-v2",dk=(e,t)=>{var n,r,i;return((n=t==null?void 0:t.flowchart)==null?void 0:n.defaultRenderer)==="dagre-d3"||((r=t==null?void 0:t.flowchart)==null?void 0:r.defaultRenderer)==="elk"?!1:/^\s*graph/.test(e)&&((i=t==null?void 0:t.flowchart)==null?void 0:i.defaultRenderer)==="dagre-wrapper"?!0:/^\s*flowchart/.test(e)},hk=async()=>{const{diagram:e}=await We(()=>import("./flowDiagram-v2-a8396bb5.atoc7RGH.js"),__vite__mapDeps([16,4,7,5,8,6,9,10,11,12,13,14,15,2]));return{id:N0,diagram:e}},pk={id:N0,detector:dk,loader:hk},fk=pk,D0="er",mk=e=>/^\s*erDiagram/.test(e),gk=async()=>{const{diagram:e}=await We(()=>import("./erDiagram-582bd92f.9BH8cIzz.js"),__vite__mapDeps([17,5,6,12,13,14,2]));return{id:D0,diagram:e}},vk={id:D0,detector:mk,loader:gk},yk=vk,z0="gitGraph",bk=e=>/^\s*gitGraph/.test(e),_k=async()=>{const{diagram:e}=await We(()=>import("./gitGraphDiagram-d5d647e9.B87zkgQd.js"),__vite__mapDeps([18,2]));return{id:z0,diagram:e}},Ck={id:z0,detector:bk,loader:_k},kk=Ck,V0="gantt",wk=e=>/^\s*gantt/.test(e),Sk=async()=>{const{diagram:e}=await We(()=>import("./ganttDiagram-05e48839.D4Dnpgcl.js"),__vite__mapDeps([19,20,21,2]));return{id:V0,diagram:e}},xk={id:V0,detector:wk,loader:Sk},Tk=xk,H0="info",Ek=e=>/^\s*info/.test(e),Ak=async()=>{const{diagram:e}=await We(()=>import("./infoDiagram-00deb277.CnBgWcYs.js"),__vite__mapDeps([22,2]));return{id:H0,diagram:e}},$k={id:H0,detector:Ek,loader:Ak},q0="pie",Pk=e=>/^\s*pie/.test(e),Lk=async()=>{const{diagram:e}=await We(()=>import("./pieDiagram-35c7eafc.DoQ1X9jk.js"),__vite__mapDeps([23,24,14,25,21,13,2]));return{id:q0,diagram:e}},Mk={id:q0,detector:Pk,loader:Lk},j0="quadrantChart",Ik=e=>/^\s*quadrantChart/.test(e),Bk=async()=>{const{diagram:e}=await We(()=>import("./quadrantDiagram-9c93c009.6AmnIzbw.js"),__vite__mapDeps([26,20,21,2]));return{id:j0,diagram:e}},Ok={id:j0,detector:Ik,loader:Bk},Fk=Ok,G0="xychart",Rk=e=>/^\s*xychart-beta/.test(e),Nk=async()=>{const{diagram:e}=await We(()=>import("./xychartDiagram-7b46ecfd.DCkVIz8B.js"),__vite__mapDeps([27,11,21,25,20,12,13,14,2]));return{id:G0,diagram:e}},Dk={id:G0,detector:Rk,loader:Nk},zk=Dk,W0="requirement",Vk=e=>/^\s*requirement(Diagram)?/.test(e),Hk=async()=>{const{diagram:e}=await We(()=>import("./requirementDiagram-e882bd67.B-J4R5Sk.js"),__vite__mapDeps([28,5,6,12,13,14,2]));return{id:W0,diagram:e}},qk={id:W0,detector:Vk,loader:Hk},jk=qk,U0="sequence",Gk=e=>/^\s*sequenceDiagram/.test(e),Wk=async()=>{const{diagram:e}=await We(()=>import("./sequenceDiagram-1767341c.CQC74NEZ.js"),__vite__mapDeps([29,1,2]));return{id:U0,diagram:e}},Uk={id:U0,detector:Gk,loader:Wk},Yk=Uk,Y0="class",Kk=(e,t)=>{var n;return((n=t==null?void 0:t.class)==null?void 0:n.defaultRenderer)==="dagre-wrapper"?!1:/^\s*classDiagram/.test(e)},Xk=async()=>{const{diagram:e}=await We(()=>import("./classDiagram-3275847a.BUkp7mfv.js"),__vite__mapDeps([30,31,5,6,12,13,14,2]));return{id:Y0,diagram:e}},Qk={id:Y0,detector:Kk,loader:Xk},Zk=Qk,K0="classDiagram",Jk=(e,t)=>{var n;return/^\s*classDiagram/.test(e)&&((n=t==null?void 0:t.class)==null?void 0:n.defaultRenderer)==="dagre-wrapper"?!0:/^\s*classDiagram-v2/.test(e)},ew=async()=>{const{diagram:e}=await We(()=>import("./classDiagram-v2-2ed0a7d3.BZ0HQkbw.js"),__vite__mapDeps([32,31,5,8,6,9,10,11,12,13,14,2]));return{id:K0,diagram:e}},tw={id:K0,detector:Jk,loader:ew},nw=tw,X0="state",rw=(e,t)=>{var n;return((n=t==null?void 0:t.state)==null?void 0:n.defaultRenderer)==="dagre-wrapper"?!1:/^\s*stateDiagram/.test(e)},iw=async()=>{const{diagram:e}=await We(()=>import("./stateDiagram-d2e6f24f.B7wLdwZy.js"),__vite__mapDeps([33,34,5,6,12,13,14,2]));return{id:X0,diagram:e}},ow={id:X0,detector:rw,loader:iw},sw=ow,Q0="stateDiagram",aw=(e,t)=>{var n;return!!(/^\s*stateDiagram-v2/.test(e)||/^\s*stateDiagram/.test(e)&&((n=t==null?void 0:t.state)==null?void 0:n.defaultRenderer)==="dagre-wrapper")},lw=async()=>{const{diagram:e}=await We(()=>import("./stateDiagram-v2-21d485ae.CWN_3uEc.js"),__vite__mapDeps([35,34,5,8,6,9,10,11,12,13,14,2]));return{id:Q0,diagram:e}},cw={id:Q0,detector:aw,loader:lw},uw=cw,Z0="journey",dw=e=>/^\s*journey/.test(e),hw=async()=>{const{diagram:e}=await We(()=>import("./journeyDiagram-a5efd2e1.C9hglZTA.js"),__vite__mapDeps([36,1,24,14,2]));return{id:Z0,diagram:e}},pw={id:Z0,detector:dw,loader:hw},fw=pw,mw=function(e,t){for(let n of t)e.attr(n[0],n[1])},gw=function(e,t,n){let r=new Map;return n?(r.set("width","100%"),r.set("style",`max-width: ${t}px;`)):(r.set("height",e),r.set("width",t)),r},J0=function(e,t,n,r){const i=gw(t,n,r);mw(e,i)},vw=function(e,t,n,r){const i=t.node().getBBox(),o=i.width,s=i.height;ye.info(`SVG bounds: ${o}x${s}`,i);let a=0,l=0;ye.info(`Graph bounds: ${a}x${l}`,e),a=o+n*2,l=s+n*2,ye.info(`Calculated bounds: ${a}x${l}`),J0(t,l,a,r);const c=`${i.x-n} ${i.y-n} ${i.width+2*n} ${i.height+2*n}`;t.attr("viewBox",c)},zs={},yw=(e,t,n)=>{let r="";return e in zs&&zs[e]?r=zs[e](n):ye.warn(`No theme found for ${e}`),` & {
    font-family: ${n.fontFamily};
    font-size: ${n.fontSize};
    fill: ${n.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${n.errorBkgColor};
  }
  & .error-text {
    fill: ${n.errorTextColor};
    stroke: ${n.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${n.lineColor};
    stroke: ${n.lineColor};
  }
  & .marker.cross {
    stroke: ${n.lineColor};
  }

  & svg {
    font-family: ${n.fontFamily};
    font-size: ${n.fontSize};
  }

  ${r}

  ${t}
`},bw=(e,t)=>{t!==void 0&&(zs[e]=t)},_w=yw;let $u="",Pu="",Lu="";const Mu=e=>To(e,Wn()),Cw=()=>{$u="",Lu="",Pu=""},kw=e=>{$u=Mu(e).replace(/^\s+/g,"")},ww=()=>$u,Sw=e=>{Lu=Mu(e).replace(/\n\s+/g,`
`)},xw=()=>Lu,Tw=e=>{Pu=Mu(e)},Ew=()=>Pu,Aw=Object.freeze(Object.defineProperty({__proto__:null,clear:Cw,getAccDescription:xw,getAccTitle:ww,getDiagramTitle:Ew,setAccDescription:Sw,setAccTitle:kw,setDiagramTitle:Tw},Symbol.toStringTag,{value:"Module"})),$w=ye,Pw=su,Iu=Wn,BK=I0,OK=Ei,Lw=e=>To(e,Iu()),Mw=vw,Iw=()=>Aw,ca={},ua=(e,t,n)=>{var r;if(ca[e])throw new Error(`Diagram ${e} already registered.`);ca[e]=t,n&&s0(e,n),bw(e,t.styles),(r=t.injectUtils)==null||r.call(t,$w,Pw,Iu,Lw,Mw,Iw(),()=>{})},Bu=e=>{if(e in ca)return ca[e];throw new Bw(e)};class Bw extends Error{constructor(t){super(`Diagram ${t} not found.`)}}const Ow=e=>{var t;const{securityLevel:n}=Iu();let r=cn("body");if(n==="sandbox"){const s=((t=cn(`#i${e}`).node())==null?void 0:t.contentDocument)??document;r=cn(s.body)}return r.select(`#${e}`)},Fw=(e,t,n)=>{ye.debug(`rendering svg for syntax error
`);const r=Ow(t),i=r.append("g");r.attr("viewBox","0 0 2412 512"),J0(r,100,512,!0),i.append("path").attr("class","error-icon").attr("d","m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"),i.append("path").attr("class","error-icon").attr("d","m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"),i.append("path").attr("class","error-icon").attr("d","m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"),i.append("path").attr("class","error-icon").attr("d","m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"),i.append("path").attr("class","error-icon").attr("d","m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"),i.append("path").attr("class","error-icon").attr("d","m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"),i.append("text").attr("class","error-text").attr("x",1440).attr("y",250).attr("font-size","150px").style("text-anchor","middle").text("Syntax error in text"),i.append("text").attr("class","error-text").attr("x",1250).attr("y",400).attr("font-size","100px").style("text-anchor","middle").text(`mermaid version ${n}`)},eg={draw:Fw},Rw=eg,Nw={db:{},renderer:eg,parser:{parser:{yy:{}},parse:()=>{}}},Dw=Nw,tg="flowchart-elk",zw=(e,t)=>{var n;return!!(/^\s*flowchart-elk/.test(e)||/^\s*flowchart|graph/.test(e)&&((n=t==null?void 0:t.flowchart)==null?void 0:n.defaultRenderer)==="elk")},Vw=async()=>{const{diagram:e}=await We(()=>import("./flowchart-elk-definition-1a3aaf5d.DpmMH6VF.js"),__vite__mapDeps([37,4,10,11,12,13,14,2]));return{id:tg,diagram:e}},Hw={id:tg,detector:zw,loader:Vw},qw=Hw,ng="timeline",jw=e=>/^\s*timeline/.test(e),Gw=async()=>{const{diagram:e}=await We(()=>import("./timeline-definition-f8c5dfc0.CueGH-md.js"),__vite__mapDeps([38,24,14,2]));return{id:ng,diagram:e}},Ww={id:ng,detector:jw,loader:Gw},Uw=Ww,rg="mindmap",Yw=e=>/^\s*mindmap/.test(e),Kw=async()=>{const{diagram:e}=await We(()=>import("./mindmap-definition-74120bdd.NRhNhlou.js"),__vite__mapDeps([39,11,2]));return{id:rg,diagram:e}},Xw={id:rg,detector:Yw,loader:Kw},Qw=Xw,ig="sankey",Zw=e=>/^\s*sankey-beta/.test(e),Jw=async()=>{const{diagram:e}=await We(()=>import("./sankeyDiagram-f5d051b7.DVj_HTBw.js"),__vite__mapDeps([40,25,21,41,2]));return{id:ig,diagram:e}},e6={id:ig,detector:Zw,loader:Jw},t6=e6,og="block",n6=e=>/^\s*block-beta/.test(e),r6=async()=>{const{diagram:e}=await We(()=>import("./blockDiagram-8beecd1f.YAnh69pI.js"),__vite__mapDeps([42,9,5,15,10,11,12,13,14,25,21,41,2]));return{id:og,diagram:e}},i6={id:og,detector:n6,loader:r6},o6=i6;let Bh=!1;const Ou=()=>{Bh||(Bh=!0,ua("error",Dw,e=>e.toLowerCase().trim()==="error"),ua("---",{db:{clear:()=>{}},styles:{},renderer:{draw:()=>{}},parser:{parser:{yy:{}},parse:()=>{throw new Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks")}},init:()=>null},e=>e.toLowerCase().trimStart().startsWith("---")),o0(sk,nw,Zk,yk,Tk,$k,Mk,jk,Yk,qw,fk,uk,Qw,Uw,kk,uw,sw,fw,Fk,t6,zk,o6))};class sg{constructor(t,n={}){this.text=t,this.metadata=n,this.type="graph",this.text=I5(t),this.text+=`
`;const r=Wn();try{this.type=Da(t,r)}catch(o){this.type="error",this.detectError=o}const i=Bu(this.type);ye.debug("Type "+this.type),this.db=i.db,this.renderer=i.renderer,this.parser=i.parser,this.parser.parser.yy=this.db,this.init=i.init,this.parse()}parse(){var t,n,r,i,o;if(this.detectError)throw this.detectError;(n=(t=this.db).clear)==null||n.call(t);const s=Wn();(r=this.init)==null||r.call(this,s),this.metadata.title&&((o=(i=this.db).setDiagramTitle)==null||o.call(i,this.metadata.title)),this.parser.parse(this.text)}async render(t,n){await this.renderer.draw(this.text,t,n,this)}getParser(){return this.parser}getType(){return this.type}}const s6=async(e,t={})=>{const n=Da(e,Wn());try{Bu(n)}catch{const i=f3(n);if(!i)throw new i0(`Diagram ${n} not found.`);const{id:o,diagram:s}=await i();ua(o,s)}return new sg(e,t)};let Oh=[];const a6=()=>{Oh.forEach(e=>{e()}),Oh=[]};var l6=u0(Object.keys,Object);const c6=l6;var u6=Object.prototype,d6=u6.hasOwnProperty;function h6(e){if(!qa(e))return c6(e);var t=[];for(var n in Object(e))d6.call(e,n)&&n!="constructor"&&t.push(n);return t}var p6=ci(Qn,"DataView");const wc=p6;var f6=ci(Qn,"Promise");const Sc=f6;var m6=ci(Qn,"Set");const xc=m6;var g6=ci(Qn,"WeakMap");const Tc=g6;var Fh="[object Map]",v6="[object Object]",Rh="[object Promise]",Nh="[object Set]",Dh="[object WeakMap]",zh="[object DataView]",y6=li(wc),b6=li(Ao),_6=li(Sc),C6=li(xc),k6=li(Tc),qr=Ni;(wc&&qr(new wc(new ArrayBuffer(1)))!=zh||Ao&&qr(new Ao)!=Fh||Sc&&qr(Sc.resolve())!=Rh||xc&&qr(new xc)!=Nh||Tc&&qr(new Tc)!=Dh)&&(qr=function(e){var t=Ni(e),n=t==v6?e.constructor:void 0,r=n?li(n):"";if(r)switch(r){case y6:return zh;case b6:return Fh;case _6:return Rh;case C6:return Nh;case k6:return Dh}return t});const w6=qr;var S6="[object Map]",x6="[object Set]",T6=Object.prototype,E6=T6.hasOwnProperty;function Pl(e){if(e==null)return!0;if(ja(e)&&(sa(e)||typeof e=="string"||typeof e.splice=="function"||ku(e)||wu(e)||oa(e)))return!e.length;var t=w6(e);if(t==S6||t==x6)return!e.size;if(qa(e))return!h6(e).length;for(var n in e)if(E6.call(e,n))return!1;return!0}const A6="graphics-document document";function $6(e,t){e.attr("role",A6),t!==""&&e.attr("aria-roledescription",t)}function P6(e,t,n,r){if(e.insert!==void 0){if(n){const i=`chart-desc-${r}`;e.attr("aria-describedby",i),e.insert("desc",":first-child").attr("id",i).text(n)}if(t){const i=`chart-title-${r}`;e.attr("aria-labelledby",i),e.insert("title",":first-child").attr("id",i).text(t)}}}const L6=e=>e.replace(/^\s*%%(?!{)[^\n]+\n?/gm,"").trimStart();/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function ag(e){return typeof e>"u"||e===null}function M6(e){return typeof e=="object"&&e!==null}function I6(e){return Array.isArray(e)?e:ag(e)?[]:[e]}function B6(e,t){var n,r,i,o;if(t)for(o=Object.keys(t),n=0,r=o.length;n<r;n+=1)i=o[n],e[i]=t[i];return e}function O6(e,t){var n="",r;for(r=0;r<t;r+=1)n+=e;return n}function F6(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var R6=ag,N6=M6,D6=I6,z6=O6,V6=F6,H6=B6,Tt={isNothing:R6,isObject:N6,toArray:D6,repeat:z6,isNegativeZero:V6,extend:H6};function lg(e,t){var n="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),r+" "+n):r}function Lo(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=lg(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Lo.prototype=Object.create(Error.prototype);Lo.prototype.constructor=Lo;Lo.prototype.toString=function(t){return this.name+": "+lg(this,t)};var ar=Lo;function Ll(e,t,n,r,i){var o="",s="",a=Math.floor(i/2)-1;return r-t>a&&(o=" ... ",t=r-a+o.length),n-r>a&&(s=" ...",n=r+a-s.length),{str:o+e.slice(t,n).replace(/\t/g,"→")+s,pos:r-t+o.length}}function Ml(e,t){return Tt.repeat(" ",t-e.length)+e}function q6(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),typeof t.indent!="number"&&(t.indent=1),typeof t.linesBefore!="number"&&(t.linesBefore=3),typeof t.linesAfter!="number"&&(t.linesAfter=2);for(var n=/\r?\n|\r|\0/g,r=[0],i=[],o,s=-1;o=n.exec(e.buffer);)i.push(o.index),r.push(o.index+o[0].length),e.position<=o.index&&s<0&&(s=r.length-2);s<0&&(s=r.length-1);var a="",l,c,u=Math.min(e.line+t.linesAfter,i.length).toString().length,h=t.maxLength-(t.indent+u+3);for(l=1;l<=t.linesBefore&&!(s-l<0);l++)c=Ll(e.buffer,r[s-l],i[s-l],e.position-(r[s]-r[s-l]),h),a=Tt.repeat(" ",t.indent)+Ml((e.line-l+1).toString(),u)+" | "+c.str+`
`+a;for(c=Ll(e.buffer,r[s],i[s],e.position,h),a+=Tt.repeat(" ",t.indent)+Ml((e.line+1).toString(),u)+" | "+c.str+`
`,a+=Tt.repeat("-",t.indent+u+3+c.pos)+`^
`,l=1;l<=t.linesAfter&&!(s+l>=i.length);l++)c=Ll(e.buffer,r[s+l],i[s+l],e.position-(r[s]-r[s+l]),h),a+=Tt.repeat(" ",t.indent)+Ml((e.line+l+1).toString(),u)+" | "+c.str+`
`;return a.replace(/\n$/,"")}var j6=q6,G6=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],W6=["scalar","sequence","mapping"];function U6(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(r){t[String(r)]=n})}),t}function Y6(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(G6.indexOf(n)===-1)throw new ar('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=U6(t.styleAliases||null),W6.indexOf(this.kind)===-1)throw new ar('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var bt=Y6;function Vh(e,t){var n=[];return e[t].forEach(function(r){var i=n.length;n.forEach(function(o,s){o.tag===r.tag&&o.kind===r.kind&&o.multi===r.multi&&(i=s)}),n[i]=r}),n}function K6(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function r(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(r);return e}function Ec(e){return this.extend(e)}Ec.prototype.extend=function(t){var n=[],r=[];if(t instanceof bt)r.push(t);else if(Array.isArray(t))r=r.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(r=r.concat(t.explicit));else throw new ar("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(o){if(!(o instanceof bt))throw new ar("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new ar("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new ar("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(o){if(!(o instanceof bt))throw new ar("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Ec.prototype);return i.implicit=(this.implicit||[]).concat(n),i.explicit=(this.explicit||[]).concat(r),i.compiledImplicit=Vh(i,"implicit"),i.compiledExplicit=Vh(i,"explicit"),i.compiledTypeMap=K6(i.compiledImplicit,i.compiledExplicit),i};var X6=Ec,Q6=new bt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Z6=new bt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),J6=new bt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),eS=new X6({explicit:[Q6,Z6,J6]});function tS(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function nS(){return null}function rS(e){return e===null}var iS=new bt("tag:yaml.org,2002:null",{kind:"scalar",resolve:tS,construct:nS,predicate:rS,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function oS(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function sS(e){return e==="true"||e==="True"||e==="TRUE"}function aS(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var lS=new bt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:oS,construct:sS,predicate:aS,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function cS(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function uS(e){return 48<=e&&e<=55}function dS(e){return 48<=e&&e<=57}function hS(e){if(e===null)return!1;var t=e.length,n=0,r=!1,i;if(!t)return!1;if(i=e[n],(i==="-"||i==="+")&&(i=e[++n]),i==="0"){if(n+1===t)return!0;if(i=e[++n],i==="b"){for(n++;n<t;n++)if(i=e[n],i!=="_"){if(i!=="0"&&i!=="1")return!1;r=!0}return r&&i!=="_"}if(i==="x"){for(n++;n<t;n++)if(i=e[n],i!=="_"){if(!cS(e.charCodeAt(n)))return!1;r=!0}return r&&i!=="_"}if(i==="o"){for(n++;n<t;n++)if(i=e[n],i!=="_"){if(!uS(e.charCodeAt(n)))return!1;r=!0}return r&&i!=="_"}}if(i==="_")return!1;for(;n<t;n++)if(i=e[n],i!=="_"){if(!dS(e.charCodeAt(n)))return!1;r=!0}return!(!r||i==="_")}function pS(e){var t=e,n=1,r;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),r=t[0],(r==="-"||r==="+")&&(r==="-"&&(n=-1),t=t.slice(1),r=t[0]),t==="0")return 0;if(r==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function fS(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Tt.isNegativeZero(e)}var mS=new bt("tag:yaml.org,2002:int",{kind:"scalar",resolve:hS,construct:pS,predicate:fS,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),gS=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function vS(e){return!(e===null||!gS.test(e)||e[e.length-1]==="_")}function yS(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var bS=/^[-+]?[0-9]+e/;function _S(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Tt.isNegativeZero(e))return"-0.0";return n=e.toString(10),bS.test(n)?n.replace("e",".e"):n}function CS(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Tt.isNegativeZero(e))}var kS=new bt("tag:yaml.org,2002:float",{kind:"scalar",resolve:vS,construct:yS,predicate:CS,represent:_S,defaultStyle:"lowercase"}),cg=eS.extend({implicit:[iS,lS,mS,kS]}),wS=cg,ug=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),dg=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function SS(e){return e===null?!1:ug.exec(e)!==null||dg.exec(e)!==null}function xS(e){var t,n,r,i,o,s,a,l=0,c=null,u,h,d;if(t=ug.exec(e),t===null&&(t=dg.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],r=+t[2]-1,i=+t[3],!t[4])return new Date(Date.UTC(n,r,i));if(o=+t[4],s=+t[5],a=+t[6],t[7]){for(l=t[7].slice(0,3);l.length<3;)l+="0";l=+l}return t[9]&&(u=+t[10],h=+(t[11]||0),c=(u*60+h)*6e4,t[9]==="-"&&(c=-c)),d=new Date(Date.UTC(n,r,i,o,s,a,l)),c&&d.setTime(d.getTime()-c),d}function TS(e){return e.toISOString()}var ES=new bt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:SS,construct:xS,instanceOf:Date,represent:TS});function AS(e){return e==="<<"||e===null}var $S=new bt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:AS}),Fu=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function PS(e){if(e===null)return!1;var t,n,r=0,i=e.length,o=Fu;for(n=0;n<i;n++)if(t=o.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;r+=6}return r%8===0}function LS(e){var t,n,r=e.replace(/[\r\n=]/g,""),i=r.length,o=Fu,s=0,a=[];for(t=0;t<i;t++)t%4===0&&t&&(a.push(s>>16&255),a.push(s>>8&255),a.push(s&255)),s=s<<6|o.indexOf(r.charAt(t));return n=i%4*6,n===0?(a.push(s>>16&255),a.push(s>>8&255),a.push(s&255)):n===18?(a.push(s>>10&255),a.push(s>>2&255)):n===12&&a.push(s>>4&255),new Uint8Array(a)}function MS(e){var t="",n=0,r,i,o=e.length,s=Fu;for(r=0;r<o;r++)r%3===0&&r&&(t+=s[n>>18&63],t+=s[n>>12&63],t+=s[n>>6&63],t+=s[n&63]),n=(n<<8)+e[r];return i=o%3,i===0?(t+=s[n>>18&63],t+=s[n>>12&63],t+=s[n>>6&63],t+=s[n&63]):i===2?(t+=s[n>>10&63],t+=s[n>>4&63],t+=s[n<<2&63],t+=s[64]):i===1&&(t+=s[n>>2&63],t+=s[n<<4&63],t+=s[64],t+=s[64]),t}function IS(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var BS=new bt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:PS,construct:LS,predicate:IS,represent:MS}),OS=Object.prototype.hasOwnProperty,FS=Object.prototype.toString;function RS(e){if(e===null)return!0;var t=[],n,r,i,o,s,a=e;for(n=0,r=a.length;n<r;n+=1){if(i=a[n],s=!1,FS.call(i)!=="[object Object]")return!1;for(o in i)if(OS.call(i,o))if(!s)s=!0;else return!1;if(!s)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}function NS(e){return e!==null?e:[]}var DS=new bt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:RS,construct:NS}),zS=Object.prototype.toString;function VS(e){if(e===null)return!0;var t,n,r,i,o,s=e;for(o=new Array(s.length),t=0,n=s.length;t<n;t+=1){if(r=s[t],zS.call(r)!=="[object Object]"||(i=Object.keys(r),i.length!==1))return!1;o[t]=[i[0],r[i[0]]]}return!0}function HS(e){if(e===null)return[];var t,n,r,i,o,s=e;for(o=new Array(s.length),t=0,n=s.length;t<n;t+=1)r=s[t],i=Object.keys(r),o[t]=[i[0],r[i[0]]];return o}var qS=new bt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:VS,construct:HS}),jS=Object.prototype.hasOwnProperty;function GS(e){if(e===null)return!0;var t,n=e;for(t in n)if(jS.call(n,t)&&n[t]!==null)return!1;return!0}function WS(e){return e!==null?e:{}}var US=new bt("tag:yaml.org,2002:set",{kind:"mapping",resolve:GS,construct:WS}),YS=wS.extend({implicit:[ES,$S],explicit:[BS,DS,qS,US]}),Mr=Object.prototype.hasOwnProperty,da=1,hg=2,pg=3,ha=4,Il=1,KS=2,Hh=3,XS=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,QS=/[\x85\u2028\u2029]/,ZS=/[,\[\]\{\}]/,fg=/^(?:!|!!|![a-z\-]+!)$/i,mg=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function qh(e){return Object.prototype.toString.call(e)}function Hn(e){return e===10||e===13}function Qr(e){return e===9||e===32}function Dt(e){return e===9||e===32||e===10||e===13}function yi(e){return e===44||e===91||e===93||e===123||e===125}function JS(e){var t;return 48<=e&&e<=57?e-48:(t=e|32,97<=t&&t<=102?t-97+10:-1)}function ex(e){return e===120?2:e===117?4:e===85?8:0}function tx(e){return 48<=e&&e<=57?e-48:-1}function jh(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function nx(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var gg=new Array(256),vg=new Array(256);for(var pi=0;pi<256;pi++)gg[pi]=jh(pi)?1:0,vg[pi]=jh(pi);function rx(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||YS,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function yg(e,t){var n={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return n.snippet=j6(n),new ar(t,n)}function ve(e,t){throw yg(e,t)}function pa(e,t){e.onWarning&&e.onWarning.call(null,yg(e,t))}var Gh={YAML:function(t,n,r){var i,o,s;t.version!==null&&ve(t,"duplication of %YAML directive"),r.length!==1&&ve(t,"YAML directive accepts exactly one argument"),i=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),i===null&&ve(t,"ill-formed argument of the YAML directive"),o=parseInt(i[1],10),s=parseInt(i[2],10),o!==1&&ve(t,"unacceptable YAML version of the document"),t.version=r[0],t.checkLineBreaks=s<2,s!==1&&s!==2&&pa(t,"unsupported YAML version of the document")},TAG:function(t,n,r){var i,o;r.length!==2&&ve(t,"TAG directive accepts exactly two arguments"),i=r[0],o=r[1],fg.test(i)||ve(t,"ill-formed tag handle (first argument) of the TAG directive"),Mr.call(t.tagMap,i)&&ve(t,'there is a previously declared suffix for "'+i+'" tag handle'),mg.test(o)||ve(t,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch{ve(t,"tag prefix is malformed: "+o)}t.tagMap[i]=o}};function Pr(e,t,n,r){var i,o,s,a;if(t<n){if(a=e.input.slice(t,n),r)for(i=0,o=a.length;i<o;i+=1)s=a.charCodeAt(i),s===9||32<=s&&s<=1114111||ve(e,"expected valid JSON character");else XS.test(a)&&ve(e,"the stream contains non-printable characters");e.result+=a}}function Wh(e,t,n,r){var i,o,s,a;for(Tt.isObject(n)||ve(e,"cannot merge mappings; the provided source object is unacceptable"),i=Object.keys(n),s=0,a=i.length;s<a;s+=1)o=i[s],Mr.call(t,o)||(t[o]=n[o],r[o]=!0)}function bi(e,t,n,r,i,o,s,a,l){var c,u;if(Array.isArray(i))for(i=Array.prototype.slice.call(i),c=0,u=i.length;c<u;c+=1)Array.isArray(i[c])&&ve(e,"nested arrays are not supported inside keys"),typeof i=="object"&&qh(i[c])==="[object Object]"&&(i[c]="[object Object]");if(typeof i=="object"&&qh(i)==="[object Object]"&&(i="[object Object]"),i=String(i),t===null&&(t={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(o))for(c=0,u=o.length;c<u;c+=1)Wh(e,t,o[c],n);else Wh(e,t,o,n);else!e.json&&!Mr.call(n,i)&&Mr.call(t,i)&&(e.line=s||e.line,e.lineStart=a||e.lineStart,e.position=l||e.position,ve(e,"duplicated mapping key")),i==="__proto__"?Object.defineProperty(t,i,{configurable:!0,enumerable:!0,writable:!0,value:o}):t[i]=o,delete n[i];return t}function Ru(e){var t;t=e.input.charCodeAt(e.position),t===10?e.position++:t===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):ve(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function lt(e,t,n){for(var r=0,i=e.input.charCodeAt(e.position);i!==0;){for(;Qr(i);)i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(t&&i===35)do i=e.input.charCodeAt(++e.position);while(i!==10&&i!==13&&i!==0);if(Hn(i))for(Ru(e),i=e.input.charCodeAt(e.position),r++,e.lineIndent=0;i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position);else break}return n!==-1&&r!==0&&e.lineIndent<n&&pa(e,"deficient indentation"),r}function Ya(e){var t=e.position,n;return n=e.input.charCodeAt(t),!!((n===45||n===46)&&n===e.input.charCodeAt(t+1)&&n===e.input.charCodeAt(t+2)&&(t+=3,n=e.input.charCodeAt(t),n===0||Dt(n)))}function Nu(e,t){t===1?e.result+=" ":t>1&&(e.result+=Tt.repeat(`
`,t-1))}function ix(e,t,n){var r,i,o,s,a,l,c,u,h=e.kind,d=e.result,f;if(f=e.input.charCodeAt(e.position),Dt(f)||yi(f)||f===35||f===38||f===42||f===33||f===124||f===62||f===39||f===34||f===37||f===64||f===96||(f===63||f===45)&&(i=e.input.charCodeAt(e.position+1),Dt(i)||n&&yi(i)))return!1;for(e.kind="scalar",e.result="",o=s=e.position,a=!1;f!==0;){if(f===58){if(i=e.input.charCodeAt(e.position+1),Dt(i)||n&&yi(i))break}else if(f===35){if(r=e.input.charCodeAt(e.position-1),Dt(r))break}else{if(e.position===e.lineStart&&Ya(e)||n&&yi(f))break;if(Hn(f))if(l=e.line,c=e.lineStart,u=e.lineIndent,lt(e,!1,-1),e.lineIndent>=t){a=!0,f=e.input.charCodeAt(e.position);continue}else{e.position=s,e.line=l,e.lineStart=c,e.lineIndent=u;break}}a&&(Pr(e,o,s,!1),Nu(e,e.line-l),o=s=e.position,a=!1),Qr(f)||(s=e.position+1),f=e.input.charCodeAt(++e.position)}return Pr(e,o,s,!1),e.result?!0:(e.kind=h,e.result=d,!1)}function ox(e,t){var n,r,i;if(n=e.input.charCodeAt(e.position),n!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=i=e.position;(n=e.input.charCodeAt(e.position))!==0;)if(n===39)if(Pr(e,r,e.position,!0),n=e.input.charCodeAt(++e.position),n===39)r=e.position,e.position++,i=e.position;else return!0;else Hn(n)?(Pr(e,r,i,!0),Nu(e,lt(e,!1,t)),r=i=e.position):e.position===e.lineStart&&Ya(e)?ve(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position);ve(e,"unexpected end of the stream within a single quoted scalar")}function sx(e,t){var n,r,i,o,s,a;if(a=e.input.charCodeAt(e.position),a!==34)return!1;for(e.kind="scalar",e.result="",e.position++,n=r=e.position;(a=e.input.charCodeAt(e.position))!==0;){if(a===34)return Pr(e,n,e.position,!0),e.position++,!0;if(a===92){if(Pr(e,n,e.position,!0),a=e.input.charCodeAt(++e.position),Hn(a))lt(e,!1,t);else if(a<256&&gg[a])e.result+=vg[a],e.position++;else if((s=ex(a))>0){for(i=s,o=0;i>0;i--)a=e.input.charCodeAt(++e.position),(s=JS(a))>=0?o=(o<<4)+s:ve(e,"expected hexadecimal character");e.result+=nx(o),e.position++}else ve(e,"unknown escape sequence");n=r=e.position}else Hn(a)?(Pr(e,n,r,!0),Nu(e,lt(e,!1,t)),n=r=e.position):e.position===e.lineStart&&Ya(e)?ve(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}ve(e,"unexpected end of the stream within a double quoted scalar")}function ax(e,t){var n=!0,r,i,o,s=e.tag,a,l=e.anchor,c,u,h,d,f,g=Object.create(null),m,y,b,k;if(k=e.input.charCodeAt(e.position),k===91)u=93,f=!1,a=[];else if(k===123)u=125,f=!0,a={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),k=e.input.charCodeAt(++e.position);k!==0;){if(lt(e,!0,t),k=e.input.charCodeAt(e.position),k===u)return e.position++,e.tag=s,e.anchor=l,e.kind=f?"mapping":"sequence",e.result=a,!0;n?k===44&&ve(e,"expected the node content, but found ','"):ve(e,"missed comma between flow collection entries"),y=m=b=null,h=d=!1,k===63&&(c=e.input.charCodeAt(e.position+1),Dt(c)&&(h=d=!0,e.position++,lt(e,!0,t))),r=e.line,i=e.lineStart,o=e.position,$i(e,t,da,!1,!0),y=e.tag,m=e.result,lt(e,!0,t),k=e.input.charCodeAt(e.position),(d||e.line===r)&&k===58&&(h=!0,k=e.input.charCodeAt(++e.position),lt(e,!0,t),$i(e,t,da,!1,!0),b=e.result),f?bi(e,a,g,y,m,b,r,i,o):h?a.push(bi(e,null,g,y,m,b,r,i,o)):a.push(m),lt(e,!0,t),k=e.input.charCodeAt(e.position),k===44?(n=!0,k=e.input.charCodeAt(++e.position)):n=!1}ve(e,"unexpected end of the stream within a flow collection")}function lx(e,t){var n,r,i=Il,o=!1,s=!1,a=t,l=0,c=!1,u,h;if(h=e.input.charCodeAt(e.position),h===124)r=!1;else if(h===62)r=!0;else return!1;for(e.kind="scalar",e.result="";h!==0;)if(h=e.input.charCodeAt(++e.position),h===43||h===45)Il===i?i=h===43?Hh:KS:ve(e,"repeat of a chomping mode identifier");else if((u=tx(h))>=0)u===0?ve(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?ve(e,"repeat of an indentation width identifier"):(a=t+u-1,s=!0);else break;if(Qr(h)){do h=e.input.charCodeAt(++e.position);while(Qr(h));if(h===35)do h=e.input.charCodeAt(++e.position);while(!Hn(h)&&h!==0)}for(;h!==0;){for(Ru(e),e.lineIndent=0,h=e.input.charCodeAt(e.position);(!s||e.lineIndent<a)&&h===32;)e.lineIndent++,h=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>a&&(a=e.lineIndent),Hn(h)){l++;continue}if(e.lineIndent<a){i===Hh?e.result+=Tt.repeat(`
`,o?1+l:l):i===Il&&o&&(e.result+=`
`);break}for(r?Qr(h)?(c=!0,e.result+=Tt.repeat(`
`,o?1+l:l)):c?(c=!1,e.result+=Tt.repeat(`
`,l+1)):l===0?o&&(e.result+=" "):e.result+=Tt.repeat(`
`,l):e.result+=Tt.repeat(`
`,o?1+l:l),o=!0,s=!0,l=0,n=e.position;!Hn(h)&&h!==0;)h=e.input.charCodeAt(++e.position);Pr(e,n,e.position,!1)}return!0}function Uh(e,t){var n,r=e.tag,i=e.anchor,o=[],s,a=!1,l;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=o),l=e.input.charCodeAt(e.position);l!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,ve(e,"tab characters must not be used in indentation")),!(l!==45||(s=e.input.charCodeAt(e.position+1),!Dt(s))));){if(a=!0,e.position++,lt(e,!0,-1)&&e.lineIndent<=t){o.push(null),l=e.input.charCodeAt(e.position);continue}if(n=e.line,$i(e,t,pg,!1,!0),o.push(e.result),lt(e,!0,-1),l=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&l!==0)ve(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break}return a?(e.tag=r,e.anchor=i,e.kind="sequence",e.result=o,!0):!1}function cx(e,t,n){var r,i,o,s,a,l,c=e.tag,u=e.anchor,h={},d=Object.create(null),f=null,g=null,m=null,y=!1,b=!1,k;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=h),k=e.input.charCodeAt(e.position);k!==0;){if(!y&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,ve(e,"tab characters must not be used in indentation")),r=e.input.charCodeAt(e.position+1),o=e.line,(k===63||k===58)&&Dt(r))k===63?(y&&(bi(e,h,d,f,g,null,s,a,l),f=g=m=null),b=!0,y=!0,i=!0):y?(y=!1,i=!0):ve(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,k=r;else{if(s=e.line,a=e.lineStart,l=e.position,!$i(e,n,hg,!1,!0))break;if(e.line===o){for(k=e.input.charCodeAt(e.position);Qr(k);)k=e.input.charCodeAt(++e.position);if(k===58)k=e.input.charCodeAt(++e.position),Dt(k)||ve(e,"a whitespace character is expected after the key-value separator within a block mapping"),y&&(bi(e,h,d,f,g,null,s,a,l),f=g=m=null),b=!0,y=!1,i=!1,f=e.tag,g=e.result;else if(b)ve(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=c,e.anchor=u,!0}else if(b)ve(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=c,e.anchor=u,!0}if((e.line===o||e.lineIndent>t)&&(y&&(s=e.line,a=e.lineStart,l=e.position),$i(e,t,ha,!0,i)&&(y?g=e.result:m=e.result),y||(bi(e,h,d,f,g,m,s,a,l),f=g=m=null),lt(e,!0,-1),k=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>t)&&k!==0)ve(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return y&&bi(e,h,d,f,g,null,s,a,l),b&&(e.tag=c,e.anchor=u,e.kind="mapping",e.result=h),b}function ux(e){var t,n=!1,r=!1,i,o,s;if(s=e.input.charCodeAt(e.position),s!==33)return!1;if(e.tag!==null&&ve(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),s===60?(n=!0,s=e.input.charCodeAt(++e.position)):s===33?(r=!0,i="!!",s=e.input.charCodeAt(++e.position)):i="!",t=e.position,n){do s=e.input.charCodeAt(++e.position);while(s!==0&&s!==62);e.position<e.length?(o=e.input.slice(t,e.position),s=e.input.charCodeAt(++e.position)):ve(e,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!Dt(s);)s===33&&(r?ve(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(t-1,e.position+1),fg.test(i)||ve(e,"named tag handle cannot contain such characters"),r=!0,t=e.position+1)),s=e.input.charCodeAt(++e.position);o=e.input.slice(t,e.position),ZS.test(o)&&ve(e,"tag suffix cannot contain flow indicator characters")}o&&!mg.test(o)&&ve(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch{ve(e,"tag name is malformed: "+o)}return n?e.tag=o:Mr.call(e.tagMap,i)?e.tag=e.tagMap[i]+o:i==="!"?e.tag="!"+o:i==="!!"?e.tag="tag:yaml.org,2002:"+o:ve(e,'undeclared tag handle "'+i+'"'),!0}function dx(e){var t,n;if(n=e.input.charCodeAt(e.position),n!==38)return!1;for(e.anchor!==null&&ve(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;n!==0&&!Dt(n)&&!yi(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&ve(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function hx(e){var t,n,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),t=e.position;r!==0&&!Dt(r)&&!yi(r);)r=e.input.charCodeAt(++e.position);return e.position===t&&ve(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),Mr.call(e.anchorMap,n)||ve(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],lt(e,!0,-1),!0}function $i(e,t,n,r,i){var o,s,a,l=1,c=!1,u=!1,h,d,f,g,m,y;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=s=a=ha===n||pg===n,r&&lt(e,!0,-1)&&(c=!0,e.lineIndent>t?l=1:e.lineIndent===t?l=0:e.lineIndent<t&&(l=-1)),l===1)for(;ux(e)||dx(e);)lt(e,!0,-1)?(c=!0,a=o,e.lineIndent>t?l=1:e.lineIndent===t?l=0:e.lineIndent<t&&(l=-1)):a=!1;if(a&&(a=c||i),(l===1||ha===n)&&(da===n||hg===n?m=t:m=t+1,y=e.position-e.lineStart,l===1?a&&(Uh(e,y)||cx(e,y,m))||ax(e,m)?u=!0:(s&&lx(e,m)||ox(e,m)||sx(e,m)?u=!0:hx(e)?(u=!0,(e.tag!==null||e.anchor!==null)&&ve(e,"alias node should not have any properties")):ix(e,m,da===n)&&(u=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):l===0&&(u=a&&Uh(e,y))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&ve(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),h=0,d=e.implicitTypes.length;h<d;h+=1)if(g=e.implicitTypes[h],g.resolve(e.result)){e.result=g.construct(e.result),e.tag=g.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(Mr.call(e.typeMap[e.kind||"fallback"],e.tag))g=e.typeMap[e.kind||"fallback"][e.tag];else for(g=null,f=e.typeMap.multi[e.kind||"fallback"],h=0,d=f.length;h<d;h+=1)if(e.tag.slice(0,f[h].tag.length)===f[h].tag){g=f[h];break}g||ve(e,"unknown tag !<"+e.tag+">"),e.result!==null&&g.kind!==e.kind&&ve(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+g.kind+'", not "'+e.kind+'"'),g.resolve(e.result,e.tag)?(e.result=g.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):ve(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||u}function px(e){var t=e.position,n,r,i,o=!1,s;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(s=e.input.charCodeAt(e.position))!==0&&(lt(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||s!==37));){for(o=!0,s=e.input.charCodeAt(++e.position),n=e.position;s!==0&&!Dt(s);)s=e.input.charCodeAt(++e.position);for(r=e.input.slice(n,e.position),i=[],r.length<1&&ve(e,"directive name must not be less than one character in length");s!==0;){for(;Qr(s);)s=e.input.charCodeAt(++e.position);if(s===35){do s=e.input.charCodeAt(++e.position);while(s!==0&&!Hn(s));break}if(Hn(s))break;for(n=e.position;s!==0&&!Dt(s);)s=e.input.charCodeAt(++e.position);i.push(e.input.slice(n,e.position))}s!==0&&Ru(e),Mr.call(Gh,r)?Gh[r](e,r,i):pa(e,'unknown document directive "'+r+'"')}if(lt(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,lt(e,!0,-1)):o&&ve(e,"directives end mark is expected"),$i(e,e.lineIndent-1,ha,!1,!0),lt(e,!0,-1),e.checkLineBreaks&&QS.test(e.input.slice(t,e.position))&&pa(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Ya(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,lt(e,!0,-1));return}if(e.position<e.length-1)ve(e,"end of the stream or a document separator is expected");else return}function bg(e,t){e=String(e),t=t||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var n=new rx(e,t),r=e.indexOf("\0");for(r!==-1&&(n.position=r,ve(n,"null byte is not allowed in input")),n.input+="\0";n.input.charCodeAt(n.position)===32;)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)px(n);return n.documents}function fx(e,t,n){t!==null&&typeof t=="object"&&typeof n>"u"&&(n=t,t=null);var r=bg(e,n);if(typeof t!="function")return r;for(var i=0,o=r.length;i<o;i+=1)t(r[i])}function mx(e,t){var n=bg(e,t);if(n.length!==0){if(n.length===1)return n[0];throw new ar("expected a single document in the stream, but found more")}}var gx=fx,vx=mx,yx={loadAll:gx,load:vx},bx=cg,_x=yx.load;function Cx(e){const t=e.match(r0);if(!t)return{text:e,metadata:{}};let n=_x(t[1],{schema:bx})??{};n=typeof n=="object"&&!Array.isArray(n)?n:{};const r={};return n.displayMode&&(r.displayMode=n.displayMode.toString()),n.title&&(r.title=n.title.toString()),n.config&&(r.config=n.config),{text:e.slice(t[0].length),metadata:r}}const kx=e=>e.replace(/\r\n?/g,`
`).replace(/<(\w+)([^>]*)>/g,(t,n,r)=>"<"+n+r.replace(/="([^"]*)"/g,"='$1'")+">"),wx=e=>{const{text:t,metadata:n}=Cx(e),{displayMode:r,title:i,config:o={}}=n;return r&&(o.gantt||(o.gantt={}),o.gantt.displayMode=r),{title:i,config:o,text:t}},Sx=e=>{const t=po.detectInit(e)??{},n=po.detectDirective(e,"wrap");return Array.isArray(n)?t.wrap=n.some(({type:r})=>{}):(n==null?void 0:n.type)==="wrap"&&(t.wrap=!0),{text:h5(e),directive:t}};function _g(e){const t=kx(e),n=wx(t),r=Sx(n.text),i=S0(n.config,r.directive);return e=L6(r.text),{code:e,title:n.title,config:i}}const xx=5e4,Tx="graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa",Ex="sandbox",Ax="loose",$x="http://www.w3.org/2000/svg",Px="http://www.w3.org/1999/xlink",Lx="http://www.w3.org/1999/xhtml",Mx="100%",Ix="100%",Bx="border:0;margin:0;",Ox="margin:0",Fx="allow-top-navigation-by-user-activation allow-popups",Rx='The "iframe" tag is not supported by your browser.',Nx=["foreignobject"],Dx=["dominant-baseline"];function Cg(e){const t=_g(e);return la(),ek(t.config??{}),t}async function zx(e,t){Ou(),e=Cg(e).code;try{await Du(e)}catch(n){if(t!=null&&t.suppressErrors)return!1;throw n}return!0}const Yh=(e,t,n=[])=>`
.${e} ${t} { ${n.join(" !important; ")} !important; }`,Vx=(e,t={})=>{var n;let r="";if(e.themeCSS!==void 0&&(r+=`
${e.themeCSS}`),e.fontFamily!==void 0&&(r+=`
:root { --mermaid-font-family: ${e.fontFamily}}`),e.altFontFamily!==void 0&&(r+=`
:root { --mermaid-alt-font-family: ${e.altFontFamily}}`),!Pl(t)){const a=e.htmlLabels||((n=e.flowchart)==null?void 0:n.htmlLabels)?["> *","span"]:["rect","polygon","ellipse","circle","path"];for(const l in t){const c=t[l];Pl(c.styles)||a.forEach(u=>{r+=Yh(c.id,u,c.styles)}),Pl(c.textStyles)||(r+=Yh(c.id,"tspan",c.textStyles))}}return r},Hx=(e,t,n,r)=>{const i=Vx(e,n),o=_w(t,i,e.themeVariables);return kc(Y5(`${r}{${o}}`),X5)},qx=(e="",t,n)=>{let r=e;return!n&&!t&&(r=r.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g,'marker-end="url(#')),r=B5(r),r=r.replace(/<br>/g,"<br/>"),r},jx=(e="",t)=>{var n,r;const i=(r=(n=t==null?void 0:t.viewBox)==null?void 0:n.baseVal)!=null&&r.height?t.viewBox.baseVal.height+"px":Ix,o=btoa('<body style="'+Ox+'">'+e+"</body>");return`<iframe style="width:${Mx};height:${i};${Bx}" src="data:text/html;base64,${o}" sandbox="${Fx}">
  ${Rx}
</iframe>`},Kh=(e,t,n,r,i)=>{const o=e.append("div");o.attr("id",n),r&&o.attr("style",r);const s=o.append("svg").attr("id",t).attr("width","100%").attr("xmlns",$x);return i&&s.attr("xmlns:xlink",i),s.append("g"),e};function Xh(e,t){return e.append("iframe").attr("id",t).attr("style","width: 100%; height: 100%;").attr("sandbox","")}const Gx=(e,t,n,r)=>{var i,o,s;(i=e.getElementById(t))==null||i.remove(),(o=e.getElementById(n))==null||o.remove(),(s=e.getElementById(r))==null||s.remove()},Wx=async function(e,t,n){var r,i,o,s,a,l;Ou();const c=Cg(t);t=c.code;const u=Wn();ye.debug(u),t.length>((u==null?void 0:u.maxTextSize)??xx)&&(t=Tx);const h="#"+e,d="i"+e,f="#"+d,g="d"+e,m="#"+g;let y=cn("body");const b=u.securityLevel===Ex,k=u.securityLevel===Ax,_=u.fontFamily;if(n!==void 0){if(n&&(n.innerHTML=""),b){const Q=Xh(cn(n),d);y=cn(Q.nodes()[0].contentDocument.body),y.node().style.margin=0}else y=cn(n);Kh(y,e,g,`font-family: ${_}`,Px)}else{if(Gx(document,e,g,d),b){const Q=Xh(cn("body"),d);y=cn(Q.nodes()[0].contentDocument.body),y.node().style.margin=0}else y=cn("body");Kh(y,e,g)}let x,T;try{x=await Du(t,{title:c.title})}catch(Q){x=new sg("error"),T=Q}const A=y.select(m).node(),E=x.type,O=A.firstChild,J=O.firstChild,R=(i=(r=x.renderer).getClasses)==null?void 0:i.call(r,t,x),P=Hx(u,E,R,h),K=document.createElement("style");K.innerHTML=P,O.insertBefore(K,J);try{await x.renderer.draw(t,e,Mh,x)}catch(Q){throw Rw.draw(t,e,Mh),Q}const H=y.select(`${m} svg`),N=(s=(o=x.db).getAccTitle)==null?void 0:s.call(o),G=(l=(a=x.db).getAccDescription)==null?void 0:l.call(a);Yx(E,H,N,G),y.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns",Lx);let q=y.select(m).node().innerHTML;if(ye.debug("config.arrowMarkerAbsolute",u.arrowMarkerAbsolute),q=qx(q,b,Xm(u.arrowMarkerAbsolute)),b){const Q=y.select(m+" svg").node();q=jx(q,Q)}else k||(q=Si.sanitize(q,{ADD_TAGS:Nx,ADD_ATTR:Dx}));if(a6(),T)throw T;const V=cn(b?f:m).node();return V&&"remove"in V&&V.remove(),{svg:q,bindFunctions:x.db.bindFunctions}};function Ux(e={}){var t;e!=null&&e.fontFamily&&!((t=e.themeVariables)!=null&&t.fontFamily)&&(e.themeVariables||(e.themeVariables={}),e.themeVariables.fontFamily=e.fontFamily),Z5(e),e!=null&&e.theme&&e.theme in ur?e.themeVariables=ur[e.theme].getThemeVariables(e.themeVariables):e&&(e.themeVariables=ur.default.getThemeVariables(e.themeVariables));const n=typeof e=="object"?Q5(e):M0();su(n.logLevel),Ou()}const Du=(e,t={})=>{const{code:n}=_g(e);return s6(n,t)};function Yx(e,t,n,r){$6(t,e),P6(t,n,r,t.attr("id"))}const ni=Object.freeze({render:Wx,parse:zx,getDiagramFromText:Du,initialize:Ux,getConfig:Wn,setConfig:I0,getSiteConfig:M0,updateSiteConfig:J5,reset:()=>{la()},globalReset:()=>{la(Ei)},defaultConfig:Ei});su(Wn().logLevel);la(Wn());const Kx=async()=>{ye.debug("Loading registered diagrams");const t=(await Promise.allSettled(Object.entries(xi).map(async([n,{detector:r,loader:i}])=>{if(i)try{Bu(n)}catch{try{const{diagram:s,id:a}=await i();ua(a,s,r)}catch(s){throw ye.error(`Failed to load external diagram with key ${n}. Removing from detectors.`),delete xi[n],s}}}))).filter(n=>n.status==="rejected");if(t.length>0){ye.error(`Failed to load ${t.length} external diagrams`);for(const n of t)ye.error(n);throw new Error(`Failed to load ${t.length} external diagrams`)}},Xx=(e,t,n)=>{ye.warn(e),w0(e)?(n&&n(e.str,e.hash),t.push({...e,message:e.str,error:e})):(n&&n(e),e instanceof Error&&t.push({str:e.message,message:e.message,hash:e.name,error:e}))},kg=async function(e={querySelector:".mermaid"}){try{await Qx(e)}catch(t){if(w0(t)&&ye.error(t.str),qt.parseError&&qt.parseError(t),!e.suppressErrors)throw ye.error("Use the suppressErrors option to suppress these errors"),t}},Qx=async function({postRenderCallback:e,querySelector:t,nodes:n}={querySelector:".mermaid"}){const r=ni.getConfig();ye.debug(`${e?"":"No "}Callback function found`);let i;if(n)i=n;else if(t)i=document.querySelectorAll(t);else throw new Error("Nodes and querySelector are both undefined");ye.debug(`Found ${i.length} diagrams`),(r==null?void 0:r.startOnLoad)!==void 0&&(ye.debug("Start On Load: "+(r==null?void 0:r.startOnLoad)),ni.updateSiteConfig({startOnLoad:r==null?void 0:r.startOnLoad}));const o=new po.InitIDGenerator(r.deterministicIds,r.deterministicIDSeed);let s;const a=[];for(const l of Array.from(i)){ye.info("Rendering diagram: "+l.id);/*! Check if previously processed */if(l.getAttribute("data-processed"))continue;l.setAttribute("data-processed","true");const c=`mermaid-${o.next()}`;s=l.innerHTML,s=dy(po.entityDecode(s)).trim().replace(/<br\s*\/?>/gi,"<br/>");const u=po.detectInit(s);u&&ye.debug("Detected early reinit: ",u);try{const{svg:h,bindFunctions:d}=await Tg(c,s,l);l.innerHTML=h,e&&await e(c),d&&d(l)}catch(h){Xx(h,a,qt.parseError)}}if(a.length>0)throw a[0]},wg=function(e){ni.initialize(e)},Zx=async function(e,t,n){ye.warn("mermaid.init is deprecated. Please use run instead."),e&&wg(e);const r={postRenderCallback:n,querySelector:".mermaid"};typeof t=="string"?r.querySelector=t:t&&(t instanceof HTMLElement?r.nodes=[t]:r.nodes=t),await kg(r)},Jx=async(e,{lazyLoad:t=!0}={})=>{o0(...e),t===!1&&await Kx()},Sg=function(){if(qt.startOnLoad){const{startOnLoad:e}=ni.getConfig();e&&qt.run().catch(t=>ye.error("Mermaid failed to initialize",t))}};if(typeof document<"u"){/*!
 * Wait for document loaded before starting the execution
 */window.addEventListener("load",Sg,!1)}const eT=function(e){qt.parseError=e},fa=[];let Bl=!1;const xg=async()=>{if(!Bl){for(Bl=!0;fa.length>0;){const e=fa.shift();if(e)try{await e()}catch(t){ye.error("Error executing queue",t)}}Bl=!1}},tT=async(e,t)=>new Promise((n,r)=>{const i=()=>new Promise((o,s)=>{ni.parse(e,t).then(a=>{o(a),n(a)},a=>{var l;ye.error("Error parsing",a),(l=qt.parseError)==null||l.call(qt,a),s(a),r(a)})});fa.push(i),xg().catch(r)}),Tg=(e,t,n)=>new Promise((r,i)=>{const o=()=>new Promise((s,a)=>{ni.render(e,t,n).then(l=>{s(l),r(l)},l=>{var c;ye.error("Error parsing",l),(c=qt.parseError)==null||c.call(qt,l),a(l),i(l)})});fa.push(o),xg().catch(i)}),qt={startOnLoad:!0,mermaidAPI:ni,parse:tT,render:Tg,init:Zx,run:kg,registerExternalDiagrams:Jx,initialize:wg,parseError:void 0,contentLoaded:Sg,setParseErrorHandler:eT,detectType:Da},nT=async e=>{try{qt.registerExternalDiagrams&&await qt.registerExternalDiagrams(e)}catch(t){console.error(t)}},rT=async(e,t,n)=>{qt.initialize(n);const{svg:r}=await qt.render(e,t);return r},iT=["innerHTML"],oT={__name:"Mermaid",props:{graph:{type:String,required:!0},id:{type:String,required:!0}},setup(e){const t=L({securityLevel:"loose",startOnLoad:!1,externalDiagrams:[]}),{page:n}=pt(),{frontmatter:r}=nu(n.value),i=r.mermaidTheme||"",o=e,s=L(null);let a=null;Ae(async()=>{var h;await nT(t.value.externalDiagrams);let c=await We(()=>import("./virtual_mermaid-config.DDnGl6nM.js"),__vite__mapDeps([]));c!=null&&c.default&&(t.value=c.default),a=new MutationObserver(async()=>await l()),a.observe(document.documentElement,{attributes:!0}),await l(),((h=/<img([\w\W]+?)>/.exec(decodeURIComponent(o.graph)))==null?void 0:h.length)>0&&setTimeout(()=>{let d=document.getElementsByTagName("img"),f=Array.from(d);f.length&&Promise.all(f.filter(g=>!g.complete).map(g=>new Promise(m=>{g.onload=g.onerror=m}))).then(async()=>{await l()})},100)}),Yn(()=>a.disconnect());const l=async()=>{const c=document.documentElement.classList.contains("dark");let u={...t.value};i&&(u.theme=i),c&&(u.theme="dark");let h=await rT(o.id,decodeURIComponent(o.graph),u);const d=Math.random().toString(36).substring(7);s.value=`${h} <span style="display: none">${d}</span>`};return(c,u)=>(v(),C("div",{innerHTML:s.value,class:"mermaid"},null,8,iT))}},sT=B({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,n)=>(v(),C("span",{class:W(["VPBadge",t.type])},[M(t.$slots,"default",{},()=>[Fe(ee(t.text),1)])],2))}}),aT={key:0,class:"VPBackdrop"},lT=B({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(v(),X(Zt,{name:"fade"},{default:$(()=>[t.show?(v(),C("div",aT)):I("",!0)]),_:1}))}}),cT=de(lT,[["__scopeId","data-v-08373a59"]]),Le=pt;function uT(e,t){let n,r=!1;return()=>{n&&clearTimeout(n),r?n=setTimeout(e,t):(e(),(r=!0)&&setTimeout(()=>r=!1,t))}}function Ac(e){return/^\//.test(e)?e:`/${e}`}function zu(e){const{pathname:t,search:n,hash:r,protocol:i}=new URL(e,"http://a.com");if(Yv(e)||e.startsWith("#")||!i.startsWith("http")||!Kv(t))return e;const{site:o}=Le(),s=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${n}${r}`);return Bn(s)}const Vu=L(Ri?location.hash:"");Ri&&window.addEventListener("hashchange",()=>{Vu.value=location.hash});function Go({removeCurrent:e=!0,correspondingLink:t=!1}={}){const{site:n,localeIndex:r,page:i,theme:o}=Le(),s=w(()=>{var l,c;return{label:(l=n.value.locales[r.value])==null?void 0:l.label,link:((c=n.value.locales[r.value])==null?void 0:c.link)||(r.value==="root"?"/":`/${r.value}/`)}});return{localeLinks:w(()=>Object.entries(n.value.locales).flatMap(([l,c])=>e&&s.value.label===c.label?[]:{text:c.label,link:dT(c.link||(l==="root"?"/":`/${l}/`),o.value.i18nRouting!==!1&&t,i.value.relativePath.slice(s.value.link.length-1),!n.value.cleanUrls)+Vu.value})),currentLang:s}}function dT(e,t,n,r){return t?e.replace(/\/$/,"")+Ac(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):e}const hT=e=>(Xe("data-v-76cd9243"),e=e(),Qe(),e),pT={class:"NotFound"},fT={class:"code"},mT={class:"title"},gT=hT(()=>S("div",{class:"divider"},null,-1)),vT={class:"quote"},yT={class:"action"},bT=["href","aria-label"],_T=B({__name:"NotFound",setup(e){const{site:t,theme:n}=Le(),{localeLinks:r}=Go({removeCurrent:!1}),i=L("/");return Ae(()=>{var s;const o=window.location.pathname.replace(t.value.base,"").replace(/(^.*?\/).*$/,"/$1");r.value.length&&(i.value=((s=r.value.find(({link:a})=>a.startsWith(o)))==null?void 0:s.link)||r.value[0].link)}),(o,s)=>{var a,l,c,u,h;return v(),C("div",pT,[S("p",fT,ee(((a=p(n).notFound)==null?void 0:a.code)??"404"),1),S("h1",mT,ee(((l=p(n).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),gT,S("blockquote",vT,ee(((c=p(n).notFound)==null?void 0:c.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),S("div",yT,[S("a",{class:"link",href:p(Bn)(i.value),"aria-label":((u=p(n).notFound)==null?void 0:u.linkLabel)??"go to home"},ee(((h=p(n).notFound)==null?void 0:h.linkText)??"Take me home"),9,bT)])])}}}),CT=de(_T,[["__scopeId","data-v-76cd9243"]]);function Eg(e,t){if(Array.isArray(e))return Vs(e);if(e==null)return[];t=Ac(t);const n=Object.keys(e).sort((i,o)=>o.split("/").length-i.split("/").length).find(i=>t.startsWith(Ac(i))),r=n?e[n]:[];return Array.isArray(r)?Vs(r):Vs(r.items,r.base)}function kT(e){const t=[];let n=0;for(const r in e){const i=e[r];if(i.items){n=t.push(i);continue}t[n]||t.push({items:[]}),t[n].items.push(i)}return t}function wT(e){const t=[];function n(r){for(const i of r)i.text&&i.link&&t.push({text:i.text,link:i.link,docFooterText:i.docFooterText}),i.items&&n(i.items)}return n(e),t}function $c(e,t){return Array.isArray(t)?t.some(n=>$c(e,n)):Jr(e,t.link)?!0:t.items?$c(e,t.items):!1}function Vs(e,t){return[...e].map(n=>{const r={...n},i=r.base||t;return i&&r.link&&(r.link=i+r.link),r.items&&(r.items=Vs(r.items,i)),r})}function yr(){const{frontmatter:e,page:t,theme:n}=Le(),r=oc("(min-width: 960px)"),i=L(!1),o=w(()=>{const m=n.value.sidebar,y=t.value.relativePath;return m?Eg(m,y):[]}),s=L(o.value);oe(o,(m,y)=>{JSON.stringify(m)!==JSON.stringify(y)&&(s.value=o.value)});const a=w(()=>e.value.sidebar!==!1&&s.value.length>0&&e.value.layout!=="home"),l=w(()=>c?e.value.aside==null?n.value.aside==="left":e.value.aside==="left":!1),c=w(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:n.value.aside!==!1),u=w(()=>a.value&&r.value),h=w(()=>a.value?kT(s.value):[]);function d(){i.value=!0}function f(){i.value=!1}function g(){i.value?f():d()}return{isOpen:i,sidebar:s,sidebarGroups:h,hasSidebar:a,hasAside:c,leftAside:l,isSidebarEnabled:u,open:d,close:f,toggle:g}}function ST(e,t){let n;Fn(()=>{n=e.value?document.activeElement:void 0}),Ae(()=>{window.addEventListener("keyup",r)}),Yn(()=>{window.removeEventListener("keyup",r)});function r(i){i.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}function xT(e){const{page:t}=Le(),n=L(!1),r=w(()=>e.value.collapsed!=null),i=w(()=>!!e.value.link),o=L(!1),s=()=>{o.value=Jr(t.value.relativePath,e.value.link)};oe([t,e,Vu],s),Ae(s);const a=w(()=>o.value?!0:e.value.items?$c(t.value.relativePath,e.value.items):!1),l=w(()=>!!(e.value.items&&e.value.items.length));Fn(()=>{n.value=!!(r.value&&e.value.collapsed)}),Gf(()=>{(o.value||a.value)&&(n.value=!1)});function c(){r.value&&(n.value=!n.value)}return{collapsed:n,collapsible:r,isLink:i,isActiveLink:o,hasActiveLink:a,hasChildren:l,toggle:c}}function TT(){const{hasSidebar:e}=yr(),t=oc("(min-width: 960px)"),n=oc("(min-width: 1280px)");return{isAsideEnabled:w(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const Pc=[];function Ag(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function Hu(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const r=Number(n.tagName[1]);return{element:n,title:ET(n),link:"#"+n.id,level:r}});return AT(t,e)}function ET(e){let t="";for(const n of e.childNodes)if(n.nodeType===1){if(n.classList.contains("VPBadge")||n.classList.contains("header-anchor")||n.classList.contains("ignore-header"))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function AT(e,t){if(t===!1)return[];const n=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[r,i]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;e=e.filter(s=>s.level>=r&&s.level<=i),Pc.length=0;for(const{element:s,link:a}of e)Pc.push({element:s,link:a});const o=[];e:for(let s=0;s<e.length;s++){const a=e[s];if(s===0)o.push(a);else{for(let l=s-1;l>=0;l--){const c=e[l];if(c.level<a.level){(c.children||(c.children=[])).push(a);continue e}}o.push(a)}}return o}function $T(e,t){const{isAsideEnabled:n}=TT(),r=uT(o,100);let i=null;Ae(()=>{requestAnimationFrame(o),window.addEventListener("scroll",r)}),Wf(()=>{s(location.hash)}),Yn(()=>{window.removeEventListener("scroll",r)});function o(){if(!n.value)return;const a=window.scrollY,l=window.innerHeight,c=document.body.offsetHeight,u=Math.abs(a+l-c)<1,h=Pc.map(({element:f,link:g})=>({link:g,top:PT(f)})).filter(({top:f})=>!Number.isNaN(f)).sort((f,g)=>f.top-g.top);if(!h.length){s(null);return}if(a<1){s(null);return}if(u){s(h[h.length-1].link);return}let d=null;for(const{link:f,top:g}of h){if(g>a+Xv()+4)break;d=f}s(d)}function s(a){i&&i.classList.remove("active"),a==null?i=null:i=e.value.querySelector(`a[href="${decodeURIComponent(a)}"]`);const l=i;l?(l.classList.add("active"),t.value.style.top=l.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function PT(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}const LT=["href","title"],MT=B({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:n}){const r=n.href.split("#")[1],i=document.getElementById(decodeURIComponent(r));i==null||i.focus({preventScroll:!0})}return(n,r)=>{const i=st("VPDocOutlineItem",!0);return v(),C("ul",{class:W(["VPDocOutlineItem",n.root?"root":"nested"])},[(v(!0),C(he,null,Te(n.headers,({children:o,link:s,title:a})=>(v(),C("li",null,[S("a",{class:"outline-link",href:s,onClick:t,title:a},ee(a),9,LT),o!=null&&o.length?(v(),X(i,{key:0,headers:o},null,8,["headers"])):I("",!0)]))),256))],2)}}}),$g=de(MT,[["__scopeId","data-v-235f682f"]]),IT=e=>(Xe("data-v-f3ecfc5a"),e=e(),Qe(),e),BT={class:"content"},OT={class:"outline-title",role:"heading","aria-level":"2"},FT={"aria-labelledby":"doc-outline-aria-label"},RT=IT(()=>S("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),NT=B({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:n}=Le(),r=Mn([]);$a(()=>{r.value=Hu(t.value.outline??n.value.outline)});const i=L(),o=L();return $T(i,o),(s,a)=>(v(),C("div",{class:W(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:i,role:"navigation"},[S("div",BT,[S("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),S("div",OT,ee(p(Ag)(p(n))),1),S("nav",FT,[RT,j($g,{headers:r.value,root:!0},null,8,["headers"])])])],2))}}),Pg=de(NT,[["__scopeId","data-v-f3ecfc5a"]]),DT={class:"VPDocAsideCarbonAds"},zT=B({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(n,r)=>(v(),C("div",DT,[j(p(t),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),VT=e=>(Xe("data-v-1bea03b4"),e=e(),Qe(),e),HT={class:"VPDocAside"},qT=VT(()=>S("div",{class:"spacer"},null,-1)),jT=B({__name:"VPDocAside",setup(e){const{theme:t}=Le();return(n,r)=>(v(),C("div",HT,[M(n.$slots,"aside-top",{},void 0,!0),M(n.$slots,"aside-outline-before",{},void 0,!0),j(Pg),M(n.$slots,"aside-outline-after",{},void 0,!0),qT,M(n.$slots,"aside-ads-before",{},void 0,!0),p(t).carbonAds?(v(),X(zT,{key:0,"carbon-ads":p(t).carbonAds},null,8,["carbon-ads"])):I("",!0),M(n.$slots,"aside-ads-after",{},void 0,!0),M(n.$slots,"aside-bottom",{},void 0,!0)]))}}),GT=de(jT,[["__scopeId","data-v-1bea03b4"]]);function WT(){const{theme:e,page:t}=Le();return w(()=>{const{text:n="Edit this page",pattern:r=""}=e.value.editLink||{};let i;return typeof r=="function"?i=r(t.value):i=r.replace(/:path/g,t.value.filePath),{url:i,text:n}})}function UT(){const{page:e,theme:t,frontmatter:n}=Le();return w(()=>{var l,c,u,h,d,f,g,m;const r=Eg(t.value.sidebar,e.value.relativePath),i=wT(r),o=i.findIndex(y=>Jr(e.value.relativePath,y.link)),s=((l=t.value.docFooter)==null?void 0:l.prev)===!1&&!n.value.prev||n.value.prev===!1,a=((c=t.value.docFooter)==null?void 0:c.next)===!1&&!n.value.next||n.value.next===!1;return{prev:s?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((u=i[o-1])==null?void 0:u.docFooterText)??((h=i[o-1])==null?void 0:h.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((d=i[o-1])==null?void 0:d.link)},next:a?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((f=i[o+1])==null?void 0:f.docFooterText)??((g=i[o+1])==null?void 0:g.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((m=i[o+1])==null?void 0:m.link)}}})}const qn=B({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,n=w(()=>t.tag??(t.href?"a":"span")),r=w(()=>t.href&&Uf.test(t.href));return(i,o)=>(v(),X(Je(n.value),{class:W(["VPLink",{link:i.href,"vp-external-link-icon":r.value,"no-icon":i.noIcon}]),href:i.href?p(zu)(i.href):void 0,target:i.target??(r.value?"_blank":void 0),rel:i.rel??(r.value?"noreferrer":void 0)},{default:$(()=>[M(i.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),YT={class:"VPLastUpdated"},KT=["datetime"],XT=B({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n,frontmatter:r,lang:i}=Le(),o=w(()=>new Date(r.value.lastUpdated??n.value.lastUpdated)),s=w(()=>o.value.toISOString()),a=L("");return Ae(()=>{Fn(()=>{var l,c,u;a.value=new Intl.DateTimeFormat((c=(l=t.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&c.forceLocale?i.value:void 0,((u=t.value.lastUpdated)==null?void 0:u.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(l,c)=>{var u;return v(),C("p",YT,[Fe(ee(((u=p(t).lastUpdated)==null?void 0:u.text)||p(t).lastUpdatedText||"Last updated")+": ",1),S("time",{datetime:s.value},ee(a.value),9,KT)])}}}),QT=de(XT,[["__scopeId","data-v-1ad63df7"]]),ZT=e=>(Xe("data-v-d202ca88"),e=e(),Qe(),e),JT={key:0,class:"VPDocFooter"},e9={key:0,class:"edit-info"},t9={key:0,class:"edit-link"},n9=ZT(()=>S("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),r9={key:1,class:"last-updated"},i9={key:1,class:"prev-next"},o9={class:"pager"},s9=["innerHTML"],a9=["innerHTML"],l9={class:"pager"},c9=["innerHTML"],u9=["innerHTML"],d9=B({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:r}=Le(),i=WT(),o=UT(),s=w(()=>t.value.editLink&&r.value.editLink!==!1),a=w(()=>n.value.lastUpdated&&r.value.lastUpdated!==!1),l=w(()=>s.value||a.value||o.value.prev||o.value.next);return(c,u)=>{var h,d,f,g;return l.value?(v(),C("footer",JT,[M(c.$slots,"doc-footer-before",{},void 0,!0),s.value||a.value?(v(),C("div",e9,[s.value?(v(),C("div",t9,[j(qn,{class:"edit-link-button",href:p(i).url,"no-icon":!0},{default:$(()=>[n9,Fe(" "+ee(p(i).text),1)]),_:1},8,["href"])])):I("",!0),a.value?(v(),C("div",r9,[j(QT)])):I("",!0)])):I("",!0),(h=p(o).prev)!=null&&h.link||(d=p(o).next)!=null&&d.link?(v(),C("nav",i9,[S("div",o9,[(f=p(o).prev)!=null&&f.link?(v(),X(qn,{key:0,class:"pager-link prev",href:p(o).prev.link},{default:$(()=>{var m;return[S("span",{class:"desc",innerHTML:((m=p(t).docFooter)==null?void 0:m.prev)||"Previous page"},null,8,s9),S("span",{class:"title",innerHTML:p(o).prev.text},null,8,a9)]}),_:1},8,["href"])):I("",!0)]),S("div",l9,[(g=p(o).next)!=null&&g.link?(v(),X(qn,{key:0,class:"pager-link next",href:p(o).next.link},{default:$(()=>{var m;return[S("span",{class:"desc",innerHTML:((m=p(t).docFooter)==null?void 0:m.next)||"Next page"},null,8,c9),S("span",{class:"title",innerHTML:p(o).next.text},null,8,u9)]}),_:1},8,["href"])):I("",!0)])])):I("",!0)])):I("",!0)}}}),h9=de(d9,[["__scopeId","data-v-d202ca88"]]),p9=e=>(Xe("data-v-178d3aa4"),e=e(),Qe(),e),f9={class:"container"},m9=p9(()=>S("div",{class:"aside-curtain"},null,-1)),g9={class:"aside-container"},v9={class:"aside-content"},y9={class:"content"},b9={class:"content-container"},_9={class:"main"},C9=B({__name:"VPDoc",setup(e){const{theme:t}=Le(),n=Kn(),{hasSidebar:r,hasAside:i,leftAside:o}=yr(),s=w(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(a,l)=>{const c=st("Content");return v(),C("div",{class:W(["VPDoc",{"has-sidebar":p(r),"has-aside":p(i)}])},[M(a.$slots,"doc-top",{},void 0,!0),S("div",f9,[p(i)?(v(),C("div",{key:0,class:W(["aside",{"left-aside":p(o)}])},[m9,S("div",g9,[S("div",v9,[j(GT,null,{"aside-top":$(()=>[M(a.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":$(()=>[M(a.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":$(()=>[M(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":$(()=>[M(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":$(()=>[M(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":$(()=>[M(a.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):I("",!0),S("div",y9,[S("div",b9,[M(a.$slots,"doc-before",{},void 0,!0),S("main",_9,[j(c,{class:W(["vp-doc",[s.value,p(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),j(h9,null,{"doc-footer-before":$(()=>[M(a.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),M(a.$slots,"doc-after",{},void 0,!0)])])]),M(a.$slots,"doc-bottom",{},void 0,!0)],2)}}}),k9=de(C9,[["__scopeId","data-v-178d3aa4"]]),w9=B({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,n=w(()=>t.href&&Uf.test(t.href)),r=w(()=>t.tag||t.href?"a":"button");return(i,o)=>(v(),X(Je(r.value),{class:W(["VPButton",[i.size,i.theme]]),href:i.href?p(zu)(i.href):void 0,target:t.target??(n.value?"_blank":void 0),rel:t.rel??(n.value?"noreferrer":void 0)},{default:$(()=>[Fe(ee(i.text),1)]),_:1},8,["class","href","target","rel"]))}}),S9=de(w9,[["__scopeId","data-v-0e7337e9"]]),x9=["src","alt"],T9=B({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,n)=>{const r=st("VPImage",!0);return t.image?(v(),C(he,{key:0},[typeof t.image=="string"||"src"in t.image?(v(),C("img",Qt({key:0,class:"VPImage"},typeof t.image=="string"?t.$attrs:{...t.image,...t.$attrs},{src:p(Bn)(typeof t.image=="string"?t.image:t.image.src),alt:t.alt??(typeof t.image=="string"?"":t.image.alt||"")}),null,16,x9)):(v(),C(he,{key:1},[j(r,Qt({class:"dark",image:t.image.dark,alt:t.image.alt},t.$attrs),null,16,["image","alt"]),j(r,Qt({class:"light",image:t.image.light,alt:t.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):I("",!0)}}}),ma=de(T9,[["__scopeId","data-v-e36956fe"]]),E9=e=>(Xe("data-v-ca1f2a14"),e=e(),Qe(),e),A9={class:"container"},$9={class:"main"},P9={key:0,class:"name"},L9=["innerHTML"],M9=["innerHTML"],I9=["innerHTML"],B9={key:0,class:"actions"},O9={key:0,class:"image"},F9={class:"image-container"},R9=E9(()=>S("div",{class:"image-bg"},null,-1)),N9=B({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=Ee("hero-image-slot-exists");return(n,r)=>(v(),C("div",{class:W(["VPHero",{"has-image":n.image||p(t)}])},[S("div",A9,[S("div",$9,[M(n.$slots,"home-hero-info-before",{},void 0,!0),M(n.$slots,"home-hero-info",{},()=>[n.name?(v(),C("h1",P9,[S("span",{innerHTML:n.name,class:"clip"},null,8,L9)])):I("",!0),n.text?(v(),C("p",{key:1,innerHTML:n.text,class:"text"},null,8,M9)):I("",!0),n.tagline?(v(),C("p",{key:2,innerHTML:n.tagline,class:"tagline"},null,8,I9)):I("",!0)],!0),M(n.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(v(),C("div",B9,[(v(!0),C(he,null,Te(n.actions,i=>(v(),C("div",{key:i.link,class:"action"},[j(S9,{tag:"a",size:"medium",theme:i.theme,text:i.text,href:i.link,target:i.target,rel:i.rel},null,8,["theme","text","href","target","rel"])]))),128))])):I("",!0),M(n.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||p(t)?(v(),C("div",O9,[S("div",F9,[R9,M(n.$slots,"home-hero-image",{},()=>[n.image?(v(),X(ma,{key:0,class:"image-src",image:n.image},null,8,["image"])):I("",!0)],!0)])])):I("",!0)])],2))}}),D9=de(N9,[["__scopeId","data-v-ca1f2a14"]]),z9=B({__name:"VPHomeHero",setup(e){const{frontmatter:t}=Le();return(n,r)=>p(t).hero?(v(),X(D9,{key:0,class:"VPHomeHero",name:p(t).hero.name,text:p(t).hero.text,tagline:p(t).hero.tagline,image:p(t).hero.image,actions:p(t).hero.actions},{"home-hero-info-before":$(()=>[M(n.$slots,"home-hero-info-before")]),"home-hero-info":$(()=>[M(n.$slots,"home-hero-info")]),"home-hero-info-after":$(()=>[M(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":$(()=>[M(n.$slots,"home-hero-actions-after")]),"home-hero-image":$(()=>[M(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):I("",!0)}}),V9=e=>(Xe("data-v-5299480b"),e=e(),Qe(),e),H9={class:"box"},q9={key:0,class:"icon"},j9=["innerHTML"],G9=["innerHTML"],W9=["innerHTML"],U9={key:4,class:"link-text"},Y9={class:"link-text-value"},K9=V9(()=>S("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),X9=B({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(v(),X(qn,{class:"VPFeature",href:t.link,rel:t.rel,target:t.target,"no-icon":!0,tag:t.link?"a":"div"},{default:$(()=>[S("article",H9,[typeof t.icon=="object"&&t.icon.wrap?(v(),C("div",q9,[j(ma,{image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])])):typeof t.icon=="object"?(v(),X(ma,{key:1,image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])):t.icon?(v(),C("div",{key:2,class:"icon",innerHTML:t.icon},null,8,j9)):I("",!0),S("h2",{class:"title",innerHTML:t.title},null,8,G9),t.details?(v(),C("p",{key:3,class:"details",innerHTML:t.details},null,8,W9)):I("",!0),t.linkText?(v(),C("div",U9,[S("p",Y9,[Fe(ee(t.linkText)+" ",1),K9])])):I("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Q9=de(X9,[["__scopeId","data-v-5299480b"]]),Z9={key:0,class:"VPFeatures"},J9={class:"container"},eE={class:"items"},tE=B({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,n=w(()=>{const r=t.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,i)=>r.features?(v(),C("div",Z9,[S("div",J9,[S("div",eE,[(v(!0),C(he,null,Te(r.features,o=>(v(),C("div",{key:o.title,class:W(["item",[n.value]])},[j(Q9,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):I("",!0)}}),nE=de(tE,[["__scopeId","data-v-21b238ba"]]),rE=B({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=Le();return(n,r)=>p(t).features?(v(),X(nE,{key:0,class:"VPHomeFeatures",features:p(t).features},null,8,["features"])):I("",!0)}}),iE=B({__name:"VPHomeContent",setup(e){const{width:t}=Qv({includeScrollbar:!1});return(n,r)=>(v(),C("div",{class:"vp-doc container",style:et(p(t)?{"--vp-offset":`calc(50% - ${p(t)/2}px)`}:{})},[M(n.$slots,"default",{},void 0,!0)],4))}}),oE=de(iE,[["__scopeId","data-v-e9e39c3e"]]),sE={class:"VPHome"},aE=B({__name:"VPHome",setup(e){const{frontmatter:t}=Le();return(n,r)=>{const i=st("Content");return v(),C("div",sE,[M(n.$slots,"home-hero-before",{},void 0,!0),j(z9,null,{"home-hero-info-before":$(()=>[M(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":$(()=>[M(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":$(()=>[M(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":$(()=>[M(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":$(()=>[M(n.$slots,"home-hero-image",{},void 0,!0)]),_:3}),M(n.$slots,"home-hero-after",{},void 0,!0),M(n.$slots,"home-features-before",{},void 0,!0),j(rE),M(n.$slots,"home-features-after",{},void 0,!0),p(t).markdownStyles!==!1?(v(),X(oE,{key:0},{default:$(()=>[j(i)]),_:1})):(v(),X(i,{key:1}))])}}}),lE=de(aE,[["__scopeId","data-v-b9aae4cc"]]),cE={},uE={class:"VPPage"};function dE(e,t){const n=st("Content");return v(),C("div",uE,[M(e.$slots,"page-top"),j(n),M(e.$slots,"page-bottom")])}const hE=de(cE,[["render",dE]]),pE=B({__name:"VPContent",setup(e){const{page:t,frontmatter:n}=Le(),{hasSidebar:r}=yr();return(i,o)=>(v(),C("div",{class:W(["VPContent",{"has-sidebar":p(r),"is-home":p(n).layout==="home"}]),id:"VPContent"},[p(t).isNotFound?M(i.$slots,"not-found",{key:0},()=>[j(CT)],!0):p(n).layout==="page"?(v(),X(hE,{key:1},{"page-top":$(()=>[M(i.$slots,"page-top",{},void 0,!0)]),"page-bottom":$(()=>[M(i.$slots,"page-bottom",{},void 0,!0)]),_:3})):p(n).layout==="home"?(v(),X(lE,{key:2},{"home-hero-before":$(()=>[M(i.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":$(()=>[M(i.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":$(()=>[M(i.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":$(()=>[M(i.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":$(()=>[M(i.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":$(()=>[M(i.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":$(()=>[M(i.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":$(()=>[M(i.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":$(()=>[M(i.$slots,"home-features-after",{},void 0,!0)]),_:3})):p(n).layout&&p(n).layout!=="doc"?(v(),X(Je(p(n).layout),{key:3})):(v(),X(k9,{key:4},{"doc-top":$(()=>[M(i.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":$(()=>[M(i.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":$(()=>[M(i.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":$(()=>[M(i.$slots,"doc-before",{},void 0,!0)]),"doc-after":$(()=>[M(i.$slots,"doc-after",{},void 0,!0)]),"aside-top":$(()=>[M(i.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":$(()=>[M(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":$(()=>[M(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":$(()=>[M(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":$(()=>[M(i.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":$(()=>[M(i.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),fE=de(pE,[["__scopeId","data-v-733a5e08"]]),mE={class:"container"},gE=["innerHTML"],vE=["innerHTML"],yE=B({__name:"VPFooter",setup(e){const{theme:t,frontmatter:n}=Le(),{hasSidebar:r}=yr();return(i,o)=>p(t).footer&&p(n).footer!==!1?(v(),C("footer",{key:0,class:W(["VPFooter",{"has-sidebar":p(r)}])},[S("div",mE,[p(t).footer.message?(v(),C("p",{key:0,class:"message",innerHTML:p(t).footer.message},null,8,gE)):I("",!0),p(t).footer.copyright?(v(),C("p",{key:1,class:"copyright",innerHTML:p(t).footer.copyright},null,8,vE)):I("",!0)])],2)):I("",!0)}}),bE=de(yE,[["__scopeId","data-v-b27a824f"]]);function Lg(){const{theme:e,frontmatter:t}=Le(),n=Mn([]),r=w(()=>n.value.length>0);return $a(()=>{n.value=Hu(t.value.outline??e.value.outline)}),{headers:n,hasLocalNav:r}}const _E=e=>(Xe("data-v-9dfc52ee"),e=e(),Qe(),e),CE=_E(()=>S("span",{class:"vpi-chevron-right icon"},null,-1)),kE={class:"header"},wE={class:"outline"},SE=B({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:n}=Le(),r=L(!1),i=L(0),o=L(),s=L();Zv(o,()=>{r.value=!1}),Jv("Escape",()=>{r.value=!1}),$a(()=>{r.value=!1});function a(){r.value=!r.value,i.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function l(u){u.target.classList.contains("outline-link")&&(s.value&&(s.value.style.transition="none"),De(()=>{r.value=!1}))}function c(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(u,h)=>(v(),C("div",{class:"VPLocalNavOutlineDropdown",style:et({"--vp-vh":i.value+"px"}),ref_key:"main",ref:o},[u.headers.length>0?(v(),C("button",{key:0,onClick:a,class:W({open:r.value})},[Fe(ee(p(Ag)(p(n)))+" ",1),CE],2)):(v(),C("button",{key:1,onClick:c},ee(p(n).returnToTopLabel||"Return to top"),1)),j(Zt,{name:"flyout"},{default:$(()=>[r.value?(v(),C("div",{key:0,ref_key:"items",ref:s,class:"items",onClick:l},[S("div",kE,[S("a",{class:"top-link",href:"#",onClick:c},ee(p(n).returnToTopLabel||"Return to top"),1)]),S("div",wE,[j($g,{headers:u.headers},null,8,["headers"])])],512)):I("",!0)]),_:1})],4))}}),xE=de(SE,[["__scopeId","data-v-9dfc52ee"]]),TE=e=>(Xe("data-v-d7d55884"),e=e(),Qe(),e),EE={class:"container"},AE=["aria-expanded"],$E=TE(()=>S("span",{class:"vpi-align-left menu-icon"},null,-1)),PE={class:"menu-text"},LE=B({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:n}=Le(),{hasSidebar:r}=yr(),{headers:i}=Lg(),{y:o}=Yf(),s=L(0);Ae(()=>{s.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),$a(()=>{i.value=Hu(n.value.outline??t.value.outline)});const a=w(()=>i.value.length===0),l=w(()=>a.value&&!r.value),c=w(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:a.value,fixed:l.value}));return(u,h)=>p(n).layout!=="home"&&(!l.value||p(o)>=s.value)?(v(),C("div",{key:0,class:W(c.value)},[S("div",EE,[p(r)?(v(),C("button",{key:0,class:"menu","aria-expanded":u.open,"aria-controls":"VPSidebarNav",onClick:h[0]||(h[0]=d=>u.$emit("open-menu"))},[$E,S("span",PE,ee(p(t).sidebarMenuLabel||"Menu"),1)],8,AE)):I("",!0),j(xE,{headers:p(i),navHeight:s.value},null,8,["headers","navHeight"])])],2)):I("",!0)}}),ME=de(LE,[["__scopeId","data-v-d7d55884"]]);function IE(){const e=L(!1);function t(){e.value=!0,window.addEventListener("resize",i)}function n(){e.value=!1,window.removeEventListener("resize",i)}function r(){e.value?n():t()}function i(){window.outerWidth>=768&&n()}const o=Kn();return oe(()=>o.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:r}}const BE={},OE={class:"VPSwitch",type:"button",role:"switch"},FE={class:"check"},RE={key:0,class:"icon"};function NE(e,t){return v(),C("button",OE,[S("span",FE,[e.$slots.default?(v(),C("span",RE,[M(e.$slots,"default",{},void 0,!0)])):I("",!0)])])}const DE=de(BE,[["render",NE],["__scopeId","data-v-1b163337"]]),Mg=e=>(Xe("data-v-54def241"),e=e(),Qe(),e),zE=Mg(()=>S("span",{class:"vpi-sun sun"},null,-1)),VE=Mg(()=>S("span",{class:"vpi-moon moon"},null,-1)),HE=B({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:n}=Le(),r=Ee("toggle-appearance",()=>{t.value=!t.value}),i=w(()=>t.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme");return(o,s)=>(v(),X(DE,{title:i.value,class:"VPSwitchAppearance","aria-checked":p(t),onClick:p(r)},{default:$(()=>[zE,VE]),_:1},8,["title","aria-checked","onClick"]))}}),qu=de(HE,[["__scopeId","data-v-54def241"]]),qE={key:0,class:"VPNavBarAppearance"},jE=B({__name:"VPNavBarAppearance",setup(e){const{site:t}=Le();return(n,r)=>p(t).appearance&&p(t).appearance!=="force-dark"?(v(),C("div",qE,[j(qu)])):I("",!0)}}),GE=de(jE,[["__scopeId","data-v-9faaa755"]]),ju=L();let Ig=!1,Ol=0;function WE(e){const t=L(!1);if(Ri){!Ig&&UE(),Ol++;const n=oe(ju,r=>{var i,o,s;r===e.el.value||(i=e.el.value)!=null&&i.contains(r)?(t.value=!0,(o=e.onFocus)==null||o.call(e)):(t.value=!1,(s=e.onBlur)==null||s.call(e))});Yn(()=>{n(),Ol--,Ol||YE()})}return Pa(t)}function UE(){document.addEventListener("focusin",Bg),Ig=!0,ju.value=document.activeElement}function YE(){document.removeEventListener("focusin",Bg)}function Bg(){ju.value=document.activeElement}const KE={class:"VPMenuLink"},XE=B({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=Le();return(n,r)=>(v(),C("div",KE,[j(qn,{class:W({active:p(Jr)(p(t).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel},{default:$(()=>[Fe(ee(n.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Ka=de(XE,[["__scopeId","data-v-dbd7a27b"]]),QE={class:"VPMenuGroup"},ZE={key:0,class:"title"},JE=B({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,n)=>(v(),C("div",QE,[t.text?(v(),C("p",ZE,ee(t.text),1)):I("",!0),(v(!0),C(he,null,Te(t.items,r=>(v(),C(he,null,["link"in r?(v(),X(Ka,{key:0,item:r},null,8,["item"])):I("",!0)],64))),256))]))}}),eA=de(JE,[["__scopeId","data-v-ae621f04"]]),tA={class:"VPMenu"},nA={key:0,class:"items"},rA=B({__name:"VPMenu",props:{items:{}},setup(e){return(t,n)=>(v(),C("div",tA,[t.items?(v(),C("div",nA,[(v(!0),C(he,null,Te(t.items,r=>(v(),C(he,{key:r.text},["link"in r?(v(),X(Ka,{key:0,item:r},null,8,["item"])):(v(),X(eA,{key:1,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):I("",!0),M(t.$slots,"default",{},void 0,!0)]))}}),iA=de(rA,[["__scopeId","data-v-215a85bd"]]),oA=e=>(Xe("data-v-f1772d31"),e=e(),Qe(),e),sA=["aria-expanded","aria-label"],aA={key:0,class:"text"},lA=["innerHTML"],cA=oA(()=>S("span",{class:"vpi-chevron-down text-icon"},null,-1)),uA={key:1,class:"vpi-more-horizontal icon"},dA={class:"menu"},hA=B({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=L(!1),n=L();WE({el:n,onBlur:r});function r(){t.value=!1}return(i,o)=>(v(),C("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:o[1]||(o[1]=s=>t.value=!0),onMouseleave:o[2]||(o[2]=s=>t.value=!1)},[S("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":i.label,onClick:o[0]||(o[0]=s=>t.value=!t.value)},[i.button||i.icon?(v(),C("span",aA,[i.icon?(v(),C("span",{key:0,class:W([i.icon,"option-icon"])},null,2)):I("",!0),i.button?(v(),C("span",{key:1,innerHTML:i.button},null,8,lA)):I("",!0),cA])):(v(),C("span",uA))],8,sA),S("div",dA,[j(iA,{items:i.items},{default:$(()=>[M(i.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Gu=de(hA,[["__scopeId","data-v-f1772d31"]]),pA=["href","aria-label","innerHTML"],fA=B({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,n=w(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}" />`);return(r,i)=>(v(),C("a",{class:"VPSocialLink no-icon",href:r.link,"aria-label":r.ariaLabel??(typeof r.icon=="string"?r.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,pA))}}),mA=de(fA,[["__scopeId","data-v-210a42e5"]]),gA={class:"VPSocialLinks"},vA=B({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,n)=>(v(),C("div",gA,[(v(!0),C(he,null,Te(t.links,({link:r,icon:i,ariaLabel:o})=>(v(),X(mA,{key:r,icon:i,link:r,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),Wu=de(vA,[["__scopeId","data-v-c4cfc032"]]),yA={key:0,class:"group translations"},bA={class:"trans-title"},_A={key:1,class:"group"},CA={class:"item appearance"},kA={class:"label"},wA={class:"appearance-action"},SA={key:2,class:"group"},xA={class:"item social-links"},TA=B({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=Le(),{localeLinks:r,currentLang:i}=Go({correspondingLink:!0}),o=w(()=>r.value.length&&i.value.label||t.value.appearance||n.value.socialLinks);return(s,a)=>o.value?(v(),X(Gu,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:$(()=>[p(r).length&&p(i).label?(v(),C("div",yA,[S("p",bA,ee(p(i).label),1),(v(!0),C(he,null,Te(p(r),l=>(v(),X(Ka,{key:l.link,item:l},null,8,["item"]))),128))])):I("",!0),p(t).appearance&&p(t).appearance!=="force-dark"?(v(),C("div",_A,[S("div",CA,[S("p",kA,ee(p(n).darkModeSwitchLabel||"Appearance"),1),S("div",wA,[j(qu)])])])):I("",!0),p(n).socialLinks?(v(),C("div",SA,[S("div",xA,[j(Wu,{class:"social-links-list",links:p(n).socialLinks},null,8,["links"])])])):I("",!0)]),_:1})):I("",!0)}}),EA=de(TA,[["__scopeId","data-v-66e27798"]]),AA=e=>(Xe("data-v-96d73a06"),e=e(),Qe(),e),$A=["aria-expanded"],PA=AA(()=>S("span",{class:"container"},[S("span",{class:"top"}),S("span",{class:"middle"}),S("span",{class:"bottom"})],-1)),LA=[PA],MA=B({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(v(),C("button",{type:"button",class:W(["VPNavBarHamburger",{active:t.active}]),"aria-label":"mobile navigation","aria-expanded":t.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=r=>t.$emit("click"))},LA,10,$A))}}),IA=de(MA,[["__scopeId","data-v-96d73a06"]]),BA=["innerHTML"],OA=B({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=Le();return(n,r)=>(v(),X(qn,{class:W({VPNavBarMenuLink:!0,active:p(Jr)(p(t).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,tabindex:"0"},{default:$(()=>[S("span",{innerHTML:n.item.text},null,8,BA)]),_:1},8,["class","href","target","rel"]))}}),FA=de(OA,[["__scopeId","data-v-0c89448b"]]),RA=B({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:n}=Le(),r=o=>"link"in o?Jr(n.value.relativePath,o.link,!!t.item.activeMatch):o.items.some(r),i=w(()=>r(t.item));return(o,s)=>(v(),X(Gu,{class:W({VPNavBarMenuGroup:!0,active:p(Jr)(p(n).relativePath,o.item.activeMatch,!!o.item.activeMatch)||i.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),NA=e=>(Xe("data-v-535d9472"),e=e(),Qe(),e),DA={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},zA=NA(()=>S("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),VA=B({__name:"VPNavBarMenu",setup(e){const{theme:t}=Le();return(n,r)=>p(t).nav?(v(),C("nav",DA,[zA,(v(!0),C(he,null,Te(p(t).nav,i=>(v(),C(he,{key:i.text},["link"in i?(v(),X(FA,{key:0,item:i},null,8,["item"])):(v(),X(RA,{key:1,item:i},null,8,["item"]))],64))),128))])):I("",!0)}}),HA=de(VA,[["__scopeId","data-v-535d9472"]]);var Qh;const Og=typeof window<"u",qA=e=>typeof e=="string",Hs=()=>{};Og&&((Qh=window==null?void 0:window.navigator)!=null&&Qh.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Lc(e){return typeof e=="function"?e():p(e)}function jA(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}function GA(e,t={}){let n,r;return i=>{const o=Lc(e),s=Lc(t.maxWait);if(n&&clearTimeout(n),o<=0||s!==void 0&&s<=0)return r&&(clearTimeout(r),r=null),i();s&&!r&&(r=setTimeout(()=>{n&&clearTimeout(n),r=null,i()},s)),n=setTimeout(()=>{r&&clearTimeout(r),r=null,i()},o)}}function WA(e){return e}function UA(e){return Kf()?(Xf(e),!0):!1}function Fg(e,t=200,n={}){return jA(GA(t,n),e)}function Fl(e,t=200,n={}){if(t<=0)return e;const r=L(e.value),i=Fg(()=>{r.value=e.value},t,n);return oe(e,()=>i()),r}function Rg(e,t,n){return oe(e,(r,i,o)=>{r&&t(r,i,o)},n)}function YA(e){var t;const n=Lc(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Ng=Og?window:void 0;function ys(...e){let t,n,r,i;if(qA(e[0])?([n,r,i]=e,t=Ng):[t,n,r,i]=e,!t)return Hs;let o=Hs;const s=oe(()=>YA(t),l=>{o(),l&&(l.addEventListener(n,r,i),o=()=>{l.removeEventListener(n,r,i),o=Hs})},{immediate:!0,flush:"post"}),a=()=>{s(),o()};return UA(a),a}const Zh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Jh="__vueuse_ssr_handlers__";Zh[Jh]=Zh[Jh]||{};const KA={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function XA(e={}){const{reactive:t=!1,target:n=Ng,aliasMap:r=KA,passive:i=!0,onEventFired:o=Hs}=e,s=ct(new Set),a={toJSON(){return{}},current:s},l=t?ct(a):a,c=new Set,u=new Set;function h(m,y){m in l&&(t?l[m]=y:l[m].value=y)}function d(){for(const m of u)h(m,!1)}function f(m,y){var b,k;const _=(b=m.key)==null?void 0:b.toLowerCase(),x=[(k=m.code)==null?void 0:k.toLowerCase(),_].filter(Boolean);_&&(y?s.add(_):s.delete(_));for(const T of x)u.add(T),h(T,y);_==="meta"&&!y?(c.forEach(T=>{s.delete(T),h(T,!1)}),c.clear()):typeof m.getModifierState=="function"&&m.getModifierState("Meta")&&y&&[...s,...x].forEach(T=>c.add(T))}ys(n,"keydown",m=>(f(m,!0),o(m)),{passive:i}),ys(n,"keyup",m=>(f(m,!1),o(m)),{passive:i}),ys("blur",d,{passive:!0}),ys("focus",d,{passive:!0});const g=new Proxy(l,{get(m,y,b){if(typeof y!="string")return Reflect.get(m,y,b);if(y=y.toLowerCase(),y in r&&(y=r[y]),!(y in l))if(/[+_-]/.test(y)){const _=y.split(/[+_-]/g).map(x=>x.trim());l[y]=w(()=>_.every(x=>p(g[x])))}else l[y]=L(!1);const k=Reflect.get(m,y,b);return t?p(k):k}});return g}var ep;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ep||(ep={}));var QA=Object.defineProperty,tp=Object.getOwnPropertySymbols,ZA=Object.prototype.hasOwnProperty,JA=Object.prototype.propertyIsEnumerable,np=(e,t,n)=>t in e?QA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,e7=(e,t)=>{for(var n in t||(t={}))ZA.call(t,n)&&np(e,n,t[n]);if(tp)for(var n of tp(t))JA.call(t,n)&&np(e,n,t[n]);return e};const t7={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};e7({linear:WA},t7);function pr(e){return Array.isArray?Array.isArray(e):Vg(e)==="[object Array]"}const n7=1/0;function r7(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-n7?"-0":t}function i7(e){return e==null?"":r7(e)}function zn(e){return typeof e=="string"}function Dg(e){return typeof e=="number"}function o7(e){return e===!0||e===!1||s7(e)&&Vg(e)=="[object Boolean]"}function zg(e){return typeof e=="object"}function s7(e){return zg(e)&&e!==null}function Kt(e){return e!=null}function Rl(e){return!e.trim().length}function Vg(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const a7="Incorrect 'index' type",l7=e=>`Invalid value for key ${e}`,c7=e=>`Pattern length exceeds max of ${e}.`,u7=e=>`Missing ${e} property in key`,d7=e=>`Property 'weight' in key '${e}' must be a positive integer`,rp=Object.prototype.hasOwnProperty;let h7=class{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(r=>{let i=Hg(r);n+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};function Hg(e){let t=null,n=null,r=null,i=1,o=null;if(zn(e)||pr(e))r=e,t=ip(e),n=Mc(e);else{if(!rp.call(e,"name"))throw new Error(u7("name"));const s=e.name;if(r=s,rp.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(d7(s));t=ip(s),n=Mc(s),o=e.getFn}return{path:t,id:n,weight:i,src:r,getFn:o}}function ip(e){return pr(e)?e:e.split(".")}function Mc(e){return pr(e)?e.join("."):e}function p7(e,t){let n=[],r=!1;const i=(o,s,a)=>{if(Kt(o))if(!s[a])n.push(o);else{let l=s[a];const c=o[l];if(!Kt(c))return;if(a===s.length-1&&(zn(c)||Dg(c)||o7(c)))n.push(i7(c));else if(pr(c)){r=!0;for(let u=0,h=c.length;u<h;u+=1)i(c[u],s,a+1)}else s.length&&i(c,s,a+1)}};return i(e,zn(t)?t.split("."):t,0),r?n:n[0]}const f7={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},m7={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},g7={location:0,threshold:.6,distance:100},v7={useExtendedSearch:!1,getFn:p7,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ce={...m7,...f7,...g7,...v7};const y7=/[^ ]+/g;function b7(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(i){const o=i.match(y7).length;if(n.has(o))return n.get(o);const s=1/Math.pow(o,.5*e),a=parseFloat(Math.round(s*r)/r);return n.set(o,a),a},clear(){n.clear()}}}class Uu{constructor({getFn:t=Ce.getFn,fieldNormWeight:n=Ce.fieldNormWeight}={}){this.norm=b7(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,zn(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();zn(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!Kt(t)||Rl(t))return;let r={v:t,i:n,n:this.norm.get(t)};this.records.push(r)}_addObject(t,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let s=i.getFn?i.getFn(t):this.getFn(t,i.path);if(Kt(s)){if(pr(s)){let a=[];const l=[{nestedArrIndex:-1,value:s}];for(;l.length;){const{nestedArrIndex:c,value:u}=l.pop();if(Kt(u))if(zn(u)&&!Rl(u)){let h={v:u,i:c,n:this.norm.get(u)};a.push(h)}else pr(u)&&u.forEach((h,d)=>{l.push({nestedArrIndex:d,value:h})})}r.$[o]=a}else if(zn(s)&&!Rl(s)){let a={v:s,n:this.norm.get(s)};r.$[o]=a}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function qg(e,t,{getFn:n=Ce.getFn,fieldNormWeight:r=Ce.fieldNormWeight}={}){const i=new Uu({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(Hg)),i.setSources(t),i.create(),i}function _7(e,{getFn:t=Ce.getFn,fieldNormWeight:n=Ce.fieldNormWeight}={}){const{keys:r,records:i}=e,o=new Uu({getFn:t,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function bs(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=Ce.distance,ignoreLocation:o=Ce.ignoreLocation}={}){const s=t/e.length;if(o)return s;const a=Math.abs(r-n);return i?s+a/i:a?1:s}function C7(e=[],t=Ce.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let s=e.length;o<s;o+=1){let a=e[o];a&&r===-1?r=o:!a&&r!==-1&&(i=o-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}const Wr=32;function k7(e,t,n,{location:r=Ce.location,distance:i=Ce.distance,threshold:o=Ce.threshold,findAllMatches:s=Ce.findAllMatches,minMatchCharLength:a=Ce.minMatchCharLength,includeMatches:l=Ce.includeMatches,ignoreLocation:c=Ce.ignoreLocation}={}){if(t.length>Wr)throw new Error(c7(Wr));const u=t.length,h=e.length,d=Math.max(0,Math.min(r,h));let f=o,g=d;const m=a>1||l,y=m?Array(h):[];let b;for(;(b=e.indexOf(t,g))>-1;){let E=bs(t,{currentLocation:b,expectedLocation:d,distance:i,ignoreLocation:c});if(f=Math.min(E,f),g=b+u,m){let O=0;for(;O<u;)y[b+O]=1,O+=1}}g=-1;let k=[],_=1,x=u+h;const T=1<<u-1;for(let E=0;E<u;E+=1){let O=0,J=x;for(;O<J;)bs(t,{errors:E,currentLocation:d+J,expectedLocation:d,distance:i,ignoreLocation:c})<=f?O=J:x=J,J=Math.floor((x-O)/2+O);x=J;let R=Math.max(1,d-J+1),P=s?h:Math.min(d+J,h)+u,K=Array(P+2);K[P+1]=(1<<E)-1;for(let H=P;H>=R;H-=1){let N=H-1,G=n[e.charAt(N)];if(m&&(y[N]=+!!G),K[H]=(K[H+1]<<1|1)&G,E&&(K[H]|=(k[H+1]|k[H])<<1|1|k[H+1]),K[H]&T&&(_=bs(t,{errors:E,currentLocation:N,expectedLocation:d,distance:i,ignoreLocation:c}),_<=f)){if(f=_,g=N,g<=d)break;R=Math.max(1,2*d-g)}}if(bs(t,{errors:E+1,currentLocation:d,expectedLocation:d,distance:i,ignoreLocation:c})>f)break;k=K}const A={isMatch:g>=0,score:Math.max(.001,_)};if(m){const E=C7(y,a);E.length?l&&(A.indices=E):A.isMatch=!1}return A}function w7(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}let jg=class{constructor(t,{location:n=Ce.location,threshold:r=Ce.threshold,distance:i=Ce.distance,includeMatches:o=Ce.includeMatches,findAllMatches:s=Ce.findAllMatches,minMatchCharLength:a=Ce.minMatchCharLength,isCaseSensitive:l=Ce.isCaseSensitive,ignoreLocation:c=Ce.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:s,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(d,f)=>{this.chunks.push({pattern:d,alphabet:w7(d),startIndex:f})},h=this.pattern.length;if(h>Wr){let d=0;const f=h%Wr,g=h-f;for(;d<g;)u(this.pattern.substr(d,Wr),d),d+=Wr;if(f){const m=h-Wr;u(this.pattern.substr(m),m)}}else u(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let g={isMatch:!0,score:0};return r&&(g.indices=[[0,t.length-1]]),g}const{location:i,distance:o,threshold:s,findAllMatches:a,minMatchCharLength:l,ignoreLocation:c}=this.options;let u=[],h=0,d=!1;this.chunks.forEach(({pattern:g,alphabet:m,startIndex:y})=>{const{isMatch:b,score:k,indices:_}=k7(t,g,m,{location:i+y,distance:o,threshold:s,findAllMatches:a,minMatchCharLength:l,includeMatches:r,ignoreLocation:c});b&&(d=!0),h+=k,b&&_&&(u=[...u,..._])});let f={isMatch:d,score:d?h/this.chunks.length:1};return d&&r&&(f.indices=u),f}};class Fr{constructor(t){this.pattern=t}static isMultiMatch(t){return op(t,this.multiRegex)}static isSingleMatch(t){return op(t,this.singleRegex)}search(){}}function op(e,t){const n=e.match(t);return n?n[1]:null}class S7 extends Fr{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class x7 extends Fr{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class T7 extends Fr{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class E7 extends Fr{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class A7 extends Fr{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class $7 extends Fr{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}let Gg=class extends Fr{constructor(t,{location:n=Ce.location,threshold:r=Ce.threshold,distance:i=Ce.distance,includeMatches:o=Ce.includeMatches,findAllMatches:s=Ce.findAllMatches,minMatchCharLength:a=Ce.minMatchCharLength,isCaseSensitive:l=Ce.isCaseSensitive,ignoreLocation:c=Ce.ignoreLocation}={}){super(t),this._bitapSearch=new jg(t,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:s,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}},Wg=class extends Fr{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,r;const i=[],o=this.pattern.length;for(;(r=t.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const s=!!i.length;return{isMatch:s,score:s?0:1,indices:i}}};const Ic=[S7,Wg,T7,E7,$7,A7,x7,Gg],sp=Ic.length,P7=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,L7="|";function M7(e,t={}){return e.split(L7).map(n=>{let r=n.trim().split(P7).filter(o=>o&&!!o.trim()),i=[];for(let o=0,s=r.length;o<s;o+=1){const a=r[o];let l=!1,c=-1;for(;!l&&++c<sp;){const u=Ic[c];let h=u.isMultiMatch(a);h&&(i.push(new u(h,t)),l=!0)}if(!l)for(c=-1;++c<sp;){const u=Ic[c];let h=u.isSingleMatch(a);if(h){i.push(new u(h,t));break}}}return i})}const I7=new Set([Gg.type,Wg.type]);class B7{constructor(t,{isCaseSensitive:n=Ce.isCaseSensitive,includeMatches:r=Ce.includeMatches,minMatchCharLength:i=Ce.minMatchCharLength,ignoreLocation:o=Ce.ignoreLocation,findAllMatches:s=Ce.findAllMatches,location:a=Ce.location,threshold:l=Ce.threshold,distance:c=Ce.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:s,ignoreLocation:o,location:a,threshold:l,distance:c},this.pattern=n?t:t.toLowerCase(),this.query=M7(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let o=0,s=[],a=0;for(let l=0,c=n.length;l<c;l+=1){const u=n[l];s.length=0,o=0;for(let h=0,d=u.length;h<d;h+=1){const f=u[h],{isMatch:g,indices:m,score:y}=f.search(t);if(g){if(o+=1,a+=y,r){const b=f.constructor.type;I7.has(b)?s=[...s,...m]:s.push(m)}}else{a=0,o=0,s.length=0;break}}if(o){let h={isMatch:!0,score:a/o};return r&&(h.indices=s),h}}return{isMatch:!1,score:1}}}const Bc=[];function O7(...e){Bc.push(...e)}function Oc(e,t){for(let n=0,r=Bc.length;n<r;n+=1){let i=Bc[n];if(i.condition(e,t))return new i(e,t)}return new jg(e,t)}const ga={AND:"$and",OR:"$or"},Fc={PATH:"$path",PATTERN:"$val"},Rc=e=>!!(e[ga.AND]||e[ga.OR]),F7=e=>!!e[Fc.PATH],R7=e=>!pr(e)&&zg(e)&&!Rc(e),ap=e=>({[ga.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Ug(e,t,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const s=F7(i);if(!s&&o.length>1&&!Rc(i))return r(ap(i));if(R7(i)){const l=s?i[Fc.PATH]:o[0],c=s?i[Fc.PATTERN]:i[l];if(!zn(c))throw new Error(l7(l));const u={keyId:Mc(l),pattern:c};return n&&(u.searcher=Oc(c,t)),u}let a={children:[],operator:o[0]};return o.forEach(l=>{const c=i[l];pr(c)&&c.forEach(u=>{a.children.push(r(u))})}),a};return Rc(e)||(e=ap(e)),r(e)}function N7(e,{ignoreFieldNorm:t=Ce.ignoreFieldNorm}){e.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:s})=>{const a=i?i.weight:null;r*=Math.pow(s===0&&a?Number.EPSILON:s,(a||1)*(t?1:o))}),n.score=r})}function D7(e,t){const n=e.matches;t.matches=[],Kt(n)&&n.forEach(r=>{if(!Kt(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let s={indices:i,value:o};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),t.matches.push(s)})}function z7(e,t){t.score=e.score}function V7(e,t,{includeMatches:n=Ce.includeMatches,includeScore:r=Ce.includeScore}={}){const i=[];return n&&i.push(D7),r&&i.push(z7),e.map(o=>{const{idx:s}=o,a={item:t[s],refIndex:s};return i.length&&i.forEach(l=>{l(o,a)}),a})}class ri{constructor(t,n={},r){this.options={...Ce,...n},this.options.useExtendedSearch,this._keyStore=new h7(this.options.keys),this.setCollection(t,r)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Uu))throw new Error(a7);this._myIndex=n||qg(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){!Kt(t)||(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];t(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:s,ignoreFieldNorm:a}=this.options;let l=zn(t)?zn(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return N7(l,{ignoreFieldNorm:a}),o&&l.sort(s),Dg(n)&&n>-1&&(l=l.slice(0,n)),V7(l,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(t){const n=Oc(t,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:s,n:a})=>{if(!Kt(o))return;const{isMatch:l,score:c,indices:u}=n.searchIn(o);l&&i.push({item:o,idx:s,matches:[{score:c,value:o,norm:a,indices:u}]})}),i}_searchLogical(t){const n=Ug(t,this.options),r=(a,l,c)=>{if(!a.children){const{keyId:h,searcher:d}=a,f=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(l,h),searcher:d});return f&&f.length?[{idx:c,item:l,matches:f}]:[]}const u=[];for(let h=0,d=a.children.length;h<d;h+=1){const f=a.children[h],g=r(f,l,c);if(g.length)u.push(...g);else if(a.operator===ga.AND)return[]}return u},i=this._myIndex.records,o={},s=[];return i.forEach(({$:a,i:l})=>{if(Kt(a)){let c=r(n,a,l);c.length&&(o[l]||(o[l]={idx:l,item:a,matches:[]},s.push(o[l])),c.forEach(({matches:u})=>{o[l].matches.push(...u)}))}}),s}_searchObjectList(t){const n=Oc(t,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:s,i:a})=>{if(!Kt(s))return;let l=[];r.forEach((c,u)=>{l.push(...this._findMatches({key:c,value:s[u],searcher:n}))}),l.length&&o.push({idx:a,item:s,matches:l})}),o}_findMatches({key:t,value:n,searcher:r}){if(!Kt(n))return[];let i=[];if(pr(n))n.forEach(({v:o,i:s,n:a})=>{if(!Kt(o))return;const{isMatch:l,score:c,indices:u}=r.searchIn(o);l&&i.push({score:c,key:t,value:o,idx:s,norm:a,indices:u})});else{const{v:o,n:s}=n,{isMatch:a,score:l,indices:c}=r.searchIn(o);a&&i.push({score:l,key:t,value:o,norm:s,indices:c})}return i}}ri.version="6.6.2";ri.createIndex=qg;ri.parseIndex=_7;ri.config=Ce;ri.parseQuery=Ug;O7(B7);const lp=ct({selectedNode:"",selectedGroup:"",search:"",dataValue:"",filtered:{count:0,items:new Map,groups:new Set}}),Vi=()=>({isSearching:w(()=>lp.search!==""),...iu(lp)});function H7(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(i){i(n)}),(r=e.get("*"))&&r.slice().map(function(i){i(t,n)})}}}const q7=H7(),Xa=()=>({emitter:q7});function j7(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}function G7(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}const W7=["command-theme"],U7={"command-root":""},Y7=B({name:"Command"}),K7=B({...Y7,props:{theme:{type:String,default:"default"},fuseOptions:{type:Object,default:()=>({threshold:.2,keys:["label"]})}},emits:["select-item"],setup(e,{emit:t}){const n=e,r='[command-item=""]',i="command-item-key",o='[command-group=""]',s="command-group-key",a='[command-group-heading=""]',l=`${r}:not([aria-disabled="true"])`,c=`${r}[aria-selected="true"]`,u="command-item-select",h="data-value";nt("theme",n.theme||"default");const{selectedNode:d,search:f,dataValue:g,filtered:m}=Vi(),{emitter:y}=Xa(),b=L(),k=Fl(L(new Map),333),_=Fl(L(new Set),333),x=Fl(L(new Map)),T=w(()=>{const Y=[];for(const[ce,ae]of k.value.entries())Y.push({key:ce,label:ae});return Y}),A=w(()=>{const Y=ri.createIndex(n.fuseOptions.keys,T.value);return new ri(T.value,n.fuseOptions,Y)}),E=()=>{var Y,ce,ae;const re=O();re&&(((Y=re.parentElement)==null?void 0:Y.firstElementChild)===re&&((ae=(ce=re.closest(o))==null?void 0:ce.querySelector(a))==null||ae.scrollIntoView({block:"nearest"})),re.scrollIntoView({block:"nearest"}))},O=()=>{var Y;return(Y=b.value)==null?void 0:Y.querySelector(c)},J=(Y=b.value)=>{const ce=Y==null?void 0:Y.querySelectorAll(l);return ce?Array.from(ce):[]},R=()=>{var Y;const ce=(Y=b.value)==null?void 0:Y.querySelectorAll(o);return ce?Array.from(ce):[]},P=()=>{const[Y]=J();Y&&Y.getAttribute(i)&&(d.value=Y.getAttribute(i)||"")},K=Y=>{const ce=J()[Y];ce&&(d.value=ce.getAttribute(i)||"")},H=Y=>{const ce=O(),ae=J(),re=ae.findIndex(xe=>xe===ce),fe=ae[re+Y];fe?d.value=fe.getAttribute(i)||"":Y>0?K(0):K(ae.length-1)},N=Y=>{const ce=O();let ae=ce==null?void 0:ce.closest(o),re=null;for(;ae&&!re;)ae=Y>0?j7(ae,o):G7(ae,o),re=ae==null?void 0:ae.querySelector(l);re?d.value=re.getAttribute(i)||"":H(Y)},G=()=>K(0),q=()=>K(J().length-1),z=Y=>{Y.preventDefault(),Y.metaKey?q():Y.altKey?N(1):H(1)},V=Y=>{Y.preventDefault(),Y.metaKey?G():Y.altKey?N(-1):H(-1)},Q=Y=>{switch(Y.key){case"n":case"j":{Y.ctrlKey&&z(Y);break}case"ArrowDown":{z(Y);break}case"p":case"k":{Y.ctrlKey&&V(Y);break}case"ArrowUp":{V(Y);break}case"Home":{G();break}case"End":{q();break}case"Enter":{const ce=O();if(ce){const ae=new Event(u);ce.dispatchEvent(ae)}}}},Z=()=>{if(!f.value){m.value.count=_.value.size;return}m.value.groups=new Set("");const Y=new Map,ce=A.value.search(f.value).map(ae=>ae.item);for(const{key:ae,label:re}of ce)Y.set(ae,re);for(const[ae,re]of x.value)for(const fe of re)Y.get(fe)&&m.value.groups.add(ae);De(()=>{m.value.count=Y.size,m.value.items=Y})},te=()=>{const Y=J(),ce=R();for(const ae of Y){const re=ae.getAttribute(i)||"",fe=ae.getAttribute(h)||"";_.value.add(re),k.value.set(re,fe),m.value.count=k.value.size}for(const ae of ce){const re=J(ae),fe=ae.getAttribute(s)||"",xe=new Set("");for(const Ue of re){const $e=Ue.getAttribute(i)||"";xe.add($e)}x.value.set(fe,xe)}};oe(()=>d.value,Y=>{Y&&De(E)},{deep:!0}),oe(()=>f.value,Y=>{Z(),De(P)}),y.on("selectItem",Y=>{t("select-item",Y)});const ue=Fg(Y=>{Y&&(te(),De(P))},100);return y.on("rerenderList",ue),Ae(()=>{te(),P()}),(Y,ce)=>(v(),C("div",{class:W(e.theme),onKeydown:Q,ref_key:"commandRef",ref:b,"command-theme":e.theme},[S("div",U7,[M(Y.$slots,"default")])],42,W7))}}),Hi=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Nc=Hi(K7,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/Command.vue"]]),X7={"command-dialog":""},Q7={"command-dialog-mask":""},Z7={"command-dialog-wrapper":""},J7={"command-dialog-header":""},e$={"command-dialog-body":""},t$={key:0,"command-dialog-footer":""},n$=B({name:"Command.Dialog"}),r$=B({...n$,props:{visible:{type:Boolean,required:!0},theme:{type:String,required:!0}},emits:["select-item"],setup(e,{emit:t}){const n=e,{search:r,filtered:i}=Vi(),{emitter:o}=Xa(),s=L();o.on("selectItem",l=>{t("select-item",l)});const a=()=>{r.value="",i.value.count=0,i.value.items=new Map,i.value.groups=new Set};return Rg(()=>n.visible,a),jt(a),(l,c)=>(v(),X(ru,{to:"body",ref_key:"dialogRef",ref:s},[j(Zt,{name:"command-dialog",appear:""},{default:$(()=>[e.visible?(v(),X(Nc,{key:0,theme:e.theme},{default:$(()=>[S("div",X7,[S("div",Q7,[S("div",Z7,[S("div",J7,[M(l.$slots,"header")]),S("div",e$,[M(l.$slots,"body")]),l.$slots.footer?(v(),C("div",t$,[M(l.$slots,"footer")])):I("v-if",!0)])])])]),_:3},8,["theme"])):I("v-if",!0)]),_:3})],512))}}),i$=Hi(r$,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandDialog.vue"]]);let Yg=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const o$=["command-group-key","data-value"],s$={key:0,"command-group-heading":""},a$={"command-group-items":"",role:"group"},l$=B({name:"Command.Group"}),c$=B({...l$,props:{heading:{type:String,required:!0}},setup(e){const t=w(()=>`command-group-${Yg()}`),{filtered:n,isSearching:r}=Vi(),i=w(()=>r.value?n.value.groups.has(t.value):!0);return(o,s)=>ze((v(),C("div",{"command-group":"",role:"presentation",key:p(t),"command-group-key":p(t),"data-value":e.heading},[e.heading?(v(),C("div",s$,ee(e.heading),1)):I("v-if",!0),S("div",a$,[M(o.$slots,"default")])],8,o$)),[[tt,p(i)]])}}),u$=Hi(c$,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandGroup.vue"]]),d$=["placeholder","value"],h$=B({name:"Command.Input"}),p$=B({...h$,props:{placeholder:{type:String,required:!0},value:{type:String,required:!1}},emits:["input","update:value"],setup(e,{emit:t}){const n=L(null),{search:r}=Vi(),i=w(()=>r.value),o=s=>{const a=s,l=s.target;r.value=l==null?void 0:l.value,t("input",a),t("update:value",r.value)};return Fn(()=>{var s;(s=n.value)==null||s.focus()}),(s,a)=>(v(),C("input",{ref_key:"inputRef",ref:n,"command-input":"","auto-focus":"","auto-complete":"off","auto-correct":"off","spell-check":!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,placeholder:e.placeholder,value:p(i),onInput:o},null,40,d$))}}),f$=Hi(p$,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandInput.vue"]]),m$=["aria-selected","aria-disabled","command-item-key"],g$=B({name:"Command.Item"}),v$=B({...g$,props:{shortcut:{type:Array,required:!1},perform:{type:null,required:!1}},emits:["select"],setup(e,{emit:t}){const n=e,r="command-item-select",i="data-value",{current:o}=XA(),{selectedNode:s,filtered:a,isSearching:l}=Vi(),{emitter:c}=Xa(),u=L(),h=w(()=>`command-item-${Yg()}`),d=w(()=>{const m=a.value.items.get(h.value);return l.value?m!==void 0:!0}),f=w(()=>Array.from(o)),g=()=>{var m;const y={key:h.value,value:((m=u.value)==null?void 0:m.getAttribute(i))||""};t("select",y),c.emit("selectItem",y)};return Rg(f,m=>{n.shortcut&&n.shortcut.length>0&&n.shortcut.every(y=>o.has(y.toLowerCase()))&&n.perform&&n.perform()}),Fn(()=>{var m;(m=u.value)==null||m.addEventListener(r,g)}),jt(()=>{var m;(m=u.value)==null||m.removeEventListener(r,g)}),(m,y)=>ze((v(),C("div",{ref_key:"itemRef",ref:u,"command-item":"",role:"option","aria-selected":p(s)===p(h),"aria-disabled":!p(d),key:p(h),"command-item-key":p(h),onClick:g},[M(m.$slots,"default")],8,m$)),[[tt,p(d)]])}}),y$=Hi(v$,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandItem.vue"]]),b$=B({name:"Command.List"}),_$=B({...b$,setup(e){const{emitter:t}=Xa(),n=L(),r=L();let i=null,o;return Fn(()=>{o=r.value;const s=n.value;o&&s&&(i=new ResizeObserver(a=>{De(()=>{const l=o==null?void 0:o.offsetHeight;s==null||s.style.setProperty("--command-list-height",`${l==null?void 0:l.toFixed(1)}px`),t.emit("rerenderList",!0)})}),i.observe(o))}),jt(()=>{i!==null&&o&&i.unobserve(o)}),(s,a)=>(v(),C("div",{"command-list":"",role:"listbox","aria-label":"Suggestions",ref_key:"listRef",ref:n},[S("div",{"command-list-sizer":"",ref_key:"heightRef",ref:r},[M(s.$slots,"default")],512)],512))}}),C$=Hi(_$,[["__file","/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandList.vue"]]),k$=B({name:"Command.Empty",setup(e,{attrs:t,slots:n}){const{filtered:r}=Vi(),i=w(()=>r.value.count===0);return()=>i.value?ot("div",{"command-empty":"",role:"presentation",...t},n):ot("div",{"command-empty":"hidden",role:"presentation",style:{display:"none"},...t})}}),w$=B({name:"Command.Loading",setup(e,{attrs:t,slots:n}){return()=>ot("div",{"command-loading":"",role:"progressbar",...t},n)}}),S$=B({name:"Command.Separator",setup(e,{attrs:t,slots:n}){return()=>ot("div",{"command-separator":"",role:"separator",...t})}}),fi=Object.assign(Nc,{Dialog:i$,Empty:k$,Group:u$,Input:f$,Item:y$,List:C$,Loading:w$,Separator:S$,Root:Nc});var cp;const Ve=typeof window<"u",Kg=e=>typeof e=="function",x$=e=>typeof e=="string",fr=()=>{},T$=Ve&&((cp=window==null?void 0:window.navigator)==null?void 0:cp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function fn(e){return typeof e=="function"?e():p(e)}function Yu(e,t){function n(...r){return new Promise((i,o)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(i).catch(o)})}return n}const Xg=e=>e();function E$(e,t={}){let n,r,i=fr;const o=a=>{clearTimeout(a),i(),i=fr};return a=>{const l=fn(e),c=fn(t.maxWait);return n&&o(n),l<=0||c!==void 0&&c<=0?(r&&(o(r),r=null),Promise.resolve(a())):new Promise((u,h)=>{i=t.rejectOnCancel?h:u,c&&!r&&(r=setTimeout(()=>{n&&o(n),r=null,u(a())},c)),n=setTimeout(()=>{r&&o(r),r=null,u(a())},l)})}}function A$(e,t=!0,n=!0,r=!1){let i=0,o,s=!0,a=fr,l;const c=()=>{o&&(clearTimeout(o),o=void 0,a(),a=fr)};return h=>{const d=fn(e),f=Date.now()-i,g=()=>l=h();return c(),d<=0?(i=Date.now(),g()):(f>d&&(n||!s)?(i=Date.now(),g()):t&&(l=new Promise((m,y)=>{a=r?y:m,o=setTimeout(()=>{i=Date.now(),s=!0,m(g()),c()},Math.max(0,d-f))})),!n&&!o&&(o=setTimeout(()=>s=!0,d)),s=!1,l)}}function $$(e=Xg){const t=L(!0);function n(){t.value=!1}function r(){t.value=!0}const i=(...o)=>{t.value&&e(...o)};return{isActive:Pa(t),pause:n,resume:r,eventFilter:i}}function P$(e){return e}function Ir(e){return Kf()?(Xf(e),!0):!1}function L$(e,t=200,n={}){return Yu(E$(t,n),e)}function Qg(e,t=200,n=!1,r=!0,i=!1){return Yu(A$(t,n,r,i),e)}function M$(e){return typeof e=="function"?w(e):L(e)}function Ku(e,t=!0){_t()?Ae(e):t?e():De(e)}function I$(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:i=!1}=n;let o=null;const s=L(!1);function a(){o&&(clearInterval(o),o=null)}function l(){s.value=!1,a()}function c(){const u=fn(t);u<=0||(s.value=!0,i&&e(),a(),o=setInterval(e,u))}if(r&&Ve&&c(),Qf(t)||Kg(t)){const u=oe(t,()=>{s.value&&Ve&&c()});Ir(u)}return Ir(l),{isActive:s,pause:l,resume:c}}function B$(e,t,n={}){const{immediate:r=!0}=n,i=L(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function a(){i.value=!1,s()}function l(...c){s(),i.value=!0,o=setTimeout(()=>{i.value=!1,o=null,e(...c)},fn(t))}return r&&(i.value=!0,Ve&&l()),Ir(a),{isPending:Pa(i),start:l,stop:a}}var up=Object.getOwnPropertySymbols,O$=Object.prototype.hasOwnProperty,F$=Object.prototype.propertyIsEnumerable,R$=(e,t)=>{var n={};for(var r in e)O$.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&up)for(var r of up(e))t.indexOf(r)<0&&F$.call(e,r)&&(n[r]=e[r]);return n};function N$(e,t,n={}){const r=n,{eventFilter:i=Xg}=r,o=R$(r,["eventFilter"]);return oe(e,Yu(i,t),o)}var D$=Object.defineProperty,z$=Object.defineProperties,V$=Object.getOwnPropertyDescriptors,va=Object.getOwnPropertySymbols,Zg=Object.prototype.hasOwnProperty,Jg=Object.prototype.propertyIsEnumerable,dp=(e,t,n)=>t in e?D$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,H$=(e,t)=>{for(var n in t||(t={}))Zg.call(t,n)&&dp(e,n,t[n]);if(va)for(var n of va(t))Jg.call(t,n)&&dp(e,n,t[n]);return e},q$=(e,t)=>z$(e,V$(t)),j$=(e,t)=>{var n={};for(var r in e)Zg.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&va)for(var r of va(e))t.indexOf(r)<0&&Jg.call(e,r)&&(n[r]=e[r]);return n};function e1(e,t,n={}){const r=n,{eventFilter:i}=r,o=j$(r,["eventFilter"]),{eventFilter:s,pause:a,resume:l,isActive:c}=$$(i);return{stop:N$(e,t,q$(H$({},o),{eventFilter:s})),pause:a,resume:l,isActive:c}}function zt(e){var t;const n=fn(e);return(t=n==null?void 0:n.$el)!=null?t:n}const $t=Ve?window:void 0;function He(...e){let t,n,r,i;if(x$(e[0])||Array.isArray(e[0])?([n,r,i]=e,t=$t):[t,n,r,i]=e,!t)return fr;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const o=[],s=()=>{o.forEach(u=>u()),o.length=0},a=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),l=oe(()=>[zt(t),fn(i)],([u,h])=>{s(),u&&o.push(...n.flatMap(d=>r.map(f=>a(u,d,f,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),s()};return Ir(c),c}let hp=!1;function G$(e,t,n={}){const{window:r=$t,ignore:i=[],capture:o=!0,detectIframe:s=!1}=n;if(!r)return;T$&&!hp&&(hp=!0,Array.from(r.document.body.children).forEach(d=>d.addEventListener("click",fr)));let a=!0;const l=d=>i.some(f=>{if(typeof f=="string")return Array.from(r.document.querySelectorAll(f)).some(g=>g===d.target||d.composedPath().includes(g));{const g=zt(f);return g&&(d.target===g||d.composedPath().includes(g))}}),u=[He(r,"click",d=>{const f=zt(e);if(!(!f||f===d.target||d.composedPath().includes(f))){if(d.detail===0&&(a=!l(d)),!a){a=!0;return}t(d)}},{passive:!0,capture:o}),He(r,"pointerdown",d=>{const f=zt(e);f&&(a=!d.composedPath().includes(f)&&!l(d))},{passive:!0}),s&&He(r,"blur",d=>{var f;const g=zt(e);((f=r.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(g!=null&&g.contains(r.document.activeElement))&&t(d)})].filter(Boolean);return()=>u.forEach(d=>d())}function Xu(e,t=!1){const n=L(),r=()=>n.value=!!e();return r(),Ku(r,t),n}function W$(e,t={}){const{window:n=$t}=t,r=Xu(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let i;const o=L(!1),s=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",a):i.removeListener(a))},a=()=>{r.value&&(s(),i=n.matchMedia(M$(e).value),o.value=i.matches,"addEventListener"in i?i.addEventListener("change",a):i.addListener(a))};return Fn(a),Ir(()=>s()),o}function t1({window:e=$t}={}){const t=r=>{const{state:i,length:o}=(e==null?void 0:e.history)||{},{hash:s,host:a,hostname:l,href:c,origin:u,pathname:h,port:d,protocol:f,search:g}=(e==null?void 0:e.location)||{};return{trigger:r,state:i,length:o,hash:s,host:a,hostname:l,href:c,origin:u,pathname:h,port:d,protocol:f,search:g}},n=L(t("load"));return e&&(He(e,"popstate",()=>n.value=t("popstate"),{passive:!0}),He(e,"hashchange",()=>n.value=t("hashchange"),{passive:!0})),n}const Dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zc="__vueuse_ssr_handlers__";Dc[zc]=Dc[zc]||{};const U$=Dc[zc];function n1(e,t){return U$[e]||t}function Y$(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var K$=Object.defineProperty,pp=Object.getOwnPropertySymbols,X$=Object.prototype.hasOwnProperty,Q$=Object.prototype.propertyIsEnumerable,fp=(e,t,n)=>t in e?K$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mp=(e,t)=>{for(var n in t||(t={}))X$.call(t,n)&&fp(e,n,t[n]);if(pp)for(var n of pp(t))Q$.call(t,n)&&fp(e,n,t[n]);return e};const Z$={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},gp="vueuse-storage";function J$(e,t,n,r={}){var i;const{flush:o="pre",deep:s=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:h=$t,eventFilter:d,onError:f=O=>{console.error(O)}}=r,g=(u?Mn:L)(t);if(!n)try{n=n1("getDefaultStorage",()=>{var O;return(O=$t)==null?void 0:O.localStorage})()}catch(O){f(O)}if(!n)return g;const m=fn(t),y=Y$(m),b=(i=r.serializer)!=null?i:Z$[y],{pause:k,resume:_}=e1(g,()=>x(g.value),{flush:o,deep:s,eventFilter:d});return h&&a&&(He(h,"storage",E),He(h,gp,A)),E(),g;function x(O){try{if(O==null)n.removeItem(e);else{const J=b.write(O),R=n.getItem(e);R!==J&&(n.setItem(e,J),h&&h.dispatchEvent(new CustomEvent(gp,{detail:{key:e,oldValue:R,newValue:J,storageArea:n}})))}}catch(J){f(J)}}function T(O){const J=O?O.newValue:n.getItem(e);if(J==null)return l&&m!==null&&n.setItem(e,b.write(m)),m;if(!O&&c){const R=b.read(J);return Kg(c)?c(R,m):y==="object"&&!Array.isArray(R)?mp(mp({},m),R):R}else return typeof J!="string"?J:b.read(J)}function A(O){E(O.detail)}function E(O){if(!(O&&O.storageArea!==n)){if(O&&O.key==null){g.value=m;return}if(!(O&&O.key!==e)){k();try{g.value=T(O)}catch(J){f(J)}finally{O?De(_):_()}}}}}function r1(e){return W$("(prefers-color-scheme: dark)",e)}var eP=Object.defineProperty,vp=Object.getOwnPropertySymbols,tP=Object.prototype.hasOwnProperty,nP=Object.prototype.propertyIsEnumerable,yp=(e,t,n)=>t in e?eP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rP=(e,t)=>{for(var n in t||(t={}))tP.call(t,n)&&yp(e,n,t[n]);if(vp)for(var n of vp(t))nP.call(t,n)&&yp(e,n,t[n]);return e};function i1(e={}){const{selector:t="html",attribute:n="class",initialValue:r="auto",window:i=$t,storage:o,storageKey:s="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c}=e,u=rP({auto:"",light:"light",dark:"dark"},e.modes||{}),h=r1({window:i}),d=w(()=>h.value?"dark":"light"),f=l||(s==null?L(r):J$(s,r,o,{window:i,listenToStorageChanges:a})),g=w({get(){return f.value==="auto"&&!c?d.value:f.value},set(k){f.value=k}}),m=n1("updateHTMLAttrs",(k,_,x)=>{const T=i==null?void 0:i.document.querySelector(k);if(T)if(_==="class"){const A=x.split(/\s/g);Object.values(u).flatMap(E=>(E||"").split(/\s/g)).filter(Boolean).forEach(E=>{A.includes(E)?T.classList.add(E):T.classList.remove(E)})}else T.setAttribute(_,x)});function y(k){var _;const x=k==="auto"?d.value:k;m(t,n,(_=u[x])!=null?_:x)}function b(k){e.onChanged?e.onChanged(k,y):y(k)}return oe(g,b,{flush:"post",immediate:!0}),c&&oe(d,()=>b(g.value),{flush:"post"}),Ku(()=>b(g.value)),g}var iP=Object.defineProperty,oP=Object.defineProperties,sP=Object.getOwnPropertyDescriptors,bp=Object.getOwnPropertySymbols,aP=Object.prototype.hasOwnProperty,lP=Object.prototype.propertyIsEnumerable,_p=(e,t,n)=>t in e?iP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cP=(e,t)=>{for(var n in t||(t={}))aP.call(t,n)&&_p(e,n,t[n]);if(bp)for(var n of bp(t))lP.call(t,n)&&_p(e,n,t[n]);return e},uP=(e,t)=>oP(e,sP(t));function o1(e={}){const{valueDark:t="dark",valueLight:n="",window:r=$t}=e,i=i1(uP(cP({},e),{onChanged:(a,l)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,a==="dark"):l(a)},modes:{dark:t,light:n}})),o=r1({window:r});return w({get(){return i.value==="dark"},set(a){a===o.value?i.value="auto":i.value=a?"dark":"light"}})}var Cp=Object.getOwnPropertySymbols,dP=Object.prototype.hasOwnProperty,hP=Object.prototype.propertyIsEnumerable,pP=(e,t)=>{var n={};for(var r in e)dP.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Cp)for(var r of Cp(e))t.indexOf(r)<0&&hP.call(e,r)&&(n[r]=e[r]);return n};function dn(e,t,n={}){const r=n,{window:i=$t}=r,o=pP(r,["window"]);let s;const a=Xu(()=>i&&"ResizeObserver"in i),l=()=>{s&&(s.disconnect(),s=void 0)},c=oe(()=>zt(e),h=>{l(),a.value&&i&&h&&(s=new ResizeObserver(t),s.observe(h,o))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return Ir(u),{isSupported:a,stop:u}}function s1(e,t={width:0,height:0},n={}){const{window:r=$t,box:i="content-box"}=n,o=w(()=>{var l,c;return(c=(l=zt(e))==null?void 0:l.namespaceURI)==null?void 0:c.includes("svg")}),s=L(t.width),a=L(t.height);return dn(e,([l])=>{const c=i==="border-box"?l.borderBoxSize:i==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;if(r&&o.value){const u=zt(e);if(u){const h=r.getComputedStyle(u);s.value=parseFloat(h.width),a.value=parseFloat(h.height)}}else if(c){const u=Array.isArray(c)?c:[c];s.value=u.reduce((h,{inlineSize:d})=>h+d,0),a.value=u.reduce((h,{blockSize:d})=>h+d,0)}else s.value=l.contentRect.width,a.value=l.contentRect.height},n),oe(()=>zt(e),l=>{s.value=l?t.width:0,a.value=l?t.height:0}),{width:s,height:a}}function fP(e,{window:t=$t,scrollTarget:n}={}){const r=L(!1),i=()=>{if(!t)return;const o=t.document,s=zt(e);if(!s)r.value=!1;else{const a=s.getBoundingClientRect();r.value=a.top<=(t.innerHeight||o.documentElement.clientHeight)&&a.left<=(t.innerWidth||o.documentElement.clientWidth)&&a.bottom>=0&&a.right>=0}};return oe(()=>zt(e),()=>i(),{immediate:!0,flush:"post"}),t&&He(n||t,"scroll",i,{capture:!1,passive:!0}),r}const kp=1;function mP(e,t={}){const{throttle:n=0,idle:r=200,onStop:i=fr,onScroll:o=fr,offset:s={left:0,right:0,top:0,bottom:0},eventListenerOptions:a={capture:!1,passive:!0},behavior:l="auto"}=t,c=L(0),u=L(0),h=w({get(){return c.value},set(x){f(x,void 0)}}),d=w({get(){return u.value},set(x){f(void 0,x)}});function f(x,T){var A,E,O;const J=fn(e);J&&((O=J instanceof Document?document.body:J)==null||O.scrollTo({top:(A=fn(T))!=null?A:d.value,left:(E=fn(x))!=null?E:h.value,behavior:fn(l)}))}const g=L(!1),m=ct({left:!0,right:!1,top:!0,bottom:!1}),y=ct({left:!1,right:!1,top:!1,bottom:!1}),b=x=>{g.value&&(g.value=!1,y.left=!1,y.right=!1,y.top=!1,y.bottom=!1,i(x))},k=L$(b,n+r),_=x=>{const T=x.target===document?x.target.documentElement:x.target,A=T.scrollLeft;y.left=A<c.value,y.right=A>u.value,m.left=A<=0+(s.left||0),m.right=A+T.clientWidth>=T.scrollWidth-(s.right||0)-kp,c.value=A;let E=T.scrollTop;x.target===document&&!E&&(E=document.body.scrollTop),y.top=E<u.value,y.bottom=E>u.value,m.top=E<=0+(s.top||0),m.bottom=E+T.clientHeight>=T.scrollHeight-(s.bottom||0)-kp,u.value=E,g.value=!0,k(x),o(x)};return He(e,"scroll",n?Qg(_,n,!0,!1):_,a),He(e,"scrollend",b,a),{x:h,y:d,isScrolling:g,arrivedState:m,directions:y}}const gP={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function vP(e={}){const{reactive:t=!1,target:n=$t,aliasMap:r=gP,passive:i=!0,onEventFired:o=fr}=e,s=ct(new Set),a={toJSON(){return{}},current:s},l=t?ct(a):a,c=new Set,u=new Set;function h(m,y){m in l&&(t?l[m]=y:l[m].value=y)}function d(){s.clear();for(const m of u)h(m,!1)}function f(m,y){var b,k;const _=(b=m.key)==null?void 0:b.toLowerCase(),T=[(k=m.code)==null?void 0:k.toLowerCase(),_].filter(Boolean);_&&(y?s.add(_):s.delete(_));for(const A of T)u.add(A),h(A,y);_==="meta"&&!y?(c.forEach(A=>{s.delete(A),h(A,!1)}),c.clear()):typeof m.getModifierState=="function"&&m.getModifierState("Meta")&&y&&[...s,...T].forEach(A=>c.add(A))}He(n,"keydown",m=>(f(m,!0),o(m)),{passive:i}),He(n,"keyup",m=>(f(m,!1),o(m)),{passive:i}),He("blur",d,{passive:!0}),He("focus",d,{passive:!0});const g=new Proxy(l,{get(m,y,b){if(typeof y!="string")return Reflect.get(m,y,b);if(y=y.toLowerCase(),y in r&&(y=r[y]),!(y in l))if(/[+_-]/.test(y)){const _=y.split(/[+_-]/g).map(x=>x.trim());l[y]=w(()=>_.every(x=>p(g[x])))}else l[y]=L(!1);const k=Reflect.get(m,y,b);return t?p(k):k}});return g}var wp=Object.getOwnPropertySymbols,yP=Object.prototype.hasOwnProperty,bP=Object.prototype.propertyIsEnumerable,_P=(e,t)=>{var n={};for(var r in e)yP.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&wp)for(var r of wp(e))t.indexOf(r)<0&&bP.call(e,r)&&(n[r]=e[r]);return n};function CP(e,t,n={}){const r=n,{window:i=$t}=r,o=_P(r,["window"]);let s;const a=Xu(()=>i&&"MutationObserver"in i),l=()=>{s&&(s.disconnect(),s=void 0)},c=oe(()=>zt(e),h=>{l(),a.value&&i&&h&&(s=new MutationObserver(t),s.observe(h,o))},{immediate:!0}),u=()=>{l(),c()};return Ir(u),{isSupported:a,stop:u}}var Sp;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Sp||(Sp={}));var kP=Object.defineProperty,xp=Object.getOwnPropertySymbols,wP=Object.prototype.hasOwnProperty,SP=Object.prototype.propertyIsEnumerable,Tp=(e,t,n)=>t in e?kP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xP=(e,t)=>{for(var n in t||(t={}))wP.call(t,n)&&Tp(e,n,t[n]);if(xp)for(var n of xp(t))SP.call(t,n)&&Tp(e,n,t[n]);return e};const TP={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};xP({linear:P$},TP);function EP(e="history",t={}){const{initialValue:n={},removeNullishValues:r=!0,removeFalsyValues:i=!1,write:o=!0,window:s=$t}=t;if(!s)return ct(n);const a=ct({});function l(){if(e==="history")return s.location.search||"";if(e==="hash"){const b=s.location.hash||"",k=b.indexOf("?");return k>0?b.slice(k):""}else return(s.location.hash||"").replace(/^#/,"")}function c(b){const k=b.toString();if(e==="history")return`${k?`?${k}`:""}${s.location.hash||""}`;if(e==="hash-params")return`${s.location.search||""}${k?`#${k}`:""}`;const _=s.location.hash||"#",x=_.indexOf("?");return x>0?`${_.slice(0,x)}${k?`?${k}`:""}`:`${_}${k?`?${k}`:""}`}function u(){return new URLSearchParams(l())}function h(b){const k=new Set(Object.keys(a));for(const _ of b.keys()){const x=b.getAll(_);a[_]=x.length>1?x:b.get(_)||"",k.delete(_)}Array.from(k).forEach(_=>delete a[_])}const{pause:d,resume:f}=e1(a,()=>{const b=new URLSearchParams("");Object.keys(a).forEach(k=>{const _=a[k];Array.isArray(_)?_.forEach(x=>b.append(k,x)):r&&_==null||i&&!_?b.delete(k):b.set(k,_)}),g(b)},{deep:!0});function g(b,k){d(),k&&h(b),s.history.replaceState(s.history.state,s.document.title,s.location.pathname+c(b)),f()}function m(){o&&g(u(),!0)}He(s,"popstate",m,!1),e!=="history"&&He(s,"hashchange",m,!1);const y=u();return y.keys().next().value?h(y):Object.assign(a,n),a}function qi(e={}){const{window:t=$t,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:i=!0,includeScrollbar:o=!0}=e,s=L(n),a=L(r),l=()=>{t&&(o?(s.value=t.innerWidth,a.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,a.value=t.document.documentElement.clientHeight))};return l(),Ku(l),He("resize",l,{passive:!0}),i&&He("orientationchange",l,{passive:!0}),{width:s,height:a}}const Nl=L([{route:"/about.html",meta:{description:"",sticky:1,title:"关于主题",date:"2024-03-22 15:15:36"}},{route:"/Docker/Docker基础知识.html",meta:{description:`# Docker基础知识\r
\r
### 可视化\r
\r
\`\`\`shell\r
portainer (先用这个)\r
\r
Rancher (CI/CD)时候再用\r
\`\`\`\r
\r
#### 什么是portainer?\r
\r
Docker图形化界面管理工具！提供一个后台面板供我们操作！\r
\r
\`\`\`shell\r
docker run -d -p 8088:9000 \\\r
--restart=always -v /var/run/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer\r
\`\`\`\r
\r
![image-20231010211212398](https://s2.loli.net/2024/03/22/nCepUPNfJGt9HYS.png)\r
\r
一般不会使用这种可视化面板，主打一个测试使用。\r
\r
## Docker镜像讲解\r
\r
### 镜像是什么\r
\r
镜像是一种轻量级、可执行的独立软件包，用来打包软件运行环境和基于运行环境开发的软件，它包含运行某个软件所需的所有内容，包括代码、运行时、库、环境变量和配置文件。\r
\r
### Docker镜像加载原理\r
\r
>UnionFS (联合文件系统)\r
\r
UnionFS(联合文件系统):Union文件系统(UnionFs )是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到一个虚拟文件系统下(unite severaldirectories into a single virtuafleystem)。Union 文件系统是 Docker 镜像的基础。镜像可以通过分层来进行继承，基于基础镜像(没有父像 )，可以制作种具体的应用镜像。\r
特性:一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录\r
\r
> Docker镜像加载原理\r
\r
docker的镜像实际上由一层一层的文件系统组成，这种层级的文件系统UnionFS。bootfs(boot file system)要包含bootloader和kernel, bootloader主要是引导加载kernel, Linux刚启动时会加载bootfs文件系统，在Docker镜像的最底层是bootfs。这一层与我们典型的Linux/Unix系统是一样的，包合boot加载器和内核。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，此时系统也会卸载bootfs(系统启动的时候需要)。rootfs (root file system),在bootfs之上。包合的就是典型 Linux 系统中的 /dev,/proc,/bin, /etc 等标准目录和文件。rootfs就是各种不同的操作系统发行版，比如Ubuntu，Centos等等。\r
\r
![image-20231011211311681](https://s2.loli.net/2024/03/22/rbu6xiHKXpS4Wnd.png)\r
\r
对于一个精简的OS，rootfs 可以很小，只需要包含最基本的命令，工具和程序库就可以了，因为底层直接用Host的kerne，自己只需要提供rootfs就可以了。由此可见对于不同的linux发行版,bootfs基本是一致的，rootfs会有差别,因此不同的发行版可以公用bootfs。\r
\r
### 分层的理解\r
\r
所有的 Docker 镜像都起始于一个基础镜像层，当进行修改或增加新的内容时，就会在当前镜像层之上，创建新的镜像层。举一个简单的例子，假如基于 Ubuntu Linux 16.04 创建一个新的镜像，这就是新像的第一层，如果在该镜像中添加 Pvthon包就会在基础镜像层之上创建第二个镜像层;如果继续添加一个安全补丁，就会创建第三个镜像层。该镜像当前已经包含 3 个镜像层，如下图所示(这只是一个用于演示的很简单的例子)\r
\r
![image-20231011211751560](https://s2.loli.net/2024/03/22/mQvJtblT7hxd1yi.png)\r
\r
在添加额外的镜像层的同时，镜像始终保持是当前所有镜像的组合，理解这一点非常重要。下图中举了一个简单的例子，每个镜像层包含 3 个文件，而镜像包含了来自两个镜像层的 6 个文件。\r
\r
![image-20231011211917885](https://s2.loli.net/2024/03/22/eFNjdvGqykREJ9H.png)\r
\r
上图中的镜像层跟之前图中的略有区别，主要目的是便于展示文件。下图中展示了一个稍微复杂的三层镜像，在外部看来整个镜像只有 6 个文件，这是因为最上层中的文件7 是文件 5的一个更新版本。\r
\r
![image-20231011212115572](https://s2.loli.net/2024/03/22/H5RWgYMZBxvjf7i.png)\r
\r
这种情况下，上层镜像层中的文件覆盖了底层镜像层中的文件。这样就使得文件的更新版本作为一个新镜像层添加到镜像当中。Docker 通过存储引擎(新版本采用快照机制 的方式来实现像层堆栈，并保证多像层对外展示为统一的文件系统。Linux 上可用的存储引擎有 AUFS、Overlay2、Device Mapper、Btrfs 以及 ZFS。顾名思义，每种存储警都基于Linux 中对应的文件系统或者块设备技术，并且每种存储引警都有其独有的性能特点\r
Docker 在 Windows 上仅支持 windowsfilter 一种存储引擎，该引警基于 NTFS 文件系统之上实现了分层和 CoWT11.\r
下图展示了与系统显示相同的三层镜像。所有镜像层堆叠并合并，对外提供统一的视图。\r
\r
![image-20231011212226451](https://s2.loli.net/2024/03/22/R4kXLIF5Mefw7ZV.png)\r
\r
> 特点\r
\r
Docker镜像都是只读的，当容器启动时，一个新的可写层被加载到镜像的顶部\r
\r
这一层就是我们通常说的容器层，容器之下的都叫做镜像层！\r
\r
![image-20231011212453430](https://s2.loli.net/2024/03/22/uFK2bgLmVqQ9B1T.png)\r
\r
### commit 镜像\r
\r
\`\`\`shell\r
docker commit 提交容器成为一个新的副本\r
docker commit -m= "提交的信息" -a="作者名字" 容器id 目标镜像名:[TAG]\r
\r
\`\`\`\r
\r
实战测试\r
\r
\`\`\`shell\r
# 制作一个自己的tomcat镜像\r
# docker commit -a="wh" -m="test" cc1e1449e02a tomcat02:1.0\r
root@cc1e1449e02a:/usr/local/tomcat/webapps# docker commit -a="wh" -m="test" cc1e1449e02a tomcat02:1.0\r
bash: docker: command not found\r
root@cc1e1449e02a:/usr/local/tomcat/webapps# read escape sequence\r
[root@wh ~]# docker commit -a="wh" -m="test" cc1e1449e02a tomcat02:1.0\r
sha256:0bc262a96b157e8deae88b5cec3bf1cbf0d9466fa3d69a3e64bc15b56cd5cffb\r
[root@wh ~]# docker images\r
REPOSITORY            TAG       IMAGE ID       CREATED         SIZE\r
tomcat02              1.0       0bc262a96b15   5 seconds ago   684MB\r
nginx                 latest    605c77e624dd   21 months ago   141MB\r
tomcat                9.0       b8e65a4d736d   21 months ago   680MB\r
tomcat                latest    fb5657adc892   21 months ago   680MB\r
mysql                 5.7       c20987f18b13   21 months ago   448MB\r
centos                latest    5d0da3dc9764   2 years ago     231MB\r
portainer/portainer   latest    580c0e4e98b0   2 years ago     79.1MB\r
\r
\`\`\`\r
\r
### 容器数据卷\r
\r
#### 什么是容器数据卷\r
\r
docker的理念回顾：将应用和环境打包成一个镜像\r
\r
数据？如果数据都在容器中，那么我们容器删除，数据就会丢失！\r
\r
MYsql， 容器删了，删库跑路！需求：Mysql数据可以存储在本地！\r
\r
容器之间可以有一个数据共享技术！Docker容器中产生的数据，同步到本地！\r
\r
这就是容器卷技术！目录的挂载，将我们容器内的目录，挂载到Linux上面！\r
\r
![image-20231012111403572](https://s2.loli.net/2024/03/22/bop4CDKSR5hVZUu.png)\r
\r
**总结一句话：容器的持久化和同步操作！容器间也是可以数据共享的！**\r
\r
#### 使用数据卷\r
\r
>方式1：直接使用命令来挂载 -v\r
\r
\`\`\`shell\r
docker run -it -v 主机目录：容器内目录\r
# 测试\r
[root@wh ~]# docker run -it -v /home/ceshi:/home centos /bin/bash\r
\r
\`\`\`\r
\r
![image-20231012112243858](https://s2.loli.net/2024/03/22/SAVyfZbsDni6dlv.png)\r
\r
同步的过程，双向绑定，无论从哪个地方修改，双方都能够看到修改\r
\r
#### 实战：安装mysql\r
\r
\`\`\`shell\r
[root@wh ~]# docker run -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7\r
f3d215849d2ca0a69571efdf61f2d0b2e7b094db89b94850d3d4f513d6f5efaa\r
# 启动成功之后，我们在本地使用DBMS来进行连接测试\r
# navicat通过端口3310连接服务器，然后端口映射到了容器中的3306\r
\r
\r
[root@wh ~]# cd /home\r
[root@wh home]# ls\r
ceshi  mysql  wh.java\r
[root@wh home]# ls\r
ceshi  mysql  wh.java\r
[root@wh home]# cd mysql/\r
[root@wh mysql]# ls\r
conf  data\r
[root@wh mysql]# cd data/\r
[root@wh data]# ls\r
auto.cnf    client-cert.pem  ibdata1      ibtmp1              private_key.pem  server-key.pem\r
ca-key.pem  client-key.pem   ib_logfile0  mysql               public_key.pem   sys\r
ca.pem      ib_buffer_pool   ib_logfile1  performance_schema  server-cert.pem  test\r
[root@wh data]# docker rm -f mysql01\r
mysql01\r
[root@wh data]# docker ps\r
CONTAINER ID   IMAGE     COMMAND       CREATED          STATUS          PORTS     NAMES\r
896ce5605105   centos    "/bin/bash"   38 minutes ago   Up 38 minutes             great_golick\r
[root@wh data]# cd /home\r
[root@wh home]# ls\r
ceshi  mysql  wh.java\r
[root@wh home]# cd mysql/\r
[root@wh mysql]# ls\r
conf  data\r
[root@wh mysql]# cd data/\r
[root@wh data]# ls\r
auto.cnf    client-cert.pem  ibdata1      ibtmp1              private_key.pem  server-key.pem\r
ca-key.pem  client-key.pem   ib_logfile0  mysql               public_key.pem   sys\r
ca.pem      ib_buffer_pool   ib_logfile1  performance_schema  server-cert.pem  test\r
[root@wh data]# cd test/\r
[root@wh test]# ls\r
db.opt\r
[root@wh test]#\r
\r
\`\`\`\r
\r
#### 具名挂载和匿名挂载\r
\r
\`\`\`shell\r
# 匿名挂载\r
-v 容器内路径\r
# 这里发现，这种就是匿名挂载，-v后面只有容器内路径，没有指定容器外的路径\r
[root@wh test]# docker run -d -P --name nginx66 -v /etc/nginx nginx\r
e2c69126b27412b8a744fa4545900516af5c66f07bb6e1d3581f569038e01da4\r
[root@wh test]# docker volume ls # 查看本地所有的卷\r
DRIVER    VOLUME NAME \r
local     688d0746e9cb1985859c321a74f8ea017ce903e5819adfa343c39fe04b2b5cbd [匿名卷]\r
local     47984d13f36b5609594920b8318ca072c53be2336adefb4d3f98b0ee3afc405a\r
\r
# 这个是具名挂载，给定了一个名字：容器内部路径\r
[root@wh test]# docker run -d -P --name nginx88 -v juming-nginx:/etc/nginx nginx\r
7a3ea204b49a15804b5f15f32076efa388f760db8acbf5ebd7c8d05cc1e1d1c2\r
[root@wh test]# docker volume ls\r
DRIVER    VOLUME NAME\r
local     688d0746e9cb1985859c321a74f8ea017ce903e5819adfa343c39fe04b2b5cbd\r
local     47984d13f36b5609594920b8318ca072c53be2336adefb4d3f98b0ee3afc405a\r
local     juming-nginx\r
\r
\r
[root@wh test]# docker volume inspect juming-nginx\r
[\r
    {\r
        "CreatedAt": "2023-10-12T12:13:15+08:00",\r
        "Driver": "local",\r
        "Labels": null,\r
        "Mountpoint": "/var/lib/docker/volumes/juming-nginx/_data",\r
        "Name": "juming-nginx",\r
        "Options": null,\r
        "Scope": "local"\r
    }\r
]\r
# 可以看到如果没有指定宿主机路径，都会将对应的数据卷放在/var/lib/docker/volumes/***该文件下\r
\r
\r
\`\`\`\r
\r
如何确定是具名挂载还是匿名挂载呢？\r
\r
\`\`\`shell\r
-v 容器内路径 # 匿名\r
-v name:容器内路径 # 具名\r
-v /path:/path # 指定了路径\r
\`\`\`\r
\r
拓展：\r
\r
\`\`\`shell\r
# ro:只读\r
# rw:可读可写\r
docker run -d -P --name nginx66 -v /etc/nginx:ro nginx\r
docker run -d -P --name nginx66 -v /etc/nginx:rw nginx\r
\`\`\`\r
\r
### 初识DockerFile\r
\r
Dockerfile就是用来构建docker镜像的文件！命令脚本！先体验一下！\r
\r
通过这个脚本可以生成镜像，镜像是一层一层的，脚本一个个的命令，每个命令都是一层！\r
\r
\`\`\`shell\r
# 创建一个dockerfile文件\r
\r
[root@wh docker-test-volume]# cat dockerfile1\r
\r
# 文件中的内容\r
FROM centos\r
VOLUME ["volume01", "volume02"]\r
CMD echo "`,title:"Docker基础知识",date:"2024-04-18 15:15:32"}},{route:"/Docker/Docker常用命令.html",meta:{description:`# Docker常用命令\r
\r
<https://docs.docker.com/reference/>\r
\r
### 镜像命令\r
\r
\`\`\`bash\r
[root@wh docker]# docker images -a\r
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE\r
hello-world   latest    9c7a54a9a43c   4 months ago   13.3kB\r
\r
# 解释\r
REPOSITORY 镜像的仓库源\r
TAG 镜像的标签\r
IMAGE 镜像的ID\r
CRRATED 镜像创建的时间\r
SIZE 镜像的大小\r
\r
# 可选项\r
-a, -all # 列出所有的镜像\r
-q, --quiet # 只显示镜像的id\r
\`\`\`\r
\r
1、docker search 搜索镜像\r
\r
\`\`\`shell\r
docker search --help #可以查看该命令的帮助文档\r
\r
[root@wh docker]# docker search mysql --filter=STARS=4000\r
NAME      DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED\r
mysql     MySQL is a widely used, open-source relation…   14471     [OK]\r
mariadb   MariaDB Server is a high performing open sou…   5522      [OK]\r
\r
\r
\`\`\`\r
\r
2、docker  pull 下载镜像\r
\r
\`\`\`shell\r
[root@wh docker]# docker pull mysql\r
Using default tag: latest\r
latest: Pulling from library/mysql\r
72a69066d2fe: Pull complete\r
93619dbc5b36: Pull complete\r
99da31dd6142: Pull complete\r
626033c43d70: Pull complete\r
37d5d7efb64e: Pull complete\r
ac563158d721: Pull complete\r
d2ba16033dad: Pull complete\r
688ba7d5c01a: Pull complete\r
00e060b6d11d: Pull complete\r
1c04857f594f: Pull complete\r
4d7cfa90e6ea: Pull complete\r
e0431212d27d: Pull complete\r
Digest: sha256:e9027fe4d91c0153429607251656806cc784e914937271037f7738bd5b8e7709\r
Status: Downloaded newer image for mysql:latest\r
docker.io/library/mysql:latest # 真实地址\r
\r
# 等价于它\r
docker pull mysql\r
docker pull docker.io/library/mysql:latest\r
\r
# 指定版本下载\r
docker pull mysql: 5.7\r
\`\`\`\r
\r
3、docker rmi  删除镜像\r
\r
\`\`\`shell\r
[root@wh docker]# docker rmi -f c20987f18b13 # 删除指定容器\r
Untagged: mysql:5.7\r
Untagged: mysql@sha256:f2ad209efe9c67104167fc609cca6973c8422939491c9345270175a300419f94\r
Deleted: sha256:c20987f18b130f9d144c9828df630417e2a9523148930dc3963e9d0dab302a76\r
Deleted: sha256:6567396b065ee734fb2dbb80c8923324a778426dfd01969f091f1ab2d52c7989\r
Deleted: sha256:0910f12649d514b471f1583a16f672ab67e3d29d9833a15dc2df50dd5536e40f\r
Deleted: sha256:6682af2fb40555c448b84711c7302d0f86fc716bbe9c7dc7dbd739ef9d757150\r
Deleted: sha256:5c062c3ac20f576d24454e74781511a5f96739f289edaadf2de934d06e910b92\r
\r
[root@wh docker]# docker rmi -f $(docker images -aq) # 删除所有的容器\r
Untagged: hello-world:latest\r
Untagged: hello-world@sha256:4f53e2564790c8e7856ec08e384732aa38dc43c52f02952483e3f003afbf23db\r
Deleted: sha256:9c7a54a9a43cca047013b82af109fe963fde787f63f9e016fdc3384500c2823d\r
Untagged: mysql:latest\r
Untagged: mysql@sha256:e9027fe4d91c0153429607251656806cc784e914937271037f7738bd5b8e7709\r
Deleted: sha256:3218b38490cec8d31976a40b92e09d61377359eab878db49f025e5d464367f3b\r
Deleted: sha256:aa81ca46575069829fe1b3c654d9e8feb43b4373932159fe2cad1ac13524a2f5\r
Deleted: sha256:0558823b9fbe967ea6d7174999be3cc9250b3423036370dc1a6888168cbd224d\r
Deleted: sha256:a46013db1d31231a0e1bac7eeda5ad4786dea0b1773927b45f92ea352a6d7ff9\r
Deleted: sha256:af161a47bb22852e9e3caf39f1dcd590b64bb8fae54315f9c2e7dc35b025e4e3\r
Deleted: sha256:feff1495e6982a7e91edc59b96ea74fd80e03674d92c7ec8a502b417268822ff\r
Deleted: sha256:8805862fcb6ef9deb32d4218e9e6377f35fb351a8be7abafdf1da358b2b287ba\r
Deleted: sha256:872d2f24c4c64a6795e86958fde075a273c35c82815f0a5025cce41edfef50c7\r
Deleted: sha256:6fdb3143b79e1be7181d32748dd9d4a845056dfe16ee4c827410e0edef5ad3da\r
Deleted: sha256:b0527c827c82a8f8f37f706fcb86c420819bb7d707a8de7b664b9ca491c96838\r
Deleted: sha256:75147f61f29796d6528486d8b1f9fb5d122709ea35620f8ffcea0e0ad2ab0cd0\r
Deleted: sha256:2938c71ddf01643685879bf182b626f0a53b1356138ef73c40496182e84548aa\r
Deleted: sha256:ad6b69b549193f81b039a1d478bc896f6e460c77c1849a4374ab95f9a3d2cea2\r
\r
\`\`\`\r
\r
### 容器命令\r
\r
#### 说明：我们有了镜像才可以创建容器，下载一个centos镜像来测试学习\r
\r
\`\`\`shell\r
docker pull centos\r
\`\`\`\r
\r
#### 新建容器并且启动\r
\r
\`\`\`shell\r
docker run [可选参数] image\r
# 参数说明\r
-- name = "Name" 容器名字 用来区分容器\r
-d 后台方式运行\r
-it 使用交互方式运行，进入容器查看内容\r
-p 指定容器端口 -p 8080:8080\r
 -p ip:主机端口:容器端口\r
 -p 主机端口:容器端口(常用)\r
 -p 容器端口\r
-P  随机指定端口\r
-e 配置环境变量： key = value\r
\r
# 进入容器\r
[root@wh ~]# docker run -it centos /bin/bash\r
[root@fcc5d72093e5 /]#\r
\`\`\`\r
\r
#### 列出所有的运行的容器\r
\r
\`\`\`shell\r
# docker ps 命令\r
# 列出当前正在运行的容器\r
-a  # 列出当前正在运行的容器 + 带出历史运行过的容器\r
-n = ? # 显示最近创建的容器\r
-q # 只显示容器的编号\r
\r
[root@wh ~]# docker ps\r
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES\r
[root@wh ~]# docker ps -a\r
CONTAINER ID   IMAGE          COMMAND       CREATED              STATUS                      PORTS     NAMES\r
fcc5d72093e5   centos         "/bin/bash"   About a minute ago   Exited (0) 55 seconds ago             vibrant_keldysh\r
403709ba23a7   9c7a54a9a43c   "/hello"      2 weeks ago          Exited (0) 2 weeks ago                amazing_hellman\r
\r
\`\`\`\r
\r
#### 退出容器\r
\r
\`\`\`shell\r
exit # 直接容器停止并推出\r
ctrl + P + Q # 容器不停止并且退出\r
\`\`\`\r
\r
#### 删除容器\r
\r
\`\`\`shell\r
docker rmi 容器id # 删除指定的容器，不能删除正在运行的容器，强制删除 rm -f\r
docker rm $(docker ps -aq) # 删除所有的容器\r
docker ps -a -q | xargs docker rm # 删除所有的容器\r
\`\`\`\r
\r
#### 启动和停止容器的操作\r
\r
\`\`\`shell\r
docker start 容器id # 启动容器\r
docker restart 容器id # 重启容器\r
docker stop 容器id # 停止当前正在运行的容器\r
docker kill 容器id # 停止当前正在运行的容器\r
\`\`\`\r
\r
#### 保存和加载容器镜像\r
\r
\`\`\`bash\r
[root@iZ8vb9u5rjwnailz3vymm3Z ~]# docker save -o nginx.tar nginx:latest\r
[root@iZ8vb9u5rjwnailz3vymm3Z ~]# ll\r
total 189852\r
-rw`,title:"Docker常用命令",date:"2024-04-18 15:15:32"}},{route:"/Docker/Docker概述.html",meta:{description:"",title:"Docker概述",date:"2024-04-18 15:15:32"}},{route:"/Docker/Docker项目部署.html",meta:{description:"",title:"Docker项目部署",date:"2024-04-18 15:15:32"}},{route:"/Docker/面试问题.html",meta:{description:"",title:"面试问题",date:"2024-04-18 15:15:32"}},{route:"/Go/bug总结.html",meta:{description:"",title:"bug总结",date:"2024-03-22 15:58:38"}},{route:"/Go/Gin.html",meta:{description:"",title:"Gin",date:"2024-03-22 15:58:38"}},{route:"/Go/GORM.html",meta:{description:"",title:"GORM",date:"2024-03-22 15:58:38"}},{route:"/Go/Go算法模板.html",meta:{description:"",title:"Go算法模板",date:"2024-04-18 15:15:32"}},{route:"/Go/Go语言之context.html",meta:{description:"",title:"Go语言之context",date:"2024-03-22 15:58:38"}},{route:"/Go/Go语言之map.html",meta:{description:`# Go语言之map\r
\r
## map内存模型\r
\r
在源码中，表示 map 的结构体是 hmap，它是 hashmap 的“缩写”：\r
\r
\`\`\`go\r
// A header for a Go map.\r
type hmap struct {\r
    // 元素个数，调用 len(map) 时，直接返回此值\r
 count     int\r
 flags     uint8\r
 // buckets 的对数 log_2\r
 B         uint8\r
 // overflow 的 bucket 近似数\r
 noverflow uint16\r
 // 计算 key 的哈希的时候会传入哈希函数\r
 hash0     uint32\r
    // 指向 buckets 数组，大小为 2^B\r
    // 如果元素个数为0，就为 nil\r
 buckets    unsafe.Pointer\r
 // 等量扩容的时候，buckets 长度和 oldbuckets 相等\r
 // 双倍扩容的时候，buckets 长度会是 oldbuckets 的两倍\r
 oldbuckets unsafe.Pointer\r
 // 指示扩容进度，小于此地址的 buckets 迁移完成\r
 nevacuate  uintptr\r
 extra *mapextra // optional fields\r
}\r
\`\`\`\r
\r
buckets 是一个指针，最终它指向的是一个结构体：\r
\r
\`\`\`go\r
type bmap struct {\r
 tophash [bucketCnt]uint8\r
}\r
\`\`\`\r
\r
但这只是表面(src/runtime/hashmap.go)的结构，编译期间会给它加料，动态地创建一个新的结构：\r
\r
\`\`\`go\r
type bmap struct {\r
    topbits  [8]uint8\r
    keys     [8]keytype\r
    values   [8]valuetype\r
    pad      uintptr\r
    overflow uintptr\r
}\r
\`\`\`\r
\r
\`bmap\`就是我们常说的桶，桶里面最多会装8个key，这些key之所以会落入一个桶，是因为它们经过hash计算后，哈希结果是一类的，在桶内，又会根据计算出来的hash值的高8位来决定key到底落入桶内的哪个位置(一个桶最多有8个位置)。\r
\r
来一个整体的图：\r
\r
![hashmap bmap](https://s2.loli.net/2023/12/13/TR2teAFzCVKYgEl.png)\r
\r
当map的key和value都不是指针，并且size都小于128个字节的情况下，会把bmap标记为不含指针，这样可以避免gc时候扫描整个hmap。但是，我们看bmap其实有一个overflow字段，是指针类型的，破坏了bmap不含指针的设想，这时会把overflow移动到extra字段上来。**下面是干啥玩意的？**\r
\r
\`\`\`go\r
type mapextra struct {\r
 // overflow[0] contains overflow buckets for hmap.buckets.\r
 // overflow[1] contains overflow buckets for hmap.oldbuckets.\r
 overflow [2]*[]*bmap\r
\r
 // nextOverflow 包含空闲的 overflow bucket，这是预分配的 bucket\r
 nextOverflow *bmap\r
}\r
\`\`\`\r
\r
bmap 是存放 k-v 的地方，我们把视角拉近，仔细看 bmap 的内部组成。\r
\r
![bmap struct](https://s2.loli.net/2023/12/13/npPvSzidILTfVe7.png)\r
\r
上图就是 bucket 的内存模型，**\`HOB Hash\` 指的就是 top hash**。 注意到 key 和 value 是各自放在一起的，并不是 \`key/value/key/value/...\` 这样的形式。源码里说明这样的好处是在某些情况下可以省略掉 padding 字段，节省内存空间。\r
\r
例如，有这样一个类型的 map：\r
\r
\`\`\`go\r
map[int64]int8\r
\`\`\`\r
\r
如果按照 \`key/value/key/value/...\` 这样的模式存储，那在每一个 key/value 对之后都要额外 padding 7 个字节；而将所有的 key，value 分别绑定到一起，这种形式 \`key/key/.../value/value/...\`，则只需要在最后添加 padding。\r
\r
每个 bucket 设计成最多只能放 8 个 key-value 对，如果有第 9 个 key-value 落入当前的 bucket，那就需要再构建一个 bucket ，通过 \`overflow\` 指针连接起来。\r
\r
从语法层面，创建map很简单\r
\r
\`\`\`go\r
ageMp := make(map[string]int)\r
// 指定 map 长度\r
ageMp := make(map[string]int, 8)\r
\r
// ageMp 为 nil，不能向其添加元素，会直接panic\r
var ageMp map[string]int\r
\`\`\`\r
\r
可以看一下map的底层创建函数\r
\r
\`\`\`go\r
func makemap(t *maptype, hint int64, h *hmap, bucket unsafe.Pointer) *hmap {\r
 // 省略各种条件检查...\r
\r
 // 找到一个 B，使得 map 的装载因子在正常范围内\r
 B := uint8(0)\r
 for ; overLoadFactor(hint, B); B++ {\r
 }\r
\r
 // 初始化 hash table\r
 // 如果 B 等于 0，那么 buckets 就会在赋值的时候再分配\r
 // 如果长度比较大，分配内存会花费长一点\r
 buckets := bucket\r
 var extra *mapextra\r
 if B != 0 {\r
  var nextOverflow *bmap\r
  buckets, nextOverflow = makeBucketArray(t, B)\r
  if nextOverflow != nil {\r
   extra = new(mapextra)\r
   extra.nextOverflow = nextOverflow\r
  }\r
 }\r
\r
 // 初始化 hamp\r
 if h == nil {\r
  h = (*hmap)(newobject(t.hmap))\r
 }\r
 h.count = 0\r
 h.B = B\r
 h.extra = extra\r
 h.flags = 0\r
 h.hash0 = fastrand()\r
 h.buckets = buckets\r
 h.oldbuckets = nil\r
 h.nevacuate = 0\r
 h.noverflow = 0\r
\r
 return h\r
}\r
\`\`\`\r
\r
可以注意到这个返回的是指针类型\r
\r
\`\`\`go\r
func makeslice(et *_type, len, cap int) slice\r
\`\`\`\r
\r
## 思考\r
\r
slice和map分别作为函数参数有什么区别？\r
\r
如果将map作为函数参数，在函数里面修改map，也会影响外面的map，但是slice传入的是值拷贝，修改函数里面的并不会影响外面的map结果。\r
\r
## 哈希函数\r
\r
map 的一个关键点在于，哈希函数的选择。在程序启动时，会检测 cpu 是否支持 aes，如果支持，则使用 aes hash，否则使用 memhash。这是在函数 \`alginit()\` 中完成，位于路径：\`src/runtime/alg.go\` 下。\r
\r
> hash 函数，有加密型和非加密型。 加密型的一般用于加密数据、数字摘要等，典型代表就是 md5、sha1、sha256、aes256 这种； 非加密型的一般就是查找。在 map 的应用场景中，用的是查找。 选择 hash 函数主要考察的是两点：性能、碰撞概率。\r
\r
对于不同的类型的，采用的哈希函数必定也是不一样的\r
\r
关于的类型的结构体如下:\r
\r
\`\`\`go\r
type _type struct {\r
 size       uintptr\r
 ptrdata    uintptr // size of memory prefix holding all pointers\r
 hash       uint32\r
 tflag      tflag\r
 align      uint8\r
 fieldalign uint8\r
 kind       uint8\r
 alg        *typeAlg\r
 gcdata    *byte\r
 str       nameOff\r
 ptrToThis typeOff\r
}\r
\`\`\`\r
\r
其中alg字段和hash有关，它指向typeAlg结构体:\r
\r
\`\`\`go\r
// src/runtime/alg.go\r
type typeAlg struct {\r
 // (ptr to object, seed) -> hash\r
 hash func(unsafe.Pointer, uintptr) uintptr\r
 // (ptr to object A, ptr to object B) -> ==?\r
 equal func(unsafe.Pointer, unsafe.Pointer) bool\r
}\r
\`\`\`\r
\r
此结构体包含两个参数，一个是hash函数，计算该类型的hash值，equal函数用来计算两个类型是否hash相等。\r
\r
对于 string 类型，它的 hash、equal 函数如下：\r
\r
\`\`\`go\r
func strhash(a unsafe.Pointer, h uintptr) uintptr {\r
 x := (*stringStruct)(a)\r
 return memhash(x.str, h, uintptr(x.len))\r
}\r
\r
func strequal(p, q unsafe.Pointer) bool {\r
 return *(*string)(p) == *(*string)(q)\r
}\r
\`\`\`\r
\r
根据 key 的类型，_type 结构体的 alg 字段会被设置对应类型的 hash 和 equal 函数。\r
\r
## key定位过程\r
\r
key 经过哈希计算后得到哈希值，共 64 个 bit 位（64位机，32位机就不讨论了，现在主流都是64位机），计算它到底要落在哪个桶时，只会用到最后 B 个 bit 位。还记得前面提到过的 B 吗？如果 B = 5，那么桶的数量，也就是 buckets 数组的长度是 $2^5 = 32$。\r
\r
例如，现在有一个 key 经过哈希函数计算后，得到的哈希结果是：\r
\r
\`\`\`shell\r
10010111 | 000011110110110010001111001010100010010110010101010 │ 01010\r
\`\`\`\r
\r
用最后的 5 个 bit 位，也就是 \`01010\`，值为 10，也就是 10 号桶。这个操作实际上就是取余操作，但是取余开销太大，所以代码实现上用的位操作代替。\r
\r
再用哈希值的高 8 位，找到此 key 在 bucket 中的位置，这是在寻找已有的 key。最开始桶内还没有 key，新加入的 key 会找到第一个空位，放入。\r
\r
buckets 编号就是桶编号，当两个不同的 key 落在同一个桶中，也就是发生了哈希冲突。冲突的解决手段是用链表法：在 bucket 中，从前往后找到第一个空位。这样，在查找某个 key 时，先找到对应的桶，再去遍历 bucket 中的 key。\r
\r
![mapacess](https://s2.loli.net/2023/12/13/SLEkh2Tvs3pnQaA.png)\r
\r
上图中，假定 B = 5，所以 bucket 总数就是 2^5 = 32。首先计算出待查找 key 的哈希，使用低 5 位 \`00110\`，找到对应的 6 号 bucket，使用高 8 位 \`10010111\`，对应十进制 151，在 6 号 bucket 中寻找 tophash 值（HOB hash）为 151 的 key，找到了 2 号槽位，这样整个查找过程就结束了。\r
\r
如果在 bucket 中没找到，并且 overflow 不为空，还要继续去 overflow bucket 中寻找，直到找到或是所有的 key 槽位都找遍了，包括所有的 overflow bucket。\r
\r
我们来看下源码吧，哈哈！通过汇编语言可以看到，查找某个 key 的底层函数是 \`mapacess\` 系列函数，函数的作用类似，区别在下一节会讲到。这里我们直接看 \`mapacess1\` 函数：\r
\r
\`\`\`go\r
func mapaccess1(t *maptype, h *hmap, key unsafe.Pointer) unsafe.Pointer {\r
 // ……\r
 \r
 // 如果 h 什么都没有，返回零值\r
 if h == nil || h.count == 0 {\r
  return unsafe.Pointer(&zeroVal[0])\r
 }\r
 \r
 // 写和读冲突\r
 if h.flags &hashWriting != 0 {\r
  throw("concurrent map read and map write")\r
 }\r
 \r
 // 不同类型 key 使用的 hash 算法在编译期确定\r
 alg := t.key.alg\r
 \r
 // 计算哈希值，并且加入 hash0 引入随机性\r
 hash := alg.hash(key, uintptr(h.hash0))\r
 \r
 // 比如 B=5，那 m 就是31，二进制是全 1\r
 // 求 bucket num 时，将 hash 与 m 相与，\r
 // 达到 bucket num 由 hash 的低 8 位决定的效果\r
 m := uintptr(1)<<h.B - 1\r
 \r
 // b 就是 bucket 的地址\r
 b := (*bmap)(add(h.buckets, (hash&m)*uintptr(t.bucketsize)))\r
 \r
 // oldbuckets 不为 nil，说明发生了扩容\r
 if c := h.oldbuckets; c != nil {\r
     // 如果不是同 size 扩容（看后面扩容的内容）\r
     // 对应条件 1 的解决方案\r
  if !h.sameSizeGrow() {\r
   // 新 bucket 数量是老的 2 倍\r
   m >>= 1\r
  }\r
  \r
  // 求出 key 在老的 map 中的 bucket 位置\r
  oldb := (*bmap)(add(c, (hash&m)*uintptr(t.bucketsize)))\r
  \r
  // 如果 oldb 没有搬迁到新的 bucket\r
  // 那就在老的 bucket 中寻找\r
  if !evacuated(oldb) {\r
   b = oldb\r
  }\r
 }\r
 \r
 // 计算出高 8 位的 hash\r
 // 相当于右移 56 位，只取高8位\r
 top := uint8(hash >> (sys.PtrSize*8 - 8))\r
 \r
 // 增加一个 minTopHash\r
 if top < minTopHash {\r
  top += minTopHash\r
 }\r
 for {\r
     // 遍历 bucket 的 8 个位置\r
  for i := uintptr(0); i < bucketCnt; i++ {\r
      // tophash 不匹配，继续\r
   if b.tophash[i] != top {\r
    continue\r
   }\r
   // tophash 匹配，定位到 key 的位置\r
   k := add(unsafe.Pointer(b), dataOffset+i*uintptr(t.keysize))\r
   // key 是指针\r
   if t.indirectkey {\r
       // 解引用\r
    k = *((*unsafe.Pointer)(k))\r
   }\r
   // 如果 key 相等\r
   if alg.equal(key, k) {\r
       // 定位到 value 的位置\r
    v := add(unsafe.Pointer(b), dataOffset+bucketCnt*uintptr(t.keysize)+i*uintptr(t.valuesize))\r
    // value 解引用\r
    if t.indirectvalue {\r
     v = *((*unsafe.Pointer)(v))\r
    }\r
    return v\r
   }\r
  }\r
  \r
  // bucket 找完（还没找到），继续到 overflow bucket 里找\r
  b = b.overflow(t)\r
  // overflow bucket 也找完了，说明没有目标 key\r
  // 返回零值\r
  if b == nil {\r
   return unsafe.Pointer(&zeroVal[0])\r
  }\r
 }\r
}\r
\`\`\`\r
\r
函数返回 h[key] 的指针，如果 h 中没有此 key，那就会返回一个 key 相应类型的零值，不会返回 nil。\r
\r
这里，说一下定位 key 和 value 的方法以及整个循环的写法。\r
\r
\`\`\`go\r
// key 定位公式\r
k := add(unsafe.Pointer(b), dataOffset+i*uintptr(t.keysize))\r
\r
// value 定位公式\r
v := add(unsafe.Pointer(b), dataOffset+bucketCnt*uintptr(t.keysize)+i*uintptr(t.valuesize))\r
\`\`\`\r
\r
其中b是bmap的地址，这里的bmap还是源码里定义的结构体，只包含一个tophash数组，经编译器扩充之后的结构体才包含key，value，overflow这些字段。**dataOffset是key相对于bmap起始地址的偏移:**\r
\r
\`\`\`go\r
dataOffset = unsafe.Offsetof(struct {\r
  b bmap\r
  v int64\r
 }{}.v)\r
\`\`\`\r
\r
因此 bucket 里 key 的起始地址就是 unsafe.Pointer(b)+dataOffset。第 i 个 key 的地址就要在此基础上跨过 i 个 key 的大小；而我们又知道，value 的地址是在所有 key 之后，因此第 i 个 value 的地址还需要加上所有 key 的偏移。理解了这些，上面 key 和 value 的定位公式就很好理解了。\r
\r
当定位到一个具体的 bucket 时，里层循环就是遍历这个 bucket 里所有的 cell，或者说所有的槽位，也就是 bucketCnt=8 个槽位。整个循环过程：\r
\r
![mapacess loop](https://s2.loli.net/2023/12/13/N1ODJTSk5xrQHK4.png)\r
\r
再说一下 **minTopHash**，当一个 cell 的 tophash 值小于 minTopHash 时，标志这个 cell 的迁移状态。因为这个状态值是放在 tophash 数组里，为了和正常的哈希值区分开，会给 key 计算出来的哈希值一个增量：minTopHash。这样就能区分正常的 top hash 值和表示状态的哈希值。\r
\r
下面的这几种状态就表征了 bucket 的情况：\r
\r
\`\`\`go\r
// 空的 cell，也是初始时 bucket 的状态\r
empty          = 0\r
// 空的 cell，表示 cell 已经被迁移到新的 bucket\r
evacuatedEmpty = 1\r
// key,value 已经搬迁完毕，但是 key 都在新 bucket 前半部分，\r
// 后面扩容部分会再讲到。\r
evacuatedX     = 2\r
// 同上，key 在后半部分\r
evacuatedY     = 3\r
// tophash 的最小正常值\r
minTopHash     = 4\r
\`\`\`\r
\r
源码里判断这个 bucket 是否已经搬迁完毕，用到的函数：\r
\r
\`\`\`go\r
func evacuated(b *bmap) bool {\r
 h := b.tophash[0]\r
 return h > empty && h < minTopHash\r
}\r
\`\`\`\r
\r
只取了 tophash 数组的第一个值，判断它是否在 0-4 之间。对比上面的常量，当 top hash 是 \`evacuatedEmpty\`、\`evacuatedX\`、\`evacuatedY\` 这三个值之一，说明此 bucket 中的 key 全部被搬迁到了新 bucket。\r
\r
## 如何实现两种get操作\r
\r
1. 第一种get操作是带comma，函数会返回值和bool，后者用来表示key是否在map中\r
2. 第二种就是不带comma，直接返回值\r
\r
\`\`\`go\r
// src/runtime/hashmap.go\r
func mapaccess1(t *maptype, h *hmap, key unsafe.Pointer) unsafe.Pointer\r
func mapaccess2(t *maptype, h *hmap, key unsafe.Pointer) (unsafe.Pointer, bool)\r
\`\`\`\r
\r
## 遍历过程\r
\r
迭代器结构\r
\r
\`\`\`go\r
type hiter struct {\r
 // key 指针\r
 key         unsafe.Pointer\r
 // value 指针\r
 value       unsafe.Pointer\r
 // map 类型，包含如 key size 大小等\r
 t           *maptype\r
 // map header\r
 h           *hmap\r
 // 初始化时指向的 bucket\r
 buckets     unsafe.Pointer\r
 // 当前遍历到的 bmap\r
 bptr        *bmap\r
 overflow    [2]*[]*bmap\r
 // 起始遍历的 bucket 编号\r
 startBucket uintptr\r
 // 遍历开始时 cell 的编号（每个 bucket 中有 8 个 cell）\r
 offset      uint8\r
 // 是否从头遍历了\r
 wrapped     bool\r
 // B 的大小\r
 B           uint8\r
 // 指示当前 cell 序号\r
 i           uint8\r
 // 指向当前的 bucket\r
 bucket      uintptr\r
 // 因为扩容，需要检查的 bucket\r
 checkBucket uintptr\r
}\r
\`\`\`\r
\r
\`mapiterinit\` 就是对 hiter 结构体里的字段进行初始化赋值操作。\r
\r
前面已经提到过，即使是对一个写死的 map 进行遍历，每次出来的结果也是无序的。下面我们就可以近距离地观察他们的实现了。\r
\r
\`\`\`go\r
// 生成随机数 r\r
r := uintptr(fastrand())\r
if h.B > 31-bucketCntBits {\r
 r += uintptr(fastrand()) << 31\r
}\r
\r
// 从哪个 bucket 开始遍历\r
it.startBucket = r & (uintptr(1)<<h.B - 1)\r
// 从 bucket 的哪个 cell 开始遍历\r
it.offset = uint8(r >> h.B & (bucketCnt - 1))\r
\`\`\`\r
\r
假设我们有下图所示的一个 map，起始时 B = 1，有两个 bucket，后来触发了扩容（这里不要深究扩容条件，只是一个设定），B 变成 2。并且， 1 号 bucket 中的内容搬迁到了新的 bucket，\`1 号\`裂变成 \`1 号\`和 \`3 号\`；\`0 号\` bucket 暂未搬迁。老的 bucket 挂在在 \`*oldbuckets\` 指针上面，新的 bucket 则挂在 \`*buckets\` 指针上面。\r
\r
![map origin](https://s2.loli.net/2023/12/23/vZuJf5L9VSdcH8F.png)\r
\r
这时，我们对此 map 进行遍历。假设经过初始化后，startBucket = 3，offset = 2。于是，遍历的起点将是 3 号 bucket 的 2 号 cell，下面这张图就是开始遍历时的状态：\r
\r
![map init](https://s2.loli.net/2023/12/23/9czlGSsRL2e6mvi.png)\r
\r
标红的表示起始位置，bucket 遍历顺序为：3 -> 0 -> 1 -> 2。\r
\r
因为 3 号 bucket 对应老的 1 号 bucket，因此先检查老 1 号 bucket 是否已经被搬迁过。判断方法就是：\r
\r
\`\`\`go\r
func evacuated(b *bmap) bool {\r
 h := b.tophash[0]\r
 return h > empty && h < minTopHash\r
}\r
\`\`\`\r
\r
如果 b.tophash[0] 的值在标志值范围内，即在 (0,4) 区间里，说明已经被搬迁过了。\r
\r
在本例中，老 1 号 bucket 已经被搬迁过了。所以它的 tophash[0] 值在 (0,4) 范围内，因此只用遍历新的 3 号 bucket。\r
\r
依次遍历 3 号 bucket 的 cell，这时候会找到第一个非空的 key：元素 e。到这里，mapiternext 函数返回，这时我们的遍历结果仅有一个元素：\r
\r
![iter res](https://s2.loli.net/2023/12/23/Q6UWyog4bBpPt3i.png)\r
\r
由于返回的 key 不为空，所以会继续调用 mapiternext 函数。\r
\r
继续从上次遍历到的地方往后遍历，从新 3 号 overflow bucket 中找到了元素 f 和 元素 g。\r
\r
遍历结果集也因此壮大：\r
\r
![iter res](https://s2.loli.net/2023/12/23/BbsJvNtYTCX7qMr.png)\r
\r
新 3 号 bucket 遍历完之后，回到了新 0 号 bucket。0 号 bucket 对应老的 0 号 bucket，经检查，老 0 号 bucket 并未搬迁，因此对新 0 号 bucket 的遍历就改为遍历老 0 号 bucket。那是不是把老 0 号 bucket 中的所有 key 都取出来呢？\r
\r
并没有这么简单，回忆一下，老 0 号 bucket 在搬迁后将裂变成 2 个 bucket：新 0 号、新 2 号。而我们此时正在遍历的只是新 0 号 bucket（注意，遍历都是遍历的 \`*bucket\` 指针，也就是所谓的新 buckets）。所以，我们只会取出老 0 号 bucket 中那些在裂变之后，分配到新 0 号 bucket 中的那些 key。\r
\r
**因此，\`lowbits == 00\` 的将进入遍历结果集**：\r
\r
![iter res](https://s2.loli.net/2023/12/23/GnzcRaQoPm7UYF5.png)\r
\r
和之前的流程一样，继续遍历新 1 号 bucket，发现老 1 号 bucket 已经搬迁，只用遍历新 1 号 bucket 中现有的元素就可以了。结果集变成：\r
\r
![iter res](https://s2.loli.net/2023/12/23/GBQEqTp82Yj3OCc.png)\r
\r
这样，遍历结果集变成：\r
\r
![iter res](https://s2.loli.net/2023/12/23/Cdj8olHk5enyhmf.png)\r
\r
## 赋值过程\r
\r
核心部分： 两个for循环，外层遍历bucket和它的overflow bucket，内层遍历整个bucket和各个cell；\r
\r
需要注意的部分:\r
\r
1. 首先需要检查map的标志位flags。如果flags的写标志位此时被置1了，说明有其他协程在执行'写'操作，进而导致程序panic。map非线程安全的\r
2. map赋值，先找位置，然后看是否存在key，如果不存在，新赋值，如果存在，替换原来的值\r
3. 不过在正式安装key之前，需要判断是否需要执行扩容操作，这之后整个定位key的过程还需要再走一次，因为key的位置发生了变化\r
4. 为什么需要再走一次定位key的操作呢？\r
   - 因为内存结构发生了变化，而且赋值过程并不传值，赋值过程的函数返回的是对应区域的地址，得到地址之后才进行赋值\r
\r
## 删除过程\r
\r
1. 和遍历和插入相同，核心还是找key的位置，找到对应位置后，对 key 或者 value 进行“清零”操作：\r
\r
   \`\`\`go\r
   // 对 key 清零\r
   if t.indirectkey {\r
    *(*unsafe.Pointer)(k) = nil\r
   } else {\r
    typedmemclr(t.key, k)\r
   }\r
   \r
   // 对 value 清零\r
   if t.indirectvalue {\r
    *(*unsafe.Pointer)(v) = nil\r
   } else {\r
    typedmemclr(t.elem, v)\r
   }\r
   \`\`\`\r
\r
2. 最后将count值减1，对应的位置的tophash值置成Empty\r
\r
## 扩容过程\r
\r
装载因子:\r
\r
\`\`\`go\r
loadFactor := count / (2 ^ B)\r
\`\`\`\r
\r
$2 ^ B$ 代表bucket的数量，count代表map中key的个数\r
\r
### 扩容时机\r
\r
在向map中插入新key的时候，会进行条件检测，符合下面这两个条件，就会触发扩容:\r
\r
1. 装载因子超过阈值，源码里定义的是6.5\r
2. overflow的bucket数量过多:当B小于15，如果overflow的bucket的数量超过 $2 ^ B$, 当 $B \\geq 15$ ，也就是bucket总数 $2 ^ B$ 大于等于 $2 ^ {15}$ ，如果overflow的bucket数量超过 $2 ^ {15}$\r
\r
### 解释\r
\r
1. 我们知道，每个 bucket 有 8 个空位，在没有溢出，且所有的桶都装满了的情况下，装载因子算出来的结果是 8。因此当装载因子超过 6.5 时，表明很多 bucket 都快要装满了，查找效率和插入效率都变低了。在这个时候进行扩容是有必要的。\r
2. 没有达到第一个条件，但是也有可能造成查询效率比较慢的情况，比如很多元素都集中在某一个bucket下，然后bucket很空，但是overflow很多，形成了类似链表的结构，但是查询是 $O(n)$ 的\r
\r
### 扩容策略\r
\r
1. 对于扩容时机1，只用通过增加bucket的个数即可，分裂两个\r
2. 对于扩容时机2，其实元素没有那么多，但是overflow bucket的数量很多，说明很多bucket都没装满。解决办法就是开辟一个新的bucket空间，将老的bucket中的元素移动到新的bucket中，使得同一个bucket的key排列的更加紧密。\r
\r
### 扩容步骤\r
\r
1. 如果map中元素很多，扩容过程是需要重新计算hash值，这个过程是非常耗费时间的，如果此时有插入，删除，查询操作，会带来较差的体验。\r
\r
2. Go map的扩容采取了一种名为“渐进式”地方式，原有的key并不会一次性搬迁完毕，每次最多搬迁两个bucket；\r
\r
3. 上面说的**hashGrow()**函数实际上并没有真正的搬迁，他只是分配好了新的buckets，并将老的buckets挂到了oldbuckets字段上。真正搬迁buckets的动作是在**growWork()**函数中，而调用**growWork**函数的动作是在赋值和删除函数中。也就是**修改和删除key**的时候，会进行buckets的工作。先检查oldbuckets是否搬迁完毕，具体来说就是检查oldbuckets是否为nil；\r
\r
我们先看 \`hashGrow()\` 函数所做的工作，再来看具体的搬迁 buckets 是如何进行的。\r
\r
\`\`\`go\r
func hashGrow(t *maptype, h *hmap) {\r
 // B+1 相当于是原来 2 倍的空间\r
 bigger := uint8(1)\r
\r
 // 对应条件 2\r
 if !overLoadFactor(int64(h.count), h.B) {\r
  // 进行等量的内存扩容，所以 B 不变\r
  bigger = 0\r
  h.flags |= sameSizeGrow\r
 }\r
 // 将老 buckets 挂到 buckets 上\r
 oldbuckets := h.buckets\r
 // 申请新的 buckets 空间\r
 newbuckets, nextOverflow := makeBucketArray(t, h.B+bigger)\r
\r
 flags := h.flags &^ (iterator | oldIterator)\r
 if h.flags&iterator != 0 {\r
  flags |= oldIterator\r
 }\r
 // 提交 grow 的动作\r
 h.B += bigger\r
 h.flags = flags\r
 h.oldbuckets = oldbuckets\r
 h.buckets = newbuckets\r
 // 搬迁进度为 0\r
 h.nevacuate = 0\r
 // overflow buckets 数为 0\r
 h.noverflow = 0\r
\r
 // ……\r
}\r
\`\`\`\r
\r
主要是申请到了新的 buckets 空间，把相关的标志位都进行了处理：例如标志 nevacuate 被置为 0， 表示当前搬迁进度为 0。\r
\r
下面是关于\`h.flags\`的处理:\r
\r
\`\`\`go\r
flags := h.flags &^ (iterator | oldIterator)\r
if h.flags&iterator != 0 {\r
 flags |= oldIterator\r
}\r
\`\`\`\r
\r
这里得先说下运算符：&^。这叫\`按位置 0\`运算符。例如：\r
\r
\`\`\`go\r
x = 01010011\r
y = 01010100\r
z = x &^ y = 00000011\r
\`\`\`\r
\r
如果 y bit 位为 1，那么结果 z 对应 bit 位就为 0，否则 z 对应 bit 位就和 x 对应 bit 位的值相同。\r
\r
所以上面那段对 flags 一顿操作的代码的意思是：先把 h.flags 中 iterator 和 oldIterator 对应位清 0，然后如果发现 iterator 位为 1，那就把它转接到 oldIterator 位，使得 oldIterator 标志位变成 1。潜台词就是：buckets 现在挂到了 oldBuckets 名下了，对应的标志位也转接过去吧。\r
\r
几个标志位如下：\r
\r
\`\`\`go\r
// 可能有迭代器使用 buckets\r
iterator     = 1\r
// 可能有迭代器使用 oldbuckets\r
oldIterator  = 2\r
// 有协程正在向 map 中写入 key\r
hashWriting  = 4\r
// 等量扩容（对应条件 2）\r
sameSizeGrow = 8\r
\`\`\`\r
\r
再来看看真正执行搬迁工作的 growWork() 函数。\r
\r
\`\`\`go\r
func growWork(t *maptype, h *hmap, bucket uintptr) {\r
 // 确认搬迁老的 bucket 对应正在使用的 bucket\r
 evacuate(t, h, bucket&h.oldbucketmask())\r
\r
 // 再搬迁一个 bucket，以加快搬迁进程\r
 if h.growing() {\r
  evacuate(t, h, h.nevacuate)\r
 }\r
}\r
\r
\r
func (h *hmap) growing() bool {\r
 return h.oldbuckets != nil\r
}\r
\`\`\`\r
\r
如果 \`oldbuckets\` 不为空，说明还没有搬迁完毕，还得继续搬。\r
\r
\`bucket&h.oldbucketmask()\` 这行代码，如源码注释里说的，是为了确认搬迁的 bucket 是我们正在使用的 bucket。\`oldbucketmask()\` 函数返回扩容前的 map 的 bucketmask。\r
\r
所谓的 bucketmask，作用就是将 key 计算出来的哈希值与 bucketmask 相与，得到的结果就是 key 应该落入的桶。比如 B = 5，那么 bucketmask 的低 5 位是 \`11111\`，其余位是 \`0\`，hash 值与其相与的意思是，只有 hash 值的低 5 位决策 key 到底落入哪个 bucket。\r
\r
**总结: 总的来说就是如果想要把一个bucket进行搬迁，就需要先确定一下搬迁的bucket，其实直接用bucket也行，但是保险起见还是 bucket&h.oldbucketmask();然后这个时候就确定了需要搬迁哪个bucket，执行evacuate函数即可；**\r
\r
### 举个栗子\r
\r
对于条件 2，从老的 buckets 搬迁到新的 buckets，由于 bucktes 数量不变，因此可以按序号来搬，比如原来在 0 号 bucktes，到新的地方后，仍然放在 0 号 buckets\r
\r
对于条件 1，就没这么简单了。要重新计算 key 的哈希，才能决定它到底落在哪个 bucket。例如，原来 B = 5，计算出 key 的哈希后，只用看它的低 5 位，就能决定它落在哪个 bucket。扩容后，B 变成了 6，因此需要多看一位，它的低 6 位决定 key 落在哪个 bucket。这称为 \`rehash\`。\r
\r
![map rehash](https://s2.loli.net/2023/12/25/kyM89zxC7OTuWLY.png)\r
\r
因此，某个 key 在搬迁前后 bucket 序号可能和原来相等，也可能是相比原来加上 2^B（原来的 B 值），取决于 hash 值 第 6 bit 位是 0 还是 1。\r
\r
再明确一个问题：如果扩容后，B 增加了 1，意味着 buckets 总数是原来的 2 倍，原来 1 号的桶“裂变”到两个桶。\r
\r
例如，原始 B = 2，1号 bucket 中有 2 个 key 的哈希值低 3 位分别为：010，110。由于原来 B = 2，所以低 2 位 \`10\` 决定它们落在 2 号桶，现在 B 变成 3，所以 \`010\`、\`110\` 分别落入 2、6 号桶。\r
\r
![bucket split](https://s2.loli.net/2023/12/25/mQlh1IGCiuf9P56.png)\r
\r
理解了这个，后面讲 map 迭代的时候会用到。\r
\r
再来讲搬迁函数中的几个关键点：\r
\r
1. evacuate 函数每次只完成一个 bucket 的搬迁工作，因此要遍历完此 bucket 的所有的 cell，将有值的 cell copy 到新的地方。bucket 还会链接 overflow bucket，它们同样需要搬迁。因此会有 2 层循环，外层遍历 bucket 和 overflow bucket，内层遍历 bucket 的所有 cell。这样的循环在 map 的源码里到处都是，要理解透了。\r
\r
2. 源码里提到 X, Y part，其实就是我们说的如果是扩容到原来的 2 倍，桶的数量是原来的 2 倍，前一半桶被称为 X part，后一半桶被称为 Y part。一个 bucket 中的 key 可能会分裂落到 2 个桶，一个位于 X part，一个位于 Y part。所以在搬迁一个 cell 之前，需要知道这个 cell 中的 key 是落到哪个 Part。很简单，重新计算 cell 中 key 的 hash，并向前“多看”一位，决定落入哪个 Part，这个前面也说得很详细了。\r
\r
3. 有一个特殊情况是：有一种 key，每次对它计算 hash，得到的结果都不一样。这个 key 就是 \`math.NaN()\` 的结果，它的含义是 \`not a number\`，类型是 float64。\r
   - 当它作为 map 的 key，在搬迁的时候，会遇到一个问题：再次计算它的哈希值和它当初插入 map 时的计算出来的哈希值不一样！\r
   - 你可能想到了，这样带来的一个后果是，这个 key 是永远不会被 Get 操作获取的！当我使用 \`m[math.NaN()]\` 语句的时候，是查不出来结果的。这个 key 只有在遍历整个 map 的时候，才有机会现身。所以，可以向一个 map 插入任意数量的 \`math.NaN()\` 作为 key。\r
   - 当搬迁碰到 \`math.NaN()\` 的 key 时，只通过 tophash 的最低位决定分配到 X part 还是 Y part（如果扩容后是原来 buckets 数量的 2 倍）。如果 tophash 的最低位是 0 ，分配到 X part；如果是 1 ，则分配到 Y part。\r
\r
这是通过 tophash 值与新算出来的哈希值进行运算得到的：\r
\r
\`\`\`go\r
if top&1 != 0 {\r
    // top hash 最低位为 1\r
    // 新算出来的 hash 值的 B 位置 1\r
 hash |= newbit\r
} else {\r
    // 新算出来的 hash 值的 B 位置 0\r
 hash &^= newbit\r
}\r
\r
// hash 值的 B 位为 0，则搬迁到 x part\r
// 当 B = 5时，newbit = 32，二进制低 6 位为 10 0000\r
useX = hash&newbit == 0\r
\`\`\`\r
\r
其实这样的 key 我随便搬迁到哪个 bucket 都行，当然，还是要搬迁到上面裂变那张图中的两个 bucket 中去。但这样做是有好处的，在后面讲 map 迭代的时候会再详细解释，暂时知道是这样分配的就行。\r
\r
确定了要搬迁到的目标 bucket 后，搬迁操作就比较好进行了。将源 key/value 值 copy 到目的地相应的位置。\r
\r
设置 key 在原始 buckets 的 tophash 为 \`evacuatedX\` 或是 \`evacuatedY\`，表示已经搬迁到了新 map 的 x part 或是 y part。新 map 的 tophash 则正常取 key 哈希值的高 8 位。\r
\r
下面通过图来宏观地看一下扩容前后的变化。\r
\r
扩容前，B = 2，共有 4 个 buckets，lowbits 表示 hash 值的低位。假设我们不关注其他 buckets 情况，专注在 2 号 bucket。并且假设 overflow 太多，触发了等量扩容（对应于前面的条件 2）。\r
\r
![扩容前](https://s2.loli.net/2024/04/16/GpBAvDL172kTiao.png)\r
\r
扩容完成后，overflow bucket 消失了，key 都集中到了一个 bucket，更为紧凑了，提高了查找的效率。\r
\r
![same size 扩容](https://s2.loli.net/2024/04/16/1i2HfzRwKErWZqI.png)\r
\r
假设触发了 2 倍的扩容，那么扩容完成后，老 buckets 中的 key 分裂到了 2 个 新的 bucket。一个在 x part，一个在 y 的 part。依据是 hash 的 lowbits。新 map 中 \`0-3\` 称为 x part，\`4-7\` 称为 y part。\r
\r
![2倍扩容](https://s2.loli.net/2024/04/16/plIzV1qdC3XN8xY.png)\r
\r
注意，上面的两张图忽略了其他 buckets 的搬迁情况，表示所有的 bucket 都搬迁完毕后的情形。实际上，我们知道，搬迁是一个“渐进”的过程，并不会一下子就全部搬迁完毕。所以在搬迁过程中，oldbuckets 指针还会指向原来老的 []bmap，**并且已经搬迁完毕的 key 的 tophash 值会是一个状态值，表示 key 的搬迁去向**。\r
\r
**一个比较重要的一点是，同一个bucket中存在很多key，这些key扩容后的位置在bucket中的相对位置是不变的，只是后B + 1位会影响它去向哪个bucket，X or Y，因为相对位置是由前8位所决定的，这样的结论同样对于这种math.NaN() key起作用，因为tophash值是不会变动的。**\r
\r
## key为什么是无序的？\r
\r
这个其实很好理解，从map的遍历过程就可以得知，map的遍历并不是从头开始遍历，而是每次遍历的时候都会随机生成一个随机数，通过这个随机数来确定第一个遍历的bucket和cell，所以肯定是无序的。\r
\r
## float可以作为map的key吗？\r
\r
Go中只要是可比较类型，都可以作为key，除开slice，map，functions这几种类型。\r
\r
具体可以的包括: 布尔，数字，字符串，指针，结构体，通道，接口\r
\r
特别来说:\r
\r
1. 对于结构体，只有hash后的值相等以及字面值相等，才被认为是相同的key，很多字面值相等的，hash出来的值并不一定相等，比如说引用\r
2. 任何类型都可以作为value\r
\r
### 特殊情况1\r
\r
\`\`\`go\r
func main() {\r
 m := make(map[float64]int)\r
 m[1.4] = 1\r
 m[2.4] = 2\r
 m[math.NaN()] = 3\r
 m[math.NaN()] = 3\r
\r
 for k, v := range m {\r
  fmt.Printf("[%v, %d] ", k, v)\r
 }\r
\r
 fmt.Printf("\\nk: %v, v: %d\\n", math.NaN(), m[math.NaN()])\r
 fmt.Printf("k: %v, v: %d\\n", 2.400000000001, m[2.400000000001])\r
 fmt.Printf("k: %v, v: %d\\n", 2.4000000000000000000000001, m[2.4000000000000000000000001])\r
\r
 fmt.Println(math.NaN() == math.NaN())\r
}\r
//输出\r
[2.4, 2] [NaN, 3] [NaN, 3] [1.4, 1] \r
k: NaN, v: 0\r
k: 2.400000000001, v: 0\r
k: 2.4, v: 2\r
false\r
\`\`\`\r
\r
通过上述结果可以发现，一定程度上是可以将float作为key的，但是会由于精度损失问题，造成诡异现象，比如说上述的两个例子。\r
\r
这个现象出现的原因是当采用float作为key的时候，Go会先调用 \`Float64frombits\` 函数，将其转成uint64类型，然后再插入。\r
\r
\`\`\`go\r
// Float64frombits returns the floating point number corresponding\r
// the IEEE 754 binary representation b.\r
func Float64frombits(b uint64) float64 { return *(*float64)(unsafe.Pointer(&b)) }\r
\`\`\`\r
\r
因为float是有精度损失的，所以如果两个float差距很小，结果是可能一致的。\r
\r
### 特殊情况2\r
\r
此外，再说明一下\`NaN\`类型，其具有两个特性:\r
\r
\`\`\`go\r
NAN != NAN\r
hash(NAN) != hash(NAN)\r
\`\`\`\r
\r
所以在进行hash的时候，Go会给这种类型的数字随机添加一个数，所以NaN添加多次，可能会出现多个不同的结果\r
\r
### 特殊情况3\r
\r
关于当 key 是引用类型时，判断两个 key 是否相等，需要 hash 后的值相等并且 key 的字面量相等;\r
\r
\`\`\`go\r
func TestT(t *testing.T) {\r
 type S struct {\r
  ID int\r
 }\r
 s1 := S{ID: 1}\r
 s2 := S{ID: 1}\r
\r
 var h = map[*S]int {}\r
 h[&s1] = 1\r
 t.Log(h[&s1])\r
 t.Log(h[&s2])\r
 t.Log(s1 == s2)\r
}\r
//输出\r
=== RUN   TestT\r
`,title:"Go语言之map",date:"2024-03-22 15:58:38"}},{route:"/Go/Go语言之nil.html",meta:{description:"",title:"Go语言之nil",date:"2024-03-22 15:58:38"}},{route:"/Go/Go语言之unsafe.html",meta:{description:"",title:"Go语言之unsafe",date:"2024-03-22 15:58:38"}},{route:"/Go/Go语言之反射.html",meta:{description:`# Go语言之反射\r
\r
## 1、什么是反射？\r
\r
### 反射的定义\r
\r
在计算机科学中，反射指的是计算机程序在运行时(Runtime) 可以访问，检测和修改它本身状态或行为的一种能力。用比喻来说，反射就是程序在运行的时候能够"观察"并且修改自己的行为。\r
\r
### 什么叫做访问、检测和修改它本身的状态和行为？\r
\r
实际上它的本质是程序在运行期间探知对象的类型信息和内存结构。不用反射能行吗？也是可以的，需要使用汇编语言，直接和内层打交道，可以获取任何信息。但是当迁移到高级语言上来的时候，就不行了！只能通过反射达到此项功能。\r
\r
在Go语言中，**提供了一种机制在运行时更新变量和检查它们的值、调用它们的方法，但是在编译时并不知道这些变量的具体类型，这称为反射机制**\r
\r
## 2、什么情况下需要使用反射？\r
\r
1. 不能明确接口调用哪个函数，需要根据传入的参数在运行时决定。\r
2. 不能明确传入函数的参数类型，需要在运行时处理任意对象。\r
\r
### 不推荐使用反射的理由有哪些？\r
\r
1. 与反射有关的代码通常是难以阅读的。在软件工程中，代码可读性也是一个非常重要的指标。\r
2. Go语言作为一门静态语言，编码过程中，编译器提前能够发现一些类型错误，但是对于反射代码是无能为力的。所以包含反射的代码，很可能会运行很久，才会出错，这时候经常是直接panic，可能造成比较严重的后果\r
3. 反射对于性能影响还是比较大的，比正常的代码速度慢到一到两个数量级。所以，对于一个项目中处于运行效率关键位置的代码，尽量避免使用反射特性。\r
\r
## 3、Go语言如何实现反射？\r
\r
interface{}，它是Go语言实现抽象的一个非常强大的工具。当向接口赋予一个实体类型的时候，接口会存储实体的类型信息，反射就是通过接口的类型信息实现的，反射建立在类型的基础上。\r
\r
Go语言在reflect包里定义了各种类型，实现了反射的各种函数，通过它们可以在运行时检测类型的信息、改变类型的值。\r
\r
### types和interface\r
\r
Go语言中，每个变量都有一个静态类型，在编译阶段就确定了的，比如int，float64，[]int等等。**注意，这个类型是声明时候的类型，不是底层数据结构。**\r
\r
\`\`\`go\r
type iface struct {\r
 tab  *itab\r
 data unsafe.Pointer\r
}\r
\r
type itab struct {\r
 inter  *interfacetype\r
 _type  *_type\r
 link   *itab\r
 hash   uint32\r
 bad    bool\r
 inhash bool\r
 unused [2]byte\r
 fun    [1]uintptr\r
}\r
\`\`\`\r
\r
其中 \`itab\` 由具体类型 \`_type\` 以及 \`interfacetype\` 组成。\`_type\` 表示具体类型，而 \`interfacetype\` 则表示具体类型实现的接口类型。\r
\r
先明确一点：**接口变量可以存储任何实现了接口定义的所有方法的变量。**\r
\r
\r
\r
### 反射的基本函数\r
\r
 reflect包里定义了一个接口和一个结构体，即reflect.Type 和reflect.Value，**它们提供很多函数来获取存储在接口里的类型信息**。\r
\r
reflect.Type主要提供关于类型相关的信息，所以它和_type关联比较紧密；\r
\r
reflect.Value则结合_type和data两者，因此程序员可以获取甚至改变类型的值；\r
\r
reflect包中提供了两个基础的关于反射的函数来获取上述接口和结构体：\r
\r
\`\`\`go\r
func TypeOf(i interface{}) Type \r
func ValueOf(i interface{}) Value\r
\`\`\`\r
\r
### TypeOf函数\r
\r
\`TypeOf\` 函数用来提取一个接口中值的类型信息。由于它的输入参数是一个空的 \`interface{}\`，调用此函数时，实参会先被转化为 \`interface{}\`类型。这样，实参的类型信息、方法集、值信息都存储到 \`interface{}\` 变量里了。\r
\r
\`\`\`go\r
func TypeOf(i interface{}) Type {\r
 eface := *(*emptyInterface)(unsafe.Pointer(&i))\r
 return toType(eface.typ)\r
}\r
\r
type emptyInterface struct {\r
 typ  *rtype\r
 word unsafe.Pointer\r
}\r
\r
func toType(t *rtype) Type {\r
 if t == nil {\r
  return nil\r
 }\r
 return t\r
}\r
\`\`\`\r
\r
注意，返回值 \`Type\` 实际上是一个接口，定义了很多方法，用来获取类型相关的各种信息，而 \`*rtype\` 实现了 \`Type\` 接口。\r
\r
\`\`\`go\r
type Type interface {\r
    // 所有的类型都可以调用下面这些函数\r
\r
 // 此类型的变量对齐后所占用的字节数\r
 Align() int\r
 \r
 // 如果是 struct 的字段，对齐后占用的字节数\r
 FieldAlign() int\r
\r
 // 返回类型方法集里的第 \`i\` (传入的参数)个方法\r
 Method(int) Method\r
\r
 // 通过名称获取方法\r
 MethodByName(string) (Method, bool)\r
\r
 // 获取类型方法集里导出的方法个数\r
 NumMethod() int\r
\r
 // 类型名称\r
 Name() string\r
\r
 // 返回类型所在的路径，如：encoding/base64\r
 PkgPath() string\r
\r
 // 返回类型的大小，和 unsafe.Sizeof 功能类似\r
 Size() uintptr\r
\r
 // 返回类型的字符串表示形式\r
 String() string\r
\r
 // 返回类型的类型值\r
 Kind() Kind\r
\r
 // 类型是否实现了接口 u\r
 Implements(u Type) bool\r
\r
 // 是否可以赋值给 u\r
 AssignableTo(u Type) bool\r
\r
 // 是否可以类型转换成 u\r
 ConvertibleTo(u Type) bool\r
\r
 // 类型是否可以比较\r
 Comparable() bool\r
\r
 // 下面这些函数只有特定类型可以调用\r
 // 如：Key, Elem 两个方法就只能是 Map 类型才能调用\r
 \r
 // 类型所占据的位数\r
 Bits() int\r
\r
 // 返回通道的方向，只能是 chan 类型调用\r
 ChanDir() ChanDir\r
\r
 // 返回类型是否是可变参数，只能是 func 类型调用\r
 // 比如 t 是类型 func(x int, y ... float64)\r
 // 那么 t.IsVariadic() == true\r
 IsVariadic() bool\r
\r
 // 返回内部子元素类型，只能由类型 Array, Chan, Map, Ptr, or Slice 调用\r
 Elem() Type\r
\r
 // 返回结构体类型的第 i 个字段，只能是结构体类型调用\r
 // 如果 i 超过了总字段数，就会 panic\r
 Field(i int) StructField\r
\r
 // 返回嵌套的结构体的字段\r
 FieldByIndex(index []int) StructField\r
\r
 // 通过字段名称获取字段\r
 FieldByName(name string) (StructField, bool)\r
\r
 // FieldByNameFunc returns the struct field with a name\r
 // 返回名称符合 func 函数的字段\r
 FieldByNameFunc(match func(string) bool) (StructField, bool)\r
\r
 // 获取函数类型的第 i 个参数的类型\r
 In(i int) Type\r
\r
 // 返回 map 的 key 类型，只能由类型 map 调用\r
 Key() Type\r
\r
 // 返回 Array 的长度，只能由类型 Array 调用\r
 Len() int\r
\r
 // 返回类型字段的数量，只能由类型 Struct 调用\r
 NumField() int\r
\r
 // 返回函数类型的输入参数个数\r
 NumIn() int\r
\r
 // 返回函数类型的返回值个数\r
 NumOut() int\r
\r
 // 返回函数类型的第 i 个值的类型\r
 Out(i int) Type\r
\r
    // 返回类型结构体的相同部分\r
 common() *rtype\r
 \r
 // 返回类型结构体的不同部分\r
 uncommon() *uncommonType\r
}\r
\`\`\`\r
\r
注意到 \`Type\` 方法集的倒数第二个方法 \`common\` 返回的 \`rtype\`类型，它和上一篇文章讲到的 \`_type\` 是一回事，而且源代码里也注释了：两边要保持同步：\r
\r
\`\`\`go\r
// rtype must be kept in sync with ../runtime/type.go:/^type._type.\r
type rtype struct {\r
 size       uintptr\r
 ptrdata    uintptr\r
 hash       uint32\r
 tflag      tflag\r
 align      uint8\r
 fieldAlign uint8\r
 kind       uint8\r
 alg        *typeAlg\r
 gcdata     *byte\r
 str        nameOff\r
 ptrToThis  typeOff\r
}\r
\`\`\`\r
\r
比如下面的 \`arrayType\` 和 \`chanType\` 都包含 \`rytpe\`，而前者还包含 slice，len 等和数组相关的信息；后者则包含 \`dir\` 表示通道方向的信息。\r
\r
\`\`\`go\r
// arrayType represents a fixed array type.\r
type arrayType struct {\r
 rtype \`reflect:"array"\`\r
 elem  *rtype // array element type\r
 slice *rtype // slice type\r
 len   uintptr\r
}\r
\r
// chanType represents a channel type.\r
type chanType struct {\r
 rtype \`reflect:"chan"\`\r
 elem  *rtype  // channel element type\r
 dir   uintptr // channel direction (ChanDir)\r
}\r
\`\`\`\r
\r
注意到，\`Type\` 接口实现了 \`String()\` 函数，满足 \`fmt.Stringer\` 接口，因此使用 \`fmt.Println\` 打印的时候，输出的是 \`String()\` 的结果。另外，\`fmt.Printf()\` 函数，如果使用 \`%T\` 来作为格式参数，输出的是 \`reflect.TypeOf\` 的结果，也就是动态类型。例如：\r
\r
\`\`\`go\r
fmt.Printf("%T", 3) // int\r
\`\`\`\r
\r
### valueOf函数\r
\r
\`\`\`go\r
func ValueOf(i interface{}) Value {\r
 if i == nil {\r
  return Value{}\r
 }\r
   // ……\r
 return unpackEface(i)\r
}\r
\r
// 分解 eface\r
func unpackEface(i interface{}) Value {\r
 e := (*emptyInterface)(unsafe.Pointer(&i))\r
\r
 t := e.typ\r
 if t == nil {\r
  return Value{}\r
 }\r
 \r
 f := flag(t.Kind())\r
 if ifaceIndir(t) {\r
  f |= flagIndir\r
 }\r
 return Value{t, e.word, f}\r
}\r
\`\`\`\r
\r
\`ValueOf\` 函数的返回值，包含类型结构体指针、真实数据的地址、标志位。\r
\r
Value 结构体定义了很多方法，通过这些方法可以直接操作 Value 字段 ptr 所指向的实际数据：\r
\r
\`\`\`go\r
// 设置切片的 len 字段，如果类型不是切片，就会panic\r
 func (v Value) SetLen(n int)\r
 \r
 // 设置切片的 cap 字段\r
 func (v Value) SetCap(n int)\r
 \r
 // 设置字典的 kv\r
 func (v Value) SetMapIndex(key, val Value)\r
\r
 // 返回切片、字符串、数组的索引 i 处的值\r
 func (v Value) Index(i int) Value\r
 \r
 // 根据名称获取结构体的内部字段值\r
 func (v Value) FieldByName(name string) Value\r
 \r
 // 用来获取 int 类型的值\r
func (v Value) Int() int64\r
\r
// 用来获取结构体字段（成员）数量\r
func (v Value) NumField() int\r
\r
// 尝试向通道发送数据（不会阻塞）\r
func (v Value) TrySend(x reflect.Value) bool\r
\r
// 通过参数列表 in 调用 v 值所代表的函数（或方法\r
func (v Value) Call(in []Value) (r []Value) \r
\r
// 调用变参长度可变的函数\r
func (v Value) CallSlice(in []Value) []Value \r
\`\`\`\r
\r
另外，通过 \`Type()\` 方法和 \`Interface()\` 方法可以打通 \`interface\`、\`Type\`、\`Value\` 三者。Type() 方法也可以返回变量的类型信息，与 reflect.TypeOf() 函数等价。Interface() 方法可以将 Value 还原成原来的 interface;\r
\r
![三者关系](https://s2.loli.net/2023/12/27/POlwFGT7kJbWEcy.png)\r
\r
总结:\r
\r
1. TypeOf()返回了一个接口，这个接口定义了一系列的方法，利用这些方法可以获取关于类型的所有的信息；\r
2. ValueOf()函数返回的是一个结构体变量，包含类型信息以及实际值；\r
\r
用一张图来串一下:\r
\r
![value rtype](https://s2.loli.net/2023/12/27/Jl7BbErGtMpSDXj.png)\r
\r
上图中，\`rtye\` 实现了 \`Type\` 接口，是所有类型的公共部分。emptyface 结构体和 eface 其实是一个东西，而 rtype 其实和 _type 是一个东西，只是一些字段稍微有点差别，比如 emptyface 的 word 字段和 eface 的 data 字段名称不同，但是数据型是一样的。\r
\r
### 反射的三大定律\r
\r
#### 第一定律\r
\r
- **反射是一种检测存储在interface中的类型和值 机制。这可以通过TypeOf函数和ValueOf函数得到；**\r
\r
#### 第二定律\r
\r
- **它将ValueOf的返回值通过Interface()函数反向转变成interface变量；**\r
\r
调用 [\`reflect.Value.Interface\`](https://draveness.me/golang/tree/reflect.Value.Interface) 方法只能获得 \`interface{}\` 类型的变量，如果想要将其还原成最原始的状态还需要经过如下所示的显式类型转换：\r
\r
\`\`\`go\r
v := reflect.ValueOf(1)\r
v.Interface().(int)\r
\`\`\`\r
\r
从反射对象到接口值的过程是从接口值到反射对象的镜面过程，两个过程都需要经历两次转换：\r
\r
- 从接口值到反射对象：\r
  - 从基本类型到接口类型的类型转换；\r
  - 从接口类型到反射对象的转换；\r
- 从反射对象到接口值：\r
  - 反射对象转换成接口类型；\r
  - 通过显式类型转换变成原始类型；\r
\r
![golang-bidirectional-reflection](https://s2.loli.net/2023/11/27/pwyShRNKriZM9QF.png)\r
\r
#### 第三定律\r
\r
- 如果需要操作一个反射变量，那么它必须是可设置的。反射变量可设置的本质是它存储了原变量本身，这样对反射变量操作，就会反映到原变量本身；反之，如果反射变量不能代表原变量，那么操作了反射变量，不会对原变量产生任何影响，这会给读者带来疑惑；\r
\r
\`\`\`go\r
var x float64 = 3.4\r
v := reflect.ValueOf(x)\r
v.SetFloat(7.1) // Error: will panic.\r
\`\`\`\r
\r
上面的代码会产生panic，原因是反射变量v不能代表x本身，为什么？因为调用reflect.ValueOf(x)这一行代码的时候，传入的参数在函数的内部只是一个拷贝，是值传递，所以v代表的只是x的一个拷贝，因此对v进行操作是被禁止的；\r
\r
可设置是反射变量 \`Value\` 的一个性质，但不是所有的 \`Value\` 都是可被设置的。就像在一般的函数里那样，当我们想改变传入的变量时，使用指针就可以解决了。\r
\r
\`\`\`go\r
var x float64 = 3.4\r
p := reflect.ValueOf(&x) // 通过上面可以知道，ValueOf返回的是一个结构体，里面包含类型，源地址和标志位\r
fmt.Println("type of p:", p.Type())\r
fmt.Println("settability of p:", p.CanSet())\r
// 输出\r
type of p: *float64\r
settability of p: false\r
// 其中p并不是代表x，p.Elem() 才真正代表x，这样就可以操作x了\r
v := p.Elem()\r
v.SetFloat(7.1)\r
fmt.Println(v.Interface()) // 7.1\r
fmt.Println(x) // 7.1\r
\`\`\`\r
\r
关于第三条，记住一句话：如果想要操作原变量，反射变量 \`Value\` 必须要 hold 住原变量的地址才行。\r
\r
1. 调用 [\`reflect.ValueOf\`](https://draveness.me/golang/tree/reflect.ValueOf) 获取变量指针；\r
2. 调用 [\`reflect.Value.Elem\`](https://draveness.me/golang/tree/reflect.Value.Elem) 获取指针指向的变量；\r
3. 调用 [\`reflect.Value.SetInt\`](https://draveness.me/golang/tree/reflect.Value.SetInt) 更新变量的值：\r
\r
\r
\r
\r
\r
## 4、Go语言中反射有哪些应用？\r
\r
1. IDE中的代码自动补全功能\r
2. 对象序列化(encoding/json)\r
3. fmt相关函数的实现\r
4. ORM(Object Relational Mapping) 对象关系映射...\r
\r
\r
\r
## 5、如何比较两个对象完全相同？\r
\r
Go语言中提供了一个函数可以完成此功能:\r
\r
\`\`\`go\r
func DeepEqual(x, y interface{}) bool\r
\`\`\`\r
\r
DeepEqual函数的参数是两个interface{}，实际上也就是可以输入任意类型，输出true或者false表示输入的两个变量是否是"深度"相等；\r
\r
先明白一点，如果是不同的类型，即使是底层类型相同，相应的值也一样，那么两者也不是"深度"相等。\r
\r
\`\`\`go\r
type MyInt int\r
type YourInt int\r
\r
func main() {\r
 m := MyInt(1)\r
 y := YourInt(1)\r
\r
 fmt.Println(reflect.DeepEqual(m, y)) // false\r
}\r
\`\`\`\r
\r
| 类型                                  | 深度相等情形                                                 |\r
| `,title:"Go语言之反射",date:"2024-03-22 15:58:38"}},{route:"/Go/Go语言之垃圾回收.html",meta:{description:"",title:"Go语言之垃圾回收",date:"2024-04-18 15:15:32"}},{route:"/Go/Go语言之基础知识.html",meta:{description:"",title:"Go语言之基础知识",date:"2024-03-22 15:58:38"}},{route:"/Go/Go语言之常用库函数.html",meta:{description:"",title:"Go语言之常用库函数",date:"2024-03-22 15:58:38"}},{route:"/Go/Go语言之常见面试题.html",meta:{description:"",title:"Go语言之常见面试题",date:"2024-03-22 15:58:38"}},{route:"/Go/Go语言之并发编程.html",meta:{description:"",title:"Go语言之并发编程",date:"2024-03-22 15:58:38"}},{route:"/Go/Go语言之接口.html",meta:{description:`# Go语言中的接口\r
\r
## 值接收者和指针接收者的区别\r
\r
方法能给用户自定义的类型添加新的行为。它和函数的区别在于方法有一个接收者，给一个函数添加一个接收者，那么它就变成了方法。接收者可以是\`值接收者\`，也可以是\`指针接收者\`。\r
\r
在调用方法的时候，值类型既可以调用\`值接收者\`的方法，也可以调用\`指针接收者\`的方法；指针类型既可以调用\`指针接收者\`的方法，也可以调用\`值接收者\`的方法。\r
\r
也就是说，不管方法的接收者是什么类型，该类型的值和指针都可以调用，不必严格符合接收者的类型。\r
\r
\`\`\`go\r
package main\r
import "fmt"\r
\r
type Person struct {\r
 age int\r
}\r
\r
func (p Person) howOld() int {\r
 return p.age\r
}\r
\r
func (p *Person) growUp() {\r
 p.age += 1\r
}\r
\r
func main() {\r
 // qcrao 是值类型\r
 qcrao := Person{age: 18}\r
 // 值类型 调用接收者也是值类型的方法\r
 fmt.Println(qcrao.howOld())\r
 // 值类型 调用接收者是指针类型的方法\r
 qcrao.growUp()\r
 fmt.Println(qcrao.howOld())\r
 // `,title:"Go语言中的接口",date:"2024-03-22 15:58:38"}},{route:"/Go/Go语言之数组与切片.html",meta:{description:"",title:"Go语言之数组与切片",date:"2024-03-22 15:58:38"}},{route:"/Go/Go语言之文件读写.html",meta:{description:"",title:"Go语言之文件读写",date:"2024-04-18 15:15:32"}},{route:"/Go/Go语言之编译.html",meta:{description:"",title:"Go语言之编译",date:"2024-03-22 15:58:38"}},{route:"/Go/Go语言之调度器.html",meta:{description:`# Go语言之调度器\r
\r
## 1、goroutine和线程的区别？\r
\r
### 内存消耗\r
\r
- 创建一个goroutine的栈内存消耗为2kb，实际运行过程中如果栈不够用，会自动进行扩容；\r
- 创建一个thread需要消耗1MB内存，而且还需要一个被称为"a guard page"的区域用于和其他thread的栈空间进行隔离；\r
\r
### 创建与销毁\r
\r
- Thread创建和销毁都会有巨大的消耗，因为要和操作系统打交道，是内核级的，通常解决办法是线程池；\r
- goroutine因为是由Go runtime负责管理的，创建和销毁的消耗都非常小，是用户级别的；\r
\r
### 切换\r
\r
- threads切换的时候，需要保存各种寄存器，以便将来恢复\r
- 而goroutines切换只需要保存三个寄存器：program Counter，Stack Pointer and BP\r
- 一般而言，线程切换会消耗1000-1500纳秒，一纳秒平均可以执行12-18条指令\r
- Goroutine的切换为200纳秒，减少5-7倍左右\r
\r
## 2、什么是scheduler？\r
\r
Go程序的执行由两层组成：Go Program，Runtime，即用户程序和运行时。它们之间通过函数调用来实现内存管理、channel通信、goroutines创建等功能；\r
\r
用户程序进行的系统调用都会被Runtime拦截，以此来帮助它进行调度以及垃圾回收相关工作。\r
\r
![runtime overall](https://s2.loli.net/2023/12/28/X4MZtmbheoN5YlG.png)\r
\r
### 为什么要scheduler？\r
\r
Go scheduler 可以说是 Go 运行时的一个最重要的部分了。Runtime 维护所有的 goroutines，并通过 scheduler 来进行调度。Goroutines 和 threads 是独立的，但是 goroutines 要依赖 threads 才能执行。\r
\r
Go 程序执行的高效和 scheduler 的调度是分不开的。\r
\r
### scheduler底层原理\r
\r
实际上在操作系统看来，所有的程序都是在执行多线程。将 goroutines 调度到线程上执行，仅仅是 runtime 层面的一个概念，在操作系统之上的层面。\r
\r
有三个基础的结构体来实现goroutines的调度。g，m，p\r
\r
- g: 表示一个goroutine，它包含：表示goroutine栈的一些字段，指示当前goroutine的状态，指示当前运行到的指令的地址，也就是PC值\r
- m：表示内核线程，包含正在运行的goroutine等字段\r
- p：代表一个虚拟的Processer，它维护一个处于Runnable状态的g队列，m需要获得p才能运行g\r
- 当然还有一个核心的结构体：sched，它总览全局\r
\r
Go scheduler的核心思想是：\r
\r
1. 重复利用线程\r
2. 限制同时运行(不包含阻塞)的线程数为N，N等于CPU核心数目\r
3. 线程私有的runqueues，并且可以从其他线程strealing goroutine来运行，线程阻塞后，可以将runqueues传递给其他线程\r
\r
### 为什么需要P这个组件？直接把runqueues放到m不行吗？\r
\r
当一个线程阻塞的时候，将和它绑定的P上的goroutines转移到其他线程，这样可以避免过长的等待。\r
\r
Go scheduler 会启动一个后台线程sysmon，用来检测长时间(超过 10ms)运行的goroutine，将其调度到global runqueues。这是一个全局的runqueue，优先级比较低，以示惩罚。\r
\r
\r
\r
和线程类似，goroutine 的状态也是三种（简化版的）：\r
\r
| 状态      | 解释                                                         |\r
| `,title:"Go语言之调度器",date:"2024-03-22 15:58:38"}},{route:"/Go/Go语言之通道.html",meta:{description:"",title:"Go语言中的channel",date:"2024-03-22 15:58:38"}},{route:"/Go/Go语言资料.html",meta:{description:"",title:"Go语言资料",date:"2024-03-22 15:58:38"}},{route:"/Go/template模板.html",meta:{description:"",title:"Go语言之template模板",date:"2024-03-22 15:58:38"}},{route:"/Go/违反直觉.html",meta:{description:"",title:"记录一下违反直觉的情况",date:"2024-04-18 15:15:32"}},{route:"/GORM/Association.html",meta:{description:"",title:"Association",date:"2024-04-18 15:15:32"}},{route:"/HDDB/CAP.html",meta:{description:"",title:"CAP",date:"2024-04-18 15:15:32"}},{route:"/HDDB/MapReduce.html",meta:{description:"",title:"HDDB",date:"2024-04-18 15:15:32"}},{route:"/HDDB/Raft.html",meta:{description:`# Raft\r
\r
## 术语\r
\r
| **中文术语** | **英文术语**          | **含义**                                                     |\r
| `,title:"Raft",date:"2024-04-18 15:15:32"}},{route:"/HDDB/Raft问题.html",meta:{description:"",title:"Raft问题",date:"2024-04-18 15:15:32"}},{route:"/K8S/常用指令.html",meta:{description:"",title:"常用指令",date:"2024-04-18 15:15:32"}},{route:"/K8S/第一章 k8s介绍.html",meta:{description:`# 第一章 kubernetes介绍\r
\r
本章节主要介绍应用程序在服务器上部署方式演变以及kubernetes的概念、组件和工作原理。\r
\r
## 应用部署方式演变\r
\r
在部署应用程序的方式上，主要经历了三个时代：\r
\r
- **传统部署**：互联网早期，会直接将应用程序部署在物理机上\r
\r
  > 优点：简单，不需要其它技术的参与\r
  >\r
  > 缺点：不能为应用程序定义资源使用边界，很难合理地分配计算资源，而且程序之间容易产生影响\r
\r
- **虚拟化部署**：可以在一台物理机上运行多个虚拟机，每个虚拟机都是独立的一个环境\r
\r
  > 优点：程序环境不会相互产生影响，提供了一定程度的安全性\r
  >\r
  > 缺点：增加了操作系统，浪费了部分资源\r
\r
- **容器化部署**：与虚拟化类似，但是共享了操作系统\r
\r
  > 优点：\r
  >\r
  > ​    可以保证每个容器拥有自己的文件系统、CPU、内存、进程空间等\r
  >\r
  > ​    运行应用程序所需要的资源都被容器包装，并和底层基础架构解耦\r
  >\r
  > ​    容器化的应用程序可以跨云服务商、跨Linux操作系统发行版进行部署\r
\r
![image-20200505183738289](https://s2.loli.net/2024/04/18/dfrgzUJmExO7324.png)\r
\r
容器化部署方式给带来很多的便利，但是也会出现一些问题，比如说：\r
\r
- 一个容器故障停机了，怎么样让另外一个容器立刻启动去替补停机的容器\r
- 当并发访问量变大的时候，怎么样做到横向扩展容器数量\r
\r
这些容器管理的问题统称为**容器编排**问题，为了解决这些容器编排问题，就产生了一些容器编排的软件：\r
\r
- **Swarm**：Docker自己的容器编排工具\r
- **Mesos**：Apache的一个资源统一管控的工具，需要和Marathon结合使用\r
- **Kubernetes**：Google开源的的容器编排工具\r
\r
<img src="https://s2.loli.net/2024/04/18/jR87aqUe6PfJHFb.png" alt="image-20200524150339551" style="border:1px solid;zoom:110%;" />\r
\r
## kubernetes简介\r
\r
<img src="https://s2.loli.net/2024/04/18/rUWRGKSDfLaei8q.png" alt="image-20200406232838722" style="zoom:100%;border:1px solid;" />\r
\r
​    \r
\r
​    kubernetes，是一个全新的基于容器技术的分布式架构领先方案，是谷歌严格保密十几年的秘密武器`,title:"第一章kubernetes介绍",date:"2024-04-18 15:15:32"}},{route:"/K8S/第七章 Service详解.html",meta:{description:`# 第七章 Service详解\r
\r
本章节主要介绍kubernetes的流量负载组件：Service和Ingress。\r
\r
## Service介绍\r
\r
​    在kubernetes中，pod是应用程序的载体，我们可以通过pod的ip来访问应用程序，但是pod的ip地址不是固定的，这也就意味着不方便直接采用pod的ip对服务进行访问。\r
\r
​    为了解决这个问题，kubernetes提供了Service资源，Service会对提供同一个服务的多个pod进行聚合，并且提供一个统一的入口地址。通过访问Service的入口地址就能访问到后面的pod服务。\r
\r
<img src="https://s2.loli.net/2024/04/18/zXmHg6VxSftPAab.png" style="zoom:100%;border:1px solid" />\r
\r
​    Service在很多情况下只是一个概念，真正起作用的其实是kube-proxy服务进程，每个Node节点上都运行着一个kube-proxy服务进程。当创建Service的时候会通过api-server向etcd写入创建的service的信息，而kube-proxy会基于监听的机制发现这种Service的变动，然后**它会将最新的Service信息转换成对应的访问规则**。\r
\r
<img src="https://s2.loli.net/2024/04/18/qTcUANWlEwdz8sR.png" style="border:1px solid" />\r
\r
~~~powershell\r
# 10.97.97.97:80 是service提供的访问入口\r
# 当访问这个入口的时候，可以发现后面有三个pod的服务在等待调用，\r
# kube-proxy会基于rr（轮询）的策略，将请求分发到其中一个pod上去\r
# 这个规则会同时在集群内的所有节点上都生成，所以在任何一个节点上访问都可以。\r
[root@node1 ~]# ipvsadm -Ln\r
IP Virtual Server version 1.2.1 (size=4096)\r
Prot LocalAddress:Port Scheduler Flags\r
  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn\r
TCP  10.97.97.97:80 rr\r
  -> 10.244.1.39:80               Masq    1      0          0\r
  -> 10.244.1.40:80               Masq    1      0          0\r
  -> 10.244.2.33:80               Masq    1      0          0\r
~~~\r
\r
kube-proxy目前支持三种工作模式:\r
\r
**userspace 模式**\r
\r
​    userspace模式下，kube-proxy会为每一个Service创建一个监听端口，发向Cluster IP的请求被Iptables规则重定向到kube-proxy监听的端口上，kube-proxy根据LB算法选择一个提供服务的Pod并和其建立链接，以将请求转发到Pod上。\r
​    该模式下，kube-proxy充当了一个四层负责均衡器的角色。由于kube-proxy运行在userspace中，在进行转发处理时会增加内核和用户空间之间的数据拷贝，虽然比较稳定，但是效率比较低。\r
\r
<img src="https://s2.loli.net/2024/04/18/dO6iTFjpBAyuPGH.png" style="border: 1px solid; zoom: 57%;" />\r
\r
**iptables 模式**\r
\r
​    iptables模式下，kube-proxy为service后端的每个Pod创建对应的iptables规则，直接将发向Cluster IP的请求重定向到一个Pod IP。\r
​    该模式下kube-proxy不承担四层负责均衡器的角色，只负责创建iptables规则。该模式的优点是较userspace模式效率更高，但不能提供灵活的LB策略，当后端Pod不可用时也无法进行重试。\r
\r
<img src="https://s2.loli.net/2024/04/18/NVAlD3ZBdQjqJIx.png" style="zoom: 57%;"  />\r
\r
**ipvs 模式**\r
\r
​    ipvs模式和iptables类似，kube-proxy监控Pod的变化并创建相应的ipvs规则。ipvs相对iptables转发效率更高。除此以外，ipvs支持更多的LB算法。\r
\r
<img src="https://s2.loli.net/2024/04/18/v2qXY4gsDQB3hVH.png" style="zoom: 57%" />\r
\r
~~~powershell\r
# 此模式必须安装ipvs内核模块，否则会降级为iptables\r
# 开启ipvs\r
[root@master ~]# kubectl edit cm kube-proxy -n kube-system\r
[root@master ~]# kubectl delete pod -l k8s-app=kube-proxy -n kube-system\r
[root@node1 ~]# ipvsadm -Ln\r
IP Virtual Server version 1.2.1 (size=4096)\r
Prot LocalAddress:Port Scheduler Flags\r
  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn\r
TCP  10.97.97.97:80 rr\r
  -> 10.244.1.39:80               Masq    1      0          0\r
  -> 10.244.1.40:80               Masq    1      0          0\r
  -> 10.244.2.33:80               Masq    1      0          0\r
~~~\r
\r
## Service类型\r
\r
Service的资源清单文件：\r
\r
~~~yaml\r
kind: Service  # 资源类型\r
apiVersion: v1  # 资源版本\r
metadata: # 元数据\r
  name: service # 资源名称\r
  namespace: dev # 命名空间\r
spec: # 描述\r
  selector: # 标签选择器，用于确定当前service代理哪些pod\r
    app: nginx\r
  type: # Service类型，指定service的访问方式\r
  clusterIP:  # 虚拟服务的ip地址\r
  sessionAffinity: # session亲和性，支持ClientIP、None两个选项\r
  ports: # 端口信息\r
    - protocol: TCP \r
      port: 3017  # service端口\r
      targetPort: 5003 # pod端口\r
      nodePort: 31122 # 主机端口\r
~~~\r
\r
- ClusterIP：默认值，它是Kubernetes系统自动分配的虚拟IP，只能在集群内部访问\r
- NodePort：将Service通过指定的Node上的端口暴露给外部，通过此方法，就可以在集群外部访问服务\r
- LoadBalancer：使用外接负载均衡器完成到服务的负载分发，注意此模式需要外部云环境支持\r
- ExternalName： 把集群外部的服务引入集群内部，直接使用\r
\r
## Service使用\r
\r
### 实验环境准备\r
\r
在使用service之前，首先利用Deployment创建出3个pod，注意要为pod设置\`app=nginx-pod\`的标签\r
\r
创建deployment.yaml，内容如下：\r
\r
~~~yaml\r
apiVersion: apps/v1\r
kind: Deployment      \r
metadata:\r
  name: pc-deployment\r
  namespace: dev\r
spec: \r
  replicas: 3\r
  selector:\r
    matchLabels:\r
      app: nginx-pod\r
  template:\r
    metadata:\r
      labels:\r
        app: nginx-pod\r
    spec:\r
      containers:\r
      - name: nginx\r
        image: nginx:1.17.1\r
        ports:\r
        - containerPort: 80\r
~~~\r
\r
~~~powershell\r
[root@master ~]# kubectl create -f deployment.yaml\r
deployment.apps/pc-deployment created\r
\r
# 查看pod详情\r
[root@master ~]# kubectl get pods -n dev -o wide --show-labels\r
NAME                             READY   STATUS     IP            NODE     LABELS\r
pc-deployment-66cb59b984-8p84h   1/1     Running    10.244.1.40   node1    app=nginx-pod\r
pc-deployment-66cb59b984-vx8vx   1/1     Running    10.244.2.33   node2    app=nginx-pod\r
pc-deployment-66cb59b984-wnncx   1/1     Running    10.244.1.39   node1    app=nginx-pod\r
\r
# 为了方便后面的测试，修改下三台nginx的index.html页面（三台修改的IP地址不一致）\r
# kubectl exec -it pc-deployment-66cb59b984-8p84h -n dev /bin/sh\r
# echo "10.244.1.40" > /usr/share/nginx/html/index.html\r
\r
#修改完毕之后，访问测试\r
[root@master ~]# curl 10.244.1.40\r
10.244.1.40\r
[root@master ~]# curl 10.244.2.33\r
10.244.2.33\r
[root@master ~]# curl 10.244.1.39\r
10.244.1.39\r
~~~\r
\r
### ClusterIP类型的Service\r
\r
创建service-clusterip.yaml文件\r
\r
~~~yaml\r
apiVersion: v1\r
kind: Service\r
metadata:\r
  name: service-clusterip\r
  namespace: dev\r
spec:\r
  selector:\r
    app: nginx-pod\r
  clusterIP: 10.97.97.97 # service的ip地址，如果不写，默认会生成一个\r
  type: ClusterIP\r
  ports:\r
  - port: 80  # Service端口       \r
    targetPort: 80 # pod端口\r
~~~\r
\r
~~~powershell\r
# 创建service\r
[root@master ~]# kubectl create -f service-clusterip.yaml\r
service/service-clusterip created\r
\r
# 查看service\r
[root@master ~]# kubectl get svc -n dev -o wide\r
NAME                TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)   AGE   SELECTOR\r
service-clusterip   ClusterIP   10.97.97.97   <none>        80/TCP    13s   app=nginx-pod\r
\r
# 查看service的详细信息\r
# 在这里有一个Endpoints列表，里面就是当前service可以负载到的服务入口\r
[root@master ~]# kubectl describe svc service-clusterip -n dev\r
Name:              service-clusterip\r
Namespace:         dev\r
Labels:            <none>\r
Annotations:       <none>\r
Selector:          app=nginx-pod\r
Type:              ClusterIP\r
IP:                10.97.97.97\r
Port:              <unset>  80/TCP\r
TargetPort:        80/TCP\r
Endpoints:         10.244.1.39:80,10.244.1.40:80,10.244.2.33:80\r
Session Affinity:  None\r
Events:            <none>\r
\r
# 查看ipvs的映射规则\r
[root@master ~]# ipvsadm -Ln\r
TCP  10.97.97.97:80 rr\r
  -> 10.244.1.39:80               Masq    1      0          0\r
  -> 10.244.1.40:80               Masq    1      0          0\r
  -> 10.244.2.33:80               Masq    1      0          0\r
\r
# 访问10.97.97.97:80观察效果\r
[root@master ~]# curl 10.97.97.97:80\r
10.244.2.33\r
~~~\r
\r
**Endpoint**\r
\r
​    Endpoint是kubernetes中的一个资源对象，存储在etcd中，用来记录一个service对应的所有pod的访问地址，它是根据service配置文件中selector描述产生的。\r
\r
​    一个Service由一组Pod组成，这些Pod通过Endpoints暴露出来，**Endpoints是实现实际服务的端点集合**。换句话说，service和pod之间的联系是通过endpoints实现的。\r
\r
![image-20240418103828068](https://s2.loli.net/2024/04/18/tTQKwl6NrEfR1da.png)\r
\r
**负载分发策略**\r
\r
对Service的访问被分发到了后端的Pod上去，目前kubernetes提供了两种负载分发策略：\r
\r
- 如果不定义，默认使用kube-proxy的策略，比如随机、轮询\r
\r
- 基于客户端地址的会话保持模式，即来自同一个客户端发起的所有请求都会转发到固定的一个Pod上\r
\r
  此模式可以使在spec中添加\`sessionAffinity:ClientIP\`选项\r
\r
~~~powershell\r
# 查看ipvs的映射规则【rr 轮询】\r
[root@master ~]# ipvsadm -Ln\r
TCP  10.97.97.97:80 rr\r
  -> 10.244.1.39:80               Masq    1      0          0\r
  -> 10.244.1.40:80               Masq    1      0          0\r
  -> 10.244.2.33:80               Masq    1      0          0\r
\r
# 循环访问测试\r
[root@master ~]# while true;do curl 10.97.97.97:80; sleep 5; done;\r
10.244.1.40\r
10.244.1.39\r
10.244.2.33\r
10.244.1.40\r
10.244.1.39\r
10.244.2.33\r
\r
# 修改分发策略`,title:"创建",date:"2024-04-18 15:15:32"}},{route:"/K8S/第三章 资源管理.html",meta:{description:`# 第三章 资源管理\r
\r
本章节主要介绍yaml语法和kubernetes的资源管理方式\r
\r
## 资源管理介绍\r
\r
在kubernetes中，所有的内容都抽象为资源，用户需要通过操作资源来管理kubernetes。\r
\r
>​    kubernetes的本质上就是一个集群系统，用户可以在集群中部署各种服务，所谓的部署服务，其实就是在kubernetes集群中运行一个个的容器，并将指定的程序跑在容器中。\r
>\r
>​    kubernetes的最小管理单元是pod而不是容器，所以只能将容器放在\`Pod\`中，而kubernetes一般也不会直接管理Pod，而是通过\`Pod控制器\`来管理Pod的。\r
>\r
>​    Pod可以提供服务之后，就要考虑如何访问Pod中服务，kubernetes提供了\`Service\`资源实现这个功能。\r
>\r
>​    当然，如果Pod中程序的数据需要持久化，kubernetes还提供了各种\`存储\`系统。\r
\r
<img src="https://s2.loli.net/2024/04/18/nM851oWsYeGFDrj.png" alt="image-20200406225334627" style="zoom:200%;" />\r
\r
>  学习kubernetes的核心，就是学习如何对集群上的\`Pod、Pod控制器、Service、存储\`等各种资源进行操作\r
\r
## YAML语言介绍\r
\r
​    YAML是一个类似 XML、JSON 的标记性语言。它强调以**数据**为中心，并不是以标识语言为重点。因而YAML本身的定义比较简单，号称"一种人性化的数据格式语言"。\r
\r
~~~xml\r
<heima>\r
	<age>15</age>\r
    <address>Beijing</address>\r
</heima>\r
~~~\r
\r
~~~yaml\r
heima:\r
  age: 15\r
  address: Beijing\r
~~~\r
\r
YAML的语法比较简单，主要有下面几个：\r
\r
- 大小写敏感\r
- 使用缩进表示层级关系\r
- 缩进不允许使用tab，只允许空格( 低版本限制 )\r
- 缩进的空格数不重要，只要相同层级的元素左对齐即可\r
- '#'表示注释\r
\r
YAML支持以下几种数据类型：\r
\r
- 纯量：单个的、不可再分的值\r
- 对象：键值对的集合，又称为映射（mapping）/ 哈希（hash） / 字典（dictionary）\r
- 数组：一组按次序排列的值，又称为序列（sequence） / 列表（list）\r
\r
~~~yaml\r
# 纯量, 就是指的一个简单的值，字符串、布尔值、整数、浮点数、Null、时间、日期\r
# 1 布尔类型\r
c1: true (或者True)\r
# 2 整型\r
c2: 234\r
# 3 浮点型\r
c3: 3.14\r
# 4 null类型 \r
c4: ~  # 使用~表示null\r
# 5 日期类型\r
c5: 2018-02-17    # 日期必须使用ISO 8601格式，即yyyy-MM-dd\r
# 6 时间类型\r
c6: 2018-02-17T15:02:31+08:00  # 时间使用ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区\r
# 7 字符串类型\r
c7: heima     # 简单写法，直接写值 , 如果字符串中间有特殊字符，必须使用双引号或者单引号包裹 \r
c8: line1\r
    line2     # 字符串过多的情况可以拆成多行，每一行会被转化成一个空格\r
~~~\r
\r
~~~yaml\r
# 对象\r
# 形式一(推荐):\r
heima:\r
  age: 15\r
  address: Beijing\r
# 形式二(了解):\r
heima: {age: 15,address: Beijing}\r
~~~\r
\r
~~~yaml\r
# 数组\r
# 形式一(推荐):\r
address:\r
  - 顺义\r
  - 昌平	\r
# 形式二(了解):\r
address: [顺义,昌平]\r
~~~\r
\r
> 小提示：\r
>\r
> ​	1  书写yaml切记\`:\` 后面要加一个空格\r
>\r
> ​	2  如果需要将多段yaml配置放在一个文件中，中间要使用\``,title:"第三章资源管理",date:"2024-04-18 15:15:32"}},{route:"/K8S/第九章 安全认证.html",meta:{description:`# 第九章 安全认证\r
\r
本章节主要介绍Kubernetes的安全认证机制。\r
\r
## 访问控制概述\r
\r
​    Kubernetes作为一个分布式集群的管理工具，保证集群的安全性是其一个重要的任务。所谓的安全性其实就是保证对Kubernetes的各种**客户端**进行**认证和鉴权**操作。\r
\r
**客户端**\r
\r
在Kubernetes集群中，客户端通常有两类：\r
\r
- **User Account**：一般是独立于kubernetes之外的其他服务管理的用户账号。\r
\r
- **Service Account**：kubernetes管理的账号，用于为Pod中的服务进程在访问Kubernetes时提供身份标识。\r
\r
<img src="https://s2.loli.net/2024/04/18/toUmcqZQv74kdCM.png" style="zoom:100%;border:1px solid" />\r
\r
**认证、授权与准入控制**   \r
\r
ApiServer是访问及管理资源对象的唯一入口。任何一个请求访问ApiServer，都要经过下面三个流程：\r
\r
- Authentication（认证）：身份鉴别，只有正确的账号才能够通过认证\r
- Authorization（授权）：  判断用户是否有权限对访问的资源执行特定的动作\r
- Admission Control（准入控制）：用于补充授权机制以实现更加精细的访问控制功能。\r
\r
<img src="https://s2.loli.net/2024/04/18/YsUliuQowaAGrXO.png" style="zoom:100%; border:1px solid" />\r
\r
## 认证管理\r
\r
Kubernetes集群安全的最关键点在于如何识别并认证客户端身份，它提供了3种客户端身份认证方式：\r
\r
- HTTP Base认证：通过用户名+密码的方式认证\r
\r
  ~~~markdown\r
      这种认证方式是把“用户名:密码”用BASE64算法进行编码后的字符串放在HTTP请求中的Header Authorization域里发送给服务端。服务端收到后进行解码，获取用户名及密码，然后进行用户身份认证的过程。\r
  ~~~\r
\r
- HTTP Token认证：通过一个Token来识别合法用户\r
\r
  ~~~markdown\r
      这种认证方式是用一个很长的难以被模仿的字符串--Token来表明客户身份的一种方式。每个Token对应一个用户名，当客户端发起API调用请求时，需要在HTTP Header里放入Token，API Server接到Token后会跟服务器中保存的token进行比对，然后进行用户身份认证的过程。\r
  ~~~\r
\r
- HTTPS证书认证：基于CA根证书签名的双向数字证书认证方式\r
\r
  ~~~markdown\r
      这种认证方式是安全性最高的一种方式，但是同时也是操作起来最麻烦的一种方式。\r
  ~~~\r
\r
<img src="https://s2.loli.net/2024/04/18/yLWbHFQGem52SjV.png" style="zoom:100%;border:1px solid" />\r
\r
**HTTPS认证大体分为3个过程：**\r
\r
1. 证书申请和下发\r
\r
   ~~~markdown\r
     HTTPS通信双方的服务器向CA机构申请证书，CA机构下发根证书、服务端证书及私钥给申请者\r
   ~~~\r
\r
2. 客户端和服务端的双向认证\r
\r
   ~~~markdown\r
     1> 客户端向服务器端发起请求，服务端下发自己的证书给客户端，\r
        客户端接收到证书后，通过私钥解密证书，在证书中获得服务端的公钥，\r
        客户端利用服务器端的公钥认证证书中的信息，如果一致，则认可这个服务器\r
     2> 客户端发送自己的证书给服务器端，服务端接收到证书后，通过私钥解密证书，\r
        在证书中获得客户端的公钥，并用该公钥认证证书信息，确认客户端是否合法\r
   ~~~\r
\r
3. 服务器端和客户端进行通信\r
\r
   ~~~markdown\r
     服务器端和客户端协商好加密方案后，客户端会产生一个随机的秘钥并加密，然后发送到服务器端。\r
     服务器端接收这个秘钥后，双方接下来通信的所有内容都通过该随机秘钥加密\r
   ~~~\r
\r
> 注意:  Kubernetes允许同时配置多种认证方式，只要其中任意一个方式认证通过即可\r
\r
## 授权管理\r
\r
​     授权发生在认证成功之后，通过认证就可以知道请求用户是谁， 然后Kubernetes会根据事先定义的授权策略来决定用户是否有权限访问，这个过程就称为授权。\r
\r
​     每个发送到ApiServer的请求都带上了用户和资源的信息：比如发送请求的用户、请求的路径、请求的动作等，授权就是根据这些信息和授权策略进行比较，如果符合策略，则认为授权通过，否则会返回错误。\r
\r
API Server目前支持以下几种授权策略：\r
\r
- AlwaysDeny：表示拒绝所有请求，一般用于测试\r
\r
- AlwaysAllow：允许接收所有请求，相当于集群不需要授权流程（Kubernetes默认的策略）\r
\r
- ABAC：基于属性的访问控制，表示使用用户配置的授权规则对用户请求进行匹配和控制\r
\r
- Webhook：通过调用外部REST服务对用户进行授权\r
\r
- Node：是一种专用模式，用于对kubelet发出的请求进行访问控制\r
\r
- RBAC：基于角色的访问控制（kubeadm安装方式下的默认选项）\r
\r
\r
RBAC(Role-Based Access Control) 基于角色的访问控制，主要是在描述一件事情：**给哪些对象授予了哪些权限**\r
\r
其中涉及到了下面几个概念：\r
\r
- 对象：User、Groups、ServiceAccount\r
- 角色：代表着一组定义在资源上的可操作动作(权限)的集合\r
- 绑定：将定义好的角色跟用户绑定在一起\r
\r
<img src="https://s2.loli.net/2024/04/18/pUHDwGEuT6LeZXt.png" style="zoom:100%;border:1px solid" />\r
\r
RBAC引入了4个顶级资源对象：\r
\r
- Role、ClusterRole：角色，用于指定一组权限\r
- RoleBinding、ClusterRoleBinding：角色绑定，用于将角色（权限）赋予给对象\r
\r
**Role、ClusterRole**\r
\r
一个角色就是一组权限的集合，这里的权限都是许可形式的（白名单）。\r
\r
~~~yaml\r
# Role只能对命名空间内的资源进行授权，需要指定nameapce\r
kind: Role\r
apiVersion: rbac.authorization.k8s.io/v1beta1\r
metadata:\r
  namespace: dev\r
  name: authorization-role\r
rules:\r
- apiGroups: [""]  # 支持的API组列表,"" 空字符串，表示核心API群\r
  resources: ["pods"] # 支持的资源对象列表\r
  verbs: ["get", "watch", "list"] # 允许的对资源对象的操作方法列表\r
~~~\r
\r
~~~yaml\r
# ClusterRole可以对集群范围内资源、跨namespaces的范围资源、非资源类型进行授权\r
kind: ClusterRole\r
apiVersion: rbac.authorization.k8s.io/v1beta1\r
metadata:\r
 name: authorization-clusterrole\r
rules:\r
- apiGroups: [""]\r
  resources: ["pods"]\r
  verbs: ["get", "watch", "list"]\r
~~~\r
\r
需要详细说明的是，rules中的参数：\r
\r
- apiGroups: 支持的API组列表\r
\r
  \`\`\`bash\r
  "","apps", "autoscaling", "batch"\r
  \`\`\`\r
\r
- resources：支持的资源对象列表\r
\r
  \`\`\`bash\r
  "services", "endpoints", "pods","secrets","configmaps","crontabs","deployments","jobs",\r
  "nodes","rolebindings","clusterroles","daemonsets","replicasets","statefulsets",\r
  "horizontalpodautoscalers","replicationcontrollers","cronjobs"\r
  \`\`\`\r
\r
- verbs：对资源对象的操作方法列表\r
\r
  \`\`\`bash\r
  "get", "list", "watch", "create", "update", "patch", "delete", "exec"\r
  \`\`\`\r
\r
**RoleBinding、ClusterRoleBinding**\r
\r
角色绑定用来把一个角色绑定到一个目标对象上，绑定目标可以是User、Group或者ServiceAccount。\r
\r
~~~yaml\r
# RoleBinding可以将同一namespace中的subject绑定到某个Role下，则此subject即具有该Role定义的权限\r
kind: RoleBinding\r
apiVersion: rbac.authorization.k8s.io/v1beta1\r
metadata:\r
  name: authorization-role-binding\r
  namespace: dev\r
subjects:\r
- kind: User\r
  name: heima\r
  apiGroup: rbac.authorization.k8s.io\r
roleRef:\r
  kind: Role\r
  name: authorization-role\r
  apiGroup: rbac.authorization.k8s.io\r
~~~\r
\r
~~~yaml\r
# ClusterRoleBinding在整个集群级别和所有namespaces将特定的subject与ClusterRole绑定，授予权限\r
kind: ClusterRoleBinding\r
apiVersion: rbac.authorization.k8s.io/v1beta1\r
metadata:\r
 name: authorization-clusterrole-binding\r
subjects:\r
- kind: User\r
  name: heima\r
  apiGroup: rbac.authorization.k8s.io\r
roleRef:\r
  kind: ClusterRole\r
  name: authorization-clusterrole\r
  apiGroup: rbac.authorization.k8s.io\r
~~~\r
\r
**RoleBinding引用ClusterRole进行授权**\r
\r
RoleBinding可以引用ClusterRole，对属于同一命名空间内ClusterRole定义的资源主体进行授权。\r
\r
~~~markdown\r
    一种很常用的做法就是，集群管理员为集群范围预定义好一组角色（ClusterRole），然后在多个命名空间中重复使用这些ClusterRole。这样可以大幅提高授权管理工作效率，也使得各个命名空间下的基础性授权规则与使用体验保持一致。\r
~~~\r
\r
~~~yaml\r
# 虽然authorization-clusterrole是一个集群角色，但是因为使用了RoleBinding\r
# 所以heima只能读取dev命名空间中的资源\r
kind: RoleBinding\r
apiVersion: rbac.authorization.k8s.io/v1beta1\r
metadata:\r
  name: authorization-role-binding-ns\r
  namespace: dev\r
subjects:\r
- kind: User\r
  name: heima\r
  apiGroup: rbac.authorization.k8s.io\r
roleRef:\r
  kind: ClusterRole\r
  name: authorization-clusterrole\r
  apiGroup: rbac.authorization.k8s.io\r
~~~\r
\r
**实战：创建一个只能管理dev空间下Pods资源的账号**\r
\r
1) 创建账号\r
\r
~~~powershell\r
# 1) 创建证书\r
[root@master pki]# cd /etc/kubernetes/pki/\r
[root@master pki]# (umask 077;openssl genrsa -out devman.key 2048)\r
\r
# 2) 用apiserver的证书去签署\r
# 2-1) 签名申请，申请的用户是devman,组是devgroup\r
[root@master pki]# openssl req -new -key devman.key -out devman.csr -subj "/CN=devman/O=devgroup"     \r
# 2-2) 签署证书\r
[root@master pki]# openssl x509 -req -in devman.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out devman.crt -days 3650\r
\r
# 3) 设置集群、用户、上下文信息\r
[root@master pki]# kubectl config set-cluster kubernetes --embed-certs=true --certificate-authority=/etc/kubernetes/pki/ca.crt --server=https://192.168.109.100:6443\r
\r
[root@master pki]# kubectl config set-credentials devman --embed-certs=true --client-certificate=/etc/kubernetes/pki/devman.crt --client-key=/etc/kubernetes/pki/devman.key\r
\r
[root@master pki]# kubectl config set-context devman@kubernetes --cluster=kubernetes --user=devman\r
\r
# 切换账户到devman\r
[root@master pki]# kubectl config use-context devman@kubernetes\r
Switched to context "devman@kubernetes".\r
\r
# 查看dev下pod，发现没有权限\r
[root@master pki]# kubectl get pods -n dev\r
Error from server (Forbidden): pods is forbidden: User "devman" cannot list resource "pods" in API group "" in the namespace "dev"\r
\r
# 切换到admin账户\r
[root@master pki]# kubectl config use-context kubernetes-admin@kubernetes\r
Switched to context "kubernetes-admin@kubernetes".\r
~~~\r
\r
2） 创建Role和RoleBinding，为devman用户授权\r
\r
~~~yaml\r
kind: Role\r
apiVersion: rbac.authorization.k8s.io/v1beta1\r
metadata:\r
  namespace: dev\r
  name: dev-role\r
rules:\r
- apiGroups: [""]\r
  resources: ["pods"]\r
  verbs: ["get", "watch", "list"]\r
  \r
`,title:"第九章安全认证",date:"2024-04-18 15:15:32"}},{route:"/K8S/第二章 集群环境搭建.html",meta:{description:`# 第二章 集群环境搭建\r
\r
本章节主要介绍如何搭建kubernetes的集群环境\r
\r
## 环境规划\r
\r
### 集群类型\r
\r
kubernetes集群大体上分为两类：**一主多从**和**多主多从**。\r
\r
- 一主多从：一台Master节点和多台Node节点，搭建简单，但是有单机故障风险，适合用于测试环境\r
- 多主多从：多台Master节点和多台Node节点，搭建麻烦，安全性高，适合用于生产环境\r
\r
![image-20200404094800622](https://s2.loli.net/2024/04/18/7XrBCh3Y5KUPTt8.png)\r
\r
> \`说明：为了测试简单，本次搭建的是  一主两从   类型的集群\`\r
\r
### 安装方式\r
\r
kubernetes有多种部署方式，目前主流的方式有kubeadm、minikube、二进制包\r
\r
- minikube：一个用于快速搭建单节点kubernetes的工具\r
- kubeadm：一个用于快速搭建kubernetes集群的工具\r
- 二进制包 ：从官网下载每个组件的二进制包，依次去安装，此方式对于理解kubernetes组件更加有效\r
\r
> \`说明：现在需要安装kubernetes的集群环境，但是又不想过于麻烦，所以选择使用kubeadm方式\`\r
\r
### 主机规划\r
\r
| 作用   | IP地址          | 操作系统                    | 配置                     |\r
| `,title:"第二章集群环境搭建",date:"2024-04-18 15:15:32"}},{route:"/K8S/第五章 Pod详解.html",meta:{description:`# 第五章 Pod详解\r
\r
本章节将详细介绍Pod资源的各种配置（yaml）和原理。\r
\r
## Pod介绍\r
\r
### Pod结构\r
\r
<img src="https://s2.loli.net/2024/04/18/8uXd5jcQ4plN9Cf.png" alt="image-20200407121501907" style="zoom:80%;" />\r
\r
每个Pod中都可以包含一个或者多个容器，这些容器可以分为两类：\r
\r
- 用户程序所在的容器，数量可多可少\r
\r
- Pause容器，这是每个Pod都会有的一个**根容器**，它的作用有两个：\r
\r
  - 可以以它为依据，评估整个Pod的健康状态\r
\r
  - 可以在根容器上设置Ip地址，其它容器都此Ip（Pod IP），以实现Pod内部的网路通信\r
\r
    ~~~md\r
    这里是Pod内部的通讯，Pod的之间的通讯采用虚拟二层网络技术来实现，我们当前环境用的是Flannel\r
    ~~~\r
\r
### Pod定义\r
\r
下面是Pod的资源清单：\r
\r
~~~yaml\r
apiVersion: v1     #必选，版本号，例如v1\r
kind: Pod       　 #必选，资源类型，例如 Pod\r
metadata:       　 #必选，元数据\r
  name: string     #必选，Pod名称\r
  namespace: string  #Pod所属的命名空间,默认为"default"\r
  labels:       　　  #自定义标签列表\r
    - name: string      　          \r
spec:  #必选，Pod中容器的详细定义\r
  containers:  #必选，Pod中容器列表\r
  - name: string   #必选，容器名称\r
    image: string  #必选，容器的镜像名称\r
    imagePullPolicy: [ Always|Never|IfNotPresent ]  #获取镜像的策略 \r
    command: [string]   #容器的启动命令列表，如不指定，使用打包时使用的启动命令\r
    args: [string]      #容器的启动命令参数列表\r
    workingDir: string  #容器的工作目录\r
    volumeMounts:       #挂载到容器内部的存储卷配置\r
    - name: string      #引用pod定义的共享存储卷的名称，需用volumes[]部分定义的的卷名\r
      mountPath: string #存储卷在容器内mount的绝对路径，应少于512字符\r
      readOnly: boolean #是否为只读模式\r
    ports: #需要暴露的端口库号列表\r
    - name: string        #端口的名称\r
      containerPort: int  #容器需要监听的端口号\r
      hostPort: int       #容器所在主机需要监听的端口号，默认与Container相同\r
      protocol: string    #端口协议，支持TCP和UDP，默认TCP\r
    env:   #容器运行前需设置的环境变量列表\r
    - name: string  #环境变量名称\r
      value: string #环境变量的值\r
    resources: #资源限制和请求的设置\r
      limits:  #资源限制的设置\r
        cpu: string     #Cpu的限制，单位为core数，将用于docker run --cpu-shares参数\r
        memory: string  #内存限制，单位可以为Mib/Gib，将用于docker run --memory参数\r
      requests: #资源请求的设置\r
        cpu: string    #Cpu请求，容器启动的初始可用数量\r
        memory: string #内存请求,容器启动的初始可用数量\r
    lifecycle: #生命周期钩子\r
		postStart: #容器启动后立即执行此钩子,如果执行失败,会根据重启策略进行重启\r
		preStop: #容器终止前执行此钩子,无论结果如何,容器都会终止\r
    livenessProbe:  #对Pod内各容器健康检查的设置，当探测无响应几次后将自动重启该容器\r
      exec:       　 #对Pod容器内检查方式设置为exec方式\r
        command: [string]  #exec方式需要制定的命令或脚本\r
      httpGet:       #对Pod内个容器健康检查方法设置为HttpGet，需要制定Path、port\r
        path: string\r
        port: number\r
        host: string\r
        scheme: string\r
        HttpHeaders:\r
        - name: string\r
          value: string\r
      tcpSocket:     #对Pod内个容器健康检查方式设置为tcpSocket方式\r
         port: number\r
       initialDelaySeconds: 0       #容器启动完成后首次探测的时间，单位为秒\r
       timeoutSeconds: 0    　　    #对容器健康检查探测等待响应的超时时间，单位秒，默认1秒\r
       periodSeconds: 0     　　    #对容器监控检查的定期探测时间设置，单位秒，默认10秒一次\r
       successThreshold: 0\r
       failureThreshold: 0\r
       securityContext:\r
         privileged: false\r
  restartPolicy: [Always | Never | OnFailure]  #Pod的重启策略\r
  nodeName: <string> #设置NodeName表示将该Pod调度到指定到名称的node节点上\r
  nodeSelector: obeject #设置NodeSelector表示将该Pod调度到包含这个label的node上\r
  imagePullSecrets: #Pull镜像时使用的secret名称，以key：secretkey格式指定\r
  - name: string\r
  hostNetwork: false   #是否使用主机网络模式，默认为false，如果设置为true，表示使用宿主机网络\r
  volumes:   #在该pod上定义共享存储卷列表\r
  - name: string    #共享存储卷名称 （volumes类型有很多种）\r
    emptyDir: {}       #类型为emtyDir的存储卷，与Pod同生命周期的一个临时目录。为空值\r
    hostPath: string   #类型为hostPath的存储卷，表示挂载Pod所在宿主机的目录\r
      path: string      　　        #Pod所在宿主机的目录，将被用于同期中mount的目录\r
    secret:       　　　#类型为secret的存储卷，挂载集群与定义的secret对象到容器内部\r
      scretname: string  \r
      items:     \r
      - key: string\r
        path: string\r
    configMap:         #类型为configMap的存储卷，挂载预定义的configMap对象到容器内部\r
      name: string\r
      items:\r
      - key: string\r
        path: string\r
~~~\r
\r
\r
\r
~~~powershell\r
#小提示：\r
#	在这里，可通过一个命令来查看每种资源的可配置项\r
#   kubectl explain 资源类型         查看某种资源可以配置的一级属性\r
#	kubectl explain 资源类型.属性     查看属性的子属性\r
[root@master ~]# kubectl explain pod\r
KIND:     Pod\r
VERSION:  v1\r
FIELDS:\r
   apiVersion   <string>\r
   kind <string>\r
   metadata     <Object>\r
   spec <Object>\r
   status       <Object>\r
\r
[root@master ~]# kubectl explain pod.metadata\r
KIND:     Pod\r
VERSION:  v1\r
RESOURCE: metadata <Object>\r
FIELDS:\r
   annotations  <map[string]string>\r
   clusterName  <string>\r
   creationTimestamp    <string>\r
   deletionGracePeriodSeconds   <integer>\r
   deletionTimestamp    <string>\r
   finalizers   <[]string>\r
   generateName <string>\r
   generation   <integer>\r
   labels       <map[string]string>\r
   managedFields        <[]Object>\r
   name <string>\r
   namespace    <string>\r
   ownerReferences      <[]Object>\r
   resourceVersion      <string>\r
   selfLink     <string>\r
   uid  <string>\r
~~~\r
\r
在kubernetes中基本所有资源的一级属性都是一样的，主要包含5部分：\r
\r
- apiVersion   \\<string>     版本，由kubernetes内部定义，版本号必须可以用 kubectl api-versions 查询到\r
- kind \\<string>                类型，由kubernetes内部定义，版本号必须可以用 kubectl api-resources 查询到\r
\r
- metadata   \\<Object>     元数据，主要是资源标识和说明，常用的有name、namespace、labels等\r
\r
- spec \\<Object>               描述，这是配置中最重要的一部分，里面是对各种资源配置的详细描述                \r
\r
- status  \\<Object>            状态信息，里面的内容不需要定义，由kubernetes自动生成\r
\r
在上面的属性中，spec是接下来研究的重点，继续看下它的常见子属性:\r
\r
- containers   <[]Object>       容器列表，用于定义容器的详细信息 \r
- nodeName \\<String>           根据nodeName的值将pod调度到指定的Node节点上\r
- nodeSelector   <map[]>      根据NodeSelector中定义的信息选择将该Pod调度到包含这些label的Node 上\r
- hostNetwork  \\<boolean>    是否使用主机网络模式，默认为false，如果设置为true，表示使用宿主机网络\r
- volumes      <[]Object>       存储卷，用于定义Pod上面挂在的存储信息 \r
- restartPolicy	\\<string>       重启策略，表示Pod在遇到故障的时候的处理策略\r
\r
## Pod配置\r
\r
本小节主要来研究\`pod.spec.containers\`属性，这也是pod配置中最为关键的一项配置。\r
\r
~~~powershell\r
[root@master ~]# kubectl explain pod.spec.containers\r
KIND:     Pod\r
VERSION:  v1\r
RESOURCE: containers <[]Object>   # 数组，代表可以有多个容器\r
FIELDS:\r
   name  <string>     # 容器名称\r
   image <string>     # 容器需要的镜像地址\r
   imagePullPolicy  <string> # 镜像拉取策略 \r
   command  <[]string> # 容器的启动命令列表，如不指定，使用打包时使用的启动命令\r
   args     <[]string> # 容器的启动命令需要的参数列表\r
   env      <[]Object> # 容器环境变量的配置\r
   ports    <[]Object>     # 容器需要暴露的端口号列表\r
   resources <Object>      # 资源限制和资源请求的设置\r
~~~\r
\r
### 基本配置\r
\r
创建pod-base.yaml文件，内容如下：\r
\r
~~~yaml\r
apiVersion: v1\r
kind: Pod\r
metadata:\r
  name: pod-base\r
  namespace: dev\r
  labels:\r
    user: heima\r
spec:\r
  containers:\r
  - name: nginx\r
    image: nginx:1.17.1\r
  - name: busybox\r
    image: busybox:1.30\r
~~~\r
\r
上面定义了一个比较简单Pod的配置，里面有两个容器：\r
\r
- nginx：用1.17.1版本的nginx镜像创建，（nginx是一个轻量级web容器）\r
- busybox：用1.30版本的busybox镜像创建，（busybox是一个小巧的linux命令集合）\r
\r
~~~powershell\r
# 创建Pod\r
[root@master pod]# kubectl apply -f pod-base.yaml\r
pod/pod-base created\r
\r
# 查看Pod状况\r
# READY 1/2 : 表示当前Pod中有2个容器，其中1个准备就绪，1个未就绪\r
# RESTARTS  : 重启次数，因为有1个容器故障了，Pod一直在重启试图恢复它\r
[root@master pod]# kubectl get pod -n dev\r
NAME       READY   STATUS    RESTARTS   AGE\r
pod-base   1/2     Running   4          95s\r
\r
# 可以通过describe查看内部的详情\r
# 此时已经运行起来了一个基本的Pod，虽然它暂时有问题\r
[root@master pod]# kubectl describe pod pod-base -n dev\r
~~~\r
\r
### 镜像拉取\r
\r
创建pod-imagepullpolicy.yaml文件，内容如下：\r
\r
~~~yaml\r
apiVersion: v1\r
kind: Pod\r
metadata:\r
  name: pod-imagepullpolicy\r
  namespace: dev\r
spec:\r
  containers:\r
  - name: nginx\r
    image: nginx:1.17.1\r
    imagePullPolicy: Always # 用于设置镜像拉取策略\r
  - name: busybox\r
    image: busybox:1.30\r
~~~\r
\r
imagePullPolicy，用于设置镜像拉取策略，kubernetes支持配置三种拉取策略：\r
\r
- Always：总是从远程仓库拉取镜像（一直远程下载）\r
- IfNotPresent：本地有则使用本地镜像，本地没有则从远程仓库拉取镜像（本地有就本地  本地没远程下载）\r
- Never：只使用本地镜像，从不去远程仓库拉取，本地没有就报错 （一直使用本地）\r
\r
> 默认值说明：\r
>\r
> ​    如果镜像tag为具体版本号， 默认策略是：IfNotPresent\r
>\r
> ​	如果镜像tag为：latest（最终版本） ，默认策略是always\r
\r
~~~powershell\r
# 创建Pod\r
[root@master pod]# kubectl create -f pod-imagepullpolicy.yaml\r
pod/pod-imagepullpolicy created\r
\r
# 查看Pod详情\r
# 此时明显可以看到nginx镜像有一步Pulling image "nginx:1.17.1"的过程\r
[root@master pod]# kubectl describe pod pod-imagepullpolicy -n dev\r
......\r
Events:\r
  Type     Reason     Age               From               Message\r
  `,title:"第五章Pod详解",date:"2024-04-18 15:15:33"}},{route:"/K8S/第八章 数据存储.html",meta:{description:`# 第八章 数据存储\r
\r
​    在前面已经提到，容器的生命周期可能很短，会被频繁地创建和销毁。那么容器在销毁时，保存在容器中的数据也会被清除。这种结果对用户来说，在某些情况下是不乐意看到的。为了持久化保存容器的数据，kubernetes引入了Volume的概念。\r
\r
​    Volume是Pod中能够被多个容器访问的共享目录，它被定义在Pod上，然后被一个Pod里的多个容器挂载到具体的文件目录下，kubernetes通过Volume实现同一个Pod中不同容器之间的数据共享以及数据的持久化存储。Volume的生命容器不与Pod中单个容器的生命周期相关，当容器终止或者重启时，Volume中的数据也不会丢失。\r
\r
kubernetes的Volume支持多种类型，比较常见的有下面几个：\r
\r
- 简单存储：EmptyDir、HostPath、NFS\r
- 高级存储：PV、PVC\r
- 配置存储：ConfigMap、Secret\r
\r
## 基本存储\r
\r
### EmptyDir\r
\r
​    EmptyDir是最基础的Volume类型，一个EmptyDir就是Host上的一个空目录。\r
\r
​    EmptyDir是在Pod被分配到Node时创建的，它的初始内容为空，并且无须指定宿主机上对应的目录文件，因为kubernetes会自动分配一个目录，当Pod销毁时， EmptyDir中的数据也会被永久删除。 EmptyDir用途如下：\r
\r
- 临时空间，例如用于某些应用程序运行时所需的临时目录，且无须永久保留\r
\r
- 一个容器需要从另一个容器中获取数据的目录（多容器共享目录）\r
\r
接下来，通过一个容器之间文件共享的案例来使用一下EmptyDir。\r
\r
​    在一个Pod中准备两个容器nginx和busybox，然后声明一个Volume分别挂在到两个容器的目录中，然后nginx容器负责向Volume中写日志，busybox中通过命令将日志内容读到控制台。\r
\r
<img src="https://s2.loli.net/2024/04/18/cs4r7Lkv9i3BEzt.png" style="zoom:80%;border:solid 1px" />\r
\r
创建一个volume-emptydir.yaml\r
\r
~~~yaml\r
apiVersion: v1\r
kind: Pod\r
metadata:\r
  name: volume-emptydir\r
  namespace: dev\r
spec:\r
  containers:\r
  - name: nginx\r
    image: nginx:1.14-alpine\r
    ports:\r
    - containerPort: 80\r
    volumeMounts:  # 将logs-volume挂在到nginx容器中，对应的目录为 /var/log/nginx\r
    - name: logs-volume\r
      mountPath: /var/log/nginx\r
  - name: busybox\r
    image: busybox:1.30\r
    command: ["/bin/sh","-c","tail -f /logs/access.log"] # 初始命令，动态读取指定文件中内容\r
    volumeMounts:  # 将logs-volume 挂在到busybox容器中，对应的目录为 /logs\r
    - name: logs-volume\r
      mountPath: /logs\r
  volumes: # 声明volume， name为logs-volume，类型为emptyDir\r
  - name: logs-volume\r
    emptyDir: {}\r
~~~\r
\r
~~~powershell\r
# 创建Pod\r
[root@master ~]# kubectl create -f volume-emptydir.yaml\r
pod/volume-emptydir created\r
\r
# 查看pod\r
[root@master ~]# kubectl get pods volume-emptydir -n dev -o wide\r
NAME                  READY   STATUS    RESTARTS   AGE   IP             NODE   ...... \r
volume-emptydir   2/2     Running   0          97s   10.244.1.100   node1  ......\r
\r
# 通过podIp访问nginx\r
[root@master ~]# curl 10.244.1.100\r
......\r
\r
# 通过kubectl logs命令查看指定容器的标准输出\r
[root@master ~]# kubectl logs -f volume-emptydir -n dev -c busybox\r
10.244.0.0 - - [13/Apr/2020:10:58:47 +0000] "GET / HTTP/1.1" 200 612 "-" "curl/7.29.0" "-"\r
~~~\r
\r
### HostPath\r
\r
​    上节课提到，EmptyDir中数据不会被持久化，它会随着Pod的结束而销毁，如果想简单的将数据持久化到主机中，可以选择HostPath。\r
\r
​    HostPath就是将Node主机中一个实际目录挂在到Pod中，以供容器使用，这样的设计就可以保证Pod销毁了，但是数据依据可以存在于Node主机上。\r
\r
![image-20240418103940343](https://s2.loli.net/2024/04/18/inlydU4LQ1X37uW.png)\r
\r
创建一个volume-hostpath.yaml：\r
\r
~~~yaml\r
apiVersion: v1\r
kind: Pod\r
metadata:\r
  name: volume-hostpath\r
  namespace: dev\r
spec:\r
  containers:\r
  - name: nginx\r
    image: nginx:1.17.1\r
    ports:\r
    - containerPort: 80\r
    volumeMounts:\r
    - name: logs-volume\r
      mountPath: /var/log/nginx\r
  - name: busybox\r
    image: busybox:1.30\r
    command: ["/bin/sh","-c","tail -f /logs/access.log"]\r
    volumeMounts:\r
    - name: logs-volume\r
      mountPath: /logs\r
  volumes:\r
  - name: logs-volume\r
    hostPath: \r
      path: /root/logs\r
      type: DirectoryOrCreate  # 目录存在就使用，不存在就先创建后使用\r
~~~\r
\r
~~~markdown\r
关于type的值的一点说明：\r
	DirectoryOrCreate 目录存在就使用，不存在就先创建后使用\r
	Directory	目录必须存在\r
	FileOrCreate  文件存在就使用，不存在就先创建后使用\r
	File 文件必须存在	\r
    Socket	unix套接字必须存在\r
	CharDevice	字符设备必须存在\r
	BlockDevice 块设备必须存在\r
~~~\r
\r
~~~powershell\r
# 创建Pod\r
[root@master ~]# kubectl create -f volume-hostpath.yaml\r
pod/volume-hostpath created\r
\r
# 查看Pod\r
[root@master ~]# kubectl get pods volume-hostpath -n dev -o wide\r
NAME                  READY   STATUS    RESTARTS   AGE   IP             NODE   ......\r
pod-volume-hostpath   2/2     Running   0          16s   10.244.1.104   node1  ......\r
\r
#访问nginx\r
[root@master ~]# curl 10.244.1.104\r
\r
# 接下来就可以去host的/root/logs目录下查看存储的文件了\r
###  注意: 下面的操作需要到Pod所在的节点运行（案例中是node1）\r
[root@node1 ~]# ls /root/logs/\r
access.log  error.log\r
\r
# 同样的道理，如果在此目录下创建一个文件，到容器中也是可以看到的\r
~~~\r
\r
### NFS\r
\r
​    HostPath可以解决数据持久化的问题，但是一旦Node节点故障了，Pod如果转移到了别的节点，又会出现问题了，此时需要准备单独的网络存储系统，比较常用的用NFS、CIFS。\r
\r
​    NFS是一个网络文件存储系统，可以搭建一台NFS服务器，然后将Pod中的存储直接连接到NFS系统上，这样的话，无论Pod在节点上怎么转移，只要Node跟NFS的对接没问题，数据就可以成功访问。\r
\r
<img src="https://s2.loli.net/2024/04/18/YVPdKXUnl3mqwa1.png" style="zoom:100%;border:1px solid" />\r
\r
1）首先要准备nfs的服务器，这里为了简单，直接是master节点做nfs服务器\r
\r
~~~powershell\r
# 在master上安装nfs服务\r
[root@master ~]# yum install nfs-utils -y\r
\r
# 准备一个共享目录\r
[root@master ~]# mkdir /root/data/nfs -pv\r
\r
# 将共享目录以读写权限暴露给192.168.109.0/24网段中的所有主机\r
[root@master ~]# vim /etc/exports\r
[root@master ~]# more /etc/exports\r
/root/data/nfs     192.168.109.0/24(rw,no_root_squash)\r
\r
# 启动nfs服务\r
[root@master ~]# systemctl start nfs\r
~~~\r
\r
2）接下来，要在的每个node节点上都安装下nfs，这样的目的是为了node节点可以驱动nfs设备\r
\r
~~~powershell\r
# 在node上安装nfs服务，注意不需要启动\r
[root@master ~]# yum install nfs-utils -y\r
~~~\r
\r
3）接下来，就可以编写pod的配置文件了，创建volume-nfs.yaml\r
\r
~~~yaml\r
apiVersion: v1\r
kind: Pod\r
metadata:\r
  name: volume-nfs\r
  namespace: dev\r
spec:\r
  containers:\r
  - name: nginx\r
    image: nginx:1.17.1\r
    ports:\r
    - containerPort: 80\r
    volumeMounts:\r
    - name: logs-volume\r
      mountPath: /var/log/nginx\r
  - name: busybox\r
    image: busybox:1.30\r
    command: ["/bin/sh","-c","tail -f /logs/access.log"] \r
    volumeMounts:\r
    - name: logs-volume\r
      mountPath: /logs\r
  volumes:\r
  - name: logs-volume\r
    nfs:\r
      server: 192.168.109.100  #nfs服务器地址\r
      path: /root/data/nfs #共享文件路径\r
~~~\r
\r
4）最后，运行下pod，观察结果\r
\r
~~~powershell\r
# 创建pod\r
[root@master ~]# kubectl create -f volume-nfs.yaml\r
pod/volume-nfs created\r
\r
# 查看pod\r
[root@master ~]# kubectl get pods volume-nfs -n dev\r
NAME                  READY   STATUS    RESTARTS   AGE\r
volume-nfs        2/2     Running   0          2m9s\r
\r
# 查看nfs服务器上的共享目录，发现已经有文件了\r
[root@master ~]# ls /root/data/\r
access.log  error.log\r
~~~\r
\r
##高级存储\r
\r
### PV和PVC\r
\r
​    前面已经学习了使用NFS提供存储，此时就要求用户会搭建NFS系统，并且会在yaml配置nfs。由于kubernetes支持的存储系统有很多，要求客户全都掌握，显然不现实。为了能够屏蔽底层存储实现的细节，方便用户使用， kubernetes引入PV和PVC两种资源对象。\r
\r
​    PV（Persistent Volume）是持久化卷的意思，是对底层的共享存储的一种抽象。一般情况下PV由kubernetes管理员进行创建和配置，它与底层具体的共享存储技术有关，并通过插件完成与共享存储的对接。\r
\r
​    PVC（Persistent Volume Claim）是持久卷声明的意思，是用户对于存储需求的一种声明。换句话说，PVC其实就是用户向kubernetes系统发出的一种资源需求申请。\r
\r
<img src="https://s2.loli.net/2024/04/18/oxj4V6KyYUP1bum.png" style="zoom:100%;border:1px solid" />\r
\r
使用了PV和PVC之后，工作可以得到进一步的细分：\r
\r
- 存储：存储工程师维护\r
- PV：  kubernetes管理员维护\r
- PVC：kubernetes用户维护\r
\r
### PV\r
\r
PV是存储资源的抽象，下面是资源清单文件:\r
\r
~~~yaml\r
apiVersion: v1  \r
kind: PersistentVolume\r
metadata:\r
  name: pv2\r
spec:\r
  nfs: # 存储类型，与底层真正存储对应\r
  capacity:  # 存储能力，目前只支持存储空间的设置\r
    storage: 2Gi\r
  accessModes:  # 访问模式\r
  storageClassName: # 存储类别\r
  persistentVolumeReclaimPolicy: # 回收策略\r
~~~\r
\r
PV 的关键配置参数说明：\r
\r
- **存储类型**\r
\r
  底层实际存储的类型，kubernetes支持多种存储类型，每种存储类型的配置都有所差异\r
\r
- **存储能力（capacity）**\r
\r
​      目前只支持存储空间的设置( storage=1Gi )，不过未来可能会加入IOPS、吞吐量等指标的配置\r
\r
- **访问模式（accessModes）**\r
\r
  用于描述用户应用对存储资源的访问权限，访问权限包括下面几种方式：\r
\r
  - ReadWriteOnce（RWO）：读写权限，但是只能被单个节点挂载\r
  - ReadOnlyMany（ROX）：  只读权限，可以被多个节点挂载\r
  - ReadWriteMany（RWX）：读写权限，可以被多个节点挂载\r
\r
  \`需要注意的是，底层不同的存储类型可能支持的访问模式不同\`\r
\r
- **回收策略（persistentVolumeReclaimPolicy）**\r
\r
  当PV不再被使用了之后，对其的处理方式。目前支持三种策略：\r
\r
  - Retain  （保留）  保留数据，需要管理员手工清理数据\r
  - Recycle（回收）  清除 PV 中的数据，效果相当于执行 rm -rf /thevolume/*\r
  - Delete  （删除） 与 PV 相连的后端存储完成 volume 的删除操作，当然这常见于云服务商的存储服务\r
\r
  \`需要注意的是，底层不同的存储类型可能支持的回收策略不同\`\r
\r
- **存储类别**\r
\r
  PV可以通过storageClassName参数指定一个存储类别\r
\r
  - 具有特定类别的PV只能与请求了该类别的PVC进行绑定\r
\r
  - 未设定类别的PV则只能与不请求任何类别的PVC进行绑定\r
\r
- **状态（status）**\r
\r
  一个 PV 的生命周期中，可能会处于4中不同的阶段：\r
\r
  - Available（可用）：     表示可用状态，还未被任何 PVC 绑定\r
  - Bound（已绑定）：     表示 PV 已经被 PVC 绑定\r
  - Released（已释放）： 表示 PVC 被删除，但是资源还未被集群重新声明\r
  - Failed（失败）：         表示该 PV 的自动回收失败\r
\r
**实验**\r
\r
使用NFS作为存储，来演示PV的使用，创建3个PV，对应NFS中的3个暴露的路径。\r
\r
1) 准备NFS环境\r
\r
~~~powershell\r
# 创建目录\r
[root@master ~]# mkdir /root/data/{pv1,pv2,pv3} -pv\r
\r
# 暴露服务\r
[root@master ~]# more /etc/exports\r
/root/data/pv1     192.168.109.0/24(rw,no_root_squash)\r
/root/data/pv2     192.168.109.0/24(rw,no_root_squash)\r
/root/data/pv3     192.168.109.0/24(rw,no_root_squash)\r
\r
# 重启服务\r
[root@master ~]#  systemctl restart nfs\r
~~~\r
\r
2) 创建pv.yaml\r
\r
~~~yaml\r
apiVersion: v1\r
kind: PersistentVolume\r
metadata:\r
  name:  pv1\r
spec:\r
  capacity: \r
    storage: 1Gi\r
  accessModes:\r
  - ReadWriteMany\r
  persistentVolumeReclaimPolicy: Retain\r
  nfs:\r
    path: /root/data/pv1\r
    server: 192.168.109.100\r
\r
`,title:"创建pv",date:"2024-04-18 15:15:33"}},{route:"/K8S/第六章 Pod控制器详解.html",meta:{description:`# 第六章 Pod控制器详解\r
\r
本章节主要介绍各种Pod控制器的详细使用。\r
\r
## Pod控制器介绍\r
\r
Pod是kubernetes的最小管理单元，在kubernetes中，按照pod的创建方式可以将其分为两类：\r
\r
- 自主式pod：kubernetes直接创建出来的Pod，这种pod删除后就没有了，也不会重建\r
\r
- 控制器创建的pod：kubernetes通过控制器创建的pod，这种pod删除了之后还会自动重建       \r
\r
> **\`什么是Pod控制器\`** \r
>\r
> ​    Pod控制器是管理pod的中间层，使用Pod控制器之后，只需要告诉Pod控制器，想要多少个什么样的Pod就可以了，它会创建出满足条件的Pod并确保每一个Pod资源处于用户期望的目标状态。如果Pod资源在运行中出现故障，它会基于指定策略重新编排Pod。\r
\r
在kubernetes中，有很多类型的pod控制器，每种都有自己的适合的场景，常见的有下面这些：\r
\r
- ReplicationController：比较原始的pod控制器，已经被废弃，由ReplicaSet替代\r
\r
- ReplicaSet：保证副本数量一直维持在期望值，并支持pod数量扩缩容，镜像版本升级\r
\r
- Deployment：通过控制ReplicaSet来控制Pod，并支持滚动升级、回退版本\r
\r
- Horizontal Pod Autoscaler：可以根据集群负载自动水平调整Pod的数量，实现削峰填谷\r
\r
- DaemonSet：在集群中的指定Node上运行且仅运行一个副本，一般用于守护进程类的任务\r
\r
- Job：它创建出来的pod只要完成任务就立即退出，不需要重启或重建，用于执行一次性任务\r
\r
- Cronjob：它创建的Pod负责周期性任务控制，不需要持续后台运行\r
\r
- StatefulSet：管理有状态应用\r
\r
## ReplicaSet(RS)\r
\r
​    ReplicaSet的主要作用是**保证一定数量的pod正常运行**，它会持续监听这些Pod的运行状态，一旦Pod发生故障，就会重启或重建。同时它还支持对pod数量的扩缩容和镜像版本的升降级。\r
\r
![](https://s2.loli.net/2024/04/18/zFCPqZtU9Km1R6I.png)\r
\r
ReplicaSet的资源清单文件：\r
\r
~~~yaml\r
apiVersion: apps/v1 # 版本号\r
kind: ReplicaSet # 类型       \r
metadata: # 元数据\r
  name: # rs名称 \r
  namespace: # 所属命名空间 \r
  labels: #标签\r
    controller: rs\r
spec: # 详情描述\r
  replicas: 3 # 副本数量\r
  selector: # 选择器，通过它指定该控制器管理哪些pod\r
    matchLabels:      # Labels匹配规则\r
      app: nginx-pod\r
    matchExpressions: # Expressions匹配规则\r
      - {key: app, operator: In, values: [nginx-pod]}\r
  template: # 模板，当副本数量不足时，会根据下面的模板创建pod副本\r
    metadata:\r
      labels:\r
        app: nginx-pod\r
    spec:\r
      containers:\r
      - name: nginx\r
        image: nginx:1.17.1\r
        ports:\r
        - containerPort: 80\r
~~~\r
\r
在这里面，需要新了解的配置项就是\`spec\`下面几个选项：\r
\r
- replicas：指定副本数量，其实就是当前rs创建出来的pod的数量，默认为1\r
\r
- selector：选择器，它的作用是建立pod控制器和pod之间的关联关系，采用的Label Selector机制\r
\r
  ​               在pod模板上定义label，在控制器上定义选择器，就可以表明当前控制器能管理哪些pod了\r
\r
- template：模板，就是当前控制器创建pod所使用的模板板，里面其实就是前一章学过的pod的定义\r
\r
**创建ReplicaSet**\r
\r
创建pc-replicaset.yaml文件，内容如下：\r
\r
~~~yaml\r
apiVersion: apps/v1\r
kind: ReplicaSet   \r
metadata:\r
  name: pc-replicaset\r
  namespace: dev\r
spec:\r
  replicas: 3\r
  selector: \r
    matchLabels:\r
      app: nginx-pod\r
  template:\r
    metadata:\r
      labels:\r
        app: nginx-pod\r
    spec:\r
      containers:\r
      - name: nginx\r
        image: nginx:1.17.1\r
~~~\r
\r
~~~powershell\r
# 创建rs\r
[root@master ~]# kubectl create -f pc-replicaset.yaml\r
replicaset.apps/pc-replicaset created\r
\r
# 查看rs\r
# DESIRED:期望副本数量  \r
# CURRENT:当前副本数量  \r
# READY:已经准备好提供服务的副本数量\r
[root@master ~]# kubectl get rs pc-replicaset -n dev -o wide\r
NAME          DESIRED   CURRENT READY AGE   CONTAINERS   IMAGES             SELECTOR\r
pc-replicaset 3         3       3     22s   nginx        nginx:1.17.1       app=nginx-pod\r
\r
# 查看当前控制器创建出来的pod\r
# 这里发现控制器创建出来的pod的名称是在控制器名称后面拼接了-xxxxx随机码\r
[root@master ~]# kubectl get pod -n dev\r
NAME                          READY   STATUS    RESTARTS   AGE\r
pc-replicaset-6vmvt   1/1     Running   0          54s\r
pc-replicaset-fmb8f   1/1     Running   0          54s\r
pc-replicaset-snrk2   1/1     Running   0          54s\r
~~~\r
\r
**扩缩容**\r
\r
~~~powershell\r
# 编辑rs的副本数量，修改spec:replicas: 6即可\r
[root@master ~]# kubectl edit rs pc-replicaset -n dev\r
replicaset.apps/pc-replicaset edited\r
\r
# 查看pod\r
[root@master ~]# kubectl get pods -n dev\r
NAME                          READY   STATUS    RESTARTS   AGE\r
pc-replicaset-6vmvt   1/1     Running   0          114m\r
pc-replicaset-cftnp   1/1     Running   0          10s\r
pc-replicaset-fjlm6   1/1     Running   0          10s\r
pc-replicaset-fmb8f   1/1     Running   0          114m\r
pc-replicaset-s2whj   1/1     Running   0          10s\r
pc-replicaset-snrk2   1/1     Running   0          114m\r
\r
# 当然也可以直接使用命令实现\r
# 使用scale命令实现扩缩容， 后面--replicas=n直接指定目标数量即可\r
[root@master ~]# kubectl scale rs pc-replicaset --replicas=2 -n dev\r
replicaset.apps/pc-replicaset scaled\r
\r
# 命令运行完毕，立即查看，发现已经有4个开始准备退出了\r
[root@master ~]# kubectl get pods -n dev\r
NAME                       READY   STATUS        RESTARTS   AGE\r
pc-replicaset-6vmvt   0/1     Terminating   0          118m\r
pc-replicaset-cftnp   0/1     Terminating   0          4m17s\r
pc-replicaset-fjlm6   0/1     Terminating   0          4m17s\r
pc-replicaset-fmb8f   1/1     Running       0          118m\r
pc-replicaset-s2whj   0/1     Terminating   0          4m17s\r
pc-replicaset-snrk2   1/1     Running       0          118m\r
\r
#稍等片刻，就只剩下2个了\r
[root@master ~]# kubectl get pods -n dev\r
NAME                       READY   STATUS    RESTARTS   AGE\r
pc-replicaset-fmb8f   1/1     Running   0          119m\r
pc-replicaset-snrk2   1/1     Running   0          119m\r
~~~\r
\r
**镜像升级**\r
\r
~~~powershell\r
# 编辑rs的容器镜像 - image: nginx:1.17.2\r
[root@master ~]# kubectl edit rs pc-replicaset -n dev\r
replicaset.apps/pc-replicaset edited\r
\r
# 再次查看，发现镜像版本已经变更了\r
[root@master ~]# kubectl get rs -n dev -o wide\r
NAME                DESIRED  CURRENT   READY   AGE    CONTAINERS   IMAGES        ...\r
pc-replicaset       2        2         2       140m   nginx         nginx:1.17.2  ...\r
\r
# 同样的道理，也可以使用命令完成这个工作\r
# kubectl set image rs rs名称 容器=镜像版本 -n namespace\r
[root@master ~]# kubectl set image rs pc-replicaset nginx=nginx:1.17.1  -n dev\r
replicaset.apps/pc-replicaset image updated\r
\r
# 再次查看，发现镜像版本已经变更了\r
[root@master ~]# kubectl get rs -n dev -o wide\r
NAME                 DESIRED  CURRENT   READY   AGE    CONTAINERS   IMAGES            ...\r
pc-replicaset        2        2         2       145m   nginx        nginx:1.17.1 ... \r
~~~\r
\r
**删除ReplicaSet**\r
\r
~~~powershell\r
# 使用kubectl delete命令会删除此RS以及它管理的Pod\r
# 在kubernetes删除RS前，会将RS的replicasclear调整为0，等待所有的Pod被删除后，在执行RS对象的删除\r
[root@master ~]# kubectl delete rs pc-replicaset -n dev\r
replicaset.apps "pc-replicaset" deleted\r
[root@master ~]# kubectl get pod -n dev -o wide\r
No resources found in dev namespace.\r
\r
# 如果希望仅仅删除RS对象（保留Pod），可以使用kubectl delete命令时添加--cascade=false选项（不推荐）。\r
[root@master ~]# kubectl delete rs pc-replicaset -n dev --cascade=false\r
replicaset.apps "pc-replicaset" deleted\r
[root@master ~]# kubectl get pods -n dev\r
NAME                  READY   STATUS    RESTARTS   AGE\r
pc-replicaset-cl82j   1/1     Running   0          75s\r
pc-replicaset-dslhb   1/1     Running   0          75s\r
\r
# 也可以使用yaml直接删除(推荐)\r
[root@master ~]# kubectl delete -f pc-replicaset.yaml\r
replicaset.apps "pc-replicaset" deleted\r
~~~\r
\r
## Deployment(Deploy)\r
\r
​    为了更好的解决服务编排的问题，kubernetes在V1.2版本开始，引入了Deployment控制器。值得一提的是，这种控制器并不直接管理pod，而是通过管理ReplicaSet来简介管理Pod，即：Deployment管理ReplicaSet，ReplicaSet管理Pod。所以Deployment比ReplicaSet功能更加强大。\r
\r
![](https://s2.loli.net/2024/04/18/Lh1n5SOwTVAgFra.png)\r
\r
Deployment主要功能有下面几个：\r
\r
- 支持ReplicaSet的所有功能\r
- 支持发布的停止、继续\r
- 支持滚动升级和回滚版本\r
\r
Deployment的资源清单文件：\r
\r
~~~yaml\r
apiVersion: apps/v1 # 版本号\r
kind: Deployment # 类型       \r
metadata: # 元数据\r
  name: # rs名称 \r
  namespace: # 所属命名空间 \r
  labels: #标签\r
    controller: deploy\r
spec: # 详情描述\r
  replicas: 3 # 副本数量\r
  revisionHistoryLimit: 3 # 保留历史版本\r
  paused: false # 暂停部署，默认是false\r
  progressDeadlineSeconds: 600 # 部署超时时间（s），默认是600\r
  strategy: # 策略\r
    type: RollingUpdate # 滚动更新策略\r
    rollingUpdate: # 滚动更新\r
      maxSurge: 30% # 最大额外可以存在的副本数，可以为百分比，也可以为整数\r
      maxUnavailable: 30% # 最大不可用状态的 Pod 的最大值，可以为百分比，也可以为整数\r
  selector: # 选择器，通过它指定该控制器管理哪些pod\r
    matchLabels:      # Labels匹配规则\r
      app: nginx-pod\r
    matchExpressions: # Expressions匹配规则\r
      - {key: app, operator: In, values: [nginx-pod]}\r
  template: # 模板，当副本数量不足时，会根据下面的模板创建pod副本\r
    metadata:\r
      labels:\r
        app: nginx-pod\r
    spec:\r
      containers:\r
      - name: nginx\r
        image: nginx:1.17.1\r
        ports:\r
        - containerPort: 80\r
~~~\r
\r
**创建deployment**\r
\r
创建pc-deployment.yaml，内容如下：\r
\r
~~~yaml\r
apiVersion: apps/v1\r
kind: Deployment      \r
metadata:\r
  name: pc-deployment\r
  namespace: dev\r
spec: \r
  replicas: 3\r
  selector:\r
    matchLabels:\r
      app: nginx-pod\r
  template:\r
    metadata:\r
      labels:\r
        app: nginx-pod\r
    spec:\r
      containers:\r
      - name: nginx\r
        image: nginx:1.17.1\r
~~~\r
\r
~~~powershell\r
# 创建deployment\r
[root@master ~]# kubectl create -f pc-deployment.yaml --record=true\r
deployment.apps/pc-deployment created\r
\r
# 查看deployment\r
# UP-TO-DATE 最新版本的pod的数量\r
# AVAILABLE  当前可用的pod的数量\r
[root@master ~]# kubectl get deploy pc-deployment -n dev\r
NAME            READY   UP-TO-DATE   AVAILABLE   AGE\r
pc-deployment   3/3     3            3           15s\r
\r
# 查看rs\r
# 发现rs的名称是在原来deployment的名字后面添加了一个10位数的随机串\r
[root@master ~]# kubectl get rs -n dev\r
NAME                       DESIRED   CURRENT   READY   AGE\r
pc-deployment-6696798b78   3         3         3       23s\r
\r
# 查看pod\r
[root@master ~]# kubectl get pods -n dev\r
NAME                             READY   STATUS    RESTARTS   AGE\r
pc-deployment-6696798b78-d2c8n   1/1     Running   0          107s\r
pc-deployment-6696798b78-smpvp   1/1     Running   0          107s\r
pc-deployment-6696798b78-wvjd8   1/1     Running   0          107s\r
~~~\r
\r
**扩缩容**\r
\r
~~~powershell\r
# 变更副本数量为5个\r
[root@master ~]# kubectl scale deploy pc-deployment --replicas=5  -n dev\r
deployment.apps/pc-deployment scaled\r
\r
# 查看deployment\r
[root@master ~]# kubectl get deploy pc-deployment -n dev\r
NAME            READY   UP-TO-DATE   AVAILABLE   AGE\r
pc-deployment   5/5     5            5           2m\r
\r
# 查看pod\r
[root@master ~]#  kubectl get pods -n dev\r
NAME                             READY   STATUS    RESTARTS   AGE\r
pc-deployment-6696798b78-d2c8n   1/1     Running   0          4m19s\r
pc-deployment-6696798b78-jxmdq   1/1     Running   0          94s\r
pc-deployment-6696798b78-mktqv   1/1     Running   0          93s\r
pc-deployment-6696798b78-smpvp   1/1     Running   0          4m19s\r
pc-deployment-6696798b78-wvjd8   1/1     Running   0          4m19s\r
\r
# 编辑deployment的副本数量，修改spec:replicas: 4即可\r
[root@master ~]# kubectl edit deploy pc-deployment -n dev\r
deployment.apps/pc-deployment edited\r
\r
# 查看pod\r
[root@master ~]# kubectl get pods -n dev\r
NAME                             READY   STATUS    RESTARTS   AGE\r
pc-deployment-6696798b78-d2c8n   1/1     Running   0          5m23s\r
pc-deployment-6696798b78-jxmdq   1/1     Running   0          2m38s\r
pc-deployment-6696798b78-smpvp   1/1     Running   0          5m23s\r
pc-deployment-6696798b78-wvjd8   1/1     Running   0          5m23s\r
~~~\r
\r
**镜像更新**\r
\r
deployment支持两种更新策略:\`重建更新\`和\`滚动更新\`,可以通过\`strategy\`指定策略类型,支持两个属性:\r
\r
~~~markdown\r
strategy：指定新的Pod替换旧的Pod的策略， 支持两个属性：\r
  type：指定策略类型，支持两种策略\r
    Recreate：在创建出新的Pod之前会先杀掉所有已存在的Pod\r
    RollingUpdate：滚动更新，就是杀死一部分，就启动一部分，在更新过程中，存在两个版本Pod\r
  rollingUpdate：当type为RollingUpdate时生效，用于为RollingUpdate设置参数，支持两个属性：\r
    maxUnavailable：用来指定在升级过程中不可用Pod的最大数量，默认为25%。\r
    maxSurge： 用来指定在升级过程中可以超过期望的Pod的最大数量，默认为25%。\r
~~~\r
\r
重建更新\r
\r
1) 编辑pc-deployment.yaml,在spec节点下添加更新策略\r
\r
~~~yaml\r
spec:\r
  strategy: # 策略\r
    type: Recreate # 重建更新\r
~~~\r
\r
2) 创建deploy进行验证\r
\r
~~~powershell\r
# 变更镜像\r
[root@master ~]# kubectl set image deployment pc-deployment nginx=nginx:1.17.2 -n dev\r
deployment.apps/pc-deployment image updated\r
\r
# 观察升级过程\r
[root@master ~]#  kubectl get pods -n dev -w\r
NAME                             READY   STATUS    RESTARTS   AGE\r
pc-deployment-5d89bdfbf9-65qcw   1/1     Running   0          31s\r
pc-deployment-5d89bdfbf9-w5nzv   1/1     Running   0          31s\r
pc-deployment-5d89bdfbf9-xpt7w   1/1     Running   0          31s\r
\r
pc-deployment-5d89bdfbf9-xpt7w   1/1     Terminating   0          41s\r
pc-deployment-5d89bdfbf9-65qcw   1/1     Terminating   0          41s\r
pc-deployment-5d89bdfbf9-w5nzv   1/1     Terminating   0          41s\r
\r
pc-deployment-675d469f8b-grn8z   0/1     Pending       0          0s\r
pc-deployment-675d469f8b-hbl4v   0/1     Pending       0          0s\r
pc-deployment-675d469f8b-67nz2   0/1     Pending       0          0s\r
\r
pc-deployment-675d469f8b-grn8z   0/1     ContainerCreating   0          0s\r
pc-deployment-675d469f8b-hbl4v   0/1     ContainerCreating   0          0s\r
pc-deployment-675d469f8b-67nz2   0/1     ContainerCreating   0          0s\r
\r
pc-deployment-675d469f8b-grn8z   1/1     Running             0          1s\r
pc-deployment-675d469f8b-67nz2   1/1     Running             0          1s\r
pc-deployment-675d469f8b-hbl4v   1/1     Running             0          2s\r
~~~\r
\r
滚动更新\r
\r
1) 编辑pc-deployment.yaml,在spec节点下添加更新策略\r
\r
~~~yaml\r
spec:\r
  strategy: # 策略\r
    type: RollingUpdate # 滚动更新策略\r
    rollingUpdate:\r
      maxSurge: 25% \r
      maxUnavailable: 25%\r
~~~\r
\r
2) 创建deploy进行验证\r
\r
~~~powershell\r
# 变更镜像\r
[root@master ~]# kubectl set image deployment pc-deployment nginx=nginx:1.17.3 -n dev\r
deployment.apps/pc-deployment image updated\r
\r
# 观察升级过程\r
[root@master ~]# kubectl get pods -n dev -w\r
NAME                           READY   STATUS    RESTARTS   AGE\r
pc-deployment-c848d767-8rbzt   1/1     Running   0          31m\r
pc-deployment-c848d767-h4p68   1/1     Running   0          31m\r
pc-deployment-c848d767-hlmz4   1/1     Running   0          31m\r
pc-deployment-c848d767-rrqcn   1/1     Running   0          31m\r
\r
pc-deployment-966bf7f44-226rx   0/1     Pending             0          0s\r
pc-deployment-966bf7f44-226rx   0/1     ContainerCreating   0          0s\r
pc-deployment-966bf7f44-226rx   1/1     Running             0          1s\r
pc-deployment-c848d767-h4p68    0/1     Terminating         0          34m\r
\r
pc-deployment-966bf7f44-cnd44   0/1     Pending             0          0s\r
pc-deployment-966bf7f44-cnd44   0/1     ContainerCreating   0          0s\r
pc-deployment-966bf7f44-cnd44   1/1     Running             0          2s\r
pc-deployment-c848d767-hlmz4    0/1     Terminating         0          34m\r
\r
pc-deployment-966bf7f44-px48p   0/1     Pending             0          0s\r
pc-deployment-966bf7f44-px48p   0/1     ContainerCreating   0          0s\r
pc-deployment-966bf7f44-px48p   1/1     Running             0          0s\r
pc-deployment-c848d767-8rbzt    0/1     Terminating         0          34m\r
\r
pc-deployment-966bf7f44-dkmqp   0/1     Pending             0          0s\r
pc-deployment-966bf7f44-dkmqp   0/1     ContainerCreating   0          0s\r
pc-deployment-966bf7f44-dkmqp   1/1     Running             0          2s\r
pc-deployment-c848d767-rrqcn    0/1     Terminating         0          34m\r
\r
# 至此，新版本的pod创建完毕，就版本的pod销毁完毕\r
# 中间过程是滚动进行的，也就是边销毁边创建\r
~~~\r
\r
滚动更新的过程：\r
\r
<img src="https://s2.loli.net/2024/04/18/TBKfiEsgQOHaIWc.png" style="zoom:150%;border:1px solid" />\r
\r
镜像更新中rs的变化:\r
\r
~~~powershell\r
# 查看rs,发现原来的rs的依旧存在，只是pod数量变为了0，而后又新产生了一个rs，pod数量为4\r
# 其实这就是deployment能够进行版本回退的奥妙所在，后面会详细解释\r
[root@master ~]# kubectl get rs -n dev\r
NAME                       DESIRED   CURRENT   READY   AGE\r
pc-deployment-6696798b78   0         0         0       7m37s\r
pc-deployment-6696798b11   0         0         0       5m37s\r
pc-deployment-c848d76789   4         4         4       72s\r
~~~\r
\r
**版本回退**\r
\r
deployment支持版本升级过程中的暂停、继续功能以及版本回退等诸多功能，下面具体来看.\r
\r
kubectl rollout： 版本升级相关功能，支持下面的选项：\r
\r
- status       显示当前升级状态\r
- history     显示 升级历史记录\r
\r
- pause       暂停版本升级过程\r
- resume    继续已经暂停的版本升级过程\r
- restart      重启版本升级过程\r
- undo        回滚到上一级版本（可以使用--to-revision回滚到指定版本）\r
\r
~~~powershell\r
# 查看当前升级版本的状态\r
[root@master ~]# kubectl rollout status deploy pc-deployment -n dev\r
deployment "pc-deployment" successfully rolled out\r
\r
# 查看升级历史记录\r
[root@master ~]# kubectl rollout history deploy pc-deployment -n dev\r
deployment.apps/pc-deployment\r
REVISION  CHANGE-CAUSE\r
1         kubectl create --filename=pc-deployment.yaml --record=true\r
2         kubectl create --filename=pc-deployment.yaml --record=true\r
3         kubectl create --filename=pc-deployment.yaml --record=true\r
# 可以发现有三次版本记录，说明完成过两次升级\r
\r
# 版本回滚\r
# 这里直接使用--to-revision=1回滚到了1版本， 如果省略这个选项，就是回退到上个版本，就是2版本\r
[root@master ~]# kubectl rollout undo deployment pc-deployment --to-revision=1 -n dev\r
deployment.apps/pc-deployment rolled back\r
\r
# 查看发现，通过nginx镜像版本可以发现到了第一版\r
[root@master ~]# kubectl get deploy -n dev -o wide\r
NAME            READY   UP-TO-DATE   AVAILABLE   AGE   CONTAINERS   IMAGES         \r
pc-deployment   4/4     4            4           74m   nginx        nginx:1.17.1   \r
\r
# 查看rs，发现第一个rs中有4个pod运行，后面两个版本的rs中pod为运行\r
# 其实deployment之所以可是实现版本的回滚，就是通过记录下历史rs来实现的，\r
# 一旦想回滚到哪个版本，只需要将当前版本pod数量降为0，然后将回滚版本的pod提升为目标数量就可以了\r
[root@master ~]# kubectl get rs -n dev\r
NAME                       DESIRED   CURRENT   READY   AGE\r
pc-deployment-6696798b78   4         4         4       78m\r
pc-deployment-966bf7f44    0         0         0       37m\r
pc-deployment-c848d767     0         0         0       71m\r
~~~\r
\r
**金丝雀发布**\r
\r
​    Deployment控制器支持控制更新过程中的控制，如“暂停(pause)”或“继续(resume)”更新操作。\r
\r
​    比如有一批新的Pod资源创建完成后立即暂停更新过程，此时，仅存在一部分新版本的应用，主体部分还是旧的版本。然后，再筛选一小部分的用户请求路由到新版本的Pod应用，继续观察能否稳定地按期望的方式运行。确定没问题之后再继续完成余下的Pod资源滚动更新，否则立即回滚更新操作。这就是所谓的金丝雀发布。\r
\r
\`\`\`powershell\r
# 更新deployment的版本，并配置暂停deployment\r
[root@master ~]#  kubectl set image deploy pc-deployment nginx=nginx:1.17.4 -n dev && kubectl rollout pause deployment pc-deployment  -n dev\r
deployment.apps/pc-deployment image updated\r
deployment.apps/pc-deployment paused\r
\r
#观察更新状态\r
[root@master ~]# kubectl rollout status deploy pc-deployment -n dev　\r
Waiting for deployment "pc-deployment" rollout to finish: 2 out of 4 new replicas have been updated...\r
\r
# 监控更新的过程，可以看到已经新增了一个资源，但是并未按照预期的状态去删除一个旧的资源，就是因为使用了pause暂停命令\r
\r
[root@master ~]# kubectl get rs -n dev -o wide\r
NAME                       DESIRED   CURRENT   READY   AGE     CONTAINERS   IMAGES         \r
pc-deployment-5d89bdfbf9   3         3         3       19m     nginx        nginx:1.17.1   \r
pc-deployment-675d469f8b   0         0         0       14m     nginx        nginx:1.17.2   \r
pc-deployment-6c9f56fcfb   2         2         2       3m16s   nginx        nginx:1.17.4   \r
[root@master ~]# kubectl get pods -n dev\r
NAME                             READY   STATUS    RESTARTS   AGE\r
pc-deployment-5d89bdfbf9-rj8sq   1/1     Running   0          7m33s\r
pc-deployment-5d89bdfbf9-ttwgg   1/1     Running   0          7m35s\r
pc-deployment-5d89bdfbf9-v4wvc   1/1     Running   0          7m34s\r
pc-deployment-6c9f56fcfb-996rt   1/1     Running   0          3m31s\r
pc-deployment-6c9f56fcfb-j2gtj   1/1     Running   0          3m31s\r
\r
# 确保更新的pod没问题了，继续更新\r
[root@master ~]# kubectl rollout resume deploy pc-deployment -n dev\r
deployment.apps/pc-deployment resumed\r
\r
# 查看最后的更新情况\r
[root@master ~]# kubectl get rs -n dev -o wide\r
NAME                       DESIRED   CURRENT   READY   AGE     CONTAINERS   IMAGES         \r
pc-deployment-5d89bdfbf9   0         0         0       21m     nginx        nginx:1.17.1   \r
pc-deployment-675d469f8b   0         0         0       16m     nginx        nginx:1.17.2   \r
pc-deployment-6c9f56fcfb   4         4         4       5m11s   nginx        nginx:1.17.4   \r
\r
[root@master ~]# kubectl get pods -n dev\r
NAME                             READY   STATUS    RESTARTS   AGE\r
pc-deployment-6c9f56fcfb-7bfwh   1/1     Running   0          37s\r
pc-deployment-6c9f56fcfb-996rt   1/1     Running   0          5m27s\r
pc-deployment-6c9f56fcfb-j2gtj   1/1     Running   0          5m27s\r
pc-deployment-6c9f56fcfb-rf84v   1/1     Running   0          37s\r
\`\`\`\r
\r
**删除Deployment**\r
\r
~~~powershell\r
# 删除deployment，其下的rs和pod也将被删除\r
[root@master ~]# kubectl delete -f pc-deployment.yaml\r
deployment.apps "pc-deployment" deleted\r
~~~\r
\r
## Horizontal Pod Autoscaler(HPA)\r
\r
​    在前面的课程中，我们已经可以实现通过手工执行\`kubectl scale\`命令实现Pod扩容或缩容，但是这显然不符合Kubernetes的定位目标--自动化、智能化。 Kubernetes期望可以实现通过监测Pod的使用情况，实现pod数量的自动调整，于是就产生了Horizontal Pod Autoscaler（HPA）这种控制器。\r
\r
​    HPA可以获取每个Pod利用率，然后和HPA中定义的指标进行对比，同时计算出需要伸缩的具体值，最后实现Pod的数量的调整。其实HPA与之前的Deployment一样，也属于一种Kubernetes资源对象，它通过追踪分析RC控制的所有目标Pod的负载变化情况，来确定是否需要针对性地调整目标Pod的副本数，这是HPA的实现原理。\r
\r
<img src="https://s2.loli.net/2024/04/18/XWOakCj3BALFRTS.png" style="border: 1px solid; zoom: 80%;"/>\r
\r
接下来，我们来做一个实验\r
\r
**1 安装metrics-server**\r
\r
metrics-server可以用来收集集群中的资源使用情况\r
\r
~~~powershell\r
# 安装git\r
[root@master ~]# yum install git -y\r
# 获取metrics-server, 注意使用的版本\r
[root@master ~]# git clone -b v0.3.6 https://github.com/kubernetes-incubator/metrics-server\r
# 修改deployment, 注意修改的是镜像和初始化参数\r
[root@master ~]# cd /root/metrics-server/deploy/1.8+/\r
[root@master 1.8+]# vim metrics-server-deployment.yaml\r
按图中添加下面选项\r
hostNetwork: true\r
image: registry.cn-hangzhou.aliyuncs.com/google_containers/metrics-server-amd64:v0.3.6\r
args:\r
- --kubelet-insecure-tls\r
- --kubelet-preferred-address-types=InternalIP,Hostname,InternalDNS,ExternalDNS,ExternalIP\r
~~~\r
\r
![image-20240418100829037](https://s2.loli.net/2024/04/18/atIWy7T36CvxRPz.png)\r
\r
~~~powershell\r
# 安装metrics-server\r
[root@master 1.8+]# kubectl apply -f ./\r
\r
# 查看pod运行情况\r
[root@master 1.8+]# kubectl get pod -n kube-system\r
metrics-server-6b976979db-2xwbj   1/1     Running   0          90s\r
\r
# 使用kubectl top node 查看资源使用情况\r
[root@master 1.8+]# kubectl top node\r
NAME     CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%\r
master   98m          4%     1067Mi          62%\r
node1    27m          1%     727Mi           42%\r
node2    34m          1%     800Mi           46%\r
[root@master 1.8+]# kubectl top pod -n kube-system\r
NAME                              CPU(cores)   MEMORY(bytes)\r
coredns-6955765f44-7ptsb          3m           9Mi\r
coredns-6955765f44-vcwr5          3m           8Mi\r
etcd-master                       14m          145Mi\r
...\r
# 至此,metrics-server安装完成\r
~~~\r
\r
**2 准备deployment和servie**\r
\r
为了操作简单,直接使用命令\r
\r
~~~powershell\r
# 创建deployment \r
[root@master 1.8+]# kubectl run nginx --image=nginx:latest --requests=cpu=100m -n dev\r
# 创建service\r
[root@master 1.8+]# kubectl expose deployment nginx --type=NodePort --port=80 -n dev\r
\r
# 查看\r
[root@master 1.8+]# kubectl get deployment,pod,svc -n dev\r
NAME                    READY   UP-TO-DATE   AVAILABLE   AGE\r
deployment.apps/nginx   1/1     1            1           47s\r
\r
NAME                         READY   STATUS    RESTARTS   AGE\r
pod/nginx-7df9756ccc-bh8dr   1/1     Running   0          47s\r
\r
NAME            TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE\r
service/nginx   NodePort   10.109.57.248   <none>        80:31136/TCP   35s\r
~~~\r
\r
**3 部署HPA**\r
\r
创建pc-hpa.yaml\r
\r
~~~yaml\r
apiVersion: autoscaling/v1\r
kind: HorizontalPodAutoscaler\r
metadata:\r
  name: pc-hpa\r
  namespace: dev\r
spec:\r
  minReplicas: 1  #最小pod数量\r
  maxReplicas: 10 #最大pod数量\r
  targetCPUUtilizationPercentage: 3 # CPU使用率指标\r
  scaleTargetRef:   # 指定要控制的nginx信息\r
    apiVersion: apps/v1\r
    kind: Deployment  \r
    name: nginx  \r
~~~\r
\r
~~~powershell\r
# 创建hpa\r
[root@master 1.8+]# kubectl create -f pc-hpa.yaml\r
horizontalpodautoscaler.autoscaling/pc-hpa created\r
\r
# 查看hpa\r
[root@master 1.8+]# kubectl get hpa -n dev\r
NAME     REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS   AGE\r
pc-hpa   Deployment/nginx   0%/3%     1         10        1          62s\r
~~~\r
\r
**4 测试**\r
\r
使用压测工具对service地址\`192.168.109.100:31136\`进行压测，然后通过控制台查看hpa和pod的变化\r
\r
\`hpa变化\`\r
\r
~~~powershell\r
[root@master ~]# kubectl get hpa -n dev -w\r
NAME     REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS   AGE\r
pc-hpa   Deployment/nginx   0%/3%     1         10        1          4m11s\r
pc-hpa   Deployment/nginx   0%/3%     1         10        1          5m19s\r
pc-hpa   Deployment/nginx   22%/3%    1         10        1          6m50s\r
pc-hpa   Deployment/nginx   22%/3%    1         10        4          7m5s\r
pc-hpa   Deployment/nginx   22%/3%    1         10        8          7m21s\r
pc-hpa   Deployment/nginx   6%/3%     1         10        8          7m51s\r
pc-hpa   Deployment/nginx   0%/3%     1         10        8          9m6s\r
pc-hpa   Deployment/nginx   0%/3%     1         10        8          13m\r
pc-hpa   Deployment/nginx   0%/3%     1         10        1          14m\r
~~~\r
\r
\`deployment变化\`\r
\r
~~~powershell\r
[root@master ~]# kubectl get deployment -n dev -w\r
NAME    READY   UP-TO-DATE   AVAILABLE   AGE\r
nginx   1/1     1            1           11m\r
nginx   1/4     1            1           13m\r
nginx   1/4     1            1           13m\r
nginx   1/4     1            1           13m\r
nginx   1/4     4            1           13m\r
nginx   1/8     4            1           14m\r
nginx   1/8     4            1           14m\r
nginx   1/8     4            1           14m\r
nginx   1/8     8            1           14m\r
nginx   2/8     8            2           14m\r
nginx   3/8     8            3           14m\r
nginx   4/8     8            4           14m\r
nginx   5/8     8            5           14m\r
nginx   6/8     8            6           14m\r
nginx   7/8     8            7           14m\r
nginx   8/8     8            8           15m\r
nginx   8/1     8            8           20m\r
nginx   8/1     8            8           20m\r
nginx   1/1     1            1           20m\r
~~~\r
\r
\`pod变化\`\r
\r
~~~powershell\r
[root@master ~]# kubectl get pods -n dev -w\r
NAME                     READY   STATUS    RESTARTS   AGE\r
nginx-7df9756ccc-bh8dr   1/1     Running   0          11m\r
nginx-7df9756ccc-cpgrv   0/1     Pending   0          0s\r
nginx-7df9756ccc-8zhwk   0/1     Pending   0          0s\r
nginx-7df9756ccc-rr9bn   0/1     Pending   0          0s\r
nginx-7df9756ccc-cpgrv   0/1     ContainerCreating   0          0s\r
nginx-7df9756ccc-8zhwk   0/1     ContainerCreating   0          0s\r
nginx-7df9756ccc-rr9bn   0/1     ContainerCreating   0          0s\r
nginx-7df9756ccc-m9gsj   0/1     Pending             0          0s\r
nginx-7df9756ccc-g56qb   0/1     Pending             0          0s\r
nginx-7df9756ccc-sl9c6   0/1     Pending             0          0s\r
nginx-7df9756ccc-fgst7   0/1     Pending             0          0s\r
nginx-7df9756ccc-g56qb   0/1     ContainerCreating   0          0s\r
nginx-7df9756ccc-m9gsj   0/1     ContainerCreating   0          0s\r
nginx-7df9756ccc-sl9c6   0/1     ContainerCreating   0          0s\r
nginx-7df9756ccc-fgst7   0/1     ContainerCreating   0          0s\r
nginx-7df9756ccc-8zhwk   1/1     Running             0          19s\r
nginx-7df9756ccc-rr9bn   1/1     Running             0          30s\r
nginx-7df9756ccc-m9gsj   1/1     Running             0          21s\r
nginx-7df9756ccc-cpgrv   1/1     Running             0          47s\r
nginx-7df9756ccc-sl9c6   1/1     Running             0          33s\r
nginx-7df9756ccc-g56qb   1/1     Running             0          48s\r
nginx-7df9756ccc-fgst7   1/1     Running             0          66s\r
nginx-7df9756ccc-fgst7   1/1     Terminating         0          6m50s\r
nginx-7df9756ccc-8zhwk   1/1     Terminating         0          7m5s\r
nginx-7df9756ccc-cpgrv   1/1     Terminating         0          7m5s\r
nginx-7df9756ccc-g56qb   1/1     Terminating         0          6m50s\r
nginx-7df9756ccc-rr9bn   1/1     Terminating         0          7m5s\r
nginx-7df9756ccc-m9gsj   1/1     Terminating         0          6m50s\r
nginx-7df9756ccc-sl9c6   1/1     Terminating         0          6m50s\r
~~~\r
\r
## DaemonSet(DS)\r
\r
​    DaemonSet类型的控制器可以保证在集群中的每一台（或指定）节点上都运行一个副本。一般适用于日志收集、节点监控等场景。也就是说，如果一个Pod提供的功能是节点级别的（每个节点都需要且只需要一个），那么这类Pod就适合使用DaemonSet类型的控制器创建。\r
\r
![](https://s2.loli.net/2024/04/18/sYIokVHwGMA47WZ.png)\r
\r
DaemonSet控制器的特点：\r
\r
- 每当向集群中添加一个节点时，指定的 Pod 副本也将添加到该节点上\r
- 当节点从集群中移除时，Pod 也就被垃圾回收了\r
\r
下面先来看下DaemonSet的资源清单文件\r
\r
~~~yaml\r
apiVersion: apps/v1 # 版本号\r
kind: DaemonSet # 类型       \r
metadata: # 元数据\r
  name: # rs名称 \r
  namespace: # 所属命名空间 \r
  labels: #标签\r
    controller: daemonset\r
spec: # 详情描述\r
  revisionHistoryLimit: 3 # 保留历史版本\r
  updateStrategy: # 更新策略\r
    type: RollingUpdate # 滚动更新策略\r
    rollingUpdate: # 滚动更新\r
      maxUnavailable: 1 # 最大不可用状态的 Pod 的最大值，可以为百分比，也可以为整数\r
  selector: # 选择器，通过它指定该控制器管理哪些pod\r
    matchLabels:      # Labels匹配规则\r
      app: nginx-pod\r
    matchExpressions: # Expressions匹配规则\r
      - {key: app, operator: In, values: [nginx-pod]}\r
  template: # 模板，当副本数量不足时，会根据下面的模板创建pod副本\r
    metadata:\r
      labels:\r
        app: nginx-pod\r
    spec:\r
      containers:\r
      - name: nginx\r
        image: nginx:1.17.1\r
        ports:\r
        - containerPort: 80\r
~~~\r
\r
创建pc-daemonset.yaml，内容如下：\r
\r
~~~yaml\r
apiVersion: apps/v1\r
kind: DaemonSet      \r
metadata:\r
  name: pc-daemonset\r
  namespace: dev\r
spec: \r
  selector:\r
    matchLabels:\r
      app: nginx-pod\r
  template:\r
    metadata:\r
      labels:\r
        app: nginx-pod\r
    spec:\r
      containers:\r
      - name: nginx\r
        image: nginx:1.17.1\r
~~~\r
\r
~~~powershell\r
# 创建daemonset\r
[root@master ~]# kubectl create -f  pc-daemonset.yaml\r
daemonset.apps/pc-daemonset created\r
\r
# 查看daemonset\r
[root@master ~]#  kubectl get ds -n dev -o wide\r
NAME        DESIRED  CURRENT  READY  UP-TO-DATE  AVAILABLE   AGE   CONTAINERS   IMAGES         \r
pc-daemonset   2        2        2      2           2        24s   nginx        nginx:1.17.1   \r
\r
# 查看pod,发现在每个Node上都运行一个pod\r
[root@master ~]#  kubectl get pods -n dev -o wide\r
NAME                 READY   STATUS    RESTARTS   AGE   IP            NODE    \r
pc-daemonset-9bck8   1/1     Running   0          37s   10.244.1.43   node1     \r
pc-daemonset-k224w   1/1     Running   0          37s   10.244.2.74   node2      \r
\r
# 删除daemonset\r
[root@master ~]# kubectl delete -f pc-daemonset.yaml\r
daemonset.apps "pc-daemonset" deleted\r
~~~\r
\r
## Job\r
\r
Job，主要用于负责**批量处理(一次要处理指定数量任务)**短暂的**一次性(每个任务仅运行一次就结束)**任务。Job特点如下：\r
\r
- 当Job创建的pod执行成功结束时，Job将记录成功结束的pod数量\r
- 当成功结束的pod达到指定的数量时，Job将完成执行\r
\r
<img src="https://s2.loli.net/2024/04/18/qrvZN5XugEimk3L.png" style="zoom:80%;" />\r
\r
Job的资源清单文件：\r
\r
~~~yaml\r
apiVersion: batch/v1 # 版本号\r
kind: Job # 类型       \r
metadata: # 元数据\r
  name: # rs名称 \r
  namespace: # 所属命名空间 \r
  labels: #标签\r
    controller: job\r
spec: # 详情描述\r
  completions: 1 # 指定job需要成功运行Pods的次数。默认值: 1\r
  parallelism: 1 # 指定job在任一时刻应该并发运行Pods的数量。默认值: 1\r
  activeDeadlineSeconds: 30 # 指定job可运行的时间期限，超过时间还未结束，系统将会尝试进行终止。\r
  backoffLimit: 6 # 指定job失败后进行重试的次数。默认是6\r
  manualSelector: true # 是否可以使用selector选择器选择pod，默认是false\r
  selector: # 选择器，通过它指定该控制器管理哪些pod\r
    matchLabels:      # Labels匹配规则\r
      app: counter-pod\r
    matchExpressions: # Expressions匹配规则\r
      - {key: app, operator: In, values: [counter-pod]}\r
  template: # 模板，当副本数量不足时，会根据下面的模板创建pod副本\r
    metadata:\r
      labels:\r
        app: counter-pod\r
    spec:\r
      restartPolicy: Never # 重启策略只能设置为Never或者OnFailure\r
      containers:\r
      - name: counter\r
        image: busybox:1.30\r
        command: ["bin/sh","-c","for i in 9 8 7 6 5 4 3 2 1; do echo $i;sleep 2;done"]\r
~~~\r
\r
~~~markdown\r
关于重启策略设置的说明：\r
    如果指定为OnFailure，则job会在pod出现故障时重启容器，而不是创建pod，failed次数不变\r
    如果指定为Never，则job会在pod出现故障时创建新的pod，并且故障pod不会消失，也不会重启，failed次数加1\r
    如果指定为Always的话，就意味着一直重启，意味着job任务会重复去执行了，当然不对，所以不能设置为Always\r
~~~\r
\r
创建pc-job.yaml，内容如下：\r
\r
~~~yaml\r
apiVersion: batch/v1\r
kind: Job      \r
metadata:\r
  name: pc-job\r
  namespace: dev\r
spec:\r
  manualSelector: true\r
  selector:\r
    matchLabels:\r
      app: counter-pod\r
  template:\r
    metadata:\r
      labels:\r
        app: counter-pod\r
    spec:\r
      restartPolicy: Never\r
      containers:\r
      - name: counter\r
        image: busybox:1.30\r
        command: ["bin/sh","-c","for i in 9 8 7 6 5 4 3 2 1; do echo $i;sleep 3;done"]\r
~~~\r
\r
~~~powershell\r
# 创建job\r
[root@master ~]# kubectl create -f pc-job.yaml\r
job.batch/pc-job created\r
\r
# 查看job\r
[root@master ~]# kubectl get job -n dev -o wide  -w\r
NAME     COMPLETIONS   DURATION   AGE   CONTAINERS   IMAGES         SELECTOR\r
pc-job   0/1           21s        21s   counter      busybox:1.30   app=counter-pod\r
pc-job   1/1           31s        79s   counter      busybox:1.30   app=counter-pod\r
\r
# 通过观察pod状态可以看到，pod在运行完毕任务后，就会变成Completed状态\r
[root@master ~]# kubectl get pods -n dev -w\r
NAME           READY   STATUS     RESTARTS      AGE\r
pc-job-rxg96   1/1     Running     0            29s\r
pc-job-rxg96   0/1     Completed   0            33s\r
\r
# 接下来，调整下pod运行的总数量和并行数量 即：在spec下设置下面两个选项\r
#  completions: 6 # 指定job需要成功运行Pods的次数为6\r
#  parallelism: 3 # 指定job并发运行Pods的数量为3\r
#  然后重新运行job，观察效果，此时会发现，job会每次运行3个pod，总共执行了6个pod\r
[root@master ~]# kubectl get pods -n dev -w\r
NAME           READY   STATUS    RESTARTS   AGE\r
pc-job-684ft   1/1     Running   0          5s\r
pc-job-jhj49   1/1     Running   0          5s\r
pc-job-pfcvh   1/1     Running   0          5s\r
pc-job-684ft   0/1     Completed   0          11s\r
pc-job-v7rhr   0/1     Pending     0          0s\r
pc-job-v7rhr   0/1     Pending     0          0s\r
pc-job-v7rhr   0/1     ContainerCreating   0          0s\r
pc-job-jhj49   0/1     Completed           0          11s\r
pc-job-fhwf7   0/1     Pending             0          0s\r
pc-job-fhwf7   0/1     Pending             0          0s\r
pc-job-pfcvh   0/1     Completed           0          11s\r
pc-job-5vg2j   0/1     Pending             0          0s\r
pc-job-fhwf7   0/1     ContainerCreating   0          0s\r
pc-job-5vg2j   0/1     Pending             0          0s\r
pc-job-5vg2j   0/1     ContainerCreating   0          0s\r
pc-job-fhwf7   1/1     Running             0          2s\r
pc-job-v7rhr   1/1     Running             0          2s\r
pc-job-5vg2j   1/1     Running             0          3s\r
pc-job-fhwf7   0/1     Completed           0          12s\r
pc-job-v7rhr   0/1     Completed           0          12s\r
pc-job-5vg2j   0/1     Completed           0          12s\r
\r
# 删除job\r
[root@master ~]# kubectl delete -f pc-job.yaml\r
job.batch "pc-job" deleted\r
~~~\r
\r
## CronJob(CJ)\r
\r
​    CronJob控制器以Job控制器资源为其管控对象，并借助它管理pod资源对象，Job控制器定义的作业任务在其控制器资源创建之后便会立即执行，但CronJob可以以类似于Linux操作系统的周期性任务作业计划的方式控制其运行**时间点**及**重复运行**的方式。也就是说，**CronJob可以在特定的时间点(反复的)去运行job任务**。\r
\r
<img src="https://s2.loli.net/2024/04/18/Qi8yUjZXuBhel4s.png" style="zoom:80%;" />\r
\r
CronJob的资源清单文件：\r
\r
~~~yaml\r
apiVersion: batch/v1beta1 # 版本号\r
kind: CronJob # 类型       \r
metadata: # 元数据\r
  name: # rs名称 \r
  namespace: # 所属命名空间 \r
  labels: #标签\r
    controller: cronjob\r
spec: # 详情描述\r
  schedule: # cron格式的作业调度运行时间点,用于控制任务在什么时间执行\r
  concurrencyPolicy: # 并发执行策略，用于定义前一次作业运行尚未完成时是否以及如何运行后一次的作业\r
  failedJobHistoryLimit: # 为失败的任务执行保留的历史记录数，默认为1\r
  successfulJobHistoryLimit: # 为成功的任务执行保留的历史记录数，默认为3\r
  startingDeadlineSeconds: # 启动作业错误的超时时长\r
  jobTemplate: # job控制器模板，用于为cronjob控制器生成job对象;下面其实就是job的定义\r
    metadata:\r
    spec:\r
      completions: 1\r
      parallelism: 1\r
      activeDeadlineSeconds: 30\r
      backoffLimit: 6\r
      manualSelector: true\r
      selector:\r
        matchLabels:\r
          app: counter-pod\r
        matchExpressions: 规则\r
          - {key: app, operator: In, values: [counter-pod]}\r
      template:\r
        metadata:\r
          labels:\r
            app: counter-pod\r
        spec:\r
          restartPolicy: Never \r
          containers:\r
          - name: counter\r
            image: busybox:1.30\r
            command: ["bin/sh","-c","for i in 9 8 7 6 5 4 3 2 1; do echo $i;sleep 20;done"]\r
~~~\r
\r
~~~markdown\r
需要重点解释的几个选项：\r
schedule: cron表达式，用于指定任务的执行时间\r
	*/1    *      *    *     *\r
	<分钟> <小时> <日> <月份> <星期>\r
\r
    分钟 值从 0 到 59.\r
    小时 值从 0 到 23.\r
    日 值从 1 到 31.\r
    月 值从 1 到 12.\r
    星期 值从 0 到 6, 0 代表星期日\r
    多个时间可以用逗号隔开； 范围可以用连字符给出；*可以作为通配符； /表示每...\r
concurrencyPolicy:\r
	Allow:   允许Jobs并发运行(默认)\r
	Forbid:  禁止并发运行，如果上一次运行尚未完成，则跳过下一次运行\r
	Replace: 替换，取消当前正在运行的作业并用新作业替换它\r
~~~\r
\r
创建pc-cronjob.yaml，内容如下：\r
\r
~~~yaml\r
apiVersion: batch/v1beta1\r
kind: CronJob\r
metadata:\r
  name: pc-cronjob\r
  namespace: dev\r
  labels:\r
    controller: cronjob\r
spec:\r
  schedule: "*/1 * * * *"\r
  jobTemplate:\r
    metadata:\r
    spec:\r
      template:\r
        spec:\r
          restartPolicy: Never\r
          containers:\r
          - name: counter\r
            image: busybox:1.30\r
            command: ["bin/sh","-c","for i in 9 8 7 6 5 4 3 2 1; do echo $i;sleep 3;done"]\r
~~~\r
\r
~~~powershell\r
# 创建cronjob\r
[root@master ~]# kubectl create -f pc-cronjob.yaml\r
cronjob.batch/pc-cronjob created\r
\r
# 查看cronjob\r
[root@master ~]# kubectl get cronjobs -n dev\r
NAME         SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE\r
pc-cronjob   */1 * * * *   False     0        <none>          6s\r
\r
# 查看job\r
[root@master ~]# kubectl get jobs -n dev\r
NAME                    COMPLETIONS   DURATION   AGE\r
pc-cronjob-1592587800   1/1           28s        3m26s\r
pc-cronjob-1592587860   1/1           28s        2m26s\r
pc-cronjob-1592587920   1/1           28s        86s\r
\r
# 查看pod\r
[root@master ~]# kubectl get pods -n dev\r
pc-cronjob-1592587800-x4tsm   0/1     Completed   0          2m24s\r
pc-cronjob-1592587860-r5gv4   0/1     Completed   0          84s\r
pc-cronjob-1592587920-9dxxq   1/1     Running     0          24s\r
\r
\r
# 删除cronjob\r
[root@master ~]# kubectl  delete -f pc-cronjob.yaml\r
cronjob.batch "pc-cronjob" deleted\r
~~~\r
\r
\r
\r
# 第七章 Service详解\r
\r
本章节主要介绍kubernetes的流量负载组件：Service和Ingress。\r
\r
## Service介绍\r
\r
​    在kubernetes中，pod是应用程序的载体，我们可以通过pod的ip来访问应用程序，但是pod的ip地址不是固定的，这也就意味着不方便直接采用pod的ip对服务进行访问。\r
\r
​    为了解决这个问题，kubernetes提供了Service资源，Service会对提供同一个服务的多个pod进行聚合，并且提供一个统一的入口地址。通过访问Service的入口地址就能访问到后面的pod服务。\r
\r
<img src="https://s2.loli.net/2024/04/18/zXmHg6VxSftPAab.png" style="zoom:100%;border:1px solid" />\r
\r
​    Service在很多情况下只是一个概念，真正起作用的其实是kube-proxy服务进程，每个Node节点上都运行着一个kube-proxy服务进程。当创建Service的时候会通过api-server向etcd写入创建的service的信息，而kube-proxy会基于监听的机制发现这种Service的变动，然后**它会将最新的Service信息转换成对应的访问规则**。\r
\r
<img src="https://s2.loli.net/2024/04/18/qTcUANWlEwdz8sR.png" style="border:1px solid" />\r
\r
~~~powershell\r
# 10.97.97.97:80 是service提供的访问入口\r
# 当访问这个入口的时候，可以发现后面有三个pod的服务在等待调用，\r
# kube-proxy会基于rr（轮询）的策略，将请求分发到其中一个pod上去\r
# 这个规则会同时在集群内的所有节点上都生成，所以在任何一个节点上访问都可以。\r
[root@node1 ~]# ipvsadm -Ln\r
IP Virtual Server version 1.2.1 (size=4096)\r
Prot LocalAddress:Port Scheduler Flags\r
  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn\r
TCP  10.97.97.97:80 rr\r
  -> 10.244.1.39:80               Masq    1      0          0\r
  -> 10.244.1.40:80               Masq    1      0          0\r
  -> 10.244.2.33:80               Masq    1      0          0\r
~~~\r
\r
kube-proxy目前支持三种工作模式:\r
\r
**userspace 模式**\r
\r
​    userspace模式下，kube-proxy会为每一个Service创建一个监听端口，发向Cluster IP的请求被Iptables规则重定向到kube-proxy监听的端口上，kube-proxy根据LB算法选择一个提供服务的Pod并和其建立链接，以将请求转发到Pod上。\r
​    该模式下，kube-proxy充当了一个四层负责均衡器的角色。由于kube-proxy运行在userspace中，在进行转发处理时会增加内核和用户空间之间的数据拷贝，虽然比较稳定，但是效率比较低。\r
\r
<img src="https://s2.loli.net/2024/04/18/dO6iTFjpBAyuPGH.png" style="border: 1px solid; zoom: 57%;" />\r
\r
**iptables 模式**\r
\r
​    iptables模式下，kube-proxy为service后端的每个Pod创建对应的iptables规则，直接将发向Cluster IP的请求重定向到一个Pod IP。\r
​    该模式下kube-proxy不承担四层负责均衡器的角色，只负责创建iptables规则。该模式的优点是较userspace模式效率更高，但不能提供灵活的LB策略，当后端Pod不可用时也无法进行重试。\r
\r
<img src="https://s2.loli.net/2024/04/18/NVAlD3ZBdQjqJIx.png" style="zoom: 57%;"  />\r
\r
**ipvs 模式**\r
\r
​    ipvs模式和iptables类似，kube-proxy监控Pod的变化并创建相应的ipvs规则。ipvs相对iptables转发效率更高。除此以外，ipvs支持更多的LB算法。\r
\r
<img src="https://s2.loli.net/2024/04/18/v2qXY4gsDQB3hVH.png" style="zoom: 57%" />\r
\r
~~~powershell\r
# 此模式必须安装ipvs内核模块，否则会降级为iptables\r
# 开启ipvs\r
[root@master ~]# kubectl edit cm kube-proxy -n kube-system\r
[root@master ~]# kubectl delete pod -l k8s-app=kube-proxy -n kube-system\r
[root@node1 ~]# ipvsadm -Ln\r
IP Virtual Server version 1.2.1 (size=4096)\r
Prot LocalAddress:Port Scheduler Flags\r
  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn\r
TCP  10.97.97.97:80 rr\r
  -> 10.244.1.39:80               Masq    1      0          0\r
  -> 10.244.1.40:80               Masq    1      0          0\r
  -> 10.244.2.33:80               Masq    1      0          0\r
~~~\r
\r
## Service类型\r
\r
Service的资源清单文件：\r
\r
~~~yaml\r
kind: Service  # 资源类型\r
apiVersion: v1  # 资源版本\r
metadata: # 元数据\r
  name: service # 资源名称\r
  namespace: dev # 命名空间\r
spec: # 描述\r
  selector: # 标签选择器，用于确定当前service代理哪些pod\r
    app: nginx\r
  type: # Service类型，指定service的访问方式\r
  clusterIP:  # 虚拟服务的ip地址\r
  sessionAffinity: # session亲和性，支持ClientIP、None两个选项\r
  ports: # 端口信息\r
    - protocol: TCP \r
      port: 3017  # service端口\r
      targetPort: 5003 # pod端口\r
      nodePort: 31122 # 主机端口\r
~~~\r
\r
- ClusterIP：默认值，它是Kubernetes系统自动分配的虚拟IP，只能在集群内部访问\r
- NodePort：将Service通过指定的Node上的端口暴露给外部，通过此方法，就可以在集群外部访问服务\r
- LoadBalancer：使用外接负载均衡器完成到服务的负载分发，注意此模式需要外部云环境支持\r
- ExternalName： 把集群外部的服务引入集群内部，直接使用\r
\r
## Service使用\r
\r
### 实验环境准备\r
\r
在使用service之前，首先利用Deployment创建出3个pod，注意要为pod设置\`app=nginx-pod\`的标签\r
\r
创建deployment.yaml，内容如下：\r
\r
~~~yaml\r
apiVersion: apps/v1\r
kind: Deployment      \r
metadata:\r
  name: pc-deployment\r
  namespace: dev\r
spec: \r
  replicas: 3\r
  selector:\r
    matchLabels:\r
      app: nginx-pod\r
  template:\r
    metadata:\r
      labels:\r
        app: nginx-pod\r
    spec:\r
      containers:\r
      - name: nginx\r
        image: nginx:1.17.1\r
        ports:\r
        - containerPort: 80\r
~~~\r
\r
~~~powershell\r
[root@master ~]# kubectl create -f deployment.yaml\r
deployment.apps/pc-deployment created\r
\r
# 查看pod详情\r
[root@master ~]# kubectl get pods -n dev -o wide --show-labels\r
NAME                             READY   STATUS     IP            NODE     LABELS\r
pc-deployment-66cb59b984-8p84h   1/1     Running    10.244.1.40   node1    app=nginx-pod\r
pc-deployment-66cb59b984-vx8vx   1/1     Running    10.244.2.33   node2    app=nginx-pod\r
pc-deployment-66cb59b984-wnncx   1/1     Running    10.244.1.39   node1    app=nginx-pod\r
\r
# 为了方便后面的测试，修改下三台nginx的index.html页面（三台修改的IP地址不一致）\r
# kubectl exec -it pc-deployment-66cb59b984-8p84h -n dev /bin/sh\r
# echo "10.244.1.40" > /usr/share/nginx/html/index.html\r
\r
#修改完毕之后，访问测试\r
[root@master ~]# curl 10.244.1.40\r
10.244.1.40\r
[root@master ~]# curl 10.244.2.33\r
10.244.2.33\r
[root@master ~]# curl 10.244.1.39\r
10.244.1.39\r
~~~\r
\r
### ClusterIP类型的Service\r
\r
创建service-clusterip.yaml文件\r
\r
~~~yaml\r
apiVersion: v1\r
kind: Service\r
metadata:\r
  name: service-clusterip\r
  namespace: dev\r
spec:\r
  selector:\r
    app: nginx-pod\r
  clusterIP: 10.97.97.97 # service的ip地址，如果不写，默认会生成一个\r
  type: ClusterIP\r
  ports:\r
  - port: 80  # Service端口       \r
    targetPort: 80 # pod端口\r
~~~\r
\r
~~~powershell\r
# 创建service\r
[root@master ~]# kubectl create -f service-clusterip.yaml\r
service/service-clusterip created\r
\r
# 查看service\r
[root@master ~]# kubectl get svc -n dev -o wide\r
NAME                TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)   AGE   SELECTOR\r
service-clusterip   ClusterIP   10.97.97.97   <none>        80/TCP    13s   app=nginx-pod\r
\r
# 查看service的详细信息\r
# 在这里有一个Endpoints列表，里面就是当前service可以负载到的服务入口\r
[root@master ~]# kubectl describe svc service-clusterip -n dev\r
Name:              service-clusterip\r
Namespace:         dev\r
Labels:            <none>\r
Annotations:       <none>\r
Selector:          app=nginx-pod\r
Type:              ClusterIP\r
IP:                10.97.97.97\r
Port:              <unset>  80/TCP\r
TargetPort:        80/TCP\r
Endpoints:         10.244.1.39:80,10.244.1.40:80,10.244.2.33:80\r
Session Affinity:  None\r
Events:            <none>\r
\r
# 查看ipvs的映射规则\r
[root@master ~]# ipvsadm -Ln\r
TCP  10.97.97.97:80 rr\r
  -> 10.244.1.39:80               Masq    1      0          0\r
  -> 10.244.1.40:80               Masq    1      0          0\r
  -> 10.244.2.33:80               Masq    1      0          0\r
\r
# 访问10.97.97.97:80观察效果\r
[root@master ~]# curl 10.97.97.97:80\r
10.244.2.33\r
~~~\r
\r
**Endpoint**\r
\r
​    Endpoint是kubernetes中的一个资源对象，存储在etcd中，用来记录一个service对应的所有pod的访问地址，它是根据service配置文件中selector描述产生的。\r
\r
​    一个Service由一组Pod组成，这些Pod通过Endpoints暴露出来，**Endpoints是实现实际服务的端点集合**。换句话说，service和pod之间的联系是通过endpoints实现的。\r
\r
![image-20240418103119726](https://s2.loli.net/2024/04/18/9IA7tjZGQWXl1eJ.png)\r
\r
**负载分发策略**\r
\r
对Service的访问被分发到了后端的Pod上去，目前kubernetes提供了两种负载分发策略：\r
\r
- 如果不定义，默认使用kube-proxy的策略，比如随机、轮询\r
\r
- 基于客户端地址的会话保持模式，即来自同一个客户端发起的所有请求都会转发到固定的一个Pod上\r
\r
  此模式可以使在spec中添加\`sessionAffinity:ClientIP\`选项\r
\r
~~~powershell\r
# 查看ipvs的映射规则【rr 轮询】\r
[root@master ~]# ipvsadm -Ln\r
TCP  10.97.97.97:80 rr\r
  -> 10.244.1.39:80               Masq    1      0          0\r
  -> 10.244.1.40:80               Masq    1      0          0\r
  -> 10.244.2.33:80               Masq    1      0          0\r
\r
# 循环访问测试\r
[root@master ~]# while true;do curl 10.97.97.97:80; sleep 5; done;\r
10.244.1.40\r
10.244.1.39\r
10.244.2.33\r
10.244.1.40\r
10.244.1.39\r
10.244.2.33\r
\r
# 修改分发策略`,title:"创建",date:"2024-04-18 15:15:33"}},{route:"/K8S/第十章 DashBoard.html",meta:{description:"",title:"第十章DashBoard",date:"2024-04-18 15:15:33"}},{route:"/K8S/第四章 实战入门.html",meta:{description:`# 第四章 实战入门\r
\r
本章节将介绍如何在kubernetes集群中部署一个nginx服务，并且能够对其进行访问。\r
\r
## Namespace\r
\r
​    Namespace是kubernetes系统中的一种非常重要资源，它的主要作用是用来实现**多套环境的资源隔离**或者**多租户的资源隔离**。\r
\r
​    默认情况下，kubernetes集群中的所有的Pod都是可以相互访问的。但是在实际中，可能不想让两个Pod之间进行互相的访问，那此时就可以将两个Pod划分到不同的namespace下。kubernetes通过将集群内部的资源分配到不同的Namespace中，可以形成逻辑上的"组"，以方便不同的组的资源进行隔离使用和管理。\r
\r
​    可以通过kubernetes的授权机制，将不同的namespace交给不同租户进行管理，这样就实现了多租户的资源隔离。此时还能结合kubernetes的资源配额机制，限定不同租户能占用的资源，例如CPU使用量、内存使用量等等，来实现租户可用资源的管理。\r
\r
<img src="https://s2.loli.net/2024/04/18/2ueBxoZgvwr8SiN.png" alt="image-20200407100850484" style="zoom:80%;border:1px solid" />\r
\r
kubernetes在集群启动之后，会默认创建几个namespace\r
\r
~~~powershell\r
[root@master ~]# kubectl  get namespace\r
NAME              STATUS   AGE\r
default           Active   45h     #  所有未指定Namespace的对象都会被分配在default命名空间\r
kube-node-lease   Active   45h     #  集群节点之间的心跳维护，v1.13开始引入\r
kube-public       Active   45h     #  此命名空间下的资源可以被所有人访问（包括未认证用户）\r
kube-system       Active   45h     #  所有由Kubernetes系统创建的资源都处于这个命名空间\r
~~~\r
\r
下面来看namespace资源的具体操作：\r
\r
**查看**\r
\r
~~~powershell\r
# 1 查看所有的ns  命令：kubectl get ns\r
[root@master ~]# kubectl get ns\r
NAME              STATUS   AGE\r
default           Active   45h\r
kube-node-lease   Active   45h\r
kube-public       Active   45h     \r
kube-system       Active   45h     \r
\r
# 2 查看指定的ns   命令：kubectl get ns ns名称\r
[root@master ~]# kubectl get ns default\r
NAME      STATUS   AGE\r
default   Active   45h\r
\r
# 3 指定输出格式  命令：kubectl get ns ns名称  -o 格式参数\r
# kubernetes支持的格式有很多，比较常见的是wide、json、yaml\r
[root@master ~]# kubectl get ns default -o yaml\r
apiVersion: v1\r
kind: Namespace\r
metadata:\r
  creationTimestamp: "2020-04-05T04:44:16Z"\r
  name: default\r
  resourceVersion: "151"\r
  selfLink: /api/v1/namespaces/default\r
  uid: 7405f73a-e486-43d4-9db6-145f1409f090\r
spec:\r
  finalizers:\r
  - kubernetes\r
status:\r
  phase: Active\r
  \r
# 4 查看ns详情  命令：kubectl describe ns ns名称\r
[root@master ~]# kubectl describe ns default\r
Name:         default\r
Labels:       <none>\r
Annotations:  <none>\r
Status:       Active  # Active 命名空间正在使用中  Terminating 正在删除命名空间\r
\r
# ResourceQuota 针对namespace做的资源限制\r
# LimitRange针对namespace中的每个组件做的资源限制\r
No resource quota.\r
No LimitRange resource.\r
~~~\r
\r
**创建**\r
\r
~~~powershell\r
# 创建namespace\r
[root@master ~]# kubectl create ns dev\r
namespace/dev created\r
~~~\r
\r
**删除**\r
\r
~~~powershell\r
# 删除namespace\r
[root@master ~]# kubectl delete ns dev\r
namespace "dev" deleted\r
~~~\r
\r
**配置方式**\r
\r
首先准备一个yaml文件：ns-dev.yaml\r
\r
~~~yaml\r
apiVersion: v1\r
kind: Namespace\r
metadata:\r
  name: dev\r
~~~\r
\r
然后就可以执行对应的创建和删除命令了：\r
\r
​    创建：kubectl  create  -f  ns-dev.yaml\r
\r
​    删除：kubectl  delete  -f  ns-dev.yaml\r
\r
## Pod\r
\r
Pod是kubernetes集群进行管理的最小单元，程序要运行必须部署在容器中，而容器必须存在于Pod中。\r
\r
Pod可以认为是容器的封装，一个Pod中可以存在一个或者多个容器。\r
\r
<img src="https://s2.loli.net/2024/04/18/8uXd5jcQ4plN9Cf.png" alt="image-20200407121501907" style="zoom:80%;" />\r
\r
kubernetes在集群启动之后，集群中的各个组件也都是以Pod方式运行的。可以通过下面命令查看：\r
\r
~~~powershell\r
[root@master ~]# kubectl get pod -n kube-system\r
NAMESPACE     NAME                             READY   STATUS    RESTARTS   AGE\r
kube-system   coredns-6955765f44-68g6v         1/1     Running   0          2d1h\r
kube-system   coredns-6955765f44-cs5r8         1/1     Running   0          2d1h\r
kube-system   etcd-master                      1/1     Running   0          2d1h\r
kube-system   kube-apiserver-master            1/1     Running   0          2d1h\r
kube-system   kube-controller-manager-master   1/1     Running   0          2d1h\r
kube-system   kube-flannel-ds-amd64-47r25      1/1     Running   0          2d1h\r
kube-system   kube-flannel-ds-amd64-ls5lh      1/1     Running   0          2d1h\r
kube-system   kube-proxy-685tk                 1/1     Running   0          2d1h\r
kube-system   kube-proxy-87spt                 1/1     Running   0          2d1h\r
kube-system   kube-scheduler-master            1/1     Running   0          2d1h\r
~~~\r
\r
**创建并运行**\r
\r
kubernetes没有提供单独运行Pod的命令，都是通过Pod控制器来实现的\r
\r
~~~powershell\r
# 命令格式： kubectl run (pod控制器名称) [参数] \r
# --image  指定Pod的镜像\r
# --port   指定端口\r
# --namespace  指定namespace\r
[root@master ~]# kubectl run nginx --image=nginx:1.17.1 --port=80 --namespace dev \r
deployment.apps/nginx created\r
~~~\r
\r
**查看pod信息**\r
\r
~~~powershell\r
# 查看Pod基本信息\r
[root@master ~]# kubectl get pods -n dev\r
NAME                     READY   STATUS    RESTARTS   AGE\r
nginx-5ff7956ff6-fg2db   1/1     Running   0          43s\r
\r
# 查看Pod的详细信息\r
[root@master ~]# kubectl describe pod nginx-5ff7956ff6-fg2db -n dev\r
Name:         nginx-5ff7956ff6-fg2db\r
Namespace:    dev\r
Priority:     0\r
Node:         node1/192.168.109.101\r
Start Time:   Wed, 08 Apr 2020 09:29:24 +0800\r
Labels:       pod-template-hash=5ff7956ff6\r
              run=nginx\r
Annotations:  <none>\r
Status:       Running\r
IP:           10.244.1.23\r
IPs:\r
  IP:           10.244.1.23\r
Controlled By:  ReplicaSet/nginx-5ff7956ff6\r
Containers:\r
  nginx:\r
    Container ID:   docker://4c62b8c0648d2512380f4ffa5da2c99d16e05634979973449c98e9b829f6253c\r
    Image:          nginx:1.17.1\r
    Image ID:       docker-pullable://nginx@sha256:485b610fefec7ff6c463ced9623314a04ed67e3945b9c08d7e53a47f6d108dc7\r
    Port:           80/TCP\r
    Host Port:      0/TCP\r
    State:          Running\r
      Started:      Wed, 08 Apr 2020 09:30:01 +0800\r
    Ready:          True\r
    Restart Count:  0\r
    Environment:    <none>\r
    Mounts:\r
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-hwvvw (ro)\r
Conditions:\r
  Type              Status\r
  Initialized       True\r
  Ready             True\r
  ContainersReady   True\r
  PodScheduled      True\r
Volumes:\r
  default-token-hwvvw:\r
    Type:        Secret (a volume populated by a Secret)\r
    SecretName:  default-token-hwvvw\r
    Optional:    false\r
QoS Class:       BestEffort\r
Node-Selectors:  <none>\r
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s\r
                 node.kubernetes.io/unreachable:NoExecute for 300s\r
Events:\r
  Type    Reason     Age        From               Message\r
  `,title:"第四章实战入门",date:"2024-04-18 15:15:33"}},{route:"/Linux/linux常用指令.html",meta:{description:"",title:"Linux常用指令",date:"2024-04-18 15:15:33"}},{route:"/Linux/面试问题.html",meta:{description:"",title:"Linux面试问题",date:"2024-04-18 15:15:33"}},{route:"/Linux/高频考点.html",meta:{description:"",title:"Linux面试高频",date:"2024-04-18 15:15:33"}},{route:"/Mysql/sql操作.html",meta:{description:"",title:"Sql指令",date:"2024-04-18 15:15:33"}},{route:"/Mysql/url.html",meta:{description:"",title:"",date:"2024-04-18 15:15:33"}},{route:"/Mysql/基础篇.html",meta:{description:"",title:"基础篇",date:"2024-04-18 15:15:33"}},{route:"/Mysql/数据库安全.html",meta:{description:"",title:"数据库安全",date:"2024-04-18 15:15:33"}},{route:"/Mysql/日志.html",meta:{description:"",title:"日志",date:"2024-04-18 15:15:33"}},{route:"/Mysql/配置.html",meta:{description:`# 配置篇\r
\r
\r
\r
## 主从复制\r
\r
\r
\r
<img src="https://s2.loli.net/2024/04/10/qFBhJXGKYbvLMmT.png" alt="image-20240410210713075" style="zoom:67%;" />\r
\r
\r
\r
在实际的生产中，为了解决 MySQL 的单点故障问题，以及提高 MySQL 的整体服务性能，一般都会采用 **主从复制**。\r
\r
比如：在复杂的业务系统中，有一句 sql 执行后导致了锁表，并且这条 sql 的的执行时间有比较长，那么此 sql 执行的期间会导致部分服务不可用，这样就会严重影响到用户的体验。\r
\r
主从复制过程中，服务器一般分为 **主库（master）** 和 **从库（slave）**，常见的场景下，**主库负责写，而从库负责读**。\r
\r
读写分离的做法能够实现整体服务性能的提高，即使写操作时间比较长，也不影响读操作的进行。\r
\r
### 主从复制的原理\r
\r
MySQL 的主从复制的过程是一个 **异步** 的过程，底层是基于 MySQL 数据库自带的 **二进制日志（binary log）** 功能。\r
\r
> 二进制日志（bin-log）记录了所有的 DDL（数据定义语言）语句和 DML（数据操纵语言）语句，但是不包括数据查询语句。\r
>\r
> 此日志对于灾难时的数据恢复起着极其重要的作用，MySQL的主从复制， 就是通过 bin-log 实现的。\r
>\r
> 默认MySQL是未开启该日志的。\r
\r
一台或多台 MySQL 数据库（slave，即从库）从另一台 MySQL 数据库（master，即主库）进行日志的复制，然后解析日志，并应用到自身，最终实现从库的数据和主库的数据保持一致。 \r
\r
MySQL 主从复制是 MySQL 数据库底层自带的功能，所以无需借助第三方工具就可实现。\r
\r
MySQL 的主从复制过程中，主要有 3 个线程：**master（binlog dump thread）**、**slave（I/O thread 、SQL thread）**，其中 Master 为 1 条线程，Slave 为 2 条线程。\r
\r
**master（binlog dump thread）** 主要负责 Master 库中有数据更新的时候，会按照 \`binary log\` 格式，将更新的事件类型写入到主库的 \`binary log\` 文件中。\r
\r
并且，Master 会创建 \`log dump\` 线程通知 Slave 主库中存在数据更新，这就是为什么主库的  \`binary log\` 日志一定要开启的原因。\r
\r
\`I/O thread\` 线程在 Slave 中创建，该线程用于请求 Master，Master 会返回 \`binary log\` 的名称以及当前数据更新的位置、 \`binary log\`  文件位置的副本。\r
\r
然后，将 \`binary log\` 保存在 **relay log（中继日志）** 中，中继日志也是记录数据更新的信息。\r
\r
SQL 线程也是在 Slave 中创建的，当 Slave 检测到中继日志有更新，就会将更新的内容同步到 Slave 数据库中，这样就保证了主从的数据的同步。\r
\r
以上就是主从复制的过程，当然，主从复制的过程有不同的策略方式进行数据的同步，主要包含以下几种：\r
\r
- **同步策略**：Master 会等待所有的 Slave 都回应后才会提交，这个主从的同步的性能会严重的影响。\r
- **半同步策略**：Master 至少会等待一个 Slave 回应后提交。\r
- **异步策略**：Master 不用等待 Slave 回应就可以提交。\r
- **延迟策略**：Slave 要落后于 Master 指定的时间。\r
\r
对于不同的业务需求，有不同的策略方案，但是一般都会采用 **最终一致性**，不会要求 **强一致性**，毕竟强一致性会严重影响性能。\r
\r
**最终一致性**：\r
\r
- 不保证在任意时刻任意节点上的同一份数据都是相同的，但是随着时间的迁移，不同节点上的同一份数据总是在向趋同的方向变化\r
- 最终两个字用得很微妙，因为从写入主库到反映至从库之间的延迟，可能仅仅是几分之一秒，也可能是几个小时\r
\r
## 主从搭建\r
\r
### 准备工作\r
\r
提前准备两台服务器，并且在服务器中安装MySQL，服务器的信息如下：\r
\r
| 数据库 | IP              | 数据库版本 |\r
| `,title:"配置篇",date:"2024-04-18 15:15:33"}},{route:"/Mysql/锁.html",meta:{description:"",title:"锁",date:"2024-04-18 15:15:33"}},{route:"/Mysql/面试问题.html",meta:{description:"",title:"面试问题",date:"2024-04-18 15:15:33"}},{route:"/Python/Venv.html",meta:{description:"",title:"VirtualEnvironment",date:"2024-04-18 15:15:33"}},{route:"/Redis/Redis之内存回收.html",meta:{description:"",title:"Redis之内存回收",date:"2024-04-18 15:15:33"}},{route:"/Redis/Redis之数据类型.html",meta:{description:"",title:"Redis之数据类型",date:"2024-04-18 15:15:33"}},{route:"/Redis/Redis之数据结构.html",meta:{description:"",title:"Redis之数据结构",date:"2024-04-18 15:15:33"}},{route:"/Redis/Redis之网络模型.html",meta:{description:"",title:"Redis之网络模型",date:"2024-04-18 15:15:33"}},{route:"/Redis/Redis之通信协议.html",meta:{description:"",title:"",date:"2024-04-18 15:15:33"}},{route:"/Redis/Redis持久化.html",meta:{description:"",title:"Redis持久化",date:"2024-04-18 15:15:33"}},{route:"/Redis/Redis锁.html",meta:{description:"",title:"Redis",date:"2024-04-18 15:15:33"}},{route:"/Redis/Redis集群.html",meta:{description:"",title:"",date:"2024-04-18 15:15:33"}},{route:"/Redis/面试问题.html",meta:{description:"",title:"",date:"2024-04-18 15:15:33"}},{route:"/Shell/awk.html",meta:{description:"",title:"AWK常用命令",date:"2024-04-18 15:15:33"}},{route:"/操作系统/多线程编程.html",meta:{description:"",title:"多线程编程",date:"2024-04-18 15:15:33"}},{route:"/操作系统/硬件结构.html",meta:{description:"",title:"硬件结构",date:"2024-04-18 15:15:33"}},{route:"/操作系统/进程线程协程.html",meta:{description:"",title:"进程线程协程",date:"2024-04-18 15:15:33"}},{route:"/操作系统/面试问题.html",meta:{description:"",title:"面试问题",date:"2024-04-18 15:15:33"}},{route:"/计算机网络/HTTP.html",meta:{description:"",title:"HTTP",date:"2024-04-18 15:15:33"}},{route:"/计算机网络/RPC.html",meta:{description:"",title:"Rpc",date:"2024-04-18 15:15:33"}},{route:"/计算机网络/socket.html",meta:{description:"",title:"socket编程",date:"2024-04-18 15:15:33"}},{route:"/计算机网络/TCP.html",meta:{description:"",title:"TCP",date:"2024-04-18 15:15:33"}},{route:"/计算机网络/面试问题.html",meta:{description:"",title:"面试问题",date:"2024-04-18 15:15:33"}},{route:"/设计模式/面试问题.html",meta:{description:"",title:"",date:"2024-04-18 15:15:33"}}]),AP={customSearchQuery:function(t){return t.replace(/[\u4E00-\u9FA5]/g," $& ").replace(/\s+/g," ").trim()},filter(e){return e.meta.publish!==!1}};function $P(e,t="yyyy-MM-dd hh:mm:ss"){e instanceof Date||(e=new Date(e));const n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,`${e.getFullYear()}`.substr(4-RegExp.$1.length)));for(const r in n)new RegExp(`(${r})`).test(t)&&(t=t.replace(RegExp.$1,RegExp.$1.length===1?n[r]:`00${n[r]}`.substr(`${n[r]}`.length)));return t}const PP={},LP={width:"594",height:"112",viewBox:"0 0 594 112",fill:"none",xmlns:"http://www.w3.org/2000/svg"},MP=Zf('<path d="M147.8 111.2H164V77.5998H164.6C164.6 77.5998 170.6 87.1998 183.2 87.1998C197 87.1998 209.6 74.5998 209.6 56.5998C209.6 38.5998 197 25.9998 183.2 25.9998C170.6 25.9998 164.6 35.5998 164.6 35.5998H164V27.1998H147.8V111.2ZM178.4 72.1998C170 72.1998 163.4 65.5998 163.4 56.5998C163.4 47.5998 170 40.9998 178.4 40.9998C186.8 40.9998 193.4 47.5998 193.4 56.5998C193.4 65.5998 186.8 72.1998 178.4 72.1998Z" fill="black"></path><path d="M230.628 87.1998C242.028 87.1998 248.028 78.7998 248.028 78.7998H248.628V85.9998C252.228 85.9998 264.828 85.9998 264.828 85.9998V49.3998C264.828 36.1998 254.628 25.9998 239.628 25.9998C224.028 25.9998 215.628 37.3998 215.628 37.3998L225.228 46.9998C225.228 46.9998 230.028 40.3998 238.428 40.3998C244.428 40.3998 248.028 43.9998 248.628 48.1998L230.028 51.5598C219.228 53.4798 212.628 60.7998 212.628 70.3998C212.628 79.9998 219.828 87.1998 230.628 87.1998ZM236.028 73.9998C231.228 73.9998 228.828 71.5998 228.828 67.9998C228.828 64.9998 231.228 62.7198 235.428 61.9998L248.628 59.5998V60.7998C248.628 68.5998 243.228 73.9998 236.028 73.9998Z" fill="black"></path><path d="M299.033 111.2C317.633 111.2 330.833 97.9998 330.833 79.9998V27.1998H314.633V35.5998H314.033C314.033 35.5998 308.633 25.9998 296.033 25.9998C282.833 25.9998 270.833 37.9998 270.833 55.3998C270.833 72.7998 282.833 84.7998 296.033 84.7998C308.633 84.7998 314.033 75.1998 314.033 75.1998H314.633V79.9998C314.633 89.5998 308.033 96.1998 299.033 96.1998C289.433 96.1998 283.433 88.9998 283.433 88.9998L273.233 99.1998C273.233 99.1998 281.633 111.2 299.033 111.2ZM300.833 69.7998C293.033 69.7998 287.033 63.7998 287.033 55.3998C287.033 46.9998 293.033 40.9998 300.833 40.9998C308.633 40.9998 314.633 46.9998 314.633 55.3998C314.633 63.7998 308.633 69.7998 300.833 69.7998Z" fill="black"></path><path d="M367.986 87.1998C384.186 87.1998 393.186 77.5998 393.186 77.5998L384.786 66.1998C384.786 66.1998 379.386 72.7998 369.186 72.7998C360.186 72.7998 355.386 67.9998 353.586 62.5998H396.186C396.186 62.5998 396.786 59.5998 396.786 55.3998C396.786 39.1998 383.586 25.9998 367.386 25.9998C350.586 25.9998 336.786 39.7998 336.786 56.5998C336.786 73.3998 350.586 87.1998 367.986 87.1998ZM353.586 50.5998C355.386 45.1998 360.186 40.3998 366.786 40.3998C373.386 40.3998 378.186 45.1998 379.986 50.5998H353.586Z" fill="black"></path><path d="M406.423 85.9998H422.624V43.3998H444.224V85.9998H460.423V28.3998H422.624V24.7998C422.624 19.3998 425.624 16.3998 430.423 16.3998C433.423 16.3998 435.823 17.5998 435.823 17.5998V2.5998C435.823 2.5998 431.624 0.799805 426.224 0.799805C414.224 0.799805 406.423 8.59981 406.423 22.3998V28.3998H397.423V43.3998H406.423V85.9998ZM452.263 19.3998C457.423 19.3998 461.624 15.1998 461.624 10.3998C461.624 5.59981 457.424 1.3998 452.384 1.3998C447.224 1.3998 443.023 5.59981 443.023 10.3998C443.023 15.1998 447.223 19.3998 452.263 19.3998Z" fill="black"></path><path d="M470.652 85.9998H486.852V54.7998C486.852 46.9998 492.252 41.5998 499.452 41.5998C506.052 41.5998 510.252 45.7998 510.252 52.9998V85.9998H526.452V50.5998C526.452 35.5998 516.852 25.9998 504.852 25.9998C493.452 25.9998 487.452 35.5998 487.452 35.5998H486.852V27.1998H470.652V85.9998Z" fill="black"></path><path d="M557.819 87.1998C570.419 87.1998 576.419 77.5998 576.419 77.5998H577.019V85.9998H593.219V1.9998H577.019V35.5998H576.419C576.419 35.5998 570.419 25.9998 557.819 25.9998C544.019 25.9998 531.419 38.5998 531.419 56.5998C531.419 74.5998 544.019 87.1998 557.819 87.1998ZM562.619 72.1998C554.219 72.1998 547.619 65.5998 547.619 56.5998C547.619 47.5998 554.219 40.9998 562.619 40.9998C571.019 40.9998 577.619 47.5998 577.619 56.5998C577.619 65.5998 571.019 72.1998 562.619 72.1998Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60 96.9999C93.1371 96.9999 120 81.8416 120 63.1428V50.8311H115.91C107.182 38.2198 85.4398 29.2856 60 29.2856C34.5602 29.2856 12.8183 38.2198 4.09026 50.8311H0V63.1428C0 81.8416 26.8629 96.9999 60 96.9999Z" fill="black"></path><path d="M116 52C116 59.317 110.727 66.7404 100.454 72.5615C90.3014 78.3149 76.0069 82 60 82C43.9931 82 29.6986 78.3149 19.5456 72.5615C9.2731 66.7404 4 59.317 4 52C4 44.6831 9.2731 37.2596 19.5456 31.4385C29.6986 25.6851 43.9931 22 60 22C76.0069 22 90.3014 25.6851 100.454 31.4385C110.727 37.2596 116 44.6831 116 52Z" fill="white" stroke="black" stroke-width="8"></path><path d="M57.8864 72.0605L87.2817 41.837C88.6253 40.4556 87.43 38.1599 85.5278 38.4684L26.0819 48.1083C23.9864 48.4481 23.794 51.3882 25.8273 51.9982L46.7151 58.2645C47.2181 58.4154 47.6415 58.7581 47.894 59.2185L54.6991 71.6277C55.3457 72.8069 56.9487 73.0246 57.8864 72.0605Z" fill="black"></path><ellipse cx="58" cy="53.5" rx="7" ry="4.5" fill="white"></ellipse>',11),IP=[MP];function BP(e,t){return v(),C("svg",LP,IP)}const OP=de(PP,[["render",BP]]),Qu=e=>(Xe("data-v-12d05c09"),e=e(),Qe(),e),FP={class:"blog-search","data-pagefind-ignore":"all"},RP=Qu(()=>S("svg",{width:"14",height:"14",viewBox:"0 0 20 20"},[S("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),NP={key:0,class:"search-tip"},DP={key:1,class:"metaKey"},zP={class:"search-dialog"},VP={class:"link"},HP={class:"title"},qP={key:0,class:"date"},jP=["innerHTML"],GP={class:"command-palette-logo"},WP={href:"https://github.com/cloudcannon/pagefind",target:"_blank",rel:"noopener noreferrer"},UP=Qu(()=>S("span",{class:"command-palette-Label"},"Search by",-1)),YP=Qu(()=>S("ul",{class:"command-palette-commands"},[S("li",null,[S("kbd",{class:"command-palette-commands-key"},[S("svg",{width:"15",height:"15","aria-label":"Enter key",role:"img"},[S("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[S("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"})])])]),S("span",{class:"command-palette-Label"},"to select")]),S("li",null,[S("kbd",{class:"command-palette-commands-key"},[S("svg",{width:"15",height:"15","aria-label":"Arrow down",role:"img"},[S("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[S("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"})])])]),S("kbd",{class:"command-palette-commands-key"},[S("svg",{width:"15",height:"15","aria-label":"Arrow up",role:"img"},[S("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[S("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"})])])]),S("span",{class:"command-palette-Label"},"to navigate")]),S("li",null,[S("kbd",{class:"command-palette-commands-key"},[S("svg",{width:"15",height:"15","aria-label":"Escape key",role:"img"},[S("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},[S("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"})])])]),S("span",{class:"command-palette-Label"},"to close")])],-1)),KP=B({__name:"Search",setup(e){Ro(H=>({db9a1184:c.value}));const t=L([]),n=AP,{localeIndex:r,site:i}=pt(),o=w(()=>{var H;return{...n,...((H=n==null?void 0:n.locales)==null?void 0:H[r.value])||{}}}),s=w(()=>{var H;return((H=o.value)==null?void 0:H.showDate)??!0}),a=qi(),l=w(()=>a.width.value<760),c=w(()=>l.value?0:1),u=w(()=>{var H;return(H=o.value)!=null&&H.heading?o.value.heading.replace(/\{\{searchResult\}\}/,t.value.length):`Total: ${t.value.length} search results.`}),h=L("");Ae(()=>{h.value=/(Mac|iPhone|iPod|iPad)/i.test(navigator==null?void 0:navigator.platform)?"⌘":"Ctrl"});const d=L(!1),f=L(""),g=vP({passive:!1,onEventFired(H){H.ctrlKey&&H.key==="k"&&H.type==="keydown"&&H.preventDefault()}}),m=g["Meta+K"],y=g["Ctrl+K"],b=g.Escape;oe(m,H=>{H&&(d.value=!0)}),oe(y,H=>{H&&(d.value=!0)}),oe(b,H=>{H&&(d.value=!1)});function k(){if(!f.value){t.value=[];return}t.value=Nl.value.filter(H=>`${H.meta.description}${H.meta.title}`.includes(f.value)).map(H=>{var N,G;return{...H,meta:{...H.meta,description:((G=(N=H.meta)==null?void 0:N.description)==null?void 0:G.replace(new RegExp(`(${f.value})`,"g"),"<mark>$1</mark>"))||""}}}),t.value.sort((H,N)=>+new Date(N.meta.date)-+new Date(H.meta.date))}const _=w(()=>{var H;return((H=o.value)==null?void 0:H.resultOptimization)??!0});oe(()=>f.value,async()=>{var H,N,G;if(!((H=window==null?void 0:window.__pagefind__)!=null&&H.search))k();else{const q=typeof o.value.customSearchQuery=="function"?o.value.customSearchQuery(f.value):f.value;await((G=(N=window==null?void 0:window.__pagefind__)==null?void 0:N.search)==null?void 0:G.call(N,q).then(async z=>{const Q=(await Promise.all(z.results.map(Z=>Z.data()))).map(Z=>{var te;return{route:Z.url.startsWith(i.value.base)?Z.url:Bn(Z.url),meta:{title:Z.meta.title,description:Z.excerpt,date:(te=Z==null?void 0:Z.meta)==null?void 0:te.date}}}).map(Z=>{const te=Nl.value.find(ue=>ue.route===Z.route);return{...Z,meta:{...Z.meta,...te==null?void 0:te.meta}}}).filter(Z=>!_.value||Nl.value.some(te=>te.route===Z.route));t.value=Q.filter(o.value.filter??(()=>!0))}))}De(()=>{document.querySelectorAll('div[aria-disabled="true"]').forEach(q=>{q.setAttribute("aria-disabled","false")})})});function x(H){H.target===H.currentTarget&&(d.value=!1)}oe(()=>d.value,H=>{var N;H?De(()=>{var G;(G=document.querySelector("div[command-dialog-mask]"))==null||G.addEventListener("click",x)}):(N=document.querySelector("div[command-dialog-mask]"))==null||N.removeEventListener("click",x)});const T=L(999),A=L(0),E=w(()=>{const N=A.value%Math.ceil(t.value.length/T.value)*T.value;return t.value.slice(N,N+T.value)}),O=ou(),J=Kn();function R(H){d.value=!1,J.path!==H.value&&O.go(H.value)}const{lang:P}=pt(),K=w(()=>o.value.langReload??!0);return oe(()=>P.value,()=>{K.value&&window.location.reload()}),(H,N)=>{var q;const G=st("ClientOnly");return v(),C("div",FP,[S("div",{class:"nav-search-btn-wait",onClick:N[0]||(N[0]=z=>d.value=!0)},[RP,l.value?I("",!0):(v(),C("span",NP,ee(((q=o.value)==null?void 0:q.btnPlaceholder)||"Search"),1)),l.value?I("",!0):(v(),C("span",DP,ee(h.value)+" K ",1))]),j(G,null,{default:$(()=>[j(p(fi).Dialog,{visible:d.value,theme:"algolia"},Jf({header:$(()=>{var z;return[j(p(fi).Input,{value:f.value,"onUpdate:value":N[1]||(N[1]=V=>f.value=V),placeholder:((z=o.value)==null?void 0:z.placeholder)||"Search Docs"},null,8,["value","placeholder"])]}),body:$(()=>[S("div",zP,[j(p(fi).List,null,{default:$(()=>[t.value.length?(v(),X(p(fi).Group,{key:1,heading:u.value},{default:$(()=>[(v(!0),C(he,null,Te(E.value,z=>(v(),X(p(fi).Item,{key:z.route,"data-value":z.route,onSelect:R},{default:$(()=>[S("div",VP,[S("div",HP,[S("span",null,ee(z.meta.title),1),s.value&&z.meta.date?(v(),C("span",qP,ee(p($P)(z.meta.date,"yyyy-MM-dd")),1)):I("",!0)]),S("div",{class:"des",innerHTML:z.meta.description},null,8,jP)])]),_:2},1032,["data-value"]))),128))]),_:1},8,["heading"])):(v(),X(p(fi).Empty,{key:0},{default:$(()=>{var z;return[Fe(ee(((z=o.value)==null?void 0:z.emptyText)||"No results found."),1)]}),_:1}))]),_:1})])]),_:2},[t.value.length?{name:"footer",fn:$(()=>[S("div",GP,[S("a",WP,[UP,j(OP,{style:{width:"77px"}})])]),YP]),key:"0"}:void 0]),1032,["visible"])]),_:1})])}}}),XP=de(KP,[["__scopeId","data-v-12d05c09"]]),QP=B({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=Le();return(n,r)=>p(t).socialLinks?(v(),X(Wu,{key:0,class:"VPNavBarSocialLinks",links:p(t).socialLinks},null,8,["links"])):I("",!0)}}),ZP=de(QP,[["__scopeId","data-v-18557ca8"]]),JP=["href","rel","target"],eL={key:1},tL={key:2},nL=B({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=Le(),{hasSidebar:r}=yr(),{currentLang:i}=Go(),o=w(()=>{var l;return typeof n.value.logoLink=="string"?n.value.logoLink:(l=n.value.logoLink)==null?void 0:l.link}),s=w(()=>{var l;return typeof n.value.logoLink=="string"||(l=n.value.logoLink)==null?void 0:l.rel}),a=w(()=>{var l;return typeof n.value.logoLink=="string"||(l=n.value.logoLink)==null?void 0:l.target});return(l,c)=>(v(),C("div",{class:W(["VPNavBarTitle",{"has-sidebar":p(r)}])},[S("a",{class:"title",href:o.value??p(zu)(p(i).link),rel:s.value,target:a.value},[M(l.$slots,"nav-bar-title-before",{},void 0,!0),p(n).logo?(v(),X(ma,{key:0,class:"logo",image:p(n).logo},null,8,["image"])):I("",!0),p(n).siteTitle?(v(),C("span",eL,ee(p(n).siteTitle),1)):p(n).siteTitle===void 0?(v(),C("span",tL,ee(p(t).title),1)):I("",!0),M(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,JP)],2))}}),rL=de(nL,[["__scopeId","data-v-cf7d550b"]]),iL={class:"items"},oL={class:"title"},sL=B({__name:"VPNavBarTranslations",setup(e){const{theme:t}=Le(),{localeLinks:n,currentLang:r}=Go({correspondingLink:!0});return(i,o)=>p(n).length&&p(r).label?(v(),X(Gu,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:p(t).langMenuLabel||"Change language"},{default:$(()=>[S("div",iL,[S("p",oL,ee(p(r).label),1),(v(!0),C(he,null,Te(p(n),s=>(v(),X(Ka,{key:s.link,item:s},null,8,["item"]))),128))])]),_:1},8,["label"])):I("",!0)}}),aL=de(sL,[["__scopeId","data-v-7e4d332d"]]),lL=e=>(Xe("data-v-601b668d"),e=e(),Qe(),e),cL={class:"wrapper"},uL={class:"container"},dL={class:"title"},hL={class:"content"},pL={class:"content-body"},fL=lL(()=>S("div",{class:"divider"},[S("div",{class:"divider-line"})],-1)),mL=B({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const{y:t}=Yf(),{hasSidebar:n}=yr(),{hasLocalNav:r}=Lg(),{frontmatter:i}=Le(),o=L({});return Gf(()=>{o.value={"has-sidebar":n.value,"has-local-nav":r.value,top:i.value.layout==="home"&&t.value===0}}),(s,a)=>(v(),C("div",{class:W(["VPNavBar",o.value])},[S("div",cL,[S("div",uL,[S("div",dL,[j(rL,null,{"nav-bar-title-before":$(()=>[M(s.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":$(()=>[M(s.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),S("div",hL,[S("div",pL,[M(s.$slots,"nav-bar-content-before",{},void 0,!0),j(XP,{class:"search"}),j(HA,{class:"menu"}),j(aL,{class:"translations"}),j(GE,{class:"appearance"}),j(ZP,{class:"social-links"}),j(EA,{class:"extra"}),M(s.$slots,"nav-bar-content-after",{},void 0,!0),j(IA,{class:"hamburger",active:s.isScreenOpen,onClick:a[0]||(a[0]=l=>s.$emit("toggle-screen"))},null,8,["active"])])])])]),fL],2))}}),gL=de(mL,[["__scopeId","data-v-601b668d"]]),vL={key:0,class:"VPNavScreenAppearance"},yL={class:"text"},bL=B({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:n}=Le();return(r,i)=>p(t).appearance&&p(t).appearance!=="force-dark"?(v(),C("div",vL,[S("p",yL,ee(p(n).darkModeSwitchLabel||"Appearance"),1),j(qu)])):I("",!0)}}),_L=de(bL,[["__scopeId","data-v-5b1565e4"]]),CL=B({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=Ee("close-screen");return(n,r)=>(v(),X(qn,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:p(t)},{default:$(()=>[Fe(ee(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),kL=de(CL,[["__scopeId","data-v-2ddc6fe8"]]),wL=B({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=Ee("close-screen");return(n,r)=>(v(),X(qn,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:p(t)},{default:$(()=>[Fe(ee(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),a1=de(wL,[["__scopeId","data-v-8353602f"]]),SL={class:"VPNavScreenMenuGroupSection"},xL={key:0,class:"title"},TL=B({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,n)=>(v(),C("div",SL,[t.text?(v(),C("p",xL,ee(t.text),1)):I("",!0),(v(!0),C(he,null,Te(t.items,r=>(v(),X(a1,{key:r.text,item:r},null,8,["item"]))),128))]))}}),EL=de(TL,[["__scopeId","data-v-c365a0b9"]]),AL=e=>(Xe("data-v-2efff9f6"),e=e(),Qe(),e),$L=["aria-controls","aria-expanded"],PL=["innerHTML"],LL=AL(()=>S("span",{class:"vpi-plus button-icon"},null,-1)),ML=["id"],IL={key:1,class:"group"},BL=B({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,n=L(!1),r=w(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function i(){n.value=!n.value}return(o,s)=>(v(),C("div",{class:W(["VPNavScreenMenuGroup",{open:n.value}])},[S("button",{class:"button","aria-controls":r.value,"aria-expanded":n.value,onClick:i},[S("span",{class:"button-text",innerHTML:o.text},null,8,PL),LL],8,$L),S("div",{id:r.value,class:"items"},[(v(!0),C(he,null,Te(o.items,a=>(v(),C(he,{key:a.text},["link"in a?(v(),C("div",{key:a.text,class:"item"},[j(a1,{item:a},null,8,["item"])])):(v(),C("div",IL,[j(EL,{text:a.text,items:a.items},null,8,["text","items"])]))],64))),128))],8,ML)],2))}}),OL=de(BL,[["__scopeId","data-v-2efff9f6"]]),FL={key:0,class:"VPNavScreenMenu"},RL=B({__name:"VPNavScreenMenu",setup(e){const{theme:t}=Le();return(n,r)=>p(t).nav?(v(),C("nav",FL,[(v(!0),C(he,null,Te(p(t).nav,i=>(v(),C(he,{key:i.text},["link"in i?(v(),X(kL,{key:0,item:i},null,8,["item"])):(v(),X(OL,{key:1,text:i.text||"",items:i.items},null,8,["text","items"]))],64))),128))])):I("",!0)}}),NL=B({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=Le();return(n,r)=>p(t).socialLinks?(v(),X(Wu,{key:0,class:"VPNavScreenSocialLinks",links:p(t).socialLinks},null,8,["links"])):I("",!0)}}),l1=e=>(Xe("data-v-5e5b3281"),e=e(),Qe(),e),DL=l1(()=>S("span",{class:"vpi-languages icon lang"},null,-1)),zL=l1(()=>S("span",{class:"vpi-chevron-down icon chevron"},null,-1)),VL={class:"list"},HL=B({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:n}=Go({correspondingLink:!0}),r=L(!1);function i(){r.value=!r.value}return(o,s)=>p(t).length&&p(n).label?(v(),C("div",{key:0,class:W(["VPNavScreenTranslations",{open:r.value}])},[S("button",{class:"title",onClick:i},[DL,Fe(" "+ee(p(n).label)+" ",1),zL]),S("ul",VL,[(v(!0),C(he,null,Te(p(t),a=>(v(),C("li",{key:a.link,class:"item"},[j(qn,{class:"link",href:a.link},{default:$(()=>[Fe(ee(a.text),1)]),_:2},1032,["href"])]))),128))])],2)):I("",!0)}}),qL=de(HL,[["__scopeId","data-v-5e5b3281"]]),jL={class:"container"},GL=B({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=L(null),n=em(Ri?document.body:null);return(r,i)=>(v(),X(Zt,{name:"fade",onEnter:i[0]||(i[0]=o=>n.value=!0),onAfterLeave:i[1]||(i[1]=o=>n.value=!1)},{default:$(()=>[r.open?(v(),C("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[S("div",jL,[M(r.$slots,"nav-screen-content-before",{},void 0,!0),j(RL,{class:"menu"}),j(qL,{class:"translations"}),j(_L,{class:"appearance"}),j(NL,{class:"social-links"}),M(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):I("",!0)]),_:3}))}}),WL=de(GL,[["__scopeId","data-v-98edea6d"]]),UL={key:0,class:"VPNav"},YL=B({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:r}=IE(),{frontmatter:i}=Le(),o=w(()=>i.value.navbar!==!1);return nt("close-screen",n),Fn(()=>{Ri&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(s,a)=>o.value?(v(),C("header",UL,[j(gL,{"is-screen-open":p(t),onToggleScreen:p(r)},{"nav-bar-title-before":$(()=>[M(s.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":$(()=>[M(s.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":$(()=>[M(s.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":$(()=>[M(s.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),j(WL,{open:p(t)},{"nav-screen-content-before":$(()=>[M(s.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":$(()=>[M(s.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):I("",!0)}}),KL=de(YL,[["__scopeId","data-v-3df93fbb"]]),c1=e=>(Xe("data-v-edc69707"),e=e(),Qe(),e),XL=["role","tabindex"],QL=c1(()=>S("div",{class:"indicator"},null,-1)),ZL=c1(()=>S("span",{class:"vpi-chevron-right caret-icon"},null,-1)),JL=[ZL],eM={key:1,class:"items"},tM=B({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:n,collapsible:r,isLink:i,isActiveLink:o,hasActiveLink:s,hasChildren:a,toggle:l}=xT(w(()=>t.item)),c=w(()=>a.value?"section":"div"),u=w(()=>i.value?"a":"div"),h=w(()=>a.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),d=w(()=>i.value?void 0:"button"),f=w(()=>[[`level-${t.depth}`],{collapsible:r.value},{collapsed:n.value},{"is-link":i.value},{"is-active":o.value},{"has-active":s.value}]);function g(y){"key"in y&&y.key!=="Enter"||!t.item.link&&l()}function m(){t.item.link&&l()}return(y,b)=>{const k=st("VPSidebarItem",!0);return v(),X(Je(c.value),{class:W(["VPSidebarItem",f.value])},{default:$(()=>[y.item.text?(v(),C("div",Qt({key:0,class:"item",role:d.value},ey(y.item.items?{click:g,keydown:g}:{},!0),{tabindex:y.item.items&&0}),[QL,y.item.link?(v(),X(qn,{key:0,tag:u.value,class:"link",href:y.item.link,rel:y.item.rel,target:y.item.target},{default:$(()=>[(v(),X(Je(h.value),{class:"text",innerHTML:y.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(v(),X(Je(h.value),{key:1,class:"text",innerHTML:y.item.text},null,8,["innerHTML"])),y.item.collapsed!=null?(v(),C("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:m,onKeydown:Gr(m,["enter"]),tabindex:"0"},JL,32)):I("",!0)],16,XL)):I("",!0),y.item.items&&y.item.items.length?(v(),C("div",eM,[y.depth<5?(v(!0),C(he,{key:0},Te(y.item.items,_=>(v(),X(k,{key:_.text,item:_,depth:y.depth+1},null,8,["item","depth"]))),128)):I("",!0)])):I("",!0)]),_:1},8,["class"])}}}),nM=de(tM,[["__scopeId","data-v-edc69707"]]),u1=e=>(Xe("data-v-38c31ef3"),e=e(),Qe(),e),rM=u1(()=>S("div",{class:"curtain"},null,-1)),iM={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},oM=u1(()=>S("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),sM=B({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:n}=yr(),r=e,i=L(null),o=em(Ri?document.body:null);return oe([r,i],()=>{var s;r.open?(o.value=!0,(s=i.value)==null||s.focus()):o.value=!1},{immediate:!0,flush:"post"}),(s,a)=>p(n)?(v(),C("aside",{key:0,class:W(["VPSidebar",{open:s.open}]),ref_key:"navEl",ref:i,onClick:a[0]||(a[0]=dt(()=>{},["stop"]))},[rM,S("nav",iM,[oM,M(s.$slots,"sidebar-nav-before",{},void 0,!0),(v(!0),C(he,null,Te(p(t),l=>(v(),C("div",{key:l.text,class:"group"},[j(nM,{item:l,depth:0},null,8,["item"])]))),128)),M(s.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):I("",!0)}}),aM=de(sM,[["__scopeId","data-v-38c31ef3"]]),lM=B({__name:"VPSkipLink",setup(e){const t=Kn(),n=L();oe(()=>t.path,()=>n.value.focus());function r({target:i}){const o=document.getElementById(decodeURIComponent(i.hash).slice(1));if(o){const s=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",s)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",s),o.focus(),window.scrollTo(0,0)}}return(i,o)=>(v(),C(he,null,[S("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),S("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r}," Skip to content ")],64))}}),cM=de(lM,[["__scopeId","data-v-25aca1c7"]]),uM=B({__name:"Layout",setup(e){const{isOpen:t,open:n,close:r}=yr(),i=Kn();oe(()=>i.path,r),ST(t,r);const{frontmatter:o}=Le(),s=No(),a=w(()=>!!s["home-hero-image"]);return nt("hero-image-slot-exists",a),(l,c)=>{const u=st("Content");return p(o).layout!==!1?(v(),C("div",{key:0,class:W(["Layout",p(o).pageClass])},[M(l.$slots,"layout-top",{},void 0,!0),j(cM),j(cT,{class:"backdrop",show:p(t),onClick:p(r)},null,8,["show","onClick"]),j(KL,null,{"nav-bar-title-before":$(()=>[M(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":$(()=>[M(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":$(()=>[M(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":$(()=>[M(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":$(()=>[M(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":$(()=>[M(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),j(ME,{open:p(t),onOpenMenu:p(n)},null,8,["open","onOpenMenu"]),j(aM,{open:p(t)},{"sidebar-nav-before":$(()=>[M(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":$(()=>[M(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),j(fE,{"data-pagefind-body":""},{"page-top":$(()=>[M(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":$(()=>[M(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":$(()=>[M(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":$(()=>[M(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":$(()=>[M(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":$(()=>[M(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":$(()=>[M(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":$(()=>[M(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":$(()=>[M(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":$(()=>[M(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":$(()=>[M(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":$(()=>[M(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":$(()=>[M(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":$(()=>[M(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":$(()=>[M(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":$(()=>[M(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":$(()=>[M(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":$(()=>[M(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":$(()=>[M(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":$(()=>[M(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":$(()=>[M(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":$(()=>[M(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":$(()=>[M(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),j(bE),M(l.$slots,"layout-bottom",{},void 0,!0)],2)):(v(),X(u,{key:1}))}}}),dM=de(uM,[["__scopeId","data-v-fb6cfd7a"]]),Vc={Layout:dM,enhanceApp:({app:e})=>{e.component("Badge",sT)}},hM=e=>{if(typeof document>"u")return{stabilizeScrollPosition:i=>async(...o)=>i(...o)};const t=document.documentElement;return{stabilizeScrollPosition:r=>async(...i)=>{const o=r(...i),s=e.value;if(!s)return o;const a=s.offsetTop-t.scrollTop;return await De(),t.scrollTop=s.offsetTop-a,o}}},d1=Symbol(),mo=typeof localStorage<"u"?localStorage:null,h1="vitepress:tabsSharedState",pM=()=>{const e=mo==null?void 0:mo.getItem(h1);if(e)try{return JSON.parse(e)}catch{}return{}},fM=e=>{mo&&mo.setItem(h1,JSON.stringify(e))},mM=e=>{const t=ct(pM());oe(t,n=>{fM(n)}),e.provide(d1,t)},gM=(e,t)=>{const n=Ee(d1);if(!n)throw new Error("[vitepress-plugin-tabs] TabsSharedState should be injected");const r=L(),i=w({get(){const s=t.value,a=e.value;if(s){const l=n[s];if(l&&a.includes(l))return l}else{const l=r.value;if(l)return l}return a[0]},set(s){const a=t.value;a?n[a]=s:r.value=s}});return{selected:i,select:s=>{i.value=s}}};let Ep=0;const vM=()=>(Ep++,""+Ep),yM={class:"plugin-tabs"},bM=["id","aria-selected","aria-controls","tabindex","onClick"],_M=["id","aria-labelledby"],CM=B({__name:"PluginTabs",props:{tabLabels:{},sharedStateKey:{}},setup(e){const t=e,{selected:n,select:r}=gM(Xt(t,"tabLabels"),Xt(t,"sharedStateKey")),i=L(),{stabilizeScrollPosition:o}=hM(i),s=o(r),a=L([]),l=u=>{var f;const h=t.tabLabels.indexOf(n.value);let d;u.key==="ArrowLeft"?d=h>=1?h-1:t.tabLabels.length-1:u.key==="ArrowRight"&&(d=h<t.tabLabels.length-1?h+1:0),d!==void 0&&(s(t.tabLabels[d]),(f=a.value[d])==null||f.focus())},c=vM();return(u,h)=>(v(),C("div",yM,[S("div",{ref_key:"tablist",ref:i,class:"plugin-tabs--tab-list",role:"tablist",onKeydown:l},[(v(!0),C(he,null,Te(u.tabLabels,d=>(v(),C("button",{id:`tab-${d}-${p(c)}`,ref_for:!0,ref_key:"buttonRefs",ref:a,key:d,role:"tab",class:"plugin-tabs--tab","aria-selected":d===p(n),"aria-controls":`panel-${d}-${p(c)}`,tabindex:d===p(n)?0:-1,onClick:()=>p(s)(d)},ee(d),9,bM))),128))],544),(v(!0),C(he,null,Te(u.tabLabels,d=>(v(),C(he,{key:d},[d===p(n)?(v(),C("div",{key:0,id:`panel-${d}-${p(c)}`,class:"plugin-tabs--content",role:"tabpanel",tabindex:"0","aria-labelledby":`tab-${d}-${p(c)}`},[M(u.$slots,d)],8,_M)):I("",!0)],64))),128))]))}}),kM=e=>{mM(e),e.component("PluginTabs",CM)},Wo=Symbol("theme-config"),p1=Symbol("active-tag"),f1=Symbol("home-page-num"),m1=Symbol("user-works"),g1=Symbol("home-footer");function wM(e){return B({name:"ConfigProvider",setup(t,{slots:n}){var l,c,u;const{theme:r}=pt(),i=w(()=>PM(r.value));nt(g1,(l=i.value.blog)==null?void 0:l.footer),nt(Wo,i),nt(m1,L(((c=i.value.blog)==null?void 0:c.works)||{title:"",description:"",list:[]}));const o=L({label:"",type:""});nt(p1,o);const s=L(1);nt(f1,s);const a=i1({attribute:"theme",modes:{"vp-default":"vp-default","vp-green":"vp-green","vp-yellow":"vp-yellow","vp-red":"vp-red","el-blue":"el-blue","el-yellow":"el-yellow","el-green":"el-green","el-red":"el-red"}});return a.value=((u=i.value.blog)==null?void 0:u.themeColor)??"vp-default",()=>ot(e,null,n)}})}function SM(){const e=Uo(),{frontmatter:t}=pt();return w(()=>{var n,r,i;return((n=t.value)==null?void 0:n.docMetaInsertSelector)||((i=(r=e.config)==null?void 0:r.blog)==null?void 0:i.docMetaInsertSelector)||"h1"})}function xM(){const e=Uo(),{frontmatter:t}=pt();return w(()=>{var n,r,i;return((n=t.value)==null?void 0:n.docMetaInsertPosition)||((i=(r=e.config)==null?void 0:r.blog)==null?void 0:i.docMetaInsertPosition)||"after"})}function Uo(){return{config:Ee(Wo).value}}function Gt(){return Ee(Wo).value.blog}function TM(){var e;return(e=Ee(Wo).value.blog)==null?void 0:e.oml2d}function EM(){var e,t;return((t=(e=Ee(Wo).value)==null?void 0:e.blog)==null?void 0:t.blog)??!0}function AM(){var t,n;return(n=(t=Uo().config)==null?void 0:t.blog)==null?void 0:n.comment}function Yo(){const e=Uo();return w(()=>{var n,r;return((r=(n=e.config)==null?void 0:n.blog)==null?void 0:r.pagesData)||[]})}function v1(){return Ee(p1)}function y1(){return Ee(f1)}function b1(){const e=Uo(),t=Kn(),n=w(()=>{var i,o;return(o=(i=e.config)==null?void 0:i.blog)==null?void 0:o.pagesData});return w(()=>{var s;const i=t.path.replace(/.html$/,""),o=[i,decodeURIComponent(i)];return i.endsWith("/")&&o.push(`${i}index`,`${decodeURIComponent(i)}index`),(s=n.value)==null?void 0:s.find(a=>o.includes(Bn(a.route)))})}function $M(){return Ee(m1)}function PM(e){var t;return{...e,blog:{...e==null?void 0:e.blog,pagesData:((t=e==null?void 0:e.blog)==null?void 0:t.pagesData)||[]}}}function LM(){const e=L(null);return Ae(()=>{const{hash:t}=window.location;t&&(e.value=document.querySelector(decodeURIComponent(t)))}),e}function MM(){const e=ct({id:"",top:-1}),t=()=>{const r=document.querySelectorAll("h1, h2, h3, h4, h5, h6");for(let i=0;i<r.length;i+=1){const o=r[i],s=o.getBoundingClientRect();s.top<=100&&o.id!==e.id&&(e.id=o.id,e.top=s.top)}},n=()=>{t()};return Ae(()=>{window.addEventListener("scroll",n)}),Yn(()=>{window.removeEventListener("scroll",n)}),e}function IM(){return Ee(g1)}function BM(){return Gt().backToTop}const Dl={scale:.08,position:[-30,0],stageStyle:{width:220},mobilePosition:[-10,0],mobileScale:.05,mobileStageStyle:{width:150}},xn={tips:{copyTips:{duration:2e3,message:["复制成功，感谢您的支持！"]},style:{top:"-50px",fontSize:"14px",padding:"10px",width:"200px"},mobileStyle:{top:"-80px",left:"80px",fontSize:"14px",padding:"4px 10px",width:"110px"}}};function OM(){const e=TM();Ae(async()=>{var t,n,r,i,o,s,a;if(e){const{loadOml2d:l}=await We(()=>import("./index.lzjcqklX.js").then(c=>c.i),__vite__mapDeps([43,2]));l({...xn,...e,models:(t=e==null?void 0:e.models)==null?void 0:t.map(c=>({...Dl,...c,stageStyle:{...Dl.stageStyle,...c.stageStyle},mobileStageStyle:{...Dl.mobileStageStyle,...c.mobileStageStyle}})),tips:{...xn.tips,...e.tips,style:{...(n=xn==null?void 0:xn.tips)==null?void 0:n.style,...(r=e==null?void 0:e.tips)==null?void 0:r.style},mobileStyle:{...(i=xn==null?void 0:xn.tips)==null?void 0:i.mobileStyle,...(o=e==null?void 0:e.tips)==null?void 0:o.mobileStyle},copyTips:{...(s=xn==null?void 0:xn.tips)==null?void 0:s.copyTips,...(a=e==null?void 0:e.tips)==null?void 0:a.copyTips}}})}})}function FM(e){const t=[...e];for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t}function Hc(e,t="yyyy-MM-dd hh:mm:ss"){e instanceof Date||(e=new Date(e));const n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,`${e.getFullYear()}`.substr(4-RegExp.$1.length)));for(const r in n)new RegExp(`(${r})`).test(t)&&(t=t.replace(RegExp.$1,RegExp.$1.length===1?n[r]:`00${n[r]}`.substr(`${n[r]}`.length)));return t}function RM(e,t){const n=t||new Date,r=new Date(n.getFullYear(),n.getMonth(),n.getDate()),i=1e3*60*60*24,o=r.getDay(),s=r.getTime()-(o===0?6:o-1)*i;return+e>=s&&+e<=s+7*i}function Qa(e){const t=e?+new Date(e):+new Date,r=+new Date-t,i=1e3,o=i*60,s=o*60,a=s*24,l=a*7;return r<o?`${Math.floor(r/i)}秒前`:r<s?`${Math.floor(r/o)}分钟前`:r<a?`${Math.floor(r/s)}小时前`:r<l?`${Math.floor(r/a)}天前`:Hc(new Date(e),"yyyy-MM-dd")}const NM=/[a-zA-Z0-9_\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g;function DM(e){const t=e.match(NM);let n=0;if(!t)return 0;for(let r=0;r<t.length;r+=1)t[r].charCodeAt(0)>=19968?n+=t[r].length:n+=1;return n}function zM(e){const t=e.match(/github.com\/(.+)/);if(!(t!=null&&t[1]))return Promise.reject(new Error("Github地址格式错误"));const[n,r]=t[1].split("/");return fetch(`https://api.github.com/repos/${n}/${r}`).then(i=>i.json()).then(i=>i.updated_at)}function VM(e,t,n,r){let i=`https://api.github.com/repos/${e}/${t}/commits`;return r&&(i+=`/${r}`),n&&(i+=`?path=${n}`),fetch(i).then(o=>o.json()).then(o=>[o].flat()[0].commit.committer.date)}function HM(e,t){return typeof e=="string"?e:"src"in e?e.src:"light"in e&&"dark"in e?t?e.dark:e.light:""}const qM={key:0,class:"blog-author"},jM=["src"],GM={key:1},WM={__name:"BlogAuthor",setup(e){const{home:t}=Gt(),{frontmatter:n,site:r}=pt(),i=w(()=>{var a,l,c,u;return n.value.author??((l=(a=n.value)==null?void 0:a.blog)==null?void 0:l.author)??(t==null?void 0:t.author)??((u=(c=r.value.themeConfig)==null?void 0:c.blog)==null?void 0:u.author)}),o=w(()=>{var a,l;return n.value.logo??((l=(a=n.value)==null?void 0:a.blog)==null?void 0:l.logo)??(t==null?void 0:t.logo)??r.value.themeConfig.logo}),s=w(()=>i.value||o.value);return(a,l)=>s.value?(v(),C("div",qM,[o.value?(v(),C("img",{key:0,src:p(Bn)(o.value),alt:"avatar"},null,8,jM)):I("",!0),i.value?(v(),C("p",GM,ee(i.value),1)):I("",!0)])):I("",!0)}},Ap=de(WM,[["__scopeId","data-v-6e943dfc"]]),Ko=e=>(Xe("data-v-492c97f6"),e=e(),Qe(),e),UM={class:"card"},YM={class:"overview-data"},KM={class:"overview-item"},XM={class:"count"},QM=Ko(()=>S("span",{class:"label"},"博客文章",-1)),ZM=Ko(()=>S("div",{class:"split"},null,-1)),JM={class:"overview-item"},eI={class:"count"},tI=Ko(()=>S("span",{class:"label"},"本月更新",-1)),nI=Ko(()=>S("div",{class:"split"},null,-1)),rI={class:"overview-item"},iI={class:"count"},oI=Ko(()=>S("span",{class:"label"},"本周更新",-1)),sI=B({__name:"BlogHomeOverview",setup(e){const{home:t}=Gt(),{frontmatter:n}=pt(),r=w(()=>{var d,f;return((f=(d=n.value)==null?void 0:d.blog)==null?void 0:f.avatarMode)||(t==null?void 0:t.avatarMode)||"card"}),i=w(()=>r.value==="card"),o=w(()=>r.value==="split"),s=Yo(),a=w(()=>s.value.filter(d=>{var f;return((f=d.meta)==null?void 0:f.publish)!==!1})),l=new Date().getMonth(),c=new Date().getFullYear(),u=w(()=>a.value.filter(d=>{var g;const f=new Date((g=d.meta)==null?void 0:g.date);return(f==null?void 0:f.getMonth())===l&&f.getFullYear()===c})),h=w(()=>a.value.filter(d=>{var g;const f=new Date((g=d.meta)==null?void 0:g.date);return RM(f)}));return(d,f)=>{var g,m;return v(),C(he,null,[o.value?(v(),X(Ap,{key:0})):I("",!0),S("div",UM,[i.value?(v(),X(Ap,{key:0})):I("",!0),S("div",YM,[S("div",KM,[S("span",XM,ee(a.value.length),1),QM]),ZM,S("div",JM,[S("span",eI,"+"+ee((g=u.value)==null?void 0:g.length),1),tI]),nI,S("div",rI,[S("span",iI,"+"+ee((m=h.value)==null?void 0:m.length),1),oI])])])],64)}}}),aI=de(sI,[["__scopeId","data-v-492c97f6"]]),or=(e,t,{checkForDefaultPrevented:n=!0}={})=>i=>{const o=e==null?void 0:e(i);if(n===!1||!o)return t==null?void 0:t(i)},lI=()=>Ve&&/firefox/i.test(window.navigator.userAgent),cI=(e,t)=>{if(!Ve||!e||!t)return!1;const n=e.getBoundingClientRect();let r;return t instanceof Element?r=t.getBoundingClientRect():r={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},n.top<r.bottom&&n.bottom>r.top&&n.right>r.left&&n.left<r.right};var _1=typeof global=="object"&&global&&global.Object===Object&&global,uI=typeof self=="object"&&self&&self.Object===Object&&self,Zn=_1||uI||Function("return this")(),Br=Zn.Symbol,C1=Object.prototype,dI=C1.hasOwnProperty,hI=C1.toString,ro=Br?Br.toStringTag:void 0;function pI(e){var t=dI.call(e,ro),n=e[ro];try{e[ro]=void 0;var r=!0}catch{}var i=hI.call(e);return r&&(t?e[ro]=n:delete e[ro]),i}var fI=Object.prototype,mI=fI.toString;function gI(e){return mI.call(e)}var vI="[object Null]",yI="[object Undefined]",$p=Br?Br.toStringTag:void 0;function ji(e){return e==null?e===void 0?yI:vI:$p&&$p in Object(e)?pI(e):gI(e)}function Pi(e){return e!=null&&typeof e=="object"}var bI="[object Symbol]";function Za(e){return typeof e=="symbol"||Pi(e)&&ji(e)==bI}function _I(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var mr=Array.isArray,CI=1/0,Pp=Br?Br.prototype:void 0,Lp=Pp?Pp.toString:void 0;function k1(e){if(typeof e=="string")return e;if(mr(e))return _I(e,k1)+"";if(Za(e))return Lp?Lp.call(e):"";var t=e+"";return t=="0"&&1/e==-CI?"-0":t}var kI=/\s/;function wI(e){for(var t=e.length;t--&&kI.test(e.charAt(t)););return t}var SI=/^\s+/;function xI(e){return e&&e.slice(0,wI(e)+1).replace(SI,"")}function ii(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Mp=NaN,TI=/^[-+]0x[0-9a-f]+$/i,EI=/^0b[01]+$/i,AI=/^0o[0-7]+$/i,$I=parseInt;function qc(e){if(typeof e=="number")return e;if(Za(e))return Mp;if(ii(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ii(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=xI(e);var n=EI.test(e);return n||AI.test(e)?$I(e.slice(2),n?2:8):TI.test(e)?Mp:+e}var Ip=1/0,PI=17976931348623157e292;function LI(e){if(!e)return e===0?e:0;if(e=qc(e),e===Ip||e===-Ip){var t=e<0?-1:1;return t*PI}return e===e?e:0}function MI(e){var t=LI(e),n=t%1;return t===t?n?t-n:t:0}function II(e){return e}var BI="[object AsyncFunction]",OI="[object Function]",FI="[object GeneratorFunction]",RI="[object Proxy]";function w1(e){if(!ii(e))return!1;var t=ji(e);return t==OI||t==FI||t==BI||t==RI}var zl=Zn["__core-js_shared__"],Bp=function(){var e=/[^.]+$/.exec(zl&&zl.keys&&zl.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function NI(e){return!!Bp&&Bp in e}var DI=Function.prototype,zI=DI.toString;function ui(e){if(e!=null){try{return zI.call(e)}catch{}try{return e+""}catch{}}return""}var VI=/[\\^$.*+?()[\]{}|]/g,HI=/^\[object .+?Constructor\]$/,qI=Function.prototype,jI=Object.prototype,GI=qI.toString,WI=jI.hasOwnProperty,UI=RegExp("^"+GI.call(WI).replace(VI,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function YI(e){if(!ii(e)||NI(e))return!1;var t=w1(e)?UI:HI;return t.test(ui(e))}function KI(e,t){return e==null?void 0:e[t]}function Gi(e,t){var n=KI(e,t);return YI(n)?n:void 0}var jc=Gi(Zn,"WeakMap");function XI(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1}var QI=9007199254740991,ZI=/^(?:0|[1-9]\d*)$/;function S1(e,t){var n=typeof e;return t=t??QI,!!t&&(n=="number"||n!="symbol"&&ZI.test(e))&&e>-1&&e%1==0&&e<t}function x1(e,t){return e===t||e!==e&&t!==t}var JI=9007199254740991;function Zu(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=JI}function eB(e){return e!=null&&Zu(e.length)&&!w1(e)}var tB=Object.prototype;function nB(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||tB;return e===n}function rB(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var iB="[object Arguments]";function Op(e){return Pi(e)&&ji(e)==iB}var T1=Object.prototype,oB=T1.hasOwnProperty,sB=T1.propertyIsEnumerable,E1=Op(function(){return arguments}())?Op:function(e){return Pi(e)&&oB.call(e,"callee")&&!sB.call(e,"callee")};function aB(){return!1}var A1=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fp=A1&&typeof module=="object"&&module&&!module.nodeType&&module,lB=Fp&&Fp.exports===A1,Rp=lB?Zn.Buffer:void 0,cB=Rp?Rp.isBuffer:void 0,Gc=cB||aB,uB="[object Arguments]",dB="[object Array]",hB="[object Boolean]",pB="[object Date]",fB="[object Error]",mB="[object Function]",gB="[object Map]",vB="[object Number]",yB="[object Object]",bB="[object RegExp]",_B="[object Set]",CB="[object String]",kB="[object WeakMap]",wB="[object ArrayBuffer]",SB="[object DataView]",xB="[object Float32Array]",TB="[object Float64Array]",EB="[object Int8Array]",AB="[object Int16Array]",$B="[object Int32Array]",PB="[object Uint8Array]",LB="[object Uint8ClampedArray]",MB="[object Uint16Array]",IB="[object Uint32Array]",Ke={};Ke[xB]=Ke[TB]=Ke[EB]=Ke[AB]=Ke[$B]=Ke[PB]=Ke[LB]=Ke[MB]=Ke[IB]=!0;Ke[uB]=Ke[dB]=Ke[wB]=Ke[hB]=Ke[SB]=Ke[pB]=Ke[fB]=Ke[mB]=Ke[gB]=Ke[vB]=Ke[yB]=Ke[bB]=Ke[_B]=Ke[CB]=Ke[kB]=!1;function BB(e){return Pi(e)&&Zu(e.length)&&!!Ke[ji(e)]}function OB(e){return function(t){return e(t)}}var $1=typeof exports=="object"&&exports&&!exports.nodeType&&exports,go=$1&&typeof module=="object"&&module&&!module.nodeType&&module,FB=go&&go.exports===$1,Vl=FB&&_1.process,Np=function(){try{var e=go&&go.require&&go.require("util").types;return e||Vl&&Vl.binding&&Vl.binding("util")}catch{}}(),Dp=Np&&Np.isTypedArray,P1=Dp?OB(Dp):BB,RB=Object.prototype,NB=RB.hasOwnProperty;function DB(e,t){var n=mr(e),r=!n&&E1(e),i=!n&&!r&&Gc(e),o=!n&&!r&&!i&&P1(e),s=n||r||i||o,a=s?rB(e.length,String):[],l=a.length;for(var c in e)(t||NB.call(e,c))&&!(s&&(c=="length"||i&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||S1(c,l)))&&a.push(c);return a}function zB(e,t){return function(n){return e(t(n))}}var VB=zB(Object.keys,Object),HB=Object.prototype,qB=HB.hasOwnProperty;function jB(e){if(!nB(e))return VB(e);var t=[];for(var n in Object(e))qB.call(e,n)&&n!="constructor"&&t.push(n);return t}function L1(e){return eB(e)?DB(e):jB(e)}var GB=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,WB=/^\w*$/;function Ju(e,t){if(mr(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Za(e)?!0:WB.test(e)||!GB.test(e)||t!=null&&e in Object(t)}var Mo=Gi(Object,"create");function UB(){this.__data__=Mo?Mo(null):{},this.size=0}function YB(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var KB="__lodash_hash_undefined__",XB=Object.prototype,QB=XB.hasOwnProperty;function ZB(e){var t=this.__data__;if(Mo){var n=t[e];return n===KB?void 0:n}return QB.call(t,e)?t[e]:void 0}var JB=Object.prototype,eO=JB.hasOwnProperty;function tO(e){var t=this.__data__;return Mo?t[e]!==void 0:eO.call(t,e)}var nO="__lodash_hash_undefined__";function rO(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Mo&&t===void 0?nO:t,this}function oi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}oi.prototype.clear=UB;oi.prototype.delete=YB;oi.prototype.get=ZB;oi.prototype.has=tO;oi.prototype.set=rO;function iO(){this.__data__=[],this.size=0}function Ja(e,t){for(var n=e.length;n--;)if(x1(e[n][0],t))return n;return-1}var oO=Array.prototype,sO=oO.splice;function aO(e){var t=this.__data__,n=Ja(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():sO.call(t,n,1),--this.size,!0}function lO(e){var t=this.__data__,n=Ja(t,e);return n<0?void 0:t[n][1]}function cO(e){return Ja(this.__data__,e)>-1}function uO(e,t){var n=this.__data__,r=Ja(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function br(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}br.prototype.clear=iO;br.prototype.delete=aO;br.prototype.get=lO;br.prototype.has=cO;br.prototype.set=uO;var Io=Gi(Zn,"Map");function dO(){this.size=0,this.__data__={hash:new oi,map:new(Io||br),string:new oi}}function hO(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function el(e,t){var n=e.__data__;return hO(t)?n[typeof t=="string"?"string":"hash"]:n.map}function pO(e){var t=el(this,e).delete(e);return this.size-=t?1:0,t}function fO(e){return el(this,e).get(e)}function mO(e){return el(this,e).has(e)}function gO(e,t){var n=el(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function _r(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_r.prototype.clear=dO;_r.prototype.delete=pO;_r.prototype.get=fO;_r.prototype.has=mO;_r.prototype.set=gO;var vO="Expected a function";function ed(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(vO);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(ed.Cache||_r),n}ed.Cache=_r;var yO=500;function bO(e){var t=ed(e,function(r){return n.size===yO&&n.clear(),r}),n=t.cache;return t}var _O=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,CO=/\\(\\)?/g,kO=bO(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(_O,function(n,r,i,o){t.push(i?o.replace(CO,"$1"):r||n)}),t});function wO(e){return e==null?"":k1(e)}function M1(e,t){return mr(e)?e:Ju(e,t)?[e]:kO(wO(e))}var SO=1/0;function tl(e){if(typeof e=="string"||Za(e))return e;var t=e+"";return t=="0"&&1/e==-SO?"-0":t}function I1(e,t){t=M1(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[tl(t[n++])];return n&&n==r?e:void 0}function lr(e,t,n){var r=e==null?void 0:I1(e,t);return r===void 0?n:r}function xO(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function TO(){this.__data__=new br,this.size=0}function EO(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function AO(e){return this.__data__.get(e)}function $O(e){return this.__data__.has(e)}var PO=200;function LO(e,t){var n=this.__data__;if(n instanceof br){var r=n.__data__;if(!Io||r.length<PO-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new _r(r)}return n.set(e,t),this.size=n.size,this}function dr(e){var t=this.__data__=new br(e);this.size=t.size}dr.prototype.clear=TO;dr.prototype.delete=EO;dr.prototype.get=AO;dr.prototype.has=$O;dr.prototype.set=LO;function MO(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}function IO(){return[]}var BO=Object.prototype,OO=BO.propertyIsEnumerable,zp=Object.getOwnPropertySymbols,FO=zp?function(e){return e==null?[]:(e=Object(e),MO(zp(e),function(t){return OO.call(e,t)}))}:IO;const RO=FO;function NO(e,t,n){var r=t(e);return mr(e)?r:xO(r,n(e))}function Vp(e){return NO(e,L1,RO)}var Wc=Gi(Zn,"DataView"),Uc=Gi(Zn,"Promise"),Yc=Gi(Zn,"Set"),Hp="[object Map]",DO="[object Object]",qp="[object Promise]",jp="[object Set]",Gp="[object WeakMap]",Wp="[object DataView]",zO=ui(Wc),VO=ui(Io),HO=ui(Uc),qO=ui(Yc),jO=ui(jc),jr=ji;(Wc&&jr(new Wc(new ArrayBuffer(1)))!=Wp||Io&&jr(new Io)!=Hp||Uc&&jr(Uc.resolve())!=qp||Yc&&jr(new Yc)!=jp||jc&&jr(new jc)!=Gp)&&(jr=function(e){var t=ji(e),n=t==DO?e.constructor:void 0,r=n?ui(n):"";if(r)switch(r){case zO:return Wp;case VO:return Hp;case HO:return qp;case qO:return jp;case jO:return Gp}return t});const Up=jr;var GO=Zn.Uint8Array;const Yp=GO;var WO="__lodash_hash_undefined__";function UO(e){return this.__data__.set(e,WO),this}function YO(e){return this.__data__.has(e)}function ya(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new _r;++t<n;)this.add(e[t])}ya.prototype.add=ya.prototype.push=UO;ya.prototype.has=YO;function KO(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function XO(e,t){return e.has(t)}var QO=1,ZO=2;function B1(e,t,n,r,i,o){var s=n&QO,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var h=-1,d=!0,f=n&ZO?new ya:void 0;for(o.set(e,t),o.set(t,e);++h<a;){var g=e[h],m=t[h];if(r)var y=s?r(m,g,h,t,e,o):r(g,m,h,e,t,o);if(y!==void 0){if(y)continue;d=!1;break}if(f){if(!KO(t,function(b,k){if(!XO(f,k)&&(g===b||i(g,b,n,r,o)))return f.push(k)})){d=!1;break}}else if(!(g===m||i(g,m,n,r,o))){d=!1;break}}return o.delete(e),o.delete(t),d}function JO(e){var t=-1,n=Array(e.size);return e.forEach(function(r,i){n[++t]=[i,r]}),n}function eF(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var tF=1,nF=2,rF="[object Boolean]",iF="[object Date]",oF="[object Error]",sF="[object Map]",aF="[object Number]",lF="[object RegExp]",cF="[object Set]",uF="[object String]",dF="[object Symbol]",hF="[object ArrayBuffer]",pF="[object DataView]",Kp=Br?Br.prototype:void 0,Hl=Kp?Kp.valueOf:void 0;function fF(e,t,n,r,i,o,s){switch(n){case pF:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case hF:return!(e.byteLength!=t.byteLength||!o(new Yp(e),new Yp(t)));case rF:case iF:case aF:return x1(+e,+t);case oF:return e.name==t.name&&e.message==t.message;case lF:case uF:return e==t+"";case sF:var a=JO;case cF:var l=r&tF;if(a||(a=eF),e.size!=t.size&&!l)return!1;var c=s.get(e);if(c)return c==t;r|=nF,s.set(e,t);var u=B1(a(e),a(t),r,i,o,s);return s.delete(e),u;case dF:if(Hl)return Hl.call(e)==Hl.call(t)}return!1}var mF=1,gF=Object.prototype,vF=gF.hasOwnProperty;function yF(e,t,n,r,i,o){var s=n&mF,a=Vp(e),l=a.length,c=Vp(t),u=c.length;if(l!=u&&!s)return!1;for(var h=l;h--;){var d=a[h];if(!(s?d in t:vF.call(t,d)))return!1}var f=o.get(e),g=o.get(t);if(f&&g)return f==t&&g==e;var m=!0;o.set(e,t),o.set(t,e);for(var y=s;++h<l;){d=a[h];var b=e[d],k=t[d];if(r)var _=s?r(k,b,d,t,e,o):r(b,k,d,e,t,o);if(!(_===void 0?b===k||i(b,k,n,r,o):_)){m=!1;break}y||(y=d=="constructor")}if(m&&!y){var x=e.constructor,T=t.constructor;x!=T&&"constructor"in e&&"constructor"in t&&!(typeof x=="function"&&x instanceof x&&typeof T=="function"&&T instanceof T)&&(m=!1)}return o.delete(e),o.delete(t),m}var bF=1,Xp="[object Arguments]",Qp="[object Array]",_s="[object Object]",_F=Object.prototype,Zp=_F.hasOwnProperty;function CF(e,t,n,r,i,o){var s=mr(e),a=mr(t),l=s?Qp:Up(e),c=a?Qp:Up(t);l=l==Xp?_s:l,c=c==Xp?_s:c;var u=l==_s,h=c==_s,d=l==c;if(d&&Gc(e)){if(!Gc(t))return!1;s=!0,u=!1}if(d&&!u)return o||(o=new dr),s||P1(e)?B1(e,t,n,r,i,o):fF(e,t,l,n,r,i,o);if(!(n&bF)){var f=u&&Zp.call(e,"__wrapped__"),g=h&&Zp.call(t,"__wrapped__");if(f||g){var m=f?e.value():e,y=g?t.value():t;return o||(o=new dr),i(m,y,n,r,o)}}return d?(o||(o=new dr),yF(e,t,n,r,i,o)):!1}function nl(e,t,n,r,i){return e===t?!0:e==null||t==null||!Pi(e)&&!Pi(t)?e!==e&&t!==t:CF(e,t,n,r,nl,i)}var kF=1,wF=2;function SF(e,t,n,r){var i=n.length,o=i,s=!r;if(e==null)return!o;for(e=Object(e);i--;){var a=n[i];if(s&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++i<o;){a=n[i];var l=a[0],c=e[l],u=a[1];if(s&&a[2]){if(c===void 0&&!(l in e))return!1}else{var h=new dr;if(r)var d=r(c,u,l,e,t,h);if(!(d===void 0?nl(u,c,kF|wF,r,h):d))return!1}}return!0}function O1(e){return e===e&&!ii(e)}function xF(e){for(var t=L1(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,O1(i)]}return t}function F1(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function TF(e){var t=xF(e);return t.length==1&&t[0][2]?F1(t[0][0],t[0][1]):function(n){return n===e||SF(n,e,t)}}function EF(e,t){return e!=null&&t in Object(e)}function AF(e,t,n){t=M1(t,e);for(var r=-1,i=t.length,o=!1;++r<i;){var s=tl(t[r]);if(!(o=e!=null&&n(e,s)))break;e=e[s]}return o||++r!=i?o:(i=e==null?0:e.length,!!i&&Zu(i)&&S1(s,i)&&(mr(e)||E1(e)))}function $F(e,t){return e!=null&&AF(e,t,EF)}var PF=1,LF=2;function MF(e,t){return Ju(e)&&O1(t)?F1(tl(e),t):function(n){var r=lr(n,e);return r===void 0&&r===t?$F(n,e):nl(t,r,PF|LF)}}function IF(e){return function(t){return t==null?void 0:t[e]}}function BF(e){return function(t){return I1(t,e)}}function OF(e){return Ju(e)?IF(tl(e)):BF(e)}function FF(e){return typeof e=="function"?e:e==null?II:typeof e=="object"?mr(e)?MF(e[0],e[1]):TF(e):OF(e)}var ql=function(){return Zn.Date.now()},RF="Expected a function",NF=Math.max,DF=Math.min;function R1(e,t,n){var r,i,o,s,a,l,c=0,u=!1,h=!1,d=!0;if(typeof e!="function")throw new TypeError(RF);t=qc(t)||0,ii(n)&&(u=!!n.leading,h="maxWait"in n,o=h?NF(qc(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d);function f(A){var E=r,O=i;return r=i=void 0,c=A,s=e.apply(O,E),s}function g(A){return c=A,a=setTimeout(b,t),u?f(A):s}function m(A){var E=A-l,O=A-c,J=t-E;return h?DF(J,o-O):J}function y(A){var E=A-l,O=A-c;return l===void 0||E>=t||E<0||h&&O>=o}function b(){var A=ql();if(y(A))return k(A);a=setTimeout(b,m(A))}function k(A){return a=void 0,d&&r?f(A):(r=i=void 0,s)}function _(){a!==void 0&&clearTimeout(a),c=0,r=l=i=a=void 0}function x(){return a===void 0?s:k(ql())}function T(){var A=ql(),E=y(A);if(r=arguments,i=this,l=A,E){if(a===void 0)return g(l);if(h)return clearTimeout(a),a=setTimeout(b,t),f(l)}return a===void 0&&(a=setTimeout(b,t)),s}return T.cancel=_,T.flush=x,T}var zF=Math.max,VF=Math.min;function HF(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=r-1;return n!==void 0&&(i=MI(n),i=n<0?zF(r+i,0):VF(i,r-1)),XI(e,FF(t),i,!0)}function ba(e){for(var t=-1,n=e==null?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r}function Bo(e,t){return nl(e,t)}function Xo(e){return e==null}function qF(e){return e===void 0}var jF="Expected a function";function vo(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(jF);return ii(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),R1(e,t,{leading:r,maxWait:t,trailing:i})}const td=e=>e===void 0,N1=e=>typeof e=="boolean",Ne=e=>typeof e=="number",si=e=>typeof Element>"u"?!1:e instanceof Element,GF=e=>mn(e)?!Number.isNaN(Number(e)):!1,WF=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),_a=e=>Object.keys(e);class UF extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function YF(e,t){throw new UF(`[${e}] ${t}`)}const KF=(e,t)=>{var n;if(!Ve||!e||!t)return"";let r=ty(t);r==="float"&&(r="cssFloat");try{const i=e.style[r];if(i)return i;const o=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,"");return o?o[r]:""}catch{return e.style[r]}};function Ca(e,t="px"){if(!e)return"";if(Ne(e)||GF(e))return`${e}${t}`;if(mn(e))return e}const XF=(e,t)=>{if(!Ve)return!1;const n={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(t)],r=KF(e,n);return["scroll","auto","overlay"].some(i=>r.includes(i))},QF=(e,t)=>{if(!Ve)return;let n=e;for(;n;){if([window,document,document.documentElement].includes(n))return window;if(XF(n,t))return n;n=n.parentNode}return n};function ZF(e,t){if(!Ve)return;if(!t){e.scrollTop=0;return}const n=[];let r=t.offsetParent;for(;r!==null&&e!==r&&e.contains(r);)n.push(r),r=r.offsetParent;const i=t.offsetTop+n.reduce((l,c)=>l+c.offsetTop,0),o=i+t.offsetHeight,s=e.scrollTop,a=s+e.clientHeight;i<s?e.scrollTop=i:o>a&&(e.scrollTop=o-e.clientHeight)}/*! Element Plus Icons Vue v2.3.1 */var JF=B({name:"AlarmClock",__name:"alarm-clock",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768"}),S("path",{fill:"currentColor",d:"m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128z"})]))}}),jl=JF,eR=B({name:"ArrowDown",__name:"arrow-down",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"})]))}}),tR=eR,nR=B({name:"ArrowLeft",__name:"arrow-left",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"})]))}}),nd=nR,rR=B({name:"ArrowRight",__name:"arrow-right",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"})]))}}),rd=rR,iR=B({name:"CircleCheck",__name:"circle-check",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"}),S("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"})]))}}),oR=iR,sR=B({name:"CircleCloseFilled",__name:"circle-close-filled",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})]))}}),id=sR,aR=B({name:"CircleClose",__name:"circle-close",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"}),S("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"})]))}}),od=aR,lR=B({name:"Clock",__name:"clock",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"}),S("path",{fill:"currentColor",d:"M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"}),S("path",{fill:"currentColor",d:"M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"})]))}}),cR=lR,uR=B({name:"Close",__name:"close",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})]))}}),ka=uR,dR=B({name:"CollectionTag",__name:"collection-tag",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32"})]))}}),hR=dR,pR=B({name:"Comment",__name:"comment",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112m-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112m-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112M128 128v640h192v160l224-160h352V128z"})]))}}),fR=pR,mR=B({name:"DArrowLeft",__name:"d-arrow-left",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"})]))}}),gR=mR,vR=B({name:"DArrowRight",__name:"d-arrow-right",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"})]))}}),yR=vR,bR=B({name:"EditPen",__name:"edit-pen",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336zm384 254.272v-64h448v64h-448z"})]))}}),Gl=bR,_R=B({name:"FullScreen",__name:"full-screen",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z"})]))}}),CR=_R,kR=B({name:"Hide",__name:"hide",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"}),S("path",{fill:"currentColor",d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"})]))}}),wR=kR,SR=B({name:"InfoFilled",__name:"info-filled",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})]))}}),D1=SR,xR=B({name:"Loading",__name:"loading",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"})]))}}),z1=xR,TR=B({name:"MoreFilled",__name:"more-filled",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224"})]))}}),Jp=TR,ER=B({name:"RefreshLeft",__name:"refresh-left",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"})]))}}),AR=ER,$R=B({name:"RefreshRight",__name:"refresh-right",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"})]))}}),PR=$R,LR=B({name:"ScaleToOriginal",__name:"scale-to-original",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118M512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412M512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512"})]))}}),MR=LR,IR=B({name:"SuccessFilled",__name:"success-filled",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})]))}}),V1=IR,BR=B({name:"UserFilled",__name:"user-filled",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"})]))}}),OR=BR,FR=B({name:"View",__name:"view",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"})]))}}),RR=FR,NR=B({name:"WarningFilled",__name:"warning-filled",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})]))}}),H1=NR,DR=B({name:"ZoomIn",__name:"zoom-in",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z"})]))}}),zR=DR,VR=B({name:"ZoomOut",__name:"zoom-out",setup(e){return(t,n)=>(v(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[S("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704M352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64"})]))}}),HR=VR;const q1="__epPropKey",we=e=>e,qR=e=>pn(e)&&!!e[q1],rl=(e,t)=>{if(!pn(e)||qR(e))return e;const{values:n,required:r,default:i,type:o,validator:s}=e,l={type:o,required:!!r,validator:n||s?c=>{let u=!1,h=[];if(n&&(h=Array.from(n),Id(e,"default")&&h.push(i),u||(u=h.includes(c))),s&&(u||(u=s(c))),!u&&h.length>0){const d=[...new Set(h)].map(f=>JSON.stringify(f)).join(", ");ny(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${d}], got value ${JSON.stringify(c)}.`)}return u}:void 0,[q1]:!0};return Id(e,"default")&&(l.default=i),l},Oe=e=>ba(Object.entries(e).map(([t,n])=>[t,rl(n,t)])),tn=we([String,Object,Function]),j1={Close:ka,SuccessFilled:V1,InfoFilled:D1,WarningFilled:H1,CircleCloseFilled:id},wa={success:V1,warning:H1,error:id,info:D1},G1={validating:z1,success:oR,error:od},Ct=(e,t)=>{if(e.install=n=>{for(const r of[e,...Object.values(t??{})])n.component(r.name,r)},t)for(const[n,r]of Object.entries(t))e[n]=r;return e},jR=(e,t)=>(e.install=n=>{e._context=n._context,n.config.globalProperties[t]=e},e),il=e=>(e.install=Co,e),hn={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},$n="update:modelValue",W1="change",Qo=["","default","small","large"],yo=e=>{const t=Ot(e)?e:[e],n=[];return t.forEach(r=>{var i;Ot(r)?n.push(...yo(r)):Ci(r)&&Ot(r.children)?n.push(...yo(r.children)):(n.push(r),Ci(r)&&((i=r.component)!=null&&i.subTree)&&n.push(...yo(r.component.subTree)))}),n},U1=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),Wi=e=>e,GR=["class","style"],WR=/^on[A-Z]/,Y1=(e={})=>{const{excludeListeners:t=!1,excludeKeys:n}=e,r=w(()=>((n==null?void 0:n.value)||[]).concat(GR)),i=_t();return i?w(()=>{var o;return ba(Object.entries((o=i.proxy)==null?void 0:o.$attrs).filter(([s])=>!r.value.includes(s)&&!(t&&WR.test(s))))}):w(()=>({}))},UR=({from:e,replacement:t,scope:n,version:r,ref:i,type:o="API"},s)=>{oe(()=>p(s),a=>{},{immediate:!0})};var YR={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};const KR=e=>(t,n)=>XR(t,n,p(e)),XR=(e,t,n)=>lr(n,e,e).replace(/\{(\w+)\}/g,(r,i)=>{var o;return`${(o=t==null?void 0:t[i])!=null?o:`{${i}}`}`}),QR=e=>{const t=w(()=>p(e).name),n=Qf(e)?e:L(e);return{lang:t,locale:n,t:KR(e)}},K1=Symbol("localeContextKey"),_n=e=>{const t=e||Ee(K1,L());return QR(w(()=>t.value||YR))},qs="el",ZR="is-",Vr=(e,t,n,r,i)=>{let o=`${e}-${t}`;return n&&(o+=`-${n}`),r&&(o+=`__${r}`),i&&(o+=`--${i}`),o},X1=Symbol("namespaceContextKey"),sd=e=>{const t=e||(_t()?Ee(X1,L(qs)):L(qs));return w(()=>p(t)||qs)},Be=(e,t)=>{const n=sd(t);return{namespace:n,b:(m="")=>Vr(n.value,e,m,"",""),e:m=>m?Vr(n.value,e,"",m,""):"",m:m=>m?Vr(n.value,e,"","",m):"",be:(m,y)=>m&&y?Vr(n.value,e,m,y,""):"",em:(m,y)=>m&&y?Vr(n.value,e,"",m,y):"",bm:(m,y)=>m&&y?Vr(n.value,e,m,"",y):"",bem:(m,y,b)=>m&&y&&b?Vr(n.value,e,m,y,b):"",is:(m,...y)=>{const b=y.length>=1?y[0]:!0;return m&&b?`${ZR}${m}`:""},cssVar:m=>{const y={};for(const b in m)m[b]&&(y[`--${n.value}-${b}`]=m[b]);return y},cssVarName:m=>`--${n.value}-${m}`,cssVarBlock:m=>{const y={};for(const b in m)m[b]&&(y[`--${n.value}-${e}-${b}`]=m[b]);return y},cssVarBlockName:m=>`--${n.value}-${e}-${m}`}},JR=rl({type:we(Boolean),default:null}),eN=rl({type:we(Function)}),Q1=e=>{const t=`update:${e}`,n=`onUpdate:${e}`,r=[t],i={[e]:JR,[n]:eN};return{useModelToggle:({indicator:s,toggleReason:a,shouldHideWhenRouteChanges:l,shouldProceed:c,onShow:u,onHide:h})=>{const d=_t(),{emit:f}=d,g=d.props,m=w(()=>Rt(g[n])),y=w(()=>g[e]===null),b=E=>{s.value!==!0&&(s.value=!0,a&&(a.value=E),Rt(u)&&u(E))},k=E=>{s.value!==!1&&(s.value=!1,a&&(a.value=E),Rt(h)&&h(E))},_=E=>{if(g.disabled===!0||Rt(c)&&!c())return;const O=m.value&&Ve;O&&f(t,!0),(y.value||!O)&&b(E)},x=E=>{if(g.disabled===!0||!Ve)return;const O=m.value&&Ve;O&&f(t,!1),(y.value||!O)&&k(E)},T=E=>{N1(E)&&(g.disabled&&E?m.value&&f(t,!1):s.value!==E&&(E?b():k()))},A=()=>{s.value?x():_()};return oe(()=>g[e],T),l&&d.appContext.config.globalProperties.$route!==void 0&&oe(()=>({...d.proxy.$route}),()=>{l.value&&s.value&&x()}),Ae(()=>{T(g[e])}),{hide:x,show:_,toggle:A,hasUpdateHandler:m}},useModelToggleProps:i,useModelToggleEmits:r}};Q1("modelValue");const Z1=e=>{const t=_t();return w(()=>{var n,r;return(r=(n=t==null?void 0:t.proxy)==null?void 0:n.$props)==null?void 0:r[e]})};var Vt="top",yn="bottom",bn="right",Ht="left",ad="auto",Zo=[Vt,yn,bn,Ht],Li="start",Oo="end",tN="clippingParents",J1="viewport",io="popper",nN="reference",ef=Zo.reduce(function(e,t){return e.concat([t+"-"+Li,t+"-"+Oo])},[]),ol=[].concat(Zo,[ad]).reduce(function(e,t){return e.concat([t,t+"-"+Li,t+"-"+Oo])},[]),rN="beforeRead",iN="read",oN="afterRead",sN="beforeMain",aN="main",lN="afterMain",cN="beforeWrite",uN="write",dN="afterWrite",hN=[rN,iN,oN,sN,aN,lN,cN,uN,dN];function Un(e){return e?(e.nodeName||"").toLowerCase():null}function Nn(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Mi(e){var t=Nn(e).Element;return e instanceof t||e instanceof Element}function gn(e){var t=Nn(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ld(e){if(typeof ShadowRoot>"u")return!1;var t=Nn(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function pN(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},i=t.attributes[n]||{},o=t.elements[n];!gn(o)||!Un(o)||(Object.assign(o.style,r),Object.keys(i).forEach(function(s){var a=i[s];a===!1?o.removeAttribute(s):o.setAttribute(s,a===!0?"":a)}))})}function fN(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var i=t.elements[r],o=t.attributes[r]||{},s=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),a=s.reduce(function(l,c){return l[c]="",l},{});!gn(i)||!Un(i)||(Object.assign(i.style,a),Object.keys(o).forEach(function(l){i.removeAttribute(l)}))})}}var ev={name:"applyStyles",enabled:!0,phase:"write",fn:pN,effect:fN,requires:["computeStyles"]};function jn(e){return e.split("-")[0]}var Zr=Math.max,Sa=Math.min,Ii=Math.round;function Bi(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),r=1,i=1;if(gn(e)&&t){var o=e.offsetHeight,s=e.offsetWidth;s>0&&(r=Ii(n.width)/s||1),o>0&&(i=Ii(n.height)/o||1)}return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function cd(e){var t=Bi(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function tv(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&ld(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function gr(e){return Nn(e).getComputedStyle(e)}function mN(e){return["table","td","th"].indexOf(Un(e))>=0}function Rr(e){return((Mi(e)?e.ownerDocument:e.document)||window.document).documentElement}function sl(e){return Un(e)==="html"?e:e.assignedSlot||e.parentNode||(ld(e)?e.host:null)||Rr(e)}function tf(e){return!gn(e)||gr(e).position==="fixed"?null:e.offsetParent}function gN(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&gn(e)){var r=gr(e);if(r.position==="fixed")return null}var i=sl(e);for(ld(i)&&(i=i.host);gn(i)&&["html","body"].indexOf(Un(i))<0;){var o=gr(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function Jo(e){for(var t=Nn(e),n=tf(e);n&&mN(n)&&gr(n).position==="static";)n=tf(n);return n&&(Un(n)==="html"||Un(n)==="body"&&gr(n).position==="static")?t:n||gN(e)||t}function ud(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function bo(e,t,n){return Zr(e,Sa(t,n))}function vN(e,t,n){var r=bo(e,t,n);return r>n?n:r}function nv(){return{top:0,right:0,bottom:0,left:0}}function rv(e){return Object.assign({},nv(),e)}function iv(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var yN=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,rv(typeof e!="number"?e:iv(e,Zo))};function bN(e){var t,n=e.state,r=e.name,i=e.options,o=n.elements.arrow,s=n.modifiersData.popperOffsets,a=jn(n.placement),l=ud(a),c=[Ht,bn].indexOf(a)>=0,u=c?"height":"width";if(!(!o||!s)){var h=yN(i.padding,n),d=cd(o),f=l==="y"?Vt:Ht,g=l==="y"?yn:bn,m=n.rects.reference[u]+n.rects.reference[l]-s[l]-n.rects.popper[u],y=s[l]-n.rects.reference[l],b=Jo(o),k=b?l==="y"?b.clientHeight||0:b.clientWidth||0:0,_=m/2-y/2,x=h[f],T=k-d[u]-h[g],A=k/2-d[u]/2+_,E=bo(x,A,T),O=l;n.modifiersData[r]=(t={},t[O]=E,t.centerOffset=E-A,t)}}function _N(e){var t=e.state,n=e.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||!tv(t.elements.popper,i)||(t.elements.arrow=i))}var CN={name:"arrow",enabled:!0,phase:"main",fn:bN,effect:_N,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Oi(e){return e.split("-")[1]}var kN={top:"auto",right:"auto",bottom:"auto",left:"auto"};function wN(e){var t=e.x,n=e.y,r=window,i=r.devicePixelRatio||1;return{x:Ii(t*i)/i||0,y:Ii(n*i)/i||0}}function nf(e){var t,n=e.popper,r=e.popperRect,i=e.placement,o=e.variation,s=e.offsets,a=e.position,l=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,h=e.isFixed,d=s.x,f=d===void 0?0:d,g=s.y,m=g===void 0?0:g,y=typeof u=="function"?u({x:f,y:m}):{x:f,y:m};f=y.x,m=y.y;var b=s.hasOwnProperty("x"),k=s.hasOwnProperty("y"),_=Ht,x=Vt,T=window;if(c){var A=Jo(n),E="clientHeight",O="clientWidth";if(A===Nn(n)&&(A=Rr(n),gr(A).position!=="static"&&a==="absolute"&&(E="scrollHeight",O="scrollWidth")),A=A,i===Vt||(i===Ht||i===bn)&&o===Oo){x=yn;var J=h&&A===T&&T.visualViewport?T.visualViewport.height:A[E];m-=J-r.height,m*=l?1:-1}if(i===Ht||(i===Vt||i===yn)&&o===Oo){_=bn;var R=h&&A===T&&T.visualViewport?T.visualViewport.width:A[O];f-=R-r.width,f*=l?1:-1}}var P=Object.assign({position:a},c&&kN),K=u===!0?wN({x:f,y:m}):{x:f,y:m};if(f=K.x,m=K.y,l){var H;return Object.assign({},P,(H={},H[x]=k?"0":"",H[_]=b?"0":"",H.transform=(T.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",H))}return Object.assign({},P,(t={},t[x]=k?m+"px":"",t[_]=b?f+"px":"",t.transform="",t))}function SN(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0?!0:r,o=n.adaptive,s=o===void 0?!0:o,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:jn(t.placement),variation:Oi(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,nf(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,nf(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var ov={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:SN,data:{}},Cs={passive:!0};function xN(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,o=i===void 0?!0:i,s=r.resize,a=s===void 0?!0:s,l=Nn(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(u){u.addEventListener("scroll",n.update,Cs)}),a&&l.addEventListener("resize",n.update,Cs),function(){o&&c.forEach(function(u){u.removeEventListener("scroll",n.update,Cs)}),a&&l.removeEventListener("resize",n.update,Cs)}}var sv={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:xN,data:{}},TN={left:"right",right:"left",bottom:"top",top:"bottom"};function js(e){return e.replace(/left|right|bottom|top/g,function(t){return TN[t]})}var EN={start:"end",end:"start"};function rf(e){return e.replace(/start|end/g,function(t){return EN[t]})}function dd(e){var t=Nn(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function hd(e){return Bi(Rr(e)).left+dd(e).scrollLeft}function AN(e){var t=Nn(e),n=Rr(e),r=t.visualViewport,i=n.clientWidth,o=n.clientHeight,s=0,a=0;return r&&(i=r.width,o=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:i,height:o,x:s+hd(e),y:a}}function $N(e){var t,n=Rr(e),r=dd(e),i=(t=e.ownerDocument)==null?void 0:t.body,o=Zr(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=Zr(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+hd(e),l=-r.scrollTop;return gr(i||n).direction==="rtl"&&(a+=Zr(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:a,y:l}}function pd(e){var t=gr(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function av(e){return["html","body","#document"].indexOf(Un(e))>=0?e.ownerDocument.body:gn(e)&&pd(e)?e:av(sl(e))}function _o(e,t){var n;t===void 0&&(t=[]);var r=av(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),o=Nn(r),s=i?[o].concat(o.visualViewport||[],pd(r)?r:[]):r,a=t.concat(s);return i?a:a.concat(_o(sl(s)))}function Kc(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function PN(e){var t=Bi(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function of(e,t){return t===J1?Kc(AN(e)):Mi(t)?PN(t):Kc($N(Rr(e)))}function LN(e){var t=_o(sl(e)),n=["absolute","fixed"].indexOf(gr(e).position)>=0,r=n&&gn(e)?Jo(e):e;return Mi(r)?t.filter(function(i){return Mi(i)&&tv(i,r)&&Un(i)!=="body"}):[]}function MN(e,t,n){var r=t==="clippingParents"?LN(e):[].concat(t),i=[].concat(r,[n]),o=i[0],s=i.reduce(function(a,l){var c=of(e,l);return a.top=Zr(c.top,a.top),a.right=Sa(c.right,a.right),a.bottom=Sa(c.bottom,a.bottom),a.left=Zr(c.left,a.left),a},of(e,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function lv(e){var t=e.reference,n=e.element,r=e.placement,i=r?jn(r):null,o=r?Oi(r):null,s=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,l;switch(i){case Vt:l={x:s,y:t.y-n.height};break;case yn:l={x:s,y:t.y+t.height};break;case bn:l={x:t.x+t.width,y:a};break;case Ht:l={x:t.x-n.width,y:a};break;default:l={x:t.x,y:t.y}}var c=i?ud(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(o){case Li:l[c]=l[c]-(t[u]/2-n[u]/2);break;case Oo:l[c]=l[c]+(t[u]/2-n[u]/2);break}}return l}function Fo(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,o=n.boundary,s=o===void 0?tN:o,a=n.rootBoundary,l=a===void 0?J1:a,c=n.elementContext,u=c===void 0?io:c,h=n.altBoundary,d=h===void 0?!1:h,f=n.padding,g=f===void 0?0:f,m=rv(typeof g!="number"?g:iv(g,Zo)),y=u===io?nN:io,b=e.rects.popper,k=e.elements[d?y:u],_=MN(Mi(k)?k:k.contextElement||Rr(e.elements.popper),s,l),x=Bi(e.elements.reference),T=lv({reference:x,element:b,strategy:"absolute",placement:i}),A=Kc(Object.assign({},b,T)),E=u===io?A:x,O={top:_.top-E.top+m.top,bottom:E.bottom-_.bottom+m.bottom,left:_.left-E.left+m.left,right:E.right-_.right+m.right},J=e.modifiersData.offset;if(u===io&&J){var R=J[i];Object.keys(O).forEach(function(P){var K=[bn,yn].indexOf(P)>=0?1:-1,H=[Vt,yn].indexOf(P)>=0?"y":"x";O[P]+=R[H]*K})}return O}function IN(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?ol:l,u=Oi(r),h=u?a?ef:ef.filter(function(g){return Oi(g)===u}):Zo,d=h.filter(function(g){return c.indexOf(g)>=0});d.length===0&&(d=h);var f=d.reduce(function(g,m){return g[m]=Fo(e,{placement:m,boundary:i,rootBoundary:o,padding:s})[jn(m)],g},{});return Object.keys(f).sort(function(g,m){return f[g]-f[m]})}function BN(e){if(jn(e)===ad)return[];var t=js(e);return[rf(e),t,rf(t)]}function ON(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,o=i===void 0?!0:i,s=n.altAxis,a=s===void 0?!0:s,l=n.fallbackPlacements,c=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,g=f===void 0?!0:f,m=n.allowedAutoPlacements,y=t.options.placement,b=jn(y),k=b===y,_=l||(k||!g?[js(y)]:BN(y)),x=[y].concat(_).reduce(function(ce,ae){return ce.concat(jn(ae)===ad?IN(t,{placement:ae,boundary:u,rootBoundary:h,padding:c,flipVariations:g,allowedAutoPlacements:m}):ae)},[]),T=t.rects.reference,A=t.rects.popper,E=new Map,O=!0,J=x[0],R=0;R<x.length;R++){var P=x[R],K=jn(P),H=Oi(P)===Li,N=[Vt,yn].indexOf(K)>=0,G=N?"width":"height",q=Fo(t,{placement:P,boundary:u,rootBoundary:h,altBoundary:d,padding:c}),z=N?H?bn:Ht:H?yn:Vt;T[G]>A[G]&&(z=js(z));var V=js(z),Q=[];if(o&&Q.push(q[K]<=0),a&&Q.push(q[z]<=0,q[V]<=0),Q.every(function(ce){return ce})){J=P,O=!1;break}E.set(P,Q)}if(O)for(var Z=g?3:1,te=function(ce){var ae=x.find(function(re){var fe=E.get(re);if(fe)return fe.slice(0,ce).every(function(xe){return xe})});if(ae)return J=ae,"break"},ue=Z;ue>0;ue--){var Y=te(ue);if(Y==="break")break}t.placement!==J&&(t.modifiersData[r]._skip=!0,t.placement=J,t.reset=!0)}}var FN={name:"flip",enabled:!0,phase:"main",fn:ON,requiresIfExists:["offset"],data:{_skip:!1}};function sf(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function af(e){return[Vt,bn,yn,Ht].some(function(t){return e[t]>=0})}function RN(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,s=Fo(t,{elementContext:"reference"}),a=Fo(t,{altBoundary:!0}),l=sf(s,r),c=sf(a,i,o),u=af(l),h=af(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}var NN={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:RN};function DN(e,t,n){var r=jn(e),i=[Ht,Vt].indexOf(r)>=0?-1:1,o=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,s=o[0],a=o[1];return s=s||0,a=(a||0)*i,[Ht,bn].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function zN(e){var t=e.state,n=e.options,r=e.name,i=n.offset,o=i===void 0?[0,0]:i,s=ol.reduce(function(u,h){return u[h]=DN(h,t.rects,o),u},{}),a=s[t.placement],l=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=s}var VN={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:zN};function HN(e){var t=e.state,n=e.name;t.modifiersData[n]=lv({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var cv={name:"popperOffsets",enabled:!0,phase:"read",fn:HN,data:{}};function qN(e){return e==="x"?"y":"x"}function jN(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,o=i===void 0?!0:i,s=n.altAxis,a=s===void 0?!1:s,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=d===void 0?!0:d,g=n.tetherOffset,m=g===void 0?0:g,y=Fo(t,{boundary:l,rootBoundary:c,padding:h,altBoundary:u}),b=jn(t.placement),k=Oi(t.placement),_=!k,x=ud(b),T=qN(x),A=t.modifiersData.popperOffsets,E=t.rects.reference,O=t.rects.popper,J=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,R=typeof J=="number"?{mainAxis:J,altAxis:J}:Object.assign({mainAxis:0,altAxis:0},J),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,K={x:0,y:0};if(A){if(o){var H,N=x==="y"?Vt:Ht,G=x==="y"?yn:bn,q=x==="y"?"height":"width",z=A[x],V=z+y[N],Q=z-y[G],Z=f?-O[q]/2:0,te=k===Li?E[q]:O[q],ue=k===Li?-O[q]:-E[q],Y=t.elements.arrow,ce=f&&Y?cd(Y):{width:0,height:0},ae=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:nv(),re=ae[N],fe=ae[G],xe=bo(0,E[q],ce[q]),Ue=_?E[q]/2-Z-xe-re-R.mainAxis:te-xe-re-R.mainAxis,$e=_?-E[q]/2+Z+xe+fe+R.mainAxis:ue+xe+fe+R.mainAxis,Ie=t.elements.arrow&&Jo(t.elements.arrow),qe=Ie?x==="y"?Ie.clientTop||0:Ie.clientLeft||0:0,rt=(H=P==null?void 0:P[x])!=null?H:0,ht=z+Ue-rt-qe,Pt=z+$e-rt,kt=bo(f?Sa(V,ht):V,z,f?Zr(Q,Pt):Q);A[x]=kt,K[x]=kt-z}if(a){var Cn,rn=x==="x"?Vt:Ht,Jn=x==="x"?yn:bn,ut=A[T],wt=T==="y"?"height":"width",St=ut+y[rn],Lt=ut-y[Jn],on=[Vt,Ht].indexOf(b)!==-1,ne=(Cn=P==null?void 0:P[T])!=null?Cn:0,Se=on?St:ut-E[wt]-O[wt]-ne+R.altAxis,je=on?ut+E[wt]+O[wt]-ne-R.altAxis:Lt,sn=f&&on?vN(Se,ut,je):bo(f?Se:St,ut,f?je:Lt);A[T]=sn,K[T]=sn-ut}t.modifiersData[r]=K}}var GN={name:"preventOverflow",enabled:!0,phase:"main",fn:jN,requiresIfExists:["offset"]};function WN(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function UN(e){return e===Nn(e)||!gn(e)?dd(e):WN(e)}function YN(e){var t=e.getBoundingClientRect(),n=Ii(t.width)/e.offsetWidth||1,r=Ii(t.height)/e.offsetHeight||1;return n!==1||r!==1}function KN(e,t,n){n===void 0&&(n=!1);var r=gn(t),i=gn(t)&&YN(t),o=Rr(t),s=Bi(e,i),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((Un(t)!=="body"||pd(o))&&(a=UN(t)),gn(t)?(l=Bi(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):o&&(l.x=hd(o))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function XN(e){var t=new Map,n=new Set,r=[];e.forEach(function(o){t.set(o.name,o)});function i(o){n.add(o.name);var s=[].concat(o.requires||[],o.requiresIfExists||[]);s.forEach(function(a){if(!n.has(a)){var l=t.get(a);l&&i(l)}}),r.push(o)}return e.forEach(function(o){n.has(o.name)||i(o)}),r}function QN(e){var t=XN(e);return hN.reduce(function(n,r){return n.concat(t.filter(function(i){return i.phase===r}))},[])}function ZN(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function JN(e){var t=e.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var lf={placement:"bottom",modifiers:[],strategy:"absolute"};function cf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function fd(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,o=i===void 0?lf:i;return function(s,a,l){l===void 0&&(l=o);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},lf,o),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},u=[],h=!1,d={state:c,setOptions:function(m){var y=typeof m=="function"?m(c.options):m;g(),c.options=Object.assign({},o,c.options,y),c.scrollParents={reference:Mi(s)?_o(s):s.contextElement?_o(s.contextElement):[],popper:_o(a)};var b=QN(JN([].concat(r,c.options.modifiers)));return c.orderedModifiers=b.filter(function(k){return k.enabled}),f(),d.update()},forceUpdate:function(){if(!h){var m=c.elements,y=m.reference,b=m.popper;if(cf(y,b)){c.rects={reference:KN(y,Jo(b),c.options.strategy==="fixed"),popper:cd(b)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(O){return c.modifiersData[O.name]=Object.assign({},O.data)});for(var k=0;k<c.orderedModifiers.length;k++){if(c.reset===!0){c.reset=!1,k=-1;continue}var _=c.orderedModifiers[k],x=_.fn,T=_.options,A=T===void 0?{}:T,E=_.name;typeof x=="function"&&(c=x({state:c,options:A,name:E,instance:d})||c)}}}},update:ZN(function(){return new Promise(function(m){d.forceUpdate(),m(c)})}),destroy:function(){g(),h=!0}};if(!cf(s,a))return d;d.setOptions(l).then(function(m){!h&&l.onFirstUpdate&&l.onFirstUpdate(m)});function f(){c.orderedModifiers.forEach(function(m){var y=m.name,b=m.options,k=b===void 0?{}:b,_=m.effect;if(typeof _=="function"){var x=_({state:c,name:y,instance:d,options:k}),T=function(){};u.push(x||T)}})}function g(){u.forEach(function(m){return m()}),u=[]}return d}}fd();var eD=[sv,cv,ov,ev];fd({defaultModifiers:eD});var tD=[sv,cv,ov,ev,VN,FN,GN,CN,NN],nD=fd({defaultModifiers:tD});const rD=(e,t,n={})=>{const r={name:"updateState",enabled:!0,phase:"write",fn:({state:l})=>{const c=iD(l);Object.assign(s.value,c)},requires:["computeStyles"]},i=w(()=>{const{onFirstUpdate:l,placement:c,strategy:u,modifiers:h}=p(n);return{onFirstUpdate:l,placement:c||"bottom",strategy:u||"absolute",modifiers:[...h||[],r,{name:"applyStyles",enabled:!1}]}}),o=Mn(),s=L({styles:{popper:{position:p(i).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=()=>{o.value&&(o.value.destroy(),o.value=void 0)};return oe(i,l=>{const c=p(o);c&&c.setOptions(l)},{deep:!0}),oe([e,t],([l,c])=>{a(),!(!l||!c)&&(o.value=nD(l,c,p(i)))}),jt(()=>{a()}),{state:w(()=>{var l;return{...((l=p(o))==null?void 0:l.state)||{}}}),styles:w(()=>p(s).styles),attributes:w(()=>p(s).attributes),update:()=>{var l;return(l=p(o))==null?void 0:l.update()},forceUpdate:()=>{var l;return(l=p(o))==null?void 0:l.forceUpdate()},instanceRef:w(()=>p(o))}};function iD(e){const t=Object.keys(e.elements),n=ba(t.map(i=>[i,e.styles[i]||{}])),r=ba(t.map(i=>[i,e.attributes[i]]));return{styles:n,attributes:r}}function uf(){let e;const t=(r,i)=>{n(),e=window.setTimeout(r,i)},n=()=>window.clearTimeout(e);return Ir(()=>n()),{registerTimeout:t,cancelTimeout:n}}const df={prefix:Math.floor(Math.random()*1e4),current:0},oD=Symbol("elIdInjection"),uv=()=>_t()?Ee(oD,df):df,al=e=>{const t=uv(),n=sd();return w(()=>p(e)||`${n.value}-id-${t.prefix}-${t.current++}`)};let vi=[];const hf=e=>{const t=e;t.key===hn.esc&&vi.forEach(n=>n(t))},sD=e=>{Ae(()=>{vi.length===0&&document.addEventListener("keydown",hf),Ve&&vi.push(e)}),jt(()=>{vi=vi.filter(t=>t!==e),vi.length===0&&Ve&&document.removeEventListener("keydown",hf)})};let pf;const dv=()=>{const e=sd(),t=uv(),n=w(()=>`${e.value}-popper-container-${t.prefix}`),r=w(()=>`#${n.value}`);return{id:n,selector:r}},aD=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},lD=()=>{const{id:e,selector:t}=dv();return ry(()=>{Ve&&!pf&&!document.body.querySelector(t.value)&&(pf=aD(e.value))}),{id:e,selector:t}},cD=Oe({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),uD=({showAfter:e,hideAfter:t,autoClose:n,open:r,close:i})=>{const{registerTimeout:o}=uf(),{registerTimeout:s,cancelTimeout:a}=uf();return{onOpen:u=>{o(()=>{r(u);const h=p(n);Ne(h)&&h>0&&s(()=>{i(u)},h)},p(e))},onClose:u=>{a(),o(()=>{i(u)},p(t))}}},hv=Symbol("elForwardRef"),dD=e=>{nt(hv,{setForwardRef:n=>{e.value=n}})},hD=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),ff=L(0),pv=2e3,fv=Symbol("zIndexContextKey"),md=e=>{const t=e||(_t()?Ee(fv,void 0):void 0),n=w(()=>{const o=p(t);return Ne(o)?o:pv}),r=w(()=>n.value+ff.value);return{initialZIndex:n,currentZIndex:r,nextZIndex:()=>(ff.value++,r.value)}};function pD(e){const t=L();function n(){if(e.value==null)return;const{selectionStart:i,selectionEnd:o,value:s}=e.value;if(i==null||o==null)return;const a=s.slice(0,Math.max(0,i)),l=s.slice(Math.max(0,o));t.value={selectionStart:i,selectionEnd:o,value:s,beforeTxt:a,afterTxt:l}}function r(){if(e.value==null||t.value==null)return;const{value:i}=e.value,{beforeTxt:o,afterTxt:s,selectionStart:a}=t.value;if(o==null||s==null||a==null)return;let l=i.length;if(i.endsWith(s))l=i.length-s.length;else if(i.startsWith(o))l=o.length;else{const c=o[a-1],u=i.indexOf(c,a-1);u!==-1&&(l=u+1)}e.value.setSelectionRange(l,l)}return[n,r]}const fD=(e,t,n)=>yo(e.subTree).filter(o=>{var s;return Ci(o)&&((s=o.type)==null?void 0:s.name)===t&&!!o.component}).map(o=>o.component.uid).map(o=>n[o]).filter(o=>!!o),mD=(e,t)=>{const n={},r=Mn([]);return{children:r,addChild:s=>{n[s.uid]=s,r.value=fD(e,t,n)},removeChild:s=>{delete n[s],r.value=r.value.filter(a=>a.uid!==s)}}},gd=rl({type:String,values:Qo,required:!1}),mv=Symbol("size"),gD=()=>{const e=Ee(mv,{});return w(()=>p(e.size)||"")};function gv(e,{afterFocus:t,beforeBlur:n,afterBlur:r}={}){const i=_t(),{emit:o}=i,s=Mn(),a=L(!1),l=h=>{a.value||(a.value=!0,o("focus",h),t==null||t())},c=h=>{var d;Rt(n)&&n(h)||h.relatedTarget&&((d=s.value)!=null&&d.contains(h.relatedTarget))||(a.value=!1,o("blur",h),r==null||r())},u=()=>{var h;(h=e.value)==null||h.focus()};return oe(s,h=>{h&&h.setAttribute("tabindex","-1")}),He(s,"click",u),{wrapperRef:s,isFocused:a,handleFocus:l,handleBlur:c}}const vv=Symbol(),xa=L();function vd(e,t=void 0){const n=_t()?Ee(vv,xa):xa;return e?w(()=>{var r,i;return(i=(r=n.value)==null?void 0:r[e])!=null?i:t}):n}function vD(e,t){const n=vd(),r=Be(e,w(()=>{var a;return((a=n.value)==null?void 0:a.namespace)||qs})),i=_n(w(()=>{var a;return(a=n.value)==null?void 0:a.locale})),o=md(w(()=>{var a;return((a=n.value)==null?void 0:a.zIndex)||pv})),s=w(()=>{var a;return p(t)||((a=n.value)==null?void 0:a.size)||""});return yD(w(()=>p(n)||{})),{ns:r,locale:i,zIndex:o,size:s}}const yD=(e,t,n=!1)=>{var r;const i=!!_t(),o=i?vd():void 0,s=(r=t==null?void 0:t.provide)!=null?r:i?nt:void 0;if(!s)return;const a=w(()=>{const l=p(e);return o!=null&&o.value?bD(o.value,l):l});return s(vv,a),s(K1,w(()=>a.value.locale)),s(X1,w(()=>a.value.namespace)),s(fv,w(()=>a.value.zIndex)),s(mv,{size:w(()=>a.value.size||"")}),(n||!xa.value)&&(xa.value=a.value),a},bD=(e,t)=>{var n;const r=[...new Set([..._a(e),..._a(t)])],i={};for(const o of r)i[o]=(n=t[o])!=null?n:e[o];return i},mf={};var Me=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const _D=Oe({size:{type:we([Number,String])},color:{type:String}}),CD=B({name:"ElIcon",inheritAttrs:!1}),kD=B({...CD,props:_D,setup(e){const t=e,n=Be("icon"),r=w(()=>{const{size:i,color:o}=t;return!i&&!o?{}:{fontSize:td(i)?void 0:Ca(i),"--color":o}});return(i,o)=>(v(),C("i",Qt({class:p(n).b(),style:p(r)},i.$attrs),[M(i.$slots,"default")],16))}});var wD=Me(kD,[["__file","icon.vue"]]);const ke=Ct(wD),SD=["light","dark"],xD=Oe({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:_a(wa),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:SD,default:"light"}}),TD={close:e=>e instanceof MouseEvent},ED=B({name:"ElAlert"}),AD=B({...ED,props:xD,emits:TD,setup(e,{emit:t}){const n=e,{Close:r}=j1,i=No(),o=Be("alert"),s=L(!0),a=w(()=>wa[n.type]),l=w(()=>[o.e("icon"),{[o.is("big")]:!!n.description||!!i.default}]),c=w(()=>({"with-description":n.description||i.default})),u=h=>{s.value=!1,t("close",h)};return(h,d)=>(v(),X(Zt,{name:p(o).b("fade"),persisted:""},{default:$(()=>[ze(S("div",{class:W([p(o).b(),p(o).m(h.type),p(o).is("center",h.center),p(o).is(h.effect)]),role:"alert"},[h.showIcon&&p(a)?(v(),X(p(ke),{key:0,class:W(p(l))},{default:$(()=>[(v(),X(Je(p(a))))]),_:1},8,["class"])):I("v-if",!0),S("div",{class:W(p(o).e("content"))},[h.title||h.$slots.title?(v(),C("span",{key:0,class:W([p(o).e("title"),p(c)])},[M(h.$slots,"title",{},()=>[Fe(ee(h.title),1)])],2)):I("v-if",!0),h.$slots.default||h.description?(v(),C("p",{key:1,class:W(p(o).e("description"))},[M(h.$slots,"default",{},()=>[Fe(ee(h.description),1)])],2)):I("v-if",!0),h.closable?(v(),C(he,{key:2},[h.closeText?(v(),C("div",{key:0,class:W([p(o).e("close-btn"),p(o).is("customed")]),onClick:u},ee(h.closeText),3)):(v(),X(p(ke),{key:1,class:W(p(o).e("close-btn")),onClick:u},{default:$(()=>[j(p(r))]),_:1},8,["class"]))],64)):I("v-if",!0)],2)],2),[[tt,s.value]])]),_:3},8,["name"]))}});var $D=Me(AD,[["__file","alert.vue"]]);const PD=Ct($D),yd=Symbol("formContextKey"),Ta=Symbol("formItemContextKey"),ll=(e,t={})=>{const n=L(void 0),r=t.prop?n:Z1("size"),i=t.global?n:gD(),o=t.form?{size:void 0}:Ee(yd,void 0),s=t.formItem?{size:void 0}:Ee(Ta,void 0);return w(()=>r.value||p(e)||(s==null?void 0:s.size)||(o==null?void 0:o.size)||i.value||"")},bd=e=>{const t=Z1("disabled"),n=Ee(yd,void 0);return w(()=>t.value||p(e)||(n==null?void 0:n.disabled)||!1)},_d=()=>{const e=Ee(yd,void 0),t=Ee(Ta,void 0);return{form:e,formItem:t}},yv=(e,{formItemContext:t,disableIdGeneration:n,disableIdManagement:r})=>{n||(n=L(!1)),r||(r=L(!1));const i=L();let o;const s=w(()=>{var a;return!!(!e.label&&t&&t.inputIds&&((a=t.inputIds)==null?void 0:a.length)<=1)});return Ae(()=>{o=oe([Xt(e,"id"),n],([a,l])=>{const c=a??(l?void 0:al().value);c!==i.value&&(t!=null&&t.removeInputId&&(i.value&&t.removeInputId(i.value),!(r!=null&&r.value)&&!l&&c&&t.addInputId(c)),i.value=c)},{immediate:!0})}),Yn(()=>{o&&o(),t!=null&&t.removeInputId&&i.value&&t.removeInputId(i.value)}),{isLabeledByFormItem:s,inputId:i}};let Tn;const LD=`
  height:0 !important;
  visibility:hidden !important;
  ${lI()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,MD=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function ID(e){const t=window.getComputedStyle(e),n=t.getPropertyValue("box-sizing"),r=Number.parseFloat(t.getPropertyValue("padding-bottom"))+Number.parseFloat(t.getPropertyValue("padding-top")),i=Number.parseFloat(t.getPropertyValue("border-bottom-width"))+Number.parseFloat(t.getPropertyValue("border-top-width"));return{contextStyle:MD.map(s=>`${s}:${t.getPropertyValue(s)}`).join(";"),paddingSize:r,borderSize:i,boxSizing:n}}function gf(e,t=1,n){var r;Tn||(Tn=document.createElement("textarea"),document.body.appendChild(Tn));const{paddingSize:i,borderSize:o,boxSizing:s,contextStyle:a}=ID(e);Tn.setAttribute("style",`${a};${LD}`),Tn.value=e.value||e.placeholder||"";let l=Tn.scrollHeight;const c={};s==="border-box"?l=l+o:s==="content-box"&&(l=l-i),Tn.value="";const u=Tn.scrollHeight-i;if(Ne(t)){let h=u*t;s==="border-box"&&(h=h+i+o),l=Math.max(h,l),c.minHeight=`${h}px`}if(Ne(n)){let h=u*n;s==="border-box"&&(h=h+i+o),l=Math.min(h,l)}return c.height=`${l}px`,(r=Tn.parentNode)==null||r.removeChild(Tn),Tn=void 0,c}const BD=Oe({id:{type:String,default:void 0},size:gd,disabled:Boolean,modelValue:{type:we([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:we([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:tn},prefixIcon:{type:tn},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:we([Object,Array,String]),default:()=>Wi({})},autofocus:{type:Boolean,default:!1}}),OD={[$n]:e=>mn(e),input:e=>mn(e),change:e=>mn(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},FD=["role"],RD=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],ND=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],DD=B({name:"ElInput",inheritAttrs:!1}),zD=B({...DD,props:BD,emits:OD,setup(e,{expose:t,emit:n}){const r=e,i=tm(),o=No(),s=w(()=>{const ne={};return r.containerRole==="combobox"&&(ne["aria-haspopup"]=i["aria-haspopup"],ne["aria-owns"]=i["aria-owns"],ne["aria-expanded"]=i["aria-expanded"]),ne}),a=w(()=>[r.type==="textarea"?y.b():m.b(),m.m(f.value),m.is("disabled",g.value),m.is("exceed",ce.value),{[m.b("group")]:o.prepend||o.append,[m.bm("group","append")]:o.append,[m.bm("group","prepend")]:o.prepend,[m.m("prefix")]:o.prefix||r.prefixIcon,[m.m("suffix")]:o.suffix||r.suffixIcon||r.clearable||r.showPassword,[m.bm("suffix","password-clear")]:Z.value&&te.value,[m.b("hidden")]:r.type==="hidden"},i.class]),l=w(()=>[m.e("wrapper"),m.is("focus",R.value)]),c=Y1({excludeKeys:w(()=>Object.keys(s.value))}),{form:u,formItem:h}=_d(),{inputId:d}=yv(r,{formItemContext:h}),f=ll(),g=bd(),m=Be("input"),y=Be("textarea"),b=Mn(),k=Mn(),_=L(!1),x=L(!1),T=L(!1),A=L(),E=Mn(r.inputStyle),O=w(()=>b.value||k.value),{wrapperRef:J,isFocused:R,handleFocus:P,handleBlur:K}=gv(O,{afterBlur(){var ne;r.validateEvent&&((ne=h==null?void 0:h.validate)==null||ne.call(h,"blur").catch(Se=>void 0))}}),H=w(()=>{var ne;return(ne=u==null?void 0:u.statusIcon)!=null?ne:!1}),N=w(()=>(h==null?void 0:h.validateState)||""),G=w(()=>N.value&&G1[N.value]),q=w(()=>T.value?RR:wR),z=w(()=>[i.style]),V=w(()=>[r.inputStyle,E.value,{resize:r.resize}]),Q=w(()=>Xo(r.modelValue)?"":String(r.modelValue)),Z=w(()=>r.clearable&&!g.value&&!r.readonly&&!!Q.value&&(R.value||_.value)),te=w(()=>r.showPassword&&!g.value&&!r.readonly&&!!Q.value&&(!!Q.value||R.value)),ue=w(()=>r.showWordLimit&&!!r.maxlength&&(r.type==="text"||r.type==="textarea")&&!g.value&&!r.readonly&&!r.showPassword),Y=w(()=>Q.value.length),ce=w(()=>!!ue.value&&Y.value>Number(r.maxlength)),ae=w(()=>!!o.suffix||!!r.suffixIcon||Z.value||r.showPassword||ue.value||!!N.value&&H.value),[re,fe]=pD(b);dn(k,ne=>{if($e(),!ue.value||r.resize!=="both")return;const Se=ne[0],{width:je}=Se.contentRect;A.value={right:`calc(100% - ${je+15+6}px)`}});const xe=()=>{const{type:ne,autosize:Se}=r;if(!(!Ve||ne!=="textarea"||!k.value))if(Se){const je=pn(Se)?Se.minRows:void 0,sn=pn(Se)?Se.maxRows:void 0,Dn=gf(k.value,je,sn);E.value={overflowY:"hidden",...Dn},De(()=>{k.value.offsetHeight,E.value=Dn})}else E.value={minHeight:gf(k.value).minHeight}},$e=(ne=>{let Se=!1;return()=>{var je;if(Se||!r.autosize)return;((je=k.value)==null?void 0:je.offsetParent)===null||(ne(),Se=!0)}})(xe),Ie=()=>{const ne=O.value,Se=r.formatter?r.formatter(Q.value):Q.value;!ne||ne.value===Se||(ne.value=Se)},qe=async ne=>{re();let{value:Se}=ne.target;if(r.formatter&&(Se=r.parser?r.parser(Se):Se),!x.value){if(Se===Q.value){Ie();return}n($n,Se),n("input",Se),await De(),Ie(),fe()}},rt=ne=>{n("change",ne.target.value)},ht=ne=>{n("compositionstart",ne),x.value=!0},Pt=ne=>{var Se;n("compositionupdate",ne);const je=(Se=ne.target)==null?void 0:Se.value,sn=je[je.length-1]||"";x.value=!U1(sn)},kt=ne=>{n("compositionend",ne),x.value&&(x.value=!1,qe(ne))},Cn=()=>{T.value=!T.value,rn()},rn=async()=>{var ne;await De(),(ne=O.value)==null||ne.focus()},Jn=()=>{var ne;return(ne=O.value)==null?void 0:ne.blur()},ut=ne=>{_.value=!1,n("mouseleave",ne)},wt=ne=>{_.value=!0,n("mouseenter",ne)},St=ne=>{n("keydown",ne)},Lt=()=>{var ne;(ne=O.value)==null||ne.select()},on=()=>{n($n,""),n("change",""),n("clear"),n("input","")};return oe(()=>r.modelValue,()=>{var ne;De(()=>xe()),r.validateEvent&&((ne=h==null?void 0:h.validate)==null||ne.call(h,"change").catch(Se=>void 0))}),oe(Q,()=>Ie()),oe(()=>r.type,async()=>{await De(),Ie(),xe()}),Ae(()=>{!r.formatter&&r.parser,Ie(),De(xe)}),t({input:b,textarea:k,ref:O,textareaStyle:V,autosize:Xt(r,"autosize"),focus:rn,blur:Jn,select:Lt,clear:on,resizeTextarea:xe}),(ne,Se)=>(v(),C("div",Qt(p(s),{class:p(a),style:p(z),role:ne.containerRole,onMouseenter:wt,onMouseleave:ut}),[I(" input "),ne.type!=="textarea"?(v(),C(he,{key:0},[I(" prepend slot "),ne.$slots.prepend?(v(),C("div",{key:0,class:W(p(m).be("group","prepend"))},[M(ne.$slots,"prepend")],2)):I("v-if",!0),S("div",{ref_key:"wrapperRef",ref:J,class:W(p(l))},[I(" prefix slot "),ne.$slots.prefix||ne.prefixIcon?(v(),C("span",{key:0,class:W(p(m).e("prefix"))},[S("span",{class:W(p(m).e("prefix-inner"))},[M(ne.$slots,"prefix"),ne.prefixIcon?(v(),X(p(ke),{key:0,class:W(p(m).e("icon"))},{default:$(()=>[(v(),X(Je(ne.prefixIcon)))]),_:1},8,["class"])):I("v-if",!0)],2)],2)):I("v-if",!0),S("input",Qt({id:p(d),ref_key:"input",ref:b,class:p(m).e("inner")},p(c),{minlength:ne.minlength,maxlength:ne.maxlength,type:ne.showPassword?T.value?"text":"password":ne.type,disabled:p(g),readonly:ne.readonly,autocomplete:ne.autocomplete,tabindex:ne.tabindex,"aria-label":ne.label,placeholder:ne.placeholder,style:ne.inputStyle,form:ne.form,autofocus:ne.autofocus,onCompositionstart:ht,onCompositionupdate:Pt,onCompositionend:kt,onInput:qe,onFocus:Se[0]||(Se[0]=(...je)=>p(P)&&p(P)(...je)),onBlur:Se[1]||(Se[1]=(...je)=>p(K)&&p(K)(...je)),onChange:rt,onKeydown:St}),null,16,RD),I(" suffix slot "),p(ae)?(v(),C("span",{key:1,class:W(p(m).e("suffix"))},[S("span",{class:W(p(m).e("suffix-inner"))},[!p(Z)||!p(te)||!p(ue)?(v(),C(he,{key:0},[M(ne.$slots,"suffix"),ne.suffixIcon?(v(),X(p(ke),{key:0,class:W(p(m).e("icon"))},{default:$(()=>[(v(),X(Je(ne.suffixIcon)))]),_:1},8,["class"])):I("v-if",!0)],64)):I("v-if",!0),p(Z)?(v(),X(p(ke),{key:1,class:W([p(m).e("icon"),p(m).e("clear")]),onMousedown:dt(p(Co),["prevent"]),onClick:on},{default:$(()=>[j(p(od))]),_:1},8,["class","onMousedown"])):I("v-if",!0),p(te)?(v(),X(p(ke),{key:2,class:W([p(m).e("icon"),p(m).e("password")]),onClick:Cn},{default:$(()=>[(v(),X(Je(p(q))))]),_:1},8,["class"])):I("v-if",!0),p(ue)?(v(),C("span",{key:3,class:W(p(m).e("count"))},[S("span",{class:W(p(m).e("count-inner"))},ee(p(Y))+" / "+ee(ne.maxlength),3)],2)):I("v-if",!0),p(N)&&p(G)&&p(H)?(v(),X(p(ke),{key:4,class:W([p(m).e("icon"),p(m).e("validateIcon"),p(m).is("loading",p(N)==="validating")])},{default:$(()=>[(v(),X(Je(p(G))))]),_:1},8,["class"])):I("v-if",!0)],2)],2)):I("v-if",!0)],2),I(" append slot "),ne.$slots.append?(v(),C("div",{key:1,class:W(p(m).be("group","append"))},[M(ne.$slots,"append")],2)):I("v-if",!0)],64)):(v(),C(he,{key:1},[I(" textarea "),S("textarea",Qt({id:p(d),ref_key:"textarea",ref:k,class:p(y).e("inner")},p(c),{minlength:ne.minlength,maxlength:ne.maxlength,tabindex:ne.tabindex,disabled:p(g),readonly:ne.readonly,autocomplete:ne.autocomplete,style:p(V),"aria-label":ne.label,placeholder:ne.placeholder,form:ne.form,autofocus:ne.autofocus,onCompositionstart:ht,onCompositionupdate:Pt,onCompositionend:kt,onInput:qe,onFocus:Se[2]||(Se[2]=(...je)=>p(P)&&p(P)(...je)),onBlur:Se[3]||(Se[3]=(...je)=>p(K)&&p(K)(...je)),onChange:rt,onKeydown:St}),null,16,ND),p(ue)?(v(),C("span",{key:0,style:et(A.value),class:W(p(m).e("count"))},ee(p(Y))+" / "+ee(ne.maxlength),7)):I("v-if",!0)],64))],16,FD))}});var VD=Me(zD,[["__file","input.vue"]]);const bv=Ct(VD),mi=4,HD={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},qD=({move:e,size:t,bar:n})=>({[n.size]:t,transform:`translate${n.axis}(${e}%)`}),Cd=Symbol("scrollbarContextKey"),jD=Oe({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),GD="Thumb",WD=B({__name:"thumb",props:jD,setup(e){const t=e,n=Ee(Cd),r=Be("scrollbar");n||YF(GD,"can not inject scrollbar context");const i=L(),o=L(),s=L({}),a=L(!1);let l=!1,c=!1,u=Ve?document.onselectstart:null;const h=w(()=>HD[t.vertical?"vertical":"horizontal"]),d=w(()=>qD({size:t.size,move:t.move,bar:h.value})),f=w(()=>i.value[h.value.offset]**2/n.wrapElement[h.value.scrollSize]/t.ratio/o.value[h.value.offset]),g=A=>{var E;if(A.stopPropagation(),A.ctrlKey||[1,2].includes(A.button))return;(E=window.getSelection())==null||E.removeAllRanges(),y(A);const O=A.currentTarget;O&&(s.value[h.value.axis]=O[h.value.offset]-(A[h.value.client]-O.getBoundingClientRect()[h.value.direction]))},m=A=>{if(!o.value||!i.value||!n.wrapElement)return;const E=Math.abs(A.target.getBoundingClientRect()[h.value.direction]-A[h.value.client]),O=o.value[h.value.offset]/2,J=(E-O)*100*f.value/i.value[h.value.offset];n.wrapElement[h.value.scroll]=J*n.wrapElement[h.value.scrollSize]/100},y=A=>{A.stopImmediatePropagation(),l=!0,document.addEventListener("mousemove",b),document.addEventListener("mouseup",k),u=document.onselectstart,document.onselectstart=()=>!1},b=A=>{if(!i.value||!o.value||l===!1)return;const E=s.value[h.value.axis];if(!E)return;const O=(i.value.getBoundingClientRect()[h.value.direction]-A[h.value.client])*-1,J=o.value[h.value.offset]-E,R=(O-J)*100*f.value/i.value[h.value.offset];n.wrapElement[h.value.scroll]=R*n.wrapElement[h.value.scrollSize]/100},k=()=>{l=!1,s.value[h.value.axis]=0,document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",k),T(),c&&(a.value=!1)},_=()=>{c=!1,a.value=!!t.size},x=()=>{c=!0,a.value=l};jt(()=>{T(),document.removeEventListener("mouseup",k)});const T=()=>{document.onselectstart!==u&&(document.onselectstart=u)};return He(Xt(n,"scrollbarElement"),"mousemove",_),He(Xt(n,"scrollbarElement"),"mouseleave",x),(A,E)=>(v(),X(Zt,{name:p(r).b("fade"),persisted:""},{default:$(()=>[ze(S("div",{ref_key:"instance",ref:i,class:W([p(r).e("bar"),p(r).is(p(h).key)]),onMousedown:m},[S("div",{ref_key:"thumb",ref:o,class:W(p(r).e("thumb")),style:et(p(d)),onMousedown:g},null,38)],34),[[tt,A.always||a.value]])]),_:1},8,["name"]))}});var vf=Me(WD,[["__file","thumb.vue"]]);const UD=Oe({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),YD=B({__name:"bar",props:UD,setup(e,{expose:t}){const n=e,r=Ee(Cd),i=L(0),o=L(0),s=L(""),a=L(""),l=L(1),c=L(1);return t({handleScroll:d=>{if(d){const f=d.offsetHeight-mi,g=d.offsetWidth-mi;o.value=d.scrollTop*100/f*l.value,i.value=d.scrollLeft*100/g*c.value}},update:()=>{const d=r==null?void 0:r.wrapElement;if(!d)return;const f=d.offsetHeight-mi,g=d.offsetWidth-mi,m=f**2/d.scrollHeight,y=g**2/d.scrollWidth,b=Math.max(m,n.minSize),k=Math.max(y,n.minSize);l.value=m/(f-m)/(b/(f-b)),c.value=y/(g-y)/(k/(g-k)),a.value=b+mi<f?`${b}px`:"",s.value=k+mi<g?`${k}px`:""}}),(d,f)=>(v(),C(he,null,[j(vf,{move:i.value,ratio:c.value,size:s.value,always:d.always},null,8,["move","ratio","size","always"]),j(vf,{move:o.value,ratio:l.value,size:a.value,vertical:"",always:d.always},null,8,["move","ratio","size","always"])],64))}});var KD=Me(YD,[["__file","bar.vue"]]);const XD=Oe({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:we([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical"]}}),QD={scroll:({scrollTop:e,scrollLeft:t})=>[e,t].every(Ne)},ZD="ElScrollbar",JD=B({name:ZD}),ez=B({...JD,props:XD,emits:QD,setup(e,{expose:t,emit:n}){const r=e,i=Be("scrollbar");let o,s;const a=L(),l=L(),c=L(),u=L(),h=w(()=>{const _={};return r.height&&(_.height=Ca(r.height)),r.maxHeight&&(_.maxHeight=Ca(r.maxHeight)),[r.wrapStyle,_]}),d=w(()=>[r.wrapClass,i.e("wrap"),{[i.em("wrap","hidden-default")]:!r.native}]),f=w(()=>[i.e("view"),r.viewClass]),g=()=>{var _;l.value&&((_=u.value)==null||_.handleScroll(l.value),n("scroll",{scrollTop:l.value.scrollTop,scrollLeft:l.value.scrollLeft}))};function m(_,x){pn(_)?l.value.scrollTo(_):Ne(_)&&Ne(x)&&l.value.scrollTo(_,x)}const y=_=>{Ne(_)&&(l.value.scrollTop=_)},b=_=>{Ne(_)&&(l.value.scrollLeft=_)},k=()=>{var _;(_=u.value)==null||_.update()};return oe(()=>r.noresize,_=>{_?(o==null||o(),s==null||s()):({stop:o}=dn(c,k),s=He("resize",k))},{immediate:!0}),oe(()=>[r.maxHeight,r.height],()=>{r.native||De(()=>{var _;k(),l.value&&((_=u.value)==null||_.handleScroll(l.value))})}),nt(Cd,ct({scrollbarElement:a,wrapElement:l})),Ae(()=>{r.native||De(()=>{k()})}),Wf(()=>k()),t({wrapRef:l,update:k,scrollTo:m,setScrollTop:y,setScrollLeft:b,handleScroll:g}),(_,x)=>(v(),C("div",{ref_key:"scrollbarRef",ref:a,class:W(p(i).b())},[S("div",{ref_key:"wrapRef",ref:l,class:W(p(d)),style:et(p(h)),onScroll:g},[(v(),X(Je(_.tag),{id:_.id,ref_key:"resizeRef",ref:c,class:W(p(f)),style:et(_.viewStyle),role:_.role,"aria-label":_.ariaLabel,"aria-orientation":_.ariaOrientation},{default:$(()=>[M(_.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),_.native?I("v-if",!0):(v(),X(KD,{key:0,ref_key:"barRef",ref:u,always:_.always,"min-size":_.minSize},null,8,["always","min-size"]))],2))}});var tz=Me(ez,[["__file","scrollbar.vue"]]);const nz=Ct(tz),kd=Symbol("popper"),_v=Symbol("popperContent"),rz=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],Cv=Oe({role:{type:String,values:rz,default:"tooltip"}}),iz=B({name:"ElPopper",inheritAttrs:!1}),oz=B({...iz,props:Cv,setup(e,{expose:t}){const n=e,r=L(),i=L(),o=L(),s=L(),a=w(()=>n.role),l={triggerRef:r,popperInstanceRef:i,contentRef:o,referenceRef:s,role:a};return t(l),nt(kd,l),(c,u)=>M(c.$slots,"default")}});var sz=Me(oz,[["__file","popper.vue"]]);const kv=Oe({arrowOffset:{type:Number,default:5}}),az=B({name:"ElPopperArrow",inheritAttrs:!1}),lz=B({...az,props:kv,setup(e,{expose:t}){const n=e,r=Be("popper"),{arrowOffset:i,arrowRef:o,arrowStyle:s}=Ee(_v,void 0);return oe(()=>n.arrowOffset,a=>{i.value=a}),jt(()=>{o.value=void 0}),t({arrowRef:o}),(a,l)=>(v(),C("span",{ref_key:"arrowRef",ref:o,class:W(p(r).e("arrow")),style:et(p(s)),"data-popper-arrow":""},null,6))}});var cz=Me(lz,[["__file","arrow.vue"]]);const uz="ElOnlyChild",dz=B({name:uz,setup(e,{slots:t,attrs:n}){var r;const i=Ee(hv),o=hD((r=i==null?void 0:i.setForwardRef)!=null?r:Co);return()=>{var s;const a=(s=t.default)==null?void 0:s.call(t,n);if(!a||a.length>1)return null;const l=wv(a);return l?ze(iy(l,n),[[o]]):null}}});function wv(e){if(!e)return null;const t=e;for(const n of t){if(pn(n))switch(n.type){case oy:continue;case nm:case"svg":return yf(n);case he:return wv(n.children);default:return n}return yf(n)}return null}function yf(e){const t=Be("only-child");return j("span",{class:t.e("content")},[e])}const Sv=Oe({virtualRef:{type:we(Object)},virtualTriggering:Boolean,onMouseenter:{type:we(Function)},onMouseleave:{type:we(Function)},onClick:{type:we(Function)},onKeydown:{type:we(Function)},onFocus:{type:we(Function)},onBlur:{type:we(Function)},onContextmenu:{type:we(Function)},id:String,open:Boolean}),hz=B({name:"ElPopperTrigger",inheritAttrs:!1}),pz=B({...hz,props:Sv,setup(e,{expose:t}){const n=e,{role:r,triggerRef:i}=Ee(kd,void 0);dD(i);const o=w(()=>a.value?n.id:void 0),s=w(()=>{if(r&&r.value==="tooltip")return n.open&&n.id?n.id:void 0}),a=w(()=>{if(r&&r.value!=="tooltip")return r.value}),l=w(()=>a.value?`${n.open}`:void 0);let c;return Ae(()=>{oe(()=>n.virtualRef,u=>{u&&(i.value=zt(u))},{immediate:!0}),oe(i,(u,h)=>{c==null||c(),c=void 0,si(u)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(d=>{var f;const g=n[d];g&&(u.addEventListener(d.slice(2).toLowerCase(),g),(f=h==null?void 0:h.removeEventListener)==null||f.call(h,d.slice(2).toLowerCase(),g))}),c=oe([o,s,a,l],d=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((f,g)=>{Xo(d[g])?u.removeAttribute(f):u.setAttribute(f,d[g])})},{immediate:!0})),si(h)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(d=>h.removeAttribute(d))},{immediate:!0})}),jt(()=>{c==null||c(),c=void 0}),t({triggerRef:i}),(u,h)=>u.virtualTriggering?I("v-if",!0):(v(),X(p(dz),Qt({key:0},u.$attrs,{"aria-controls":p(o),"aria-describedby":p(s),"aria-expanded":p(l),"aria-haspopup":p(a)}),{default:$(()=>[M(u.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var fz=Me(pz,[["__file","trigger.vue"]]);const Wl="focus-trap.focus-after-trapped",Ul="focus-trap.focus-after-released",mz="focus-trap.focusout-prevented",bf={cancelable:!0,bubbles:!1},gz={cancelable:!0,bubbles:!1},_f="focusAfterTrapped",Cf="focusAfterReleased",vz=Symbol("elFocusTrap"),wd=L(),cl=L(0),Sd=L(0);let ks=0;const xv=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0||r===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},kf=(e,t)=>{for(const n of e)if(!yz(n,t))return n},yz=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},bz=e=>{const t=xv(e),n=kf(t,e),r=kf(t.reverse(),e);return[n,r]},_z=e=>e instanceof HTMLInputElement&&"select"in e,xr=(e,t)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),Sd.value=window.performance.now(),e!==n&&_z(e)&&t&&e.select()}};function wf(e,t){const n=[...e],r=e.indexOf(t);return r!==-1&&n.splice(r,1),n}const Cz=()=>{let e=[];return{push:r=>{const i=e[0];i&&r!==i&&i.pause(),e=wf(e,r),e.unshift(r)},remove:r=>{var i,o;e=wf(e,r),(o=(i=e[0])==null?void 0:i.resume)==null||o.call(i)}}},kz=(e,t=!1)=>{const n=document.activeElement;for(const r of e)if(xr(r,t),document.activeElement!==n)return},Sf=Cz(),wz=()=>cl.value>Sd.value,ws=()=>{wd.value="pointer",cl.value=window.performance.now()},xf=()=>{wd.value="keyboard",cl.value=window.performance.now()},Sz=()=>(Ae(()=>{ks===0&&(document.addEventListener("mousedown",ws),document.addEventListener("touchstart",ws),document.addEventListener("keydown",xf)),ks++}),jt(()=>{ks--,ks<=0&&(document.removeEventListener("mousedown",ws),document.removeEventListener("touchstart",ws),document.removeEventListener("keydown",xf))}),{focusReason:wd,lastUserFocusTimestamp:cl,lastAutomatedFocusTimestamp:Sd}),Ss=e=>new CustomEvent(mz,{...gz,detail:e}),xz=B({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[_f,Cf,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const n=L();let r,i;const{focusReason:o}=Sz();sD(g=>{e.trapped&&!s.paused&&t("release-requested",g)});const s={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},a=g=>{if(!e.loop&&!e.trapped||s.paused)return;const{key:m,altKey:y,ctrlKey:b,metaKey:k,currentTarget:_,shiftKey:x}=g,{loop:T}=e,A=m===hn.tab&&!y&&!b&&!k,E=document.activeElement;if(A&&E){const O=_,[J,R]=bz(O);if(J&&R){if(!x&&E===R){const K=Ss({focusReason:o.value});t("focusout-prevented",K),K.defaultPrevented||(g.preventDefault(),T&&xr(J,!0))}else if(x&&[J,O].includes(E)){const K=Ss({focusReason:o.value});t("focusout-prevented",K),K.defaultPrevented||(g.preventDefault(),T&&xr(R,!0))}}else if(E===O){const K=Ss({focusReason:o.value});t("focusout-prevented",K),K.defaultPrevented||g.preventDefault()}}};nt(vz,{focusTrapRef:n,onKeydown:a}),oe(()=>e.focusTrapEl,g=>{g&&(n.value=g)},{immediate:!0}),oe([n],([g],[m])=>{g&&(g.addEventListener("keydown",a),g.addEventListener("focusin",u),g.addEventListener("focusout",h)),m&&(m.removeEventListener("keydown",a),m.removeEventListener("focusin",u),m.removeEventListener("focusout",h))});const l=g=>{t(_f,g)},c=g=>t(Cf,g),u=g=>{const m=p(n);if(!m)return;const y=g.target,b=g.relatedTarget,k=y&&m.contains(y);e.trapped||b&&m.contains(b)||(r=b),k&&t("focusin",g),!s.paused&&e.trapped&&(k?i=y:xr(i,!0))},h=g=>{const m=p(n);if(!(s.paused||!m))if(e.trapped){const y=g.relatedTarget;!Xo(y)&&!m.contains(y)&&setTimeout(()=>{if(!s.paused&&e.trapped){const b=Ss({focusReason:o.value});t("focusout-prevented",b),b.defaultPrevented||xr(i,!0)}},0)}else{const y=g.target;y&&m.contains(y)||t("focusout",g)}};async function d(){await De();const g=p(n);if(g){Sf.push(s);const m=g.contains(document.activeElement)?r:document.activeElement;if(r=m,!g.contains(m)){const b=new Event(Wl,bf);g.addEventListener(Wl,l),g.dispatchEvent(b),b.defaultPrevented||De(()=>{let k=e.focusStartEl;mn(k)||(xr(k),document.activeElement!==k&&(k="first")),k==="first"&&kz(xv(g),!0),(document.activeElement===m||k==="container")&&xr(g)})}}}function f(){const g=p(n);if(g){g.removeEventListener(Wl,l);const m=new CustomEvent(Ul,{...bf,detail:{focusReason:o.value}});g.addEventListener(Ul,c),g.dispatchEvent(m),!m.defaultPrevented&&(o.value=="keyboard"||!wz()||g.contains(document.activeElement))&&xr(r??document.body),g.removeEventListener(Ul,c),Sf.remove(s)}}return Ae(()=>{e.trapped&&d(),oe(()=>e.trapped,g=>{g?d():f()})}),jt(()=>{e.trapped&&f()}),{onKeydown:a}}});function Tz(e,t,n,r,i,o){return M(e.$slots,"default",{handleKeydown:e.onKeydown})}var Ez=Me(xz,[["render",Tz],["__file","focus-trap.vue"]]);const Az=["fixed","absolute"],$z=Oe({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:we(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:ol,default:"bottom"},popperOptions:{type:we(Object),default:()=>({})},strategy:{type:String,values:Az,default:"absolute"}}),Tv=Oe({...$z,id:String,style:{type:we([String,Array,Object])},className:{type:we([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:we([String,Array,Object])},popperStyle:{type:we([String,Array,Object])},referenceEl:{type:we(Object)},triggerTargetEl:{type:we(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),Pz={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},Lz=(e,t=[])=>{const{placement:n,strategy:r,popperOptions:i}=e,o={placement:n,strategy:r,...i,modifiers:[...Iz(e),...t]};return Bz(o,i==null?void 0:i.modifiers),o},Mz=e=>{if(Ve)return zt(e)};function Iz(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:r}=e;return[{name:"offset",options:{offset:[0,t??12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:r}},{name:"computeStyles",options:{gpuAcceleration:n}}]}function Bz(e,t){t&&(e.modifiers=[...e.modifiers,...t??[]])}const Oz=0,Fz=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:r,role:i}=Ee(kd,void 0),o=L(),s=L(),a=w(()=>({name:"eventListeners",enabled:!!e.visible})),l=w(()=>{var b;const k=p(o),_=(b=p(s))!=null?b:Oz;return{name:"arrow",enabled:!qF(k),options:{element:k,padding:_}}}),c=w(()=>({onFirstUpdate:()=>{g()},...Lz(e,[p(l),p(a)])})),u=w(()=>Mz(e.referenceEl)||p(r)),{attributes:h,state:d,styles:f,update:g,forceUpdate:m,instanceRef:y}=rD(u,n,c);return oe(y,b=>t.value=b),Ae(()=>{oe(()=>{var b;return(b=p(u))==null?void 0:b.getBoundingClientRect()},()=>{g()})}),{attributes:h,arrowRef:o,contentRef:n,instanceRef:y,state:d,styles:f,role:i,forceUpdate:m,update:g}},Rz=(e,{attributes:t,styles:n,role:r})=>{const{nextZIndex:i}=md(),o=Be("popper"),s=w(()=>p(t).popper),a=L(Ne(e.zIndex)?e.zIndex:i()),l=w(()=>[o.b(),o.is("pure",e.pure),o.is(e.effect),e.popperClass]),c=w(()=>[{zIndex:p(a)},p(n).popper,e.popperStyle||{}]),u=w(()=>r.value==="dialog"?"false":void 0),h=w(()=>p(n).arrow||{});return{ariaModal:u,arrowStyle:h,contentAttrs:s,contentClass:l,contentStyle:c,contentZIndex:a,updateZIndex:()=>{a.value=Ne(e.zIndex)?e.zIndex:i()}}},Nz=(e,t)=>{const n=L(!1),r=L();return{focusStartRef:r,trapped:n,onFocusAfterReleased:c=>{var u;((u=c.detail)==null?void 0:u.focusReason)!=="pointer"&&(r.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:c=>{e.visible&&!n.value&&(c.target&&(r.value=c.target),n.value=!0)},onFocusoutPrevented:c=>{e.trapping||(c.detail.focusReason==="pointer"&&c.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}},Dz=B({name:"ElPopperContent"}),zz=B({...Dz,props:Tv,emits:Pz,setup(e,{expose:t,emit:n}){const r=e,{focusStartRef:i,trapped:o,onFocusAfterReleased:s,onFocusAfterTrapped:a,onFocusInTrap:l,onFocusoutPrevented:c,onReleaseRequested:u}=Nz(r,n),{attributes:h,arrowRef:d,contentRef:f,styles:g,instanceRef:m,role:y,update:b}=Fz(r),{ariaModal:k,arrowStyle:_,contentAttrs:x,contentClass:T,contentStyle:A,updateZIndex:E}=Rz(r,{styles:g,attributes:h,role:y}),O=Ee(Ta,void 0),J=L();nt(_v,{arrowStyle:_,arrowRef:d,arrowOffset:J}),O&&(O.addInputId||O.removeInputId)&&nt(Ta,{...O,addInputId:Co,removeInputId:Co});let R;const P=(H=!0)=>{b(),H&&E()},K=()=>{P(!1),r.visible&&r.focusOnShow?o.value=!0:r.visible===!1&&(o.value=!1)};return Ae(()=>{oe(()=>r.triggerTargetEl,(H,N)=>{R==null||R(),R=void 0;const G=p(H||f.value),q=p(N||f.value);si(G)&&(R=oe([y,()=>r.ariaLabel,k,()=>r.id],z=>{["role","aria-label","aria-modal","id"].forEach((V,Q)=>{Xo(z[Q])?G.removeAttribute(V):G.setAttribute(V,z[Q])})},{immediate:!0})),q!==G&&si(q)&&["role","aria-label","aria-modal","id"].forEach(z=>{q.removeAttribute(z)})},{immediate:!0}),oe(()=>r.visible,K,{immediate:!0})}),jt(()=>{R==null||R(),R=void 0}),t({popperContentRef:f,popperInstanceRef:m,updatePopper:P,contentStyle:A}),(H,N)=>(v(),C("div",Qt({ref_key:"contentRef",ref:f},p(x),{style:p(A),class:p(T),tabindex:"-1",onMouseenter:N[0]||(N[0]=G=>H.$emit("mouseenter",G)),onMouseleave:N[1]||(N[1]=G=>H.$emit("mouseleave",G))}),[j(p(Ez),{trapped:p(o),"trap-on-focus-in":!0,"focus-trap-el":p(f),"focus-start-el":p(i),onFocusAfterTrapped:p(a),onFocusAfterReleased:p(s),onFocusin:p(l),onFocusoutPrevented:p(c),onReleaseRequested:p(u)},{default:$(()=>[M(H.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}});var Vz=Me(zz,[["__file","content.vue"]]);const Hz=Ct(sz),xd=Symbol("elTooltip"),Td=Oe({...cD,...Tv,appendTo:{type:we([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:we(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean}),Ev=Oe({...Sv,disabled:Boolean,trigger:{type:we([String,Array]),default:"hover"},triggerKeys:{type:we(Array),default:()=>[hn.enter,hn.space]}}),{useModelToggleProps:qz,useModelToggleEmits:jz,useModelToggle:Gz}=Q1("visible"),Wz=Oe({...Cv,...qz,...Td,...Ev,...kv,showArrow:{type:Boolean,default:!0}}),Uz=[...jz,"before-show","before-hide","show","hide","open","close"],Yz=(e,t)=>Ot(e)?e.includes(t):e===t,gi=(e,t,n)=>r=>{Yz(p(e),t)&&n(r)},Kz=B({name:"ElTooltipTrigger"}),Xz=B({...Kz,props:Ev,setup(e,{expose:t}){const n=e,r=Be("tooltip"),{controlled:i,id:o,open:s,onOpen:a,onClose:l,onToggle:c}=Ee(xd,void 0),u=L(null),h=()=>{if(p(i)||n.disabled)return!0},d=Xt(n,"trigger"),f=or(h,gi(d,"hover",a)),g=or(h,gi(d,"hover",l)),m=or(h,gi(d,"click",x=>{x.button===0&&c(x)})),y=or(h,gi(d,"focus",a)),b=or(h,gi(d,"focus",l)),k=or(h,gi(d,"contextmenu",x=>{x.preventDefault(),c(x)})),_=or(h,x=>{const{code:T}=x;n.triggerKeys.includes(T)&&(x.preventDefault(),c(x))});return t({triggerRef:u}),(x,T)=>(v(),X(p(fz),{id:p(o),"virtual-ref":x.virtualRef,open:p(s),"virtual-triggering":x.virtualTriggering,class:W(p(r).e("trigger")),onBlur:p(b),onClick:p(m),onContextmenu:p(k),onFocus:p(y),onMouseenter:p(f),onMouseleave:p(g),onKeydown:p(_)},{default:$(()=>[M(x.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var Qz=Me(Xz,[["__file","trigger.vue"]]);const Zz=B({name:"ElTooltipContent",inheritAttrs:!1}),Jz=B({...Zz,props:Td,setup(e,{expose:t}){const n=e,{selector:r}=dv(),i=Be("tooltip"),o=L(null),s=L(!1),{controlled:a,id:l,open:c,trigger:u,onClose:h,onOpen:d,onShow:f,onHide:g,onBeforeShow:m,onBeforeHide:y}=Ee(xd,void 0),b=w(()=>n.transition||`${i.namespace.value}-fade-in-linear`),k=w(()=>n.persistent);jt(()=>{s.value=!0});const _=w(()=>p(k)?!0:p(c)),x=w(()=>n.disabled?!1:p(c)),T=w(()=>n.appendTo||r.value),A=w(()=>{var z;return(z=n.style)!=null?z:{}}),E=w(()=>!p(c)),O=()=>{g()},J=()=>{if(p(a))return!0},R=or(J,()=>{n.enterable&&p(u)==="hover"&&d()}),P=or(J,()=>{p(u)==="hover"&&h()}),K=()=>{var z,V;(V=(z=o.value)==null?void 0:z.updatePopper)==null||V.call(z),m==null||m()},H=()=>{y==null||y()},N=()=>{f(),q=G$(w(()=>{var z;return(z=o.value)==null?void 0:z.popperContentRef}),()=>{if(p(a))return;p(u)!=="hover"&&h()})},G=()=>{n.virtualTriggering||h()};let q;return oe(()=>p(c),z=>{z||q==null||q()},{flush:"post"}),oe(()=>n.content,()=>{var z,V;(V=(z=o.value)==null?void 0:z.updatePopper)==null||V.call(z)}),t({contentRef:o}),(z,V)=>(v(),X(ru,{disabled:!z.teleported,to:p(T)},[j(Zt,{name:p(b),onAfterLeave:O,onBeforeEnter:K,onAfterEnter:N,onBeforeLeave:H},{default:$(()=>[p(_)?ze((v(),X(p(Vz),Qt({key:0,id:p(l),ref_key:"contentRef",ref:o},z.$attrs,{"aria-label":z.ariaLabel,"aria-hidden":p(E),"boundaries-padding":z.boundariesPadding,"fallback-placements":z.fallbackPlacements,"gpu-acceleration":z.gpuAcceleration,offset:z.offset,placement:z.placement,"popper-options":z.popperOptions,strategy:z.strategy,effect:z.effect,enterable:z.enterable,pure:z.pure,"popper-class":z.popperClass,"popper-style":[z.popperStyle,p(A)],"reference-el":z.referenceEl,"trigger-target-el":z.triggerTargetEl,visible:p(x),"z-index":z.zIndex,onMouseenter:p(R),onMouseleave:p(P),onBlur:G,onClose:p(h)}),{default:$(()=>[s.value?I("v-if",!0):M(z.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[tt,p(x)]]):I("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}});var eV=Me(Jz,[["__file","content.vue"]]);const tV=["innerHTML"],nV={key:1},rV=B({name:"ElTooltip"}),iV=B({...rV,props:Wz,emits:Uz,setup(e,{expose:t,emit:n}){const r=e;lD();const i=al(),o=L(),s=L(),a=()=>{var b;const k=p(o);k&&((b=k.popperInstanceRef)==null||b.update())},l=L(!1),c=L(),{show:u,hide:h,hasUpdateHandler:d}=Gz({indicator:l,toggleReason:c}),{onOpen:f,onClose:g}=uD({showAfter:Xt(r,"showAfter"),hideAfter:Xt(r,"hideAfter"),autoClose:Xt(r,"autoClose"),open:u,close:h}),m=w(()=>N1(r.visible)&&!d.value);nt(xd,{controlled:m,id:i,open:Pa(l),trigger:Xt(r,"trigger"),onOpen:b=>{f(b)},onClose:b=>{g(b)},onToggle:b=>{p(l)?g(b):f(b)},onShow:()=>{n("show",c.value)},onHide:()=>{n("hide",c.value)},onBeforeShow:()=>{n("before-show",c.value)},onBeforeHide:()=>{n("before-hide",c.value)},updatePopper:a}),oe(()=>r.disabled,b=>{b&&l.value&&(l.value=!1)});const y=b=>{var k,_;const x=(_=(k=s.value)==null?void 0:k.contentRef)==null?void 0:_.popperContentRef,T=(b==null?void 0:b.relatedTarget)||document.activeElement;return x&&x.contains(T)};return sy(()=>l.value&&h()),t({popperRef:o,contentRef:s,isFocusInsideContent:y,updatePopper:a,onOpen:f,onClose:g,hide:h}),(b,k)=>(v(),X(p(Hz),{ref_key:"popperRef",ref:o,role:b.role},{default:$(()=>[j(Qz,{disabled:b.disabled,trigger:b.trigger,"trigger-keys":b.triggerKeys,"virtual-ref":b.virtualRef,"virtual-triggering":b.virtualTriggering},{default:$(()=>[b.$slots.default?M(b.$slots,"default",{key:0}):I("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),j(eV,{ref_key:"contentRef",ref:s,"aria-label":b.ariaLabel,"boundaries-padding":b.boundariesPadding,content:b.content,disabled:b.disabled,effect:b.effect,enterable:b.enterable,"fallback-placements":b.fallbackPlacements,"hide-after":b.hideAfter,"gpu-acceleration":b.gpuAcceleration,offset:b.offset,persistent:b.persistent,"popper-class":b.popperClass,"popper-style":b.popperStyle,placement:b.placement,"popper-options":b.popperOptions,pure:b.pure,"raw-content":b.rawContent,"reference-el":b.referenceEl,"trigger-target-el":b.triggerTargetEl,"show-after":b.showAfter,strategy:b.strategy,teleported:b.teleported,transition:b.transition,"virtual-triggering":b.virtualTriggering,"z-index":b.zIndex,"append-to":b.appendTo},{default:$(()=>[M(b.$slots,"content",{},()=>[b.rawContent?(v(),C("span",{key:0,innerHTML:b.content},null,8,tV)):(v(),C("span",nV,ee(b.content),1))]),b.showArrow?(v(),X(p(cz),{key:0,"arrow-offset":b.arrowOffset},null,8,["arrow-offset"])):I("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var oV=Me(iV,[["__file","tooltip.vue"]]);const sV=Ct(oV),aV=Oe({size:{type:[Number,String],values:Qo,default:"",validator:e=>Ne(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:tn},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:we(String),default:"cover"}}),lV={error:e=>e instanceof Event},cV=["src","alt","srcset"],uV=B({name:"ElAvatar"}),dV=B({...uV,props:aV,emits:lV,setup(e,{emit:t}){const n=e,r=Be("avatar"),i=L(!1),o=w(()=>{const{size:c,icon:u,shape:h}=n,d=[r.b()];return mn(c)&&d.push(r.m(c)),u&&d.push(r.m("icon")),h&&d.push(r.m(h)),d}),s=w(()=>{const{size:c}=n;return Ne(c)?r.cssVarBlock({size:Ca(c)||""}):void 0}),a=w(()=>({objectFit:n.fit}));oe(()=>n.src,()=>i.value=!1);function l(c){i.value=!0,t("error",c)}return(c,u)=>(v(),C("span",{class:W(p(o)),style:et(p(s))},[(c.src||c.srcSet)&&!i.value?(v(),C("img",{key:0,src:c.src,alt:c.alt,srcset:c.srcSet,style:et(p(a)),onError:l},null,44,cV)):c.icon?(v(),X(p(ke),{key:1},{default:$(()=>[(v(),X(Je(c.icon)))]),_:1})):M(c.$slots,"default",{key:2})],6))}});var hV=Me(dV,[["__file","avatar.vue"]]);const pV=Ct(hV),fV=Oe({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0}}),mV=["textContent"],gV=B({name:"ElBadge"}),vV=B({...gV,props:fV,setup(e,{expose:t}){const n=e,r=Be("badge"),i=w(()=>n.isDot?"":Ne(n.value)&&Ne(n.max)?n.max<n.value?`${n.max}+`:n.value===0&&!n.showZero?"":`${n.value}`:`${n.value}`);return t({content:i}),(o,s)=>(v(),C("div",{class:W(p(r).b())},[M(o.$slots,"default"),j(Zt,{name:`${p(r).namespace.value}-zoom-in-center`,persisted:""},{default:$(()=>[ze(S("sup",{class:W([p(r).e("content"),p(r).em("content",o.type),p(r).is("fixed",!!o.$slots.default),p(r).is("dot",o.isDot)]),textContent:ee(p(i))},null,10,mV),[[tt,!o.hidden&&(p(i)||o.isDot)]])]),_:1},8,["name"])],2))}});var yV=Me(vV,[["__file","badge.vue"]]);const bV=Ct(yV),Av=Symbol("buttonGroupContextKey"),_V=(e,t)=>{UR({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},w(()=>e.type==="text"));const n=Ee(Av,void 0),r=vd("button"),{form:i}=_d(),o=ll(w(()=>n==null?void 0:n.size)),s=bd(),a=L(),l=No(),c=w(()=>e.type||(n==null?void 0:n.type)||""),u=w(()=>{var g,m,y;return(y=(m=e.autoInsertSpace)!=null?m:(g=r.value)==null?void 0:g.autoInsertSpace)!=null?y:!1}),h=w(()=>e.tag==="button"?{ariaDisabled:s.value||e.loading,disabled:s.value||e.loading,autofocus:e.autofocus,type:e.nativeType}:{}),d=w(()=>{var g;const m=(g=l.default)==null?void 0:g.call(l);if(u.value&&(m==null?void 0:m.length)===1){const y=m[0];if((y==null?void 0:y.type)===nm){const b=y.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(b.trim())}}return!1});return{_disabled:s,_size:o,_type:c,_ref:a,_props:h,shouldAddSpace:d,handleClick:g=>{e.nativeType==="reset"&&(i==null||i.resetFields()),t("click",g)}}},CV=["default","primary","success","warning","info","danger","text",""],kV=["button","submit","reset"],Xc=Oe({size:gd,disabled:Boolean,type:{type:String,values:CV,default:""},icon:{type:tn},nativeType:{type:String,values:kV,default:"button"},loading:Boolean,loadingIcon:{type:tn,default:()=>z1},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:we([String,Object]),default:"button"}}),wV={click:e=>e instanceof MouseEvent};function ft(e,t){SV(e)&&(e="100%");var n=xV(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function xs(e){return Math.min(1,Math.max(0,e))}function SV(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function xV(e){return typeof e=="string"&&e.indexOf("%")!==-1}function $v(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Ts(e){return e<=1?"".concat(Number(e)*100,"%"):e}function Yr(e){return e.length===1?"0"+e:String(e)}function TV(e,t,n){return{r:ft(e,255)*255,g:ft(t,255)*255,b:ft(n,255)*255}}function Tf(e,t,n){e=ft(e,255),t=ft(t,255),n=ft(n,255);var r=Math.max(e,t,n),i=Math.min(e,t,n),o=0,s=0,a=(r+i)/2;if(r===i)s=0,o=0;else{var l=r-i;switch(s=a>.5?l/(2-r-i):l/(r+i),r){case e:o=(t-n)/l+(t<n?6:0);break;case t:o=(n-e)/l+2;break;case n:o=(e-t)/l+4;break}o/=6}return{h:o,s,l:a}}function Yl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function EV(e,t,n){var r,i,o;if(e=ft(e,360),t=ft(t,100),n=ft(n,100),t===0)i=n,o=n,r=n;else{var s=n<.5?n*(1+t):n+t-n*t,a=2*n-s;r=Yl(a,s,e+1/3),i=Yl(a,s,e),o=Yl(a,s,e-1/3)}return{r:r*255,g:i*255,b:o*255}}function Ef(e,t,n){e=ft(e,255),t=ft(t,255),n=ft(n,255);var r=Math.max(e,t,n),i=Math.min(e,t,n),o=0,s=r,a=r-i,l=r===0?0:a/r;if(r===i)o=0;else{switch(r){case e:o=(t-n)/a+(t<n?6:0);break;case t:o=(n-e)/a+2;break;case n:o=(e-t)/a+4;break}o/=6}return{h:o,s:l,v:s}}function AV(e,t,n){e=ft(e,360)*6,t=ft(t,100),n=ft(n,100);var r=Math.floor(e),i=e-r,o=n*(1-t),s=n*(1-i*t),a=n*(1-(1-i)*t),l=r%6,c=[n,s,o,o,a,n][l],u=[a,n,n,s,o,o][l],h=[o,o,a,n,n,s][l];return{r:c*255,g:u*255,b:h*255}}function Af(e,t,n,r){var i=[Yr(Math.round(e).toString(16)),Yr(Math.round(t).toString(16)),Yr(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function $V(e,t,n,r,i){var o=[Yr(Math.round(e).toString(16)),Yr(Math.round(t).toString(16)),Yr(Math.round(n).toString(16)),Yr(PV(r))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function PV(e){return Math.round(parseFloat(e)*255).toString(16)}function $f(e){return Ut(e)/255}function Ut(e){return parseInt(e,16)}function LV(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var Qc={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function MV(e){var t={r:0,g:0,b:0},n=1,r=null,i=null,o=null,s=!1,a=!1;return typeof e=="string"&&(e=OV(e)),typeof e=="object"&&(ir(e.r)&&ir(e.g)&&ir(e.b)?(t=TV(e.r,e.g,e.b),s=!0,a=String(e.r).substr(-1)==="%"?"prgb":"rgb"):ir(e.h)&&ir(e.s)&&ir(e.v)?(r=Ts(e.s),i=Ts(e.v),t=AV(e.h,r,i),s=!0,a="hsv"):ir(e.h)&&ir(e.s)&&ir(e.l)&&(r=Ts(e.s),o=Ts(e.l),t=EV(e.h,r,o),s=!0,a="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=$v(n),{ok:s,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var IV="[-\\+]?\\d+%?",BV="[-\\+]?\\d*\\.\\d+%?",Ar="(?:".concat(BV,")|(?:").concat(IV,")"),Kl="[\\s|\\(]+(".concat(Ar,")[,|\\s]+(").concat(Ar,")[,|\\s]+(").concat(Ar,")\\s*\\)?"),Xl="[\\s|\\(]+(".concat(Ar,")[,|\\s]+(").concat(Ar,")[,|\\s]+(").concat(Ar,")[,|\\s]+(").concat(Ar,")\\s*\\)?"),En={CSS_UNIT:new RegExp(Ar),rgb:new RegExp("rgb"+Kl),rgba:new RegExp("rgba"+Xl),hsl:new RegExp("hsl"+Kl),hsla:new RegExp("hsla"+Xl),hsv:new RegExp("hsv"+Kl),hsva:new RegExp("hsva"+Xl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function OV(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(Qc[e])e=Qc[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=En.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=En.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=En.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=En.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=En.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=En.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=En.hex8.exec(e),n?{r:Ut(n[1]),g:Ut(n[2]),b:Ut(n[3]),a:$f(n[4]),format:t?"name":"hex8"}:(n=En.hex6.exec(e),n?{r:Ut(n[1]),g:Ut(n[2]),b:Ut(n[3]),format:t?"name":"hex"}:(n=En.hex4.exec(e),n?{r:Ut(n[1]+n[1]),g:Ut(n[2]+n[2]),b:Ut(n[3]+n[3]),a:$f(n[4]+n[4]),format:t?"name":"hex8"}:(n=En.hex3.exec(e),n?{r:Ut(n[1]+n[1]),g:Ut(n[2]+n[2]),b:Ut(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function ir(e){return!!En.CSS_UNIT.exec(String(e))}var FV=function(){function e(t,n){t===void 0&&(t=""),n===void 0&&(n={});var r;if(t instanceof e)return t;typeof t=="number"&&(t=LV(t)),this.originalInput=t;var i=MV(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=n.format)!==null&&r!==void 0?r:i.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),n,r,i,o=t.r/255,s=t.g/255,a=t.b/255;return o<=.03928?n=o/12.92:n=Math.pow((o+.055)/1.055,2.4),s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),.2126*n+.7152*r+.0722*i},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=$v(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=Ef(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=Ef(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?"hsv(".concat(n,", ").concat(r,"%, ").concat(i,"%)"):"hsva(".concat(n,", ").concat(r,"%, ").concat(i,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=Tf(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=Tf(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?"hsl(".concat(n,", ").concat(r,"%, ").concat(i,"%)"):"hsla(".concat(n,", ").concat(r,"%, ").concat(i,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),Af(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),$V(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(n,", ").concat(r,")"):"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(n){return"".concat(Math.round(ft(n,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(n){return Math.round(ft(n,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+Af(this.r,this.g,this.b,!1),n=0,r=Object.entries(Qc);n<r.length;n++){var i=r[n],o=i[0],s=i[1];if(t===s)return o}return!1},e.prototype.toString=function(t){var n=!!t;t=t??this.format;var r=!1,i=this.a<1&&this.a>=0,o=!n&&i&&(t.startsWith("hex")||t==="name");return o?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l+=t/100,n.l=xs(n.l),new e(n)},e.prototype.brighten=function(t){t===void 0&&(t=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)},e.prototype.darken=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.l-=t/100,n.l=xs(n.l),new e(n)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s-=t/100,n.s=xs(n.s),new e(n)},e.prototype.saturate=function(t){t===void 0&&(t=10);var n=this.toHsl();return n.s+=t/100,n.s=xs(n.s),new e(n)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)},e.prototype.mix=function(t,n){n===void 0&&(n=50);var r=this.toRgb(),i=new e(t).toRgb(),o=n/100,s={r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a};return new e(s)},e.prototype.analogous=function(t,n){t===void 0&&(t=6),n===void 0&&(n=30);var r=this.toHsl(),i=360/n,o=[this];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,o.push(new e(r));return o},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var n=this.toHsv(),r=n.h,i=n.s,o=n.v,s=[],a=1/t;t--;)s.push(new e({h:r,s:i,v:o})),o=(o+a)%1;return s},e.prototype.splitcomplement=function(){var t=this.toHsl(),n=t.h;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var n=this.toRgb(),r=new e(t).toRgb(),i=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/i,g:(n.g*n.a+r.g*r.a*(1-n.a))/i,b:(n.b*n.a+r.b*r.a*(1-n.a))/i,a:i})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var n=this.toHsl(),r=n.h,i=[this],o=360/t,s=1;s<t;s++)i.push(new e({h:(r+s*o)%360,s:n.s,l:n.l}));return i},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}();function wr(e,t=20){return e.mix("#141414",t).toString()}function RV(e){const t=bd(),n=Be("button");return w(()=>{let r={};const i=e.color;if(i){const o=new FV(i),s=e.dark?o.tint(20).toString():wr(o,20);if(e.plain)r=n.cssVarBlock({"bg-color":e.dark?wr(o,90):o.tint(90).toString(),"text-color":i,"border-color":e.dark?wr(o,50):o.tint(50).toString(),"hover-text-color":`var(${n.cssVarName("color-white")})`,"hover-bg-color":i,"hover-border-color":i,"active-bg-color":s,"active-text-color":`var(${n.cssVarName("color-white")})`,"active-border-color":s}),t.value&&(r[n.cssVarBlockName("disabled-bg-color")]=e.dark?wr(o,90):o.tint(90).toString(),r[n.cssVarBlockName("disabled-text-color")]=e.dark?wr(o,50):o.tint(50).toString(),r[n.cssVarBlockName("disabled-border-color")]=e.dark?wr(o,80):o.tint(80).toString());else{const a=e.dark?wr(o,30):o.tint(30).toString(),l=o.isDark()?`var(${n.cssVarName("color-white")})`:`var(${n.cssVarName("color-black")})`;if(r=n.cssVarBlock({"bg-color":i,"text-color":l,"border-color":i,"hover-bg-color":a,"hover-text-color":l,"hover-border-color":a,"active-bg-color":s,"active-border-color":s}),t.value){const c=e.dark?wr(o,50):o.tint(50).toString();r[n.cssVarBlockName("disabled-bg-color")]=c,r[n.cssVarBlockName("disabled-text-color")]=e.dark?"rgba(255, 255, 255, 0.5)":`var(${n.cssVarName("color-white")})`,r[n.cssVarBlockName("disabled-border-color")]=c}}}return r})}const NV=B({name:"ElButton"}),DV=B({...NV,props:Xc,emits:wV,setup(e,{expose:t,emit:n}){const r=e,i=RV(r),o=Be("button"),{_ref:s,_size:a,_type:l,_disabled:c,_props:u,shouldAddSpace:h,handleClick:d}=_V(r,n);return t({ref:s,size:a,type:l,disabled:c,shouldAddSpace:h}),(f,g)=>(v(),X(Je(f.tag),Qt({ref_key:"_ref",ref:s},p(u),{class:[p(o).b(),p(o).m(p(l)),p(o).m(p(a)),p(o).is("disabled",p(c)),p(o).is("loading",f.loading),p(o).is("plain",f.plain),p(o).is("round",f.round),p(o).is("circle",f.circle),p(o).is("text",f.text),p(o).is("link",f.link),p(o).is("has-bg",f.bg)],style:p(i),onClick:p(d)}),{default:$(()=>[f.loading?(v(),C(he,{key:0},[f.$slots.loading?M(f.$slots,"loading",{key:0}):(v(),X(p(ke),{key:1,class:W(p(o).is("loading"))},{default:$(()=>[(v(),X(Je(f.loadingIcon)))]),_:1},8,["class"]))],64)):f.icon||f.$slots.icon?(v(),X(p(ke),{key:1},{default:$(()=>[f.icon?(v(),X(Je(f.icon),{key:0})):M(f.$slots,"icon",{key:1})]),_:3})):I("v-if",!0),f.$slots.default?(v(),C("span",{key:2,class:W({[p(o).em("text","expand")]:p(h)})},[M(f.$slots,"default")],2)):I("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var zV=Me(DV,[["__file","button.vue"]]);const VV={size:Xc.size,type:Xc.type},HV=B({name:"ElButtonGroup"}),qV=B({...HV,props:VV,setup(e){const t=e;nt(Av,ct({size:Xt(t,"size"),type:Xt(t,"type")}));const n=Be("button");return(r,i)=>(v(),C("div",{class:W(`${p(n).b("group")}`)},[M(r.$slots,"default")],2))}});var Pv=Me(qV,[["__file","button-group.vue"]]);const Ed=Ct(zV,{ButtonGroup:Pv});il(Pv);const Tr=new Map;let Pf;Ve&&(document.addEventListener("mousedown",e=>Pf=e),document.addEventListener("mouseup",e=>{for(const t of Tr.values())for(const{documentHandler:n}of t)n(e,Pf)}));function Lf(e,t){let n=[];return Array.isArray(t.arg)?n=t.arg:si(t.arg)&&n.push(t.arg),function(r,i){const o=t.instance.popperRef,s=r.target,a=i==null?void 0:i.target,l=!t||!t.instance,c=!s||!a,u=e.contains(s)||e.contains(a),h=e===s,d=n.length&&n.some(g=>g==null?void 0:g.contains(s))||n.length&&n.includes(a),f=o&&(o.contains(s)||o.contains(a));l||c||u||h||d||f||t.value(r,i)}}const jV={beforeMount(e,t){Tr.has(e)||Tr.set(e,[]),Tr.get(e).push({documentHandler:Lf(e,t),bindingFn:t.value})},updated(e,t){Tr.has(e)||Tr.set(e,[]);const n=Tr.get(e),r=n.findIndex(o=>o.bindingFn===t.oldValue),i={documentHandler:Lf(e,t),bindingFn:t.value};r>=0?n.splice(r,1,i):n.push(i)},unmounted(e){Tr.delete(e)}},GV=Oe({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:{type:Boolean,default:!1}}),WV={change:(e,t)=>[e,t].every(Ne)},Lv=Symbol("carouselContextKey"),Mf=300,UV=(e,t,n)=>{const{children:r,addChild:i,removeChild:o}=mD(_t(),"ElCarouselItem"),s=No(),a=L(-1),l=L(null),c=L(!1),u=L(),h=L(0),d=L(!0),f=L(!0),g=L(!1),m=w(()=>e.arrow!=="never"&&!p(k)),y=w(()=>r.value.some(re=>re.props.label.toString().length>0)),b=w(()=>e.type==="card"),k=w(()=>e.direction==="vertical"),_=w(()=>e.height!=="auto"?{height:e.height}:{height:`${h.value}px`,overflow:"hidden"}),x=vo(re=>{R(re)},Mf,{trailing:!0}),T=vo(re=>{Q(re)},Mf),A=re=>d.value?a.value<=1?re<=1:re>1:!0;function E(){l.value&&(clearInterval(l.value),l.value=null)}function O(){e.interval<=0||!e.autoplay||l.value||(l.value=setInterval(()=>J(),e.interval))}const J=()=>{f.value||(g.value=!0),f.value=!1,a.value<r.value.length-1?a.value=a.value+1:e.loop&&(a.value=0)};function R(re){if(f.value||(g.value=!0),f.value=!1,mn(re)){const Ue=r.value.filter($e=>$e.props.name===re);Ue.length>0&&(re=r.value.indexOf(Ue[0]))}if(re=Number(re),Number.isNaN(re)||re!==Math.floor(re))return;const fe=r.value.length,xe=a.value;re<0?a.value=e.loop?fe-1:0:re>=fe?a.value=e.loop?0:fe-1:a.value=re,xe===a.value&&P(xe),ue()}function P(re){r.value.forEach((fe,xe)=>{fe.translateItem(xe,a.value,re)})}function K(re,fe){var xe,Ue,$e,Ie;const qe=p(r),rt=qe.length;if(rt===0||!re.states.inStage)return!1;const ht=fe+1,Pt=fe-1,kt=rt-1,Cn=qe[kt].states.active,rn=qe[0].states.active,Jn=(Ue=(xe=qe[ht])==null?void 0:xe.states)==null?void 0:Ue.active,ut=(Ie=($e=qe[Pt])==null?void 0:$e.states)==null?void 0:Ie.active;return fe===kt&&rn||Jn?"left":fe===0&&Cn||ut?"right":!1}function H(){c.value=!0,e.pauseOnHover&&E()}function N(){c.value=!1,O()}function G(){g.value=!1}function q(re){p(k)||r.value.forEach((fe,xe)=>{re===K(fe,xe)&&(fe.states.hover=!0)})}function z(){p(k)||r.value.forEach(re=>{re.states.hover=!1})}function V(re){re!==a.value&&(f.value||(g.value=!0)),a.value=re}function Q(re){e.trigger==="hover"&&re!==a.value&&(a.value=re,f.value||(g.value=!0))}function Z(){R(a.value-1)}function te(){R(a.value+1)}function ue(){E(),e.pauseOnHover||O()}function Y(re){e.height==="auto"&&(h.value=re)}function ce(){var re;const fe=(re=s.default)==null?void 0:re.call(s);if(!fe)return null;const xe=yo(fe),Ue="ElCarouselItem",$e=xe.filter(Ie=>Ci(Ie)&&Ie.type.name===Ue);return($e==null?void 0:$e.length)===2&&e.loop&&!b.value?(d.value=!0,$e):(d.value=!1,null)}oe(()=>a.value,(re,fe)=>{P(fe),d.value&&(re=re%2,fe=fe%2),fe>-1&&t("change",re,fe)}),oe(()=>e.autoplay,re=>{re?O():E()}),oe(()=>e.loop,()=>{R(a.value)}),oe(()=>e.interval,()=>{ue()});const ae=Mn();return Ae(()=>{oe(()=>r.value,()=>{r.value.length>0&&R(e.initialIndex)},{immediate:!0}),ae.value=dn(u.value,()=>{P()}),O()}),jt(()=>{E(),u.value&&ae.value&&ae.value.stop()}),nt(Lv,{root:u,isCardType:b,isVertical:k,items:r,loop:e.loop,addItem:i,removeItem:o,setActiveItem:R,setContainerHeight:Y}),{root:u,activeIndex:a,arrowDisplay:m,hasLabel:y,hover:c,isCardType:b,isTransitioning:g,items:r,isVertical:k,containerStyle:_,isItemsTwoLength:d,handleButtonEnter:q,handleTransitionEnd:G,handleButtonLeave:z,handleIndicatorClick:V,handleMouseEnter:H,handleMouseLeave:N,setActiveItem:R,prev:Z,next:te,PlaceholderItem:ce,isTwoLengthShow:A,throttledArrowClick:x,throttledIndicatorHover:T}},YV=["aria-label"],KV=["aria-label"],XV=["onMouseenter","onClick"],QV=["aria-label"],ZV={key:0},JV={key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},eH=S("defs",null,[S("filter",{id:"elCarouselHorizontal"},[S("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),S("filter",{id:"elCarouselVertical"},[S("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])],-1),tH=[eH],nH="ElCarousel",rH=B({name:nH}),iH=B({...rH,props:GV,emits:WV,setup(e,{expose:t,emit:n}){const r=e,{root:i,activeIndex:o,arrowDisplay:s,hasLabel:a,hover:l,isCardType:c,items:u,isVertical:h,containerStyle:d,handleButtonEnter:f,handleButtonLeave:g,isTransitioning:m,handleIndicatorClick:y,handleMouseEnter:b,handleMouseLeave:k,handleTransitionEnd:_,setActiveItem:x,prev:T,next:A,PlaceholderItem:E,isTwoLengthShow:O,throttledArrowClick:J,throttledIndicatorHover:R}=UV(r,n),P=Be("carousel"),{t:K}=_n(),H=w(()=>{const q=[P.b(),P.m(r.direction)];return p(c)&&q.push(P.m("card")),q}),N=w(()=>{const q=[P.e("container")];return r.motionBlur&&p(m)&&q.push(p(h)?`${P.namespace.value}-transitioning-vertical`:`${P.namespace.value}-transitioning`),q}),G=w(()=>{const q=[P.e("indicators"),P.em("indicators",r.direction)];return p(a)&&q.push(P.em("indicators","labels")),r.indicatorPosition==="outside"&&q.push(P.em("indicators","outside")),p(h)&&q.push(P.em("indicators","right")),q});return t({setActiveItem:x,prev:T,next:A}),(q,z)=>(v(),C("div",{ref_key:"root",ref:i,class:W(p(H)),onMouseenter:z[7]||(z[7]=dt((...V)=>p(b)&&p(b)(...V),["stop"])),onMouseleave:z[8]||(z[8]=dt((...V)=>p(k)&&p(k)(...V),["stop"]))},[p(s)?(v(),X(Zt,{key:0,name:"carousel-arrow-left",persisted:""},{default:$(()=>[ze(S("button",{type:"button",class:W([p(P).e("arrow"),p(P).em("arrow","left")]),"aria-label":p(K)("el.carousel.leftArrow"),onMouseenter:z[0]||(z[0]=V=>p(f)("left")),onMouseleave:z[1]||(z[1]=(...V)=>p(g)&&p(g)(...V)),onClick:z[2]||(z[2]=dt(V=>p(J)(p(o)-1),["stop"]))},[j(p(ke),null,{default:$(()=>[j(p(nd))]),_:1})],42,YV),[[tt,(q.arrow==="always"||p(l))&&(r.loop||p(o)>0)]])]),_:1})):I("v-if",!0),p(s)?(v(),X(Zt,{key:1,name:"carousel-arrow-right",persisted:""},{default:$(()=>[ze(S("button",{type:"button",class:W([p(P).e("arrow"),p(P).em("arrow","right")]),"aria-label":p(K)("el.carousel.rightArrow"),onMouseenter:z[3]||(z[3]=V=>p(f)("right")),onMouseleave:z[4]||(z[4]=(...V)=>p(g)&&p(g)(...V)),onClick:z[5]||(z[5]=dt(V=>p(J)(p(o)+1),["stop"]))},[j(p(ke),null,{default:$(()=>[j(p(rd))]),_:1})],42,KV),[[tt,(q.arrow==="always"||p(l))&&(r.loop||p(o)<p(u).length-1)]])]),_:1})):I("v-if",!0),S("div",{class:W(p(N)),style:et(p(d)),onTransitionend:z[6]||(z[6]=(...V)=>p(_)&&p(_)(...V))},[j(p(E)),M(q.$slots,"default")],38),q.indicatorPosition!=="none"?(v(),C("ul",{key:2,class:W(p(G))},[(v(!0),C(he,null,Te(p(u),(V,Q)=>ze((v(),C("li",{key:Q,class:W([p(P).e("indicator"),p(P).em("indicator",q.direction),p(P).is("active",Q===p(o))]),onMouseenter:Z=>p(R)(Q),onClick:dt(Z=>p(y)(Q),["stop"])},[S("button",{class:W(p(P).e("button")),"aria-label":p(K)("el.carousel.indicator",{index:Q+1})},[p(a)?(v(),C("span",ZV,ee(V.props.label),1)):I("v-if",!0)],10,QV)],42,XV)),[[tt,p(O)(Q)]])),128))],2)):I("v-if",!0),r.motionBlur?(v(),C("svg",JV,tH)):I("v-if",!0)],34))}});var oH=Me(iH,[["__file","carousel.vue"]]);const sH=Oe({name:{type:String,default:""},label:{type:[String,Number],default:""}}),aH=(e,t)=>{const n=Ee(Lv),r=_t(),i=.83,o=L(),s=L(!1),a=L(0),l=L(1),c=L(!1),u=L(!1),h=L(!1),d=L(!1),{isCardType:f,isVertical:g}=n;function m(x,T,A){const E=A-1,O=T-1,J=T+1,R=A/2;return T===0&&x===E?-1:T===E&&x===0?A:x<O&&T-x>=R?A+1:x>J&&x-T>=R?-2:x}function y(x,T){var A,E;const O=p(g)?((A=n.root.value)==null?void 0:A.offsetHeight)||0:((E=n.root.value)==null?void 0:E.offsetWidth)||0;return h.value?O*((2-i)*(x-T)+1)/4:x<T?-(1+i)*O/4:(3+i)*O/4}function b(x,T,A){const E=n.root.value;return E?((A?E.offsetHeight:E.offsetWidth)||0)*(x-T):0}const k=(x,T,A)=>{var E;const O=p(f),J=(E=n.items.value.length)!=null?E:Number.NaN,R=x===T;!O&&!td(A)&&(d.value=R||x===A),!R&&J>2&&n.loop&&(x=m(x,T,J));const P=p(g);c.value=R,O?(h.value=Math.round(Math.abs(x-T))<=1,a.value=y(x,T),l.value=p(c)?1:i):a.value=b(x,T,P),u.value=!0,R&&o.value&&n.setContainerHeight(o.value.offsetHeight)};function _(){if(n&&p(f)){const x=n.items.value.findIndex(({uid:T})=>T===r.uid);n.setActiveItem(x)}}return Ae(()=>{n.addItem({props:e,states:ct({hover:s,translate:a,scale:l,active:c,ready:u,inStage:h,animating:d}),uid:r.uid,translateItem:k})}),Yn(()=>{n.removeItem(r.uid)}),{carouselItemRef:o,active:c,animating:d,hover:s,inStage:h,isVertical:g,translate:a,isCardType:f,scale:l,ready:u,handleItemClick:_}},lH=B({name:"ElCarouselItem"}),cH=B({...lH,props:sH,setup(e){const t=e,n=Be("carousel"),{carouselItemRef:r,active:i,animating:o,hover:s,inStage:a,isVertical:l,translate:c,isCardType:u,scale:h,ready:d,handleItemClick:f}=aH(t),g=w(()=>[n.e("item"),n.is("active",i.value),n.is("in-stage",a.value),n.is("hover",s.value),n.is("animating",o.value),{[n.em("item","card")]:u.value,[n.em("item","card-vertical")]:u.value&&l.value}]),m=w(()=>{const b=`${`translate${p(l)?"Y":"X"}`}(${p(c)}px)`,k=`scale(${p(h)})`;return{transform:[b,k].join(" ")}});return(y,b)=>ze((v(),C("div",{ref_key:"carouselItemRef",ref:r,class:W(p(g)),style:et(p(m)),onClick:b[0]||(b[0]=(...k)=>p(f)&&p(f)(...k))},[p(u)?ze((v(),C("div",{key:0,class:W(p(n).e("mask"))},null,2)),[[tt,!p(i)]]):I("v-if",!0),M(y.$slots,"default")],6)),[[tt,p(d)]])}});var Mv=Me(cH,[["__file","carousel-item.vue"]]);const uH=Ct(oH,{CarouselItem:Mv}),dH=il(Mv),Iv=Oe({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:Qo},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),hH={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},pH=B({name:"ElTag"}),fH=B({...pH,props:Iv,emits:hH,setup(e,{emit:t}){const n=e,r=ll(),i=Be("tag"),o=w(()=>{const{type:l,hit:c,effect:u,closable:h,round:d}=n;return[i.b(),i.is("closable",h),i.m(l||"primary"),i.m(r.value),i.m(u),i.is("hit",c),i.is("round",d)]}),s=l=>{t("close",l)},a=l=>{t("click",l)};return(l,c)=>l.disableTransitions?(v(),C("span",{key:0,class:W(p(o)),style:et({backgroundColor:l.color}),onClick:a},[S("span",{class:W(p(i).e("content"))},[M(l.$slots,"default")],2),l.closable?(v(),X(p(ke),{key:0,class:W(p(i).e("close")),onClick:dt(s,["stop"])},{default:$(()=>[j(p(ka))]),_:1},8,["class","onClick"])):I("v-if",!0)],6)):(v(),X(Zt,{key:1,name:`${p(i).namespace.value}-zoom-in-center`,appear:""},{default:$(()=>[S("span",{class:W(p(o)),style:et({backgroundColor:l.color}),onClick:a},[S("span",{class:W(p(i).e("content"))},[M(l.$slots,"default")],2),l.closable?(v(),X(p(ke),{key:0,class:W(p(i).e("close")),onClick:dt(s,["stop"])},{default:$(()=>[j(p(ka))]),_:1},8,["class","onClick"])):I("v-if",!0)],6)]),_:3},8,["name"]))}});var mH=Me(fH,[["__file","tag.vue"]]);const Zc=Ct(mH),gH=Oe({urlList:{type:we(Array),default:()=>Wi([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:we(String)}}),vH={close:()=>!0,switch:e=>Ne(e),rotate:e=>Ne(e)},yH=["src","crossorigin"],bH=B({name:"ElImageViewer"}),_H=B({...bH,props:gH,emits:vH,setup(e,{expose:t,emit:n}){var r;const i=e,o={CONTAIN:{name:"contain",icon:Bd(CR)},ORIGINAL:{name:"original",icon:Bd(MR)}},{t:s}=_n(),a=Be("image-viewer"),{nextZIndex:l}=md(),c=L(),u=L([]),h=ay(),d=L(!0),f=L(i.initialIndex),g=Mn(o.CONTAIN),m=L({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),y=L((r=i.zIndex)!=null?r:l()),b=w(()=>{const{urlList:Z}=i;return Z.length<=1}),k=w(()=>f.value===0),_=w(()=>f.value===i.urlList.length-1),x=w(()=>i.urlList[f.value]),T=w(()=>[a.e("btn"),a.e("prev"),a.is("disabled",!i.infinite&&k.value)]),A=w(()=>[a.e("btn"),a.e("next"),a.is("disabled",!i.infinite&&_.value)]),E=w(()=>{const{scale:Z,deg:te,offsetX:ue,offsetY:Y,enableTransition:ce}=m.value;let ae=ue/Z,re=Y/Z;switch(te%360){case 90:case-270:[ae,re]=[re,-ae];break;case 180:case-180:[ae,re]=[-ae,-re];break;case 270:case-90:[ae,re]=[-re,ae];break}const fe={transform:`scale(${Z}) rotate(${te}deg) translate(${ae}px, ${re}px)`,transition:ce?"transform .3s":""};return g.value.name===o.CONTAIN.name&&(fe.maxWidth=fe.maxHeight="100%"),fe});function O(){R(),n("close")}function J(){const Z=vo(ue=>{switch(ue.code){case hn.esc:i.closeOnPressEscape&&O();break;case hn.space:G();break;case hn.left:z();break;case hn.up:Q("zoomIn");break;case hn.right:V();break;case hn.down:Q("zoomOut");break}}),te=vo(ue=>{const Y=ue.deltaY||ue.deltaX;Q(Y<0?"zoomIn":"zoomOut",{zoomRate:i.zoomRate,enableTransition:!1})});h.run(()=>{He(document,"keydown",Z),He(document,"wheel",te)})}function R(){h.stop()}function P(){d.value=!1}function K(Z){d.value=!1,Z.target.alt=s("el.image.error")}function H(Z){if(d.value||Z.button!==0||!c.value)return;m.value.enableTransition=!1;const{offsetX:te,offsetY:ue}=m.value,Y=Z.pageX,ce=Z.pageY,ae=vo(fe=>{m.value={...m.value,offsetX:te+fe.pageX-Y,offsetY:ue+fe.pageY-ce}}),re=He(document,"mousemove",ae);He(document,"mouseup",()=>{re()}),Z.preventDefault()}function N(){m.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function G(){if(d.value)return;const Z=_a(o),te=Object.values(o),ue=g.value.name,ce=(te.findIndex(ae=>ae.name===ue)+1)%Z.length;g.value=o[Z[ce]],N()}function q(Z){const te=i.urlList.length;f.value=(Z+te)%te}function z(){k.value&&!i.infinite||q(f.value-1)}function V(){_.value&&!i.infinite||q(f.value+1)}function Q(Z,te={}){if(d.value)return;const{minScale:ue,maxScale:Y}=i,{zoomRate:ce,rotateDeg:ae,enableTransition:re}={zoomRate:i.zoomRate,rotateDeg:90,enableTransition:!0,...te};switch(Z){case"zoomOut":m.value.scale>ue&&(m.value.scale=Number.parseFloat((m.value.scale/ce).toFixed(3)));break;case"zoomIn":m.value.scale<Y&&(m.value.scale=Number.parseFloat((m.value.scale*ce).toFixed(3)));break;case"clockwise":m.value.deg+=ae,n("rotate",m.value.deg);break;case"anticlockwise":m.value.deg-=ae,n("rotate",m.value.deg);break}m.value.enableTransition=re}return oe(x,()=>{De(()=>{const Z=u.value[0];Z!=null&&Z.complete||(d.value=!0)})}),oe(f,Z=>{N(),n("switch",Z)}),Ae(()=>{var Z,te;J(),(te=(Z=c.value)==null?void 0:Z.focus)==null||te.call(Z)}),t({setActiveItem:q}),(Z,te)=>(v(),X(ru,{to:"body",disabled:!Z.teleported},[j(Zt,{name:"viewer-fade",appear:""},{default:$(()=>[S("div",{ref_key:"wrapper",ref:c,tabindex:-1,class:W(p(a).e("wrapper")),style:et({zIndex:y.value})},[S("div",{class:W(p(a).e("mask")),onClick:te[0]||(te[0]=dt(ue=>Z.hideOnClickModal&&O(),["self"]))},null,2),I(" CLOSE "),S("span",{class:W([p(a).e("btn"),p(a).e("close")]),onClick:O},[j(p(ke),null,{default:$(()=>[j(p(ka))]),_:1})],2),I(" ARROW "),p(b)?I("v-if",!0):(v(),C(he,{key:0},[S("span",{class:W(p(T)),onClick:z},[j(p(ke),null,{default:$(()=>[j(p(nd))]),_:1})],2),S("span",{class:W(p(A)),onClick:V},[j(p(ke),null,{default:$(()=>[j(p(rd))]),_:1})],2)],64)),I(" ACTIONS "),S("div",{class:W([p(a).e("btn"),p(a).e("actions")])},[S("div",{class:W(p(a).e("actions__inner"))},[j(p(ke),{onClick:te[1]||(te[1]=ue=>Q("zoomOut"))},{default:$(()=>[j(p(HR))]),_:1}),j(p(ke),{onClick:te[2]||(te[2]=ue=>Q("zoomIn"))},{default:$(()=>[j(p(zR))]),_:1}),S("i",{class:W(p(a).e("actions__divider"))},null,2),j(p(ke),{onClick:G},{default:$(()=>[(v(),X(Je(p(g).icon)))]),_:1}),S("i",{class:W(p(a).e("actions__divider"))},null,2),j(p(ke),{onClick:te[3]||(te[3]=ue=>Q("anticlockwise"))},{default:$(()=>[j(p(AR))]),_:1}),j(p(ke),{onClick:te[4]||(te[4]=ue=>Q("clockwise"))},{default:$(()=>[j(p(PR))]),_:1})],2)],2),I(" CANVAS "),S("div",{class:W(p(a).e("canvas"))},[(v(!0),C(he,null,Te(Z.urlList,(ue,Y)=>ze((v(),C("img",{ref_for:!0,ref:ce=>u.value[Y]=ce,key:ue,src:ue,style:et(p(E)),class:W(p(a).e("img")),crossorigin:Z.crossorigin,onLoad:P,onError:K,onMousedown:H},null,46,yH)),[[tt,Y===f.value]])),128))],2),M(Z.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var CH=Me(_H,[["__file","image-viewer.vue"]]);const Bv=Ct(CH),kH=Oe({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:we([String,Object])},previewSrcList:{type:we(Array),default:()=>Wi([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:we(String)}}),wH={load:e=>e instanceof Event,error:e=>e instanceof Event,switch:e=>Ne(e),close:()=>!0,show:()=>!0},SH=["src","loading","crossorigin"],xH={key:0},TH=B({name:"ElImage",inheritAttrs:!1}),EH=B({...TH,props:kH,emits:wH,setup(e,{emit:t}){const n=e;let r="";const{t:i}=_n(),o=Be("image"),s=tm(),a=Y1(),l=L(),c=L(!1),u=L(!0),h=L(!1),d=L(),f=L(),g=Ve&&"loading"in HTMLImageElement.prototype;let m,y;const b=w(()=>[o.e("inner"),x.value&&o.e("preview"),u.value&&o.is("loading")]),k=w(()=>s.style),_=w(()=>{const{fit:V}=n;return Ve&&V?{objectFit:V}:{}}),x=w(()=>{const{previewSrcList:V}=n;return Array.isArray(V)&&V.length>0}),T=w(()=>{const{previewSrcList:V,initialIndex:Q}=n;let Z=Q;return Q>V.length-1&&(Z=0),Z}),A=w(()=>n.loading==="eager"?!1:!g&&n.loading==="lazy"||n.lazy),E=()=>{Ve&&(u.value=!0,c.value=!1,l.value=n.src)};function O(V){u.value=!1,c.value=!1,t("load",V)}function J(V){u.value=!1,c.value=!0,t("error",V)}function R(){cI(d.value,f.value)&&(E(),H())}const P=Qg(R,200,!0);async function K(){var V;if(!Ve)return;await De();const{scrollContainer:Q}=n;si(Q)?f.value=Q:mn(Q)&&Q!==""?f.value=(V=document.querySelector(Q))!=null?V:void 0:d.value&&(f.value=QF(d.value)),f.value&&(m=He(f,"scroll",P),setTimeout(()=>R(),100))}function H(){!Ve||!f.value||!P||(m==null||m(),f.value=void 0)}function N(V){if(V.ctrlKey){if(V.deltaY<0)return V.preventDefault(),!1;if(V.deltaY>0)return V.preventDefault(),!1}}function G(){x.value&&(y=He("wheel",N,{passive:!1}),r=document.body.style.overflow,document.body.style.overflow="hidden",h.value=!0,t("show"))}function q(){y==null||y(),document.body.style.overflow=r,h.value=!1,t("close")}function z(V){t("switch",V)}return oe(()=>n.src,()=>{A.value?(u.value=!0,c.value=!1,H(),K()):E()}),Ae(()=>{A.value?K():E()}),(V,Q)=>(v(),C("div",{ref_key:"container",ref:d,class:W([p(o).b(),V.$attrs.class]),style:et(p(k))},[c.value?M(V.$slots,"error",{key:0},()=>[S("div",{class:W(p(o).e("error"))},ee(p(i)("el.image.error")),3)]):(v(),C(he,{key:1},[l.value!==void 0?(v(),C("img",Qt({key:0},p(a),{src:l.value,loading:V.loading,style:p(_),class:p(b),crossorigin:V.crossorigin,onClick:G,onLoad:O,onError:J}),null,16,SH)):I("v-if",!0),u.value?(v(),C("div",{key:1,class:W(p(o).e("wrapper"))},[M(V.$slots,"placeholder",{},()=>[S("div",{class:W(p(o).e("placeholder"))},null,2)])],2)):I("v-if",!0)],64)),p(x)?(v(),C(he,{key:2},[h.value?(v(),X(p(Bv),{key:0,"z-index":V.zIndex,"initial-index":p(T),infinite:V.infinite,"zoom-rate":V.zoomRate,"min-scale":V.minScale,"max-scale":V.maxScale,"url-list":V.previewSrcList,"hide-on-click-modal":V.hideOnClickModal,teleported:V.previewTeleported,"close-on-press-escape":V.closeOnPressEscape,onClose:q,onSwitch:z},{default:$(()=>[V.$slots.viewer?(v(),C("div",xH,[M(V.$slots,"viewer")])):I("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):I("v-if",!0)],64)):I("v-if",!0)],6))}});var AH=Me(EH,[["__file","image.vue"]]);const If=Ct(AH),$H=Oe({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:tn}}),PH={click:e=>e instanceof MouseEvent},LH=["href","target"],MH=B({name:"ElLink"}),IH=B({...MH,props:$H,emits:PH,setup(e,{emit:t}){const n=e,r=Be("link"),i=w(()=>[r.b(),r.m(n.type),r.is("disabled",n.disabled),r.is("underline",n.underline&&!n.disabled)]);function o(s){n.disabled||t("click",s)}return(s,a)=>(v(),C("a",{class:W(p(i)),href:s.disabled||!s.href?void 0:s.href,target:s.disabled||!s.href?void 0:s.target,onClick:o},[s.icon?(v(),X(p(ke),{key:0},{default:$(()=>[(v(),X(Je(s.icon)))]),_:1})):I("v-if",!0),s.$slots.default?(v(),C("span",{key:1,class:W(p(r).e("inner"))},[M(s.$slots,"default")],2)):I("v-if",!0),s.$slots.icon?M(s.$slots,"icon",{key:2}):I("v-if",!0)],10,LH))}});var BH=Me(IH,[["__file","link.vue"]]);const Ov=Ct(BH),Fv=Symbol("elPaginationKey"),OH=Oe({disabled:Boolean,currentPage:{type:Number,default:1},prevText:{type:String},prevIcon:{type:tn}}),FH={click:e=>e instanceof MouseEvent},RH=["disabled","aria-label","aria-disabled"],NH={key:0},DH=B({name:"ElPaginationPrev"}),zH=B({...DH,props:OH,emits:FH,setup(e){const t=e,{t:n}=_n(),r=w(()=>t.disabled||t.currentPage<=1);return(i,o)=>(v(),C("button",{type:"button",class:"btn-prev",disabled:p(r),"aria-label":i.prevText||p(n)("el.pagination.prev"),"aria-disabled":p(r),onClick:o[0]||(o[0]=s=>i.$emit("click",s))},[i.prevText?(v(),C("span",NH,ee(i.prevText),1)):(v(),X(p(ke),{key:1},{default:$(()=>[(v(),X(Je(i.prevIcon)))]),_:1}))],8,RH))}});var VH=Me(zH,[["__file","prev.vue"]]);const HH=Oe({disabled:Boolean,currentPage:{type:Number,default:1},pageCount:{type:Number,default:50},nextText:{type:String},nextIcon:{type:tn}}),qH=["disabled","aria-label","aria-disabled"],jH={key:0},GH=B({name:"ElPaginationNext"}),WH=B({...GH,props:HH,emits:["click"],setup(e){const t=e,{t:n}=_n(),r=w(()=>t.disabled||t.currentPage===t.pageCount||t.pageCount===0);return(i,o)=>(v(),C("button",{type:"button",class:"btn-next",disabled:p(r),"aria-label":i.nextText||p(n)("el.pagination.next"),"aria-disabled":p(r),onClick:o[0]||(o[0]=s=>i.$emit("click",s))},[i.nextText?(v(),C("span",jH,ee(i.nextText),1)):(v(),X(p(ke),{key:1},{default:$(()=>[(v(),X(Je(i.nextIcon)))]),_:1}))],8,qH))}});var UH=Me(WH,[["__file","next.vue"]]);const Rv=Symbol("ElSelectGroup"),ul=Symbol("ElSelect");function YH(e,t){const n=Ee(ul),r=Ee(Rv,{disabled:!1}),i=w(()=>n.props.multiple?u(n.props.modelValue,e.value):u([n.props.modelValue],e.value)),o=w(()=>{if(n.props.multiple){const f=n.props.modelValue||[];return!i.value&&f.length>=n.props.multipleLimit&&n.props.multipleLimit>0}else return!1}),s=w(()=>e.label||(pn(e.value)?"":e.value)),a=w(()=>e.value||e.label||""),l=w(()=>e.disabled||t.groupDisabled||o.value),c=_t(),u=(f=[],g)=>{if(pn(e.value)){const m=n.props.valueKey;return f&&f.some(y=>nu(lr(y,m))===lr(g,m))}else return f&&f.includes(g)},h=()=>{!e.disabled&&!r.disabled&&(n.states.hoveringIndex=n.optionsArray.indexOf(c.proxy))},d=f=>{const g=new RegExp(WF(f),"i");t.visible=g.test(s.value)||e.created};return oe(()=>s.value,()=>{!e.created&&!n.props.remote&&n.setSelected()}),oe(()=>e.value,(f,g)=>{const{remote:m,valueKey:y}=n.props;if(Bo(f,g)||(n.onOptionDestroy(g,c.proxy),n.onOptionCreate(c.proxy)),!e.created&&!m){if(y&&pn(f)&&pn(g)&&f[y]===g[y])return;n.setSelected()}}),oe(()=>r.disabled,()=>{t.groupDisabled=r.disabled},{immediate:!0}),{select:n,currentLabel:s,currentValue:a,itemSelected:i,isDisabled:l,hoverItem:h,updateOption:d}}const KH=B({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const t=Be("select"),n=al(),r=w(()=>[t.be("dropdown","item"),t.is("disabled",p(a)),t.is("selected",p(s)),t.is("hovering",p(d))]),i=ct({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:o,itemSelected:s,isDisabled:a,select:l,hoverItem:c,updateOption:u}=YH(e,i),{visible:h,hover:d}=iu(i),f=_t().proxy;l.onOptionCreate(f),jt(()=>{const m=f.value,{selected:y}=l.states,k=(l.props.multiple?y:[y]).some(_=>_.value===f.value);De(()=>{l.states.cachedOptions.get(m)===f&&!k&&l.states.cachedOptions.delete(m)}),l.onOptionDestroy(m,f)});function g(){e.disabled!==!0&&i.groupDisabled!==!0&&l.handleOptionSelect(f)}return{ns:t,id:n,containerKls:r,currentLabel:o,itemSelected:s,isDisabled:a,select:l,hoverItem:c,updateOption:u,visible:h,hover:d,selectOptionClick:g,states:i}}}),XH=["id","aria-disabled","aria-selected"];function QH(e,t,n,r,i,o){return ze((v(),C("li",{id:e.id,class:W(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:t[0]||(t[0]=(...s)=>e.hoverItem&&e.hoverItem(...s)),onClick:t[1]||(t[1]=dt((...s)=>e.selectOptionClick&&e.selectOptionClick(...s),["stop"]))},[M(e.$slots,"default",{},()=>[S("span",null,ee(e.currentLabel),1)])],42,XH)),[[tt,e.visible]])}var Ad=Me(KH,[["render",QH],["__file","option.vue"]]);const ZH=B({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=Ee(ul),t=Be("select"),n=w(()=>e.props.popperClass),r=w(()=>e.props.multiple),i=w(()=>e.props.fitInputWidth),o=L("");function s(){var a;o.value=`${(a=e.selectRef)==null?void 0:a.offsetWidth}px`}return Ae(()=>{s(),dn(e.selectRef,s)}),{ns:t,minWidth:o,popperClass:n,isMultiple:r,isFitInputWidth:i}}});function JH(e,t,n,r,i,o){return v(),C("div",{class:W([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:et({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(v(),C("div",{key:0,class:W(e.ns.be("dropdown","header"))},[M(e.$slots,"header")],2)):I("v-if",!0),M(e.$slots,"default"),e.$slots.footer?(v(),C("div",{key:1,class:W(e.ns.be("dropdown","footer"))},[M(e.$slots,"footer")],2)):I("v-if",!0)],6)}var eq=Me(ZH,[["render",JH],["__file","select-dropdown.vue"]]);function tq(e){const t=L(!1);return{handleCompositionStart:()=>{t.value=!0},handleCompositionUpdate:o=>{const s=o.target.value,a=s[s.length-1]||"";t.value=!U1(a)},handleCompositionEnd:o=>{t.value&&(t.value=!1,Rt(e)&&e(o))}}}const nq=11,rq=(e,t)=>{const{t:n}=_n(),r=al(),i=Be("select"),o=Be("input"),s=ct({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:e.multiple?[]:{},selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),a=L(null),l=L(null),c=L(null),u=L(null),h=L(null),d=L(null),f=L(null),g=L(null),m=L(null),y=L(null),b=L(null),k=L(null),{wrapperRef:_,isFocused:x,handleFocus:T,handleBlur:A}=gv(h,{afterFocus(){e.automaticDropdown&&!E.value&&(E.value=!0,s.menuVisibleOnFocus=!0)},beforeBlur(U){var se,Re;return((se=c.value)==null?void 0:se.isFocusInsideContent(U))||((Re=u.value)==null?void 0:Re.isFocusInsideContent(U))},afterBlur(){E.value=!1,s.menuVisibleOnFocus=!1}}),E=L(!1),O=L(),{form:J,formItem:R}=_d(),{inputId:P}=yv(e,{formItemContext:R}),K=w(()=>e.disabled||(J==null?void 0:J.disabled)),H=w(()=>Y.value.some(U=>U.value==="")),N=w(()=>e.multiple?Ot(e.modelValue)&&e.modelValue.length>0:!Xo(e.modelValue)&&(e.modelValue!==""||H.value)),G=w(()=>e.clearable&&!K.value&&s.inputHovering&&N.value),q=w(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),z=w(()=>i.is("reverse",q.value&&E.value)),V=w(()=>(R==null?void 0:R.validateState)||""),Q=w(()=>G1[V.value]),Z=w(()=>e.remote?300:0),te=w(()=>e.loading?e.loadingText||n("el.select.loading"):e.remote&&!s.inputValue&&s.options.size===0?!1:e.filterable&&s.inputValue&&s.options.size>0&&ue.value===0?e.noMatchText||n("el.select.noMatch"):s.options.size===0?e.noDataText||n("el.select.noData"):null),ue=w(()=>Y.value.filter(U=>U.visible).length),Y=w(()=>{const U=Array.from(s.options.values()),se=[];return s.optionValues.forEach(Re=>{const Ze=U.findIndex(Sn=>Sn.value===Re);Ze>-1&&se.push(U[Ze])}),se.length>=U.length?se:U}),ce=w(()=>Array.from(s.cachedOptions.values())),ae=w(()=>{const U=Y.value.filter(se=>!se.created).some(se=>se.currentLabel===s.inputValue);return e.filterable&&e.allowCreate&&s.inputValue!==""&&!U}),re=()=>{e.filterable&&Rt(e.filterMethod)||e.filterable&&e.remote&&Rt(e.remoteMethod)||Y.value.forEach(U=>{U.updateOption(s.inputValue)})},fe=ll(),xe=w(()=>["small"].includes(fe.value)?"small":"default"),Ue=w({get(){return E.value&&te.value!==!1},set(U){E.value=U}}),$e=w(()=>Ot(e.modelValue)?e.modelValue.length===0&&!s.inputValue:e.filterable?!s.inputValue:!0),Ie=w(()=>{var U;const se=(U=e.placeholder)!=null?U:n("el.select.placeholder");return e.multiple||!N.value?se:s.selectedLabel});oe(()=>e.modelValue,(U,se)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(s.inputValue="",qe("")),ht(),!Bo(U,se)&&e.validateEvent&&(R==null||R.validate("change").catch(Re=>void 0))},{flush:"post",deep:!0}),oe(()=>E.value,U=>{U?qe(s.inputValue):(s.inputValue="",s.previousQuery=null,s.isBeforeHide=!0),t("visible-change",U)}),oe(()=>s.options.entries(),()=>{var U;if(!Ve)return;const se=((U=a.value)==null?void 0:U.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!td(e.modelValue)||!Array.from(se).includes(document.activeElement))&&ht(),e.defaultFirstOption&&(e.filterable||e.remote)&&ue.value&&rt()},{flush:"post"}),oe(()=>s.hoveringIndex,U=>{Ne(U)&&U>-1?O.value=Y.value[U]||{}:O.value={},Y.value.forEach(se=>{se.hover=O.value===se})}),Fn(()=>{s.isBeforeHide||re()});const qe=U=>{s.previousQuery!==U&&(s.previousQuery=U,e.filterable&&Rt(e.filterMethod)?e.filterMethod(U):e.filterable&&e.remote&&Rt(e.remoteMethod)&&e.remoteMethod(U),e.defaultFirstOption&&(e.filterable||e.remote)&&ue.value?De(rt):De(kt))},rt=()=>{const U=Y.value.filter(Ze=>Ze.visible&&!Ze.disabled&&!Ze.states.groupDisabled),se=U.find(Ze=>Ze.created),Re=U[0];s.hoveringIndex=an(Y.value,se||Re)},ht=()=>{if(e.multiple)s.selectedLabel="";else{const se=Pt(e.modelValue);s.selectedLabel=se.currentLabel,s.selected=se;return}const U=[];Ot(e.modelValue)&&e.modelValue.forEach(se=>{U.push(Pt(se))}),s.selected=U},Pt=U=>{let se;const Re=yl(U).toLowerCase()==="object",Ze=yl(U).toLowerCase()==="null",Sn=yl(U).toLowerCase()==="undefined";for(let F=s.cachedOptions.size-1;F>=0;F--){const ie=ce.value[F];if(Re?lr(ie.value,e.valueKey)===lr(U,e.valueKey):ie.value===U){se={value:U,currentLabel:ie.currentLabel,isDisabled:ie.isDisabled};break}}if(se)return se;const kr=Re?U.label:!Ze&&!Sn?U:"";return{value:U,currentLabel:kr}},kt=()=>{e.multiple?s.hoveringIndex=Y.value.findIndex(U=>s.selected.some(se=>Cr(se)===Cr(U))):s.hoveringIndex=Y.value.findIndex(U=>Cr(U)===Cr(s.selected))},Cn=()=>{s.selectionWidth=l.value.getBoundingClientRect().width},rn=()=>{s.calculatorWidth=d.value.getBoundingClientRect().width},Jn=()=>{s.collapseItemWidth=b.value.getBoundingClientRect().width},ut=()=>{var U,se;(se=(U=c.value)==null?void 0:U.updatePopper)==null||se.call(U)},wt=()=>{var U,se;(se=(U=u.value)==null?void 0:U.updatePopper)==null||se.call(U)},St=()=>{s.inputValue.length>0&&!E.value&&(E.value=!0),qe(s.inputValue)},Lt=U=>{if(s.inputValue=U.target.value,e.remote)on();else return St()},on=R1(()=>{St()},Z.value),ne=U=>{Bo(e.modelValue,U)||t(W1,U)},Se=U=>HF(U,se=>!s.disabledOptions.has(se)),je=U=>{if(e.multiple&&U.code!==hn.delete&&U.target.value.length<=0){const se=e.modelValue.slice(),Re=Se(se);if(Re<0)return;se.splice(Re,1),t($n,se),ne(se)}},sn=(U,se)=>{const Re=s.selected.indexOf(se);if(Re>-1&&!K.value){const Ze=e.modelValue.slice();Ze.splice(Re,1),t($n,Ze),ne(Ze),t("remove-tag",se.value)}U.stopPropagation(),wn()},Dn=U=>{U.stopPropagation();const se=e.multiple?[]:void 0;if(e.multiple)for(const Re of s.selected)Re.isDisabled&&se.push(Re.value);t($n,se),ne(se),s.hoveringIndex=-1,E.value=!1,t("clear"),wn()},Nr=U=>{if(e.multiple){const se=(e.modelValue||[]).slice(),Re=an(se,U.value);Re>-1?se.splice(Re,1):(e.multipleLimit<=0||se.length<e.multipleLimit)&&se.push(U.value),t($n,se),ne(se),U.created&&qe(""),e.filterable&&!e.reserveKeyword&&(s.inputValue="")}else t($n,U.value),ne(U.value),E.value=!1;wn(),!E.value&&De(()=>{kn(U)})},an=(U=[],se)=>{if(!pn(se))return U.indexOf(se);const Re=e.valueKey;let Ze=-1;return U.some((Sn,kr)=>nu(lr(Sn,Re))===lr(se,Re)?(Ze=kr,!0):!1),Ze},kn=U=>{var se,Re,Ze,Sn,kr;const me=Ot(U)?U[0]:U;let F=null;if(me!=null&&me.value){const ie=Y.value.filter(pe=>pe.value===me.value);ie.length>0&&(F=ie[0].$el)}if(c.value&&F){const ie=(Sn=(Ze=(Re=(se=c.value)==null?void 0:se.popperRef)==null?void 0:Re.contentRef)==null?void 0:Ze.querySelector)==null?void 0:Sn.call(Ze,`.${i.be("dropdown","wrap")}`);ie&&ZF(ie,F)}(kr=k.value)==null||kr.handleScroll()},Yi=U=>{s.options.set(U.value,U),s.cachedOptions.set(U.value,U),U.disabled&&s.disabledOptions.set(U.value,U)},Ki=(U,se)=>{s.options.get(U)===se&&s.options.delete(U)},{handleCompositionStart:dl,handleCompositionUpdate:Dr,handleCompositionEnd:hl}=tq(U=>Lt(U)),pl=w(()=>{var U,se;return(se=(U=c.value)==null?void 0:U.popperRef)==null?void 0:se.contentRef}),it=()=>{De(()=>kn(s.selected))},wn=()=>{var U;(U=h.value)==null||U.focus()},fl=()=>{di()},ts=U=>{Dn(U)},di=U=>{if(E.value=!1,x.value){const se=new FocusEvent("focus",U);De(()=>A(se))}},ns=()=>{s.inputValue.length>0?s.inputValue="":E.value=!1},Xi=()=>{K.value||(s.menuVisibleOnFocus?s.menuVisibleOnFocus=!1:E.value=!E.value)},ml=()=>{E.value?Y.value[s.hoveringIndex]&&Nr(Y.value[s.hoveringIndex]):Xi()},Cr=U=>pn(U.value)?lr(U.value,e.valueKey):U.value,rs=w(()=>Y.value.filter(U=>U.visible).every(U=>U.disabled)),gl=w(()=>e.multiple?e.collapseTags?s.selected.slice(0,e.maxCollapseTags):s.selected:[]),er=w(()=>e.multiple?e.collapseTags?s.selected.slice(e.maxCollapseTags):[]:[]),hi=U=>{if(!E.value){E.value=!0;return}if(!(s.options.size===0||ue.value===0)&&!rs.value){U==="next"?(s.hoveringIndex++,s.hoveringIndex===s.options.size&&(s.hoveringIndex=0)):U==="prev"&&(s.hoveringIndex--,s.hoveringIndex<0&&(s.hoveringIndex=s.options.size-1));const se=Y.value[s.hoveringIndex];(se.disabled===!0||se.states.groupDisabled===!0||!se.visible)&&hi(U),De(()=>kn(O.value))}},is=()=>{if(!l.value)return 0;const U=window.getComputedStyle(l.value);return Number.parseFloat(U.gap||"6px")},os=w(()=>{const U=is();return{maxWidth:`${b.value&&e.maxCollapseTags===1?s.selectionWidth-s.collapseItemWidth-U:s.selectionWidth}px`}}),vl=w(()=>({maxWidth:`${s.selectionWidth}px`})),ss=w(()=>({width:`${Math.max(s.calculatorWidth,nq)}px`}));return e.multiple&&!Ot(e.modelValue)&&t($n,[]),!e.multiple&&Ot(e.modelValue)&&t($n,""),dn(l,Cn),dn(d,rn),dn(m,ut),dn(_,ut),dn(y,wt),dn(b,Jn),Ae(()=>{ht()}),{inputId:P,contentId:r,nsSelect:i,nsInput:o,states:s,isFocused:x,expanded:E,optionsArray:Y,hoverOption:O,selectSize:fe,filteredOptionsCount:ue,resetCalculatorWidth:rn,updateTooltip:ut,updateTagTooltip:wt,debouncedOnInputChange:on,onInput:Lt,deletePrevTag:je,deleteTag:sn,deleteSelected:Dn,handleOptionSelect:Nr,scrollToOption:kn,hasModelValue:N,shouldShowPlaceholder:$e,currentPlaceholder:Ie,showClose:G,iconComponent:q,iconReverse:z,validateState:V,validateIcon:Q,showNewOption:ae,updateOptions:re,collapseTagSize:xe,setSelected:ht,selectDisabled:K,emptyText:te,handleCompositionStart:dl,handleCompositionUpdate:Dr,handleCompositionEnd:hl,onOptionCreate:Yi,onOptionDestroy:Ki,handleMenuEnter:it,handleFocus:T,focus:wn,blur:fl,handleBlur:A,handleClearClick:ts,handleClickOutside:di,handleEsc:ns,toggleMenu:Xi,selectOption:ml,getValueKey:Cr,navigateOptions:hi,dropdownMenuVisible:Ue,showTagList:gl,collapseTagList:er,tagStyle:os,collapseTagStyle:vl,inputStyle:ss,popperRef:pl,inputRef:h,tooltipRef:c,tagTooltipRef:u,calculatorRef:d,prefixRef:f,suffixRef:g,selectRef:a,wrapperRef:_,selectionRef:l,scrollbarRef:k,menuRef:m,tagMenuRef:y,collapseItemRef:b}};var iq=B({name:"ElOptions",setup(e,{slots:t}){const n=Ee(ul);let r=[];return()=>{var i,o;const s=(i=t.default)==null?void 0:i.call(t),a=[];function l(c){Ot(c)&&c.forEach(u=>{var h,d,f,g;const m=(h=(u==null?void 0:u.type)||{})==null?void 0:h.name;m==="ElOptionGroup"?l(!mn(u.children)&&!Ot(u.children)&&Rt((d=u.children)==null?void 0:d.default)?(f=u.children)==null?void 0:f.default():u.children):m==="ElOption"?a.push((g=u.props)==null?void 0:g.value):Ot(u.children)&&l(u.children)})}return s.length&&l((o=s[0])==null?void 0:o.children),Bo(a,r)||(r=a,n&&(n.states.optionValues=a)),s}}});const oq=Oe({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:gd,effect:{type:we(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:we(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:Td.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:tn,default:od},fitInputWidth:Boolean,suffixIcon:{type:tn,default:tR},tagType:{...Iv.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,placement:{type:we(String),values:ol,default:"bottom-start"},fallbackPlacements:{type:we(Array),default:["bottom-start","top-start","right","left"]},ariaLabel:{type:String,default:void 0}}),Bf="ElSelect",sq=B({name:Bf,componentName:Bf,components:{ElInput:bv,ElSelectMenu:eq,ElOption:Ad,ElOptions:iq,ElTag:Zc,ElScrollbar:nz,ElTooltip:sV,ElIcon:ke},directives:{ClickOutside:jV},props:oq,emits:[$n,W1,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:t}){const n=rq(e,t);return nt(ul,ct({props:e,states:n.states,optionsArray:n.optionsArray,handleOptionSelect:n.handleOptionSelect,onOptionCreate:n.onOptionCreate,onOptionDestroy:n.onOptionDestroy,selectRef:n.selectRef,setSelected:n.setSelected})),{...n}}}),aq=["id","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label"],lq=["textContent"];function cq(e,t,n,r,i,o){const s=st("el-tag"),a=st("el-tooltip"),l=st("el-icon"),c=st("el-option"),u=st("el-options"),h=st("el-scrollbar"),d=st("el-select-menu"),f=ly("click-outside");return ze((v(),C("div",{ref:"selectRef",class:W([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),onMouseenter:t[14]||(t[14]=g=>e.states.inputHovering=!0),onMouseleave:t[15]||(t[15]=g=>e.states.inputHovering=!1),onClick:t[16]||(t[16]=dt((...g)=>e.toggleMenu&&e.toggleMenu(...g),["stop"]))},[j(a,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:t[13]||(t[13]=g=>e.states.isBeforeHide=!1)},{default:$(()=>{var g;return[S("div",{ref:"wrapperRef",class:W([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(v(),C("div",{key:0,ref:"prefixRef",class:W(e.nsSelect.e("prefix"))},[M(e.$slots,"prefix")],2)):I("v-if",!0),S("div",{ref:"selectionRef",class:W([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?M(e.$slots,"tag",{key:0},()=>[(v(!0),C(he,null,Te(e.showTagList,m=>(v(),C("div",{key:e.getValueKey(m),class:W(e.nsSelect.e("selected-item"))},[j(s,{closable:!e.selectDisabled&&!m.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:et(e.tagStyle),onClose:y=>e.deleteTag(y,m)},{default:$(()=>[S("span",{class:W(e.nsSelect.e("tags-text"))},ee(m.currentLabel),3)]),_:2},1032,["closable","size","type","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(v(),X(a,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:$(()=>[S("div",{ref:"collapseItemRef",class:W(e.nsSelect.e("selected-item"))},[j(s,{closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:et(e.collapseTagStyle)},{default:$(()=>[S("span",{class:W(e.nsSelect.e("tags-text"))}," + "+ee(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","style"])],2)]),content:$(()=>[S("div",{ref:"tagMenuRef",class:W(e.nsSelect.e("selection"))},[(v(!0),C(he,null,Te(e.collapseTagList,m=>(v(),C("div",{key:e.getValueKey(m),class:W(e.nsSelect.e("selected-item"))},[j(s,{class:"in-tooltip",closable:!e.selectDisabled&&!m.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",onClose:y=>e.deleteTag(y,m)},{default:$(()=>[S("span",{class:W(e.nsSelect.e("tags-text"))},ee(m.currentLabel),3)]),_:2},1032,["closable","size","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):I("v-if",!0)]):I("v-if",!0),e.selectDisabled?I("v-if",!0):(v(),C("div",{key:1,class:W([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[ze(S("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":t[0]||(t[0]=m=>e.states.inputValue=m),type:"text",class:W([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:et(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((g=e.hoverOption)==null?void 0:g.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:t[1]||(t[1]=(...m)=>e.handleFocus&&e.handleFocus(...m)),onBlur:t[2]||(t[2]=(...m)=>e.handleBlur&&e.handleBlur(...m)),onKeydown:[t[3]||(t[3]=Gr(dt(m=>e.navigateOptions("next"),["stop","prevent"]),["down"])),t[4]||(t[4]=Gr(dt(m=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),t[5]||(t[5]=Gr(dt((...m)=>e.handleEsc&&e.handleEsc(...m),["stop","prevent"]),["esc"])),t[6]||(t[6]=Gr(dt((...m)=>e.selectOption&&e.selectOption(...m),["stop","prevent"]),["enter"])),t[7]||(t[7]=Gr(dt((...m)=>e.deletePrevTag&&e.deletePrevTag(...m),["stop"]),["delete"]))],onCompositionstart:t[8]||(t[8]=(...m)=>e.handleCompositionStart&&e.handleCompositionStart(...m)),onCompositionupdate:t[9]||(t[9]=(...m)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...m)),onCompositionend:t[10]||(t[10]=(...m)=>e.handleCompositionEnd&&e.handleCompositionEnd(...m)),onInput:t[11]||(t[11]=(...m)=>e.onInput&&e.onInput(...m)),onClick:t[12]||(t[12]=dt((...m)=>e.toggleMenu&&e.toggleMenu(...m),["stop"]))},null,46,aq),[[cy,e.states.inputValue]]),e.filterable?(v(),C("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:W(e.nsSelect.e("input-calculator")),textContent:ee(e.states.inputValue)},null,10,lq)):I("v-if",!0)],2)),e.shouldShowPlaceholder?(v(),C("div",{key:2,class:W([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[S("span",null,ee(e.currentPlaceholder),1)],2)):I("v-if",!0)],2),S("div",{ref:"suffixRef",class:W(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(v(),X(l,{key:0,class:W([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:$(()=>[(v(),X(Je(e.iconComponent)))]),_:1},8,["class"])):I("v-if",!0),e.showClose&&e.clearIcon?(v(),X(l,{key:1,class:W([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:$(()=>[(v(),X(Je(e.clearIcon)))]),_:1},8,["class","onClick"])):I("v-if",!0),e.validateState&&e.validateIcon?(v(),X(l,{key:2,class:W([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:$(()=>[(v(),X(Je(e.validateIcon)))]),_:1},8,["class"])):I("v-if",!0)],2)],2)]}),content:$(()=>[j(d,{ref:"menuRef"},{default:$(()=>[e.$slots.header?(v(),C("div",{key:0,class:W(e.nsSelect.be("dropdown","header"))},[M(e.$slots,"header")],2)):I("v-if",!0),ze(j(h,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:W([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:$(()=>[e.showNewOption?(v(),X(c,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):I("v-if",!0),j(u,null,{default:$(()=>[M(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[tt,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(v(),C("div",{key:1,class:W(e.nsSelect.be("dropdown","loading"))},[M(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(v(),C("div",{key:2,class:W(e.nsSelect.be("dropdown","empty"))},[M(e.$slots,"empty",{},()=>[S("span",null,ee(e.emptyText),1)])],2)):I("v-if",!0),e.$slots.footer?(v(),C("div",{key:3,class:W(e.nsSelect.be("dropdown","footer"))},[M(e.$slots,"footer")],2)):I("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","onBeforeShow"])],34)),[[f,e.handleClickOutside,e.popperRef]])}var uq=Me(sq,[["render",cq],["__file","select.vue"]]);const dq=B({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const t=Be("select"),n=L(null),r=_t(),i=L([]);nt(Rv,ct({...iu(e)}));const o=w(()=>i.value.some(l=>l.visible===!0)),s=l=>{const c=[];return Ot(l.children)&&l.children.forEach(u=>{var h,d;u.type&&u.type.name==="ElOption"&&u.component&&u.component.proxy?c.push(u.component.proxy):(h=u.children)!=null&&h.length?c.push(...s(u)):(d=u.component)!=null&&d.subTree&&c.push(...s(u.component.subTree))}),c},a=()=>{i.value=s(r.subTree)};return Ae(()=>{a()}),CP(n,a,{attributes:!0,subtree:!0,childList:!0}),{groupRef:n,visible:o,ns:t}}});function hq(e,t,n,r,i,o){return ze((v(),C("ul",{ref:"groupRef",class:W(e.ns.be("group","wrap"))},[S("li",{class:W(e.ns.be("group","title"))},ee(e.label),3),S("li",null,[S("ul",{class:W(e.ns.b("group"))},[M(e.$slots,"default")],2)])],2)),[[tt,e.visible]])}var Nv=Me(dq,[["render",hq],["__file","option-group.vue"]]);const pq=Ct(uq,{Option:Ad,OptionGroup:Nv}),fq=il(Ad);il(Nv);const $d=()=>Ee(Fv,{}),mq=Oe({pageSize:{type:Number,required:!0},pageSizes:{type:we(Array),default:()=>Wi([10,20,30,40,50,100])},popperClass:{type:String},disabled:Boolean,teleported:Boolean,size:{type:String,values:Qo}}),gq=B({name:"ElPaginationSizes"}),vq=B({...gq,props:mq,emits:["page-size-change"],setup(e,{emit:t}){const n=e,{t:r}=_n(),i=Be("pagination"),o=$d(),s=L(n.pageSize);oe(()=>n.pageSizes,(c,u)=>{if(!Bo(c,u)&&Array.isArray(c)){const h=c.includes(n.pageSize)?n.pageSize:n.pageSizes[0];t("page-size-change",h)}}),oe(()=>n.pageSize,c=>{s.value=c});const a=w(()=>n.pageSizes);function l(c){var u;c!==s.value&&(s.value=c,(u=o.handleSizeChange)==null||u.call(o,Number(c)))}return(c,u)=>(v(),C("span",{class:W(p(i).e("sizes"))},[j(p(pq),{"model-value":s.value,disabled:c.disabled,"popper-class":c.popperClass,size:c.size,teleported:c.teleported,"validate-event":!1,onChange:l},{default:$(()=>[(v(!0),C(he,null,Te(p(a),h=>(v(),X(p(fq),{key:h,value:h,label:h+p(r)("el.pagination.pagesize")},null,8,["value","label"]))),128))]),_:1},8,["model-value","disabled","popper-class","size","teleported"])],2))}});var yq=Me(vq,[["__file","sizes.vue"]]);const bq=Oe({size:{type:String,values:Qo}}),_q=["disabled"],Cq=B({name:"ElPaginationJumper"}),kq=B({...Cq,props:bq,setup(e){const{t}=_n(),n=Be("pagination"),{pageCount:r,disabled:i,currentPage:o,changeEvent:s}=$d(),a=L(),l=w(()=>{var h;return(h=a.value)!=null?h:o==null?void 0:o.value});function c(h){a.value=h?+h:""}function u(h){h=Math.trunc(+h),s==null||s(h),a.value=void 0}return(h,d)=>(v(),C("span",{class:W(p(n).e("jump")),disabled:p(i)},[S("span",{class:W([p(n).e("goto")])},ee(p(t)("el.pagination.goto")),3),j(p(bv),{size:h.size,class:W([p(n).e("editor"),p(n).is("in-pagination")]),min:1,max:p(r),disabled:p(i),"model-value":p(l),"validate-event":!1,label:p(t)("el.pagination.page"),type:"number","onUpdate:modelValue":c,onChange:u},null,8,["size","class","max","disabled","model-value","label"]),S("span",{class:W([p(n).e("classifier")])},ee(p(t)("el.pagination.pageClassifier")),3)],10,_q))}});var wq=Me(kq,[["__file","jumper.vue"]]);const Sq=Oe({total:{type:Number,default:1e3}}),xq=["disabled"],Tq=B({name:"ElPaginationTotal"}),Eq=B({...Tq,props:Sq,setup(e){const{t}=_n(),n=Be("pagination"),{disabled:r}=$d();return(i,o)=>(v(),C("span",{class:W(p(n).e("total")),disabled:p(r)},ee(p(t)("el.pagination.total",{total:i.total})),11,xq))}});var Aq=Me(Eq,[["__file","total.vue"]]);const $q=Oe({currentPage:{type:Number,default:1},pageCount:{type:Number,required:!0},pagerCount:{type:Number,default:7},disabled:Boolean}),Pq=["onKeyup"],Lq=["aria-current","aria-label","tabindex"],Mq=["tabindex","aria-label"],Iq=["aria-current","aria-label","tabindex"],Bq=["tabindex","aria-label"],Oq=["aria-current","aria-label","tabindex"],Fq=B({name:"ElPaginationPager"}),Rq=B({...Fq,props:$q,emits:["change"],setup(e,{emit:t}){const n=e,r=Be("pager"),i=Be("icon"),{t:o}=_n(),s=L(!1),a=L(!1),l=L(!1),c=L(!1),u=L(!1),h=L(!1),d=w(()=>{const x=n.pagerCount,T=(x-1)/2,A=Number(n.currentPage),E=Number(n.pageCount);let O=!1,J=!1;E>x&&(A>x-T&&(O=!0),A<E-T&&(J=!0));const R=[];if(O&&!J){const P=E-(x-2);for(let K=P;K<E;K++)R.push(K)}else if(!O&&J)for(let P=2;P<x;P++)R.push(P);else if(O&&J){const P=Math.floor(x/2)-1;for(let K=A-P;K<=A+P;K++)R.push(K)}else for(let P=2;P<E;P++)R.push(P);return R}),f=w(()=>["more","btn-quickprev",i.b(),r.is("disabled",n.disabled)]),g=w(()=>["more","btn-quicknext",i.b(),r.is("disabled",n.disabled)]),m=w(()=>n.disabled?-1:0);Fn(()=>{const x=(n.pagerCount-1)/2;s.value=!1,a.value=!1,n.pageCount>n.pagerCount&&(n.currentPage>n.pagerCount-x&&(s.value=!0),n.currentPage<n.pageCount-x&&(a.value=!0))});function y(x=!1){n.disabled||(x?l.value=!0:c.value=!0)}function b(x=!1){x?u.value=!0:h.value=!0}function k(x){const T=x.target;if(T.tagName.toLowerCase()==="li"&&Array.from(T.classList).includes("number")){const A=Number(T.textContent);A!==n.currentPage&&t("change",A)}else T.tagName.toLowerCase()==="li"&&Array.from(T.classList).includes("more")&&_(x)}function _(x){const T=x.target;if(T.tagName.toLowerCase()==="ul"||n.disabled)return;let A=Number(T.textContent);const E=n.pageCount,O=n.currentPage,J=n.pagerCount-2;T.className.includes("more")&&(T.className.includes("quickprev")?A=O-J:T.className.includes("quicknext")&&(A=O+J)),Number.isNaN(+A)||(A<1&&(A=1),A>E&&(A=E)),A!==O&&t("change",A)}return(x,T)=>(v(),C("ul",{class:W(p(r).b()),onClick:_,onKeyup:Gr(k,["enter"])},[x.pageCount>0?(v(),C("li",{key:0,class:W([[p(r).is("active",x.currentPage===1),p(r).is("disabled",x.disabled)],"number"]),"aria-current":x.currentPage===1,"aria-label":p(o)("el.pagination.currentPage",{pager:1}),tabindex:p(m)}," 1 ",10,Lq)):I("v-if",!0),s.value?(v(),C("li",{key:1,class:W(p(f)),tabindex:p(m),"aria-label":p(o)("el.pagination.prevPages",{pager:x.pagerCount-2}),onMouseenter:T[0]||(T[0]=A=>y(!0)),onMouseleave:T[1]||(T[1]=A=>l.value=!1),onFocus:T[2]||(T[2]=A=>b(!0)),onBlur:T[3]||(T[3]=A=>u.value=!1)},[(l.value||u.value)&&!x.disabled?(v(),X(p(gR),{key:0})):(v(),X(p(Jp),{key:1}))],42,Mq)):I("v-if",!0),(v(!0),C(he,null,Te(p(d),A=>(v(),C("li",{key:A,class:W([[p(r).is("active",x.currentPage===A),p(r).is("disabled",x.disabled)],"number"]),"aria-current":x.currentPage===A,"aria-label":p(o)("el.pagination.currentPage",{pager:A}),tabindex:p(m)},ee(A),11,Iq))),128)),a.value?(v(),C("li",{key:2,class:W(p(g)),tabindex:p(m),"aria-label":p(o)("el.pagination.nextPages",{pager:x.pagerCount-2}),onMouseenter:T[4]||(T[4]=A=>y()),onMouseleave:T[5]||(T[5]=A=>c.value=!1),onFocus:T[6]||(T[6]=A=>b()),onBlur:T[7]||(T[7]=A=>h.value=!1)},[(c.value||h.value)&&!x.disabled?(v(),X(p(yR),{key:0})):(v(),X(p(Jp),{key:1}))],42,Bq)):I("v-if",!0),x.pageCount>1?(v(),C("li",{key:3,class:W([[p(r).is("active",x.currentPage===x.pageCount),p(r).is("disabled",x.disabled)],"number"]),"aria-current":x.currentPage===x.pageCount,"aria-label":p(o)("el.pagination.currentPage",{pager:x.pageCount}),tabindex:p(m)},ee(x.pageCount),11,Oq)):I("v-if",!0)],42,Pq))}});var Nq=Me(Rq,[["__file","pager.vue"]]);const xt=e=>typeof e!="number",Dq=Oe({pageSize:Number,defaultPageSize:Number,total:Number,pageCount:Number,pagerCount:{type:Number,validator:e=>Ne(e)&&Math.trunc(e)===e&&e>4&&e<22&&e%2===1,default:7},currentPage:Number,defaultCurrentPage:Number,layout:{type:String,default:["prev","pager","next","jumper","->","total"].join(", ")},pageSizes:{type:we(Array),default:()=>Wi([10,20,30,40,50,100])},popperClass:{type:String,default:""},prevText:{type:String,default:""},prevIcon:{type:tn,default:()=>nd},nextText:{type:String,default:""},nextIcon:{type:tn,default:()=>rd},teleported:{type:Boolean,default:!0},small:Boolean,background:Boolean,disabled:Boolean,hideOnSinglePage:Boolean}),zq={"update:current-page":e=>Ne(e),"update:page-size":e=>Ne(e),"size-change":e=>Ne(e),change:(e,t)=>Ne(e)&&Ne(t),"current-change":e=>Ne(e),"prev-click":e=>Ne(e),"next-click":e=>Ne(e)},Of="ElPagination";var Vq=B({name:Of,props:Dq,emits:zq,setup(e,{emit:t,slots:n}){const{t:r}=_n(),i=Be("pagination"),o=_t().vnode.props||{},s="onUpdate:currentPage"in o||"onUpdate:current-page"in o||"onCurrentChange"in o,a="onUpdate:pageSize"in o||"onUpdate:page-size"in o||"onSizeChange"in o,l=w(()=>{if(xt(e.total)&&xt(e.pageCount)||!xt(e.currentPage)&&!s)return!1;if(e.layout.includes("sizes")){if(xt(e.pageCount)){if(!xt(e.total)&&!xt(e.pageSize)&&!a)return!1}else if(!a)return!1}return!0}),c=L(xt(e.defaultPageSize)?10:e.defaultPageSize),u=L(xt(e.defaultCurrentPage)?1:e.defaultCurrentPage),h=w({get(){return xt(e.pageSize)?c.value:e.pageSize},set(_){xt(e.pageSize)&&(c.value=_),a&&(t("update:page-size",_),t("size-change",_))}}),d=w(()=>{let _=0;return xt(e.pageCount)?xt(e.total)||(_=Math.max(1,Math.ceil(e.total/h.value))):_=e.pageCount,_}),f=w({get(){return xt(e.currentPage)?u.value:e.currentPage},set(_){let x=_;_<1?x=1:_>d.value&&(x=d.value),xt(e.currentPage)&&(u.value=x),s&&(t("update:current-page",x),t("current-change",x))}});oe(d,_=>{f.value>_&&(f.value=_)}),oe([f,h],_=>{t("change",..._)},{flush:"post"});function g(_){f.value=_}function m(_){h.value=_;const x=d.value;f.value>x&&(f.value=x)}function y(){e.disabled||(f.value-=1,t("prev-click",f.value))}function b(){e.disabled||(f.value+=1,t("next-click",f.value))}function k(_,x){_&&(_.props||(_.props={}),_.props.class=[_.props.class,x].join(" "))}return nt(Fv,{pageCount:d,disabled:w(()=>e.disabled),currentPage:f,changeEvent:g,handleSizeChange:m}),()=>{var _,x;if(!l.value)return r("el.pagination.deprecationWarning"),null;if(!e.layout||e.hideOnSinglePage&&d.value<=1)return null;const T=[],A=[],E=ot("div",{class:i.e("rightwrapper")},A),O={prev:ot(VH,{disabled:e.disabled,currentPage:f.value,prevText:e.prevText,prevIcon:e.prevIcon,onClick:y}),jumper:ot(wq,{size:e.small?"small":"default"}),pager:ot(Nq,{currentPage:f.value,pageCount:d.value,pagerCount:e.pagerCount,onChange:g,disabled:e.disabled}),next:ot(UH,{disabled:e.disabled,currentPage:f.value,pageCount:d.value,nextText:e.nextText,nextIcon:e.nextIcon,onClick:b}),sizes:ot(yq,{pageSize:h.value,pageSizes:e.pageSizes,popperClass:e.popperClass,disabled:e.disabled,teleported:e.teleported,size:e.small?"small":"default"}),slot:(x=(_=n==null?void 0:n.default)==null?void 0:_.call(n))!=null?x:null,total:ot(Aq,{total:xt(e.total)?0:e.total})},J=e.layout.split(",").map(P=>P.trim());let R=!1;return J.forEach(P=>{if(P==="->"){R=!0;return}R?A.push(O[P]):T.push(O[P])}),k(T[0],i.is("first")),k(T[T.length-1],i.is("last")),R&&A.length>0&&(k(A[0],i.is("first")),k(A[A.length-1],i.is("last")),T.push(E)),ot("div",{class:[i.b(),i.is("background",e.background),{[i.m("small")]:e.small}]},T)}}});const Hq=Ct(Vq),Dv=["success","info","warning","error"],Bt=Wi({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Ve?document.body:void 0}),qq=Oe({customClass:{type:String,default:Bt.customClass},center:{type:Boolean,default:Bt.center},dangerouslyUseHTMLString:{type:Boolean,default:Bt.dangerouslyUseHTMLString},duration:{type:Number,default:Bt.duration},icon:{type:tn,default:Bt.icon},id:{type:String,default:Bt.id},message:{type:we([String,Object,Function]),default:Bt.message},onClose:{type:we(Function),required:!1},showClose:{type:Boolean,default:Bt.showClose},type:{type:String,values:Dv,default:Bt.type},offset:{type:Number,default:Bt.offset},zIndex:{type:Number,default:Bt.zIndex},grouping:{type:Boolean,default:Bt.grouping},repeatNum:{type:Number,default:Bt.repeatNum}}),jq={destroy:()=>!0},Ln=uy([]),Gq=e=>{const t=Ln.findIndex(i=>i.id===e),n=Ln[t];let r;return t>0&&(r=Ln[t-1]),{current:n,prev:r}},Wq=e=>{const{prev:t}=Gq(e);return t?t.vm.exposed.bottom.value:0},Uq=(e,t)=>Ln.findIndex(r=>r.id===e)>0?16:t,Yq=["id"],Kq=["innerHTML"],Xq=B({name:"ElMessage"}),Qq=B({...Xq,props:qq,emits:jq,setup(e,{expose:t}){const n=e,{Close:r}=j1,{ns:i,zIndex:o}=vD("message"),{currentZIndex:s,nextZIndex:a}=o,l=L(),c=L(!1),u=L(0);let h;const d=w(()=>n.type?n.type==="error"?"danger":n.type:"info"),f=w(()=>{const E=n.type;return{[i.bm("icon",E)]:E&&wa[E]}}),g=w(()=>n.icon||wa[n.type]||""),m=w(()=>Wq(n.id)),y=w(()=>Uq(n.id,n.offset)+m.value),b=w(()=>u.value+y.value),k=w(()=>({top:`${y.value}px`,zIndex:s.value}));function _(){n.duration!==0&&({stop:h}=B$(()=>{T()},n.duration))}function x(){h==null||h()}function T(){c.value=!1}function A({code:E}){E===hn.esc&&T()}return Ae(()=>{_(),a(),c.value=!0}),oe(()=>n.repeatNum,()=>{x(),_()}),He(document,"keydown",A),dn(l,()=>{u.value=l.value.getBoundingClientRect().height}),t({visible:c,bottom:b,close:T}),(E,O)=>(v(),X(Zt,{name:p(i).b("fade"),onBeforeLeave:E.onClose,onAfterLeave:O[0]||(O[0]=J=>E.$emit("destroy")),persisted:""},{default:$(()=>[ze(S("div",{id:E.id,ref_key:"messageRef",ref:l,class:W([p(i).b(),{[p(i).m(E.type)]:E.type},p(i).is("center",E.center),p(i).is("closable",E.showClose),E.customClass]),style:et(p(k)),role:"alert",onMouseenter:x,onMouseleave:_},[E.repeatNum>1?(v(),X(p(bV),{key:0,value:E.repeatNum,type:p(d),class:W(p(i).e("badge"))},null,8,["value","type","class"])):I("v-if",!0),p(g)?(v(),X(p(ke),{key:1,class:W([p(i).e("icon"),p(f)])},{default:$(()=>[(v(),X(Je(p(g))))]),_:1},8,["class"])):I("v-if",!0),M(E.$slots,"default",{},()=>[E.dangerouslyUseHTMLString?(v(),C(he,{key:1},[I(" Caution here, message could've been compromised, never use user's input as message "),S("p",{class:W(p(i).e("content")),innerHTML:E.message},null,10,Kq)],2112)):(v(),C("p",{key:0,class:W(p(i).e("content"))},ee(E.message),3))]),E.showClose?(v(),X(p(ke),{key:2,class:W(p(i).e("closeBtn")),onClick:dt(T,["stop"])},{default:$(()=>[j(p(r))]),_:1},8,["class","onClick"])):I("v-if",!0)],46,Yq),[[tt,c.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Zq=Me(Qq,[["__file","message.vue"]]);let Jq=1;const zv=e=>{const t=!e||mn(e)||Ci(e)||Rt(e)?{message:e}:e,n={...Bt,...t};if(!n.appendTo)n.appendTo=document.body;else if(mn(n.appendTo)){let r=document.querySelector(n.appendTo);si(r)||(r=document.body),n.appendTo=r}return n},ej=e=>{const t=Ln.indexOf(e);if(t===-1)return;Ln.splice(t,1);const{handler:n}=e;n.close()},tj=({appendTo:e,...t},n)=>{const r=`message_${Jq++}`,i=t.onClose,o=document.createElement("div"),s={...t,id:r,onClose:()=>{i==null||i(),ej(u)},onDestroy:()=>{Od(null,o)}},a=j(Zq,s,Rt(s.message)||Ci(s.message)?{default:Rt(s.message)?s.message:()=>s.message}:null);a.appContext=n||Fi._context,Od(a,o),e.appendChild(o.firstElementChild);const l=a.component,u={id:r,vnode:a,vm:l,handler:{close:()=>{l.exposed.visible.value=!1}},props:a.component.props};return u},Fi=(e={},t)=>{if(!Ve)return{close:()=>{}};if(Ne(mf.max)&&Ln.length>=mf.max)return{close:()=>{}};const n=zv(e);if(n.grouping&&Ln.length){const i=Ln.find(({vnode:o})=>{var s;return((s=o.props)==null?void 0:s.message)===n.message});if(i)return i.props.repeatNum+=1,i.props.type=n.type,i.handler}const r=tj(n,t);return Ln.push(r),r.handler};Dv.forEach(e=>{Fi[e]=(t={},n)=>{const r=zv(t);return Fi({...r,type:e},n)}});function nj(e){for(const t of Ln)(!e||e===t.props.type)&&t.handler.close()}Fi.closeAll=nj;Fi._context=null;const rj=jR(Fi,"$message"),ij=`<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
<radialGradient id="notoFire0" cx="68.884" cy="124.296" r="70.587" gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)" gradientUnits="userSpaceOnUse">
    <stop offset=".314" stop-color="#FF9800"/>
    <stop offset=".662" stop-color="#FF6D00"/>
    <stop offset=".972" stop-color="#F44336"/>
</radialGradient>
<path fill="url(#notoFire0)" d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5z"/>
<radialGradient id="notoFire1" cx="64.921" cy="54.062" r="73.86" gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)" gradientUnits="userSpaceOnUse">
    <stop offset=".214" stop-color="#FFF176"/>
    <stop offset=".328" stop-color="#FFF27D"/>
    <stop offset=".487" stop-color="#FFF48F"/>
    <stop offset=".672" stop-color="#FFF7AD"/>
    <stop offset=".793" stop-color="#FFF9C4"/>
    <stop offset=".822" stop-color="#FFF8BD" stop-opacity=".804"/>
    <stop offset=".863" stop-color="#FFF6AB" stop-opacity=".529"/>
    <stop offset=".91" stop-color="#FFF38D" stop-opacity=".209"/>
    <stop offset=".941" stop-color="#FFF176" stop-opacity="0"/>
</radialGradient>
<path fill="url(#notoFire1)" d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.09 16.09 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88z"/>
</svg>`,oj=`<svg width="512" height="512" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
<radialGradient id="notoFaceWithMonocle0" cx="63.6" cy="-2088.9" r="56.96" gradientTransform="matrix(1 0 0 -1 0 -2026)" gradientUnits="userSpaceOnUse">
    <stop offset=".5" stop-color="#FDE030"/>
    <stop offset=".919" stop-color="#F7C02B"/>
    <stop offset="1" stop-color="#F4A223"/>
</radialGradient>
<path fill="url(#notoFaceWithMonocle0)" d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4c11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5z"/>
<path fill="#EB8F00" d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23c0 16.9-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5c-18.06 0-37.04-7.35-48.18-22.94c10.76 17.66 30.99 25.94 50.18 25.94c15.4 0 29.8-5.2 40.4-14.5c11.5-10.2 17.6-24.5 17.6-41.4c0-12.74-3.47-24.06-10.11-33.23z"/>
<path fill="#422B0D" d="M74.3 24.5c.9-.8 1.8-1.5 2.8-2.2s2.1-1.2 3.1-1.8c2.2-1 4.6-2 7.5-2.1c.7-.1 1.4.1 2.2.1c.7 0 1.5.3 2.2.5c.2.1.4.1.5.2l.5.3l1 .5c.6.4 1.2.9 1.8 1.4c1.1 1 1.8 2.3 2.4 3.5c.3.6.5 1.2.7 1.8c.2.6.3 1.2.4 1.6l.1.3c.2 1.2-.6 2.4-1.8 2.6c-1 .2-1.9-.3-2.4-1.1c-.3-.6-.6-1.1-.8-1.5c-.2-.4-.5-.8-.7-1.2c-.5-.7-1.1-1.3-1.7-1.8c-.1-.1-.3-.2-.5-.3c-.2-.1-.3-.2-.4-.3c-.2-.1-.3-.1-.5-.2l-.2-.1h-.3c-.7-.2-1.4-.3-2.2-.2c-1.6 0-3.5.6-5.4 1.3c-.9.4-1.9.8-2.8 1.2c-.9.5-1.9.9-2.9 1.3l-.2.1c-1.2.5-2.5-.1-2.9-1.2c-.5-1-.2-2.1.5-2.7zm-28.7 14c-.8.2-1.3.3-2 .3c-.6 0-1.3.1-1.9 0c-1.3 0-2.6-.2-3.8-.6c-2-.5-4-.8-5.7-.8c-.8 0-1.6.1-2.2.3s-1.1.5-1.6 1c-1 1-2 2.8-3 4.6c-.6 1.1-2 1.5-3.1.9c-.9-.5-1.3-1.5-1.2-2.4c.2-1.1.5-2.3.9-3.5c.5-1.2 1-2.4 2-3.6c1-1.2 2.3-2.2 3.8-2.7s2.9-.7 4.3-.7c2.7.1 5 .8 7.2 1.6c.9.3 1.8.6 2.7.8c.5.1.9.2 1.4.2c.4 0 1 .1 1.3.1h.4c1.2 0 2.2 1.1 2.1 2.3c.1 1.2-.6 2-1.6 2.2zM44 91.3c1.8-2 6.6-4.3 13.3-4.2c8.9.2 13.7 4.2 13.7 4.2c2.9 2.4 1.6 6.1-1.5 5.8c-5-.6-4.7-1.5-13.7-1.7c-6.5-.1-9.6.9-9.9.9c-1.8.1-2.5-.6-2.8-1.8c-.3-1 0-2.3.9-3.2zm38.3-47.5c4.4 0 8.4 3.7 8.4 9.9s-4 9.9-8.4 9.9s-8.4-3.7-8.4-9.9s4-9.9 8.4-9.9zm-45.1 1.7c-4.2 0-8 3.5-8 9.4s3.8 9.4 8 9.4s8-3.5 8-9.4s-3.8-9.4-8-9.4z"/>
<path fill="#896024" d="M81.37 48.35c-1.03-.72-2.58-.49-3.58.95c-1 1.45-.67 2.97.36 3.69c1.03.72 2.58.49 3.58-.95c1.01-1.45.67-2.98-.36-3.69z"/>
<path fill="#404040" d="M106.5 49.9h-5.6v9h5.6c2.7 0 5.4-1.7 5.4-4.3v-.4c0-2.7-2.7-4.3-5.4-4.3zm-.5 7.7c-1.9 0-3.4-1.5-3.4-3.3s1.5-3.3 3.4-3.3s3.4 1.5 3.4 3.3s-1.5 3.3-3.4 3.3zm.1 13.2c-.3 0-.6-.2-.6-.5v-4.6c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .2-.2.5-.5.5zm0 7.6c-.3 0-.6-.2-.6-.5v-4.6c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .3-.2.5-.5.5zm0 7.7c-.3 0-.6-.2-.6-.5V81c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .3-.2.5-.5.5zm0 7.7c-.3 0-.6-.2-.6-.5v-4.6c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .3-.2.5-.5.5zm0 7.7c-.3 0-.6-.2-.6-.5v-4.6c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .3-.2.5-.5.5zm0 7.7c-.3 0-.6-.2-.6-.5v-4.6c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .3-.2.5-.5.5zm0 7.7c-.3 0-.6-.2-.6-.5v-4.6c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .3-.2.5-.5.5z"/>
<path fill="#404040" d="M106.1 62.7c-.3 0-.6-.2-.6-.5v-4.6c0-.3.2-.5.5-.5h.1c.3 0 .5.2.5.5v4.6c0 .2-.2.5-.5.5z"/>
<circle cx="106.1" cy="64.1" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="106.1" cy="71.8" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="106.1" cy="79.4" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="106.1" cy="87.1" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="106.1" cy="94.7" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="106.1" cy="102.4" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="106.1" cy="110" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="106.1" cy="117.7" r="2.6" fill="none" stroke="#404040" stroke-miterlimit="10"/>
<circle cx="79.6" cy="53.7" r="20.6" fill="#CCC" fill-opacity=".5" stroke="#404040" stroke-miterlimit="10" stroke-width="3.5"/>
<path fill="#FFF" d="M94.8 52.5c-.4-3.8-2.1-7.3-4.9-9.7s-6.4-3.7-10-3.7c-3.7 0-7.3 1.2-10.1 3.5s-4.6 5.8-4.9 9.6c0 .3-.3.5-.5.4c-.2 0-.4-.2-.4-.5c-.1-2 .3-4.1 1.1-6c.8-1.9 2-3.6 3.5-5.1c3-2.9 7.3-4.3 11.4-4.3c4.2 0 8.3 1.6 11.3 4.5c1.5 1.5 2.7 3.2 3.5 5.1c.8 1.9 1.1 4 1 6c0 .3-.2.5-.5.5c-.3.1-.5-.1-.5-.3z"/>
<path fill="#896024" d="M37.01 49.35c-1.03-.72-2.58-.49-3.58.95s-.67 2.97.36 3.69c1.03.72 2.58.49 3.58-.95c1.01-1.45.68-2.98-.36-3.69z"/>
</svg>`,sj=`<svg width="128" height="128" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<title>主题</title>
<path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10a2.5 2.5 0 0 0 2.5-2.5c0-.61-.23-1.2-.64-1.67a.528.528 0 0 1-.13-.33c0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6c0-4.96-4.49-9-10-9zm5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zM5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13S5 12.33 5 11.5zm6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5z"/>
</svg>`,aj='<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-2f084f89=""><title data-v-2f084f89="">ICP备案号</title><path d="M778.24 163.84c-76.8-40.96-165.888-61.44-269.312-61.44s-192.512 20.48-269.312 61.44h-133.12l23.552 337.92c8.192 113.664 67.584 217.088 162.816 280.576l215.04 144.384 215.04-144.384c96.256-63.488 155.648-166.912 163.84-280.576l23.552-337.92H778.24z m47.104 333.824c-7.168 94.208-56.32 181.248-135.168 233.472l-181.248 120.832L327.68 731.136c-78.848-53.248-129.024-139.264-135.168-233.472L173.056 225.28h136.192v-26.624c58.368-23.552 124.928-34.816 199.68-34.816s141.312 12.288 199.68 34.816V225.28H844.8l-19.456 272.384z" data-v-2f084f89=""></path><path d="M685.056 328.704v-46.08H455.68c2.048-4.096 6.144-9.216 11.264-15.36 5.12-7.168 9.216-12.288 11.264-15.36L419.84 240.64c-31.744 46.08-75.776 87.04-133.12 123.904 4.096 4.096 10.24 11.264 18.432 21.504l17.408 17.408c23.552-15.36 45.056-31.744 63.488-50.176 26.624 25.6 49.152 43.008 67.584 51.2-46.08 15.36-104.448 27.648-175.104 35.84 2.048 5.12 6.144 13.312 9.216 24.576 4.096 11.264 6.144 19.456 7.168 24.576l39.936-7.168v218.112H389.12V680.96h238.592v19.456h54.272V481.28H348.16c60.416-12.288 114.688-27.648 163.84-46.08 49.152 19.456 118.784 34.816 210.944 46.08 5.12-17.408 10.24-34.816 17.408-51.2-62.464-4.096-116.736-12.288-161.792-24.576 38.912-20.48 74.752-46.08 106.496-76.8z m-150.528 194.56h94.208v41.984h-94.208v-41.984z m0 78.848h94.208v41.984h-94.208v-41.984z m-144.384-78.848h94.208v41.984H390.144v-41.984z m0 78.848h94.208v41.984H390.144v-41.984zM424.96 326.656h182.272c-26.624 22.528-57.344 41.984-94.208 57.344-31.744-15.36-61.44-34.816-88.064-57.344z" data-v-2f084f89=""></path></svg>',Ff='<svg t="1695543755857" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="89399" width="200" height="200"><path d="M512 16C238.066 16 16 238.066 16 512s222.066 496 496 496 496-222.066 496-496S785.934 16 512 16z m234.268 693.506c-3.184 3.734-79.552 91.462-219.702 91.462-169.384 0-288.968-126.52-288.968-291.134 0-162.606 124.008-286.802 287.524-286.802 133.914 0 203.93 74.63 206.844 77.808a24 24 0 0 1 2.476 29.246l-44.76 69.31c-8.098 12.534-25.548 14.702-36.468 4.59-0.466-0.428-53.058-47.76-123.76-47.76-92.232 0-147.832 67.15-147.832 152.164 0 79.204 51.028 159.384 148.554 159.384 77.394 0 130.56-56.676 131.088-57.25 10.264-11.13 28.118-10.066 37.016 2.106l49.094 67.144a24.002 24.002 0 0 1-1.106 29.732z" p-id="89400"></path></svg>',lj={key:0,class:"card recommend","data-pagefind-ignore":"all"},cj={class:"card-header"},uj=["innerHTML"],dj={key:0,class:"recommend-container"},hj={class:"num"},pj={class:"des"},fj={class:"suffix"},mj={class:"tag"},gj={key:1,class:"empty-text"},vj=B({__name:"BlogHotArticle",setup(e){const{hotArticle:t}=Gt(),n=w(()=>(t==null?void 0:t.title)||`<span class="svg-icon">${ij}</span> 精选文章`),r=w(()=>(t==null?void 0:t.nextText)||"换一组"),i=w(()=>(t==null?void 0:t.pageSize)||9),o=w(()=>(t==null?void 0:t.empty)??"暂无精选内容"),s=Yo(),a=w(()=>{const d=s.value.filter(f=>f.meta.sticky);return d.sort((f,g)=>g.meta.sticky-f.meta.sticky),[...d]}),l=L(1);function c(){const d=l.value%Math.ceil(a.value.length/i.value);l.value=d+1}const u=w(()=>{const d=(l.value-1)*i.value,f=d+i.value;return a.value.slice(d,f)}),h=w(()=>a.value.length>i.value);return(d,f)=>a.value.length||o.value?(v(),C("div",lj,[S("div",cj,[S("span",{class:"title",innerHTML:n.value},null,8,uj),h.value?(v(),X(p(Ed),{key:0,size:"small",type:"primary",text:"",onClick:c},{default:$(()=>[Fe(ee(r.value),1)]),_:1})):I("",!0)]),u.value.length?(v(),C("ol",dj,[(v(!0),C(he,null,Te(u.value,(g,m)=>(v(),C("li",{key:g.route},[S("i",hj,ee(m+1),1),S("div",pj,[j(p(Ov),{type:"info",class:"title",href:p(Bn)(g.route)},{default:$(()=>[Fe(ee(g.meta.title),1)]),_:2},1032,["href"]),S("div",fj,[S("span",mj,ee(p(Qa)(g.meta.date)),1)])])]))),128))])):(v(),C("div",gj,ee(o.value),1))])):I("",!0)}}),yj=de(vj,[["__scopeId","data-v-e2085c10"]]),bj=e=>(Xe("data-v-84793623"),e=e(),Qe(),e),_j={key:0,class:"card tags","data-pagefind-ignore":"all"},Cj={class:"card-header"},kj=bj(()=>S("span",{class:"title svg-icon"},[S("svg",{t:"1695048840129",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4290",width:"200",height:"200"},[S("path",{d:"M810.88 245.888a118.432 118.432 0 1 0 0 236.864 118.432 118.432 0 0 0 0-236.864z m-151.008 118.432a151.008 151.008 0 1 1 302.016 0 151.008 151.008 0 0 1-302.016 0z",fill:"#D3D3D3","p-id":"4291"}),S("path",{d:"M774.08 565.6l61.76-160.64c6.4-16.64 2.56-35.84-10.24-48.64l-151.04-151.04c-12.8-12.8-31.68-16.64-48.64-10.24l-160.64 61.76c-12.16 4.8-23.36 11.84-32.64 21.12l-355.2 355.2c-17.92 17.92-17.92 46.72 0 64.32l256 256c17.92 17.92 46.72 17.92 64.32 0l355.2-355.2c9.28-9.28 16.32-20.16 21.12-32.64z m-159.36-149.12c-22.08-22.08-22.08-57.6 0-79.68 22.08-22.08 57.6-22.08 79.68 0 22.08 22.08 22.08 57.6 0 79.68-22.08 21.76-57.92 21.76-79.68 0z",fill:"#FCD53F","p-id":"4292"}),S("path",{d:"M654.4 320.48c14.4 0 28.8 5.44 39.68 16.64 22.08 22.08 22.08 57.6 0 79.68-10.88 10.88-25.28 16.64-39.68 16.64-14.4 0-28.8-5.44-39.68-16.64-22.08-22.08-22.08-57.6 0-79.68 10.88-11.2 25.28-16.64 39.68-16.64z m0-30.08c-23.04 0-44.8 8.96-61.12 25.28a86.72 86.72 0 0 0 0 122.24c16.32 16.32 38.08 25.28 61.12 25.28s44.8-8.96 61.12-25.28a86.72 86.72 0 0 0 0-122.24c-16.32-16.32-38.08-25.28-61.12-25.28z",fill:"#F8312F","p-id":"4293"}),S("path",{d:"M676.16 348.032c8.992 0 16.288 7.296 16.288 16.288a118.144 118.144 0 0 0 64.288 105.44h0.064c22.24 11.296 47.36 15.264 71.68 11.84a16.288 16.288 0 0 1 4.48 32.32 154.24 154.24 0 0 1-90.848-15.04 150.72 150.72 0 0 1-82.24-134.56c0-8.992 7.296-16.288 16.288-16.288z",fill:"#D3D3D3","p-id":"4294"})]),Fe(" 标签")],-1)),wj={class:"tag-list"},Sj=B({__name:"BlogHomeTags",setup(e){const t=Kn(),n=Yo(),r=w(()=>[...new Set(n.value.map(f=>f.meta.tag||[]).flat(3))]),i=v1(),o=o1({storageKey:"vitepress-theme-appearance"}),s=w(()=>o.value?"light":"dark"),a=["","info","success","warning","danger"],l=y1(),c=ou();function u(){i.value.label="",i.value.type="",l.value=1,c.go(`${window.location.origin}${c.route.path}`)}const h=t1();function d(f,g){if(f===i.value.label){u();return}i.value.type=g,i.value.label=f,l.value=1,c.go(`${h.value.origin}${c.route.path}?tag=${f}&type=${g}`)}return oe(h,()=>{if(h.value.href){const f=new URL(h.value.href);i.value.type=f.searchParams.get("type")||"",i.value.label=f.searchParams.get("tag")||""}},{immediate:!0}),oe(t,()=>{EP().tag||(i.value.type="",i.value.label="")}),(f,g)=>r.value.length?(v(),C("div",_j,[S("div",Cj,[kj,p(i).label?(v(),X(p(Zc),{key:0,type:p(i).type,effect:s.value,closable:"",onClose:u},{default:$(()=>[Fe(ee(p(i).label),1)]),_:1},8,["type","effect"])):I("",!0)]),S("ul",wj,[(v(!0),C(he,null,Te(r.value,(m,y)=>(v(),C("li",{key:m},[j(p(Zc),{type:a[y%a.length],effect:s.value,onClick:b=>d(m,a[y%a.length])},{default:$(()=>[Fe(ee(m),1)]),_:2},1032,["type","effect","onClick"])]))),128))])])):I("",!0)}}),xj=de(Sj,[["__scopeId","data-v-84793623"]]);function Rf(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Pd(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:Rf(t[n])&&Rf(e[n])&&Object.keys(t[n]).length>0&&Pd(e[n],t[n])})}const Vv={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Ui(){const e=typeof document<"u"?document:{};return Pd(e,Vv),e}const Tj={document:Vv,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function nn(){const e=typeof window<"u"?window:{};return Pd(e,Tj),e}function Ej(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function Aj(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Jc(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Ea(){return Date.now()}function $j(e){const t=nn();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function Pj(e,t){t===void 0&&(t="x");const n=nn();let r,i,o;const s=$j(e);return n.WebKitCSSMatrix?(i=s.transform||s.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Es(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Lj(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Yt(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!Lj(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,s=i.length;o<s;o+=1){const a=i[o],l=Object.getOwnPropertyDescriptor(r,a);l!==void 0&&l.enumerable&&(Es(e[a])&&Es(r[a])?r[a].__swiper__?e[a]=r[a]:Yt(e[a],r[a]):!Es(e[a])&&Es(r[a])?(e[a]={},r[a].__swiper__?e[a]=r[a]:Yt(e[a],r[a])):e[a]=r[a])}}}return e}function As(e,t,n){e.style.setProperty(t,n)}function Hv(e){let{swiper:t,targetPosition:n,side:r}=e;const i=nn(),o=-t.translate;let s=null,a;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=n>o?"next":"prev",u=(d,f)=>c==="next"&&d>=f||c==="prev"&&d<=f,h=()=>{a=new Date().getTime(),s===null&&(s=a);const d=Math.max(Math.min((a-s)/l,1),0),f=.5-Math.cos(d*Math.PI)/2;let g=o+f*(n-o);if(u(g,n)&&(g=n),t.wrapperEl.scrollTo({[r]:g}),u(g,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:g})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(h)};h()}function cr(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function Aa(e){try{console.warn(e);return}catch{}}function eu(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:Ej(t)),n}function Mj(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Ij(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function $r(e,t){return nn().getComputedStyle(e,null).getPropertyValue(t)}function Nf(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Bj(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Df(e,t,n){const r=nn();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}let Ql;function Oj(){const e=nn(),t=Ui();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function qv(){return Ql||(Ql=Oj()),Ql}let Zl;function Fj(e){let{userAgent:t}=e===void 0?{}:e;const n=qv(),r=nn(),i=r.navigator.platform,o=t||r.navigator.userAgent,s={ios:!1,android:!1},a=r.screen.width,l=r.screen.height,c=o.match(/(Android);?[\s\/]+([\d.]+)?/);let u=o.match(/(iPad).*OS\s([\d_]+)/);const h=o.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=i==="Win32";let g=i==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&g&&n.touch&&m.indexOf(`${a}x${l}`)>=0&&(u=o.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),g=!1),c&&!f&&(s.os="android",s.android=!0),(u||d||h)&&(s.os="ios",s.ios=!0),s}function jv(e){return e===void 0&&(e={}),Zl||(Zl=Fj(e)),Zl}let Jl;function Rj(){const e=nn(),t=jv();let n=!1;function r(){const a=e.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(r()){const a=String(e.navigator.userAgent);if(a.includes("Version/")){const[l,c]=a.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));n=l<16||l===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),s=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:s,isWebView:i}}function Nj(){return Jl||(Jl=Rj()),Jl}function Dj(e){let{swiper:t,on:n,emit:r}=e;const i=nn();let o=null,s=null;const a=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(h=>{s=i.requestAnimationFrame(()=>{const{width:d,height:f}=t;let g=d,m=f;h.forEach(y=>{let{contentBoxSize:b,contentRect:k,target:_}=y;_&&_!==t.el||(g=k?k.width:(b[0]||b).inlineSize,m=k?k.height:(b[0]||b).blockSize)}),(g!==d||m!==f)&&a()})}),o.observe(t.el))},c=()=>{s&&i.cancelAnimationFrame(s),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},u=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",u)}),n("destroy",()=>{c(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",u)})}function zj(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],s=nn(),a=function(u,h){h===void 0&&(h={});const d=s.MutationObserver||s.WebkitMutationObserver,f=new d(g=>{if(t.__preventObserver__)return;if(g.length===1){i("observerUpdate",g[0]);return}const m=function(){i("observerUpdate",g[0])};s.requestAnimationFrame?s.requestAnimationFrame(m):s.setTimeout(m,0)});f.observe(u,{attributes:typeof h.attributes>"u"?!0:h.attributes,childList:typeof h.childList>"u"?!0:h.childList,characterData:typeof h.characterData>"u"?!0:h.characterData}),o.push(f)},l=()=>{if(t.params.observer){if(t.params.observeParents){const u=Bj(t.hostEl);for(let h=0;h<u.length;h+=1)a(u[h])}a(t.hostEl,{childList:t.params.observeSlideChildren}),a(t.wrapperEl,{attributes:!1})}},c=()=>{o.forEach(u=>{u.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",c)}var Vj={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];t.apply(r,s)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(c=>{c.apply(r,n)})}),e}};function Hj(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt($r(r,"padding-left")||0,10)-parseInt($r(r,"padding-right")||0,10),n=n-parseInt($r(r,"padding-top")||0,10)-parseInt($r(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function qj(){const e=this;function t(R,P){return parseFloat(R.getPropertyValue(e.getDirectionLabel(P))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:o,rtlTranslate:s,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,u=cr(i,`.${e.params.slideClass}, swiper-slide`),h=l?e.virtual.slides.length:u.length;let d=[];const f=[],g=[];let m=n.slidesOffsetBefore;typeof m=="function"&&(m=n.slidesOffsetBefore.call(e));let y=n.slidesOffsetAfter;typeof y=="function"&&(y=n.slidesOffsetAfter.call(e));const b=e.snapGrid.length,k=e.slidesGrid.length;let _=n.spaceBetween,x=-m,T=0,A=0;if(typeof o>"u")return;typeof _=="string"&&_.indexOf("%")>=0?_=parseFloat(_.replace("%",""))/100*o:typeof _=="string"&&(_=parseFloat(_)),e.virtualSize=-_,u.forEach(R=>{s?R.style.marginLeft="":R.style.marginRight="",R.style.marginBottom="",R.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(As(r,"--swiper-centered-offset-before",""),As(r,"--swiper-centered-offset-after",""));const E=n.grid&&n.grid.rows>1&&e.grid;E?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let O;const J=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(R=>typeof n.breakpoints[R].slidesPerView<"u").length>0;for(let R=0;R<h;R+=1){O=0;let P;if(u[R]&&(P=u[R]),E&&e.grid.updateSlide(R,P,u),!(u[R]&&$r(P,"display")==="none")){if(n.slidesPerView==="auto"){J&&(u[R].style[e.getDirectionLabel("width")]="");const K=getComputedStyle(P),H=P.style.transform,N=P.style.webkitTransform;if(H&&(P.style.transform="none"),N&&(P.style.webkitTransform="none"),n.roundLengths)O=e.isHorizontal()?Df(P,"width",!0):Df(P,"height",!0);else{const G=t(K,"width"),q=t(K,"padding-left"),z=t(K,"padding-right"),V=t(K,"margin-left"),Q=t(K,"margin-right"),Z=K.getPropertyValue("box-sizing");if(Z&&Z==="border-box")O=G+V+Q;else{const{clientWidth:te,offsetWidth:ue}=P;O=G+q+z+V+Q+(ue-te)}}H&&(P.style.transform=H),N&&(P.style.webkitTransform=N),n.roundLengths&&(O=Math.floor(O))}else O=(o-(n.slidesPerView-1)*_)/n.slidesPerView,n.roundLengths&&(O=Math.floor(O)),u[R]&&(u[R].style[e.getDirectionLabel("width")]=`${O}px`);u[R]&&(u[R].swiperSlideSize=O),g.push(O),n.centeredSlides?(x=x+O/2+T/2+_,T===0&&R!==0&&(x=x-o/2-_),R===0&&(x=x-o/2-_),Math.abs(x)<1/1e3&&(x=0),n.roundLengths&&(x=Math.floor(x)),A%n.slidesPerGroup===0&&d.push(x),f.push(x)):(n.roundLengths&&(x=Math.floor(x)),(A-Math.min(e.params.slidesPerGroupSkip,A))%e.params.slidesPerGroup===0&&d.push(x),f.push(x),x=x+O+_),e.virtualSize+=O+_,T=O,A+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+y,s&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+_}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+_}px`),E&&e.grid.updateWrapperSize(O,d),!n.centeredSlides){const R=[];for(let P=0;P<d.length;P+=1){let K=d[P];n.roundLengths&&(K=Math.floor(K)),d[P]<=e.virtualSize-o&&R.push(K)}d=R,Math.floor(e.virtualSize-o)-Math.floor(d[d.length-1])>1&&d.push(e.virtualSize-o)}if(l&&n.loop){const R=g[0]+_;if(n.slidesPerGroup>1){const P=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),K=R*n.slidesPerGroup;for(let H=0;H<P;H+=1)d.push(d[d.length-1]+K)}for(let P=0;P<e.virtual.slidesBefore+e.virtual.slidesAfter;P+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+R),f.push(f[f.length-1]+R),e.virtualSize+=R}if(d.length===0&&(d=[0]),_!==0){const R=e.isHorizontal()&&s?"marginLeft":e.getDirectionLabel("marginRight");u.filter((P,K)=>!n.cssMode||n.loop?!0:K!==u.length-1).forEach(P=>{P.style[R]=`${_}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let R=0;g.forEach(K=>{R+=K+(_||0)}),R-=_;const P=R-o;d=d.map(K=>K<=0?-m:K>P?P+y:K)}if(n.centerInsufficientSlides){let R=0;if(g.forEach(P=>{R+=P+(_||0)}),R-=_,R<o){const P=(o-R)/2;d.forEach((K,H)=>{d[H]=K-P}),f.forEach((K,H)=>{f[H]=K+P})}}if(Object.assign(e,{slides:u,snapGrid:d,slidesGrid:f,slidesSizesGrid:g}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){As(r,"--swiper-centered-offset-before",`${-d[0]}px`),As(r,"--swiper-centered-offset-after",`${e.size/2-g[g.length-1]/2}px`);const R=-e.snapGrid[0],P=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(K=>K+R),e.slidesGrid=e.slidesGrid.map(K=>K+P)}if(h!==c&&e.emit("slidesLengthChange"),d.length!==b&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==k&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const R=`${n.containerModifierClass}backface-hidden`,P=e.el.classList.contains(R);h<=n.maxBackfaceHiddenSlides?P||e.el.classList.add(R):P&&e.el.classList.remove(R)}}function jj(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const s=a=>r?t.slides[t.getSlideIndexByData(a)]:t.slides[a];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(a=>{n.push(a)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const a=t.activeIndex+o;if(a>t.slides.length&&!r)break;n.push(s(a))}else n.push(s(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const a=n[o].offsetHeight;i=a>i?a:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function Gj(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}function Wj(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let s=-e;i&&(s=e),r.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<r.length;l+=1){const c=r[l];let u=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const h=(s+(n.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+a),d=(s-o[0]+(n.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+a),f=-(s-u),g=f+t.slidesSizesGrid[l],m=f>=0&&f<=t.size-t.slidesSizesGrid[l];(f>=0&&f<t.size-1||g>1&&g<=t.size||f<=0&&g>=t.size)&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l),r[l].classList.add(n.slideVisibleClass)),m&&r[l].classList.add(n.slideFullyVisibleClass),c.progress=i?-h:h,c.originalProgress=i?-d:d}}function Uj(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:s,progressLoop:a}=t;const l=o,c=s;if(r===0)i=0,o=!0,s=!0;else{i=(e-t.minTranslate())/r;const u=Math.abs(e-t.minTranslate())<1,h=Math.abs(e-t.maxTranslate())<1;o=u||i<=0,s=h||i>=1,u&&(i=0),h&&(i=1)}if(n.loop){const u=t.getSlideIndexByData(0),h=t.getSlideIndexByData(t.slides.length-1),d=t.slidesGrid[u],f=t.slidesGrid[h],g=t.slidesGrid[t.slidesGrid.length-1],m=Math.abs(e);m>=d?a=(m-d)/g:a=(m+g-f)/g,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:o,isEnd:s}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!l&&t.emit("reachBeginning toEdge"),s&&!c&&t.emit("reachEnd toEdge"),(l&&!o||c&&!s)&&t.emit("fromEdge"),t.emit("progress",i)}function Yj(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,s=e.grid&&n.grid&&n.grid.rows>1,a=h=>cr(r,`.${n.slideClass}${h}, swiper-slide${h}`)[0];t.forEach(h=>{h.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let l,c,u;if(o)if(n.loop){let h=i-e.virtual.slidesBefore;h<0&&(h=e.virtual.slides.length+h),h>=e.virtual.slides.length&&(h-=e.virtual.slides.length),l=a(`[data-swiper-slide-index="${h}"]`)}else l=a(`[data-swiper-slide-index="${i}"]`);else s?(l=t.filter(h=>h.column===i)[0],u=t.filter(h=>h.column===i+1)[0],c=t.filter(h=>h.column===i-1)[0]):l=t[i];l&&(l.classList.add(n.slideActiveClass),s?(u&&u.classList.add(n.slideNextClass),c&&c.classList.add(n.slidePrevClass)):(u=Ij(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),u&&u.classList.add(n.slideNextClass),c=Mj(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]),c&&c.classList.add(n.slidePrevClass))),e.emitSlidesClasses()}const Gs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},ec=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},tu=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const s=i,a=[s-t];a.push(...Array.from({length:t}).map((l,c)=>s+r+c)),e.slides.forEach((l,c)=>{a.includes(l.column)&&ec(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let s=i-t;s<=o+t;s+=1){const a=(s%n+n)%n;(a<i||a>o)&&ec(e,a)}else for(let s=Math.max(i-t,0);s<=Math.min(o+t,n-1);s+=1)s!==i&&(s>o||s<i)&&ec(e,s)};function Kj(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function Xj(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:s,snapIndex:a}=t;let l=e,c;const u=f=>{let g=f-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof l>"u"&&(l=Kj(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const f=Math.min(i.slidesPerGroupSkip,l);c=f+Math.floor((l-f)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),l===o&&!t.params.loop){c!==a&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(l);return}const h=t.grid&&i.grid&&i.grid.rows>1;let d;if(t.virtual&&i.virtual.enabled&&i.loop)d=u(l);else if(h){const f=t.slides.filter(m=>m.column===l)[0];let g=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(f),0)),d=Math.floor(g/i.grid.rows)}else if(t.slides[l]){const f=t.slides[l].getAttribute("data-swiper-slide-index");f?d=parseInt(f,10):d=l}else d=l;Object.assign(t,{previousSnapIndex:a,snapIndex:c,previousRealIndex:s,realIndex:d,previousIndex:o,activeIndex:l}),t.initialized&&tu(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(s!==d&&t.emit("realIndexChange"),t.emit("slideChange"))}function Qj(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(a=>{!i&&a.matches&&a.matches(`.${r.slideClass}, swiper-slide`)&&(i=a)});let o=!1,s;if(i){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===i){o=!0,s=a;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=s;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var Zj={updateSize:Hj,updateSlides:qj,updateAutoHeight:jj,updateSlidesOffset:Gj,updateSlidesProgress:Wj,updateProgress:Uj,updateSlidesClasses:Yj,updateActiveIndex:Xj,updateClickedSlide:Qj};function Jj(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let s=Pj(o,e);return s+=t.cssOverflowAdjustment(),r&&(s=-s),s||0}function eG(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:s}=n;let a=0,l=0;const c=0;n.isHorizontal()?a=r?-e:e:l=e,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);let u;const h=n.maxTranslate()-n.minTranslate();h===0?u=0:u=(e-n.minTranslate())/h,u!==s&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function tG(){return-this.snapGrid[0]}function nG(){return-this.snapGrid[this.snapGrid.length-1]}function rG(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:s,wrapperEl:a}=o;if(o.animating&&s.preventInteractionOnTransition)return!1;const l=o.minTranslate(),c=o.maxTranslate();let u;if(r&&e>l?u=l:r&&e<c?u=c:u=e,o.updateProgress(u),s.cssMode){const h=o.isHorizontal();if(t===0)a[h?"scrollLeft":"scrollTop"]=-u;else{if(!o.support.smoothScroll)return Hv({swiper:o,targetPosition:-u,side:h?"left":"top"}),!0;a.scrollTo({[h?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(d){!o||o.destroyed||d.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var iG={getTranslate:Jj,setTranslate:eG,minTranslate:tG,maxTranslate:nG,translateTo:rG};function oG(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Gv(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:s}=t;let a=r;if(a||(o>s?a="next":o<s?a="prev":a="reset"),t.emit(`transition${i}`),n&&o!==s){if(a==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),a==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function sG(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Gv({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function aG(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Gv({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var lG={setTransition:oG,transitionStart:sG,transitionEnd:aG};function cG(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let s=e;s<0&&(s=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:h,rtlTranslate:d,wrapperEl:f,enabled:g}=o;if(o.animating&&a.preventInteractionOnTransition||!g&&!r&&!i||o.destroyed)return!1;const m=Math.min(o.params.slidesPerGroupSkip,s);let y=m+Math.floor((s-m)/o.params.slidesPerGroup);y>=l.length&&(y=l.length-1);const b=-l[y];if(a.normalizeSlideIndex)for(let _=0;_<c.length;_+=1){const x=-Math.floor(b*100),T=Math.floor(c[_]*100),A=Math.floor(c[_+1]*100);typeof c[_+1]<"u"?x>=T&&x<A-(A-T)/2?s=_:x>=T&&x<A&&(s=_+1):x>=T&&(s=_)}if(o.initialized&&s!==h&&(!o.allowSlideNext&&(d?b>o.translate&&b>o.minTranslate():b<o.translate&&b<o.minTranslate())||!o.allowSlidePrev&&b>o.translate&&b>o.maxTranslate()&&(h||0)!==s))return!1;s!==(u||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(b);let k;if(s>h?k="next":s<h?k="prev":k="reset",d&&-b===o.translate||!d&&b===o.translate)return o.updateActiveIndex(s),a.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),a.effect!=="slide"&&o.setTranslate(b),k!=="reset"&&(o.transitionStart(n,k),o.transitionEnd(n,k)),!1;if(a.cssMode){const _=o.isHorizontal(),x=d?b:-b;if(t===0){const T=o.virtual&&o.params.virtual.enabled;T&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),T&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[_?"scrollLeft":"scrollTop"]=x})):f[_?"scrollLeft":"scrollTop"]=x,T&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1})}else{if(!o.support.smoothScroll)return Hv({swiper:o,targetPosition:x,side:_?"left":"top"}),!0;f.scrollTo({[_?"left":"top"]:x,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(b),o.updateActiveIndex(s),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,k),t===0?o.transitionEnd(n,k):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(x){!o||o.destroyed||x.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,k))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function uG(e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let s=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)s=s+i.virtual.slidesBefore;else{let a;if(o){const d=s*i.params.grid.rows;a=i.slides.filter(f=>f.getAttribute("data-swiper-slide-index")*1===d)[0].column}else a=i.getSlideIndexByData(s);const l=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c}=i.params;let u=i.params.slidesPerView;u==="auto"?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),c&&u%2===0&&(u=u+1));let h=l-a<u;if(c&&(h=h||a<Math.ceil(u/2)),h){const d=c?a<i.activeIndex?"prev":"next":a-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:d,slideTo:!0,activeSlideIndex:d==="next"?a+1:a-l+1,slideRealIndex:d==="next"?i.realIndex:void 0})}if(o){const d=s*i.params.grid.rows;s=i.slides.filter(f=>f.getAttribute("data-swiper-slide-index")*1===d)[0].column}else s=i.getSlideIndexByData(s)}return requestAnimationFrame(()=>{i.slideTo(s,t,n,r)}),i}function dG(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:s}=r;if(!i||r.destroyed)return r;let a=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<o.slidesPerGroupSkip?1:a,c=r.virtual&&o.virtual.enabled;if(o.loop){if(s&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function hG(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:s,rtlTranslate:a,enabled:l,animating:c}=r;if(!l||r.destroyed)return r;const u=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const h=a?r.translate:-r.translate;function d(b){return b<0?-Math.floor(Math.abs(b)):Math.floor(b)}const f=d(h),g=o.map(b=>d(b));let m=o[g.indexOf(f)-1];if(typeof m>"u"&&i.cssMode){let b;o.forEach((k,_)=>{f>=k&&(b=_)}),typeof b<"u"&&(m=o[b>0?b-1:b])}let y=0;if(typeof m<"u"&&(y=s.indexOf(m),y<0&&(y=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(y=y-r.slidesPerViewDynamic("previous",!0)+1,y=Math.max(y,0))),i.rewind&&r.isBeginning){const b=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(b,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(y,e,t,n)}),!0;return r.slideTo(y,e,t,n)}function pG(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this;if(!r.destroyed)return r.slideTo(r.activeIndex,e,t,n)}function fG(e,t,n,r){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;let o=i.activeIndex;const s=Math.min(i.params.slidesPerGroupSkip,o),a=s+Math.floor((o-s)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const c=i.snapGrid[a],u=i.snapGrid[a+1];l-c>(u-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[a-1],u=i.snapGrid[a];l-c<=(u-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function mG(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const s=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(cr(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),Jc(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(cr(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),Jc(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var gG={slideTo:cG,slideToLoop:uG,slideNext:dG,slidePrev:hG,slideReset:pG,slideToClosest:fG,slideToClickedSlide:mG};function vG(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{cr(r,`.${n.slideClass}, swiper-slide`).forEach((h,d)=>{h.setAttribute("data-swiper-slide-index",d)})},o=t.grid&&n.grid&&n.grid.rows>1,s=n.slidesPerGroup*(o?n.grid.rows:1),a=t.slides.length%s!==0,l=o&&t.slides.length%n.grid.rows!==0,c=u=>{for(let h=0;h<u;h+=1){const d=t.isElement?eu("swiper-slide",[n.slideBlankClass]):eu("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(d)}};if(a){if(n.loopAddBlankSlides){const u=s-t.slides.length%s;c(u),t.recalcSlides(),t.updateSlides()}else Aa("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const u=n.grid.rows-t.slides.length%n.grid.rows;c(u),t.recalcSlides(),t.updateSlides()}else Aa("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function yG(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:s,byMousewheel:a}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:h,slidesEl:d,params:f}=l,{centeredSlides:g}=f;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&f.virtual.enabled){n&&(!f.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):f.centeredSlides&&l.snapIndex<f.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=h,l.emit("loopFix");return}let m=f.slidesPerView;m==="auto"?m=l.slidesPerViewDynamic():(m=Math.ceil(parseFloat(f.slidesPerView,10)),g&&m%2===0&&(m=m+1));const y=f.slidesPerGroupAuto?m:f.slidesPerGroup;let b=y;b%y!==0&&(b+=y-b%y),b+=f.loopAdditionalSlides,l.loopedSlides=b;const k=l.grid&&f.grid&&f.grid.rows>1;c.length<m+b?Aa("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&f.grid.fill==="row"&&Aa("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],x=[];let T=l.activeIndex;typeof o>"u"?o=l.getSlideIndex(c.filter(H=>H.classList.contains(f.slideActiveClass))[0]):T=o;const A=r==="next"||!r,E=r==="prev"||!r;let O=0,J=0;const R=k?Math.ceil(c.length/f.grid.rows):c.length,K=(k?c[o].column:o)+(g&&typeof i>"u"?-m/2+.5:0);if(K<b){O=Math.max(b-K,y);for(let H=0;H<b-K;H+=1){const N=H-Math.floor(H/R)*R;if(k){const G=R-N-1;for(let q=c.length-1;q>=0;q-=1)c[q].column===G&&_.push(q)}else _.push(R-N-1)}}else if(K+m>R-b){J=Math.max(K-(R-b*2),y);for(let H=0;H<J;H+=1){const N=H-Math.floor(H/R)*R;k?c.forEach((G,q)=>{G.column===N&&x.push(q)}):x.push(N)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),E&&_.forEach(H=>{c[H].swiperLoopMoveDOM=!0,d.prepend(c[H]),c[H].swiperLoopMoveDOM=!1}),A&&x.forEach(H=>{c[H].swiperLoopMoveDOM=!0,d.append(c[H]),c[H].swiperLoopMoveDOM=!1}),l.recalcSlides(),f.slidesPerView==="auto"?l.updateSlides():k&&(_.length>0&&E||x.length>0&&A)&&l.slides.forEach((H,N)=>{l.grid.updateSlide(N,H,l.slides)}),f.watchSlidesProgress&&l.updateSlidesOffset(),n){if(_.length>0&&E){if(typeof t>"u"){const H=l.slidesGrid[T],G=l.slidesGrid[T+O]-H;a?l.setTranslate(l.translate-G):(l.slideTo(T+Math.ceil(O),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-G,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-G))}else if(i){const H=k?_.length/f.grid.rows:_.length;l.slideTo(l.activeIndex+H,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(x.length>0&&A)if(typeof t>"u"){const H=l.slidesGrid[T],G=l.slidesGrid[T-J]-H;a?l.setTranslate(l.translate-G):(l.slideTo(T-J,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-G,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-G))}else{const H=k?x.length/f.grid.rows:x.length;l.slideTo(l.activeIndex-H,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=h,l.controller&&l.controller.control&&!s){const H={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(N=>{!N.destroyed&&N.params.loop&&N.loopFix({...H,slideTo:N.params.slidesPerView===f.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...H,slideTo:l.controller.control.params.slidesPerView===f.slidesPerView?n:!1})}l.emit("loopFix")}function bG(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var _G={loopCreate:vG,loopFix:yG,loopDestroy:bG};function CG(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function kG(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var wG={setGrabCursor:CG,unsetGrabCursor:kG};function SG(e,t){t===void 0&&(t=this);function n(r){if(!r||r===Ui()||r===nn())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function zf(e,t,n){const r=nn(),{params:i}=e,o=i.edgeSwipeDetection,s=i.edgeSwipeThreshold;return o&&(n<=s||n>=r.innerWidth-s)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function xG(e){const t=this,n=Ui();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){zf(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:s,enabled:a}=t;if(!a||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let l=r.target;if(o.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(l)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",u=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&u&&(l=u[0]);const h=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,d=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(d?SG(h,l):l.closest(h))){t.allowClick=!0;return}if(o.swipeHandler&&!l.closest(o.swipeHandler))return;s.currentX=r.pageX,s.currentY=r.pageY;const f=s.currentX,g=s.currentY;if(!zf(t,r,f))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=f,s.startY=g,i.touchStartTime=Ea(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let m=!0;l.matches(i.focusableElements)&&(m=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const y=m&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||y)&&!l.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function TG(e){const t=Ui(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:s,enabled:a}=n;if(!a||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(A=>A.identifier===r.touchId)[0],!c||c.identifier!==r.touchId)return}else c=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const u=c.pageX,h=c.pageY;if(l.preventedByNestedSwiper){o.startX=u,o.startY=h;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:u,startY:h,currentX:u,currentY:h}),r.touchStartTime=Ea());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(h<o.startY&&n.translate<=n.maxTranslate()||h>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(u<o.startX&&n.translate<=n.maxTranslate()||u>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=u,o.currentY=h;const d=o.currentX-o.startX,f=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(d**2+f**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let A;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:d*d+f*f>=25&&(A=Math.atan2(Math.abs(f),Math.abs(d))*180/Math.PI,r.isScrolling=n.isHorizontal()?A>i.touchAngle:90-A>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let g=n.isHorizontal()?d:f,m=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(g=Math.abs(g)*(s?1:-1),m=Math.abs(m)*(s?1:-1)),o.diff=g,g*=i.touchRatio,s&&(g=-g,m=-m);const y=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=m>0?"prev":"next";const b=n.params.loop&&!i.cssMode,k=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(b&&k&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const A=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(A)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let _;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&y!==n.touchesDirection&&b&&k&&Math.abs(g)>=1){Object.assign(o,{startX:u,startY:h,currentX:u,currentY:h,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=g+r.startTranslate;let x=!0,T=i.resistanceRatio;if(i.touchReleaseOnEdges&&(T=0),g>0?(b&&k&&!_&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(x=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**T))):g<0&&(b&&k&&!_&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(x=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**T))),x&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function EG(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(T=>T.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:s,touches:a,rtlTranslate:l,slidesGrid:c,enabled:u}=t;if(!u||!s.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}s.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const h=Ea(),d=h-n.touchStartTime;if(t.allowClick){const T=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(T&&T[0]||r.target,T),t.emit("tap click",r),d<300&&h-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Ea(),Jc(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(s.followFinger?f=l?t.translate:-t.translate:f=-n.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const g=f>=-t.maxTranslate()&&!t.params.loop;let m=0,y=t.slidesSizesGrid[0];for(let T=0;T<c.length;T+=T<s.slidesPerGroupSkip?1:s.slidesPerGroup){const A=T<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof c[T+A]<"u"?(g||f>=c[T]&&f<c[T+A])&&(m=T,y=c[T+A]-c[T]):(g||f>=c[T])&&(m=T,y=c[c.length-1]-c[c.length-2])}let b=null,k=null;s.rewind&&(t.isBeginning?k=s.virtual&&s.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(b=0));const _=(f-c[m])/y,x=m<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(d>s.longSwipesMs){if(!s.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(_>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?b:m+x):t.slideTo(m)),t.swipeDirection==="prev"&&(_>1-s.longSwipesRatio?t.slideTo(m+x):k!==null&&_<0&&Math.abs(_)>s.longSwipesRatio?t.slideTo(k):t.slideTo(m))}else{if(!s.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(m+x):t.slideTo(m):(t.swipeDirection==="next"&&t.slideTo(b!==null?b:m+x),t.swipeDirection==="prev"&&t.slideTo(k!==null?k:m))}}function Vf(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,s=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=s&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!a?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!s?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function AG(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function $G(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function PG(e){const t=this;Gs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function LG(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Wv=(e,t)=>{const n=Ui(),{params:r,el:i,wrapperEl:o,device:s}=e,a=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:a}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&o[l]("scroll",e.onScroll),r.updateOnWindowResize?e[c](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",Vf,!0):e[c]("observerUpdate",Vf,!0),i[l]("load",e.onLoad,{capture:!0})};function MG(){const e=this,{params:t}=e;e.onTouchStart=xG.bind(e),e.onTouchMove=TG.bind(e),e.onTouchEnd=EG.bind(e),e.onDocumentTouchStart=LG.bind(e),t.cssMode&&(e.onScroll=$G.bind(e)),e.onClick=AG.bind(e),e.onLoad=PG.bind(e),Wv(e,"on")}function IG(){Wv(this,"off")}var BG={attachEvents:MG,detachEvents:IG};const Hf=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function OG(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const s=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!s||e.currentBreakpoint===s)return;const l=(s in o?o[s]:void 0)||e.originalParams,c=Hf(e,r),u=Hf(e,l),h=r.enabled;c&&!u?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&u&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(b=>{if(typeof l[b]>"u")return;const k=r[b]&&r[b].enabled,_=l[b]&&l[b].enabled;k&&!_&&e[b].disable(),!k&&_&&e[b].enable()});const d=l.direction&&l.direction!==r.direction,f=r.loop&&(l.slidesPerView!==r.slidesPerView||d),g=r.loop;d&&n&&e.changeDirection(),Yt(e.params,l);const m=e.params.enabled,y=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!m?e.disable():!h&&m&&e.enable(),e.currentBreakpoint=s,e.emit("_beforeBreakpoint",l),n&&(f?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!g&&y?(e.loopCreate(t),e.updateSlides()):g&&!y&&e.loopDestroy()),e.emit("breakpoint",l)}function FG(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=nn(),o=t==="window"?i.innerHeight:n.clientHeight,s=Object.keys(e).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:o*l,point:a}}return{value:a,point:a}});s.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<s.length;a+=1){const{point:l,value:c}=s[a];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=l):c<=n.clientWidth&&(r=l)}return r||"max"}var RG={setBreakpoint:OG,getBreakpoint:FG};function NG(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function DG(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,s=NG(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...s),i.classList.add(...t),e.emitContainerClasses()}function zG(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}var VG={addClasses:DG,removeClasses:zG};function HG(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var qG={checkOverflow:HG},qf={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function jG(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Yt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Yt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Yt(t,r)}}const tc={eventsEmitter:Vj,update:Zj,translate:iG,transition:lG,slide:gG,loop:_G,grabCursor:wG,events:BG,breakpoints:RG,checkOverflow:qG,classes:VG},nc={};class un{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Yt({},n),t&&!n.el&&(n.el=t);const s=Ui();if(n.el&&typeof n.el=="string"&&s.querySelectorAll(n.el).length>1){const u=[];return s.querySelectorAll(n.el).forEach(h=>{const d=Yt({},n,{el:h});u.push(new un(d))}),u}const a=this;a.__swiper__=!0,a.support=qv(),a.device=jv({userAgent:n.userAgent}),a.browser=Nj(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const l={};a.modules.forEach(u=>{u({params:n,swiper:a,extendParams:jG(n,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const c=Yt({},qf,l);return a.params=Yt({},c,nc,n),a.originalParams=Yt({},a.params),a.passedParams=Yt({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(u=>{a.on(u,a.params.on[u])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=cr(n,`.${r.slideClass}, swiper-slide`),o=Nf(i[0]);return Nf(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=cr(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),s=(r.maxTranslate()-i)*t+i;r.translateTo(s,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:s,slidesSizesGrid:a,size:l,activeIndex:c}=r;let u=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let h=o[c]?Math.ceil(o[c].swiperSlideSize):0,d;for(let f=c+1;f<o.length;f+=1)o[f]&&!d&&(h+=Math.ceil(o[f].swiperSlideSize),u+=1,h>l&&(d=!0));for(let f=c-1;f>=0;f-=1)o[f]&&!d&&(h+=o[f].swiperSlideSize,u+=1,h>l&&(d=!0))}else if(t==="current")for(let h=c+1;h<o.length;h+=1)(n?s[h]+a[h]-s[c]<l:s[h]-s[c]<l)&&(u+=1);else for(let h=c-1;h>=0;h-=1)s[c]-s[h]<l&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{s.complete&&Gs(t,s)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const s=t.rtlTranslate?t.translate*-1:t.translate,a=Math.min(Math.max(s,t.maxTranslate()),t.minTranslate());t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const s=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(s.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):cr(r,i())[0];return!s&&n.params.createElements&&(s=eu("div",n.params.wrapperClass),r.append(s),cr(r,`.${n.params.slideClass}`).forEach(a=>{s.append(a)})),Object.assign(n,{el:r,wrapperEl:s,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:s,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||$r(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||$r(r,"direction")==="rtl"),wrongRTL:$r(s,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Gs(n,o):o.addEventListener("load",s=>{Gs(n,s.target)})}),tu(n),n.initialized=!0,tu(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:s,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o.removeAttribute("style"),s.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el.swiper=null,Aj(r)),r.destroyed=!0),null}static extendDefaults(t){Yt(nc,t)}static get extendedDefaults(){return nc}static get defaults(){return qf}static installModule(t){un.prototype.__modules__||(un.prototype.__modules__=[]);const n=un.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>un.installModule(n)),un):(un.installModule(t),un)}}Object.keys(tc).forEach(e=>{Object.keys(tc[e]).forEach(t=>{un.prototype[t]=tc[e][t]})});un.use([Dj,zj]);const GG={key:0,class:"card friend-wrapper"},WG=Zf('<div class="card-header" data-v-c58dcfaa><span class="title svg-icon" data-v-c58dcfaa><svg width="512" height="512" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-v-c58dcfaa><path fill="#EF9645" d="M16.428 30.331a2.31 2.31 0 0 0 3.217-.568a.798.798 0 0 0-.197-1.114l-1.85-1.949l4.222 2.955a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089l-3.596-3.305l5.375 3.763a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089l-4.766-4.073l5.864 4.105a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089L4.733 11.194l-3.467 5.521c-.389.6-.283 1.413.276 1.891l7.786 6.671c.355.304.724.591 1.107.859l5.993 4.195z" data-v-c58dcfaa></path><path fill="#FFDC5D" d="M29.802 21.752L18.5 13.601l-.059-.08l.053-.08l.053-.053l.854.469c.958.62 3.147 1.536 4.806 1.536c1.135 0 1.815-.425 2.018-1.257a1.409 1.409 0 0 0-1.152-1.622a6.788 6.788 0 0 1-2.801-1.091l-.555-.373c-.624-.421-1.331-.898-1.853-1.206c-.65-.394-1.357-.585-2.163-.585c-1.196 0-2.411.422-3.585.83l-1.266.436a5.18 5.18 0 0 1-1.696.271c-1.544 0-3.055-.586-4.516-1.152l-.147-.058a1.389 1.389 0 0 0-1.674.56L1.35 15.669a1.357 1.357 0 0 0 .257 1.761l7.785 6.672c.352.301.722.588 1.1.852l6.165 4.316a2 2 0 0 0 2.786-.491a.803.803 0 0 0-.196-1.115l-1.833-1.283a.424.424 0 0 1-.082-.618a.422.422 0 0 1 .567-.075l3.979 2.785a1.4 1.4 0 0 0 1.606-2.294l-3.724-2.606a.424.424 0 0 1-.082-.618a.423.423 0 0 1 .567-.075l5.132 3.593a1.4 1.4 0 0 0 1.606-2.294l-4.868-3.407a.42.42 0 0 1-.081-.618a.377.377 0 0 1 .506-.066l5.656 3.959a1.4 1.4 0 0 0 1.606-2.295z" data-v-c58dcfaa></path><path fill="#EF9645" d="M16.536 27.929c-.07.267-.207.498-.389.681l-1.004.996a1.494 1.494 0 0 1-1.437.396a1.5 1.5 0 0 1-.683-2.512l1.004-.996a1.494 1.494 0 0 1 1.437-.396a1.502 1.502 0 0 1 1.072 1.831zM5.992 23.008l1.503-1.497a1.5 1.5 0 0 0-.444-2.429a1.495 1.495 0 0 0-1.674.31l-1.503 1.497a1.5 1.5 0 0 0 .445 2.429a1.496 1.496 0 0 0 1.673-.31zm5.204.052a1.5 1.5 0 1 0-2.122-2.118L6.072 23.94a1.5 1.5 0 1 0 2.122 2.118l3.002-2.998zm2.25 3a1.5 1.5 0 0 0-.945-2.555a1.489 1.489 0 0 0-1.173.44L9.323 25.94a1.5 1.5 0 0 0 .945 2.556c.455.036.874-.141 1.173-.44l2.005-1.996zm16.555-4.137l.627-.542l-6.913-10.85l-12.27 1.985a1.507 1.507 0 0 0-1.235 1.737c.658 2.695 6.003.693 8.355-.601l11.436 8.271z" data-v-c58dcfaa></path><path fill="#FFCC4D" d="M16.536 26.929c-.07.267-.207.498-.389.681l-1.004.996a1.494 1.494 0 0 1-1.437.396a1.5 1.5 0 0 1-.683-2.512l1.004-.996a1.494 1.494 0 0 1 1.437-.396a1.502 1.502 0 0 1 1.072 1.831zM5.992 22.008l1.503-1.497a1.5 1.5 0 0 0-.444-2.429a1.497 1.497 0 0 0-1.674.31l-1.503 1.497a1.5 1.5 0 0 0 .445 2.429a1.496 1.496 0 0 0 1.673-.31zm5.204.052a1.5 1.5 0 1 0-2.122-2.118L6.072 22.94a1.5 1.5 0 1 0 2.122 2.118l3.002-2.998zm2.25 3a1.5 1.5 0 0 0-.945-2.555a1.489 1.489 0 0 0-1.173.44L9.323 24.94a1.5 1.5 0 0 0 .945 2.556c.455.036.874-.141 1.173-.44l2.005-1.996zm21.557-7.456a1.45 1.45 0 0 0 .269-1.885l-.003-.005l-3.467-6.521a1.488 1.488 0 0 0-1.794-.6c-1.992.771-4.174 1.657-6.292.937l-1.098-.377c-1.948-.675-4.066-1.466-6-.294c-.695.409-1.738 1.133-2.411 1.58a6.873 6.873 0 0 1-2.762 1.076a1.502 1.502 0 0 0-1.235 1.737c.613 2.512 5.3.908 7.838-.369a.968.968 0 0 1 1.002.081l11.584 8.416l4.369-3.776z" data-v-c58dcfaa></path></svg> 友情链接</span></div>',1),UG={class:"friend-list swiper-wrapper"},YG=["href"],KG={class:"info-wrapper"},XG={class:"nickname"},QG={class:"des"},ZG=76,JG=B({__name:"BlogFriendLink",setup(e){const t=o1({storageKey:"vitepress-theme-appearance"}),{friend:n}=Gt(),r=w(()=>({list:[],random:!1,limit:Number.MAX_SAFE_INTEGER,...Array.isArray(n)?{list:n}:n})),i=w(()=>{const{limit:f}=r.value;return!f||f<=0?0:f||Number.MAX_SAFE_INTEGER}),o=w(()=>{const{scrollSpeed:f}=r.value;return f??1500}),s=w(()=>o.value>0&&i.value<r.value.list.length),a=w(()=>{const f=[...r.value.list];return r.value.random&&f.splice(0,f.length,...FM(f)),o.value===0&&i.value&&f.splice(i.value),f.map(m=>{const{avatar:y,nickname:b}=m,k=HM(y,t.value);let _=b;return typeof y!="string"&&(_=y.alt||""),{...m,avatar:k,alt:_}})}),l=w(()=>s.value?i.value*ZG:0),c=w(()=>l.value?`${l.value}px`:"auto"),u=L(),{resume:h,pause:d}=I$(()=>{var f;(f=u.value)==null||f.slideNext()},o.value);return Ae(()=>{d(),s.value&&(u.value=new un(".scroll-wrapper",{direction:"vertical",slidesPerView:i.value,loop:!0}),h())}),Yn(()=>{d()}),(f,g)=>{var m;return(m=a.value)!=null&&m.length?(v(),C("div",GG,[WG,S("div",{class:"scroll-wrapper",style:et({height:c.value})},[S("ol",UG,[(v(!0),C(he,null,Te(a.value,(y,b)=>(v(),C("li",{key:b,class:"swiper-slide"},[S("a",{href:y.url,target:"_blank"},[j(p(pV),{size:50,src:y.avatar,alt:y.alt},null,8,["src","alt"]),S("div",KG,[S("span",XG,ee(y.nickname),1),S("p",QG,ee(y.des),1)])],8,YG)]))),128))])],4)])):I("",!0)}}}),eW=de(JG,[["__scopeId","data-v-c58dcfaa"]]),tW={class:"blog-info","data-pagefind-ignore":"all"},nW=B({__name:"BlogHomeInfo",setup(e){return(t,n)=>{const r=st("ClientOnly");return v(),C("div",tW,[j(aI),j(yj),j(r,null,{default:$(()=>[j(eW)]),_:1}),j(xj)])}}}),rW=de(nW,[["__scopeId","data-v-b8890b59"]]),iW={class:"name"},oW={class:"inspiring-wrapper"},sW=B({__name:"BlogHomeBanner",setup(e){const{site:t,frontmatter:n}=pt(),{home:r}=Gt(),i=w(()=>{var f;return(((f=n.value.blog)==null?void 0:f.name)??t.value.title)||(r==null?void 0:r.name)||""}),o=w(()=>{var f;return((f=n.value.blog)==null?void 0:f.motto)||(r==null?void 0:r.motto)||""}),s=L(""),a=w(()=>{var f;return[...new Set([(f=n.value.blog)==null?void 0:f.inspiring,r==null?void 0:r.inspiring].flat().filter(g=>!!g))]}),l=L(-1),c=w(()=>{var f;return((f=n.value.blog)==null?void 0:f.inspiringTimeout)||(r==null?void 0:r.inspiringTimeout)||0});oe(c,()=>{h()});const u=L(0);function h(){u.value&&clearTimeout(u.value),c.value>0&&(u.value=setTimeout(()=>{d()},c.value))}Ae(()=>{d()}),Yn(()=>{u.value&&clearTimeout(u.value)});async function d(){if(h(),a.value.length<1)return;l.value=(l.value+1)%a.value.length;const f=a.value[l.value];f!==s.value&&(s.value="",setTimeout(()=>{s.value=f},100))}return(f,g)=>(v(),C("div",null,[S("h1",null,[S("span",iW,ee(i.value),1),ze(S("span",{class:"motto"},ee(o.value),513),[[tt,o.value]])]),S("div",oW,[ze(S("h2",{onClick:d},ee(s.value),513),[[tt,!!s.value]])])]))}}),aW=de(sW,[["__scopeId","data-v-e4c34aa4"]]),lW=["href"],cW={key:0,class:"pin"},uW={key:1,class:"title"},dW={class:"info-container"},hW={class:"info-part"},pW={key:0,class:"title"},fW={key:1,class:"description"},mW=["innerHTML"],gW={key:3,class:"badge-list"},vW={key:0,class:"split"},yW={class:"split"},bW={key:1,class:"split"},_W={key:2,class:"badge-list"},CW={key:0,class:"split"},kW={class:"split"},wW={key:1,class:"split"},SW=B({__name:"BlogItem",props:{route:{},title:{},date:{},sticky:{},description:{},descriptionHTML:{},tag:{},author:{},cover:{type:[String,Boolean]},pin:{}},setup(e){const t=e,{width:n}=qi(),r=w(()=>n.value<=500),i=w(()=>Qa(t.date));return(o,s)=>{var a,l;return v(),C("a",{class:"blog-item",href:p(Bn)(o.route)},[o.pin?(v(),C("i",cW)):I("",!0),r.value?(v(),C("p",uW,ee(o.title),1)):I("",!0),S("div",dW,[S("div",hW,[r.value?I("",!0):(v(),C("p",pW,ee(o.title),1)),!o.descriptionHTML&&o.description?(v(),C("p",fW,ee(o.description),1)):I("",!0),o.descriptionHTML?(v(),C("div",{key:2,class:"description-html",innerHTML:o.descriptionHTML},null,8,mW)):I("",!0),r.value?I("",!0):(v(),C("div",gW,[o.author?(v(),C("span",vW,ee(o.author),1)):I("",!0),S("span",yW,ee(i.value),1),(a=o.tag)!=null&&a.length?(v(),C("span",bW,ee(o.tag.join(" · ")),1)):I("",!0)]))]),o.cover?(v(),C("div",{key:0,class:"cover-img",style:et(`background-image: url(${p(Bn)(`${o.cover}`)});`)},null,4)):I("",!0)]),r.value?(v(),C("div",_W,[o.author?(v(),C("span",CW,ee(o.author),1)):I("",!0),S("span",kW,ee(i.value),1),(l=o.tag)!=null&&l.length?(v(),C("span",wW,ee(o.tag.join(" · ")),1)):I("",!0)])):I("",!0)],8,lW)}}}),xW=de(SW,[["__scopeId","data-v-c6c48375"]]),TW={"data-pagefind-ignore":"all"},EW={class:"el-pagination-wrapper"},$s="pageNum",AW=B({__name:"BlogList",setup(e){const{theme:t,frontmatter:n}=pt(),r=w(()=>{var y;return((y=t.value.blog)==null?void 0:y.author)||""}),i=Yo(),o=v1(),s=w(()=>o.value.label),a=w(()=>{const y=i.value.filter(k=>!k.meta.hidden&&!!k.meta.top);y.sort((k,_)=>{var A;const x=(A=k==null?void 0:k.meta)==null?void 0:A.top,T=_==null?void 0:_.meta.top;return Number(x)-Number(T)});const b=i.value.filter(k=>k.meta.date&&k.meta.title&&!k.meta.top&&!k.meta.hidden);return b.sort((k,_)=>+new Date(_.meta.date)-+new Date(k.meta.date)),y.concat(b)}),l=w(()=>s.value?a.value.filter(y=>{var b,k;return(k=(b=y.meta)==null?void 0:b.tag)==null?void 0:k.includes(s.value)}):a.value),{home:c}=Gt(),u=w(()=>{var y;return((y=n.value.blog)==null?void 0:y.pageSize)||(c==null?void 0:c.pageSize)||6}),h=y1(),d=w(()=>{const y=(h.value-1)*u.value,b=y+u.value;return l.value.slice(y,b)}),f=ou(),g=t1();function m(y){if(h.value===y)return;h.value=y;const{searchParams:b}=new URL(window.location.href);b.delete($s),b.append($s,String(y)),f.go(`${g.value.origin}${f.route.path}?${b.toString()}`)}return oe(g,()=>{if(g.value.href){const{searchParams:y}=new URL(g.value.href);y.has($s)?h.value=Number(y.get($s)):h.value=1}},{immediate:!0}),(y,b)=>{const k=st("ClientOnly");return v(),C(he,null,[S("ul",TW,[(v(!0),C(he,null,Te(d.value,_=>(v(),C("li",{key:_.route},[j(xW,{route:_.route,title:_.meta.title,description:_.meta.description,"description-h-t-m-l":_.meta.descriptionHTML,date:_.meta.date,tag:_.meta.tag,cover:_.meta.cover,author:_.meta.author||r.value,pin:_.meta.top},null,8,["route","title","description","description-h-t-m-l","date","tag","cover","author","pin"])]))),128))]),j(k,null,{default:$(()=>[S("div",EW,[a.value.length>=u.value?(v(),X(p(Hq),{key:0,small:"",background:"","default-current-page":1,"current-page":p(h),"page-size":u.value,total:l.value.length,layout:"prev, pager, next, jumper","onUpdate:currentPage":m},null,8,["current-page","page-size","total"])):I("",!0)])]),_:1})],64)}}}),$W=de(AW,[["__scopeId","data-v-9b026183"]]),PW=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],LW=B({__name:"Giscus",props:{id:{},host:{},repo:{},repoId:{},category:{},categoryId:{},mapping:{},term:{},theme:{},strict:{},reactionsEnabled:{},emitMetadata:{},inputPosition:{},lang:{},loading:{}},setup(e){const t=L(!1);return Ae(()=>{t.value=!0,We(()=>import("./giscus-aTimukGI.CKTvSCx2.js"),__vite__mapDeps([]))}),(n,r)=>t.value?(v(),C("giscus-widget",{key:0,id:n.id,host:n.host,repo:n.repo,repoid:n.repoId,category:n.category,categoryid:n.categoryId,mapping:n.mapping,term:n.term,strict:n.strict,reactionsenabled:n.reactionsEnabled,emitmetadata:n.emitMetadata,inputposition:n.inputPosition,theme:n.theme,lang:n.lang,loading:n.loading},null,8,PW)):I("",!0)}}),MW={class:"comment-btn-wrapper"},IW={class:"text"},BW=B({__name:"BlogComment",setup(e){var _;Ro(x=>({f4ae47fe:b.value}));const{frontmatter:t}=pt(),n=L(null),r=fP(n);function i(){var x;(x=document.querySelector("#giscus-comment"))==null||x.scrollIntoView({behavior:"smooth",block:"start"})}const o=AM(),s=w(()=>o||{}),a=w(()=>t.value.comment===!1?t.value.comment:o&&o.repo&&o.repoId&&o.category&&o.categoryId),{isDark:l}=pt(),c=Kn(),u=L(!0);oe(()=>c.path,()=>{u.value=!1,setTimeout(()=>{u.value=!0},200)},{immediate:!0});const{width:h}=qi(),d=w(()=>h.value<768&&(s.value.mobileMinify??!0)),f=(_=s.value)!=null&&_.icon?ot("i",{onVnodeMounted(x){var T;x.el&&(x.el.outerHTML=(T=s.value)==null?void 0:T.icon)}}):ot(fR),g=document.querySelector(".vp-doc"),m=L(g),{width:y}=s1(m),b=w(()=>`${y.value}px`),k=w(()=>s.value.label??"评论");return(x,T)=>a.value&&p(y)?(v(),C("div",{key:0,id:"giscus-comment",ref_key:"commentEl",ref:n,class:"comment","data-pagefind-ignore":"all"},[u.value?(v(),X(p(LW),{key:0,repo:s.value.repo,"repo-id":s.value.repoId,category:s.value.category,"category-id":s.value.categoryId,mapping:s.value.mapping||"pathname","reactions-enabled":"1","emit-metadata":"0","input-position":s.value.inputPosition||"top",theme:p(l)?"dark":"light",lang:s.value.lang||"zh-CN",loading:s.value.loading||"eager"},null,8,["repo","repo-id","category","category-id","mapping","input-position","theme","lang","loading"])):I("",!0),ze(S("div",MW,[!d.value&&k.value?(v(),C("span",{key:0,class:"icon-wrapper-text",onClick:i},[j(p(ke),{size:20},{default:$(()=>[j(p(f))]),_:1}),S("span",IW,ee(k.value),1)])):(v(),C("span",{key:1,class:"icon-wrapper",onClick:i},[j(p(ke),{size:20},{default:$(()=>[j(p(f))]),_:1})]))],512),[[tt,!p(r)]])],512)):I("",!0)}}),OW=de(BW,[["__scopeId","data-v-333185ac"]]),FW={class:"card-header"},RW=["innerHTML"],NW={key:0,class:"recommend-container"},DW={class:"num"},zW={class:"des"},VW={class:"suffix"},HW={class:"tag"},qW={key:1,class:"empty-text"},jW=B({__name:"BlogRecommendArticle",setup(e){Ro(T=>({"59f0fa50":r.value}));const{recommend:t}=Gt(),n=w(()=>t&&(t!=null&&t.style)?t.style:"sidebar"),r=w(()=>n.value==="card"?"10px":"0px"),i=w(()=>t===!1?void 0:t),o=w(()=>{var T;return((T=i.value)==null?void 0:T.title)??`<span class="svg-icon">${oj}</span>相关文章`}),s=w(()=>{var T;return((T=i.value)==null?void 0:T.pageSize)||9}),a=w(()=>{var T;return((T=i.value)==null?void 0:T.nextText)||"换一组"}),l=w(()=>{var T;return((T=i.value)==null?void 0:T.empty)??"暂无相关文章"}),c=Yo(),u=Kn();function h(T){if(!T)return[];const{meta:A}=T;return Array.isArray(A.recommend)?A.recommend.filter(E=>typeof E=="string"):typeof A.recommend=="string"?[A.recommend]:[]}function d(T){var A;return Array.isArray((A=T==null?void 0:T.meta)==null?void 0:A.recommend)?T.meta.recommend[T.meta.recommend.length-1]:T==null?void 0:T.meta.recommend}function f(T,A){return T.some(E=>A.includes(E))}const g=w(()=>{var H;const T=decodeURIComponent(u.path).split("/"),A=c.value.find(N=>m(N.route)),E=h(A),O=c.value.map(N=>({...N,route:Bn(N.route)})).filter(N=>E.length?f(E,h(N)):N.route.split("/").length===T.length&&N.route.startsWith(T.slice(0,T.length-1).join("/"))).filter(N=>!!N.meta.title).filter(N=>{var G;return(((G=i.value)==null?void 0:G.showSelf)??!0)||N.route!==decodeURIComponent(u.path).replace(/.html$/,"")}).filter(N=>N.meta.recommend!==!1).filter(N=>{var G,q;return((q=(G=i.value)==null?void 0:G.filter)==null?void 0:q.call(G,N))??!0}),J=O.filter(N=>typeof d(N)=="number");J.sort((N,G)=>Number(d(N))-Number(d(G)));const R=O.filter(N=>typeof d(N)!="number"),P=((H=i.value)==null?void 0:H.sort)??"date";let K=(N,G)=>+new Date(G.meta.date)-+new Date(N.meta.date);return P==="filename"&&(K=(N,G)=>{const q=N.route.split("/").pop(),z=G.route.split("/").pop();return q.localeCompare(z)}),typeof P=="function"&&(K=P),R.sort(K),J.concat(R)});function m(T){const A=decodeURIComponent(u.path).replace(/.html$/,"");return[T,T.replace(/index$/,"")].includes(A)}const y=L(1);function b(){const T=y.value%Math.ceil(g.value.length/s.value);return y.value=T+1,T+1}const k=w(()=>(y.value-1)*s.value),_=w(()=>{const T=(y.value-1)*s.value,A=T+s.value;return g.value.slice(T,A)}),x=w(()=>g.value.length>s.value);return Ae(()=>{const T=g.value.findIndex(E=>m(E.route));if(T===-1)return;const A=Math.floor(T/s.value)+1;y.value=A}),(T,A)=>p(t)!==!1&&(g.value.length||l.value)?(v(),C("div",{key:0,class:W(["recommend",{card:n.value==="card"}]),"data-pagefind-ignore":"all"},[S("div",FW,[o.value?(v(),C("span",{key:0,class:"title",innerHTML:o.value},null,8,RW)):I("",!0),x.value?(v(),X(p(Ed),{key:1,size:"small",type:"primary",text:"",onClick:b},{default:$(()=>[Fe(ee(a.value),1)]),_:1})):I("",!0)]),_.value.length?(v(),C("ol",NW,[(v(!0),C(he,null,Te(_.value,(E,O)=>(v(),C("li",{key:E.route},[S("i",DW,ee(k.value+O+1),1),S("div",zW,[j(p(Ov),{type:"info",class:W(["title",{current:m(E.route)}]),href:E.route},{default:$(()=>[Fe(ee(E.meta.title),1)]),_:2},1032,["class","href"]),S("div",VW,[S("span",HW,ee(p(Qa)(E.meta.date)),1)])])]))),128))])):(v(),C("div",qW,ee(l.value),1))],2)):I("",!0)}}),GW=de(jW,[["__scopeId","data-v-70bed5bb"]]),WW={key:0,class:"sidebar","data-pagefind-ignore":"all"},UW=B({__name:"BlogSidebar",setup(e){Ro(o=>({"2fc407fc":r.value,"7100c379":i.value}));const{recommend:t}=Gt(),n=w(()=>t&&(t!=null&&t.style)?t.style:"card"),r=w(()=>n.value==="card"?"40px":"0px"),i=w(()=>n.value==="card"?"60px":"0px");return(o,s)=>p(t)!==!1?(v(),C("div",WW,[j(GW)])):I("",!0)}}),YW=de(UW,[["__scopeId","data-v-42377edc"]]),KW=B({__name:"BlogImagePreview",setup(e){const t=L(!1),n=ct({url:"",list:[],idx:0});function r(i){const o=i.target,s=i.currentTarget;if(o.tagName.toLowerCase()==="img"){const a=s.querySelectorAll(".content-container .main img"),l=Array.from(a).findIndex(h=>h===o),c=Array.from(a).map(h=>h.src),u=o.getAttribute("src");n.url=u,n.list=c,n.idx=l,l===-1&&u&&(n.list.push(u),n.idx=n.list.length-1),t.value=!0}}return Ae(()=>{const i=document.querySelector("#VPContent");i==null||i.addEventListener("click",r)}),Yn(()=>{const i=document.querySelector("#VPContent");i==null||i.removeEventListener("click",r)}),(i,o)=>t.value?(v(),X(p(Bv),{key:0,infinite:!1,"hide-on-click-modal":"",teleported:"","url-list":n.list,"initial-index":n.idx,onClose:o[0]||(o[0]=s=>t.value=!1)},null,8,["url-list","initial-index"])):I("",!0)}}),XW=["src"],QW=B({__name:"BlogDocCover",setup(e){const{frontmatter:t}=pt(),n=w(()=>t.value.cover),r=b1(),i=w(()=>{var a,l;return(l=(a=r.value)==null?void 0:a.meta)==null?void 0:l.cover}),{article:o}=Gt(),s=w(()=>{var a;return((a=t.value)==null?void 0:a.hiddenCover)??(o==null?void 0:o.hiddenCover)??!1});return(a,l)=>n.value&&!s.value?(v(),C("img",{key:0,class:"blog-doc-cover",src:i.value},null,8,XW)):I("",!0)}}),ZW=de(QW,[["__scopeId","data-v-ad419e80"]]),JW={key:0,class:"doc-analyze","data-pagefind-ignore":"all"},eU={key:0,class:"author",title:"本文作者"},tU=["href","title"],nU=["title"],rU={key:2,class:"tags",title:"标签"},iU=["href"],oU={title:"文章字数"},sU={title:"预计阅读时间"},aU={key:4,style:{width:"100%"},class:"new-line-meta-des"},lU={title:"文章字数"},cU={title:"预计阅读时间"},uU=B({__name:"BlogArticleAnalyze",setup(e){const{article:t,authorList:n}=Gt(),r=(t==null?void 0:t.readingTimePosition)||"inline",{frontmatter:i}=pt(),o=w(()=>{const{tag:P,tags:K,categories:H}=i.value;return[...new Set([].concat(P,K,H).flat().filter(N=>!!N))]}),s=w(()=>{var P;return((P=i.value)==null?void 0:P.readingTime)??(t==null?void 0:t.readingTime)??!0}),a=L(0),l=L(0),c=w(()=>~~(a.value/275*60)),u=w(()=>{const P=l.value;return l.value<=10?P*13+P*(P-1)/2:175+(P-10)*3}),h=w(()=>Math.ceil((c.value+u.value)/60)),d=SM(),f=xM(),g=Kn(),m=L();function y(){var G,q;if(!m.value)return;document.querySelectorAll(".meta-des").forEach(z=>z.remove());const P=window.document.querySelector("#VPContent"),K=P==null?void 0:P.querySelectorAll(".content-container .main img");l.value=(K==null?void 0:K.length)||0;const H=((G=P==null?void 0:P.querySelector(".content-container .main"))==null?void 0:G.textContent)||"";a.value=DM(H);let N=P==null?void 0:P.querySelector(d.value);N||(N=P==null?void 0:P.querySelector("h1")),(q=N==null?void 0:N[f.value])==null||q.call(N,m.value)}Ae(()=>{new MutationObserver(()=>{document.querySelector("#hack-article-des")||y()}).observe(document.body,{childList:!0,subtree:!0}),y()});const b=L(6666),k=b1(),_=w(()=>{var P,K;return Qa(((K=(P=k.value)==null?void 0:P.meta)==null?void 0:K.date)||"")}),x=w(()=>i.value.date?"发布时间":"最近修改时间"),T=w(()=>i.value.date===!1),{theme:A}=pt(),E=w(()=>{var P;return((P=A.value.blog)==null?void 0:P.author)||""}),O=w(()=>{var P;return(i.value.author||((P=k.value)==null?void 0:P.meta.author))??E.value}),J=w(()=>n==null?void 0:n.find(P=>O.value===P.nickname)),R=w(()=>i.value.author===!1);return oe(()=>g.path,()=>{b.value=123},{immediate:!0}),(P,K)=>{const H=st("ClientOnly");return v(),C(he,null,[s.value&&p(r)==="top"?(v(),C("div",JW,[S("span",null,[j(p(ke),null,{default:$(()=>[j(p(Gl))]),_:1}),Fe(" 字数："+ee(a.value)+" 个字 ",1)]),S("span",null,[j(p(ke),null,{default:$(()=>[j(p(jl))]),_:1}),Fe(" 预计："+ee(h.value)+" 分钟 ",1)])])):I("",!0),S("div",{id:"hack-article-des",ref_key:"$des",ref:m,class:"meta-des"},[O.value&&!R.value?(v(),C("span",eU,[j(p(ke),null,{default:$(()=>[j(p(OR))]),_:1}),J.value?(v(),C("a",{key:0,class:"link",href:J.value.url,title:J.value.des},ee(J.value.nickname),9,tU)):(v(),C(he,{key:1},[Fe(ee(O.value),1)],64))])):I("",!0),_.value&&!T.value?(v(),C("span",{key:1,class:"publishDate",title:x.value},[j(p(ke),null,{default:$(()=>[j(p(cR))]),_:1}),Fe(" "+ee(_.value),1)],8,nU)):I("",!0),o.value.length?(v(),C("span",rU,[j(p(ke),null,{default:$(()=>[j(p(hR))]),_:1}),(v(!0),C(he,null,Te(o.value,N=>(v(),C("a",{key:N,class:"link",href:`/?tag=${N}`},ee(N),9,iU))),128))])):I("",!0),p(r)==="inline"&&s.value?(v(),C(he,{key:3},[S("span",oU,[j(p(ke),null,{default:$(()=>[j(p(Gl))]),_:1}),Fe(" "+ee(a.value)+" 个字 ",1)]),S("span",sU,[j(p(ke),null,{default:$(()=>[j(p(jl))]),_:1}),Fe(" "+ee(h.value)+" 分钟 ",1)])],64)):I("",!0),p(r)==="newLine"&&s.value?(v(),C("div",aU,[S("span",lU,[j(p(ke),null,{default:$(()=>[j(p(Gl))]),_:1}),Fe(" "+ee(a.value)+" 个字 ",1)]),S("span",cU,[j(p(ke),null,{default:$(()=>[j(p(jl))]),_:1}),Fe(" "+ee(h.value)+" 分钟 ",1)])])):I("",!0),j(H,null,{default:$(()=>[j(ZW)]),_:1})],512)],64)}}}),dU=de(uU,[["__scopeId","data-v-0be8ccf3"]]),hU={key:0,class:"global-alert","data-pagefind-ignore":"all"},pU=["innerHTML"],rc="theme-blog-alert",fU=B({__name:"BlogAlert",setup(e){const{alert:t}=Gt(),n=L(!1),r=`${rc}-close`;Ae(()=>{const o=localStorage.getItem(rc),s=JSON.stringify(t);if(localStorage.setItem(rc,s),Number(t==null?void 0:t.duration)>=0){n.value=!0,t!=null&&t.duration&&setTimeout(()=>{n.value=!1},t==null?void 0:t.duration);return}if(o!==s&&(t==null?void 0:t.duration)===-1){n.value=!0,localStorage.removeItem(r);return}o===s&&(t==null?void 0:t.duration)===-1&&!localStorage.getItem(r)&&(n.value=!0)});function i(){n.value=!1,(t==null?void 0:t.duration)===-1&&localStorage.setItem(r,`${+new Date}`)}return(o,s)=>{var a,l,c,u,h,d,f;return n.value?(v(),C("div",hU,[j(p(PD),{title:(a=p(t))==null?void 0:a.title,type:(l=p(t))==null?void 0:l.type,"show-icon":(c=p(t))==null?void 0:c.showIcon,center:(u=p(t))==null?void 0:u.center,closable:(h=p(t))==null?void 0:h.closable,"close-text":(d=p(t))==null?void 0:d.closeText,description:(f=p(t))==null?void 0:f.description,onClose:i},{default:$(()=>{var g,m;return[(g=p(t))!=null&&g.html?(v(),C("div",{key:0,innerHTML:(m=p(t))==null?void 0:m.html},null,8,pU)):I("",!0)]}),_:1},8,["title","type","show-icon","center","closable","close-text","description"])])):I("",!0)}}}),mU=de(fU,[["__scopeId","data-v-8f1e02a5"]]),Ws={mounted:(e,t)=>{e.outerHTML=t.value}},Uv=e=>(Xe("data-v-2fc031a8"),e=e(),Qe(),e),gU={class:"theme-blog-popover","data-pagefind-ignore":"all"},vU={class:"header"},yU={class:"title-wrapper"},bU={key:0},_U={key:1,width:"512",height:"512",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},CU=Uv(()=>S("path",{fill:"currentColor",d:"M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.6c-3.7 11.6-5.6 23.9-5.6 36.4c0 65.9 53.8 119.5 120 119.5c55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3c16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112M344 762.3c-26.5 0-48-21.4-48-47.8c0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1"},null,-1)),kU=[CU],wU={class:"title"},SU={key:0},xU={key:0,class:"body content"},TU={key:0},EU={class:"footer content"},AU={key:0},$U={key:1,width:"512",height:"512",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},PU=Uv(()=>S("path",{fill:"currentColor",d:"M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.6c-3.7 11.6-5.6 23.9-5.6 36.4c0 65.9 53.8 119.5 120 119.5c55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3c16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112M344 762.3c-26.5 0-48-21.4-48-47.8c0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1"},null,-1)),LU=[PU],ic="theme-blog-popover",MU=B({__name:"BlogPopover",setup(e){const{popover:t}=Gt(),n=L(!1),r=w(()=>(t==null?void 0:t.body)||[]),i=w(()=>(t==null?void 0:t.footer)||[]),o=`${ic}-close`,{width:s}=qi();Ae(()=>{if(!(t!=null&&t.title))return;const c=localStorage.getItem(ic),u=JSON.stringify(t);if(localStorage.setItem(ic,u),s.value<768&&(t!=null&&t.mobileMinify)){n.value=!1;return}if(Number((t==null?void 0:t.duration)??"")>=0){n.value=!0,t!=null&&t.duration&&setTimeout(()=>{n.value=!1},t==null?void 0:t.duration);return}if(c!==u&&(t==null?void 0:t.duration)===-1){n.value=!0,localStorage.removeItem(o);return}c===u&&(t==null?void 0:t.duration)===-1&&!localStorage.getItem(o)&&(n.value=!0)});function a(){n.value=!1,(t==null?void 0:t.duration)===-1&&localStorage.setItem(o,`${+new Date}`)}function l(c,{slots:u}){const{key:h,item:d}=c;return d.type==="title"?ot("h4",{style:as(d.style||"")},d.content):d.type==="text"?ot("p",{style:as(d.style||"")},d.content):d.type==="image"?ot("img",{src:d.src,style:as(d.style||"")}):d.type==="button"?ot(Ed,{type:"primary",onClick:()=>{window.open(d.link,"_self")},style:as(d.style||""),...d.props},u):ot("div",{key:h},"")}return(c,u)=>{var h,d,f;return v(),C(he,null,[ze(S("div",gU,[S("div",vU,[S("div",yU,[j(p(ke),{size:"20px"},{default:$(()=>{var g;return[(g=p(t))!=null&&g.icon?ze((v(),C("i",bU,null,512)),[[p(Ws),p(t).icon]]):(v(),C("svg",_U,kU))]}),_:1}),S("span",wU,ee((h=p(t))==null?void 0:h.title),1)]),j(p(ke),{class:"close-icon",size:"20px",onClick:a},{default:$(()=>{var g;return[(g=p(t))!=null&&g.closeIcon?ze((v(),C("i",SU,null,512)),[[p(Ws),p(t).closeIcon]]):(v(),X(p(id),{key:1}))]}),_:1})]),r.value.length?(v(),C("div",xU,[(v(!0),C(he,null,Te(r.value,(g,m)=>(v(),X(l,{key:m,item:g},{default:$(()=>[Fe(ee(g.type!=="image"?g.content:""),1)]),_:2},1032,["item"]))),128)),i.value.length?(v(),C("hr",TU)):I("",!0)])):I("",!0),S("div",EU,[(v(!0),C(he,null,Te(i.value,(g,m)=>(v(),X(l,{key:m,item:g},{default:$(()=>[Fe(ee(g.type!=="image"?g.content:""),1)]),_:2},1032,["item"]))),128))])],512),[[tt,n.value]]),ze(S("div",{class:"theme-blog-popover-close",onClick:u[0]||(u[0]=g=>n.value=!0)},[j(p(ke),null,{default:$(()=>{var g;return[(g=p(t))!=null&&g.icon?ze((v(),C("i",AU,null,512)),[[p(Ws),p(t).icon]]):(v(),C("svg",$U,LU))]}),_:1})],512),[[tt,!n.value&&(((d=p(t))==null?void 0:d.reopen)??!0)&&((f=p(t))==null?void 0:f.title)]])],64)}}}),IU=de(MU,[["__scopeId","data-v-2fc031a8"]]),BU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAQjSURBVHjaVNNZbFRlGIDh95w525zpdGa6TVtbykBbyiICxQY0AhYTJUCiiYqGqEEiJhKQmBg0ESPeeCGRENEYb4jhBr0gNQrRlCBiSgyLaSlSaKEs3Wemy+xnzuqFYdD/6rt6ku/N9wue55EcPwWArCgIgkx5ZRuYVxsnJ801Z05f3jY1MRnb/HxHV+uSph9RKq4mhkdwbZVgdQ2SHkPTwgj/h1QUWWi8/tfg/hM/XN/Y2zfaZnkSnuRDtLMsXhBOvrJtya/LlrcdMs1Qb1lVRQmSAEDAsU1kxpgamXp3y+azu1esreK9dyRqs9PIjkW6OsLx7lTV1ld/237s8HRV57MbnvO8CA+e9GCQFTk6Mza+4/0P+t9a9VSEI3uyTH/eR27aB2Ed31Q/Hx1sI6BHOPT13c5Frd0HW9p3HPUQEwAigJW9RDp+bstrOy981nVGLN/7RpHUV70YfXnEAtjxFPasxPDBQXatjzNTdOQXtg983H/51AFFy1KCIg2bNIdC+8270NwmUmelsXqSqHkDK5PDl8iCW0QcnEW+lqCjvcjQuMZ4YnQRTkotQUZu4GkjcfZNv19G011kXw4vayNYNvqCCvSVTciOgABgeuhBGwhgz5zbkI2ff7HUqJiNR2QktbbSYnBYYqbMT/ilKI4SIbT/GcRylbnvLmJ2X8N7tJ7rR8OE/BbliqEYea81WIotmOs02WFpc55Lf0f5/mSI3dsamOgxSX7ZjaALuBmB6M6FnB+S+POCwmOLk1QFFAqZyQWl1YrpiRZJLvDkygyC5NJ1XCax7xYNiTQVEYVIuUulayIcGeLkpw6WK7GuPY/fb2CkhleXIFFe8XPGaKBj9QxLW1Ik0bg8EuT2zRCJYZvZIYepe0EGbvi4bQUJVZhs2phADFYj+df0lBqJUnaekS4SUHXe3jrOnoE2PhSewHfRpfZGgcryIvfHdQruQlLo7Ns6QizqkJ31CIUlqwQJXuWUpDXj6qOsW32HT3YNImll9FwJsb4jyaLmWQ4fa6a+2sQw0ry8YZSiHcPxxXBtMfCv4XkUCrfliWs/fTE31rtTVfv9vsIorvQIniMhqXM4popVcJFVMHMpfMEaLPdxR1Tnna1b1vl6tGntpAjgCTNWONZyIFBR8Ydtr6EgrCI3VySfzZPLBDHyIq5gkpmzcOUmTGMF+bh7M9LYulfWzMmHBzk7Fpq9deWEYxjrtaCMXjWfstp6BCGNXZzBdYqYhogWqkMum4+oBVD0YnP63u/fFqbv1D+M7VSlBbmmK5uYaLYLYwslfwFVAyXQiOfcx3XyyGIM8DDn0lgWyGokHogu/0UJxpL/+f2e569s/CZQZ53OpzJr0+NXludUfb5jVdf7VUGXJUPIZast1S9PeII6jFDT5xMjFwO1S4c8zwTgnwEAxufYSzA67PMAAAAASUVORK5CYII=",OU="@sugarat/theme",FU="0.2.27",RU="简约风的 Vitepress 博客主题，sugarat vitepress blog theme",NU="sugar",DU="MIT",zU="https://theme.sugarat.top",VU={type:"git",url:"git+https://github.com/ATQQ/sugar-blog.git"},HU={url:"https://github.com/ATQQ/sugar-blog/issues"},qU=["vitepress","theme","粥里有勺糖"],jU={"./node":{types:"./node.d.ts",default:"./node.js"},"./package.json":"./package.json",".":"./src/index.ts"},GU="src/index.ts",WU=["node.d.ts","node.js","src","types"],UU={"@giscus/vue":"^2.3.0","@mdit-vue/shared":"^0.12.0","@mermaid-js/mermaid-mindmap":"^9.3.0","@vue/shared":"^3.2.45","@vueuse/core":"^9.6.0","fast-glob":"^3.2.12","gray-matter":"^4.0.3","markdown-it-task-checkbox":"^1.0.6",mermaid:"^10.2.4","oh-my-live2d":"^0.10.0",swiper:"^11.0.5","vitepress-markdown-timeline":"^1.2.1","vitepress-plugin-mermaid":"2.0.13","vitepress-plugin-pagefind":"0.2.13","vitepress-plugin-rss":"0.2.2","vitepress-plugin-tabs":"0.2.0"},YU={"@element-plus/icons-vue":"^2.1.0","element-plus":"^2.3.4","javascript-stringify":"^2.1.0",pagefind:"1.0.3",sass:"^1.56.1",typescript:"^4.8.2",vitepress:"1.0.0-rc.45",vue:"^3.4.21"},KU={dev:"npm run build:node && npm run dev:docs","dev:docs":"vitepress dev docs","dev:node":"npx tsup",build:"npm run build:node && npm run build:docs","build:docs":"vitepress build docs","build:node":"npx tsup",serve:"vitepress serve docs"},XU={name:OU,version:FU,description:RU,author:NU,license:DU,homepage:zU,repository:VU,bugs:HU,keywords:qU,exports:jU,main:GU,files:WU,dependencies:UU,devDependencies:YU,scripts:KU},QU=e=>(Xe("data-v-bc4ef0fa"),e=e(),Qe(),e),ZU={key:0,class:"blog-footer"},JU=["innerHTML"],eY={class:"footer-item-list"},tY={class:"footer-item"},nY={key:0},rY=QU(()=>S("img",{src:BU,alt:"公网安备"},null,-1)),iY=[rY],oY=["innerHTML"],sY=["href"],aY={key:3},lY=B({__name:"BlogFooter",setup(e){const t=IM(),n=w(()=>{if(!t)return[];const r=[t].flat();return r.flat().map((i,o)=>{const{icpRecord:s,securityRecord:a,copyright:l,version:c,message:u}=i,h=[],d=[u||[]].flat(),f=o===r.length-1;return(c!==!1&&f||c===!0)&&h.push({name:`@sugarat/theme@${XU.version}`,link:"https://theme.sugarat.top/",icon:sj}),typeof l=="string"&&h.push({name:l,icon:Ff}),l instanceof Object&&h.push({icon:Ff,name:l.message,...l}),s&&h.push({icon:aj,...s}),a&&h.push({icon:"security",...a}),{data:h,messageData:d}})});return(r,i)=>n.value.length?(v(),C("footer",ZU,[(v(!0),C(he,null,Te(n.value,({data:o,messageData:s})=>(v(),C(he,null,[(v(!0),C(he,null,Te(s,a=>(v(),C("p",{innerHTML:a},null,8,JU))),256)),S("p",eY,[(v(!0),C(he,null,Te(o,a=>(v(),C("span",tY,[a.icon==="security"?(v(),C("i",nY,iY)):a.icon?(v(),C("i",{key:1,innerHTML:a.icon},null,8,oY)):I("",!0),a.link?(v(),C("a",{key:2,href:a.link,target:"_blank",rel:"noopener noreferrer"},ee(a.name),9,sY)):(v(),C("span",aY,ee(a.name),1))]))),256))])],64))),256))])):I("",!0)}}),cY=de(lY,[["__scopeId","data-v-bc4ef0fa"]]),uY={class:"blog-home-header-avatar"},dY=["src"],hY=B({__name:"BlogHomeHeaderAvatar",setup(e){const{width:t}=qi(),n=w(()=>t.value<=767),{home:r}=Gt(),{frontmatter:i,site:o}=pt(),s=w(()=>{var l,c;return i.value.logo??((c=(l=i.value)==null?void 0:l.blog)==null?void 0:c.logo)??(r==null?void 0:r.logo)??o.value.themeConfig.logo}),a=w(()=>{var l;return((l=i.value.blog)==null?void 0:l.minScreenAvatar)===!1});return(l,c)=>ze((v(),C("div",uY,[S("img",{src:p(Bn)(s.value),alt:"avatar"},null,8,dY)],512)),[[tt,n.value&&!a.value]])}}),pY=de(hY,[["__scopeId","data-v-54bf0df2"]]),fY=e=>(Xe("data-v-3fbcded4"),e=e(),Qe(),e),mY={key:0,class:"back-to-top"},gY={key:0},vY={key:1,width:"512",height:"512",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},yY=fY(()=>S("path",{fill:"currentColor",d:"m20 22l-3.86-1.55c.7-1.53 1.2-3.11 1.51-4.72zM7.86 20.45L4 22l2.35-6.27c.31 1.61.81 3.19 1.51 4.72M12 2s5 2 5 10c0 3.1-.75 5.75-1.67 7.83A2 2 0 0 1 13.5 21h-3a2 2 0 0 1-1.83-1.17C7.76 17.75 7 15.1 7 12c0-8 5-10 5-10m0 10c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2"},null,-1)),bY=[yY],_Y=450,CY=B({__name:"BlogBackToTop",setup(e){Ro(d=>({"5b643309":o.value}));function t(){window.scrollTo({top:0,behavior:"smooth"})}const n=document.querySelector(".vp-doc"),r=L(n),{width:i}=s1(r),o=w(()=>`${i.value}px`),s=BM(),a=w(()=>!!(s??!0)),{y:l}=mP(window),c=w(()=>(typeof s=="boolean"||s==null?void 0:s.top)??_Y),u=w(()=>i&&l.value>c.value),h=w(()=>typeof s=="boolean"?"":s==null?void 0:s.icon);return(d,f)=>a.value?ze((v(),C("div",mY,[S("span",{class:"icon-wrapper",onClick:t},[j(p(ke),{size:20},{default:$(()=>[h.value?ze((v(),C("i",gY,null,512)),[[p(Ws),h.value]]):(v(),C("svg",vY,bY))]),_:1})])],512)),[[tt,u.value]]):I("",!0)}}),kY=de(CY,[["__scopeId","data-v-3fbcded4"]]),wY={class:"home"},SY={class:"header-banner"},xY={class:"content-wrapper"},TY={class:"blog-list-wrapper"},EY={class:"blog-info-wrapper"},AY=B({__name:"BlogApp",setup(e){const{frontmatter:t}=pt(),n=w(()=>t.value.layout),r=EM(),{Layout:i}=Vc;return OM(),(o,s)=>{const a=st("ClientOnly");return v(),X(p(i),null,Jf({"layout-top":$(()=>[M(o.$slots,"layout-top",{},void 0,!0),j(mU),j(IU)]),"doc-before":$(()=>[M(o.$slots,"doc-before",{},void 0,!0),j(a,null,{default:$(()=>[j(dU),j(KW)]),_:1})]),"nav-bar-content-before":$(()=>[M(o.$slots,"nav-bar-content-before",{},void 0,!0)]),"doc-after":$(()=>[M(o.$slots,"doc-after",{},void 0,!0),j(a,null,{default:$(()=>[j(kY),j(OW)]),_:1})]),"layout-bottom":$(()=>[n.value==="home"?(v(),X(cY,{key:0})):I("",!0),M(o.$slots,"layout-bottom",{},void 0,!0)]),"nav-bar-title-before":$(()=>[M(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":$(()=>[M(o.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-after":$(()=>[M(o.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":$(()=>[M(o.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":$(()=>[M(o.$slots,"nav-screen-content-after",{},void 0,!0)]),"sidebar-nav-before":$(()=>[M(o.$slots,"sidebar-nav-before",{},void 0,!0)]),"page-top":$(()=>[M(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":$(()=>[M(o.$slots,"page-bottom",{},void 0,!0)]),"not-found":$(()=>[M(o.$slots,"not-found",{},void 0,!0)]),"home-hero-info":$(()=>[M(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-image":$(()=>[M(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":$(()=>[M(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":$(()=>[M(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":$(()=>[M(o.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":$(()=>[M(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-top":$(()=>[M(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":$(()=>[M(o.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":$(()=>[M(o.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":$(()=>[M(o.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":$(()=>[M(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":$(()=>[M(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":$(()=>[M(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":$(()=>[M(o.$slots,"aside-ads-after",{},void 0,!0)]),_:2},[p(r)?{name:"home-hero-before",fn:$(()=>[M(o.$slots,"home-hero-before",{},void 0,!0),S("div",wY,[j(pY),S("div",SY,[j(aW)]),S("div",xY,[S("div",TY,[j($W)]),S("div",EY,[j(rW)])])])]),key:"0"}:void 0,p(r)?{name:"sidebar-nav-after",fn:$(()=>[M(o.$slots,"sidebar-nav-after",{},void 0,!0),j(YW)]),key:"1"}:void 0]),1024)}}}),$Y=de(AY,[["__scopeId","data-v-519b41fe"]]),PY={};function LY(e,t){return v(),C("div",null,"时间线页面")}const MY=de(PY,[["render",LY]]),IY=/[\u0000-\u001f]/g,BY=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,OY=/[\u0300-\u036F]/g,jf=e=>e.normalize("NFKD").replace(OY,"").replace(IY,"").replace(BY,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),es=e=>(Xe("data-v-9ed2ad44"),e=e(),Qe(),e),FY={class:"user-works-page VPDoc"},RY=es(()=>S("div",{class:"aside-container"},[S("div",{class:"filter"},[S("div"),S("div")])],-1)),NY={class:"works"},DY={key:0,class:"description"},zY=["id"],VY=["href"],HY=["id"],qY=["href"],jY=["href"],GY={key:1},WY={class:"info"},UY={class:"times"},YY=es(()=>S("span",{class:"icon"},[S("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[S("title",null,"上线时间"),S("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z",fill:"currentColor"})])],-1)),KY={key:0},XY={key:0,class:"links"},QY=["href"],ZY=es(()=>S("i",{class:"icon"},[S("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 496 512"},[S("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z",fill:"currentColor"})])],-1)),JY={key:0,class:"lastupdate"},eK={key:1,class:"links"},tK={key:0,class:"icon"},nK=es(()=>S("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[S("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[S("path",{d:"M10 14a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-.5.5"}),S("path",{d:"M14 10a3.5 3.5 0 0 0-5 0l-4 4a3.5 3.5 0 0 0 5 5l.5-.5"})])],-1)),rK=[nK],iK=["href","title"],oK={key:2,class:"tags"},sK=es(()=>S("i",{class:"icon"},[S("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","data-v-d328c40a":""},[S("path",{fill:"currentColor",d:"M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"})])],-1)),aK=["onClick"],lK={key:1,class:"images"},cK={key:0,class:"swiper-mode"},uK={key:1,class:"list-mode"},dK=["innerHTML"],hK={class:"aside-container"},pK={class:"aside-outline-container"},fK=B({__name:"UserWorks",setup(e){const t=MM();oe(()=>t.id,c=>{c&&window.history.replaceState(null,"",`#${c}`)});const n=LM();oe(n,()=>{const{value:c}=n;c&&c.scroll({behavior:"smooth"})});const r=$M(),i=ct([]);oe(r,c=>{const u=[...c.list].map(g=>{const{time:m}=g,y=typeof m=="string"?{startTime:m,endTime:"",lastUpdate:""}:{startTime:m.start,endTime:m.end,lastUpdate:m.lastupdate},b=[];let k="swiper";return typeof g.cover=="string"?b.push(g.cover):Array.isArray(g.cover)?b.push(...g.cover):typeof g.cover=="object"&&(b.push(...g.cover.urls),k=g.cover.layout??k),{...g,...y,covers:b,coverLayout:k}}),h=u.filter(g=>g.top!==void 0),d=u.filter(g=>g.top===void 0);h.sort((g,m)=>g.top-m.top),d.sort((g,m)=>+new Date(m.startTime)-+new Date(g.startTime)),h.length&&(h[0].year=r.value.topTitle??"置顶");const f=d.reduce((g,m)=>{const{startTime:y}=m,b=new Date(y).getFullYear(),k={...m};return g[b]||(g[b]=[],k.year=b),g[b].push(k),g},{});i.push(...h,...Object.values(f).reverse().flat())},{immediate:!0});const o=L(!0);Fn(()=>{i.length&&o.value&&(o.value=!1,i.forEach(c=>{if(!c.lastUpdate&&c.github){c.lastUpdate="获取中...";const{github:u}=c;if(typeof u=="string")zM(u).then(h=>{c.lastUpdate=Hc(h,"yyyy-MM-dd")}).catch(()=>{c.lastUpdate="地址解析失败"});else{const{owner:h,repo:d,path:f,branch:g}=u;let m=`https://github.com/${h}/${d}`;f?m+=`/tree/${g||"master"}/${f}`:g&&(m+=`/tree/${g}`),c.github=m,VM(h,d,f??"",g).then(y=>{c.lastUpdate=Hc(y,"yyyy-MM-dd")}).catch(()=>{c.lastUpdate="地址解析失败"})}}}))});const{width:s}=qi(),a=w(()=>s.value>768);function l(c){rj({message:`点击了${c}标签，标签过滤功能开发中ing...`,type:"warning"})}return(c,u)=>{const h=st("Badge");return v(),C("div",FY,[RY,S("div",NY,[S("h1",null,ee(p(r).title),1),p(r).description?(v(),C("p",DY,ee(p(r).description),1)):I("",!0),(v(!0),C(he,null,Te(i,(d,f)=>{var g,m,y,b,k;return v(),C("div",{key:f,class:"work"},[d.year?(v(),C("h2",{key:0,id:`work_${d.year}`},[S("a",{href:`#work_${d.year}`},ee(d.year),9,VY)],8,zY)):I("",!0),S("h3",{id:p(jf)(d.title),class:"title"},[S("a",{class:"pin",href:`#${p(jf)(d.title)}`},null,8,qY),d.url?(v(),C("a",{key:0,rel:"noopener",target:"_blank",href:d.url},ee(d.title),9,jY)):(v(),C("span",GY,ee(d.title),1)),d.status?(v(),X(h,{key:2,type:((g=d.status)==null?void 0:g.type)||"tip"},{default:$(()=>[Fe(ee(d.status.text),1)]),_:2},1032,["type"])):I("",!0)],8,HY),S("div",WY,[S("div",UY,[YY,S("span",null,ee(d.startTime),1),d.endTime?(v(),C("span",KY," - "+ee(d.endTime),1)):I("",!0)]),d.github?(v(),C("div",XY,[d.github?(v(),C("a",{key:0,class:"github-link",href:d.github,target:"_blank",rel:"noopener"},[ZY,d.lastUpdate?(v(),C("span",JY,"最后更新时间："+ee(d.lastUpdate),1)):I("",!0)],8,QY)):I("",!0)])):I("",!0),(m=d.links)!=null&&m.length?(v(),C("div",eK,[(y=d.links)!=null&&y.length?(v(),C("i",tK,rK)):I("",!0),(v(!0),C(he,null,Te(d.links||[],_=>(v(),C("a",{key:_.url,class:"link",href:_.url,title:_.title,target:"_blank",rel:"noopener"},ee(_.title),9,iK))),128))])):I("",!0),(b=d.tags)!=null&&b.length?(v(),C("div",oK,[sK,(v(!0),C(he,null,Te(d.tags,_=>(v(),C("span",{key:_,class:"tag",onClick:x=>l(_)},ee(_),9,aK))),128))])):I("",!0)]),(k=d.covers)!=null&&k.length?(v(),C("div",lK,[d.coverLayout==="swiper"?(v(),C("div",cK,[j(p(uH),{autoplay:"",height:"260px",type:a.value&&d.covers.length>=3?"card":""},{default:$(()=>[(v(!0),C(he,null,Te(d.covers,(_,x)=>(v(),X(p(dH),{key:_,style:{"text-align":"center"}},{default:$(()=>[(v(),X(p(If),{key:_,"preview-teleported":"",src:_,loading:"lazy","preview-src-list":d.covers,"initial-index":x,"hide-on-click-modal":"",alt:`${d.title}-${x}`},null,8,["src","preview-src-list","initial-index","alt"]))]),_:2},1024))),128))]),_:2},1032,["type"])])):I("",!0),d.coverLayout==="list"?(v(),C("div",uK,[(v(!0),C(he,null,Te(d.covers,(_,x)=>(v(),X(p(If),{key:_,src:_,loading:"lazy","preview-src-list":d.covers,"initial-index":x,"hide-on-click-modal":""},null,8,["src","preview-src-list","initial-index"]))),128))])):I("",!0)])):I("",!0),S("div",{class:"description",innerHTML:d.description},null,8,dK)])}),128))]),S("div",hK,[S("div",pK,[j(Pg)])])])}}}),mK=de(fK,[["__scopeId","data-v-9ed2ad44"]]),zK={...Vc,Layout:wM($Y),enhanceApp(e){kM(e.app),Vc.enhanceApp(e),e.app.component("TimelinePage",MY),e.app.component("UserWorksPage",mK),e.app.component("Mermaid",oT)}};export{M8 as $,Cw as A,zK as B,xh as C,xc as D,r5 as E,Y8 as F,_u as G,ja as H,D8 as I,h6 as J,qo as K,jC as L,Or as M,p0 as N,v0 as O,sa as P,oa as Q,_0 as R,ra as S,Pl as T,ai as U,MC as V,w6 as W,ku as X,AC as Y,RC as Z,Di as _,xw as a,CK as a$,TC as a0,jo as a1,Ni as a2,I8 as a3,y0 as a4,LC as a5,PC as a6,T8 as a7,wu as a8,d0 as a9,hy as aA,my as aB,py as aC,s2 as aD,Cm as aE,vK as aF,Er as aG,uu as aH,So as aI,Wd as aJ,p2 as aK,Ow as aL,d3 as aM,S0 as aN,Tu as aO,xK as aP,fu as aQ,_K as aR,wK as aS,Jd as aT,Zd as aU,SK as aV,kK as aW,yK as aX,bK as aY,EK as aZ,TK as a_,za as aa,_h as ab,i5 as ac,n5 as ad,U8 as ae,a5 as af,Qn as ag,Cu as ah,Jt as ai,vm as aj,wy as ak,co as al,e8 as am,_e as an,Gn as ao,B5 as ap,I_ as aq,dy as ar,BK as as,AK as at,Mw as au,S5 as av,cu as aw,ym as ax,Nt as ay,zo as az,Sw as b,o3 as b0,Wn as b1,ph as b2,l5 as b3,$K as b4,k5 as b5,Aw as b6,Ho as b7,ge as b8,be as b9,Iu as c,To as d,yt as e,aa as f,ww as g,cn as h,J0 as i,bu as j,$5 as k,ye as l,im as m,Vo as n,C5 as o,Xm as p,f5 as q,E4 as r,kw as s,P_ as t,vw as u,OK as v,E5 as w,Tw as x,Ew as y,po as z};
