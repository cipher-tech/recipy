import React from 'react';
import './icon.scss';
export const Icon = ({ iconName }) => {
      return (
            <svg className="icon">
                  {/* <use href={`/public/icons.svg#icon-${icon}`}></use> */}
                  <use href={`/public/svg/icons.svg#icon-${iconName}`} />
            </svg>
      );
};
