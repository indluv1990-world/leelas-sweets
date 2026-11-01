// Initialize products from localStorage
function getProducts() {
    const products = localStorage.getItem('leelasProducts');
    return products ? JSON.parse(products) : getDefaultProducts();
}

// Default products from PDF
function getDefaultProducts() {
    return [
        {
            id: '1',
            name: 'Mohanthal',
            price: 700,
            unit: 'per kg',
            description: 'A festive Gujarati sweet with a rich, fudgy yet slightly grainy bite, made by roasting coarse gram flour in ghee and setting it with sugar and is topped with sliced nuts.',
            ingredients: 'Besan (Coarse Gram Flour), Cow Ghee (Clarified Butter), Sugar Syrup (Chashni), Garnishes: Assorted dry fruits.',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '2',
            name: 'Oats Makkhana (Sugar/Jaggery)',
            price: 1500,
            unit: 'per kg',
            description: 'A light, crunchy laddu that combines rolled oats with roasted makhana (fox nuts), dates and edible gum, finished with almonds, cashews and pistachios. Bound with pure cow ghee and lightly spiced with cardamom, it is available sweetened with either sugar or jaggery.',
            ingredients: 'Oats, Makhana (Fox Nuts), Dry Dates Powder, Edible Gum (Dink/Gondh), Almond, Cashew, Pistachio, Cardamom Powder, Jaggery / Sugar, Pure Cow Ghee',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '3',
            name: 'Green Moong Laddu',
            price: 800,
            unit: 'per kg',
            description: 'A fine, melt-in-the-mouth laddu made from roasted green moong flour and pure cow ghee, sweetened with powdered sugar. Edible gum, almonds, cashews and pistachios add crunch, and cardamom adds fragrance.',
            ingredients: 'Green Moong Flour, Edible Gum (Dink/Gondh), Almond, Cashew, Pistachio, Cardamom Powder, Powdered Sugar, Pure Cow Ghee',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '4',
            name: 'Moong Daal Laddu',
            price: 800,
            unit: 'per kg',
            description: 'A classic festive laddu made from slow-roasted split moong dal flour and pure cow ghee. Powdered sugar, cardamom, edible gum and a handful of nuts give it a soft, crumbly texture and a toasty aroma.',
            ingredients: 'Moong Daal Flour, Edible Gum (Dink/Gondh), Almonds, Cashews, Pistachios, Cardamom Powder, Powdered Sugar, Pure Cow Ghee.',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '5',
            name: 'Adadiya Pak (Winter Special)',
            price: 800,
            unit: 'per kg',
            description: 'A rich Gujarati winter special made by slowly roasting coarse urad dal flour in plenty of ghee, then blending in puffed edible gum, mawa, nuts and a warming adadiya spice mix. Dense and fudgy, it is traditionally enjoyed in the colder months.',
            ingredients: 'Udad Daal Flour, Adadiya Mix Masala, Edible Gum (Dink/Gondh), Pure Cow Ghee, Mawa (Khoya), Almonds, Cashews, Sugar / Jaggery.',
            image: '',
            sugarFree: false,
            special: true
        },
        {
            id: '6',
            name: 'Finiya Laddu',
            price: 700,
            unit: 'per kg',
            description: 'A traditional hand-rolled laddu from our summer range, made in pure cow ghee and finished with nuts and cardamom.',
            ingredients: 'Wheat Flour, Pure Cow Ghee, Powdered Sugar, Cardamom Powder, Garnishing: Almond, Cashew',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '7',
            name: 'Godpapdi / Suhkadi',
            price: 700,
            unit: 'per kg',
            description: 'A classic Gujarati sweet of wheat flour roasted in pure cow ghee and set with jaggery into soft, melt-in-the-mouth squares. Edible gum, ginger powder and fennel seeds add a warm, aromatic finish.',
            ingredients: 'Wheat Flour, Pure Cow Ghee, Jaggery, Edible Gum (Dink/Gondh), Ginger Powder, Fennel Seeds (Saunt)',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '8',
            name: 'Assorted Seeds Bhrami Laddu',
            price: 1500,
            unit: 'per kg',
            description: 'A hearty, crunchy laddu packed with roasted seeds and nuts, bound with jaggery, ghee and edible gum. Dense in texture and flavour, it makes a satisfying sweet for any time of day.',
            ingredients: 'Pumpkin Seeds, Sunflower Seeds, Watermelon Seeds, Flax Seeds, Sesame Seeds, Almond, Cashew, Edible Gum (Dink/Gondh), Dry Coconut, Jaggery, Pure Cow Ghee, Cardamom Powder (drafted — please confirm)',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '9',
            name: 'Almond Crunch',
            price: 900,
            unit: 'per kg',
            description: 'A crunchy, nutty winter sweet built on roasted urad dal flour, dry coconut and dates, studded with almonds and cashews. Ghee, edible gum, ginger and cardamom make it warm and aromatic.',
            ingredients: 'Udad Daal Flour, Dry Coconut, Dry Dates Powder, Edible Gum (Dink/Gondh), Pure Cow Ghee, Ginger Powder, Cardamom Powder, Almond, Cashew, Jaggery / Sugar',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '10',
            name: 'Mix Grain Laddu',
            price: 800,
            unit: 'per kg',
            description: 'A wholesome laddu made from a blend of roasted grain flours, pure cow ghee and edible gum. Lightly sweetened with sugar or jaggery and flavoured with cardamom and nuts.',
            ingredients: 'Mix Grain Flour, Edible Gum (Dink/Gondh), Pure Cow Ghee, Cardamom Powder, Almond, Cashew, Sugar / Jaggery',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '11',
            name: 'Poushtik Laddu',
            price: 900,
            unit: 'per kg',
            description: 'A nourishing winter laddu ("poushtik" means nutritious) made from mixed grain flours, dry coconut and dates, enriched with edible gum, nuts and pure cow ghee. Ginger and cardamom lend a gentle warmth.',
            ingredients: 'Mix Grain Flour, Dry Coconut, Dry Dates Powder, Edible Gum (Dink/Gondh), Pure Cow Ghee, Ginger Powder, Cardamom Powder, Almond, Cashew, Sugar / Jaggery',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '12',
            name: 'Ghodiya Laddu',
            price: 800,
            unit: 'per kg',
            description: 'A traditional laddu from our winter range, rolled by hand in pure cow ghee and finished with nuts and cardamom.',
            ingredients: 'Coarse Wheat Flour, Pure Cow Ghee, Jaggery, Garden Cress Seeds, Edible Gum (Dink/Gondh), Ginger Powder',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '13',
            name: 'Churma Laddu (Sugar/Jaggery)',
            price: 800,
            unit: 'per kg',
            description: 'A traditional Gujarati-Rajasthani laddu made from coarse wheat flour, crumbled and mixed with ghee, sweetened with sugar or jaggery and rolled in poppy seeds. Cardamom and nutmeg give it a warm, grainy richness.',
            ingredients: 'Coarse Wheat Flour, Pure Cow Ghee, Sugar / Jaggery, Almond, Cashew, Cardamom Powder, Nutmeg Powder',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '14',
            name: 'Gunder Pak',
            price: 800,
            unit: 'per kg',
            description: 'A beloved winter sweet from Gujarati kitchens, made with crisp, puffed edible gum folded into mawa and ghee and set into rich squares. Ginger and pipla mool add warmth, nuts add texture, and it is sweetened with sugar or jaggery.',
            ingredients: 'Mawa (Khoya), Edible Gum (Dink/Gondh), Pure Cow Ghee, Ginger Powder, Pipla Mool, Almond, Cashew, Sugar / Jaggery',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '15',
            name: 'Dink Laddu',
            price: 1100,
            unit: 'per kg',
            description: 'A winter laddu built around ghee-fried, puffed edible gum (dink), combined with dry coconut, dates and nuts and bound with jaggery. Ginger adds a gentle, warming note.',
            ingredients: 'Dry Coconut, Dry Dates Powder, Almond, Cashew, Pistachio, Jaggery, Pure Cow Ghee, Ginger Powder, Edible Gum (Dink/Gondh)',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '16',
            name: 'Mawa Peda (Jaggery/Sugar)',
            price: 700,
            unit: 'per kg',
            description: 'A creamy, fudgy peda made by slowly cooking mawa until it turns fragrant, then shaping it by hand. Sweetened with jaggery or sugar and scented with cardamom.',
            ingredients: 'Mawa (Khoya), Jaggery / Sugar, Cardamom Powder (Optional)',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '17',
            name: 'Katala Laddu (Post Pregnancy)',
            price: 1200,
            unit: 'per kg',
            description: 'A traditional Gujarati laddu prepared for new mothers after childbirth. Wheat flour is roasted in ghee and combined with jaggery, edible gum, nuts and a blend of traditional herbs and spices known as katlu powder.',
            ingredients: 'Wheat Flour, Pure Cow Ghee, Jaggery, Katlu (Batrisu) Powder, Methi Powder, Edible Gum (Dink/Gondh), Dry Coconut, Almond, Ginger Powder, Pipla Powder, Fennel Seeds, Dry Dates Powder',
            image: '',
            sugarFree: false,
            special: true
        },
        {
            id: '18',
            name: 'Nachni Khajur Laddu (Sugar Free)',
            price: 1000,
            unit: 'per kg',
            description: 'A laddu made from nachni (ragi / finger millet) flour and dates, with no added sugar; the sweetness comes from the dates. Almonds, cashews and ghee add richness, and ginger adds a warming touch.',
            ingredients: 'Dates (Khajur), Nachni Flour, Almond, Cashew, Pure Cow Ghee, Ginger Powder',
            image: '',
            sugarFree: true,
            special: false
        },
        {
            id: '19',
            name: 'Dry Fruits KhajurPak (Sugar Free)',
            price: 1500,
            unit: 'per kg',
            description: 'A dense, fudgy sweet of dates packed with almonds, cashews and pistachios and bound with pure cow ghee. It is sweetened only by the dates, with no added sugar.',
            ingredients: 'Dates (Khajur), Almond, Cashew, Pistachio, Pure Cow Ghee',
            image: '',
            sugarFree: true,
            special: false
        },
        {
            id: '20',
            name: 'Assorted Seeds & Dry fruits Laddu (Jaggery/Sugar)',
            price: 1600,
            unit: 'per kg',
            description: 'A rich, energy-dense laddu that combines roasted seeds, dry fruits and dates with edible gum and pure cow ghee. Available sweetened with jaggery or sugar.',
            ingredients: 'Pumpkin Seeds, Sunflower Seeds, Watermelon Seeds, Flax Seeds, Almond, Cashew, Pistachio, Dry Dates Powder, Edible Gum (Dink/Gondh), Pure Cow Ghee, Jaggery / Sugar, Cardamom Powder',
            image: '',
            sugarFree: false,
            special: false
        },
        {
            id: '21',
            name: 'Seeds KhajurPak',
            price: 1500,
            unit: 'per kg',
            description: 'A dense, fudgy sweet of dates packed with pumpkin seeds, water melon seeds, almonds, cashews and pistachios and bound with pure cow ghee. It is sweetened only by the dates, with no added sugar.',
            ingredients: 'Dates (Khajur), Pumpkin Seeds, Water Melon Seeds, Almond, Cashew, Pistachio, Pure Cow Ghee',
            image: '',
            sugarFree: true,
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
    initSmoothScroll();
});
