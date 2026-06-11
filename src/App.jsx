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
import Error404Page from "./Pages/Error404Page";
import ReportsPage from "./Pages/ReportsPage";
import ActivityLogsPage from "./Pages/ActivityLogsPage";
import AnalyticsPage from "./Pages/AnalyticsPage";
import StaticsPage from "./Pages/StaticsPage";
import AdminDashboardPage from "./Pages/Admin/AdminDashboardPage";
import AdminManageUsersPage from "./Pages/Admin/ManageUsers/AdminManageUsersPage";
import AdminManageUsersCreatePage from "./Pages/Admin/ManageUsers/AdminManageUsersCreatePage";
import AdminManageUsersUpdatePage from "./Pages/Admin/ManageUsers/AdminManageUsersUpdatePage";
import AdminJobsCreatePage from "./Pages/Admin/Jobs/AdminJobsCreatePage";
import AdminJobsUpdatePage from "./Pages/Admin/Jobs/AdminJobsUpdatePage";
import AdminJobsPage from "./Pages/Admin/Jobs/AdminJobsPage";

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
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/activity" element={<ActivityLogsPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/statics" element={<StaticsPage />} />

                {/* Admin Routes  */}
                <Route path="/Admin" element={<AdminDashboardPage />} />
                <Route path="/admin/dashboard" element={<AdminDashboardPage />} />

                <Route path="/admin/users" element={<AdminManageUsersPage />} />
                <Route path="/admin/users/create" element={<AdminManageUsersCreatePage />} />
                <Route path="/admin/users/update/:id" element={<AdminManageUsersUpdatePage />} />

                <Route path="/admin/jobs" element={<AdminJobsPage />} />
                <Route path="/admin/jobs/create" element={<AdminJobsCreatePage />} />
                <Route path="/admin/jobs/update/:id" element={<AdminJobsUpdatePage />} />

                <Route path="/*" element={<Error404Page />} />

              </Routes>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}