function insertFooter(){
    let FooterElem = document.getElementById('footer')
    FooterElem.innerHTML = `
    <div class="grid text-center sm:grid-flow-col grid-row-4 bg-white gap-4 font-light">
        <div>
                <h1 class="font-bold ml-4">Follow us</h1>
                <i class="fa-brands fa-facebook">facebook</i>
                 <i class="fa-solid fa-xmark">xmark</i>
                <i class="fa-brands fa-instagram">instagram</i>
             </div>
             <div>
            <ul>
                <h1 class="font-bold">international flights</h1>
                <li><a href="">international flights</a></li>
                
          </ul>
             </div>
             <div>
                <h1 class="font-bold">Company</h1>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Term & Condition</a></li>
                    <li><a href="">Privacu policy</a></li>
                    <li><a href="">Booking Rules</a></li>
                </ul>
             </div>
             <div>
                <h1 class="font-bold">Address</h1>
                <i class="fa-solid fa-location-dot font-light"></i>
                Korem ipsum sit amet, consectetur<br>
                adipisci dolor sit amet, cong elit
                <h1 class="font-bold">Phone</h1>
                <ul>
                    
                    <li> <i class="fa-solid fa-mobile"></i>01-4821579</li>
                    <li><i class="fa-solid fa-mobile"></i>(+237) 673639542</li>
                </ul>
                <h1 class="font-bold mt-4">CHAT WITH US ON</h1>
                <span> <i class="fa-brands fa-viber "></i>Viber</span><br>
                <span><i class="fa-brands fa-whatsapp"></i>Whats App</span>
                <h1 class="font-bold">Mail</h1>
                <span><i class="fa-solid fa-envelope"></i>thuk@thuktravels.com</span>
             </div>
            </div>
    `

}

function insertNav(){
    let div = document.createElement('div')
    div.innerHTML= `<nav class="flex items-center justify-between px-6 py-4 fixed top-0 w-full z-50 bg-green-600 h-16">

    <span class="text-3xl">Take-off</span>

   
    <ul  class="flex flex-row justify-between gap-6 mt-2.5">
      <li><a href="index.html">Home</a></li>
      <li><a href="tour-design.html">Trips/Travel</a></li>
    <li><a href="./my trips.html">My Trips</a></li>
    </ul>

     </nav>`
     let me =document.getElementById("navigation").appendChild(div)
}
insertFooter()
insertNav()