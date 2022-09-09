import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from "pages/Home";
import Movies from "pages/Movies";
import MoviesDetails from "pages/MoviesDetails";
import Cast from "components/Cast";
import Reviews from "components/Reviews";

import { SharedLayout } from "components/SharedLayout";
import NotFound from "pages/NotFound";

import { Container } from "components/App.styled";

export const App = () => {
  return (
    <Container>
      <ToastContainer autoClose={1500} theme={"colored"} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
};







//todo OLD (до SharedLayout)
// export const App = () => {
//   return (
//     <Container>
//       <ToastContainer autoClose={1500} theme={"colored"} />
//       <Header>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/movies">Movies</Link>
//         </nav>
//       </Header>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:id" element={<MoviesDetails />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Container>
//   );
// };














//todo  OLD (НАЧАЛО)
// export const App = () => {
//!-----------------------------------------------------------------------------------------------------------------------------------------------------------
  //! Константы для URL-запросов:
  // const BASE_URL = 'https://api.themoviedb.org/3';
  // const API_KEY = '41b230c5977baa736e324532e16fdadb';

  // // const API_KEY = '28759369-3882e1068ac26fe18d14affeb'; //! не мой!

  // const END_POINTS_1 = "trending/all/day" //!  /trending/all/day ==> список самых популярных фильмов на сегодня для создания коллекции на главной странице.
  
  // const END_POINTS_2 = "search/movie" //!  /search/search-movies ==> поиск кинофильма по ключевому слову на странице фильмов.
  // const query = "avatar"
  // const page = 1; //? можно добавить в строку запроса

  // const END_POINTS_3 = "movie" //!  /movies/get-movie-details ==> запрос полной информации о фильме для страницы кинофильма.
  // const movie_id = 19995
  
  // const END_POINTS_4 = "movie" //!  /movies/get-movie-credits  ==> запрос информации об актёрском составе для страницы кинофильма.
  // const CREDITS = "credits"

  // const END_POINTS_5 = "movie" //!  /movies/get-movie-reviews ==> запрос обзоров для страницы кинофильма.
  // const REVIEWS  = "reviews"


//!-----------------------------------------------------------------------------------------------------------------------------------------------------------
  //! Формируем строки URL-запросов:
  // const url_1 = `${BASE_URL}/${END_POINTS_1}?api_key=${API_KEY}`; 
  // console.log("url_1: ", url_1); //!

  // const url_2 = `${BASE_URL}/${END_POINTS_2}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`; 
  // console.log("url_2: ", url_2); //!

  // const url_3 = `${BASE_URL}/${END_POINTS_3}/${movie_id}?api_key=${API_KEY}&language=en-US`; 
  // console.log("url_3: ", url_3); //!

  // const url_4 = `${BASE_URL}/${END_POINTS_4}/${movie_id}/${CREDITS}?api_key=${API_KEY}&language=en-US`; 
  // console.log("url_4: ", url_4); //!
  
  // const url_5 = `${BASE_URL}/${END_POINTS_5}/${movie_id}/${REVIEWS}?api_key=${API_KEY}&language=en-US&page=${page}`; 
  // console.log("url_5: ", url_5); //!


//!-----------------------------------------------------------------------------------------------------------------------------------------------------------
  //! Формируем URL-запросы:
  // export const App = () => {
  // async function fetchPixabay() { 
  // //                                   https://api.themoviedb.org/3/movie/19995/reviews?api_key=41b230c5977baa736e324532e16fdadb&language=en-US&page=1
  // //                                   https://api.themoviedb.org/3/movie/19995/credits?api_key=41b230c5977baa736e324532e16fdadb&language=en-US
  // //                                   https://api.themoviedb.org/3/movie/19995?api_key=41b230c5977baa736e324532e16fdadb&language=en-US
  // // const response = await axios.get("https://api.themoviedb.org/3/authentication/token/new?api_key=41b230c5977baa736e324532e16fdadb") //!  /a temporary request token
  // // const response = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=41b230c5977baa736e324532e16fdadb") //! пример
  // // const response = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=41b230c5977baa736e324532e16fdadb") //!  /trending/all/day
  
  // const response = await axios.get(url_5) //!  
  //   // const all = await response.data
  //   console.log("response.data: ", response.data); //!
  //   // console.log("all: ", all); //!

  //   // const { total_pages, results } = response.data //!  /trending/all/day ==> список самых популярных фильмов на сегодня
  //   // console.log("axios results: ", results); //!
  //   // console.log("axios total_pages: ", total_pages); //!

  //   // return total_pages;
  //   return response.data;
  //   }
  
  // const request = fetchPixabay()
  //   .then(res => {
  //     console.log("res: ", res); //!

  //     // const { results, total_pages } = res;
  //     // console.log("IN fetchPixabay results: ", results); //!
  //     // console.log("IN fetchPixabay total_pages: ", total_pages); //!

  //     // return total_pages;
  //   }); //!
  
  // console.log("OUT fetchPixabay request: ", request); //!
  // console.log("OUT fetchPixabay results: ", results); //!




//   return (
//     <div>
//       запрос
//       {/* {request}  */}
//     </div>
//   );
// };


