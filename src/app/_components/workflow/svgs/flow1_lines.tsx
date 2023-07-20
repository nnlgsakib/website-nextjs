import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = Math.random().toString(32).slice(2)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 850 614"
      fill="none"
      {...props}
    >
      <g clipPath={`url(#a-${id})`}>
        <path
          fill={`url(#b-${id})`}
          d="M844.47 55.03a.75.75 0 0 0 1.06 0l4.773-4.772a.75.75 0 0 0-1.06-1.061L845 53.44l-4.243-4.243a.75.75 0 1 0-1.06 1.06l4.773 4.774Zm.53-3.53h-.75.75ZM414.59 40.96l.668.34-.668-.34Zm4.37-4.37-.341-.668.341.668ZM397.5 199v.75-.75Zm10.54-1.09-.341-.668.341.668Zm4.37-4.37-.669-.341.669.341ZM366 199.75h31.5v-1.5H366v1.5ZM414.25 183V51.5h-1.5V183h1.5ZM429.5 36.25H829v-1.5H429.5v1.5ZM844.25 51.5v3h1.5v-3h-1.5ZM829 36.25c2.813 0 4.877 0 6.507.134 1.621.133 2.746.392 3.692.874l.681-1.336c-1.193-.608-2.537-.893-4.251-1.033-1.705-.14-3.841-.139-6.629-.139v1.5Zm16.75 15.25c0-2.788.001-4.924-.139-6.629-.14-1.714-.425-3.058-1.033-4.251l-1.336.68c.482.947.742 2.072.874 3.693.133 1.63.134 3.695.134 6.507h1.5Zm-6.551-14.242a9.25 9.25 0 0 1 4.043 4.043l1.336-.681a10.746 10.746 0 0 0-4.698-4.698l-.681 1.337ZM414.25 51.5c0-2.813 0-4.877.133-6.507.133-1.621.393-2.746.875-3.692l-1.337-.681c-.608 1.193-.893 2.537-1.033 4.25-.139 1.706-.138 3.842-.138 6.63h1.5Zm15.25-16.75c-2.788 0-4.924 0-6.629.139-1.714.14-3.059.425-4.252 1.033l.681 1.336c.946-.482 2.072-.742 3.693-.874 1.63-.133 3.694-.134 6.507-.134v-1.5Zm-14.242 6.55a9.252 9.252 0 0 1 4.042-4.042l-.681-1.336a10.75 10.75 0 0 0-4.698 4.698l1.337.68ZM397.5 199.75c2.788 0 4.924.001 6.629-.139 1.714-.14 3.058-.425 4.251-1.033l-.681-1.336c-.946.482-2.071.742-3.692.874-1.63.133-3.695.134-6.507.134v1.5ZM412.75 183c0 2.813-.001 4.877-.134 6.507-.133 1.621-.392 2.746-.875 3.692l1.337.681c.608-1.193.893-2.537 1.033-4.251.139-1.705.139-3.841.139-6.629h-1.5Zm-4.37 15.578a10.746 10.746 0 0 0 4.698-4.698l-1.337-.681a9.242 9.242 0 0 1-4.042 4.043l.681 1.336Z"
        />
        <path
          fill={`url(#c-${id})`}
          d="M771.53 306.53a.75.75 0 0 0 0-1.061l-4.773-4.773a.75.75 0 0 0-1.06 1.061l4.242 4.243-4.242 4.242a.75.75 0 0 0 1.06 1.061l4.773-4.773ZM684 290h.75-.75Zm1.09 10.54-.668.34.668-.34ZM700 306v-.75.75Zm-10.54-1.09.341-.668-.341.668Zm-10.92-105.32-.341.668.341-.668ZM684 214.5h-.75.75Zm-1.09-10.54.668-.34-.668.34ZM636 199.25h32v-1.5h-32v1.5Zm47.25 15.25V290h1.5v-75.5h-1.5ZM700 306.75h71v-1.5h-71v1.5ZM683.25 290c0 2.788-.001 4.924.139 6.629.14 1.714.425 3.058 1.033 4.251l1.336-.681c-.482-.946-.742-2.071-.874-3.692-.133-1.63-.134-3.695-.134-6.507h-1.5ZM700 305.25c-2.813 0-4.877-.001-6.507-.134-1.621-.133-2.746-.392-3.692-.874l-.681 1.336c1.193.608 2.537.893 4.251 1.033 1.705.139 3.841.139 6.629.139v-1.5Zm-15.578-4.37a10.746 10.746 0 0 0 4.698 4.698l.681-1.336a9.25 9.25 0 0 1-4.043-4.043l-1.336.681ZM668 199.25c2.813 0 4.877.001 6.507.134 1.621.132 2.746.392 3.692.874l.681-1.336c-1.193-.608-2.537-.893-4.251-1.033-1.705-.14-3.841-.139-6.629-.139v1.5Zm16.75 15.25c0-2.788.001-4.924-.139-6.629-.14-1.714-.425-3.058-1.033-4.251l-1.336.681c.482.946.742 2.071.874 3.692.133 1.63.134 3.694.134 6.507h1.5Zm-6.551-14.242a9.25 9.25 0 0 1 4.043 4.043l1.336-.681a10.741 10.741 0 0 0-4.698-4.698l-.681 1.336Z"
        />
        <path
          fill={`url(#d-${id})`}
          d="M276.53 524.47a.749.749 0 0 0-1.06 0l-4.773 4.773a.749.749 0 1 0 1.06 1.06l4.243-4.242 4.243 4.242a.749.749 0 1 0 1.06-1.06l-4.773-4.773Zm562.01 52.99.34.668-.34-.668Zm4.37-4.37-.668-.341.668.341Zm-565.82 0-.668.34.668-.34Zm4.37 4.37.341-.668-.341.668ZM275.25 525v37.55h1.5V525h-1.5ZM292 579.3h536v-1.5H292v1.5Zm552.75-16.75V545.5h-1.5v17.05h1.5ZM828 579.3c2.788 0 4.924.001 6.629-.139 1.714-.14 3.058-.425 4.251-1.033l-.681-1.336c-.946.482-2.071.742-3.692.874-1.63.133-3.694.134-6.507.134v1.5Zm15.25-16.75c0 2.813-.001 4.877-.134 6.507-.132 1.621-.392 2.746-.874 3.692l1.336.681c.608-1.193.893-2.537 1.033-4.251.14-1.705.139-3.841.139-6.629h-1.5Zm-4.37 15.578a10.741 10.741 0 0 0 4.698-4.698l-1.336-.681a9.25 9.25 0 0 1-4.043 4.043l.681 1.336ZM275.25 562.55c0 2.788-.001 4.924.139 6.629.14 1.714.425 3.058 1.033 4.251l1.336-.681c-.482-.946-.742-2.071-.874-3.692-.133-1.63-.134-3.694-.134-6.507h-1.5ZM292 577.8c-2.813 0-4.877-.001-6.507-.134-1.621-.132-2.746-.392-3.692-.874l-.681 1.336c1.193.608 2.537.893 4.251 1.033 1.705.14 3.841.139 6.629.139v-1.5Zm-15.578-4.37a10.741 10.741 0 0 0 4.698 4.698l.681-1.336a9.25 9.25 0 0 1-4.043-4.043l-1.336.681Z"
        />
        <path
          fill={`url(#e-${id})`}
          d="M6.53 261.47a.75.75 0 0 0-1.06 0l-4.773 4.773a.75.75 0 1 0 1.06 1.06L6 263.061l4.243 4.242a.75.75 0 0 0 1.06-1.06L6.53 261.47ZM6.75 338v-76h-1.5v76h1.5Z"
        />
        <path
          fill={`url(#f-${id})`}
          d="M276.53 261.47a.749.749 0 0 0-1.06 0l-4.773 4.773a.749.749 0 1 0 1.06 1.06l4.243-4.242 4.243 4.242a.749.749 0 1 0 1.06-1.06l-4.773-4.773Zm.22 76.53v-76h-1.5v76h1.5Z"
        />
        <path
          fill={`url(#g-${id})`}
          d="M546.53 261.47a.749.749 0 0 0-1.06 0l-4.773 4.773a.749.749 0 1 0 1.06 1.06l4.243-4.242 4.243 4.242a.749.749 0 1 0 1.06-1.06l-4.773-4.773Zm.22 76.53v-76h-1.5v76h1.5Z"
        />
      </g>
      <defs>
        <linearGradient
          id={`b-${id}`}
          x1={845}
          x2={366}
          y1={117.25}
          y2={117.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id={`c-${id}`}
          x1={771}
          x2={636}
          y1={252.25}
          y2={252.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id={`d-${id}`}
          x1={276}
          x2={844}
          y1={559.5}
          y2={558.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id={`e-${id}`}
          x1={6.5}
          x2={6.5}
          y1={262}
          y2={338}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id={`f-${id}`}
          x1={276.5}
          x2={276.5}
          y1={262}
          y2={338}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id={`g-${id}`}
          x1={546.5}
          x2={546.5}
          y1={262}
          y2={338}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
        </linearGradient>
        <clipPath id={`a-${id}`}>
          <path fill="#fff" d="M0 0h850v614H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default SvgComponent
