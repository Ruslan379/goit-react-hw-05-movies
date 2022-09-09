import { Link, Outlet } from "react-router-dom";

const MoviesDetails = () => {
    return (
        <div>
            <h1>Информация о фильме</h1>
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