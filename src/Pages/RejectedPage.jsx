import React from "react";

export default function RejectedPage() {
  const rejectedJobs = [
    {
      company: "Netflix",
      position: "Frontend Developer",
      reason: "More experienced candidates selected",
    },
    {
      company: "Adobe",
      position: "React Developer",
      reason: "Technical round not cleared",
    },
    {
      company: "IBM",
      position: "Software Engineer",
      reason: "Position closed",
    },
  ];

  return (
    <div className="container-fluid">
      
      <h1 className="h3 mb-4 text-gray-800">
        Rejected Applications
      </h1>

      <div className="row">
        {rejectedJobs.map((job, index) => (
          <div className="col-md-4 mb-4" key={index}>
            
            <div className="card shadow border-left-danger h-100">
              <div className="card-body">

                <h5 className="font-weight-bold mb-2">
                  {job.company}
                </h5>

                <p className="text-muted mb-2">
                  {job.position}
                </p>

                <p className="small text-danger mb-3">
                  {job.reason}
                </p>

                <span className="badge badge-danger">
                  Rejected
                </span>

              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Motivation Section */}
      <div className="card shadow mt-4">
        <div className="card-body text-center">
          <i className="fas fa-lightbulb fa-2x text-warning mb-3"></i>

          <h5 className="font-weight-bold">
            Learn & Improve
          </h5>

          <p className="text-muted mb-0">
            Every rejection is a step toward success. Analyze feedback,
            improve your skills, and keep applying.
          </p>
        </div>
      </div>

    </div>
  );
}