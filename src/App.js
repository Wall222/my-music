import './App.css';
import React, { memo } from 'react'
import { Provider } from 'react-redux'; 
import { renderRoutes } from 'react-router-config'

import routes from '@/router';
import { store } from './store';

import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { BrowserRouter } from 'react-router-dom';
import AppPlayerBar from '@/pages/player/app-player-bar';

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppHeader/>
        {renderRoutes(routes)}
        <AppFooter/>
        <AppPlayerBar/>
      </BrowserRouter>
    </Provider>

  ) 
})
