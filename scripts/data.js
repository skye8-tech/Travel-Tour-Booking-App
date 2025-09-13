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
    
]


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
]