import React from 'react';

const SigninSubContent = (props) => (
  <div className="sign-in-sub-container">
    <div className="img">
      <div className="img__text m--up">
        <h2 className="img__header">New here?</h2>
        <p className="img__p">Sign up and discover great amount of new opportunities!</p>
      </div>
      <div className="img__text m--in">
        <h2 className="img__header">One of us?</h2>
        <p className="img__p">If you already has an account, just sign in. We've missed you!</p>
      </div>
      <div className="img__button" onClick={ props.signInHandler }>
        <span className="m--up">Sign Up</span>
        <span className="m--in">Sign In</span>
      </div>
    </div>
    {props.children}
  </div>
);

export default SigninSubContent;