import { FilmType } from '../types/film-type';
import { Settings} from '../constants/constants';

function getGenresList(filmsList: FilmType[]) {
  const genres = [...new Set(filmsList.map((film: FilmType) => film.genre))].slice(0, Settings.NUMBER_OF_GENRES);
  genres.splice(0, 0, 'All genres');
  return genres;
}

export default getGenresList;
