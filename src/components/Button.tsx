import React from 'react'

type BtnProps = {
    onClick: () => void
    title: string
    bg: string
    className?: string
}

const Button = (props: BtnProps) => {
    return (
        <span onClick={() => props.onClick()} className={` ${props.bg} opacity-90 hover:opacity-100 p-2 rounded font-bold uppercase cursor-pointer text-white text-center transition-all ${props.className}`}>{props.title}</span>
    )
}

export default Button