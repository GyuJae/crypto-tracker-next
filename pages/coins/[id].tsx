import { getCoinHistory, IHistorical } from "apis/getCoins";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";

const CoinPage: NextPage = () => {
  const router = useRouter();
  const {
    query: { id: coinId },
  } = router;

  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    getCoinHistory(coinId as string)
  );

  if (isLoading) {
    <div>loading...</div>;
  }

  return (
    <div className="flex flex-col items-center py-10 bg-indigo-900 text-white h-[100vh]">
      <h1 className="font-semibold text-lg">Coin Page: {coinId}</h1>
      <div className="py-10 bg-indigo-700 mt-10 px-10 rounded-md shadow-md">
        <VictoryChart
          animate={{ duration: 1000, easing: "linear" }}
          height={500}
          width={800}
          theme={VictoryTheme.grayscale}
          domainPadding={50}
          containerComponent={<VictoryVoronoiContainer />}
        >
          <VictoryLine
            labels={({ datum }) => datum.y.toFixed(2)}
            labelComponent={
              <VictoryTooltip style={{ fontSize: 15 }} renderInPortal dy={-5} />
            }
            data={data?.map((item) => ({ x: item.time_close, y: item.close }))}
            style={{
              data: {
                strokeWidth: 4,
              },
            }}
          />
          <VictoryAxis
            tickLabelComponent={<VictoryLabel renderInPortal />}
            style={{
              tickLabels: {
                fontSize: 12,
              },
            }}
            tickFormat={(tick) => {
              const date = new Date(tick);
              return `${date.getMonth() + 1}.${date.getDate()}`;
            }}
          />
          <VictoryAxis dependentAxis />
        </VictoryChart>
      </div>
    </div>
  );
};

export default CoinPage;
