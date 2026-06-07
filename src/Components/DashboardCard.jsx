import React from "react";

export default function DashboardCard() {
  const cards = [
    {
      title: "Total Applications",
      count: 12,
      icon: "fas fa-briefcase",
      border: "primary",
      bg: "bg-primary",
      growth: "+15%",
      text: "This month",
    },
    {
      title: "Interviews",
      count: 5,
      icon: "fas fa-calendar-check",
      border: "success",
      bg: "bg-success",
      growth: "+2",
      text: "Upcoming",
    },
    {
      title: "Offers",
      count: 2,
      icon: "fas fa-award",
      border: "info",
      bg: "bg-info",
      growth: "+1",
      text: "New offer",
    },
    {
      title: "Rejected",
      count: 3,
      icon: "fas fa-times-circle",
      border: "warning",
      bg: "bg-warning",
      growth: "-1",
      text: "Improving",
    },
  ];

  return (
    <div className="row">
      {cards.map((card, index) => (
        <div className="col-xl-3 col-md-6 mb-4" key={index}>
          <div
            className={`card border-left-${card.border} shadow h-100 py-2`}
          >
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div
                    className={`text-xs font-weight-bold text-${card.border} text-uppercase mb-1`}
                  >
                    {card.title}
                  </div>

                  <div className="h3 font-weight-bold text-gray-800">
                    {card.count}
                  </div>

                  <small className="text-muted">
                    {card.growth} {card.text}
                  </small>
                </div>

                <div
                  className={`${card.bg} rounded-circle d-flex align-items-center justify-content-center`}
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                >
                  <i
                    className={`${card.icon} text-white`}
                    style={{ fontSize: "24px" }}
                  ></i>
                </div>
              </div>

              <hr />

              <button className="btn btn-sm btn-outline-primary w-100">
                View Details →
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}