// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8.242 6A2.247 2.247 0 113.75 6a2.247 2.247 0 114.492 0zm6 0A2.247 2.247 0 119.75 6a2.247 2.247 0 114.492 0zM6 9.75c-1.747 0-5.25.877-5.25 2.625v1.875h10.5v-1.875c0-1.748-3.503-2.625-5.25-2.625zm5.273.037c.262-.022.51-.037.727-.037 1.748 0 5.25.877 5.25 2.625v1.875h-4.5v-1.875c0-1.11-.607-1.957-1.477-2.588z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
