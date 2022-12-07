import React from 'react';
import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import FormReview from '../../components/form-review/form-review';
import ReviewBreadcrumbs from '../../components/review-breadcrumbs/review-breadcrumbs';
import { getFilm } from '../../store/data-process/selectors';

function AddReviewPage(): JSX.Element {
  const {id, name, posterImage, previewImage} = useAppSelector(getFilm);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={previewImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <ReviewBreadcrumbs nameActiveFilm={name}/>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <FormReview idActiveFilm={id}/>
      </div>
    </section>
  );
}

export default AddReviewPage;
