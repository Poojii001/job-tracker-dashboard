import React from "react";

export default function RecentApplication() {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          Recent Applications
        </h6>
      </div>

      <div className="card-body">
        <div className="table-responsive">

          <table className="table table-bordered">

            <thead>
              <tr>
                <th>Company</th>
                <th>Position</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Google</td>
                <td>Frontend Developer</td>
                <td>
                  <span className="badge badge-warning">
                    Applied
                  </span>
                </td>
                <td>06 Jun 2026</td>
              </tr>

              <tr>
                <td>Amazon</td>
                <td>MERN Developer</td>
                <td>
                  <span className="badge badge-info">
                    Interview
                  </span>
                </td>
                <td>04 Jun 2026</td>
              </tr>

              <tr>
                <td>Microsoft</td>
                <td>Software Engineer</td>
                <td>
                  <span className="badge badge-success">
                    Offer
                  </span>
                </td>
                <td>01 Jun 2026</td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}