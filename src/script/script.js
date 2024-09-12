let steakdishes = [
  {
    "name": "Ribeye Steak",
    "description": "Zartes Ribeye-Steak mit feiner Marmorierung, gegrillt auf offener Flamme und serviert mit Knoblauchbutter.",
    "price": 25.99,
    "quantity": 0
  },
  {
    "name": "Filet Mignon",
    "description": "Ein butterzartes Filet Mignon, perfekt medium-rare zubereitet, begleitet von einer Rotweinreduktion.",
    "price": 34.99,
    "quantity": 0
  },
  {
    "name": "T-Bone Steak",
    "description": "Saftiges T-Bone-Steak, das die besten Teile des Filets und des Roastbeefs vereint, serviert mit einer Pfeffersoße.",
    "price": 29.99,
    "quantity": 0
  },
  {
    "name": "Sirloin Steak",
    "description": "Gut gereiftes Sirloin-Steak, gegrillt nach Wunsch und serviert mit einer hausgemachten Kräuterbutter.",
    "price": 22.99,
    "quantity": 0
  },
  {
    "name": "Tomahawk Steak",
    "description": "Ein imposantes, extra großes Tomahawk-Steak, saftig und reich an Geschmack, serviert mit gerösteten Gemüsebeilagen.",
    "price": 45.99,
    "quantity": 0
  }
];


let cart = [];   


function renderFood(food){
    let contentRef = document.getElementById("food-content");
    contentRef.innerHTML = "";

    for (let i = 0; i < food.length; i++) {
        contentRef.innerHTML += orderTemplate(food[i], i);        
    }
}


function availableInCart(index) {
  let steak = { ...steakdishes[index] }; // Kopiere das Steak-Objekt
  let isInCart = cart.find(dish => dish.name === steak.name);

  if (isInCart) {
    isInCart.quantity += 1; // Erhöhe nur die Menge im Warenkorb
  } else {
    steak.quantity = 1; // Setze die Menge auf 1
    cart.push(steak); // Füge die Kopie zum Warenkorb hinzu
  }
}


function addCart(index){
  availableInCart(index);
  renderCartArticel();
}



function addPrice(cartIndex) {
  cart[cartIndex].quantity += 1; // Erhöhe die Menge des Artikels im Warenkorb
  renderCartArticel();
}


function downPrice(cartIndex) {
  let articel = cart[cartIndex].quantity;

  cart[cartIndex].quantity -= 1;
  if (articel <= 1){
    deleteFromCart(cartIndex)
  }
  renderCartArticel();
}


function deleteFromCart(cartIndex) {
  cart.splice(cartIndex, 1); // Entferne das Element aus dem Warenkorb
  renderCartArticel();
}


function renderCartArticel() {
  let cartRef = document.getElementById("shopping-cart");
  cartRef.innerHTML = ""; 

  for (let i = 0; i < cart.length; i++) {
    cartRef.innerHTML += cartTemplate(cart[i], i);
  }
}


