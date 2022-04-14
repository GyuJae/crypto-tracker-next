import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useMovie } from "../../libs/hooks/movie.hook";

const Movie: NextPage = () => {
  const { query } = useRouter();
  const { data, isLoading } = useMovie((query.id as string) || "");

  if (isLoading) {
    return (
      <div>
        <span>loading...</span>
      </div>
    );
  }

  return <div>{data?.title}</div>;
};

export default Movie;
