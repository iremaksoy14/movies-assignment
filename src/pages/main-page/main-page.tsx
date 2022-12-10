import React,{useEffect} from 'react';


import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import SearchBox from '../../components/films/SearchBox';
import axios from 'axios';
import { getFilms, getGenres, getFilteredFilms } from '../../store/data-process/selectors';
import { getFilmsData } from '../../store/data-process/data-process';
function MainPage(): JSX.Element {
  
  const films = useAppSelector(getFilms);
  const dispatch = useAppDispatch();

  
useEffect(()=>{

  const config = {
    method: 'get',
    url: 'https://www.omdbapi.com/?apikey=b1916020&s=blade&page=2',
    headers: { }
  };

  
  axios(config)
  .then(function (response) {
    console.log(response.data.Search);
    for ( var i = 0; i < response.data.Search.length; i++) {
       response.data.Search[i].id=i+1
    } 
    dispatch(getFilmsData(response.data.Search));
  })
  .catch(function (error) {
    console.log(error);
  });
  
},[])
  return (
    <div>
      <div className="page-content">
        <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between'}}>
        <h1>  Q&Q MOVIES APP</h1>
        <SearchBox films={films}/>
        </div>
        
        <Catalog />
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
