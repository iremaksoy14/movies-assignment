import React, { useState, ChangeEvent, FormEvent } from 'react';
import style from './Form-review.module.css';
import { useAppDispatch } from '../../hooks/index';
import RatingStar from '../../components/rating-star/rating-star';
import { Settings, ReviewTextValidation } from '../../constants/constants';
import { sendReview } from '../../store/api-actions';
import { useSelector } from 'react-redux';
import { getPostingReviewStatus, getErrorPostedReviewStatus } from '../../store/data-process/selectors';

type FormReviewProps = {
  idActiveFilm: number,
}

function FormReview({idActiveFilm}: FormReviewProps) {
  const dispatch = useAppDispatch();
  const isReviewPosting = useSelector(getPostingReviewStatus);
  const isErrorReviewPosted = useSelector(getErrorPostedReviewStatus);

  const [formData, setFormData] = useState({
    idActiveFilm: idActiveFilm,
    rating: 0,
    comment: '',
    isDisabled: false,
  });

  const isSubmitBtnDisabled = !(formData.rating !== 0
  && formData.comment !== null
  && formData.comment.length >= ReviewTextValidation.MinLength
  && formData.comment.length <= ReviewTextValidation.MaxLength);

  function onFieldChange(evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ) {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  }

  const values = [...Array(Settings.NUMBER_OF_STARS).keys()].map((value) => (value += 1)).reverse();
  const ratingStars = values.map((value: number) => (
    <RatingStar
      key={`star-${value}`}
      value={value}
      onFieldChange={onFieldChange}
      rating={formData.rating}
      disabled={formData.isDisabled}
    />
  ));

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isSubmitBtnDisabled) {
      return;
    }

    if (isReviewPosting) {
      setFormData({...formData, isDisabled: true});
    }

    dispatch(sendReview(formData));
    setFormData({...formData, rating: 0, comment: '', isDisabled: false});
  };

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={handleSubmitForm}
    >
      <div className="rating">
        <div className="rating__stars" >
          {ratingStars}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className={`add-review__textarea ${style.textarea}`}
          name="comment"
          id="review-text"
          placeholder="Review text"
          minLength={ReviewTextValidation.MinLength}
          maxLength={ReviewTextValidation.MaxLength}
          value={formData.comment}
          onChange={onFieldChange}
          disabled={formData.isDisabled}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className={`add-review__btn ${style.buttonDisabled}`}
            type="submit"
            disabled={isSubmitBtnDisabled || formData.isDisabled}
          >
            Post
          </button>
        </div>
      </div>

      {isErrorReviewPosted && <p className={style.errorMessage}>Review sending error. Please try again later.</p>}

    </form>
  );
}

export default FormReview;
