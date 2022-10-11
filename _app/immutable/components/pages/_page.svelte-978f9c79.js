import{S as re,i as oe,s as ie,k as v,a as A,q as H,l as y,m as w,h as p,c as T,r as O,n as b,b as W,E as _,F as te,u as le,T as P,G as we,o as fe,I as K,Z as Ce,W as G,w as Y,e as ce,x as Z,y as Q,X,g as be,t as M,d as ke,f as R,z as U,Y as Ee,_ as De}from"../../chunks/paths-34b7d8a7.js";import{h as Ie,S as _e,C as Se,L as Ve,m as ze,t as de,i as Je,T as Ne,D as ue,W as Fe,c as Be,g as Pe,M as je}from"../../chunks/detector-698e2f7b.js";function Ae(r){let t,n,o,i,l,f,c,e,s,u,g,h,d,I,S,E=r[0].toFixed(2)+"",N,B,x;return{c(){t=v("div"),n=v("div"),o=v("select"),i=A(),l=v("select"),f=A(),c=v("select"),e=A(),s=v("div"),u=v("div"),g=v("div"),h=v("div"),d=H("Angle (in degree)"),I=A(),S=v("div"),N=H(E),this.h()},l(k){t=y(k,"DIV",{class:!0});var V=w(t);n=y(V,"DIV",{class:!0});var a=w(n);o=y(a,"SELECT",{class:!0}),w(o).forEach(p),i=T(a),l=y(a,"SELECT",{class:!0}),w(l).forEach(p),f=T(a),c=y(a,"SELECT",{class:!0}),w(c).forEach(p),a.forEach(p),e=T(V),s=y(V,"DIV",{class:!0});var C=w(s);u=y(C,"DIV",{class:!0});var j=w(u);g=y(j,"DIV",{class:!0});var z=w(g);h=y(z,"DIV",{class:!0});var L=w(h);d=O(L,"Angle (in degree)"),L.forEach(p),I=T(z),S=y(z,"DIV",{class:!0});var $=w(S);N=O($,E),$.forEach(p),z.forEach(p),j.forEach(p),C.forEach(p),V.forEach(p),this.h()},h(){b(o,"class","select select-sm z-10"),b(l,"class","select select-sm z-10"),b(c,"class","select select-sm z-10"),b(n,"class","grid grid-cols-3 gap-4 p-4"),b(h,"class","stat-title"),b(S,"class","stat-value"),b(g,"class","stat place-items-center"),b(u,"class","stats shadow col-start-2 col-span-3 bg-primary opacity-70"),b(s,"class","grid grid-cols-5 gap-4 p-4 z-10"),b(t,"class","grid grid-flow-row-dense auto-rows-max gap-4 z-10")},m(k,V){W(k,t,V),_(t,n),_(n,o),r[6](o),_(n,i),_(n,l),r[7](l),_(n,f),_(n,c),r[8](c),_(t,e),_(t,s),_(s,u),_(u,g),_(g,h),_(h,d),_(g,I),_(g,S),_(S,N),B||(x=[te(o,"change",r[4]),te(l,"change",r[4]),te(c,"change",r[4])],B=!0)},p(k,[V]){V&1&&E!==(E=k[0].toFixed(2)+"")&&le(N,E)},i:P,o:P,d(k){k&&p(t),r[6](null),r[7](null),r[8](null),B=!1,we(x)}}}function Te(r,t,n){const o=Ie.getKeypointIndexByName(_e.BlazePose);let{selectedJoints:i}=t,{angle:l=0}=t,f,c,e;function s(){n(5,i=[c.value,f.value,e.value].map(d=>parseInt(d)))}fe(()=>{for(const d in o)f.appendChild(new Option(d,o[d].toString())),c.appendChild(new Option(d,o[d].toString())),e.appendChild(new Option(d,o[d].toString()))});function u(d){K[d?"unshift":"push"](()=>{f=d,n(1,f)})}function g(d){K[d?"unshift":"push"](()=>{c=d,n(2,c)})}function h(d){K[d?"unshift":"push"](()=>{e=d,n(3,e)})}return r.$$set=d=>{"selectedJoints"in d&&n(5,i=d.selectedJoints),"angle"in d&&n(0,l=d.angle)},[l,f,c,e,s,i,u,g,h]}class xe extends re{constructor(t){super(),oe(this,t,Te,Ae,ie,{selectedJoints:5,angle:0})}}function Le(r){let t;return{c(){t=v("div")},l(n){t=y(n,"DIV",{}),w(t).forEach(p)},m(n,o){W(n,t,o)},p:P,i:P,o:P,d(n){n&&p(t)}}}function We(r){let t,n,o,i,l,f,c,e=r[2].toFixed(2)+"",s;return{c(){t=v("div"),n=v("div"),o=v("div"),i=v("div"),l=H("Neck angle (in degree)"),f=A(),c=v("div"),s=H(e),this.h()},l(u){t=y(u,"DIV",{class:!0});var g=w(t);n=y(g,"DIV",{class:!0});var h=w(n);o=y(h,"DIV",{class:!0});var d=w(o);i=y(d,"DIV",{class:!0});var I=w(i);l=O(I,"Neck angle (in degree)"),I.forEach(p),f=T(d),c=y(d,"DIV",{class:!0});var S=w(c);s=O(S,e),S.forEach(p),d.forEach(p),h.forEach(p),g.forEach(p),this.h()},h(){b(i,"class","stat-title"),b(c,"class","stat-value"),b(o,"class","stat place-items-center"),b(n,"class","stats shadow col-start-2 col-span-3 bg-primary opacity-70"),b(t,"class","grid grid-cols-5 gap-4 p-4 py-16 z-10")},m(u,g){W(u,t,g),_(t,n),_(n,o),_(o,i),_(i,l),_(o,f),_(o,c),_(c,s)},p(u,g){g&4&&e!==(e=u[2].toFixed(2)+"")&&le(s,e)},i:P,o:P,d(u){u&&p(t)}}}function Ke(r){let t,n,o,i,l,f,c,e;return{c(){t=v("div"),n=v("div"),o=v("div"),i=v("div"),l=H("Current plane:"),f=A(),c=v("div"),e=H(r[6]),this.h()},l(s){t=y(s,"DIV",{class:!0});var u=w(t);n=y(u,"DIV",{class:!0});var g=w(n);o=y(g,"DIV",{class:!0});var h=w(o);i=y(h,"DIV",{class:!0});var d=w(i);l=O(d,"Current plane:"),d.forEach(p),f=T(h),c=y(h,"DIV",{class:!0});var I=w(c);e=O(I,r[6]),I.forEach(p),h.forEach(p),g.forEach(p),u.forEach(p),this.h()},h(){b(i,"class","stat-title"),b(c,"class","stat-value"),b(o,"class","stat place-items-center"),b(n,"class","stats shadow col-start-2 col-span-3 bg-primary opacity-70"),b(t,"class","grid grid-cols-5 gap-4 p-4 py-16 z-10")},m(s,u){W(s,t,u),_(t,n),_(n,o),_(o,i),_(i,l),_(o,f),_(o,c),_(c,e)},p(s,u){u&64&&le(e,s[6])},i:P,o:P,d(s){s&&p(t)}}}function Me(r){let t,n,o,i;function l(e){r[17](e)}function f(e){r[18](e)}let c={};return r[0]!==void 0&&(c.selectedJoints=r[0]),r[5]!==void 0&&(c.angle=r[5]),t=new xe({props:c}),K.push(()=>G(t,"selectedJoints",l)),K.push(()=>G(t,"angle",f)),{c(){Y(t.$$.fragment)},l(e){Z(t.$$.fragment,e)},m(e,s){Q(t,e,s),i=!0},p(e,s){const u={};!n&&s&1&&(n=!0,u.selectedJoints=e[0],X(()=>n=!1)),!o&&s&32&&(o=!0,u.angle=e[5],X(()=>o=!1)),t.$set(u)},i(e){i||(R(t.$$.fragment,e),i=!0)},o(e){M(t.$$.fragment,e),i=!1},d(e){U(t,e)}}}function Re(r){let t,n,o,i,l,f,c,e,s,u,g,h,d;Ce(r[13]);function I(a){r[14](a)}let S={class:"absolute h-full w-full top-0 bottom-0 left-0 right-0 bg-teal-100",height:r[4],width:r[3]};r[1]!==void 0&&(S.tpCamera=r[1]),t=new Se({props:S}),K.push(()=>G(t,"tpCamera",I)),t.$on("canvas-ready",r[10]);function E(a){r[15](a)}function N(a){r[16](a)}let B={};r[8]!==void 0&&(B.firstCond=r[8]),r[7]!==void 0&&(B.secondCond=r[7]),i=new Ve({props:B}),K.push(()=>G(i,"firstCond",E)),K.push(()=>G(i,"secondCond",N));const x=[Me,Ke,We,Le],k=[];function V(a,C){return a[9]===0?0:a[9]===1?1:a[9]===2?2:a[9]===3?3:-1}return~(e=V(r))&&(s=k[e]=x[e](r)),{c(){Y(t.$$.fragment),o=A(),Y(i.$$.fragment),c=A(),s&&s.c(),u=ce()},l(a){Z(t.$$.fragment,a),o=T(a),Z(i.$$.fragment,a),c=T(a),s&&s.l(a),u=ce()},m(a,C){Q(t,a,C),W(a,o,C),Q(i,a,C),W(a,c,C),~e&&k[e].m(a,C),W(a,u,C),g=!0,h||(d=te(window,"resize",r[13]),h=!0)},p(a,[C]){const j={};C&16&&(j.height=a[4]),C&8&&(j.width=a[3]),!n&&C&2&&(n=!0,j.tpCamera=a[1],X(()=>n=!1)),t.$set(j);const z={};!l&&C&256&&(l=!0,z.firstCond=a[8],X(()=>l=!1)),!f&&C&128&&(f=!0,z.secondCond=a[7],X(()=>f=!1)),i.$set(z);let L=e;e=V(a),e===L?~e&&k[e].p(a,C):(s&&(be(),M(k[L],1,1,()=>{k[L]=null}),ke()),~e?(s=k[e],s?s.p(a,C):(s=k[e]=x[e](a),s.c()),R(s,1),s.m(u.parentNode,u)):s=null)},i(a){g||(R(t.$$.fragment,a),R(i.$$.fragment,a),R(s),g=!0)},o(a){M(t.$$.fragment,a),M(i.$$.fragment,a),M(s),g=!1},d(a){U(t,a),a&&p(o),U(i,a),a&&p(c),~e&&k[e].d(a),a&&p(u),h=!1,d()}}}const He=2500;function Oe(r,t,n){let o,i,l;Ee(r,ze,m=>n(9,l=m));let f,c,e,s,u,g=0,h=!1,d,I;const S=_e.BlazePose;let E,N;const B=["aux_hip_center","aux_shoulder_center","left_heel","right_heel"],x=B.map(m=>new Fe(m,He));let k;async function V(m){const F=m.detail.size;let[J,D]=await de(Je(S,f,F));D&&([c,e]=D,n(12,h=!0))}function a(){return!E||!s?0:Be(s.keypoints[E[0]],s.keypoints[E[1]],s.keypoints[E[2]])}function C(){const m=u,[F,J,D,ne]=m.getKeypointsByName(["aux_shoulder_center","aux_torso_center","aux_head_center","right_shoulder"]),ee=m.auxNeck;let se=ee.subtract(J).angleTo(D.subtract(ee));const[q,ae,ve,ye]=Pe(F,ne,J);return se*=Math.sign(D.x*q+D.y*ae+D.z*ve+ye),se}function j(m){if(m===0)e.drawPose(s==null?void 0:s.keypoints,!1);else if(m===1)[["left_shoulder","right_shoulder"],["left_hip","right_hip"],["left_ear","right_ear"],["aux_head_center","aux_ankle_center",e.colors.white],["aux_head_center","left_eye",e.colors.left],["aux_head_center","right_eye",e.colors.right],["aux_shoulder_center","aux_neck"],["aux_shoulder_center","aux_head_center"],["aux_shoulder_center","aux_hip_center"],["aux_neck","aux_head_center"]].forEach(F=>{var J;e.drawConnectionByName(F[0],F[1],s.keypoints,(J=F[2])!=null?J:e.colors.primary)});else if(m===2){const[F,J,D,ne,ee,se]=s.getKeypointsByName(["aux_shoulder_center","aux_torso_center","aux_head_center","left_eye","right_eye","right_shoulder"]),q=s.auxNeck;[q,J,D].forEach(ae=>e.drawKeypoint({keypoint:ae})),e.drawConnection(q,J),e.drawConnection(q,D),e.drawConnection(ne,D,e.colors.left),e.drawConnection(ee,D,e.colors.right),e.drawConnection(D,s.auxBackHead)}else m===3&&(x.forEach(F=>F.draw(e.ctx)),e.drawKeypointsByName(s.keypoints,B))}const z=new Ne(30);fe(async()=>(z.start(async()=>{if(!f||(await f.waitForFrame(),f.drawCtx(),!(c!=null&&c.ready)))return;const m=e.getImage();s&&j(l);const[F,J]=await de(c.detectProcessed(m));J&&(n(11,[s,u]=J,s),l===3&&x.forEach(D=>D.updateByName(s)))}),()=>z.stop())),De(()=>{console.log("[PoseRender] destroy"),c==null||c.dispose(),z.destroy()});function L(){n(4,I=window.innerHeight),n(3,d=window.innerWidth)}function $(m){f=m,n(1,f)}function pe(m){o=m,n(8,o),n(12,h)}function ge(m){i=m,n(7,i),n(11,s)}function he(m){E=m,n(0,E)}function me(m){N=m,n(5,N),n(11,s),n(0,E)}return r.$$.update=()=>{r.$$.dirty&2049&&s&&E&&n(5,N=a()),r.$$.dirty&4096&&n(8,o=!h),r.$$.dirty&2048&&n(7,i=!s),r.$$.dirty&2048&&s&&n(2,g=C()),r.$$.dirty&2048&&s&&s.direction&&n(6,k=s.direction===ue.Front||s.direction===ue.Back?"Coronal":"Sagittal")},[E,f,g,d,I,N,k,i,o,l,V,s,h,L,$,pe,ge,he,me]}class qe extends re{constructor(t){super(),oe(this,t,Oe,Re,ie,{})}}function Ge(r){let t,n,o,i;return t=new qe({}),o=new je({props:{modes:[{text:"skeleton & angle",value:0},{text:"Coronal/Sagittal Planes",value:1},{text:"Neck",value:2},{text:"Gait",value:3}]}}),{c(){Y(t.$$.fragment),n=A(),Y(o.$$.fragment)},l(l){Z(t.$$.fragment,l),n=T(l),Z(o.$$.fragment,l)},m(l,f){Q(t,l,f),W(l,n,f),Q(o,l,f),i=!0},p:P,i(l){i||(R(t.$$.fragment,l),R(o.$$.fragment,l),i=!0)},o(l){M(t.$$.fragment,l),M(o.$$.fragment,l),i=!1},d(l){U(t,l),l&&p(n),U(o,l)}}}class Ze extends re{constructor(t){super(),oe(this,t,null,Ge,ie,{})}}export{Ze as default};