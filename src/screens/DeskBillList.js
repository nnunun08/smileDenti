import React from 'react'
import BtnSelectDesk from '../components/BtnSelectDesk'
import DeskHeader from '../components/DeskHeader'
import CheckBox from '../components/CheckBox'
import '../styles/screens/DeskBillList.css'

export default function DeskBillList() {


    return (
        <>
        <DeskHeader 
            menu={'menu'}
            home={'home'}
            user={'김덴컴'}
            ac02={'ac'}
        />
        <div className='DeskWait'>
            

            <div class="container">
                <div className='inner flex'>
                    <div class="cardWrap">
                        <div class={`cardAcc normal`}>
                            <div className='card search'>
                                <div className='table'>
                                    <div className='tr'>
                                        <div className='th'>
                                            기간검색
                                        </div>
                                        <div className='td'>
                                            <input type='date' className='inputDate' />
                                            <span style={{margin:'0 5px'}}>~</span>
                                            <input type='date' className='inputDate' style={{marginRight:'12px'}}/>
                                            <input id="d01" name="date" type='radio' defaultChecked/><label for="d01">오늘</label>
                                            <input id="d02" name="date" type='radio'/><label for="d02">지난1주</label>
                                            <input id="d03" name="date" type='radio'/><label for="d03">이번달</label>
                                            <input id="d04" name="date" type='radio'/><label for="d04">올해</label>
                                        </div>
                                    </div>
                                    <div className='tr'>
                                        <div className='th'>
                                            청구상태
                                        </div>
                                        <div className='td' style={{flex:'0 0 500px'}}>
                                            <BtnSelectDesk
                                                label={'파일미생성'}
                                            />
                                            <BtnSelectDesk
                                                label={'오류발생'}
                                            />
                                            <BtnSelectDesk
                                                label={'파일생성 완료'}
                                            />
                                            <BtnSelectDesk
                                                label={'청구불필요'}
                                            />
                                        </div>
                                        <div className='th'>
                                            휴대번호
                                        </div>
                                        <div className='td'>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className='tr'>
                                        <div className='th'>
                                        결과지 발송여부
                                        </div>
                                        <div className='td' style={{flex:'0 0 500px'}}>
                                            <BtnSelectDesk
                                                label={'미발송'}
                                                type={'oran'}
                                            />
                                            <BtnSelectDesk
                                                label={'발송완료'}
                                                type={'oran'}
                                            />
                                            <BtnSelectDesk
                                                label={'발송실패'}
                                                type={'oran'}
                                            />
                                        </div>
                                        <div className='th'>
                                            휴대번호
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
                    </div>
                    
                    <div className='tablePanel bottom'>
                        <div className='table'>
                            <table>
                                <colgroup>
                                    <col width='160px'/>
                                    <col width='160px'/>
                                    <col width='204px'/>
                                </colgroup>
                                <tr><th>청구구분</th><th>건수</th><th>청구금액</th></tr>
                                <tr><td>공단</td><td>120</td><td><b>985,000</b></td></tr>
                                <tr><td>보건소</td><td>30</td><td><b>234,900</b></td></tr>
                            </table>
                        </div>
                        <div>
                            <button className='btn btn-sign'>일괄 전자서명 <i></i></button>
                            <button className='btn btn-down'>청구파일 다운로드 <i></i></button>
                            <button className='btn btn-send'>결과지 발송 <i></i></button>
                        </div>
                    </div>
                    <div class="tableWrap table02">
                        <table>
                            <colgroup>
                                <col width='50px' />
                                <col width='100px' />
                                <col width='80px' />
                                <col width='50px' />
                                <col width='120px' />
                                <col width='80px' />
                                <col width='*' />
                                <col width='100px' />
                                <col width='90px' />
                                <col width='*' />
                                <col width='*' />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>
                                        <label className='checkBoxWrap' for="check">
                                            <CheckBox id='check' />
                                        </label>
                                    </th>
                                    <th>검진일자</th>
                                    <th>이름</th>
                                    <th>성별</th>
                                    <th>생년월일</th>
                                    <th>담당의사</th>
                                    <th>휴대번호</th>
                                    <th>청구상태</th>
                                    <th>전자서명</th>
                                    <th>청구파일 생성여부</th>
                                    <th>결과지 발송여부</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="tableWrap tableScroll table02">
                        <table>
                            <colgroup>
                                <col width='50px' />
                                <col width='100px' />
                                <col width='80px' />
                                <col width='50px' />
                                <col width='120px' />
                                <col width='80px' />
                                <col width='*' />
                                <col width='100px' />
                                <col width='90px' />
                                <col width='*' />
                                <col width='*' />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>2022-08-31</td>
                                    <td>이승우</td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td><b>김민재</b></td>
                                    <td>010-5578-5477</td>
                                    <td>파일미생성</td>
                                    <td><span>서명완료</span></td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>2022-08-31</td>
                                    <td>이승우</td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td><b>김민재</b></td>
                                    <td>010-5578-5477</td>
                                    <td className='err'>청구불필요</td>
                                    <td>-</td>
                                    <td>2022.08.22 17:20</td>
                                    <td className='err'>실패</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='checkBoxWrap' for="check01">
                                            <CheckBox id="check01" />
                                        </label>
                                    </td>
                                    <td>2022-08-31</td>
                                    <td>이승우</td>
                                    <td>남</td>
                                    <td>2010-05-22</td>
                                    <td><b>김민재</b></td>
                                    <td>010-5578-5477</td>
                                    <td>파일생성 완료</td>
                                    <td>-</td>
                                    <td>2022.08.22 17:20</td>
                                    <td className='err'>실패</td>
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
