let cart = [];

function addToCart(cookie, price) {
    cart.push({ cookie, price });
    displayCart();
}

function displayCart() {
    let cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let total = 0;
        cart.forEach((item, index) => {
            let cartItem = document.createElement('div');
            cartItem.innerHTML = `${item.cookie} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button>`;
            cartContainer.appendChild(cartItem);
            total += item.price;
        });

        let totalDiv = document.createElement('div');
        totalDiv.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
        cartContainer.appendChild(totalDiv);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase!');
        cart = [];
        displayCart();
    }
}
