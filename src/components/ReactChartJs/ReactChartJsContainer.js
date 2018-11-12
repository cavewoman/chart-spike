import React from 'react'
import LineChart from './LineChart'
import BarChart from './BarChart'
import './ReactChartJsContainer.css'

export default function ReactChartJsContainer() {
  return (
    <div className="ReactChartJsContainer">
      <div className="ReactChartJsContainer__header">React Chart.js</div>
      <div className="ReactChartJsContainer__charts">
        <LineChart />
        <BarChart />
      </div>
    </div>
  )
}
