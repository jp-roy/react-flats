import React, { Component } from 'react';
import flats from '../data/flats.js'

import FlatList from './flat_list.jsx'
import Gmap from './gmap.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      selectedFlat: null
    });
  }

  updateMarker = (flat) => {
    this.setState({
      selectedFlat: flat
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <div className="flat-list">
            <FlatList flats={flats} selectedFlat={this.state.selectedFlat} updateMarker={this.updateMarker}/>
          </div>
          <div className="map-container">
            <Gmap flat={this.state.selectedFlat} />
          </div>
        </div>
      </div>
    );
  }
}

export default App
