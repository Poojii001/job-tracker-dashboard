import DashboardCard from "../Components/DashboardCard";
import ApplicationOverview from "../Components/ApplicationOverview";
import StatusDistribution from "../Components/StatusDistribution";
import JobProgress from "../Components/JobProgress";
import RecentApplication from "../Components/RecentApplication";
import JobTable from "../Components/JobTable";
import StateCard from "../Components/StateCard";
import SearchBar from "../Components/SearchBar";

export default function HomePage() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">
          Dashboard
        </h1>

        <button className="btn btn-sm btn-primary shadow-sm">
          Generate Report
        </button>
      </div>

      <DashboardCard />

      <div className="row">
        <ApplicationOverview />
        <StatusDistribution />
      </div>

      <div className="row">
        <div className="col-lg-6">
          <JobProgress />
        </div>

        <div className="col-lg-6">
          <RecentApplication />
        </div>
        <JobTable />
        <StateCard />
        <SearchBar />
      </div>
    </>
  );
}