import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRestaurants } from '../../actions';

import RestaurantItem from './RestaurantItem';

class RestaurantResultsList extends Component {

  renderList() {
    if (!this.props.restaurants[0]) {
      return (
        <div></div>
      )
    } else {
      return this.props.restaurants[0].businesses.map(restaurant => {
        return (
          <RestaurantItem
            getRestaurantDetails={this.props.getRestaurantDetails}
            key={restaurant.id}
            restaurant={restaurant}
            selectedMarker={ this.props.selectedMarker }
            setSelectedMarker={ this.props.setSelectedMarker }
          />
        );
      });
    }
  }

  render() {
    return (
      <div className="sidebar">
        {this.renderList()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    restaurants: Object.values(state.restaurants)
  };
};

export default connect(
  mapStateToProps,
  { getRestaurants }
)(RestaurantResultsList);