import React from 'react'
import './Favorites.css'
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function Favorites() {
    // it must be real Favorites
   const favorites = [
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
        <h1>Favorites</h1>
      </header>
      <main>
        <section className="product-list">
          {favorites.map((fav) => (
            <div key={fav.id} className="product-card">
              <img
                src={fav.imageUrl}
                alt={fav.name}
                className="product-image"
              />
              <h2>{fav.name}</h2>
              <p>{fav.description}</p>
              <p>{fav.price}</p>

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
