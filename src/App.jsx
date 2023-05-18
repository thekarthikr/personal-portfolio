import React from "react";
import { Toaster } from "react-hot-toast";

import { NavBar, Home, About, Project, Contact, Footer } from "./components";
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
    </>
  );
};

export default App;
