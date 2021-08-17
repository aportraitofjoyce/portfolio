import React from 'react'

type MaximizeIconPropsType = {
    width?: number
    height?: number
    primary?: boolean
}

export const MaximizeIcon: React.FC<MaximizeIconPropsType> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24}
             viewBox="0 0 24 24"
             fill="none"
             stroke={props.primary ? 'var(--primary)' : 'currentColor'} strokeWidth="2" strokeLinecap="round"
             strokeLinejoin="round"
             className="feather feather-maximize">
            <path
                d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
        </svg>
    )
}