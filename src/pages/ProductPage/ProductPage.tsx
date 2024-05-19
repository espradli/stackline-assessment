import { useSelector } from "react-redux";
import "./ProductPage.css";
import type { RootState } from "../../redux/store";
import { ProductInfo } from "./components/ProductInfo";
import { ProductData } from "./components/ProductData";
import { Product } from "./interfaces";

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
