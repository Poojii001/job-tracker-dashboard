import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import AdminSidebar from '../../../Components/AdminSidebar'
import FormValidator from '../../../Validators/FormValidator'
import ImageValidator from '../../../Validators/ImageValidator'

import { getJobs, createJobs } from "../../../Redux/ActionCreators/JobsActionCreators"

export default function AdminReportsCreatePage() {
  let [data, setData] = useState({
    title: "",
    company: "",
    logo: "",
    location: "",
    email: "",
    salary: "",
    postedDate: "",
    status: true

  })

  let [errorMessage, setErrorMessage] = useState({
    title: "Job title is mandatory",
    company: "Company name is mandatory",
    logo: "Logo is mandatory",
    location: "Location is mandatory",
    email: "Email is mandatory",
    salary: "Salary is mandatory"
  })

  let [show, setShow] = useState(false)

  let JobsStateData = useSelector(state => state.JobsStateData)
  let dispatch = useDispatch()
  let navigate = useNavigate()

  function getInputData(e) {
    let { name, value, files } = e.target
    let finalValue = name === "logo" ? "jobs/" + (files[0]?.name) : value

    setErrorMessage({
      ...errorMessage,
      [name]: name === "logo" ? ImageValidator(e) : FormValidator(e)
    })

    setData({
      ...data,
      [name]: name === "status" ? (value === "1" ? true : false) : finalValue
    })
  }

  function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== "")
    if (error) {
      setShow(true)
    } else {
      let item = JobsStateData.find(
        x => x.title.toLocaleLowerCase() === data.title.toLocaleLowerCase()
      )
      if (item) {
        setShow(true)
        setErrorMessage({ ...errorMessage, title: "Job With This Title Already Exist" })
      } else {
        // ✅ Redux create action
        dispatch(createJobs({ ...data }))
        navigate("/admin/jobs")
      }
    }
  }

  useEffect(() => {
    dispatch(getJobs())
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
              <i className="bi bi-briefcase-fill me-2"></i> Create Job
              <Link to="/admin/jobs">
                <i className="bi bi-arrow-left text-light float-end"></i>
              </Link>
            </h4>
            <div className="card-body">
              <form onSubmit={postData}>
                <div className="row g-3">
                  {/* Job Title */}
                  <div className="col-md-6">
                    <label className="form-label">Job Title*</label>
                    <input type="text" name="title" onChange={getInputData} placeholder="Frontend Developer"
                      className={`form-control ${show && errorMessage.title ? 'border-danger' : 'border-dark'}`} />
                    {show && errorMessage.title ? <small className="text-danger">{errorMessage.title}</small> : null}
                  </div>

                  {/* Company */}
                  <div className="col-md-6">
                    <label className="form-label">Company*</label>
                    <input type="text" name="company" onChange={getInputData} placeholder="Company Name"
                      className={`form-control ${show && errorMessage.company ? 'border-danger' : 'border-dark'}`} />
                    {show && errorMessage.company ? <small className="text-danger">{errorMessage.company}</small> : null}
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label className="form-label">Email*</label>
                    <input type="email" name="email" onChange={getInputData} placeholder="HR Email"
                      className={`form-control ${show && errorMessage.email ? 'border-danger' : 'border-dark'}`} />
                    {show && errorMessage.email ? <small className="text-danger">{errorMessage.email}</small> : null}
                  </div>

                  {/* Location */}
                  <div className="col-md-6">
                    <label className="form-label">Location*</label>
                    <input type="text" name="location" onChange={getInputData} placeholder="Job Location"
                      className={`form-control ${show && errorMessage.location ? 'border-danger' : 'border-dark'}`} />
                    {show && errorMessage.location ? <small className="text-danger">{errorMessage.location}</small> : null}
                  </div>

                  {/* Salary */}
                  <div className="col-md-6">
                    <label className="form-label">Salary*</label>
                    <input type="text" name="salary" onChange={getInputData} placeholder="e.g. 50,000 INR/month"
                      className={`form-control ${show && errorMessage.salary ? 'border-danger' : 'border-dark'}`} />
                    {show && errorMessage.salary ? <small className="text-danger">{errorMessage.salary}</small> : null}
                  </div>

                  {/* Logo */}
                  <div className="col-md-6">
                    <label className="form-label">Company Logo*</label>
                    <input type="file" name="logo" onChange={getInputData}
                      className={`form-control ${show && errorMessage.logo ? 'border-danger' : 'border-dark'}`} />
                    {show && errorMessage.logo ? <small className="text-danger">{errorMessage.logo}</small> : null}
                  </div>

                  {/* Status */}
                  <div className="col-md-6">
                    <label className="form-label">Status</label>
                    <select name="status" onChange={getInputData} className="form-select">
                      <option value="1">Active</option>
                      <option value="0">Inactive</option>
                    </select>
                  </div>

                  {/* Posted Date */}
                  <div className="col-md-6">
                    <label className="form-label">Posted Date</label>
                    <input
                      type="date"
                      name="postedDate"
                      value={data.postedDate ? new Date(data.postedDate).toISOString().split("T")[0] : ""}
                      onChange={getInputData}
                      className="form-control"
                    />
                  </div>

                  {/* Submit */}
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      <i className="bi bi-check-circle me-2"></i> Create Job
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
