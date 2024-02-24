// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GlyphIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GlyphIcon(props: GlyphIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
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
          "M5 0C2.24 0 0 2.24 0 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-.5 7.5v-3h1v3h-1zm0-5v1h1v-1h-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GlyphIcon;
/* prettier-ignore-end */
