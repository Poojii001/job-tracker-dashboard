import React from "react";

export default function StatusDistribution() {
  const statusData = [
    {
      title: "Applied",
      count: 12,
      color: "primary",
      icon: "fas fa-paper-plane",
    },
    {
      title: "Interview",
      count: 5,
      color: "warning",
      icon: "fas fa-user-tie",
    },
    {
      title: "Offer",
      count: 2,
      color: "success",
      icon: "fas fa-handshake",
    },
    {
      title: "Rejected",
      count: 3,
      color: "danger",
      icon: "fas fa-times-circle",
    },
  ];

  const total = statusData.reduce(
    (sum, item) => sum + item.count,
    0
  );

  return (
    <div className="col-xl-4 col-lg-5">
      <div className="card shadow mb-4">
        
        {/* Header */}
        <div className="card-header py-3 d-flex justify-content-between align-items-center">
          <h6 className="m-0 font-weight-bold text-primary">
            Status Distribution
          </h6>

          <span className="badge badge-light">
            Total: {total}
          </span>
        </div>

        <div className="card-body">

          {/* Pie Chart Placeholder */}
          <div className="text-center mb-4">
            <div
              className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto"
              style={{
                width: "140px",
                height: "140px",
              }}
            >
              <i className="fas fa-chart-pie fa-4x text-primary"></i>
            </div>

            <p className="text-muted mt-3 mb-0">
              Status Overview
            </p>
          </div>

          {/* Status List */}
          {statusData.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center border rounded p-3 mb-3"
            >
              <div className="d-flex align-items-center">
                <div
                  className={`bg-${item.color} text-white rounded-circle d-flex align-items-center justify-content-center`}
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <i className={item.icon}></i>
                </div>

                <div className="ml-3">
                  <h6 className="mb-0 font-weight-bold">
                    {item.title}
                  </h6>

                  <small className="text-muted">
                    {Math.round(
                      (item.count / total) * 100
                    )}
                    % of total
                  </small>
                </div>
              </div>

              <span
                className={`badge badge-${item.color} px-3 py-2`}
              >
                {item.count}
              </span>
            </div>
          ))}

          {/* Footer */}
          <div className="text-center mt-4">
            <small className="text-muted">
              Keep improving your success rate
            </small>
          </div>

        </div>
      </div>
    </div>
  );
}