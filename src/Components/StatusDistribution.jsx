import React from "react";

export default function StatusDistribution() {
  return (
    <div className="col-xl-4 col-lg-5">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Application Status
          </h6>
        </div>

        <div className="card-body text-center py-5">

          <i className="fas fa-chart-pie fa-4x text-gray-300 mb-4"></i>

          <p>Applied : 12</p>
          <p>Interview : 5</p>
          <p>Offer : 2</p>
          <p>Rejected : 3</p>
        </div>
      </div>
    </div>
  );
}