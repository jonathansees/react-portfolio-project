import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import {
  Message
} from 'semantic-ui-react';

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
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
      <form className="sign-in sign-in-active" onSubmit={ handleSubmit(this.onSubmit) }>
        <h2 className="sign-in__header">Welcome back,</h2>
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

        {/* <label className="sign-in__label">
          <Field
            className="sign-in__input"
            placeholder="Password"
            fluid="true"
            icon='lock'
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </label> */}
        <div className="input">
          <button type="submit" className="input__box input__box__checkbox input__label input__label__checkbox">Sign In</button>
        </div>
        
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
    { form: 'signin' }
  )
)(Signin);