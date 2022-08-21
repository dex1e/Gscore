import * as React from "react";
import { SVGProps } from "react";

export const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.46 1.54 1 10l8.46 8.46M1 10h18"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
