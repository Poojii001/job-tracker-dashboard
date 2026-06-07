import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import ApplicationOverviewPage from "./Pages/ApplicationOverviewPage";
import RecentApplicationPage from "./Pages/RecentApplicationPage";
import InterviewsPage from "./Pages/InterviewsPage";
import OffersPage from "./Pages/OffersPage";
import RejectedPage from "./Pages/RejectedPage";

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
                <Route path="/application" element={<ApplicationOverviewPage />} />
                <Route path="/recentapp" element={<RecentApplicationPage />} />
                <Route path="/interviews" element={<InterviewsPage />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/reject" element={<RejectedPage />} />
              </Routes>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}