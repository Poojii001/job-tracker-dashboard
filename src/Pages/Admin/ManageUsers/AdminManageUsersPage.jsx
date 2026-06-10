// AdminHomePage.jsx
import React from 'react'
import AdminSidebar from '../../../Components/AdminSidebar'
import { Link } from 'react-router-dom'

export default function AdminManageUsersPage() {

  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <div className="card shadow">
              <h4 className="card-header bg-primary text-light text-center p-2">
                Manage Users
                <Link to="/admin/users/create"><i className='bi bi-plus text-light float-end fs-3'></i></Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
