import * as React from "react";
import { SVGProps } from "react";

export const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={20}
    viewBox="0 0 12 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m10.5 1-9 9 9 9"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
