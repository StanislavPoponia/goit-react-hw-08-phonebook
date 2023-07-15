import { useSelector } from 'react-redux';

import { getUserName } from 'redux/selectors';
import { useLogOutMutation } from 'redux/userApi';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(getUserName);

  const [logOut] = useLogOutMutation();

  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        Welcome, <span>{name}</span>!
      </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => logOut()}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;