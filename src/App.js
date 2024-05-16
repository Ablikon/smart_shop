import React from 'react';
import Header from "./components/header/Header";
import AppRouter from "./components/AppRouter"
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
