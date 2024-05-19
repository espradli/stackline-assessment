import "./ProductPage.css";
import { Sale } from "./interfaces";

interface ProductTableProps {
  columns: { name: string; key: keyof Sale }[];
  data: Sale[];
}

export const ProductTable = ({ columns, data }: ProductTableProps) => {
  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.name}>{col.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td>{item[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
