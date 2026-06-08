import React from "react";
import DashboardCard from "../Components/DashboardCard";

export default function ReportsPage() {

  return (
    <div className="container-fluid">

      <h1 className="h3 mb-4 text-gray-800">
        Reports
      </h1>
    <DashboardCard />

      {/* Summary Section */}
      <div className="card shadow mt-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Monthly Summary
          </h6>
        </div>

        <div className="card-body">
          <p>
             You applied to <strong>24 jobs</strong> this month.
          </p>

          <p>
             You received <strong>8 interview calls</strong>.
          </p>

          <p>
             You secured <strong>2 job offers</strong>.
          </p>

          <p className="mb-0">
           Keep improving and stay consistent in your job search journey.
          </p>
        </div>
      </div>

    </div>
  );
}