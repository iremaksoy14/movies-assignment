import React, { useState, useEffect, useRef } from 'react';
import { useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import { getFilm } from '../../store/data-process/selectors';

function PlayerPage(): JSX.Element {
  const activeFilm = useAppSelector(getFilm);
  const {previewVideoLink, previewImage, id} = activeFilm;

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    videoRef.current.play();
    videoRef.current.defaultPlaybackRate = 1.0;
    videoRef.current.controls = true;

  }, [id]);

  return (
    <div className="player">
      {isLoading && <Spinner /> }

      <video
        className="player__video"
        poster={previewImage}
        src={previewVideoLink}
        ref={videoRef}
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={() => navigate(-1)}
      >
        Exit
      </button>
    </div>
  );
}

export default PlayerPage;
