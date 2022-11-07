import React from 'react'
import "../styles/components/InputWrap.css"

export default function InputWrap({label, placeholder, className='', errorText, ess='', readOnly=false, type='text'}) {

    return (
        <>
            <label className={`inputWrap ${className}`}>
                <span>{label}<span className='ess'>{ess}</span></span>
                <input type={type} placeholder={placeholder} readOnly={readOnly}/>
                <span className='userResetItem'></span>
            </label>
            <div className='errorText'>{errorText}</div>
        </>
    )
}
