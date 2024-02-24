// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame20Icon(props: Frame20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 126 215"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.95 12.625c0-.62-.351-1.123-.78-1.123-.43 0-.783.502-.783 1.123 0 .617.352 1.12.784 1.12.428 0 .78-.503.78-1.12zm-.173 0c0 .487-.27.89-.606.89-.34 0-.61-.403-.61-.89 0-.49.27-.893.61-.893.336 0 .606.403.606.893zm-.307-.208c0-.22-.12-.35-.284-.35h-.277v1.116h.168v-.403h.064l.181.403h.199l-.21-.444c.098-.059.16-.176.16-.322zm-.172.006c0 .093-.053.146-.119.146h-.102v-.289h.102c.066 0 .119.05.119.143z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame20Icon;
/* prettier-ignore-end */
