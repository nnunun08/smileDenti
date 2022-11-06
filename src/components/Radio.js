import React from 'react'
import "../styles/components/Radio.css"

export default function Radio({id,name,checked,label}) {
    return (
        <>
            <input type='radio' id={id} name={name} defaultChecked={checked}/>
            <label for={id}>{label}</label>
        </>
    )
}
