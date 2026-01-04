import axios from "axios";
import { MovieApiResponse } from "../types/types";
import { movie } from "../types/types";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/movie`,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

const MovieAPI = {
getLatest: async () => {
  const res = await API.get("/latest");
  const data: MovieApiResponse = res.data;

  const movie: movie = {
    ...data,
    releaseDate: new Date(data.releaseDate),
  };

  return movie;
},
  getFeatured: () => API.get("/featured").then((res) => res.data),

  getTopRated: () => API.get("/top-rated").then((res) => res.data),

  getReccomended: (genreIds: number[]) =>
    API.post("/recommended", genreIds).then((res) => res.data),

  searchMovies: (searchName: string) =>
    API.get(`/search`, {
      params: { searchName },
    }).then((res) => res.data),

  getById: async (movieId: string) => {
    const res = await API.get(`/${movieId}`);
    const data: MovieApiResponse = res.data;

    const movie: movie = {
      ...data,
      releaseDate: new Date(data.releaseDate),
      genres: data.genres,
    };

    return movie;
  },
};

export default MovieAPI;
