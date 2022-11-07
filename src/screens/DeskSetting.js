import React, {useState} from 'react'
import DeskHeader from '../components/DeskHeader'
import '../styles/screens/DeskSetting.css'
import Btn from '../components/Btn'
import Toggle from '../components/Toggle'

export default function DeskSetting() {

    const [edit, setEdit] = useState('')
    const editActive = () => {
        setEdit(edit === 'edit'?'':'edit')
    }

    return (
        <>
        <DeskHeader 
            menu={'menu'}
            // home={'home'}
            user={'김덴컴'}
            ac03={'ac'}
        />
        <div className='DeskSetting'>
            <div className='subMn'>
                <div class="inner">
                    <ul>
                        <li className='ac'>병원정보</li>
                        <li>상용구</li>
                        <li>계정관리</li>
                        <li>통합계정관리</li>
                    </ul>
                </div>
            </div>

            <div className='DeskSettingBody'>
                <div className='inner'>
                    {/* 병원정보 */}
                    <div className='card'>
                        <div className='flex-sb'>
                            <h1>병원 기본 정보</h1>
                            <div>
                                <Btn
                                    label={'수정'}
                                    className={'btn46 line'}
                                />
                                <Btn
                                    label={'저장'}
                                    className={'btn46 ac'}
                                />
                            </div>
                        </div>

                        <div className='form'>
                            <div className='flex-sb row'><h2>검진기관</h2><input disabled /></div>
                            <div className='flex-sb row'><h2>요양기관번호</h2><input /></div>
                            <div className='flex-sb row'><h2>전화번호</h2><input /></div>
                            <div className='flex-sb row' style={{marginBottom:'49px'}}>
                                <h2>주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소</h2>
                                <div className='fullRow'>
                                    <div style={{marginBottom:'12px'}}>
                                        <input style={{marginRight:'12px'}} />
                                        <Btn
                                            label={'검색'}
                                            className={'btn-sh45 ac'}
                                        />
                                        <Btn
                                            label={'검색'}
                                            className={'btn-sh45 line'}
                                        />
                                    </div>
                                    <div className='flex-cc'>
                                        <input />
                                        <input />
                                    </div>
                                </div>
                            </div>
                            <div className='flex-sb row'><h2>검진대상자 API</h2><input /></div>
                            <div className='flex-sb row'><h2>수검정보저장 API</h2><input /></div>
                            <div className='divider'></div>
                            <div className='flex-tsb'>
                                <h2>진료실 목록 설정</h2>
                                <div className='table'>
                                    <table>
                                        <colgroup>
                                            <col width={'70px'}></col>
                                            <col width={'*'}></col>
                                            <col width={'*'}></col>
                                            <col width={'120px'}></col>
                                        </colgroup>
                                        <tr>
                                            <th></th>
                                            <th>진료실 이름</th>
                                            <th>의사 배정</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>구강검진실1</td>
                                            <td>
                                                <select>
                                                    <option>손흥민</option>
                                                    <option>손흥민</option>
                                                    <option>손흥민</option>
                                                </select>
                                            </td>
                                            <td>
                                                <Btn
                                                    label={'삭제'}
                                                    className={'btn30'}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>구강검진실2</td>
                                            <td>
                                                <select>
                                                    <option>김민재</option>
                                                    <option>김민재</option>
                                                    <option>김민재</option>
                                                </select>
                                            </td>
                                            <td>
                                                <Btn
                                                    label={'삭제'}
                                                    className={'btn30'}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>
                                                <input placeholder='진료실 이름' />
                                            </td>
                                            <td>
                                                <select required>
                                                    <option value={''} disabled selected>선택</option>
                                                    <option>김민재</option>
                                                    <option>김민재</option>
                                                </select>
                                            </td>
                                            <td>
                                                <Btn
                                                    label={'추가'}
                                                    className={'btn30 ac'}
                                                />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className='flex-sb row'>
                                <h2> </h2>
                                <div className='flex-cc' style={{
                                        flex:'1 0 auto',
                                        marginTop:'10px',
                                        gap:'10px'
                                    }}>
                                    <button className='arrow'></button>
                                    <button className='arrow arrowDown'></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 상용구 */}
                    <div className='card'>
                        <div className='flex-sb'>
                            <h1>상용구 설정</h1>
                        </div>
                        <div className='taxtArea'>
                            <h3>기타부위 검사소견 상용구 편집</h3>
                            <textarea className='field' placeholder='추가하실 상용구를 입력해주세요.'></textarea>
                            <Btn
                                label={'추가'}
                                className={'btn38 ac'}
                            />
                        </div>

                        <div className='list'>
                            <div className='top'>
                                <h3>상용구 목록</h3>
                                <p>수정 버튼이나 더블클릭으로 수정가능합니다</p>
                            </div>
                            <ul>
                                <li>
                                    <span className={edit} onDoubleClick={editActive}>치아우식증(충치)이 의심되는 치아가 있습니다. <input type='text'/> </span>
                                    <div>
                                        <Btn label={'저장'} className={'btn30 ac'} />
                                        <Btn label={'수정'} className={'btn30 line'} onClick={editActive}/>
                                        <Btn label={'삭제'} className={'btn30'} />
                                    </div>
                                </li>
                                <li>
                                    <span>상실되어 회복이 필요한 치아가 있습니다.</span>
                                    <div>
                                        <Btn label={'수정'} className={'btn30 line'} />
                                        <Btn label={'삭제'} className={'btn30'} />
                                    </div>
                                </li>
                                <li>
                                    <span>치석이 있어 제거가 필요합니다.</span>
                                    <div>
                                        <Btn label={'수정'} className={'btn30 line'} />
                                        <Btn label={'삭제'} className={'btn30'} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* 계정관리 */}
                    <div className='card'>
                        <div className='flex-sb'>
                            <h1>계정정보</h1>
                            <Btn
                                label={'수정'}
                                className={'btn46 line'}
                            />
                        </div>

                        <div className='dual flex-tsb'>
                            <div className='left'>
                                <div class="flex-sb row">
                                    <h2>이름</h2>
                                    <input />
                                </div>
                                <div class="flex-sb row">
                                    <h2>주민번호</h2>
                                    <div className='flex-cc'>
                                        <input />
                                        &nbsp;&nbsp;-&nbsp;&nbsp;
                                        <input />
                                    </div>
                                </div>
                                <div class="flex-sb row">
                                    <h2>직종</h2>
                                    <select>
                                        <option>치과의사</option>
                                    </select>
                                </div>
                                <div class="flex-sb row">
                                    <h2>면허번호</h2>
                                    <input />
                                </div>
                                <div class="flex-sb row">
                                    <h2>휴대폰번호</h2>
                                    <input />
                                </div>
                                <div class="flex-sb row">
                                    <h2>이메일</h2>
                                    <input />
                                </div>
                                <div class="flex-tsb row addre">
                                    <h2>주소</h2>
                                    <div>
                                        <div className='flex-sb'>
                                            <input />
                                            <Btn
                                                label={'검색'}
                                                className={'btn-sh45'}
                                            />
                                        </div>
                                        <input style={{marginTop:'12px'}} />
                                        <input style={{marginTop:'12px'}} />
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='right'>
                                <div class="flex-sb row">
                                    <h2>입사일</h2>
                                    <input type='date' className='inputDate' />
                                </div>
                                <div class="flex-sb row">
                                    <h2>아이디</h2>
                                    <input />
                                </div>
                                <div class="flex-sb row">
                                    <h2>비밀번호</h2>
                                    <input />
                                </div>
                                <div class="flex-sb row">
                                    <h2>비밀번호 확인</h2>
                                    <input />
                                </div>
                                <div className='valid'>
                                    <div class="flex-sb">
                                        <h2><span>인증서 관리</span></h2>
                                        <Btn
                                            label={'인증서 등록'}
                                            className={'btn-sh34 ac'}
                                        />
                                    </div>
                                    <div class="flex-sb row">
                                        <h2>비밀번호</h2>
                                        <input type={'password'} />
                                    </div>
                                </div>
                                <div class="stamp">
                                    <h2>도장 이미지</h2>
                                    <div>
                                        <input className='insertStamp' type='file'/>
                                        {/* 도장이미지를 .imgWrap 안에 img 태그로 넣어주세요 */}
                                        <div class="imgWrap">
                                            <img src='../../../img/stamp_dummy.png' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 통합계정관리 */}
                    <div className='card topCard'>
                        <div className='flex-sb' style={{marginBottom:'20px',height:'46px'}}>
                            <h1>계정관리</h1>
                            <div>
                                <Btn
                                    label={'계정추가'}
                                    className={'btn46'}
                                />
                                <Btn
                                    label={'계정추가'}
                                    className={'btn46 ac'}
                                />
                            </div>
                        </div>
                        
                        <div class="tableWrap table02">
                            <table>
                                <colgroup>
                                    <col width='*' />
                                    <col width='*' />
                                    <col width='*' />
                                    <col width='*' />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>이름</th>
                                        <th>면허번호</th>
                                        <th>휴대폰번호</th>
                                        <th>생년월일</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="tableWrap tableScroll table02">
                            <table>
                            <colgroup>
                                    <col width='*' />
                                    <col width='*' />
                                    <col width='*' />
                                    <col width='*' />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td>가나다</td>
                                        <td>9015</td>
                                        <td>010-1234-5678</td>
                                        <td>1967.08.11</td>
                                    </tr>
                                    <tr className='ac'>
                                        <td>가나다</td>
                                        <td>9015</td>
                                        <td>010-1234-5678</td>
                                        <td>1967.08.11</td>
                                    </tr>
                                    <tr>
                                        <td>가나다</td>
                                        <td>9015</td>
                                        <td>010-1234-5678</td>
                                        <td>1967.08.11</td>
                                    </tr>
                                    <tr>
                                        <td>가나다</td>
                                        <td>9015</td>
                                        <td>010-1234-5678</td>
                                        <td>1967.08.11</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>

                    <div className='card' style={{paddingBottom:'62px'}}>
                        <div className='flex-sb'>
                            <h1>계정정보</h1>
                            <div>
                                <Btn
                                    label={'수정'}
                                    className={'btn46 line'}
                                />
                                <Btn
                                    label={'저장'}
                                    className={'btn46 ac'}
                                />
                            </div>
                        </div>

                        <div className='dual flex-tsb'>
                            <div className='left'>
                                <div class="flex-sb row">
                                    <h2>이름</h2>
                                    <input />
                                </div>
                                <div class="flex-sb row">
                                    <h2>주민번호</h2>
                                    <div className='flex-cc'>
                                        <input />
                                        &nbsp;&nbsp;-&nbsp;&nbsp;
                                        <input />
                                    </div>
                                </div>
                                <div class="flex-sb row">
                                    <h2>직종</h2>
                                    <select>
                                        <option>치과의사</option>
                                    </select>
                                </div>
                                <div class="flex-sb row">
                                    <h2>면허번호</h2>
                                    <input />
                                </div>
                                <div class="flex-sb row">
                                    <h2>휴대폰번호</h2>
                                    <input />
                                </div>
                                <div class="flex-sb row">
                                    <h2>이메일</h2>
                                    <input />
                                </div>
                                <div class="flex-tsb row addre">
                                    <h2>주소</h2>
                                    <div>
                                        <div className='flex-sb'>
                                            <input />
                                            <Btn
                                                label={'검색'}
                                                className={'btn-sh45'}
                                            />
                                        </div>
                                        <input style={{marginTop:'12px'}} />
                                        <input style={{marginTop:'12px'}} />
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='right'>
                                <div class="flex-sb row">
                                    <h2>입사일</h2>
                                    <input type='date' className='inputDate' />
                                </div>
                                <div class="flex-sb row">
                                    <h2>퇴사일</h2>
                                    <input type='date' className='inputDate' />
                                    <button className='btn-lock'>계정<br/>중지</button>
                                </div>
                                <div class="flex-sb row">
                                    <h2>아이디</h2>
                                    <input style={{width:'100%'}} />
                                </div>
                                <div>
                                    <div className='subText'>5~20자의 영문 소문자, 숫자만 사용 가능합니다.</div>
                                </div>
                                <div class="flex-sb row">
                                    <h2>비밀번호</h2>
                                    <input style={{width:'100%'}} />
                                </div>
                                <div>
                                    <div className='subText'>8~16자 영문 대 소문자, 숫자, 특수문자 조합으로 사용하세요 .</div>
                                </div>
                                <div class="flex-sb row">
                                    <h2>비밀번호 확인</h2>
                                    <input style={{width:'100%'}} />
                                </div>
                                <div>
                                    <div className='subText'>8~16자 영문 대 소문자, 숫자, 특수문자 조합으로 사용하세요 .</div>
                                </div>
                                
                                <div className='valid'>
                                    <div class="flex-sb">
                                        <h2><span>인증서 관리</span></h2>
                                        <Btn
                                            label={'인증서 등록'}
                                            className={'btn-sh34 ac'}
                                        />
                                    </div>
                                    <div class="flex-sb row">
                                        <h2>비밀번호</h2>
                                        <input type={'password'} />
                                    </div>
                                </div>
                                <div class="stamp">
                                    <h2>도장 이미지</h2>
                                    <div>
                                        <input className='insertStamp' type='file'/>
                                        {/* 도장이미지를 .imgWrap 안에 img 태그로 넣어주세요 */}
                                        <div class="imgWrap">
                                            <img src='../../../img/stamp_dummy.png' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='authority'>
                            <h2>사용권한</h2>
                            <ul>
                                <li>
                                    예약/검진리스트
                                    <Toggle />
                                </li>
                                <li>
                                환경설정-통합계정관리
                                    <Toggle />
                                </li>
                                <li>
                                청구리스트
                                    <Toggle />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        
            
        </div>
        </>
    )
}
