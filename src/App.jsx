import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import {
  NavBar,
  Home,
  About,
  Project,
  Contact,
  Footer,
  PageNotFound,
} from "./components";
import Preloader from "./components/Preloader";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={[
              <Toaster />,
              <NavBar />,
              <Home />,
              <About />,
              <Project />,
              <Contact />,
              <Footer />,
              <Preloader />,
            ]}
          />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
