import * as React from "react";
import { SVGProps } from "react";

export const MarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={22}
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.233 9.747c0 6.455-6.611 10.432-7.985 11.189a.514.514 0 0 1-.497 0c-1.375-.757-7.984-4.734-7.984-11.189C1.767 4.602 4.855 1 10 1c5.146 0 8.233 3.602 8.233 8.747Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.884 9.233a4.116 4.116 0 1 0 8.233 0 4.116 4.116 0 0 0-8.233 0v0Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
