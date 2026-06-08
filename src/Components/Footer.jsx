import React from "react";

export default function Footer() {
  return (
    <footer className="sticky-footer bg-white shadow-sm border-top">
      <div className="container py-3">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">

          {/* Left */}
          <div className="text-center text-md-left mb-3 mb-md-0">
            <h5 className="mb-1 font-weight-bold text-primary">
              <i className="fas fa-briefcase mr-2"></i>
              Job Tracker
            </h5>

            <small className="text-muted">
              Track applications • Prepare interviews • Land your dream job
            </small>
          </div>

          {/* Center */}
          <div className="mb-3 mb-md-0">
            <a href="#" className="text-secondary mx-2">
              <i className="fab fa-github fa-lg"></i>
            </a>

            <a href="#" className="text-secondary mx-2">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>

            <a href="#" className="text-secondary mx-2">
              <i className="fas fa-envelope fa-lg"></i>
            </a>
          </div>

          {/* Right */}
          <div className="text-center text-md-right">
            <small className="d-block text-muted">
              © {new Date().getFullYear()} Job Tracker
            </small>

            <small className="text-muted">
              Crafted with ❤️ by{" "}
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