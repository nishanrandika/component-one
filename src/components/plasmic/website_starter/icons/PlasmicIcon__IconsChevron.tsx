// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsChevronIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsChevronIcon(props: IconsChevronIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M6.333 4.94l.94-.94 4 4-4 4-.94-.94L9.387 8 6.333 4.94z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsChevronIcon;
/* prettier-ignore-end */
