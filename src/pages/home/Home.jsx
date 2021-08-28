import React from "react";
import LogoSection from "./components/logo-section";
import ProductsSection from "./components/products-section";

function Home() {
  return (
    <main>
      <LogoSection />
      <ProductsSection alignment="left" />
      <ProductsSection />
    </main>
  );
}

export default Home;
