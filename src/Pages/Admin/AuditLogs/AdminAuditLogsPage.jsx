import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminSidebar from "../../../Components/AdminSidebar";
import { getAuditLogs, deleteAuditLogs } from "../../../Redux/ActionCreators/AuditLogsActionCreators"; // ✅ plural
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net";

export default function AdminAuditLogsPage() {
  const [data, setData] = useState([]);
  const AuditLogsStateData = useSelector((state) => state.AuditLogsStateData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuditLogs());
    if (AuditLogsStateData.length) {
      setData(AuditLogsStateData);
      setTimeout(() => {
        $("#AuditLogsTable").DataTable({
          scrollX: true,
          pageLength: 10,
          responsive: true,
        });
      }, 500);
    }
  }, [AuditLogsStateData.length, dispatch]);

  async function handleDelete(id) {
    if (window.confirm("Delete this log entry?")) {
      dispatch(deleteAuditLogs({ id })); // ✅ plural
      setData(data.filter(x => x.id !== id));
    }
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
              <i className="bi bi-journal-text me-2"></i> Audit Logs
            </h4>
            <div className="card-body">
              <table id="AuditLogsTable" className="table table-hover table-striped align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Id</th>
                    <th>Action</th>
                    <th>Performed By</th>
                    <th>Role</th>
                    <th>Date & Time</th>
                    <th>IP Address</th>
                    <th>Details</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td className="fw-bold">{item.action}</td>
                      <td>{item.user}</td>
                      <td>{item.role}</td>
                      <td>{new Date(item.timestamp).toLocaleString()}</td>
                      <td>{item.ip || "N/A"}</td>
                      <td>{item.details}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(item.id)}
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
                  No audit logs available
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
