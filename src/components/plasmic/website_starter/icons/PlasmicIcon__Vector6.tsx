// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
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
          "M11.232 6.84c0-1.44-1.322-3.511-3.874-3.511-2.312 0-3.873 1.981-3.873 4.022 0 2.43 1.68 4.172 4.564 4.172h5.465c-1.292 2.011-3.544 3.3-6.126 3.3C3.305 14.822 0 11.49 0 7.41S3.305 0 7.388 0s7.418 3.332 7.418 7.411c0 .81-.149 1.59-.358 2.31H6.189v-.81l2.913-.09c1.472-.06 2.133-.81 2.133-1.98h-.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
