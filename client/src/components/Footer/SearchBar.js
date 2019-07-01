import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import MagnifyingGlass from '../../assets/icons/magnifying-glass';

class SearchBar extends React.Component {
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
            this.props.getRestaurants(this.state);
        });
    }

    renderMagnifyingGlass() {
      if (!this.props.showFilter && !this.props.restaurants[0]) {
        return (
          <div className="loader">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        )
      }

      return (
        <MagnifyingGlass fill="white" className="icon" />
      )
    }
  
    render() {
        const { handleSubmit } = this.props;
        return (
            <form className={ this.props.showFilter ? 'search-test search-test--active' : 'search-test' } onSubmit={ handleSubmit(this.onSubmit) }>
              <div className={ this.props.showFilter ? 'input input--large input--white input--left' : 'input input--white input--left' }>
                <Field
                    className="input__box input__box__text" 
                    // fluid="true"
                    placeholder='&nbsp;'
                    name="searchTerm"
                    type="text"
                    component="input"
                    autoComplete="none"
                />
                  <span className="input__label input__label__text">Restaurant</span>
                  <span className="input__highlight"></span>
              </div>

              <div className={ this.props.showFilter ? 'input input--large input--white input--right' : 'input input--white input--right' }>
                <Field
                    className="input__box input__box__text" 
                    // fluid="true"
                    placeholder='&nbsp;'
                    name="searchLocation"
                    type="text"
                    component="input"
                    autoComplete="none"
                />
                  <span className="input__label input__label__text">Location</span>
                  <span className="input__highlight"></span>
                  
                  <div className="input__btn" onClick={ handleSubmit(this.onSubmit) }>
                    { this.renderMagnifyingGlass() }
                  </div>
              </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
  return {
    restaurants: Object.values(state.restaurants)
  };
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm(
    { form: 'getRestaurants' }
  )
)(SearchBar);