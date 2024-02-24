// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector16Icon(props: Vector16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.709 9.586V1.133A1.13 1.13 0 0010.576 0H2.123a.49.49 0 00-.38.17L.058 1.87c-.124.125-.038.311.148.311H7.85L3.11 6.923a.393.393 0 00-.124.31v1.25c0 .148.1.249.248.249h1.25c.147 0 .232-.039.31-.124l4.742-4.743v7.646c0 .186.187.271.31.147l1.7-1.692a.506.506 0 00.164-.38z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector16Icon;
/* prettier-ignore-end */
