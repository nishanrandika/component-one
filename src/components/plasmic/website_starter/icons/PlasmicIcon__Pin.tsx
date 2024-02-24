// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PinIcon(props: PinIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.5 7c.378 0 .702-.137.971-.412.27-.274.404-.603.404-.988s-.135-.715-.404-.99A1.31 1.31 0 005.5 4.2a1.31 1.31 0 00-.971.412c-.27.274-.404.603-.404.988s.135.715.404.99c.27.274.593.41.971.41zm0 7c-1.845-1.598-3.223-3.083-4.133-4.453C.456 8.176 0 6.907 0 5.74c0-1.75.553-3.144 1.659-4.183C2.765.52 4.045 0 5.5 0s2.736.52 3.842 1.558C10.448 2.596 11 3.99 11 5.74c0 1.167-.456 2.436-1.367 3.807-.91 1.37-2.289 2.855-4.133 4.453z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PinIcon;
/* prettier-ignore-end */
