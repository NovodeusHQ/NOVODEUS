import * as React from "react"

const ModernProducts = (props: any) => (
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
            d="m21.071 21.454 3.175 6.758M41.768 21.08l-3.628 6.527"
            opacity={0.4}
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21.085 20.858a3.466 3.466 0 1 0-2.947-6.275 3.466 3.466 0 0 0 2.947 6.275ZM42.258 20.744a3.467 3.467 0 1 0 3.369-6.06 3.467 3.467 0 0 0-3.369 6.06Z"
        />
        <g
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            opacity={0.4}
        >
            <path d="m20.795 31.782 10.763 6.23 10.69-6.193M31.559 49.054V37.998" />
        </g>
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m29.035 25.736-6.51 3.608c-1.474.816-2.681 2.864-2.681 4.547v6.887c0 1.682 1.206 3.73 2.681 4.547l6.51 3.62c1.39.768 3.669.768 5.058 0l6.51-3.62c1.475-.817 2.682-2.865 2.682-4.547V33.89c0-1.683-1.207-3.73-2.682-4.547l-6.51-3.62c-1.401-.768-3.669-.768-5.058.012Z"
        />
    </svg>
)
export default ModernProducts
