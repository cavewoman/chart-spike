import React, { Component } from 'react'
import './App.css'
import ReactChartJsContainer from './components/ReactChartJs/ReactChartJsContainer'
import VictoryChartContainer from './components/Victory/VictoryChartContainer'
import RumbleChartsContainer from './components/RumbleCharts/RumbleChartsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactChartJsContainer />
        <VictoryChartContainer />
        <RumbleChartsContainer />
      </div>
    )
  }
}

export default App
