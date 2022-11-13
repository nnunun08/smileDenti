import React, {useState} from 'react'
import Btn from '../components/Btn'
import InputWrap from '../components/InputWrap'
import CheckBox from '../components/CheckBox'
import MobileNav from '../components/MobileNav'
import Radio from '../components/Radio'
import '../styles/screens/Tablet.css'

export default function Tablet02() {
    const [topContents,setTopContents] = useState('');
    const hiddenTopContents = () => {
        setTopContents('panelOn')
        window.scrollTo({top:0});
    }
    const showTopContents = () => {
        setTopContents('')
    }

    return(
        
        <div className={`tablet ${topContents}`}>
            <MobileNav label={'문진표 작성'} back={'off'} />
            <div className='form mobile'>
                <div className='row'>
                    <InputWrap
                        label='이름'
                        readOnly={true}
                        placeholder={''}
                    />
                </div>
                <div className='row'>
                    <InputWrap
                        label='생년월일'
                        readOnly={true}
                    />
                </div>
                <div className='row'>
                    <label className={`inputWrap`}>
                        <span>{'휴대번호'}</span>
                        <div className='flexBx'>
                            <input type='tel' className='' readOnly/>
                        </div>
                    </label>    
                </div>
                <div className='row'>
                    <label className={`inputWrap`}>
                        <span>{'인증번호'}</span>
                        <div className='flexBx'>
                            <input type='text' className='' placeholder={'-없이 숫자만 입력'}/>
                            <span className="userResetItem"></span>
                            <Btn
                                label={'확인'}
                                className={'btn-sh34 '}
                            />
                        </div>
                    </label>    
                </div>

                <div className='divider'></div>
                <div>
                    <h3>통보서 수신방법<span className='ess'>*</span></h3>
                </div>
                
                <div className='group'>
                    <label className="checkBoxWrap" htmlFor="sms">
                        <CheckBox
                            id='sms'
                            type=''
                        />
                        SMS 발송
                    </label>
                    <div className='formBx'><input type='tel' /></div>
                </div>
                <div className='group'>
                    <label className="checkBoxWrap" htmlFor="email">
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

            <div className='mobileCon mobile4'>
                <div className='fixedTop'>
                    <div className='fixedTopArrow' onClick={showTopContents}></div>
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
                                    <div className='badge'>{'##'}문항 남음</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button style={{position:'fixed', left:'0', top:'0', zIndex:'100', width:'100px',height:'100px'}} onClick={panelOn}>버튼</button> */}
                <div className="mobileInner">
                    <div className='quesItem'>
                        <div className='title'>
                            <span className='num'>01</span>
                            <div className='question'>최근 1년간 구강병 치료나 관리를 목적으로 치과 병(의)원에 가신 적이 있습니까?</div>
                        </div>

                        <div className='answer' onClick={hiddenTopContents}>
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
                className={'btn52 submitBtn'}
            />
        </div>
    )
}