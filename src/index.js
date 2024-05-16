import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createRoot } from 'react-dom/client';
import UserStore from './Store/UserStore'
import DeviceStore from './pages/DeviceStore';
import './styles/reset.css';
import './styles/common.css';


export const Context = createContext(null)
ReactDOM.render(
  <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);