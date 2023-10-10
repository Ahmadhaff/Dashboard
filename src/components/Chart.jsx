import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// eslint-disable-next-line react-refresh/only-export-components
export const options = {
  responsive: true,
  tension: 0.3,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Your Expenses",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// eslint-disable-next-line react-refresh/only-export-components
export const data = {
  labels,
  datasets: [
    {
      label: "Amount Of Money You Spent",
      data: [10000, 20000, 30000, 50000, 40000, 90000, 70000, 80000, 60000],
      borderColor: "RGB(34, 197, 94)"
,
      backgroundColor: "RGB(34, 197, 94)",
    },
  ],
};

export default function App() {
  return <Line options={options} data={data} />;
}
