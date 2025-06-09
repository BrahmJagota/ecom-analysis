// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
// import { useMemo } from "react";

// // Register chart components
// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// type DataItem = {
//   id: number;
//   day: number;
//   userGain: number;
//   userLost: number;
// };

// function LineChart({ chartData }: { chartData: DataItem[] }) {
//   const data = useMemo(() => ({
//     labels: chartData.map(data => data.day.toString()),
//     datasets: [
//       {
//         label: "Users Gained",
//         data: chartData.map(data => data.userGain),
//         fill: false,
//         borderColor: "#42A5F5",
//         tension: 0.4
//       }
//     ]
//   }), [chartData]);

//   const options = {
//     plugins: {
//       title: {
//         display: true,
//         text: "Users Gained between 2016-2020"
//       },
//       legend: {
//         display: false
//       }
//     },
//     responsive: true
//   };

//   return (
//     <div className="chart-container w-150 h-90">
//       <h2 style={{ textAlign: "center" }}>Line Chart</h2>
//       <Line data={data} options={options} />
//     </div>
//   );
// }

// export default LineChart;
    

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useMemo } from "react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

type ChartDataItem = {
  label: string; // Date
  value: number; // Amount
};

function LineChart({ chartData }: { chartData: ChartDataItem[] }) {
  const data = useMemo(() => ({
    labels: chartData.map(item => item.label),
    datasets: [
      {
        label: "Total Sales Amount",
        data: chartData.map(item => item.value),
        fill: false,
        borderColor: "#42A5F5",
        tension: 0.4,
      }
    ]
  }), [chartData]);

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Sales Amount Per Day"
      },
      legend: {
        display: false
      }
    },
    responsive: true
  };

  return (
    <div className="chart-container w-150 h-90">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
