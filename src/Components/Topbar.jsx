import React from "react";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

      {/* Sidebar Toggle (Mobile) */}
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* Search */}
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Search jobs..."
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>

      <ul className="navbar-nav ml-auto">

        {/* Notifications */}
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
          >
            <i className="fas fa-bell fa-fw"></i>
            <span className="badge badge-danger badge-counter">3</span>
          </a>

          <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in">
            <h6 className="dropdown-header">
              Notifications
            </h6>

            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                <div className="icon-circle bg-primary">
                  <i className="fas fa-calendar text-white"></i>
                </div>
              </div>

              <div>
                <div className="small text-gray-500">Today</div>
                Google interview scheduled tomorrow.
              </div>
            </a>

            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                <div className="icon-circle bg-success">
                  <i className="fas fa-briefcase text-white"></i>
                </div>
              </div>

              <div>
                <div className="small text-gray-500">Today</div>
                Amazon updated your application status.
              </div>
            </a>

            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                <div className="icon-circle bg-warning">
                  <i className="fas fa-award text-white"></i>
                </div>
              </div>

              <div>
                <div className="small text-gray-500">Today</div>
                Microsoft offer received.
              </div>
            </a>
          </div>
        </li>

        {/* Divider */}
        <li className="nav-item">
          <div className="topbar-divider d-none d-sm-block"></div>
        </li>

        {/* User */}
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Pooja Pal
            </span>

            <img
              className="img-profile rounded-circle"
              src="/img/undraw_profile.svg"
              alt="Profile"
            />
          </a>

          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in">

            <Link className="dropdown-item" to="/profile">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </Link>

            <Link className="dropdown-item" to="/settings">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Settings
            </Link>

            <div className="dropdown-divider"></div>

            <Link className="dropdown-item" to="/login">
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </Link>

          </div>
        </li>

      </ul>
    </nav>
  );
}