import React, { useEffect } from "react";
import "./App.css";
import { ProductPage } from "./ProductPage";
import { Header } from "./Header";
import productData from "./product_data.json";
import { addProduct } from "./productsSlice";
import { AppDispatch } from "./store";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    productData.forEach((product) => dispatch(addProduct(product)));
  });

  const productId = "B007TIE0GQ";
  return (
    <>
      <Header />
      <ProductPage productId={productId} />
    </>
  );
}

export default App;
