// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.232 6.84c0-1.44-1.322-3.511-3.874-3.511-2.312 0-3.873 1.981-3.873 4.022 0 2.43 1.68 4.172 4.564 4.172h5.465c-1.292 2.011-3.544 3.3-6.126 3.3C3.302 14.822 0 11.49 0 7.41S3.302 0 7.388 0c4.087 0 7.418 3.332 7.418 7.411 0 .81-.149 1.59-.362 2.31H6.186v-.81l2.913-.09c1.472-.06 2.133-.81 2.133-1.98z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
