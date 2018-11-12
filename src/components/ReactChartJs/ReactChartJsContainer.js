import React from 'react'
import LineChart from './LineChart'
import BarChart from './BarChart'
import './ReactChartJsContainer.css'

export default function ReactChartJsContainer() {
  return (
    <div className="ChartContainer">
      <div className="ChartContainer__header">React Chart.js</div>
      <div className="ChartContainer__charts">
        <LineChart />
        <BarChart />
      </div>
    </div>
  )
}
