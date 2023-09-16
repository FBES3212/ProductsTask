import React from 'react'
import './Products.css'
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function Products() {
   const products = [
     {
       id: 1,
       name: "Product 1",
       description: "Description of Product 1",
       price: "$19.99",
       imageUrl:
         "https://cdn.shopify.com/s/files/1/0070/7032/files/diy-product-photography.jpg?v=1599161908&width=1024",
     },
     {
       id: 2,
       name: "Product 2",
       description: "Description of Product 2",
       price: "$29.99",
       imageUrl:
         "https://cdn.shopify.com/s/files/1/0070/7032/files/diy-product-photography.jpg?v=1599161908&width=1024",
     },
     // Add more products as needed
   ];

     const [isFavorite, setIsFavorite] = useState(false);

     const toggleFavorite = () => {
       setIsFavorite(!isFavorite);
     };

  return (
    <div>
      <header>
        <h1>Our Products</h1>
      </header>
      <main>
        <section className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>

              <button
                className={`favorite-button ${isFavorite ? "active" : ""}`}
                onClick={toggleFavorite}
              >
                <FaHeart />
              </button>
            </div>
          ))}
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
}
