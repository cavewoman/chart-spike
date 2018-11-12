import React, { Component } from 'react'
import './App.css'
import ReactChartJsContainer from './components/ReactChartJs/ReactChartJsContainer'
import VictoryChartContainer from './components/Victory/VictoryChartContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactChartJsContainer />
        <VictoryChartContainer />
      </div>
    )
  }
}

export default App
