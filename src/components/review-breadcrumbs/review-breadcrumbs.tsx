import React from 'react';
import { Link, useParams } from 'react-router-dom';

type ReviewBreadcrumbsProps = {
  nameActiveFilm: string,
}

function ReviewBreadcrumbs({nameActiveFilm}: ReviewBreadcrumbsProps): JSX.Element {
  const {id: idActiveFilm} = useParams();
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to={`/films/${idActiveFilm}/overview`}>{nameActiveFilm}</Link>
        </li>
        <li className="breadcrumbs__item">
          <span className="breadcrumbs__link">Add review</span>
        </li>
      </ul>
    </nav>
  );
}

export default ReviewBreadcrumbs;
