import React from "react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Cookie() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteProducts = Cookies.get("favoriteProducts");
    if (favoriteProducts) {
      setFavorites(JSON.parse(favoriteProducts));
    }
  }, []);

  return <div></div>;
}
