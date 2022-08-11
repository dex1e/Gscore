import * as React from "react";
import { SVGProps } from "react";

export const SettingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 13.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
      stroke="#969696"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.422 6.305c.188.269.352.554.492.851l2.023 1.125a7.968 7.968 0 0 1 .008 3.438l-2.031 1.125a5.75 5.75 0 0 1-.492.851l.039 2.32a8.125 8.125 0 0 1-2.977 1.727l-1.992-1.195a6.91 6.91 0 0 1-.984 0l-1.985 1.187a8.015 8.015 0 0 1-2.984-1.718l.039-2.313a6.258 6.258 0 0 1-.492-.86L2.062 11.72a7.968 7.968 0 0 1-.007-3.438l2.03-1.125a5.75 5.75 0 0 1 .493-.851l-.04-2.32a8.125 8.125 0 0 1 2.977-1.727l1.993 1.195c.327-.023.656-.023.984 0l1.984-1.187a8.015 8.015 0 0 1 2.985 1.718l-.04 2.32Z"
      stroke="#969696"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
