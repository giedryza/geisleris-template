import React from 'react';
import Headline from '../headline/headline.component';
import Logo from '../logo/logo.component';
import Nav from '../nav/nav.component';
import Cta from '../cta/cta.component';
import Slogan from '../slogan/slogan.component';
import Slider from '../slider/slider.component';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <Logo />
      <Headline />
      <Cta />
      <Slogan />
    </div>
    <div className="header__right">
      <Nav />
      <Slider />
    </div>
  </header>
);

export default Header;
