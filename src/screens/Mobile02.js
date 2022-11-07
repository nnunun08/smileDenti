import React from 'react'
import Btn from '../components/Btn'
import InputWrap from '../components/InputWrap'
import CheckBox from '../components/CheckBox'
import Button from '../components/Button'
import '../styles/screens/Mobile.css'
import MobileNav from '../components/MobileNav'

export default function Mobile02() {
    return(
        <div className='mobileWrap'>
            <MobileNav label={'개인정보'} />
            <div className='mobileCon'>
                <div className="mobileInner">
                    <div className='form mobile'>
                        <div className='row'>
                            <InputWrap
                                label='아이디'
                                ess='* 필수입력사항'
                                placeholder={''}
                                readOnly={true}
                            />
                        </div>
                        <div className='row'>
                            <InputWrap
                                label='생년월일(주민번호 앞 6자리)'
                                ess='*'
                                placeholder={''}
                                readOnly={true}
                            />
                        </div>
                        <div className='row'>
                            <InputWrap
                                label='성별'
                                ess='*'
                                placeholder={''}
                                readOnly={true}
                            />
                        </div>
                        <div className='row'>
                            <InputWrap
                                label='휴대폰번호'
                                ess='*'
                                placeholder={''}
                                readOnly={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Btn
                label={'다음'}
                className={'btn52 bottom ac'}
            />
        </div>
    )
}