import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Index from "../pages/movies";
import { useMovies } from "../libs/hooks/movie.hook";

const mockedMovies = useMovies as jest.Mock<any>;

jest.mock("../libs/hooks/movie.hook");

describe("Movies", () => {
  beforeEach(() => {
    mockedMovies.mockImplementation(() => ({ isLoading: true }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders without crashing", () => {
    render(<Index />);
  });

  it("Fetching the correct data", () => {
    const { rerender } = render(<Index />);
    expect(useMovies).toHaveBeenCalledTimes(3);

    rerender(<Index />);
  });

  it("Displays data", () => {
    const mockedMoviesData = {
      dates: { maximum: "", minimum: "" },
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: "",
          genre_ids: [1, 2, 3, 4],
          id: 1,
          original_language: "",
          original_title: "",
          overview: "",
          popularity: 1,
          poster_path: "",
          release_date: "",
          title: "",
          video: false,
          vote_average: 1,
          vote_count: 1,
        },
      ],
      total_pages: 20,
      total_results: 200,
    };
    mockedMovies.mockImplementation(() => ({
      isLoading: false,
      data: mockedMoviesData,
    }));
    const { getByText, queryByText } = render(<Index />);

    expect(queryByText(/fetching data/i)).toBeFalsy();

    getByText("Movie");
    getByText("Popular");
  });
});
