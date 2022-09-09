import axios from 'axios';



//!-----------------------------------------------------------------------------------------------------------------------------------------------------------
//! Константы для URL-запросов:
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '41b230c5977baa736e324532e16fdadb';

// const API_KEY = '28759369-3882e1068ac26fe18d14affeb'; //! не мой!

const END_POINTS_1 = "trending/all/day" //!  /trending/all/day ==> список самых популярных фильмов на сегодня для создания коллекции на главной странице.

const END_POINTS_2 = "search/movie" //!  /search/search-movies ==> поиск кинофильма по ключевому слову на странице фильмов.
const query = "avatar"
const page = 1; //? можно добавить в строку запроса

const END_POINTS_3 = "movie" //!  /movies/get-movie-details ==> запрос полной информации о фильме для страницы кинофильма.
const movie_id = 616037

const END_POINTS_4 = "movie" //!  /movies/get-movie-credits  ==> запрос информации об актёрском составе для страницы кинофильма.
const CREDITS = "credits"

const END_POINTS_5 = "movie" //!  /movies/get-movie-reviews ==> запрос обзоров для страницы кинофильма.
const REVIEWS = "reviews"


//!-----------------------------------------------------------------------------------------------------------------------------------------------------------
//! Формируем строки URL-запросов:
const url_1 = `${BASE_URL}/${END_POINTS_1}?api_key=${API_KEY}`;
console.log("url_1: ", url_1); //!

const url_2 = `${BASE_URL}/${END_POINTS_2}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
console.log("url_2: ", url_2); //!

const url_3 = `${BASE_URL}/${END_POINTS_3}/${movie_id}?api_key=${API_KEY}&language=en-US`;
console.log("url_3: ", url_3); //!

const url_4 = `${BASE_URL}/${END_POINTS_4}/${movie_id}/${CREDITS}?api_key=${API_KEY}&language=en-US`;
console.log("url_4: ", url_4); //!

const url_5 = `${BASE_URL}/${END_POINTS_5}/${movie_id}/${REVIEWS}?api_key=${API_KEY}&language=en-US&page=${page}`;
console.log("url_5: ", url_5); //!


//!-----------------------------------------------------------------------------------------------------------------------------------------------------------
//! Формируем URL-запросы:
//! 1 
export async function getTrendingAllDay() {

    //                                   https://api.themoviedb.org/3/movie/19995/reviews?api_key=41b230c5977baa736e324532e16fdadb&language=en-US&page=1
    //                                   https://api.themoviedb.org/3/movie/19995/credits?api_key=41b230c5977baa736e324532e16fdadb&language=en-US
    //!                                  https://api.themoviedb.org/3/movie/19995/images?api_key=41b230c5977baa736e324532e16fdadb&language=en-US
    //                                   https://api.themoviedb.org/3/movie/19995?api_key=41b230c5977baa736e324532e16fdadb&language=en-US
    // const response = await axios.get("https://api.themoviedb.org/3/authentication/token/new?api_key=41b230c5977baa736e324532e16fdadb") //!  /a temporary request token
    // const response = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=41b230c5977baa736e324532e16fdadb") //! пример
    // const response = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=41b230c5977baa736e324532e16fdadb") //!  /trending/all/day

    const response = await axios.get(url_1) //! 1 
    // const all = await response.data //?
    // console.log("axios response.data: ", response.data); //!
    // console.log("all: ", all); //?

    const { results } = response.data //!  /trending/all/day ==> список самых популярных фильмов на сегодня
    // console.log("axios results: ", results); //!
    // console.log("axios total_pages: ", total_pages); //!

    // return total_pages;
    // return response.data;
    return results;
}



//! 3 
export async function getMovieDetails(movie_id) {
    const response = await axios.get(`${BASE_URL}/${END_POINTS_3}/${movie_id}?api_key=${API_KEY}&language=en-US`) //!
    // const all = await response.data //?
    // console.log("axios response.data: ", response.data); //!
    // console.log("getMovieDetails all: ", all); //?

    // return all;
    return response.data;
}



//! 4 
export async function getMovieCast(movie_id) {
    const response = await axios.get(`${BASE_URL}/${END_POINTS_4}/${movie_id}/${CREDITS}?api_key=${API_KEY}&language=en-US`) //!
    // const all = await response.data //?
    // console.log("axios response.data: ", response.data); //!
    // console.log("getMovieDetails all: ", all); //?

    // return all;
    return response.data;
}



//! 5 
export async function getMovieReviews(movie_id) {
    const response = await axios.get(`${BASE_URL}/${END_POINTS_5}/${movie_id}/${REVIEWS}?api_key=${API_KEY}&language=en-US&page=${page}`) //!
    // const all = await response.data //?
    // console.log("axios response.data: ", response.data); //!
    // console.log("getMovieDetails all: ", all); //?

    // return all;
    return response.data;
}



//todo OLD
// const products = [
//     { id: "h-1", name: "Hoodie 1" },
//     { id: "h-2", name: "Hoodie 2" },
//     { id: "h-3", name: "Hoodie 3" },
//     { id: "s-1", name: "Sneakers 1" },
//     { id: "s-2", name: "Sneakers 2" },
//     { id: "s-3", name: "Sneakers 3" },
//     { id: "s-4", name: "Sneakers 4" },
//     { id: "p-1", name: "Pants 1" },
//     { id: "p-2", name: "Pants 2" },
//     { id: "p-3", name: "Pants 3" }
// ];

// export const getProducts = () => {
//     return products;
// };

// export const getProductById = (productId) => {
//     return products.find((product) => product.id === productId);
// };
