import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { toast } from 'react-toastify';


import { getMovieReviews } from "../fakeAPI";


const Reviews = () => {
    //! useState ===> **** (аналог this.state.****)
    const [movieReviews, setMovieReviews] = useState([]);
    

    const { id } = useParams();
    const movie_id = Number(id); //? 
    // console.log("Reviews movie_id=(id): ", movie_id); //!

    useEffect(() => {
    getMovieReviews(movie_id)
        .then(( movieReviews ) => { 
            // console.log("getMovieReviews movieReview: ", movieReviews); //!
            setMovieReviews(movieReviews.results);
            // console.log("getMovieReviews movieReview: ", movieReviews); //!
            
        })
        .catch(error => {
            // setError(error.message);
            console.log(error.message); //!
            toast.error(`Ошибка запроса: ${error.message}`, { position: "top-center", autoClose: 2000 } ); 
        })
    }, [movie_id]);

    // console.log("getMovieReviews movieReview: ", movieReviews); //!

    return (
        <section>
            {(movieReviews.length)
                ?
                <ul>
                    {movieReviews.map(({ author, content }) => (
                        <li key={author}>
                            <h4>{`Author: ${author}`}</h4>
                            <p style={{ paddingRight: "24px" }}>{content}</p>
                        </li>
                    ))}
                </ul>
                :
                <p style={{ marginLeft: "10px" }}>We don't have any reviews for this movie.</p>
            } 
        </section>
    );
};

export default Reviews;
