// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame1073716914IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame1073716914Icon(props: Frame1073716914IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"20"}
        cy={"20"}
        r={"19.25"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></circle>

      <path
        d={
          "M15.861 16.992h-3.689v5.607h3.69l4.27 4.322V12.67l-4.27 4.322zm5.651-4.818v1.958a5.828 5.828 0 014.409 5.657 5.828 5.828 0 01-4.41 5.657v1.958a7.75 7.75 0 006.317-7.615c0-3.789-2.728-6.967-6.316-7.615z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M24.013 19.789a3.904 3.904 0 01-2.501 3.661v-7.322a3.917 3.917 0 012.501 3.66z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame1073716914Icon;
/* prettier-ignore-end */
