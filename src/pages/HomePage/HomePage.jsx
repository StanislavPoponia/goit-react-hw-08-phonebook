import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import css from './HomePage.module.css';

const HomePage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={css.wrapper}>
      <h1>PhoneBook</h1>
      {!isLoggedIn && (
        <>
          <p className={css.text}>
           Account
            <span className={css.text_span}>
              <Link to="/login" className={css.btn}>
                Log In
              </Link>
            </span>
          </p>
          <p className={css.text}>
            New account
            <span className={css.text_span}>
              <Link to="/register" className={css.btn}>
                Sign In
              </Link>
            </span>
          </p>
        </>
      )}
    </div>
  );
};
export default HomePage;