import { ProductData } from "./ProductData";
import { ProductInfo } from "./ProductInfo";
import "./ProductPage.css";

export const ProductPage = () => {
  return (
    <div className="product-page">
      <ProductInfo />
      <ProductData />
    </div>
  );
};
