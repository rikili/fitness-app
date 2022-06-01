import React from 'react';

import useStyles from './Button.style';

type PropTypes = {
  children: any,
  onClick?: any,
  className?: string,
};

function Button(props: PropTypes) {
  const { children, onClick, className } = props;
  const styles = useStyles();

  const buttonStyle: string = !className
    ? styles.default
    : `${styles.base} ${className}`;

  return (
    <button
      type="button"
      className={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: null,
  onClick: null,
};

export default Button;
