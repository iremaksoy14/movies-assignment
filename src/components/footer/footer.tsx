import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';
import './footers.css'
function Footer(): JSX.Element {
  const {pathname} = useLocation();

  useEffect(() => {
    pathname === AppRoute.Root && window.scrollTo(0, 0);
  });

  return (
    <footer className="page-footer">
      <div className="logo footer_text">
        <p>Q&Q MOVIES APP</p>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
