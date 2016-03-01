var fruits=[];

function Fruit (name, price, averagePrice, inventory, className){
  this.name=name;
  this.price=price;
  this.averagePrice=averagePrice;
  this.inventory=inventory;
  this.className=className;
  fruits.push(this);
}

var randomInitialPrice = function() {
  return randomNumber(50, 999);

}

console.log(randomInitialPrice());

var apple = new Fruit("Apples", randomInitialPrice(), 0, 0, "apple");
var banana = new Fruit("Bananas", randomInitialPrice(), 0, 0, "banana");
var orange = new Fruit("Oranges", randomInitialPrice(), 0, 0, "orange");
var grape = new Fruit("Grapes", randomInitialPrice(), 0, 0, "grape");
var pear = new Fruit("Pears", randomInitialPrice(), 0, 0, "pear");
var watermelon = new Fruit("Watermelons", randomInitialPrice(), 0, 0, "watermelon");
//var timer = setInterval(beginGame, 300000);

// var timer = setInterval(priceUpdate, 15000);

var counter = 0;
var timer;
var cash=1000;

function beginGame() {
  timer = setInterval(priceUpdate, 3000);
  console.log("begin");
  priceUpdate();

}



function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function buy(){
  console.log(this);
   var myClass = $(this).data("className");
   console.log(myClass);
   for( i=0; i<fruits.length; i++){
     if(myClass==fruits[i].className && cash>=fruits[i].price){

       cash-=fruits[i].price;
       fruits[i].inventory++;
       $('.'+fruits[i].className+'-inventory').html(fruits[i].inventory);
      }
   }



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

function priceUpdate() {
  counter++;
  console.log(counter);
  console.log('price update');

  if (counter == 20) {
    clearInterval(timer);
  }


  for(var i=0;i<fruits.length; i++){
    var priceUpdate=0;
    var priceUpdate = randomNumber(-50, 50);
    // priceUpdate = priceUpdate;
    fruits[i].price = fruits[i].price + priceUpdate;
    if(fruits[i].price >= 1000){
      fruits[i].price -= 49;
    }
    else if (fruits[i].price < 50) {
      fruits[i].price += 49;
    }
    $('.'+fruits[i].className+'-price').text(fruits[i].price / 100);
  }

}

$(document).ready(function() {
  $('.start').on('click', beginGame);

  $('.apple-buy').on('click', buy);
  $('.grape-buy').on('click', buy);
  $('.orange-buy').on('click', buy);
  $('.banana-buy').on('click', buy);
  $('.pear-buy').on('click', buy);
  $('.watermelon-buy').on('click', buy);

});
