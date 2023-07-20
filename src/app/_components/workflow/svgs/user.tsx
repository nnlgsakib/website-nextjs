import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  // Make sure the id is unique, even in the case of reusing components
  const id = Math.random().toString(32).slice(2)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 164 164"
      fill="none"
      {...props}
    >
      <g filter={`url(#a-${id})`}>
        <circle cx={82} cy={72} r={70} fill="#8247E5" />
      </g>
      <path
        fill="#fff"
        d="M91.795 57.75a5.908 5.908 0 0 1 5.906 5.906v16.028a15.191 15.191 0 0 1-30.382 0V63.656a5.906 5.906 0 0 1 5.906-5.906h18.57Zm0 5.063h-18.57a.844.844 0 0 0-.843.843v16.028a10.128 10.128 0 0 0 20.256 0V63.656a.844.844 0 0 0-.843-.843ZM54.656 57.75h11.411a9.24 9.24 0 0 0-2.086 5.063h-9.325a.844.844 0 0 0-.843.843v10.966a8.44 8.44 0 0 0 10.401 8.211c.287 1.701.81 3.324 1.53 4.833A13.503 13.503 0 0 1 48.75 74.622V63.656a5.908 5.908 0 0 1 5.906-5.906Zm44.297 0h11.391a5.908 5.908 0 0 1 5.906 5.906v10.969a13.51 13.51 0 0 1-5.273 10.707 13.503 13.503 0 0 1-11.703 2.34 18.378 18.378 0 0 0 1.535-4.836 8.439 8.439 0 0 0 10.378-8.211V63.656a.84.84 0 0 0-.843-.843h-9.305a9.24 9.24 0 0 0-2.086-5.063ZM82.5 34.125a10.125 10.125 0 1 1 0 20.25 10.125 10.125 0 0 1 0-20.25Zm21.937 3.375a8.44 8.44 0 0 1 7.796 5.208 8.421 8.421 0 0 1 0 6.459 8.43 8.43 0 0 1-4.566 4.566 8.44 8.44 0 0 1-9.195-1.83 8.437 8.437 0 0 1 5.965-14.403Zm-43.874 0a8.439 8.439 0 1 1 0 16.877 8.439 8.439 0 0 1 0-16.877ZM82.5 39.188a5.062 5.062 0 1 0 0 10.124 5.062 5.062 0 0 0 0-10.124Zm21.937 3.374a3.37 3.37 0 0 0-2.386.989 3.373 3.373 0 0 0 1.095 5.505 3.37 3.37 0 0 0 3.678-.732 3.378 3.378 0 0 0 0-4.773 3.375 3.375 0 0 0-2.387-.989Zm-43.874 0a3.374 3.374 0 0 0-1.292 6.494 3.374 3.374 0 0 0 3.678-5.505 3.375 3.375 0 0 0-2.386-.989ZM71.95 120.1c-.96 0-1.713-.27-2.26-.81-.54-.54-.81-1.32-.81-2.34V113h1.3v3.9c0 .72.153 1.243.46 1.57.313.327.753.49 1.32.49.567 0 1.003-.163 1.31-.49.307-.327.46-.85.46-1.57V113h1.28v3.95c0 1.02-.273 1.8-.82 2.34-.54.54-1.287.81-2.24.81Zm7.05 0c-.546 0-1.07-.077-1.57-.23-.5-.16-.896-.363-1.19-.61l.45-1.01c.28.22.627.403 1.04.55.414.147.837.22 1.27.22.367 0 .664-.04.89-.12.227-.08.394-.187.5-.32a.757.757 0 0 0 .16-.47.628.628 0 0 0-.23-.51 1.593 1.593 0 0 0-.6-.31c-.24-.08-.51-.153-.81-.22-.293-.067-.59-.143-.89-.23a4.221 4.221 0 0 1-.81-.35 1.82 1.82 0 0 1-.59-.58c-.153-.24-.23-.547-.23-.92 0-.38.1-.727.3-1.04.207-.32.517-.573.93-.76.42-.193.95-.29 1.59-.29.42 0 .837.053 1.25.16.414.107.774.26 1.08.46l-.41 1.01a3.717 3.717 0 0 0-.97-.41 3.57 3.57 0 0 0-.96-.14c-.36 0-.653.043-.88.13-.22.087-.383.2-.49.34-.1.14-.15.3-.15.48a.67.67 0 0 0 .22.52c.154.127.35.227.59.3.247.073.52.147.82.22.3.067.597.143.89.23.3.087.57.2.81.34.247.14.444.33.59.57.154.24.23.543.23.91 0 .373-.103.72-.31 1.04-.2.313-.51.567-.93.76-.42.187-.95.28-1.59.28Zm5.32-4.19h3.48v1.07h-3.48v-1.07Zm.1 3h3.95V120h-5.25v-7h5.11v1.09h-3.81v4.82Zm5.399 1.09v-7h2.88c.62 0 1.15.1 1.59.3.447.2.79.487 1.03.86s.36.817.36 1.33c0 .513-.12.957-.36 1.33-.24.367-.583.65-1.03.85-.44.193-.97.29-1.59.29h-2.16l.58-.59V120h-1.3Zm4.58 0-1.77-2.54h1.39l1.78 2.54h-1.4Zm-3.28-2.49-.58-.62h2.1c.573 0 1.003-.123 1.29-.37.293-.247.44-.59.44-1.03 0-.447-.147-.79-.44-1.03-.287-.24-.717-.36-1.29-.36h-2.1l.58-.64v4.05Z"
      />
      <defs>
        <filter
          id={`a-${id}`}
          width={164}
          height={164}
          x={0}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius={2}
            result="effect1_dropShadow_1338_12208"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={3} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1338_12208"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            radius={3}
            result="effect2_dropShadow_1338_12208"
          />
          <feOffset dy={10} />
          <feGaussianBlur stdDeviation={7.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_dropShadow_1338_12208"
            result="effect2_dropShadow_1338_12208"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_1338_12208"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
export default SvgComponent
