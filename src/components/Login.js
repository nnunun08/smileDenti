import React from 'react'
import Logo from './Logo'
import InputWrap from './InputWrap'
import CheckBox from './CheckBox'
import Button from './Button'
import '../styles/screens/DentistLoginScreen.css'

export default function Login() {
    return(
        <div className='formWrap'>
            <Logo />
            <div className='form'>
                <div className='row'>
                    <InputWrap 
                        label='아이디' 
                        placeholder={''} 
                        className={''} 
                        errorText={'5~20자의 영문 소문자, 숫자만 사용 가능합니다.'}
                    />
                </div>
                <div className='row'>
                    <InputWrap 
                        label='비밀번호' 
                        placeholder={''}
                        className={'error'} 
                        errorText={'8~16자 영문, 숫자, 특수문자 세가지 모두 사용되어야 합니다.'}
                    />
                </div>
                <div className='row'>
                    <label className='checkBoxWrap' for="check">
                        <CheckBox id='check' />
                        아이디 저장
                    </label>
                </div>
                <div className='row'>
                    <Button type='submit' label='로그인' />
                </div>
            </div>
        </div>
    )
}