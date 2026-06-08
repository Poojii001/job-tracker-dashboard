import React from "react";
import ApplicationOverview from "../Components/ApplicationOverview";

export default function ApplicationOverviewPage() {
  return (
    <div className="container-fluid">

      {/* Hero Section */}
      <div className="card shadow border-0 mb-4 bg-gradient-primary text-white">
        <div className="card-body py-4 d-flex justify-content-between align-items-center flex-wrap">
          
          <div>
            <h2 className="font-weight-bold mb-2">
              Application Insights 📈
            </h2>

            <p className="mb-0">
              Monitor your job search journey and discover your application trends.
            </p>
          </div>

          <div className="text-center mt-3 mt-md-0">
            <i className="fas fa-chart-line fa-4x opacity-50"></i>
          </div>

        </div>
      </div>

      {/* Quick Highlights */}
      <div className="row mb-4">

        <div className="col-md-4 mb-3">
          <div className="card shadow border-left-success h-100">
            <div className="card-body">
              <h6 className="text-success font-weight-bold">
                Best Month
              </h6>

              <h4 className="mb-0">
                June 2026
              </h4>

              <small className="text-muted">
                Highest number of applications
              </small>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow border-left-info h-100">
            <div className="card-body">
              <h6 className="text-info font-weight-bold">
                Interview Rate
              </h6>

              <h4 className="mb-0">
                42%
              </h4>

              <small className="text-muted">
                Applications converted to interviews
              </small>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow border-left-warning h-100">
            <div className="card-body">
              <h6 className="text-warning font-weight-bold">
                Next Goal
              </h6>

              <h4 className="mb-0">
                50 Apps
              </h4>

              <small className="text-muted">
                Reach your monthly target
              </small>
            </div>
          </div>
        </div>

      </div>

      {/* Main Chart */}
      <ApplicationOverview />

      {/* Motivation Card */}
      <div className="card shadow border-0 mt-4">
        <div className="card-body text-center py-4">
          <i className="fas fa-bullseye fa-2x text-primary mb-3"></i>

          <h5 className="font-weight-bold">
            Keep Going!
          </h5>

          <p className="text-muted mb-0">
            Every application brings you one step closer to your dream job.
          </p>
        </div>
      </div>

    </div>
  );
}