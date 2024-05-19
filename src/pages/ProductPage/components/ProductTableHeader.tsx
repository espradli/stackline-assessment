import { Column, SortDef } from "../interfaces";

interface TableHeaderProps {
  columns: Column[];
  sort: SortDef;
  setSort: (sort: SortDef) => void;
}

export const TableHeader = ({ columns, sort, setSort }: TableHeaderProps) => {
  return (
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
  );
};
