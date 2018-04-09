import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import Routes from './routes';
import Footer from '../footer/footer';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="corpo">
        <div className="body">
          <Navbar/>
        <div class="container">
          <Routes/>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
