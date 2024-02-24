// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons32PtArrowRight2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons32PtArrowRight2Icon(props: Icons32PtArrowRight2IconProps) {
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
          "M19.113 22c1.942 0 3.516-1.53 3.516-3.418V5.418C22.629 3.53 21.055 2 19.113 2H5.573C3.63 2 2.056 3.53 2.056 5.418v13.164C2.057 20.47 3.631 22 5.572 22h13.541zm-.599-14.856c0 .631-.523 1.144-1.168 1.144a1.156 1.156 0 01-1.168-1.144c0-.632.523-1.144 1.168-1.144.645 0 1.168.512 1.168 1.144zm-6.712 1.207c-2.33 0-4.225 1.855-4.225 4.136 0 2.28 1.895 4.137 4.225 4.137 2.33 0 4.225-1.856 4.225-4.137 0-2.28-1.896-4.136-4.225-4.136zm0 9.649c-3.105 0-5.63-2.473-5.63-5.513s2.525-5.512 5.63-5.512 5.63 2.472 5.63 5.512c0 3.04-2.525 5.513-5.63 5.513z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icons32PtArrowRight2Icon;
/* prettier-ignore-end */
