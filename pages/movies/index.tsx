import type { NextPage } from "next";
import Image from "next/image";
import { dehydrate, QueryClient, useQuery } from "react-query";
import MovieHeader from "../../components/MovieHeader";
import Movies from "../../components/Movies";
import { useMovies } from "../../libs/hooks/movie.hook";
import { makeImagePath } from "../../libs/utils";

const Index: NextPage = () => {
  const { data: popularData } = useMovies("popular");
  const { data: topRatedData } = useMovies("top_rated");
  const { data: upcomingData } = useMovies("upcoming");

  return (
    <div className="bg-black text-white">
      <MovieHeader />
      <div className="w-full h-[560px] bg-gray-50 relative z-0">
        <Image
          className="absolute object-cover"
          layout="fill"
          alt="popular movie poster"
          src={makeImagePath(popularData?.results[0].backdrop_path as string)}
          priority
        />
      </div>
      <div className="grid grid-rows-3 gap-28 py-10 pb-24">
        {popularData?.results && (
          <div className="space-y-20 m-auto">
            <div className="text-lg font-semibold">Popular</div>
            <Movies
              movies={popularData.results.filter(
                (movie) => movie.backdrop_path
              )}
            />
          </div>
        )}
        {topRatedData?.results && (
          <div className="space-y-20 m-auto">
            <div className="text-lg font-semibold">Top Rated</div>
            <Movies
              movies={topRatedData.results.filter(
                (movie) => movie.backdrop_path
              )}
            />
          </div>
        )}
        {upcomingData?.results && (
          <div className="space-y-20 m-auto">
            <div className="text-lg font-semibold">Upcoming</div>
            <Movies
              movies={upcomingData.results.filter(
                (movie) => movie.backdrop_path
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["movies", "popular"], () =>
    useMovies("popular")
  );
  await queryClient.prefetchQuery(["movies", "top_rated"], () =>
    useMovies("top_rated")
  );
  await queryClient.prefetchQuery(["movies", "upcoming"], () =>
    useMovies("upcoming")
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Index;
