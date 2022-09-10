import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { toast } from 'react-toastify';


import { getSearchMovies } from "../fakeAPI";




const Movies = () => {
  //! useState ===> **** (аналог this.state.****)
  const [results, setResults] = useState([]);
  // const [error, setError] = useState(false);

  //! Поиск фильма - query-запросу из формы:
  // const query = "qrty" //? должен выдать сообщение: `Нет такого фильма: qrty`
  // const query = " " //? должен выдать сообщение об ошике: `Ошибка запроса`
  // const query = "avatar"
  const query = "Beast"
  
  

  useEffect(() => {
    //! Первый рендер, если query - это пустая строка, то НЕ ДЕЛАЕМ HTTP-запрос
    if (!query) {
      return;
    };

    getSearchMovies(query)
      .then(( results ) => { 
        console.log("getTrendingAllDa results: ", results); //!
        //! Проверка на неправильній запрос
        if (results.length === 0) {
          toast.warning(`Нет такого фильма: ${query}`);
          setResults([]);
          return;
        }
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
      <h1>Поиск фильма: {query}</h1>
      {results.length > 0 && (
        <div>
          {results.map(({ id, title, name }) => (
                    <Link key={id} to={`${id}`}>
                      {/* <p>{title}</p> */}
                      <p>{title || name}</p>
                    </Link>
              ))}
        </div>
      )}
    </main>
  );
};

export default Movies;






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


























//todo OLD
// import { Outlet } from "react-router-dom";  //! ТАК  <MoviesDetails /> будет рендерится ПОД основным текстом в <Movies />

// const Movies = () => {
//   return (
//     <main>
//       <h1>Movies</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
//         laborum amet ab cumque sit nihil dolore modi error repudiandae
//         perspiciatis atque voluptas corrupti, doloribus ex maiores quam magni
//         mollitia illum dolor quis alias in sequi quod. Sunt ex numquam hic
//         asperiores facere natus sapiente cum neque laudantium quam, expedita
//         voluptates atque quia aspernatur saepe illo, rem quasi praesentium
//         aliquid sed inventore obcaecati veniam? Nisi magnam vero, dolore
//         praesentium totam ducimus similique asperiores culpa, eius amet
//         repudiandae quam ut. Architecto commodi, tempore ut nostrum voluptas
//         dolorum illum voluptatum dolores! Quas perferendis quis alias excepturi
//         eaque voluptatibus eveniet error, nulla rem iusto?
//       </p>
//       {/* <Outlet /> //! ТАК  <MoviesDetails /> будет рендерится ПОД основным текстом в <Movies /> */}
//     </main>
//   );
// };

// export default Movies;