import React, { Component } from 'react';

import RestaurantRating from './RestaurantRating';
// import Funnel from '../../../assets/icons/funnel';
// import Heart from '../../../assets/icons/heart';
// import Location from '../../../assets/icons/location-pin';
// import User from '../../../assets/icons/user';

class RestaurantItem extends Component {
    render() {
      return (
        <>
        <div className="card" key={this.props.restaurant.id} onMouseOver={ () => this.props.setSelectedMarker(this.props.restaurant.id) }>
          <div className="thumb">
            <img src={this.props.restaurant.image_url} alt="House 1" className="thumb__img" />
          </div>
          
          <div className="infos">
            <div className="infos__header">
              <h2 className="title">{this.props.restaurant.name}</h2>
              <h3 className="date">{this.props.restaurant.price}</h3>
            </div>
            <div className="infos__content">
              <div>
                <h3 className="date"><RestaurantRating rating={this.props.restaurant.rating}/> ({this.props.restaurant.review_count})</h3>
                <h3 className="seats">{this.props.restaurant.categories[0].title}</h3>
              </div>
              <div>
                <p className="txt">
                  {this.props.restaurant.display_phone}
                </p>
                <p className="txt">
                  {this.props.restaurant.location.display_address[0]}
                </p>
                <p className="txt">
                  {this.props.restaurant.location.display_address[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="gap"></div>
        </>
      );
    }
};

export default RestaurantItem;