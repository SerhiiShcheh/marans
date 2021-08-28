import React from "react";
import styles from "./Products.module.scss";
import ProductCard from "./components/product-card";

function Products() {
  return (
    <section className={styles.container}>
      <ProductCard name="Півень" isPresent price={700} />
      <ProductCard name="Курка" isPresent price={500} />
      <ProductCard name="Курча" price={200} />
      <ProductCard name="Яйце" isPresent price={50} />
    </section>
  );
}

export default Products;
