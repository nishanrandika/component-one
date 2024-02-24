// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector14Icon(props: Vector14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.754 3.12C4.774.96 6.608 0 8.468 0c3.365 0 6.428 2.85 6.428 7.351 0 4.5-3.063 7.352-6.428 7.352-1.864 0-3.694-.96-4.714-3.12-.06-.12-.15-.09-.15.03v8.43H0V.392h3.604v2.701c0 .12.09.15.15.03V3.12zm3.724 8.612c2.103 0 3.933-1.829 3.933-4.38 0-2.553-1.83-4.382-3.933-4.382-2.103 0-3.933 1.83-3.933 4.381 0 2.552 1.863 4.381 3.933 4.381z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector14Icon;
/* prettier-ignore-end */
