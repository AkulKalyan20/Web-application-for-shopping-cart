// Sample product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 199.99,
        image: "https://via.placeholder.com/250",
        description: "Premium wireless headphones with noise cancellation"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 299.99,
        image: "https://via.placeholder.com/250",
        description: "Feature-rich smart watch with health tracking"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 149.99,
        image: "https://via.placeholder.com/250",
        description: "Portable Bluetooth speaker with great sound quality"
    }
];

// Cart state
let cart = [];

// DOM Elements
const catalogSection = document.getElementById('catalog');
const cartSection = document.getElementById('cart');
const authSection = document.getElementById('auth');
const loginForm = document.getElementById('login-form');

// Initialize the catalog
function initializeCatalog() {
    const productGrid = catalogSection.querySelector('.product-grid');
    products.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    return card;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Update cart display
function updateCart() {
    const cartItems = cartSection.querySelector('.cart-items');
    cartItems.innerHTML = '';
    
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
            <div>
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(itemElement);
    });

    // Update total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartSection.querySelector('.cart-total p').textContent = `Total: $${total.toFixed(2)}`;
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Authentication
function handleLogin(event) {
    event.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    
    // Here you would typically make an API call to authenticate
    console.log('Login attempt:', { email });
    
    // For demo purposes, we'll just show a success message
    alert('Login successful!');
}

// Event Listeners
loginForm.addEventListener('submit', handleLogin);

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeCatalog();
    updateCart();
});
