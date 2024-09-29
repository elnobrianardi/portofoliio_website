import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="area w-full h-full">
      <ul className="circles -z-10 absolute pointer-events-none">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div>
        <Navbar />
      </div>
      
      <div>
        <Hero />
        <Profile/>
        <Project/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
