import React from 'react';
import './App.css';

import Footer from './componentes/Footer/index'
import Header from './componentes/Header/';
import HomePage from './componentes/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
