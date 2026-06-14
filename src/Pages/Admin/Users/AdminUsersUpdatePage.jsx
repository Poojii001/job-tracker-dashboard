import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminSidebar from '../../../Components/AdminSidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FormValidator from '../../../Validators/FormValidator'

import { getUsers, updateUsers } from "../../../Redux/ActionCreators/UsersActionCreators"

export default function AdminUsersUpdatePage() {
  let { id } = useParams()
  let navigate = useNavigate()
  let dispatch = useDispatch()

  let UsersStateData = useSelector(state => state.UsersStateData)

  let [data, setData] = useState({
    id: id,
    name: "",
    email: "",
    role: "User",
    status: true
  })

  let [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
  })

  let [show, setShow] = useState(false)

  function getInputData(e) {
    let { name, value } = e.target

    setErrorMessage({
      ...errorMessage,
      [name]: FormValidator(e)
    })

    setData({
      ...data,
      [name]: name === "status" ? (value === "1" ? true : false) : value
    })
  }

  function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== "")
    if (error) {
      setShow(true)
    } else {
      let item = UsersStateData.find(
        x => x?.id != id && x?.name && data?.name && x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
      )
      if (item) {
        setShow(true)
        setErrorMessage({ ...errorMessage, 'name': 'User With This Name Already Exist' })
      } else {
        // ✅ Redux update action
        dispatch(updateUsers({ ...data }))
        navigate("/admin/users")
      }
    }
  }

  useEffect(() => {
    (() => {
      dispatch(getUsers())   // ✅ Redux get action
      if (UsersStateData.length) {
        let item = UsersStateData.find(x => x.id == id)
        if (item) {
          setData({ ...data, ...item })
        } else {
          navigate("/admin/users")
        }
      }
    })()
  }, [UsersStateData.length])

  return (
    <>
      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h4 className='text-light text-center p-2 bg-primary'>
              Update User
              <Link to="/admin/users"><i className='bi bi-arrow-left text-light float-end'></i></Link>
            </h4>
            <form onSubmit={postData}>
              <div className="row">
                <div className="col-12 mb-3">
                  <label>Name*</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={data.name} 
                    onChange={getInputData} 
                    placeholder='User Name' 
                    className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-dark'}`} 
                  />
                  {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                </div>
                <div className="col-12 mb-3">
                  <label>Email*</label>
                  <input   
                    type="email" 
                    name="email" 
                    value={data.email} 
                    onChange={getInputData} 
                    placeholder='User Email' 
                    className={`form-control ${show && errorMessage.email ? 'border-danger' : 'border-dark'}`} 
                  />
                  {show && errorMessage.email ? <p className='text-danger'>{errorMessage.email}</p> : null}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Role</label>
                  <select name="role" value={data.role} onChange={getInputData} className='form-select'>
                    <option value="User">User</option>
                    <option value="Employer">Employer</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label>Status</label>
                  <select name="status" onChange={getInputData} value={data.status ? "1" : "0"} className='form-select'>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                </div>
                <div className="col-12 mb-3">
                  <button type='submit' className='btn btn-info bg-primary w-100'>Update</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
