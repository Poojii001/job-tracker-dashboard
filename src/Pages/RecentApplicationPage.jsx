import React from "react";
import RecentApplication from "../Components/RecentApplication";
import DashboardCard from "../Components/DashboardCard";

export default function RecentApplicationPage() {
  return (
    <div className="container-fluid">

      {/* Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <div>
          <h1 className="h3 mb-0 text-gray-800">
            Recent Applications
          </h1>

          <p className="text-muted mb-0">
            Review your latest job applications and their current status.
          </p>
        </div>

        <button className="btn btn-primary shadow-sm">
          <i className="fas fa-plus fa-sm mr-2"></i>
          Add Application
        </button>
      </div>

      <DashboardCard />

      {/* Recent Applications Component */}
      <RecentApplication />

    </div>
  );
}