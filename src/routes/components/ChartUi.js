// import React from 'react'
// import './assets/ChartUi.scss'
// import 'antd/dist/antd.css';

// export default function ChartUi() {
//   return (
//     <div>
      
//     </div>
//   )
// }

import React from "react";
import './assets/ChartUi.scss'
import 'antd/dist/antd.css';
import { Divider } from 'antd';

import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Revenue",
      data: [33, 53, 55, 41, 44, 65, 33, 53, 55, 41, 44, 70],
      lineTension: 0.4,
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Profit",
      data: [33, 25, 35, 51, 54, 56, 33, 25, 35, 51, 54, 56],
      lineTension: 0.4,
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export default function Chart() {
  return (
    <div className="Chart">
      <h2 className="chart__fontSize">Revenue / Profit (2021)</h2>
      <Line data={data} />
    </div>
  );
}

// import React from 'react'
// import { Line } from 'react-chartjs-2'

// export default function ChartLine({ data, labels }) {
//   const state = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//     datasets: [
//       {
//         label: 'Revenue',
//         fill: false,
//         lineTension: 0.4,
//         backgroundColor: '#256BFE',
//         borderColor: '#256BFE',
//         borderWidth: 3,
//         data: [33, 53, 55, 41, 44, 65, 33, 53, 55, 41, 44, 65],
//       },
//     ],
//   }

//   return (
//     <Line
//       redraw={false}
//       className="chart-line-dashboard"
//       data={state}
//       options={{
//         title: {
//           display: true,
//           text: 'Average Rainfall per month',
//           fontSize: 20,
//         },
//         legend: {
//           display: false,
//           position: 'right',
//         },
//       }}
//     />
//   )
// }