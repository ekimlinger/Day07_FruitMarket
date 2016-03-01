

//var timer = setInterval(beginGame, 300000);

// var timer = setInterval(priceUpdate, 15000);

var counter = 0;
var timer;
var cash=100;
function beginGame() {
  timer = setInterval(priceUpdate, 3000);
  console.log("begin");

}



function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
function buy(){
  console.log(this);
  var price=$(this).parent().data('price');
  cash-=price;
  var inventory;
  inventory = $(this).closest('.apple-inventory').data('inventory');
  inventory++;
  $(this).closest('.apple-inventory').data('inventory', inventory);
  $(this).closest('.apple-inventory').html(inventory); // check class name
}

function sell() {
  console.log(this);
  var price=$(this).parent().data('price');
  cash+=price;
  var inventory;
  inventory = $(this).closest('.apple-inventory').data('inventory');
  inventory++;
  $(this).closest('.apple-inventory').data('inventory', inventory);
  $(this).closest('.apple-inventory').html(inventory); // check class name

}

function setInitialPrice() {
  var applePrice = randomNumber(50,999)/100;
  $('.apple-price').data('price', applePrice);
  var orangePrice = randomNumber(50,999)/100;
  $('.orange-price').data('price', orangePrice);
  var bananaPrice = randomNumber(50,999)/100;
  $('.banana-price').data('price', bananaPrice);
  var grapePrice = randomNumber(50,999)/100;
  $('.grape-price').data('price', grapePrice);
  var pearPrice = randomNumber(50,999)/100;
  $('.pear-price').data('price', pearPrice);
  var watermelonPrice = randomNumber(50,999)/100;
  $('.watermelon-price').data('price', watermelonPrice);


  $('.apple-price').text(applePrice);
  $('.orange-price').text(orangePrice);
  $('.banana-price').text(bananaPrice);
  $('.grape-price').text(grapePrice);
  $('.pear-price').text(pearPrice);
  $('.watermelon-price').text(watermelonPrice);

}

function priceUpdate() {
  counter++;
  
  console.log('price update');

  if (counter == 20) {
    clearInterval(timer);
  }
  var watermelonPriceUpdate = $('.watermelon-price').data('price');

  watermelonPriceUpdate += randomNumber(-50, 50) / 100;

  console.log(watermelonPriceUpdate);


}

$(document).ready(function() {
  $('.start').on('click', beginGame, setInitialPrice);

  $('.buy-apple').on('click', buy);

});
