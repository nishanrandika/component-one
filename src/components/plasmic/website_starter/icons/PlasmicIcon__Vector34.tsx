// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector34Icon(props: Vector34IconProps) {
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
          "M4.09 1.447c-.34-.5-.822-.75-1.465-.75C1.822.697 1 1.107 1 2.072c0 2.054 3.894.964 3.894 3.715 0 1.393-1.304 2.197-2.5 2.197-.93 0-1.822-.34-2.394-1.126l.697-.5c.321.554.928.93 1.732.93.768 0 1.625-.501 1.625-1.394 0-2.143-3.893-.965-3.893-3.733C.16.697 1.393 0 2.625 0 3.483 0 4.18.232 4.77.929l-.679.518z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector34Icon;
/* prettier-ignore-end */
