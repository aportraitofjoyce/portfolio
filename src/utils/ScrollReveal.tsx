import React, {useEffect, useRef} from 'react'
import scrollReveal from 'scrollreveal'

type ScrollRevealPropsType = {
    delay?: number
    distance?: string
    duration?: number
    origin?: 'top' | 'bottom' | 'left' | 'right'
    scale?: number
    opacity?: number
    easing?: 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out'
    rotate?: {
        x?: number
        y?: number
        z?: number
    }
}

export const ScrollReveal: React.FC<ScrollRevealPropsType> = props => {
    const {children, delay, distance, duration, origin, scale, opacity, easing, rotate} = props

    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (sectionRef.current)
            scrollReveal().reveal(sectionRef.current, {
                delay: delay || 0,
                duration: duration || 400,
                distance: distance || '100%',
                scale: scale || 1,
                origin: origin || 'left',
                easing: easing || 'ease',
                opacity: opacity || 1,
                rotate: rotate || {
                    x: 0,
                    y: 0,
                    z: 0
                }
            })
    }, [])

    return (
        <div ref={sectionRef}>
            {children}
        </div>
    )
}