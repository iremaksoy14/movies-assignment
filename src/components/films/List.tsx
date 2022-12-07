import {PropsWithChildren } from 'react'

import { FilmType } from '../../types/film-type';

interface SearchBox {
    temp: string;
    
  }
type FilmsProps = PropsWithChildren<{
    films: FilmType[],
  }>
   
function List(props:SearchBox): JSX.Element {
    //create a new array by filtering the original array
    // const filteredData = films.filter((el) => {
    //     //if no input the return the original
    //     if (input === '') {
    //         return el;
    //     }
    //     //return the item which contains the user input
    //     else {
    //         return el.name.toLowerCase().includes(input)
    //     }
    // })
    return (
        <ul>
            <p>{props.temp}</p>
            <p>burası</p>
            {/* {filteredData.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))} */}
        </ul>
    )
}

export default List