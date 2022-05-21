import type { NextPage } from "next";

import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getCoins, ICoin } from "../apis/getCoins";
import { cls } from "../libs/utils";

const Home: NextPage = () => {
  const { data } = useQuery<ICoin[]>("coins", getCoins);
  const router = useRouter();
  const {
    query: { page = 1 },
  } = router;

  const PAGE_DATA_AMOUNT = 100;

  const coins = data?.slice(
    PAGE_DATA_AMOUNT * (+page - 1),
    PAGE_DATA_AMOUNT * +page
  );
  return (
    <div className="flex justify-center py-10 bg-slate-900">
      <table className="text-white  bg-gray-300 bg-opacity-10 rounded-md">
        <thead className="border-white">
          <tr>
            <th className="p-2">Rank</th>
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">1h</th>
            <th className="p-2">24h</th>
            <th className="p-2">7d</th>
            <th className="p-2">Volumn (24h)</th>
          </tr>
        </thead>
        <tbody>
          {coins?.map((coin) => (
            <tr
              key={coin.id}
              className="hover:bg-gray-700 hover:text-blue-700  border-b-2 border-gray-100 cursor-pointer"
              onClick={() =>
                router.push({
                  pathname: "/chats/[id]",
                  query: { id: coin.id },
                })
              }
            >
              <td className="text-center p-1">{coin.rank}</td>
              <td className="p-1 text-center">{coin.name}</td>
              <td className="p-1 text-left">
                $ {coin.quotes.USD.price.toFixed(2)}
              </td>
              <td
                className={cls(
                  "p-1 text-center",
                  coin.quotes.USD.percent_change_1h < 0
                    ? "text-red-600"
                    : "text-green-600"
                )}
              >
                {coin.quotes.USD.percent_change_1h}%
              </td>
              <td
                className={cls(
                  "p-1 text-center",
                  coin.quotes.USD.percent_change_24h < 0
                    ? "text-red-600"
                    : "text-green-600"
                )}
              >
                {coin.quotes.USD.percent_change_24h}%
              </td>
              <td
                className={cls(
                  "p-1 text-center",
                  coin.quotes.USD.percent_change_7d < 0
                    ? "text-red-600"
                    : "text-green-600"
                )}
              >
                {coin.quotes.USD.percent_change_7d}%
              </td>
              <td className="p-1 text-left">
                $ {(+coin.quotes.USD.volume_24h.toFixed()).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("coins", getCoins);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
