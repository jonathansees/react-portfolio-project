import React, { Component } from 'react';

import RestaurantResultsList from '../components/Restaurants/RestaurantResultsList';
import GoogleMapsContainer from '../components/Map/GoogleMapsContainer';

class RestaurantResults extends Component {
  state = {
    selectedMarker: ''
  }

  setSelectedMarker = restaurantId => {
    console.log(restaurantId)
    this.setState({
      selectedMarker: restaurantId
    });
  }

  render() {
    return (
      <React.Fragment>
        <RestaurantResultsList
          selectedMarker={ this.state.selectedMarker }
          setSelectedMarker={ this.setSelectedMarker } 
        />
        <GoogleMapsContainer 
          selectedMarker={ this.state.selectedMarker }
          setSelectedMarker={ this.setSelectedMarker }
        />
      </React.Fragment>
    );
  };
};

export default RestaurantResults;