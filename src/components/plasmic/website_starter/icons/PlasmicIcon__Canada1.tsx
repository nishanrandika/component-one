// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Canada1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Canada1Icon(props: Canada1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 38"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#hnWAHJYlue9Oa)"}>
        <path
          d={
            "M47.15 4.27l1.1 18.31h-2.463l-.138-2.686h-1.586l-.251 5.472h-2.387l1.249-21.097h4.476zm-2.123 3.656h-.416l-.431 9.4h1.335l-.488-9.4zM31.164 4.268l1.35 28.545h-2.7l-.125-3.472H27.62l-.313 7.713H24.8l1.62-32.786h4.743zm-2.257 3.658h-.417l-.76 18.716h1.86l-.683-18.716zM37.408.814c1.927 0 3.084 1.158 3.085 3.085v22.367c0 1.928-1.157 3.085-3.085 3.085h-3.857V.814h3.857zm-.387 2.7h-.77V26.65h.77c.58 0 .771-.193.771-.77V4.286c0-.578-.192-.771-.77-.771zM13.267.804l1.526 28.332h-2.69l-.291-6.555h-2l-.149 3.452H7.162L8.522.804h4.745zM11.01 4.46h-.416l-.666 15.42h1.765L11.01 4.46zm-7.926-.31C1.157 4.151 0 5.307 0 7.236v12.38C0 21.544 1.156 22.7 3.084 22.7h.386c1.928 0 3.085-1.156 3.085-3.084v-4.727H4.01v4.532c0 .58-.192.771-.654.771-.463 0-.657-.192-.657-.77V7.428c0-.58.194-.772.657-.772.462 0 .654.193.654.772v4.374h2.546V7.236c0-1.929-1.156-3.087-3.084-3.087l-.388.002zm18.318 16.33h-.308L18.318 3.129h-2.507v29.02h2.507V17.783h.308l2.745 17.162h2.538V7.755h-2.507v12.727zM55.864 3.737l-.502-.172.043-.932-.88.28-.306-.438L53.1 4.08h-.098l.111-2.672-.504.17-.531-.765-.535.765-.502-.17.112 2.67h-.098l-1.12-1.605-.306.437-.879-.279.042.93-.503.174 1.93 2.309-.447.64h1.852v1.238h.908V6.685h1.852l-.448-.641 1.929-2.308z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"hnWAHJYlue9Oa"}>
          <path fill={"currentColor"} d={"M0 0h56v38H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Canada1Icon;
/* prettier-ignore-end */
