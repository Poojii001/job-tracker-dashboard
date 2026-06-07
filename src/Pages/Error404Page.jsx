import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404Page() {
  return (
    <>
        <main className="main">
      
      <div className="container">
        <div className="my-5 py-5 text-center">
            <h1>404 Page Not Found</h1>
            <Link to="/" className='btn btn-primary px-5'>Back to Dashboard</Link>
        </div>
      </div>
    </main>
    </>
  )
}
