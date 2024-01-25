import { tshirtArr } from "./data.js";

const tshirtItem = tshirtArr.map(function(tshirt){
    return `<div class="print-item">
    <img class="print-image" src="${tshirt.image}" alt="">
    <h2 class="print-item-title">${tshirt.name}</h2>
    <p class="print-desc">${tshirt.desc}</p>
    <div class="print-foot">
    <h3 class="print-price">${tshirt.printPrice}</h3>
    <button class="buy-btn" id="buyBtn">Buy</button>
    </div>
</div>`
}).join('')

document.getElementById('tshirtContainer').innerHTML = tshirtItem

const buyButton = document.getElementsByClassName('buy-btn')

buyButton.addEventListener('click', function(){
    console.log("clicked")
})