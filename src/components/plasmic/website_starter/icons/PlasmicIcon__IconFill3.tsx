// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFill3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFill3Icon(props: IconFill3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M26.475 0L15 11.744 3.525 0 0 3.615 15 19 30 3.615 26.475 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconFill3Icon;
/* prettier-ignore-end */
