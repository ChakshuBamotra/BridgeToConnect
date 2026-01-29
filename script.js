/* Smooth Scroll */
document.querySelectorAll('[data-scroll]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.getElementById(this.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* =========================
   CAPTCHA LOGIC
========================= */

const canvas = document.getElementById("captchaCanvas");
const ctx = canvas.getContext("2d");
const reloadBtn = document.getElementById("reloadCaptcha");
const captchaInput = document.getElementById("captchaInput");
const form = document.querySelector(".contact-form-card form");

let captchaText = "";

function generateCaptchaText() {
  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  let text = "";
  for (let i = 0; i < 6; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
}

function drawCaptcha() {
  captchaText = generateCaptchaText();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#e2e8f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = "28px Inter";
  ctx.fillStyle = "#0f172a";

  // Random rotation per character
  for (let i = 0; i < captchaText.length; i++) {
    const x = 20 + i * 22;
    const y = 35;
    const angle = (Math.random() - 0.5) * 0.5;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillText(captchaText[i], 0, 0);
    ctx.restore();
  }

  // Noise lines
  for (let i = 0; i < 5; i++) {
    ctx.strokeStyle = "#94a3b8";
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.stroke();
  }
}

reloadBtn.addEventListener("click", drawCaptcha);

/* Validate captcha on submit */
if (form) {
  form.addEventListener("submit", function (e) {
    if (captchaInput.value.trim() !== captchaText) {
      e.preventDefault();
      alert("Captcha does not match. Please try again.");
      captchaInput.value = "";
      drawCaptcha();
    }
  });
}


/* Initial load */
drawCaptcha();
const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

const heroHeight = hero.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY > heroHeight - 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// =========================
// COURSE MODAL LOGIC
// =========================

