import React from 'react'
import '../styles/screens/DeskSummary.css'

export default function DeskSummary() {
    return (
        <div className='deskSummary'>
            <h1>덴컴 치과의원 &nbsp;<b>진료대기현황</b></h1>

            <div className='leftCon'>
                <div className='room room01'>
                    <h2>진료실1</h2>
                    <div className='patient'>손 O 민</div>
                </div>
                <div className='room room02'>
                    <h2>진료실2</h2>
                    <div className='patient'>박 한 O 민</div>
                </div>
            </div>


            <div className='rightCon'>
                <div className='date'>
                    <b className='yymmdd'>2022-03-21(수)</b>
                    <div className='divider'></div>
                    <span className='time'>오후 04:24:30</span>
                </div>    

                <div className='panel'>
                    <div className='tit'>
                        <h4>대기</h4>
                        <span><b>7</b>명</span>
                    </div>
                    <ul>
                        <li>
                            <span className='num'>01</span>
                            <span className='name'>김 O 가</span>
                        </li>
                        <li>
                            <span className='num'>01</span>
                            <span className='name'>김 O 가</span>
                        </li>
                        <li>
                            <span className='num'>01</span>
                            <span className='name'>김 O 가</span>
                        </li>
                        <li>
                            <span className='num'>01</span>
                            <span className='name'>김 O 가</span>
                        </li>
                        <li>
                            <span className='num'>01</span>
                            <span className='name'>김 O 가</span>
                        </li>
                        <li>
                            <span className='num'>01</span>
                            <span className='name'>김 O 가</span>
                        </li>
                        <li>
                            <span className='num'>01</span>
                            <span className='name'>김 O 가</span>
                        </li>
                    </ul>
                </div>
            </div> 

            
        
        
        </div>
    )
}
