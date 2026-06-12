import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminSidebar from '../../../Components/AdminSidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FormValidator from '../../../Validators/FormValidator'
import ImageValidator from '../../../Validators/ImageValidator'

import { getJobs, updateJobs } from "../../../Redux/ActionCreators/JobsActionCreators"

export default function AdminReportsUpdatePage() {
  let { id } = useParams()
  let navigate = useNavigate()
  let dispatch = useDispatch()

  let JobsStateData = useSelector(state => state.JobsStateData)

  let [data, setData] = useState({
    id: id,
    title: "",
    company: "",
    logo: "",
    location: "",
    email: "",
    salary: "",
    postedDate: "",   // ✅ Added Posted Date
    status: true
  })

  let [errorMessage, setErrorMessage] = useState({
    title: "",
    company: "",
    logo: "",
    location: "",
    email: "",
    salary: ""
  })

  let [show, setShow] = useState(false)

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
        x => x?.id != id && x?.title && data?.title && x.title.toLocaleLowerCase() === data.title.toLocaleLowerCase()
      )
      if (item) {
        setShow(true)
        setErrorMessage({ ...errorMessage, 'title': 'Job With This Title Already Exist' })
      } else {
        dispatch(updateJobs({ ...data }))
        navigate("/admin/jobs")
      }
    }
  }

  useEffect(() => {
    (() => {
      dispatch(getJobs())
      if (JobsStateData.length) {
        let item = JobsStateData.find(x => x.id == id)
        if (item) {
          setData({ ...data, ...item })
        } else {
          navigate("/admin/jobs")
        }
      }
    })()
  }, [JobsStateData.length])

  return (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-9">
          <div className="card shadow-lg border-0">
            <h4 className='bg-primary text-light text-center p-2'>
              <i className="bi bi-pencil-square me-2"></i> Update Job
              <Link to="/admin/jobs"><i className='bi bi-arrow-left text-light float-end'></i></Link>
            </h4>
            <div className="card-body">
              <form onSubmit={postData}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label>Job Title*</label>
                    <input type="text" name="title" value={data.title} onChange={getInputData} placeholder='Job Title' className={`form-control ${show && errorMessage.title ? 'border-danger' : 'border-dark'}`} />
                    {show && errorMessage.title ? <small className='text-danger'>{errorMessage.title}</small> : null}
                  </div>

                  <div className="col-md-6">
                    <label>Company*</label>
                    <input type="text" name="company" value={data.company} onChange={getInputData} placeholder='Company Name' className={`form-control ${show && errorMessage.company ? 'border-danger' : 'border-dark'}`} />
                    {show && errorMessage.company ? <small className='text-danger'>{errorMessage.company}</small> : null}
                  </div>

                  <div className="col-md-6">
                    <label>Email*</label>
                    <input type="email" name="email" value={data.email} onChange={getInputData} placeholder='HR Email' className={`form-control ${show && errorMessage.email ? 'border-danger' : 'border-dark'}`} />
                    {show && errorMessage.email ? <small className='text-danger'>{errorMessage.email}</small> : null}
                  </div>

                  <div className="col-md-6">
                    <label>Location*</label>
                    <input type="text" name="location" value={data.location} onChange={getInputData} placeholder='Job Location' className={`form-control ${show && errorMessage.location ? 'border-danger' : 'border-dark'}`} />
                    {show && errorMessage.location ? <small className='text-danger'>{errorMessage.location}</small> : null}
                  </div>

                  <div className="col-md-6">
                    <label>Salary*</label>
                    <input type="text" name="salary" value={data.salary} onChange={getInputData} placeholder='e.g. 50,000 INR/month' className={`form-control ${show && errorMessage.salary ? 'border-danger' : 'border-dark'}`} />
                    {show && errorMessage.salary ? <small className='text-danger'>{errorMessage.salary}</small> : null}
                  </div>

                  <div className="col-md-6">
                    <label>Company Logo*</label>
                    <input type="file" name="logo" onChange={getInputData} className={`form-control ${show && errorMessage.logo ? 'border-danger' : 'border-dark'}`} />
                    {show && errorMessage.logo ? <small className='text-danger'>{errorMessage.logo}</small> : null}
                  </div>

                  <div className="col-md-6">
                    <label>Status</label>
                    <select name="status" onChange={getInputData} value={data.status ? "1" : "0"} className='form-select'>
                      <option value="1">Active</option>
                      <option value="0">Inactive</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label>Posted Date</label>
                    <input
                      type="date"
                      name="postedDate"
                      value={data.postedDate ? new Date(data.postedDate).toISOString().split("T")[0] : ""}
                      onChange={getInputData}
                      className="form-control"
                    />
                  </div>


                  <div className="col-12">
                    <button type='submit' className='btn btn-info bg-primary w-100'>
                      <i className="bi bi-check-circle me-2"></i> Update Job
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
