// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFill2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFill2Icon(props: IconFill2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M21.18 0L12 9.16 2.82 0 0 2.82l12 12 12-12L21.18 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconFill2Icon;
/* prettier-ignore-end */
