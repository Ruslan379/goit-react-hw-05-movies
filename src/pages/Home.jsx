// import { ProductList } from "../components/ProductList";
import { getTrendingAllDay } from "../fakeAPI";

import { Link } from "react-router-dom";
// import { Container, CardWrapper, ProductName } from "components/ProductList.styled";

export const Home = () => {
  const results = getTrendingAllDay()
    .then(res => {
      console.log("res: ", res);
    });
  console.log("results: ", results);
  return (
    <main>
      <div>
            {results.map((result) => (
                <div key={result.id}>
                    <Link to={`${result.id}`}>
                        <h3>{result.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    </main>
  );
};

export default Home;




// const Home = () => {
//   return (
//     <main>
//       <h1>Welcome</h1>
//       <img src="https://via.placeholder.com/960x240" alt="" />
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
//         laboriosam placeat incidunt rem illum animi nemo quibusdam quia
//         voluptatum voluptate.
//       </p>
//     </main>
//   );
// };

