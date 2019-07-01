import React, { Component } from 'react';

import StarEmpty from '../../assets/icons/star-empty';
import StarHalf from '../../assets/icons/star-half';
import StarFull from '../../assets/icons/star-full';

class RestaurantRating extends Component {
    renderRating() {
      let color;
      switch (this.props.rating) {
        case 0:
          color = "grey"
          return (<><StarEmpty fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /></>)
        
        case 0.5:
          color = "grey"
          return (<><StarHalf fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /></>)

        case 1:
          color = "darkGrey"
          return (<><StarFull fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /></>)

        case 1.5:
          color = "darkGrey"
          return (<><StarFull fill={color} /><StarHalf fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /></>)

        case 2:
          color = "yellow"
          return (<><StarFull fill={color} /><StarFull fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /></>)

        case 2.5:
          color = "yellow"
          return (<><StarFull fill={color} /><StarFull fill={color} /><StarHalf fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /></>)
        
        case 3:
          color = "orange"
          return (<><StarFull fill={color} /><StarFull fill={color} /><StarFull fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /></>)

        case 3.5:
          color = "orange"
          return (<><StarFull fill={color} /><StarFull fill={color} /><StarFull fill={color} /><StarHalf fill={color} /><StarEmpty fill={color} /></>)

        case 4:
          color = "red"
          return (<><StarFull fill={color} /><StarFull fill={color} /><StarFull fill={color} /><StarFull fill={color} /><StarEmpty fill={color} /></>)

        case 4.5:
          color = "red"
          return (<><StarFull fill={color} /><StarFull fill={color} /><StarFull fill={color} /><StarFull fill={color} /><StarHalf fill={color} /></>)

        case 5:
          color = "darkRed"
          return (<><StarFull fill={color} /><StarFull fill={color} /><StarFull fill={color} /><StarFull fill={color} /><StarFull fill={color} /></>)
        
        default:
          color = "grey"
          return (<><StarEmpty fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /><StarEmpty fill={color} /></>)
      }
    };

    render() {
      return (
        <>{ this.renderRating() }</> 
      );
    }
};

export default RestaurantRating;