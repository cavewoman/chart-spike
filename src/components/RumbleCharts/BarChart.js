import React from 'react'
import { Bars, Chart, Ticks } from 'rumble-charts'

export default function BarChart() {
  const series = [
    {
      data: [1, 2, 4, 13, 3, 6, 12, 7, 8, 9, 3, 2, 1, 5, 14]
    }
  ]

  return (
    <Chart width={600} height={250} series={series} minY={0}>
      <Ticks
        axis="y"
        lineLength="100%"
        lineVisible={true}
        lineStyle={{ stroke: 'lightgray' }}
        labelStyle={{
          textAnchor: 'end',
          dominantBaseline: 'middle',
          fill: 'lightgray'
        }}
        labelAttributes={{ x: -5 }}
      />
      <Bars innerPadding="0.5%" />
    </Chart>
  )
}
