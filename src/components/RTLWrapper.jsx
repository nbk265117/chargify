import React from 'react';
import { useRTL } from '../hooks/useRTL';

const RTLWrapper = ({ children }) => {
  const { isRTL, direction } = useRTL();

  return (
    <div 
      className={`${isRTL ? 'rtl' : 'ltr'}`}
      dir={direction}
      lang={isRTL ? 'ar' : 'auto'}
    >
      {children}
    </div>
  );
};

export default RTLWrapper;
