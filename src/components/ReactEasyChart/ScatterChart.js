import React from 'react'
import { ScatterplotChart } from 'react-easy-chart'

export default function ScatterChart() {
  const data = [
    {
      type: 'One',
      x: 1,
      y: 5
    },
    {
      type: 'Two',
      x: 3,
      y: 1
    },
    {
      type: 'Three',
      x: 0,
      y: 6
    },
    {
      type: 'Four',
      x: 5,
      y: 2
    },
    {
      type: 'Five',
      x: 4,
      y: 4
    },
    {
      type: 'Six',
      x: 5,
      y: 9
    },
    {
      type: 'Seven',
      x: 9,
      y: 1
    },
    {
      type: 'Eight',
      x: 5,
      y: 6
    },
    {
      type: 'Nine',
      x: 3,
      y: 9
    },
    {
      type: 'Ten',
      x: 7,
      y: 9
    }
  ]

  return (
    <ScatterplotChart
      data={data}
      axes
      verticalGrid
      axisLabels={{ x: 'My x Axis', y: 'My y Axis' }}
      dotRadius={10}
      width={480}
      height={270}
      grid
    />
  )
}
