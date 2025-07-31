import beautyImg from '../assets/beauty.jpg';
import Grocery from '../assets/grocery.jpeg';
import Food from '../assets/food.jpeg';
import Health from '../assets/health.jpeg';
import Honey from '../assets/honey.jpeg';
import Soups from '../assets/soup.jpeg';
import Noodles from '../assets/noodels.jpeg';
import Pickles from '../assets/pickel.jpeg';
import Oil from '../assets/botel.png';
import HealthDrinks from '../assets/helath-drinks.jpeg';



export const categories = [
  { id: 1, name: 'Home Living', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrstpSyxesTX5dYk1YTZDohUwlZPRA3nFWRw&s' },
  { id: 2, name: 'Health Drinks', image: HealthDrinks },
  { id: 3, name: 'Noodles', image: Noodles },
  { id: 4, name: 'Pickles', image: Pickles },
  { id: 5, name: 'Rice', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHoWi-l5aP2nqF-1GUKqJR-zpAAJ6Xup7PA&s' },
  { id: 6, name: 'Oil', image: Oil },
  { id: 7, name: 'Soups', image: Soups },
  { id: 8, name: 'Honey Items', image: Honey },
  { id: 9, name: 'Food', image: Food },
  { id: 10, name: 'Health', image: Health },
  { id: 11, name: 'Grocery', image: Grocery },
  { id: 12, name: 'Beauty', image: beautyImg },
];

export const subcategories = {
  'Home Living': [
    {
      id: 1, name: 'Home Needs', products: [
         {
          id: 10001,
          name: 'Herbal air Freshener',
          price: 499,
          description: 'Natural herbal air freshener to uplift your home.',
          image: 'https://www.google.com/search?tbm=isch&q=Herbal+Room+Freshener'
        },
        {
          id: 10002,
          name: 'Eco-Friendly roof Cleaner',
          price: 190,
          description: 'Safe, organic floor cleaner for healthy homes.',
          image: 'https://www.google.com/search?tbm=isch&q=Eco-Friendly+Floor+Cleaner'
        }
      ]
    }
  ],
  'Health Drinks': [
    {
      id: 2, name: 'Energy Boosters', products: [
        {
          id: 20001,
          name: 'Multi Millet Malt',
          price: 299,
          description: 'Nutritious millet-based malt for daily energy.',
          image: 'https://www.google.com/search?tbm=isch&q=Multi+Millet+Malt'
        },
        {
          id: 20002,
          name: 'Herbal Immunity Drink',
          price: 189,
          description: 'Herbal formulation to support immunity.',
          image: 'https://www.google.com/search?tbm=isch&q=Herbal+Immunity+Drink'
        }
      ]
    }
  ],
  'Noodles': [
    {
      id: 1, name: 'Instant Healthy Noodles', products: [
        {
          id: 30001,
          name: 'Little Millet Noodles',
          price: 99,
          description: 'Wholesome millet noodles, gluten-free.',
          image: 'https://www.google.com/search?tbm=isch&q=Little+Millet+Noodles'
        },
        {
          id: 30002,
          name: 'Beetroot Noodles',
          price: 109,
          description: 'Fiber-rich beetroot noodles for easy meals.',
          image: 'https://www.google.com/search?tbm=isch&q=Beetroot+Noodles'
        }
      ]
    }
  ],
  'Pickles': [
    {
      id: 1, name: 'Traditional Pickles', products: [
        {
          id: 40001,
          name: 'Mango Thokku',
          price: 149,
          description: 'Tangy and spicy mango thokku made traditionally.',
          image: 'https://www.google.com/search?tbm=isch&q=Mango+Thokku'
        },
        {
          id: 40002,
          name: 'Lemon Pickle',
          price: 129,
          description: 'Classic lemon pickle with organic spices.',
          image: 'https://www.google.com/search?tbm=isch&q=Lemon+Pickle'
        }
      ]
    }
  ],
  'Rice': [
    {
      id: 1, name: 'Organic Rice Varieties', products: [
        {
          id: 50001,
          name: 'Red Rice',
          price: 99,
          description: 'Nutritious red rice, rich in iron and fiber.',
          image: 'https://www.google.com/search?tbm=isch&q=Red+Rice'
        },
        {
          id: 50002,
          name: 'Black Rice',
          price: 149,
          description: 'Exotic black rice with antioxidants.',
          image: 'https://www.google.com/search?tbm=isch&q=Black+Rice'
        }
      ]
    }
  ],
  'Oil': [
    {
      id: 1, name: 'Cold Pressed Oils', products: [
        {
          id: 60001,
          name: 'Groundnut Oil',
          price: 239,
          description: 'Organic cold pressed groundnut oil.',
          image: 'https://www.google.com/search?tbm=isch&q=Groundnut+Oil'
        },
        {
          id: 60002,
          name: 'Sesame Oil',
          price: 209,
          description: 'Healthy sesame oil perfect for cooking.',
          image: 'https://www.google.com/search?tbm=isch&q=Sesame+Oil'
        }
      ]
    }
  ],
  'Soups': [
    {
      id: 1, name: 'Organic Ready Soups', products: [
        {
          id: 70001,
          name: 'Vegetable Soup',
          price: 79,
          description: 'Hearty soup with organic dried vegetables.',
          image: 'https://www.google.com/search?tbm=isch&q=Vegetable+Soup+organic'
        },
        {
          id: 70002,
          name: 'Millet Soup',
          price: 89,
          description: 'Protein-rich millet soup for healthy meals.',
          image: 'https://www.google.com/search?tbm=isch&q=Millet+Soup+organic'
        }
      ]
    }
  ],
  'Honey Items': [
    {
      id: 1, name: 'Raw Honey & Mixes', products: [
        {
          id: 80001,
          name: 'Wild Forest Honey',
          price: 249,
          description: 'Pure wild honey direct from the forest.',
          image: 'https://www.google.com/search?tbm=isch&q=Wild+Forest+Honey'
        },
        {
          id: 80002,
          name: 'Honey with Amla',
          price: 179,
          description: 'Natural amla-infused honey for immunity.',
          image: 'https://www.google.com/search?tbm=isch&q=Honey+with+Amla'
        }
      ]
    }
  ],
  'Food': [
    {
      id: 9, name: 'Organic Snacks', products: [
        {
          id: 90001,
          name: 'Quinoa Puffs',
          price: 129,
          description: 'Crunchy, protein-rich quinoa puffs perfect for healthy snacking.',
          image: 'https://www.google.com/search?tbm=isch&q=Quinoa+Puffs'
        },
        {
          id: 90002,
          name: 'Granola Bars',
          price: 149,
          description: 'Nutritious granola bars made with organic oats and dried fruits.',
          image: 'https://www.google.com/search?tbm=isch&q=Granola+Bars'
        }
      ]
    }
  ],
  'Health': [
    {
      id: 10, name: 'Supplements', products: [
        {
          id: 100001,
          name: 'Organic Multivitamin',
          price: 349,
          description: 'Natural multivitamin supplement sourced from organic ingredients.',
          image: 'https://www.google.com/search?tbm=isch&q=Organic+Multivitamin'
        },
        {
          id: 100002,
          name: 'Immunity Booster',
          price: 249,
          description: 'Herbal immunity booster for daily health and wellness.',
          image: 'https://www.google.com/search?tbm=isch&q=Immunity+Booster+organic'
        }
      ]
    }
  ],
  'Grocery': [
    {
      id: 11, name: 'Fresh Produce', products: [
        {
          id: 110001,
          name: 'Organic Tomatoes',
          price: 89,
          description: 'Fresh organic tomatoes ideal for salads and cooking.',
          image: 'https://www.google.com/search?tbm=isch&q=Organic+Tomatoes'
        },
        {
          id: 110002,
          name: 'Organic Spinach',
          price: 69,
          description: 'Leafy green spinach grown without synthetic pesticides.',
          image: 'https://www.google.com/search?tbm=isch&q=Organic+Spinach'
        }
      ]
    }
  ],
  'Beauty': [
    {
      id: 12, name: 'Face Care', products: [
        {
          id: 120001,
          name: 'Herbal Face Wash',
          price: 299,
          description: 'Gentle face wash infused with natural herbal extracts.',
          image: 'https://www.google.com/search?tbm=isch&q=Herbal+Face+Wash'
        },
        {
          id: 120002,
          name: 'Moisturizing Cream',
          price: 399,
          description: 'Hydrating moisturizer with plant-based ingredients suitable for all skin types.',
          image: 'https://www.google.com/search?tbm=isch&q=Moisturizing+Cream+organic'
        }
      ]
    }
  ]
};


export const dryFruitsCombos = [
  { id: 13001, name: 'Premium Dry Fruits', price: 299, originalPrice: 399, discount: 25, description: 'Premium mix of almonds, cashews, and raisins. Rich in nutrients and perfect for healthy snacking.', image: 'https://readdy.ai/api/search-image?query=premium%20mixed%20dry%20fruits%20almonds%20cashews%20raisins%20in%20wooden%20bowl%20on%20clean%20white%20background%20natural%20lighting%20healthy%20snack%20concept&width=300&height=300&seq=df001&orientation=squarish' },
  { id: 13002, name: 'Exotic Mix Nuts', price: 249, originalPrice: 329, discount: 24, description: 'Exotic blend of pistachios, walnuts, and hazelnuts. Provides essential fatty acids and protein.', image: 'https://readdy.ai/api/search-image?query=exotic%20mixed%20nuts%20pistachios%20walnuts%20hazelnuts%20in%20elegant%20bowl%20on%20clean%20white%20background%20natural%20lighting%20premium%20quality%20concept&width=300&height=300&seq=df002&orientation=squarish' },
  { id: 13003, name: 'Healthy Trail Mix', price: 199, originalPrice: 249, discount: 20, description: 'Perfect blend of nuts, seeds, and dried fruits. Ideal for on-the-go energy and nutrition.', image: 'https://readdy.ai/api/search-image?query=healthy%20trail%20mix%20with%20nuts%20dried%20fruits%20seeds%20in%20rustic%20bowl%20on%20clean%20white%20background%20natural%20lighting%20energy%20snack%20concept&width=300&height=300&seq=df003&orientation=squarish' },
  { id: 13004, name: 'Organic Dates Mix', price: 179, originalPrice: 229, discount: 22, description: 'Natural sweetness of organic dates mixed with nuts. Rich in fiber and natural sugars.', image: 'https://readdy.ai/api/search-image?query=organic%20dates%20mixed%20with%20nuts%20in%20traditional%20bowl%20on%20clean%20white%20background%20natural%20lighting%20sweet%20healthy%20concept&width=300&height=300&seq=df004&orientation=squarish' },
  { id: 13005, name: 'Premium Dry Fruits', price: 299, originalPrice: 399, discount: 25, description: 'Premium mix of almonds, cashews, and raisins. Rich in nutrients and perfect for healthy snacking.', image: 'https://readdy.ai/api/search-image?query=premium%20mixed%20dry%20fruits%20almonds%20cashews%20raisins%20in%20wooden%20bowl%20on%20clean%20white%20background%20natural%20lighting%20healthy%20snack%20concept&width=300&height=300&seq=df001&orientation=squarish' },
  { id: 13006, name: 'Exotic Mix Nuts', price: 249, originalPrice: 329, discount: 24, description: 'Exotic blend of pistachios, walnuts, and hazelnuts. Provides essential fatty acids and protein.', image: 'https://readdy.ai/api/search-image?query=exotic%20mixed%20nuts%20pistachios%20walnuts%20hazelnuts%20in%20elegant%20bowl%20on%20clean%20white%20background%20natural%20lighting%20premium%20quality%20concept&width=300&height=300&seq=df002&orientation=squarish' },
  { id: 13007, name: 'Healthy Trail Mix', price: 199, originalPrice: 249, discount: 20, description: 'Perfect blend of nuts, seeds, and dried fruits. Ideal for on-the-go energy and nutrition.', image: 'https://readdy.ai/api/search-image?query=healthy%20trail%20mix%20with%20nuts%20dried%20fruits%20seeds%20in%20rustic%20bowl%20on%20clean%20white%20background%20natural%20lighting%20energy%20snack%20concept&width=300&height=300&seq=df003&orientation=squarish' },
  { id: 13008, name: 'Organic Dates Mix', price: 179, originalPrice: 229, discount: 22, description: 'Natural sweetness of organic dates mixed with nuts. Rich in fiber and natural sugars.', image: 'https://readdy.ai/api/search-image?query=organic%20dates%20mixed%20with%20nuts%20in%20traditional%20bowl%20on%20clean%20white%20background%20natural%20lighting%20sweet%20healthy%20concept&width=300&height=300&seq=df004&orientation=squarish' }

];

export const trendingProducts = [
  { id: 14002, name: 'Pure Ghee', price: 299, description: 'Traditional pure ghee made from organic cow milk. Perfect for cooking and ayurvedic wellness.', image: 'https://readdy.ai/api/search-image?query=pure%20organic%20ghee%20in%20glass%20jar%20on%20clean%20white%20background%20natural%20lighting%20traditional%20dairy%20product%20concept&width=300&height=300&seq=tp002&orientation=squarish' },
  { id: 14001, name: 'Organic Honey', price: 159, description: 'Pure organic honey harvested from wildflowers. Rich in antioxidants and natural enzymes.', image: 'https://readdy.ai/api/search-image?query=organic%20honey%20jar%20with%20wooden%20dipper%20on%20clean%20white%20background%20natural%20lighting%20pure%20golden%20honey%20concept&width=300&height=300&seq=tp001&orientation=squarish' },
  { id: 14003, name: 'Coconut Oil', price: 199, description: 'Cold-pressed organic coconut oil. Great for cooking, skincare, and hair care.', image: 'https://readdy.ai/api/search-image?query=organic%20coconut%20oil%20in%20glass%20bottle%20with%20coconut%20pieces%20on%20clean%20white%20background%20natural%20lighting%20healthy%20cooking%20concept&width=300&height=300&seq=tp003&orientation=squarish' },
  { id: 14004, name: 'Red Rice', price: 89, description: 'Nutritious red rice packed with antioxidants. A healthy alternative to regular rice.', image: 'https://readdy.ai/api/search-image?query=organic%20red%20rice%20grains%20in%20bowl%20on%20clean%20white%20background%20natural%20lighting%20healthy%20grain%20concept&width=300&height=300&seq=tp004&orientation=squarish' },
  { id: 14005, name: 'Turmeric Powder', price: 79, description: 'Pure organic turmeric powder with anti-inflammatory properties. Essential for healthy cooking.', image: 'https://readdy.ai/api/search-image?query=organic%20turmeric%20powder%20in%20wooden%20bowl%20with%20fresh%20turmeric%20root%20on%20clean%20white%20background%20natural%20lighting%20spice%20concept&width=300&height=300&seq=tp005&orientation=squarish' },
  { id: 14006, name: 'Green Tea', price: 129, description: 'Premium organic green tea leaves. Rich in antioxidants and perfect for daily wellness.', image: 'https://readdy.ai/api/search-image?query=organic%20green%20tea%20leaves%20in%20elegant%20container%20on%20clean%20white%20background%20natural%20lighting%20healthy%20beverage%20concept&width=300&height=300&seq=tp006&orientation=squarish' }
];

export const specialOffers = [
  { id: 15001, name: 'Organic Tea Set', price: 199, originalPrice: 299, discount: 33, description: 'Complete organic tea collection with different varieties. Perfect gift for tea lovers.', image: 'https://readdy.ai/api/search-image?query=organic%20tea%20set%20with%20different%20tea%20varieties%20in%20elegant%20packaging%20on%20clean%20white%20background%20natural%20lighting%20premium%20gift%20concept&width=300&height=300&seq=so001&orientation=squarish' },
  { id: 15002, name: 'Spice Combo', price: 149, originalPrice: 199, discount: 25, description: 'Essential organic spice collection for authentic cooking. Freshly ground and aromatic.', image: 'https://readdy.ai/api/search-image?query=organic%20spice%20combo%20with%20various%20spices%20in%20small%20containers%20on%20clean%20white%20background%20natural%20lighting%20cooking%20essentials%20concept&width=300&height=300&seq=so002&orientation=squarish' },
  { id: 15003, name: 'Healthy Grains', price: 179, originalPrice: 229, discount: 22, description: 'Superfood grain collection including quinoa, oats, and millet. Packed with nutrients.', image: 'https://readdy.ai/api/search-image?query=organic%20healthy%20grains%20quinoa%20oats%20millet%20in%20jars%20on%20clean%20white%20background%20natural%20lighting%20superfood%20concept&width=300&height=300&seq=so003&orientation=squarish' },
  { id: 15004, name: 'Herbal Mix', price: 99, originalPrice: 139, discount: 29, description: 'Wellness herbal blend for natural health support. Perfect for daily wellness routine.', image: 'https://readdy.ai/api/search-image?query=organic%20herbal%20mix%20with%20dried%20herbs%20in%20glass%20containers%20on%20clean%20white%20background%20natural%20lighting%20wellness%20concept&width=300&height=300&seq=so004&orientation=squarish' },
  { id: 15005, name: 'Fruit Preserves', price: 219, originalPrice: 279, discount: 22, description: 'Homemade organic fruit preserves with no artificial additives. Natural sweetness preserved.', image: 'https://readdy.ai/api/search-image?query=organic%20fruit%20preserves%20in%20glass%20jars%20with%20fresh%20fruits%20on%20clean%20white%20background%20natural%20lighting%20homemade%20concept&width=300&height=300&seq=so005&orientation=squarish' },
  { id: 15006, name: 'Organic Snack Pack', price: 159, originalPrice: 199, discount: 20, description: 'Healthy organic snack collection. Perfect for guilt-free snacking anytime.', image: 'https://readdy.ai/api/search-image?query=organic%20healthy%20snacks%20in%20eco-friendly%20packaging%20on%20clean%20white%20background%20natural%20lighting%20guilt-free%20snacking%20concept&width=300&height=300&seq=so006&orientation=squarish' }
];

export const getAllProducts = () => {
  return [
    ...Object.values(subcategories).flat().map(sub => sub.products).flat(),
    ...dryFruitsCombos,
    ...trendingProducts,
    ...specialOffers,
  ];
};


// Get products by category
export const getProductsByCategory = (categoryName) => {
  if (!subcategories[categoryName]) return [];
  return subcategories[categoryName].flatMap(sub => sub.products);
};

// Get category for a product
export const getProductCategory = (productId) => {
  // Check in subcategories first
  for (const [categoryName, subcats] of Object.entries(subcategories)) {
    for (const subcat of subcats) {
      if (subcat.products.some(p => p.id === productId)) {
        return categoryName;
      }
    }
  }
  
  // Check in other product arrays
  if (dryFruitsCombos.some(p => p.id === productId)) return 'Grocery';
  if (trendingProducts.some(p => p.id === productId)) return 'Grocery';
  if (specialOffers.some(p => p.id === productId)) return 'Grocery';
  
  return null;
};

// Get product by ID from all products
export const getProductById = (productId) => {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === parseInt(productId));
};
