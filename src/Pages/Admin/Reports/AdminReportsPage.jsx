import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminSidebar from '../../../Components/AdminSidebar'
import { getJobs } from "../../../Redux/ActionCreators/JobsActionCreators"

// Chart.js imports
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement, TimeScale } from 'chart.js'
import { Doughnut, Bar, Line } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement, TimeScale)

export default function AdminReportsPage() {
  let dispatch = useDispatch()
  let JobsStateData = useSelector(state => state.JobsStateData)

  useEffect(() => {
    dispatch(getJobs())
  }, [dispatch])

  // ✅ Analytics
  let totalJobs = JobsStateData.length
  let activeJobs = JobsStateData.filter(job => job.status).length
  let inactiveJobs = totalJobs - activeJobs

  // ✅ Chart Data (Active vs Inactive)
  const statusData = {
    labels: ['Active Jobs', 'Inactive Jobs'],
    datasets: [
      {
        data: [activeJobs, inactiveJobs],
        backgroundColor: ['#198754', '#6c757d'],
        borderColor: ['#fff', '#fff'],
        borderWidth: 2,
      },
    ],
  }

  // ✅ Salary Distribution
  let lowSalary = JobsStateData.filter(job => job.salary && job.salary < 30000).length
  let midSalary = JobsStateData.filter(job => job.salary && job.salary >= 30000 && job.salary < 60000).length
  let highSalary = JobsStateData.filter(job => job.salary && job.salary >= 60000).length

  const salaryData = {
    labels: ['< 30k', '30k - 60k', '> 60k'],
    datasets: [
      {
        label: 'Jobs Count',
        data: [lowSalary, midSalary, highSalary],
        backgroundColor: ['#0d6efd', '#ffc107', '#dc3545'],
      },
    ],
  }

  // ✅ Company-wise Jobs
  let companyMap = {}
  JobsStateData.forEach(job => {
    if (job.company) {
      companyMap[job.company] = (companyMap[job.company] || 0) + 1
    }
  })
  const companyLabels = Object.keys(companyMap)
  const companyValues = Object.values(companyMap)

  const companyData = {
    labels: companyLabels,
    datasets: [
      {
        label: 'Jobs per Company',
        data: companyValues,
        backgroundColor: '#20c997',
      },
    ],
  }

  // ✅ Location-wise Jobs
  let locationMap = {}
  JobsStateData.forEach(job => {
    if (job.location) {
      locationMap[job.location] = (locationMap[job.location] || 0) + 1
    }
  })
  const locationLabels = Object.keys(locationMap)
  const locationValues = Object.values(locationMap)

  const locationData = {
    labels: locationLabels,
    datasets: [
      {
        label: 'Jobs per Location',
        data: locationValues,
        backgroundColor: '#6610f2',
      },
    ],
  }

  // ✅ Time-series (Jobs Posted by Date)
  let dateMap = {}
  JobsStateData.forEach(job => {
    if (job.postedDate) {
      let date = new Date(job.postedDate).toLocaleDateString()
      dateMap[date] = (dateMap[date] || 0) + 1
    }
  })
  const dateLabels = Object.keys(dateMap)
  const dateValues = Object.values(dateMap)

  const timeSeriesData = {
    labels: dateLabels,
    datasets: [
      {
        label: 'Jobs Posted',
        data: dateValues,
        fill: false,
        borderColor: '#0dcaf0',
        backgroundColor: '#0dcaf0',
        tension: 0.3,
      },
    ],
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
              <i className="bi bi-bar-chart-fill me-2"></i> Reports & Analytics
            </h4>
            <div className="card-body">
              <div className="row g-3">
                {/* Summary Cards */}
                <div className="col-md-4">
                  <div className="card text-center shadow-sm">
                    <div className="card-body">
                      <h5>Total Jobs</h5>
                      <h2 className="text-primary">{totalJobs}</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center shadow-sm">
                    <div className="card-body">
                      <h5>Active Jobs</h5>
                      <h2 className="text-success">{activeJobs}</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center shadow-sm">
                    <div className="card-body">
                      <h5>Inactive Jobs</h5>
                      <h2 className="text-secondary">{inactiveJobs}</h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart Section */}
              <div className="row mt-4">
                <div className="col-md-3">
                  <h6 className="text-center">Jobs Status</h6>
                  <Doughnut data={statusData} />
                </div>
                <div className="col-md-3">
                  <h6 className="text-center">Salary Distribution</h6>
                  <Bar data={salaryData} />
                </div>
                <div className="col-md-3">
                  <h6 className="text-center">Company-wise Jobs</h6>
                  <Bar data={companyData} />
                </div>
                <div className="col-md-3">
                  <h6 className="text-center">Location-wise Jobs</h6>
                  <Bar data={locationData} />
                </div>
              </div>

              {/* Time-series Chart */}
              <div className="row mt-4">
                <div className="col-12">
                  <h6 className="text-center">Jobs Posted by Date</h6>
                  <Line data={timeSeriesData} />
                </div>
              </div>

              {/* Recent Activity */}
              <div className="row mt-4">
                <div className="col-12">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="mb-3">Recent Activity</h5>
                      <ul>
                        {JobsStateData.slice(-5).map(job => (
                          <li key={job.id}>
                            {job.title} at {job.company} — {job.location} — {job.salary ? job.salary + " INR" : "N/A"} ({job.status ? "Active" : "Inactive"})
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
