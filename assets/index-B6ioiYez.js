import{u as p,r as i,j as e,t as x,I as C,P as h,b as B,s as S}from"./index-C64FoTvw.js";import{I as T,a as D,c as P}from"./icon_arrow_right-CSVMocAI.js";const z=p.div``,R=p.div`
  position: relative;
  > .pictures {
    display: flex;
    height: 600px;
    background: #000;
    /* 排他 */
    &:hover {
      .cover {
        opacity: 1 !important;
      }

      .item:hover {
        .cover {
          opacity: 0 !important;
        }
      }
    }
  }

  .left,
  .right {
    width: 50%;
    height: 100%;

    .item {
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: transform 0.3s ease-in;
      }

      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 200ms ease;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      height: 50%;
      box-sizing: border-box;
      border: 1px solid #000;
    }
  }
  .show-btn {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    line-height: 22px;
    padding: 6px 15px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  }
`,U=p.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #333;
  opacity: 1;
  display: flex;
  flex-direction: column;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      z-index: 9;
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
    }
  }

  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${l=>l.showlist?"67px":"0"};

        .item {
          margin-right: 15px;
          cursor: pointer;
          img {
            height: 67px;
            opacity: 0.5;
          }
          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`,f=i.memo(()=>e.jsx("svg",{viewBox:"0 0 24 24",role:"img","aria-hidden":"false","aria-label":"关闭",focusable:"false",style:x("height: 2em; width: 2em; display: block; fill: rgb(255, 255, 255);"),children:e.jsx("path",{d:"m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22",fillRule:"evenodd"})}));f.displayName="IconClose";const g=i.memo(()=>e.jsx("svg",{viewBox:"0 0 24 24",role:"presentation","aria-hidden":"true",focusable:"false",style:x("height: 10px; width: 10px; fill: currentcolor;"),children:e.jsx("path",{d:"m23.85 6.86-11.5 11a .5.5 0 0 1 -.69 0l-11.5-11a .5.5 0 0 1 .34-.86h23a .5.5 0 0 1 .35.86z",fillRule:"evenodd"})}));g.displayName="IconTriangleBottom";const v=i.memo(()=>e.jsx("svg",{viewBox:"0 0 24 24",role:"presentation","aria-hidden":"true",focusable:"false",style:x("height: 10px; width: 10px; fill: currentcolor;"),children:e.jsx("path",{d:"m23.96 17.69a.5.5 0 0 1 -.46.31h-23a .5.5 0 0 1 -.35-.86l11.5-11a .5.5 0 0 1 .69 0l11.5 11a .5.5 0 0 1 .12.55z",fillRule:"evenodd"})}));v.displayName="IconTriangleTop";const j=i.memo(function(n){const{pictureUrls:s,closeClick:c}=n,[t,a]=i.useState(0),[y,m]=i.useState(!1),[d,N]=i.useState(!0);i.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]);function I(){c&&c()}function u(o){let r=o?t+1:t-1;r<0&&(r=s.length-1),r>=s.length&&(r=0),a(r),m(o)}function k(o){a(o),m(o>t)}return e.jsxs(U,{showlist:d,children:[e.jsx("div",{className:"top",children:e.jsx("div",{className:"close-btn",onClick:I,children:e.jsx(f,{})})}),e.jsxs("div",{className:"slider",children:[e.jsxs("div",{className:"control",children:[e.jsx("div",{className:"btn left",onClick:()=>u(!1),children:e.jsx(T,{width:77,height:77})}),e.jsx("div",{className:"btn right",onClick:()=>u(!0),children:e.jsx(D,{width:77,height:77})})]}),e.jsx("div",{className:"picture",children:e.jsx("img",{src:s[t],alt:""})})]}),e.jsx("div",{className:"preview",children:e.jsxs("div",{className:"info",children:[e.jsxs("div",{className:"desc",children:[e.jsxs("div",{className:"count",children:[e.jsxs("span",{children:[t+1,"/",s.length,":"]}),e.jsxs("span",{children:["room apartment ",t+1]})]}),e.jsxs("div",{className:"toggle",onClick:()=>N(!d),children:[e.jsxs("span",{children:[d?"Hide":"Show"," List"]}),d?e.jsx(g,{}):e.jsx(v,{})]})]}),e.jsx("div",{className:"list",children:e.jsx(C,{selectIndex:t,isNext:y,children:s.map((o,r)=>e.jsx("div",{className:P("item",{active:t===r}),onClick:()=>k(r),children:e.jsx("img",{src:o,alt:""})},o))})})]})})]})});j.propTypes={pictureUrls:h.array,closeClick:h.func};const w=i.memo(function(n){const{pictureUrls:s}=n,[c,t]=i.useState(!1);return e.jsxs(R,{children:[e.jsxs("div",{className:"pictures",children:[e.jsx("div",{className:"left",children:e.jsxs("div",{className:"item",onClick:()=>t(!0),children:[e.jsx("img",{src:s[0],alt:""}),e.jsx("div",{className:"cover"})]})}),e.jsx("div",{className:"right",children:s.slice(1,5).map(a=>e.jsxs("div",{className:"item",onClick:()=>t(!0),children:[e.jsx("img",{src:a,alt:""}),e.jsx("div",{className:"cover"})]},a))})]}),e.jsx("div",{className:"show-btn",onClick:()=>t(!0),children:"Show Picture"}),c&&e.jsx(j,{pictureUrls:s,closeClick:()=>t(!1)})]})});w.propTypes={pictureUrls:h.array};const E=p.div``,b=i.memo(()=>e.jsx(E,{children:"Detail Info"}));b.displayName="DetailInfo";const H=i.memo(()=>{const{detailInfo:l}=B(n=>({detailInfo:n.detail.detailInfo}),S);return e.jsxs(z,{children:[e.jsx(w,{pictureUrls:l.picture_urls}),e.jsx(b,{})]})});H.displayName="Detail";export{H as default};
