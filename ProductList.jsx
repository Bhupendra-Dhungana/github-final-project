import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b2d",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 20,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 18,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 28,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1632207691148-3c7c2f7a4a9f",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 35,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },

  {
    id: 7,
    name: "Rose Plant",
    price: 22,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
  },
  {
    id: 8,
    name: "Orchid",
    price: 40,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1566907225473-5d7b0f1c7a87",
  },
  {
    id: 9,
    name: "African Violet",
    price: 24,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1455582916367-25f75bfc6710",
  },
  {
    id: 10,
    name: "Anthurium",
    price: 32,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 11,
    name: "Jasmine",
    price: 27,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
  },
  {
    id: 12,
    name: "Begonia",
    price: 26,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },

  {
    id: 13,
    name: "Monstera",
    price: 45,
    category: "Decorative Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 14,
    name: "Fiddle Leaf Fig",
    price: 50,
    category: "Decorative Plants",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 15,
    name: "Calathea",
    price: 38,
    category: "Decorative Plants",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683",
  },
  {
    id: 16,
    name: "Bird of Paradise",
    price: 55,
    category: "Decorative Plants",
    image:
      "https://images.unsplash.com/photo-1597055181300-a2e5f5b3c4f5",
  },
  {
    id: 17,
    name: "Pothos",
    price: 23,
    category: "Decorative Plants",
    image:
      "https://images.unsplash.com/photo-1614594575929-bd4f2a0f5d2f",
  },
  {
    id: 18,
    name: "Chinese Evergreen",
    price: 33,
    category: "Decorative Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [addedItems, setAddedItems] = useState([]);

  const categories = [
    "Air Purifying Plants",
    "Flowering Plants",
    "Decorative Plants",
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((previous) => [...previous, plant.id]);
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="product-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">
            🛒 Cart ({cartCount})
          </a>
        </div>
      </nav>

      <header className="product-header">
        <h1>Our Plants</h1>
        <p>
          Explore our beautiful collection of plants for your home and office.
        </p>
      </header>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems.includes(plant.id)}
                  >
                    {addedItems.includes(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
