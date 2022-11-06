import React from 'react'
import "../styles/components/Button.css"

export default function Button({href, label}) {
    return (
        <div>
            <a href={href}>
                <button className="blue-button">{label}</button>
            </a>
        </div>
    )
}
