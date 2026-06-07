import React from "react";

export default function ApplicationOverview() {
  return (
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
        {/* Header */}
        <div className="card-header py-3 d-flex justify-content-between align-items-center">
          <h6 className="m-0 font-weight-bold text-primary">
            Applications Overview
          </h6>

          <span className="badge badge-primary">
            This Month
          </span>
        </div>

        <div className="card-body">
          {/* Stats */}
          <div className="row text-center mb-4">
            <div className="col-md-4">
              <h4 className="font-weight-bold text-primary">32</h4>
              <small className="text-muted">
                Applications
              </small>
            </div>

            <div className="col-md-4">
              <h4 className="font-weight-bold text-warning">8</h4>
              <small className="text-muted">
                Interviews
              </small>
            </div>

            <div className="col-md-4">
              <h4 className="font-weight-bold text-success">3</h4>
              <small className="text-muted">
                Offers
              </small>
            </div>
          </div>

          {/* Graph Placeholder */}
          <div
            className="d-flex flex-column justify-content-center align-items-center bg-light rounded"
            style={{ height: "250px" }}
          >
            <i className="fas fa-chart-line fa-4x text-primary mb-3"></i>

            <h5 className="font-weight-bold">
              Monthly Applications Trend
            </h5>

            <p className="text-muted text-center px-4">
              Track how your job applications have grown over
              the months. Integrate Chart.js to visualize
              application trends and career progress.
            </p>
          </div>

          {/* Footer Summary */}
          <div className="mt-4 text-center">
            <small className="text-muted">
              Last updated: Today • Keep applying consistently 
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}