import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Sorry, page not found</h2>
      <Link className={css.link} to="/">
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;