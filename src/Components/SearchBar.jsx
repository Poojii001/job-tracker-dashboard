import React from "react";

export default function SearchBar() {
  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="row align-items-center">

          {/* Search Input */}
          <div className="col-md-6 mb-2 mb-md-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search company, position..."
              />

              <div className="input-group-append">
                <button className="btn btn-primary">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Status Filter */}
          <div className="col-md-3 mb-2 mb-md-0">
            <select className="form-control">
              <option>All Status</option>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>

          {/* Add Job Button */}
          <div className="col-md-3 text-md-right">
            <button className="btn btn-success btn-block">
              <i className="fas fa-plus mr-2"></i>
              Add Job
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}