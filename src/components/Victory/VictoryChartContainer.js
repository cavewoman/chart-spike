import React from 'react'
import BarChart from './BarChart'
import ScatterChart from './ScatterChart'

import './VictoryChartContainer.css'

export default function VictoryChartContainer() {
  return (
    <div className="VictoryChartContainer">
      <div className="VictoryChartContainer__header">Victory</div>
      <div className="VictoryChartContainer__charts">
        <BarChart />
        <ScatterChart />
      </div>
    </div>
  )
}
