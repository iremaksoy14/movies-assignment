import { RatingThreshold } from '../constants/constants';

export function translateRating(rating: number) {
  if (rating >= RatingThreshold.Bad && rating < RatingThreshold.Normal ) {
    return 'Bad';
  }

  if (rating >= RatingThreshold.Normal && rating < RatingThreshold.Good ) {
    return 'Normal';
  }

  if (rating >= RatingThreshold.Good && rating < RatingThreshold.VeryGood ) {
    return 'Good';
  }

  if (rating >= RatingThreshold.VeryGood && rating < RatingThreshold.Awesome ) {
    return 'Very good';
  }

  if (rating === RatingThreshold.Awesome ) {
    return 'Awesome';
  }

  return '';
}
