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
            console.log(this.state);
            this.props.getRestaurants(this.state);
        });
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
                    <MagnifyingGlass fill="white" className="icon" />
                    {/* <div className="loader">
                      <div className="dot1"></div>
                      <div className="dot2"></div>
                    </div> */}
                  </div>
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
)(SearchBar);