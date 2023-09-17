import React from "react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Cookie(product) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteProducts = Cookies.get("favoriteProducts");
    if (favoriteProducts) {
      setFavorites(JSON.parse(favoriteProducts));
    }
  }, []);

  const isFavorite = favorites.some(
    (favoriteProduct) => favoriteProduct.Title === product.Id
  );
  if (isFavorite) {
    const newFavorites = favorites.filter(
      (favoriteProduct) => favoriteProduct.Title !== product.Id
    );
    setFavorites(newFavorites);
    Cookies.set("favoriteProducts", JSON.stringify(newFavorites));
  } else {
    const newFavorites = [...favorites, product];
    setFavorites(newFavorites);
    Cookies.set("favoriteProducts", JSON.stringify(newFavorites));
    
  }

  return <div></div>;
}
