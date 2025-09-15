/* Updated structure of data for Tours in Cameroon */
let tours = [
  {
    title: "Waza National Park",
    destination: "Far North Region, Cameroon",
    description:
      "Discover Cameroon’s premier safari destination. Waza National Park is home to elephants, giraffes, lions, antelopes, and hundreds of bird species. Its vast savannah landscapes and rich wildlife make it one of Africa’s hidden gems for eco-tourism.",
    price: 40000,
    ratings: {
      starCount: 4.7,
      reviews: 120,
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Safari Drive",
        activities: [
          "Arrive at Waza town",
          "Morning game drive in the park",
          "Spot giraffes, antelopes, and elephants",
          "Overnight at eco-lodge near the park",
        ],
      },
      {
        day: 2,
        title: "Big Cats & Birdwatching",
        activities: [
          "Early morning safari for lions and hyenas",
          "Guided birdwatching tour",
          "Picnic lunch in the savannah",
          "Evening campfire with local storytelling",
        ],
      },
      {
        day: 3,
        title: "Cultural Discovery & Departure",
        activities: [
          "Visit local Kotoko villages",
          "Learn about traditional crafts",
          "Return journey from Waza",
        ],
      },
    ],
    includes: ["lodging", "meals", "guided safaris"],
    duration: { days: 3, hours: "" },
    images: [
      "../images/lake oku/0.jpg",
      "../images/waza/1.jpg",
      "../images/waza/2.jpg",
      "../images/waza/3.jpg",
    ],
  },
  {
    title: "Kribi Waterfalls (Chutes de la Lobé)",
    destination: "Kribi, South Region, Cameroon",
    description:
      "Experience the breathtaking Lobé Waterfalls, where the river plunges directly into the Atlantic Ocean. A UNESCO heritage candidate, this site combines stunning natural beauty with cultural encounters among local fishing communities.",
    price: 25000,
    ratings: {
      starCount: 4.8,
      reviews: 200,
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Waterfall Tour",
        activities: [
          "Arrive in Kribi",
          "Boat ride to Lobé Waterfalls",
          "Guided tour with history and legends",
          "Fresh seafood dinner by the beach",
        ],
      },
      {
        day: 2,
        title: "Beach Relaxation & Culture",
        activities: [
          "Relax on Kribi’s white sandy beaches",
          "Optional canoe trip along the Lobé River",
          "Evening traditional dance performance",
        ],
      },
    ],
    includes: ["meals", "transport", "guided tours"],
    duration: { days: 2, hours: "" },
    images: [
      "../images/kribi/0.jpg",
      "../images/kribi/1.jpg",
      "../images/kribi/2.jpg",
      "../images/kribi/3.jpg",
    ],
  },
  {
    title: "Foumban Royal Palace & Museum",
    destination: "Foumban, West Region, Cameroon",
    description:
      "Step into Cameroon’s cultural heartland. The Foumban Royal Palace, seat of the Bamoun kings, is a masterpiece of African architecture and heritage. Its museum showcases centuries of art, thrones, masks, and royal treasures.",
    price: 15000,
    ratings: {
      starCount: 4.5,
      reviews: 85,
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Royal Palace Tour",
        activities: [
          "Arrive in Foumban",
          "Guided tour of the Bamoun Royal Palace",
          "Explore the museum’s artifacts",
          "Evening stroll through Foumban’s craft market",
        ],
      },
      {
        day: 2,
        title: "Cultural Immersion & Departure",
        activities: [
          "Meet local artisans and sculptors",
          "Learn about Bamoun history and traditions",
          "Taste local dishes before departure",
        ],
      },
    ],
    includes: ["entrance fees", "guides", "meals"],
    duration: { days: 2, hours: "" },
    images: [
      "../images/foumban/0.jpg",
      "../images/foumban/1.jpg",
      "../images/foumban/2.jpg",
      "../images/foumban/3.jpg",
    ],
  },
];

/* Updated structure of data for Travels */
let travels = [
  {
    title: "General Express",
    from: "Yaoundé",
    to: "Douala",
    description:
      "Reliable intercity transport linking Cameroon’s busiest cities. General Express offers safe, comfortable, and timely journeys with professional drivers and modern buses.",
    price: 12000,
    ratings: {
      starCount: 4.6,
      reviews: 250,
    },
    duration: 1,
    images: [
      "../images/general/0.jpg",
      "../images/general/1.jpg",
      "../images/general/2.jpg",
    ],
  },
  {
    title: "Finexs Voyage",
    from: "Douala",
    to: "Bafoussam",
    description:
      "A trusted name in Cameroonian travel, Finexs Voyage ensures smooth trips with air-conditioned buses, onboard amenities, and excellent customer service.",
    price: 10000,
    ratings: {
      starCount: 4.4,
      reviews: 190,
    },
    duration: 1,
    images: [
      "../images/finexs/0.jpg",
      "../images/finexs/1.jpg",
      "../images/finexs/2.jpg",
    ],
  },
];
