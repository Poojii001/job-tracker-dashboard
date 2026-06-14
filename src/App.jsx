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
import AdminUsersPage from "./Pages/Admin/Users/AdminUsersPage";
import AdminUsersCreatePage from "./Pages/Admin/Users/AdminUsersCreatePage";
import AdminUsersUpdatePage from "./Pages/Admin/Users/AdminUsersUpdatePage";
import AdminJobsCreatePage from "./Pages/Admin/Jobs/AdminJobsCreatePage";
import AdminJobsUpdatePage from "./Pages/Admin/Jobs/AdminJobsUpdatePage";
import AdminJobsPage from "./Pages/Admin/Jobs/AdminJobsPage";
import AdminReportsPage from "./Pages/Admin/Reports/AdminReportsPage";
import AdminReportsCreatePage from "./Pages/Admin/Reports/AdminReportsCreatePage";
import AdminReportsUpdatePage from "./Pages/Admin/Reports/AdminReportsUpdatePage";
import AdminApplicationsPage from "./Pages/Admin/Applications/AdminApplicationsPage";
import AdminApplicationsCreatePage from "./Pages/Admin/Applications/AdminApplicationsCreatePage";
import AdminApplicationsUpdatePage from "./Pages/Admin/Applications/AdminApplicationsUpdatePage";
import AdminCompaniesPage from "./Pages/Admin/Companies/AdminCompaniesPage";
import AdminCompaniesCreatePage from "./Pages/Admin/Companies/AdminCompaniesCreatePage";
import AdminCompaniesUpdatePage from "./Pages/Admin/Companies/AdminCompaniesUpdatePage";

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

                <Route path="/admin/users" element={<AdminUsersPage />} />
                <Route path="/admin/users/create" element={<AdminUsersCreatePage />} />
                <Route path="/admin/users/update/:id" element={<AdminUsersUpdatePage />} />

                <Route path="/admin/jobs" element={<AdminJobsPage />} />
                <Route path="/admin/jobs/create" element={<AdminJobsCreatePage />} />
                <Route path="/admin/jobs/update/:id" element={<AdminJobsUpdatePage />} />

                <Route path="/admin/reports" element={<AdminReportsPage />} />
                <Route path="/admin/reports/create" element={<AdminReportsCreatePage />} />
                <Route path="/admin/reports/update/:id" element={<AdminReportsUpdatePage />} />

                <Route path="/admin/applications" element={<AdminApplicationsPage />} />
                <Route path="/admin/applications/create" element={<AdminApplicationsCreatePage />} />
                <Route path="/admin/applications/update/:id" element={<AdminApplicationsUpdatePage/>} />

                <Route path="/admin/companies" element={<AdminCompaniesPage />} />
                <Route path="/admin/companies/create" element={<AdminCompaniesCreatePage />} />
                <Route path="/admin/companies/update/:id" element={<AdminCompaniesUpdatePage/>} />

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