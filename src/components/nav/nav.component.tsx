import React from 'react';

const links = ['About', 'Maratonas', 'Sėdmaišiai', 'Contacts'];

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      {links.map(link => (
        <li className="nav__link-item" key={link}>
          <a href="/" className="nav__link">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
