import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AdminSidebar from '../../../Components/AdminSidebar'

export default function AdminManageUsersCreatePage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "User",
    status: true
  })

  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let response = await fetch(`${import.meta.env.VITE_APP_API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      })
      if (response.ok) {
        alert("User created successfully!")
        navigate("/admin/users") // redirect back to Manage Users page
      } else {
        alert("Failed to create user")
      }
    } catch (error) {
      console.error("Error creating user:", error)
      alert("Something went wrong")
    }
  }

  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <AdminSidebar />
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <div className="card shadow">
              <h4 className="card-header bg-primary text-light text-center p-2">
                Create User
                <Link to="/admin/users">
                  <i className='bi bi-arrow-left text-light float-end fs-3'></i>
                </Link>
              </h4>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={user.name} 
                      onChange={handleChange} 
                      className="form-control" 
                      required 
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={user.email} 
                      onChange={handleChange} 
                      className="form-control" 
                      required 
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select 
                      name="role" 
                      value={user.role} 
                      onChange={handleChange} 
                      className="form-select"
                    >
                      <option value="User">User</option>
                      <option value="Employer">Employer</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select 
                      name="status" 
                      value={user.status} 
                      onChange={e => setUser({ ...user, status: e.target.value === "true" })}
                      className="form-select"
                    >
                      <option value="true">Active</option>
                      <option value="false">Inactive</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Create User
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
