import React from "react";
import styles from "./PhotoDescription.module.scss";
import background from "../../../../assets/main-page.jpg";
import cx from "classnames";

function PhotoDescription({ revert }) {
  return (
    <section className={cx(styles.container, { [styles.revert]: revert })}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className={styles.description}>
        <h1>Опис породи</h1>
        <p>
          loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum
          dolor sit amet loren ipsum dolor sit amet
        </p>
        <p>
          loren ipsum dolor sit amet loren ipsum dolor sit amet loren ipsum
          dolor sit amet loren ipsum dolor sit amet
        </p>
      </div>
    </section>
  );
}

export default PhotoDescription;
