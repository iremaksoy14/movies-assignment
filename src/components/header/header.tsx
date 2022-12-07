import React, { PropsWithChildren } from 'react';
import styles from './Header.module.css';
import Logo from '../../components/logo/logo';
import UserNav from '../../components/user-nav/user-nav';

function Header({children}: PropsWithChildren): JSX.Element {
  return (
    <header className={`page-header ${styles.header}`}>
      <Logo />

      {children}

      <UserNav />
    </header>
  );
}

export default Header;
