// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector12Icon(props: Vector12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.448 0c4.056 0 7.388 3.332 7.388 7.411s-3.335 7.411-7.388 7.411S0 11.493 0 7.411C0 3.329 3.335 0 7.448 0zm-.03 3.272c-2.162 0-3.933 1.8-3.933 4.142 0 2.343 1.77 4.142 3.933 4.142s3.933-1.799 3.933-4.142c0-2.343-1.77-4.142-3.933-4.142z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
