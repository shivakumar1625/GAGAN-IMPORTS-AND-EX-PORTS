document.addEventListener('DOMContentLoaded', () => {
    // Product data array containing multiple products
    const products = [
        {
            id: 1,
            name: "Basmati Rice (Steam/Raw)",
            details: "Basmati Rice Specifications",
            image: "basmathi.jpeg", 
            origin: "Punjab, Haryana, Himachal Pradesh, Uttarakhand, Western Uttar Pradesh, Jammu & Kashmir, India",
            qualitySpecifications: {
                Color: "White (Polished) / Brown (Unpolished)",
                "Moisture Content ": "12-13% max",
                "Average Grain Length ": "6.61 mm ",
                "Length To Breadth Ratio ": "3.0 min",
                "Broken Grains ": "Under 2%",
                "Damaged Grains ": "1% max",
                "Foreign Matter ": "Nil",
                Admixture: "5% max",
                "Immature Grains ": "1% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer's choice"
            ],
            keyFeatures: [
                "Aroma: Distinctive, aromatic fragrance",
                "Texture: Long, slender grains that elongate upon cooking",
                "Grain Type: Long-grain",
                "Nutritional Benefits: Rich in carbohydrates, protein, fiber, vitamins, and minerals (iron, zinc, magnesium)",
                "Health Benefits: Low glycemic index, gluten-free, supports digestion"
            ],
            culinaryUses: "Ideal for biryani, pulao, and other Indian and Middle Eastern dishes. Versatile for various culinary preparations."
        },
        {
            id: 2,
            name: "Sona Masoori Rice (Steam / Raw)",
            details: "Sona Masoori Rice Specifications",
            image: "pusarice.jpeg", 
            origin: "Tamil Nadu, Andhra Pradesh, Telangana, Karnataka, India",
            qualitySpecifications: {
                Color: "White (Polished) / Brown (Unpolished)",
                "Moisture Content ": "13-14% max",
                "Average Grain Length ": "5-5.2 mm ",
                "Length To Breadth Ratio ": "3 min",
                "Broken Grains ": "Under 3%",
                "Damaged Grains ": "2% max",
                "Foreign Matter ": "Nil",
                Admixture: "5% max",
                "Immature Grains ": "1-2% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer's choice"
            ],
            keyFeatures: [
                "Aroma: Subtle, jasmine-like fragrance",
                "Texture: Fluffy and lightweight when cooked",
                "Grain Type: Medium-grain",
                "Nutritional Benefits: Rich in carbohydrates, protein, fiber, vitamins, and minerals (iron, zinc, magnesium)",
                "Health Benefits: Low glycemic index, gluten-free, supports digestion"
            ],
            culinaryUses: "Ideal for biryani, pulao, and other South Indian dishes Versatile for various culinary preparations."
        },
        {
            id: 3,
            name: "Pusa Basmati Rice",
            details: "Pusa  Basmati Rice Specifications",
            image: "pusarice.jpeg", 
            origin: " Punjab, Haryana, Himachal Pradesh, Uttarakhand, Western Uttar Pradesh, Jammu & Kashmir, India",
            qualitySpecifications: {
                Color: "White (Polished) / Brown (Unpolished)",
                "Moisture Content ": "12-13% max",
                "Average Grain Length ": "8.35-9.00 mm",
                "Length To Breadth Ratio ": "3.0 min",
                "Broken Grains ": "Under 2%",
                "Damaged Grains ": "1% max",
                "Foreign Matter ": "Nil",
                Admixture: "5% max",
                "Immature Grains ": "1% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer’s choice"
            ],
            keyFeatures: [
                "Aroma: Distinctive, aromatic fragrance",
                "Texture: Long, slender grains that elongate upon cooking",
                "Grain Type: Long-grain",
                "Nutritional Benefits: Rich in carbohydrates, protein, fiber, vitamins, and minerals (iron, zinc, magnesium)",
                "Health Benefits:Low glycemic index, gluten-free, supports digestion"
            ],
            culinaryUses: "Ideal for biryani, pulao, and other Indian and Middle Eastern dishes Versatile for various culinary preparations."
        },
        {
            id: 4,
            name: "Black Rice",
            details: "Black Rice Specifications)",
            image:"blackrice.jpeg",
            origin: "India (Andhra Pradesh, Telangana, Manipur, Assam, Tamil Nadu)",
            qualitySpecifications: {
                Color: "Dark purple to black",
                "Moisture Content ": " 12-14% max",
                "Average Grain Length ": "6-7 mm",
             //   "Length To Breadth Ratio  ": "3.5 min",
                "Broken Grains ": "Under 5%",
                "Damaged Grains ": "1% max",
                "Foreign Matter ": "Nil",
                Admixture: "5% max",
                "Immature Grains ": "1% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer's choice"
            ],
            keyFeatures: [
                "Aroma: Mild, nutty fragrance",
                "Texture: Slightly chewy and firm when cooked",
                "Grain Type: Whole grain",
                "Nutritional Benefits: Rich in antioxidants (anthocyanins), dietary fiber, protein, vitamins (B1, B3, B6), and minerals (iron, zinc, magnesium)",
                "Health Benefits: Supports heart health, aids digestion, helps in weight management, maintains blood sugar levels, and has anti-inflammatory properties."
            ],
            culinaryUses: "Ideal for health-conscious recipes, salads, and side dishes Versatile for various culinary preparations including desserts, sushi, and rice bowls."
        },
        {
            id: 5,
            name: "Brown Rice (Whole Grain)",
            details: "Brown Rice Specifications",
            image: "brownrice.jpeg", 
            origin: "India",
            qualitySpecifications: {
                Color: "Brown (due to the presence of bran and germ layers)",
                "Moisture Content ": "12-14% max",
                "Average Grain Length ": "6-7 mm ",
                "Length To Breadth Ratio ": "3.0 min",
                "Broken Grains ": "Under 5%",
                "Damaged Grains ": "1% max",
                "Foreign Matter ": "Nil",
                Admixture: "5% max",
                "Immature Grains ": "1% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer's choice"
            ],
            keyFeatures: [
                "Aroma: Mild, nutty fragrance",
                "Texture: Chewy and slightly firm when cooked",
                "Grain Type: Whole grain",
                "Nutritional Benefits:  Rich in dietary fiber, protein, vitamins (B1, B3, B6), and minerals (magnesium, phosphorus, selenium)",
                "Health Benefits: Supports heart health, aids digestion, helps in weight management, and maintains blood sugar level"
            ],
            culinaryUses: "Ideal for health-conscious recipes, salads, and side dishes Versatile for various culinary preparations including stir-fries, pilafs, and casseroles ."
        },
        {
            id: 6,
            name: "Lachkari Rice (Kolam Rice)",
            details: "Lachkari Rice Specifications",
            image: "lachkaririce.jpeg", 
            origin: "Gujarat, India",
            qualitySpecifications: {
                Color: "White (Polished) / Brown (Unpolished)",
                "Moisture Content ": "12-14% max",
                "Average Grain Length ": "5-6 mm ",
               // "Length To Breadth Ratio ": "3.0 min",
                "Broken Grains ": "Under 5%",
                "Damaged Grains ": "1% max",
                "Foreign Matter ": "Nil",
                Admixture: "5% max",
                "Immature Grains ": "1% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer's choice"
            ],
            keyFeatures: [
                "Aroma: Mild, pleasant fragrance",
                "Texture: Soft and fluffy when cooked",
                "Grain Type: Medium-grain",
                "Nutritional Benefits: Rich in carbohydrates, protein, fiber, vitamins, and minerals (iron, zinc, magnesium)",
                "Health Benefits: Low glycemic index, gluten-free, supports digestion"
            ],
            culinaryUses: "Ideal for health-conscious recipes, salads, and side dishes Versatile for various culinary preparations including stir-fries, pilafs, and casseroles."
        },
        {
            id: 7,
            name: "Sella Rice (Golden / White)",
            details: "Sella Rice Specifications ",
           
            image: "sellarice.jpeg", 
            origin: "India",
            qualitySpecifications: {
                Color: "Golden (due to parboiling) / White",
                "Moisture Content ": "12-13% max",
                "Average Grain Length ": "8.3 mm min",
                "Length To Breadth Ratio ": "3.0 min",
                "Broken Grains ": "Under 2%",
                "Damaged Grains ": "1% max",
                "Foreign Matter ": "Nil",
                Admixture: "5% max",
                "Immature Grains ": "1% max"
            },
            packagingOptions: [
                "Jute Bag",
                "PP Bag",
                "BOPP Bag",
                "Non-woven Bag",
                "Custom packaging as per buyer's choice"
            ],
            keyFeatures: [
                "Aroma: Mild, neutral fragrance",
                "Texture: Firm and separate grains when cooked",
                "Grain Type: Long-grain",
                "Nutritional Benefits: Rich in carbohydrates, protein, fiber, vitamins, and minerals (iron, zinc, magnesium)",
                "Health Benefits: Low glycemic index, gluten-free, supports digestion"
            ],
            culinaryUses: "Ideal for biryani, pulao, and other Indian and Middle Eastern dishes Versatile for various culinary preparations including salads, soups, and stews."
        }

    ];

    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Find the product by its ID
    const product = products.find(p => p.id === productId);

    if (product) {
        // Populate product data into the template
        document.querySelector('.product-name').textContent = product.name;
        document.querySelector('.product-name-2').textContent = product.name;
        document.querySelector('.product-details').textContent = product.details;
        


        document.getElementById("product-image").src = product.image;
        document.querySelector('.origin').textContent = product.origin;

        const qualitySpecsList = document.querySelector('.quality-specifications');
        qualitySpecsList.innerHTML = '';  // Clear any previous content
        Object.keys(product.qualitySpecifications).forEach(spec => {
            const listItem = document.createElement('li');
            listItem.textContent = `${spec}: ${product.qualitySpecifications[spec]}`;
            qualitySpecsList.appendChild(listItem);
        });

        const packagingList = document.querySelector('.packaging-options');
        packagingList.innerHTML = '';  // Clear any previous content
        product.packagingOptions.forEach(option => {
            const listItem = document.createElement('li');
            listItem.textContent = option;
            packagingList.appendChild(listItem);
        });

        const keyFeaturesList = document.querySelector('.key-features');
        keyFeaturesList.innerHTML = '';  // Clear any previous content
        product.keyFeatures.forEach(feature => {
            const listItem = document.createElement('li');
            listItem.textContent = feature;
            keyFeaturesList.appendChild(listItem);
        });

        document.querySelector('.culinary-uses').textContent = product.culinaryUses;
    }
});
