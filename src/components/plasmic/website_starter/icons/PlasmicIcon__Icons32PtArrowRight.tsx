// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons32PtArrowRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons32PtArrowRightIcon(props: Icons32PtArrowRightIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 24"}
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
          "M22.629 12.061C22.629 6.505 18.024 2 12.343 2 6.663 2 2.057 6.505 2.057 12.061c0 5.022 3.761 9.184 8.679 9.939v-7.03H8.124v-2.91h2.612V9.845c0-2.522 1.535-3.915 3.885-3.915 1.125 0 2.302.197 2.302.197v2.476h-1.297c-1.277 0-1.676.775-1.676 1.57v1.888h2.853l-.456 2.908H13.95V22c4.917-.755 8.679-4.917 8.679-9.939z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icons32PtArrowRightIcon;
/* prettier-ignore-end */
