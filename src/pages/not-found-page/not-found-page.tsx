import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className="catalog">
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;
