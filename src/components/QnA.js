import React from 'react'
import "../styles/components/QnA.css"

export default function QnA({num,question,answer,state=''}) {
    return (
        <ul class='qna_2'>
            <li>
                <div className="tit">
                    <span className='num'>{num}</span>
                    <span className='question'>{question}</span>
                </div>
                <div className={`answer ${state}`}>{answer}</div>
            </li>
        </ul>
    )
}
