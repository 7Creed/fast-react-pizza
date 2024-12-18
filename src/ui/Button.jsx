// import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  // const className = "bg-yellow-400 inline-block text-stone-800 py-3 px-4 uppercase tracking-wide font-semibold rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  const base =
    'bg-yellow-400 inline-block text-sm text-stone-800 uppercase tracking-wide font-semibold rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' py-3 px-4 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-2 md:px-3.5 md:py-2 text-sm',
    secondary:
      'border-2 border-stone-300 inline-block text-sm text-stone-400 uppercase tracking-wide font-semibold rounded-full hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed py-2 px-4 md:px-6 md:py-3.5',
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
