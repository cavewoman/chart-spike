import React from 'react'
import ReactDOM from 'react-dom'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'

export default function BarChart() {
  // const data = [
  //   { quarter: 1, earnings: 13000 },
  //   { quarter: 2, earnings: 16500 },
  //   { quarter: 3, earnings: 14250 },
  //   { quarter: 4, earnings: 19000 }
  // ]

  const data = [
    {
      week: 0,
      percentage: 0
    },
    {
      week: 1,
      percentage: 62
    },
    {
      week: 2,
      percentage: 24
    },
    {
      week: 3,
      percentage: 0
    },
    {
      week: 4,
      percentage: 0
    },
    {
      week: 5,
      percentage: 0
    },
    {
      week: 6,
      percentage: 0
    },
    {
      week: 7,
      percentage: 0
    },
    {
      week: 8,
      percentage: 0
    },
    {
      week: 9,
      percentage: 0
    },
    {
      week: 10,
      percentage: 0
    },
    {
      week: 11,
      percentage: 0
    },
    {
      week: 12,
      percentage: 0
    }
  ]

  return (
    <VictoryChart domainPadding={20}>
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        // tickValues={y => `${y}`}
        // tickFormat={y => `${y}`}
        tickCount={data.length}
      />
      <VictoryAxis
        dependentAxis
        // tickFormat specifies how ticks should be displayed
        tickFormat={x => `${x}`}
        domain={[0, 100]}

      />
      <VictoryBar
        data={data}
        // data accessor for x values
        x="week"
        // data accessor for y values
        y="percentage"
      />
    </VictoryChart>
  )
}
