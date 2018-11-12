import React from 'react'
import BarChart from './BarChart'
import './RumbleChartsContainer.css'

export default function RumbleChartsContainer() {
  return (
    <div className="ChartContainer">
      <div className="ChartContainer__header">Rumble Charts</div>
      <div className="ChartContainer__charts">
        <BarChart />
      </div>
    </div>
  )
}
