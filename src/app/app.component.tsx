import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../home/home.component';
import store from './app.store';

export default function App(): ReactElement {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='w-screen h-screen'>
          <Switch>
            <Redirect exact from='/' to='/home' />
            <Route path='/home' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );

}
