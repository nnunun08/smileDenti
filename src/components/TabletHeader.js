import React from 'react'
import Logo from '../components/Logo'
import '../styles/components/TabletHeader.css'

export default function TabletHeader({user,menu,home,type}) {
    return (
        <div className={`header ${type}`}>
            <div className='flex left'>
                <Logo />
                <ul className={`${menu}`}>
                    <a href className='ac'>
                        <li>예약/검진 리스트</li>
                    </a>
                    <a href>
                        <li>청구리스트</li>
                    </a>
                    <a href>
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
    )
}
