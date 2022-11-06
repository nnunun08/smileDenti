import React from 'react'
import "../styles/components/InputWrap.css"

export default function InputWrap({label, placeholder, className='', errorText, ess='', readOnly=false}) {
    return (
        <>
            <label className={`inputWrap ${className}`}>
                <span>{label}<span className='ess'>{ess}</span></span>
                <input type="text" placeholder={placeholder} readOnly={readOnly}/>
            </label>
            <div className='errorText'>{errorText}</div>
        </>
    )
}
