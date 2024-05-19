import { ChartData, ChartOptions } from "chart.js";
import { Sale } from "../../interfaces";

export const useSalesGraph = (sales: Sale[]) => {
  const wholesale = sales.map((sale) => sale.wholesaleSales);
  const retail = sales.map((sale) => sale.retailSales);
  const all = [...wholesale, ...retail];
  const max = Math.max(...all);
  const min = Math.min(...all);

  const data: ChartData<"line", number[], unknown> = {
    labels: sales.map((sale) => sale.weekEnding),
    datasets: [
      {
        data: wholesale,
        label: "Wholesale Sales",
        borderColor: "#9ba6bf",
        backgroundColor: "#9ba6bf",
        tension: 0.5,
      },
      {
        data: retail,
        label: "Retail Sales",
        borderColor: "#44a7f6",
        backgroundColor: "#44a7f6",
        tension: 0.5,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    scales: {
      x: {
        offset: true,
        border: { display: false },
        grid: { display: false },
        type: "time",
        time: {
          unit: "month",
          displayFormats: { month: "MMM" },
        },
      },
      y: {
        max: max + (max - min),
        min: min - (max - min),
        offset: true,
        display: false,
        grid: { display: false },
      },
    },
  };

  return { data, options };
};
