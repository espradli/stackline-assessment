import { useSalesGraph } from "./hooks";
import { Product } from "./interfaces";
import { ProductGraph } from "./ProductGraph";
import "./ProductPage.css";
import { Column, ProductTable } from "./ProductTable";

interface ProductDataProps {
  product: Product;
}

export const ProductData = ({ product }: ProductDataProps) => {
  const tableColumns: Column[] = [
    { name: "WEEK ENDING", key: "weekEnding" },
    { name: "RETAIL SALES", key: "retailSales" },
    { name: "WHOLESALE SALES", key: "wholesaleSales" },
    { name: "UNITS SOLD", key: "unitsSold" },
    { name: "RETAILER MARGIN", key: "retailerMargin" },
  ];

  const { data, options } = useSalesGraph(product.sales);
  return (
    <div className="product-data">
      <ProductGraph data={data} options={options} />
      <ProductTable columns={tableColumns} data={product.sales} />
    </div>
  );
};
