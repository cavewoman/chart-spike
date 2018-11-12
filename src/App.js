import React, { Component } from 'react'
import './App.css'
import ReactChartJsContainer from './components/ReactChartJs/ReactChartJsContainer'
import VictoryChartContainer from './components/Victory/VictoryChartContainer'
import RumbleChartsContainer from './components/RumbleCharts/RumbleChartsContainer'
import ReactEasyChartContainer from './components/ReactEasyChart/ReactEasyChartContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppChartsContainer">
          <ReactChartJsContainer />
          <VictoryChartContainer />
          <RumbleChartsContainer />
          <ReactEasyChartContainer />
        </div>
      </div>
    )
  }
}

export default App
