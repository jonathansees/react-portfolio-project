import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import Filters from './Filters';
import Modal from '../Sign_In/Modal/Modal';
import Signin from '../Sign_In/Signin';
import Signup from '../Sign_In/Signup';
import SigninSubContent from '../Sign_In/SigninSubContent';

import Yelp from '../../assets/icons/yelp';
import ChevronUp from '../../assets/icons/chevron-up';
import ChevronDown from '../../assets/icons/chevron-down';
import User from '../../assets/icons/user';

class Footer extends Component {
  state = {
    showModal: false,
    showFilter: true
  }

  openSigninModal = () => {
    this.setState({ showModal: true });
  }

  closeSigninModal = () => {
    this.setState({ showModal: false });
  }

  signInHandler = () => {
    this.setState({ signup: this.state.signup ? false : true });
  }

  openFilter = () => {
    this.setState({ showFilter: this.state.showFilter ? false : true });
  }

  render() {
    return (
      <>
      <div className={ this.state.showFilter ? 'footer footer--open' : 'footer' }>
        <div className="search">
          <Yelp className="logo" size="20" />

          <nav 
           
           className="user-nav">
            <span className="user-nav__user-name" onClick={ this.openFilter }>
              {/* <Chevron className={ this.state.showFilter ? 'user-nav__icon flip-up' : 'user-nav__icon flip-down' } /> */}
              <div className="img__btn--test">
                <span className={ this.state.showFilter ? 'm--up--test open' : 'm--up--test' }><ChevronUp />More Filter Options</span>
                <span className={ this.state.showFilter ? 'm--in--test open' : 'm--in--test' }><ChevronDown />Less Filter Options</span>
              </div>
            </span>
            <span className="user-nav__user-name" onClick={this.openSigninModal}>
              {/* <Chevron className={ this.state.showFilter ? 'user-nav__icon flip-up' : 'user-nav__icon flip-down' } /> */}
              <div className="img__btn--test">
                <span className="m--up--test"><User />Sign In</span>
              </div>
            </span>
          </nav>
        </div>
        <SearchBar showFilter={ this.state.showFilter } openFilter={ this.openFilter } className="input input--white input--left" />
        <div className="filter">
          <div className="filter__content">
            {/* <SearchBar showFilter={ this.state.showFilter } openFilter={ this.openFilter }  openFilter={ this.openFilter } className="input input--large input--white input--left"/> */}
            <Filters />
          </div>
        </div>
      </div>
      
      <Modal
      show={this.state.showModal}
      modalClosed={this.closeSigninModal}
    >
      <div className={ this.state.signup ? 'sign-in-container s--signup' : 'sign-in-container' }>
        <Signin />
        <SigninSubContent signInHandler={this.signInHandler}>
          <Signup />
        </SigninSubContent>
      </div>
    </Modal>
    </>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Footer);