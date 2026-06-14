import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net";

import AdminSidebar from "../../../Components/AdminSidebar";
import {
  getCompanies,
  deleteCompanies,
} from "../../../Redux/ActionCreators/CompaniesActionCreators";

export default function AdminCompaniesPage() {
  const [data, setData] = useState([]);
  const CompaniesStateData = useSelector((state) => state.CompaniesStateData);

  const dispatch = useDispatch();

  async function deleteRecord(id) {
    if (window.confirm("⚠️ Are you sure you want to delete this company?")) {
      dispatch(deleteCompanies({ id }));
      setData(data.filter((x) => x.id !== id));
    }
  }

  useEffect(() => {
    let time = (() => {
      dispatch(getCompanies());
      if (CompaniesStateData.length) {
        setData(CompaniesStateData);
        let time = setTimeout(() => {
          $("#CompaniesTable").DataTable({
            scrollX: true,
            pageLength: 5,
            responsive: true,
            dom: "Bfrtip",
          });
        }, 500);
        return time;
      }
    })();
    return () => clearTimeout(time);
  }, [CompaniesStateData.length, dispatch]);

  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-9">
          <div className="card shadow-lg border-0">
            <h4 className="card-header bg-gradient bg-primary text-light text-center p-3">
              <i className="bi bi-buildings-fill me-2"></i> Company Directory
              <Link to="/admin/companies/create">
                <i className='bi bi-plus-circle text-dark float-end fs-3'></i>
              </Link>
            </h4>
            <div className="card-body">
              <table
                id="CompaniesTable"
                className="table table-hover table-striped align-middle"
              >
                <thead className="table-light">
                  <tr>
                    <th>Id</th>
                    <th>Logo</th>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Location</th>
                    <th>Created On</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>
                        {item.logo ? (
                          <img
                            src={`${import.meta.env.VITE_APP_FILE_SERVER}/${item.logo}`}
                            alt="logo"
                            className="rounded-circle border"
                            height="40"
                            width="40"
                          />
                        ) : (
                          <span className="text-muted">No Logo</span>
                        )}
                      </td>
                      <td className="fw-bold text-primary">{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                        <i className="bi bi-geo-alt-fill text-danger me-1"></i>
                        {item.location}
                      </td>
                      <td>
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString()
                          : "N/A"}
                      </td>
                      <td>
                        <Link
                          to={`/admin/companies/update/${item.id}`}
                          className="btn btn-sm btn-outline-info me-2"
                        >
                          <i className="bi bi-pencil-square"></i>
                        </Link>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteRecord(item.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {data.length === 0 && (
                <p className="text-center text-muted mt-3">
                  No companies found. Please add a new company.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
