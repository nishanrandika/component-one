// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector9Icon(props: Vector9IconProps) {
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
          "M11.142 11.583c-1.02 2.16-2.853 3.12-4.714 3.12C3.063 14.703 0 11.852 0 7.35 0 2.851 3.063 0 6.428 0c1.864 0 3.694.96 4.714 3.12.06.12.15.09.15-.03V.388h3.604v13.923h-3.604v-2.702c0-.12-.09-.149-.15-.03v.004zM7.418 2.97c-2.103 0-3.933 1.832-3.933 4.381 0 2.55 1.83 4.381 3.933 4.381 2.103 0 3.933-1.829 3.933-4.38 0-2.553-1.86-4.382-3.933-4.382z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
