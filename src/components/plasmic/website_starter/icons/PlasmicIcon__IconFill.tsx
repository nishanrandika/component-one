// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFillIcon(props: IconFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M0 14h4V0H0v14zM8 0v14h4V0H8z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconFillIcon;
/* prettier-ignore-end */
