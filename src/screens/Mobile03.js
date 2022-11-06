import React from 'react'
import Btn from '../components/Btn'
import InputWrap from '../components/InputWrap'
import CheckBox from '../components/CheckBox'
import Button from '../components/Button'
import '../styles/screens/mobile.css'
import MobileNav from '../components/MobileNav'

export default function Mobile03() {
    return(
        <div className='mobileWrap'>
            <MobileNav label={'검진정보'} back={'off'} />
            <div className='mobileCon'>
                <div className="mobileInner">
                    <div className='form mobile'>
                        <div className='row'>
                            <InputWrap
                                label='구강검진 장소'
                                ess='*'
                                placeholder={''}
                                readOnly={true}
                            />
                        </div>
                        <div className='row'>
                            <label className={`inputWrap`}>
                                <span>{'검진일'}<span className='ess'>{'*'}</span></span>
                                <div className='flexBx'>
                                    <input type='date' className='inputDate' />
                                    <input type='time' className='inputTime' />
                                </div>
                            </label>
                        </div>
                        <div className='divider'></div>
                        <div>
                            <h3>통보서 수신방법<span className='ess'>*</span></h3>
                        </div>
                        
                        <div className='group'>
                            <label class="checkBoxWrap" for="sms">
                                <CheckBox
                                    id='sms'
                                    type=''
                                />
                                SMS 발송
                            </label>
                            <div className='formBx'><input type='tel' /></div>
                        </div>
                        <div className='group'>
                            <label class="checkBoxWrap" for="email">
                                <CheckBox
                                    id='email'
                                    type=''
                                />
                                이메일
                            </label>
                            <div className='formBx'>
                                <input type='text' />
                                <span>@</span>
                                <select>
                                    <option>naver.com</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Btn
                label={'다음'}
                className={'btn52 bottom'}
            />
        </div>
    )
}