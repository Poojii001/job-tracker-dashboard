import React from "react";

export default function InterviewsPage() {
  return (
    <div className="container-fluid">

      <div className="card shadow">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Upcoming Interviews
          </h6>
        </div>

        <div className="card-body">

          {[
            {
              company: "Google",
              position: "Frontend Developer",
              date: "12 June 2026",
              time: "10:00 AM",
              mode: "Online",
              status: "Upcoming",
            },
            {
              company: "Amazon",
              position: "MERN Developer",
              date: "15 June 2026",
              time: "02:00 PM",
              mode: "Offline",
              status: "Scheduled",
            },
            {
              company: "Microsoft",
              position: "Software Engineer",
              date: "18 June 2026",
              time: "11:30 AM",
              mode: "Online",
              status: "Final Round",
            },
          ].map((interview, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center border-bottom py-3"
            >
              <div>
                <h6 className="mb-1">{interview.company}</h6>

                <small className="text-muted d-block">
                  {interview.position}
                </small>

                <small className="text-muted">
                  {interview.date} • {interview.time} • {interview.mode}
                </small>
              </div>

              <span className="badge badge-primary">
                {interview.status}
              </span>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}