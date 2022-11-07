import React from 'react'
import Btn from '../components/Btn'
import InputWrap from '../components/InputWrap'
import CheckBox from '../components/CheckBox'
import MobileNav from '../components/MobileNav'
import '../styles/screens/Tablet.css'

export default function Tablet01() {
    return(
        <div className='tablet'>
            <MobileNav label={'검진정보'} back={'off'} />
            <div className=''>
                <div className="">
                    <div className='form mobile'>
                        <div className='row'>
                            <InputWrap
                                label='이름'
                                ess='*'
                                placeholder={''}
                                className={'useReset'}
                            />
                        </div>
                        <div className='row'>
                            <InputWrap
                                label='주민번호'
                                ess='*'
                                placeholder={'-없이 숫자만 입력'}
                            />
                        </div>
                        <div className='row'>
                            <label className={`inputWrap`}>
                                <span>{'휴대번호'}<span className='ess'>{'*'}</span></span>
                                <div className='flexBx'>
                                    <input type='tel' className='' placeholder={'-없이 숫자만 입력'}/>
                                    <span class="userResetItem"></span>
                                    <Btn
                                        label={'인증하기'}
                                        className={'btn-sh34 ac'}
                                    />
                                </div>
                            </label>    
                        </div>
                        <div className='row'>
                            <label className={`inputWrap`}>
                                <span>{'인증번호'}</span>
                                <div className='flexBx'>
                                    <input type='text' className='' placeholder={'-없이 숫자만 입력'}/>
                                    <span class="userResetItem"></span>
                                    <Btn
                                        label={'확인'}
                                        className={'btn-sh34 '}
                                    />
                                </div>
                            </label>    
                        </div>
                    </div>
                </div>
            </div>
            <Btn
                label={'다음'}
                className={'btn52 submitBtn ac'}
            />
        </div>
    )
}