import React, {useState} from 'react'
import Btn from '../components/Btn'
import InputWrap from '../components/InputWrap'
import CheckBox from '../components/CheckBox'
import Button from '../components/Button'
import Radio from '../components/Radio'
import '../styles/screens/Mobile.css'
import MobileNav from '../components/MobileNav'

export default function Mobile05() {

    return(
        <div className='mobileFinish'>
            <div className='animation-img'></div>
            <h1>감사합니다!</h1>
            <h2>문진표 작성이 <b>완료</b>되었습니다.</h2>
            <p>
            구강검진 결과는<br/>
            <b>010-1234-4567,</b><br/>
            <b>abc@dencomm.ar</b>로<br/>
            발송됩니다.
            </p>
        </div>
    )
}