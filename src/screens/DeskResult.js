import React, {useState} from 'react'
import Btn from '../components/Btn'
import Tooth from '../components/Tooth'
import DeskHeader from '../components/DeskHeader'
import Radio from '../components/Radio'
import '../styles/screens/DeskResult.css'
import ChkScore from '../components/ChkScore'

export default function DeskResult() {
    


    return (
        <>
            <DeskHeader 
                menu={'menu'}
                // home={'home'}
                user={'김덴컴'}
                ac01={'ac'}
            />
            <div className={`DentistChart deskView`}>
                <div className='leftInfo'>
                    <div className='row'>
                        <h2>개인정보</h2>
                        <div className='tableWrap card'>
                            <table>
                                <tr>
                                    <th>이름</th>
                                    <td>{'홍길동'}</td>
                                </tr>
                                <tr>
                                    <th>주민번호</th>
                                    <td>{'880304-1******'}</td>
                                </tr>
                                <tr>
                                    <th>휴대번호</th>
                                    <td>{'010-1234-5678'}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className='row card2'>
                        <div className='tit'>(치과)병력과 구강건강인식도 관련 문항</div>
                        <ul>
                            {/* 2문항 케이스 */}
                            <li>
                                <p className='question'>1. 최근 1년 간 구강병 치료나 관리를 목적으로 치과병(의)원에 가신적이 있습니까?</p>
                                <div className='radioWrap'>
                                    <Radio
                                        checked={true}
                                        id={'id01'}
                                        name={'q1'}
                                        label={'예'}
                                    />
                                    <Radio
                                        id={'id02'}
                                        name={'q1'}
                                        label={'아니요'}
                                    />
                                </div>
                            </li>
                            {/* 3문항 케이스 */}
                            <li>
                                <p className='question'>2. 현재 당뇨병을 앓고 계십니까?</p>
                                <div className='radioWrap'>
                                    <Radio
                                        checked={true}
                                        id={'id03'}
                                        name={'q2'}
                                        label={'예'}
                                    />
                                    <Radio
                                        id={'id04'}
                                        name={'q2'}
                                        label={'아니요'}
                                    />
                                    <Radio
                                        id={'id05'}
                                        name={'q2'}
                                        label={'모르겠다'}
                                    />
                                </div>
                            </li>
                            {/* 5문항 케이스 */}
                            <li>
                                <p className='question'>7. 스스로 생각하실 때에 치아와 잇몸 등 귀하의 구강건강이 어떤 편이라고 생각하십니까?</p>
                                <div className='radioWrap'>
                                    <Radio
                                        id={'id06'}
                                        name={'q3'}
                                        label={'매우좋음'}
                                    />
                                    <Radio
                                        id={'id07'}
                                        name={'q3'}
                                        label={'좋음'}
                                    />
                                    <Radio
                                        id={'id08'}
                                        name={'q3'}
                                        label={'보통'}
                                    />
                                    <Radio
                                        id={'id09'}
                                        name={'q3'}
                                        label={'나쁨'}
                                    />
                                    <Radio
                                        id={'id10'}
                                        name={'q3'}
                                        label={'매우나쁨'}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className='part'>구강건강 습관(설탕섭취,구강위생,불소이용,흡연) 관련 문항</div>
                            </li>

                            {/* 텍스트 필드 케이스 */}
                            <li>
                                <p className='question'>7. 스스로 생각하실 때에 치아와 잇몸 등 귀하의 구강건강이 어떤 편이라고 생각하십니까?</p>
                                <div class="inputBx">
                                    <input />
                                    <label>회</label>
                                </div>
                            </li>
                        </ul>
                        
                    </div>

                </div>
                <div className='rightCon'>
                    <div className='rightTop'>
                        <h2>검진 결과</h2>
                        <div className='userInfo'>
                            <span>홍길동</span>
                            <span>만34세</span>
                            <span>남</span>
                        </div>
                    </div>

                    <div className='report card'>
                        <div className='left'>
                            <i></i>
                            <h3>나의 구강검진 <b>종합소견</b>은?</h3>
                            <ul>
                                <li className='ac'>정상A</li>
                                <li>정상B</li>
                                <li>주의</li>
                                <li>치료필요</li>
                            </ul>
                        </div>
                        <div className='right'>
                            <h5><b>홍길동</b>님은 다음 사항에 대해 <b>바로 조치</b>가 필요합니다.</h5>
                            <ul>
                                <li className='btnSel ac'>충치치료</li>
                                <li className='btnSel'>상실치수복</li>
                                <li className='btnSel'>스케일링</li>
                                <li className='btnSel'>마무증치료</li>
                                <li className='btnSel'>치주치료</li>
                                <li className='btnSel'>정밀검사(방사선검사)</li>
                                <li className='btnSel'>기타(사랑니 발치 등)</li>
                            </ul>
                            <h5><b>홍길동</b>님은 다음 사항에 대해 <b>적극적인 관리</b>가 필요합니다.</h5>
                            <ul>
                                <li className='btnSel ac'>
                                    정기적 구강검진<br/>
                                    (6개월 또는 1년주기)
                                </li>
                                <li className='btnSel'>치실 치간솔 사용</li>
                                <li className='btnSel'>
                                    치아 마모증 예방<br></br>
                                    (양치법 개선)
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className='resultWrap card'>
                        <div className='row card2'>
                            <table>
                                <tr>
                                    <td className='toothLT'>
                                        <div>
                                            <Tooth 
                                                toothNum='8'
                                                op='sel'/>
                                            <Tooth 
                                                toothNum='7'
                                                op='too1'/>
                                            <Tooth 
                                                toothNum='6'
                                                op='too3'/>
                                            <Tooth 
                                                toothNum='5'
                                                op='too2 too4'/>
                                            <Tooth 
                                                toothNum='4'
                                                op='too1 too4'
                                            />
                                            <Tooth toothNum='3'/>
                                            <Tooth toothNum='2'/>
                                            <Tooth toothNum='1'/>
                                        </div>
                                    </td>
                                    <td className='toothRT'>
                                        <div>
                                            <Tooth toothNum='1'/>
                                            <Tooth toothNum='2'/>
                                            <Tooth toothNum='3'/>
                                            <Tooth toothNum='4'/>
                                            <Tooth toothNum='5'/>
                                            <Tooth toothNum='6'/>
                                            <Tooth toothNum='7'/>
                                            <Tooth toothNum='8'/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='toothLB'>
                                        <div>
                                            <Tooth toothNum='8'/>
                                            <Tooth toothNum='7'/>
                                            <Tooth toothNum='6'/>
                                            <Tooth 
                                                toothNum='5'
                                                op='too1 too4'
                                            />
                                            <Tooth 
                                                toothNum='4'
                                                op='too2 too4'
                                            />
                                            <Tooth toothNum='3'/>
                                            
                                            <Tooth toothNum='2'/>
                                            <Tooth toothNum='1'/>
                                        </div>
                                    </td>
                                    <td className='toothRB'>
                                        <div>
                                            <Tooth toothNum='1'/>
                                            <Tooth toothNum='2'/>
                                            <Tooth toothNum='3'/>
                                            <Tooth 
                                                toothNum='4'
                                                op='too4'
                                            />
                                            <Tooth toothNum='5'/>
                                            <Tooth toothNum='6'/>
                                            <Tooth toothNum='7'/>
                                            <Tooth toothNum='8'/>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <div className='bottom'>
                                <div style={{margin:'0 auto'}}>
                                    <button className='btn-tooth btn-tooth01 ac'><i></i>우식치아</button>
                                    <button className='btn-tooth btn-tooth02 ac'><i></i>우식의심치아</button>
                                    <button className='btn-tooth btn-tooth03 ac'><i></i>상실치아</button>
                                    <button className='btn-tooth btn-tooth04 ac'><i></i>잇몸부종</button>
                                </div>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='radioWrap radioWrap01'>
                                <div className='top'>
                                    <div>
                                        <i></i>
                                        <h3>치아검사</h3>
                                        <span>치아우식증(충치)</span>
                                    </div>
                                    <em>치아갯수는 직접 입력이 가능합니다</em>
                                </div>
                                <ul className='body'>
                                    <li>
                                        우식치아
                                        <div>
                                            <div className='btnRadio on'>없음</div>
                                            <div className='btnRadio'>있음</div>
                                            <div className='counter'>
                                                <span className='minus'></span>
                                                <span className='num'>{'0'}</span>
                                                <span className='plus'></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        인접면 우식 의심치아
                                        <div>
                                            <div className='btnRadio on'>없음</div>
                                            <div className='btnRadio'>있음</div>
                                            <div className='counter'>
                                                <span className='minus'></span>
                                                <span className='num'>{'0'}</span>
                                                <span className='plus'></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        수복치아
                                        <div>
                                            <div className='btnRadio on'>없음</div>
                                            <div className='btnRadio'>있음</div>
                                            <div className='counter'>
                                                <span className='minus'></span>
                                                <span className='num'>{'0'}</span>
                                                <span className='plus'></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        상실치아
                                        <div>
                                            <div className='btnRadio on'>없음</div>
                                            <div className='btnRadio'>있음</div>
                                            <div className='counter'>
                                                <span className='minus'></span>
                                                <span className='num'>{'0'}</span>
                                                <span className='plus'></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className='radioWrap radioWrap02'>
                                <div className='top'>
                                    <div>
                                        <i></i>
                                        <h3>치주조직검사</h3>
                                        <span>치주질환(잇몸병)</span>
                                    </div>
                                </div>
                                <ul className='body'>
                                    <li>
                                        치은염증
                                        <div>
                                            <div className='btnRadio on'>없음</div>
                                            <div className='btnRadio'>경증</div>
                                            <div className='btnRadio'>중증</div>
                                        </div>
                                    </li>
                                    <li>
                                        치석
                                        <div>
                                            <div className='btnRadio on'>없음</div>
                                            <div className='btnRadio'>경증</div>
                                            <div className='btnRadio'>중증</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className='row card2 feedback'>
                            <div className='top'>
                                <div className='left'>
                                    <i></i>
                                    <h3>기타부위검사소견</h3>
                                </div>
                            </div>

                            <div className='mesgField'>
                                검사소견입력필드 검사소견입력필드검사소견입력필드검사소견입력필드검사소견입력필드 검사소견입력필드 검사소견입력필드검사소견입력필드검사소견입력필드검사소견입력필드검사소견입력필드 
                            </div>
                        </div>

                        <div className='row'>
                            <div className='score'>
                                <p>※ 아래의 검사는 만 40세만 해당됩니다.</p>
                                <div class="card">
                                    <div class="top">
                                        <h3>치면세균막검사</h3>
                                        <span>치아우식증(충치)</span>
                                        <span>|</span>
                                        <span>치주질환(잇몸병)</span>
                                    </div>
                                    <div className='body'>
                                        <ul className='left'>
                                            <li className={'ac'}>
                                                <div>
                                                    상악우측제1대구치
                                                    <span className='num'>{16}번</span>
                                                    세균막
                                                </div>
                                                <div>
                                                    <div className='value'>{1}</div>
                                                    <span>점</span>
                                                </div>
                                            </li>
                                            <ChkScore />
                                            <li>
                                                <div>
                                                    상악우측중절치
                                                    <span className='num'>{11}번</span>
                                                    세균막
                                                </div>
                                                <div>
                                                    <div className='value'>{2}</div>
                                                    <span>점</span>
                                                </div>
                                            </li>
                                            <ChkScore />
                                            <li>
                                                <div>
                                                    상악좌측제1대구치
                                                    <span className='num'>{26}번</span>
                                                    세균막
                                                </div>
                                                <div>
                                                    <div className='value'>{10}</div>
                                                    <span>점</span>
                                                </div>
                                            </li>
                                            <ChkScore />
                                            <li>
                                                <div>
                                                    하악좌측제1대구치
                                                    <span className='num'>{36}번</span>
                                                    세균막
                                                </div>
                                                <div>
                                                    <div className='value'>{20}</div>
                                                    <span>점</span>
                                                </div>
                                            </li>
                                            <ChkScore />
                                            <li>
                                                <div>
                                                    하악좌측중절치
                                                    <span className='num'>{31}번</span>
                                                    세균막
                                                </div>
                                                <div>
                                                    <div className='value'>{30}</div>
                                                    <span>점</span>
                                                </div>
                                            </li>
                                            <ChkScore />
                                            <li>
                                                <div>
                                                    하악우측제1대구치
                                                    <span className='num'>{46}번</span>
                                                    세균막
                                                </div>
                                                <div>
                                                    <div className='value'>{40}</div>
                                                    <span>점</span>
                                                </div>
                                            </li>
                                            <ChkScore />
                                            <li className='ave'>
                                                <div className='tit'>
                                                    평균
                                                </div>
                                                <div>
                                                    <div className='value'>{100}</div>
                                                    <span>점</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className='right'>
                                            <div className='standard'>
                                                <div className='h5'>
                                                    판정기준
                                                </div>
                                                <ul>
                                                    <li><b>양호</b> (1점 미만),</li>
                                                    <li><b>보통</b> (1~3점 미만),</li>
                                                    <li><b>불량</b> (3점 이상)</li>
                                                </ul>
                                            </div>
                                            <div className='table'>
                                                <div>평균점수 </div>
                                                <div>각치면의 점수합 / 평가치아수</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='btnWrap'>
                        <Btn
                            className={'btn46 line'}
                            label={'수정'}
                        />
                        <Btn
                            className={'btn46 line'}
                            label={'인쇄'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
