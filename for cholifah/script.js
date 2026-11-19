// ====== KONTROL LAYAR ======
const introScreen = document.getElementById('intro-screen');
const mainScreen = document.getElementById('main-screen');
const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', () => {
  introScreen.classList.remove('active');
  mainScreen.classList.add('active');
  startConfetti();
  playMusic(); // opsional, kalau ada file music.mp3
});

// ====== CONFETTI ======
const confettiLayer = document.getElementById('confetti');
const colors = ['#ff4d94', '#ffd700', '#66ffff', '#ff66cc', '#99ff99', '#ffa500'];

function startConfetti() {
  setInterval(() => {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiLayer.appendChild(piece);
    setTimeout(() => piece.remove(), 4500);
  }, 200);
}

// ====== PESAN MOTIVASI RANDOM ======
const motivasiList = [
  "Kamu kuat, kamu hebat, kamu berharga. 💖",
  "Jarak cuma angka, hati kita tetap dekat. 🌏❤️",
  "Kerja kerasmu hari ini = masa depan cerahmu. 🌟",
  "Kalau capek, istirahat. Jangan menyerah ya. 💪",
  "Aku bangga punya teman sehebat kamu. 🤗",
  "Di negeri orang, kamu tetap bintang. ✨",
  "Satu langkah lagi menuju impianmu. 🚀",
  "Kamu nggak sendiri — aku selalu dukung dari sini. 💌"
];

const motivasiTeks = document.getElementById('motivasi-teks');
const gantiBtn = document.getElementById('ganti-motivasi');

gantiBtn.addEventListener('click', () => {
  let idx;
  do {
    idx = Math.floor(Math.random() * motivasiList.length);
  } while (motivasiList[idx] === motivasiTeks.textContent);

  motivasiTeks.style.opacity = 0;
  setTimeout(() => {
    motivasiTeks.textContent = motivasiList[idx];
    motivasiTeks.style.opacity = 1;
  }, 300);
});

// ====== TOMBOL PELUK VIRTUAL ======
let loveCount = 0;
const loveBtn = document.getElementById('love-btn');
const loveCountEl = document.getElementById('love-count');

loveBtn.addEventListener('click', () => {
  loveCount++;
  loveCountEl.textContent = `Peluk terkirim: ${loveCount} 🤗`;
  loveBtn.textContent = `Peluk Terkirim! 🤗 (${loveCount})`;

  // Efek hati melayang
  for (let i = 0; i < 8; i++) {
    setTimeout(() => spawnHeart(), i * 80);
  }
});

function spawnHeart() {
  const heart = document.createElement('div');
  heart.textContent = '❤️';
  heart.style.position = 'fixed';
  heart.style.left = (Math.random() * 100) + 'vw';
  heart.style.bottom = '0';
  heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = 1000;
  heart.style.transition = 'transform 2.5s ease-out, opacity 2.5s';
  document.body.appendChild(heart);

  requestAnimationFrame(() => {
    heart.style.transform = `translateY(-${window.innerHeight}px) scale(1.5)`;
    heart.style.opacity = 0;
  });

  setTimeout(() => heart.remove(), 2600);
}

// ====== MUSIK OPSIONAL ======
function playMusic() {
  const audio = new Audio('music.mp3'); // taruh music.mp3 di folder
  audio.loop = true;
  audio.volume = 0.3;
  audio.play().catch(() => {
    // Browser blok autoplay, abaikan saja
  });
}