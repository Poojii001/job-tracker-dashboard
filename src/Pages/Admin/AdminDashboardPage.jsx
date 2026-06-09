// AdminHomePage.jsx
import React from 'react'
import AdminSidebar from '../../Components/AdminSidebar'

function ProfileTable({ profile }) {
  return (
    <table className="table table-bordered table-striped">
      <tbody>
        <tr><th>Name</th><td>{profile.name}</td></tr>
        <tr><th>User Name</th><td>{profile.username}</td></tr>
        <tr><th>Email</th><td>{profile.email}</td></tr>
        <tr><th>Phone</th><td>{profile.phone}</td></tr>
        <tr><th>Role</th><td>{profile.role}</td></tr>
      </tbody>
    </table>
  )
}

export default function AdminHomePage() {
  const admin = {
    name: "Pooja Pal",
    username: "pooja",
    email: "poojapal5781@gmail.com",
    phone: "9506580566",
    role: "Admin"
  }

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
              <div className="card-body">
                <ProfileTable profile={admin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
