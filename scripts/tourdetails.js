/* structure of data for a tiur */
import { available, user } from "./data.js";

function insertDetails(details){
  
    let html = `
        <img src='${details.images[0]}' class="w-70 rounded-full " alt="tor image">
                <div class="details col-span-2 md:col-start-2 md:col-span-1  grid gap-0.5 ">
                    <h3 class="font-bold text-2xl">${details.title}</h3>
                    <div class="minors  ml-3 text-2xs">
                        <span class="">${(details.destination) ||('From '+ details.from+ ' to '+ details.to)}</span>
                        <span> <span class="">⭐⭐⭐⭐⭐</span>|  ${details.ratings.starCount} (${details.ratings.reviews})</span>
                    </div>
                    <p class="text-2xs">${details.description}</p>
                </div>
                <div class="md:col-start-2 col-span-2 w-full">
                    <div class="flex gap-2">
                    <p class="font-bold text-black text-2xl">${details.price} frs</p>
                    <button class="bookbtn relative z-6 px-5 hover:bg-teal-600 py-1 ease-in-out hover:scale-110 transition-all duration-500 bg-teal-500 hover:cursor-pointer rounded-full bg">Book Now</button>
                    <span class= "">share</span>
                    </div>

                    <form action="#" class="bg-gray-300 transition-all ease-in-out duration-100 hidden  relative bottom-0 w-80   p-2 text-black group-active:flex flex-col justify-center
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
                                <input type="text" id='name'  required placeholder="Name" class="w-full focus:outline-0">
                            </div>
                            <div class="flex gap-4 bg-white p-2">
                                <img src="./images/email.svg" alt="">
                                <input type="email" id='email' required placeholder="Email" class="w-full focus:outline-0">
                            </div>
                            <div class="flex gap-4 bg-white p-2">
                                <img src="./images/phone.svg" alt="">
                                <input type="phone" id= 'phone' required placeholder="Phone" class="w-full focus:outline-0">
                            </div>
                            <div class="flex gap-4 bg-white p-2">
                                <img src="./images/email.svg" alt="">
                                <input type="number" id='members' required placeholder="Number of persons" min="1" class="w-full focus:outline-0">
                            </div>
                            <div class="flex gap-4 bg-white p-2">
                                <img src="./images/date.svg" alt="">
                                <input type="date" id='date' required placeholder="date" class="w-full focus:outline-0">
                            </div>
                            <p id= 'total' class='text-center text-teal-600 font-bold'>Total: ${details.price}</p>
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
  details.itinerary && details.itinerary.forEach((day, idx) => {
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

function renderPage(Tour){
    insertDetails(Tour)
    handleDropdown()
    insertsGalery(Tour)
    insertItinarery(Tour)
}
let detailsValue = JSON.parse(localStorage.getItem('detailvalue'))
renderPage(detailsValue)
function handleDropdown(){
    let formElem =  document.querySelector('form')
             function popUp(){
                 formElem.style.display = 'grid'
               }
   
           function closeTour(){
               formElem.style.display = 'none'
           }
   
           let btn =document.querySelector('.bookbtn')
           btn.addEventListener('click', ()=>popUp())
           document.querySelector('.closebtn').addEventListener('click',()=> closeTour())
}
// total price calculator

let members =document.getElementById('members')
console.log()
members.addEventListener('change', ()=>{
  document.getElementById('total').innerHTML = 'Total: ' + members.value *detailsValue.price
})

function book(){
  let formElem = document.querySelector('form')
  formElem.addEventListener('submit', (e)=>{
    e.preventDefault()
    let name =document.getElementById('name').value
    let email =document.getElementById('email').value
    let phone =document.getElementById('phone').value
    let members =document.getElementById('members')
    let date = document.getElementById('date').value
    let total = members.value * detailsValue.price
     let  bookingData= {
        name,
        email,
        members: members.value,
        phone,
        total,
        date,
      }
      user.book({user:bookingData, details: detailsValue})
    console.log(user)
    alert('clicked')
  })
}

// function populateCards(list){
//   let div = document.createElement('div')
//   // div.setAttribute('class', )
//   list.forEach((item, idx)=>{
//     let html = `<a href='./Tour-and-destination.html' onclick = 'localStorage.setItem('detailvalue', JSON.stringify(item))'>
//                     <div class="card gap-0">
//                   <div>
//                     <img src="${item.images[0]}" alt=""  class="rounded-tl-lg w-full rounded-tr-lg">
//                   </div>
//                   <div class="w-96 h-40 bg-white pl-5 pt-3 ml-0 rounded-b-lg">
//                     <h2 class="font-bold">${item.title}</h2>
//                     <span><i class="fa-solid fa-location-dot font-light" style="color: #FFD43B;" ></i>Kathmandu,Nepal</span><br>
//                     <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
//                     <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
//                     <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
//                     <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
//                     <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
//                     <span class="ml-2">${item.ratings.reviews} reviews</span><br>
//                     <div>
//                       <span>
//                         <h2>
                          
//                         </h2>
//                       </span>
//                     </div>
//                         <span class="text-yellow-400">${item.price}-xaf</span><br>
//                         <span>Per person</span>
//                        <a href=""> <button class="bg-green-400 w-32  ml-32 h-10 rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg">Book now</button></a>
//                     </span>
//                   </div>
//                   </div>
//                   </a>
//     `
//     div.innerHTML += html
//   })
//   let galleryElem = document.getElementById("gallery");
//   galleryElem.appendChild(div)
// }
book()
populateCards(available.all)