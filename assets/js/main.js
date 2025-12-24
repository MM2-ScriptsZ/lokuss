// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Rotating animated word
const words = ['FREE','TOP','SECURE','FAST'];
const animatedWord = document.querySelector('.animated-word');
let wordIndex = 0;
setInterval(() => {
    wordIndex = (wordIndex + 1) % words.length;
    animatedWord.textContent = words[wordIndex];
}, 2000);
