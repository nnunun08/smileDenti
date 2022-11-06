import React from 'react'
import "../styles/components/Button.css"

export default function BtnSelctDesk({state='', label}) {

    return (
        <button className={`BtnSelectDesk ${state}`}>{label}</button>
    )
}
