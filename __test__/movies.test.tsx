import { render, screen } from "@testing-library/react";
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
});
