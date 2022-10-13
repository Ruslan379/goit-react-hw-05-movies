import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { toast } from 'react-toastify';

import { getMovieCast } from "services/fakeAPI";


const Cast = () => {
    //! useState ===> **** (аналог this.state.****)
    const [movieCast, setMovieCast] = useState([]);
    

    const { id } = useParams();

    useEffect(() => {
    getMovieCast(Number(id))
        .then(( movieCast ) => { 
            setMovieCast(movieCast.cast);
        })
        .catch(error => {
            console.log(error.message); //!
            toast.error(`Ошибка запроса: ${error.message}`, { position: "top-center", autoClose: 2000 } ); 
        })
    }, [id]);



    //! Проверка movieCast на пустой объект
    if (!movieCast) {
        return null;  
    }

    return (
        <section>
            <ul>
                {movieCast.map(({ profile_path, original_name, character }) => (
                    <li key={original_name}>
                        <img src={`https://image.tmdb.org/t/p/w92${profile_path}`} alt="" />
                        <h4>{original_name}</h4>
                        <p>{`Character: ${character}`}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Cast;
