"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79382],{84621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=n(85893),s=n(11151);const c={id:"checklist",title:"\u2705 Checklist"},o=void 0,i={id:"build/smart-contracts/security/checklist",title:"\u2705 Checklist",description:"Once you finished developing your smart contract please go through the following list in order to ensure everything is safe for the end user.",source:"@site/../docs/2.build/2.smart-contracts/security/checklist.md",sourceDirName:"2.build/2.smart-contracts/security",slug:"/build/smart-contracts/security/checklist",permalink:"/build/smart-contracts/security/checklist",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/security/checklist.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712679124e3,frontMatter:{id:"checklist",title:"\u2705 Checklist"},sidebar:"build",previous:{title:"Cross-Contract Calls",permalink:"/build/smart-contracts/anatomy-of-a-contract/crosscontract"},next:{title:"Notes on Serialization",permalink:"/build/smart-contracts/anatomy-of-a-contract/serialization"}},l={},a=[{value:"Anatomy",id:"anatomy",level:2},{value:"Environment",id:"environment",level:2},{value:"Storage",id:"storage",level:2},{value:"Actions",id:"actions",level:2},{value:"Callbacks",id:"callbacks",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Once you finished developing your smart contract please go through the following list in order to ensure everything is safe for the end user."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Check our ",(0,r.jsx)(t.a,{href:"/develop/contracts/security/welcome",children:"security articles"})," to understand how to improve the security of your contract."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["All private methods are decorated as ",(0,r.jsx)(t.code,{children:"private"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"environment",children:"Environment"}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"predecessor"})," and ",(0,r.jsx)(t.code,{children:"signer"})," are used correctly through the entire contract."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"storage",children:"Storage"}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Each time the state grows it is ensured that there is enough balance to cover it"}),"\n",(0,r.jsx)(t.li,{children:"All collections (i.e. Vector, Map, Tree, etc) have an unique id"}),"\n",(0,r.jsxs)(t.li,{children:["Check for underflow and overflow!. In rust, you can do this by simply adding the ",(0,r.jsx)(t.code,{children:"overflow-checks = true"})," flag in your ",(0,r.jsx)(t.code,{children:"Cargo.toml"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"actions",children:"Actions"}),"\n",(0,r.jsxs)(t.ol,{start:"6",children:["\n",(0,r.jsx)(t.li,{children:"When sending money, you leave enough in the contract to cover the storage cost"}),"\n",(0,r.jsxs)(t.li,{children:["If you are tracking user's fund, you ",(0,r.jsx)(t.strong,{children:"deduct them before"})," sending them back to the user."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"callbacks",children:"Callbacks"}),"\n",(0,r.jsxs)(t.ol,{start:"8",children:["\n",(0,r.jsxs)(t.li,{children:["All private callbacks are marked as ",(0,r.jsx)(t.code,{children:"private"})]}),"\n",(0,r.jsx)(t.li,{children:"All cross-contract calls have a callback that checks for errors and rolls back the state if necessary"}),"\n",(0,r.jsxs)(t.li,{children:["All cross-contract calls have a callback that checks for errors and returns money to the ",(0,r.jsx)(t.code,{children:"predecessor"})," if necessary"]}),"\n",(0,r.jsx)(t.li,{children:"All the callbacks are given enough GAS to execute entirely"}),"\n",(0,r.jsx)(t.li,{children:"The contract is not left in a exploitable state between a cross-contract call and its callback"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const s={},c=r.createContext(s);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);