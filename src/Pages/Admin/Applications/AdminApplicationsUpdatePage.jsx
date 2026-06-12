import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import AdminSidebar from '../../../Components/AdminSidebar'
import { getApplications, updateApplications } from "../../../Redux/ActionCreators/ApplicationsActionCreators"

export default function AdminApplicationsUpdatePage() {
  let { id } = useParams()
  let dispatch = useDispatch()
  let navigate = useNavigate()

  let ApplicationsStateData = useSelector(state => state.ApplicationsStateData)
  let [formData, setFormData] = useState({
    candidateName: "",
    email: "",
    jobTitle: "",
    company: "",
    resume: null,
    status: "Pending"
  })

  useEffect(() => {
    dispatch(getApplications())
  }, [dispatch])

  useEffect(() => {
    let app = ApplicationsStateData.find(item => item.id === Number(id))
    if (app) {
      setFormData({
        candidateName: app.candidateName,
        email: app.email,
        jobTitle: app.jobTitle,
        company: app.company,
        resume: app.resume,
        status: app.status
      })
    }
  }, [ApplicationsStateData, id])

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleFileChange(e) {
    setFormData({ ...formData, resume: e.target.files[0] })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    dispatch(updateApplications({ id, ...formData }))
    alert("Application updated successfully!")
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
            <h4 className="card-header bg-gradient bg-warning text-dark text-center p-3">
              <i className="bi bi-pencil-square me-2"></i> Update Application
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
                  {formData.resume && (
                    <p className="mt-2">
                      Current: <a href={`${import.meta.env.VITE_APP_FILE_SERVER}/${formData.resume}`} target="_blank" rel="noreferrer">View Resume</a>
                    </p>
                  )}
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



                <button type="submit" className="btn btn-warning">
                  <i className="bi bi-check-circle me-2"></i> Update Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
