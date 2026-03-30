const rotatingHeadlines = [
  "Active chats, clan wars, and late-night voice rooms",
  "Giveaways, events, and staff that actually respond",
  "A survival SMP built around real community energy",
  "Discord hype outside the game, adventure inside the game"
];

const headlineNode = document.getElementById("rotatingHeadline");
let headlineIndex = 0;

if (headlineNode) {
  window.setInterval(() => {
    headlineIndex = (headlineIndex + 1) % rotatingHeadlines.length;
    headlineNode.textContent = rotatingHeadlines[headlineIndex];
  }, 2600);
}

const revealNodes = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealNodes.length > 0) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18
    }
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}
