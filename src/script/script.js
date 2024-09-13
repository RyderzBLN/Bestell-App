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
  },
  // Neue Gerichte:
  {
    "name": "Porterhouse Steak",
    "description": "Ein großzügiges Porterhouse-Steak, das Filet und T-Bone vereint, perfekt gegrillt und serviert mit einer Champignonsoße.",
    "price": 39.99,
    "quantity": 0
  },
  {
    "name": "Flank Steak",
    "description": "Ein kräftiges Flank Steak, mariniert und über offenem Feuer gegrillt, serviert mit einer würzigen Chimichurri-Sauce.",
    "price": 24.99,
    "quantity": 0
  },
  {
    "name": "Skirt Steak",
    "description": "Ein zartes Skirt Steak, perfekt gewürzt und gegrillt, serviert mit gebratenen Zwiebeln und Paprika.",
    "price": 26.99,
    "quantity": 0
  },
  {
    "name": "Flat Iron Steak",
    "description": "Ein saftiges Flat Iron Steak, bekannt für seine zarte Textur, serviert mit einer Knoblauch-Kräuter-Butter.",
    "price": 28.99,
    "quantity": 0
  },
  {
    "name": "Chuck Eye Steak",
    "description": "Ein herzhaftes Chuck Eye Steak, vollmundig und saftig, serviert mit einer Balsamico-Reduktion und gegrilltem Gemüse.",
    "price": 23.99,
    "quantity": 0
  }
];


let cart = [];


function renderFood(food) {
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


function addCart(index, cartIndex) {
  availableInCart(index);
  renderCartArticel();
  renderButton();
  blinkContainer(index)
}


function addPrice(cartIndex) {
  let article = cart[cartIndex];
  article.quantity += 1;
  renderCartArticel();
  blinkCart(cartIndex);
}


function downPrice(cartIndex) {
  let articel = cart[cartIndex].quantity;

  cart[cartIndex].quantity -= 1;
  if (articel <= 1) {
    deleteFromCart(cartIndex)
  }
  updateBuyButton()
  renderCartArticel();
  blinkCart(cartIndex);
}


function deleteFromCart(cartIndex) {
  cart.splice(cartIndex, 1);
  renderCartArticel();
  updateBuyButton();
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
  let delivery = 1.99;
  let deliveryPrice = total + delivery;

  document.getElementById("totalsum").innerHTML = "Preis: " + total.toFixed(2) + " €";
  document.getElementById("delivery-cost").innerHTML = "Lieferkosten: " + delivery.toFixed(2) + " €";
  document.getElementById("all-total").innerHTML = "Gesamtpreis: " + deliveryPrice.toFixed(2) + " €";
  updateAllPrice();
}


function updateBuyButton() {
  const buyButton = document.getElementById('buy');
  if (cart.length === 0) {
    buyButton.classList.add('d-none');
  }
}


function renderButton() {
  document.getElementById("buy").className = "buy";
}


function updateAllPrice() {
  if (cart.length === 0) {
    document.getElementById("totalsum").innerHTML = "";
    document.getElementById("delivery-cost").innerHTML = "";
    document.getElementById("all-total").innerHTML = "";
    return;
  }
}


function deleteAll() {
  document.getElementById('modal').style.display = 'flex';
  document.getElementById("buy").className = "d-none";
  cart = [];
}


function reloadPage() {
  setTimeout(() => {
    location.reload();
  }, 5000);
}


function showModal() {
  document.querySelector('.output').style.right = '-100%';

  deleteAll();
  renderCartArticel();
  renderTotalSum();
  setTimeout(() => {
    modal.style.display = 'none';
  }, 4000);
  reloadPage();
}


function blinkContainer(index) {
  const container = document.getElementById(`blink${index}`);

  if (container) {
    container.classList.add('blink');
    setTimeout(() => {
      container.classList.remove('blink');
    }, 500);
  }
}


function blinkCart(cartIndex) {
  const container = document.getElementById(`cartblink${cartIndex}`);

  if (container) {
    container.classList.add('blink');
    setTimeout(() => {
      container.classList.remove('blink');
    }, 500);
  }
}


document.getElementById('show').addEventListener('click', function () {
  const sidebar = document.querySelector('.output');
  sidebar.classList.toggle('active');
});


document.getElementById('close').addEventListener('click', function () {
  const sidebar = document.querySelector('.output');
  sidebar.classList.remove('active');
});

