import React, { Component } from 'react';

import Flat from './flat.jsx'

class FlatList extends Component {
  render() {
    return (
      this.props.flats.map((flat, key) => <Flat name={flat.name} imageUrl={flat.imageUrl} price={flat.price} priceCurrency={flat.priceCurrency} lat={flat.lat} lng={flat.lng} key={key}/> )
    );
  }
}

export default FlatList
