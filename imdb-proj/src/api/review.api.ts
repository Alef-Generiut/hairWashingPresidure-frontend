import axios from "axios";
import { addReviewDto, review, ReviewApiResponse } from "../types/types";
import { API_HEADERS } from "../constants/constants";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/review`,
  headers: API_HEADERS,
});

const ReviewAPI = {
  getByIds: (userId: string, movieId: string) =>
    API.post("/getRatingByIds", { userId, movieId }).then((res) => res.data),
  get: async (movieId: string) => {
    const res = await API.get(`/${movieId}`);
    const data: ReviewApiResponse[] = res.data;
    const reviews: review[] = data.map((review: ReviewApiResponse) => ({
      ...review,
      createdAt: new Date(review.createdat),
    }));

    return reviews;
  },
  create: (review: addReviewDto) =>
    API.post("/", review)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        const status = err.response?.status;

        if (status === 451) {
          window.location.href =
            "https://www.youtube.com/watch?v=r2fv-wji9pU&t=2m3s";
          return;
        }

        return Promise.reject(err);
      }),
};

export default ReviewAPI;
