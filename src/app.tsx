import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Auth from './pages/auth/Auth'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
