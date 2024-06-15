"use strict";(self.webpackChunkchat_ai=self.webpackChunkchat_ai||[]).push([[861],{2181:(e,t,n)=>{n.d(t,{A:()=>s});n(5043);var r=n(579);const s=e=>{let{isLoading:t,className:n,disabled:s,onClick:l,children:a,bgColor:o="bg-customGreen",spinnerColor:c="border-white"}=e;return(0,r.jsx)("button",{className:"".concat(o," hover:").concat(o," text-white font-bold mt-[20px] py-2 px-4 rounded w-full flex justify-center items-center text-[22px] ").concat(n),disabled:t||s,onClick:l,children:t?(0,r.jsx)("div",{className:"flex justify-center items-center",children:(0,r.jsx)("svg",{className:"animate-spin h-5 w-5 border-2 ".concat(c," border-opacity-50 border-t-transparent rounded-full"),viewBox:"0 0 24 24"})}):a})}},1861:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var r=n(5043),s=n(3216),l=n(5475),a=function(e){return"object"===typeof e&&null!==e},o=function(e){var t=e.value,n=void 0===t?"":t,s=e.numInputs,l=void 0===s?4:s,o=e.onChange,c=e.onPaste,i=e.renderInput,u=e.shouldAutoFocus,d=void 0!==u&&u,f=e.inputType,p=void 0===f?"text":f,x=e.renderSeparator,m=e.placeholder,v=e.containerStyle,h=e.inputStyle,g=e.skipDefaultStyles,y=void 0!==g&&g,b=r.useState(0),N=b[0],j=b[1],w=r.useRef([]),S=function(){return n?n.toString().split(""):[]},k="number"===p||"tel"===p;r.useEffect((function(){w.current=w.current.slice(0,l)}),[l]),r.useEffect((function(){var e;d&&(null===(e=w.current[0])||void 0===e||e.focus())}),[d]);var D=function(){if("string"===typeof m){if(m.length===l)return m;m.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},C=function(e){return(k?!isNaN(Number(e)):"string"===typeof e)&&1===e.trim().length},A=function(e){var t=e.target.value;C(t)&&(B(t),R(N+1))},E=function(e){var t=e.nativeEvent,n=e.target.value;if(!C(n)){if(n.length===l)n.split("").some((function(e){return!C(e)}))||(G(n.split("")),R(l-1));null===t.data&&"deleteContentBackward"===t.inputType&&(e.preventDefault(),B(""),R(N-1)),e.target.value=""}},I=function(){j(N-1)},P=function(e){var t=S();[e.code,e.key].includes("Backspace")?(e.preventDefault(),B(""),R(N-1)):"Delete"===e.code?(e.preventDefault(),B("")):"ArrowLeft"===e.code?(e.preventDefault(),R(N-1)):"ArrowRight"===e.code||e.key===t[N]?(e.preventDefault(),R(N+1)):"Spacebar"!==e.code&&"Space"!==e.code&&"ArrowUp"!==e.code&&"ArrowDown"!==e.code||e.preventDefault()},R=function(e){var t,n,r=Math.max(Math.min(l-1,e),0);w.current[r]&&(null===(t=w.current[r])||void 0===t||t.focus(),null===(n=w.current[r])||void 0===n||n.select(),j(r))},B=function(e){var t=S();t[N]=e[0],G(t)},G=function(e){var t=e.join("");o(t)},T=function(e){var t;e.preventDefault();var n=S(),r=N,s=e.clipboardData.getData("text/plain").slice(0,l-N).split("");if(!k||!s.some((function(e){return isNaN(Number(e))}))){for(var a=0;a<l;++a)a>=N&&s.length>0&&(n[a]=null!==(t=s.shift())&&void 0!==t?t:"",r++);R(r),G(n)}};return r.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},a(v)&&v),className:"string"===typeof v?v:void 0,onPaste:c},Array.from({length:l},(function(e,t){return t})).map((function(e){var t,n,s;return r.createElement(r.Fragment,{key:e},i({value:null!==(t=S()[e])&&void 0!==t?t:"",placeholder:null!==(s=null===(n=D())||void 0===n?void 0:n[e])&&void 0!==s?s:void 0,ref:function(t){return w.current[e]=t},onChange:A,onFocus:function(t){return function(e){return function(t){j(t),e.target.select()}}(t)(e)},onBlur:I,onKeyDown:P,onPaste:T,autoComplete:"off","aria-label":"Please enter OTP character ".concat(e+1),style:Object.assign(y?{}:{width:"1em",textAlign:"center"},a(h)?h:{}),className:"string"===typeof h?h:void 0,type:p,inputMode:k?"numeric":"text",onInput:E},e),e<l-1&&("function"===typeof x?x(e):x))})))},c=n(3003),i=n(8460),u=n(5772),d=n(2181),f=n(579);const p=e=>{let{expires:t,onResend:n}=e;return(0,f.jsx)("div",{className:"mt-[20px] text-xl",children:(0,f.jsxs)("p",{children:["Didn't get the code?"," ",(0,f.jsx)("span",{className:"cursor-pointer text-customGreen hover:text-customGreen",onClick:n,children:"Resend"})]})})};n(4812);const x=()=>{var e;(0,c.wA)();const t=(0,s.Zp)(),n=(0,s.zy)(),{loading:a}=(0,c.d4)((e=>e.auth)),[x,m]=(0,r.useState)(""),[v,h]=(0,r.useState)((null===(e=n.state)||void 0===e?void 0:e.expires)||0);return(0,f.jsx)("div",{className:"col-span-7 lg:col-span-3  bg-black text-white flex justify-center items-center lg:items-start flex-col h-screen order-0 lg:order-1 px-3 lg:px-0",children:(0,f.jsxs)("div",{className:"w-full max-w-[430px] pl-[0px] lg:ml-[40px] 2xl:ml-[140px] pr-0 md:pr-10 xl:pr-0",children:[(0,f.jsxs)("div",{className:"mb-8 ",children:[(0,f.jsx)("button",{className:"mb-4",onClick:()=>t(-1),children:(0,f.jsx)(i.h,{})}),(0,f.jsx)("h1",{className:"text-4xl text-center lg:text-left font-extrabold mb-2",children:"Ready to Use AI50?"}),(0,f.jsx)("p",{className:"text-lg text-center lg:text-left ",children:"Verify your Email Address, Enter Code"})]}),(0,f.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),setTimeout((()=>{u.y.success("Otp verified Successfully."),t("/signin")}),500)},className:"text-center",children:[(0,f.jsx)(o,{className:"p-2 bg-transparent",value:x,onChange:function(e){m(e)},numInputs:6,inputStyle:{},skipDefaultStyles:!0,renderSeparator:(0,f.jsx)("span",{className:"mr-2",children:" "}),renderInput:e=>(0,f.jsx)("input",{...e,className:"p-4 border bg-transparent border-[#312E36] rounded-lg focus:outline-none w-full focus:border-customGreen text-center"})}),(0,f.jsx)(d.A,{isLoading:a,disabled:a||!x||x.length<6,children:"Verify"}),(0,f.jsx)(p,{expires:v,onResend:async()=>{}})]}),(0,f.jsxs)("p",{className:"mt-12 text-lg ",children:["By signing up, you agree to the"," ",(0,f.jsx)(l.N_,{to:"#",className:"underline",children:"Terms of Service"})," ","and"," ",(0,f.jsx)(l.N_,{to:"#",className:"underline",children:"Privacy Policy"}),"."]}),(0,f.jsx)("p",{className:"my-10 border-t border-gray-400 text-sm text-center"}),(0,f.jsxs)("p",{className:"text-xl font-semibold text-center lg:text-left",children:[(0,f.jsxs)(l.N_,{to:"/signup",className:"underline text-customGreen text-center lg:text-left ",children:["","Sign up",""]})," ","\xa0If you don\u2019t have an account"]})]})})}}}]);
//# sourceMappingURL=861.a59cf1b4.chunk.js.map