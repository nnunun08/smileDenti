import React from 'react'
import "../styles/components/Button.css"

export default function Btn({label,className,onClick}) {
    return (
        <button className={className} onClick={onClick}>{label}</button>
    )
}
