//checkout page interactive contents------
let cartSummaryHTML = "";


cart.forEach((cartItem) => {
  
  const productIds = cartItem.productId;
  
  let matchingProduct;
  
  products.forEach((product) => {
    if(product.id === productIds) {
      matchingProduct = product;
    }
  });
  
  
  cartSummaryHTML += `
  <div class="cart-item-container">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchingProduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${matchingProduct.name}
        </div>
        <div class="product-price">
          $${matchingProduct.priceCents / 100}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${cartItem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary">
            Delete
          </span>
        </div>
      </div>
`;
});

document.querySelector(".order-summary").innerHTML = cartSummaryHTML;
