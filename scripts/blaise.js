let Tour = [
  {
    title: "Menchum Falls",
    destination: "Menchum Falls, Northwest, Cameroon",
    description:
      "Marvel at the breathtaking Menchum Falls, a powerful waterfall located in the lush highlands of Cameroon. The roaring cascade creates a dramatic scene surrounded by rich vegetation, making it a hidden natural wonder for eco-tourists and adventure seekers.",
    price: 30000,
    ratings: {
      starcount: 4,
      reviews: 18,
    },
    itinerary: [
      {
        day: 1,
        title: "Journey & Arrival",
        activities: [
          "Depart from Bamenda",
          "Scenic drive through the Northwest highlands",
          "Arrive at Menchum Falls viewpoint",
          "Picnic by the riverside",
        ],
      },
      {
        day: 2,
        title: "Exploration & Nature Walk",
        activities: [
          "Guided hike around the waterfall area",
          "Photography and birdwatching",
          "Learn about local legends",
          "Evening campfire by the falls",
        ],
      },
    ],
    includes: ["transport", "guide", "feeding"],
    duration: {
      days: 2,
      hours: "",
    },
    images: [
      "../images/menchum/1.jpg",
      "../images/menchum/2.jpg",
      "../images/menchum/3.jpg",
      "../images/menchum/4.jpg",
    ],
  },
  {
    title: "Lamido Palace",
    destination: "Lamido Palace, Ngaoundéré, Adamawa, Cameroon",
    description:
      "Step into the grandeur of the Lamido Palace, a historic and cultural seat of the Fulani Lamido in Ngaoundéré. The palace blends traditional architecture with a living heritage, offering visitors a deep dive into Cameroon’s Islamic and Fulani cultural traditions.",
    price: 25000,
    ratings: {
      starcount: 5,
      reviews: 22,
    },
    itinerary: [
      {
        day: 1,
        title: "Cultural Tour",
        activities: [
          "Arrival at Ngaoundéré",
          "Visit the Lamido Palace",
          "Learn about Fulani traditions",
          "Explore the palace courtyard and mosque",
        ],
      },
      {
        day: 2,
        title: "Community Interaction",
        activities: [
          "Attend cultural dances and storytelling",
          "Shop at local markets",
          "Taste traditional Fulani meals",
          "Depart for onward journey",
        ],
      },
    ],
    includes: ["entrance", "guide", "refreshments"],
    duration: {
      days: 2,
      hours: "",
    },
    images: [
      "../images/lamido/1.jpeg",
      "../images/lamido/2.jpeg",
      "../images/lamido/3.jpeg",
      "../images/lamido/4.jpeg",
    ],
  },
  {
    title: "Foumban Royal Palace",
    destination: "Foumban Royal Palace, Foumban, West, Cameroon",
    description:
      "Discover the Foumban Royal Palace, home of the Bamoun kings and a treasure of Cameroon's cultural heritage. This architectural marvel also houses the Museum of Bamoun Arts and Traditions, where centuries of history and craftsmanship come alive.",
    price: 35000,
    ratings: {
      starcount: 5,
      reviews: 40,
    },
    itinerary: [
      {
        day: 1,
        title: "Palace & Museum Tour",
        activities: [
          "Arrival in Foumban",
          "Tour of the Royal Palace",
          "Explore the Bamoun museum",
          "Photography of traditional artifacts",
        ],
      },
      {
        day: 2,
        title: "Cultural Immersion",
        activities: [
          "Attend traditional ceremonies",
          "Visit local artisans",
          "Discover Bamoun craft markets",
          "Taste authentic local cuisine",
        ],
      },
    ],
    includes: ["entrance", "guide", "feeding"],
    duration: {
      days: 2,
      hours: "",
    },
    images: [
      "../images/foumban/1.jpg",
      "../images/foumban/2.jpg",
      "../images/foumban/3.jpg",
      "../images/foumban/4.jpg",
    ],
  },
  {
    title: "Kribi Beaches",
    destination: "Kribi Beaches, South, Cameroon",
    description:
      "Relax on the golden sands of Kribi, Cameroon's most famous beach town. With coconut palms, fresh seafood, and a serene Atlantic breeze, Kribi is a paradise for sunbathers, swimmers, and those seeking a calm coastal escape.",
    price: 20000,
    ratings: {
      starcount: 4,
      reviews: 25,
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Relaxation",
        activities: [
          "Arrival in Kribi",
          "Settle into beachfront hotel",
          "Relax on the beach",
          "Enjoy fresh seafood dinner",
        ],
      },
      {
        day: 2,
        title: "Beach Adventure",
        activities: [
          "Morning swim in the Atlantic",
          "Beach games and water sports",
          "Visit local fishing communities",
          "Sunset walk along the coast",
        ],
      },
    ],
    includes: ["hotel", "feeding", "beach access"],
    duration: {
      days: 2,
      hours: "",
    },
    images: [
      "../images/kribi/1.jpeg",
      "../images/kribi/2.jpeg",
      "../images/kribi/3.jpeg",
      "../images/kribi/4.jpeg",
    ],
  },
  {
    title: "Lobe Waterfalls",
    destination: "Lobe Waterfalls, Kribi, South, Cameroon",
    description:
      "Witness the unique spectacle of the Lobe Waterfalls, where a powerful cascade plunges directly into the Atlantic Ocean. This natural wonder is a UNESCO World Heritage candidate and offers boat rides, cultural encounters, and stunning views.",
    price: 25000,
    ratings: {
      starcount: 5,
      reviews: 28,
    },
    itinerary: [
      {
        day: 1,
        title: "Waterfall Discovery",
        activities: [
          "Boat ride to the falls",
          "Explore surrounding fishing villages",
          "Photography at the ocean-falls junction",
          "Evening seafood feast",
        ],
      },
      {
        day: 2,
        title: "Cultural & Adventure Tour",
        activities: [
          "Guided storytelling of Lobe legends",
          "Canoe ride across the river",
          "Local handicraft shopping",
          "Depart for onward journey",
        ],
      },
    ],
    includes: ["boat ride", "guide", "feeding"],
    duration: {
      days: 2,
      hours: "",
    },
    images: [
      "../images/lobe/1.jpg",
      "../images/lobe/2.jpg",
      "../images/lobe/3.jpg",
      "../images/lobe/4.jpg",
    ],
  },

  {
    title: "Dja Faunal Reserve (UNESCO site)",
    destination: "Dja Faunal Reserve, South-East Cameroon",
    description:
      "Venture into the Dja Faunal Reserve, a UNESCO World Heritage Site and one of Africa's largest and most intact rainforests. Home to gorillas, chimpanzees, elephants, and over 1,500 plant species, it’s a sanctuary for biodiversity and eco-tourism.",
    price: 60000,
    ratings: {
      starcount: 5,
      reviews: 35,
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Forest Entry",
        activities: [
          "Arrival in Somalomo (entry point)",
          "Briefing with conservation guides",
          "Begin guided trek into the rainforest",
          "Set up base camp",
        ],
      },
      {
        day: 2,
        title: "Wildlife Tracking",
        activities: [
          "Track gorillas and chimpanzees",
          "Birdwatching in the dense forest",
          "Learn about medicinal plants",
          "Evening storytelling by local guides",
        ],
      },
      {
        day: 3,
        title: "River & Departure",
        activities: [
          "Canoe trip along the Dja River",
          "Photography and relaxation",
          "Pack up and return to Somalomo",
          "Depart for onward journey",
        ],
      },
    ],
    includes: ["park fees", "guides", "camping equipment", "feeding"],
    duration: {
      days: 3,
      hours: "",
    },
    images: [
      "../images/dja/1.jpg",
      "../images/dja/2.jpg",
      "../images/dja/3.jpg",
      "../images/dja/4.jpg",
    ],
  },
];


// function to render location cards
function tourCards(Tour) {
  console.log(Tour);
  let html = "";
  Tour.forEach((Tour) => {
    console.log(Tour);
    html += `
        <div
                            class="min-w-[90%] sm:min-w-[48%] lg:min-w-[32%] bg-white rounded-xl shadow-md overflow-hidden mx-2">
                            <img class="h-48 w-full object-cover"
                                src="${Tour.images[0]}"
                                alt>
                            <div class="p-4">
                                <h3 class="font-semibold text-lg">${Tour.title}</h3>
                                <!-- Location -->
                                <div
                                    class="flex items-center text-gray-500 text-sm">
                                    <!-- Location Icon -->
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="w-4 h-4 mr-1 text-yellow-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M5.05 3.05a7 7 0 019.9 9.9L10 18.9l-4.95-5.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                   ${Tour.destination}
                                </div>
                                <div class="flex items-center my-2">
                                    <span class="text-yellow-400">★★★★★</span>
                                    <span class="text-gray-600 text-sm ml-2">584
                                        reviews</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p
                                        class="text-lg font-bold text-yellow-500">${Tour.price}
                                        <br>
                                        <span
                                            class="text-sm font-normal text-gray-500">per
                                            person</span>
                                    </p>
                                    <a href="#"
                                        class="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>

  `;
  });

  const toursCard = document.getElementById("carousel");

  toursCard.innerHTML = html;
}

tourCards(Tour);
