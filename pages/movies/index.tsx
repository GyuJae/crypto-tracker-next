import type { NextPage } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getMovieOrTV, IMovie, IMovieResult } from "../../apis/getMovies";
import MovieHeader from "../../components/MovieHeader";
import Movies from "../../components/Movies";
import { makeImagePath } from "../../libs/utils";

const Index: NextPage = () => {
  const { data: popularData } = useQuery<IMovieResult>(
    ["movies", "popular"],
    () => getMovieOrTV({ tvOrMovie: "movie", category: "popular" })
  );
  const { data: topRatedData } = useQuery<IMovieResult>(
    ["movies", "top_rated"],
    () => getMovieOrTV({ tvOrMovie: "movie", category: "top_rated" })
  );
  const { data: upcomingData } = useQuery<IMovieResult>(
    ["movies", "upcoming"],
    () => getMovieOrTV({ tvOrMovie: "movie", category: "upcoming" })
  );

  return (
    <div className="bg-black text-white">
      <MovieHeader />
      <Suspense fallback={<div>loading...</div>}>
        <div className="w-full h-[560px] bg-gray-50 relative z-0">
          <Image
            className="absolute object-cover"
            layout="fill"
            alt="popular movie poster"
            src={makeImagePath(popularData?.results[0].backdrop_path as string)}
            priority
          />
        </div>
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
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
      </Suspense>
    </div>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["movies", "popular"], () =>
    getMovieOrTV({ tvOrMovie: "movie", category: "popular" })
  );
  await queryClient.prefetchQuery(["movies", "top_rated"], () =>
    getMovieOrTV({ tvOrMovie: "movie", category: "top_rated" })
  );
  await queryClient.prefetchQuery(["movies", "upcoming"], () =>
    getMovieOrTV({ tvOrMovie: "movie", category: "upcoming" })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Index;
