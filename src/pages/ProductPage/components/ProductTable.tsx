import "../ProductPage.css";
import { useState } from "react";
import { Sale } from "../../../interfaces";

export interface Column {
  name: string;
  key: keyof Sale;
}

interface ProductTableProps {
  columns: Column[];
  data: Sale[];
}

interface SortDef {
  by: keyof Sale;
  dir: "asc" | "dec";
}

const sortData = (sort: SortDef, data: Sale[]) => {
  const newData = [...data];
  newData.sort((d1, d2) => {
    if (d1[sort.by] < d2[sort.by]) return sort.dir === "asc" ? -1 : 1;
    if (d1[sort.by] > d2[sort.by]) return sort.dir === "asc" ? 1 : -1;
    return 0;
  });
  return newData;
};

export const ProductTable = ({ columns, data }: ProductTableProps) => {
  const [sort, setSort] = useState<SortDef>({
    by: columns[0].key,
    dir: "asc",
  });

  const sortedData = sortData(sort, data);
  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.name}>
                {col.name}
                {sort.by === col.key && sort.dir === "dec" ? (
                  <div
                    className="sort-button"
                    onClick={() => setSort({ by: col.key, dir: "asc" })}
                  >
                    &and;
                  </div>
                ) : (
                  <div
                    className="sort-button"
                    onClick={() => setSort({ by: col.key, dir: "dec" })}
                  >
                    &or;
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortedData.map((item, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col.key + idx}>{item[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
