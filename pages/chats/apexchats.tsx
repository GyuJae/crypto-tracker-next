import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Apexchats = () => {
  return (
    <div className="flex justify-center py-20 w-screen h-screen">
      <Chart
        options={{
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          },
        }}
        series={[
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ]}
        type="line"
        width="500"
      />
    </div>
  );
};

export default Apexchats;
