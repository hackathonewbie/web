import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
class App extends Component {
  state = {
    dots: [],
    hoverTarget: {},
  }

  fetchData = url => window
    .fetch(url)
    .then(res => res.json())
    .then(data => {
      const dots = data;

      this.setState({ dots })
    });

  updateHoverTarget = hoverTarget => {
    this.setState({hoverTarget: {...hoverTarget}});
  }

  render() {
    const { lat, lng, val } = this.state.hoverTarget;

    return (
      <div className="App">
        <header className="App-header">全球藻化觀測系統</header>
        {
          Object.keys(this.state.hoverTarget).length > 0 ? <div className="Data-box">
          Lat: {Math.round(lat * 100) / 100}&nbsp;&nbsp;
          Lon: {Math.round(lng * 100) / 100}&nbsp;&nbsp;
          Chlor: {Math.round(val * 100) / 100}
        </div> : null
        }
        <Map
          isMarkerShown
          dots={this.state.dots}
          fetchData={this.fetchData} 
          updateHoverTarget={this.updateHoverTarget}
        />
      </div>
    );
  }
}

export default App;
