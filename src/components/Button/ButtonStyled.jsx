import css from './button-styled.module.css';
import PropTypes from 'prop-types';

const ButtonStyled = ({ children, disabled, isLoading, ...rest }) => {
  return (
    <button className={css.btn} disabled={disabled} {...rest} type="submit">
      {children}
    </button>
  );
};

ButtonStyled.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default ButtonStyled;