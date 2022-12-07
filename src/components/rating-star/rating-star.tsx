import React, { ChangeEvent } from 'react';

type RatingStarProps = {
  value: number,
  onFieldChange: (evt: ChangeEvent<HTMLInputElement>) => void,
  rating: number,
  disabled: boolean,
}

function RatingStar({value, onFieldChange, rating, disabled}: RatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        type="radio"
        name="rating"
        id={`star-${value}`}
        value={value}
        onChange={onFieldChange}
        checked={rating >= value && undefined}
        disabled={disabled}
      />
      <label
        className="rating__label"
        htmlFor={`star-${value}`}
      >
        Rating {value}
      </label>
    </>
  );
}

export default RatingStar;
