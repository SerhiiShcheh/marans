import React from "react";
import styles from "./ProductCard.module.scss";
import background from "../../../../../../assets/eggs.jpg";

function ProductCard({ name, isPresent, price }) {
  return (
    <div className={styles.card}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className={styles.infoWrapper}>
        <h1>{name}</h1>
        <p>{isPresent ? "В наявності" : "Немає в наявності"}</p>
        <p>
          Ціна: <b>{price}</b> гривень
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
