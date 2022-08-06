import * as React from "react";
import { SVGProps } from "react";

export const ChevronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={10}
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1 1.5 7 7 7-7"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
