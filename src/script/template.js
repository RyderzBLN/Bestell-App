function orderTemplate(food, index){
    return  `<div class="order-template">
        <h4>${food.name}</h4>
        <p class="food-p">${food.description}</p>
        <p class="food-p">${food.price}$</p>
        <button onclick="addCart(${index})" id="addCart${index}" class="order-button">+</button>
     </div>`
}

function cartTemplate(food, index) {
    return `
      <h4 class="header-cart">${food.name}</h4>
      <div class="cart-container">
        <div class="order-container">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF8000">
              <path d="M200-440v-80h560v80H200Z"/>
            </svg>
          </span>
          <p>1</p>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF8000">
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
            </svg>
          </span>
        </div>
        <div class="delete-and-price">
          <p>${food.price}</p>
          <p>
            <svg class="ddelete" onclick="deleteFromCart(${index})" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF8000">
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
            </svg>
          </p>
        </div>
      </div>
    `;
  }
  
