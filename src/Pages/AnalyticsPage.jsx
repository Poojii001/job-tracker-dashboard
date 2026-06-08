import React from "react";
import ApplicationOverview from "../Components/ApplicationOverview";
import RecentApplication from "../Components/RecentApplication";
import StatusDistribution from "../Components/StatusDistribution";
import DashboardCard from "../Components/DashboardCard";

export default function AnalyticsPage() {
    return (
        <div className="container-fluid">

            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <div>
                    <h1 className="h3 mb-0 text-gray-800">
                        Analytics Dashboard
                    </h1>

                    <p className="text-muted mb-0">
                        Track your job application insights and performance.
                    </p>
                </div>

                <button className="btn btn-primary shadow-sm">
                    <i className="fas fa-download fa-sm mr-2"></i>
                    Export Report
                </button>
            </div>

            <DashboardCard />

            <div className="row">
                <ApplicationOverview />
                <StatusDistribution />
            </div>



            {/* Insights */}
            <div className="card shadow">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Key Insights
                    </h6>
                </div>

                <div className="card-body">
                    <ul className="mb-0">
                        <li>
                            Your interview conversion rate is improving.
                        </li>

                        <li>
                            Most applications were submitted this month.
                        </li>

                        <li>
                            Focus on interview preparation to increase offers.
                        </li>

                        <li>
                            Keep updating your resume for better response rates.
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}