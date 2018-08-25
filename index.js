var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var newObject = {itemName: item, itemPrice: price};
  cart.push(newObject);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var len = cart.length;
  if (len === 0) {
    return `Your shopping cart is empty.`;
  }
  else {
    var array = [];
    if (len === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    }
    else {
      for (var i=0; i<(len - 1); i++) {
      array.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`); 
      }
      array.push(` and ${cart[len -1].itemName} at $${cart[len - 1].itemPrice}`)
      return `In your cart, you have${array}.`;
    }
  }
}

function total() {
  var tot = 0;
  for (var i=0; i < cart.length; i++) {
    tot = tot + cart[i].itemPrice;
  }
  return tot; 
}

function removeFromCart(item) {
  for (var i=0; i < cart.length){
    if (item == cart[i].itemName){
      delete cart[i];
    }
    else {
      i++;
    }
  }
  return cart;
}



function placeOrder(cardNumber) {
  // write your code here
}
