// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector28Icon(props: Vector28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.965 8.001C1.697 8.001 0 6.323 0 4.001 0 1.697 1.697 0 3.965 0S7.93 1.679 7.93 4c0 2.323-1.697 4.001-3.965 4.001zm0-7.287C2 .714.839 2.25.839 4.001c0 1.75 1.18 3.286 3.126 3.286 1.965 0 3.126-1.536 3.126-3.286S5.91.714 3.965.714z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector28Icon;
/* prettier-ignore-end */
