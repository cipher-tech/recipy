import React from "react";
import "./icon.scss";
export const Icon = ({ icon }) => {
  return (
    <svg className="icon">
      <use href={`/public/icons.svg#icon-${icon}`}></use>
    </svg>
  );
};
