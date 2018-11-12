import React from 'react'
import { VictoryChart, VictoryScatter, VictoryTheme } from 'victory'

export default function ScatterChart() {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domain={{ x: [0, 5], y: [0, 7] }}
    >
      <VictoryScatter
        style={{ data: { fill: '#c43a31' } }}
        size={3}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 7 }
        ]}
      />
    </VictoryChart>
  )
}
