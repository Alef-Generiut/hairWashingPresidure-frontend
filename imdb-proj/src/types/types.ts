export type user = {
  id: string;
  username: string;
  password: string;
  gmail: string;
};
export type movie = {
  id: string;
  name: string;
  posterPhoto: string;
  bgPhoto: string;
  length: number;
  plot: string;
  releaseYear: number;
  genres: genre[];
  avgRating:number;
};
export type movieReview = {
  id: string;
  rating: number;
  title: string;
  content: string;
  username: string;
  movieId: string;
  createdAt: Date;
};
export type genre = {
  id: number;
  name: string;
};
