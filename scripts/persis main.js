// persis main.js

function addTrip(trip) {
  const container = document.getElementById("tripList"); // 👈 match your HTML

  const tripCard = document.createElement("div");
  tripCard.className =
    "trip flex flex-col md:flex-row md:items-center md:justify-between border rounded-lg shadow-sm p-4";

  tripCard.innerHTML = `
    <img src="${trip.images[0]}" alt="${trip.title}" class="rounded-md w-full md:w-40 h-32 object-cover">
    <div class="flex-1 px-4 text-sm text-gray-600 mt-3 md:mt-0">
      <span class="px-2 py-1 bg-green-200 text-green-800 text-xs rounded">upcoming</span>
      <p class="mt-2">${trip.description}</p>
    </div>
    <div class="flex justify-around md:space-x-8 text-center text-sm text-gray-700 mt-3 md:mt-0">
      <div>
        <p>Booked on</p>
        <p class="font-bold text-lg">25 <span class="block uppercase">September</span><span class="text-sm">2025</span></p>
      </div>
      <div>
        <p>Departure</p>
        <p class="font-bold text-lg">28 <span class="block uppercase">October</span><span class="text-sm">2025</span></p>
      </div>
    </div>
    <div class="flex flex-col items-end space-y-2 mt-3 md:mt-0">
      <button onclick="openCancelModal(this)" class="text-pink-500 hover:underline">Cancel Tour</button>
      <button onclick="openRatingModal(this)" class="text-blue-600 hover:underline">Rate Tour</button>
      <div class="stars flex space-x-1 text-yellow-500 text-lg">
        <span>★</span><span>★</span><span>★</span><span>☆</span><span>☆</span>
      </div>
    </div>
  `;

  container.appendChild(tripCard);
}

// Loop through all tours
tours.forEach(t => addTrip(t));