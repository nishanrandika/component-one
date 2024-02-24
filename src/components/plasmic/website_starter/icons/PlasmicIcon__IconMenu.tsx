// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconMenuIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconMenuIcon(props: IconMenuIconProps) {
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
        d={"M3 8V6h18v2H3zm0 5h18v-2H3v2zm0 5h18v-2H3v2z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconMenuIcon;
/* prettier-ignore-end */
