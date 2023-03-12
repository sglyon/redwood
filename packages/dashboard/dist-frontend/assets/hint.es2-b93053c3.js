import{C as u}from"./codemirror.es-8dff512d.js";import{f as j}from"./forEachState.es-1e367fb2.js";import{r as g,t as b,w as O,D as d,u as D,q as N}from"./index-b47095e4.js";var M=Object.defineProperty,p=(i,n)=>M(i,"name",{value:n,configurable:!0});function f(i,n,t){const r=x(t,m(n.string));if(!r)return;const e=n.type!==null&&/"|\w/.test(n.string[0])?n.start:n.end;return{list:r,from:{line:i.line,ch:e},to:{line:i.line,ch:n.end}}}p(f,"hintList");function x(i,n){if(!n)return y(i,l=>!l.isDeprecated);const t=i.map(l=>({proximity:T(m(l.text),n),entry:l}));return y(y(t,l=>l.proximity<=2),l=>!l.entry.isDeprecated).sort((l,o)=>(l.entry.isDeprecated?1:0)-(o.entry.isDeprecated?1:0)||l.proximity-o.proximity||l.entry.text.length-o.entry.text.length).map(l=>l.entry)}p(x,"filterAndSortList");function y(i,n){const t=i.filter(n);return t.length===0?i:t}p(y,"filterNonEmpty");function m(i){return i.toLowerCase().replace(/\W/g,"")}p(m,"normalizeText");function T(i,n){let t=v(n,i);return i.length>n.length&&(t-=i.length-n.length-1,t+=i.indexOf(n)===0?0:.5),t}p(T,"getProximity");function v(i,n){let t,r;const e=[],l=i.length,o=n.length;for(t=0;t<=l;t++)e[t]=[t];for(r=1;r<=o;r++)e[0][r]=r;for(t=1;t<=l;t++)for(r=1;r<=o;r++){const c=i[t-1]===n[r-1]?0:1;e[t][r]=Math.min(e[t-1][r]+1,e[t][r-1]+1,e[t-1][r-1]+c),t>1&&r>1&&i[t-1]===n[r-2]&&i[t-2]===n[r-1]&&(e[t][r]=Math.min(e[t][r],e[t-2][r-2]+c))}return e[l][o]}p(v,"lexicalDistance");u.registerHelper("hint","graphql-variables",(i,n)=>{const t=i.getCursor(),r=i.getTokenAt(t),e=L(t,r,n);return e!=null&&e.list&&e.list.length>0&&(e.from=u.Pos(e.from.line,e.from.ch),e.to=u.Pos(e.to.line,e.to.ch),u.signal(i,"hasCompletion",i,e,r)),e});function L(i,n,t){const r=n.state.kind==="Invalid"?n.state.prevState:n.state,{kind:e,step:l}=r;if(e==="Document"&&l===0)return f(i,n,[{text:"{"}]);const{variableToType:o}=t;if(!o)return;const c=V(o,n.state);if(e==="Document"||e==="Variable"&&l===0){const a=Object.keys(o);return f(i,n,a.map(s=>({text:`"${s}": `,type:o[s]})))}if((e==="ObjectValue"||e==="ObjectField"&&l===0)&&c.fields){const a=Object.keys(c.fields).map(s=>c.fields[s]);return f(i,n,a.map(s=>({text:`"${s.name}": `,type:s.type,description:s.description})))}if(e==="StringValue"||e==="NumberValue"||e==="BooleanValue"||e==="NullValue"||e==="ListValue"&&l===1||e==="ObjectField"&&l===2||e==="Variable"&&l===2){const a=c.type?g(c.type):void 0;if(a instanceof b)return f(i,n,[{text:"{"}]);if(a instanceof O){const s=a.getValues();return f(i,n,s.map(h=>({text:`"${h.name}"`,type:a,description:h.description})))}if(a===d)return f(i,n,[{text:"true",type:d,description:"Not false."},{text:"false",type:d,description:"Not true."}])}}p(L,"getVariablesHint");function V(i,n){const t={type:null,fields:null};return j(n,r=>{if(r.kind==="Variable")t.type=i[r.name];else if(r.kind==="ListValue"){const e=t.type?D(t.type):void 0;t.type=e instanceof N?e.ofType:null}else if(r.kind==="ObjectValue"){const e=t.type?g(t.type):void 0;t.fields=e instanceof b?e.getFields():null}else if(r.kind==="ObjectField"){const e=r.name&&t.fields?t.fields[r.name]:null;t.type=e==null?void 0:e.type}}),t}p(V,"getTypeInfo");
