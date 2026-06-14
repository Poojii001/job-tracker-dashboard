import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../../Components/AdminSidebar";
import { createCompanies } from "../../../Redux/ActionCreators/CompaniesActionCreators";

export default function AdminCompaniesCreatePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    logo: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleFileChange(e) {
    setFormData({ ...formData, logo: e.target.files[0] });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(createCompanies(formData));
    alert("✅ Company created successfully!");
    navigate("/admin/companies");
  }

  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-9">
          <div className="card shadow-lg border-0">
            <h4 className="card-header bg-gradient bg-success text-light text-center p-3">
              <i className="bi bi-building-add me-2"></i> Add New Company
            </h4>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Company Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter company name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="company@example.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="+91-9876543210"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="City, State"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Company Logo</label>
                  <input
                    type="file"
                    name="logo"
                    onChange={handleFileChange}
                    className="form-control"
                    accept=".png,.jpg,.jpeg"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Created On</label>
                  <input
                    type="date"
                    name="createdAt"
                    value={
                      formData.createdAt
                        ? new Date(formData.createdAt).toISOString().split("T")[0]
                        : ""
                    }
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <button type="submit" className="btn btn-success w-100">
                  <i className="bi bi-check-circle me-2"></i> Save Company
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
