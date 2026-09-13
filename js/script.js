// ========================================
// ROTATING WORDS IN HERO
// ========================================

const words = [
  'web apps',
  'REST APIs',
  'CLI tools',
  'fast backends',
  'clean UIs',
  'open source'
];

let wi = 0;

const rotatingWord =
  document.getElementById('rotating-word');


function rotateWord() {

  rotatingWord.style.opacity = '0';

  setTimeout(() => {

    wi = (wi + 1) % words.length;

    rotatingWord.textContent = words[wi];

    rotatingWord.style.opacity = '1';

  }, 300);
}


rotatingWord.style.transition =
  'opacity 0.3s';


setInterval(rotateWord, 2200);


// ========================================
// SCROLL FADE-IN
// ========================================

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

        }

      });

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll('.fade-in')
  .forEach((element) => {

    observer.observe(element);

  });