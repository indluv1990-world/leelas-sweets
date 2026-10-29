// Admin password (in production, this should be handled securely on a backend)
const ADMIN_PASSWORD = 'leela123';

// Check if admin is logged in
function isLoggedIn() {
    return sessionStorage.getItem('adminLoggedIn') === 'true';
}

// Handle login
function handleLogin() {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        
        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem('adminLoggedIn', 'true');
            showDashboard();
        } else {
            loginError.textContent = 'Incorrect password. Please try again.';
        }
    });
}

// Show dashboard
function showDashboard() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    loadProducts();
}

// Handle logout
function handleLogout() {
    document.getElementById('logoutBtn').addEventListener('click', function() {
        sessionStorage.removeItem('adminLoggedIn');
        location.reload();
    });
}

// Get products from localStorage
function getProducts() {
    const products = localStorage.getItem('leelasProducts');
    return products ? JSON.parse(products) : [];
}

// Save products to localStorage
function saveProducts(products) {
    localStorage.setItem('leelasProducts', JSON.stringify(products));
}

// Generate unique ID
function generateId() {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

// Load and display products in admin panel
function loadProducts() {
    const products = getProducts();
    const productsList = document.getElementById('productsList');
    const emptyProducts = document.getElementById('emptyProducts');
    const productCount = document.getElementById('productCount');

    productCount.textContent = products.length;

    if (products.length === 0) {
        productsList.innerHTML = '';
        emptyProducts.style.display = 'block';
        return;
    }

    emptyProducts.style.display = 'none';

    productsList.innerHTML = products.map(product => `
        <div class="product-item" data-id="${product.id}">
            <div class="product-item-header">
                <div class="product-item-title">
                    <h3>${product.name}</h3>
                    <div class="product-badges">
                        ${product.sugarFree ? '<span class="badge sugar-free">Sugar Free</span>' : ''}
                        ${product.special ? '<span class="badge special">Special</span>' : ''}
                    </div>
                </div>
                <div class="product-item-actions">
                    <button class="edit-button" onclick="editProduct('${product.id}')">Edit</button>
                    <button class="delete-button" onclick="deleteProduct('${product.id}')">Delete</button>
                </div>
            </div>
            <p class="product-item-price">₹${product.price} ${product.unit}</p>
            <div class="product-item-info">
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Ingredients:</strong> ${product.ingredients}</p>
                ${product.image ? `<p><strong>Image:</strong> <a href="${product.image}" target="_blank">View</a></p>` : ''}
            </div>
        </div>
    `).join('');
}

// Handle product form submission
function handleProductForm() {
    const form = document.getElementById('productForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const editingId = document.getElementById('editingId').value;
        const productData = {
            id: editingId || generateId(),
            name: document.getElementById('productName').value,
            price: parseFloat(document.getElementById('productPrice').value),
            unit: document.getElementById('productUnit').value,
            description: document.getElementById('productDescription').value,
            ingredients: document.getElementById('productIngredients').value,
            image: document.getElementById('productImage').value,
            sugarFree: document.getElementById('productSugarFree').checked,
            special: document.getElementById('productSpecial').checked
        };

        let products = getProducts();

        if (editingId) {
            // Update existing product
            products = products.map(p => p.id === editingId ? productData : p);
        } else {
            // Add new product
            products.push(productData);
        }

        saveProducts(products);
        resetForm();
        loadProducts();
    });
}

// Edit product
function editProduct(id) {
    const products = getProducts();
    const product = products.find(p => p.id === id);

    if (!product) return;

    // Fill form with product data
    document.getElementById('editingId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productUnit').value = product.unit;
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productIngredients').value = product.ingredients;
    document.getElementById('productImage').value = product.image || '';
    document.getElementById('productSugarFree').checked = product.sugarFree;
    document.getElementById('productSpecial').checked = product.special;

    // Update form UI
    document.getElementById('formTitle').textContent = 'Edit Product';
    document.getElementById('submitBtn').textContent = 'Update Product';
    document.getElementById('cancelBtn').style.display = 'block';

    // Scroll to form
    document.getElementById('productForm').scrollIntoView({ behavior: 'smooth' });
}

// Delete product
function deleteProduct(id) {
    if (!confirm('Are you sure you want to delete this product?')) {
        return;
    }

    let products = getProducts();
    products = products.filter(p => p.id !== id);
    saveProducts(products);
    loadProducts();
}

// Reset form
function resetForm() {
    document.getElementById('productForm').reset();
    document.getElementById('editingId').value = '';
    document.getElementById('formTitle').textContent = 'Add New Product';
    document.getElementById('submitBtn').textContent = 'Add Product';
    document.getElementById('cancelBtn').style.display = 'none';
}

// Handle cancel button
function handleCancel() {
    document.getElementById('cancelBtn').addEventListener('click', resetForm);
}

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    if (isLoggedIn()) {
        showDashboard();
    }

    handleLogin();
    handleLogout();
    handleProductForm();
    handleCancel();
});

// Make functions available globally
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
