import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchFilmsAction, fetchPromoFilmAction, fetchFavoriteFilmsAction } from './store/api-actions';
import {AuthProvider} from './provider/AuthProvider';
import "bootstrap/dist/css/bootstrap.min.css";

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());
store.dispatch(fetchFavoriteFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(

<React.StrictMode>
<AuthProvider>
    <Provider store={store}>
    
      <ErrorMessage />
      
      <App />
    </Provider>
    </AuthProvider>
  </React.StrictMode>

  
);
