/* structure of data for a tiur */
let Tour = [
  {
    title: "Mount Cameroon",
    destination: "Mount Cameroon, Buea, Cameroon",
    description:
      "Embark on an unforgettable adventure to Mt Cameroon, West Africa’s highest peak and one of the continent’s most active volcanoes. Rising nearly 14,000 feet above sea level, this majestic mountain offers sweeping views, diverse ecosystems, and a thrilling ascent through tropical forests, alpine meadows, and volcanic craters.",
    price: 50000,
    ratings: {
      starcount: 5,
      reviews: 30,
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Trek Start",
        activities: [
          "Arrive in Buea",
          "Begin trek through tropical forest",
          "Reach first refuge hut (~2,000m)",
          "Overnight in tents under the stars",
        ],
      },
      {
        day: 2,
        title: "Summit Push",
        activities: [
          "Ascend through savannah and alpine zones",
          "Reach summit plateau (~4,100m)",
          "Explore volcanic craters and lava flows",
          "Descend to second refuge hut for overnight",
        ],
      },
      {
        day: 3,
        title: "Return & Cultural Exploration",
        activities: [
          "Descend back to Buea",
          "Optional visit to Limbe",
          "Explore black sand beaches",
          "Visit Limbe Botanical Garden",
          "Discover local cuisine and culture",
        ],
      },
    ],
    includes: ["hosting", "feeding", "No Internet"],
    duration: {
      days: 4,
      hours: "",
    },
    images: [
      "../images/mountCam/1.jpg",
      "../images/mountCam/0.jpg",
      "../images/mountCam/3.jpg",
      "../images/mountCam/4.jpeg",
      "../images/mountCam/5.jpeg",
      "../images/mountCam/6.jpeg",
    ],
  },

  {
    title: "Limbe Botanic garden",
    destination: "Limbe",
    description:
      "Established in 1892, this lush sanctuary nestled between the Atlantic Ocean and Mount Cameroon showcases over 1,500 plant species, including rare and endemic flora. Originally a colonial research hub, it now serves as a vibrant center for conservation, education, and leisure.",
    price: 30000,
    ratings: {
      starcount: 4.5,
      reviews: 30,
    },
    itinerary: [
      {
        day: 1,
        title: "forent Tour",
        activities: [
          "Rainforest walking trails",
          "Medicinal plant garden",
          "Ornamental flower collections",
        ],
      },
    ],
    includes: ["Np internet", "2 meals"],
    duration: 3,
    images: [
      "../images/botGarden/0.jpeg",
      "../images/botGarden/1.jpg",
      "../images/botGarden/2.jpeg",
      "../images/botGarden/3.jpeg",
      "../images/botGarden/4.jpeg",
      "../images/botGarden/5.jpeg",
      "../images/botGarden/6.jpeg",
      "../images/botGarden/7.jpeg",
    ],
  },
  {
    title: "Parc De La Mefou",
    destination: "Yaoundé",
    description:
      "More than a wildlife experience, Méfou is a powerful lesson in biodiversity, environmental stewardship, and the fight to preserve Cameroon’s natural heritage. Whether youre a nature lover, a curious traveler, or a family seeking an educational adventure, this peaceful forest refuge delivers unforgettable encounters and meaningful insight.",
    price: 10000,
    ratings: {
      starcount: 4.0,
      reviews: 60,
    },
    itinerary: [
      {
        day: 1,
        title: "Parc de la Méfou Wildlife Experience",
        activities: [
          "08:00 – Depart from Yaoundé",
          "09:00 – Arrive at Parc de la Méfou",
          "09:15 – Guided forest walk begins",
          "09:30 – Observe rescued chimpanzees and gorillas in natural enclosures",
          "10:30 – Learn about Ape Action Africa’s conservation efforts",
          "11:00 – Visit mandrill and monkey habitats",
          "12:00 – Break for refreshments or picnic lunch",
          "13:00 – Optional second walk or photography session",
          "14:00 – Wrap-up and depart from the park",
          "15:00 – Return to Yaoundé",
        ],
      },
    ],

    includes: ["housing", "feeding", "wifi"],
    duration: 3,
    images: [
      "../images/parcde/0.jpeg",
      "../images/parcde/1.jpeg",
      "../images/parcde/2.jpeg",
      "../images/parcde/3.jpeg",
      "../images/parcde/4.jpeg",
      "../images/parcde/5.jpeg",
    ],
  },
];

/* structure of data for travels page */
let travels = [
  {
    title: "Camair",
    from: "younde",
    to: "douala",
    description:
      "We are a full-service travel agency dedicated to crafting unforgettable journeys across Cameroon and beyond. Whether you're seeking a relaxing beach escape, a thrilling mountain trek, or a deep dive into cultural heritage, we handle every detail—from itinerary planning and accommodation to guided tours and local experiences.",
    price: 15000,
    ratings: {
      starCount: 5.0,
      reviews: 101,
    },
    duration: 1,
    images: [
      "../images/camair/default.jpeg",
      "../images/camair/0.jpeg",
      "../images/camair/1.jpeg",
      "../images/camair/2.jpeg",
      "../images/camair/3.jpeg",
      "../images/camair/4.jpeg",
      "../images/camair/5.jpeg",
    ],
  },
  {
    title: "Nso Boyz",
    from: "Ndop",
    to: "Banso",
    description:
      "With expert knowledge of destinations, personalized service, and a passion for exploration, we simplify travel so you can focus on the joy of discovery. From solo travelers to group expeditions, our mission is to turn your travel dreams into reality—safely, smoothly, and memorably.",
    price: 3000,
    duration: 1,
    ratings: {
      starCount: 4.0,
      reviews: 101,
    },
    images: [
      "../images/nsoboyz/0.jpeg",
      "../images/nsoboyz/1.jpeg",
      "../images/nsoboyz/2.jpeg",
      "../images/nsoboyz/3.jpeg",
      "../images/nsoboyz/4.jpeg",
    ],
  },
];

function insertDetails(details){
    let html = `
        <img src='${details.images[0]}' class="w-70 rounded-full " alt="tor image">
                <div class="details col-span-2 md:col-start-2 md:col-span-1  grid gap-0.5 ">
                    <h3 class="font-bold text-2xl">${details.title}</h3>
                    <div class="minors  ml-3 text-2xs">
                        <span class="">${details.destination}</span>
                        <span> <span class="">⭐⭐⭐⭐⭐</span>|  ${details.ratings.starcount} (${details.ratings.reviews})</span>
                    </div>
                    <p class="text-2xs">${details.description}</p>
                </div>
                <div class="md:col-start-2 col-span-2 w-full">
                    <div class="flex gap-2">
                    <p class="font-bold text-black text-2xl">${details.price} frs</p>
                    <button class="bookbtn relative z-6 px-5 hover:bg-teal-600 py-1 ease-in-out hover:scale-110 transition-all duration-500 bg-teal-500 hover:cursor-pointer rounded-full bg">Book Now</button>
                    <span class= "">share</span>
                    </div>
                    <form action="#" class="bg-gray-300 transition-all ease-in-out duration-100 hidden relative bottom-0 w-80   p-2 text-black group-active:flex flex-col justify-center
                    items-center-safe gap-2">
                        <span class="closebtn position absolute transition ease-in duration-500 hover:scale-140 hover:cursor-pointer right-3 top-0 text-2xl text-red-400">x</span>
                        <h1 class=" font-bold text-center text-2xl">Book This Tour</h1>
                        <p class="description text-center">
                            Please ensure all required fields are completed accurately
                             to help us process your booking smoothly.
                        </p>

                        <div class="w-full flex flex-col gap-2">
                            <div class="flex gap-4 bg-white p-2">
                                <img src="./images/name.svg" alt="">
                                <input type="text" required placeholder="Name" class="w-full focus:outline-0">
                            </div>
                            <div class="flex gap-4 bg-white p-2">
                                <img src="./images/email.svg" alt="">
                                <input type="email" required placeholder="Email" class="w-full focus:outline-0">
                            </div>
                            <div class="flex gap-4 bg-white p-2">
                                <img src="./images/phone.svg" alt="">
                                <input type="phone" required placeholder="Phone" class="w-full focus:outline-0">
                            </div>
                            <div class="flex gap-4 bg-white p-2">
                                <img src="./images/email.svg" alt="">
                                <input type="number" required placeholder="Number of persons" min="1" class="w-full focus:outline-0">
                            </div>
                            <div class="flex gap-4 bg-white p-2">
                                <img src="./images/date.svg" alt="">
                                <input type="date" required placeholder="date" class="w-full focus:outline-0">
                            </div>

                            <button type="submit" class="text-white mx-auto px-4 py-1 rounded-2xl w-2/4 hover:scale-90 ease-in-out hover:bg-orange-600 transition-all duration-500 bg-orange-500"> Confirm</button>
                            
                        </div>
                    </form>
                </div>
    `;
  const detailsElem = document.getElementById("details");
  detailsElem.innerHTML = html;
}

function insertItinarery(details) {
  let acumulator = "";
  details.itinerary.forEach((day, idx) => {
    const listTOdo = () => {
      let acc = "";
      day.activities.forEach((activity) => {
        acc += `<ul class="text-red-500 ml-5 text-sm p-0 m-0 list-decimal">${activity}</ul>`;
      });
      return acc;
    };
    let html = `
            <div>
                <h1 class="font-medium text-lg p-0 m-0">Day ${day.day}:  ${
      day.title
    }</h1>
                ${listTOdo()}
            </div>
    `;
    acumulator += html;
  });
  let itinareryarea = document.getElementById("itinerary");
  itinareryarea.innerHTML = acumulator;
}

function insertsGalery(details) {
  let html = "";
  details.images.forEach((image) => {
    html += `<img src="${image}" alt="" class= "w-full h-50"></img>`;
  });

  let galleryElem = document.getElementById("gallery");
  galleryElem.innerHTML = html;
}



function renderPage(Tour) {
  insertDetails(Tour);
  insertsGalery(Tour);
  insertItinarery(Tour);
}


// renderPage(Tour[0])
