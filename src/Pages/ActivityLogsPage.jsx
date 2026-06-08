import React from "react";

export default function ActivityLogsPage() {
  const activities = [
    {
      id: 1,
      title: "Applied for Frontend Developer",
      company: "Google",
      date: "08 June 2026",
      icon: "fas fa-paper-plane",
      color: "primary",
    },
    {
      id: 2,
      title: "Interview Scheduled",
      company: "Amazon",
      date: "06 June 2026",
      icon: "fas fa-calendar-check",
      color: "success",
    },
    {
      id: 3,
      title: "Offer Received",
      company: "Microsoft",
      date: "03 June 2026",
      icon: "fas fa-award",
      color: "info",
    },
    {
      id: 4,
      title: "Application Rejected",
      company: "Infosys",
      date: "01 June 2026",
      icon: "fas fa-times-circle",
      color: "danger",
    },
  ];

  return (
    <div className="container-fluid">

      {/* Heading */}
      <div className="mb-4">
        <h1 className="h3 text-gray-800">
          Activity Timeline
        </h1>

        <p className="text-muted">
          Track every step of your job search journey.
        </p>
      </div>

      <div className="card shadow">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Recent Activities
          </h6>
        </div>

        <div className="card-body">

          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`d-flex ${
                index !== activities.length - 1
                  ? "border-bottom"
                  : ""
              } py-4`}
            >
              {/* Icon */}
              <div className="mr-4">
                <div
                  className={`bg-${activity.color} text-white rounded-circle d-flex align-items-center justify-content-center`}
                  style={{
                    width: "55px",
                    height: "55px",
                  }}
                >
                  <i className={activity.icon}></i>
                </div>
              </div>

              {/* Details */}
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between flex-wrap">

                  <div>
                    <h5 className="mb-1">
                      {activity.title}
                    </h5>

                    <p className="text-muted mb-1">
                      {activity.company}
                    </p>
                  </div>

                  <small className="text-muted">
                    {activity.date}
                  </small>

                </div>
              </div>
            </div>
          ))}

          {activities.length === 0 && (
            <div className="text-center py-5">
              <i className="fas fa-history fa-4x text-gray-300 mb-3"></i>

              <h5>No Activities Yet</h5>

              <p className="text-muted mb-0">
                Start applying to jobs and your activity history will appear here.
              </p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}