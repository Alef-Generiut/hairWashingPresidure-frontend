import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainPage from "../../containers/mainPage/MainPage";
import AppLayout from "../../AppLayout";
import { SpinnerIcon } from "@phosphor-icons/react";
import MovieSearch from "../../components/movieSearch/MovieSearch";
import { urlVerification } from "../../middleware/middleware";

const MoviePage = lazy(() => import("../../containers/moviePage/MoviePage"));

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
      {
        path: "search",
        element: <MovieSearch />,
        loader: urlVerification,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
