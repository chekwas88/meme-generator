import React, { Component } from 'react';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
        <Footer />
      </div>
    );
  }
}

export default App;
