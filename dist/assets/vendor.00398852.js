function j(){}function A(t){return t()}function S(){return Object.create(null)}function a(t){t.forEach(A)}function O(t){return typeof t=="function"}function K(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function M(t){return Object.keys(t).length===0}function Q(t,n){t.appendChild(n)}function R(t,n,e){t.insertBefore(n,e||null)}function T(t){t.parentNode.removeChild(t)}function U(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function W(){return q(" ")}function X(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function Y(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function z(t){return Array.from(t.childNodes)}function Z(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function tt(t,n){t.value=n==null?"":n}function nt(t,n,e){t.classList[e?"add":"remove"](n)}let l;function d(t){l=t}function B(){if(!l)throw new Error("Function called outside component initialization");return l}function et(t){B().$$.on_mount.push(t)}const _=[],C=[],h=[],L=[],F=Promise.resolve();let y=!1;function P(){y||(y=!0,F.then(N))}function x(t){h.push(t)}const b=new Set;let m=0;function N(){const t=l;do{for(;m<_.length;){const n=_[m];m++,d(n),D(n.$$)}for(d(null),_.length=0,m=0;C.length;)C.pop()();for(let n=0;n<h.length;n+=1){const e=h[n];b.has(e)||(b.add(e),e())}h.length=0}while(_.length);for(;L.length;)L.pop()();y=!1,b.clear(),d(t)}function D(t){if(t.fragment!==null){t.update(),a(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const p=new Set;let i;function ot(){i={r:0,c:[],p:i}}function rt(){i.r||a(i.c),i=i.p}function G(t,n){t&&t.i&&(p.delete(t),t.i(n))}function st(t,n,e,r){if(t&&t.o){if(p.has(t))return;p.add(t),i.c.push(()=>{p.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function ut(t){t&&t.c()}function H(t,n,e,r){const{fragment:s,on_mount:g,on_destroy:f,after_update:$}=t.$$;s&&s.m(n,e),r||x(()=>{const c=g.map(A).filter(O);f?f.push(...c):a(c),t.$$.on_mount=[]}),$.forEach(x)}function I(t,n){const e=t.$$;e.fragment!==null&&(a(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function J(t,n){t.$$.dirty[0]===-1&&(_.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ct(t,n,e,r,s,g,f,$=[-1]){const c=l;d(t);const o=t.$$={fragment:null,ctx:null,props:g,update:j,not_equal:s,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:S(),dirty:$,skip_bound:!1,root:n.target||c.$$.root};f&&f(o.root);let w=!1;if(o.ctx=e?e(t,n.props||{},(u,v,...E)=>{const k=E.length?E[0]:v;return o.ctx&&s(o.ctx[u],o.ctx[u]=k)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](k),w&&J(t,u)),v}):[],o.update(),w=!0,a(o.before_update),o.fragment=r?r(o.ctx):!1,n.target){if(n.hydrate){const u=z(n.target);o.fragment&&o.fragment.l(u),u.forEach(T)}else o.fragment&&o.fragment.c();n.intro&&G(t.$$.fragment),H(t,n.target,n.anchor,n.customElement),N()}d(c)}class it{$destroy(){I(this,1),this.$destroy=j}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}$set(n){this.$$set&&!M(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{it as S,Y as a,R as b,W as c,T as d,V as e,nt as f,Q as g,Z as h,ct as i,U as j,tt as k,X as l,ut as m,j as n,et as o,H as p,G as q,a as r,K as s,q as t,st as u,I as v,rt as w,ot as x};