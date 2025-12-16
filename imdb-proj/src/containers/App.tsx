import "./App.css";
import Header from "../components/Header";
import { AppShell, Flex } from "@mantine/core";
import MainPage from "../components/mainPage/mainPage/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePage from "../components/moviePage/moviePage/MoviePage";
import { movies } from "../hardCodedData";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "movie/:movieName", element: <MoviePage movie={movies[0]} /> },
]);
const App = () => {
  return (
    <AppShell>
      <AppShell.Header>
        <Flex mih={50} justify="center" align="center" direction="row">
          <Header />
        </Flex>
      </AppShell.Header>

      <AppShell.Main>
        <RouterProvider router={router} />
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
