import { useRTL } from '../hooks/useRTL';

export const useRTLClasses = () => {
  const { isRTL } = useRTL();

  const rtlClasses = {
    // Classes pour les marges
    marginLeft: isRTL ? 'mr' : 'ml',
    marginRight: isRTL ? 'ml' : 'mr',
    
    // Classes pour les paddings
    paddingLeft: isRTL ? 'pr' : 'pl',
    paddingRight: isRTL ? 'pl' : 'pr',
    
    // Classes pour l'alignement
    textAlign: isRTL ? 'text-right' : 'text-left',
    
    // Classes pour les flexbox
    flexDirection: isRTL ? 'flex-row-reverse' : 'flex-row',
    
    // Classes pour les positions
    positionLeft: isRTL ? 'right' : 'left',
    positionRight: isRTL ? 'left' : 'right',
    
    // Classes pour les bordures
    borderLeft: isRTL ? 'border-r' : 'border-l',
    borderRight: isRTL ? 'border-l' : 'border-r',
  };

  return rtlClasses;
};

export const getRTLClass = (ltrClass, rtlClass) => {
  const { isRTL } = useRTL();
  return isRTL ? rtlClass : ltrClass;
};

export const getRTLValue = (ltrValue, rtlValue) => {
  const { isRTL } = useRTL();
  return isRTL ? rtlValue : ltrValue;
};
