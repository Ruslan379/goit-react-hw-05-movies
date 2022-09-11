import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { toast } from 'react-toastify';

import { getMovieReviews } from "fakeAPI";



const Reviews = () => {
    //! useState ===> **** (аналог this.state.****)
    const [movieReviews, setMovieReviews] = useState([]);
    
    const { id } = useParams();


    useEffect(() => {
    getMovieReviews(Number(id))
        .then(( movieReviews ) => { 
            setMovieReviews(movieReviews.results);
        })
        .catch(error => {
            console.log(error.message); //!
            toast.error(`Ошибка запроса: ${error.message}`, { position: "top-center", autoClose: 2000 } ); 
        })
    }, [id]);


    //! Проверка results на пустой объект
    if (!movieReviews) {
        return null;  
    }


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
