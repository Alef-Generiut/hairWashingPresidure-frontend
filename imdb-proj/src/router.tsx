import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainPage from "./components/mainPage/mainPage/MainPage";
import AppLayout from "./AppLayout";
import { SpinnerIcon } from "@phosphor-icons/react";

const MoviePage = lazy(
  () => import("./components/moviePage/moviePage/MoviePage")
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      {
        path: "movie/:movieId",
        element: (
          <Suspense
            fallback={
              <div className="loading-screen">
                <SpinnerIcon />
                <p>Loading movie...</p>
              </div>
            }
          >
            <MoviePage />
          </Suspense>
        ),
      },
    ],
  },
]);
export default router;
