import React, { Component } from 'react';

import Flat from './flat.jsx'

const FlatList = (props) => {
  return (
      props.flats.map((flat, key) => <Flat flat={flat} selectedFlat={props.selectedFlat} key={key} selectFlat={props.selectFlat}/> )
    );
};

export default FlatList
