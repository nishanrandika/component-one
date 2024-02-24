// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconGlyphInfo2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconGlyphInfo2Icon(props: IconGlyphInfo2IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm-.667 10v-4h1.334v4H7.333zm0-6.666V6h1.334V4.667H7.333z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconGlyphInfo2Icon;
/* prettier-ignore-end */
