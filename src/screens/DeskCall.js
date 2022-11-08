import React from 'react'
import '../styles/screens/DeskCall.css'

export default function DeskCall() {
    return (
        <>
            <div className='deskCall'>
                <div className='badge'>
                    <h4>진료실</h4>
                    <div className='num'>{'02'}</div>
                </div>
                <div className='doctor'>
                    <b>{'홍의수'}</b>의사
                </div>

                <h1 className='patient'>
                    <b>{'강O하'}</b> 님
                </h1>

                <div className='info'>
                    <span></span>
                    진료실로 들어오세요.
                </div>
            </div>
        </>
    )
}
