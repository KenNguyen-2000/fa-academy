import React from "react";
import { IIcon } from "../interface";

const NaviOpen = ({ style, className, id, fill, onClick }: IIcon) => {
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
      <g clipPath="url(#clip0_476_15534)">
        <path
          d="M15.5617 7.62338L14.5 6.56169L8.56169 12.5L14.5 18.4383L15.5617 17.3766L10.6851 12.5L15.5617 7.62338Z"
          fill={`${fill || "#285D9A"}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_476_15534">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(24) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NaviOpen;
