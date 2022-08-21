import * as React from "react";
import { SVGProps } from "react";

export const LessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={3}
    viewBox="0 0 20 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1.64h18"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
