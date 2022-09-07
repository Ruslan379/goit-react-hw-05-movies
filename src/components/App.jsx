import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "components/SharedLayout";
import { NotFound } from "pages/NotFound";


//! Так НЕ РАБОТАЕТ!!!
//! Critical dependency: the request of a dependency is an expression
//! Критическая зависимость: запрос зависимости является выражением
// const createAsyncComponent = (path) => lazy(() => import(path));

// const Home = createAsyncComponent("pages/Home");
// const About = createAsyncComponent("pages/About");
//   const Mission = createAsyncComponent("components/Mission");
//   const Team = createAsyncComponent("components/Team");
//   const Reviews = createAsyncComponent("components/Reviews");
// const Products = createAsyncComponent("pages/Products");
//   const ProductDetails = createAsyncComponent("pages/ProductDetails");


//* Так  РАБОТАЕТ!!!
const Home = lazy(() => import("pages/Home"));
const About = lazy(() => import("pages/About"));
  const Mission = lazy(() => import("components/Mission"));
  const Team = lazy(() => import("components/Team"));
  const Reviews = lazy(() => import("components/Reviews"));
const Products = lazy(() => import("pages/Products"));
  const ProductDetails = lazy(() => import("pages/ProductDetails"));
  



//todo ==> до Разделение кода
// import { SharedLayout } from "./SharedLayout";
//   import { Home } from "pages/Home";
//   import { About } from "pages/About";
//     import { Mission } from "components/Mission";
//     import { Team } from "components/Team";
//     import { Reviews } from "components/Reviews";
//   import { Products } from "pages/Products";
//     import { ProductDetails } from "pages/ProductDetails";
// import { NotFound } from "pages/NotFound";
  
// import { Container, Header, Logo, Link } from "./SharedLayout.styled";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};






//todo  ==> до Индексные маршруты
// export const App = () => {
//   return (
//     <Container>

//       <Header>
//         <Logo>
//           <span role="img" aria-label="computer icon">
//             💻
//           </span>{" "}
//           GoMerch Store
//         </Logo>

//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/products">Products</Link>
//         </nav>
//       </Header>
      
//       <Routes>
//         <Route path="/" element={<Home />} />

//         {/* <Route path="/about" element={<About />} /> //! */}
//         <Route path="/about" element={<About />}>
//           <Route path="mission" element={<Mission />} />
//           <Route path="team" element={<Team />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>

//         <Route path="/products" element={<Products />} />

//         <Route path="/products/:id" element={<ProductDetails />} />

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Container>
//   );
// };