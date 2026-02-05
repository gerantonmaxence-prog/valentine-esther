function yesAnswer() {
  const response = document.getElementById("response");
  response.innerText = "Lets gooooooo";
  createHearts();
}

const noBtn = document.getElementById("noBtn");

// Il fuit dès qu'on s'approche (souris ou doigt)
["mouseover", "touchstart"].forEach(event => {
  noBtn.addEventListener(event, () => {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = containerRect.width - btnWidth;
    const maxY = containerRect.height - btnHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
});

function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = "floatUp 3s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}

// Animation des cœurs
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
