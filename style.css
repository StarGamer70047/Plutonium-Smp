function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

/* Fake chat messages */
const chatBox = document.getElementById("chatBox");
const messages = [
  "Welcome to Lunar Rewadz 🚀",
  "New player joined!",
  "Event starting soon 🔥",
  "Check Minecraft server 🎮"
];

let i = 0;

setInterval(() => {
  if(chatBox){
    const msg = document.createElement("div");
    msg.className = "message";
    msg.innerText = messages[i % messages.length];
    chatBox.appendChild(msg);
    i++;
  }
}, 2000);

/* Background particles */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "white";
  
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });
  
  requestAnimationFrame(draw);
}

draw();
