const e=document.createElement("div");e.id="pointer-dot";const o=document.createElement("div");o.id="pointer-ring",document.body.insertBefore(e,document.body.children[0]),document.body.insertBefore(o,document.body.children[0]);let n=-100,i=-100,r=-100,t=-100,l=!1,c=!1;(d=>{window.onmousemove=e=>{n=e.clientX,i=e.clientY},window.onmousedown=e=>{c=!0},window.onmouseup=e=>{c=!1};const s=(e,o,n)=>(1-n)*e+n*o;window.trace=s;const m=e=>{let o={pointerColor:"#750c7e",ringSize:15,ringClickSize:(d.ringSize||15)-5};return null==d[e]?o[e]:d[e]},p=()=>{r=s(r,n,.2),t=s(t,i,.2),document.querySelector(".p-action-click:hover")?(e.style.borderColor=m("pointerColor"),l=!0):(e.style.borderColor="white",l=!1),o.style.borderColor=m("pointerColor"),o.style.padding=c?m("ringClickSize")+"px":m("ringSize")+"px",e.style.transform=`translate(${n}px, ${i}px)`,o.style.transform=`translate(${r-m(c?"ringClickSize":"ringSize")}px, ${t-m(c?"ringClickSize":"ringSize")}px)`,requestAnimationFrame(p)};requestAnimationFrame(p)})({pointerColor:"purple",ringSize:15,ringClickSize:10});
//# sourceMappingURL=index.7cc37dad.js.map