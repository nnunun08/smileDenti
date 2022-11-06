import React, {useState} from 'react'
import Btn from '../components/Btn'
import InputWrap from '../components/InputWrap'
import CheckBox from '../components/CheckBox'
import Button from '../components/Button'
import Radio from '../components/Radio'
import '../styles/screens/mobile.css'
import MobileNav from '../components/MobileNav'

export default function Mobile04({count='13'}) {

    return(
        <div className='mobileWrap'>
            <MobileNav label={'구강검진문진표'} back={'off'} />
            <div className='mobileCon mobile4 over'>
                <div className="top">
                        <div className='tit'>
                            (치과)병력과 구강건강인식도 관련 문항
                        </div>
                        <div className='tit overType'>
                            구강건강 습관(설탕섭취,구강위생,불소이용,흡연) 관련 문항
                        </div>
                        <div className='progress'>
                            <div className='progressBar'>
                                <div className='fill' style={{width:'10%'}}>
                                    <div className='badge'>{count}문항 남음</div>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="mobileInner">
                    <div className='quesItem'>
                        <div className='title'>
                            <span className='num'>01</span>
                            <div className='question'>최근 1년간 구강병 치료나 관리를 목적으로 치과 병(의)원에 가신 적이 있습니까?</div>
                        </div>

                        <div className='answer'>
                            <Radio
                                id={'id01-1'}
                                name={'q01'}
                                label={'예'}
                            />
                            <Radio
                                id={'id01-2'}
                                name={'q01'}
                                label={'아니오'}
                            />
                            <Radio
                                id={'id01-3'}
                                name={'q01'}
                                label={'모르겠다'}
                            />
                        </div>
                    </div>
                    <div className='quesItem'>
                        <div className='title'>
                            <span className='num'>##</span>
                            <div className='question'>어제 하루 동안 치아를 몇 번 닦으셨습니까?</div>
                        </div>

                        <div className='answer'>
                            <div className='selectWrap'>
                                <select>
                                    <option>0회</option>
                                    <option>0회</option>
                                    <option>0회</option>
                                    <option>0회</option>
                                    <option>0회</option>
                                </select>
                                <span>회</span>
                            </div>
                        </div>
                    </div>

                    <div className='quesItem free'>
                        <div className='title'>
                            <span className='num'></span>
                            <div className='question'>특별한 증상 혹은 치과의사에게 묻고 싶은 말을<br/> 자유롭게 쓰십시오.</div>
                        </div>

                        <div className='answer'>
                            <textarea className='field' placeholder='잇몸에서 피가 자주 나요.'></textarea>
                        </div>
                    </div>

                    <a href='#' className='scrollTop'></a>
                </div>
            </div>
            <Btn
                label={'저장'}
                className={'btn52 bottom ac'}
            />
        </div>
    )
}