import React, {useState,PropsWithChildren} from 'react'
import Film from '../film/film';
import { FilmType } from '../../types/film-type';
type FilmsProps = PropsWithChildren<{
  films: FilmType[],
}>


const SearchBox = ({films, children}: FilmsProps) :JSX.Element => {

  
  const [searchInput, setSearchInput] = useState("");


 return <div style={{display:"flex",flexDirection:"row",justifyContent:'center',alignItems:"center"}}><div className="main"></div></div>};
export default SearchBox;