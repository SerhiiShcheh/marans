import React from "react";
import styles from "./Galery.module.scss";

function Galery() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}></div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
        </div>
        <div className={styles.column}>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
        </div>
      </div>
    </div>
  );
}

export default Galery;
