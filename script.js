// section switch
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