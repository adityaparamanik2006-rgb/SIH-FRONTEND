import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing.jsx'
import Auth from './pages/Auth.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}