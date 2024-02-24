// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconGlyphInfoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconGlyphInfoIcon(props: IconGlyphInfoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5zm-.75 11.25v-4.5h1.5v4.5h-1.5zm0-7.5v1.5h1.5v-1.5h-1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconGlyphInfoIcon;
/* prettier-ignore-end */
