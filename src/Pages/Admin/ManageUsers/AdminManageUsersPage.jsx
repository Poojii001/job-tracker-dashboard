// AdminHomePage.jsx
import React from 'react'
import AdminSidebar from '../../../Components/AdminSidebar'

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
              <div className="card-header bg-primary text-light text-center">
                Admin Profile
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
