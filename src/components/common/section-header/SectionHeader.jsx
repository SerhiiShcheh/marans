import React from "react";
import styles from "./SectionHeader.module.scss";

function SectionHeader({ heading }) {
  return <h1 className={styles.heading}>{heading}</h1>;
}

export default SectionHeader;
