import * as React from "react"

const SvgComponent = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={65}
        fill="none"
        {...props}
    >
        <circle cx={32} cy={32.5} r={32} fill="currentColor" fillOpacity={0.2} />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M36.666 26.333H25.333v11.334h11.333V26.333ZM21.083 46.167a4.262 4.262 0 0 0 4.25-4.25v-4.25h-4.25a4.262 4.262 0 0 0-4.25 4.25 4.262 4.262 0 0 0 4.25 4.25Z"
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21.083 26.333h4.25v-4.25a4.262 4.262 0 0 0-4.25-4.25 4.262 4.262 0 0 0-4.25 4.25 4.262 4.262 0 0 0 4.25 4.25Z"
            opacity={0.4}
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M36.667 26.333h4.25a4.262 4.262 0 0 0 4.25-4.25 4.262 4.262 0 0 0-4.25-4.25 4.262 4.262 0 0 0-4.25 4.25v4.25Z"
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M40.917 46.167a4.262 4.262 0 0 0 4.25-4.25 4.262 4.262 0 0 0-4.25-4.25h-4.25v4.25a4.262 4.262 0 0 0 4.25 4.25Z"
            opacity={0.4}
        />
    </svg>
)
export default SvgComponent
