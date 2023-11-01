import React from 'react'
import ReactDOM from 'react-dom/client'
import BloodPressureTracker from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BloodPressureTracker />
  </React.StrictMode>,
)
