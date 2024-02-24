// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MdiyoutubeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MdiyoutubeIcon(props: MdiyoutubeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.143 16.25L16.926 13l-5.783-3.25v6.5zm12.881-8.482c.145.509.245 1.191.312 2.058.078.867.111 1.614.111 2.264l.067.91c0 2.373-.178 4.117-.49 5.233-.279.974-.925 1.603-1.928 1.874-.523.14-1.482.238-2.953.303a76.414 76.414 0 01-4 .108l-1.772.065c-4.668 0-7.577-.173-8.724-.476-1.003-.271-1.65-.9-1.928-1.874-.145-.51-.245-1.192-.312-2.059a25.348 25.348 0 01-.112-2.264L2.23 13c0-2.373.178-4.117.49-5.232.278-.975.925-1.604 1.928-1.875.523-.14 1.482-.238 2.952-.303a76.386 76.386 0 014-.108l1.772-.065c4.67 0 7.578.173 8.725.476 1.003.271 1.65.9 1.928 1.875z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MdiyoutubeIcon;
/* prettier-ignore-end */
