import React, { useState } from 'react'
import "../styles/components/Button.css"

export default function BtnSelectDesk({label, type}) {

    const [ck, setCk] = useState('')
    const click = () => {
        setCk(ck === 'check'?'':'check')
    }
    return (
        <button className={`BtnSelectDesk ${ck} ${type}`} onClick={click}>
            {label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7818 3.50675C14.0542 3.75442 14.0743 4.17606 13.8266 4.44849L7.15998 11.7818C7.0307 11.924 6.84635 12.0035 6.65421 11.9999C6.46207 11.9963 6.28082 11.91 6.15696 11.7631L2.15696 7.01796C1.91965 6.73645 1.95549 6.31587 2.237 6.07856C2.51851 5.84125 2.9391 5.87709 3.1764 6.1586L6.68561 10.3215L12.8401 3.5516C13.0877 3.27916 13.5094 3.25908 13.7818 3.50675Z" fill="#999999"/>
            </svg>
        </button>
    )
}
