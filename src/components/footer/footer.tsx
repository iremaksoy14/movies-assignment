import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';

function Footer(): JSX.Element {
  const {pathname} = useLocation();

  useEffect(() => {
    pathname === AppRoute.Root && window.scrollTo(0, 0);
  });

  return (
    <footer className="page-footer">
      <div className="logo">
        <Link className="logo__link logo__link--light" to={AppRoute.Root}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
