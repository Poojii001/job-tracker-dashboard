import React from "react";

export default function OffersPage() {
  const offers = [
    {
      company: "Google",
      position: "Frontend Developer",
      salary: "₹18 LPA",
      status: "Accepted",
    },
    {
      company: "Amazon",
      position: "MERN Developer",
      salary: "₹15 LPA",
      status: "Pending",
    },
    {
      company: "Microsoft",
      position: "Software Engineer",
      salary: "₹20 LPA",
      status: "Negotiating",
    },
  ];

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">
        Job Offers
      </h1>

      <div className="row">
        {offers.map((offer, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow border-left-success h-100">
              <div className="card-body">

                <h5 className="font-weight-bold mb-2">
                  {offer.company}
                </h5>

                <p className="text-muted mb-2">
                  {offer.position}
                </p>

                <h6 className="text-success">
                  {offer.salary}
                </h6>

                <span
                  className={`badge ${
                    offer.status === "Accepted"
                      ? "badge-success"
                      : offer.status === "Pending"
                      ? "badge-warning"
                      : "badge-info"
                  }`}
                >
                  {offer.status}
                </span>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}