import React from 'react';
import Header from '../header/header.component';
import Stats from '../stats/stats.component';

const Layout = () => (
  <div className="layout">
    <div className="layout__container container">
      <Header />
      <Stats />
    </div>
  </div>
);

export default Layout;
