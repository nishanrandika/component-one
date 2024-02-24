// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector10Icon(props: Vector10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.172 11.493c0-.12-.09-.15-.15-.03-1.02 2.16-2.823 3.12-4.654 3.12C3.033 14.583 0 11.763 0 7.292S3.033 0 6.368 0c1.83 0 3.635.96 4.655 3.12.06.12.15.09.15-.03V.388h3.604v13.113c0 3.87-2.675 6.87-7.299 6.87-2.585 0-4.837-.9-6.488-2.43l2.163-2.339c1.441 1.142 2.584 1.74 4.265 1.74 2.645 0 3.754-1.86 3.754-4.173v-1.68.004zM7.358 2.97c-2.073 0-3.873 1.8-3.873 4.322 0 2.522 1.8 4.32 3.873 4.32 2.073 0 3.874-1.798 3.874-4.32 0-2.523-1.834-4.322-3.874-4.322z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
