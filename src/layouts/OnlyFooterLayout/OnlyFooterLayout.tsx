import React from 'react';
import './OnlyFooterLayout.scss';

export const OnlyFooterLayout: React.FC<IOnlyFooterLayout> = ({ footer, children }) => {
  return (
    <div className="only-footer">
      <div className="only-footer__center">{children}</div>
      <div className="only-footer__footer">
        <div className="only-footer__container">{footer}</div>
      </div>
    </div>
  );
};
