// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons32PtArrowRight3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons32PtArrowRight3Icon(props: Icons32PtArrowRight3IconProps) {
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
          "M12.358 2c-5.69 0-10.3 4.473-10.3 9.99 0 4.232 2.713 7.847 6.545 9.3-.09-.79-.171-2.002.035-2.865.188-.78 1.208-4.964 1.208-4.964s-.308-.6-.308-1.484c0-1.386.83-2.426 1.863-2.426.88 0 1.304.64 1.304 1.406 0 .858-.561 2.14-.852 3.327-.245.994.515 1.804 1.525 1.804 1.828 0 3.238-1.87 3.238-4.572 0-2.384-1.773-4.058-4.304-4.058-2.93 0-4.647 2.135-4.647 4.333 0 .86.338 1.786.764 2.284a.3.3 0 01.073.288l-.287 1.135c-.046.188-.148.226-.345.138-1.285-.575-2.09-2.398-2.09-3.872 0-3.146 2.36-6.043 6.805-6.043 3.572 0 6.351 2.472 6.351 5.769 0 3.446-2.24 6.218-5.355 6.218-1.043 0-2.023-.524-2.37-1.149l-.644 2.373c-.23.871-.862 1.96-1.287 2.622a10.63 10.63 0 003.05.446c5.678 0 10.299-4.47 10.299-9.99 0-5.518-4.622-9.988-10.299-9.988L12.358 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icons32PtArrowRight3Icon;
/* prettier-ignore-end */
