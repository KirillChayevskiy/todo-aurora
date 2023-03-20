import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    width="25px"
    height="25px"
  >
    <style>{".st0{fill:#cc4343}"}</style>
    <path className="st0" d="m27.414 24.586-5.077-5.077A9.932 9.932 0 0 0 24 14c0-5.514-4.486-10-10-10S4 8.486 4 14s4.486 10 10 10a9.932 9.932 0 0 0 5.509-1.663l5.077 5.077a2 2 0 1 0 2.828-2.828zM7 14c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z" />
  </svg>
)

export default SvgComponent
