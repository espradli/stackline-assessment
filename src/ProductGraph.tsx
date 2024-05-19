import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  TimeScale,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./ProductPage.css";
import "chartjs-adapter-date-fns";

interface ProductGraphProps {
  data: ChartData<"line", number[], unknown>;
  options: ChartOptions<"line">;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  TimeScale,
);

export const ProductGraph = ({ data, options }: ProductGraphProps) => {
  return (
    <div className="product-graph">
      <div>Retail Sales</div>
      <Line data={data} options={options} />
    </div>
  );
};
