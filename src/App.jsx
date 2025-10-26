import React from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";

import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";



function App() {

  return (

    <>

      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />

      </Routes>

      <Footer />

    </>

  );

}



export default App;