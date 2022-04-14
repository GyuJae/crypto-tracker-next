import { useQuery } from "react-query";
import { StoreApi } from "../client/store";
import { IMovieDetail, IMovieResult, MovieCategory } from "../types";

const store = new StoreApi();

export const useMovies = (category: MovieCategory) => {
  return useQuery<IMovieResult, Error>(
    ["movies", category],
    () => store.getMovies(category),
    { retry: false }
  );
};

export const useMovie = (id: string) => {
  return useQuery<IMovieDetail, Error>(
    ["movie", id],
    () => store.getMovie(id),
    { retry: false }
  );
};
