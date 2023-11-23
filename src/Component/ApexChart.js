import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";
;

function ApexChart() {
  const [data, setData] = useState([
    {
      data: [
        52100, 560000, 5400000, 5200000, 5000000, 4800000, 4800000, 4800000,
        4800000, 4800000, 4800000, 4800000, 4800000,
      ],
    },
  ]);

  console.log("updtaedData", data);

  const options = {
    chart: {
      id: "simple-bar",
    },
    xaxis: {
      categories: [
        "MF",
        "FD",
        "NPS",
        "Debentures",
        "PPF",
        "MIS",
        "RD",
        "SCS",
        "SS",
        "NSC",
        "KVP",
        "MS",
        "SGB",
      ], //will be displayed on the x-asis
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      horizontal: true,
      style: {
        fontSize: "12px",
        colors: ["#000"],
      },
    },
  };



  return (
    <>
      <div className="chartDiv">
        <Chart options={options} type="bar" series={data} width="80%" />
      </div>
    </>
  );
}

export default ApexChart;