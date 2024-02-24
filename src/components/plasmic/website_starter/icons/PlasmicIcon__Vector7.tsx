// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
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
          "M11.142 17.225c-1.02 2.16-2.853 3.12-4.714 3.12C3.063 20.345 0 17.494 0 12.993c0-4.5 3.063-7.35 6.428-7.35 1.864 0 3.694.958 4.714 3.119.06.12.15.09.15-.03V0h3.604v19.953h-3.604v-2.701c0-.12-.09-.15-.15-.03v.003zM7.418 8.612c-2.103 0-3.933 1.832-3.933 4.381 0 2.55 1.83 4.381 3.933 4.381 2.103 0 3.933-1.828 3.933-4.38 0-2.553-1.863-4.382-3.933-4.382z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
