import React from 'react';
import style from './Review.module.css';

type ReviewProps = {
  comment: string,
  rating: number,
  name: string,
}

function Review({comment, rating, name}: ReviewProps): JSX.Element {
  return (
    <div className={`review ${style.review}`}>
      <blockquote className="review__quote">
        <p className={`review__text ${style.text}`}>{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
