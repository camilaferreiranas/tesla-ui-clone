(this["webpackJsonphome-page-tesla"]=this["webpackJsonphome-page-tesla"]||[]).push([[0],{56:function(e,n,t){"use strict";t.r(n);var r,o,c,i,l,s=t(1),a=t.n(s),d=t(39),u=t.n(d),b=t(6),j=t(7),f=j.b.div(r||(r=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1;\n"]))),h=j.b.div(o||(o=Object(b.a)(["\n    margin-top: 16.5vh;\n    text-align: center;\n \n    >h1 {\n        font-weight: 500;\n        font-size: 40px;\n        line-height: 48px;\n        color: #393939;\n\n    }\n\n    >h2 {\n        font-weight: normal;\n        font-size: 14px;\n        line-height: 20px;\n        color: #5c5e62;\n    }\n"]))),p=j.b.div(c||(c=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 130px;\n  >button {\n      background: #1a1720;\n      color: #fff;\n      opacity: 0.8;\n      font-size: 12px;\n      font-weight: 500;\n      letter-spacing: 0.4px;\n      text-transform: uppercase;\n      padding: 13px 40px;\n      border-radius: 20px;\n      border: none;\n      outline: 0;\n      cursor: pointer;\n      &.white {\n          background: #fff;\n          color: #1a1720;\n          opacity: 0.65;\n       \n      }\n\n      & + button {\n              margin: 10px 0 0;\n        }\n  }\n\n  @media (min-width: 600px) {\n      flex-direction: row;\n      margin-bottom: 90px;\n\n      > button + button  {\n          margin: 0 0 0 10px;\n      }\n  }\n"]))),O=t(2),g=function(e){var n=e.label,t=e.description;return Object(O.jsxs)(f,{children:[Object(O.jsxs)(h,{children:[Object(O.jsx)("h1",{children:n}),Object(O.jsx)("h2",{children:t})]}),Object(O.jsxs)(p,{children:[Object(O.jsx)("button",{children:"Custom Order"}),Object(O.jsx)("button",{className:"white",children:"Existing Inventory"})]})]})},x=t(45),m=t(28),v=a.a.createContext({}),w=j.b.div(i||(i=Object(b.a)(["\n    height: 100vh;\n    scroll-snap-type: y mandatory;\n    overflow-y: scroll;\n"]))),y=j.b.div(l||(l=Object(b.a)(["\n    position: sticky;\n    top: 0; \n    left: 0;\n    right: 0;\n    bottom: 0;\n"]))),k=t(58),M=t(43);function E(){var e=Object(s.useContext)(v).wrapperRef,n=Object(M.a)(0),t=Object(M.a)(0);return Object(s.useEffect)((function(){var r=e.current;if(r){var o=function(){if(r){var e=r.scrollTop,o=r.scrollHeight-r.offsetHeight;n.set(e),t.set(e/o)}};return r.addEventListener("scroll",o),function(){return null===r||void 0===r?void 0:r.removeEventListener("scroll",o)}}}),[n,t,e]),{scrollY:n,scrollYProgress:t}}var N,C,R=t(57),S=Object(j.b)(R.a.div)(N||(N=Object(b.a)(["\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  margin-top: -100vh;\n  z-index: 999;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),z=function(e){var n=e.model,t=e.children,r=E().scrollY,o=Object(s.useCallback)((function(){var e,t,r,o;return{offsetTop:null!==(e=null===(t=n.sectionRef.current)||void 0===t?void 0:t.offsetTop)&&void 0!==e?e:0,offsetHeight:null!==(r=null===(o=n.sectionRef.current)||void 0===o?void 0:o.offsetHeight)&&void 0!==r?r:0}}),[n.sectionRef]),c=Object(s.useState)(o()),i=Object(m.a)(c,2),l=i[0],a=i[1];Object(s.useLayoutEffect)((function(){function e(){window.requestAnimationFrame((function(){return a(o())}))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[o,n.sectionRef]);var d=Object(k.a)(r,(function(e){return(e-l.offsetTop)/l.offsetHeight})),u=Object(k.a)(d,[-.42,-.05,.05,.42],[0,1,1,0]),b=Object(k.a)(u,(function(e){return e>0?"auto":"none"}));return Object(O.jsx)(S,{style:{opacity:u,pointerEvents:b},children:t})},A=function(e){var n=e.children,t=Object(s.useRef)(null),r=Object(s.useState)([]),o=Object(m.a)(r,2),c=o[0],i=o[1],l=Object(s.useCallback)((function(e){i((function(n){return[].concat(Object(x.a)(n),[e])}))}),[]),a=Object(s.useCallback)((function(e){i((function(n){return n.filter((function(n){return n.modelName!==e}))}))}),[]),d=Object(s.useCallback)((function(e){return c.find((function(n){return n.modelName===e}))||null}),[]);return Object(O.jsx)(v.Provider,{value:{wrapperRef:t,registerModel:l,registeredModels:c,unregisterModel:a,getModelByName:d},children:Object(O.jsxs)(w,{ref:t,children:[Object(O.jsx)(y,{children:c.map((function(e){return Object(O.jsx)(z,{model:e,children:e.overlayNode},e.modelName)}))}),n]})})},H=t(20),L=t(46);var T,_,D,I,P,Y,B,F=j.b.div(C||(C=Object(b.a)(["\n    height: 100vh;\n    scroll-snap-align: start;\n"]))),G=function(e){var n=e.modelName,t=e.overlayNode,r=e.children,o=Object(L.a)(e,["modelName","overlayNode","children"]),c=function(e){var n=Object(s.useContext)(v),t=n.registerModel,r=n.unregisterModel,o=n.getModelByName;return Object(s.useEffect)((function(){return function(){return r(e)}}),[e,r]),{registerModel:t,getModel:Object(s.useCallback)((function(){return o(e)}),[o,e])}}(n).registerModel,i=Object(s.useRef)(null);return Object(s.useEffect)((function(){i.current&&c({modelName:n,overlayNode:t,sectionRef:i})}),[]),Object(O.jsx)(F,Object(H.a)(Object(H.a)({ref:i},o),{},{children:r}))},J=t.p+"static/media/logo.80ca6b5c.svg",X=j.b.div(T||(T=Object(b.a)(["\n    position: sticky;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n"]))),q=j.b.header(_||(_=Object(b.a)(["\n position: fixed;\n top: 0;\n left: 0;\n right: 0;\n display: flex;\n align-items: center;\n justify-content: space-between;\n padding: 0 20px;\n min-height: 52px;\n"]))),U=Object(j.b)((function(e){Object.assign({},e);return Object(O.jsx)("img",{src:J,alt:""})}))(D||(D=Object(b.a)(["\n    height: 20px;\n    cursor: pointer;\n"]))),K=Object(j.b)(R.a.footer)(I||(I=Object(b.a)(["\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    ul {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n    }\n\n    li {\n        list-style-type: none;\n        font-size: 14px;\n        & + li  {\n            margin: 10px 0 0;\n        }\n    }\n\n    a {\n        text-decoration: none;\n        color: #393c41;\n        font-weight: 600;\n\n        &:hover{\n            color: #000;\n        }\n    }\n\n    margin-bottom: 30px;\n\n    @media (min-width: 600px) {\n        margin-bottom: 38px;\n        ul {\n            flex-direction: row;\n            li + li  {\n                margin: 0 0 0 30px;\n            }\n        }\n    }\n"]))),Q=Object(j.b)((function(e){var n=Object.assign({},e);return Object(O.jsx)("svg",Object(H.a)(Object(H.a)({viewBox:"0 0 45 30",fill:"none"},n),{},{children:Object(O.jsx)("path",{fill:"#000",d:"M0 0h45v5H0zM0 25h45v5H0zM0 13h45v5H0z"})}))}))(P||(P=Object(b.a)(["\n width: 24px;\n height: 24px;\n cursor: pointer;\n padding-right: 5px;\n"]))),V=function(){var e=E().scrollYProgress,n=Object(k.a)(e,[.9,1],[0,1]);return Object(O.jsxs)(X,{children:[Object(O.jsxs)(q,{children:[Object(O.jsx)(U,{}),Object(O.jsx)(Q,{})]}),Object(O.jsx)(K,{style:{opacity:n},children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Tesla UI Clone"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"feito por"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://github.com/camilaferreiranas",children:"Camila Ferreira"})})]})})]})},W=j.b.div(Y||(Y=Object(b.a)([" \n  .colored:nth-child(1) {\n    /**Alterar para imagens */\n    background: url('https://directimports.com.br/wp-content/uploads/2021/09/Tesla-Model-S-13.jpg') no-repeat center\n  }\n  .colored:nth-child(2) {\n    background: url('https://autofocus.mk/wp-content/uploads/2021/01/blue-model-y-tesla-1800x1125.jpg') no-repeat center;\n  }\n  .colored:nth-child(3) {\n    background: url('https://www.tesla.com/sites/default/files/model3-new/social/model-3-hero-social.jpg') no-repeat center;\n  }\n  .colored:nth-child(4) {\n    background: url('https://www.planetcarsz.com/assets/uploads/TESLA%20MODEL%20X%202021%2001.jpg') no-repeat center;\n   \n  }\n  .colored:nth-child(5) {\n    background: url('https://www.tesla.com/sites/default/files/energy-page/energy-solar/D-solarroof.jpg') no-repeat center;\n  }\n  .colored:nth-child(6) {\n    background: url('https://www.tesla.com/sites/default/files/solarroof/v3/design/solar-roof_design_D.jpg') no-repeat center;\n  }\n  .colored:nth-child(7) {\n    background: url('https://www.tesla.com/ns_videos/commerce/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_0.jpg') no-repeat center;\n  }\n"]))),Z=j.b.div(B||(B=Object(b.a)(["\n  height: 15vh;\n  background: #88898a;\n"])));var $,ee=function(){return Object(O.jsx)(W,{children:Object(O.jsxs)(A,{children:[Object(O.jsx)("div",{children:["Model S","Model Y","Model 3","Model X","Solar Panel","Solar Roof","Accessories"].map((function(e){return Object(O.jsx)(G,{className:"colored",modelName:e,overlayNode:Object(O.jsx)(g,{label:e,description:"Order Online for Delivery"})},e)}))}),Object(O.jsx)(Z,{}),Object(O.jsx)(V,{})]})})},ne=Object(j.a)($||($=Object(b.a)(["\n    * {\n        margin: 0; \n        padding: 0; \n        box-sizing: border-box;\n    }\n    *, input, button  {\n        font-family: 'Roboto', sans-serif;\n    }\n"])));var te=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ee,{}),Object(O.jsx)(ne,{})]})};u.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(te,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.88a89ba0.chunk.js.map