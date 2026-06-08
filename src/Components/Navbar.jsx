import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div id="wrapper">
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


          <div className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
            <div className="sidebar-brand-icon rotate-n-15">
              {/* <i className="fas fa-user-tie"></i> */}
              <i className="fas fa-chart-line"></i>
              
            </div>
            <Link to="/" className="sidebar-brand-text mx-3 text-light">{import.meta.env.VITE_APP_SITE_NAME}</Link>
          </div>

          <hr className="sidebar-divider my-0" />


          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span></Link>
          </li>


          <hr className="sidebar-divider" />


          <div className="sidebar-heading">
            Interface
          </div>


          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
              aria-expanded="true" aria-controls="collapseTwo">
              <i className="fas fa-fw fa-cog"></i>
              <span>DashboardCard</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Applied Jobs:</h6>
                <Link className="collapse-item" to="/interviews">Interviews</Link>
                <Link className="collapse-item" to="/offers">Offers</Link>
                <Link className="collapse-item" to="/reject">Rejected</Link>
              </div>
            </div>
          </li>


          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
              aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fas fa-fw fa-wrench"></i>
              <span>Insights</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Insights:</h6>
                <Link className="collapse-item" to="/analytics">Analytics</Link>
                <Link className="collapse-item" to="/reports">Reports</Link>
                <Link className="collapse-item" to="/activity">Activity Logs</Link>
                <Link className="collapse-item" to="/statics">Statistics</Link>
                <Link className="collapse-item" to="/">Other</Link>
              </div>
            </div>
          </li>


          <hr className="sidebar-divider" />


          {/* <div className="sidebar-heading">
            Addons
          </div> */}


          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
              aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder"></i>
              <span>User</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Login Screens:</h6>
                <Link className="collapse-item" to="/">Login</Link>
                <Link className="collapse-item" to="/">Register</Link>
                <Link className="collapse-item" to="/">Forgot Password</Link>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Other Pages:</h6>
                <Link className="collapse-item" to="/*">404 Page</Link>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/analytics">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Job Trends</span></Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/recentapp">
              <i className="fas fa-fw fa-table"></i>
              <span>Recent Jobs</span></Link>
          </li>

          <hr className="sidebar-divider d-none d-md-block" />


          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>


          <div className="sidebar-card d-none d-lg-flex">
            <img
              className="sidebar-card-illustration mb-2"
              src="/img/Navbar/nav2.png"
              alt="Job Tracker"
            />

            <p className="text-center mb-2">
              <strong>Track Your Career Journey</strong><br />
              Stay organized and never miss an opportunity.
            </p>

            <Link to="/applied-jobs" className="btn btn-success btn-sm">
              View Applications
            </Link>
          </div>

        </ul>
      </div>
    </>
  )
}
