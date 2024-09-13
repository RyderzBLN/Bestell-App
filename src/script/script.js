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
let sum = [];


function renderFood(food){
    let contentRef = document.getElementById("food-content");
    contentRef.innerHTML = "";

    for (let i = 0; i < food.length; i++) {
        contentRef.innerHTML += orderTemplate(food[i], i);        
    }
}


function availableInCart(index) {
  let steak = { ...steakdishes[index] }; 
  let isInCart = cart.find(dish => dish.name === steak.name);

  if (isInCart) {
    isInCart.quantity += 1; 
  } else {
    steak.quantity = 1;
    cart.push(steak); 
  }

}


function addCart(index, cartIndex){
  availableInCart(index);
  renderCartArticel();
  renderButton();
}


function addPrice(cartIndex) {
  let article = cart[cartIndex];
  article.quantity += 1; 
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
  cart.splice(cartIndex, 1); 
  renderCartArticel();
  
}


function renderCartArticel() {
  let cartRef = document.getElementById("shopping-cart");
  cartRef.innerHTML = ""; 

  for (let i = 0; i < cart.length; i++) {
    cartRef.innerHTML += cartTemplate(cart[i], i);
  }

  renderTotalSum();
}


function renderTotalSum() {
  let total = cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);
  let delivery = 1.99
  let deliveryPrice = total + delivery;
  let contentRef = document.getElementById("totalsum");
  let deliveryRef = document.getElementById("delivery-cost");
  let totalRef = document.getElementById("all-total");
  contentRef.innerHTML = "Preis: " + total.toFixed(2) + " " + "€";
  deliveryRef.innerHTML = "Lieferkosten: " + delivery + " " + "€";
  totalRef.innerHTML = "Gesamtpreis: " +  deliveryPrice.toFixed(2) + " " + "€";
}


function renderButton(){
  document.getElementById("buy").className = "buy";
}

function deleteAll(){
  document.getElementById('modal').style.display = 'flex';
  document.getElementById("buy").className = "d-none";
  cart = [];
}

function showModal() {
  deleteAll();
  renderCartArticel();
  renderTotalSum(); 
  
  setTimeout(() => {
    modal.style.display = 'none';
  }, 5000);
}


document.getElementById('show').addEventListener('click', function() {
  const sidebar = document.querySelector('.output');
  sidebar.classList.toggle('active');
});


document.getElementById('close').addEventListener('click', function() {
  const sidebar = document.querySelector('.output');
  sidebar.classList.remove('active');
});

