(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{75557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(58830)}])},58962:function(e,t,a){"use strict";var s=a(85893);a(67294);var n=a(53040),c=a(87796),i=a(45697),r=a.n(i);let l=e=>{let{pageTitle:t,currentPage:a,className:i,space:r}=e;return(0,s.jsxs)("div",{className:"w-full border-b border-gray-300 flex flex-col md:flex-row justify-between items-center h-24 md:h-16 px-4 md:px-8",children:[(0,s.jsx)(n.$,{className:"flex mb-4 md:mb-0",children:(0,s.jsx)(c.d,{children:t})}),(0,s.jsxs)(n.$,{className:"flex",children:[(0,s.jsx)(c.d,{children:"Home"}),(0,s.jsx)(c.d,{children:a||t})]})]})};l.propTypes={pageTitle:r().string.isRequired,currentPage:r().string,className:r().string,space:r().oneOf([1])},l.defaultProps={space:1}},77042:function(e,t,a){"use strict";var s=a(85893),n=a(9008),c=a.n(n),i=a(48349);t.Z=e=>{let{pageTitle:t}=e,{globalState:a,setGlobalState:n}=(0,i.j)(),r="".concat(t," || ").concat(a.siteData.projectName," Blockchain Utility Tool");return(0,s.jsxs)(c(),{children:[(0,s.jsx)("title",{children:r}),(0,s.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,s.jsx)("meta",{name:"description",content:"".concat(a.siteData.projectName," Blockchain Utility Tool, token batch sender, nft batch sender, token generator.")}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.png"})]})}},15911:function(e,t,a){"use strict";a.d(t,{HM:function(){return c},WF:function(){return d},cN:function(){return l},uc:function(){return i},x$:function(){return r}});var s=a(70794);a(76718);var n=a(87066);function c(e,t,a){if(!(t>0))return new s.Z(String(e)).toFixed(a);{let n=new s.Z(String(e)),c=new s.Z(String(10)).exponentiatedBy(String(t));return new s.Z(n.dividedBy(c)).toFixed(a)}}function i(e){return/^0x[a-fA-F0-9]{40}$/.test(e)}function r(e,t,a){if(!(t>0))return new s.Z(String(e)).toFixed(a);{let n=new s.Z(String(e)),c=new s.Z(String(10)).exponentiatedBy(String(t));return new s.Z(n.multipliedBy(c)).toFixed(a)}}let l=e=>Number(e)>0&&Number.isInteger(Number(e)),d=async(e,t,a,s,c,i,r,l)=>{let d=a.slice(2),o={apikey:r.etherscanApiKey,module:"contract",action:"verifysourcecode",contractaddress:e,codeformat:"solidity-single-file",contractname:l,compilerversion:"v0.8.21+commit.d9974bed",optimizationUsed:"0",constructorArguements:d,sourceCode:t,runs:200},f=new FormData;f.append("apikey",r.etherscanApiKey),f.append("module","contract"),f.append("action","verifysourcecode"),f.append("contractaddress",e),f.append("codeformat","solidity-single-file"),f.append("contractname",l),f.append("compilerversion","v0.8.21+commit.d9974bed"),f.append("optimizationUsed","0"),f.append("constructorArguements",d),f.append("sourceCode",t),f.append("runs",200);try{(async(e,t)=>{let a=0;window.localStorage.setItem("tokenInfo",JSON.stringify(o)),console.log(o,"verification body");let l=async()=>{try{let d=await n.Z.post(r.etherscanApiUrl,f,{headers:{"Content-Type":"multipart/form-data"}});console.log(d),"0"===d.data.status&&a<5?(a++,setTimeout(l,12e3)):"0"===d.data.status&&4===a?(s("Contract couldn't verify : ".concat(e.logs[0].address)),i("Please contact us as soon as possible"),c(!1)):t(e)}catch(e){console.error("Hata oluştu:",e)}};l()})(o,e=>{console.log("////////////CONTRACT VERIFIED/////////"),s("Your Contract Verified"),i("You can go back home or create new token."),c(!1)})}catch(e){console.error("Hata oluştu:",e)}}},54116:function(e,t,a){"use strict";a.d(t,{u:function(){return s}});let s={fees:{standardToken:{1:"15000000000000000",56:"77000000000000000",97:"100000000000000000",8453:"15000000000000000",137:"80000000000000000000",10:"15000000000000000",42161:"15000000000000000"},pausableToken:{1:"20000000000000000",56:"105000000000000000",97:"1000",8453:"20000000000000000",137:"100000000000000000000",10:"20000000000000000",42161:"20000000000000000"},blacklistToken:{1:"20000000000000000",56:"105000000000000000",97:"1000",8453:"20000000000000000",137:"100000000000000000000",10:"20000000000000000",42161:"20000000000000000"},ultimateToken:{1:"25000000000000000",56:"135000000000000000",97:"1000",8453:"25000000000000000",137:"120000000000000000000",10:"25000000000000000",42161:"25000000000000000"}}}},58830:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return R}});var s=a(85893),n=a(67294);a(58962);var c=a(4960),i=a(48828),r=a(7312),l=a(8155),d=a(44033),o=a(11163),f=a(37119),p=a(47360),m=a(48349);function u(){let{globalState:e,setGlobalState:t}=(0,m.j)(),a=(0,o.useRouter)(),u=(0,c.c)(0),b=(0,c.c)(0),x=(0,i.H)(b,[-50,50],[15,-15]),h=(0,i.H)(u,[-50,50],[-15,15]),[w,j]=(0,n.useState)(!1);(0,n.useEffect)(()=>{(0,f.bP)(async e=>{await (0,p.S)(e)}).then(()=>{j(!0)})},[]);let g=(0,n.useMemo)(()=>({fpsLimit:120,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"}},modes:{push:{quantity:4},repulse:{distance:50,duration:.4}}},particles:{number:{value:200},color:{value:"#808080"},links:{enable:!0,distance:50},shape:{type:"circle"},opacity:{value:.3},size:{value:{min:1,max:3}},move:{enable:!0,speed:2}},detectRetina:!0,fullScreen:{enable:!1}}),[]);if(w)return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"relative flex justify-center items-center",children:[(0,s.jsx)("div",{className:"absolute inset-0 w-full h-full z-[-1] md:block hidden",children:(0,s.jsx)(f.ZP,{id:"tsparticles",options:g,className:"h-screen block static absolute"})}),(0,s.jsx)("section",{className:"max-w-screen-xl mx-auto px-4  py-12 gap-12 md:px-8 flex flex-col justify-center items-center",children:(0,s.jsxs)(r.E.div,{initial:{y:5,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},className:"flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5 w-full max-w-4xl mx-auto text-center mt-2",children:[(0,s.jsxs)("div",{className:"md:w-1/2 ",children:[(0,s.jsx)("h1",{className:"text-4xl md:text-5xl text-left font-bold tracking-tighter bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text",children:e.siteData.bannerTitle}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{className:"text-lg md:text-xl mt-3 text-left text-foreground/80",children:e.siteData.bannerDescription}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-start gap-3 mt-5",children:[(0,s.jsx)(l.A,{className:"w-full sm:w-auto",onPress:()=>a.push("/tokensender"),color:"primary",size:"lg",children:"Get Started"}),(0,s.jsx)(l.A,{className:"w-full sm:w-auto",onPress:()=>a.push("/contact"),color:"secondary",size:"lg",children:"Contact Us"})]})]}),(0,s.jsx)(r.E.div,{className:"md:w-1/2 flex justify-center",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.8},whileHover:{scale:1.05},onHoverStart:()=>u.set(0)&&b.set(0),onHoverEnd:()=>u.set(0)&&b.set(0),onMouseMove:function(e){let t=e.currentTarget.getBoundingClientRect(),a=e.clientX-t.left,s=e.clientY-t.top;u.set(a-t.width/2),b.set(s-t.height/2)},style:{rotateX:x,rotateY:h},children:(0,s.jsx)(d.J,{src:"/banner.png",alt:"DappCenter Logo"})})]})}),(0,s.jsx)(r.E.div,{initial:{y:5,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,delay:.5},className:"w-full h-full absolute -top-32 flex justify-end items-center -z-10",children:(0,s.jsx)("div",{className:"w-3/4 flex justify-center items-center",children:(0,s.jsx)("div",{className:"w-12 h-[600px] bg-light blur-[100px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg]"})})})]})})}var b=a(45837),x=a(19314),h=a(22845),w=a(67814),j=a(59417);function g(){let{globalState:e,setGlobalState:t}=(0,m.j)();return(0,s.jsx)("div",{className:"px-4 sm:px-8 lg:px-16 py-10",children:(0,s.jsx)("div",{className:"grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  px-4 sm:px-8 lg:px-16 mt-4",children:e.siteData.homeApps.map((e,t)=>(0,s.jsxs)(b.w,{shadow:"sm",className:"p-4",children:[(0,s.jsxs)(x.G,{className:"overflow-visible p-[10px] w-full text-center items-center",children:[(0,s.jsx)(d.J,{alt:e.title,className:"w-16 h-16 object-contain mx-auto",src:e.img,width:60}),(0,s.jsx)("h3",{className:"text-xl font-semibold my-3",children:e.title}),(0,s.jsx)("h3",{children:e.description})]}),(0,s.jsx)(h.i,{children:(0,s.jsx)("div",{className:"w-full text-center",children:(0,s.jsx)("a",{href:e.link,className:"mt-2",children:(0,s.jsx)(w.G,{icon:j.eFW,style:{fontSize:"1.5rem",backgroundColor:"#13131D",color:"white",padding:"10px",borderRadius:"50%",transition:"background-color 0.3s ease"},onMouseOver:e=>e.currentTarget.style.backgroundColor="#00A3FF",onMouseOut:e=>e.currentTarget.style.backgroundColor="#13131D"})})})})]},t))})})}var y=a(14456),v=a(24031);function k(){return(0,s.jsxs)("div",{className:"px-4 sm:px-8 lg:px-16 py-10",children:[(0,s.jsx)("h3",{className:"text-4xl font-bold text-center mb-6",children:"Supported Chains"}),(0,s.jsx)("div",{className:"grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-8 lg:px-16 mt-4",children:v.Z.map(e=>(0,s.jsxs)(b.w,{shadow:"sm",className:"p-4 rounded-lg overflow-hidden",children:[(0,s.jsx)(x.G,{className:"flex flex-col justify-center items-center p-4",children:(0,s.jsx)(y.fq,{id:e.chainId,size:100})}),(0,s.jsx)(h.i,{className:"flex flex-col justify-center items-center text-lg p-4",children:(0,s.jsx)("b",{children:e.name})})]},e.chainId))})]})}var N=a(98918),T=a(2261);a(30889);var S=function(){let[e,t]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{t(!0)},[]),e)?(0,s.jsxs)("div",{className:"px-4 sm:px-8 lg:px-16 py-10",children:[(0,s.jsx)("div",{className:"relative max-w-xl mx-auto text-center pt-10 pb-10 mt-10 py-20",children:(0,s.jsx)("h3",{className:"text-4xl font-bold  mb-3",children:"Supported Wallets"})}),(0,s.jsx)(T.tq,{modules:[N.pt],spaceBetween:10,breakpoints:{320:{slidesPerView:3},480:{slidesPerView:4},768:{slidesPerView:6},992:{slidesPerView:8},1200:{slidesPerView:10}},loop:!0,autoplay:{delay:0,disableOnInteraction:!1},speed:2e3,children:["0d7938e1-9b3b-4d8b-177b-98188c4cf400.webp","1bf33a89-b049-4a1c-d1f6-4dd7419ee400.webp","204b2240-5ce4-4996-6ec4-f06a22726900.webp","20c3072e-c92e-4902-d4b9-cb2b6ab29100.webp","215158d2-614b-49c9-410f-77aa661c3900.webp","252753e7-b783-4e03-7f77-d39864530900.webp","26a8f588-3231-4411-60ce-5bb6b805a700.webp","2cd67b4c-282b-4809-e7c0-a88cd5116f00.webp","3913df81-63c2-4413-d60b-8ff83cbed500.webp","45f2f08e-fc0c-4d62-3e63-404e72170500.webp","4c16cad4-cac9-4643-6726-c696efaf5200.webp","5195e9db-94d8-4579-6f11-ef553be95100.webp","52b1da3c-9e72-40ae-5dac-6142addd9c00.webp","5b1cddfb-056e-4e78-029a-54de5d70c500.webp","6133c399-ae32-4eba-0c5a-0fb84492bf00.webp","68e8063a-ff69-4941-3b40-af09e2fcd700.webp","6f913b80-86c0-46f9-61ca-cc90a1805900.webp","73f6f52f-7862-49e7-bb85-ba93ab72cc00.webp","7677b54f-3486-46e2-4e37-bf8747814f00.webp"].map((e,t)=>(0,s.jsx)(T.o5,{children:(0,s.jsx)("div",{className:"w-24 h-24 mx-auto rounded-full overflow-hidden",children:(0,s.jsx)("img",{src:"/assets/".concat(e),className:"w-full h-full object-cover",alt:"Slide ".concat(t+1)})})},e))}),(0,s.jsx)("div",{className:"mt-2 mb-2"}),(0,s.jsx)(T.tq,{modules:[N.pt],spaceBetween:10,breakpoints:{320:{slidesPerView:3},480:{slidesPerView:4},768:{slidesPerView:6},992:{slidesPerView:8},1200:{slidesPerView:10}},loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0},speed:2e3,children:["7a33d7f1-3d12-4b5c-f3ee-5cd83cb1b500.webp","7c5ff577-a68d-49c5-02cd-3d83637b0b00.webp","7e1514ba-932d-415d-1bdb-bccb6c2cbc00.webp","877fa1a4-304d-4d45-ca8e-f76d1a556f00.webp","99520548-525c-49d7-fb2f-5db65293b000.webp","9f259366-0bcd-4817-0af9-f78773e41900.webp","a78c4d48-32c1-4a9d-52f2-ec7ee08ce200.webp","a7f416de-aa03-4c5e-3280-ab49269aef00.webp","b6ee4efc-f53e-475b-927b-a7ded6211700.webp","bff9cf1f-df19-42ce-f62a-87f04df13c00.webp","c39b3a16-1a38-4588-f089-cb7aeb584700.webp","d22b2a4b-5562-49ba-506b-6d5986914600.webp","dda0f0fb-34e8-4a57-dcea-b008e7d1ff00.webp","dfe0e3e3-5746-4e2b-12ad-704608531500.webp","e2024511-2c9b-46d7-3111-52df3d241700.webp","ebac7b39-688c-41e3-7912-a4fefba74600.webp","f3119826-4ef5-4d31-4789-d4ae5c18e400.webp","f78dab27-7165-4a3d-fdb1-fcff06c0a700.webp","f9854c79-14ba-4987-42e1-4a82abbf5700.webp","fc460647-ea95-447a-99f0-1bff8fa4be00.webp","fe1b9394-55af-4828-a70d-5c5b7de6b200.webp"].map((e,t)=>(0,s.jsx)(T.o5,{children:(0,s.jsx)("div",{className:"w-24 h-24 mx-auto rounded-full overflow-hidden",children:(0,s.jsx)("img",{src:"/assets/".concat(e),className:"w-full h-full object-cover",alt:"Slide ".concat(t+1)})})},t))})]}):null},F=a(77042),P=a(40145),Z=a(67619),C=a(37003),E=a(76718),A=a(54116),I=a(82576),D=a(93218),H=a(44877),V=a(42967),X=a(47168),_=a(78148),B=a(29276),L=a(15911),z=a(57632),O=function(){let e=(0,P.C)(),[t,a]=(0,n.useState)(null),c=e=>v.Z.find(t=>t.chainId===e),i=(e,t)=>String((0,L.HM)(e,18,4))+" "+t.nativeCurrency.symbol,r=["Chains","Token Sender","ERC721 Sender","ERC1155 Sender","Token&LP Lock","Standard Token","Pausable Token","Blacklist Token","Exclusive Token"],l=async()=>{let t=e.map(e=>e.id),s=e.map(e=>e.name);console.log(t,e.map(e=>c(e.id)));let n=e.map(e=>(0,C.L)(E.config,{address:c(Number(e.id)).tokensenderAddress,abi:Z.a,functionName:"commission",chainId:e.id})),l=e.map(e=>(0,C.L)(E.config,{address:c(Number(e.id)).tokensenderAddress,abi:Z.a,functionName:"erc721commission",chainId:e.id})),d=e.map(e=>(0,C.L)(E.config,{address:c(Number(e.id)).tokensenderAddress,abi:Z.a,functionName:"erc1155commission",chainId:e.id})),o=e.map(e=>(0,C.L)(E.config,{address:c(Number(e.id)).tokensenderAddress,abi:Z.a,functionName:"lockFee",chainId:e.id})),f=await Promise.all(n),p=await Promise.all(l),m=await Promise.all(d),u=await Promise.all(o),b=e.map(e=>i(A.u.fees.standardToken[e.id],e)),x=e.map(e=>i(A.u.fees.pausableToken[e.id],e)),h=e.map(e=>i(A.u.fees.blacklistToken[e.id],e)),w=e.map(e=>i(A.u.fees.ultimateToken[e.id],e)),j=e.map((e,t)=>i(f[t],e)),g=e.map((e,t)=>i(p[t],e)),y=e.map((e,t)=>i(m[t],e)),v=e.map((e,t)=>i(u[t],e));console.log(j),a(r.map((e,t)=>({networkName:s[t],tokenSenderFee:j[t],erc721fee:g[t],lockFee:v[t],erc1155fee:y[t],standardToken:b[t],pausableToken:x[t],blackListToken:h[t],exclusiveToken:w[t]})))};if((0,n.useEffect)(()=>{l()},[]),t)return(0,s.jsxs)("div",{className:"max-w-6xl text-center mx-auto p-4",children:[(0,s.jsx)("h1",{className:"text-4xl font-bold",children:"Pricing"}),(0,s.jsxs)(I.b,{className:"mt-10","aria-labelledby":"ffdd",children:[(0,s.jsx)(D.J,{children:r.map(e=>(0,s.jsx)(H.j,{children:e},(0,z.Z)()))}),(0,s.jsx)(V.y,{children:t.map((e,t)=>(0,s.jsxs)(X.g,{children:[(0,s.jsx)(_.X,{children:(0,B.sF)(e.networkName,1)},(0,z.Z)()),(0,s.jsx)(_.X,{children:(0,B.sF)(e.tokenSenderFee,2)},(0,z.Z)()),(0,s.jsx)(_.X,{children:(0,B.sF)(e.erc721fee,3)},(0,z.Z)()),(0,s.jsx)(_.X,{children:(0,B.sF)(e.erc1155fee,4)},(0,z.Z)()),(0,s.jsx)(_.X,{children:(0,B.sF)(e.lockFee,5)},(0,z.Z)()),(0,s.jsx)(_.X,{children:(0,B.sF)(e.standardToken,6)},(0,z.Z)()),(0,s.jsx)(_.X,{children:(0,B.sF)(e.pausableToken,7)},(0,z.Z)()),(0,s.jsx)(_.X,{children:(0,B.sF)(e.blackListToken,8)},(0,z.Z)()),(0,s.jsx)(_.X,{children:(0,B.sF)(e.exclusiveToken,9)},(0,z.Z)())]},(0,z.Z)()))})]})]})};function R(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(F.Z,{pageTitle:"Home"}),(0,s.jsx)(u,{}),(0,s.jsx)(g,{}),(0,s.jsx)(k,{}),(0,s.jsx)(O,{}),(0,s.jsx)(S,{})]})}}},function(e){e.O(0,[9585,9598,4102,2770,7341,3115,3040,4846,339,3235,9913,2888,9774,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);