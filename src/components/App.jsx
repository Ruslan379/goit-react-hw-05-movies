import { Route, Routes } from "react-router-dom";

import { About } from "pages/About";
import { Home } from "pages/Home";
import { Products } from "pages/Products";
import { ProductDetails } from "pages/ProductDetails";
import { NotFound } from "pages/NotFound";

import { Container, Header, Logo, Link } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};