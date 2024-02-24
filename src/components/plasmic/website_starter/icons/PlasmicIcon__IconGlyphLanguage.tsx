// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconGlyphLanguageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconGlyphLanguageIcon(props: IconGlyphLanguageIconProps) {
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
          "M8.992 1.5C4.853 1.5 1.5 4.86 1.5 9c0 4.14 3.353 7.5 7.492 7.5 4.148 0 7.508-3.36 7.508-7.5 0-4.14-3.36-7.5-7.508-7.5zM14.19 6h-2.213a11.737 11.737 0 00-1.034-2.67A6.022 6.022 0 0114.19 6zM9 3.03c.623.9 1.11 1.898 1.432 2.97H7.567C7.89 4.928 8.377 3.93 9 3.03zM3.195 10.5a6.127 6.127 0 010-3H5.73a12.337 12.337 0 000 3H3.195zM3.81 12h2.212c.24.938.585 1.838 1.035 2.67A5.99 5.99 0 013.81 12zm2.212-6H3.81a5.99 5.99 0 013.248-2.67c-.45.832-.795 1.732-1.035 2.67zM9 14.97c-.623-.9-1.11-1.898-1.433-2.97h2.865A10.565 10.565 0 019 14.97zm1.755-4.47h-3.51c-.138-1.01-.14-1.99 0-3h3.51c.14 1.01.138 1.99 0 3zm.188 4.17A11.67 11.67 0 0011.977 12h2.213a6.022 6.022 0 01-3.247 2.67zm1.327-4.17a12.34 12.34 0 000-3h2.535a6.127 6.127 0 010 3H12.27z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconGlyphLanguageIcon;
/* prettier-ignore-end */
