import * as react from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 162 149"
    fill="none"
    {...props}
  >
    <path
      stroke="#171717"
      strokeLinecap="round"
      strokeWidth={4}
      d="M83.5 10v106.5"
    />
    <circle cx={83} cy={9.5} r={9} fill="#171717" stroke="#171717" />
    <path
      fill="#171717"
      d="M57.497 124H.5v24.5H162V124h-52.5c-13.255 0-24-10.745-24-24v-6h-4.003v6c0 13.255-10.745 24-24 24Z"
    />
  </svg>
)
export default SvgComponent
