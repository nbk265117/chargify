import React from 'react'

const LogoText = ({ children, className = "", logoHeight = "1.2em", logoWidth = "auto" }) => {
  const renderTextWithLogo = (text) => {
    if (typeof text !== 'string') return text;
    
    // Split the text by "1xbet" and "شَرجِفاي" (case insensitive for 1xbet)
    const parts = text.split(/(1xbet|شَرجِفاي)/i);
    
    return parts.map((part, index) => {
      if (part.toLowerCase() === '1xbet') {
        return (
          <img
            key={index}
            src="/logo/1xbet.webp"
            alt="1xbet"
            className="inline-block align-middle"
            style={{
              height: logoHeight,
              width: logoWidth,
              verticalAlign: 'middle'
            }}
          />
        );
      }
      if (part === 'شَرجِفاي') {
        return (
          <span key={index} className="inline-flex items-center">
            <img
              src="/logo/logo.png"
              alt="شَرجِفاي"
              className="inline-block align-middle mr-1"
              style={{
                height: logoHeight,
                width: logoWidth,
                verticalAlign: 'middle'
              }}
            />
            <span>شَرجِفاي</span>
          </span>
        );
      }
      return part;
    });
  };

  return (
    <span className={className}>
      {renderTextWithLogo(children)}
    </span>
  );
};

export default LogoText;
