import { React, useEffect,useState } from "react";

export default function ApiService() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://data.aykhan.net/data/general/books.json")
      .then((response) => response.json())
      .then((data) => {
        const limitedData = data.slice(0, 200);
        console.log(limitedData);
        setProducts(limitedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Null reference exception: ", error);
        setIsLoading(false);
      });
  }, []);

  return <div></div>;
}
