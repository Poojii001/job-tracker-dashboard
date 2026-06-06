import React from "react";

export default function JobProgress() {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          Job Search Progress
        </h6>
      </div>

      <div className="card-body">

        <h4 className="small font-weight-bold">
          Resume Updated
          <span className="float-right">100%</span>
        </h4>

        <div className="progress mb-4">
          <div
            className="progress-bar bg-success"
            style={{ width: "100%" }}
          ></div>
        </div>

        <h4 className="small font-weight-bold">
          Applications Submitted
          <span className="float-right">70%</span>
        </h4>

        <div className="progress mb-4">
          <div
            className="progress-bar bg-primary"
            style={{ width: "70%" }}
          ></div>
        </div>

        <h4 className="small font-weight-bold">
          Interview Preparation
          <span className="float-right">50%</span>
        </h4>

        <div className="progress mb-4">
          <div
            className="progress-bar bg-warning"
            style={{ width: "50%" }}
          ></div>
        </div>

        <h4 className="small font-weight-bold">
          Skill Improvement
          <span className="float-right">80%</span>
        </h4>

        <div className="progress">
          <div
            className="progress-bar bg-info"
            style={{ width: "80%" }}
          ></div>
        </div>

      </div>
    </div>
  );
}