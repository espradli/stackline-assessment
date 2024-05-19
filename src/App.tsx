import React, { useEffect } from "react";
import "./App.css";
import { addProduct } from "./redux/productsSlice";
import { AppDispatch } from "./redux/store";
import { useDispatch } from "react-redux";
import { Header } from "./header/Header";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import productData from "./assets/product_data.json";

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
