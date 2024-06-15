"use strict";(self.webpackChunkchat_ai=self.webpackChunkchat_ai||[]).push([[28],{342:(e,s,t)=>{t.d(s,{r:()=>l});t(5043);const l=()=>{}},28:(e,s,t)=>{t.r(s),t.d(s,{default:()=>v});var l=t(5043),n=(t(342),t(3003)),a=t(2073),i=t(3218),r=t(8070),d=t(579);const c=e=>{let{isRunning:s,onSubmit:t}=e;const[n,a]=(0,l.useState)("");return(0,d.jsxs)("form",{onSubmit:e=>{e.preventDefault(),n.trim()&&(console.log("Input value",n),t(n),a(""))},className:"chat-input bg-customGray",children:[(0,d.jsx)("div",{children:s?(0,d.jsxs)("p",{className:"text-[#B4B4B4] font-normal text-xl",children:["Running... ",(0,d.jsx)("span",{className:"text-customGreen",children:"Stop"})," "]}):""}),(0,d.jsxs)("div",{className:"flex items-center ",children:[(0,d.jsxs)("div",{className:"relative inputWithIcon w-full mr-5",children:[(0,d.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:(0,d.jsx)(i.OF,{})}),(0,d.jsx)("input",{type:"text",value:n,onChange:e=>a(e.target.value),className:"pl-10 p-4 border bg-white text-2xl rounded-lg focus:outline-none w-full focus:border-customGreen",placeholder:"Enter a Prompt Here..."})]}),(0,d.jsx)("button",{type:"submit",className:"rounded-2xl p-3 ".concat(!n||s?"bg-gray-400":"bg-customGreen"),disabled:!n||s,children:(0,d.jsx)(i.qx,{})})]})]})},o=["What are the eligibility requirements for 2024 Medicare, and how do I or my clients enroll?","What does 2024 Medicare cover, and what are the differences between Part A, Part B, Part C, and Part D?","\u2060How much does Medicare cost? What are the premiums, deductibles, and out-of-pocket expenses for different parts of Medicare for 2024?"],m=()=>{const[e,s]=(0,l.useState)(!1),t=(0,n.wA)(),{userDetails:m}=(0,n.d4)((e=>e.auth)),x=(0,n.d4)((e=>e.chat.questionsList));(0,l.useEffect)((()=>{0===x.length&&t((0,r.Sn)())}),[t,x.length]);const u=null===x||void 0===x?void 0:x.map((e=>{const s=e.split(" ");return{title:s.slice(0,3).join(" "),description:s.slice(3).join(" ")}}));return(0,d.jsx)("div",{className:"w-full px-4 xl:px-0 md:max-w=[800px] xl:max-w-[900px] 2xl:max-w-[1220px] m-auto h-full relative",children:(0,d.jsxs)("div",{className:"flex flex-col h-full w-full  ",children:[(0,d.jsxs)("div",{className:" h-full",children:[(0,d.jsxs)("div",{className:"flex flex-col items-center mb-6 pt-[75px] pb-[60px]",children:[(0,d.jsx)(i.xt,{className:"my-6"}),(0,d.jsxs)("h1",{className:"text-3xl font-semibold",children:[null!==m&&void 0!==m&&m.full_name?"".concat(null===m||void 0===m?void 0:m.full_name," ,"):""," How Can I Help You Today?"]})]}),(0,d.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2  gap-4",children:null===u||void 0===u?void 0:u.map(((e,t)=>(0,d.jsx)("div",{className:"col-span-1 cursor-pointer",onClick:()=>(async e=>{s(!0)})((e.title,e.description)),children:(0,d.jsxs)("div",{className:"bg-white rounded-xl border border-[#ccc] p-4",children:[(0,d.jsx)("p",{className:"text-xl font-semibold m-0",children:null===e||void 0===e?void 0:e.title}),(0,d.jsx)("span",{className:"text-xl font-normal opacity-[0.7] mt-2",children:null===e||void 0===e?void 0:e.description})]})},t)))}),(0,d.jsx)("div",{className:"mt-5",children:(0,d.jsxs)("div",{className:"bg-white rounded-xl border border-[#ccc] p-4",children:[(0,d.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"Related Questions "}),o.map(((e,t)=>(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)("div",{className:"border border-[#ddd] p-3 rounded-lg",children:(0,d.jsx)("button",{className:"flex justify-between w-full px-2 rounded-lg text-lg",onClick:()=>(async e=>{(0,a.A)(),(0,a.A)(),s(!0)})(),children:(0,d.jsx)("span",{className:"text-xl font-medium text-left",children:e})})})},t)))]})})]}),(0,d.jsx)(c,{isRunning:e,onSubmit:async e=>{s(!0)}})]})})};var x=t(4369),u=t(3881);const h=e=>{const s=new Date(e),t=(new Date).toDateString()===s.toDateString(),l=new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit"}).format(s),n=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"short"}).format(s);return"".concat(t?l:n)},p=()=>(0,d.jsx)("div",{className:"flex justify-center items-center",children:(0,d.jsx)("div",{className:"spinner border-t-transparent border-4 border-solid border-primary rounded-full w-6 h-6 animate-spin"})}),j=["Not factually correct","Don't like the style","Didn't fully follow instructions","Refused when it shouldn't have","Being lazy","Not factually correct","Don't like the style","Didn't fully follow instructions","Refused when it shouldn't have","Being lazy","More.."],f=e=>{let{setTellUsMore:s}=e;return(0,d.jsxs)("div",{className:"card py-5 px-4 my-12",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between w-full mb-2.5",children:[(0,d.jsx)("h1",{className:"text-xl font-medium",children:"Tell us more:"}),(0,d.jsx)("button",{onClick:()=>s(!1),children:(0,d.jsx)(i.US,{})})]}),(0,d.jsx)("div",{className:"flex flex-wrap",children:null===j||void 0===j?void 0:j.map(((e,s)=>(0,d.jsx)("div",{className:"chip m-2.5 ",onClick:()=>console.log("click"),children:(0,d.jsx)("span",{children:e})},s)))})]})},g=()=>{const[e,s]=(0,l.useState)(!1),[t,a]=(0,l.useState)(!0),r=(0,n.wA)(),o=(0,n.d4)((e=>e.chat.selectedChatHistory)),m=(0,n.d4)((e=>e.chat.chatHistory));console.log("chatHistory: ",m);const{userDetails:j}=(0,n.d4)((e=>e.auth));console.log("selectedChatHistory: ",o),(0,l.useEffect)((()=>{const e=m.find((e=>e.id===(null===o||void 0===o?void 0:o.id)));console.log("selectedChat: ",e),e&&(!e.messages||e.messages.length)}),[r,o,m]);const g=[{id:1,created_at:new Date,question:"What is Lorem Ipsum?",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{id:2,created_at:new Date,question:"What is Markdown?",answer:'Markdown is a lightweight markup language for creating formatted text using a plain-text editor. \n               Here is an example:\n               \n# Heading 1\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. \n               \n## Heading 2\n\n1. First item\n2. Second item\n3. Third item\n               \n### Heading 3\n\n**Bold text** and *italic text*.\n               \n> Blockquote: Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n               \n### Code Block\n\n```python\n def hello_world():\n     print("Hello, world!")\n```\n               \n### Unordered List\n\n- Item 1\n- Item 2\n- Item 3 \n\n\n'}];return(0,d.jsx)("div",{className:"w-full px-4 xl:px-0 md:max-w=[800px] xl:max-w-[900px] 2xl:max-w-[1220px] m-auto h-full relative",children:(0,d.jsxs)("div",{className:"flex flex-col h-full w-full  ",children:[(0,d.jsxs)("div",{className:" h-full pt-10",children:[g&&g.map((e=>(0,d.jsxs)(l.Fragment,{children:[(0,d.jsx)("div",{className:"mt-[40px]",children:(0,d.jsxs)("div",{className:"media",children:[(0,d.jsx)("img",{src:i.ls,alt:"avtar"}),(0,d.jsxs)("div",{className:"media-content",children:[(0,d.jsxs)("div",{className:"author",children:[j?j.full_name:"You",(0,d.jsx)("span",{className:"posted-time",children:h(e.created_at)})]}),(0,d.jsx)("div",{className:"authorchat",children:(0,d.jsxs)("p",{style:{marginTop:"0px",marginBottom:"0px"},children:[e.question," "]})})]})]})}),(0,d.jsx)("div",{className:"chat-bot mt-5",children:(0,d.jsxs)("div",{className:"media",children:[(0,d.jsx)("img",{src:i.ls,alt:"avtar"}),(0,d.jsxs)("div",{className:"media-content",children:[(0,d.jsxs)("div",{className:"author text-xl",children:["AI 50",(0,d.jsx)("span",{className:"posted-time",children:h(e.created_at)})]}),(0,d.jsxs)("div",{className:"authorchat markDown",children:[e.loading?(0,d.jsx)("div",{className:"text-center",children:(0,d.jsx)(p,{})}):(0,d.jsx)(x.o,{children:e.answer,components:{code(e){const{children:s,className:t,node:l,...n}=e,a=/language-(\w+)/.exec(t||"");return a?(0,d.jsx)(u.A,{...n,PreTag:"div",children:String(s).replace(/\n$/,""),language:a[1]}):(0,d.jsx)("code",{...n,className:t,children:s})}}})," "]}),(0,d.jsxs)("div",{className:"flex pb-4",children:[(0,d.jsx)("button",{className:"mr-2.5",children:(0,d.jsx)(i.km,{})}),(0,d.jsx)("button",{className:"mr-2.5",children:(0,d.jsx)(i.tF,{})}),(0,d.jsx)("button",{className:"mr-2.5",children:(0,d.jsx)(i.B0,{})}),(0,d.jsx)("button",{className:"mr-2",children:(0,d.jsx)(i.fz,{})})]})]})]})}),e&&null!==e&&void 0!==e&&e.related_questions&&e.related_questions.length>0?(0,d.jsxs)("div",{className:"mt-5",children:[(0,d.jsxs)("h2",{className:"text-2xl font-semibold mb-4",children:["Related Questions"," "]}),e.related_questions.map(((e,s)=>(0,d.jsx)("div",{className:"mt-2",children:(0,d.jsx)("div",{className:"border border-[#ddd] p-3 rounded-lg",children:(0,d.jsx)("button",{className:"flex justify-between w-full hover:bg-gray-100 px-2 rounded-lg text-lg",onClick:()=>console.log(e),children:(0,d.jsx)("span",{className:"text-2xl font-medium text-left",children:e})})})},s)))]}):null]},e.id))),t&&(0,d.jsx)(f,{tellUsMore:t,setTellUsMore:a})]}),(0,d.jsx)(c,{isRunning:e,onSubmit:async e=>{}})]})})},v=()=>(0,n.d4)((e=>e.chat.selectedChatHistory))?(0,d.jsx)(g,{}):(0,d.jsx)(m,{})}}]);
//# sourceMappingURL=28.4ff373a5.chunk.js.map