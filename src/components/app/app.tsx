import React from 'react';
import { Routes, Route } from 'react-router-dom';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';
import MainPage from '../../pages/main-page/main-page';
import FilmPage from '../../pages/film-page/film-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import FilmOverview from '../film-overview/film-overview';

import Reviews from '../reviews/reviews';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../constants/constants';
import Login from '../../components/login/login';
function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage />
          }
        />
       


        <Route
          path={AppRoute.Login}
          element={<SignInPage /> }
        />

        <Route
          path="/films/:id/"
          element={
            <FilmPage />
          }
        >
          <Route path="overview" element={<FilmOverview /> } />
      
          <Route path="reviews" element={<Reviews /> } />
        </Route>

        <Route
          path="/player/:id"
          element={<PlayerPage />}
        />

        <Route
          path="/films/:id/review"
          element={
            <PrivateRoute>
              <AddReviewPage />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyListPage />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <NotFoundPage />
          }
        />

      </Routes>
    </HistoryRouter>
  );
}

export default App;
