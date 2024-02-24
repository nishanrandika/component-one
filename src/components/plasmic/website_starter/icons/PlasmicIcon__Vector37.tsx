// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector37Icon(props: Vector37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.948 6.412c-.554.66-1.286.875-1.983.875C2 7.287.839 5.751.839 4.001S2.02.714 3.965.714c.804 0 1.625.5 1.947.983.107-.286.232-.554.375-.822C5.644.268 4.769 0 3.965 0 1.697 0 0 1.679 0 4c0 2.305 1.697 4.001 3.965 4.001.947 0 1.768-.339 2.34-.839a7.08 7.08 0 01-.357-.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector37Icon;
/* prettier-ignore-end */
