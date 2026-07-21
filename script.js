/* ===========================
   LOADING
=========================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

loader.style.visibility="hidden";

},2500);

});

/* ===========================
   MUSIC
=========================== */

const music=document.getElementById("music");

music.volume=0.5;

document.body.addEventListener("click",()=>{

music.play().catch(()=>{});

},{once:true});

/* ===========================
   PARTICLES
=========================== */

const particles=document.getElementById("particles");

function createParticle(){

const dot=document.createElement("div");

dot.className="dot";

const size=Math.random()*6+2;

dot.style.width=size+"px";
dot.style.height=size+"px";

dot.style.left=Math.random()*100+"%";

dot.style.animationDuration=(Math.random()*8+8)+"s";

particles.appendChild(dot);

setTimeout(()=>{

dot.remove();

},16000);

}

setInterval(createParticle,150);

/* ===========================
   CARD 3D
=========================== */

const card=document.querySelector(".card");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/35;

const y=(window.innerHeight/2-e.clientY)/35;

card.style.transform=
`translate(-50%,-50%)
rotateY(${x}deg)
rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave",()=>{

card.style.transform="translate(-50%,-50%)";

});
/* ===========================
   HEART EFFECT
=========================== */

document.addEventListener("click",(e)=>{

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";
heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";
heart.style.fontSize="24px";
heart.style.color="#ff3366";
heart.style.pointerEvents="none";
heart.style.zIndex="99999";
heart.style.transition="all 1s ease";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120px) scale(2)";
heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},1000);

});

/* ===========================
   CURSOR GLOW
=========================== */

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.background="#00d9ff";
glow.style.pointerEvents="none";
glow.style.filter="blur(10px)";
glow.style.zIndex="99999";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-9+"px";
glow.style.top=e.clientY-9+"px";

});

/* ===========================
   GALLERY ZOOM
=========================== */

document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=()=>{

const bg=document.createElement("div");

bg.style.position="fixed";
bg.style.left="0";
bg.style.top="0";
bg.style.width="100%";
bg.style.height="100%";
bg.style.background="rgba(0,0,0,.9)";
bg.style.display="flex";
bg.style.justifyContent="center";
bg.style.alignItems="center";
bg.style.zIndex="999999";

const photo=document.createElement("img");

photo.src=img.src;

photo.style.maxWidth="90%";
photo.style.maxHeight="90%";
photo.style.borderRadius="20px";
photo.style.boxShadow="0 0 40px rgba(255,255,255,.3)";

bg.appendChild(photo);

bg.onclick=()=>{

bg.remove();

};

document.body.appendChild(bg);

};

});

/* ===========================
   BUTTON RIPPLE
=========================== */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const size=80;

ripple.style.position="absolute";
ripple.style.width=size+"px";
ripple.style.height=size+"px";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.4)";
ripple.style.left=(e.offsetX-size/2)+"px";
ripple.style.top=(e.offsetY-size/2)+"px";
ripple.style.transform="scale(0)";
ripple.style.transition=".6s";

btn.appendChild(ripple);

setTimeout(()=>{

ripple.style.transform="scale(4)";
ripple.style.opacity="0";

},20);

setTimeout(()=>{

ripple.remove();

},600);

});

});
/* ===========================
   PLAY / PAUSE MUSIC
=========================== */

const player = document.querySelector(".player");

if(player){

player.style.cursor="pointer";

player.addEventListener("click",()=>{

if(music.paused){

music.play();

player.classList.add("playing");

}else{

music.pause();

player.classList.remove("playing");

}

});

}

/* ===========================
   AUTO CHANGE BIO
=========================== */

const bio=document.querySelector(".bio");

const texts=[

"🎵 Official Artist",

"🎧 Music Producer",

"❤️ Thank You For Listening",

"✨ Welcome To My Website"

];

let index=0;

setInterval(()=>{

if(!bio) return;

bio.style.opacity="0";

setTimeout(()=>{

index++;

if(index>=texts.length){

index=0;

}

bio.innerHTML=texts[index];

bio.style.opacity="1";

},300);

},3500);

/* ===========================
   FLOATING STARS
=========================== */

function createStar(){

const star=document.createElement("div");

star.style.position="fixed";

star.style.width="2px";

star.style.height="2px";

star.style.background="#fff";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top="-10px";

star.style.opacity=Math.random();

star.style.pointerEvents="none";

star.style.zIndex="-1";

document.body.appendChild(star);

let y=-10;

const speed=Math.random()*3+1;

const move=setInterval(()=>{

y+=speed;

star.style.top=y+"px";

if(y>window.innerHeight){

clearInterval(move);

star.remove();

}

},16);

}

setInterval(createStar,300);

/* ===========================
   AVATAR GLOW
=========================== */

const avatar=document.querySelector(".avatar");

if(avatar){

setInterval(()=>{

avatar.animate([

{

boxShadow:"0 0 10px #fff"

},

{

boxShadow:"0 0 35px #00d9ff"

},

{

boxShadow:"0 0 10px #fff"

}

],{

duration:2000

});

},2200);

}

/* ===========================
   SMOOTH PAGE
=========================== */

document.body.style.opacity="0";

window.addEventListener("load",()=>{

setTimeout(()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

},200);

});

/* ===========================
   END
=========================== */

console.log("Tran Ba Hieu Official Website Loaded");