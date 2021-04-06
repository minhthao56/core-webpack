import React from 'react';
import './HeaderFooterLayout.scss';

export const HeaderFooterLayout: React.FC<IHeaderFooterLayout> = ({ header, children, footer }) => {
  return (
    <div className="header-footer">
      <div className="header-footer__header">
        <div className="header-footer__container">{header} </div>
      </div>
      <div className="header-footer__center">{children}</div>
      <div className="header-footer__footer">
        <div className="header-footer__container">{footer}</div>
      </div>
    </div>
  );
};
