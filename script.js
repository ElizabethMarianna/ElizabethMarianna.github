const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random()-0.5)*0.5, vy: (Math.random()-0.5)*0.5, r: Math.random()*2+0.5 });
}

canvas.addEventListener('click', e => {
  for (let i = 0; i < 10; i++) {
    stars.push({ x: e.clientX, y: e.clientY, vx: (Math.random()-0.5)*1, vy: (Math.random()-0.5)*1, r: Math.random()*2+0.5 });
  }
});

function animateStars() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    s.x += s.vx;
    s.y += s.vy;
    if (s.x < 0 || s.x > canvas.width || s.y < 0 || s.y > canvas.height) {
      s.x = Math.random() * canvas.width;
      s.y = Math.random() * canvas.height;
    }
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  });
  requestAnimationFrame(animateStars);
}
animateStars();

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-bar ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});