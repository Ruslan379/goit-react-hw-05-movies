// import { useState, useEffect, useLayoutEffect } from 'react'; 
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { toast } from 'react-toastify';

// import { ProductList } from "../components/ProductList";

import { getTrendingAllDay } from "../fakeAPI";

// import { Container, CardWrapper, ProductName } from "components/ProductList.styled";




const Home = () => {
  //! useState ===> **** (аналог this.state.****)
  const [results, setResults] = useState([]);
  // const [error, setError] = useState(false);

  useEffect(() => {
    // Первый рендер, если results - это пустая строка, то НЕ ДЕЛАЕМ HTTP-запрос
    // if (!results) {
    //   return;
    // };
    getTrendingAllDay()
      .then(( results ) => { 
        console.log("getTrendingAllDa results: ", results); //!
          // if (results.length === 0) {  
            // toast.warning(`Нет такой темы`); 
            // setHits([]);
            // return;
          // } else {
            // if (page === 1) {
            //   toast.success(`По вашей теме найдено ${totalHits} изображений`, { autoClose: 3000 });
            // };
              setResults(prevState => [...prevState, ...results]);

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
  }, []);
  
  
  return (
    <main>
      <h1>Trending today</h1>
      <div>
        {results.map(({ id, title, name }) => (
              // <ul>
                // <li key={id}>
                  <Link key={id} to={`movies/${id}`}>
                    {/* <p>{title}</p> */}
                    <p>{title || name}</p>
                  </Link>
              // </li>
            // </ul>
            ))}
        </div>
    </main>
  );

  //todo old            
  // return (
  //   <main>
  //     <h1>Trending today</h1>
  //     <div>
  //           {results.map((result) => (
  //               <div key={result.id}>
  //                 <Link to={`movies/${result.id}`}>
  //                   {/* <p>{result.title}</p> */}
  //                   <p>{result.title || result.name}</p>
  //                 </Link>
  //               </div>
  //           ))}
  //       </div>
  //   </main>
  // );
};

export default Home;




