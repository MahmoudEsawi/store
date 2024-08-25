// Predefined admin credentials (for simplicity, in a real scenario you would fetch these from a secure backend)
const adminEmail = "admin@example.com";
const adminPassword = "password123";
// Add item function
function addItem() {
    const newItem = {
        id: products.length + 1,  // or get the next available ID
        name: document.getElementById('newItemName').value,
        details: document.getElementById('newItemDetails').value,
        price: parseFloat(document.getElementById('newItemPrice').value),
        category: document.getElementById('newItemCategory').value
    };

    products.push(newItem);
    localStorage.setItem('products', JSON.stringify(products));  // Save to localStorage
    alert("Item added successfully!");
}

// Edit item function
function editItem() {
    const itemId = parseInt(document.getElementById('editItemId').value);
    const item = products.find(product => product.id === itemId);

    if (item) {
        const newName = document.getElementById('editItemName').value;
        const newDetails = document.getElementById('editItemDetails').value;
        const newPrice = parseFloat(document.getElementById('editItemPrice').value);
        const newCategory = document.getElementById('editItemCategory').value;

        if (newName) item.name = newName;
        if (newDetails) item.details = newDetails;
        if (newPrice) item.price = newPrice;
        if (newCategory) item.category = newCategory;

        localStorage.setItem('products', JSON.stringify(products));  // Save to localStorage
        alert("Item updated successfully!");
    } else {
        alert("Item not found!");
    }
}

// Remove item function
function removeItem() {
    const itemId = parseInt(document.getElementById('removeItemId').value);
    const itemIndex = products.findIndex(product => product.id === itemId);

    if (itemIndex > -1) {
        products.splice(itemIndex, 1);
        localStorage.setItem('products', JSON.stringify(products));  // Save to localStorage
        alert("Item removed successfully!");
    } else {
        alert("Item not found!");
    }
}


// Product list (mock)
let products = [
    { id: 1, name: "Arduino Uno", details: "Microcontroller", price: 25.00, category: "Arduino" },
    { id: 2, name: "Raspberry Pi 4", details: "Mini Computer", price: 45.00, category: "Raspberry Pi" },
    // Add more products as needed
];
// Add item function
function addItem() {
    const newItem = {
        id: products.length + 1,  // or get the next available ID
        name: document.getElementById('newItemName').value,
        details: document.getElementById('newItemDetails').value,
        price: parseFloat(document.getElementById('newItemPrice').value),
        category: document.getElementById('newItemCategory').value
    };

    products.push(newItem);
    localStorage.setItem('products', JSON.stringify(products));  // Save to localStorage
    alert("Item added successfully!");
}

// Edit item function
function editItem() {
    const itemId = parseInt(document.getElementById('editItemId').value);
    const item = products.find(product => product.id === itemId);

    if (item) {
        const newName = document.getElementById('editItemName').value;
        const newDetails = document.getElementById('editItemDetails').value;
        const newPrice = parseFloat(document.getElementById('editItemPrice').value);
        const newCategory = document.getElementById('editItemCategory').value;

        if (newName) item.name = newName;
        if (newDetails) item.details = newDetails;
        if (newPrice) item.price = newPrice;
        if (newCategory) item.category = newCategory;

        localStorage.setItem('products', JSON.stringify(products));  // Save to localStorage
        alert("Item updated successfully!");
    } else {
        alert("Item not found!");
    }
}

// Remove item function
function removeItem() {
    const itemId = parseInt(document.getElementById('removeItemId').value);
    const itemIndex = products.findIndex(product => product.id === itemId);

    if (itemIndex > -1) {
        products.splice(itemIndex, 1);
        localStorage.setItem('products', JSON.stringify(products));  // Save to localStorage
        alert("Item removed successfully!");
    } else {
        alert("Item not found!");
    }
}


// Admin login function
function adminLogin() {
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;

    if (email === adminEmail && password === adminPassword) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'block';
        return false; // Prevent form submission (stays on the same page)
    } else {
        document.getElementById('loginError').style.display = 'block';
        return false; // Prevent form submission
    }
}

// Show forms
function showAddItemForm() {
    document.getElementById('addItemForm').style.display = 'block';
    document.getElementById('editItemForm').style.display = 'none';
    document.getElementById('removeItemForm').style.display = 'none';
}

function showEditItemForm() {
    document.getElementById('addItemForm').style.display = 'none';
    document.getElementById('editItemForm').style.display = 'block';
    document.getElementById('removeItemForm').style.display = 'none';
}

function showRemoveItemForm() {
    document.getElementById('addItemForm').style.display = 'none';
    document.getElementById('editItemForm').style.display = 'none';
    document.getElementById('removeItemForm').style.display = 'block';
}

// Add item function
function addItem() {
    const newItem = {
        id: products.length + 1,
        name: document.getElementById('newItemName').value,
        details: document.getElementById('newItemDetails').value,
        price: parseFloat(document.getElementById('newItemPrice').value),
        category: document.getElementById('newItemCategory').value
    };

    products.push(newItem);
    alert("Item added successfully!");
    // Optionally, clear the form fields after adding
}

// Edit item function
function editItem() {
    const itemId = parseInt(document.getElementById('editItemId').value);
    const item = products.find(product => product.id === itemId);

    if (item) {
        const newName = document.getElementById('editItemName').value;
        const newDetails = document.getElementById('editItemDetails').value;
        const newPrice = parseFloat(document.getElementById('editItemPrice').value);
        const newCategory = document.getElementById('editItemCategory').value;

        if (newName) item.name = newName;
        if (newDetails) item.details = newDetails;
        if (newPrice) item.price = newPrice;
        if (newCategory) item.category = newCategory;

        alert("Item updated successfully!");
    } else {
        alert("Item not found!");
    }
}

// Remove item function
function removeItem() {
    const itemId = parseInt(document.getElementById('removeItemId').value);
    const itemIndex = products.findIndex(product => product.id === itemId);

    if (itemIndex > -1) {
        products.splice(itemIndex, 1);
        alert("Item removed successfully!");
    } else {
        alert("Item not found!");
    }
}
