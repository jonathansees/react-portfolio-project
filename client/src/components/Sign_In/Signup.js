import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {
  Message
} from 'semantic-ui-react';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  renderErrorMessage() {
    if (this.props.errorMessage) {
      return (
        <Message color='yellow'>
          {this.props.errorMessage}
        </Message>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="sign-in sign-up-active" onSubmit={ handleSubmit(this.onSubmit) }>
        <h2 className="sign-in__header">Time to feel like home,</h2>
        <div className="input input--white">
          <Field
              className="input__box input__box__text" 
              fluid="true"
              placeholder='&nbsp;'
              name="email"
              type="text"
              component="input"
              autoComplete="none"
          />
            <span className="input__label input__label__text">Email</span>
            <span className="input__highlight"></span>
        </div>
        <div className="input input--white">
          <Field
              className="input__box input__box__text" 
              fluid="true"
              placeholder='&nbsp;'
              name="password"
              type="text"
              component="input"
              autoComplete="none"
          />
            <span className="input__label input__label__text">Password</span>
            <span className="input__highlight"></span>
        </div>
        <div className="input">
          <button type="submit" className="input__box input__box__checkbox input__label input__label__checkbox">Sign In</button>
        </div>
        {/* <button type="submit" className="sign-in__button sign-in__button--submit">Sign Up</button> */}
        { this.renderErrorMessage() }
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm(
    { form: 'signup' }
  )
)(Signup);