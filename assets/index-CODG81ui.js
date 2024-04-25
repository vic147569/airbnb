import{u as l,r as n,j as e,P as a,a as L,b as V,s as z,c as E,f as $}from"./index-DnDUboic.js";import{R as W}from"./index-CYQvXIVN.js";import{I as P,a as _,c as B}from"./icon_arrow_right-TcnA5DFL.js";const O=l.div`
  > .content {
    width: 1032px;
    margin: 0 auto;
  }
  > div {
    margin-top: 30px;
  }
`,A="/assets/cover_01-Cc5eTsrW.jpeg",F=l.div`
  height: 529px;
  background: url(${A}) center/cover;
`,H=n.memo(()=>e.jsx(F,{}));H.displayName="HomeBanner";const M=l.div`
  margin-top: 30px;
`,q=l.div`
  color: ${i=>i.theme.text.secondaryColor};
  .title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .subtitle {
    font-size: 16px;
    margin-bottom: 20px;
  }
`,g=n.memo(function(o){const{title:t,subtitle:s}=o;return e.jsxs(q,{children:[e.jsx("h2",{className:"title",children:t}),s&&e.jsx("div",{className:"subtitle",children:s})]})});g.propTypes={title:a.string,subtitle:a.string};const G=l.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
`,D=n.memo(function(o){const{roomList:t=[],itemWidth:s}=o;return e.jsx("div",{children:e.jsx(G,{children:t==null?void 0:t.slice(0,8).map(c=>e.jsx(W,{itemData:c,itemWidth:s},c.id))})})});D.propTypes={roomList:a.array,itemWidth:a.string};const J=l.div`
  display: flex;
  margin-top: 10px;

  .info {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    color: ${i=>i.color};

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
  }
`,I=n.memo(()=>e.jsx("svg",{viewBox:"0 0 18 18",role:"presentation","aria-hidden":"true",focusable:"false",style:{height:10,width:10,fill:"currentcolor"},children:e.jsx("path",{d:"m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z",fillRule:"evenodd"})}));I.displayName=I;const b=n.memo(function(o){const{name:t}=o;let s="More";t&&(s=`Show ${t}`);const c=L();function d(){c("/entire")}return e.jsx(J,{color:t?"#00848a":"#000",children:e.jsxs("div",{className:"info",onClick:d,children:[e.jsx("span",{className:"text",children:s}),e.jsx(I,{})]})})});b.propTypes={name:a.string};const S=n.memo(function(o){const{infoData:t}=o;return e.jsxs(M,{children:[e.jsx(g,{title:t.title,subtitle:t.subtitle}),e.jsx(D,{roomList:t.list,itemWidth:"25%"}),e.jsx(b,{})]})});S.propTypes={infoData:a.object};const K=l.div`
  margin-top: 30px;
`,Q=l.div`
  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap;
    cursor: pointer;

    ${i=>i.theme.mixin.boxShadow}

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${i=>i.theme.color.secondaryColor};
    }
  }
`,U=l.div`
  position: relative;
  padding: 8px 0;

  .scroll {
    overflow: hidden;
    .scroll-content {
      display: flex;
      transition: transform 500ms ease;
    }
  }

  .control {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`,v=n.memo(function(o){const[t,s]=n.useState(!1),[c,d]=n.useState(!1),[p,r]=n.useState(0),m=n.useRef(),f=n.useRef();n.useEffect(()=>{const u=f.current.scrollWidth,j=f.current.clientWidth,y=u-j;m.current=y,d(y>0)},[o.children]);function h(u){const j=u?p+1:p-1,w=f.current.children[j].offsetLeft;f.current.style.transform=`translate(-${w}px)`,r(j),s(w>0),d(m.current>w)}return e.jsxs(U,{children:[t&&e.jsx("div",{className:"control left",onClick:()=>h(!1),children:e.jsx(P,{})}),c&&e.jsx("div",{className:"control right",onClick:()=>h(!0),children:e.jsx(_,{})}),e.jsx("div",{className:"scroll",children:e.jsx("div",{className:"scroll-content",ref:f,children:o.children})})]})});v.propTypes={children:a.any};const k=n.memo(function(o){const{tabNames:t=[],tabClick:s}=o,[c,d]=n.useState(0);function p(r,m){d(r),s(r,m)}return e.jsx(Q,{children:e.jsx(v,{children:t.map((r,m)=>e.jsx("div",{className:B("item",{active:m===c}),onClick:()=>p(m,r),children:r},r))})})});k.propTypes={tabNames:a.array,tabClick:a.func};const N=n.memo(function(o){var m,f;const{infoData:t}=o,s=Object.keys(t.dest_list)[0],[c,d]=n.useState(s),p=(m=t.dest_address)==null?void 0:m.map(h=>h.name),r=n.useCallback((h,u)=>{d(u)},[]);return e.jsxs(K,{children:[e.jsx(g,{title:t.title,subtitle:t.subtitle}),e.jsx(k,{tabNames:p,tabClick:r}),e.jsx(D,{roomList:(f=t.dest_list)==null?void 0:f[c],itemWidth:"33.33%"}),e.jsx(b,{name:c})]})});N.propTypes={infoData:a.object};function x(i){return!!Object.keys(i).length}const X=l.div`
  margin-top: 30px;
  .longfor-list {
    display: flex;
    margin: 0 -8px;
  }
`,Y=l.div`
  flex-shrink: 0;
  width: 20%;
  /* margin: 0 -8px; */

  .inner {
    position: relative;
    padding: 8px;
    overflow: hidden;
    .item-info {
      position: relative;
      border-radius: 3px;
      overflow: hidden;
    }
  }
  .cover {
    width: 100%;
  }
  .bg-cover {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60%;
    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
  }
  .info {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px 32px;
    color: #fff;

    .city {
      font-size: 18px;
      font-weight: 600;
    }
    .price {
      font-size: 14px;
      margin-top: 5px;
    }
  }
`,C=n.memo(function(o){const{itemData:t}=o;return e.jsx(Y,{children:e.jsx("div",{className:"inner",children:e.jsxs("div",{className:"item-info",children:[e.jsx("img",{className:"cover",src:t.picture_url,alt:""}),e.jsx("div",{className:"bg-cover"}),e.jsxs("div",{className:"info",children:[e.jsx("div",{className:"city",children:t.city}),e.jsx("div",{className:"price",children:t.price})]})]})})})});C.propTypes={itemData:a.object};const T=n.memo(function(o){const{infoData:t}=o;return e.jsxs(X,{children:[e.jsx(g,{title:t.title,subtitle:t.subtitle}),e.jsx("div",{className:"longfor-list",children:e.jsx(v,{children:t.list.map(s=>e.jsx(C,{itemData:s},s.city))})})]})});T.propTypes={infoData:a.object};const Z=l.div`
  .room-list {
    margin: 0 -8px;
  }
`,R=n.memo(function(o){const{infoData:t}=o;return e.jsxs(Z,{children:[e.jsx(g,{title:t.title,subtitle:t.subtitle}),e.jsx("div",{className:"room-list",children:e.jsx(v,{children:t.list.map(s=>e.jsx(W,{itemData:s,itemWidth:"20%"},s.id))})}),e.jsx(b,{name:"plus"})]})});R.propTypes={infoData:a.object};const ee=n.memo(()=>{const{goodPriceInfo:i,highScoreInfo:o,discountInfo:t,recommendInfo:s,longforInfo:c,plusInfo:d}=V(r=>({goodPriceInfo:r.home.goodPriceInfo,highScoreInfo:r.home.highScoreInfo,discountInfo:r.home.discountInfo,recommendInfo:r.home.recommendInfo,longforInfo:r.home.longforInfo,plusInfo:r.home.plusInfo}),z),p=E();return n.useEffect(()=>{p($())},[p]),e.jsxs(O,{children:[e.jsx(H,{}),e.jsxs("div",{className:"content",children:[x(t)&&e.jsx(N,{infoData:t}),x(s)&&e.jsx(N,{infoData:s}),x(c)&&e.jsx(T,{infoData:c}),x(i)&&e.jsx(S,{infoData:i}),x(o)&&e.jsx(S,{infoData:o}),x(d)&&e.jsx(R,{infoData:d})]})]})});ee.displayName="Home";export{ee as Home,ee as default};
