import React from "react";

import styles from "./LogoSection.module.scss";
import cx from "classnames";

function LogoSection() {
  return (
    <section className={cx(styles.container, styles.parallax)}>
      <div className={styles.heading}>
        <h1>Marans</h1>
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

export default LogoSection;
