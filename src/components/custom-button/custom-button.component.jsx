import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  const buttonClass = `${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`;

  return (
    <button className={buttonClass} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
