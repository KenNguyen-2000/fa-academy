import React from "react";
import { IIcon } from "../interface";

const NaviCollapse = ({ style, className, id, fill, onClick }: IIcon) => {
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
      <g clipPath="url(#clip0_476_13269)">
        <path
          d="M7.18509 9L6.12339 10.0617L12.0617 16L18 10.0617L16.9383 9L12.0617 13.8766L7.18509 9Z"
          fill={`${fill || "#285D9A"}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_476_13269">
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

export default NaviCollapse;
