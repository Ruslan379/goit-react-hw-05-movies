import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from "react-router-dom";

import { toast } from 'react-toastify';

import BackLink from "components/BackLink";
import { getMovieDetails } from "fakeAPI";


const MoviesDetails = () => {
    const location = useLocation();
    //! useState ===> **** (аналог this.state.****)
    const [movieDetails, setMovieDetails] = useState({});
    const [yearDate, setYearDate] = useState("");
    const [userScore, setUserScore] = useState(0);
    // const [genres, setGenres] = useState([]); //?
    const [genresAll, setGenresAll] = useState("");
    const [error, setError] = useState(false);
    
    //* ++++++++++++++ location +++++++++++++++++++++++++++++
    const [locationState, setLocationState] = useState(null); //! МОЙ вариант для location
    
    //! МОЙ вариант для location
    useEffect(() => {
        //! ТАК РАБОТАЕТ (1- вариант)
        // if (location.state !== null)  {
        //     setLocationState(location.state?.from);
        // }
        //! ТАК РАБОТАЕТ (2- вариант)
        if (location.state?.from)  {
            setLocationState(location.state.from);
        }
    }, [location.state]);
    //* _______________ location _____________________________



    const { id } = useParams();
    // const movie_id = Number(id); //? 
    // console.log("movie_id=(id): ", movie_id); //!

    useEffect(() => {
        setError(false);
        getMovieDetails(Number(id))
            .then(( movieDetails ) => { 
            // console.log("getTrendingAllDa movieDetails: ", movieDetails); //!
            setMovieDetails(movieDetails);
            setYearDate(movieDetails.release_date.substr(0, 4));
            setUserScore((movieDetails.vote_average * 10).toFixed(0));
            // console.log("getTrendingAllDa movieDetails.genres: ", movieDetails.genres); //!

            // const genres = movieDetails.genres.map(item => item.name); //?
            // setGenres(movieDetails.genres.map(item => (Object.values(item)))); //! ТАК НЕЛЬЗЯ!!!
            // setGenres(prevState => [...prevState, ...genres]); //?
            // console.log("genres: ", genres); //!

            // setGenresAll(genres.join(", ")); //!!! замена ниже:
            setGenresAll((movieDetails.genres.map(item => item.name)).join(" ")); 
            // console.log("genresAll: ", genresAll); //!
            // console.log("movieDetails.poster_path: ", movieDetails.poster_path); //!
            })
            .catch(error => {
            setError(error.message);
            console.log(error.message); //!
            toast.error(`Ошибка запроса: ${error.message}`, { position: "top-center", autoClose: 2000 } ); 
            })
    }, [id]);
    
    //! Проверка movieDetails на пустой объект
    if (!movieDetails) {
        return null;  
    }
    //! Дестуктуризируем нужныесв-ва из объекта movieDetails 
    const { poster_path, title, name, overview } = movieDetails;

    //* ++++++++++++++ location +++++++++++++++++++++++++++++
    // console.log("location.state: ", location.state); //!
    // console.log("location.pathname: ", location.pathname); //!
    // console.log("location.state.from: ", location.state?.from); //!!!
    
    // const backLinkHref = location.state?.from ?? '/'; //! вариант для location РЕПЕТЫ
    // const backLinkHref = locationState ?? '/'; //! МОЙ вариант-1 для location
    const backLinkHref = location.state?.from ?? locationState; //! МОЙ вариант-2 для location
    // console.log("backLinkHref: ", backLinkHref); //!!!
    //* _______________ location _____________________________


    // console.log("movieDetails.poster_path: ", movieDetails.poster_path); //!
    // const basicURL = "https://image.tmdb.org/t/p/original";

    // console.log("movieDetails.release_date: ", movieDetails.release_date); //!
    // const yearDate = movieDetails.release_date.substr(0, 4);
    // console.log("yearDate: ", yearDate); //!

    return (
        <>
            {error && (
                <div style={{ margin: '0 auto', color: 'red' }}>
                        <h1>Ошибка запроса:</h1>
                        <h2 style={{ textDecoration: "underline", fontStyle: 'italic', color: '#a10000' }}>!!! {error}</h2>
                    </div>
            )}
            
            {/* {!error && movieDetails && ( //! Проверка movieDetails на пустой объект */}
            {!error && (
                <div style={{ border: "solid 1px", boxShadow: "7px 7px 3px 0px rgba(0,0,0,0.50)" }}>
                    
                    {/* <Link to={backLinkHref}>Go back</Link> */}
                    <BackLink to={backLinkHref}>Go back</BackLink>

                    <div style={{ display: "flex" }}>
                        {/* <img src="https://image.tmdb.org/t/p/original/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg" alt="" /> */}
                        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />

                        <div style={{ marginLeft: "24px", paddingRight: "24px" }}>
                            {/* <h1>Информация о фильме</h1> */}
                            <h2 style={{ color: "#571616" }}>{`${title || name} (${yearDate})`}</h2>
                            <p>{`User Score: ${userScore}%`}</p>
                            <h3>Overview</h3>
                            <p>{overview}</p>
                            <h3>Genres</h3>
                            <p>{genresAll}</p>

                        </div>
                    </div>

                    <div style={{ border: "solid 1px", boxShadow: "3px 3px 1px 0px rgba(0,0,0,0.25)"}}>
                        <p style={{ marginLeft: "10px" }}>Additional Information</p>
                        <ul>
                            <li>
                                <Link to="cast">Cast</Link>
                                {/* <Link to="cast" state={location.state.from}>Cast</Link> */}
                            </li>
                            <li>
                                <Link to="reviews">Reviews</Link>
                                {/* <Link to="reviews" state={location.state.from}>Reviews</Link> */}
                            </li>
                        </ul>
                    </div>
                    <Suspense fallback={null}>
                    {/* <Suspense fallback={<div>Loading page...</div>}> */}
                        <Outlet />
                    </Suspense>
                </div>
            )}
        </>
    );
};

export default MoviesDetails;