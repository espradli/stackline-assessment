import React, { useEffect } from "react";
import "./App.css";
import { ProductPage } from "./ProductPage";
import { Header } from "./Header";
import productData from "./product_data.json";
import { addProduct } from "./productsSlice";

const getProductData = () =>
  productData.forEach((product) => addProduct(product));

function App() {
  useEffect(() => getProductData());

  return (
    <>
      <Header />
      <ProductPage />
    </>
  );
}

export default App;
