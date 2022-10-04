import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';

import { getTrendingAllDay } from "fakeAPI";





const Home = () => {
  const location = useLocation();
  //! useState ===> **** (аналог this.state.****)
  const [results, setResults] = useState([]);


  useEffect(() => {
    getTrendingAllDay()
      .then(( results ) => { 
        setResults(results);
      })
      .catch(error => {
          console.log(error.message); //!
          toast.error(`Ошибка запроса: ${error.message}`, { position: "top-center", autoClose: 2000 } ); 
      })
  }, []);
  
  
  return (
    <main>
      <h1>Trending today</h1>
      <div>
        {results.map(({ id, title, name }) => (
          <Link key={id} to={`movies/${id}`} state={{ from: location }}>
            <p>{title}</p>
            {/* <p>{title || name}</p> */}
            {/* <p>{(title) ? title.toUpperCase() : name}</p> */}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
