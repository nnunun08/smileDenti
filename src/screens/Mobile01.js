import React from 'react'
import Btn from '../components/Btn'
import '../styles/screens/Mobile.css'

export default function Mobile01() {
    return(
        <div className='mobileWrap'>
            <div class="mobileInner">
                <div className='logo'></div>
                <p>문진표를 미리 작성하시면<br/>
                신속하게 검진을 받으실 수 있습니다</p>
                <Btn
                    label={'휴대폰 본인인증'}
                    className={'btn52 bottom ac'}
                />
            </div>
        </div>
    )
}