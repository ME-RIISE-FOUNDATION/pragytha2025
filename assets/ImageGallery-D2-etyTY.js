import{r as o,j as e}from"./index-CHrPxJGG.js";const x=()=>{const s=[{id:1,src:"/advogue.jpeg",alt:"Advouge"},{id:2,src:"/entrophosis.jpeg",alt:"Entrorphosis"},{id:3,src:"/uiux.jpeg",alt:"UI/UX Hackaton"},{id:4,src:"/design.jpeg",alt:"Designing 101"},{id:5,src:"/cloud.jpg",alt:"Event Image 5"},{id:6,src:"   /blockchain.jpg",alt:"Event Image 6"}],[n,i]=o.useState(0);return o.useEffect(()=>{const t=setInterval(()=>{i(r=>(r+1)%s.length)},3e3);return()=>clearInterval(t)},[s.length]),e.jsxs("div",{className:"bg-black text-white py-20 font-sans overflow-hidden",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
    .coverflow-container {
      perspective: 1200px;
      position: relative;
      width: 100%;
      height: 450px;
    }

    .coverflow-image {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      height: 400px;
      width: auto;
      border-radius: 0.75rem;
      border: 2px solid rgba(0, 255, 255, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0004);
    }
    
    @media (max-width: 768px) {
        .coverflow-container {
            height: 350px;
        }
        .coverflow-image {
            height: 300px;
        }
    }
  `}}),e.jsx("div",{className:"container mx-auto px-6",children:e.jsx("div",{className:"text-center mb-16",children:e.jsx("h1",{className:" font-mon font-bold text-4xl md:text-5xl tracking-wider mb-4 uppercase font-mon",children:"Glimpse of Pragyatha"})})}),e.jsx("div",{className:"coverflow-container",children:s.map((t,r)=>{const a=r-n,l=Math.abs(a)<=2,c={transform:`
              rotateY(${a*-35}deg)
              translateX(${a*30}%)
              scale(${1-Math.abs(a)*.2})
            `,opacity:l?"1":"0",zIndex:s.length-Math.abs(a)};return e.jsx("img",{src:t.src,alt:t.alt,className:"coverflow-image",style:c},t.id)})})]})};export{x as default};
