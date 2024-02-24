// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group6Icon(props: Group6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.286 3.126c.34-.197.518-.447.518-.75 0-.25-.125-.447-.357-.608-.232-.16-.536-.25-.911-.25H0v3.59h.59c.464 0 .839-.09 1.107-.286.268-.196.41-.446.41-.75-.017-.446-.285-.768-.82-.946zm-.821-1.18H.59a.89.89 0 01.518.144.433.433 0 01.196.357.478.478 0 01-.214.41c-.143.108-.34.144-.608.161V1.947H.465zm.91 2.501c-.16.143-.428.197-.857.197H.482V3.41h.161c.304 0 .536.054.697.161.178.107.25.25.25.447 0 .16-.072.303-.215.428zm2.608-1.5L3.108 1.5h-.536l1.16 1.965V5.09h.483V3.447L5.376 1.5H4.84l-.857 1.447zM23.362.482c.071 0 .178.036.321.107.197.09.34.125.429.125.25 0 .464-.16.607-.464L24.415 0c-.107.179-.196.25-.285.25-.054 0-.161-.036-.322-.125A.884.884 0 0023.38 0c-.054 0-.108 0-.143.018a.873.873 0 00-.125.053.667.667 0 00-.125.108.597.597 0 00-.125.16l-.072.09.304.268c.089-.125.178-.215.268-.215zM13.663 5.09h2.09v-.5h-1.59V3.411h1.59v-.5h-1.59v-.91h1.608v-.5h-2.108v3.59zM23.63 1.5l-1.68 3.59h.554l.536-1.125h1.358l.535 1.125h.554L23.826 1.5h-.197zm-.376 1.965l.447-.965.446.965h-.893zM20.718 1.5h-.5v3.59h.5V1.5zm-3.072 0h-.5v3.59h1.804v-.482h-1.304V1.5zm-6.108 0l-1.322 2.715L8.895 1.5h-.179l-.518 3.59h.5l.304-2.268 1.125 2.268h.179l1.107-2.25.322 2.25h.482l-.5-3.59h-.179z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
