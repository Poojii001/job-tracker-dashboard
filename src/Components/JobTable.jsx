import React from "react";

export default function JobTable() {
  const jobs = [
    {
      company: "Google",
      role: "Frontend Developer",
      status: "Interview",
      date: "15 Jun 2026",
    },
    {
      company: "Microsoft",
      role: "React Developer",
      status: "Applied",
      date: "14 Jun 2026",
    },
    {
      company: "Amazon",
      role: "MERN Stack Developer",
      status: "Offer",
      date: "12 Jun 2026",
    },
    {
      company: "Infosys",
      role: "Software Engineer",
      status: "Rejected",
      date: "10 Jun 2026",
    },
    {
      company: "TCS",
      role: "Full Stack Developer",
      status: "Applied",
      date: "08 Jun 2026",
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Applied":
        return "badge badge-primary";
      case "Interview":
        return "badge badge-warning";
      case "Offer":
        return "badge badge-success";
      case "Rejected":
        return "badge badge-danger";
      default:
        return "badge badge-secondary";
    }
  };

  return (
    <div className="container-fluid">
      {/* Heading */}
      <h1 className="h3 mb-4 text-gray-800">
        Recent Applications
      </h1>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Job Applications Table
          </h6>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Applied Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {jobs.map((job, index) => (
                  <tr key={index}>
                    <td>{job.company}</td>
                    <td>{job.role}</td>

                    <td>
                      <span className={getBadge(job.status)}>
                        {job.status}
                      </span>
                    </td>

                    <td>{job.date}</td>

                    <td>
                      <button className="btn btn-sm btn-info mr-2">
                        View
                      </button>

                      <button className="btn btn-sm btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 text-muted">
            Showing {jobs.length} recent applications
          </div>
        </div>
      </div>
    </div>
  );
}
