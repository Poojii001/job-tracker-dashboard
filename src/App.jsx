import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">

        {/* Sidebar */}
        <Navbar />

        {/* Right Side */}
        <div
          id="content-wrapper"
          className="d-flex flex-column"
        >
          <div id="content">

            {/* Topbar */}
            <Topbar />

            {/* Main Content */}
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}