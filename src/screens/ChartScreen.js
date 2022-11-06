import React from 'react'
import ChartToothImagesView from '../views/chart/ChartToothImagesView'
import '../styles/screens/ChartScreen.css'

export default function ChartScreen() {
    return (
        <div className='chart-screen__wrapper'>
            <h1>ChartScreen</h1>
            <ChartToothImagesView />
        </div>
    )
}
