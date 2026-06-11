import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <div className="list-group">
      <Link to="/admin" className="list-group-item list-group-item-action text-light bg-primary" aria-current="true">
        <i className='bi bi-speedometer2 fs-5'></i>
        <span className='float-end mt-2'>Dashboard</span>
      </Link>


      <Link to="/admin/users" className="list-group-item list-group-item-action text-light bg-primary">
        <i className='bi bi-people fs-5'></i>
        <span className='float-end mt-2'>Manage Users</span>
      </Link>

      <Link to="/admin/jobs" className="list-group-item list-group-item-action text-light bg-primary">
        <i className='bi bi-briefcase fs-5'></i>
        <span className='float-end mt-2'>All Jobs</span>
      </Link>

      <Link to="/admin/reports" className="list-group-item list-group-item-action text-light bg-primary">
        <i className='bi bi-graph-up fs-5'></i>
        <span className='float-end mt-2'>Reports</span>
      </Link>

      <Link to="/admin/applications" className="list-group-item list-group-item-action text-light bg-primary">
        <i className='bi bi-file-earmark-text fs-5'></i>
        <span className='float-end mt-2'>Applications</span>
      </Link>

      <Link to="/admin/companies" className="list-group-item list-group-item-action text-light bg-primary">
        <i className='bi bi-building fs-5'></i>
        <span className='float-end mt-2'>Companies</span>
      </Link>

      <Link to="/admin/settings" className="list-group-item list-group-item-action text-light bg-primary">
        <i className='bi bi-gear fs-5'></i>
        <span className='float-end mt-2'>Settings</span>
      </Link>

      <Link to="/admin/notifications" className="list-group-item list-group-item-action text-light bg-primary">
        <i className='bi bi-bell fs-5'></i>
        <span className='float-end mt-2'>Notifications</span>
      </Link>

      <Link to="/admin/auditlogs" className="list-group-item list-group-item-action text-light bg-primary">
        <i className='bi bi-journal-text fs-5'></i>
        <span className='float-end mt-2'>Audit Logs</span>
      </Link>
    </div>
  )
}
