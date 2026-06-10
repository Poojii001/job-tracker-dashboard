import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import AdminSidebar from '../../../Components/AdminSidebar'
import FormValidator from '../../../Validators/FormValidator'

export default function AdminManageUsersUpdatePage() {
  const { id } = useParams()   // user id from route
  const navigate = useNavigate()

  const [data, setData] = useState({
    name: "",
    email: "",
    role: "User",
    status: true
  })

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: ""
  })

  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(true)

  // Fetch existing user data from backend
  useEffect(() => {
    async function fetchUser() {
      try {
        let response = await fetch(`${import.meta.env.VITE_APP_API_URL}/users/${id}`)
        if (response.ok) {
          let user = await response.json()
          setData({
            name: user.name,
            email: user.email,
            role: user.role,
            status: user.status
          })
        } else {
          setErrorMessage({ ...errorMessage, name: "Failed to load user data" })
        }
      } catch (error) {
        console.error("Error fetching user:", error)
        setErrorMessage({ ...errorMessage, name: "Something went wrong while fetching user data" })
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [id])

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
        let response = await fetch(`${import.meta.env.VITE_APP_API_URL}/users/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        })
        if (response.ok) {
          alert("User updated successfully!")
          navigate("/admin/users")
        } else {
          setShow(true)
          setErrorMessage({ ...errorMessage, name: "Failed to update user" })
        }
      } catch (err) {
        console.error("Error updating user:", err)
        setShow(true)
        setErrorMessage({ ...errorMessage, name: "Something went wrong while updating user" })
      }
    }
  }

  return (
    <>
      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h4 className='mybackground text-light text-center p-2'>
              Update User
              <Link to="/admin/users"><i className='bi bi-arrow-left text-light float-end'></i></Link>
            </h4>

            {loading ? (
              <p className="text-center">Loading user data...</p>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </>
  )
}
