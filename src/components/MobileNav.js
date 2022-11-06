import React from 'react'
import '../styles/components/MobileNav.css'

export default function MobileNav({label, back='on'}) {
    return(
        <div className={`mobileNav ${back}`}>
            <button className={`back`}></button>
            <h1>{label}</h1>
        </div>
    )
}