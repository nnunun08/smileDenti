import React from 'react'
import "../styles/components/CheckBox.css"

export default function CheckBox({id, type=''}) {
    return (
        <div className={`checkbox ${type}`}>   
            <input id={id}  type={'checkbox'} />
            <div className='checkItem'></div>
        </div>
    )
}
