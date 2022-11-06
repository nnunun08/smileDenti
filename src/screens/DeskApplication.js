import React from 'react'
import BtnSelectDesk from '../components/BtnSelectDesk'
import DeskHeader from '../components/DeskHeader'
import CheckBox from '../components/CheckBox'
import '../styles/screens/DeskWaitingList.css'

export default function DeskApplications() {


    return (
        <div className='DeskWait'>
            <DeskHeader 
                menu={'menu'}
                home={'home'}
                user={'김덴컴'}
                ac02={'ac'}
            />

            <div class="container">
                <div className='inner flex'>
                    <div class="cardWrap">
                        <div class={`cardAcc`}>
                            <div className='card search'>
                                <table>
                                    <colgroup>
                                        <col width='100px' />
                                        <col width='260px' />
                                        <col width='100px' />
                                        <col width='*' />
                                        <col width='100px' />
                                        <col width='*' />
                                    </colgroup>
                                    <tr>
                                        <th>검진일자</th>
                                        <td colSpan={5}>
                                            <input type='date' className='inputDate' />
                                            <button className='today'>오늘</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>청구상태</th>
                                        <td colSpan={5}>
                                            <BtnSelectDesk
                                                state={'ac'}
                                                label={'예약'}
                                            />
                                            <BtnSelectDesk
                                                state={'check ac'}
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
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>담당의사</th>
                                        <td>
                                            <select>
                                                <option>전체</option>
                                            </select>
                                        </td>
                                        <th>휴대번호</th>
                                        <td>
                                            <input type="text" />
                                        </td>
                                        <th>이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름</th>
                                        <td>
                                            <input type="text" />
                                        </td>
                                    </tr>
                                </table>
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
                            <button className='btn'>결과지 발송 <i></i></button>
                        </div>
                    </div>
                    <div class="tableWrap">
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
                    <div class="tableWrap tableScroll">
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
    )
}
