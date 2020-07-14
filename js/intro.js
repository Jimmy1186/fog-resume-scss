
var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger)

gsap.from(".symbol", { duration: 3, display: "block", rotation: 360, opacity: 1 })
gsap.from(".dark-header", { duration: 1.5, opacity: 1, ease: "power4.out",y:-120 ,delay:1})
gsap.from(".logo",{ duration: 1.5, opacity: 1, ease: "power4.out",y:-120 ,delay:1.4})
gsap.from(".ul-nav",{ duration: 1.5, opacity: 1, ease: "power4.out",y:-120 ,delay:1.8})
gsap.from(".play-music",{ duration: 1.5, opacity: 1, ease: "power4.out",x:400 ,delay:1.8})
// tl.to(".welcome", { duration: 1, y: -100, opacity: 1 }, "-=4.5")



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("dark-header")[0].style.padding = "0";
   
  } else {
    document.getElementsByClassName("dark-header")[0].style.padding = "20px";
   
  }
}


function navMenu(){
  btn = document.getElementsByClassName("menu")[0]
  menu = document.getElementsByClassName("content")[0]
  ulNav = document.getElementsByClassName("ul-nav")[0]
  var i = 0
  if(ulNav.style.display=="block"){
    
    ulNav.style.display="none"
    gsap.to(".dark-header", {
      duration: 0.2,
      clearProps:"height,fontSize"
    });
   
  }
  else{
    ulNav.style.display="block";
    gsap.to(".dark-header", {
      duration: 0.2,
      ease: "none", 
      height:300,
      fontSize:40
    });
   
  }
}

tl.from(".welcome", {
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

var button = document.getElementById("toggle");
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  }
}, false);
var music = document.getElementById("music");
var isPlaying = false;
music.volume = 0.2;
function togglePlay() {
  if (isPlaying) {
    music.pause()
  } else {
    music.play();
  }
};
music.onplaying = function() {
  isPlaying = true;
  document.getElementById("music-animation").classList.add('on')
  // for(i=0;i<5;i++)
  // {
  //  document.getElementsByClassName("bar")[i].classList.add('on')
  // }
  
};
music.onpause = function() {
  isPlaying = false;
  document.getElementById("music-animation").classList.remove('on')
  // for(i=0;i<5;i++)
  // {
  //  document.getElementsByClassName("bar")[i].classList.remove('on')
  // }
  
};

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

function dlBtn(){
 
}