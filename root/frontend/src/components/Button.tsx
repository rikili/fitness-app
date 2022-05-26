import React from 'react';

import useStyles from './Button.style';

interface PropTypes {
  children: any,
  onClick?: any,
  className?: string,
}

const defaultProps = {
  className: null,
  onClick: null,
};

function Button(props: PropTypes) {
  const { children, onClick } = props;
  let { className } = props;
  if (!className) className = useStyles().Button;
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = defaultProps;

export default Button;
