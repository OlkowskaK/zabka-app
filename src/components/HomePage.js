import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import "./HomePageCss.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [points, setPoints] = useState(1000); // Przykładowa liczba punktów

  // Pobieranie danych z Open Food Facts API
  useEffect(() => {
    fetch(
      "https://world.openfoodfacts.org/api/v2/search?categories=food&fields=product_name,image_url,nutriments",
    )
      .then((response) => response.json())
      .then((data) => {
        // Zapisujemy pobrane produkty do stanu
        setProducts(data.products);
      })
      .catch((error) => console.error("Błąd pobierania danych: ", error));
  }, []);

  return (
    <div className="AllPage">
      <Menu />
      <div className="Welcome">
        <h1>Cześć Katarzyna!</h1>
        <div>Masz {points} punktów</div>
      </div>

      {/* Wyświetlenie produktów */}
      <div>
        {products.map((product, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
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

      <div>
        <h2>Sprawdź co słychać?</h2>
        {products.map((product, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
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
              kcal
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
