import React, {useState} from 'react'
import TabletHeader from '../components/TabletHeader'
import QnA from '../components/QnA'
import Btn from '../components/Btn'
import Tooth from '../components/Tooth'
import MikeToggle from '../components/MikeToggle'
import '../styles/screens/DentistChart.css'

export default function DentistChart() {
    const [ST,toggleST] = useState('')
    const sideTab = () => {
        toggleST(ST === 'fullPage'?'':'fullPage')
    }

    const [pop, setPop] = useState('')
    const openPop = () => {
        setPop(pop === 'ac'?'':'ac')
    }

    const [mike, setMike] = useState('')
    const mikeToggle = () => {
        setMike(mike === 'ac'?'':'ac')
    }
    const [mike2, setMike2] = useState('')
    const mikeToggle2 = () => {
        setMike2(mike2 === 'ac'?'':'ac')
    }
    return (
        <>
            <TabletHeader user='김덴컴'/>
            <div className={`DentistChart ${ST}`}>
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
                    <div className='row'>
                        <h2>문진정보</h2>
                        <div className='conWrap card'>
                            <div className='top'>
                                <ul>
                                    <li className='g'>안전</li>
                                    <li className='y'>주의</li>
                                    <li className='r'>위험</li>
                                </ul>
                                <svg width="71" height="29" viewBox="0 0 71 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.63867 13.1748H5.49805C5.46387 12.1006 4.47754 11.2998 3.10547 11.2998C1.7334 11.2998 0.668945 12.0859 0.673828 13.2822C0.668945 14.2393 1.3623 14.8057 2.4707 15.1279L3.33984 15.3623C4.08203 15.5723 4.73633 15.8359 4.73633 16.5244C4.73633 17.2959 4.00391 17.7988 3.02734 17.7939C2.1875 17.7988 1.4502 17.4229 1.37695 16.6318H0.478516C0.561523 17.8037 1.50391 18.5898 3.02734 18.5947C4.66797 18.5898 5.5957 17.6963 5.5957 16.5439C5.5957 15.2207 4.35059 14.7861 3.59375 14.5908L2.89062 14.3955C2.35352 14.2637 1.52832 13.9854 1.52344 13.2432C1.52832 12.5693 2.13867 12.0811 3.07617 12.0811C3.9209 12.0811 4.56543 12.4814 4.63867 13.1748ZM12.6797 13.624H13.5586C13.2949 12.1543 12.1377 11.2998 10.707 11.2998C8.89062 11.2998 7.57715 12.6963 7.58203 14.9326C7.57715 17.1689 8.89062 18.5654 10.707 18.5654C12.1426 18.5654 13.3047 17.6963 13.5586 16.251H12.6797C12.4697 17.2178 11.6396 17.7402 10.707 17.7451C9.42773 17.7402 8.43652 16.7539 8.43164 14.9326C8.43652 13.1064 9.42773 12.1201 10.707 12.1201C11.6396 12.1201 12.4746 12.6475 12.6797 13.624ZM15.7891 18.4678H16.668V15.7236H18.2012C18.2598 15.7236 18.3184 15.7236 18.3721 15.7188L19.8516 18.4678H20.877L19.2852 15.5576C20.1836 15.2451 20.6035 14.5127 20.6035 13.5752C20.6035 12.3154 19.8467 11.3975 18.1914 11.3975H15.7891V18.4678ZM16.668 14.9229V12.1787H18.1523C19.29 12.1787 19.7295 12.7305 19.7344 13.5752C19.7295 14.415 19.29 14.9229 18.1621 14.9229H16.668ZM28.8496 14.9326C28.8545 12.6963 27.5361 11.2998 25.7246 11.2998C23.9082 11.2998 22.5947 12.6963 22.5996 14.9326C22.5947 17.1689 23.9082 18.5654 25.7246 18.5654C27.5361 18.5654 28.8545 17.1689 28.8496 14.9326ZM23.4492 14.9326C23.4541 13.1064 24.4453 12.1201 25.7246 12.1201C27.0039 12.1201 27.9951 13.1064 28 14.9326C27.9951 16.7539 27.0039 17.7402 25.7246 17.7451C24.4453 17.7402 23.4541 16.7539 23.4492 14.9326ZM31.1387 18.4678H35.2988V17.6865H32.0176V11.3975H31.1387V18.4678ZM37.4707 18.4678H41.6309V17.6865H38.3496V11.3975H37.4707V18.4678Z" fill="#999999"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M61.6667 19.1341V9.80078C61.6667 7.22345 59.5773 5.13411 57 5.13411C54.4227 5.13411 52.3333 7.22345 52.3333 9.80078V19.1341C52.3333 21.7114 54.4227 23.8008 57 23.8008C59.5773 23.8008 61.6667 21.7114 61.6667 19.1341ZM57 2.80078C53.134 2.80078 50 5.93479 50 9.80078V19.1341C50 23.0001 53.134 26.1341 57 26.1341C60.866 26.1341 64 23.0001 64 19.1341V9.80078C64 5.93479 60.866 2.80078 57 2.80078Z" fill="#999999"/>
                                    <path d="M59.2333 14.5682L57 16.8015L54.7667 14.5682" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M57 16.8014V12.1348" stroke="#999999" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <div class="body">
                                <QnA 
                                    num={'01'} 
                                    question={'최근 1년간 구강병 치료나 관리를 목적으로 치과 병(의)원에 가신 적이 있습니까?'} 
                                    answer={'예'}
                                    state={''} />
                                <QnA 
                                    num={'02'} 
                                    question={'현재 당뇨병을 앓고 계십니까?'} 
                                    answer={'아니오'} 
                                    state={''}/>
                                <QnA 
                                    num={'03'} 
                                    question={'현재 당뇨병을 앓고 계십니까?'} 
                                    answer={'3회'} 
                                    state={'g'}/>
                                <QnA 
                                    num={'04'} 
                                    question={'현재 당뇨병을 앓고 계십니까?'} 
                                    answer={'2~3번'} 
                                    state={'y'}/>
                                <QnA 
                                    num={'05'} 
                                    question={'현재 당뇨병을 앓고 계십니까?'} 
                                    answer={'가끔했다'} 
                                    state={'r'}/>
                                <QnA 
                                    num={'01'} 
                                    question={'최근 1년간 구강병 치료나 관리를 목적으로 치과 병(의)원에 가신 적이 있습니까?'} 
                                    answer={'예'}
                                    state={''} />
                                <QnA 
                                    num={'02'} 
                                    question={'현재 당뇨병을 앓고 계십니까?'} 
                                    answer={'아니오'} 
                                    state={''}/>
                                <QnA 
                                    num={'03'} 
                                    question={'현재 당뇨병을 앓고 계십니까?'} 
                                    answer={'3회'} 
                                    state={'g'}/>
                                <QnA 
                                    num={'04'} 
                                    question={'현재 당뇨병을 앓고 계십니까?'} 
                                    answer={'2~3번'} 
                                    state={'y'}/>
                                <QnA 
                                    num={'05'} 
                                    question={'현재 당뇨병을 앓고 계십니까?'} 
                                    answer={'가끔했다'} 
                                    state={'r'}/>
                                <QnA 
                                    num={'01'} 
                                    question={'최근 1년간 구강병 치료나 관리를 목적으로 치과 병(의)원에 가신 적이 있습니까?'} 
                                    answer={'예'}
                                    state={''} />
                                <QnA 
                                    num={'02'} 
                                    question={'현재 당뇨병을 앓고 계십니까?'} 
                                    answer={'아니오'} 
                                    state={''}/>
                                <QnA 
                                    num={'03'} 
                                    question={'현재 당뇨병을 앓고 계십니까?'} 
                                    answer={'3회'} 
                                    state={'g'}/>
                                <QnA 
                                    num={'04'} 
                                    question={'현재 당뇨병을 앓고 계십니까?'} 
                                    answer={'2~3번'} 
                                    state={'y'}/>
                                <QnA 
                                    num={'05'} 
                                    question={'현재 당뇨병을 앓고 계십니까?'} 
                                    answer={'가끔했다'} 
                                    state={'r'}/>
                            </div>
                        </div>

                        <div className='etcMesg card'>
                            <div className='top'>
                                <div className='img'></div>
                                <p>특별한 증상 혹은 치과의사에게 묻고 싶은 말을 자유롭게 쓰십시오.</p>
                            </div>
                            <div className='body'>
                                잇몸에 피가 자주 나요.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightCon'>
                    <div className='sideTab' onClick={sideTab}></div>
                    <div className='rightTop'>
                        <h2>검진 결과</h2>
                        <div className='userInfo'>
                            <span>홍길동</span>
                            <span>만34세</span>
                            <span>남</span>
                        </div>
                    </div>
                    <div className='resultWrap card'>
                        <div className={`row card2 ${mike}`}>
                            <table>
                                <tr>
                                    <td className='toothLT'>
                                        <div>
                                            <Tooth 
                                                toothNum='8'
                                                op='sel'/>
                                            <Tooth 
                                                toothNum='7'
                                                op='too1 too2'/>
                                            <Tooth 
                                                toothNum='6'
                                                op='too2 too3'/>
                                            <Tooth 
                                                toothNum='5'
                                                op='too2 too3'/>
                                            <Tooth 
                                                toothNum='4'
                                                op='too3'/>
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
                                            <Tooth toothNum='5'/>
                                            <Tooth toothNum='4'/>
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
                                            <Tooth toothNum='4'/>
                                            <Tooth toothNum='5'/>
                                            <Tooth toothNum='6'/>
                                            <Tooth toothNum='7'/>
                                            <Tooth toothNum='8'/>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <div className='bottom'>
                                <div>
                                    <button className='btn-tooth btn-tooth01 ac'><i></i>우식치아</button>
                                    <button className='btn-tooth btn-tooth02 ac'><i></i>우식의심치아</button>
                                    <button className='btn-tooth btn-tooth03 ac'><i></i>상실치아</button>
                                    <button className='btn-tooth btn-tooth04'><i></i>잇몸부종</button>
                                </div>
                                <div>
                                    <MikeToggle name={"Voice On"} onClick={mikeToggle}/>
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
                        <div className={`row card2 feedback ${mike2}`}>
                            <div className='top'>
                                <div className='left'>
                                    <i></i>
                                    <h3>기타부위검사소견</h3>
                                    <span onClick={openPop}>
                                        상용구 추가
                                        <div className='plus'></div>
                                    </span>
                                </div>
                                <MikeToggle name={"Smile Dencomm"} onClick={mikeToggle2}/>
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
                                            <li>
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
                                            <div className='h5'>
                                                판정기준
                                            </div>
                                            <ul>
                                                <li><b>양호</b> (1점 미만),</li>
                                                <li><b>보통</b> (1~3점 미만),</li>
                                                <li><b>불량</b> (3점 이상)</li>
                                            </ul>
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

                    <div class={`modal ${pop}`}>
                        <div className='popup'>
                            <div className='top'>
                                <h3>상용구</h3>
                                <p>등록하실 문구를 선택해 주세요 (중복선택가능)</p>
                            </div>
                            <ul>
                                <li className='ac'>치아우식증(충치)이 의심되는 치아가 있습니다.</li>
                                <li className=''>상실되어 회복이 필요한 치아가 있습니다.</li>
                                <li className=''>상실되어 회복이 필요한 치아가 있습니다.</li>
                                <li className=''>상실되어 회복이 필요한 치아가 있습니다.</li>
                                <li className=''>상실되어 회복이 필요한 치아가 있습니다.</li>
                                <li className=''>상실되어 회복이 필요한 치아가 있습니다.</li>
                                <li className=''>상실되어 회복이 필요한 치아가 있습니다.</li>
                                <li className=''>상실되어 회복이 필요한 치아가 있습니다.</li>
                                <li className=''>상실되어 회복이 필요한 치아가 있습니다.</li>
                                <li className=''>상실되어 회복이 필요한 치아가 있습니다.</li>
                                <li className=''>상실되어 회복이 필요한 치아가 있습니다.</li>
                            </ul>
                            <button class="tabletBtn tabletBtn38 dis" onClick={openPop}>취소</button>
                            <button class="tabletBtn tabletBtn38 ac">저장</button>
                        </div>
                        <div className='dim'></div>
                    </div>


                    <div className='report card'>
                        <div className='left'>
                            <i></i>
                            <h3>나의 구강검진<br/><b>종합소견</b>은?</h3>
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

                    <div className='btnWrap'>
                        <Btn
                            className={'btn46 line'}
                            label={'대기전환'}
                        />
                        <Btn
                            className={'btn46 ac'}
                            label={'저장'}
                        />
                        <Btn
                            className={'btn46'}
                            label={'저장'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
