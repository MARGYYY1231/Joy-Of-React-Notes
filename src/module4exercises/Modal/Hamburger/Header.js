import React from 'react';
import { Menu } from 'react-feather';

import useToggle from './use-toggle';
import Drawer from './Drawer';
import styles from './Header.module.css';
import VisuallyHidden from './VisuallyHidden.js';

function Header() {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  return (
    <header>
      <a href="">Kaboom</a>

      <nav role='naviagtion' aria-label='Menu'>
        <button
          aria-expanded={isMenuOpen}
          className={styles.hamburgerBtn}
          onClick={toggleIsMenuOpen}
        >
            {/* Add aria label */}
          <Menu aria-hidden='true' focusable='false'/>
          <VisuallyHidden>Open Menu</VisuallyHidden>
        </button>
        {isMenuOpen && (
          <Drawer handleDismiss={toggleIsMenuOpen}>
            <ul className={styles.navigationList}>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Photographers</a>
              </li>
              <li>
                <a href="">Submit Work</a>
              </li>
            </ul>
          </Drawer>
        )}
      </nav>
    </header>
  );
}

export default Header;