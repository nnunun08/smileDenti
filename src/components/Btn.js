import React from 'react'
import "../styles/components/Button.css"

export default function Btn({label,className}) {
    return (
        <button className={className}>{label}</button>
    )
}
