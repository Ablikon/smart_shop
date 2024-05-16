import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createRoot } from 'react-dom/client';
import UserStore from './store/UserStore'
import DevicePage from './pages/DevicePage';
import './styles/reset.css';
import './styles/common.css';


export const Context = createContext(null)
ReactDOM.render(
  <Context.Provider value={{
      user: new UserStore(),
      device: new DevicePage(),
    }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);