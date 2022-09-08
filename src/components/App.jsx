import axios from 'axios';


// import { SharedLayout } from "components/SharedLayout";
// import { NotFound } from "pages/NotFound";




export const App = () => {

//! pixabay.com  
//! Формируем строку URL-запроса:
  const query = "cat"
  const API_KEY = '28759369-3882e1068ac26fe18d14affeb';
  const BASE_URL = 'https://pixabay.com/api/';
  const page = 1;
  const per_page = 12;
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=${per_page}`; //! with API_KEY
  console.log("url: ", url);
  //! pixabay.com
  // async function fetchPixabay() {
  //   const response = await axios.get(url)
  //   const { total } = await response.data
  //   console.log("response.data: ", response.data); //!
  //   console.log("total: ", total); //!
  //   return total;
  // }
  
  // const request1 = fetchPixabay()
  //   .then(res => console.log("res: ", res)); //!
  
  // console.log("fetchPixabay request1: ", request1); //!







//! themoviedb.org
async function fetchPixabay() {
    const response = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=41b230c5977baa736e324532e16fdadb")
    const all = await response.data
    console.log("response.data: ", response.data); //!
    console.log("all: ", all); //!
    return response.data;
    }
  
  const request1 = fetchPixabay()
    .then(res => console.log("res: ", res)); //!
  
  console.log("fetchPixabay request1: ", request1); //!



  return (
    <div>
      запрос
      {/* {request1}  */}
    </div>
  );
};




