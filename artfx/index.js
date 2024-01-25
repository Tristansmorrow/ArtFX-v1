import { printArr } from "./data.js"
import { tshirtArr } from "./data.js";


const printItem = printArr.map(function(print){
    return `<div class="print-item">
    <img class="print-image" src="${print.image}" alt="">
    <h2 class="print-item-title">${print.name}</h2>
    <p class="print-desc">${print.desc}</p>
    <div class="print-foot">
    <h3 class="print-price">${print.printPrice}</h3>
    <button class="buy-btn">Buy</button>
    </div>
</div>`
}).join('')
