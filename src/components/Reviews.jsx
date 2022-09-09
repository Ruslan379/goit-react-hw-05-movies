import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { toast } from 'react-toastify';


import { getMovieReviews } from "../fakeAPI";


const Reviews = () => {
    //! useState ===> **** (аналог this.state.****)
    const [movieReviews, setMovieReviews] = useState([]);
    

    const { id } = useParams();
    const movie_id = Number(id); //? 
    console.log("Reviews movie_id=(id): ", movie_id); //!

    useEffect(() => {
    getMovieReviews(movie_id)
        .then(( movieReviews ) => { 
            // console.log("getTrendingAllDa movieReview: ", movieReviews); //!
            setMovieReviews(movieReviews.results);
            console.log("getTrendingAllDa movieReview: ", movieReviews); //!
            
        })
        .catch(error => {
            // setError(error.message);
            console.log(error.message); //!
            toast.error(`Ошибка запроса: ${error.message}`, { position: "top-center", autoClose: 2000 } ); 
        })
    }, [movie_id]);

    // console.log("getTrendingAllDa movieReview: ", movieReviews); //!

    return (
        <section>
            <ul>
                {movieReviews.map(({ author, content }) => (
                    <li key={author}>
                        <h4>{`Author: ${author}`}</h4>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Reviews;
