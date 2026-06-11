import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../../Components/AdminSidebar'
import { Link } from 'react-router-dom'

import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net';


export default function AdminManageUsersPage() {
  let [ManageUsersStateData, setManageUsersStateData] = useState([])

  useEffect(() => {
    let time = (async () => {
      try {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/users`, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        })
        if (response.ok) {
          let users = await response.json()   // ✅ parse JSON
          setManageUsersStateData(users)      // ✅ set array of users
          let time = setTimeout(() => {
            $('#DataTable').DataTable()
          }, 500)
          return time
        } else {
          console.error("Failed to fetch users")
        }
      } catch (err) {
        console.error("Error fetching users:", err)
      }
    })()
    return () => clearTimeout(time)
  }, [])

  function deleteRecord(id) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setManageUsersStateData(ManageUsersStateData.filter(u => u.id !== id))
      // optionally call backend DELETE API here
    }
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
              <h4 className="card-header bg-primary text-light text-center p-2">
                Manage Users
                <Link to="/admin/users/create">
                  <i className='bi bi-plus text-light float-end fs-3'></i>
                </Link>
              </h4>
              <table id="DataTable" className='table table-bordered table-striped'>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {ManageUsersStateData.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.status ? "Active" : "Inactive"}</td>
                      <td>
                        <Link to={`/admin/users/update/${item.id}`} className='btn btn-light bg-primary'>
                          <i className='bi bi-pencil-square fs-5'></i>
                        </Link>
                      </td>
                      <td>
                        <button className='btn btn-danger' onClick={() => deleteRecord(item.id)}>
                          <i className='bi bi-x-lg'></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
