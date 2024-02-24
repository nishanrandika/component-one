// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconGlyphExpandMoreIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconGlyphExpandMoreIcon(props: IconGlyphExpandMoreIconProps) {
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
        d={
          "M12.443 6.442L9 9.877 5.558 6.442 4.5 7.5 9 12l4.5-4.5-1.057-1.058z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconGlyphExpandMoreIcon;
/* prettier-ignore-end */
