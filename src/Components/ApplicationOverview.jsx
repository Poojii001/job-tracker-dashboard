import React from "react";

export default function ApplicationOverview() {
  return (
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Applications Overview
          </h6>
        </div>

        <div className="card-body text-center py-5">
          <i className="fas fa-chart-line fa-4x text-gray-300 mb-3"></i>

          <h5>Monthly Applications Trend</h5>

          <p className="text-muted">
            Chart.js integrate karne ke baad yahan graph show hoga.
          </p>
        </div>
      </div>
    </div>
  );
}