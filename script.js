// Initialize products from localStorage
function getProducts() {
    const products = localStorage.getItem('leelasProducts');
    return products ? JSON.parse(products) : getDefaultProducts();
}

// Default products to start with
function getDefaultProducts() {
    return [
        {
            id: '1',
            name: 'Nachni Khajur Laddu',
            price: 300,
            unit: 'per kg',
            description: 'Healthy and nutritious laddus made with finger millet (ragi) and dates. Perfect blend of taste and health.',
            ingredients: 'Nachni (Finger Millet), Khajur (Dates), Pure Cow Ghee, Jaggery, Cardamom',
            image: '',
            sugarFree: true,
            special: false
        },
        {
            id: '2',
            name: 'Mohanthal',
            price: 400,
            unit: 'per kg',
            description: 'Traditional Gujarati sweet made from gram flour and ghee, rich in flavor and texture.',
            ingredients: 'Besan (Chickpea flour), Pure Cow Ghee, Sugar, Cardamom, Saffron, Almonds',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '3',
            name: 'Green Moong Laddu',
            price: 350,
            unit: 'per kg',
            description: 'Delicious laddus made from green moong dal, a festive favorite loved by all.',
            ingredients: 'Green Moong Dal, Pure Cow Ghee, Sugar, Cardamom, Cashews',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '4',
            name: 'Moong Dal Laddu',
            price: 380,
            unit: 'per kg',
            description: 'Classic laddu prepared with yellow moong dal, known for its melt-in-mouth texture.',
            ingredients: 'Moong Dal, Pure Cow Ghee, Sugar, Cardamom, Almonds',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '5',
            name: 'Ghodiya Laddu',
            price: 320,
            unit: 'per kg',
            description: 'Traditional sweet balls with a unique taste and texture, perfect for celebrations.',
            ingredients: 'Wheat Flour, Pure Cow Ghee, Jaggery, Dry Fruits, Cardamom',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '6',
            name: 'Katala Laddu',
            price: 420,
            unit: 'per kg',
            description: 'Special postnatal care laddu packed with nutrition for new mothers.',
            ingredients: 'Edible Gum, Pure Cow Ghee, Jaggery, Dry Fruits, Special Herbs',
            image: '',
            sugarFree: false,
            special: true
        },
        {
            id: '7',
            name: 'Dry Fruits Khajur Pak',
            price: 450,
            unit: 'per kg',
            description: 'Premium quality dates fudge loaded with assorted dry fruits.',
            ingredients: 'Dates, Almonds, Cashews, Pistachios, Pure Cow Ghee',
            image: '',
            sugarFree: true,
            special: false
        },
        {
            id: '8',
            name: 'Coconut Barfi',
            price: 280,
            unit: 'per kg',
            description: 'Soft and aromatic coconut barfi that melts in your mouth.',
            ingredients: 'Grated Coconut, Milk, Sugar, Cardamom, Pure Cow Ghee',
            image: '',
            sugarFree: false,
            special: false
        }
    ];
}

// Display products on the page
function displayProducts() {
    const products = getProducts();
    const productsGrid = document.getElementById('productsGrid');
    const emptyState = document.getElementById('emptyState');

    if (!products || products.length === 0) {
        productsGrid.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            ${product.image ? 
                `<img src="${product.image}" alt="${product.name}" class="product-image">` :
                `<div class="product-image"></div>`
            }
            <div class="product-content">
                <div class="product-header">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-badges">
                        ${product.sugarFree ? '<span class="badge sugar-free">Sugar Free</span>' : ''}
                        ${product.special ? '<span class="badge special">Special</span>' : ''}
                    </div>
                </div>
                <p class="product-price">₹${product.price} <span class="unit">${product.unit}</span></p>
                <p class="product-description">${product.description}</p>
                <div class="product-ingredients">
                    <h4>Ingredients:</h4>
                    <p class="ingredients-list">${product.ingredients}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Handle contact form submission
function handleContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            products: document.getElementById('products').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        // Store inquiry in localStorage
        let inquiries = localStorage.getItem('leelasInquiries');
        inquiries = inquiries ? JSON.parse(inquiries) : [];
        inquiries.push(formData);
        localStorage.setItem('leelasInquiries', JSON.stringify(inquiries));

        // Show success message
        formMessage.textContent = 'Thank you for your inquiry! We will contact you soon.';
        formMessage.className = 'form-message success';

        // Reset form
        form.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);

        // Optional: Send to email (requires backend)
        console.log('New inquiry:', formData);
    });
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    handleContactForm();
    initSmoothScroll();
});
