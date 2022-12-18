import React from "react";
import "./skeleton.scss";

export const Skeleton = () => {
  return (
    <article className="skeleton">
      <div className="image"></div>
      <div className="content">
        <span className='skeleton-span'></span>
        <span className='skeleton-span'></span>
      </div>
    </article>
  );
};
