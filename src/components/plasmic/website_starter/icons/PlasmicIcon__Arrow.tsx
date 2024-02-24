// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowIcon(props: ArrowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.477 5.477a.675.675 0 000-.954L13.182.227a.675.675 0 00-.955.955L16.045 5l-3.818 3.818a.675.675 0 00.955.955l4.295-4.296zM0 5.675h17v-1.35H0v1.35z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowIcon;
/* prettier-ignore-end */
