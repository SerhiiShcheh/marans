import React from "react";

import styles from "./LogoSection.module.scss";
import background from "../../../../assets/main-page.jpg";

function LogoSection() {
  return (
    <section
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
    >
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
