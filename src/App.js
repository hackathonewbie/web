import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
class App extends Component {
  state = {
    dots: [],
  }

  componentDidMount() {
    window
      .fetch('//ec2-54-255-197-171.ap-southeast-1.compute.amazonaws.com:3030/chlor_a/?lat=25.54&lon=119')
      .then(res => res.json())
      .then(data => {
        const dots = data;

        this.setState({ dots })
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">全台藻化觀測系統</header>
        <Map isMarkerShown dots={this.state.dots} />
      </div>
    );
  }
}

export default App;
