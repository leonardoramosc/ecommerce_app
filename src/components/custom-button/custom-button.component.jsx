import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleBtn, inverted, ...otherProps}) => (
  <button 
    className={`${inverted ? 'inverted' : ''} ${isGoogleBtn ? 'google-btn' : ''} custom-button`} 
    {...otherProps}
  >

    {children}

  </button>
)

export default CustomButton;