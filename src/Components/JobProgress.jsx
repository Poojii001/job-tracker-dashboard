import React from "react";

export default function JobProgress() {
  const progressData = [
    {
      title: "Resume Updated",
      percentage: 100,
      color: "success",
      icon: "fas fa-file-alt",
      subtitle: "Your resume is ready",
    },
    {
      title: "Applications Submitted",
      percentage: 70,
      color: "primary",
      icon: "fas fa-paper-plane",
      subtitle: "Keep applying consistently",
    },
    {
      title: "Interview Preparation",
      percentage: 50,
      color: "warning",
      icon: "fas fa-user-tie",
      subtitle: "Practice technical questions",
    },
    {
      title: "Skill Improvement",
      percentage: 80,
      color: "info",
      icon: "fas fa-laptop-code",
      subtitle: "Learning new technologies",
    },
  ];

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          Career Progress
        </h6>
      </div>

      <div className="card-body">
        {progressData.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              
              <div className="d-flex align-items-center">
                <div
                  className={`bg-${item.color} text-white rounded-circle d-flex align-items-center justify-content-center`}
                  style={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                  }}
                >
                  <i className={item.icon}></i>
                </div>

                <div className="ml-3">
                  <h6 className="mb-0 font-weight-bold">
                    {item.title}
                  </h6>

                  <small className="text-muted">
                    {item.subtitle}
                  </small>
                </div>
              </div>

              <span className={`text-${item.color} font-weight-bold`}>
                {item.percentage}%
              </span>
            </div>

            <div
              className="progress"
              style={{ height: "10px", borderRadius: "20px" }}
            >
              <div
                className={`progress-bar bg-${item.color}`}
                role="progressbar"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}