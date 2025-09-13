// carousel functionally

const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const dotsContainer = document.getElementById("dots");

let cards = Array.from(carousel.children);
let index = 1;
let autoplay;
let startX = 0;
let isDragging = false;

// Clone first and last for infinite loop
const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);
carousel.insertBefore(lastClone, cards[0]);
carousel.appendChild(firstClone);

cards = Array.from(carousel.children);

function getCardWidth() {
  return cards[0].offsetWidth + 16;
}

function setPosition() {
  carousel.style.transform = `translateX(-${index * getCardWidth()}px)`;
}

window.addEventListener("load", () => {
  setPosition();
  updateDots();
});

// Create dots
for (let i = 0; i < cards.length - 2; i++) {
  const dot = document.createElement("button");
  dot.classList.add("w-3", "h-3", "rounded-full", "bg-gray-400");
  dot.addEventListener("click", () => {
    index = i + 1;
    slide();
    resetAutoplay();
  });
  dotsContainer.appendChild(dot);
}

function updateDots() {
  [...dotsContainer.children].forEach((dot, i) => {
    dot.classList.remove("bg-emerald-600");
    dot.classList.add("bg-gray-400");
    if (i === index - 1) dot.classList.add("bg-emerald-600");
  });
}

function slide() {
  carousel.style.transition = "transform 0.5s ease-in-out";
  setPosition();
  updateDots();
}

function nextSlide() {
  if (index >= cards.length - 1) return;
  index++;
  slide();
}

function prevSlide() {
  if (index <= 0) return;
  index--;
  slide();
}

carousel.addEventListener("transitionend", () => {
  if (cards[index].isEqualNode(firstClone)) {
    carousel.style.transition = "none";
    index = 1;
    setPosition();
  }
  if (cards[index].isEqualNode(lastClone)) {
    carousel.style.transition = "none";
    index = cards.length - 2;
    setPosition();
  }
});

// Autoplay
function startAutoplay() {
  autoplay = setInterval(() => {
    nextSlide();
  }, 8000);
}

function resetAutoplay() {
  clearInterval(autoplay);
  startAutoplay();
}

// Controls
nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoplay();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoplay();
});

// Pause on hover
carousel.parentElement.addEventListener("mouseenter", () =>
  clearInterval(autoplay)
);
carousel.parentElement.addEventListener("mouseleave", () => startAutoplay());

// Swipe support (mobile)
carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
  clearInterval(autoplay);
});

carousel.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diff = currentX - startX;
  carousel.style.transition = "none";
  carousel.style.transform = `translateX(-${index * getCardWidth() - diff}px)`;
});

carousel.addEventListener("touchend", (e) => {
  isDragging = false;
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (diff > 50) {
    prevSlide();
  } else if (diff < script - 50) {
    nextSlide();
  } else {
    slide();
  }
  resetAutoplay();
});

// Resize handling
window.addEventListener("resize", () => setPosition());

startAutoplay();
// Trigger fade-in when page loads
window.addEventListener("load", () => {
  document.querySelector(".fade-in-up").style.opacity = "1";
});

function insertFooter() {
  let FooterElem = document.getElementById("footer");
  console.log(FooterElem);
  FooterElem.innerHTML = `
    <div class="grid grid-flow-col grid-row-4 bg-white gap-4 font-light mt-32">
        <div >
                <h1 class="font-bold ml-4">Follow us</h1>
                <i class="fa-brands fa-facebook"></i>
                 <i class="fa-solid fa-xmark"></i>
                <i class="fa-brands fa-instagram"></i>
             </div>
             <div>
            <ul>
                <h1 class="font-bold">international flights</h1>
                <li><a href="">international flights</a></li>
                
          </ul>
             </div>
             <div>
                <h1 class="font-bold">Company</h1>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Term & Condition</a></li>
                    <li><a href="">Privacu policy</a></li>
                    <li><a href="">Booking Rules</a></li>
                </ul>
             </div>
             <div>
                <h1 class="font-bold">Address</h1>
                <i class="fa-solid fa-location-dot font-light"></i>
                Korem ipsum sit amet, consectetur<br>
                adipisci dolor sit amet, cong elit
                <h1 class="font-bold">Phone</h1>
                <ul>
                    
                    <li> <i class="fa-solid fa-mobile"></i>01-4821579</li>
                    <li><i class="fa-solid fa-mobile"></i>(+237) 673639542</li>
                </ul>
                <h1 class="font-bold mt-4">CHAT WITH US ON</h1>
                <span> <i class="fa-brands fa-viber "></i>Viber</span><br>
                <span><i class="fa-brands fa-whatsapp"></i>Whats App</span>
                <h1 class="font-bold">Mail</h1>
                <span><i class="fa-solid fa-envelope"></i>thuk@thuktravels.com</span>
             </div>
            </div>
    `;
}
insertFooter();
