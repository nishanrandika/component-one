// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector25Icon(props: Vector25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.681 5.664s1.554-.732 2.019-1.732c0 0-.643-.768-1.894-1.661 0 0-5.126-3.876-12.252-1.5a.389.389 0 00-.143.089C2.125 1.11 1.161 1.914 0 3.664c0 0 6.073-2.536 10.734-1.715.018 0 .018.018 0 .036a2.351 2.351 0 00-.875 1.911 2.271 2.271 0 002.161 2.179 2.295 2.295 0 002.43-2.197c0-.018.035-.036.035-.018.143.215.393.893.196 1.804z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector25Icon;
/* prettier-ignore-end */
