import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import $ from 'jquery'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import 'datatables.net'

import AdminSidebar from '../../../Components/AdminSidebar'
import { getJobs, deleteJobs } from "../../../Redux/ActionCreators/JobsActionCreators"

export default function AdminJobsPage() {
  let [data, setData] = useState([])
  let JobsStateData = useSelector(state => state.JobsStateData)

  let dispatch = useDispatch()

  async function deleteRecord(id) {
    if (window.confirm("Are you sure you want to delete this job?")) {
      dispatch(deleteJobs({ id: id }))
      setData(data.filter(x => x.id !== id))
    }
  }

  useEffect(() => {
    let time = (() => {
      dispatch(getJobs())
      if (JobsStateData.length) {
        setData(JobsStateData)
        let time = setTimeout(() => {
          $('#DataTable').DataTable()
        }, 500)
        return time
      }
    })()
    return () => clearTimeout(time)
  }, [JobsStateData.length])

  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-9">
          <div className="card shadow-lg border-0">
            <h4 className="card-header bg-gradient bg-primary text-light text-center p-3">
              <i className="bi bi-briefcase-fill me-2"></i> All Jobs
              <Link to="/admin/jobs/create">
                <i className='bi bi-plus-circle text-light float-end fs-3'></i>
              </Link>
            </h4>
            <div className="card-body">
              <div className="table-responsive">
                <table id="DataTable" className='table table-bordered table-hover table-striped align-middle'>
                  <thead className="table-light">
                    <tr>
                      <th>Id</th>
                      <th>Job Title</th>
                      <th>Company</th>
                      <th>Logo</th>
                      <th>Location</th>
                      <th>Email</th>
                      <th>Salary</th>
                      <th>Posted Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(item => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.company}</td>
                        <td>
                          {item.logo ? (
                            <img
                              src={`${import.meta.env.VITE_APP_IMAGE_SERVER}/${item.logo}`}
                              alt="Company Logo"
                              width="60"
                              height="60"
                              className="rounded shadow-sm"
                            />
                          ) : (
                            <span className="text-muted">No Logo</span>
                          )}
                        </td>
                        <td>{item.location}</td>
                        <td>{item.email}</td>
                        <td>{item.salary ? `${item.salary} INR` : "N/A"}</td>
                        <td>{item.postedDate ? new Date(item.postedDate).toLocaleDateString() : "N/A"}</td>
                        <td>
                          <span className={`badge ${item.status ? "bg-success" : "bg-secondary"}`}>
                            {item.status ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td>
                          <Link to={`/admin/jobs/update/${item.id}`} className='btn btn-sm text-light bg-primary me-2'>
                            <i className='bi bi-pencil-square'></i>
                          </Link>
                        </td>
                        <td>
                          <button className='btn btn-sm btn-outline-danger' bg-danger onClick={() => deleteRecord(item.id)}>
                            <i className='bi bi-trash'></i>
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
      </div>
    </div>
  )
}
