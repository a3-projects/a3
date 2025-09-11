import { type ComponentProps } from "react";

export const Prisma = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 25 25"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      {...props}
    >
      <rect id="prisma" x="0.284" y="0.77" width="24" height="24" style={{ fill: "none" }} />
      <clipPath id="prisma_clip1">
        <rect id="prisma.svg" x="2.859" y="1.27" width="18.851" height="23" />
      </clipPath>
      <g clipPath="url(#prisma_clip1)">
        <path
          d="M3.143,15.869c-0.228,0.371 -0.224,0.84 0.009,1.208l4.223,6.662c0.274,0.433 0.803,0.63 1.293,0.483l12.187,-3.656c0.665,-0.2 1,-0.942 0.709,-1.572l-7.834,-16.995c-0.382,-0.829 -1.534,-0.897 -2.011,-0.119l-8.576,13.989Zm10.379,-9.985c-0.167,-0.385 -0.731,-0.326 -0.813,0.085l-3.017,15.019c-0.063,0.317 0.233,0.587 0.543,0.495l8.42,-2.514c0.246,-0.073 0.373,-0.345 0.271,-0.58l-5.404,-12.505Z"
          style={{ fill: "#4c51bf" }}
        />
      </g>
    </svg>
  );
};

export default Prisma;
