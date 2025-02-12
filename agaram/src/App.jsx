import { Fragment } from "react";
import Hello from "./Hello";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cotact from "./Cotact";
import ErrorPate from "./ErrorPate";

let App = () => {
  return (
    <Fragment>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Cotact />}></Route>
          <Route path="*" element={<ErrorPate />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
