import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar"; // Adjust path if needed
import LandingPage from "./pages/LandingPage"; // Assuming LandingPage.jsx is in the same directory

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div> */}
    </div>
  );
};

export default App;
