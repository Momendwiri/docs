"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5561],{64440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(85893),a=t(11151);t(77229),t(42352),t(74866),t(85162);const l={id:"frontend-components",title:"Integrating Components"},o=void 0,s={id:"develop/integrate/frontend-components",title:"Integrating Components",description:"To integrate Components to your frontend, you will leverage two tools:",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.develop/integrate/frontend-components.md",sourceDirName:"2.develop/integrate",slug:"/develop/integrate/frontend-components",permalink:"/ko/develop/integrate/frontend-components",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/integrate/frontend-components.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1705334457,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 15\uc77c",frontMatter:{id:"frontend-components",title:"Integrating Components"},sidebar:"integrate",previous:{title:"Integrating Contracts",permalink:"/ko/develop/integrate/frontend"},next:{title:"NEAR \uc22b\uc790 \uc138\uae30",permalink:"/ko/tutorials/examples/count-near"}},i={},c=[{value:"Adding the VM &amp; Wallet Selector",id:"adding-the-vm--wallet-selector",level:2},{value:"Setup the VM",id:"setup-the-vm",level:2},{value:"Setup the Wallet Selector",id:"setup-the-wallet-selector",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["To integrate ",(0,r.jsx)(n.a,{href:"/ko/bos/tutorial/quickstart",children:"Components"})," to your frontend, you will leverage two tools:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Wallet Selector"}),": Enables the user to select their preferred NEAR wallet in your dApp."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NEAR VM"}),": A package that can retrieve the component's code from the blockchain and execute it in the browser."]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"Using those tools you will implement the following flow:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Setup"})," the VM."]}),"\n",(0,r.jsxs)(n.li,{children:["Render components using the ",(0,r.jsx)(n.code,{children:"Widget"})," component in the VM."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Setup"})," a wallet selector so users can interact with the Menu."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"adding-the-vm--wallet-selector",children:"Adding the VM & Wallet Selector"}),"\n",(0,r.jsxs)(n.p,{children:["To use the ",(0,r.jsx)(n.code,{children:"VM"})," and the ",(0,r.jsx)(n.code,{children:"wallet-selector"}),", you must add them to your project first."]}),"\n",(0,r.jsxs)(n.p,{children:["The wallet selector has multiple wallet packages to select from. ",(0,r.jsx)(n.a,{href:"https://github.com/near/wallet-selector#installation-and-usage",children:"Check their website"})," for more information."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install \\\n  @near-wallet-selector/core \\\n  @near-wallet-selector/my-near-wallet \\\n  @near-wallet-selector/modal-ui\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, manually add the ",(0,r.jsx)(n.code,{children:"VM"})," to your ",(0,r.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'"dependencies": {\n  ...\n  "near-social-vm": "github:NearSocial/VM#2.5.5"\n  ...\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Check the latest released version for the VM ",(0,r.jsx)(n.a,{href:"https://github.com/NearSocial/VM/releases",children:"here"})]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"setup-the-vm",children:"Setup the VM"}),"\n",(0,r.jsxs)(n.p,{children:["To render components, you need to import the ",(0,r.jsx)(n.code,{children:"useInitNear"})," hook from the ",(0,r.jsx)(n.code,{children:"near-social-vm"})," package, as well as the ",(0,r.jsx)(n.code,{children:"Widget"})," component."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { useInitNear, Widget } from 'near-social-vm';\nimport { useEffect } from 'react';\n\nexport default function Component({ src }) {\n  const { initNear } = useInitNear();\n\n  useEffect(() => {\n    initNear && initNear({ networkId: 'testnet', selector: null });\n  }, [initNear]);\n\n  return <Widget src={src} />;\n}\n\nreturn <Component src=\"influencer.testnet/widget/Greeter\" props={{name: \"Anna\", amount: 2}} />\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Notice that the VM is inherently linked to ",(0,r.jsx)(n.code,{children:"React"}),", so you will need to use a reactive framework to take full advantage of the VM."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"setup-the-wallet-selector",children:"Setup the Wallet Selector"}),"\n",(0,r.jsx)(n.p,{children:"While the VM allows you to render components, you need to set up a wallet selector to allow users to interact with the components."}),"\n",(0,r.jsxs)(n.p,{children:["To instantiate a ",(0,r.jsx)(n.code,{children:"Wallet Selector"}),", simply import all the wallets you want your users to have access to, and the setup method from the ",(0,r.jsx)(n.code,{children:"near-wallet-selector"})," package."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import '@near-wallet-selector/modal-ui/styles.css';\nimport { setupModal } from '@near-wallet-selector/modal-ui';\nimport { setupWalletSelector } from '@near-wallet-selector/core';\nimport { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';\n\nconst selector = setupWalletSelector({\n  network: 'testnet,\n  modules: [setupMyNearWallet()],\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then use it during the call to ",(0,r.jsx)(n.code,{children:"initNear"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"  useEffect(() => {\n    initNear && initNear({ networkId: 'testnet', selector: selector });\n  }, [initNear]);\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To learn more about the wallet selector and how it can be used, please see the ",(0,r.jsx)(n.a,{href:"/ko/develop/integrate/frontend",children:"integrating NEAR to your WebApp tutorial"})]})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var l=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(36905),l=t(12466),o=t(16550),s=t(20469),i=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,l=(0,o.k6)(),s=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,r.useCallback)((function(e){if(s){var n=new URLSearchParams(l.location.search);n.set(s,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[s,l])]}function f(e){var n,t,a,l,o=e.defaultValue,i=e.queryString,c=void 0!==i&&i,d=e.groupId,f=h(e),v=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:f})})),g=v[0],j=v[1],x=m({queryString:c,groupId:d}),b=x[0],w=x[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],l=t[1],[a,(0,r.useCallback)((function(e){n&&l.set(e)}),[n,l])]),k=y[0],N=y[1],V=function(){var e=null!=b?b:k;return p({value:e,tabValues:f})?e:null}();return(0,s.Z)((function(){V&&j(V)}),[V]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);j(e),w(e),N(e)}),[w,N,f]),tabValues:f}}var v=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function x(e){var n=e.className,t=e.block,r=e.selectedValue,o=e.selectValue,s=e.tabValues,i=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=i.indexOf(n),a=s[t].value;a!==r&&(c(n),o(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;t=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var l,o=i.indexOf(e.currentTarget)-1;t=null!=(l=i[o])?l:i[i.length-1]}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((function(e){var n=e.value,t=e.label,l=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return i.push(e)},onKeyDown:d,onClick:u},l,{className:(0,a.Z)("tabs__item",g.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function b(e){var n=e.lazy,t=e.children,a=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=l.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function w(e){var n=f(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,j.jsx)(x,Object.assign({},e,n)),(0,j.jsx)(b,Object.assign({},e,n))]})}function y(e){var n=(0,v.Z)();return(0,j.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(n))}},77229:(e,n,t)=>{t.d(n,{Ey:()=>u,O2:()=>i,SQ:()=>c});t(67294);var r=t(74866),a=t(85162),l=t(95665),o=t.n(l),s=t(85893);function i(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,s.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,s.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,l=t.end,o=t.fname;if(e.type===u)return u({url:r,start:a,end:l,language:n,fname:o});return e}(e,t)})),1==n.length?(0,s.jsx)(a.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,s.jsx)(r.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,s.jsx)(a.Z,{value:n,label:e.props.fname,children:e})}))})}function u(e){var n=e.url,t=e.start,r=e.end,a=e.language,l=e.fname,i=n+"#";return t&&r&&(i+="L"+t+"-L"+r+"#"),(0,s.jsx)(o(),{language:a,fname:l,children:i})}},42352:(e,n,t)=>{t.d(n,{W:()=>s});var r=t(67294),a=t(16729),l=t(91262),o=t(85893);function s(e){var n=e.children,s=e.id,i=void 0===s?1:s,c=e.height,u=void 0===c?"160px":c;return(0,o.jsx)(l.Z,{fallback:(0,o.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=n.props.children.props.children}catch(g){}var l=t(58613),s=l.Widget,c=l.useInitNear,d=t(2302).ZP,h=(0,r.useState)(e),p=h[0],m=h[1],f=c().initNear,v=(0,a.O)().selector;return(0,r.useEffect)((function(){f&&v&&f({networkId:"testnet",selector:v})}),[f,v]),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{class:"monaco",children:(0,o.jsx)(d,{height:u,value:p,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return m(e)}})}),(0,o.jsx)("div",{class:"code_iframe",children:(0,o.jsx)("div",{class:"bootstrap-scope",children:(0,o.jsx)("div",{class:"vm-widget",children:(0,o.jsx)(s,{code:p},i)})})})]})}})}}}]);