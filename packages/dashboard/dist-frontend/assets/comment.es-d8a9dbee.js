import{a as G}from"./codemirror.es-8dff512d.js";import"./index-b47095e4.js";var H=Object.defineProperty,M=(O,A)=>H(O,"name",{value:A,configurable:!0});function q(O,A){return A.forEach(function(s){s&&typeof s!="string"&&!Array.isArray(s)&&Object.keys(s).forEach(function(b){if(b!=="default"&&!(b in O)){var d=Object.getOwnPropertyDescriptor(s,b);Object.defineProperty(O,b,d.get?d:{enumerable:!0,get:function(){return s[b]}})}})}),Object.freeze(Object.defineProperty(O,Symbol.toStringTag,{value:"Module"}))}M(q,"_mergeNamespaces");var w={exports:{}};(function(O,A){(function(s){s(G.exports)})(function(s){var b={},d=/[^\s\u00a0]/,m=s.Pos,F=s.cmpPos;function N(t){var a=t.search(d);return a==-1?0:a}M(N,"firstNonWS"),s.commands.toggleComment=function(t){t.toggleComment()},s.defineExtension("toggleComment",function(t){t||(t=b);for(var a=this,n=1/0,e=this.listSelections(),g=null,c=e.length-1;c>=0;c--){var l=e[c].from(),r=e[c].to();l.line>=n||(r.line>=n&&(r=m(n,0)),n=l.line,g==null?a.uncomment(l,r,t)?g="un":(a.lineComment(l,r,t),g="line"):g=="un"?a.uncomment(l,r,t):a.lineComment(l,r,t))}});function $(t,a,n){return/\bstring\b/.test(t.getTokenTypeAt(m(a.line,0)))&&!/^[\'\"\`]/.test(n)}M($,"probablyInsideString");function j(t,a){var n=t.getMode();return n.useInnerComments===!1||!n.innerMode?n:t.getModeAt(a)}M(j,"getMode"),s.defineExtension("lineComment",function(t,a,n){n||(n=b);var e=this,g=j(e,t),c=e.getLine(t.line);if(!(c==null||$(e,t,c))){var l=n.lineComment||g.lineComment;if(!l){(n.blockCommentStart||g.blockCommentStart)&&(n.fullLines=!0,e.blockComment(t,a,n));return}var r=Math.min(a.ch!=0||a.line==t.line?a.line+1:a.line,e.lastLine()+1),C=n.padding==null?" ":n.padding,f=n.commentBlankLines||t.line==a.line;e.operation(function(){if(n.indent){for(var v=null,i=t.line;i<r;++i){var u=e.getLine(i),h=u.slice(0,N(u));(v==null||v.length>h.length)&&(v=h)}for(var i=t.line;i<r;++i){var u=e.getLine(i),o=v.length;!f&&!d.test(u)||(u.slice(0,o)!=v&&(o=N(u)),e.replaceRange(v+l+C,m(i,0),m(i,o)))}}else for(var i=t.line;i<r;++i)(f||d.test(e.getLine(i)))&&e.replaceRange(l+C,m(i,0))})}}),s.defineExtension("blockComment",function(t,a,n){n||(n=b);var e=this,g=j(e,t),c=n.blockCommentStart||g.blockCommentStart,l=n.blockCommentEnd||g.blockCommentEnd;if(!c||!l){(n.lineComment||g.lineComment)&&n.fullLines!=!1&&e.lineComment(t,a,n);return}if(!/\bcomment\b/.test(e.getTokenTypeAt(m(t.line,0)))){var r=Math.min(a.line,e.lastLine());r!=t.line&&a.ch==0&&d.test(e.getLine(r))&&--r;var C=n.padding==null?" ":n.padding;t.line>r||e.operation(function(){if(n.fullLines!=!1){var f=d.test(e.getLine(r));e.replaceRange(C+l,m(r)),e.replaceRange(c+C,m(t.line,0));var v=n.blockCommentLead||g.blockCommentLead;if(v!=null)for(var i=t.line+1;i<=r;++i)(i!=r||f)&&e.replaceRange(v+C,m(i,0))}else{var u=F(e.getCursor("to"),a)==0,h=!e.somethingSelected();e.replaceRange(l,a),u&&e.setSelection(h?a:e.getCursor("from"),a),e.replaceRange(c,t)}})}}),s.defineExtension("uncomment",function(t,a,n){n||(n=b);var e=this,g=j(e,t),c=Math.min(a.ch!=0||a.line==t.line?a.line:a.line-1,e.lastLine()),l=Math.min(t.line,c),r=n.lineComment||g.lineComment,C=[],f=n.padding==null?" ":n.padding,v;e:{if(!r)break e;for(var i=l;i<=c;++i){var u=e.getLine(i),h=u.indexOf(r);if(h>-1&&!/comment/.test(e.getTokenTypeAt(m(i,h+1)))&&(h=-1),h==-1&&d.test(u)||h>-1&&d.test(u.slice(0,h)))break e;C.push(u)}if(e.operation(function(){for(var L=l;L<=c;++L){var p=C[L-l],x=p.indexOf(r),k=x+r.length;x<0||(p.slice(k,k+f.length)==f&&(k+=f.length),v=!0,e.replaceRange("",m(L,x),m(L,k)))}}),v)return!0}var o=n.blockCommentStart||g.blockCommentStart,S=n.blockCommentEnd||g.blockCommentEnd;if(!o||!S)return!1;var W=n.blockCommentLead||g.blockCommentLead,E=e.getLine(l),_=E.indexOf(o);if(_==-1)return!1;var I=c==l?E:e.getLine(c),y=I.indexOf(S,c==l?_+o.length:0),z=m(l,_+1),B=m(c,y+1);if(y==-1||!/comment/.test(e.getTokenTypeAt(z))||!/comment/.test(e.getTokenTypeAt(B))||e.getRange(z,B,`
`).indexOf(S)>-1)return!1;var R=E.lastIndexOf(o,t.ch),T=R==-1?-1:E.slice(0,t.ch).indexOf(S,R+o.length);if(R!=-1&&T!=-1&&T+S.length!=t.ch)return!1;T=I.indexOf(S,a.ch);var D=I.slice(a.ch).lastIndexOf(o,T-a.ch);return R=T==-1||D==-1?-1:a.ch+D,T!=-1&&R!=-1&&R!=a.ch?!1:(e.operation(function(){e.replaceRange("",m(c,y-(f&&I.slice(y-f.length,y)==f?f.length:0)),m(c,y+S.length));var L=_+o.length;if(f&&E.slice(L,L+f.length)==f&&(L+=f.length),e.replaceRange("",m(l,_),m(l,L)),W)for(var p=l+1;p<=c;++p){var x=e.getLine(p),k=x.indexOf(W);if(!(k==-1||d.test(x.slice(0,k)))){var P=k+W.length;f&&x.slice(P,P+f.length)==f&&(P+=f.length),e.replaceRange("",m(p,k),m(p,P))}}}),!0)})})})();var J=w.exports,U=q({__proto__:null,default:J},[w.exports]);export{U as c};
