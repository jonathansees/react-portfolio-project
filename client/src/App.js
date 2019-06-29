import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import Footer from './components/Footer/Footer';
import RestaurantResults from './pages/RestaurantResults';

import "./styles/App.scss";

export default ({ children }) => {
  const store = createStore(
    reducers,
    {
      auth: { authenticated: localStorage.getItem('token') }
    },
    applyMiddleware(reduxThunk)
  );

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            {/* <Header /> */}
            <div className="content">
              <Switch>
                <Route path="/" component={ RestaurantResults } />
              </Switch>
            </div>
            <Footer />
          </Fragment>
        </BrowserRouter>
      </Provider>
    </div>
  );
};