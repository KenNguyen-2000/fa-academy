import React from 'react';
import { IIcon } from '../interface';

const MenuCollapse = ({ style, className, id, fill, onClick }: IIcon) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      id={id}
      onClick={onClick}
    >
      <g clipPath="url(#clip0_475_7386)">
        <path
          d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
          fill={`${fill || '#285D9A'}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_475_7386">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MenuCollapse;
