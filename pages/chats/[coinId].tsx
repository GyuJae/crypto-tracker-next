import type { GetServerSideProps, NextPage } from "next";
import { useQuery } from "react-query";
import { getCoinHistory, IHistorical } from "apis/getCoins";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IChats {
  params: { coinId: string };
}

const styles = {
  wrapper: "flex flex-col py-20 justify-center items-center h-screen",
};

const timeToMonAndDay = (timeOpen: string) =>
  timeOpen.split("T")[0].split("-").slice(1).join("/");

const Chats: NextPage<IChats> = ({ params: { coinId } }) => {
  const { data, isLoading } = useQuery<IHistorical[]>(["coins", coinId], () =>
    getCoinHistory(coinId)
  );

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <span>loading...</span>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <ApexCharts
        type="candlestick"
        height={350}
        width={850}
        options={{
          chart: {
            id: "candlestick",
          },
          yaxis: {
            floating: false,
            labels: {
              formatter: (value) => {
                return value.toFixed(0);
              },
              style: {
                fontWeight: 700,
              },
            },
          },
        }}
        series={[
          {
            name: "candlestick1",
            data:
              data?.map((i) => ({
                x: timeToMonAndDay(i.time_open),
                y: [i.open, i.high, i.low, i.close].map((j) => j.toFixed(2)),
              })) || [],
          },
        ]}
      />
      <ApexCharts
        type="line"
        height={350}
        width={850}
        series={[
          { name: "Price", data: data?.map((price) => price.close) || [] },
        ]}
        options={{
          theme: {
            mode: "light",
          },
          chart: {
            height: 300,
            width: 500,
            toolbar: {
              show: false,
            },
            background: "transparent",
          },
          grid: {
            show: false,
          },
          stroke: {
            curve: "smooth",
            width: 5,
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { show: false },
            categories: data?.map((price) => price.time_close),
            type: "datetime",
          },
          fill: {
            type: "gradient",
            gradient: { gradientToColors: ["#0be881"] },
          },
          colors: ["#079854"],
          tooltip: {
            y: {
              formatter: (value) => value.toFixed(2),
            },
          },
        }}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { params: context.params },
  };
};

export default Chats;
