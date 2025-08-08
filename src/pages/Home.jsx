import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Bidding Portal</h1>
      <nav>
        <Link to="/tenders">View Tenders</Link> |{' '}
        <Link to="/admin">Admin Panel</Link>
      </nav>
    </div>
  )
}
