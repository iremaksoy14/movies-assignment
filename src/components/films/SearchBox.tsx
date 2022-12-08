import React, {useState,PropsWithChildren, useEffect} from 'react'
import Film from '../film/film';
import { FilmType } from '../../types/film-type';

import List from './List'
import { fetchFilmAction } from '../../store/api-actions';
type FilmsProps = PropsWithChildren<{
  films: FilmType[],
}>


const SearchBox = ({films, children}: FilmsProps) :JSX.Element => {

  
  const [searchInput, setSearchInput] = useState("");
  const newMovies=[]

 
  const countries = [
 
   { name: "Belgium", continent: "Europe" },
   { name: "India", continent: "Asia" },
   { name: "Bolivia", continent: "South America" },
   { name: "Ghana", continent: "Africa" },
   { name: "Japan", continent: "Asia" },
   { name: "Canada", continent: "North America" },
   { name: "New Zealand", continent: "Australasia" },
   { name: "Italy", continent: "Europe" },
   { name: "South Africa", continent: "Africa" },
   { name: "China", continent: "Asia" },
   { name: "Paraguay", continent: "South America" },
   { name: "Usa", continent: "North America" },
   { name: "France", continent: "Europe" },
   { name: "Botswana", continent: "Africa" },
   { name: "Spain", continent: "Europe" },
   { name: "Senegal", continent: "Africa" },
   { name: "Brazil", continent: "South America" },
   { name: "Denmark", continent: "Europe" },
   { name: "Mexico", continent: "South America" },
   { name: "Australia", continent: "Australasia" },
   { name: "Tanzania", continent: "Africa" },
   { name: "Bangladesh", continent: "Asia" },
   { name: "Portugal", continent: "Europe" },

 
 ];
 

 const calculate=()=>{
 var result= films.map((film: FilmType) => {
       console.log(films)
       if(film.name.toLowerCase().includes(searchInput)){
        return film.name
       }
      
         
   
  })
  console.log(result)
  result.map((item)=>{
    if(item!==undefined){
      
      newMovies.push(item)
    }
  })

 

 }

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   e.preventDefault();
   console.log(e.target.value)
   setSearchInput(e.target.value);
 };
 

 
 return <div style={{display:"flex",flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
 
 <div className="main">
      <h1>React Search</h1>
     
    
    
      

    </div>

 
 </div>
 
 
 };
export default SearchBox;