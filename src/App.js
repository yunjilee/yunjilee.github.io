import React, { Component } from 'react';
import LandingPage from './js/pages/LandingPage/LandingPage.js';
import AboutPage from './js/pages/AboutPage/AboutPage.js';
import PortfolioPage from './js/pages/PortfolioPage/PortfolioPage.js';
import ParallaxBackground from './js/components/ParallaxBackground/ParallaxBackground.js';

class App extends Component {
  render() {
    return (
      <div className="App">
				<ParallaxBackground />
				<LandingPage />
				<AboutPage />
				<PortfolioPage />
      </div>
    );
  }
}

export default App;
