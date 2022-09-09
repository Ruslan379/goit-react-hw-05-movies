import { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

import { toast } from 'react-toastify';

import { getMovieDetails } from "../fakeAPI";


const MoviesDetails = () => {
    //! useState ===> **** (аналог this.state.****)
    const [movieDetails, setMovieDetails] = useState({});

    const { id } = useParams();
    const movie_id = Number(id)
    console.log("movie_id=(id): ", movie_id);

    useEffect(() => {
    // Первый рендер, если results - это пустая строка, то НЕ ДЕЛАЕМ HTTP-запрос
    // if (!results) {
    //   return;
    // };
    getMovieDetails(movie_id)
      .then(( movieDetails ) => { 
        console.log("getTrendingAllDa movieDetails: ", movieDetails); //!
          // if (results.length === 0) {  
            // toast.warning(`Нет такой темы`); 
            // setHits([]);
            // setIsLoading(false);
            // return;
          // } else {
            // if (page === 1) {
            //   toast.success(`По вашей теме найдено ${totalHits} изображений`, { autoClose: 3000 });
            // };
              setMovieDetails(movieDetails);
              // setIsLoading(false);
              // setShowButton(true);
            // };
          // endOfCollection - это цифра еще НЕ ПРОСМОТРЕННЫХ элементов коллекции
          // console.log("endOfCollection: ", endOfCollection); //!
          // if (endOfCollection <= 0) {
          //   toast.info('Вы достигли конца результатов поиска', { autoClose: 3000 }); 
          //   setShowButton(false); //! Кнопка LOAD MORE => ПРЯЧЕМ
          //   return;
          // }
      })
      .catch(error => {
          // setIsLoading(false);
          // setError(error.message);
          console.log(error.message); //!
          toast.error(`Ошибка запроса: ${error.message}`, { position: "top-center", autoClose: 2000 } ); 
      })
  }, [movie_id]);

    console.log("movieDetails.poster_path: ", movieDetails.poster_path);
    // const basicURL = "https://image.tmdb.org/t/p/original";

    return (
        <div>
            <h1>Информация о фильме</h1>
            {/* <img src="https://image.tmdb.org/t/p/original/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg" alt="" /> */}
            <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt="" />
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
);
};

export default MoviesDetails;