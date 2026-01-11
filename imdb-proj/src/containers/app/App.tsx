import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import MainPage from "../../containers/mainPage/MainPage";
import AppLayout from "../../AppLayout";
import { SpinnerIcon } from "@phosphor-icons/react";
import MovieSearch from "../../components/movieSearch/MovieSearch";
import {
  urlLoginSecurityVerification,
  urlVerification,
} from "../../middleware/middleware";
import Login from "../../components/login/Login";
import SignUp from "../../components/signUp/SignUp";

const MoviePage = lazy(() => import("../../containers/moviePage/MoviePage"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    element: <AppLayout />,
    loader: urlLoginSecurityVerification,
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
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
