import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';

import { getSearchMovies } from "fakeAPI";
import Searchbar from 'components/Searchbar';




const Movies = () => {
  const location = useLocation();
  //! useState ===> **** (аналог this.state.****)
  const [results, setResults] = useState([]);


  //! Хук useSearchParams - записыват значение из инпута (из query) 
  //! в URL - строку запроса и хранит его всвоем объекте параметров
  const [searchParams, setSearchParams] = useSearchParams();
  

  const handleFormSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };


  const query = searchParams.get("query") ?? '';




  useEffect(() => {
    //! Первый рендер, если query - это пустая строка, то НЕ ДЕЛАЕМ HTTP-запрос
    if (!query) {
      return;
    };
    //! Запрос, название фильма - это query
    getSearchMovies(query)
      .then(( results ) => { 
        //! Проверка на неправильный запрос
        if (results.length === 0) {
          toast.warning(`Нет такого фильма: ${query}`);
          setResults([]);
          return;
        }
        setResults(results); 
      })
      .catch(error => {
          console.log(error.message); //!
          toast.error(`Ошибка запроса: ${error.message}`, { position: "top-center", autoClose: 2000 } ); 
      })
  }, [query]);
  

  //! Проверка results на пустой объект
  if (!results) {
    return null;  
  }
  
  return (
    <main>
      <Searchbar onSubmit={handleFormSubmit} />

      {results.length > 0 && (
        <div>
          {results.map(({ id, title, name }) => (
            <Link key={id} to={`${id}`} state={{ from: location }}>
              <p>{title}</p>
              {/* <p>{title || name}</p> */}
              {/* <p>{(title) ? title.toUpperCase() : name}</p> */}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default Movies;

