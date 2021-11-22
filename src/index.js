import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import NavMenu from './components/NavMenu'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <NavMenu />
  </BrowserRouter>,
  document.getElementById('root')
);