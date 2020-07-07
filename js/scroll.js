const section = document.querySelectorAll('section');
 const square = document.getElementsByClassName("square")[0];
 const gradients = ["#d60303","#ab0505","#740303"];
// const textArea = document.querySelector('text-area');
// const figP1=document.querySelector('fig-p1');

 const options ={
  threshold:0.7
 };


 
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
  entries.forEach(entry=>{
   const className = entry.target.className;
   const activeAnchor = document.querySelector(`[data-page=${className}]`);
   const gradientIndex = entry.target.getAttribute('data-index');
   const coords = activeAnchor.getBoundingClientRect();
   const directions={
    height:coords.height,
    width:coords.width,
    top:coords.top,
    left:coords.left
   };
   if(entry.isIntersecting){
    square.style.setProperty("left",`${directions.left}px`);
    square.style.setProperty("top",`${directions.top}px`);
    square.style.setProperty("width",`${directions.width}px`);
    square.style.setProperty("height",`${directions.height}px`);
    square.style.color = gradients[gradientIndex];
    square.style.opacity = '0.6';
   }
  });
  
}

section.forEach(section=>{
 observer.observe(section);
})