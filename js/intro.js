
gsap.registerPlugin(ScrollTrigger)


gsap.to(".open", { duration: 4, display: "none",  opacity: 0,ease:"none" })
gsap.from(".symbol", { duration: 4, display: "block", rotation: 360, opacity: 1 })
gsap.from(".dark-header", { duration: 1.5, opacity: 0.3, ease: "power4.out",y:-120 ,delay:0.3})
gsap.from(".logo",{ duration: 1.5, opacity: 1, ease: "power4.out",y:-120 ,delay:1.4})
gsap.from(".ul-nav",{ duration: 1.5, opacity: 1, ease: "power4.out",y:-120,delay:1.8})
gsap.from(".play-music",{ duration: 1.5, opacity: 1, ease: "power4.out",x:400 ,delay:1.8})
// tl.to(".welcome", { duration: 1, y: -100, opacity: 1 }, "-=4.5")

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




function navMenu(){
  btn = document.getElementsByClassName("menu")[0]
  menu = document.getElementsByClassName("content")[0]
  ulNav = document.getElementsByClassName("ul-nav")[0]
  var i = 0
  if(ulNav.style.display=="block"){
    
    ulNav.style.display="none";
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

