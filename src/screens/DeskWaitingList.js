import React, {useState} from 'react'
import BtnSelectDesk from '../components/BtnSelectDesk'
import DeskHeader from '../components/DeskHeader'
import CheckBox from '../components/CheckBox'
import Btn from '../components/Btn'
import '../styles/screens/DeskWaitingList.css'

export default function DeskWaitingList() {


    const [acc, setAcc] = useState('')
    const cardAcc = () => {
        setAcc(acc === 'hidden'?'':'hidden')
    }


    return (
        <>
        <DeskHeader 
            menu={'menu'}
            // home={'home'}
            user={'김덴컴'}
            ac01={'ac'}
        />

        <div className='DeskWait'>

            <div class="container">
                <div className='inner flex'>
                    <div class="cardWrap">
                        <div class={`cardAcc ${acc}`}>
                            <div className='card search'>
                                <div className='table'>
                                    <div className='tr'>
                                        <div className='th'>
                                            검진일자
                                        </div>
                                        <div className='td'>
                                            <input type='date' className='inputDate' />
                                            <Btn
                                                style={{fontWeight:'600',width:'48px'}}
                                                label={'오늘'}
                                                className={'btn-sh34 ac today'}
                                            />
                                        </div>
                                    </div>
                                    <div className='tr'>
                                        <div className='th'>
                                            청구상태
                                        </div>
                                        <div className='td'>
                                            <BtnSelectDesk
                                                label={'예약'}
                                            />
                                            <BtnSelectDesk
                                                label={'내원'}
                                            />
                                            <BtnSelectDesk
                                                label={'대기'}
                                            />
                                            <BtnSelectDesk
                                                label={'검진중'}
                                            />
                                            <BtnSelectDesk
                                                label={'완료'}
                                            />
                                        </div>
                                    </div>
                                    <div className='tr'>
                                        <div className='th'>
                                            담당의사
                                        </div>
                                        <div className='td'>
                                            <select>
                                                <option>전체</option>
                                            </select>
                                        </div>
                                        <div className='th'>
                                            휴대번호
                                        </div>
                                        <div className='td'>
                                            <input type="text" />
                                        </div>
                                        <div className='th'>
                                            이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름
                                        </div>
                                        <div className='td'>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>

                                <div className='btnWrap'>
                                    <button className='btn btn-df'>초기화</button>
                                    <button className='btn btn-ac'>조회</button>
                                </div>
                            </div>
                        </div>
                        <button className='arrowUp' onClick={cardAcc}></button>
                    </div>
                    
                    <div className='tablePanel'>
                        <div className='count'>
                            환자수&nbsp;
                            <b>14</b>
                            &nbsp;/&nbsp;
                            <span>20</span>
                        </div>
                        <div>
                            <button className='btn btn-send'>결과지 발송 <i></i></button>
                        </div>
                    </div>
                    <div class="tableWrap table01">
                        <table>
                            <colgroup>
                                <col width='50px' />
                                <col width='50px' />
                                <col width='110px' />
                                <col width='90px' />
                                <col width='50px' />
                                <col width='120px' />
                                <col width='*' />
                                <col width='110px' />
                                <col width='110px' />
                                <col width='80px' />
                                <col width='80px' />
                                <col width='80px' />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>
                                        <label className='checkBoxWrap' for="check">
                                            <CheckBox id='check' />
                                        </label>
                                    </th>
                                    <th>번호</th>
                                    <th>상태</th>
                                    <th>이름</th>
                                    <th>성별</th>
                                    <th>생년월일</th>
                                    <th>휴대번호</th>
                                    <th>공진 검진대상</th>
                                    <th>청구</th>
                                    <th>접수시간</th>
                                    <th>예약시간</th>
                                    <th>담당의사</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="tableWrap tableScroll table01">
                        <table>
                            <colgroup>
                                <col width='50px' />
                                <col width='50px' />
                                <col width='110px' />
                                <col width='90px' />
                                <col width='50px' />
                                <col width='120px' />
                                <col width='*' />
                                <col width='110px' />
                                <col width='110px' />
                                <col width='80px' />
                                <col width='80px' />
                                <col width='80px' />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        대기
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        불필요
                                    </td>
                                    <td>13:00</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr className='red'>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        대기
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        불필요
                                    </td>
                                    <td>13:00</td>
                                    <td>17:30</td>
                                    <td>이순재</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>20</td>
                                    <td>
                                        <select>
                                            <option>내원</option>
                                            <option>대기</option>
                                            <option>검진중</option>
                                            <option>완료</option>
                                        </select>
                                    </td>
                                    <td><a href>김희진</a></td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td>010-5578-5477</td>
                                    <td><b>대상</b></td>
                                    <td>
                                        <select>
                                            <option>-</option>
                                            <option>필요</option>
                                            <option>불필요</option>
                                        </select>
                                    </td>
                                    <td>13:00</td>
                                    <td>13:00</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        </div>
        </>
    )
}
