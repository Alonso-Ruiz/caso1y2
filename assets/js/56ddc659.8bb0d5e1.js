"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[600],{3284:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7624),i=r(2172);const o={sidebar_position:5},t="Tutorial del Facturador - Docker | Linux | SSL externo",s={id:"Guia de instalacion/deploy-your-site",title:"Tutorial del Facturador - Docker | Linux | SSL externo",description:"Instalacion del Facturador - Docker | Linux | SSL externo",source:"@site/docs/Guia de instalacion/deploy-your-site.md",sourceDirName:"Guia de instalacion",slug:"/Guia de instalacion/deploy-your-site",permalink:"/caso1y2/docs/Guia de instalacion/deploy-your-site",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Guia de instalacion/deploy-your-site.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Tutorial de Instalacion - Linux | Valet",permalink:"/caso1y2/docs/Guia de instalacion/create-a-blog-post"}},c={},l=[{value:"Pasos",id:"pasos",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"tutorial-del-facturador---docker--linux--ssl-externo",children:"Tutorial del Facturador - Docker | Linux | SSL externo"}),"\n",(0,a.jsx)(n.p,{children:"Instalacion del Facturador - Docker | Linux | SSL externo"}),"\n",(0,a.jsx)(n.h2,{id:"pasos",children:"Pasos"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:'Para realizar la instalaci\xf3n, ejecute el script evitando la instalaci\xf3n del SSL. Le ser\xe1 consultado durante el proceso, y deber\xe1 ingresar "n".'}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"2.Finalizada la instalaci\xf3n, dir\xedjase a la ruta de instalaci\xf3n:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cd /root/facturadorpro31/\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["debe editar el archivo ",(0,a.jsx)(n.code,{children:".env"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"nano .env\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"dentro del editor ubicar los par\xe1metros y cambiarlos"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u2022 Antes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"APP_URL=http://${APP_URL_BASE}\nFORCE_HTTPS=false\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u2022 Despues:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"APP_URL=https://${APP_URL_BASE}\nFORCE_HTTPS=true\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"una vez finalizado, guarde y salga del editor"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"ejecute los siguientes comandos para eliminar la cach\xe9 de la aplicaci\xf3n"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"php artisan config:cache\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsx)(n.li,{children:"con eso habr\xe1 completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podr\xe1 acceder a la herramienta"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Importante:"})," Recuerde habilitar el puerto 443 para poder tener acceso a la herramienta."]})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2172:(e,n,r)=>{r.d(n,{I:()=>s,M:()=>t});var a=r(1504);const i={},o=a.createContext(i);function t(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);