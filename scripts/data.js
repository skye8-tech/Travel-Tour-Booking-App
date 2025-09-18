let Tour = [
    
    {
        title: "Mount Cameroon",
        destination:'Mount Cameroon, Buea, Cameroon' ,
        description: "Embark on an unforgettable adventure to Mt Cameroon, West Africa’s highest peak and one of the continent’s most active volcanoes. Rising nearly 14,000 feet above sea level, this majestic mountain offers sweeping views, diverse ecosystems, and a thrilling ascent through tropical forests, alpine meadows, and volcanic craters.",
        price: 50000,
        ratings:{
            starcount: 5,
            reviews: 30
        },
        itinerary: [
                {
                day: 1,
                title: "Arrival & Trek Start",
                activities: [
                    "Arrive in Buea",
                    "Begin trek through tropical forest",
                    "Reach first refuge hut (~2,000m)",
                    "Overnight in tents under the stars"
                ]
                },
                {
                day: 2,
                title: "Summit Push",
                activities: [
                    "Ascend through savannah and alpine zones",
                    "Reach summit plateau (~4,100m)",
                    "Explore volcanic craters and lava flows",
                    "Descend to second refuge hut for overnight"
                ]
                },
                {
                day: 3,
                title: "Return & Cultural Exploration",
                activities: [
                    "Descend back to Buea",
                    "Optional visit to Limbe",
                    "Explore black sand beaches",
                    "Visit Limbe Botanical Garden",
                    "Discover local cuisine and culture"
                ]
            }
        ],
        includes : ['hosting', 'feeding', 'No Internet'],
        duration: {
            days: 4,
            hours:''
        },
        images: ['../images/mountCam/1.jpg', 
            '../images/mountCam/0.jpg', 
            '../images/mountCam/3.jpg', 
            '../images/mountCam/4.jpeg', 
            '../images/mountCam/5.jpeg', 
            '../images/mountCam/6.jpeg']
    },

    {
        title: "Limbe Botanic garden",
        destination: 'Limbe',
        description: 'Established in 1892, this lush sanctuary nestled between the Atlantic Ocean and Mount Cameroon showcases over 1,500 plant species, including rare and endemic flora. Originally a colonial research hub, it now serves as a vibrant center for conservation, education, and leisure.',
        price: 30000,
        ratings:{
            starcount: 4.5,
            reviews: 30
        },
        itinerary:[
            {
            day: 1,
            title:'forent Tour',
            activities: [
            "Rainforest walking trails",
            "Medicinal plant garden",
            "Ornamental flower collections",
            ],
        }
        ],
        includes : ['Np internet', '2 meals'],
        duration:  3,
        images: ['../images/botGarden/0.jpeg',
            '../images/botGarden/1.jpg',
            '../images/botGarden/2.jpeg',
            '../images/botGarden/3.jpeg',
            '../images/botGarden/4.jpeg', 
            '../images/botGarden/5.jpeg', 
            '../images/botGarden/6.jpeg', 
            '../images/botGarden/7.jpeg']
    },
    {
        title: "Parc De La Mefou",
        destination: 'Yaoundé',
        description: 'More than a wildlife experience, Méfou is a powerful lesson in biodiversity, environmental stewardship, and the fight to preserve Cameroon’s natural heritage. Whether youre a nature lover, a curious traveler, or a family seeking an educational adventure, this peaceful forest refuge delivers unforgettable encounters and meaningful insight.',
        price: 10000,
        ratings:{
            starcount: 4.0,
            reviews: 60
        },
        itinerary :[
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
                "15:00 – Return to Yaoundé"
                ]
            }],
            
        includes : ['housing', 'feeding', 'wifi'],
        duration: 3,
        images: ['../images/parcde/0.jpeg',
            '../images/parcde/1.jpeg', 
            '../images/parcde/2.jpeg', 
            '../images/parcde/3.jpeg', 
            '../images/parcde/4.jpeg', 
            '../images/parcde/5.jpeg']
    },
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
]
// data structure for travels

let travels = [
    {
        title: "Camair",
        from: 'younde',
        to: 'douala',
        description: "We are a full-service travel agency dedicated to crafting unforgettable journeys across Cameroon and beyond. Whether you're seeking a relaxing beach escape, a thrilling mountain trek, or a deep dive into cultural heritage, we handle every detail—from itinerary planning and accommodation to guided tours and local experiences.",
        price: 15000,
        ratings:{
            starCount: 5.0,
            reviews: 101,
        },
        duration: 1,
        images: ['../images/camair/default.jpeg', 
            '../images/camair/0.jpeg', 
            '../images/camair/1.jpeg', 
            '../images/camair/2.jpeg', 
            '../images/camair/3.jpeg', 
            '../images/camair/4.jpeg', 
            '../images/camair/5.jpeg']
    },
    {
        title: 'Nso Boyz',
        from: 'Ndop',
        to: 'Banso',
        description: "With expert knowledge of destinations, personalized service, and a passion for exploration, we simplify travel so you can focus on the joy of discovery. From solo travelers to group expeditions, our mission is to turn your travel dreams into reality—safely, smoothly, and memorably.",
        price: 3000,
        duration: 1,
        ratings:{
            starCount: 4.0,
            reviews: 101,
        },
        images: ['../images/nsoboyz/0.jpeg', '../images/nsoboyz/1.jpeg', '../images/nsoboyz/2.jpeg', '../images/nsoboyz/3.jpeg', '../images/nsoboyz/4.jpeg']
    },
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
]

class Data{
  constructor(){
    this.all = travels.concat(Tour)
  }

  filters({keyword, from, to,}){
    console.log(keyword, Boolean(from), to)
    let filterd = []
    let key = []
    let locationfrom=[]
    let locationTo = []
    /*by keyword */
    this.all.forEach(event=>{
      for (let e in event){
        switch(e){
          case 'description':
            if (keyword && event[e].toLowerCase().includes(keyword.toLowerCase())){
              console.log(e)
              key.push(event)
            }
            break
            case 'destination':
              if (keyword && event[e].toLowerCase().includes(keyword.toLowerCase())){
                console.log(e, keyword)
                key.push(event)
              }
              break
              case 'to':
                if (to && event[e].toLowerCase().includes(to.toLowerCase())){
              console.log(e)
              locationTo.push(event)
            }
            // console.log(event[e].toLowerCase().includes(obj.to.toLowerCase()),event[e].toLowerCase(), )
            break
            case 'from':
              if (from && event[e].toLowerCase().includes(from.toLowerCase())){
              console.log(e)
                // key.push(event)
                locationfrom.push(event)
            }
            break
          case 'includes':
            if(keyword && event[e].join(' ').toLowerCase().includes(keyword.toLowerCase())){

              key.push(event)
            }
            break
        }
      }
    })

    filterd = key.concat(locationTo.concat(locationfrom))
    let unique = [...new Set(filterd)]
 return unique
  }
}

export let available = new Data

class User{
  constructor(){
    this.booked =JSON.parse(localStorage.getItem('bookedStuff'))||[]
  }
  saveToStorage(){
    localStorage.setItem("bookedStuff",JSON.stringify(this.booked))
  }

  book(obj){
    this.booked.push(obj)
    this.saveToStorage()
  }
}

export let user = new User


