import { Routes, Route, Link, NavLink  } from "react-router-dom";

import { SplashScreenReact } from 'pages/SplashScreenReact';
import { About } from 'pages/About';
import { NotFound } from 'pages/NotFound';

import styled from "styled-components";

const StyledLink = styled(NavLink)`
padding-top: 10px;
padding-left: 20px;
  display: flex;
  // align-items: flex-start;
  // justify-content: center;
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink  to="/">Home</StyledLink>
        <StyledLink  to="/about">About</StyledLink>
        <StyledLink  to="/products">Products</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<SplashScreenReact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
