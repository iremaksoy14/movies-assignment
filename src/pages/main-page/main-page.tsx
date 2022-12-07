import React from 'react';


import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';

function MainPage(): JSX.Element {


  return (
    <div>
      <div className="page-content">
        <h1>MOVIES APP</h1>
        <Catalog />
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
