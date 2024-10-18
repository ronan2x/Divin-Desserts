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

function submitOrder(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;
    const payment = document.getElementById('payment').value;
    const card = document.getElementById('card').value;

    // Basic validation for card number
    if (card.length !== 16 || isNaN(card)) {
        alert("Please enter a valid 16-digit card number.");
        return;
    }

    // Simulate order processing
    alert(`Thank you for your order, ${name}! Your cookies will be shipped to ${address}, ${city}, ZIP ${zip}.`);

    // After submission, you can redirect or clear the form
    document.getElementById('checkout').reset();
}
// Function to redirect to the checkout page
function goToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Please add items before proceeding.');
    } else {
        window.location.href = 'checkout.html';  // Redirect to the checkout page
    }
}

