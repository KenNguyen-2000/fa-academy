import React from 'react';
import { IIcon } from '../interface';

const CalendarToday = ({ style, className, id, fill, onClick }: IIcon) => {
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
      <g clipPath="url(#clip0_21_169)">
        <path
          d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z"
          fill={`${fill || '#285D9A'}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_21_169">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CalendarToday;
