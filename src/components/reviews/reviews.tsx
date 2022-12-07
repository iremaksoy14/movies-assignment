import React from 'react';
import { useAppSelector } from '../../hooks';
import Review from '../review/review';
import { ReviewType } from '../../types/review-type';
import style from './Reviews.module.css';
import { getReviews } from '../../store/data-process/selectors';

function renderReview({comment, rating, user: {name}, id}: ReviewType): JSX.Element {
  return (
    <Review
      comment={comment}
      rating={rating}
      name={name}
      key={id}
    />
  );
}

function Reviews(): JSX.Element {
  const reviews = useAppSelector(getReviews);
  const reviewItems = reviews.map((review: ReviewType) => renderReview(review));

  return (
    <div className="film-card__reviews film-card__row">
      <div className={style.reviewsWrap}>

        {reviews.length === 0
          ? (<div className={style.noReviews}>This film has no reviews yet...</div>)
          : reviewItems}

      </div>
    </div>
  );
}

export default Reviews;
