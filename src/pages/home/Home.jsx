import React from "react";
import LogoSection from "./components/logo-section";
import PhotoDescription from "./components/photo-description";
import Products from "./components/products";
import SectionHeader from "../../components/common/section-header";
import Galery from "./components/galery";
import styles from "./Home.module.scss";

function Home() {
  return (
    <main className={styles.wrapper}>
      <LogoSection />
      <PhotoDescription />
      <PhotoDescription revert />
      <Galery />
      <SectionHeader heading="Наші товари" />
      <Products />
      <PhotoDescription />
    </main>
  );
}

export default Home;
