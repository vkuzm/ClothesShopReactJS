import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  const buttonClass = `${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`;

  return (
    <button className={buttonClass} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
