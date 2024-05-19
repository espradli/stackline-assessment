import "../ProductPage.css";
import { useState } from "react";
import { SortDef, Sale, Column } from "../interfaces";
import { TableHeader } from "./ProductTableHeader";

const sortData = (sort: SortDef, data: Sale[]) => {
  const newData = [...data];
  newData.sort((d1, d2) => {
    if (d1[sort.by] < d2[sort.by]) return sort.dir === "asc" ? -1 : 1;
    if (d1[sort.by] > d2[sort.by]) return sort.dir === "asc" ? 1 : -1;
    return 0;
  });
  return newData;
};

const dollarColumns = new Set([
  "retailSales",
  "wholesalleSales",
  "retailerMargin",
]);

const dollarFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

interface ProductTableProps {
  columns: Column[];
  data: Sale[];
}

export const ProductTable = ({ columns, data }: ProductTableProps) => {
  const [sort, setSort] = useState<SortDef>({
    by: columns[0].key,
    dir: "asc",
  });

  const sortedData = sortData(sort, data);
  return (
    <div className="product-table">
      <table>
        <TableHeader
          sort={sort}
          setSort={(sort: SortDef) => setSort(sort)}
          columns={columns}
        />

        <tbody>
          {sortedData.map((item, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col.key + idx}>
                  {dollarColumns.has(col.key)
                    ? dollarFormatter.format(item[col.key] as number)
                    : item[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
