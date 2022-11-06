import React, {useState} from 'react'
import Btn from '../components/Btn'
import Radio from '../components/Radio'
import CheckBox from '../components/CheckBox'
import '../styles/screens/DeskPrint.css'

export default function DeskPrint01() {

    return (
        <>
            <div className='DeskPrint01'>
                <h1>구강검진 문진표</h1>
                
                <table className='printTable'>
                    <colgroup>
                        <col width={'67px'}></col>
                        <col width={'*'}></col>
                        <col width={'105px'}></col>
                        <col width={'228px'}></col>
                        <col width={'83px'}></col>
                        <col width={'70px'}></col>
                        <col width={'*'}></col>
                    </colgroup>
                    <tr>
                        <th rowSpan={2}>수검자<br/>성명</th>
                        <td rowSpan={2}>{'홍길동'}</td>
                        <th rowSpan={2}>주민등록번호</th>
                        <td rowSpan={2}>{'980225-2333333'}</td>
                        <th rowSpan={2}>전화번호</th>
                        <th style={{textAlign:'center',background:'#fff'}}>자택</th>
                        <td>{}</td>
                    </tr>
                    <tr>
                        <th style={{textAlign:'center',background:'#fff'}}>핸드폰</th>
                        <td>{}</td>
                    </tr>
                    <tr>
                        <th rowSpan={2}>주소</th>
                        <td rowSpan={2} colSpan={2} >{}</td>
                        <th style={{textAlign:'center',background:'#fff'}}> E-mail</th>
                        <td colSpan={3}>{}</td>
                    </tr>
                    <tr>
                        <th style={{textAlign:'center',background:'#fff'}}>건강검진 결과통보서 수령방법</th>
                        <td colSpan={3}>
                            <label className='checkBoxWrap' for="post">
                                <CheckBox id='post' type='small'/>
                                우편
                            </label>
                            <label className='checkBoxWrap' for="email">
                                <CheckBox id='email' type='small' />
                                E-mail
                            </label>
                        </td>
                    </tr>
                </table>

                <div className='bodyCon'>
                    <div className='leftWrap'>
                        <div className='part'>(치과)병력과 구강건강인식도 관련 문항</div>
                        <ul>
                            <li>
                                <p className='question'>
                                1. 최근 1년 간 구강병 치료나 관리를 목적으로 치과병(의)원에 가신적이 있습니까?
                                </p>
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
                            <li>
                                <p className='question'>
                                2. 현재 당뇨병을 앓고 계십니까?
                                </p>
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
                            <li>
                                <p className='question'>
                                3. 현재 심혈관질환을 앓고 계십니까?
                                </p>
                                <div className='radioWrap'>
                                    <Radio
                                        checked={true}
                                        id={'id06'}
                                        name={'q3'}
                                        label={'예'}
                                    />
                                    <Radio
                                        id={'id07'}
                                        name={'q3'}
                                        label={'아니요'}
                                    />
                                    <Radio
                                        id={'id08'}
                                        name={'q3'}
                                        label={'모르겠다'}
                                    />
                                </div>
                            </li>
                            <li>
                                <p className='question'>
                                4. 최근 3개월 동안, 치아나 잇몸 문제로 혹은 틀니 때문에 음식을 씹는 데에 불편감을 느끼신 적이 있습니까?
                                </p>
                                <div className='radioWrap'>
                                    <Radio
                                        checked={true}
                                        id={'id09'}
                                        name={'q4'}
                                        label={'예'}
                                    />
                                    <Radio
                                        id={'id10'}
                                        name={'q4'}
                                        label={'아니요'}
                                    />
                                    <Radio
                                        id={'id11'}
                                        name={'q4'}
                                        label={'모르겠다'}
                                    />
                                </div>
                            </li>
                            <li>
                                <p className='question'>
                                5. 최근 3개월 동안, 치아가 쑤시거나 욱신거리거나 아픈 적 있습니까?
                                </p>
                                <div className='radioWrap'>
                                    <Radio
                                        checked={true}
                                        id={'id12'}
                                        name={'q5'}
                                        label={'예'}
                                    />
                                    <Radio
                                        id={'id13'}
                                        name={'q5'}
                                        label={'아니요'}
                                    />
                                </div>
                            </li>
                            <li>
                                <p className='question'>
                                6. 최근 3개월 동안, 잇몸이 아프거나 피가 난 적이 있습니까?
                                </p>
                                <div className='radioWrap'>
                                    <Radio
                                        checked={true}
                                        id={'id14'}
                                        name={'q6'}
                                        label={'예'}
                                    />
                                    <Radio
                                        id={'id15'}
                                        name={'q6'}
                                        label={'아니요'}
                                    />
                                </div>
                            </li>
                            <li>
                                <p className='question'>
                                7. 스스로 생각하실 때에 치아와 잇몸 등 귀하의 구강건강이 어떤 편이라고 생각하십니까?
                                </p>
                                <div className='radioWrap'>
                                    <Radio
                                        checked={true}
                                        id={'id16-1'}
                                        name={'q7'}
                                        label={'매우좋음'}
                                    />
                                    <Radio
                                        id={'id16-2'}
                                        name={'q7'}
                                        label={'좋음'}
                                    />
                                    <Radio
                                        checked={true}
                                        id={'id16-3'}
                                        name={'q7'}
                                        label={'보통'}
                                    />
                                    <Radio
                                        checked={true}
                                        id={'id16-4'}
                                        name={'q7'}
                                        label={'나쁨'}
                                    />
                                    <Radio
                                        checked={true}
                                        id={'id16-5'}
                                        name={'q7'}
                                        label={'매우나쁨'}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className='part'>(치과)병력과 구강건강인식도 관련 문항</div>
                            </li>
                            <li>
                                <p className='question'>
                                8. 치아 닦는 방법을 치과나 보건소에서 배운 적이 있습니까?
                                </p>
                                <div className='radioWrap'>
                                    <Radio
                                        checked={true}
                                        id={'id18'}
                                        name={'q8'}
                                        label={'예'}
                                    />
                                    <Radio
                                        id={'id19'}
                                        name={'q8'}
                                        label={'아니요'}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='rightWrap'>
                        <ul>
                            <li>
                                <p className='question'>
                                9. 어제 하루 동안 치아를 몇 번 닦으셨습니까?
                                </p>
                                <div class="inputBx">
                                    <input />
                                    <label>회</label>
                                </div>
                            </li>
                            <li>
                                <p className='question'>
                                10. 최근 일주일 동안, 잠자기 직전에 칫솔질을 얼마나 자주 하였습니까?
                                </p>
                                <div className='radioWrap col-2'>
                                    <Radio
                                        checked={true}
                                        id={'id21'}
                                        name={'q10'}
                                        label={'항상 했다 (7회)'}
                                    />
                                    <Radio
                                        id={'id22'}
                                        name={'q10'}
                                        label={'대부분 했다 (4~6회)'}
                                    />
                                    <Radio
                                        id={'id23'}
                                        name={'q10'}
                                        label={'가끔 했다 (1~3회)'}
                                    />
                                    <Radio
                                        id={'id24'}
                                        name={'q10'}
                                        label={'전혀 하지 않았다 (0회)'}
                                    />
                                </div>
                            </li>
                            <li>
                                <p className='question'>
                                11. 최근 일주일 동안, 치아를 닦을 때 치실 혹은 치간솔을 얼마나 자주 이용하였습니까?
                                </p>
                                <div className='radioWrap col-2'>
                                    <Radio
                                        checked={true}
                                        id={'id25'}
                                        name={'q11'}
                                        label={'항상 했다'}
                                    />
                                    <Radio
                                        id={'id26'}
                                        name={'q11'}
                                        label={'대부분 했다 '}
                                    />
                                    <Radio
                                        id={'id27'}
                                        name={'q11'}
                                        label={'가끔 했다 '}
                                    />
                                    <Radio
                                        id={'id28'}
                                        name={'q11'}
                                        label={'전혀 하지 않았다 '}
                                    />
                                    <Radio
                                        id={'id29'}
                                        name={'q11'}
                                        label={'치실 혹은 치간솔이 무엇인지 모른다'}
                                    />
                                </div>
                            </li>
                            <li>
                                <p className='question'>
                                12. 현재 사용 중인 치약에 불소가 들어 있습니까?
                                </p>
                                <div className='radioWrap'>
                                    <Radio
                                        checked={true}
                                        id={'id30'}
                                        name={'q12'}
                                        label={'예'}
                                    />
                                    <Radio
                                        id={'id31'}
                                        name={'q12'}
                                        label={'아니요'}
                                    />
                                    <Radio
                                        id={'id32'}
                                        name={'q12'}
                                        label={'모르겠다'}
                                    />
                                </div>
                            </li>
                            <li>
                                <p className='question'>
                                13. 하루에 과자, 사탕,케이크 등 달거나 치아에 끈끈하게 달라붙는 간식을 얼마나 먹습니까?
                                </p>
                                <div className='radioWrap col-2'>
                                    <Radio
                                        checked={true}
                                        id={'id33'}
                                        name={'q13'}
                                        label={'먹지 않음'}
                                    />
                                    <Radio
                                        id={'id34'}
                                        name={'q13'}
                                        label={'1번'}
                                    />
                                    <Radio
                                        id={'id35'}
                                        name={'q13'}
                                        label={'2~3번'}
                                    />
                                    <Radio
                                        id={'id36'}
                                        name={'q13'}
                                        label={'4번 이상'}
                                    />
                                    <Radio
                                        id={'id37'}
                                        name={'q13'}
                                        label={'모르겠다'}
                                    />
                                </div>
                            </li>
                            <li>
                                <p className='question'>
                                14. 하루에 탄산 및 청량음료(스포츠 음료, 이온 음료, 과일 주스 포함)을 얼마나 마십니까?
                                </p>
                                <div className='radioWrap col-2'>
                                    <Radio
                                        checked={true}
                                        id={'id38'}
                                        name={'q14'}
                                        label={'먹지 않음'}
                                    />
                                    <Radio
                                        id={'id39'}
                                        name={'q14'}
                                        label={'1번'}
                                    />
                                    <Radio
                                        id={'id40'}
                                        name={'q14'}
                                        label={'2~3번'}
                                    />
                                    <Radio
                                        id={'id41'}
                                        name={'q14'}
                                        label={'4번 이상'}
                                    />
                                    <Radio
                                        id={'id42'}
                                        name={'q14'}
                                        label={'모르겠다'}
                                    />
                                </div>
                            </li>
                            <li>
                                <p className='question'>
                                15. 담배를 피우십니까?
                                </p>
                                <div className='radioWrap col-2'>
                                    <Radio
                                        checked={true}
                                        id={'id43'}
                                        name={'q15'}
                                        label={'전혀 피운 적이 없다'}
                                    />
                                    <Radio
                                        id={'id44'}
                                        name={'q15'}
                                        label={'현재 피우고 있다'}
                                    />
                                    <Radio
                                        id={'id45'}
                                        name={'q15'}
                                        label={'이전에 피웠으나 끊었다'}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='freeMsg'>
                    <p>※ 특별한 증상 혹은 치과의사에게 묻고 싶은 말을 자유롭게 쓰십시오.</p>
                    <textarea className='field' placeholder='예시) 잇몸에 피가 자주 나요.'></textarea>
                </div>
            </div>
        </>
    )
}
