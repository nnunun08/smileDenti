import React from 'react'
import Logo from './Logo'
import '../styles/components/DeskHeader.css'

export default function DeskHeader({user,menu,home,ac01,ac02,ac03}) {
    return (
        <div className='headerDesk'>
            <div class="inner">
                <div className='flex left'>
                    <Logo />
                    <ul className={`${menu}`}>
                        <a href='/desk/waitingList' className={ac01}>
                            <li>예약/검진 리스트</li>
                        </a>
                        <a href='/desk/bill' className={ac02}>
                            <li>청구리스트</li>
                        </a>
                        <a href='/desk/setting' className={ac03}>
                            <li>환경설정</li>
                        </a>
                    </ul>
                </div>
                <div className='flex'>
                    <a href className={`portal ${home}`}>
                        건강검진 업무포탈
                    </a>
                    <span>
                        <span className='name'>{user}</span>
                        &nbsp;님
                    </span>
                </div>
            </div>
        </div>
    )
}
