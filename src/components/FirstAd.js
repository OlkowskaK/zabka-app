import React from "react";
import coffeeImages from "./coffeeData";
import "./FirstAdCss.css";

const FirstAd = () => {
  return (
    <div className="image-container">
      {coffeeImages.map((image, index) => (
        <div className="ImgCoffee" key={index}>
          <img src={image.src} alt={image.alt} />
          <p>{image.name}</p> {/* Wyświetl nazwę */}
          <p>{image.points} punktów</p> {/* Wyświetl punkty */}
        </div>
      ))}
    </div>
  );
};

export default FirstAd;
