const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const dotsContainer = document.getElementById("dots");

let cards = Array.from(carousel.children);
let index = 1;
let autoplay = true;
let intervalId;

// Clone first and last for infinite loop
const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);
carousel.insertBefore(lastClone, cards[0]);
carousel.appendChild(firstClone);
cards = Array.from(carousel.children);

function getCardWidth() {
  return cards[0].offsetWidth + 16; // account for mx-2 spacing
}

function setPosition() {
  carousel.style.transform = `translateX(-${index * getCardWidth()}px)`;
}

function updateDots() {
  dotsContainer.querySelectorAll("button").forEach((dot, i) => {
    dot.classList.toggle("bg-blue-600", i + 1 === index);
    dot.classList.toggle("bg-gray-300", i + 1 !== index);
  });
}

function createDots() {
  dotsContainer.innerHTML = "";
  for (let i = 0; i < cards.length - 2; i++) {
    const dot = document.createElement("button");
    dot.className = "w-3 h-3 rounded-full bg-gray-300";
    dot.addEventListener("click", () => {
      index = i + 1;
      setPosition();
      updateDots();
    });
    dotsContainer.appendChild(dot);
  }
}

function nextSlide() {
  if (index >= cards.length - 1) return;
  index++;
  setPosition();
  updateDots();
}

function prevSlide() {
  if (index <= 0) return;
  index--;
  setPosition();
  updateDots();
}

carousel.addEventListener("transitionend", () => {
  if (cards[index].isEqualNode(firstClone)) {
    index = 1;
    carousel.style.transition = "none";
    setPosition();
    setTimeout(() => (carousel.style.transition = "transform 0.5s ease"), 0);
  }
  if (cards[index].isEqualNode(lastClone)) {
    index = cards.length - 2;
    carousel.style.transition = "none";
    setPosition();
    setTimeout(() => (carousel.style.transition = "transform 0.5s ease"), 0);
  }
});

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function startAutoplay() {
  intervalId = setInterval(() => {
    nextSlide();
  }, 4000);
}

function stopAutoplay() {
  clearInterval(intervalId);
}

carousel.addEventListener("mouseenter", stopAutoplay);
carousel.addEventListener("mouseleave", startAutoplay);

// Initialize
window.addEventListener("load", () => {
  carousel.style.transition = "transform 0.5s ease";
  setPosition();
  createDots();
  updateDots();
  startAutoplay();
});
