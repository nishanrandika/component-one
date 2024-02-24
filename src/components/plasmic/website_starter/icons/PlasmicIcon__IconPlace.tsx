// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPlaceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPlaceIcon(props: IconPlaceIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5 9c0-3.87 3.13-7 7-7s7 3.13 7 7c0 5.25-7 13-7 13S5 14.25 5 9zm4.5 0a2.5 2.5 0 005 0 2.5 2.5 0 00-5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPlaceIcon;
/* prettier-ignore-end */
