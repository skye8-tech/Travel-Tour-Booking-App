function populateCards(list){
  let div = document.createElement('div')
  // div.setAttribute('class', )
  list.forEach((item, idx)=>{
    let html = `<a href='./Tour-and-destination.html' onclick = 'localStorage.setItem('detailvalue', JSON.stringify(item))'>
                    <div class="card gap-0">
                  <div>
                    <img src="${item.images[0]}" alt=""  class="rounded-tl-lg w-full rounded-tr-lg">
                  </div>
                  <div class="w-96 h-40 bg-white pl-5 pt-3 ml-0 rounded-b-lg">
                    <h2 class="font-bold">${item.title}</h2>
                    <span><i class="fa-solid fa-location-dot font-light" style="color: #FFD43B;" ></i>Kathmandu,Nepal</span><br>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <span class="ml-2">${item.ratings.reviews} reviews</span><br>
                    <div>
                      <span>
                        <h2>
                          
                        </h2>
                      </span>
                    </div>
                        <span class="text-yellow-400">${item.price}-xaf</span><br>
                        <span>Per person</span>
                       <a href=""> <button class="bg-green-400 w-32  ml-32 h-10 rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg">Book now</button></a>
                    </span>
                  </div>
                  </div>
                  </a>
    `
    div.innerHTML += html
  })
  let galleryElem = document.getElementById("card");
  galleryElem.appendChild(div)
}