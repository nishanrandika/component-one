// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector38Icon(props: Vector38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 2.09C1 1.125 1.822.714 2.625.714c.643 0 1.126.25 1.465.715A6.57 6.57 0 014.5.643C3.966.179 3.359 0 2.626 0 1.393 0 .161.697.161 2.161c0 2.786 3.893 1.59 3.893 3.733 0 .893-.875 1.393-1.625 1.393-.804 0-1.411-.357-1.732-.929l-.697.5c.572.804 1.465 1.126 2.393 1.126 1.197 0 2.5-.822 2.5-2.197C4.894 3.054 1 4.144 1 2.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector38Icon;
/* prettier-ignore-end */
