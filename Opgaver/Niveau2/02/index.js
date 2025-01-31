let increaseBtn = document.querySelector(".increase")
let decreaseBtn = document.querySelector(".decrease")

let countElm = document.querySelector(".card_item-count")
let count = Number(countElm.textContent)

let price = Number(document.querySelector(".card_price-value").textContent)
let totalPriceElm = document.querySelector(".total_price")



/*_______________________hele niveau 2 er lavet ved at følge forklaring på skærmen__________________________*/

function updateCount(count, price){
  countElm.textContent = count;
  totalPriceElm.textContent = count * price;

}


increaseBtn.addEventListener("click", function(){
count++;
updateCount(count, price)
})
decreaseBtn.addEventListener("click", function(){
    if(count > 0) count--;
    updateCount(count, price)

    })



