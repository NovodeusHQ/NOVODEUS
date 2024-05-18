import * as React from "react"

const UIUX = (props: any) => (
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
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M19.25 27.75a2.833 2.833 0 1 0 0-5.667 2.833 2.833 0 0 0 0 5.667ZM44.75 27.75a2.833 2.833 0 1 0 0-5.667 2.833 2.833 0 0 0 0 5.667ZM41.917 24.917H36.25M27.75 24.917h-5.667M25.625 38.375v2.833c0 .864-.524 1.615-1.26 1.927-.27.128-.553.198-.865.198h-2.833a2.122 2.122 0 0 1-2.125-2.125v-2.833c0-1.176.95-2.125 2.125-2.125H23.5c1.176 0 2.125.95 2.125 2.125ZM45.458 38.375v2.833c0 1.176-.949 2.125-2.125 2.125H40.5c-.312 0-.595-.07-.864-.198a2.095 2.095 0 0 1-1.261-1.927v-2.833c0-1.176.95-2.125 2.125-2.125h2.833c1.176 0 2.125.95 2.125 2.125ZM36.25 22.792v4.25a2.14 2.14 0 0 1-2.125 2.125h-4.25a2.14 2.14 0 0 1-2.125-2.125v-4.25a2.14 2.14 0 0 1 2.125-2.125h4.25a2.14 2.14 0 0 1 2.125 2.125Z"
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M36.25 25.95c3.358 1.7 5.667 5.356 5.667 9.592 0 .24-.014.467-.043.708M22.125 36.25a5.946 5.946 0 0 1-.042-.708c0-4.236 2.31-7.891 5.667-9.591"
            opacity={0.56}
        />
    </svg>
)
export default UIUX
