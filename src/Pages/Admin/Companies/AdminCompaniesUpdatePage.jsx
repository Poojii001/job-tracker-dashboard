import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AdminSidebar from "../../../Components/AdminSidebar";
import { getCompanies, updateCompanies } from "../../../Redux/ActionCreators/CompaniesActionCreators";

export default function AdminCompaniesUpdatePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CompaniesStateData = useSelector((state) => state.CompaniesStateData);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    logo: null,
    createdAt: ""
  });

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  useEffect(() => {
    let company = CompaniesStateData.find((item) => item.id === Number(id));
    if (company) {
      setFormData({
        name: company.name,
        email: company.email,
        phone: company.phone,
        location: company.location,
        logo: company.logo,
        createdAt: company.createdAt
      });
    }
  }, [CompaniesStateData, id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleFileChange(e) {
    setFormData({ ...formData, logo: e.target.files[0] });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateCompanies({ id, ...formData }));
    alert("✅ Company updated successfully!");
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
            <h4 className="card-header bg-gradient bg-warning text-dark text-center p-3">
              <i className="bi bi-pencil-square me-2"></i> Update Company
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
                  {formData.logo && (
                    <p className="mt-2">
                      Current:{" "}
                      <img
                        src={`${import.meta.env.VITE_APP_FILE_SERVER}/${formData.logo}`}
                        alt="logo"
                        className="rounded border"
                        height="50"
                      />
                    </p>
                  )}
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

                <button type="submit" className="btn btn-warning w-100">
                  <i className="bi bi-check-circle me-2"></i> Update Company
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
