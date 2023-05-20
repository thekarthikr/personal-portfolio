import React from "react";
import { Toaster } from "react-hot-toast";

import { NavBar, Home, About, Project, Contact, Footer } from "./components";
import Preloader from "./components/Preloader";
const App = () => {
  return (
    <>
      <Toaster />
      <NavBar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
      <Preloader />
    </>
  );
};

export default App;
