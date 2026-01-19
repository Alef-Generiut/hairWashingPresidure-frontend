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

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

export const API_HEADERS = {
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
};

export const PLACEHOLDER = "placeHolder";

export const STICKY_OFFSET = 80;

export const TITLE ="PlaceHolder Title"