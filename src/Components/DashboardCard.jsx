import React from "react";

export default function DashboardCard() {
  return (
    <div className="row">

      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Total Applications
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  12
                </div>
              </div>

              <div className="col-auto">
                <i className="fas fa-briefcase fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Interviews
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  5
                </div>
              </div>

              <div className="col-auto">
                <i className="fas fa-calendar-check fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                  Offers
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  2
                </div>
              </div>

              <div className="col-auto">
                <i className="fas fa-award fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                  Rejected
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  3
                </div>
              </div>

              <div className="col-auto">
                <i className="fas fa-times-circle fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}