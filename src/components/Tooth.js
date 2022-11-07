import React from 'react'
import '../styles/components/Tooth.css'

export default function Tooth({toothNum,op=''}) {
    return (
        <div className={`tooth ${op}`}>
            <span className='toolWrap'>
                <div className='too1-img'></div>
                <div className='too2-img'></div>
                <div className='too4-img'></div>
            </span>
            <div className='too3-img'></div>
            {toothNum}
        </div>
    )
}