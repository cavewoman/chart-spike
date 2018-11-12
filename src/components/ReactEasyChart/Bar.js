import React from 'react'
import { BarChart } from 'react-easy-chart'

export default function Bar() {
  return (
    <BarChart
      axes
      height={250}
      width={650}
      data={[
        { x: 'A', y: 20, color: '#000' },
        { x: 'B', y: 30, color: '#000' },
        { x: 'C', y: 40, color: '#000' },
        { x: 'D', y: 20, color: '#000' },
        { x: 'E', y: 40, color: '#000' },
        { x: 'F', y: 25, color: '#000' },
        { x: 'G', y: 5, color: '#000' }
      ]}
    />
  )
}
