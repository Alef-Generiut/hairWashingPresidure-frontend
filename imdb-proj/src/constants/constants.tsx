import { movie } from "../types/types";

export const NOT_FOUND_NUMBER: number = -999;
export const NOT_FOUND_STRING: string = "notFound";

export const NOT_FOUND_MOVIE: movie = {
  id: NOT_FOUND_STRING,
  name: NOT_FOUND_STRING,
  posterPhoto: NOT_FOUND_STRING,
  bgPhoto: NOT_FOUND_STRING,
  length: NOT_FOUND_NUMBER,
  plot: NOT_FOUND_STRING,
  releaseDate: new Date(),
  genres: [{ id: NOT_FOUND_NUMBER, name: NOT_FOUND_STRING }],
  avgRating: NOT_FOUND_NUMBER,
};
