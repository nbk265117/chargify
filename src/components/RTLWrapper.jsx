import React from 'react';
import { useRTL } from '../hooks/useRTL';

const RTLWrapper = ({ children }) => {
  const { isRTL, direction } = useRTL();

  return (
    <div 
      className={`${isRTL ? 'rtl' : 'ltr'} w-full min-h-screen overflow-x-hidden`}
      dir={direction}
      lang={isRTL ? 'ar' : 'auto'}
      style={{ margin: 0, padding: 0, maxWidth: '100vw' }}
    >
      {children}
    </div>
  );
};

export default RTLWrapper;
