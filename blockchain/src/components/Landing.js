import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import Chest from '../partials/Chest'
// import FeaturesHome from '../partials/Features';

// import Footer from '../partials/Footer';

function Landing() {
  return (
    <div className="Landing">
      <Header />
      <HeroHome />
      <Chest />
    </div>
  );
}

export default Landing;