import React from "react";

export default function Footer() {
  return (
    <footer className="sticky-footer bg-white shadow-sm mt-auto">
      <div className="container py-3">
        <div className="row align-items-center">

          {/* Left */}
          <div className="col-md-6 text-center text-md-left mb-2 mb-md-0">
            <h6 className="mb-1 font-weight-bold text-primary">
              <i className="fas fa-briefcase mr-2"></i>
              Job Tracker
            </h6>

            <small className="text-muted">
              Track your applications. Achieve your dream career.
            </small>
          </div>

          {/* Right */}
          <div className="col-md-6 text-center text-md-right">
            <small className="text-muted d-block">
              © {new Date().getFullYear()} All Rights Reserved
            </small>

            <small className="text-muted">
              Built with ❤️ by{" "}
              <span className="font-weight-bold text-primary">
                Pooja Pal
              </span>
            </small>
          </div>

        </div>
      </div>
    </footer>
  );
}