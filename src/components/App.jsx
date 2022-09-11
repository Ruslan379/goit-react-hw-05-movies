import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SharedLayout } from "components/SharedLayout";
import NotFound from "pages/NotFound";

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const MoviesDetails = lazy(() => import("pages/MoviesDetails"));
  const Cast = lazy(() => import("components/Cast"));
  const Reviews = lazy(() => import("components/Reviews"));




export const App = () => {
  return (
    <>
      <ToastContainer autoClose={1500} theme={"colored"} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

        </Route>
      <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
