import React from 'react'
import HomeMainView from '../views/home/HomeMainView'
import '../styles/screens/HomeScreen.css'

export default function HomeScreen() {
    return (
        <div className='home-screen__wrapper'>
            <h1>HomeScreen</h1>
            <HomeMainView />
            <a href="/chart">ChartScreen</a>
            <hr/>
            <h3>DENTIST</h3>
            <a href="/dentist/login">DentistLoginScreen</a>
            <a href="/dentist/waiting-list">DentistWaitingListScreen</a>
            <a href="/dentist/chart">DentistChart</a>
            <hr/>
            <h3>DESK</h3>
            <a href="/desk/login">DeskLogin</a>
            <a href="/desk/waitingList">DeskWaitingList</a>
            <a href="/desk/bill">DeskBillList</a>
            <a href="/desk/summary">DeskSummary</a>
            <a href="/desk/setting">DeskSetting</a>
            <a href="/desk/result">DeskResult</a>
            <a href="/desk/print01">DeskPrint01</a>
            <a href="/desk/print02">DeskPrint02</a>
            <a href="/desk/tabletLogin">tabletLogin</a>
            <a href="/desk/tabletReception">TabletReception</a>
            <a href="/desk/Tablet01">Tablet01</a>
            <a href="/desk/Tablet02">Tablet02</a>
            <a href="/desk/Tablet03">Tablet03</a>
            <a href="/desk/DeskCall">DeskCall</a>
            <hr/>
            <h3>MOBILE</h3>
            <a href="/mobile/Mobile01">Mobile01</a>
            <a href="/mobile/Mobile02">Mobile02</a>
            <a href="/mobile/Mobile03">Mobile03</a>
            <a href="/mobile/Mobile04">Mobile04</a>
            <a href="/mobile/Mobile05">Mobile05</a>
        </div>
    )
}
