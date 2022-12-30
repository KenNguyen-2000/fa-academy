import React from "react";
import { IIcon } from "../interface";

const Folder = ({
  style,
  className,
  id,
  fill,
  onClick,
}: IIcon): JSX.Element => {
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
      <g clipPath="url(#clip0_19_137)">
        <path
          d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM17.5 12.12V15.5H14.5V10.5H15.88L17.5 12.12ZM13 9V17H19V11.5L16.5 9H13Z"
          fill={`${fill || "#285D9A"}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_19_137">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Folder;