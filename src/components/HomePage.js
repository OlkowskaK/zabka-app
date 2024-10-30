import React, { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import FirstAd from "./FirstAd";
import "./HomePageCss.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [points, setPoints] = useState(1000); // Przykładowa liczba punktów
  const [currentIndex, setCurrentIndex] = useState(0); // Indeks aktualnie wyświetlanych produktów
  const productsToShow = 5; // Liczba produktów do pokazania
  const productBoxRef = useRef(null); // Referencja do kontenera produktów

  // Pobieranie danych z API
  useEffect(() => {
    fetch(
      "https://world.openfoodfacts.org/api/v2/search?categories=food&fields=product_name,image_url,nutriments",
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error("Błąd pobierania danych: ", error));
  }, []);

  return (
    <div className="AllPage">
      <div className="Welcome">
        <h1>Cześć Katarzyna!</h1>
        <div>Masz {points} punktów</div>
      </div>

      <div className="ProductContainer">
        <div className="ProductBox" ref={productBoxRef}>
          {products
            .slice(currentIndex, currentIndex + productsToShow)
            .map((product, index) => (
              <div
                key={index}
                style={{ marginBottom: "20px" }}
                className="Product"
              >
                <img
                  src={product.image_url}
                  alt={product.product_name}
                  style={{ width: "100px" }}
                />
                <p>{product.product_name}</p>
                <div>
                  {product.nutriments
                    ? product.nutriments.energy
                    : "Brak informacji"}{" "}
                  punktów
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="ProductContainer">
        <div>
          <FirstAd />
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default HomePage;
