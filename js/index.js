window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("dark-header")[0].style.padding = "0";
    document.getElementsByClassName("logo")[0].style.width = "30px";
   
  } else {
    document.getElementsByClassName("dark-header")[0].style.padding = "20px";
    document.getElementsByClassName("logo")[0].style.width = "50px";
   
  }
}


gsap.from(".welcome", {
 scrollTrigger: {
  trigger: ".welcome",
 },
 duration: 2,
 opacity: 0,
 ease: "power4.out",
 x:-100,
 delay:0.5
})

gsap.from(".grid--item", {
 scrollTrigger: {
   trigger: ".grid--item",
  },
 duration: 2,
 scale: 0.5, 
 opacity: 0, 
 delay: 0.5, 
 stagger: 0.2,
 ease: "none", 
});

gsap.from(".contact", {
 scrollTrigger: {
   trigger: ".contact",
  },
 duration: 0.6,
 opacity: 0, 
 y:-150,
 ease: "none", 
});

var tlSection = gsap.timeline();



// function line(){
//   document.getElementsByClassName("lineBtn")[0].classList.add('share');
// }

// var photo = new Array();
//   photo[0]= "./index-img/p1.jpg"
//   photo[1]= "./index-img/p3.jpg"
//   photo[2]= "./index-img/p4.jpg"
//   photo[3]= "./index-img/p5.jpg"
//   photo[4]= "./index-img/p6.jpg"
//   photo[5]= "./index-img/p7.jpg"
//   photo[6]= "./index-img/p8.jpg"
//   photo[7]= "./index-img/p9.jpg"
//   photo[8]= "./index-img/p10.jpg"
//   photo[9]= "./index-img/p11.jpg"
//   photo[10]= "./index-img/p12.jpg"
//   photo[11]= "./index-img/p13.jpg"
//   photo[12]= "./index-img/p14.jpg"


//   var size = photo.length;
//   var x = Math.floor(size*Math.random());
//   var rdPhoto = photo[x];

//    y = document.querySelectorAll(".img");

//   for(i=0;i<size;i++){
//     y[i].setAttribute('src',rdPhoto[i]);
//   }

gsap.from(".text-area", {
scrollTrigger: {
 trigger: ".text-area",

},
duration: 2,
opacity: 0,
ease: "power4.out",
x:-30
})
gsap.from(".fig-p1", {
scrollTrigger: {
 trigger: ".fig-p1",

},
duration: 2,
opacity: 0,
ease: "power4.out",
x:-30
});

gsap.from(".text-area2", {
scrollTrigger: {
 trigger: ".text-area2",

},
duration: 2,
opacity: 0,
ease: "power4.out",
x:-30
})
gsap.from(".fig-p2", {
scrollTrigger: {
 trigger: ".fig-p2",

},
duration: 2,
opacity: 0,
ease: "power4.out",
x:-30
});



gsap.from(".text-area3", {
scrollTrigger: {
 trigger: ".text-area3",

},
duration: 2,
opacity: 0,
ease: "power4.out",
x:-30
})
gsap.from(".fig-p3", {
scrollTrigger: {
 trigger: ".fig-p3",

},
duration: 2,
opacity: 0,
ease: "power4.out",
x:-30
});

gsap.from(".text-area4", {
scrollTrigger: {
 trigger: ".text-area4",

},
duration: 2,
opacity: 0,
ease: "power4.out",
x:-30
})
gsap.from(".fig-p4", {
scrollTrigger: {
 trigger: ".fig-p4",

},
duration: 2,
opacity: 0,
ease: "power4.out",
x:-30
});

gsap.from(".text-area5", {
scrollTrigger: {
 trigger: ".text-area5",

},
duration: 2,
opacity: 0,
ease: "power4.out",
x:-30
})
gsap.from(".fig-p5", {
scrollTrigger: {
 trigger: ".fig-p5",

},
duration: 2,
opacity: 0,
ease: "power4.out",
x:-30
});

