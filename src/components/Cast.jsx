import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { toast } from 'react-toastify';


import { getMovieCast } from "../fakeAPI";


const Cast = () => {
    //! useState ===> **** (аналог this.state.****)
    const [movieCast, setMovieCast] = useState([]);
    

    const { id } = useParams();
    const movie_id = Number(id); //? 
    // console.log("Cast movie_id=(id): ", movie_id); //!

    useEffect(() => {
    getMovieCast(movie_id)
        .then(( movieCast ) => { 
            // console.log("getMovieCast movieCast: ", movieCast); //!
            setMovieCast(movieCast.cast);
            // console.log("getMovieCast movieCast.cast: ", movieCast.cast); //!
            
        })
        .catch(error => {
            // setError(error.message);
            console.log(error.message); //!
            toast.error(`Ошибка запроса: ${error.message}`, { position: "top-center", autoClose: 2000 } ); 
        })
    }, [movie_id]);

    // console.log("getMovieCast movieCast.cast: ", movieCast.cast); //!

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

















//todo OLD
// const Cast = () => {
//   return (
//     <section>
//       <div>
//         <h2>Актер № 1</h2>
//         <p>
//           Роль: Сonsectetur
//         </p>
//       </div>
//       <div>
//         <h2>Актер № 2</h2>
//         <p>
//           Роль:  Corrupti
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Cast;