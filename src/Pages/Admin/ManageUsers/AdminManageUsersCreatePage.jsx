import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AdminSidebar from '../../../Components/AdminSidebar'
import FormValidator from '../../../Validators/FormValidator'

export default function AdminManageUsersCreatePage() {
  let [ManageUsersStateData , setManageUsersStateData] = useState([])
  let [data, setData] = useState({
    name: "",
    email: "",
    role: "User",
    status: true
  })

  let [errorMessage, setErrorMessage] = useState({
    name: "Name field is mandatory",
    email: "Email field is mandatory"
  })

  let [show, setShow] = useState(false)
  let navigate = useNavigate()

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

  async function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== "")
    if (error) {
      setShow(true)
    } else {
      try {
        // let item = ManageUsersStateData.find(x=>x.name.toLocaleLowerCase()===data.name.toLocaleLowerCase())
        // if(item){
        //   setShow(true)
        //   setErrorMessage({...errorMessage,'name':'Manage Users With This Name Already Exist'})
        // }
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        })
        if (response.ok) {
          alert("User created successfully!")
          navigate("/admin/users")
        } else {
          setShow(true)
          setErrorMessage({ ...errorMessage, name: "Failed to create user" })
        }
      } catch (err) {
        console.error("Error creating user:", err)
        setShow(true)
        setErrorMessage({ ...errorMessage, name: "Something went wrong" })
      }
    }
  }

  useEffect(()=>{
    (async()=>{
      let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/users`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        })
        if (response.ok) {
          alert("User created successfully!")
          setManageUsersStateData(response)
        }
    })()
  },[])

  return (
    <>
      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h4 className='mybackground text-light text-center p-2'>
              Create User
              <Link to="/admin/users">
                <i className='bi bi-arrow-left text-light float-end'></i>
              </Link>
            </h4>
            <form onSubmit={postData}>
              <div className="row">
                <div className="col-12 mb-3">
                  <label>Name*</label>
                  <input 
                    type="text" 
                    name="name" 
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
                    onChange={getInputData} 
                    placeholder='User Email' 
                    className={`form-control ${show && errorMessage.email ? 'border-danger' : 'border-dark'}`} 
                  />
                  {show && errorMessage.email ? <p className='text-danger'>{errorMessage.email}</p> : null}
                </div>

                <div className="col-md-6 mb-3">
                  <label>Role</label>
                  <select name="role" onChange={getInputData} className='form-select'>
                    <option value="User">User</option>
                    <option value="Employer">Employer</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label>Status</label>
                  <select name="status" onChange={getInputData} className='form-select'>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                </div>

                <div className="col-12 mb-3">
                  <button type='submit' className='btn btn-info bg-primary w-100'>Create</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
