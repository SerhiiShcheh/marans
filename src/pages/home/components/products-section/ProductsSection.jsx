import React from "react";
import styles from "./ProductsSection.module.scss";
import background from "../../../../assets/main-page.jpg";

function ProductsSection({ alignment }) {
  return (
    <section className={styles.container}>
      {alignment === "left" ? (
        <>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${background})` }}
          ></div>
          <div className={styles.description}>
            <h1>description</h1>
            <p>
              loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum
              dolor sit amet loren ipsum dolor sit amet
            </p>
            <p>
              loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum
              dolor sit amet loren ipsum dolor sit amet
            </p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.description}>
            <h1>description</h1>
            <p>
              loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum
              dolor sit amet loren ipsum dolor sit amet
            </p>
            <p>
              loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum
              dolor sit amet loren ipsum dolor sit amet
            </p>
          </div>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${background})` }}
          ></div>
        </>
      )}
    </section>
  );
}

export default ProductsSection;
