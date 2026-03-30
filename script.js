function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

// typing animation
const texts = [
  "Welcome to Plutonium SMP 🚀",
  "Best Minecraft Server 🔥",
  "Join Fast 😈"
];

let i = 0;

setInterval(() => {
  const el = document.querySelector("#home .message p");
  if (el) {
    el.innerText = texts[i % texts.length];
    i++;
  }
}, 2000);


const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#5865F2";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(drawParticles);
}

drawParticles();