import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminSidebar from "../../../Components/AdminSidebar";
import { getNotifications, deleteNotifications, markRead } from "../../../Redux/ActionCreators/NotificationsActionCreators";

export default function AdminNotificationsPage() {
  const [data, setData] = useState([]);
  const NotificationsStateData = useSelector((state) => state.NotificationsStateData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotifications());
    if (NotificationsStateData.length) {
      setData(NotificationsStateData);
    }
  }, [NotificationsStateData.length, dispatch]);

  function handleDelete(id) {
    if (window.confirm("Delete this notification?")) {
      dispatch(deleteNotifications({ id }));
      setData(data.filter(x => x.id !== id));
    }
  }

  function handleMarkRead(id) {
    dispatch(markRead({ id }));
    setData(data.map(x => x.id === id ? { ...x, status: "Read" } : x));
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
              <i className="bi bi-bell-fill me-2"></i> Notifications
            </h4>
            <div className="card-body">
              {data.length === 0 ? (
                <p className="text-center text-muted">No notifications available</p>
              ) : (
                <ul className="list-group">
                  {data.map(item => (
                    <li key={item.id} className={`list-group-item d-flex justify-content-between align-items-center ${item.status === "Read" ? "text-muted" : "fw-bold"}`}>
                      <span>
                        <i className="bi bi-info-circle me-2"></i>
                        {item.message}
                        <small className="ms-2 text-muted">({new Date(item.date).toLocaleString()})</small>
                      </span>
                      <div>
                        {item.status !== "Read" && (
                          <button className="btn btn-sm btn-outline-success me-2" onClick={() => handleMarkRead(item.id)}>
                            Mark Read
                          </button>
                        )}
                        <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(item.id)}>
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
