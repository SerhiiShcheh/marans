import React from "react";
import LogoSection from "./components/logo-section";
import PhotoDescription from "./components/photo-description";
import Products from "./components/products";
import SectionHeader from "../../components/common/section-header";

function Home() {
  return (
    <main>
      <LogoSection />
      <PhotoDescription />
      <PhotoDescription revert />
      <SectionHeader heading="Наші товари" />
      <Products />
      <PhotoDescription />
    </main>
  );
}

export default Home;
