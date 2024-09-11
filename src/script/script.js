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


function availableInCart(index){
  let steak = steakdishes[index]
  let isInCart = cart.find(dish => dish.name === steak.name)

  if (isInCart){
    steakdishes[index].quantity += 1;   
  } else {
    steakdishes[index].quantity += 1;
    cart.push(steakdishes[index]);    
  }
}


function addCart(index){
  availableInCart(index);
  renderCartArticel();
}


function deleteFromCart(index) {
  cart.splice(index, 1);
  renderCartArticel(); 
}


function renderCartArticel() {
  let cartRef = document.getElementById("shopping-cart");
  cartRef.innerHTML = ""; 

  for (let i = 0; i < cart.length; i++) {
    cartRef.innerHTML += cartTemplate(cart[i], i);
  }
}

let foundItem = steakdishes.find(dish => dish.name === "Ribeye Steak");

console.log(foundItem);  // Gibt das Objekt mit dem Namen "Ribeye Steak" zurück


