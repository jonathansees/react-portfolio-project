import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

import CheckBox from './CheckBox';

class Filters extends React.Component {
    // state = {
    //   searchTerm: '',
    //   searchLocation: '',
    //   searchOpen: false
    // }

    onSubmit = formProps => {
        // this.props.getRestaurants(formProps);

        if (this.props.showFilter) {
          this.props.openFilter()
        }

        this.setState({
            searchTerm: formProps.searchTerm,
            searchLocation: formProps.searchLocation,
            searchOpen: formProps.searchOpen
        }, () => {
            console.log(this.state);
            this.props.getRestaurants(this.state);
        });
    }
  
    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="search-filters" onSubmit={ handleSubmit(this.onSubmit) }>
              <div className="filters">
                <CheckBox Name="filterOpen" Label="Open" />
                <CheckBox Name="filterBreakfast" Label="Breakfast" />
                <CheckBox Name="filterLunch" Label="Lunch" />
                <CheckBox Name="filterDinner" Label="Dinner" />
                <CheckBox Name="Price" Label="Price" />
              </div>
            </form>
            
        );
    }
}

export default compose(
  connect(
    null,
    actions
  ),
  reduxForm(
    { form: 'getRestaurants' }
  )
)(Filters);