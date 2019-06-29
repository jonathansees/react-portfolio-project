//// HEADER ////
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from './Modal/Modal';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import SigninSubContent from './SigninSubContent';

import User from '../assets/icons/user';

class Header extends Component {
  state = {
    showModal: false,
    signup: false
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

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <button as={ Link } to="/signout">Sign Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.openSigninModal}>Sign In</button>
        </div>
      );
    }
  }

  render() {
    return (
      <>
        <header
          style = {{height: '8vh'}}
          className="header">
          <div />

          <nav className="user-nav">
            <div className="user-nav__user-name" onClick={ this.openSigninModal }>
              <User className="user-nav__icon" /><span>Jonathan</span>
            </div>
          </nav>
        </header>

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

export default connect(mapStateToProps)(Header);