import React from 'react';


import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import SearchBox from '../../components/films/SearchBox';
import { getFilms, getGenres, getFilteredFilms } from '../../store/data-process/selectors';
function MainPage(): JSX.Element {
  
  const films = useAppSelector(getFilms);


  return (
    <div>
      <div className="page-content">
        <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between'}}>
        <h1>MOVIES APP</h1>
        <SearchBox films={films}/>
        </div>
        
        <Catalog />
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
