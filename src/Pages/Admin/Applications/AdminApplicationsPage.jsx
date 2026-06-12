import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import $ from 'jquery'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import 'datatables.net'

import AdminSidebar from '../../../Components/AdminSidebar'
import { getApplications, deleteApplications } from "../../../Redux/ActionCreators/ApplicationsActionCreators"

export default function AdminApplicationsPage() {
  let [data, setData] = useState([])
  let ApplicationsStateData = useSelector(state => state.ApplicationsStateData)

  let dispatch = useDispatch()

  async function deleteRecord(id) {
    if (window.confirm("Are you sure you want to delete this application?")) {
      dispatch(deleteApplications({ id }))
      setData(data.filter(x => x.id !== id))
    }
  }

  useEffect(() => {
    let time = (() => {
      dispatch(getApplications())
      if (ApplicationsStateData.length) {
        setData(ApplicationsStateData)
        let time = setTimeout(() => {
          $('#ApplicationsTable').DataTable({
            scrollX: true   // ✅ horizontal scroll bar
          })
        }, 500)
        return time
      }
    })()
    return () => clearTimeout(time)
  }, [ApplicationsStateData.length])

  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-9">
          <div className="card shadow-lg border-0">
            <h4 className="card-header bg-gradient bg-primary text-light text-center p-3">
              <i className="bi bi-file-earmark-text-fill me-2"></i> All Applications
              <Link to="/admin/applications/create">
                <i className='bi bi-plus-circle text-light float-end fs-3'></i>
              </Link>
            </h4>
            <div className="card-body">
              <table id="ApplicationsTable" className='table table-hover table-striped align-middle'>
                <thead className="table-light">
                  <tr>
                    <th>Id</th>
                    <th>Candidate Name</th>
                    <th>Email</th>
                    <th>Job Title</th>
                    <th>Company</th>
                    <th>Resume</th>
                    <th>Status</th>
                    <th>Applied Date</th>
                    <th>Actions</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.candidateName}</td>
                      <td>{item.email}</td>
                      <td>{item.jobTitle}</td>
                      <td>{item.company}</td>
                      <td>
                        {item.resume ? (
                          <a href={`${import.meta.env.VITE_APP_FILE_SERVER}/${item.resume}`} target="_blank" rel="noreferrer">
                            View Resume
                          </a>
                        ) : (
                          <span className="text-muted">No Resume</span>
                        )}
                      </td>
                      <td>
                        <span className={`badge ${item.status === "Approved" ? "bg-success" : item.status === "Rejected" ? "bg-danger" : "bg-warning"}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>{item.appliedDate ? new Date(item.appliedDate).toLocaleDateString() : "N/A"}</td>
                      <td>
                        <Link to={`/admin/applications/update/${item.id}`} className='btn btn-sm btn-outline-primary me-2'>
                          <i className='bi bi-pencil-square'></i>
                        </Link>
                        <button className='btn btn-sm btn-outline-danger' onClick={() => deleteRecord(item.id)}>
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
  )
}
