import React from 'react';
import './BlankLayout.scss';

export const BlankLayout: React.FC = ({ children }) => {
  return <div className={'blank-layout'}>{children}</div>;
};
