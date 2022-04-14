const API_KEY: string = "962cebc1820ada99a807125b7f1fdcbf";
const BASE_PATH: string = "https://api.themoviedb.org/3";

type TvOrMovie = "tv" | "movie";

export const getMovieOrTV = ({
  tvOrMovie,
  category,
  pageNum,
}: {
  tvOrMovie: TvOrMovie;
  category: string;
  pageNum?: number;
}) => {
  return fetch(
    `${BASE_PATH}/${tvOrMovie}/${category}?api_key=${API_KEY}&page=${
      pageNum ? pageNum : 1
    }`
  ).then((res) => res.json());
};

export const getMovieOrTVDetail = ({
  tvOrMovie,
  id,
}: {
  tvOrMovie: TvOrMovie;
  id: string;
}) => {
  return fetch(`${BASE_PATH}/${tvOrMovie}/${id}?api_key=${API_KEY}`).then(
    (res) => res.json()
  );
};

export const getSearchMovieOrTv = ({
  tvOrMovie,
  query,
  pageNum,
}: {
  tvOrMovie: TvOrMovie;
  query: string;
  pageNum?: number;
}) => {
  return fetch(
    `${BASE_PATH}/search/${tvOrMovie}?api_key=${API_KEY}&query=${query}&page=${
      pageNum ? pageNum : 1
    }`
  ).then((res) => res.json());
};
