import { useSelector } from "react-redux";
import { Product } from "./interfaces";
import { ProductData } from "./ProductData";
import { ProductInfo } from "./ProductInfo";
import "./ProductPage.css";
import type { RootState } from "./store";

interface ProductPageProps {
  productId: string;
}

export const ProductPage = ({ productId }: ProductPageProps) => {
  const product: Product | undefined = useSelector(
    (state: RootState) => state.products.products[productId],
  );

  if (!product) {
    return <div>Loading... </div>;
  }

  return (
    <div className="product-page">
      <ProductInfo product={product} />
      <ProductData product={product} />
    </div>
  );
};
