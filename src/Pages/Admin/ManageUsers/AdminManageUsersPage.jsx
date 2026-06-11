import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import $ from 'jquery'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import 'datatables.net'

import AdminSidebar from '../../../Components/AdminSidebar'
import { getUsers, deleteUsers } from "../../../Redux/ActionCreators/UsersActionCreators"

export default function AdminManageUsersPage() {
  let [data, setData] = useState([])
  let UsersStateData = useSelector(state => state.UsersStateData)   // ✅ Redux state

  let dispatch = useDispatch()

  async function deleteRecord(id) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUsers({ id: id }))   // ✅ Redux delete action
      setData(data.filter(x => x.id !== id))
    }
  }

  useEffect(() => {
    let time = (() => {
      dispatch(getUsers())   // ✅ Redux get action
      if (UsersStateData.length) {
        setData(UsersStateData)
        let time = setTimeout(() => {
          $('#DataTable').DataTable()
        }, 500)
        return time
      }
    })()
    return () => clearTimeout(time)
  }, [UsersStateData.length])   // ✅ re-run when Redux state changes

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
                  {data.map(item => (
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
