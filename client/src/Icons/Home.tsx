import React from 'react';
import { IIcon } from '../interface';

const Home = ({ style, className, id, fill, onClick }: IIcon) => {
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
      <g clipPath="url(#clip0_20_228)">
        <path
          d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
          fill={`${fill || '#285D9A'}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_20_228">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Home;
