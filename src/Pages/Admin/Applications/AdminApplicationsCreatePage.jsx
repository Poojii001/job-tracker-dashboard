import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from '../../../Components/AdminSidebar'
import { createApplications } from "../../../Redux/ActionCreators/ApplicationsActionCreators"

export default function AdminApplicationsCreatePage() {
  let [formData, setFormData] = useState({
    candidateName: "",
    email: "",
    jobTitle: "",
    company: "",
    resume: null,
    status: "Pending"
  })

  let dispatch = useDispatch()
  let navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleFileChange(e) {
    setFormData({ ...formData, resume: e.target.files[0] })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    // ✅ Dispatch create action
    dispatch(createApplications(formData))
    alert("Application created successfully!")
    navigate("/admin/applications")
  }

  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-9">
          <div className="card shadow-lg border-0">
            <h4 className="card-header bg-gradient bg-primary text-light text-center p-3">
              <i className="bi bi-file-earmark-plus-fill me-2"></i> Create Application
            </h4>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Candidate Name</label>
                  <input type="text" name="candidateName" value={formData.candidateName} onChange={handleChange} className="form-control" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Job Title</label>
                  <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="form-control" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="form-control" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Resume (PDF/DOC)</label>
                  <input type="file" name="resume" onChange={handleFileChange} className="form-control" accept=".pdf,.doc,.docx" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select name="status" value={formData.status} onChange={handleChange} className="form-select">
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Applied Date</label>
                  <input
                    type="date"
                    name="appliedDate"
                    value={formData.appliedDate ? new Date(formData.appliedDate).toISOString().split("T")[0] : ""}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>


                <button type="submit" className="btn btn-success">
                  <i className="bi bi-check-circle me-2"></i> Save Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
