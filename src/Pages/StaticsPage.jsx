import React from "react";
import DashboardCard from "../Components/DashboardCard";

export default function StaticsPage() {
  return (
    <div className="container-fluid">
      
      {/* Heading */}
      <div className="mb-4">
        <h1 className="h3 text-gray-800">
          Statistics
        </h1>

        <p className="text-muted">
          Monitor your job search performance and growth.
        </p>
      </div>

      <DashboardCard />

      {/* Performance Summary */}
      <div className="card shadow mt-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Performance Summary
          </h6>
        </div>

        <div className="card-body">
          <p>
             Your interview conversion rate is improving steadily.
          </p>

          <p>
             Focus on interview preparation to increase offer rates.
          </p>

          <p>
             Maintain consistency in applications for better responses.
          </p>

          <p className="mb-0">
             Keep tracking your progress to achieve your career goals.
          </p>
        </div>
      </div>

    </div>
  );
}