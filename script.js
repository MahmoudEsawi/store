let products = [];/* arrays that will hold the list of all products and the currently filtered products, respectively. */
let filteredProducts = [];
let currentPage = 1;/* tracks the current page number for pagination.
*/
const itemsPerPage = 12;/* sets the number of products displayed per page (12 in this case).
*/
let cart = [];/*array that will store items added to the shopping cart.
*/
/*⬇️This code fetches product data from a products.json file.⬇️
 */
// Load products from localStorage or fetch from JSON
function loadProducts() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        products = JSON.parse(savedProducts);
        filteredProducts = products;
    } else {
        fetch('product.json')
            .then(response => response.json())
            .then(data => {
                products = data;
                filteredProducts = products;
                localStorage.setItem('products', JSON.stringify(products)); // Save initial data to localStorage
            });
    }
    renderProducts();
}

fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;/*var with the fetched data.*/
        filteredProducts = products;/*initially set to contain all products. */
        renderProducts();/*is called to display the products */
    });

function renderProducts() {
    const productList = document.getElementById('productList');/**productList is the DOM element where products will be displayed*/
    productList.innerHTML = '';/*The inner HTML of productList is cleared*/
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredProducts.slice(startIndex, endIndex);/*get only the products for the current page */
/*⬇️each product in the paginated list, a div is created with the product's image, name, details, price, and an "Add to Cart" button. */
    paginatedItems.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.details}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);/*productList is updated with the new product elements*/
    });

    document.getElementById('pageNumber').textContent = currentPage;/*The current page number is displayed.
    */
}
/*loadCategory filters products based on the selected category.*/
function loadCategory(category) {
    filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);
    currentPage = 1;/*The current page is reset to 1 and renderProducts() is called to update the display. */
    renderProducts();
}
/*searchItems filters products based on the search query from the search bar. */
function searchItems() {
    /*The query is converted to lowercase for case-insensitive matching.*/
    const query = document.getElementById('searchBar').value.toLowerCase();
    /*Products are filtered if the name or details include the search query.*/
    filteredProducts = products.filter(product => product.name.toLowerCase().includes(query) || product.details.toLowerCase().includes(query));
    currentPage = 1;
    renderProducts();
}

function changePage(direction) {
    const maxPage = Math.ceil(filteredProducts.length / itemsPerPage);/*العدد الازم من الصفحات عشان اعرض جميع الايتمز */
    if (direction === -1 && currentPage > 1) {
        currentPage--;/* ال-١ يدل على الصفحه السابقه و ١ على الصفحه التاليه  */
    } else if (direction === 1 && currentPage < maxPage) {
        currentPage++;
    }
    renderProducts();
 }
/*addToCart adds a product to the cart based on its id.*/
function addToCart(id) {
    const product = products.find(product => product.id === id);/*found in the products array using find by id */
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity++;/*If the product is already in the cart, its quantity is incremented*/
    } else {/*If the product is not in the cart, it is added with a quantity of 1.*/
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();/*updateCart() is called to refresh the cart display.*/
}

function removeFromCart(id) {
    const cartItemIndex = cart.findIndex(item => item.id === id);
    if (cartItemIndex > -1) {
        cart[cartItemIndex].quantity--;
        if (cart[cartItemIndex].quantity === 0) {
            cart.splice(cartItemIndex, 1);
        }
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}
function clearCart() {
    cart = []; // Empty the cart array
    updateCart(); // Update the cart display
}

function checkout() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert(`You have selected ${paymentMethod}. Proceeding to checkout.`);
        // Here you can implement further checkout logic
    }
}


