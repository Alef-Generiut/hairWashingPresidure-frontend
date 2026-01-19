import axios from "axios";
import { MovieApiResponse } from "../types/types";
import { movie } from "../types/types";
import { API_HEADERS } from "../constants/constants";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/movie`,
  headers: API_HEADERS,
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
    })
      .then((res) => res.data)
      .catch((err) => {
        const status = err.response?.status;

        if (status === 451) {
          window.location.href = "https://en.wikipedia.org/wiki/Fish";
          return;
        }

        return Promise.reject(err);
      }),

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
