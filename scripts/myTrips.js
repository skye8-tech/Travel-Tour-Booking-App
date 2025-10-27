// persis main.js
import { user } from "./data.js";
let data = JSON.parse(localStorage.getItem('bookedStuff'))

// loading and adding trips from local Storage
function addTrip({details,user,id}) {
  const container = document.getElementById("tripList"); // 👈 match your HTML
  let start = new Date(user.date)
  let date =user.bokedOn.split('/').reverse().join('-')
  let bookedon = new Date(date)
  const options = {
    weekday: "long",   // "Friday"
    year: "numeric",   // 2025
    month: "long",     // "September"
    day: "numeric"     // 18
  };
  
  // gets departure date
  let departure = start.toLocaleDateString("en-US", options).split(/[ ,]+/);
  
  //gets date booked
  let booked = bookedon.toLocaleDateString("en-US", options).split(/[ ,]+/);

// compute end day set it to long date
start.setDate(start.getDate()+ details.duration)
let end = start.toLocaleDateString("en-US", options).split(/[ ,]+/);

const tripCard = document.createElement("div");
  tripCard.className =
    "trip flex flex-col md:flex-row md:items-center md:justify-between border rounded-lg shadow-sm p-4";

  tripCard.innerHTML = `
    <img src="${details.images[0]}" alt="${details.title}" class="rounded-md w-full md:w-40 h-32 object-cover">
    <div class="flex-1 px-4 text-sm text-gray-600 mt-3 md:mt-0">
      <span class="px-2 py-1 bg-green-200 text-green-800 text-xs font-bold rounded">${date < user.date? 'upcoming': (date === user.date ? "Today": "Past")}</span>
      <p class="mt-2">${details.description}</p>
    </div>
    <div class="flex justify-around md:space-x-8 text-center text-sm text-gray-700 mt-3 md:mt-0">
      <div>
        <p>Booked on</p>
        <p class="font-bold text-lg">${booked[2]}<span class="block uppercase">${booked[1]}</span><span class="text-sm">${booked[3]}</span></p>
      </div>
      <div>
        <p>Departure</p>
        <p class="font-bold text-lg">${departure[2]}<span class="block uppercase">${departure[1]}</span><span class="text-sm">${departure[3]}</span></p>
      </div>
    </div>
    <div class="flex flex-col items-end space-y-2 mt-3 md:mt-0">
      <button onclick="openCancelModal(this, ${cancelTrip(id)})" class="text-pink-500 hover:underline">Cancel Tour</button>
      <button onclick="openRatingModal(this)" class="text-blue-600 hover:underline">Rate Tour</button>
      <div class="stars flex space-x-1 text-yellow-500 text-lg">
        <span>★</span><span>★</span><span>★</span><span>☆</span><span>☆</span>
      </div>
    </div>
  `;

  container.appendChild(tripCard);
}

const cancelTrip = (id)=>{
  data = data?.filter(data=> data.id !=id)
  user.booked = data
  user.saveToStorage()
}

// Loop through all tours
data?.forEach(t => addTrip(t));

//handles modals
