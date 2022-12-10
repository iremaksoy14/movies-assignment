export const Settings = {
  NUMBER_OF_GENRES: 9,
  NUMBER_OF_STARS: 10,
  NUMBER_SHOWN_FILMS: 8,
  NUMBER_OF_SIMILAR_FILMS: 4,
  DELAY_OF_PLAYING: 1000,
  DEFOULT_GENRE: 'All genres',
};

export const TIMEOUT_SHOW_ERROR = 5000;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
}

export enum APIRoute {
  Films = '/films',
  PromoFilm = '/promo',
  FavoriteFilms = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum FilmTabs {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const Tabs = ['Overview', 'Reviews'];

export const PASSWORD_REGEXP = /^[0-9a-zA-Z]+$/;

export enum ReviewTextValidation {
  MinLength = 50,
  MaxLength = 400,
}

export enum ServerResponseStatusCode {
  Unauthorized = 401,
  Forbidden = 403,
}

export enum RatingThreshold {
  Bad = 0,
  Normal = 3,
  Good = 5,
  VeryGood = 8,
  Awesome = 10
}

export enum NameSpace {
  Data = 'DATA',
  Ui = 'UI',
  User = 'USER',
}
