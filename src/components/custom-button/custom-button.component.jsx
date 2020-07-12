import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleBtn, ...otherProps}) => (
  <button 
    className={`${isGoogleBtn ? 'google-btn' : ''} custom-button`} 
    {...otherProps}
  >

    {children}

  </button>
)

export default CustomButton;