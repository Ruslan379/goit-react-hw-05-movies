import { Routes, Route } from "react-router-dom";


import { SplashScreenReact } from 'pages/SplashScreenReact';
import { About } from 'pages/About';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplashScreenReact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
    </div>
  );
};
