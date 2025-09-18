import { available } from "./data.js"
let handleClick= (obj)=>{
        localStorage.setItem("detailvalue",JSON.stringify(obj))
      }
function populateCards(list){
  let gridArea = document.getElementById("gridArea");
  gridArea.innerHTML = ''
  let html =''
  
  list.forEach((item, idx)=>{
    let string = JSON.stringify(item)
    let div = document.createElement('div')
   div.innerHTML = `
        <div
                            class="min-w-[90%] sm:min-w-[48%] lg:min-w-[32%] bg-white rounded-xl shadow-md overflow-hidden mx-2">
                            <img class="h-48 w-full object-cover"
                                src="${item.images[0]}"
                                alt>
                            <div class="p-4">
                                <h3 class="font-semibold text-lg">${item.title}</h3>
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
                                   ${item.destination ? item.destination : 'From ' +item.from+ " To "+ item.to}
                                </div>
                                <div class="flex items-center my-2">
                                    <span class="text-yellow-400">★★★★★</span>
                                    <span class="text-gray-600 text-sm ml-2">584
                                        reviews</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p
                                        class="text-lg font-bold text-yellow-500">${item.price}
                                        <br>
                                        <span
                                            class="text-sm font-normal text-gray-500">per
                                            person</span>
                                    </p>
                                    <a href="../Tour-and-destination.html"  class ="stuff"
                                        class="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>

  `;
  div.addEventListener('click', ()=> handleClick(item))
  gridArea.appendChild(div)
  })
  // gridArea.innerHTML =html
  // console.log(gridArea.innerHTML)
}

// ads event listener to search button and makes sure it works
let searchbtn= document.getElementById("sbtn")
searchbtn.addEventListener("click", ()=>{
    let keywords = document.getElementById("keywords").value
  let from = document.getElementById("from").value
  let to= document.getElementById("to").value
  let filterobj = {
    keyword:keywords,
    from,
    to
  }
  populateCards(available.filters(filterobj))
})

populateCards(available.all)