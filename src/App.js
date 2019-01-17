import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Maincontent />
        <Footer />
      </div>
    );
  }
}

export default App;
