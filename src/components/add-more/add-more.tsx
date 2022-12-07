import React from 'react';
import { useAppDispatch } from '../../hooks';
import { addMoreFilms } from '../../store/ui-process/ui-process';

function AddMore(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          dispatch(addMoreFilms());
        }}
      >
        Show more
      </button>
    </div>
  );
}

export default AddMore;
