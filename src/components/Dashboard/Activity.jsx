import React, { useState } from "react";
import { Chart, registerables } from "chart.js";
import { CategoryScale } from "chart.js";
import { Data } from "../../utils/data";
import { Bar } from "react-chartjs-2";
import "../Dashboard/styles/activity.scss";

Chart.register(...registerables);

const Activity = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.day),
    datasets: [
      {
        data: Data.map((data) => data.activity),
        backgroundColor: [
          "#FBA04B",
          "#FBA04B",
          "#FBA04B",
          "#FBA04B",
          "#FBA04B",
          "#FBA04B",
          "#FBA04B",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <div className="activity">
        <div className="activity__heading">
          <h1>Activity</h1>
          <div>
            <p>
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#FBA04B" />
                </svg>
              </span>
              <span>Active</span>
            </p>
            <p>
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#CECECE" />
                </svg>
              </span>
              <span>Inactive</span>
            </p>
          </div>
        </div>
        <BarChart chartData={chartData} />
      </div>
    </>
  );
};

export default Activity;

export const BarChart = ({ chartData }) => {
  return (
    <>
      <Bar
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </>
  );
};
