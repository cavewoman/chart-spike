import React from 'react'
import BarChart from './BarChart'
import './RumbleChartsContainer.css'

export default function RumbleChartsContainer() {
  return (
    <div className="RumbleChartsContainer">
      <div className="RumbleChartsContainer__header">Rumble Charts</div>
      <div className="RumbleChartsContainer__charts">
        <BarChart />
      </div>
    </div>
  )
}
