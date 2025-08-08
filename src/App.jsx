import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TenderList from './pages/TenderList'
import BidForm from './pages/BidForm'
import AdminPanel from './pages/AdminPanel'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tenders" element={<TenderList />} />
      <Route path="/bid/:tenderId" element={<BidForm />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  )
}
