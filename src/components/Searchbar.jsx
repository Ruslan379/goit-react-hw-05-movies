import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
// import { useSearchParams } from "react-router-dom";

import { toast } from 'react-toastify';

import css from 'components/Searchbar.module.css' 



const Searchbar = ({onSubmit}) => {
  //! useState ===> query (аналог this.state.query)
  const [query, setQuery] = useState('');

  // const [searchParams] = useSearchParams();
  // const name = searchParams.get("query");
  // console.log("name: ", name);

  //! Запись в state значения поля инпут
  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };



  //! Submit ФОРМЫ, провека на "", передача пропса this.state.query в App
  const handleSubmit = event => {
    event.preventDefault();
    //! Проверка на пустую строку в инпуте
    if (event.target.elements.query.value.trim() === '') {
      toast.error('Поле не должно быть пустым');
      event.target.reset()
      return;
    };
    // console.log(query); //!
    //! Передача значения (query) в App
    onSubmit(query); //?

    //! Очистка поля инпута
    event.target.reset()
  };


  return (
    <header
      className={css.Searchbar}
    >
      <form
        className={css.SearchForm}
        onSubmit={handleSubmit}
      >
        <input
          className={css.SearchFormInput}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleChange}
        />

        <button
          type="submit"
          className={css.SearchFormButton}
        >
          <ImSearch style={{ marginRight: 8 }} />
          <span
            // className={css.SearchFormButtonLabel1}
          >
            Search
          </span>
        </button>
      </form>
    </header>
  );
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;






//todo OLD
// export const SearchBox = ({ value, onChange }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={value}
//         onChange={e => onChange(e.target.value)}
//       />
//     </div>
//   );
// };
