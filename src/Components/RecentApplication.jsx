import React from "react";

export default function RecentApplication() {
  const applications = [
    {
      company: "Google",
      position: "Frontend Developer",
      status: "Applied",
      date: "06 Jun 2026",
      color: "warning",
      icon: "fas fa-paper-plane",
    },
    {
      company: "Amazon",
      position: "MERN Developer",
      status: "Interview",
      date: "04 Jun 2026",
      color: "info",
      icon: "fas fa-user-tie",
    },
    {
      company: "Microsoft",
      position: "Software Engineer",
      status: "Offer",
      date: "01 Jun 2026",
      color: "success",
      icon: "fas fa-check-circle",
    },
  ];

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3 d-flex justify-content-between align-items-center">
        <h6 className="m-0 font-weight-bold text-primary">
          Recent Applications
        </h6>

        <a href="#" className="small text-primary">
          View All
        </a>
      </div>

      <div className="card-body">
        {applications.map((app, index) => (
          <div
            key={index}
            className="d-flex align-items-center justify-content-between border rounded p-3 mb-3"
          >
            {/* Left */}
            <div className="d-flex align-items-center">
              <div
                className={`bg-${app.color} text-white rounded-circle d-flex justify-content-center align-items-center`}
                style={{
                  width: "50px",
                  height: "50px",
                  fontSize: "18px",
                }}
              >
                <i className={app.icon}></i>
              </div>

              <div className="ml-3">
                <h6 className="mb-1 font-weight-bold">
                  {app.company}
                </h6>

                <small className="text-muted">
                  {app.position}
                </small>
              </div>
            </div>

            {/* Right */}
            <div className="text-right">
              <span className={`badge badge-${app.color} px-3 py-2`}>
                {app.status}
              </span>

              <div className="small text-muted mt-2">
                {app.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}