import React from 'react'
import Bar from './Bar'
import ScatterChart from './ScatterChart'
import './ReactEasyChartContainer.css'

export default function ReactEasyChartContainer() {
  return (
    <div className="ReactEasyChartContainer">
      <div className="ReactEasyChartContainer__header">React Easy Chart</div>
      <div className="ReactEasyChartContainer__charts">
        <Bar />
        <ScatterChart />
      </div>
    </div>
  )
}
